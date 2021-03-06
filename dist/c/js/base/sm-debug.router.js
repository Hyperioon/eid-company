define("xg/eid-company/1.0.0/c/js/base/sm-debug.router", [], function(require, exports, module) {
    + function($) {
        "use strict";
        if (!window.CustomEvent) {
            window.CustomEvent = function(type, config) {
                config = config || {
                    bubbles: false,
                    cancelable: false,
                    detail: undefined
                };
                var e = document.createEvent("CustomEvent");
                e.initCustomEvent(type, config.bubbles, config.cancelable, config.detail);
                return e
            };
            window.CustomEvent.prototype = window.Event.prototype
        }
        var EVENTS = {
            pageLoadStart: "pageLoadStart",
            pageLoadCancel: "pageLoadCancel",
            pageLoadError: "pageLoadError",
            pageLoadComplete: "pageLoadComplete",
            pageAnimationStart: "pageAnimationStart",
            pageAnimationEnd: "pageAnimationEnd",
            beforePageRemove: "beforePageRemove",
            pageRemoved: "pageRemoved",
            beforePageSwitch: "beforePageSwitch",
            pageInit: "pageInitInternal"
        };
        var Util = {
            getUrlFragment: function(url) {
                var hashIndex = url.indexOf("#");
                return hashIndex === -1 ? "" : url.slice(hashIndex + 1)
            },
            getAbsoluteUrl: function(url) {
                var link = document.createElement("a");
                link.setAttribute("href", url);
                var absoluteUrl = link.href;
                link = null;
                return absoluteUrl
            },
            getBaseUrl: function(url) {
                var hashIndex = url.indexOf("#");
                return hashIndex === -1 ? url.slice(0) : url.slice(0, hashIndex)
            },
            toUrlObject: function(url) {
                var fullUrl = this.getAbsoluteUrl(url),
                    baseUrl = this.getBaseUrl(fullUrl),
                    fragment = this.getUrlFragment(url);
                return {
                    base: baseUrl,
                    full: fullUrl,
                    original: url,
                    fragment: fragment
                }
            },
            supportStorage: function() {
                var mod = "sm.router.storage.ability";
                try {
                    sessionStorage.setItem(mod, mod);
                    sessionStorage.removeItem(mod);
                    return true
                } catch (e) {
                    return false
                }
            }
        };
        var routerConfig = {
            sectionGroupClass: "page-group",
            curPageClass: "page-current",
            visiblePageClass: "page-visible",
            pageClass: "page"
        };
        var DIRECTION = {
            leftToRight: "from-left-to-right",
            rightToLeft: "from-right-to-left"
        };
        var theHistory = window.history;
        var Router = function() {
            this.sessionNames = {
                currentState: "sm.router.currentState",
                maxStateId: "sm.router.maxStateId"
            };
            this._init();
            this.xhr = null;
            window.addEventListener("popstate", this._onPopState.bind(this))
        };
        Router.prototype._init = function() {
            this.$view = $("body");
            this.cache = {};
            var $doc = $(document);
            var currentUrl = location.href;
            this._saveDocumentIntoCache($doc, currentUrl);
            var curPageId;
            var currentUrlObj = Util.toUrlObject(currentUrl);
            var $allSection = $doc.find("." + routerConfig.pageClass);
            var $visibleSection = $doc.find("." + routerConfig.curPageClass);
            var $curVisibleSection = $visibleSection.eq(0);
            var $hashSection;
            if (currentUrlObj.fragment) {
                $hashSection = $doc.find("#" + currentUrlObj.fragment)
            }
            if ($hashSection && $hashSection.length) {
                $visibleSection = $hashSection.eq(0)
            } else if (!$visibleSection.length) {
                $visibleSection = $allSection.eq(0)
            }
            if (!$visibleSection.attr("id")) {
                $visibleSection.attr("id", this._generateRandomId())
            }
            if ($curVisibleSection.length && $curVisibleSection.attr("id") !== $visibleSection.attr("id")) {
                $curVisibleSection.removeClass(routerConfig.curPageClass);
                $visibleSection.addClass(routerConfig.curPageClass)
            } else {
                $visibleSection.addClass(routerConfig.curPageClass)
            }
            curPageId = $visibleSection.attr("id");
            if (theHistory.state === null) {
                var curState = {
                    id: this._getNextStateId(),
                    url: Util.toUrlObject(currentUrl),
                    pageId: curPageId
                };
                theHistory.replaceState(curState, "", currentUrl);
                this._saveAsCurrentState(curState);
                this._incMaxStateId()
            }
        };
        Router.prototype.load = function(url, ignoreCache) {
            if (ignoreCache === undefined) {
                ignoreCache = false
            }
            if (this._isTheSameDocument(location.href, url)) {
                this._switchToSection(Util.getUrlFragment(url))
            } else {
                this._saveDocumentIntoCache($(document), location.href);
                this._switchToDocument(url, ignoreCache)
            }
        };
        Router.prototype.forward = function() {
            theHistory.forward()
        };
        Router.prototype.back = function() {
            theHistory.back()
        };
        Router.prototype.loadPage = Router.prototype.load;
        Router.prototype._switchToSection = function(sectionId) {
            if (!sectionId) {
                return
            }
            var $curPage = this._getCurrentSection(),
                $newPage = $("#" + sectionId);
            if ($curPage === $newPage) {
                return
            }
            this._animateSection($curPage, $newPage, DIRECTION.rightToLeft);
            this._pushNewState("#" + sectionId, sectionId)
        };
        Router.prototype._switchToDocument = function(url, ignoreCache, isPushState, direction) {
            var baseUrl = Util.toUrlObject(url).base;
            if (ignoreCache) {
                delete this.cache[baseUrl]
            }
            var cacheDocument = this.cache[baseUrl];
            var context = this;
            if (cacheDocument) {
                this._doSwitchDocument(url, isPushState, direction)
            } else {
                this._loadDocument(url, {
                    success: function($doc) {
                        try {
                            context._parseDocument(url, $doc);
                            context._doSwitchDocument(url, isPushState, direction)
                        } catch (e) {
                            location.href = url
                        }
                    },
                    error: function() {
                        location.href = url
                    }
                })
            }
        };
        Router.prototype._doSwitchDocument = function(url, isPushState, direction) {
            if (typeof isPushState === "undefined") {
                isPushState = true
            }
            var urlObj = Util.toUrlObject(url);
            var $currentDoc = this.$view.find("." + routerConfig.sectionGroupClass);
            var $newDoc = $($("<div></div>").append(this.cache[urlObj.base].$content).html());
            var $allSection = $newDoc.find("." + routerConfig.pageClass);
            var $visibleSection = $newDoc.find("." + routerConfig.curPageClass);
            var $hashSection;
            if (urlObj.fragment) {
                $hashSection = $newDoc.find("#" + urlObj.fragment)
            }
            if ($hashSection && $hashSection.length) {
                $visibleSection = $hashSection.eq(0)
            } else if (!$visibleSection.length) {
                $visibleSection = $allSection.eq(0)
            }
            if (!$visibleSection.attr("id")) {
                $visibleSection.attr("id", this._generateRandomId())
            }
            var $currentSection = this._getCurrentSection();
            $currentSection.trigger(EVENTS.beforePageSwitch, [$currentSection.attr("id"), $currentSection]);
            $allSection.removeClass(routerConfig.curPageClass);
            $visibleSection.addClass(routerConfig.curPageClass);
            this.$view.prepend($newDoc);
            this._animateDocument($currentDoc, $newDoc, $visibleSection, direction);
            if (isPushState) {
                this._pushNewState(url, $visibleSection.attr("id"))
            }
        };
        Router.prototype._isTheSameDocument = function(url, anotherUrl) {
            return Util.toUrlObject(url).base === Util.toUrlObject(anotherUrl).base
        };
        Router.prototype._loadDocument = function(url, callback) {
            if (this.xhr && this.xhr.readyState < 4) {
                this.xhr.onreadystatechange = function() {};
                this.xhr.abort();
                this.dispatch(EVENTS.pageLoadCancel)
            }
            this.dispatch(EVENTS.pageLoadStart);
            callback = callback || {};
            var self = this;
            this.xhr = $.ajax({
                url: url,
                success: $.proxy(function(data, status, xhr) {
                    var $doc = $("<html></html>");
                    $doc.append(data);
                    callback.success && callback.success.call(null, $doc, status, xhr)
                }, this),
                error: function(xhr, status, err) {
                    callback.error && callback.error.call(null, xhr, status, err);
                    self.dispatch(EVENTS.pageLoadError)
                },
                complete: function(xhr, status) {
                    callback.complete && callback.complete.call(null, xhr, status);
                    self.dispatch(EVENTS.pageLoadComplete)
                }
            })
        };
        Router.prototype._parseDocument = function(url, $doc) {
            var $innerView = $doc.find("." + routerConfig.sectionGroupClass);
            if (!$innerView.length) {
                throw new Error("missing router view mark: " + routerConfig.sectionGroupClass)
            }
            this._saveDocumentIntoCache($doc, url)
        };
        Router.prototype._saveDocumentIntoCache = function(doc, url) {
            var urlAsKey = Util.toUrlObject(url).base;
            var $doc = $(doc);
            this.cache[urlAsKey] = {
                $doc: $doc,
                $content: $doc.find("." + routerConfig.sectionGroupClass)
            }
        };
        Router.prototype._getLastState = function() {
            var currentState = sessionStorage.getItem(this.sessionNames.currentState);
            try {
                currentState = JSON.parse(currentState)
            } catch (e) {
                currentState = null
            }
            return currentState
        };
        Router.prototype._saveAsCurrentState = function(state) {
            sessionStorage.setItem(this.sessionNames.currentState, JSON.stringify(state))
        };
        Router.prototype._getNextStateId = function() {
            var maxStateId = sessionStorage.getItem(this.sessionNames.maxStateId);
            return maxStateId ? parseInt(maxStateId, 10) + 1 : 1
        };
        Router.prototype._incMaxStateId = function() {
            sessionStorage.setItem(this.sessionNames.maxStateId, this._getNextStateId())
        };
        Router.prototype._animateDocument = function($from, $to, $visibleSection, direction) {
            var sectionId = $visibleSection.attr("id");
            var $visibleSectionInFrom = $from.find("." + routerConfig.curPageClass);
            $visibleSectionInFrom.addClass(routerConfig.visiblePageClass).removeClass(routerConfig.curPageClass);
            $visibleSection.trigger(EVENTS.pageAnimationStart, [sectionId, $visibleSection]);
            this._animateElement($from, $to, direction);
            $from.animationEnd(function() {
                $visibleSectionInFrom.removeClass(routerConfig.visiblePageClass);
                $(window).trigger(EVENTS.beforePageRemove, [$from]);
                $from.remove();
                $(window).trigger(EVENTS.pageRemoved)
            });
            $to.animationEnd(function() {
                $visibleSection.trigger(EVENTS.pageAnimationEnd, [sectionId, $visibleSection]);
                $visibleSection.trigger(EVENTS.pageInit, [sectionId, $visibleSection])
            })
        };
        Router.prototype._animateSection = function($from, $to, direction) {
            var toId = $to.attr("id");
            $from.trigger(EVENTS.beforePageSwitch, [$from.attr("id"), $from]);
            $from.removeClass(routerConfig.curPageClass);
            $to.addClass(routerConfig.curPageClass);
            $to.trigger(EVENTS.pageAnimationStart, [toId, $to]);
            this._animateElement($from, $to, direction);
            $to.animationEnd(function() {
                $to.trigger(EVENTS.pageAnimationEnd, [toId, $to]);
                $to.trigger(EVENTS.pageInit, [toId, $to])
            })
        };
        Router.prototype._animateElement = function($from, $to, direction) {
            if (typeof direction === "undefined") {
                direction = DIRECTION.rightToLeft
            }
            var animPageClasses = ["page-from-center-to-left", "page-from-center-to-right", "page-from-right-to-center", "page-from-left-to-center"].join(" ");
            var classForFrom, classForTo;
            switch (direction) {
                case DIRECTION.rightToLeft:
                    classForFrom = "page-from-center-to-left";
                    classForTo = "page-from-right-to-center";
                    break;
                case DIRECTION.leftToRight:
                    classForFrom = "page-from-center-to-right";
                    classForTo = "page-from-left-to-center";
                    break;
                default:
                    classForFrom = "page-from-center-to-left";
                    classForTo = "page-from-right-to-center";
                    break
            }
            $from.removeClass(animPageClasses).addClass(classForFrom);
            $to.removeClass(animPageClasses).addClass(classForTo);
            $from.animationEnd(function() {
                $from.removeClass(animPageClasses)
            });
            $to.animationEnd(function() {
                $to.removeClass(animPageClasses)
            })
        };
        Router.prototype._getCurrentSection = function() {
            return this.$view.find("." + routerConfig.curPageClass).eq(0)
        };
        Router.prototype._back = function(state, fromState) {
            if (this._isTheSameDocument(state.url.full, fromState.url.full)) {
                var $newPage = $("#" + state.pageId);
                if ($newPage.length) {
                    var $currentPage = this._getCurrentSection();
                    this._animateSection($currentPage, $newPage, DIRECTION.leftToRight);
                    this._saveAsCurrentState(state)
                } else {
                    location.href = state.url.full
                }
            } else {
                this._saveDocumentIntoCache($(document), fromState.url.full);
                this._switchToDocument(state.url.full, false, false, DIRECTION.leftToRight);
                this._saveAsCurrentState(state)
            }
        };
        Router.prototype._forward = function(state, fromState) {
            if (this._isTheSameDocument(state.url.full, fromState.url.full)) {
                var $newPage = $("#" + state.pageId);
                if ($newPage.length) {
                    var $currentPage = this._getCurrentSection();
                    this._animateSection($currentPage, $newPage, DIRECTION.rightToLeft);
                    this._saveAsCurrentState(state)
                } else {
                    location.href = state.url.full
                }
            } else {
                this._saveDocumentIntoCache($(document), fromState.url.full);
                this._switchToDocument(state.url.full, false, false, DIRECTION.rightToLeft);
                this._saveAsCurrentState(state)
            }
        };
        Router.prototype._onPopState = function(event) {
            var state = event.state;
            if (!state || !state.pageId) {
                return
            }
            var lastState = this._getLastState();
            if (!lastState) {
                console.error && console.error("Missing last state when backward or forward");
                return
            }
            if (state.id === lastState.id) {
                return
            }
            if (state.id < lastState.id) {
                this._back(state, lastState)
            } else {
                this._forward(state, lastState)
            }
        };
        Router.prototype._pushNewState = function(url, sectionId) {
            var state = {
                id: this._getNextStateId(),
                pageId: sectionId,
                url: Util.toUrlObject(url)
            };
            theHistory.pushState(state, "", url);
            this._saveAsCurrentState(state);
            this._incMaxStateId()
        };
        Router.prototype._generateRandomId = function() {
            return "page-" + +new Date
        };
        Router.prototype.dispatch = function(event) {
            var e = new CustomEvent(event, {
                bubbles: true,
                cancelable: true
            });
            window.dispatchEvent(e)
        };

        function isInRouterBlackList($link) {
            var classBlackList = ["external", "tab-link", "open-popup", "close-popup", "open-panel", "close-panel"];
            for (var i = classBlackList.length - 1; i >= 0; i--) {
                if ($link.hasClass(classBlackList[i])) {
                    return true
                }
            }
            var linkEle = $link.get(0);
            var linkHref = linkEle.getAttribute("href");
            var protoWhiteList = ["http", "https"];
            if (/^(\w+):/.test(linkHref) && protoWhiteList.indexOf(RegExp.$1) < 0) {
                return true
            }
            if (linkEle.hasAttribute("external")) {
                return true
            }
            return false
        }

        function customClickFilter($link) {
            var customRouterFilter = $.smConfig.routerFilter;
            if ($.isFunction(customRouterFilter)) {
                var filterResult = customRouterFilter($link);
                if (typeof filterResult === "boolean") {
                    return filterResult
                }
            }
            return true
        }
        $(function() {
            if (!$.smConfig.router) {
                return
            }
            if (!Util.supportStorage()) {
                return
            }
            var $pages = $("." + routerConfig.pageClass);
            if (!$pages.length) {
                var warnMsg = "Disable router function because of no .page elements";
                if (window.console && window.console.warn) {
                    console.warn(warnMsg)
                }
                return
            }
            var router = $.router = new Router
        })
    }(Zepto)
});