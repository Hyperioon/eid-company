define("xg/eid-company/1.0.0/c/js/jquery-debug.pager", [], function(require, exports, module) {
    (function($) {
        $.fn.pager = function(options) {
            var opts = $.extend({}, $.fn.pager.defaults, options);
            return this.each(function() {
                $(this).empty().append(renderpager(parseInt(options.pagenumber), parseInt(options.pagecount), options.buttonClickCallback, parseInt(options.totalcount)));
                $(".pages li").mouseover(function() {
                    document.body.style.cursor = "pointer"
                }).mouseout(function() {
                    document.body.style.cursor = "auto"
                });
                if ($(".pgNextgo").closest("div").css("display") == "block") {
                    $(".pgNextgo").unbind("click").click(function() {
                        var gotoval = $(this).closest("div").find("#gotoval").val();
                        var intval = parseInt(gotoval);
                        var re = /^[1-9]+[0-9]*]*$/;
                        var total = String($(this).closest("div").find(".thpointa").html());
                        if (isNaN(gotoval) || gotoval <= 0 || intval > total.substring(2, total.length - 1) || !re.test(gotoval)) {
                            lqtTuSi("请输入1到" + total.substring(2, total.length - 1) + "的整数值！", 2e3);
                            return false
                        }
                        options.buttonClickCallback(intval)
                    })
                }
            })
        };

        function renderpager(pagenumber, pagecount, buttonClickCallback, totalcount) {
            var $pager = $('<ul class="pages"></ul>');
            $pager.append(renderButton("首页", pagenumber, pagecount, buttonClickCallback)).append(renderButton("上一页", pagenumber, pagecount, buttonClickCallback));
            var startPoint = 1;
            var endPoint = 9;
            var thpoint = "<li class='thpoint'>...</li>";
            if (pagenumber > 4) {
                startPoint = pagenumber - 4;
                endPoint = pagenumber + 4
            }
            if (endPoint > pagecount) {
                startPoint = pagecount - 8;
                endPoint = pagecount;
                thpoint = ""
            }
            if (startPoint < 1) {
                startPoint = 1
            }
            for (var page = startPoint; page <= endPoint; page++) {
                var currentButton = $('<li class="page-number">' + page + "</li>");
                page == pagenumber ? currentButton.addClass("pgCurrent") : currentButton.click(function() {
                    buttonClickCallback(this.firstChild.data)
                });
                currentButton.appendTo($pager)
            }
            $pager.append(thpoint).append(renderButton("下一页", pagenumber, pagecount, buttonClickCallback)).append(renderButton("末页", pagenumber, pagecount, buttonClickCallback));
            $pager.append("<li class='thpointa' style='margin-top:3px;'>共: " + pagecount + " 页 " + totalcount + " 条</li>");
            var strgoto = $("<li class='thpoint'>选择第<input type='text' value='" + pagenumber + "'maxlength='6' id='gotoval' style='width:20px; height:16px;margin-top:-3px;padding-top:2px;padding-left:10px;'/>页</li>");
            $pager.append(strgoto);
            $pager.append($('<li class="pgNextgo">go</li>'));
            return $pager
        }

        function lqtTuSi(msg, delay) {
            $(".tusi").empty().remove();
            var tipdiv = "<span class='tusi'>" + msg + "</span>";
            $("body").append(tipdiv);
            $(".tusi").css("top", $(document).scrollTop() + ($(window).height() - $(".tusi").height()) / 2);
            $(".tusi").css("left", $(document).scrollLeft() + ($(window).width() - $(".tusi").width()) / 2);
            $(".tusi").show();
            setTimeout(function() {
                $(".tusi").hide()
            }, delay)
        }

        function renderButton(buttonLabel, pagenumber, pagecount, buttonClickCallback) {
            var $Button = $('<li class="pgNext">' + buttonLabel + "</li>");
            var destPage = 1;
            switch (buttonLabel) {
                case "首页":
                    destPage = 1;
                    break;
                case "上一页":
                    destPage = pagenumber - 1;
                    break;
                case "下一页":
                    destPage = pagenumber + 1;
                    break;
                case "末页":
                    destPage = pagecount;
                    break
            }
            if (buttonLabel == "首页" || buttonLabel == "上一页") {
                pagenumber <= 1 ? $Button.addClass("pgEmpty") : $Button.click(function() {
                    buttonClickCallback(destPage)
                })
            } else {
                pagenumber >= pagecount ? $Button.addClass("pgEmpty") : $Button.click(function() {
                    buttonClickCallback(destPage)
                })
            }
            return $Button
        }
        $.fn.pager.defaults = {
            pagenumber: 1,
            pagecount: 1
        }
    })(jQuery)
});