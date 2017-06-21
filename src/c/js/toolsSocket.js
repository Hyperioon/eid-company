define(function(require, exports, module) {
    var $ = require("$");
    require("./bootstrap");
    require('./registerHelper');
    require("./jquery.validate");
    require("./validate-add-methods");
    require("./validate-messages-cn");
    var moment = require("./moment.js");

    var headerTmp = require("../handlebars/headerTmp.handlebars");
    var modifyPasswordTmp = require("../handlebars/modifyPassword.handlebars");
    var modifyInfoTmp = require("../handlebars/modifyInfo.handlebars");
    var checkInfoTmp = require("../handlebars/showCheckInfo.handlebars");
    var versionH = require("../handlebars/versionH.handlebars");

    var confirmTmp = require("../handlebars/confirm.handlebars");

    var companyId = "",
        interval = null,
        parentId = "",
        itemId = "",
        isVAgian = 0;

    module.exports = {
        judgeBroswer: function() {
            if (navigator.userAgent.indexOf("MSIE") > 0) {
                if (navigator.userAgent.indexOf("MSIE 6.0") > 0) {
                    $("body").append(versionH());
                    $("#modal-version").modal("show");
                    $('#modal-version').on('hidden.bs.modal', function(e) {
                        // 处理代码...
                        $('#modal-version').remove();
                    })
                }
                if (navigator.userAgent.indexOf("MSIE 7.0") > 0) {
                    $("body").append(versionH());
                    $("#modal-version").modal("show");
                    $('#modal-version').on('hidden.bs.modal', function(e) {
                        // 处理代码...
                        $('#modal-version').remove();
                    })
                }
                if (navigator.userAgent.indexOf("MSIE 8.0") > 0) { //这里是重点，你懂的
                    $("body").append(versionH());
                    $("#modal-version").modal("show");
                    $('#modal-version').on('hidden.bs.modal', function(e) {
                        // 处理代码...
                        $('#modal-version').remove();
                    })
                }
                if (navigator.userAgent.indexOf("MSIE 9.0") > 0 && !window.innerWidth) { //这里是重点，你懂的
                    $("body").append(versionH());
                    $("#modal-version").modal("show");
                    $('#modal-version').on('hidden.bs.modal', function(e) {
                        // 处理代码...
                        $('#modal-version').remove();
                    })
                }
            }
        },
        customerParentInit: function() {
            var self = this;
            self.isVAgian = 0;
            $(".logo:first").html("信鸽身份标识系统");
            self.getCustomerLoginInfo();
            self.modify();
            self.modify2();
            self.logout();
            //获取刷脸信息
            self.getInfoBySocket();
            //interval = setInterval(self.getCheckInfo,3000);
            /* $("body").find(".modal-backdrop").remove();
             $("body").find("#modal-checkInfo").remove();
             $("body").append(checkInfoTmp());
             $("#modal-checkInfo").modal("show").css("left","35%");*/
            //clearInterval(interval);
            if ($(".passCheckBtn").text() == "人脸比对成功") {
                $(".passCheckBtn").css("color", "green")
            } else {
                $(".passCheckBtn").css("color", "red")
            }
            self.clickInfoBtn();
            self.validateMobileBtn();
            self.validateAgianBtn();
            //校验手机号弹窗
            $("body").on("click", ".validateMobileBtn", function() {
                self.isVAgian = $(this).data("mobilestatus");
                console.log("click");
                var validateMobileModal = require("../handlebars/validateMobile.handlebars");
                if ($("body").find("#validateMobileModal")) {
                    $("body").find("#validateMobileModal").remove();
                }
                var data = {
                    encryptKey: $(this).data("encryptkey"),
                    borrowerName: $(this).data("borrowername"),
                    sex: $(this).data("sex"),
                    nation: $(this).data("nation"),
                    birthdate: $(this).data("birthdate"),
                    address: $(this).data("address"),
                    imgUrl: $(this).data("imgurl"),
                    cardNum: $(this).data("cardnum"),
                    issuer: $(this).data("issuer"),
                    validDate: $(this).data("validdate"),
                    customerId: $("#modifyInfo").parent().attr("data-customerid"),
                    faceUrl: $(this).data("faceurl"),
                    result: $(this).data("result")
                }
                $("body").append(validateMobileModal(data));
                $("#validateMobileModal").modal("show");
            });
            $("body").on("click", ".vMobileAgainToModalBtn", function() {
                self.isVAgian = $(this).data("mobilestatus");
                console.log("isVAgian:" + self.isVAgian);
                console.log("click");
                var showCheckInfo = require("../handlebars/showCheckInfo.handlebars");
                if ($("body").find("#modal-checkInfo")) {
                    $("body").find("#modal-checkInfo").remove();
                }
                var data = {
                    encryptKey: $(this).data("encryptkey"),
                    borrowerName: $(this).data("borrowername"),
                    sex: $(this).data("sex"),
                    nation: $(this).data("nation"),
                    birthdate: $(this).data("birthdate"),
                    address: $(this).data("address"),
                    address: $(this).data("address"),
                    imgUrl: $(this).data("imgurl"),
                    cardNum: $(this).data("cardnum"),
                    issuer: $(this).data("issuer"),
                    validDate: $(this).data("validdate"),
                    customerId: $("#modifyInfo").parent().attr("data-customerid"),
                    faceUrl: $(this).data("faceurl"),
                    result: $(this).data("result"),
                    isVAgian: self.isVAgian,
                    mobileStatus: $(this).data("mobilestatus"),
                    itemId: $(this).data("itemid"),
                    customerId: $(this).data("customerid"),
                    companyId: $(this).data("companyid")
                }
                $("body").append(showCheckInfo(data));
                $("#modal-checkInfo").modal("show");
                if (self.isVAgian != 1) {
                    $("#orangeTip").hide();
                }
                $('#scanline').animate({
                    top: '+161px'
                }, 1500, function() {
                    $('#ani').addClass('animated zoomIn').css("display","block");

                    $('#frame').hide()
                    $('#scanline').hide()
                })
                $('#ani').css("display", "block");
                $('#frame').hide();
                $('#scanline').hide();

                    /*$('#scanline').animate({
                        top: '+161px'
                    }, 1500, function() {
                        $('#ani').addClass('animated zoomIn').css("display","block");

                        $('#frame').hide()
                        $('#scanline').hide()
                    })*/
            });

            $("body").on("click", "#closeModalBtn", function() {
                $("#infoSureToModalBtn").html('<img src="http://static.hpbanking.com/xg/uploads/files/5f378673b274c8be9c47dedbdd79e09a-32-32.gif" width="20">');
                //$(".close").trigger("click");
                //验证手机号
                var mobile = $("#mobile").val().trim().replace(/[\-\/]/g, "");;
                console.log(mobile);
                var b = !/^1[3|4|5|7|8][0-9]\d{8}$/.test(mobile); //验证手机号码的正则表达式
                var encryptkey = $(this).data("encryptkey");
                var borrowername = $(this).data("borrowername");
                var cardnum = $(this).data("cardnum");

                var itemId = $(this).data("itemid");
                var customerId = $("#modifyInfo").parent().attr("data-customerid");
                var companyId = $(this).data("companyid");
                var data = {
                    encryptKey: encryptkey,
                    mobile: mobile,
                    borrowerName: borrowername,
                    cardNum: cardnum,
                    itemId: itemId,
                    customerId: customerId,
                    companyId: companyId
                }
                console.log(data);
                if (b && encryptkey && borrowername && cardnum) {
                    //$("#tip1").html("请输入正确的手机号码");
                    $("#tip1").remove();
                    $("#mobile").after('<span class="tip ml15" id="tip1">请输入正确的手机号码</span>').focus();

                } else {
                    if ($("#tip1")) {
                        $("#tip1").remove();
                    }
                    $.ajax({
                        data: data,
                        timeout: 3000,
                        cache: false,
                        type: "post",
                        url: self.isVAgian == 0 ? '/cycle/credit/checkMobile.json' : '/cycle/credit/again/checkMobile.json',
                        success: function(data) {
                            console.log("closeModalBtn============thrValidate================self.isVAgian:" + self.isVAgian);
                            console.log(data);
                            if (data.code == 0) {
                                if (data.obj.thrValidate == 1) {
                                    $(".modalFooter").addClass("displayNone");
                                    $(".modalFooter2").removeClass("displayNone");
                                    $(".modalFooter3").addClass("displayNone");
                                    var phone = mobile;
                                    phone = phone.split('');
                                    phone.splice(3, 0, "-");
                                    phone.splice(8, 0, "-");
                                    $("#phoneNumberS1").html(phone.join(''));
                                } else if (data.obj.thrValidate == 0) {
                                    $(".modalFooter").addClass("displayNone");
                                    $(".modalFooter2").addClass("displayNone");
                                    $(".modalFooter3").removeClass("displayNone");
                                    var phone = mobile;
                                    phone = phone.split('');
                                    phone.splice(3, 0, "-");
                                    phone.splice(8, 0, "-");
                                    $("#phoneNumberF1").html(phone.join(''));
                                }
                                var newItemId = data.obj.newItemId;
                                console.log("newItemId:" + newItemId);
                                if (self.isVAgian == 1) { //重新验证手机号的时候，需要获取新的encryptKey
                                    console.log("set-newItemId");
                                    $(".infoSureBtn2").attr("href", "/cycle/credit/detail/detailPage.htm?encryptKey=" + newItemId);
                                }
                            } else {
                                self.tusi("系统出错了");
                            }
                            $("#infoSureToModalBtn").html('校验手机号码');
                        },
                        error: function(data) {
                            console.log(data);
                            if (data.statusText == "timeout") {
                                $("#tip1").remove();
                                self.tusi('网络未连接，请重试~');
                            } else {
                                self.tusi("系统出错了");
                            }
                            $("#infoSureToModalBtn").html('校验手机号码');
                        }
                    });
                }
            });
            $("body").on("click", "#closeModalBtn2", function() {
                $("#sureValidateMobileBtn").html('<img src="http://static.hpbanking.com/xg/uploads/files/5f378673b274c8be9c47dedbdd79e09a-32-32.gif" width="20">');
                console.log("clicik======");
                var mobile = $("#mobile1").val().trim().replace(/[\-\/]/g, "");
                console.log(mobile);
                var b = !/^1[3|4|5|7|8][0-9]\d{8}$/.test(mobile); //验证手机号码的正则表达式
                var encryptkey = $(this).data("encryptkey");
                var borrowername = $(this).data("borrowername");
                var cardnum = $(this).data("cardnum");
                var itemId = $(this).data("itemid");
                var customerId = $("#modifyInfo").parent().attr("data-customerid");
                var companyId = $(this).data("companyid");
                var data = {
                    encryptKey: encryptkey,
                    mobile: mobile,
                    borrowerName: borrowername,
                    cardNum: cardnum,
                    itemId: itemId,
                    customerId: customerId,
                    companyId: companyId
                }
                console.log(data);
                if (b) {
                    console.log("不合法");
                    //不合法
                    $("#tip1").remove();
                    $("#mobile1").after('<div class="tip" id="tip1">请输入正确的手机号码</div>');
                } else {
                    //合法
                    console.log("合法self.isVAgian:" + self.isVAgian);
                    $.ajax({
                        data: data,
                        cache: false,
                        timeout: 3000,
                        type: "post",
                        url: self.isVAgian == 0 ? '/cycle/credit/checkMobile.json' : '/cycle/credit/again/checkMobile.json',
                        success: function(data) {
                            console.log("newItemId============newItemId================newItemId");
                            console.log(data.obj);
                            if (data.code == 0) {
                                if (data.obj.thrValidate == 1) {
                                    $("#contentBox1").addClass("displayNone");
                                    $("#contentBox2").removeClass("displayNone");
                                    $("#contentBox3").addClass("displayNone");
                                    var phone = mobile;
                                    phone = phone.split('');
                                    phone.splice(3, 0, "-");
                                    phone.splice(8, 0, "-");
                                    $("#phoneNumberS").html(phone.join(''));
                                } else if (data.obj.thrValidate == 0) {
                                    $("#contentBox1").addClass("displayNone");
                                    $("#contentBox2").addClass("displayNone");
                                    $("#contentBox3").removeClass("displayNone");
                                    var phone = mobile;
                                    phone = phone.split('');
                                    phone.splice(3, 0, "-");
                                    phone.splice(8, 0, "-");
                                    $("#phoneNumberF").html(phone.join(''));
                                }
                                var newItemId = data.obj.newItemId;
                                console.log("newItemId:" + newItemId);
                                if (self.isVAgian == 1) {
                                    console.log("set-newItemId");
                                    $(".infoSureBtn2").attr("href", "/cycle/credit/detail/detailPage.htm?encryptKey=" + newItemId);
                                }
                            }
                            $("#sureValidateMobileBtn").html('校验手机号码');
                        },
                        error: function(data) {
                            console.log(data);
                            if (data.statusText == "timeout") {
                                $("#tip1").remove();
                                $("#mobile1").after('<div class="tip" id="tip1">网络未连接，请重试~</div>');
                            } else {
                                self.tusi("系统出错了");
                            }
                            $("#sureValidateMobileBtn").html('校验手机号码');
                        }
                    });
                }
            });
            //确认验证手机号
            $("body").on("click", "#sureValidateMobileBtn", function() {
                console.log("clicik");
                var mobile = $("#mobile1").val().trim().replace(/[\-\/]/g, "");
                if (mobile == "" || mobile == null) {
                    $("#tip1").remove();
                    $("#mobile1").after('<span class="tip ml15" id="tip1">请输入手机号码</span>').focus();
                    return false;
                }
                console.log(mobile);
                var b = !/^1[3|4|5|7|8][0-9]\d{8}$/.test(mobile); //验证手机号码的正则表达式
                if (b) {
                    console.log("不合法");
                    //不合法
                    $("#tip1").remove();
                    $("#mobile1").after('<div class="tip" id="tip1">请输入正确的手机号码</div>');
                } else {
                    $("#tip1").remove();
                    var encryptkey = $(this).data("encryptkey");
                    var borrowername = $(this).data("borrowername");
                    var cardnum = $(this).data("cardnum");
                    var itemId = $(this).data("itemid");
                    var customerId = $("#modifyInfo").parent().attr("data-customerid");
                    var companyId = $(this).data("companyid");
                    var data = {
                        encryptKey: encryptkey,
                        mobile: mobile,
                        borrowerName: borrowername,
                        cardNum: cardnum,
                        itemId: itemId,
                        customerId: customerId,
                        companyId: companyId
                    }
                    console.log(data);
                    var modalConfirm4mobile = require("../handlebars/confirm4mobile2.handlebars");
                    if ($("body").find("#modalConfirm4mobile2")) {
                        $("body").find("#modalConfirm4mobile2").remove();
                    }
                    $("body").append(modalConfirm4mobile(data));
                    $("#modalConfirm4mobile2").modal("show");
                    $(".modal-backdrop:last-child").css("z-index", "1051");
                }
            });

            //手机号输入格式化
            $("body").on("keyup", "#mobile", function() {
                $("#tip1").remove();
                var mobile = $("#mobile").val();
                console.log(mobile);
                var len = mobile.length;
                if (len > self.len && (len == 8 || len == 9)) {
                    mobile = mobile.split('');
                    if (mobile[3] != "-") {
                        mobile.splice(3, 0, "-");
                    }
                    if (mobile[8] != "-") {
                        mobile.splice(8, 0, "-");
                    }
                    $("#mobile").val(mobile.join(''));
                }
                self.len = len;
            });
            $("body").on("keyup", "#mobile1", function() {
                $("#tip1").remove();
                var mobile = $("#mobile1").val();
                console.log(mobile);
                var len = mobile.length;
                if (len > self.len && (len == 8 || len == 9)) {
                    mobile = mobile.split('');
                    if (mobile[3] != "-") {
                        mobile.splice(3, 0, "-");
                    }
                    if (mobile[8] != "-") {
                        mobile.splice(8, 0, "-");
                    }
                    $("#mobile1").val(mobile.join(''));
                }
                self.len = len;
            });
            //确认手机号弹窗
            $("body").on("click", "#infoSureToModalBtn", function() {
                console.log("click");
                var mobile = $("#mobile").val().replace(/[\-\/]/g, "");
                if (mobile == "" || mobile == null) {
                    $("#tip1").remove();
                    $("#mobile").after('<span class="tip ml15" id="tip1">请输入手机号码</span>').focus();
                    return false;
                }
                console.log(mobile);
                var b = !/^1[3|4|5|7|8][0-9]\d{8}$/.test(mobile); //验证手机号码的正则表达式
                if (b) {
                    $("#tip1").remove();
                    $("#mobile").after('<span class="tip ml15" id="tip1">请输入正确的手机号码</span>').focus();
                } else {
                    $("#tip1").remove();
                    var modalConfirm4mobile = require("../handlebars/confirm4mobile.handlebars");
                    if ($("body").find("#modalConfirm4mobile")) {
                        $("body").find("#modalConfirm4mobile").remove();
                    }
                    var data = {
                        mobile: mobile.trim(),
                        encryptKey: $(this).data("encryptkey"),
                        borrowerName: $(this).data("borrowername"),
                        sex: $(this).data("sex"),
                        nation: $(this).data("nation"),
                        birthdate: $(this).data("birthdate"),
                        address: $(this).data("address"),
                        imgUrl: $(this).data("imgurl"),
                        cardNum: $(this).data("cardnum"),
                        issuer: $(this).data("issuer"),
                        validDate: $(this).data("validdate"),
                        customerId: $("#modifyInfo").parent().attr("data-customerid"),
                        faceUrl: $(this).data("faceurl"),
                        result: $(this).data("result"),
                        itemId: $(this).data("itemid"),
                        companyId: $(this).data("companyid")

                    }
                    $("body").append(modalConfirm4mobile(data));
                    /*$("#modalConfirm4mobile").modal("show").css("margin-left","-166px");*/
                    $("#modalConfirm4mobile").modal("show");
                    $(".modal-backdrop:last-child").css("z-index", "1051");
                }
            });

            //点击查看报告按钮之后，触发关闭弹窗的按钮
            $("body").on("click", "#infoSureBtn2", function() {
                setTimeout(function() {
                    $(".close").trigger("click");
                }, 1000);
            });
            //重新查询按钮点击事件
            $("body").on("click", "#validateAgian2", function() {
                $(".close").trigger("click");
                self.isVAgian = 1;
                console.log("click");
                var showCheckInfo = require("../handlebars/showCheckInfo.handlebars");
                if ($("body").find("#modal-checkInfo")) {
                    $("body").find("#modal-checkInfo").remove();
                }
                var data = {
                    encryptKey: $(this).data("encryptkey"),
                    borrowerName: $(this).data("borrowername"),
                    sex: $(this).data("sex"),
                    nation: $(this).data("nation"),
                    birthdate: $(this).data("birthdate"),
                    address: $(this).data("address"),
                    imgUrl: $(this).data("imgurl"),
                    cardNum: $(this).data("cardnum"),
                    issuer: $(this).data("issuer"),
                    validDate: $(this).data("validdate"),
                    customerId: $("#modifyInfo").parent().attr("data-customerid"),
                    faceUrl: $(this).data("faceurl"),
                    result: $(this).data("result")
                }
                $("body").append(showCheckInfo(data));
                $("#modal-checkInfo").modal("show");
                if (self.isVAgian != 1) {
                    $("#orangeTip").hide();
                }
                $('#ani').css("display","block");
                $('#frame').hide()
                $('#scanline').hide()
            });

        },
        validateAgianBtn: function() {
            var self = this;
            $("body").on("click", "#validateAgian", function() {
                self.isVAgian = 1;
                console.log("you click me");
                $(".modalFooter").removeClass("displayNone");
                $(".modalFooter2").addClass("displayNone");
                $(".modalFooter3").addClass("displayNone");
            });
        },
        validateMobileBtn: function() {
            var self = this;
            $("body").on("click", "#validatePhoneBtn", function() {
                var mobile = $("#mobile").val().trim().replace(/[\-\/]/g, "");
                console.log(mobile);
                var b = !/^1[3|4|5|7|8][0-9]\d{8}$/.test(mobile); //验证手机号码的正则表达式
                var encryptkey = $(this).data("encryptkey");
                var borrowername = $(this).data("borrowername");
                var cardnum = $(this).data("cardnum");

                var itemId = $(this).data("itemid");
                var customerId = $("#modifyInfo").parent().attr("data-customerid");
                var companyId = $(this).data("companyid");
                var data = {
                    encryptKey: encryptkey,
                    mobile: mobile,
                    borrowerName: borrowername,
                    cardNum: cardnum,
                    itemId: itemId,
                    customerId: customerId,
                    companyId: companyId
                }
                console.log(data);
                if (b && encryptkey && borrowername && cardnum) {
                    //$("#tip1").html("请输入正确的手机号码");
                    $("#tip1").remove();
                    $("#mobile").after('<span class="tip ml15" id="tip1">请输入正确的手机号码</span>').focus();

                } else {
                    if ($("#tip1")) {
                        $("#tip1").remove();
                    }
                    $.ajax({
                        data: data,
                        timeout: 3000,
                        cache: false,
                        type: "post",
                        url: self.isVAgian == 0 ? '/cycle/credit/checkMobile.json' : '/cycle/credit/again/checkMobile.json',
                        success: function(data) {
                            console.log("============================");
                            console.log(data);
                            if (data.obj == 1) {
                                $(".modalFooter").addClass("displayNone");
                                $(".modalFooter2").removeClass("displayNone");
                                $(".modalFooter3").addClass("displayNone");
                                var phone = mobile;
                                phone = phone.split('');
                                phone.splice(3, 0, "-");
                                phone.splice(8, 0, "-");
                                $("#phoneNumberS1").html(phone.join(''));
                            } else {
                                $(".modalFooter").addClass("displayNone");
                                $(".modalFooter2").addClass("displayNone");
                                $(".modalFooter3").removeClass("displayNone");
                                var phone = mobile;
                                phone = phone.split('');
                                phone.splice(3, 0, "-");
                                phone.splice(8, 0, "-");
                                $("#phoneNumberF1").html(phone.join(''));
                            }
                            console.log(data.obj);
                        },
                        error: function(data) {
                            console.log(data);
                            if (data.statusText == "timeout") {
                                $("#tip1").remove();
                                self.tusi('网络未连接，请重试~');
                            } else {
                                self.tusi("系统出错了");
                            }
                        }
                    });
                }

            });
        },
        //获取用户信息
        getGetToken: function() {
            var self = this;
            var defer = $.Deferred();
            $.ajax({
                type: "post",
                timeout: 3000,
                url: "/common/socket/getToken.json",
                success: function(data, status, xhr) {
                    defer.resolve(data);
                },
                error: function(data) {
                    console.log(data);
                    if (data.statusText == "timeout") {
                        $("#tip1").remove();
                        self.tusi('网络未连接，请重试~');
                    } else {
                        self.tusi("系统出错了");
                    }
                }
            })
            return defer.promise();
        },
        getInfoBySocket: function() {
            var self = this;
            var websocket = null;
            //判断当前浏览器是否支持WebSocket
            console.log(window)
            if (window.WebSocket) {
                $.when(self.getUserInfo()).then(function(data) {
                    //console.log("userInfo:");
                    //console.log(data);
                    if (data.login == true) {
                        companyId = data.user.companyId;
                        console.log("companyId:" + companyId);
                        $.when(self.getGetToken()).then(function(data) {
                            //console.log("Token:");
                            //console.log(data);
                            if (data.code == 0) {
                                var socketToken = data.obj;
                                console.log(socketToken);
                                //张胜电脑
                                //websocket = new ReconnectingWebSocket("ws://192.168.18.220:8040/socket?clientType=client&&companyId="+companyId+"&&socketToken="+socketToken);
                                //线上服务
                                var websocket = $("body").data("websocket");
                                websocket = new ReconnectingWebSocket(websocket + "/socket?clientType=client&&companyId=" + companyId + "&&socketToken=" + socketToken);

                                //连接成功建立的回调方法
                                websocket.onopen = function(event) {
                                    setMessageInnerHTML('{"open":1}');
                                }

                                //接收到消息的回调方法
                                websocket.onmessage = function(event) {
                                    setMessageJson(event.data);
                                }

                                //连接发生错误的回调方法
                                websocket.onerror = function(event) {
                                    setMessageInnerHTML('{"error":1}');
                                    self.tusi("连接服务器失败，请确保网络通畅");

                                };

                                //连接关闭的回调方法
                                websocket.onclose = function() {
                                    setMessageInnerHTML('{"close":1}');
                                    $.ajax({
                                        type: "post",
                                        timeout: 3000,
                                        url: "/common/ajax/user.json",
                                        success: function(data) {
                                            //.log(data);
                                            if (data.login == true) {

                                            } else {
                                                console.log("未登录或登录超时");
                                                window.location.href = "/customer/login.htm";
                                            }
                                        },
                                        error: function(data) {
                                            console.log(data);
                                            if (data.statusText == "timeout") {
                                                $("#tip1").remove();
                                                self.tusi('网络未连接，请重试~');
                                            } else {
                                                self.tusi("系统出错了");
                                            }
                                        }
                                    })
                                }
                            } else {
                                if (data.login) {
                                    self.tusi(data.error);
                                } else {
                                    console.log("未登录或登录超时");
                                    window.location.href = "/customer/login.htm";
                                }
                            }

                        });
                    }

                });
            } else {
                alert('当前浏览器不支持本系统的某些功能，为了更好得体验，请风换个浏览器')
                setInterval(self.getCheckInfo, 3000);
            }

            //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
            window.onbeforeunload = function() {
                websocket.close();

            }

            //将消息显示在网页上
            function setMessageInnerHTML(innerHTML) {
                console.log(innerHTML);
            }
            //将消息显示在网页上
            function setMessageJson(innerHTML) {
                var info = $.parseJSON(innerHTML);
                console.log("======item======");
                console.log(info.item);
                self.isVAgian = 0;
                $("body").find(".modal-backdrop").remove();
                $("body").find("#modal-checkInfo").remove();
                $("body").append(checkInfoTmp(info.item));
                $("#modal-checkInfo").modal("show");
                //clearInterval(interval);
                if ($(".passCheckBtn").text() == "人脸比对成功") {
                    $(".passCheckBtn").css("color", "green")
                } else {
                    $(".passCheckBtn").css("color", "red")
                }
                $('#scanline').animate({
                    top: '+161px'
                }, 1500, function() {
                    $('#ani').addClass('animated zoomIn').css("display", "block");

                    $('#frame').hide()
                    $('#scanline').hide()
                })
            }

            //关闭连接
            function closeWebSocket() {
                websocket.close();
            }

            //打开连接
            function openWebSocket() {
                console.log("openWebSocket");
                if ('WebSocket' in window) {
                    websocket = new WebSocket("ws://192.168.18.220:8020/");
                } else {
                    alert('当前浏览器不支持本系统的某些功能，为了更好得体验，请风换个浏览器')
                }
            }
        },
        webBrowser: function() {
            var self = this;
            var web = navigator.appCodeName;
            var version = navigator.appVersion;
            if (web == "Mozilla") {
                console.log(web);
                var indexStart = version.lastIndexOf("(") + 1;
                var indexEnd = version.lastIndexOf(")");
                var str = version.substring(indexStart, indexEnd);
                var arrStr = str.split(";");
                var len = arrStr.length;
                var currentVersion = arrStr[len - 1].split(":")[1];
                if (currentVersion < 12.0) {
                    console.log("请升级你的IE浏览器到最新版本");
                }

            }
        },
        lookDetailInfo: function() {
            var self = this;
            $("#infoSureBtn").on("click", function() {
                //.log("You click me");
                $("#closeBtn").trigger("click");
                //window.location.href = "/cycle/credit/report.htm?itemId="+itemId;
            });
        },
        getCheckInfo: function() {
            var self = this;
            var data = {
                    companyId: companyId
                }
                //.log(data);
            $.ajax({
                data: data,
                timeout: 3000,
                type: "post",
                url: "/cycle/search/view.json",
                success: function(data) {
                    console.log(data);
                    if (data.code == 0) {
                        var list = data.list;
                        if (list.length > 0) {
                            $("body").find(".modal-backdrop").remove();
                            $("body").find("#modal-checkInfo").remove();
                            $("body").append(checkInfoTmp(list[0]));
                            $("#modal-checkInfo").modal("show");
                            $(".modalFooter").removeClass("displayNone");
                            $(".modalFooter2").addClass("displayNone");
                            $(".modalFooter3").addClass("displayNone");
                            //clearInterval(interval);
                            if ($(".passCheckBtn").text() == "人脸比对成功") {
                                $(".passCheckBtn").css("color", "green")
                            } else {
                                $(".passCheckBtn").css("color", "red")
                            }
                            itemId = list[0].itemId;
                        }
                    } else {
                        //self.tusi(data.error);
                        window.location.href = "/customer/login.htm";
                    }
                },
                error: function(data) {
                    console.log(data);
                    if (data.statusText == "timeout") {
                        self.tusi('网络未连接，请重试~');
                    } else {
                        self.tusi("系统出错了");
                    }
                }
            });
        },
        clickInfoBtn: function() {
            /*$('body').on('click','#closeBtn', function (e) {
                /!*!//.log("you click me");
                //获取刷脸信息
                interval = setInterval(self.getCheckInfo, 2000);*!/
                //window.location.reload();
                //self.getList(self.data);
            });*/
            $('body').on('click', '#infoSureBtn', function(e) {
                if (parentId == 1) {
                    //.log("parentId==1");
                    window.location.href = "/subShop/business/view.htm";
                } else if (parentId == 0) {
                    //.log("parentId==0");
                    window.location.href = "/headShop/business/view.htm";
                }
            });
        },
        //退出登录
        logout: function() {
            $("header").on("click", "#logout", function() {
                var data = {
                        userType: $(this).data("usertype")
                    }
                    //.log(data);
                $.ajax({
                    data: data,
                    timeout: 3000,
                    type: "post",
                    url: "/loginOut.do",
                    success: function(data) {
                        //.log(data);
                        if (data.code == 0) {
                            window.location.href = "/customer/login.htm";
                        }
                    },
                    error: function(data) {
                        console.log(data);
                        if (data.statusText == "timeout") {
                            self.tusi('网络未连接，请重试~');
                        } else {
                            self.tusi("系统出错了");
                        }
                    }
                })
            })
        },
        //获取用户信息
        getCustomerLoginInfo: function() {
            var self = this;
            $.ajax({
                type: "post",
                url: "/common/ajax/user.json",
                success: function(data) {
                    //.log(data);
                    if (data.login == true) {
                        parentId = data.user.parentId;
                        /*if(parentId==0){
                            var parentLeftMenuTmp = require("../handlebars/parentLeftMenuTmp.handlebars");
                            $("#memu").html(parentLeftMenuTmp());
                        }else{
                            var parentRightMenuTmp = require("../handlebars/parentRightMenuTmp.handlebars");
                            $("#memu").html(parentRightMenuTmp());
                        }*/
                        $("#headerCompanyName").html(data.user.companyName + "&nbsp;&nbsp;");
                        $("#headerRealName").html(data.user.realName + "&nbsp;&nbsp;");
                        $("#headerRoleName").before(data.user.roleName);
                        $("#modifyInfo").parent().attr("data-customerid", data.user.customerId);
                        $("#modifyInfo").parent().attr("data-mobile", data.user.mobile);
                        $("#modifyInfo").parent().attr("data-realname", data.user.realName);
                        $("#logout").attr("data-usertype", data.user.userType);
                        if (data.user.roleName != "管理员") {
                            $("#accountManage4Parent").hide();
                            $("#accountManage4Sub").hide();
                        }
                        companyId = data.user.companyId;
                        $("#companyId").val(companyId);
                    } else {
                        console.log("未登录或登录超时");
                        window.location.href = "/customer/login.htm";
                    }
                },
                error: function(data) {
                    console.log(data);
                    if (data.statusText == "timeout") {
                        self.tusi('网络未连接，请重试~');
                    } else {
                        self.tusi("系统出错了");
                    }
                }
            })
        },
        //修改密码
        modify: function() {
            var self = this;
            $("header").on("click", "#modifyPassword", function() {
                $("body").find("#modal-modifyPassword").remove();
                $("body").append(modifyPasswordTmp());
                $("#modal-modifyPassword").modal("show");
                self.submitForm();
            });
        },
        //修改个人信息
        modify2: function() {
            var self = this;
            $("header").on("click", "#modifyInfo", function() {

                var customerId = $(this).parent().data("customerid");
                var mobile = $(this).parent().data("mobile");
                var realName = $(this).parent().data("realname");

                $("body").find("#modal-modifyInfo").remove();
                $("body").append(modifyInfoTmp());
                $("#modal-modifyInfo").modal("show");

                $("#customerId").val(customerId);
                $("#mobile").val(mobile);
                $("#realName").val(realName);

                if (parentId == 0) {
                    self.submitInfoForm("parent");
                } else {
                    self.submitInfoForm("sub");
                }

            });
        },
        submitForm: function() {
            var self = this;
            $("#modifyPasswordForm").validate({
                debug: true, //调试模式取消submit的默认提交功能
                //errorClass: "label.error", //默认为错误的样式类为：error
                focusInvalid: false, //当为false时，验证无效时，没有焦点响应
                onkeyup: false,
                onblur: true,
                submitHandler: function(form) { //表单提交句柄,为一回调函数，带一个参数：form
                    $.ajax({
                        type: "post",
                        url: "/headShop/fixPassword.json",
                        data: $("#modifyPasswordForm").serialize(),
                        success: function(data, status, xhr) {
                            //.log(data);
                            if (data.code == 0) {
                                self.tusi("修改成功");
                                $("#modal-modifyPassword").modal("hide");
                                self.getList(self.data);
                            } else {
                                self.tusi("修改失败");
                            }
                        },
                        error: function(data) {
                            console.log(data);
                            if (data.statusText == "timeout") {
                                self.tusi('网络未连接，请重试~');
                            } else {
                                self.tusi("系统出错了");
                            }
                        }
                    })
                },
                rules: {
                    olderPassword: {
                        required: true,
                    },
                    newPassword: {
                        required: true,
                        minlength: 6
                    },
                    confirm: {
                        required: true,
                        equalTo: "#newPassword"
                    }
                },
                messages: {
                    olderPassword: {
                        required: "<i>*</i> 旧密码不能为空"
                    },
                    newPassword: {
                        required: "<i>*</i> 新密码不能为空",
                        minlength: "<i>*</i> 新密码至少为6位",
                    },
                    confirm: {
                        required: "<i>*</i> 确认新密码不能为空",
                    }
                }
            });
        },
        submitInfoForm: function(type) {
            var self = this;
            $("#modifyInfoForm").validate({
                debug: true, //调试模式取消submit的默认提交功能
                //errorClass: "label.error", //默认为错误的样式类为：error
                focusInvalid: false, //当为false时，验证无效时，没有焦点响应
                onkeyup: false,
                onblur: true,
                submitHandler: function(form) { //表单提交句柄,为一回调函数，带一个参数：form
                    $.ajax({
                        type: "post",
                        url: type == "parent" ? "/headShop/editSelfInfo.json" : "/subShop/editSelfInfo.json",
                        data: $("#modifyInfoForm").serialize(),
                        success: function(data, status, xhr) {
                            //.log(data);
                            if (data.code == 0) {
                                $("#headerRealName").html($("#realName").val());
                                self.tusi("编辑成功");
                                $("#modal-modifyInfo").modal("hide");
                            } else {
                                self.tusi(data.error);
                            }
                        },
                        error: function(data) {
                            console.log(data);
                            if (data.statusText == "timeout") {
                                self.tusi('网络未连接，请重试~');
                            } else {
                                self.tusi("系统出错了");
                            }
                        }
                    })
                },
                rules: {
                    mobile: {
                        required: true,
                    },
                    realName: {
                        required: true,
                        maxlength: 10
                    },
                },
                messages: {
                    mobile: {
                        required: "<i>*</i> 电话号码不能为空"
                    },
                    realName: {
                        required: "<i>*</i> 姓名不能为空",
                        maxlength: "<i>*</i> 姓名长度最多是 10 的字符串",
                    },
                }
            });
        },
        //获取类型（角色）列表
        getRoleList: function(roleName) {
            //.log(roleName);
            $.ajax({
                cache: false,
                type: "post",
                url: '/role/view.json',
                success: function(data) {
                    //.log(data);
                    if (data.code == 0) {
                        var list = data.list;
                        var html = "";
                        for (var i = 0; i < list.length; i++) {
                            if (roleName == list[i].roleName) {
                                html += '<option value="' + list[i].roleId + '" selected>' + list[i].roleName + '</option>';
                            } else {
                                html += '<option value="' + list[i].roleId + '">' + list[i].roleName + '</option>';
                            }
                        }
                        $("#roleId").html(html)
                    } else {
                        self.tusi("获取角色失败,请刷新");
                    }
                },
                error: function(data) {
                    console.log(data);
                    if (data.statusText == "timeout") {
                        self.tusi('网络未连接，请重试~');
                    } else {
                        self.tusi("系统出错了");
                    }
                }
            });
        },
        //更新图片验证码  
        reloadVcode: function(element) {
            var vcodebtn = $(element),
                vcode = vcodebtn.parent().children(".checkCode"),
                initsrc = vcode.attr("src"),
                o;
            vcodebtn.on("click", function() {
                o = $(this),
                    src = initsrc + "?t=" + Math.random();
                o.parent().children(".checkCode").attr("src", src);
            });
        },
        //ie兼容placeHolder
        JPlaceHolder: function() {
            //检测
            var _check = function() {
                    return 'placeholder' in document.createElement('input');
                },
                //初始化
                init = function() {
                    if (!_check()) {
                        fix();
                    }
                },
                //修复
                fix = function() {
                    jQuery(':input[placeholder]').each(function(index, element) {
                        var self = $(this),
                            txt = self.attr('placeholder');
                        self.wrap($('<div></div>').css({ position: 'relative', zoom: '1', border: 'none', background: 'none', padding: 'none', margin: 'none' }));
                        var pos = self.position(),
                            h = self.outerHeight(true),
                            paddingleft = self.css('padding-left');
                        var holder = $('<span class="ie-placeholder"></span>').text(txt).css({ position: 'absolute', left: pos.left, top: pos.top, height: h, lineHeight: h + 'px', paddingLeft: paddingleft, color: '#969696' }).appendTo(self.parent());
                        self.focusin(function(e) {
                            holder.hide();
                        }).focusout(function(e) {
                            if (!self.val()) {
                                holder.show();
                            }
                        });
                        holder.click(function(e) {
                            holder.hide();
                            self.focus();
                        });
                    });
                }
            init();
        },
        //获取用户信息
        getUserInfo: function() {
            var self = this;
            var o = this;
            // require("callbacks");
            // require("deferred");
            var defer = $.Deferred();
            $.ajax({
                type: "post",
                url: "/common/ajax/user.json",
                success: function(data, status, xhr) {
                    if (data.login == true) {

                    } else {

                    }
                    defer.resolve(data);
                },
                error: function(xhr, errorType, error) {
                    self.tusi(error);
                }
            })
            return defer.promise();
        },
        // 获取url上的参数
        getUrlParam: function(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]);
            return null;
        },
        //设置url参数值，ref参数名,value新的参数值
        setUrlParam: function(url, ref, value) {
            var str = "";
            if (url.indexOf('?') != -1)
                str = url.substr(url.indexOf('?') + 1);
            else
                return url + "?" + ref + "=" + value;
            var returnurl = "";
            var setparam = "";
            var arr;
            var modify = "0";
            if (str.indexOf('&') != -1) {
                arr = str.split('&');
                for (i in arr) {
                    if (arr[i].split('=')[0] == ref) {
                        setparam = value;
                        modify = "1";
                    } else {
                        setparam = arr[i].split('=')[1];
                    }
                    returnurl = returnurl + arr[i].split('=')[0] + "=" + setparam + "&";
                }
                returnurl = returnurl.substr(0, returnurl.length - 1);
                if (modify == "0")
                    if (returnurl == str)
                        returnurl = returnurl + "&" + ref + "=" + value;
            } else {
                if (str.indexOf('=') != -1) {
                    arr = str.split('=');
                    if (arr[0] == ref) {
                        setparam = value;
                        modify = "1";
                    } else {
                        setparam = arr[1];
                    }
                    returnurl = arr[0] + "=" + setparam;
                    if (modify == "0")
                        if (returnurl == str)
                            returnurl = returnurl + "&" + ref + "=" + value;
                } else
                    returnurl = ref + "=" + value;
            }
            return url.substr(0, url.indexOf('?')) + "?" + returnurl;
        },
        //删除url参数值
        removeUrlParam: function(url, ref) {
            var str = "";
            if (url.indexOf('?') != -1) {
                str = url.substr(url.indexOf('?') + 1);
            } else {
                return url;
            }
            var arr = "";
            var returnurl = "";
            var setparam = "";
            if (str.indexOf('&') != -1) {
                arr = str.split('&');
                for (i in arr) {
                    if (arr[i].split('=')[0] != ref) {
                        returnurl = returnurl + arr[i].split('=')[0] + "=" + arr[i].split('=')[1] + "&";
                    }
                }
                return url.substr(0, url.indexOf('?')) + "?" + returnurl.substr(0, returnurl.length - 1);
            } else {
                arr = str.split('=');
                if (arr[0] == ref) {
                    return url.substr(0, url.indexOf('?'));
                } else {
                    return url;
                }
            }
        },
        //时间戳转换
        formatDate: function(datitem) {
            var tra = moment(datitem).format('YYYY-MM-DD');
            // var tra = moment(datitem).format('YYYY-MM-DD HH:mm:ss');
            return tra;
        },
        //时间戳转换为全样式
        formatDateAll: function(datitem) {
            var tra = moment(datitem).format('YYYY-MM-DD HH:mm:ss');
            return tra;
        },
        // 左侧菜单-隐藏显示
        displaynavbar: function() {
            var pngfix = $(".pngfix");
            pngfix.on("click", function() {
                if ($(this).hasClass("open")) {
                    $(this).removeClass("open");
                    $("body").removeClass("big-page");
                } else {
                    $(this).addClass("open");
                    $("body").addClass("big-page");

                }
            })
        },
        tusi: function(msg, delay) {
            var delay = delay || 2000;
            $(".tusi").empty().remove();
            var tipdiv = "<span class='tusi'>" + msg + "</span>";
            $("body").append(tipdiv);
            $(".tusi").css('top', ($(document).scrollTop() + ($(window).height() - $(".tusi").height()) / 2));
            $(".tusi").css('left', ($(document).scrollLeft() + ($(window).width() - $(".tusi").width()) / 2));
            $(".tusi").show();
            setTimeout(function() {
                $(".tusi").hide();
            }, delay);
        },
        // 金额处理除以100
        formatMoney: function(money) {
            return parseFloat(money / 100).toFixed(2);
        }
    };
});
