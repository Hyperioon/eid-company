define("xg/eid-company/1.0.0/p/adminAccount/inforServiceH/inforServiceMH.handlebars",["alinw/handlebars/1.3.0/runtime"],function(require,exports,module){var Handlebars=require("alinw/handlebars/1.3.0/runtime"),template=Handlebars.template;module.exports=template(function(Handlebars,depth0,helpers,partials,data){return this.compilerInfo=[4,">= 1.0.0"],helpers=this.merge(helpers,Handlebars.helpers),data=data||{},'<div class="col-xs-12">\r\n    <div class="queryBox mt-10 text" id="queryTime">\r\n        <label class="labelText w70 pull-left text-r">查询时间：</label>\r\n        <a href="javascript:void(0)" data-querytime="all" class="btn btn-link current">全部</a>\r\n        <a href="javascript:void(0)" data-querytime="today" class="btn btn-link">当天</a>\r\n        <a href="javascript:void(0)" data-querytime="threeDay" class="btn btn-link">最近三天</a>\r\n        <a href="javascript:void(0)" data-querytime="week" class="btn btn-link">最近一周</a>\r\n        <a href="javascript:void(0)" data-querytime="month" class="btn btn-link">最近一月</a>\r\n        <input size="16" class="customStartTime form-control" placeholder="开始时间" type="text" value="" readonly>        \r\n        <label class="to_text">至</label>\r\n        <input size="16" class="customEndTime form-control" placeholder="结束时间" type="text" value="" readonly>\r\n    </div>\r\n    <!-- <div class="queryBox mt-10 text" id="userDefined">\r\n        <label class="labelText w70 pull-left text-r">自定义：</label>\r\n        \r\n    </div> -->\r\n    <div class="queryBox mt-10" id="bankStatus">\r\n        <label class="labelText w70 pull-left text-r">业务状况：</label>\r\n        <a href="javascript:void(0)" data-status="" class="btn btn-link current">全部</a>\r\n        <a href="javascript:void(0)" data-status="0" class="btn btn-link">未处理</a>\r\n        <a href="javascript:void(0)" data-status="1" class="btn btn-link">已通过</a>\r\n        <a href="javascript:void(0)" data-status="2" class="btn btn-link">未通过</a>\r\n        <a href="javascript:void(0)" data-status="3" class="btn btn-link">黑名单</a>\r\n    </div>\r\n</div>\r\n<div class="col-xs-12 borderTop">\r\n    <form id="infor_searchForm" class="col-xs-8">\r\n        <div class="col-xs-4">\r\n            <label class="form-label col-xs-4 col-sm-5">客户名称：</label>\r\n            <div class="formControls col-xs-8 col-sm-7">\r\n              <input type="text" class="input-text" placeholder="客户名称" name="companyName" id="companyName">\r\n            </div>\r\n        </div>\r\n        <div class="col-xs-4">\r\n            <label class="form-label col-xs-4 col-sm-5">门店名称：</label>\r\n            <div class="formControls col-xs-8 col-sm-7">\r\n              <input type="text" class="input-text" placeholder="门店名称" name="childName" id="childName">\r\n            </div>\r\n        </div>\r\n        <div class="col-xs-3">\r\n            <label class="form-label col-xs-4 col-sm-4">姓名：</label>\r\n            <div class="formControls col-xs-8 col-sm-8">\r\n              <input type="text" class="input-text" autocomplete="off" placeholder="姓名" name="borrowerName" id="borrowerName">\r\n            </div>\r\n        </div>\r\n        <input class="btn btn-default col-xs-1" type="submit" id="search_button" value="搜索">\r\n    </form>\r\n</div>'})});