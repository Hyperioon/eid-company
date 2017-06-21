define("xg/eid-company/1.0.0/p/customerParent/statisticalQuery/queryBoxTmp-debug.handlebars", ["alinw/handlebars/1.3.0/runtime-debug"], function(require, exports, module) {
    var Handlebars = require("alinw/handlebars/1.3.0/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, ">= 1.0.0"];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        return '<div class="queryBox">\r\n    <label class="labelText pull-left">地区选择：</label>\r\n    <div class="pull-left" id="address"></div>\r\n\r\n    <label class="labelText pull-left ml-40">门店名称：</label>\r\n    <select class="input-text pull-left w140" id="storeNameSelect">\r\n        <option value="">全部</option>\r\n    </select>\r\n    <!--<div class="searchGroup">\r\n        <input type="text" class="input-text pull-right w200" id="searchText" placeholder="请输入门店名称">\r\n        <i class="Hui-iconfont searchIcon" id="searchIcon">&#xe665;</i>\r\n    </div>-->\r\n    <label class="labelText pull-left ml-40">年份：</label>\r\n    <select class="input-text pull-left w120" id="yearSelect"></select>\r\n</div>\r\n<div class="hr"></div>'
    })
});