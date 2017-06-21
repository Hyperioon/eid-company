define("xg/eid-company/1.0.0/p/report/rightBox-debug.handlebars", ["alinw/handlebars/1.3.0/runtime-debug"], function(require, exports, module) {
    var Handlebars = require("alinw/handlebars/1.3.0/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, ">= 1.0.0"];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        var buffer = "",
            stack1, helper, options, helperMissing = helpers.helperMissing,
            escapeExpression = this.escapeExpression,
            functionType = "function",
            self = this;

        function program1(depth0, data) {
            var buffer = "",
                helper, options;
            buffer += '<div class="iconFail">' + escapeExpression((helper = helpers.infoResult || depth0 && depth0.infoResult, options = {
                hash: {},
                data: data
            }, helper ? helper.call(depth0, depth0 && depth0.result, options) : helperMissing.call(depth0, "infoResult", depth0 && depth0.result, options))) + "</div>";
            return buffer
        }

        function program3(depth0, data) {
            var buffer = "",
                helper, options;
            buffer += '<div class="iconComplete">' + escapeExpression((helper = helpers.infoResult || depth0 && depth0.infoResult, options = {
                hash: {},
                data: data
            }, helper ? helper.call(depth0, depth0 && depth0.result, options) : helperMissing.call(depth0, "infoResult", depth0 && depth0.result, options))) + "</div>";
            return buffer
        }

        function program5(depth0, data) {
            return 'onclick="return false"'
        }

        function program7(depth0, data) {
            return "人法扫描"
        }

        function program9(depth0, data) {
            return "点击查看"
        }

        function program11(depth0, data) {
            return "信贷行为"
        }

        function program13(depth0, data) {
            return "不良行为"
        }

        function program15(depth0, data) {
            return "消费行为"
        }

        function program17(depth0, data) {
            return "通讯轨迹"
        }

        function program19(depth0, data) {
            var buffer = "",
                stack1, helper;
            buffer += '\r\n        <a class="btn btn-primary h42" id="checkFullReportBtn" href="/cycle/credit/report.htm?encryptKey=';
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
            buffer += escapeExpression(stack1) + "&&type=fullReport&&mobileStatus=";
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
            buffer += escapeExpression(stack1) + '" target="_blank">查看完整报告</a>\r\n    ';
            return buffer
        }

        function program21(depth0, data) {
            var buffer = "",
                stack1, helper;
            buffer += '\r\n        <a class="btn btn-primary h42 displayNone" id="checkFullReportBtn" href="/cycle/credit/report.htm?encryptKey=';
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
            buffer += escapeExpression(stack1) + "&&type=fullReport&&mobileStatus=";
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
            buffer += escapeExpression(stack1) + '" target="_blank">查看完整报告</a>\r\n    ';
            return buffer
        }
        buffer += '<div class="spirit">\r\n    <img src="http://static.hpbanking.com/xg/uploads/files/2134f7f7b238416b54d1dbbbc0308602-235-508.png" alt="">\r\n    ';
        stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
            hash: {},
            inverse: self.noop,
            fn: self.program(1, program1, data),
            data: data
        }, helper ? helper.call(depth0, depth0 && depth0.result, "!=", 0, options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.result, "!=", 0, options));
        if (stack1 || stack1 === 0) {
            buffer += stack1
        }
        buffer += "\r\n    ";
        stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
            hash: {},
            inverse: self.noop,
            fn: self.program(3, program3, data),
            data: data
        }, helper ? helper.call(depth0, depth0 && depth0.result, "==", 0, options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.result, "==", 0, options));
        if (stack1 || stack1 === 0) {
            buffer += stack1
        }
        buffer += '\r\n    <a class="circle plScan" id="plScan" href="/cycle/credit/report.htm?encryptKey=';
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
        buffer += escapeExpression(stack1) + "&&type=plScan&&mobileStatus=";
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
        buffer += escapeExpression(stack1) + '" target="_blank" ';
        stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
            hash: {},
            inverse: self.noop,
            fn: self.program(5, program5, data),
            data: data
        }, helper ? helper.call(depth0, depth0 && depth0.showReport, "==", 2, options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.showReport, "==", 2, options));
        if (stack1 || stack1 === 0) {
            buffer += stack1
        }
        buffer += '>\r\n        <div class="text">人法扫描</div>\r\n        <div class="outerCircle" id="outerCPlScan">';
        stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
            hash: {},
            inverse: self.noop,
            fn: self.program(7, program7, data),
            data: data
        }, helper ? helper.call(depth0, depth0 && depth0.showReport, "==", 2, options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.showReport, "==", 2, options));
        if (stack1 || stack1 === 0) {
            buffer += stack1
        }
        stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
            hash: {},
            inverse: self.noop,
            fn: self.program(9, program9, data),
            data: data
        }, helper ? helper.call(depth0, depth0 && depth0.showReport, "==", 4, options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.showReport, "==", 4, options));
        if (stack1 || stack1 === 0) {
            buffer += stack1
        }
        buffer += '</div>\r\n        <div class="popover" id="popover">\r\n            <div id="caseRecord"><span class="name"></span><span class="color"></span></div>\r\n        </div>\r\n    </a>\r\n    <a class="circle clBehavior" id="clBehavior" href="/cycle/credit/report.htm?encryptKey=';
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
        buffer += escapeExpression(stack1) + "&&type=clBehavior&&mobileStatus=";
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
        buffer += escapeExpression(stack1) + '" target="_blank" ';
        stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
            hash: {},
            inverse: self.noop,
            fn: self.program(5, program5, data),
            data: data
        }, helper ? helper.call(depth0, depth0 && depth0.showReport, "==", 2, options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.showReport, "==", 2, options));
        if (stack1 || stack1 === 0) {
            buffer += stack1
        }
        buffer += '>\r\n        <div class="text">信贷行为</div>\r\n        <div class="outerCircle" id="outerCClBehavior">';
        stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
            hash: {},
            inverse: self.noop,
            fn: self.program(11, program11, data),
            data: data
        }, helper ? helper.call(depth0, depth0 && depth0.showReport, "==", 2, options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.showReport, "==", 2, options));
        if (stack1 || stack1 === 0) {
            buffer += stack1
        }
        stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
            hash: {},
            inverse: self.noop,
            fn: self.program(9, program9, data),
            data: data
        }, helper ? helper.call(depth0, depth0 && depth0.showReport, "==", 4, options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.showReport, "==", 4, options));
        if (stack1 || stack1 === 0) {
            buffer += stack1
        }
        buffer += '</div>\r\n        <div class="popover" id="popover">\r\n            <div id="trdFinancialOver"><span class="name"></span><span class="color"></span></div>\r\n            <div id="borrowOver"><span class="name"></span><span class="color"></span></div>\r\n            <div id="multiplate"><span class="name"></span><span class="color"></span></div>\r\n            <div id="creditFraud"><span class="name"></span><span class="color"></span></div>\r\n            <div id="blacklist"><span class="name"></span><span class="color"></span></div>\r\n            <div id="lossContact"><span class="name"></span><span class="color"></span></div>\r\n            <div id="creditOver"><span class="name"></span><span class="color"></span></div>\r\n            <div id="pawnRecord"><span class="name"></span><span class="color"></span></div>\r\n        </div>\r\n    </a>\r\n    <a class="circle badBehavior" id="badBehavior" href="/cycle/credit/report.htm?encryptKey=';
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
        buffer += escapeExpression(stack1) + "&&type=badBehavior&&mobileStatus=";
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
        buffer += escapeExpression(stack1) + '" target="_blank" ';
        stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
            hash: {},
            inverse: self.noop,
            fn: self.program(5, program5, data),
            data: data
        }, helper ? helper.call(depth0, depth0 && depth0.showReport, "==", 2, options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.showReport, "==", 2, options));
        if (stack1 || stack1 === 0) {
            buffer += stack1
        }
        buffer += '>\r\n        <div class="text">不良行为</div>\r\n        <div class="outerCircle" id="outerCBadBehavior">';
        stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
            hash: {},
            inverse: self.noop,
            fn: self.program(13, program13, data),
            data: data
        }, helper ? helper.call(depth0, depth0 && depth0.showReport, "==", 2, options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.showReport, "==", 2, options));
        if (stack1 || stack1 === 0) {
            buffer += stack1
        }
        stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
            hash: {},
            inverse: self.noop,
            fn: self.program(9, program9, data),
            data: data
        }, helper ? helper.call(depth0, depth0 && depth0.showReport, "==", 4, options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.showReport, "==", 4, options));
        if (stack1 || stack1 === 0) {
            buffer += stack1
        }
        buffer += '</div>\r\n        <div class="popover" id="popover">\r\n            <div id="penalRecord"><span class="name"></span><span class="color"></span></div>\r\n            <div id="policeRecord"><span class="name"></span><span class="color"></span></div>\r\n            <div id="insuranceCheat"><span class="name"></span><span class="color"></span></div>\r\n            <div id="otherRecord"><span class="name"></span><span class="color"></span></div>\r\n        </div>\r\n    </a>\r\n    <a class="circle consumeBehavior" id="consumeBehavior" href="/cycle/credit/report.htm?encryptKey=';
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
        buffer += escapeExpression(stack1) + "&&type=consumeBehavior&&mobileStatus=";
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
        buffer += escapeExpression(stack1) + '" target="_blank" ';
        stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
            hash: {},
            inverse: self.noop,
            fn: self.program(5, program5, data),
            data: data
        }, helper ? helper.call(depth0, depth0 && depth0.showReport, "==", 2, options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.showReport, "==", 2, options));
        if (stack1 || stack1 === 0) {
            buffer += stack1
        }
        buffer += '>\r\n        <div class="text">消费行为</div>\r\n        <div class="outerCircle" id="outerCConsumeBehavior">';
        stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
            hash: {},
            inverse: self.noop,
            fn: self.program(15, program15, data),
            data: data
        }, helper ? helper.call(depth0, depth0 && depth0.showReport, "==", 2, options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.showReport, "==", 2, options));
        if (stack1 || stack1 === 0) {
            buffer += stack1
        }
        stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
            hash: {},
            inverse: self.noop,
            fn: self.program(9, program9, data),
            data: data
        }, helper ? helper.call(depth0, depth0 && depth0.showReport, "==", 4, options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.showReport, "==", 4, options));
        if (stack1 || stack1 === 0) {
            buffer += stack1
        }
        buffer += '</div>\r\n        <div class="popover" id="popover">\r\n            <div id="ExceptionTrade"><span class="name"></span><span class="color"></span></div>\r\n            <div id="cashOut"><span class="name"></span><span class="color"></span></div>\r\n            <div id="badCost"><span class="name"></span><span class="color"></span></div>\r\n        </div>\r\n    </a>\r\n    <a class="circle communicationTrack" id="communicationTrack" href="/cycle/credit/report.htm?encryptKey=';
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
        buffer += escapeExpression(stack1) + "&&type=communicationTrack&&mobileStatus=";
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
        buffer += escapeExpression(stack1) + '" target="_blank" ';
        stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
            hash: {},
            inverse: self.noop,
            fn: self.program(5, program5, data),
            data: data
        }, helper ? helper.call(depth0, depth0 && depth0.showReport, "==", 2, options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.showReport, "==", 2, options));
        if (stack1 || stack1 === 0) {
            buffer += stack1
        }
        buffer += '>\r\n        <div class="text">通讯轨迹</div>\r\n        <div class="outerCircle" id="outerCCommunicationTrack">';
        stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
            hash: {},
            inverse: self.noop,
            fn: self.program(17, program17, data),
            data: data
        }, helper ? helper.call(depth0, depth0 && depth0.showReport, "==", 2, options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.showReport, "==", 2, options));
        if (stack1 || stack1 === 0) {
            buffer += stack1
        }
        stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
            hash: {},
            inverse: self.noop,
            fn: self.program(9, program9, data),
            data: data
        }, helper ? helper.call(depth0, depth0 && depth0.showReport, "==", 4, options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.showReport, "==", 4, options));
        if (stack1 || stack1 === 0) {
            buffer += stack1
        }
        buffer += '</div>\r\n        <div class="popover" id="popover">\r\n            <div id=""><span class="name">手机状态</span><span class="color fontCGreen">（正常）</span></div>\r\n            <div id="onlineTimeMap"><span class="name"></span><span class="color"></span></div>\r\n            <div id="collectionRecordsMap"><span class="name"></span><span class="color"></span></div>\r\n        </div>\r\n    </a>\r\n\r\n</div>\r\n<div class="flag">\r\n    <div class="lineMg"><span class="sCircle sRed">：表示触碰关键性风险数据，属于预警类别</span></div>\r\n    <div class="lineMg"><span class="sCircle sYellow"></span>：表示触碰非关键性风险数据，属于提示类别</div>\r\n    <div class="lineMg"><span class="sCircle sGreen"></span>：表示未触碰风险数据或未发生</div>\r\n    ';
        stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
            hash: {},
            inverse: self.noop,
            fn: self.program(19, program19, data),
            data: data
        }, helper ? helper.call(depth0, depth0 && depth0.showReport, "==", 4, options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.showReport, "==", 4, options));
        if (stack1 || stack1 === 0) {
            buffer += stack1
        }
        buffer += "\r\n    ";
        stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
            hash: {},
            inverse: self.noop,
            fn: self.program(21, program21, data),
            data: data
        }, helper ? helper.call(depth0, depth0 && depth0.showReport, "==", 2, options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.showReport, "==", 2, options));
        if (stack1 || stack1 === 0) {
            buffer += stack1
        }
        buffer += '\r\n    \r\n</div>\r\n<div class="help" id="help">\r\n    <div id="helpText" style="width: 120px;text-align: right">帮助</div>\r\n    <div class="wrap" id="wrap">\r\n        <div class="con" id = "bx">\r\n\r\n        </div>\r\n        <!--<div class="boxscr" id = "bs">\r\n            <div class="scr" id = "sc"></div>\r\n        </div>-->\r\n    </div>\r\n</div>\r\n<!--\r\n<div class="popover">\r\n    <div class="con" id = "bx">\r\n        <div id="cn">\r\n            1）汽车金融<br>\r\n            <div class="title">一、编号说明</div>\r\n            I1：金融机构M1逾期<br>\r\n            I2：金融机构M2逾期<br>\r\n            I3：金融机构M3逾期<br>\r\n            I4：金融机构M3+逾期<br>\r\n            P1：信贷逾期<br>\r\n            P2：助学贷款逾期<br>\r\n            P3：其他逾期<br>\r\n            B1：网贷黑名单<br>\r\n            B2：信贷黑名单<br>\r\n            --：暂未发现风险<br>\r\n            2）消费信贷<br>\r\n            一、编号说明<br>\r\n            I1：金融机构M1逾期<br>\r\n            I2：金融机构M2逾期<br>\r\n            I3：金融机构M3逾期<br>\r\n            I4：金融机构M3+逾期<br>\r\n            P1：信贷逾期<br>\r\n            P2：助学贷款逾期<br>\r\n            P3：其他逾期<br>\r\n            B1：网贷黑名单<br>\r\n            B2：信贷黑名单<br>\r\n            --：暂未发现风险<br>\r\n            3）租赁行业<br>\r\n            一、编号说明<br>\r\n            B1：网贷黑名单<br>\r\n            B2：信贷黑名单<br>\r\n            O1：信保逾期<br>\r\n            O2：金融机构M1逾期<br>\r\n            O3：金融机构M2逾期<br>\r\n            O4：金融机构M3逾期<br>\r\n            O5：金融机构M3+逾期<br>\r\n            O6：互联网信贷逾期<br>\r\n            --：暂未发现风险<br>\r\n            4）人事行业<br>\r\n            一、编号说明<br>\r\n            B1：网贷黑名单<br>\r\n            B2：信贷黑名单<br>\r\n            H1：失信人执行人<br>\r\n            H2：多平台借款<br>\r\n            H3：金融机构M1逾期<br>\r\n            H4：金融机构M2逾期<br>\r\n            H5：金融机构M3逾期<br>\r\n            H6：金融机构M3+逾期<br>\r\n            H7：互联网信贷逾期<br>\r\n            --：暂未发现风险<br>\r\n        </div>\r\n    </div>\r\n    <div class="boxscr" id = "bs">\r\n        <div class="scr" id = "sc"></div>\r\n    </div>\r\n</div>-->\r\n';
        return buffer
    })
});