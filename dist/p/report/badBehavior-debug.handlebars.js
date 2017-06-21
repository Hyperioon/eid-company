define("xg/eid-company/1.0.0/p/report/badBehavior-debug.handlebars", ["alinw/handlebars/1.3.0/runtime-debug"], function(require, exports, module) {
    var Handlebars = require("alinw/handlebars/1.3.0/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, ">= 1.0.0"];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        return '<div class="title title2 overflowHidden mt50" id="badBehavior">\r\n    <div class="title2Text" id="reportTitle">不良行为报告</div>\r\n</div>\r\n<table class="badBehavior">\r\n    <thead class="text-c">\r\n    <tr><td colspan="2">治安记录</td></tr>\r\n    <tr>\r\n        <td>不良行为</td>\r\n        <td>案件时间</td>\r\n    </tr>\r\n    </thead>\r\n    <tbody id="policeRecordList">\r\n\r\n    </tbody>\r\n</table>\r\n<table class="penalRecord mt40">\r\n    <thead class="text-c">\r\n    <tr><td>刑事记录</td></tr>\r\n    </thead>\r\n    <tbody  id="penalRecordList">\r\n\r\n    </tbody>\r\n</table>\r\n<table class="insuranceCheat mt40">\r\n    <thead class="text-c">\r\n    <tr><td>保险欺诈</td></tr>\r\n    </thead>\r\n    <tbody id="insuranceCheatList">\r\n\r\n    </tbody>\r\n</table>\r\n<table class="insuranceCheat mt40">\r\n    <thead class="text-c">\r\n    <tr><td>其他处罚</td></tr>\r\n    </thead>\r\n    <tbody id="otherRecordList">\r\n\r\n    </tbody>\r\n</table>'
    })
});