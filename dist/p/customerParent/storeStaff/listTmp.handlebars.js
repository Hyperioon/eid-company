define("xg/eid-company/1.0.0/p/customerParent/storeStaff/listTmp.handlebars",["alinw/handlebars/1.3.0/runtime"],function(require,exports,module){var Handlebars=require("alinw/handlebars/1.3.0/runtime"),template=Handlebars.template;module.exports=template(function(Handlebars,depth0,helpers,partials,data){function program1(depth0,data){var stack1,buffer="";return buffer+="\r\n        ",stack1=helpers.each.call(depth0,depth0,{hash:{},inverse:self.noop,fn:self.program(2,program2,data),data:data}),(stack1||0===stack1)&&(buffer+=stack1),buffer+="\r\n    "}function program2(depth0,data){var stack1,helper,buffer="";return buffer+='\r\n            <tr class="text-c">\r\n                <td>',(helper=helpers.realName)?stack1=helper.call(depth0,{hash:{},data:data}):(helper=depth0&&depth0.realName,stack1=typeof helper===functionType?helper.call(depth0,{hash:{},data:data}):helper),buffer+=escapeExpression(stack1)+"</td>\r\n                <td>",(helper=helpers.mobile)?stack1=helper.call(depth0,{hash:{},data:data}):(helper=depth0&&depth0.mobile,stack1=typeof helper===functionType?helper.call(depth0,{hash:{},data:data}):helper),buffer+=escapeExpression(stack1)+"</td>\r\n                <td>",(helper=helpers.companyName)?stack1=helper.call(depth0,{hash:{},data:data}):(helper=depth0&&depth0.companyName,stack1=typeof helper===functionType?helper.call(depth0,{hash:{},data:data}):helper),buffer+=escapeExpression(stack1)+"</td>\r\n                <td>",(helper=helpers.address)?stack1=helper.call(depth0,{hash:{},data:data}):(helper=depth0&&depth0.address,stack1=typeof helper===functionType?helper.call(depth0,{hash:{},data:data}):helper),buffer+=escapeExpression(stack1)+"</td>\r\n            </tr>\r\n        "}function program4(depth0,data){return'\r\n        <tr>\r\n            <td class="text-c" colspan="8">暂无数据</td>\r\n        </tr>\r\n    '}this.compilerInfo=[4,">= 1.0.0"],helpers=this.merge(helpers,Handlebars.helpers),data=data||{};var stack1,buffer="",functionType="function",escapeExpression=this.escapeExpression,self=this;return buffer+='<table class="table table-border table-bordered table-hover">\r\n    <thead class="text-c">\r\n        <tr>\r\n            <th>姓名</th>\r\n            <th>手机号码</th>\r\n            <th>所属门店</th>\r\n            <th>门店地址</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class="text-c">\r\n    ',stack1=helpers["if"].call(depth0,depth0,{hash:{},inverse:self.program(4,program4,data),fn:self.program(1,program1,data),data:data}),(stack1||0===stack1)&&(buffer+=stack1),buffer+="\r\n    </tbody>\r\n</table>"})});