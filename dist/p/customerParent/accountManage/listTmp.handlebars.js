define("xg/eid-company/1.0.0/p/customerParent/accountManage/listTmp.handlebars",["alinw/handlebars/1.3.0/runtime"],function(require,exports,module){var Handlebars=require("alinw/handlebars/1.3.0/runtime"),template=Handlebars.template;module.exports=template(function(Handlebars,depth0,helpers,partials,data){function program1(depth0,data){var stack1,buffer="";return buffer+="\r\n        ",stack1=helpers.each.call(depth0,depth0,{hash:{},inverse:self.noop,fn:self.program(2,program2,data),data:data}),(stack1||0===stack1)&&(buffer+=stack1),buffer+="\r\n    "}function program2(depth0,data){var stack1,helper,options,buffer="";return buffer+='\r\n            <tr class="text-c">\r\n                <td>',(helper=helpers.username)?stack1=helper.call(depth0,{hash:{},data:data}):(helper=depth0&&depth0.username,stack1=typeof helper===functionType?helper.call(depth0,{hash:{},data:data}):helper),buffer+=escapeExpression(stack1)+"</td>\r\n                <td>",(helper=helpers.mobile)?stack1=helper.call(depth0,{hash:{},data:data}):(helper=depth0&&depth0.mobile,stack1=typeof helper===functionType?helper.call(depth0,{hash:{},data:data}):helper),buffer+=escapeExpression(stack1)+"</td>\r\n                <td>",(helper=helpers.realName)?stack1=helper.call(depth0,{hash:{},data:data}):(helper=depth0&&depth0.realName,stack1=typeof helper===functionType?helper.call(depth0,{hash:{},data:data}):helper),buffer+=escapeExpression(stack1)+"</td>\r\n                <td>\r\n                    ",helper=helpers.ifCond||depth0&&depth0.ifCond,options={hash:{},inverse:self.noop,fn:self.program(3,program3,data),data:data},stack1=helper?helper.call(depth0,depth0&&depth0.status,"==","0",options):helperMissing.call(depth0,"ifCond",depth0&&depth0.status,"==","0",options),(stack1||0===stack1)&&(buffer+=stack1),buffer+="\r\n                    ",helper=helpers.ifCond||depth0&&depth0.ifCond,options={hash:{},inverse:self.noop,fn:self.program(5,program5,data),data:data},stack1=helper?helper.call(depth0,depth0&&depth0.status,"==","1",options):helperMissing.call(depth0,"ifCond",depth0&&depth0.status,"==","1",options),(stack1||0===stack1)&&(buffer+=stack1),buffer+="\r\n                </td>\r\n                <td>",(helper=helpers.roleName)?stack1=helper.call(depth0,{hash:{},data:data}):(helper=depth0&&depth0.roleName,stack1=typeof helper===functionType?helper.call(depth0,{hash:{},data:data}):helper),buffer+=escapeExpression(stack1)+'</td>\r\n                <td data-customerid="',(helper=helpers.customerId)?stack1=helper.call(depth0,{hash:{},data:data}):(helper=depth0&&depth0.customerId,stack1=typeof helper===functionType?helper.call(depth0,{hash:{},data:data}):helper),buffer+=escapeExpression(stack1)+'" data-mobile="',(helper=helpers.mobile)?stack1=helper.call(depth0,{hash:{},data:data}):(helper=depth0&&depth0.mobile,stack1=typeof helper===functionType?helper.call(depth0,{hash:{},data:data}):helper),buffer+=escapeExpression(stack1)+'" data-realname="',(helper=helpers.realName)?stack1=helper.call(depth0,{hash:{},data:data}):(helper=depth0&&depth0.realName,stack1=typeof helper===functionType?helper.call(depth0,{hash:{},data:data}):helper),buffer+=escapeExpression(stack1)+'" data-status="',(helper=helpers.status)?stack1=helper.call(depth0,{hash:{},data:data}):(helper=depth0&&depth0.status,stack1=typeof helper===functionType?helper.call(depth0,{hash:{},data:data}):helper),buffer+=escapeExpression(stack1)+'" data-rolename="',(helper=helpers.roleName)?stack1=helper.call(depth0,{hash:{},data:data}):(helper=depth0&&depth0.roleName,stack1=typeof helper===functionType?helper.call(depth0,{hash:{},data:data}):helper),buffer+=escapeExpression(stack1)+'" data-roleid="',(helper=helpers.roleId)?stack1=helper.call(depth0,{hash:{},data:data}):(helper=depth0&&depth0.roleId,stack1=typeof helper===functionType?helper.call(depth0,{hash:{},data:data}):helper),buffer+=escapeExpression(stack1)+'"><a class="reset">重置密码</a><span class="pipe">|</span><a class="edit">编辑</a><span class="pipe">|</span><a class="delete">删除</a></td>\r\n            </tr>\r\n        '}function program3(depth0,data){return'\r\n                        <span class="c-green">启用</span>\r\n                    '}function program5(depth0,data){return'\r\n                        <span class="c-red">禁用</span>\r\n                    '}function program7(depth0,data){return'\r\n        <tr>\r\n            <td class="text-c" colspan="8">暂无数据</td>\r\n        </tr>\r\n    '}this.compilerInfo=[4,">= 1.0.0"],helpers=this.merge(helpers,Handlebars.helpers),data=data||{};var stack1,buffer="",functionType="function",escapeExpression=this.escapeExpression,self=this,helperMissing=helpers.helperMissing;return buffer+='<table class="table table-border table-bordered table-hover">\r\n    <thead class="text-c">\r\n        <tr>\r\n            <th>用户名</th>\r\n            <th>手机号码</th>\r\n            <th>姓名</th>\r\n            <th>状态</th>\r\n            <th>类型</th>\r\n            <th>操作</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class="text-c">\r\n    ',stack1=helpers["if"].call(depth0,depth0,{hash:{},inverse:self.program(7,program7,data),fn:self.program(1,program1,data),data:data}),(stack1||0===stack1)&&(buffer+=stack1),buffer+="\r\n    </tbody>\r\n</table>"})});