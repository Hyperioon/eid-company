define("xg/eid-company/1.0.0/c/handlebars/headerTmp-debug.handlebars", ["alinw/handlebars/1.3.0/runtime-debug"], function(require, exports, module) {
    var Handlebars = require("alinw/handlebars/1.3.0/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, ">= 1.0.0"];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        var buffer = "",
            stack1, helper, functionType = "function",
            escapeExpression = this.escapeExpression;
        buffer += '<div class="navbar navbar-fixed-top">\r\n    <div class="container-fluid cl">\r\n        <a class="logo navbar-logo f-l mr-10" href="#">身份标识查询系统</a>\r\n        <span class="logo navbar-slogan f-l mr-10">v1.5</span>\r\n        <nav id="Hui-userbar" class="nav navbar-nav navbar-userbar hidden-xs">\r\n            <ul class="cl">\r\n                <li id="headerCompanyName">\r\n                    ';
        if (helper = helpers.companyName) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.companyName;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '&nbsp;&nbsp;\r\n                </li>\r\n                <li id="headerRealName">\r\n                    ';
        if (helper = helpers.realName) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.realName;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '\r\n                </li>\r\n                <li class="dropDown dropDown_hover">\r\n                    <input type="hidden" id="companyId" value="2">\r\n                    <a href="#" class="dropDown_A" id="headerRoleName">';
        if (helper = helpers.roleName) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.roleName;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '<i class="Hui-iconfont"></i></a>\r\n                    <ul class="dropDown-menu menu radius box-shadow">\r\n                        <li data-customerid="';
        if (helper = helpers.customerId) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.customerId;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '"\r\n                            data-mobile="';
        if (helper = helpers.mobile) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.mobile;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '"\r\n                            data-realname="';
        if (helper = helpers.realName) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.realName;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '">\r\n                            <a id="modifyInfo">修改信息</a>\r\n                        </li>\r\n                        <li><a id="modifyPassword">修改密码</a></li>\r\n                        <li><a id="logout" data-usertype="';
        if (helper = helpers.userType) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.userType;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '">退出</a></li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n        </nav>\r\n    </div>\r\n</div>';
        return buffer
    })
});