define("xg/eid-company/1.0.0/p/adminAccount/accountnav.handlebars",["alinw/handlebars/1.3.0/runtime"],function(require,exports,module){var Handlebars=require("alinw/handlebars/1.3.0/runtime"),template=Handlebars.template;module.exports=template(function(Handlebars,depth0,helpers,partials,data){this.compilerInfo=[4,">= 1.0.0"],helpers=this.merge(helpers,Handlebars.helpers),data=data||{};var stack1,helper,buffer="",functionType="function",escapeExpression=this.escapeExpression;return buffer+='<li class="',(helper=helpers.customerManage)?stack1=helper.call(depth0,{hash:{},data:data}):(helper=depth0&&depth0.customerManage,stack1=typeof helper===functionType?helper.call(depth0,{hash:{},data:data}):helper),buffer+=escapeExpression(stack1)+'"><a href="/company/customerManage.htm">&nbsp;&nbsp;&nbsp;&nbsp;客户管理</a></li>\r\n<li class="',(helper=helpers.deviceManage)?stack1=helper.call(depth0,{hash:{},data:data}):(helper=depth0&&depth0.deviceManage,stack1=typeof helper===functionType?helper.call(depth0,{hash:{},data:data}):helper),buffer+=escapeExpression(stack1)+'"><a href="/company/deviceManage.htm">&nbsp;&nbsp;&nbsp;&nbsp;设备管理</a></li>\r\n<li class="',(helper=helpers.inforService)?stack1=helper.call(depth0,{hash:{},data:data}):(helper=depth0&&depth0.inforService,stack1=typeof helper===functionType?helper.call(depth0,{hash:{},data:data}):helper),buffer+=escapeExpression(stack1)+'"><a href="/company/inforService.htm">&nbsp;&nbsp;&nbsp;&nbsp;信息查询</a></li>\r\n<li class="',(helper=helpers.dataCount)?stack1=helper.call(depth0,{hash:{},data:data}):(helper=depth0&&depth0.dataCount,stack1=typeof helper===functionType?helper.call(depth0,{hash:{},data:data}):helper),buffer+=escapeExpression(stack1)+'"><a href="/company/dataCount.htm">&nbsp;&nbsp;&nbsp;&nbsp;数据统计</a></li>\r\n<li class="',(helper=helpers.accountManage)?stack1=helper.call(depth0,{hash:{},data:data}):(helper=depth0&&depth0.accountManage,stack1=typeof helper===functionType?helper.call(depth0,{hash:{},data:data}):helper),buffer+=escapeExpression(stack1)+'"><a href="/company/userManage.htm">&nbsp;&nbsp;&nbsp;&nbsp;账号管理</a></li>\r\n\r\n'})});