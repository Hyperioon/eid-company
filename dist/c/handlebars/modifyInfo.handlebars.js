define("xg/eid-company/1.0.0/c/handlebars/modifyInfo.handlebars",["alinw/handlebars/1.3.0/runtime"],function(require,exports,module){var Handlebars=require("alinw/handlebars/1.3.0/runtime"),template=Handlebars.template;module.exports=template(function(Handlebars,depth0,helpers,partials,data){return this.compilerInfo=[4,">= 1.0.0"],helpers=this.merge(helpers,Handlebars.helpers),data=data||{},'<div id="modal-modifyInfo" class="modal fade"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\r\n    <div class="modal-dialog">\r\n        <div class="modal-content radius">\r\n            <div class="modal-header">\r\n                <h2 class="modal-title">修改个人信息</h2>\r\n                <a class="close" data-dismiss="modal" aria-hidden="true">×</a>\r\n            </div>\r\n            <form class="form form-horizontal" id="modifyInfoForm">\r\n                <div class="modal-body" style="overflow: hidden">\r\n                    <div class="row cl">\r\n                        <label class="labelText col-xs-4 col-sm-3 text-c">手机号码：</label>\r\n                        <div class="formControls col-xs-8 col-sm-9">\r\n                            <input type="hidden" class="input-text pull-left" id="customerId" name="customerId">\r\n                            <input type="text" class="input-text pull-left" id="mobile" name="mobile" maxlength="11" placeholder="请输入手机号码">\r\n                        </div>\r\n                    </div>\r\n                    <div class="row cl mt10">\r\n                        <label class="labelText col-xs-4 col-sm-3 text-c">姓名：</label>\r\n                        <div class="formControls col-xs-8 col-sm-9">\r\n                            <input type="text" class="input-text pull-left" id="realName" name="realName" placeholder="请输入姓名">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class="modal-footer">\r\n                    <input class="btn btn-primary" type="submit" value="确定">\r\n                    <a class="btn" data-dismiss="modal" aria-hidden="true">关闭</a>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>'})});