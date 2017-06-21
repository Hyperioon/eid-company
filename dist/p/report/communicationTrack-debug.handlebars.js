define("xg/eid-company/1.0.0/p/report/communicationTrack-debug.handlebars", ["alinw/handlebars/1.3.0/runtime-debug"], function(require, exports, module) {
    var Handlebars = require("alinw/handlebars/1.3.0/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, ">= 1.0.0"];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        return '<div class="title title2 overflowHidden mt50" id="communicationTrack">\r\n    <div class="title2Text" id="reportTitle">通讯轨迹报告</div>\r\n</div>\r\n<table class="communicationTrack">\r\n    <thead class="text-c">\r\n    <tr><td>手机状态</td><td>正常</td></tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr>\r\n        <td>手机在网时长</td>\r\n        <td><span class="ellipsis w500" id="onlineTimeMap">--</span></td>\r\n    </tr>\r\n    <tr>\r\n        <td>手机催收被呼记录</td>\r\n        <td><span class="ellipsis w500" id="collectionRecordsMap">--</span></td>\r\n    </tr>\r\n    </tbody>\r\n</table>'
    })
});