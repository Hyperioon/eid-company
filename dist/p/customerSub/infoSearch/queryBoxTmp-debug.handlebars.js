define("xg/eid-company/1.0.0/p/customerSub/infoSearch/queryBoxTmp-debug.handlebars", ["alinw/handlebars/1.3.0/runtime-debug"], function(require, exports, module) {
    var Handlebars = require("alinw/handlebars/1.3.0/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, ">= 1.0.0"];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        return '<div class="queryBox text" id="queryTime">\r\n    <label class="labelText w70 pull-left text-r">查询时间：</label>\r\n    <input size="16" id="startTime" class="startTime input-text pull-left w120" type="text" placeholder="开始时间" readonly>\r\n    <div class="pull-left" style="height: 32px;line-height: 32px;padding: 0px 10px;">--</div>\r\n    <input size="16" id="endTime" class="endTime input-text pull-left w120" type="text" placeholder="结束时间" readonly>\r\n</div>\r\n<div class="queryBox mt-10 text" id="statusSelect">\r\n    <label class="labelText w70 pull-left text-r">状态：</label>\r\n    <input class="btn radius primary" type="button" value="全部" data-status="">\r\n    <input class="btn btn-link radius" type="button" value="已查看" data-status="0">\r\n    <input class="btn btn-link radius" type="button" value="已通过" data-status="1">\r\n    <input class="btn btn-link radius" type="button" value="未通过" data-status="2">\r\n    <input class="btn btn-link radius" type="button" value="黑名单" data-status="3">\r\n    <div class="searchGroup">\r\n        <input type="text" class="input-text pull-right w200" id="searchText" placeholder="请输入客户姓名">\r\n        <i class="Hui-iconfont searchIcon" id="searchIcon">&#xe665;</i>\r\n    </div>\r\n</div>\r\n<div class="hr"></div>'
    })
});