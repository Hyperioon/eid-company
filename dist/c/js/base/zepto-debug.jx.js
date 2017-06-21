define("xg/eid-company/1.0.0/c/js/base/zepto-debug.jx", [], function(require, exports, module) {
    (function($, undefined) {
        var prefix = "",
            eventPrefix, vendors = {
                Webkit: "webkit",
                Moz: "",
                O: "o"
            },
            testEl = document.createElement("div"),
            supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
            transform, transitionProperty, transitionDuration, transitionTiming, transitionDelay, animationName, animationDuration, animationTiming, animationDelay, cssReset = {};

        function dasherize(str) {
            return str.replace(/([A-Z])/g, "-$1").toLowerCase()
        }

        function normalizeEvent(name) {
            return eventPrefix ? eventPrefix + name : name.toLowerCase()
        }
        if (testEl.style.transform === undefined) $.each(vendors, function(vendor, event) {
            if (testEl.style[vendor + "TransitionProperty"] !== undefined) {
                prefix = "-" + vendor.toLowerCase() + "-";
                eventPrefix = event;
                return false
            }
        });
        transform = prefix + "transform";
        cssReset[transitionProperty = prefix + "transition-property"] = cssReset[transitionDuration = prefix + "transition-duration"] = cssReset[transitionDelay = prefix + "transition-delay"] = cssReset[transitionTiming = prefix + "transition-timing-function"] = cssReset[animationName = prefix + "animation-name"] = cssReset[animationDuration = prefix + "animation-duration"] = cssReset[animationDelay = prefix + "animation-delay"] = cssReset[animationTiming = prefix + "animation-timing-function"] = "";
        $.fx = {
            off: eventPrefix === undefined && testEl.style.transitionProperty === undefined,
            speeds: {
                _default: 400,
                fast: 200,
                slow: 600
            },
            cssPrefix: prefix,
            transitionEnd: normalizeEvent("TransitionEnd"),
            animationEnd: normalizeEvent("AnimationEnd")
        };
        $.fn.animate = function(properties, duration, ease, callback, delay) {
            if ($.isFunction(duration)) callback = duration, ease = undefined, duration = undefined;
            if ($.isFunction(ease)) callback = ease, ease = undefined;
            if ($.isPlainObject(duration)) ease = duration.easing, callback = duration.complete, delay = duration.delay, duration = duration.duration;
            if (duration) duration = (typeof duration == "number" ? duration : $.fx.speeds[duration] || $.fx.speeds._default) / 1e3;
            if (delay) delay = parseFloat(delay) / 1e3;
            return this.anim(properties, duration, ease, callback, delay)
        };
        $.fn.anim = function(properties, duration, ease, callback, delay) {
            var key, cssValues = {},
                cssProperties, transforms = "",
                that = this,
                wrappedCallback, endEvent = $.fx.transitionEnd,
                fired = false;
            if (duration === undefined) duration = $.fx.speeds._default / 1e3;
            if (delay === undefined) delay = 0;
            if ($.fx.off) duration = 0;
            if (typeof properties == "string") {
                cssValues[animationName] = properties;
                cssValues[animationDuration] = duration + "s";
                cssValues[animationDelay] = delay + "s";
                cssValues[animationTiming] = ease || "linear";
                endEvent = $.fx.animationEnd
            } else {
                cssProperties = [];
                for (key in properties)
                    if (supportedTransforms.test(key)) transforms += key + "(" + properties[key] + ") ";
                    else cssValues[key] = properties[key], cssProperties.push(dasherize(key));
                if (transforms) cssValues[transform] = transforms, cssProperties.push(transform);
                if (duration > 0 && typeof properties === "object") {
                    cssValues[transitionProperty] = cssProperties.join(", ");
                    cssValues[transitionDuration] = duration + "s";
                    cssValues[transitionDelay] = delay + "s";
                    cssValues[transitionTiming] = ease || "linear"
                }
            }
            wrappedCallback = function(event) {
                if (typeof event !== "undefined") {
                    if (event.target !== event.currentTarget) return;
                    $(event.target).unbind(endEvent, wrappedCallback)
                } else $(this).unbind(endEvent, wrappedCallback);
                fired = true;
                $(this).css(cssReset);
                callback && callback.call(this)
            };
            if (duration > 0) {
                this.bind(endEvent, wrappedCallback);
                setTimeout(function() {
                    if (fired) return;
                    wrappedCallback.call(that)
                }, (duration + delay) * 1e3 + 25)
            }
            this.size() && this.get(0).clientLeft;
            this.css(cssValues);
            if (duration <= 0) setTimeout(function() {
                that.each(function() {
                    wrappedCallback.call(this)
                })
            }, 0);
            return this
        };
        testEl = null
    })(Zepto)
});