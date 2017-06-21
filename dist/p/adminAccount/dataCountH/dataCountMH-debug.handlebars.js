define("xg/eid-company/1.0.0/p/adminAccount/dataCountH/dataCountMH-debug.handlebars", ["alinw/handlebars/1.3.0/runtime-debug"], function(require, exports, module) {
    var Handlebars = require("alinw/handlebars/1.3.0/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, ">= 1.0.0"];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        return '<div class="col-xs-8">\r\n  <label class="selectYear_label">年份：</label>\r\n  <div class="formControls col-xs-8 col-sm-3">\r\n    <select name="year" id="year">\r\n      <!-- <option value="">当前年份</option> -->\r\n    </select>\r\n  </div>\r\n</div>\r\n<form id="dataCount_searchForm" class="col-xs-4">\r\n  <div class="col-xs-10">\r\n    <label class="form-label col-xs-4 col-sm-4">客户名称：</label>\r\n    <div class="formControls col-xs-8 col-sm-8">\r\n      <input type="text" class="input-text" placeholder="请输入客户名称" name="companyName" id="companyName">\r\n    </div>\r\n  </div>\r\n  <input class="btn btn-default col-xs-2" type="submit" id="search_button" value="搜索">\r\n</form>'
    })
});