define("xg/eid-company/1.0.0/c/handlebars/showCheckInfo-debug.handlebars", ["alinw/handlebars/1.3.0/runtime-debug"], function(require, exports, module) {
    var Handlebars = require("alinw/handlebars/1.3.0/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, ">= 1.0.0"];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        var buffer = "",
            stack1, helper, options, functionType = "function",
            escapeExpression = this.escapeExpression,
            self = this,
            helperMissing = helpers.helperMissing;

        function program1(depth0, data) {
            return '\r\n                    <div class="orangeTip" id="orangeTip">温馨提示：重新查询需重新收费~</div>\r\n                '
        }

        function program3(depth0, data) {
            return '\r\n                    <img id="ani" class="idtySuccess" src="http://static.hpbanking.com/xg/uploads/files/46c097fd69994dbcc07463bfe2985d4b-130-125.png" alt="">\r\n                '
        }

        function program5(depth0, data) {
            return '\r\n                    <img id="ani" class="idtySuccess" src="http://static.hpbanking.com/xg/uploads/files/9f4f3bc9661218d2f7fad385a3997d36-130-116.png" alt="">\r\n                '
        }
        buffer += '<div id="modal-checkInfo" class="modal fade myModal" style="margin-left: -475px">\r\n    <div class="modal-dialog">\r\n        <div class="modal-content radius">\r\n            <div class="modalHeader">\r\n                <span class="modal-title ml20">人证核实信息</span>\r\n                <a class="close mr5 pull-right" id="closeBtn" data-dismiss="modal" aria-hidden="true" href="javascript:void();">×</a>\r\n            </div>\r\n            <div class="modalBody" data-result="';
        if (helper = helpers.result) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.result;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '">\r\n                ';
        stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
            hash: {},
            inverse: self.noop,
            fn: self.program(1, program1, data),
            data: data
        }, helper ? helper.call(depth0, depth0 && depth0.mobileStatus, "==", "1", options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.mobileStatus, "==", "1", options));
        if (stack1 || stack1 === 0) {
            buffer += stack1
        }
        buffer += '\r\n                <!--result==0?"人脸比对成功":"人脸比对失败";-->\r\n                ';
        stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
            hash: {},
            inverse: self.noop,
            fn: self.program(3, program3, data),
            data: data
        }, helper ? helper.call(depth0, depth0 && depth0.result, "!=", 0, options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.result, "!=", 0, options));
        if (stack1 || stack1 === 0) {
            buffer += stack1
        }
        buffer += "\r\n                ";
        stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
            hash: {},
            inverse: self.noop,
            fn: self.program(5, program5, data),
            data: data
        }, helper ? helper.call(depth0, depth0 && depth0.result, "==", 0, options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.result, "==", 0, options));
        if (stack1 || stack1 === 0) {
            buffer += stack1
        }
        buffer += '\r\n                <div class="pull-left identitiesBox">\r\n                    <div class="identity identityFront pull-left">\r\n                        <div class="pull-left w170 clearfix">\r\n                            <div class="lineBox">\r\n                                <span class="lightblue">姓名</span><span class="addText">';
        if (helper = helpers.borrowerName) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.borrowerName;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '</span>\r\n                            </div>\r\n                            <div class="lineBox">\r\n                                <span class="lightblue">性别</span><span class="addText">' + escapeExpression((helper = helpers.infoSex || depth0 && depth0.infoSex, options = {
            hash: {},
            data: data
        }, helper ? helper.call(depth0, depth0 && depth0.sex, options) : helperMissing.call(depth0, "infoSex", depth0 && depth0.sex, options))) + '</span><span class="ml-15 lightblue">民族</span><span class="addText">';
        if (helper = helpers.nation) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.nation;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '</span>\r\n                            </div>\r\n                            <div class="lineBox">\r\n                                <span class="lightblue">出生</span><span class="addText">';
        if (helper = helpers.birthdate) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.birthdate;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '</span>\r\n                            </div>\r\n                            <div class="lineBox" style="height:14px;line-height:14px !important;">\r\n                                <span class="lightblue">住址</span><span class="addText">';
        if (helper = helpers.address) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.address;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '</span>\r\n                            </div>\r\n                        </div>\r\n                        <div class="pull-right w80 mr-10">\r\n                            <img src="';
        if (helper = helpers.imgUrl) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.imgUrl;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '" class="frontPic">\r\n                        </div>\r\n                        <div class="lineBox clearfix" style="position: absolute;bottom: 20px;">\r\n                            <span class="lightblue">公民身份证号码</span><span class="addText">';
        if (helper = helpers.cardNum) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.cardNum;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class="identity identityBack pull-left ml29">\r\n                        <div class="lineBox pdl20 mt100">\r\n                            <span class="">签发机关</span><span class="addText">';
        if (helper = helpers.issuer) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.issuer;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '</span>\r\n                        </div>\r\n                        <div class="lineBox pdl20">\r\n                            <span class="">有效期限</span><span class="addText">' + escapeExpression((helper = helpers.transform || depth0 && depth0.transform, options = {
            hash: {},
            data: data
        }, helper ? helper.call(depth0, depth0 && depth0.validDate, options) : helperMissing.call(depth0, "transform", depth0 && depth0.validDate, options))) + '</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class="currentPic pull-left ml29">\r\n                        <img src="';
        if (helper = helpers.faceUrl) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.faceUrl;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '" width="186">\r\n                        <img id="frame" src="http://static.hpbanking.com/xg/uploads/files/28fd24d40a6d325f3cb7085b7f37ef41-140-140.png">\r\n                        <div id="scanline"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class="modalFooter">\r\n                <div class="pull-left">\r\n                    <label class="f-18" for="mobile">手机号码</label>\r\n                    <input class="input-text w222 phone ml20" id="mobile" maxlength="13" placeholder="请输入银行卡绑定号码或常用号码">\r\n                </div>\r\n                <div class="btnGroup pull-right">\r\n                    <a class="btn btn-primary h42" id="infoSureToModalBtn" data-result="';
        if (helper = helpers.result) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.result;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '" data-encryptkey="';
        if (helper = helpers.encryptKey) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.encryptKey;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '" data-borrowername="';
        if (helper = helpers.borrowerName) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.borrowerName;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '" data-sex="';
        if (helper = helpers.sex) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.sex;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '" data-nation="';
        if (helper = helpers.nation) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.nation;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '" data-birthdate="';
        if (helper = helpers.birthdate) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.birthdate;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '"\r\n                       data-address="';
        if (helper = helpers.address) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.address;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '" data-imgUrl="';
        if (helper = helpers.imgUrl) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.imgUrl;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '" data-issuer="';
        if (helper = helpers.issuer) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.issuer;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '" data-validDate="';
        if (helper = helpers.validDate) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.validDate;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '" data-faceUrl="';
        if (helper = helpers.faceUrl) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.faceUrl;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '" data-cardnum="';
        if (helper = helpers.cardNum) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.cardNum;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '"\r\n                       data-itemid="';
        if (helper = helpers.itemId) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.itemId;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '" data-customerid="';
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
        buffer += escapeExpression(stack1) + '" data-companyid="';
        if (helper = helpers.companyId) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.companyId;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '" data-mobilestatus="';
        if (helper = helpers.mobileStatus) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.mobileStatus;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '">校验手机号码</a>\r\n                    <!--<a class="btn btn-primary h42" id="validatePhoneBtn" data-result="';
        if (helper = helpers.result) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.result;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '" data-encryptkey="';
        if (helper = helpers.encryptKey) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.encryptKey;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '" data-borrowername="';
        if (helper = helpers.borrowerName) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.borrowerName;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '" data-sex="';
        if (helper = helpers.sex) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.sex;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '" data-nation="';
        if (helper = helpers.nation) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.nation;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '" data-birthdate="';
        if (helper = helpers.birthdate) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.birthdate;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '"\r\n                       data-address="';
        if (helper = helpers.address) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.address;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '" data-imgUrl="';
        if (helper = helpers.imgUrl) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.imgUrl;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '" data-issuer="';
        if (helper = helpers.issuer) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.issuer;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '" data-validDate="';
        if (helper = helpers.validDate) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.validDate;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '" data-faceUrl="';
        if (helper = helpers.faceUrl) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.faceUrl;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '" data-cardnum="';
        if (helper = helpers.cardNum) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.cardNum;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '"\r\n                       data-itemid="';
        if (helper = helpers.itemId) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.itemId;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '" data-customerid="';
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
        buffer += escapeExpression(stack1) + '" data-companyid="';
        if (helper = helpers.companyId) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.companyId;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '" data-mobilestatus="';
        if (helper = helpers.mobileStatus) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.mobileStatus;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '">校验手机号码</a>-->\r\n                </div>\r\n            </div>\r\n            <div class="modalFooter2 displayNone">\r\n                <div class="pull-left">\r\n                    <label class="f-18" for="">手机号码：<span id="phoneNumberS1"></span></label>\r\n                    <span class="tip">手机号码与身份匹配成功</span>\r\n                </div>\r\n                <div class="btnGroup pull-right">\r\n                   <a class="btn btn-primary h42 infoSureBtn2" id="infoSureBtn2" href="/cycle/credit/detail/detailPage.htm?encryptKey=';
        if (helper = helpers.encryptKey) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.encryptKey;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '" target="_blank">查看详情</a>\r\n                </div>\r\n            </div>\r\n            <div class="modalFooter3 displayNone">\r\n                <div class="pull-left">\r\n                    <label class="f-18" for="">手机号码：<span id="phoneNumberF1"></span></label>\r\n                    <span class="tip">手机号码与身份匹配失败</span>\r\n                </div>\r\n                <div class="btnGroup pull-right">\r\n                    <a class="btn btn-danger h42" id="validateAgian">重新查询</a>\r\n                    <a class="btn btn-primary h42 infoSureBtn2" id="infoSureBtn2" href="/cycle/credit/detail/detailPage.htm?encryptKey=';
        if (helper = helpers.encryptKey) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.encryptKey;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '" target="_blank">查看详情</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>';
        return buffer
    })
});