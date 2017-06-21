define("xg/eid-company/1.0.0/p/report/consumeBehavior-debug.handlebars", ["alinw/handlebars/1.3.0/runtime-debug"], function(require, exports, module) {
    var Handlebars = require("alinw/handlebars/1.3.0/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, ">= 1.0.0"];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        return '<div class="title title2 overflowHidden mt50" id="consumeBehavior">\r\n    <div class="title2Text" id="reportTitle">消费行为报告</div>\r\n</div>\r\n<table class="consumeBehavior">\r\n    <tbody>\r\n    <tr>\r\n        <td>异常交易</td>\r\n        <td><span class="ellipsis w500" id="ExceptionTrade">--</span></td>\r\n    </tr>\r\n    <tr>\r\n        <td>套现嫌疑</td>\r\n        <td><span class="ellipsis w500" id="cashOut">--</span></td>\r\n    </tr>\r\n    <tr>\r\n        <td>不良消费</td>\r\n        <td><span class="ellipsis w500" id="badCost">--</span></td>\r\n    </tr>\r\n    </tbody>\r\n</table>'
    })
});