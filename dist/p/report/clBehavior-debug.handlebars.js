define("xg/eid-company/1.0.0/p/report/clBehavior-debug.handlebars", ["alinw/handlebars/1.3.0/runtime-debug"], function(require, exports, module) {
    var Handlebars = require("alinw/handlebars/1.3.0/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, ">= 1.0.0"];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        return '<div class="title title2 overflowHidden mt50" id="clBehavior">\r\n    <div class="title2Text" id="reportTitle">信贷行为报告</div> <!--titleIconOrange-->\r\n</div>\r\n<table class="loanBehavior">\r\n    <tbody>\r\n    <tr>\r\n        <td>传统金融机构逾期</td>\r\n        <td><span class="ellipsis w500" id="trdFinancialOver"></span></td>\r\n    </tr>\r\n    <tr>\r\n        <td>网贷/消费金融平台借贷逾期</td>\r\n        <td><span class="ellipsis w500" id="borrowOver"></span></td>\r\n    </tr>\r\n    <tr>\r\n        <td>多平台借贷嫌疑</td>\r\n        <td><span class="ellipsis w500" id="multiplate"></span></td>\r\n    </tr>\r\n    <tr>\r\n        <td>信贷欺诈</td>\r\n        <td><span class="ellipsis w500" id="creditFraud"></span></td>\r\n    </tr>\r\n    <tr>\r\n        <td>网贷/消费金融黑名单</td>\r\n        <td><span class="ellipsis w500" id="blacklist"></span></td>\r\n    </tr>\r\n    <tr>\r\n        <td>信贷失联</td>\r\n        <td><span class="ellipsis w500" id="lossContact"></span></td>\r\n    </tr>\r\n    <tr>\r\n        <td>信用卡逾期</td>\r\n        <td><span class="ellipsis w500" id="creditOver"></span></td>\r\n    </tr>\r\n    <tr>\r\n        <td>小额典当</td>\r\n        <td><span class="ellipsis w500" id="pawnRecord"></span></td>\r\n    </tr>\r\n    </tbody>\r\n</table>'
    })
});