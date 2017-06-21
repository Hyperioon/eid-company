define("xg/eid-company/1.0.0/p/adminAccount/index-debug", ["jquery/jquery/1.10.1/jquery-debug", "xg/eid-company/1.0.0/c/js/tools-debug", "xg/eid-company/1.0.0/c/js/bootstrap-debug", "xg/eid-company/1.0.0/c/js/jquery-debug.validate", "xg/eid-company/1.0.0/c/js/validate-add-methods-debug", "xg/eid-company/1.0.0/c/js/validate-messages-cn-debug", "xg/eid-company/1.0.0/c/js/moment-debug", "xg/eid-company/1.0.0/c/handlebars/headerTmp-debug.handlebars", "xg/eid-company/1.0.0/c/handlebars/modifyPassword-debug.handlebars", "xg/eid-company/1.0.0/c/handlebars/modifyInfo-debug.handlebars", "xg/eid-company/1.0.0/c/handlebars/showCheckInfo-debug.handlebars", "xg/eid-company/1.0.0/c/handlebars/versionH-debug.handlebars", "xg/eid-company/1.0.0/c/static/h-ui/js/H-ui-debug", "xg/eid-company/1.0.0/c/static/h-ui.admin/js/H-ui-debug.admin", "xg/eid-company/1.0.0/c/js/registerHelper-debug", "alinw/handlebars/1.3.0/runtime-debug", "xg/eid-company/1.0.0/c/js/jquery-debug.pager", "xg/eid-company/1.0.0/p/adminAccount/headerH-debug.handlebars", "xg/eid-company/1.0.0/p/adminAccount/accountnav-debug.handlebars", "xg/eid-company/1.0.0/p/adminAccount/modifyPassword-debug.handlebars", "xg/eid-company/1.0.0/p/adminAccount/edituseInforH-debug.handlebars", "xg/eid-company/1.0.0/p/adminAccount/customerManage-debug", "xg/eid-company/1.0.0/c/js/jquery-debug.provincesCity", "xg/eid-company/1.0.0/c/js/provincesData-debug", "xg/eid-company/1.0.0/p/adminAccount/customerManageH/addCustomerH-debug.handlebars", "xg/eid-company/1.0.0/p/adminAccount/customerManageH/customerMH-debug.handlebars", "xg/eid-company/1.0.0/p/adminAccount/customerManageH/customerTableH-debug.handlebars", "xg/eid-company/1.0.0/p/adminAccount/deviceManage-debug", "xg/eid-company/1.0.0/p/adminAccount/deviceManageH/deviceMH-debug.handlebars", "xg/eid-company/1.0.0/p/adminAccount/deviceManageH/deviceTableH-debug.handlebars", "xg/eid-company/1.0.0/p/adminAccount/deviceManageH/enDisableH-debug.handlebars", "xg/eid-company/1.0.0/p/adminAccount/inforService-debug", "xg/eid-company/1.0.0/c/js/bootstrap-datetimepicker-debug", "xg/eid-company/1.0.0/c/js/bootstrap-datetimepicker-debug.zh-CN", "xg/eid-company/1.0.0/p/adminAccount/inforServiceH/inforServiceMH-debug.handlebars", "xg/eid-company/1.0.0/p/adminAccount/inforServiceH/inforServiceTableH-debug.handlebars", "xg/eid-company/1.0.0/p/adminAccount/dataCount-debug", "xg/eid-company/1.0.0/p/adminAccount/dataCountH/dataCountMH-debug.handlebars", "xg/eid-company/1.0.0/p/adminAccount/dataCountH/dataCountTableH-debug.handlebars", "xg/eid-company/1.0.0/p/adminAccount/accountManage-debug", "xg/eid-company/1.0.0/p/adminAccount/accountManageH/addAccountH-debug.handlebars", "xg/eid-company/1.0.0/p/adminAccount/accountManageH/editAccountH-debug.handlebars", "xg/eid-company/1.0.0/p/adminAccount/accountManageH/resetPswH-debug.handlebars", "xg/eid-company/1.0.0/p/adminAccount/accountManageH/enableH-debug.handlebars", "xg/eid-company/1.0.0/p/adminAccount/accountManageH/disableH-debug.handlebars", "xg/eid-company/1.0.0/p/adminAccount/accountManageH/accountTableH-debug.handlebars"], function(require, exports, module) {
    var $ = require("jquery/jquery/1.10.1/jquery-debug"),
        tools = require("xg/eid-company/1.0.0/c/js/tools-debug");
    require("xg/eid-company/1.0.0/c/js/jquery-debug.validate");
    require("xg/eid-company/1.0.0/c/js/validate-add-methods-debug");
    require("xg/eid-company/1.0.0/c/js/validate-messages-cn-debug");
    require("xg/eid-company/1.0.0/c/static/h-ui/js/H-ui-debug");
    require("xg/eid-company/1.0.0/c/static/h-ui.admin/js/H-ui-debug.admin");
    require("xg/eid-company/1.0.0/c/js/registerHelper-debug");
    require("xg/eid-company/1.0.0/c/js/jquery-debug.pager");
    var headerH = require("xg/eid-company/1.0.0/p/adminAccount/headerH-debug.handlebars"),
        accountNavH = require("xg/eid-company/1.0.0/p/adminAccount/accountnav-debug.handlebars"),
        modifyPswH = require("xg/eid-company/1.0.0/p/adminAccount/modifyPassword-debug.handlebars"),
        edituseInforH = require("xg/eid-company/1.0.0/p/adminAccount/edituseInforH-debug.handlebars"),
        customerManage = require("xg/eid-company/1.0.0/p/adminAccount/customerManage-debug"),
        deviceManage = require("xg/eid-company/1.0.0/p/adminAccount/deviceManage-debug"),
        inforService = require("xg/eid-company/1.0.0/p/adminAccount/inforService-debug"),
        dataCount = require("xg/eid-company/1.0.0/p/adminAccount/dataCount-debug"),
        accountManage = require("xg/eid-company/1.0.0/p/adminAccount/accountManage-debug"),
        page = $(".page").data("page"),
        data = [];
    var main = {
        init: function() {
            var self = this;
            tools.displaynavbar();
            self.getUserInfo()
        },
        getUserInfo: function() {
            var self = this;
            $.when(tools.getUserInfo()).then(function(data) {
                if (data.login == true) {
                    $(".navbar-wrapper").html(headerH(data.user));
                    switch (page) {
                        case "customerManage":
                            data.customerManage = "current";
                            customerManage.init();
                            break;
                        case "deviceManage":
                            data.deviceManage = "current";
                            deviceManage.init();
                            break;
                        case "inforService":
                            data.inforService = "current";
                            inforService.init();
                            break;
                        case "dataCount":
                            data.dataCount = "current";
                            dataCount.init();
                            break;
                        case "accountManage":
                            data.accountManage = "current";
                            accountManage.init();
                            break
                    }
                    $(".menu_dropdown.bk_2 ul").html(accountNavH(data));
                    self.logout();
                    self.modifyPsw();
                    self.editOption()
                } else {
                    alert("未登录");
                    setTimeout(function() {
                        window.location.href = "/company/login.htm"
                    }, 500)
                }
            }, function() {})
        },
        logout: function() {
            $("body").on("click", "#logoutBtn", function() {
                var data = {
                    userType: $(this).data("usertype")
                };
                $.ajax({
                    type: "post",
                    url: "/loginOut.do",
                    data: data,
                    success: function(data, status, xhr) {
                        if (data.code == 0) {
                            window.location.href = "/company/login.htm"
                        } else {
                            alert("未登录")
                        }
                    },
                    error: function(xhr, errorType, error) {
                        alert(error)
                    }
                })
            })
        },
        modifyPsw: function() {
            var self = this;
            $("body").on("click", "#updpass", function() {
                $("section").after(modifyPswH());
                $("#modal-modifyPassword").modal("show");
                self.modifyPsw_validate();
                $("#modal-modifyPassword").on("hidden.bs.modal", function(e) {
                    $("section").nextAll().remove()
                })
            })
        },
        modifyPsw_validate: function() {
            var validate = $("#modifyPasswordForm").validate({
                debug: true,
                focusInvalid: false,
                onkeyup: false,
                onblur: true,
                submitHandler: function(form) {
                    $.ajax({
                        type: "post",
                        url: "/company/fixPassword.json",
                        data: $("#modifyPasswordForm").serialize(),
                        success: function(data, status, xhr) {
                            if (data.code == -1) {
                                alert(data.error)
                            } else {
                                alert("密码修改成功,请重新登录");
                                setTimeout(function() {
                                    window.location.href = "/company/login.htm"
                                }, 500)
                            }
                        },
                        error: function(xhr, errorType, error) {
                            alert(error)
                        }
                    })
                },
                rules: {
                    olderPassword: {
                        required: true
                    },
                    newPassword: {
                        required: true
                    },
                    confirm: {
                        required: true,
                        equalTo: "#newPassword"
                    }
                },
                messages: {
                    olderPassword: {
                        required: "<i>*</i>旧密码不能为空，请输入"
                    },
                    newPassword: {
                        required: "<i>*</i>新密码不能为空，请输入"
                    },
                    confirm: {
                        required: "<i>*</i>确认不能为空，请输入"
                    }
                }
            })
        },
        editOption: function() {
            var self = this;
            $("body").on("click", "#editInfor", function() {
                var _this = $(this);
                var editData = {
                    userId: _this.data("userid"),
                    mobile: _this.data("mobile"),
                    realName: _this.data("realname")
                };
                $("section").after(edituseInforH(editData));
                $("#modal-edituseInfor").modal("show");
                self.editForm_validate();
                $("#modal-edituseInfor").on("hidden.bs.modal", function(e) {
                    $("section").nextAll().remove()
                })
            })
        },
        editForm_validate: function() {
            var validate = $("#editUseForm").validate({
                debug: true,
                focusInvalid: false,
                onkeyup: false,
                onblur: true,
                submitHandler: function(form) {
                    $.ajax({
                        type: "post",
                        url: "/company/editSelfInfo.json",
                        data: $("#editUseForm").serialize(),
                        success: function(data, status, xhr) {
                            if (data.code == -1) {
                                alert(data.error)
                            } else {
                                alert("个人信息修改成功");
                                setTimeout(function() {
                                    window.location.reload()
                                }, 500)
                            }
                        },
                        error: function(xhr, errorType, error) {
                            alert(error)
                        }
                    })
                },
                rules: {
                    mobile: {
                        required: true,
                        mobile: true
                    },
                    realName: {
                        required: true
                    }
                },
                messages: {
                    mobile: {
                        required: "<i>*</i>手机号码不能为空，请输入"
                    },
                    realName: {
                        required: "<i>*</i>姓名不能为空，请输入"
                    }
                }
            })
        }
    };
    module.exports = main;
    main.init()
});
define("xg/eid-company/1.0.0/c/js/tools-debug", ["jquery/jquery/1.10.1/jquery-debug", "xg/eid-company/1.0.0/c/js/bootstrap-debug", "xg/eid-company/1.0.0/c/js/jquery-debug.validate", "xg/eid-company/1.0.0/c/js/validate-add-methods-debug", "xg/eid-company/1.0.0/c/js/validate-messages-cn-debug", "xg/eid-company/1.0.0/c/js/moment-debug", "xg/eid-company/1.0.0/c/handlebars/headerTmp-debug.handlebars", "xg/eid-company/1.0.0/c/handlebars/modifyPassword-debug.handlebars", "xg/eid-company/1.0.0/c/handlebars/modifyInfo-debug.handlebars", "xg/eid-company/1.0.0/c/handlebars/showCheckInfo-debug.handlebars", "xg/eid-company/1.0.0/c/handlebars/versionH-debug.handlebars"], function(require, exports, module) {
    var $ = require("jquery/jquery/1.10.1/jquery-debug");
    require("xg/eid-company/1.0.0/c/js/bootstrap-debug");
    require("xg/eid-company/1.0.0/c/js/jquery-debug.validate");
    require("xg/eid-company/1.0.0/c/js/validate-add-methods-debug");
    require("xg/eid-company/1.0.0/c/js/validate-messages-cn-debug");
    var moment = require("xg/eid-company/1.0.0/c/js/moment-debug");
    var headerTmp = require("xg/eid-company/1.0.0/c/handlebars/headerTmp-debug.handlebars");
    var modifyPasswordTmp = require("xg/eid-company/1.0.0/c/handlebars/modifyPassword-debug.handlebars");
    var modifyInfoTmp = require("xg/eid-company/1.0.0/c/handlebars/modifyInfo-debug.handlebars");
    var checkInfoTmp = require("xg/eid-company/1.0.0/c/handlebars/showCheckInfo-debug.handlebars");
    var versionH = require("xg/eid-company/1.0.0/c/handlebars/versionH-debug.handlebars");
    var companyId = "",
        interval = null,
        parentId = "",
        itemId = "";
    module.exports = {
        customerParentInit: function() {
            var self = this;
            $(".logo:first").html("信鸽身份标识系统");
            self.getCustomerLoginInfo();
            self.modify();
            self.modify2();
            self.logout();
            self.clickInfoBtn()
        },
        judgeBroswer: function() {
            if (navigator.userAgent.indexOf("MSIE") > 0) {
                if (navigator.userAgent.indexOf("MSIE 6.0") > 0) {
                    $("body").append(versionH());
                    $("#modal-version").modal("show");
                    $("#modal-version").on("hidden.bs.modal", function(e) {
                        $("#modal-version").remove()
                    })
                }
                if (navigator.userAgent.indexOf("MSIE 7.0") > 0) {
                    $("body").append(versionH());
                    $("#modal-version").modal("show");
                    $("#modal-version").on("hidden.bs.modal", function(e) {
                        $("#modal-version").remove()
                    })
                }
                if (navigator.userAgent.indexOf("MSIE 8.0") > 0) {
                    $("body").append(versionH());
                    $("#modal-version").modal("show");
                    $("#modal-version").on("hidden.bs.modal", function(e) {
                        $("#modal-version").remove()
                    })
                }
                if (navigator.userAgent.indexOf("MSIE 9.0") > 0 && !window.innerWidth) {
                    $("body").append(versionH());
                    $("#modal-version").modal("show");
                    $("#modal-version").on("hidden.bs.modal", function(e) {
                        $("#modal-version").remove()
                    })
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
                if (currentVersion < 12) {
                    console.log("请升级你的IE浏览器到最新版本")
                }
            }
        },
        lookDetailInfo: function() {
            var self = this;
            $("#infoSureBtn").on("click", function() {
                $("#closeBtn").trigger("click")
            })
        },
        getCheckInfo: function() {
            var self = this;
            var data = {
                companyId: companyId
            };
            $.ajax({
                data: data,
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
                            $("#modal-checkInfo").modal("show").css("left", "45%");
                            if ($(".passCheckBtn").text() == "人脸比对成功") {
                                $(".passCheckBtn").css("color", "green")
                            } else {
                                $(".passCheckBtn").css("color", "red")
                            }
                            itemId = list[0].itemId
                        }
                    } else {
                        window.location.href = "/customer/login.htm"
                    }
                }
            })
        },
        clickInfoBtn: function() {
            $("body").on("click", "#closeBtn", function(e) {
                window.location.reload()
            });
            $("body").on("click", "#infoSureBtn", function(e) {
                if (parentId == 1) {
                    window.location.href = "/subShop/business/view.htm"
                } else if (parentId == 0) {
                    window.location.href = "/headShop/business/view.htm"
                }
            })
        },
        logout: function() {
            $("header").on("click", "#logout", function() {
                var data = {
                    userType: $(this).data("usertype")
                };
                $.ajax({
                    data: data,
                    type: "post",
                    url: "/loginOut.do",
                    success: function(data) {
                        if (data.code == 0) {
                            window.location.href = "/customer/login.htm"
                        }
                    }
                })
            })
        },
        getCustomerLoginInfo: function() {
            var self = this;
            $.ajax({
                type: "post",
                url: "/common/ajax/user.json",
                success: function(data) {
                    if (data.login == true) {
                        parentId = data.user.parentId;
                        $("#headerCompanyName").html(data.user.companyName + "&nbsp;&nbsp;");
                        $("#headerRealName").html(data.user.realName + "&nbsp;&nbsp;");
                        $("#headerRoleName").before(data.user.roleName);
                        $("#modifyInfo").parent().attr("data-customerid", data.user.customerId);
                        $("#modifyInfo").parent().attr("data-mobile", data.user.mobile);
                        $("#modifyInfo").parent().attr("data-realname", data.user.realName);
                        $("#logout").attr("data-usertype", data.user.userType);
                        if (data.user.roleName != "管理员") {
                            $("#accountManage4Parent").hide();
                            $("#accountManage4Sub").hide()
                        }
                        companyId = data.user.companyId;
                        $("#companyId").val(companyId)
                    } else {
                        console.log("未登录或登录超时");
                        window.location.href = "/customer/login.htm"
                    }
                }
            })
        },
        modify: function() {
            var self = this;
            $("header").on("click", "#modifyPassword", function() {
                $("body").find("#modal-modifyPassword").remove();
                $("body").append(modifyPasswordTmp());
                $("#modal-modifyPassword").modal("show");
                self.submitForm()
            })
        },
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
                    self.submitInfoForm("parent")
                } else {
                    self.submitInfoForm("sub")
                }
            })
        },
        submitForm: function() {
            var self = this;
            $("#modifyPasswordForm").validate({
                debug: true,
                focusInvalid: false,
                onkeyup: false,
                onblur: true,
                submitHandler: function(form) {
                    $.ajax({
                        type: "post",
                        url: "/headShop/fixPassword.json",
                        data: $("#modifyPasswordForm").serialize(),
                        success: function(data, status, xhr) {
                            if (data.code == 0) {
                                self.tusi("修改成功");
                                $("#modal-modifyPassword").modal("hide");
                                self.getList(self.data)
                            } else {
                                self.tusi("修改失败")
                            }
                        }
                    })
                },
                rules: {
                    olderPassword: {
                        required: true
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
                        minlength: "<i>*</i> 新密码至少为6位"
                    },
                    confirm: {
                        required: "<i>*</i> 确认新密码不能为空"
                    }
                }
            })
        },
        submitInfoForm: function(type) {
            var self = this;
            $("#modifyInfoForm").validate({
                debug: true,
                focusInvalid: false,
                onkeyup: false,
                onblur: true,
                submitHandler: function(form) {
                    $.ajax({
                        type: "post",
                        url: type == "parent" ? "/headShop/editSelfInfo.json" : "/subShop/editSelfInfo.json",
                        data: $("#modifyInfoForm").serialize(),
                        success: function(data, status, xhr) {
                            if (data.code == 0) {
                                $("#headerRealName").html($("#realName").val());
                                self.tusi("编辑成功");
                                $("#modal-modifyInfo").modal("hide")
                            } else {
                                self.tusi(data.error)
                            }
                        }
                    })
                },
                rules: {
                    mobile: {
                        required: true
                    },
                    realName: {
                        required: true,
                        maxlength: 10
                    }
                },
                messages: {
                    mobile: {
                        required: "<i>*</i> 电话号码不能为空"
                    },
                    realName: {
                        required: "<i>*</i> 姓名不能为空",
                        maxlength: "<i>*</i> 姓名长度最多是 10 的字符串"
                    }
                }
            })
        },
        getRoleList: function(roleName) {
            $.ajax({
                cache: false,
                type: "post",
                url: "/role/view.json",
                success: function(data) {
                    if (data.code == 0) {
                        var list = data.list;
                        var html = "";
                        for (var i = 0; i < list.length; i++) {
                            if (roleName == list[i].roleName) {
                                html += '<option value="' + list[i].roleId + '" selected>' + list[i].roleName + "</option>"
                            } else {
                                html += '<option value="' + list[i].roleId + '">' + list[i].roleName + "</option>"
                            }
                        }
                        $("#roleId").html(html)
                    } else {
                        self.tusi("获取角色失败,请刷新")
                    }
                }
            })
        },
        reloadVcode: function(element) {
            var vcodebtn = $(element),
                vcode = vcodebtn.parent().children(".checkCode"),
                initsrc = vcode.attr("src"),
                o;
            vcodebtn.on("click", function() {
                o = $(this), src = initsrc + "?t=" + Math.random();
                o.parent().children(".checkCode").attr("src", src)
            })
        },
        JPlaceHolder: function() {
            var _check = function() {
                    return "placeholder" in document.createElement("input")
                },
                init = function() {
                    if (!_check()) {
                        fix()
                    }
                },
                fix = function() {
                    jQuery(":input[placeholder]").each(function(index, element) {
                        var self = $(this),
                            txt = self.attr("placeholder");
                        self.wrap($("<div></div>").css({
                            position: "relative",
                            zoom: "1",
                            border: "none",
                            background: "none",
                            padding: "none",
                            margin: "none"
                        }));
                        var pos = self.position(),
                            h = self.outerHeight(true),
                            paddingleft = self.css("padding-left");
                        var holder = $('<span class="ie-placeholder"></span>').text(txt).css({
                            position: "absolute",
                            left: pos.left,
                            top: pos.top,
                            height: h,
                            lineHeight: h + "px",
                            paddingLeft: paddingleft,
                            color: "#969696"
                        }).appendTo(self.parent());
                        self.focusin(function(e) {
                            holder.hide()
                        }).focusout(function(e) {
                            if (!self.val()) {
                                holder.show()
                            }
                        });
                        holder.click(function(e) {
                            holder.hide();
                            self.focus()
                        })
                    })
                };
            init()
        },
        getUserInfo: function() {
            var self = this;
            var o = this;
            var defer = $.Deferred();
            $.ajax({
                type: "post",
                url: "/common/ajax/user.json",
                success: function(data, status, xhr) {
                    if (data.login == true) {} else {}
                    defer.resolve(data)
                },
                error: function(xhr, errorType, error) {
                    self.tusi(error)
                }
            });
            return defer.promise()
        },
        getUrlParam: function(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]);
            return null
        },
        setUrlParam: function(url, ref, value) {
            var str = "";
            if (url.indexOf("?") != -1) str = url.substr(url.indexOf("?") + 1);
            else return url + "?" + ref + "=" + value;
            var returnurl = "";
            var setparam = "";
            var arr;
            var modify = "0";
            if (str.indexOf("&") != -1) {
                arr = str.split("&");
                for (i in arr) {
                    if (arr[i].split("=")[0] == ref) {
                        setparam = value;
                        modify = "1"
                    } else {
                        setparam = arr[i].split("=")[1]
                    }
                    returnurl = returnurl + arr[i].split("=")[0] + "=" + setparam + "&"
                }
                returnurl = returnurl.substr(0, returnurl.length - 1);
                if (modify == "0")
                    if (returnurl == str) returnurl = returnurl + "&" + ref + "=" + value
            } else {
                if (str.indexOf("=") != -1) {
                    arr = str.split("=");
                    if (arr[0] == ref) {
                        setparam = value;
                        modify = "1"
                    } else {
                        setparam = arr[1]
                    }
                    returnurl = arr[0] + "=" + setparam;
                    if (modify == "0")
                        if (returnurl == str) returnurl = returnurl + "&" + ref + "=" + value
                } else returnurl = ref + "=" + value
            }
            return url.substr(0, url.indexOf("?")) + "?" + returnurl
        },
        removeUrlParam: function(url, ref) {
            var str = "";
            if (url.indexOf("?") != -1) {
                str = url.substr(url.indexOf("?") + 1)
            } else {
                return url
            }
            var arr = "";
            var returnurl = "";
            var setparam = "";
            if (str.indexOf("&") != -1) {
                arr = str.split("&");
                for (i in arr) {
                    if (arr[i].split("=")[0] != ref) {
                        returnurl = returnurl + arr[i].split("=")[0] + "=" + arr[i].split("=")[1] + "&"
                    }
                }
                return url.substr(0, url.indexOf("?")) + "?" + returnurl.substr(0, returnurl.length - 1)
            } else {
                arr = str.split("=");
                if (arr[0] == ref) {
                    return url.substr(0, url.indexOf("?"))
                } else {
                    return url
                }
            }
        },
        getnewdate: function(ns) {
            var date = new Date(parseInt(ns));
            var Y = date.getFullYear() + "-";
            var M = (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) + "-";
            var D = date.getDate();
            return Y + M + D
        },
        formatDate2: function(time) {
            var timestamp3 = time;
            var newDate = new Date;
            newDate.setTime(timestamp3);
            return new newDate.toLocaleDateString
        },
        formatDate: function(datitem) {
            var tra = moment(datitem).format("YYYY-MM-DD");
            return tra
        },
        formatDateAll: function(datitem) {
            var tra = moment(datitem).format("YYYY-MM-DD HH:mm:ss");
            return tra
        },
        displaynavbar: function() {
            var pngfix = $(".pngfix");
            pngfix.on("click", function() {
                if ($(this).hasClass("open")) {
                    $(this).removeClass("open");
                    $("body").removeClass("big-page")
                } else {
                    $(this).addClass("open");
                    $("body").addClass("big-page")
                }
            })
        },
        tusi: function(msg, delay) {
            var delay = delay || 2e3;
            $(".tusi").empty().remove();
            var tipdiv = "<span class='tusi'>" + msg + "</span>";
            $("body").append(tipdiv);
            $(".tusi").css("top", $(document).scrollTop() + ($(window).height() - $(".tusi").height()) / 2);
            $(".tusi").css("left", $(document).scrollLeft() + ($(window).width() - $(".tusi").width()) / 2);
            $(".tusi").show();
            setTimeout(function() {
                $(".tusi").hide()
            }, delay)
        },
        formatMoney: function(money) {
            return parseFloat(money / 100).toFixed(2)
        }
    }
});
define("xg/eid-company/1.0.0/c/js/bootstrap-debug", [], function(require, exports, module) {
    if (typeof jQuery === "undefined") {
        throw new Error("Bootstrap's JavaScript requires jQuery")
    } + function($) {
        "use strict";
        var version = $.fn.jquery.split(" ")[0].split(".");
        if (version[0] < 2 && version[1] < 9 || version[0] == 1 && version[1] == 9 && version[2] < 1) {
            throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
        }
    }(jQuery); + function($) {
        "use strict";

        function transitionEnd() {
            var el = document.createElement("bootstrap");
            var transEndEventNames = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
            for (var name in transEndEventNames) {
                if (el.style[name] !== undefined) {
                    return {
                        end: transEndEventNames[name]
                    }
                }
            }
            return false
        }
        $.fn.emulateTransitionEnd = function(duration) {
            var called = false;
            var $el = this;
            $(this).one("bsTransitionEnd", function() {
                called = true
            });
            var callback = function() {
                if (!called) $($el).trigger($.support.transition.end)
            };
            setTimeout(callback, duration);
            return this
        };
        $(function() {
            $.support.transition = transitionEnd();
            if (!$.support.transition) return;
            $.event.special.bsTransitionEnd = {
                bindType: $.support.transition.end,
                delegateType: $.support.transition.end,
                handle: function(e) {
                    if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                }
            }
        })
    }(jQuery); + function($) {
        "use strict";
        var dismiss = '[data-dismiss="alert"]';
        var Alert = function(el) {
            $(el).on("click", dismiss, this.close)
        };
        Alert.VERSION = "3.3.5";
        Alert.TRANSITION_DURATION = 150;
        Alert.prototype.close = function(e) {
            var $this = $(this);
            var selector = $this.attr("data-target");
            if (!selector) {
                selector = $this.attr("href");
                selector = selector && selector.replace(/.*(?=#[^\s]*$)/, "")
            }
            var $parent = $(selector);
            if (e) e.preventDefault();
            if (!$parent.length) {
                $parent = $this.closest(".alert")
            }
            $parent.trigger(e = $.Event("close.bs.alert"));
            if (e.isDefaultPrevented()) return;
            $parent.removeClass("in");

            function removeElement() {
                $parent.detach().trigger("closed.bs.alert").remove()
            }
            $.support.transition && $parent.hasClass("fade") ? $parent.one("bsTransitionEnd", removeElement).emulateTransitionEnd(Alert.TRANSITION_DURATION) : removeElement()
        };

        function Plugin(option) {
            return this.each(function() {
                var $this = $(this);
                var data = $this.data("bs.alert");
                if (!data) $this.data("bs.alert", data = new Alert(this));
                if (typeof option == "string") data[option].call($this)
            })
        }
        var old = $.fn.alert;
        $.fn.alert = Plugin;
        $.fn.alert.Constructor = Alert;
        $.fn.alert.noConflict = function() {
            $.fn.alert = old;
            return this
        };
        $(document).on("click.bs.alert.data-api", dismiss, Alert.prototype.close)
    }(jQuery); + function($) {
        "use strict";
        var Button = function(element, options) {
            this.$element = $(element);
            this.options = $.extend({}, Button.DEFAULTS, options);
            this.isLoading = false
        };
        Button.VERSION = "3.3.5";
        Button.DEFAULTS = {
            loadingText: "loading..."
        };
        Button.prototype.setState = function(state) {
            var d = "disabled";
            var $el = this.$element;
            var val = $el.is("input") ? "val" : "html";
            var data = $el.data();
            state += "Text";
            if (data.resetText == null) $el.data("resetText", $el[val]());
            setTimeout($.proxy(function() {
                $el[val](data[state] == null ? this.options[state] : data[state]);
                if (state == "loadingText") {
                    this.isLoading = true;
                    $el.addClass(d).attr(d, d)
                } else if (this.isLoading) {
                    this.isLoading = false;
                    $el.removeClass(d).removeAttr(d)
                }
            }, this), 0)
        };
        Button.prototype.toggle = function() {
            var changed = true;
            var $parent = this.$element.closest('[data-toggle="buttons"]');
            if ($parent.length) {
                var $input = this.$element.find("input");
                if ($input.prop("type") == "radio") {
                    if ($input.prop("checked")) changed = false;
                    $parent.find(".active").removeClass("active");
                    this.$element.addClass("active")
                } else if ($input.prop("type") == "checkbox") {
                    if ($input.prop("checked") !== this.$element.hasClass("active")) changed = false;
                    this.$element.toggleClass("active")
                }
                $input.prop("checked", this.$element.hasClass("active"));
                if (changed) $input.trigger("change")
            } else {
                this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
                this.$element.toggleClass("active")
            }
        };

        function Plugin(option) {
            return this.each(function() {
                var $this = $(this);
                var data = $this.data("bs.button");
                var options = typeof option == "object" && option;
                if (!data) $this.data("bs.button", data = new Button(this, options));
                if (option == "toggle") data.toggle();
                else if (option) data.setState(option)
            })
        }
        var old = $.fn.button;
        $.fn.button = Plugin;
        $.fn.button.Constructor = Button;
        $.fn.button.noConflict = function() {
            $.fn.button = old;
            return this
        };
        $(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(e) {
            var $btn = $(e.target);
            if (!$btn.hasClass("btn")) $btn = $btn.closest(".btn");
            Plugin.call($btn, "toggle");
            if (!($(e.target).is('input[type="radio"]') || $(e.target).is('input[type="checkbox"]'))) e.preventDefault()
        }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
            $(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
        })
    }(jQuery); + function($) {
        "use strict";
        var Carousel = function(element, options) {
            this.$element = $(element);
            this.$indicators = this.$element.find(".carousel-indicators");
            this.options = options;
            this.paused = null;
            this.sliding = null;
            this.interval = null;
            this.$active = null;
            this.$items = null;
            this.options.keyboard && this.$element.on("keydown.bs.carousel", $.proxy(this.keydown, this));
            this.options.pause == "hover" && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", $.proxy(this.pause, this)).on("mouseleave.bs.carousel", $.proxy(this.cycle, this))
        };
        Carousel.VERSION = "3.3.5";
        Carousel.TRANSITION_DURATION = 600;
        Carousel.DEFAULTS = {
            interval: 5e3,
            pause: "hover",
            wrap: true,
            keyboard: true
        };
        Carousel.prototype.keydown = function(e) {
            if (/input|textarea/i.test(e.target.tagName)) return;
            switch (e.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            e.preventDefault()
        };
        Carousel.prototype.cycle = function(e) {
            e || (this.paused = false);
            this.interval && clearInterval(this.interval);
            this.options.interval && !this.paused && (this.interval = setInterval($.proxy(this.next, this), this.options.interval));
            return this
        };
        Carousel.prototype.getItemIndex = function(item) {
            this.$items = item.parent().children(".item");
            return this.$items.index(item || this.$active)
        };
        Carousel.prototype.getItemForDirection = function(direction, active) {
            var activeIndex = this.getItemIndex(active);
            var willWrap = direction == "prev" && activeIndex === 0 || direction == "next" && activeIndex == this.$items.length - 1;
            if (willWrap && !this.options.wrap) return active;
            var delta = direction == "prev" ? -1 : 1;
            var itemIndex = (activeIndex + delta) % this.$items.length;
            return this.$items.eq(itemIndex)
        };
        Carousel.prototype.to = function(pos) {
            var that = this;
            var activeIndex = this.getItemIndex(this.$active = this.$element.find(".item.active"));
            if (pos > this.$items.length - 1 || pos < 0) return;
            if (this.sliding) return this.$element.one("slid.bs.carousel", function() {
                that.to(pos)
            });
            if (activeIndex == pos) return this.pause().cycle();
            return this.slide(pos > activeIndex ? "next" : "prev", this.$items.eq(pos))
        };
        Carousel.prototype.pause = function(e) {
            e || (this.paused = true);
            if (this.$element.find(".next, .prev").length && $.support.transition) {
                this.$element.trigger($.support.transition.end);
                this.cycle(true)
            }
            this.interval = clearInterval(this.interval);
            return this
        };
        Carousel.prototype.next = function() {
            if (this.sliding) return;
            return this.slide("next")
        };
        Carousel.prototype.prev = function() {
            if (this.sliding) return;
            return this.slide("prev")
        };
        Carousel.prototype.slide = function(type, next) {
            var $active = this.$element.find(".item.active");
            var $next = next || this.getItemForDirection(type, $active);
            var isCycling = this.interval;
            var direction = type == "next" ? "left" : "right";
            var that = this;
            if ($next.hasClass("active")) return this.sliding = false;
            var relatedTarget = $next[0];
            var slideEvent = $.Event("slide.bs.carousel", {
                relatedTarget: relatedTarget,
                direction: direction
            });
            this.$element.trigger(slideEvent);
            if (slideEvent.isDefaultPrevented()) return;
            this.sliding = true;
            isCycling && this.pause();
            if (this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)]);
                $nextIndicator && $nextIndicator.addClass("active")
            }
            var slidEvent = $.Event("slid.bs.carousel", {
                relatedTarget: relatedTarget,
                direction: direction
            });
            if ($.support.transition && this.$element.hasClass("slide")) {
                $next.addClass(type);
                $next[0].offsetWidth;
                $active.addClass(direction);
                $next.addClass(direction);
                $active.one("bsTransitionEnd", function() {
                    $next.removeClass([type, direction].join(" ")).addClass("active");
                    $active.removeClass(["active", direction].join(" "));
                    that.sliding = false;
                    setTimeout(function() {
                        that.$element.trigger(slidEvent)
                    }, 0)
                }).emulateTransitionEnd(Carousel.TRANSITION_DURATION)
            } else {
                $active.removeClass("active");
                $next.addClass("active");
                this.sliding = false;
                this.$element.trigger(slidEvent)
            }
            isCycling && this.cycle();
            return this
        };

        function Plugin(option) {
            return this.each(function() {
                var $this = $(this);
                var data = $this.data("bs.carousel");
                var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == "object" && option);
                var action = typeof option == "string" ? option : options.slide;
                if (!data) $this.data("bs.carousel", data = new Carousel(this, options));
                if (typeof option == "number") data.to(option);
                else if (action) data[action]();
                else if (options.interval) data.pause().cycle()
            })
        }
        var old = $.fn.carousel;
        $.fn.carousel = Plugin;
        $.fn.carousel.Constructor = Carousel;
        $.fn.carousel.noConflict = function() {
            $.fn.carousel = old;
            return this
        };
        var clickHandler = function(e) {
            var href;
            var $this = $(this);
            var $target = $($this.attr("data-target") || (href = $this.attr("href")) && href.replace(/.*(?=#[^\s]+$)/, ""));
            if (!$target.hasClass("carousel")) return;
            var options = $.extend({}, $target.data(), $this.data());
            var slideIndex = $this.attr("data-slide-to");
            if (slideIndex) options.interval = false;
            Plugin.call($target, options);
            if (slideIndex) {
                $target.data("bs.carousel").to(slideIndex)
            }
            e.preventDefault()
        };
        $(document).on("click.bs.carousel.data-api", "[data-slide]", clickHandler).on("click.bs.carousel.data-api", "[data-slide-to]", clickHandler);
        $(window).on("load", function() {
            $('[data-ride="carousel"]').each(function() {
                var $carousel = $(this);
                Plugin.call($carousel, $carousel.data())
            })
        })
    }(jQuery); + function($) {
        "use strict";
        var Collapse = function(element, options) {
            this.$element = $(element);
            this.options = $.extend({}, Collapse.DEFAULTS, options);
            this.$trigger = $('[data-toggle="collapse"][href="#' + element.id + '"],' + '[data-toggle="collapse"][data-target="#' + element.id + '"]');
            this.transitioning = null;
            if (this.options.parent) {
                this.$parent = this.getParent()
            } else {
                this.addAriaAndCollapsedClass(this.$element, this.$trigger)
            }
            if (this.options.toggle) this.toggle()
        };
        Collapse.VERSION = "3.3.5";
        Collapse.TRANSITION_DURATION = 350;
        Collapse.DEFAULTS = {
            toggle: true
        };
        Collapse.prototype.dimension = function() {
            var hasWidth = this.$element.hasClass("width");
            return hasWidth ? "width" : "height"
        };
        Collapse.prototype.show = function() {
            if (this.transitioning || this.$element.hasClass("in")) return;
            var activesData;
            var actives = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (actives && actives.length) {
                activesData = actives.data("bs.collapse");
                if (activesData && activesData.transitioning) return
            }
            var startEvent = $.Event("show.bs.collapse");
            this.$element.trigger(startEvent);
            if (startEvent.isDefaultPrevented()) return;
            if (actives && actives.length) {
                Plugin.call(actives, "hide");
                activesData || actives.data("bs.collapse", null)
            }
            var dimension = this.dimension();
            this.$element.removeClass("collapse").addClass("collapsing")[dimension](0).attr("aria-expanded", true);
            this.$trigger.removeClass("collapsed").attr("aria-expanded", true);
            this.transitioning = 1;
            var complete = function() {
                this.$element.removeClass("collapsing").addClass("collapse in")[dimension]("");
                this.transitioning = 0;
                this.$element.trigger("shown.bs.collapse")
            };
            if (!$.support.transition) return complete.call(this);
            var scrollSize = $.camelCase(["scroll", dimension].join("-"));
            this.$element.one("bsTransitionEnd", $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
        };
        Collapse.prototype.hide = function() {
            if (this.transitioning || !this.$element.hasClass("in")) return;
            var startEvent = $.Event("hide.bs.collapse");
            this.$element.trigger(startEvent);
            if (startEvent.isDefaultPrevented()) return;
            var dimension = this.dimension();
            this.$element[dimension](this.$element[dimension]())[0].offsetHeight;
            this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", false);
            this.$trigger.addClass("collapsed").attr("aria-expanded", false);
            this.transitioning = 1;
            var complete = function() {
                this.transitioning = 0;
                this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
            };
            if (!$.support.transition) return complete.call(this);
            this.$element[dimension](0).one("bsTransitionEnd", $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)
        };
        Collapse.prototype.toggle = function() {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        };
        Collapse.prototype.getParent = function() {
            return $(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each($.proxy(function(i, element) {
                var $element = $(element);
                this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
            }, this)).end()
        };
        Collapse.prototype.addAriaAndCollapsedClass = function($element, $trigger) {
            var isOpen = $element.hasClass("in");
            $element.attr("aria-expanded", isOpen);
            $trigger.toggleClass("collapsed", !isOpen).attr("aria-expanded", isOpen)
        };

        function getTargetFromTrigger($trigger) {
            var href;
            var target = $trigger.attr("data-target") || (href = $trigger.attr("href")) && href.replace(/.*(?=#[^\s]+$)/, "");
            return $(target)
        }

        function Plugin(option) {
            return this.each(function() {
                var $this = $(this);
                var data = $this.data("bs.collapse");
                var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == "object" && option);
                if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false;
                if (!data) $this.data("bs.collapse", data = new Collapse(this, options));
                if (typeof option == "string") data[option]()
            })
        }
        var old = $.fn.collapse;
        $.fn.collapse = Plugin;
        $.fn.collapse.Constructor = Collapse;
        $.fn.collapse.noConflict = function() {
            $.fn.collapse = old;
            return this
        };
        $(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(e) {
            var $this = $(this);
            if (!$this.attr("data-target")) e.preventDefault();
            var $target = getTargetFromTrigger($this);
            var data = $target.data("bs.collapse");
            var option = data ? "toggle" : $this.data();
            Plugin.call($target, option)
        })
    }(jQuery); + function($) {
        "use strict";
        var backdrop = ".dropdown-backdrop";
        var toggle = '[data-toggle="dropdown"]';
        var Dropdown = function(element) {
            $(element).on("click.bs.dropdown", this.toggle)
        };
        Dropdown.VERSION = "3.3.5";

        function getParent($this) {
            var selector = $this.attr("data-target");
            if (!selector) {
                selector = $this.attr("href");
                selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, "")
            }
            var $parent = selector && $(selector);
            return $parent && $parent.length ? $parent : $this.parent()
        }

        function clearMenus(e) {
            if (e && e.which === 3) return;
            $(backdrop).remove();
            $(toggle).each(function() {
                var $this = $(this);
                var $parent = getParent($this);
                var relatedTarget = {
                    relatedTarget: this
                };
                if (!$parent.hasClass("open")) return;
                if (e && e.type == "click" && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return;
                $parent.trigger(e = $.Event("hide.bs.dropdown", relatedTarget));
                if (e.isDefaultPrevented()) return;
                $this.attr("aria-expanded", "false");
                $parent.removeClass("open").trigger("hidden.bs.dropdown", relatedTarget)
            })
        }
        Dropdown.prototype.toggle = function(e) {
            var $this = $(this);
            if ($this.is(".disabled, :disabled")) return;
            var $parent = getParent($this);
            var isActive = $parent.hasClass("open");
            clearMenus();
            if (!isActive) {
                if ("ontouchstart" in document.documentElement && !$parent.closest(".navbar-nav").length) {
                    $(document.createElement("div")).addClass("dropdown-backdrop").insertAfter($(this)).on("click", clearMenus)
                }
                var relatedTarget = {
                    relatedTarget: this
                };
                $parent.trigger(e = $.Event("show.bs.dropdown", relatedTarget));
                if (e.isDefaultPrevented()) return;
                $this.trigger("focus").attr("aria-expanded", "true");
                $parent.toggleClass("open").trigger("shown.bs.dropdown", relatedTarget)
            }
            return false
        };
        Dropdown.prototype.keydown = function(e) {
            if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return;
            var $this = $(this);
            e.preventDefault();
            e.stopPropagation();
            if ($this.is(".disabled, :disabled")) return;
            var $parent = getParent($this);
            var isActive = $parent.hasClass("open");
            if (!isActive && e.which != 27 || isActive && e.which == 27) {
                if (e.which == 27) $parent.find(toggle).trigger("focus");
                return $this.trigger("click")
            }
            var desc = " li:not(.disabled):visible a";
            var $items = $parent.find(".dropdown-menu" + desc);
            if (!$items.length) return;
            var index = $items.index(e.target);
            if (e.which == 38 && index > 0) index--;
            if (e.which == 40 && index < $items.length - 1) index++;
            if (!~index) index = 0;
            $items.eq(index).trigger("focus")
        };

        function Plugin(option) {
            return this.each(function() {
                var $this = $(this);
                var data = $this.data("bs.dropdown");
                if (!data) $this.data("bs.dropdown", data = new Dropdown(this));
                if (typeof option == "string") data[option].call($this)
            })
        }
        var old = $.fn.dropdown;
        $.fn.dropdown = Plugin;
        $.fn.dropdown.Constructor = Dropdown;
        $.fn.dropdown.noConflict = function() {
            $.fn.dropdown = old;
            return this
        };
        $(document).on("click.bs.dropdown.data-api", clearMenus).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
            e.stopPropagation()
        }).on("click.bs.dropdown.data-api", toggle, Dropdown.prototype.toggle).on("keydown.bs.dropdown.data-api", toggle, Dropdown.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", Dropdown.prototype.keydown)
    }(jQuery); + function($) {
        "use strict";
        var Modal = function(element, options) {
            this.options = options;
            this.$body = $(document.body);
            this.$element = $(element);
            this.$dialog = this.$element.find(".modal-dialog");
            this.$backdrop = null;
            this.isShown = null;
            this.originalBodyPad = null;
            this.scrollbarWidth = 0;
            this.ignoreBackdropClick = false;
            if (this.options.remote) {
                this.$element.find(".modal-content").load(this.options.remote, $.proxy(function() {
                    this.$element.trigger("loaded.bs.modal")
                }, this))
            }
        };
        Modal.VERSION = "3.3.5";
        Modal.TRANSITION_DURATION = 300;
        Modal.BACKDROP_TRANSITION_DURATION = 150;
        Modal.DEFAULTS = {
            backdrop: true,
            keyboard: true,
            show: true
        };
        Modal.prototype.toggle = function(_relatedTarget) {
            return this.isShown ? this.hide() : this.show(_relatedTarget)
        };
        Modal.prototype.show = function(_relatedTarget) {
            var that = this;
            var e = $.Event("show.bs.modal", {
                relatedTarget: _relatedTarget
            });
            this.$element.trigger(e);
            if (this.isShown || e.isDefaultPrevented()) return;
            this.isShown = true;
            this.checkScrollbar();
            this.setScrollbar();
            this.$body.addClass("modal-open");
            this.escape();
            this.resize();
            this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', $.proxy(this.hide, this));
            this.$dialog.on("mousedown.dismiss.bs.modal", function() {
                that.$element.one("mouseup.dismiss.bs.modal", function(e) {
                    if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
                })
            });
            this.backdrop(function() {
                var transition = $.support.transition && that.$element.hasClass("fade");
                if (!that.$element.parent().length) {
                    that.$element.appendTo(that.$body)
                }
                that.$element.show().scrollTop(0);
                that.adjustDialog();
                if (transition) {
                    that.$element[0].offsetWidth
                }
                that.$element.addClass("in");
                that.enforceFocus();
                var e = $.Event("shown.bs.modal", {
                    relatedTarget: _relatedTarget
                });
                transition ? that.$dialog.one("bsTransitionEnd", function() {
                    that.$element.trigger("focus").trigger(e)
                }).emulateTransitionEnd(Modal.TRANSITION_DURATION) : that.$element.trigger("focus").trigger(e)
            })
        };
        Modal.prototype.hide = function(e) {
            if (e) e.preventDefault();
            e = $.Event("hide.bs.modal");
            this.$element.trigger(e);
            if (!this.isShown || e.isDefaultPrevented()) return;
            this.isShown = false;
            this.escape();
            this.resize();
            $(document).off("focusin.bs.modal");
            this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal");
            this.$dialog.off("mousedown.dismiss.bs.modal");
            $.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", $.proxy(this.hideModal, this)).emulateTransitionEnd(Modal.TRANSITION_DURATION) : this.hideModal()
        };
        Modal.prototype.enforceFocus = function() {
            $(document).off("focusin.bs.modal").on("focusin.bs.modal", $.proxy(function(e) {
                if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
                    this.$element.trigger("focus")
                }
            }, this))
        };
        Modal.prototype.escape = function() {
            if (this.isShown && this.options.keyboard) {
                this.$element.on("keydown.dismiss.bs.modal", $.proxy(function(e) {
                    e.which == 27 && this.hide()
                }, this))
            } else if (!this.isShown) {
                this.$element.off("keydown.dismiss.bs.modal")
            }
        };
        Modal.prototype.resize = function() {
            if (this.isShown) {
                $(window).on("resize.bs.modal", $.proxy(this.handleUpdate, this))
            } else {
                $(window).off("resize.bs.modal")
            }
        };
        Modal.prototype.hideModal = function() {
            var that = this;
            this.$element.hide();
            this.backdrop(function() {
                that.$body.removeClass("modal-open");
                that.resetAdjustments();
                that.resetScrollbar();
                that.$element.trigger("hidden.bs.modal")
            })
        };
        Modal.prototype.removeBackdrop = function() {
            this.$backdrop && this.$backdrop.remove();
            this.$backdrop = null
        };
        Modal.prototype.backdrop = function(callback) {
            var that = this;
            var animate = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var doAnimate = $.support.transition && animate;
                this.$backdrop = $(document.createElement("div")).addClass("modal-backdrop " + animate).appendTo(this.$body);
                this.$element.on("click.dismiss.bs.modal", $.proxy(function(e) {
                    if (this.ignoreBackdropClick) {
                        this.ignoreBackdropClick = false;
                        return
                    }
                    if (e.target !== e.currentTarget) return;
                    this.options.backdrop == "static" ? this.$element[0].focus() : this.hide()
                }, this));
                if (doAnimate) this.$backdrop[0].offsetWidth;
                this.$backdrop.addClass("in");
                if (!callback) return;
                doAnimate ? this.$backdrop.one("bsTransitionEnd", callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callback()
            } else if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                var callbackRemove = function() {
                    that.removeBackdrop();
                    callback && callback()
                };
                $.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callbackRemove()
            } else if (callback) {
                callback()
            }
        };
        Modal.prototype.handleUpdate = function() {
            this.adjustDialog()
        };
        Modal.prototype.adjustDialog = function() {
            var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight;
            this.$element.css({
                paddingLeft: !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : "",
                paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ""
            })
        };
        Modal.prototype.resetAdjustments = function() {
            this.$element.css({
                paddingLeft: "",
                paddingRight: ""
            })
        };
        Modal.prototype.checkScrollbar = function() {
            var fullWindowWidth = window.innerWidth;
            if (!fullWindowWidth) {
                var documentElementRect = document.documentElement.getBoundingClientRect();
                fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
            }
            this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
            this.scrollbarWidth = this.measureScrollbar()
        };
        Modal.prototype.setScrollbar = function() {
            var bodyPad = parseInt(this.$body.css("padding-right") || 0, 10);
            this.originalBodyPad = document.body.style.paddingRight || "";
            if (this.bodyIsOverflowing) this.$body.css("padding-right", bodyPad + this.scrollbarWidth)
        };
        Modal.prototype.resetScrollbar = function() {
            this.$body.css("padding-right", this.originalBodyPad)
        };
        Modal.prototype.measureScrollbar = function() {
            var scrollDiv = document.createElement("div");
            scrollDiv.className = "modal-scrollbar-measure";
            this.$body.append(scrollDiv);
            var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
            this.$body[0].removeChild(scrollDiv);
            return scrollbarWidth
        };

        function Plugin(option, _relatedTarget) {
            return this.each(function() {
                var $this = $(this);
                var data = $this.data("bs.modal");
                var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == "object" && option);
                if (!data) $this.data("bs.modal", data = new Modal(this, options));
                if (typeof option == "string") data[option](_relatedTarget);
                else if (options.show) data.show(_relatedTarget)
            })
        }
        var old = $.fn.modal;
        $.fn.modal = Plugin;
        $.fn.modal.Constructor = Modal;
        $.fn.modal.noConflict = function() {
            $.fn.modal = old;
            return this
        };
        $(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(e) {
            var $this = $(this);
            var href = $this.attr("href");
            var $target = $($this.attr("data-target") || href && href.replace(/.*(?=#[^\s]+$)/, ""));
            var option = $target.data("bs.modal") ? "toggle" : $.extend({
                remote: !/#/.test(href) && href
            }, $target.data(), $this.data());
            if ($this.is("a")) e.preventDefault();
            $target.one("show.bs.modal", function(showEvent) {
                if (showEvent.isDefaultPrevented()) return;
                $target.one("hidden.bs.modal", function() {
                    $this.is(":visible") && $this.trigger("focus")
                })
            });
            Plugin.call($target, option, this)
        })
    }(jQuery); + function($) {
        "use strict";
        var Tooltip = function(element, options) {
            this.type = null;
            this.options = null;
            this.enabled = null;
            this.timeout = null;
            this.hoverState = null;
            this.$element = null;
            this.inState = null;
            this.init("tooltip", element, options)
        };
        Tooltip.VERSION = "3.3.5";
        Tooltip.TRANSITION_DURATION = 150;
        Tooltip.DEFAULTS = {
            animation: true,
            placement: "top",
            selector: false,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: false,
            container: false,
            viewport: {
                selector: "body",
                padding: 0
            }
        };
        Tooltip.prototype.init = function(type, element, options) {
            this.enabled = true;
            this.type = type;
            this.$element = $(element);
            this.options = this.getOptions(options);
            this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport);
            this.inState = {
                click: false,
                hover: false,
                focus: false
            };
            if (this.$element[0] instanceof document.constructor && !this.options.selector) {
                throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!")
            }
            var triggers = this.options.trigger.split(" ");
            for (var i = triggers.length; i--;) {
                var trigger = triggers[i];
                if (trigger == "click") {
                    this.$element.on("click." + this.type, this.options.selector, $.proxy(this.toggle, this))
                } else if (trigger != "manual") {
                    var eventIn = trigger == "hover" ? "mouseenter" : "focusin";
                    var eventOut = trigger == "hover" ? "mouseleave" : "focusout";
                    this.$element.on(eventIn + "." + this.type, this.options.selector, $.proxy(this.enter, this));
                    this.$element.on(eventOut + "." + this.type, this.options.selector, $.proxy(this.leave, this))
                }
            }
            this.options.selector ? this._options = $.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        };
        Tooltip.prototype.getDefaults = function() {
            return Tooltip.DEFAULTS
        };
        Tooltip.prototype.getOptions = function(options) {
            options = $.extend({}, this.getDefaults(), this.$element.data(), options);
            if (options.delay && typeof options.delay == "number") {
                options.delay = {
                    show: options.delay,
                    hide: options.delay
                }
            }
            return options
        };
        Tooltip.prototype.getDelegateOptions = function() {
            var options = {};
            var defaults = this.getDefaults();
            this._options && $.each(this._options, function(key, value) {
                if (defaults[key] != value) options[key] = value
            });
            return options
        };
        Tooltip.prototype.enter = function(obj) {
            var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data("bs." + this.type);
            if (!self) {
                self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
                $(obj.currentTarget).data("bs." + this.type, self)
            }
            if (obj instanceof $.Event) {
                self.inState[obj.type == "focusin" ? "focus" : "hover"] = true
            }
            if (self.tip().hasClass("in") || self.hoverState == "in") {
                self.hoverState = "in";
                return
            }
            clearTimeout(self.timeout);
            self.hoverState = "in";
            if (!self.options.delay || !self.options.delay.show) return self.show();
            self.timeout = setTimeout(function() {
                if (self.hoverState == "in") self.show()
            }, self.options.delay.show)
        };
        Tooltip.prototype.isInStateTrue = function() {
            for (var key in this.inState) {
                if (this.inState[key]) return true
            }
            return false
        };
        Tooltip.prototype.leave = function(obj) {
            var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data("bs." + this.type);
            if (!self) {
                self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
                $(obj.currentTarget).data("bs." + this.type, self)
            }
            if (obj instanceof $.Event) {
                self.inState[obj.type == "focusout" ? "focus" : "hover"] = false
            }
            if (self.isInStateTrue()) return;
            clearTimeout(self.timeout);
            self.hoverState = "out";
            if (!self.options.delay || !self.options.delay.hide) return self.hide();
            self.timeout = setTimeout(function() {
                if (self.hoverState == "out") self.hide()
            }, self.options.delay.hide)
        };
        Tooltip.prototype.show = function() {
            var e = $.Event("show.bs." + this.type);
            if (this.hasContent() && this.enabled) {
                this.$element.trigger(e);
                var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                if (e.isDefaultPrevented() || !inDom) return;
                var that = this;
                var $tip = this.tip();
                var tipId = this.getUID(this.type);
                this.setContent();
                $tip.attr("id", tipId);
                this.$element.attr("aria-describedby", tipId);
                if (this.options.animation) $tip.addClass("fade");
                var placement = typeof this.options.placement == "function" ? this.options.placement.call(this, $tip[0], this.$element[0]) : this.options.placement;
                var autoToken = /\s?auto?\s?/i;
                var autoPlace = autoToken.test(placement);
                if (autoPlace) placement = placement.replace(autoToken, "") || "top";
                $tip.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).addClass(placement).data("bs." + this.type, this);
                this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element);
                this.$element.trigger("inserted.bs." + this.type);
                var pos = this.getPosition();
                var actualWidth = $tip[0].offsetWidth;
                var actualHeight = $tip[0].offsetHeight;
                if (autoPlace) {
                    var orgPlacement = placement;
                    var viewportDim = this.getPosition(this.$viewport);
                    placement = placement == "bottom" && pos.bottom + actualHeight > viewportDim.bottom ? "top" : placement == "top" && pos.top - actualHeight < viewportDim.top ? "bottom" : placement == "right" && pos.right + actualWidth > viewportDim.width ? "left" : placement == "left" && pos.left - actualWidth < viewportDim.left ? "right" : placement;
                    $tip.removeClass(orgPlacement).addClass(placement)
                }
                var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight);
                this.applyPlacement(calculatedOffset, placement);
                var complete = function() {
                    var prevHoverState = that.hoverState;
                    that.$element.trigger("shown.bs." + that.type);
                    that.hoverState = null;
                    if (prevHoverState == "out") that.leave(that)
                };
                $.support.transition && this.$tip.hasClass("fade") ? $tip.one("bsTransitionEnd", complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete()
            }
        };
        Tooltip.prototype.applyPlacement = function(offset, placement) {
            var $tip = this.tip();
            var width = $tip[0].offsetWidth;
            var height = $tip[0].offsetHeight;
            var marginTop = parseInt($tip.css("margin-top"), 10);
            var marginLeft = parseInt($tip.css("margin-left"), 10);
            if (isNaN(marginTop)) marginTop = 0;
            if (isNaN(marginLeft)) marginLeft = 0;
            offset.top += marginTop;
            offset.left += marginLeft;
            $.offset.setOffset($tip[0], $.extend({
                using: function(props) {
                    $tip.css({
                        top: Math.round(props.top),
                        left: Math.round(props.left)
                    })
                }
            }, offset), 0);
            $tip.addClass("in");
            var actualWidth = $tip[0].offsetWidth;
            var actualHeight = $tip[0].offsetHeight;
            if (placement == "top" && actualHeight != height) {
                offset.top = offset.top + height - actualHeight
            }
            var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight);
            if (delta.left) offset.left += delta.left;
            else offset.top += delta.top;
            var isVertical = /top|bottom/.test(placement);
            var arrowDelta = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight;
            var arrowOffsetPosition = isVertical ? "offsetWidth" : "offsetHeight";
            $tip.offset(offset);
            this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
        };
        Tooltip.prototype.replaceArrow = function(delta, dimension, isVertical) {
            this.arrow().css(isVertical ? "left" : "top", 50 * (1 - delta / dimension) + "%").css(isVertical ? "top" : "left", "")
        };
        Tooltip.prototype.setContent = function() {
            var $tip = this.tip();
            var title = this.getTitle();
            $tip.find(".tooltip-inner")[this.options.html ? "html" : "text"](title);
            $tip.removeClass("fade in top bottom left right")
        };
        Tooltip.prototype.hide = function(callback) {
            var that = this;
            var $tip = $(this.$tip);
            var e = $.Event("hide.bs." + this.type);

            function complete() {
                if (that.hoverState != "in") $tip.detach();
                that.$element.removeAttr("aria-describedby").trigger("hidden.bs." + that.type);
                callback && callback()
            }
            this.$element.trigger(e);
            if (e.isDefaultPrevented()) return;
            $tip.removeClass("in");
            $.support.transition && $tip.hasClass("fade") ? $tip.one("bsTransitionEnd", complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete();
            this.hoverState = null;
            return this
        };
        Tooltip.prototype.fixTitle = function() {
            var $e = this.$element;
            if ($e.attr("title") || typeof $e.attr("data-original-title") != "string") {
                $e.attr("data-original-title", $e.attr("title") || "").attr("title", "")
            }
        };
        Tooltip.prototype.hasContent = function() {
            return this.getTitle()
        };
        Tooltip.prototype.getPosition = function($element) {
            $element = $element || this.$element;
            var el = $element[0];
            var isBody = el.tagName == "BODY";
            var elRect = el.getBoundingClientRect();
            if (elRect.width == null) {
                elRect = $.extend({}, elRect, {
                    width: elRect.right - elRect.left,
                    height: elRect.bottom - elRect.top
                })
            }
            var elOffset = isBody ? {
                top: 0,
                left: 0
            } : $element.offset();
            var scroll = {
                scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop()
            };
            var outerDims = isBody ? {
                width: $(window).width(),
                height: $(window).height()
            } : null;
            return $.extend({}, elRect, scroll, outerDims, elOffset)
        };
        Tooltip.prototype.getCalculatedOffset = function(placement, pos, actualWidth, actualHeight) {
            return placement == "bottom" ? {
                top: pos.top + pos.height,
                left: pos.left + pos.width / 2 - actualWidth / 2
            } : placement == "top" ? {
                top: pos.top - actualHeight,
                left: pos.left + pos.width / 2 - actualWidth / 2
            } : placement == "left" ? {
                top: pos.top + pos.height / 2 - actualHeight / 2,
                left: pos.left - actualWidth
            } : {
                top: pos.top + pos.height / 2 - actualHeight / 2,
                left: pos.left + pos.width
            }
        };
        Tooltip.prototype.getViewportAdjustedDelta = function(placement, pos, actualWidth, actualHeight) {
            var delta = {
                top: 0,
                left: 0
            };
            if (!this.$viewport) return delta;
            var viewportPadding = this.options.viewport && this.options.viewport.padding || 0;
            var viewportDimensions = this.getPosition(this.$viewport);
            if (/right|left/.test(placement)) {
                var topEdgeOffset = pos.top - viewportPadding - viewportDimensions.scroll;
                var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight;
                if (topEdgeOffset < viewportDimensions.top) {
                    delta.top = viewportDimensions.top - topEdgeOffset
                } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) {
                    delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
                }
            } else {
                var leftEdgeOffset = pos.left - viewportPadding;
                var rightEdgeOffset = pos.left + viewportPadding + actualWidth;
                if (leftEdgeOffset < viewportDimensions.left) {
                    delta.left = viewportDimensions.left - leftEdgeOffset
                } else if (rightEdgeOffset > viewportDimensions.right) {
                    delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
                }
            }
            return delta
        };
        Tooltip.prototype.getTitle = function() {
            var title;
            var $e = this.$element;
            var o = this.options;
            title = $e.attr("data-original-title") || (typeof o.title == "function" ? o.title.call($e[0]) : o.title);
            return title
        };
        Tooltip.prototype.getUID = function(prefix) {
            do prefix += ~~(Math.random() * 1e6); while (document.getElementById(prefix));
            return prefix
        };
        Tooltip.prototype.tip = function() {
            if (!this.$tip) {
                this.$tip = $(this.options.template);
                if (this.$tip.length != 1) {
                    throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!")
                }
            }
            return this.$tip
        };
        Tooltip.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        };
        Tooltip.prototype.enable = function() {
            this.enabled = true
        };
        Tooltip.prototype.disable = function() {
            this.enabled = false
        };
        Tooltip.prototype.toggleEnabled = function() {
            this.enabled = !this.enabled
        };
        Tooltip.prototype.toggle = function(e) {
            var self = this;
            if (e) {
                self = $(e.currentTarget).data("bs." + this.type);
                if (!self) {
                    self = new this.constructor(e.currentTarget, this.getDelegateOptions());
                    $(e.currentTarget).data("bs." + this.type, self)
                }
            }
            if (e) {
                self.inState.click = !self.inState.click;
                if (self.isInStateTrue()) self.enter(self);
                else self.leave(self)
            } else {
                self.tip().hasClass("in") ? self.leave(self) : self.enter(self)
            }
        };
        Tooltip.prototype.destroy = function() {
            var that = this;
            clearTimeout(this.timeout);
            this.hide(function() {
                that.$element.off("." + that.type).removeData("bs." + that.type);
                if (that.$tip) {
                    that.$tip.detach()
                }
                that.$tip = null;
                that.$arrow = null;
                that.$viewport = null
            })
        };

        function Plugin(option) {
            return this.each(function() {
                var $this = $(this);
                var data = $this.data("bs.tooltip");
                var options = typeof option == "object" && option;
                if (!data && /destroy|hide/.test(option)) return;
                if (!data) $this.data("bs.tooltip", data = new Tooltip(this, options));
                if (typeof option == "string") data[option]()
            })
        }
        var old = $.fn.tooltip;
        $.fn.tooltip = Plugin;
        $.fn.tooltip.Constructor = Tooltip;
        $.fn.tooltip.noConflict = function() {
            $.fn.tooltip = old;
            return this
        }
    }(jQuery); + function($) {
        "use strict";
        var Popover = function(element, options) {
            this.init("popover", element, options)
        };
        if (!$.fn.tooltip) throw new Error("Popover requires tooltip.js");
        Popover.VERSION = "3.3.5";
        Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        });
        Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype);
        Popover.prototype.constructor = Popover;
        Popover.prototype.getDefaults = function() {
            return Popover.DEFAULTS
        };
        Popover.prototype.setContent = function() {
            var $tip = this.tip();
            var title = this.getTitle();
            var content = this.getContent();
            $tip.find(".popover-title")[this.options.html ? "html" : "text"](title);
            $tip.find(".popover-content").children().detach().end()[this.options.html ? typeof content == "string" ? "html" : "append" : "text"](content);
            $tip.removeClass("fade top bottom left right in");
            if (!$tip.find(".popover-title").html()) $tip.find(".popover-title").hide()
        };
        Popover.prototype.hasContent = function() {
            return this.getTitle() || this.getContent()
        };
        Popover.prototype.getContent = function() {
            var $e = this.$element;
            var o = this.options;
            return $e.attr("data-content") || (typeof o.content == "function" ? o.content.call($e[0]) : o.content)
        };
        Popover.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".arrow")
        };

        function Plugin(option) {
            return this.each(function() {
                var $this = $(this);
                var data = $this.data("bs.popover");
                var options = typeof option == "object" && option;
                if (!data && /destroy|hide/.test(option)) return;
                if (!data) $this.data("bs.popover", data = new Popover(this, options));
                if (typeof option == "string") data[option]()
            })
        }
        var old = $.fn.popover;
        $.fn.popover = Plugin;
        $.fn.popover.Constructor = Popover;
        $.fn.popover.noConflict = function() {
            $.fn.popover = old;
            return this
        }
    }(jQuery); + function($) {
        "use strict";

        function ScrollSpy(element, options) {
            this.$body = $(document.body);
            this.$scrollElement = $(element).is(document.body) ? $(window) : $(element);
            this.options = $.extend({}, ScrollSpy.DEFAULTS, options);
            this.selector = (this.options.target || "") + " .nav li > a";
            this.offsets = [];
            this.targets = [];
            this.activeTarget = null;
            this.scrollHeight = 0;
            this.$scrollElement.on("scroll.bs.scrollspy", $.proxy(this.process, this));
            this.refresh();
            this.process()
        }
        ScrollSpy.VERSION = "3.3.5";
        ScrollSpy.DEFAULTS = {
            offset: 10
        };
        ScrollSpy.prototype.getScrollHeight = function() {
            return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
        };
        ScrollSpy.prototype.refresh = function() {
            var that = this;
            var offsetMethod = "offset";
            var offsetBase = 0;
            this.offsets = [];
            this.targets = [];
            this.scrollHeight = this.getScrollHeight();
            if (!$.isWindow(this.$scrollElement[0])) {
                offsetMethod = "position";
                offsetBase = this.$scrollElement.scrollTop()
            }
            this.$body.find(this.selector).map(function() {
                var $el = $(this);
                var href = $el.data("target") || $el.attr("href");
                var $href = /^#./.test(href) && $(href);
                return $href && $href.length && $href.is(":visible") && [
                    [$href[offsetMethod]().top + offsetBase, href]
                ] || null
            }).sort(function(a, b) {
                return a[0] - b[0]
            }).each(function() {
                that.offsets.push(this[0]);
                that.targets.push(this[1])
            })
        };
        ScrollSpy.prototype.process = function() {
            var scrollTop = this.$scrollElement.scrollTop() + this.options.offset;
            var scrollHeight = this.getScrollHeight();
            var maxScroll = this.options.offset + scrollHeight - this.$scrollElement.height();
            var offsets = this.offsets;
            var targets = this.targets;
            var activeTarget = this.activeTarget;
            var i;
            if (this.scrollHeight != scrollHeight) {
                this.refresh()
            }
            if (scrollTop >= maxScroll) {
                return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
            }
            if (activeTarget && scrollTop < offsets[0]) {
                this.activeTarget = null;
                return this.clear()
            }
            for (i = offsets.length; i--;) {
                activeTarget != targets[i] && scrollTop >= offsets[i] && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1]) && this.activate(targets[i])
            }
        };
        ScrollSpy.prototype.activate = function(target) {
            this.activeTarget = target;
            this.clear();
            var selector = this.selector + '[data-target="' + target + '"],' + this.selector + '[href="' + target + '"]';
            var active = $(selector).parents("li").addClass("active");
            if (active.parent(".dropdown-menu").length) {
                active = active.closest("li.dropdown").addClass("active")
            }
            active.trigger("activate.bs.scrollspy")
        };
        ScrollSpy.prototype.clear = function() {
            $(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
        };

        function Plugin(option) {
            return this.each(function() {
                var $this = $(this);
                var data = $this.data("bs.scrollspy");
                var options = typeof option == "object" && option;
                if (!data) $this.data("bs.scrollspy", data = new ScrollSpy(this, options));
                if (typeof option == "string") data[option]()
            })
        }
        var old = $.fn.scrollspy;
        $.fn.scrollspy = Plugin;
        $.fn.scrollspy.Constructor = ScrollSpy;
        $.fn.scrollspy.noConflict = function() {
            $.fn.scrollspy = old;
            return this
        };
        $(window).on("load.bs.scrollspy.data-api", function() {
            $('[data-spy="scroll"]').each(function() {
                var $spy = $(this);
                Plugin.call($spy, $spy.data())
            })
        })
    }(jQuery); + function($) {
        "use strict";
        var Tab = function(element) {
            this.element = $(element)
        };
        Tab.VERSION = "3.3.5";
        Tab.TRANSITION_DURATION = 150;
        Tab.prototype.show = function() {
            var $this = this.element;
            var $ul = $this.closest("ul:not(.dropdown-menu)");
            var selector = $this.data("target");
            if (!selector) {
                selector = $this.attr("href");
                selector = selector && selector.replace(/.*(?=#[^\s]*$)/, "")
            }
            if ($this.parent("li").hasClass("active")) return;
            var $previous = $ul.find(".active:last a");
            var hideEvent = $.Event("hide.bs.tab", {
                relatedTarget: $this[0]
            });
            var showEvent = $.Event("show.bs.tab", {
                relatedTarget: $previous[0]
            });
            $previous.trigger(hideEvent);
            $this.trigger(showEvent);
            if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return;
            var $target = $(selector);
            this.activate($this.closest("li"), $ul);
            this.activate($target, $target.parent(), function() {
                $previous.trigger({
                    type: "hidden.bs.tab",
                    relatedTarget: $this[0]
                });
                $this.trigger({
                    type: "shown.bs.tab",
                    relatedTarget: $previous[0]
                })
            })
        };
        Tab.prototype.activate = function(element, container, callback) {
            var $active = container.find("> .active");
            var transition = callback && $.support.transition && ($active.length && $active.hasClass("fade") || !!container.find("> .fade").length);

            function next() {
                $active.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", false);
                element.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", true);
                if (transition) {
                    element[0].offsetWidth;
                    element.addClass("in")
                } else {
                    element.removeClass("fade")
                }
                if (element.parent(".dropdown-menu").length) {
                    element.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", true)
                }
                callback && callback()
            }
            $active.length && transition ? $active.one("bsTransitionEnd", next).emulateTransitionEnd(Tab.TRANSITION_DURATION) : next();
            $active.removeClass("in")
        };

        function Plugin(option) {
            return this.each(function() {
                var $this = $(this);
                var data = $this.data("bs.tab");
                if (!data) $this.data("bs.tab", data = new Tab(this));
                if (typeof option == "string") data[option]()
            })
        }
        var old = $.fn.tab;
        $.fn.tab = Plugin;
        $.fn.tab.Constructor = Tab;
        $.fn.tab.noConflict = function() {
            $.fn.tab = old;
            return this
        };
        var clickHandler = function(e) {
            e.preventDefault();
            Plugin.call($(this), "show")
        };
        $(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', clickHandler).on("click.bs.tab.data-api", '[data-toggle="pill"]', clickHandler)
    }(jQuery); + function($) {
        "use strict";
        var Affix = function(element, options) {
            this.options = $.extend({}, Affix.DEFAULTS, options);
            this.$target = $(this.options.target).on("scroll.bs.affix.data-api", $.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", $.proxy(this.checkPositionWithEventLoop, this));
            this.$element = $(element);
            this.affixed = null;
            this.unpin = null;
            this.pinnedOffset = null;
            this.checkPosition()
        };
        Affix.VERSION = "3.3.5";
        Affix.RESET = "affix affix-top affix-bottom";
        Affix.DEFAULTS = {
            offset: 0,
            target: window
        };
        Affix.prototype.getState = function(scrollHeight, height, offsetTop, offsetBottom) {
            var scrollTop = this.$target.scrollTop();
            var position = this.$element.offset();
            var targetHeight = this.$target.height();
            if (offsetTop != null && this.affixed == "top") return scrollTop < offsetTop ? "top" : false;
            if (this.affixed == "bottom") {
                if (offsetTop != null) return scrollTop + this.unpin <= position.top ? false : "bottom";
                return scrollTop + targetHeight <= scrollHeight - offsetBottom ? false : "bottom"
            }
            var initializing = this.affixed == null;
            var colliderTop = initializing ? scrollTop : position.top;
            var colliderHeight = initializing ? targetHeight : height;
            if (offsetTop != null && scrollTop <= offsetTop) return "top";
            if (offsetBottom != null && colliderTop + colliderHeight >= scrollHeight - offsetBottom) return "bottom";
            return false
        };
        Affix.prototype.getPinnedOffset = function() {
            if (this.pinnedOffset) return this.pinnedOffset;
            this.$element.removeClass(Affix.RESET).addClass("affix");
            var scrollTop = this.$target.scrollTop();
            var position = this.$element.offset();
            return this.pinnedOffset = position.top - scrollTop
        };
        Affix.prototype.checkPositionWithEventLoop = function() {
            setTimeout($.proxy(this.checkPosition, this), 1)
        };
        Affix.prototype.checkPosition = function() {
            if (!this.$element.is(":visible")) return;
            var height = this.$element.height();
            var offset = this.options.offset;
            var offsetTop = offset.top;
            var offsetBottom = offset.bottom;
            var scrollHeight = Math.max($(document).height(), $(document.body).height());
            if (typeof offset != "object") offsetBottom = offsetTop = offset;
            if (typeof offsetTop == "function") offsetTop = offset.top(this.$element);
            if (typeof offsetBottom == "function") offsetBottom = offset.bottom(this.$element);
            var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom);
            if (this.affixed != affix) {
                if (this.unpin != null) this.$element.css("top", "");
                var affixType = "affix" + (affix ? "-" + affix : "");
                var e = $.Event(affixType + ".bs.affix");
                this.$element.trigger(e);
                if (e.isDefaultPrevented()) return;
                this.affixed = affix;
                this.unpin = affix == "bottom" ? this.getPinnedOffset() : null;
                this.$element.removeClass(Affix.RESET).addClass(affixType).trigger(affixType.replace("affix", "affixed") + ".bs.affix")
            }
            if (affix == "bottom") {
                this.$element.offset({
                    top: scrollHeight - height - offsetBottom
                })
            }
        };

        function Plugin(option) {
            return this.each(function() {
                var $this = $(this);
                var data = $this.data("bs.affix");
                var options = typeof option == "object" && option;
                if (!data) $this.data("bs.affix", data = new Affix(this, options));
                if (typeof option == "string") data[option]()
            })
        }
        var old = $.fn.affix;
        $.fn.affix = Plugin;
        $.fn.affix.Constructor = Affix;
        $.fn.affix.noConflict = function() {
            $.fn.affix = old;
            return this
        };
        $(window).on("load", function() {
            $('[data-spy="affix"]').each(function() {
                var $spy = $(this);
                var data = $spy.data();
                data.offset = data.offset || {};
                if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom;
                if (data.offsetTop != null) data.offset.top = data.offsetTop;
                Plugin.call($spy, data)
            })
        })
    }(jQuery)
});
define("xg/eid-company/1.0.0/c/js/jquery-debug.validate", [], function(require, exports, module) {
    (function(factory) {
        if (typeof define === "function" && define.amd) {
            define(["jquery"], factory)
        } else {
            factory(jQuery)
        }
    })(function($) {
        $.extend($.fn, {
            validate: function(options) {
                if (!this.length) {
                    if (options && options.debug && window.console) {
                        console.warn("Nothing selected, can't validate, returning nothing.")
                    }
                    return
                }
                var validator = $.data(this[0], "validator");
                if (validator) {
                    return validator
                }
                this.attr("novalidate", "novalidate");
                validator = new $.validator(options, this[0]);
                $.data(this[0], "validator", validator);
                if (validator.settings.onsubmit) {
                    this.validateDelegate(":submit", "click", function(event) {
                        if (validator.settings.submitHandler) {
                            validator.submitButton = event.target
                        }
                        if ($(event.target).hasClass("cancel")) {
                            validator.cancelSubmit = true
                        }
                        if ($(event.target).attr("formnovalidate") === "formnovalidate") {
                            validator.cancelSubmit = true
                        }
                    });
                    this.submit(function(event) {
                        if (validator.settings.debug) {
                            event.preventDefault()
                        }

                        function handle() {
                            var hidden, result;
                            if (validator.settings.submitHandler) {
                                if (validator.submitButton) {
                                    hidden = $("<input type='hidden'/>").attr("name", validator.submitButton.name).val($(validator.submitButton).val()).appendTo(validator.currentForm)
                                }
                                result = validator.settings.submitHandler.call(validator, validator.currentForm, event);
                                if (validator.submitButton) {
                                    hidden.remove()
                                }
                                if (result !== undefined) {
                                    return result
                                }
                                return false
                            }
                            return true
                        }
                        if (validator.cancelSubmit) {
                            validator.cancelSubmit = false;
                            return handle()
                        }
                        if (validator.form()) {
                            if (validator.pendingRequest) {
                                validator.formSubmitted = true;
                                return false
                            }
                            return handle()
                        } else {
                            validator.focusInvalid();
                            return false
                        }
                    })
                }
                return validator
            },
            valid: function() {
                var valid, validator;
                if ($(this[0]).is("form")) {
                    valid = this.validate().form()
                } else {
                    valid = true;
                    validator = $(this[0].form).validate();
                    this.each(function() {
                        valid = validator.element(this) && valid
                    })
                }
                return valid
            },
            removeAttrs: function(attributes) {
                var result = {},
                    $element = this;
                $.each(attributes.split(/\s/), function(index, value) {
                    result[value] = $element.attr(value);
                    $element.removeAttr(value)
                });
                return result
            },
            rules: function(command, argument) {
                var element = this[0],
                    settings, staticRules, existingRules, data, param, filtered;
                if (command) {
                    settings = $.data(element.form, "validator").settings;
                    staticRules = settings.rules;
                    existingRules = $.validator.staticRules(element);
                    switch (command) {
                        case "add":
                            $.extend(existingRules, $.validator.normalizeRule(argument));
                            delete existingRules.messages;
                            staticRules[element.name] = existingRules;
                            if (argument.messages) {
                                settings.messages[element.name] = $.extend(settings.messages[element.name], argument.messages)
                            }
                            break;
                        case "remove":
                            if (!argument) {
                                delete staticRules[element.name];
                                return existingRules
                            }
                            filtered = {};
                            $.each(argument.split(/\s/), function(index, method) {
                                filtered[method] = existingRules[method];
                                delete existingRules[method];
                                if (method === "required") {
                                    $(element).removeAttr("aria-required")
                                }
                            });
                            return filtered
                    }
                }
                data = $.validator.normalizeRules($.extend({}, $.validator.classRules(element), $.validator.attributeRules(element), $.validator.dataRules(element), $.validator.staticRules(element)), element);
                if (data.required) {
                    param = data.required;
                    delete data.required;
                    data = $.extend({
                        required: param
                    }, data);
                    $(element).attr("aria-required", "true")
                }
                if (data.remote) {
                    param = data.remote;
                    delete data.remote;
                    data = $.extend(data, {
                        remote: param
                    })
                }
                return data
            }
        });
        $.extend($.expr[":"], {
            blank: function(a) {
                return !$.trim("" + $(a).val())
            },
            filled: function(a) {
                return !!$.trim("" + $(a).val())
            },
            unchecked: function(a) {
                return !$(a).prop("checked")
            }
        });
        $.validator = function(options, form) {
            this.settings = $.extend(true, {}, $.validator.defaults, options);
            this.currentForm = form;
            this.init()
        };
        $.validator.format = function(source, params) {
            if (arguments.length === 1) {
                return function() {
                    var args = $.makeArray(arguments);
                    args.unshift(source);
                    return $.validator.format.apply(this, args)
                }
            }
            if (arguments.length > 2 && params.constructor !== Array) {
                params = $.makeArray(arguments).slice(1)
            }
            if (params.constructor !== Array) {
                params = [params]
            }
            $.each(params, function(i, n) {
                source = source.replace(new RegExp("\\{" + i + "\\}", "g"), function() {
                    return n
                })
            });
            return source
        };
        $.extend($.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                validClass: "valid",
                errorElement: "label",
                focusCleanup: false,
                focusInvalid: true,
                errorContainer: $([]),
                errorLabelContainer: $([]),
                onsubmit: true,
                ignore: ":hidden",
                ignoreTitle: false,
                onfocusin: function(element) {
                    this.lastActive = element;
                    if (this.settings.focusCleanup) {
                        if (this.settings.unhighlight) {
                            this.settings.unhighlight.call(this, element, this.settings.errorClass, this.settings.validClass)
                        }
                        this.hideThese(this.errorsFor(element))
                    }
                },
                onfocusout: function(element) {
                    if (!this.checkable(element) && (element.name in this.submitted || !this.optional(element))) {
                        this.element(element)
                    }
                },
                onkeyup: function(element, event) {
                    if (event.which === 9 && this.elementValue(element) === "") {
                        return
                    } else if (element.name in this.submitted || element === this.lastElement) {
                        this.element(element)
                    }
                },
                onclick: function(element) {
                    if (element.name in this.submitted) {
                        this.element(element)
                    } else if (element.parentNode.name in this.submitted) {
                        this.element(element.parentNode)
                    }
                },
                highlight: function(element, errorClass, validClass) {
                    if (element.type === "radio") {
                        this.findByName(element.name).addClass(errorClass).removeClass(validClass)
                    } else {
                        $(element).addClass(errorClass).removeClass(validClass)
                    }
                },
                unhighlight: function(element, errorClass, validClass) {
                    if (element.type === "radio") {
                        this.findByName(element.name).removeClass(errorClass).addClass(validClass)
                    } else {
                        $(element).removeClass(errorClass).addClass(validClass)
                    }
                }
            },
            setDefaults: function(settings) {
                $.extend($.validator.defaults, settings)
            },
            messages: {
                required: "This field is required.",
                remote: "Please fix this field.",
                email: "Please enter a valid email address.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date ( ISO ).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                creditcard: "Please enter a valid credit card number.",
                equalTo: "Please enter the same value again.",
                maxlength: $.validator.format("Please enter no more than {0} characters."),
                minlength: $.validator.format("Please enter at least {0} characters."),
                rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
                range: $.validator.format("Please enter a value between {0} and {1}."),
                max: $.validator.format("Please enter a value less than or equal to {0}."),
                min: $.validator.format("Please enter a value greater than or equal to {0}.")
            },
            autoCreateRanges: false,
            prototype: {
                init: function() {
                    this.labelContainer = $(this.settings.errorLabelContainer);
                    this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
                    this.containers = $(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                    this.submitted = {};
                    this.valueCache = {};
                    this.pendingRequest = 0;
                    this.pending = {};
                    this.invalid = {};
                    this.reset();
                    var groups = this.groups = {},
                        rules;
                    $.each(this.settings.groups, function(key, value) {
                        if (typeof value === "string") {
                            value = value.split(/\s/)
                        }
                        $.each(value, function(index, name) {
                            groups[name] = key
                        })
                    });
                    rules = this.settings.rules;
                    $.each(rules, function(key, value) {
                        rules[key] = $.validator.normalizeRule(value)
                    });

                    function delegate(event) {
                        var validator = $.data(this[0].form, "validator"),
                            eventType = "on" + event.type.replace(/^validate/, ""),
                            settings = validator.settings;
                        if (settings[eventType] && !this.is(settings.ignore)) {
                            settings[eventType].call(validator, this[0], event)
                        }
                    }
                    $(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, " + "[type='number'], [type='search'] ,[type='tel'], [type='url'], " + "[type='email'], [type='datetime'], [type='date'], [type='month'], " + "[type='week'], [type='time'], [type='datetime-local'], " + "[type='range'], [type='color'], [type='radio'], [type='checkbox']", "focusin focusout keyup", delegate).validateDelegate("select, option, [type='radio'], [type='checkbox']", "click", delegate);
                    if (this.settings.invalidHandler) {
                        $(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
                    }
                    $(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
                },
                form: function() {
                    this.checkForm();
                    $.extend(this.submitted, this.errorMap);
                    this.invalid = $.extend({}, this.errorMap);
                    if (!this.valid()) {
                        $(this.currentForm).triggerHandler("invalid-form", [this])
                    }
                    this.showErrors();
                    return this.valid()
                },
                checkForm: function() {
                    this.prepareForm();
                    for (var i = 0, elements = this.currentElements = this.elements(); elements[i]; i++) {
                        this.check(elements[i])
                    }
                    return this.valid()
                },
                element: function(element) {
                    var cleanElement = this.clean(element),
                        checkElement = this.validationTargetFor(cleanElement),
                        result = true;
                    this.lastElement = checkElement;
                    if (checkElement === undefined) {
                        delete this.invalid[cleanElement.name]
                    } else {
                        this.prepareElement(checkElement);
                        this.currentElements = $(checkElement);
                        result = this.check(checkElement) !== false;
                        if (result) {
                            delete this.invalid[checkElement.name]
                        } else {
                            this.invalid[checkElement.name] = true
                        }
                    }
                    $(element).attr("aria-invalid", !result);
                    if (!this.numberOfInvalids()) {
                        this.toHide = this.toHide.add(this.containers)
                    }
                    this.showErrors();
                    return result
                },
                showErrors: function(errors) {
                    if (errors) {
                        $.extend(this.errorMap, errors);
                        this.errorList = [];
                        for (var name in errors) {
                            this.errorList.push({
                                message: errors[name],
                                element: this.findByName(name)[0]
                            })
                        }
                        this.successList = $.grep(this.successList, function(element) {
                            return !(element.name in errors)
                        })
                    }
                    if (this.settings.showErrors) {
                        this.settings.showErrors.call(this, this.errorMap, this.errorList)
                    } else {
                        this.defaultShowErrors()
                    }
                },
                resetForm: function() {
                    if ($.fn.resetForm) {
                        $(this.currentForm).resetForm()
                    }
                    this.submitted = {};
                    this.lastElement = null;
                    this.prepareForm();
                    this.hideErrors();
                    this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")
                },
                numberOfInvalids: function() {
                    return this.objectLength(this.invalid)
                },
                objectLength: function(obj) {
                    var count = 0,
                        i;
                    for (i in obj) {
                        count++
                    }
                    return count
                },
                hideErrors: function() {
                    this.hideThese(this.toHide)
                },
                hideThese: function(errors) {
                    errors.not(this.containers).text("");
                    this.addWrapper(errors).hide()
                },
                valid: function() {
                    return this.size() === 0
                },
                size: function() {
                    return this.errorList.length
                },
                focusInvalid: function() {
                    if (this.settings.focusInvalid) {
                        try {
                            $(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                        } catch (e) {}
                    }
                },
                findLastActive: function() {
                    var lastActive = this.lastActive;
                    return lastActive && $.grep(this.errorList, function(n) {
                        return n.element.name === lastActive.name
                    }).length === 1 && lastActive
                },
                elements: function() {
                    var validator = this,
                        rulesCache = {};
                    return $(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled], [readonly]").not(this.settings.ignore).filter(function() {
                        if (!this.name && validator.settings.debug && window.console) {
                            console.error("%o has no name assigned", this)
                        }
                        if (this.name in rulesCache || !validator.objectLength($(this).rules())) {
                            return false
                        }
                        rulesCache[this.name] = true;
                        return true
                    })
                },
                clean: function(selector) {
                    return $(selector)[0]
                },
                errors: function() {
                    var errorClass = this.settings.errorClass.split(" ").join(".");
                    return $(this.settings.errorElement + "." + errorClass, this.errorContext)
                },
                reset: function() {
                    this.successList = [];
                    this.errorList = [];
                    this.errorMap = {};
                    this.toShow = $([]);
                    this.toHide = $([]);
                    this.currentElements = $([])
                },
                prepareForm: function() {
                    this.reset();
                    this.toHide = this.errors().add(this.containers)
                },
                prepareElement: function(element) {
                    this.reset();
                    this.toHide = this.errorsFor(element)
                },
                elementValue: function(element) {
                    var val, $element = $(element),
                        type = element.type;
                    if (type === "radio" || type === "checkbox") {
                        return $("input[name='" + element.name + "']:checked").val()
                    } else if (type === "number" && typeof element.validity !== "undefined") {
                        return element.validity.badInput ? false : $element.val()
                    }
                    val = $element.val();
                    if (typeof val === "string") {
                        return val.replace(/\r/g, "")
                    }
                    return val
                },
                check: function(element) {
                    element = this.validationTargetFor(this.clean(element));
                    var rules = $(element).rules(),
                        rulesCount = $.map(rules, function(n, i) {
                            return i
                        }).length,
                        dependencyMismatch = false,
                        val = this.elementValue(element),
                        result, method, rule;
                    for (method in rules) {
                        rule = {
                            method: method,
                            parameters: rules[method]
                        };
                        try {
                            result = $.validator.methods[method].call(this, val, element, rule.parameters);
                            if (result === "dependency-mismatch" && rulesCount === 1) {
                                dependencyMismatch = true;
                                continue
                            }
                            dependencyMismatch = false;
                            if (result === "pending") {
                                this.toHide = this.toHide.not(this.errorsFor(element));
                                return
                            }
                            if (!result) {
                                this.formatAndAdd(element, rule);
                                return false
                            }
                        } catch (e) {
                            if (this.settings.debug && window.console) {
                                console.log("Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e)
                            }
                            throw e
                        }
                    }
                    if (dependencyMismatch) {
                        return
                    }
                    if (this.objectLength(rules)) {
                        this.successList.push(element)
                    }
                    return true
                },
                customDataMessage: function(element, method) {
                    return $(element).data("msg" + method.charAt(0).toUpperCase() + method.substring(1).toLowerCase()) || $(element).data("msg")
                },
                customMessage: function(name, method) {
                    var m = this.settings.messages[name];
                    return m && (m.constructor === String ? m : m[method])
                },
                findDefined: function() {
                    for (var i = 0; i < arguments.length; i++) {
                        if (arguments[i] !== undefined) {
                            return arguments[i]
                        }
                    }
                    return undefined
                },
                defaultMessage: function(element, method) {
                    return this.findDefined(this.customMessage(element.name, method), this.customDataMessage(element, method), !this.settings.ignoreTitle && element.title || undefined, $.validator.messages[method], "<strong>Warning: No message defined for " + element.name + "</strong>")
                },
                formatAndAdd: function(element, rule) {
                    var message = this.defaultMessage(element, rule.method),
                        theregex = /\$?\{(\d+)\}/g;
                    if (typeof message === "function") {
                        message = message.call(this, rule.parameters, element)
                    } else if (theregex.test(message)) {
                        message = $.validator.format(message.replace(theregex, "{$1}"), rule.parameters)
                    }
                    this.errorList.push({
                        message: message,
                        element: element,
                        method: rule.method
                    });
                    this.errorMap[element.name] = message;
                    this.submitted[element.name] = message
                },
                addWrapper: function(toToggle) {
                    if (this.settings.wrapper) {
                        toToggle = toToggle.add(toToggle.parent(this.settings.wrapper))
                    }
                    return toToggle
                },
                defaultShowErrors: function() {
                    var i, elements, error;
                    for (i = 0; this.errorList[i]; i++) {
                        error = this.errorList[i];
                        if (this.settings.highlight) {
                            this.settings.highlight.call(this, error.element, this.settings.errorClass, this.settings.validClass)
                        }
                        this.showLabel(error.element, error.message)
                    }
                    if (this.errorList.length) {
                        this.toShow = this.toShow.add(this.containers)
                    }
                    if (this.settings.success) {
                        for (i = 0; this.successList[i]; i++) {
                            this.showLabel(this.successList[i])
                        }
                    }
                    if (this.settings.unhighlight) {
                        for (i = 0, elements = this.validElements(); elements[i]; i++) {
                            this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, this.settings.validClass)
                        }
                    }
                    this.toHide = this.toHide.not(this.toShow);
                    this.hideErrors();
                    this.addWrapper(this.toShow).show()
                },
                validElements: function() {
                    return this.currentElements.not(this.invalidElements())
                },
                invalidElements: function() {
                    return $(this.errorList).map(function() {
                        return this.element
                    })
                },
                showLabel: function(element, message) {
                    var place, group, errorID, error = this.errorsFor(element),
                        elementID = this.idOrName(element),
                        describedBy = $(element).attr("aria-describedby");
                    if (error.length) {
                        error.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
                        error.html(message)
                    } else {
                        error = $("<" + this.settings.errorElement + ">").attr("id", elementID + "-error").addClass(this.settings.errorClass).html(message || "");
                        place = error;
                        if (this.settings.wrapper) {
                            place = error.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()
                        }
                        if (this.labelContainer.length) {
                            this.labelContainer.append(place)
                        } else if (this.settings.errorPlacement) {
                            this.settings.errorPlacement(place, $(element))
                        } else {
                            place.insertAfter(element)
                        }
                        if (error.is("label")) {
                            error.attr("for", elementID)
                        } else if (error.parents("label[for='" + elementID + "']").length === 0) {
                            errorID = error.attr("id").replace(/(:|\.|\[|\])/g, "\\$1");
                            if (!describedBy) {
                                describedBy = errorID
                            } else if (!describedBy.match(new RegExp("\\b" + errorID + "\\b"))) {
                                describedBy += " " + errorID
                            }
                            $(element).attr("aria-describedby", describedBy);
                            group = this.groups[element.name];
                            if (group) {
                                $.each(this.groups, function(name, testgroup) {
                                    if (testgroup === group) {
                                        $("[name='" + name + "']", this.currentForm).attr("aria-describedby", error.attr("id"))
                                    }
                                })
                            }
                        }
                    }
                    if (!message && this.settings.success) {
                        error.text("");
                        if (typeof this.settings.success === "string") {
                            error.addClass(this.settings.success)
                        } else {
                            this.settings.success(error, element)
                        }
                    }
                    this.toShow = this.toShow.add(error)
                },
                errorsFor: function(element) {
                    var name = this.idOrName(element),
                        describer = $(element).attr("aria-describedby"),
                        selector = "label[for='" + name + "'], label[for='" + name + "'] *";
                    if (describer) {
                        selector = selector + ", #" + describer.replace(/\s+/g, ", #")
                    }
                    return this.errors().filter(selector)
                },
                idOrName: function(element) {
                    return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name)
                },
                validationTargetFor: function(element) {
                    if (this.checkable(element)) {
                        element = this.findByName(element.name)
                    }
                    return $(element).not(this.settings.ignore)[0]
                },
                checkable: function(element) {
                    return /radio|checkbox/i.test(element.type)
                },
                findByName: function(name) {
                    return $(this.currentForm).find("[name='" + name + "']")
                },
                getLength: function(value, element) {
                    switch (element.nodeName.toLowerCase()) {
                        case "select":
                            return $("option:selected", element).length;
                        case "input":
                            if (this.checkable(element)) {
                                return this.findByName(element.name).filter(":checked").length
                            }
                    }
                    return value.length
                },
                depend: function(param, element) {
                    return this.dependTypes[typeof param] ? this.dependTypes[typeof param](param, element) : true
                },
                dependTypes: {
                    boolean: function(param) {
                        return param
                    },
                    string: function(param, element) {
                        return !!$(param, element.form).length
                    },
                    function: function(param, element) {
                        return param(element)
                    }
                },
                optional: function(element) {
                    var val = this.elementValue(element);
                    return !$.validator.methods.required.call(this, val, element) && "dependency-mismatch"
                },
                startRequest: function(element) {
                    if (!this.pending[element.name]) {
                        this.pendingRequest++;
                        this.pending[element.name] = true
                    }
                },
                stopRequest: function(element, valid) {
                    this.pendingRequest--;
                    if (this.pendingRequest < 0) {
                        this.pendingRequest = 0
                    }
                    delete this.pending[element.name];
                    if (valid && this.pendingRequest === 0 && this.formSubmitted && this.form()) {
                        $(this.currentForm).submit();
                        this.formSubmitted = false
                    } else if (!valid && this.pendingRequest === 0 && this.formSubmitted) {
                        $(this.currentForm).triggerHandler("invalid-form", [this]);
                        this.formSubmitted = false
                    }
                },
                previousValue: function(element) {
                    return $.data(element, "previousValue") || $.data(element, "previousValue", {
                        old: null,
                        valid: true,
                        message: this.defaultMessage(element, "remote")
                    })
                }
            },
            classRuleSettings: {
                required: {
                    required: true
                },
                email: {
                    email: true
                },
                url: {
                    url: true
                },
                date: {
                    date: true
                },
                dateISO: {
                    dateISO: true
                },
                number: {
                    number: true
                },
                digits: {
                    digits: true
                },
                creditcard: {
                    creditcard: true
                }
            },
            addClassRules: function(className, rules) {
                if (className.constructor === String) {
                    this.classRuleSettings[className] = rules
                } else {
                    $.extend(this.classRuleSettings, className)
                }
            },
            classRules: function(element) {
                var rules = {},
                    classes = $(element).attr("class");
                if (classes) {
                    $.each(classes.split(" "), function() {
                        if (this in $.validator.classRuleSettings) {
                            $.extend(rules, $.validator.classRuleSettings[this])
                        }
                    })
                }
                return rules
            },
            attributeRules: function(element) {
                var rules = {},
                    $element = $(element),
                    type = element.getAttribute("type"),
                    method, value;
                for (method in $.validator.methods) {
                    if (method === "required") {
                        value = element.getAttribute(method);
                        if (value === "") {
                            value = true
                        }
                        value = !!value
                    } else {
                        value = $element.attr(method)
                    }
                    if (/min|max/.test(method) && (type === null || /number|range|text/.test(type))) {
                        value = Number(value)
                    }
                    if (value || value === 0) {
                        rules[method] = value
                    } else if (type === method && type !== "range") {
                        rules[method] = true
                    }
                }
                if (rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength)) {
                    delete rules.maxlength
                }
                return rules
            },
            dataRules: function(element) {
                var method, value, rules = {},
                    $element = $(element);
                for (method in $.validator.methods) {
                    value = $element.data("rule" + method.charAt(0).toUpperCase() + method.substring(1).toLowerCase());
                    if (value !== undefined) {
                        rules[method] = value
                    }
                }
                return rules
            },
            staticRules: function(element) {
                var rules = {},
                    validator = $.data(element.form, "validator");
                if (validator.settings.rules) {
                    rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {}
                }
                return rules
            },
            normalizeRules: function(rules, element) {
                $.each(rules, function(prop, val) {
                    if (val === false) {
                        delete rules[prop];
                        return
                    }
                    if (val.param || val.depends) {
                        var keepRule = true;
                        switch (typeof val.depends) {
                            case "string":
                                keepRule = !!$(val.depends, element.form).length;
                                break;
                            case "function":
                                keepRule = val.depends.call(element, element);
                                break
                        }
                        if (keepRule) {
                            rules[prop] = val.param !== undefined ? val.param : true
                        } else {
                            delete rules[prop]
                        }
                    }
                });
                $.each(rules, function(rule, parameter) {
                    rules[rule] = $.isFunction(parameter) ? parameter(element) : parameter
                });
                $.each(["minlength", "maxlength"], function() {
                    if (rules[this]) {
                        rules[this] = Number(rules[this])
                    }
                });
                $.each(["rangelength", "range"], function() {
                    var parts;
                    if (rules[this]) {
                        if ($.isArray(rules[this])) {
                            rules[this] = [Number(rules[this][0]), Number(rules[this][1])]
                        } else if (typeof rules[this] === "string") {
                            parts = rules[this].replace(/[\[\]]/g, "").split(/[\s,]+/);
                            rules[this] = [Number(parts[0]), Number(parts[1])]
                        }
                    }
                });
                if ($.validator.autoCreateRanges) {
                    if (rules.min != null && rules.max != null) {
                        rules.range = [rules.min, rules.max];
                        delete rules.min;
                        delete rules.max
                    }
                    if (rules.minlength != null && rules.maxlength != null) {
                        rules.rangelength = [rules.minlength, rules.maxlength];
                        delete rules.minlength;
                        delete rules.maxlength
                    }
                }
                return rules
            },
            normalizeRule: function(data) {
                if (typeof data === "string") {
                    var transformed = {};
                    $.each(data.split(/\s/), function() {
                        transformed[this] = true
                    });
                    data = transformed
                }
                return data
            },
            addMethod: function(name, method, message) {
                $.validator.methods[name] = method;
                $.validator.messages[name] = message !== undefined ? message : $.validator.messages[name];
                if (method.length < 3) {
                    $.validator.addClassRules(name, $.validator.normalizeRule(name))
                }
            },
            methods: {
                required: function(value, element, param) {
                    if (!this.depend(param, element)) {
                        return "dependency-mismatch"
                    }
                    if (element.nodeName.toLowerCase() === "select") {
                        var val = $(element).val();
                        return val && val.length > 0
                    }
                    if (this.checkable(element)) {
                        return this.getLength(value, element) > 0
                    }
                    return $.trim(value).length > 0
                },
                email: function(value, element) {
                    return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)
                },
                url: function(value, element) {
                    return this.optional(element) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value)
                },
                date: function(value, element) {
                    return this.optional(element) || !/Invalid|NaN/.test(new Date(value).toString())
                },
                dateISO: function(value, element) {
                    return this.optional(element) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value)
                },
                number: function(value, element) {
                    return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value)
                },
                digits: function(value, element) {
                    return this.optional(element) || /^\d+$/.test(value)
                },
                creditcard: function(value, element) {
                    if (this.optional(element)) {
                        return "dependency-mismatch"
                    }
                    if (/[^0-9 \-]+/.test(value)) {
                        return false
                    }
                    var nCheck = 0,
                        nDigit = 0,
                        bEven = false,
                        n, cDigit;
                    value = value.replace(/\D/g, "");
                    if (value.length < 13 || value.length > 19) {
                        return false
                    }
                    for (n = value.length - 1; n >= 0; n--) {
                        cDigit = value.charAt(n);
                        nDigit = parseInt(cDigit, 10);
                        if (bEven) {
                            if ((nDigit *= 2) > 9) {
                                nDigit -= 9
                            }
                        }
                        nCheck += nDigit;
                        bEven = !bEven
                    }
                    return nCheck % 10 === 0
                },
                minlength: function(value, element, param) {
                    var length = $.isArray(value) ? value.length : this.getLength(value, element);
                    return this.optional(element) || length >= param
                },
                maxlength: function(value, element, param) {
                    var length = $.isArray(value) ? value.length : this.getLength(value, element);
                    return this.optional(element) || length <= param
                },
                rangelength: function(value, element, param) {
                    var length = $.isArray(value) ? value.length : this.getLength(value, element);
                    return this.optional(element) || length >= param[0] && length <= param[1]
                },
                min: function(value, element, param) {
                    return this.optional(element) || value >= param
                },
                max: function(value, element, param) {
                    return this.optional(element) || value <= param
                },
                range: function(value, element, param) {
                    return this.optional(element) || value >= param[0] && value <= param[1]
                },
                equalTo: function(value, element, param) {
                    var target = $(param);
                    if (this.settings.onfocusout) {
                        target.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                            $(element).valid()
                        })
                    }
                    return value === target.val()
                },
                remote: function(value, element, param) {
                    if (this.optional(element)) {
                        return "dependency-mismatch"
                    }
                    var previous = this.previousValue(element),
                        validator, data;
                    if (!this.settings.messages[element.name]) {
                        this.settings.messages[element.name] = {}
                    }
                    previous.originalMessage = this.settings.messages[element.name].remote;
                    this.settings.messages[element.name].remote = previous.message;
                    param = typeof param === "string" && {
                        url: param
                    } || param;
                    if (previous.old === value) {
                        return previous.valid
                    }
                    previous.old = value;
                    validator = this;
                    this.startRequest(element);
                    data = {};
                    data[element.name] = value;
                    $.ajax($.extend(true, {
                        url: param,
                        mode: "abort",
                        port: "validate" + element.name,
                        dataType: "json",
                        data: data,
                        context: validator.currentForm,
                        success: function(response) {
                            var valid = response === true || response === "true",
                                errors, message, submitted;
                            validator.settings.messages[element.name].remote = previous.originalMessage;
                            if (valid) {
                                submitted = validator.formSubmitted;
                                validator.prepareElement(element);
                                validator.formSubmitted = submitted;
                                validator.successList.push(element);
                                delete validator.invalid[element.name];
                                validator.showErrors()
                            } else {
                                errors = {};
                                message = response || validator.defaultMessage(element, "remote");
                                errors[element.name] = previous.message = $.isFunction(message) ? message(value) : message;
                                validator.invalid[element.name] = true;
                                validator.showErrors(errors)
                            }
                            previous.valid = valid;
                            validator.stopRequest(element, valid)
                        }
                    }, param));
                    return "pending"
                }
            }
        });
        $.format = function deprecated() {
            throw "$.format has been deprecated. Please use $.validator.format instead."
        };
        var pendingRequests = {},
            ajax;
        if ($.ajaxPrefilter) {
            $.ajaxPrefilter(function(settings, _, xhr) {
                var port = settings.port;
                if (settings.mode === "abort") {
                    if (pendingRequests[port]) {
                        pendingRequests[port].abort()
                    }
                    pendingRequests[port] = xhr
                }
            })
        } else {
            ajax = $.ajax;
            $.ajax = function(settings) {
                var mode = ("mode" in settings ? settings : $.ajaxSettings).mode,
                    port = ("port" in settings ? settings : $.ajaxSettings).port;
                if (mode === "abort") {
                    if (pendingRequests[port]) {
                        pendingRequests[port].abort()
                    }
                    pendingRequests[port] = ajax.apply(this, arguments);
                    return pendingRequests[port]
                }
                return ajax.apply(this, arguments)
            }
        }
        $.extend($.fn, {
            validateDelegate: function(delegate, type, handler) {
                return this.bind(type, function(event) {
                    var target = $(event.target);
                    if (target.is(delegate)) {
                        return handler.apply(target, arguments)
                    }
                })
            }
        })
    })
});
define("xg/eid-company/1.0.0/c/js/validate-add-methods-debug", ["xg/eid-company/1.0.0/c/js/jquery-debug.validate", "jquery/jquery/1.10.1/jquery-debug"], function(require, exports, module) {
    require("xg/eid-company/1.0.0/c/js/jquery-debug.validate");
    var $ = require("jquery/jquery/1.10.1/jquery-debug");
    $.validator.addMethod("mobile", function(value, element) {
        return this.optional(element) || /^1[3|4|5|7|8][0-9]\d{8}$/.test(value)
    }, "<i class='kuma-tiptext-icon kuma-icon' title='出错'>&#42;</i>请输入正确的手机号");
    $.validator.addMethod("idcard", function(value, element) {
        return this.optional(element) || /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/.test(value)
    }, "<i class='kuma-tiptext-icon kuma-icon' title='出错'>&#42;</i>请输入正确的身份证号");
    $.validator.addMethod("email", function(value, element) {
        return this.optional(element) || /^\s*([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,20})\s*$/.test(value)
    }, "<i class='kuma-tiptext-icon kuma-icon' title='出错'>&#42;</i>请输入正确的邮箱地址");
    $.validator.addMethod("registerpsd", function(value, element) {
        return this.optional(element) || /(?!^[0-9]+$)(?!^[a-z]+$)(?!^[^A-z0-9]+$)^.{6,15}$/.test(value)
    }, "<i class='kuma-tiptext-icon kuma-icon' title='出错'>&#42;</i>密码格式有问题");
    $.validator.addMethod("coord", function(value, element) {
        return this.optional(element) || /\d{3}\.\d+\,\d{2}\.\d+/.test(value)
    }, "<i class='kuma-tiptext-icon kuma-icon' title='出错'></i>请输入正确的经纬度");
    $.validator.addMethod("twoPoint", function(value, element) {
        return !value || /^\d+\.?\d{0,2}$/.test(value)
    }, "<i class='kuma-tiptext-icon kuma-icon' title='出错'></i>最多保留两位小数");
    $.validator.addMethod("realyname", function(value, element) {
        return this.optional(element) || /^[\u4e00-\u9fa5]{2,6}$/.test(value)
    }, "<i class='kuma-tiptext-icon kuma-icon' title='出错'>&#42;</i>请输入正确的姓名");
    $.validator.addMethod("bankcard", function(value, element) {
        return this.optional(element) || /^[0-9]{16,19}$/.test(value)
    }, "<i class='kuma-tiptext-icon kuma-icon' title='出错'>&#42;</i>请输入正确的银行卡号")
});
define("xg/eid-company/1.0.0/c/js/validate-messages-cn-debug", ["jquery/jquery/1.10.1/jquery-debug", "xg/eid-company/1.0.0/c/js/jquery-debug.validate"], function(require, exports, module) {
    var $ = require("jquery/jquery/1.10.1/jquery-debug");
    require("xg/eid-company/1.0.0/c/js/jquery-debug.validate");
    $.format = function(source, params) {
        if (arguments.length == 1) return function() {
            var args = $.makeArray(arguments);
            args.unshift(source);
            return $.format.apply(this, args)
        };
        if (arguments.length > 2 && params.constructor != Array) {
            params = $.makeArray(arguments).slice(1)
        }
        if (params.constructor != Array) {
            params = [params]
        }
        $.each(params, function(i, n) {
            source = source.replace(new RegExp("\\{" + i + "\\}", "g"), n)
        });
        return source
    };
    var cnmsg = {
        required: "<i class='kuma-tiptext-icon kuma-icon' title='出错'>&#42;</i>必填字段",
        remote: "<i class='kuma-tiptext-icon kuma-icon' title='出错'>&#42;</i>请修正该字段",
        email: "<i class='kuma-tiptext-icon kuma-icon' title='出错'>&#42;</i>请输入正确格式的电子邮件",
        url: "<i class='kuma-tiptext-icon kuma-icon' title='出错'>&#42;</i>请输入合法的网址",
        date: "<i class='kuma-tiptext-icon kuma-icon' title='出错'>&#42;</i>请输入合法的日期",
        dateISO: "<i class='kuma-tiptext-icon kuma-icon' title='出错'>&#42;</i>请输入合法的日期 (ISO).",
        number: "<i class='kuma-tiptext-icon kuma-icon' title='出错'>&#42;</i>请输入合法的数字",
        digits: "<i class='kuma-tiptext-icon kuma-icon' title='出错'>&#42;</i>只能输入整数",
        creditcard: "<i class='kuma-tiptext-icon kuma-icon' title='出错'>&#42;</i>请输入合法的信用卡号",
        equalTo: "<i class='kuma-tiptext-icon kuma-icon' title='出错'>&#42;</i>两次输入的密码不一致",
        accept: "<i class='kuma-tiptext-icon kuma-icon' title='出错'>&#42;</i>请输入拥有合法后缀名的字符串",
        maxlength: jQuery.format("<i class='kuma-tiptext-icon kuma-icon' title='出错'>&#42;</i>请输入少于{0}个字的内容"),
        minlength: jQuery.format("<i class='kuma-tiptext-icon kuma-icon' title='出错'>&#42;</i>请输入一个长度最少是 {0} 的字符串"),
        rangelength: jQuery.format("<i class='kuma-tiptext-icon kuma-icon' title='出错'>&#42;</i>请输入一个长度介于 {0} 和 {1} 之间的字符串"),
        range: jQuery.format("<i class='kuma-tiptext-icon kuma-icon' title='出错'>&#42;</i>请输入一个介于 {0} 和 {1} 之间的值"),
        max: jQuery.format("<i class='kuma-tiptext-icon kuma-icon' title='出错'>&#42;</i>请输入一个最大为 {0} 的值"),
        min: jQuery.format("<i class='kuma-tiptext-icon kuma-icon' title='出错'>&#42;</i>请输入一个最小为 {0} 的值")
    };
    jQuery.extend(jQuery.validator.messages, cnmsg)
});
define("xg/eid-company/1.0.0/c/js/moment-debug", [], function(require, exports, module) {
    (function(undefined) {
        var moment, VERSION = "2.8.1",
            globalScope = typeof global !== "undefined" ? global : this,
            oldGlobalMoment, round = Math.round,
            i, YEAR = 0,
            MONTH = 1,
            DATE = 2,
            HOUR = 3,
            MINUTE = 4,
            SECOND = 5,
            MILLISECOND = 6,
            locales = {},
            momentProperties = [],
            hasModule = typeof module !== "undefined" && module.exports,
            aspNetJsonRegex = /^\/?Date\((\-?\d+)/i,
            aspNetTimeSpanJsonRegex = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
            isoDurationRegex = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,
            formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,
            localFormattingTokens = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,
            parseTokenOneOrTwoDigits = /\d\d?/,
            parseTokenOneToThreeDigits = /\d{1,3}/,
            parseTokenOneToFourDigits = /\d{1,4}/,
            parseTokenOneToSixDigits = /[+\-]?\d{1,6}/,
            parseTokenDigits = /\d+/,
            parseTokenWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
            parseTokenTimezone = /Z|[\+\-]\d\d:?\d\d/gi,
            parseTokenT = /T/i,
            parseTokenTimestampMs = /[\+\-]?\d+(\.\d{1,3})?/,
            parseTokenOrdinal = /\d{1,2}/,
            parseTokenOneDigit = /\d/,
            parseTokenTwoDigits = /\d\d/,
            parseTokenThreeDigits = /\d{3}/,
            parseTokenFourDigits = /\d{4}/,
            parseTokenSixDigits = /[+-]?\d{6}/,
            parseTokenSignedNumber = /[+-]?\d+/,
            isoRegex = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            isoFormat = "YYYY-MM-DDTHH:mm:ssZ",
            isoDates = [
                ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
                ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
                ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
                ["GGGG-[W]WW", /\d{4}-W\d{2}/],
                ["YYYY-DDD", /\d{4}-\d{3}/]
            ],
            isoTimes = [
                ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/],
                ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
                ["HH:mm", /(T| )\d\d:\d\d/],
                ["HH", /(T| )\d\d/]
            ],
            parseTimezoneChunker = /([\+\-]|\d\d)/gi,
            proxyGettersAndSetters = "Date|Hours|Minutes|Seconds|Milliseconds".split("|"),
            unitMillisecondFactors = {
                Milliseconds: 1,
                Seconds: 1e3,
                Minutes: 6e4,
                Hours: 36e5,
                Days: 864e5,
                Months: 2592e6,
                Years: 31536e6
            },
            unitAliases = {
                ms: "millisecond",
                s: "second",
                m: "minute",
                h: "hour",
                d: "day",
                D: "date",
                w: "week",
                W: "isoWeek",
                M: "month",
                Q: "quarter",
                y: "year",
                DDD: "dayOfYear",
                e: "weekday",
                E: "isoWeekday",
                gg: "weekYear",
                GG: "isoWeekYear"
            },
            camelFunctions = {
                dayofyear: "dayOfYear",
                isoweekday: "isoWeekday",
                isoweek: "isoWeek",
                weekyear: "weekYear",
                isoweekyear: "isoWeekYear"
            },
            formatFunctions = {},
            relativeTimeThresholds = {
                s: 45,
                m: 45,
                h: 22,
                d: 26,
                M: 11
            },
            ordinalizeTokens = "DDD w W M D d".split(" "),
            paddedTokens = "M D H h m s w W".split(" "),
            formatTokenFunctions = {
                M: function() {
                    return this.month() + 1
                },
                MMM: function(format) {
                    return this.localeData().monthsShort(this, format)
                },
                MMMM: function(format) {
                    return this.localeData().months(this, format)
                },
                D: function() {
                    return this.date()
                },
                DDD: function() {
                    return this.dayOfYear()
                },
                d: function() {
                    return this.day()
                },
                dd: function(format) {
                    return this.localeData().weekdaysMin(this, format)
                },
                ddd: function(format) {
                    return this.localeData().weekdaysShort(this, format)
                },
                dddd: function(format) {
                    return this.localeData().weekdays(this, format)
                },
                w: function() {
                    return this.week()
                },
                W: function() {
                    return this.isoWeek()
                },
                YY: function() {
                    return leftZeroFill(this.year() % 100, 2)
                },
                YYYY: function() {
                    return leftZeroFill(this.year(), 4)
                },
                YYYYY: function() {
                    return leftZeroFill(this.year(), 5)
                },
                YYYYYY: function() {
                    var y = this.year(),
                        sign = y >= 0 ? "+" : "-";
                    return sign + leftZeroFill(Math.abs(y), 6)
                },
                gg: function() {
                    return leftZeroFill(this.weekYear() % 100, 2)
                },
                gggg: function() {
                    return leftZeroFill(this.weekYear(), 4)
                },
                ggggg: function() {
                    return leftZeroFill(this.weekYear(), 5)
                },
                GG: function() {
                    return leftZeroFill(this.isoWeekYear() % 100, 2)
                },
                GGGG: function() {
                    return leftZeroFill(this.isoWeekYear(), 4)
                },
                GGGGG: function() {
                    return leftZeroFill(this.isoWeekYear(), 5)
                },
                e: function() {
                    return this.weekday()
                },
                E: function() {
                    return this.isoWeekday()
                },
                a: function() {
                    return this.localeData().meridiem(this.hours(), this.minutes(), true)
                },
                A: function() {
                    return this.localeData().meridiem(this.hours(), this.minutes(), false)
                },
                H: function() {
                    return this.hours()
                },
                h: function() {
                    return this.hours() % 12 || 12
                },
                m: function() {
                    return this.minutes()
                },
                s: function() {
                    return this.seconds()
                },
                S: function() {
                    return toInt(this.milliseconds() / 100)
                },
                SS: function() {
                    return leftZeroFill(toInt(this.milliseconds() / 10), 2)
                },
                SSS: function() {
                    return leftZeroFill(this.milliseconds(), 3)
                },
                SSSS: function() {
                    return leftZeroFill(this.milliseconds(), 3)
                },
                Z: function() {
                    var a = -this.zone(),
                        b = "+";
                    if (a < 0) {
                        a = -a;
                        b = "-"
                    }
                    return b + leftZeroFill(toInt(a / 60), 2) + ":" + leftZeroFill(toInt(a) % 60, 2)
                },
                ZZ: function() {
                    var a = -this.zone(),
                        b = "+";
                    if (a < 0) {
                        a = -a;
                        b = "-"
                    }
                    return b + leftZeroFill(toInt(a / 60), 2) + leftZeroFill(toInt(a) % 60, 2)
                },
                z: function() {
                    return this.zoneAbbr()
                },
                zz: function() {
                    return this.zoneName()
                },
                X: function() {
                    return this.unix()
                },
                Q: function() {
                    return this.quarter()
                }
            },
            deprecations = {},
            lists = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"];

        function dfl(a, b, c) {
            switch (arguments.length) {
                case 2:
                    return a != null ? a : b;
                case 3:
                    return a != null ? a : b != null ? b : c;
                default:
                    throw new Error("Implement me")
            }
        }

        function defaultParsingFlags() {
            return {
                empty: false,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: false,
                invalidMonth: null,
                invalidFormat: false,
                userInvalidated: false,
                iso: false
            }
        }

        function printMsg(msg) {
            if (moment.suppressDeprecationWarnings === false && typeof console !== "undefined" && console.warn) {
                console.warn("Deprecation warning: " + msg)
            }
        }

        function deprecate(msg, fn) {
            var firstTime = true;
            return extend(function() {
                if (firstTime) {
                    printMsg(msg);
                    firstTime = false
                }
                return fn.apply(this, arguments)
            }, fn)
        }

        function deprecateSimple(name, msg) {
            if (!deprecations[name]) {
                printMsg(msg);
                deprecations[name] = true
            }
        }

        function padToken(func, count) {
            return function(a) {
                return leftZeroFill(func.call(this, a), count)
            }
        }

        function ordinalizeToken(func, period) {
            return function(a) {
                return this.localeData().ordinal(func.call(this, a), period)
            }
        }
        while (ordinalizeTokens.length) {
            i = ordinalizeTokens.pop();
            formatTokenFunctions[i + "o"] = ordinalizeToken(formatTokenFunctions[i], i)
        }
        while (paddedTokens.length) {
            i = paddedTokens.pop();
            formatTokenFunctions[i + i] = padToken(formatTokenFunctions[i], 2)
        }
        formatTokenFunctions.DDDD = padToken(formatTokenFunctions.DDD, 3);

        function Locale() {}

        function Moment(config, skipOverflow) {
            if (skipOverflow !== false) {
                checkOverflow(config)
            }
            copyConfig(this, config);
            this._d = new Date((+config._d))
        }

        function Duration(duration) {
            var normalizedInput = normalizeObjectUnits(duration),
                years = normalizedInput.year || 0,
                quarters = normalizedInput.quarter || 0,
                months = normalizedInput.month || 0,
                weeks = normalizedInput.week || 0,
                days = normalizedInput.day || 0,
                hours = normalizedInput.hour || 0,
                minutes = normalizedInput.minute || 0,
                seconds = normalizedInput.second || 0,
                milliseconds = normalizedInput.millisecond || 0;
            this._milliseconds = +milliseconds + seconds * 1e3 + minutes * 6e4 + hours * 36e5;
            this._days = +days + weeks * 7;
            this._months = +months + quarters * 3 + years * 12;
            this._data = {};
            this._locale = moment.localeData();
            this._bubble()
        }

        function extend(a, b) {
            for (var i in b) {
                if (b.hasOwnProperty(i)) {
                    a[i] = b[i]
                }
            }
            if (b.hasOwnProperty("toString")) {
                a.toString = b.toString
            }
            if (b.hasOwnProperty("valueOf")) {
                a.valueOf = b.valueOf
            }
            return a
        }

        function copyConfig(to, from) {
            var i, prop, val;
            if (typeof from._isAMomentObject !== "undefined") {
                to._isAMomentObject = from._isAMomentObject
            }
            if (typeof from._i !== "undefined") {
                to._i = from._i
            }
            if (typeof from._f !== "undefined") {
                to._f = from._f
            }
            if (typeof from._l !== "undefined") {
                to._l = from._l
            }
            if (typeof from._strict !== "undefined") {
                to._strict = from._strict
            }
            if (typeof from._tzm !== "undefined") {
                to._tzm = from._tzm
            }
            if (typeof from._isUTC !== "undefined") {
                to._isUTC = from._isUTC
            }
            if (typeof from._offset !== "undefined") {
                to._offset = from._offset
            }
            if (typeof from._pf !== "undefined") {
                to._pf = from._pf
            }
            if (typeof from._locale !== "undefined") {
                to._locale = from._locale
            }
            if (momentProperties.length > 0) {
                for (i in momentProperties) {
                    prop = momentProperties[i];
                    val = from[prop];
                    if (typeof val !== "undefined") {
                        to[prop] = val
                    }
                }
            }
            return to
        }

        function absRound(number) {
            if (number < 0) {
                return Math.ceil(number)
            } else {
                return Math.floor(number)
            }
        }

        function leftZeroFill(number, targetLength, forceSign) {
            var output = "" + Math.abs(number),
                sign = number >= 0;
            while (output.length < targetLength) {
                output = "0" + output
            }
            return (sign ? forceSign ? "+" : "" : "-") + output
        }

        function positiveMomentsDifference(base, other) {
            var res = {
                milliseconds: 0,
                months: 0
            };
            res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
            if (base.clone().add(res.months, "M").isAfter(other)) {
                --res.months
            }
            res.milliseconds = +other - +base.clone().add(res.months, "M");
            return res
        }

        function momentsDifference(base, other) {
            var res;
            other = makeAs(other, base);
            if (base.isBefore(other)) {
                res = positiveMomentsDifference(base, other)
            } else {
                res = positiveMomentsDifference(other, base);
                res.milliseconds = -res.milliseconds;
                res.months = -res.months
            }
            return res
        }

        function createAdder(direction, name) {
            return function(val, period) {
                var dur, tmp;
                if (period !== null && !isNaN(+period)) {
                    deprecateSimple(name, "moment()." + name + "(period, number) is deprecated. Please use moment()." + name + "(number, period).");
                    tmp = val;
                    val = period;
                    period = tmp
                }
                val = typeof val === "string" ? +val : val;
                dur = moment.duration(val, period);
                addOrSubtractDurationFromMoment(this, dur, direction);
                return this
            }
        }

        function addOrSubtractDurationFromMoment(mom, duration, isAdding, updateOffset) {
            var milliseconds = duration._milliseconds,
                days = duration._days,
                months = duration._months;
            updateOffset = updateOffset == null ? true : updateOffset;
            if (milliseconds) {
                mom._d.setTime(+mom._d + milliseconds * isAdding)
            }
            if (days) {
                rawSetter(mom, "Date", rawGetter(mom, "Date") + days * isAdding)
            }
            if (months) {
                rawMonthSetter(mom, rawGetter(mom, "Month") + months * isAdding)
            }
            if (updateOffset) {
                moment.updateOffset(mom, days || months)
            }
        }

        function isArray(input) {
            return Object.prototype.toString.call(input) === "[object Array]"
        }

        function isDate(input) {
            return Object.prototype.toString.call(input) === "[object Date]" || input instanceof Date
        }

        function compareArrays(array1, array2, dontConvert) {
            var len = Math.min(array1.length, array2.length),
                lengthDiff = Math.abs(array1.length - array2.length),
                diffs = 0,
                i;
            for (i = 0; i < len; i++) {
                if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
                    diffs++
                }
            }
            return diffs + lengthDiff
        }

        function normalizeUnits(units) {
            if (units) {
                var lowered = units.toLowerCase().replace(/(.)s$/, "$1");
                units = unitAliases[units] || camelFunctions[lowered] || lowered
            }
            return units
        }

        function normalizeObjectUnits(inputObject) {
            var normalizedInput = {},
                normalizedProp, prop;
            for (prop in inputObject) {
                if (inputObject.hasOwnProperty(prop)) {
                    normalizedProp = normalizeUnits(prop);
                    if (normalizedProp) {
                        normalizedInput[normalizedProp] = inputObject[prop]
                    }
                }
            }
            return normalizedInput
        }

        function makeList(field) {
            var count, setter;
            if (field.indexOf("week") === 0) {
                count = 7;
                setter = "day"
            } else if (field.indexOf("month") === 0) {
                count = 12;
                setter = "month"
            } else {
                return
            }
            moment[field] = function(format, index) {
                var i, getter, method = moment._locale[field],
                    results = [];
                if (typeof format === "number") {
                    index = format;
                    format = undefined
                }
                getter = function(i) {
                    var m = moment().utc().set(setter, i);
                    return method.call(moment._locale, m, format || "")
                };
                if (index != null) {
                    return getter(index)
                } else {
                    for (i = 0; i < count; i++) {
                        results.push(getter(i))
                    }
                    return results
                }
            }
        }

        function toInt(argumentForCoercion) {
            var coercedNumber = +argumentForCoercion,
                value = 0;
            if (coercedNumber !== 0 && isFinite(coercedNumber)) {
                if (coercedNumber >= 0) {
                    value = Math.floor(coercedNumber)
                } else {
                    value = Math.ceil(coercedNumber)
                }
            }
            return value
        }

        function daysInMonth(year, month) {
            return new Date(Date.UTC(year, month + 1, 0)).getUTCDate()
        }

        function weeksInYear(year, dow, doy) {
            return weekOfYear(moment([year, 11, 31 + dow - doy]), dow, doy).week
        }

        function daysInYear(year) {
            return isLeapYear(year) ? 366 : 365
        }

        function isLeapYear(year) {
            return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0
        }

        function checkOverflow(m) {
            var overflow;
            if (m._a && m._pf.overflow === -2) {
                overflow = m._a[MONTH] < 0 || m._a[MONTH] > 11 ? MONTH : m._a[DATE] < 1 || m._a[DATE] > daysInMonth(m._a[YEAR], m._a[MONTH]) ? DATE : m._a[HOUR] < 0 || m._a[HOUR] > 23 ? HOUR : m._a[MINUTE] < 0 || m._a[MINUTE] > 59 ? MINUTE : m._a[SECOND] < 0 || m._a[SECOND] > 59 ? SECOND : m._a[MILLISECOND] < 0 || m._a[MILLISECOND] > 999 ? MILLISECOND : -1;
                if (m._pf._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                    overflow = DATE
                }
                m._pf.overflow = overflow
            }
        }

        function isValid(m) {
            if (m._isValid == null) {
                m._isValid = !isNaN(m._d.getTime()) && m._pf.overflow < 0 && !m._pf.empty && !m._pf.invalidMonth && !m._pf.nullInput && !m._pf.invalidFormat && !m._pf.userInvalidated;
                if (m._strict) {
                    m._isValid = m._isValid && m._pf.charsLeftOver === 0 && m._pf.unusedTokens.length === 0
                }
            }
            return m._isValid
        }

        function normalizeLocale(key) {
            return key ? key.toLowerCase().replace("_", "-") : key
        }

        function chooseLocale(names) {
            var i = 0,
                j, next, locale, split;
            while (i < names.length) {
                split = normalizeLocale(names[i]).split("-");
                j = split.length;
                next = normalizeLocale(names[i + 1]);
                next = next ? next.split("-") : null;
                while (j > 0) {
                    locale = loadLocale(split.slice(0, j).join("-"));
                    if (locale) {
                        return locale
                    }
                    if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                        break
                    }
                    j--
                }
                i++
            }
            return null
        }

        function loadLocale(name) {
            var oldLocale = null;
            if (!locales[name] && hasModule) {
                try {
                    oldLocale = moment.locale();
                    require("./locale/" + name);
                    moment.locale(oldLocale)
                } catch (e) {}
            }
            return locales[name]
        }

        function makeAs(input, model) {
            return model._isUTC ? moment(input).zone(model._offset || 0) : moment(input).local()
        }
        extend(Locale.prototype, {
            set: function(config) {
                var prop, i;
                for (i in config) {
                    prop = config[i];
                    if (typeof prop === "function") {
                        this[i] = prop
                    } else {
                        this["_" + i] = prop
                    }
                }
            },
            _months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            months: function(m) {
                return this._months[m.month()]
            },
            _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            monthsShort: function(m) {
                return this._monthsShort[m.month()]
            },
            monthsParse: function(monthName) {
                var i, mom, regex;
                if (!this._monthsParse) {
                    this._monthsParse = []
                }
                for (i = 0; i < 12; i++) {
                    if (!this._monthsParse[i]) {
                        mom = moment.utc([2e3, i]);
                        regex = "^" + this.months(mom, "") + "|^" + this.monthsShort(mom, "");
                        this._monthsParse[i] = new RegExp(regex.replace(".", ""), "i")
                    }
                    if (this._monthsParse[i].test(monthName)) {
                        return i
                    }
                }
            },
            _weekdays: "星期天_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdays: function(m) {
                return this._weekdays[m.day()]
            },
            _weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
            weekdaysShort: function(m) {
                return this._weekdaysShort[m.day()]
            },
            _weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            weekdaysMin: function(m) {
                return this._weekdaysMin[m.day()]
            },
            weekdaysParse: function(weekdayName) {
                var i, mom, regex;
                if (!this._weekdaysParse) {
                    this._weekdaysParse = []
                }
                for (i = 0; i < 7; i++) {
                    if (!this._weekdaysParse[i]) {
                        mom = moment([2e3, 1]).day(i);
                        regex = "^" + this.weekdays(mom, "") + "|^" + this.weekdaysShort(mom, "") + "|^" + this.weekdaysMin(mom, "");
                        this._weekdaysParse[i] = new RegExp(regex.replace(".", ""), "i")
                    }
                    if (this._weekdaysParse[i].test(weekdayName)) {
                        return i
                    }
                }
            },
            _longDateFormat: {
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY LT",
                LLLL: "dddd, MMMM D, YYYY LT"
            },
            longDateFormat: function(key) {
                var output = this._longDateFormat[key];
                if (!output && this._longDateFormat[key.toUpperCase()]) {
                    output = this._longDateFormat[key.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(val) {
                        return val.slice(1)
                    });
                    this._longDateFormat[key] = output
                }
                return output
            },
            isPM: function(input) {
                return (input + "").toLowerCase().charAt(0) === "p"
            },
            _meridiemParse: /[ap]\.?m?\.?/i,
            meridiem: function(hours, minutes, isLower) {
                if (hours > 11) {
                    return isLower ? "pm" : "PM"
                } else {
                    return isLower ? "am" : "AM"
                }
            },
            _calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            calendar: function(key, mom) {
                var output = this._calendar[key];
                return typeof output === "function" ? output.apply(mom) : output
            },
            _relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            relativeTime: function(number, withoutSuffix, string, isFuture) {
                var output = this._relativeTime[string];
                return typeof output === "function" ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number)
            },
            pastFuture: function(diff, output) {
                var format = this._relativeTime[diff > 0 ? "future" : "past"];
                return typeof format === "function" ? format(output) : format.replace(/%s/i, output)
            },
            ordinal: function(number) {
                return this._ordinal.replace("%d", number)
            },
            _ordinal: "%d",
            preparse: function(string) {
                return string
            },
            postformat: function(string) {
                return string
            },
            week: function(mom) {
                return weekOfYear(mom, this._week.dow, this._week.doy).week
            },
            _week: {
                dow: 0,
                doy: 6
            },
            _invalidDate: "Invalid date",
            invalidDate: function() {
                return this._invalidDate
            }
        });

        function removeFormattingTokens(input) {
            if (input.match(/\[[\s\S]/)) {
                return input.replace(/^\[|\]$/g, "")
            }
            return input.replace(/\\/g, "")
        }

        function makeFormatFunction(format) {
            var array = format.match(formattingTokens),
                i, length;
            for (i = 0, length = array.length; i < length; i++) {
                if (formatTokenFunctions[array[i]]) {
                    array[i] = formatTokenFunctions[array[i]]
                } else {
                    array[i] = removeFormattingTokens(array[i])
                }
            }
            return function(mom) {
                var output = "";
                for (i = 0; i < length; i++) {
                    output += array[i] instanceof Function ? array[i].call(mom, format) : array[i]
                }
                return output
            }
        }

        function formatMoment(m, format) {
            if (!m.isValid()) {
                return m.localeData().invalidDate()
            }
            format = expandFormat(format, m.localeData());
            if (!formatFunctions[format]) {
                formatFunctions[format] = makeFormatFunction(format)
            }
            return formatFunctions[format](m)
        }

        function expandFormat(format, locale) {
            var i = 5;

            function replaceLongDateFormatTokens(input) {
                return locale.longDateFormat(input) || input
            }
            localFormattingTokens.lastIndex = 0;
            while (i >= 0 && localFormattingTokens.test(format)) {
                format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
                localFormattingTokens.lastIndex = 0;
                i -= 1
            }
            return format
        }

        function getParseRegexForToken(token, config) {
            var a, strict = config._strict;
            switch (token) {
                case "Q":
                    return parseTokenOneDigit;
                case "DDDD":
                    return parseTokenThreeDigits;
                case "YYYY":
                case "GGGG":
                case "gggg":
                    return strict ? parseTokenFourDigits : parseTokenOneToFourDigits;
                case "Y":
                case "G":
                case "g":
                    return parseTokenSignedNumber;
                case "YYYYYY":
                case "YYYYY":
                case "GGGGG":
                case "ggggg":
                    return strict ? parseTokenSixDigits : parseTokenOneToSixDigits;
                case "S":
                    if (strict) {
                        return parseTokenOneDigit
                    }
                case "SS":
                    if (strict) {
                        return parseTokenTwoDigits
                    }
                case "SSS":
                    if (strict) {
                        return parseTokenThreeDigits
                    }
                case "DDD":
                    return parseTokenOneToThreeDigits;
                case "MMM":
                case "MMMM":
                case "dd":
                case "ddd":
                case "dddd":
                    return parseTokenWord;
                case "a":
                case "A":
                    return config._locale._meridiemParse;
                case "X":
                    return parseTokenTimestampMs;
                case "Z":
                case "ZZ":
                    return parseTokenTimezone;
                case "T":
                    return parseTokenT;
                case "SSSS":
                    return parseTokenDigits;
                case "MM":
                case "DD":
                case "YY":
                case "GG":
                case "gg":
                case "HH":
                case "hh":
                case "mm":
                case "ss":
                case "ww":
                case "WW":
                    return strict ? parseTokenTwoDigits : parseTokenOneOrTwoDigits;
                case "M":
                case "D":
                case "d":
                case "H":
                case "h":
                case "m":
                case "s":
                case "w":
                case "W":
                case "e":
                case "E":
                    return parseTokenOneOrTwoDigits;
                case "Do":
                    return parseTokenOrdinal;
                default:
                    a = new RegExp(regexpEscape(unescapeFormat(token.replace("\\", "")), "i"));
                    return a
            }
        }

        function timezoneMinutesFromString(string) {
            string = string || "";
            var possibleTzMatches = string.match(parseTokenTimezone) || [],
                tzChunk = possibleTzMatches[possibleTzMatches.length - 1] || [],
                parts = (tzChunk + "").match(parseTimezoneChunker) || ["-", 0, 0],
                minutes = +(parts[1] * 60) + toInt(parts[2]);
            return parts[0] === "+" ? -minutes : minutes
        }

        function addTimeToArrayFromToken(token, input, config) {
            var a, datePartArray = config._a;
            switch (token) {
                case "Q":
                    if (input != null) {
                        datePartArray[MONTH] = (toInt(input) - 1) * 3
                    }
                    break;
                case "M":
                case "MM":
                    if (input != null) {
                        datePartArray[MONTH] = toInt(input) - 1
                    }
                    break;
                case "MMM":
                case "MMMM":
                    a = config._locale.monthsParse(input);
                    if (a != null) {
                        datePartArray[MONTH] = a
                    } else {
                        config._pf.invalidMonth = input
                    }
                    break;
                case "D":
                case "DD":
                    if (input != null) {
                        datePartArray[DATE] = toInt(input)
                    }
                    break;
                case "Do":
                    if (input != null) {
                        datePartArray[DATE] = toInt(parseInt(input, 10))
                    }
                    break;
                case "DDD":
                case "DDDD":
                    if (input != null) {
                        config._dayOfYear = toInt(input)
                    }
                    break;
                case "YY":
                    datePartArray[YEAR] = moment.parseTwoDigitYear(input);
                    break;
                case "YYYY":
                case "YYYYY":
                case "YYYYYY":
                    datePartArray[YEAR] = toInt(input);
                    break;
                case "a":
                case "A":
                    config._isPm = config._locale.isPM(input);
                    break;
                case "H":
                case "HH":
                case "h":
                case "hh":
                    datePartArray[HOUR] = toInt(input);
                    break;
                case "m":
                case "mm":
                    datePartArray[MINUTE] = toInt(input);
                    break;
                case "s":
                case "ss":
                    datePartArray[SECOND] = toInt(input);
                    break;
                case "S":
                case "SS":
                case "SSS":
                case "SSSS":
                    datePartArray[MILLISECOND] = toInt(("0." + input) * 1e3);
                    break;
                case "X":
                    config._d = new Date(parseFloat(input) * 1e3);
                    break;
                case "Z":
                case "ZZ":
                    config._useUTC = true;
                    config._tzm = timezoneMinutesFromString(input);
                    break;
                case "dd":
                case "ddd":
                case "dddd":
                    a = config._locale.weekdaysParse(input);
                    if (a != null) {
                        config._w = config._w || {};
                        config._w["d"] = a
                    } else {
                        config._pf.invalidWeekday = input
                    }
                    break;
                case "w":
                case "ww":
                case "W":
                case "WW":
                case "d":
                case "e":
                case "E":
                    token = token.substr(0, 1);
                case "gggg":
                case "GGGG":
                case "GGGGG":
                    token = token.substr(0, 2);
                    if (input) {
                        config._w = config._w || {};
                        config._w[token] = toInt(input)
                    }
                    break;
                case "gg":
                case "GG":
                    config._w = config._w || {};
                    config._w[token] = moment.parseTwoDigitYear(input)
            }
        }

        function dayOfYearFromWeekInfo(config) {
            var w, weekYear, week, weekday, dow, doy, temp;
            w = config._w;
            if (w.GG != null || w.W != null || w.E != null) {
                dow = 1;
                doy = 4;
                weekYear = dfl(w.GG, config._a[YEAR], weekOfYear(moment(), 1, 4).year);
                week = dfl(w.W, 1);
                weekday = dfl(w.E, 1)
            } else {
                dow = config._locale._week.dow;
                doy = config._locale._week.doy;
                weekYear = dfl(w.gg, config._a[YEAR], weekOfYear(moment(), dow, doy).year);
                week = dfl(w.w, 1);
                if (w.d != null) {
                    weekday = w.d;
                    if (weekday < dow) {
                        ++week
                    }
                } else if (w.e != null) {
                    weekday = w.e + dow
                } else {
                    weekday = dow
                }
            }
            temp = dayOfYearFromWeeks(weekYear, week, weekday, doy, dow);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear
        }

        function dateFromConfig(config) {
            var i, date, input = [],
                currentDate, yearToUse;
            if (config._d) {
                return
            }
            currentDate = currentDateArray(config);
            if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
                dayOfYearFromWeekInfo(config)
            }
            if (config._dayOfYear) {
                yearToUse = dfl(config._a[YEAR], currentDate[YEAR]);
                if (config._dayOfYear > daysInYear(yearToUse)) {
                    config._pf._overflowDayOfYear = true
                }
                date = makeUTCDate(yearToUse, 0, config._dayOfYear);
                config._a[MONTH] = date.getUTCMonth();
                config._a[DATE] = date.getUTCDate()
            }
            for (i = 0; i < 3 && config._a[i] == null; ++i) {
                config._a[i] = input[i] = currentDate[i]
            }
            for (; i < 7; i++) {
                config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i]
            }
            config._d = (config._useUTC ? makeUTCDate : makeDate).apply(null, input);
            if (config._tzm != null) {
                config._d.setUTCMinutes(config._d.getUTCMinutes() + config._tzm)
            }
        }

        function dateFromObject(config) {
            var normalizedInput;
            if (config._d) {
                return
            }
            normalizedInput = normalizeObjectUnits(config._i);
            config._a = [normalizedInput.year, normalizedInput.month, normalizedInput.day, normalizedInput.hour, normalizedInput.minute, normalizedInput.second, normalizedInput.millisecond];
            dateFromConfig(config)
        }

        function currentDateArray(config) {
            var now = new Date;
            if (config._useUTC) {
                return [now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()]
            } else {
                return [now.getFullYear(), now.getMonth(), now.getDate()]
            }
        }

        function makeDateFromStringAndFormat(config) {
            if (config._f === moment.ISO_8601) {
                parseISO(config);
                return
            }
            config._a = [];
            config._pf.empty = true;
            var string = "" + config._i,
                i, parsedInput, tokens, token, skipped, stringLength = string.length,
                totalParsedInputLength = 0;
            tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];
            for (i = 0; i < tokens.length; i++) {
                token = tokens[i];
                parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
                if (parsedInput) {
                    skipped = string.substr(0, string.indexOf(parsedInput));
                    if (skipped.length > 0) {
                        config._pf.unusedInput.push(skipped)
                    }
                    string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                    totalParsedInputLength += parsedInput.length
                }
                if (formatTokenFunctions[token]) {
                    if (parsedInput) {
                        config._pf.empty = false
                    } else {
                        config._pf.unusedTokens.push(token)
                    }
                    addTimeToArrayFromToken(token, parsedInput, config)
                } else if (config._strict && !parsedInput) {
                    config._pf.unusedTokens.push(token)
                }
            }
            config._pf.charsLeftOver = stringLength - totalParsedInputLength;
            if (string.length > 0) {
                config._pf.unusedInput.push(string)
            }
            if (config._isPm && config._a[HOUR] < 12) {
                config._a[HOUR] += 12
            }
            if (config._isPm === false && config._a[HOUR] === 12) {
                config._a[HOUR] = 0
            }
            dateFromConfig(config);
            checkOverflow(config)
        }

        function unescapeFormat(s) {
            return s.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(matched, p1, p2, p3, p4) {
                return p1 || p2 || p3 || p4
            })
        }

        function regexpEscape(s) {
            return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        }

        function makeDateFromStringAndArray(config) {
            var tempConfig, bestMoment, scoreToBeat, i, currentScore;
            if (config._f.length === 0) {
                config._pf.invalidFormat = true;
                config._d = new Date(NaN);
                return
            }
            for (i = 0; i < config._f.length; i++) {
                currentScore = 0;
                tempConfig = copyConfig({}, config);
                tempConfig._pf = defaultParsingFlags();
                tempConfig._f = config._f[i];
                makeDateFromStringAndFormat(tempConfig);
                if (!isValid(tempConfig)) {
                    continue
                }
                currentScore += tempConfig._pf.charsLeftOver;
                currentScore += tempConfig._pf.unusedTokens.length * 10;
                tempConfig._pf.score = currentScore;
                if (scoreToBeat == null || currentScore < scoreToBeat) {
                    scoreToBeat = currentScore;
                    bestMoment = tempConfig
                }
            }
            extend(config, bestMoment || tempConfig)
        }

        function parseISO(config) {
            var i, l, string = config._i,
                match = isoRegex.exec(string);
            if (match) {
                config._pf.iso = true;
                for (i = 0, l = isoDates.length; i < l; i++) {
                    if (isoDates[i][1].exec(string)) {
                        config._f = isoDates[i][0] + (match[6] || " ");
                        break
                    }
                }
                for (i = 0, l = isoTimes.length; i < l; i++) {
                    if (isoTimes[i][1].exec(string)) {
                        config._f += isoTimes[i][0];
                        break
                    }
                }
                if (string.match(parseTokenTimezone)) {
                    config._f += "Z"
                }
                makeDateFromStringAndFormat(config)
            } else {
                config._isValid = false
            }
        }

        function makeDateFromString(config) {
            parseISO(config);
            if (config._isValid === false) {
                delete config._isValid;
                moment.createFromInputFallback(config)
            }
        }

        function makeDateFromInput(config) {
            var input = config._i,
                matched;
            if (input === undefined) {
                config._d = new Date
            } else if (isDate(input)) {
                config._d = new Date((+input))
            } else if ((matched = aspNetJsonRegex.exec(input)) !== null) {
                config._d = new Date((+matched[1]))
            } else if (typeof input === "string") {
                makeDateFromString(config)
            } else if (isArray(input)) {
                config._a = input.slice(0);
                dateFromConfig(config)
            } else if (typeof input === "object") {
                dateFromObject(config)
            } else if (typeof input === "number") {
                config._d = new Date(input)
            } else {
                moment.createFromInputFallback(config)
            }
        }

        function makeDate(y, m, d, h, M, s, ms) {
            var date = new Date(y, m, d, h, M, s, ms);
            if (y < 1970) {
                date.setFullYear(y)
            }
            return date
        }

        function makeUTCDate(y) {
            var date = new Date(Date.UTC.apply(null, arguments));
            if (y < 1970) {
                date.setUTCFullYear(y)
            }
            return date
        }

        function parseWeekday(input, locale) {
            if (typeof input === "string") {
                if (!isNaN(input)) {
                    input = parseInt(input, 10)
                } else {
                    input = locale.weekdaysParse(input);
                    if (typeof input !== "number") {
                        return null
                    }
                }
            }
            return input
        }

        function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
            return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture)
        }

        function relativeTime(posNegDuration, withoutSuffix, locale) {
            var duration = moment.duration(posNegDuration).abs(),
                seconds = round(duration.as("s")),
                minutes = round(duration.as("m")),
                hours = round(duration.as("h")),
                days = round(duration.as("d")),
                months = round(duration.as("M")),
                years = round(duration.as("y")),
                args = seconds < relativeTimeThresholds.s && ["s", seconds] || minutes === 1 && ["m"] || minutes < relativeTimeThresholds.m && ["mm", minutes] || hours === 1 && ["h"] || hours < relativeTimeThresholds.h && ["hh", hours] || days === 1 && ["d"] || days < relativeTimeThresholds.d && ["dd", days] || months === 1 && ["M"] || months < relativeTimeThresholds.M && ["MM", months] || years === 1 && ["y"] || ["yy", years];
            args[2] = withoutSuffix;
            args[3] = +posNegDuration > 0;
            args[4] = locale;
            return substituteTimeAgo.apply({}, args)
        }

        function weekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
            var end = firstDayOfWeekOfYear - firstDayOfWeek,
                daysToDayOfWeek = firstDayOfWeekOfYear - mom.day(),
                adjustedMoment;
            if (daysToDayOfWeek > end) {
                daysToDayOfWeek -= 7
            }
            if (daysToDayOfWeek < end - 7) {
                daysToDayOfWeek += 7
            }
            adjustedMoment = moment(mom).add(daysToDayOfWeek, "d");
            return {
                week: Math.ceil(adjustedMoment.dayOfYear() / 7),
                year: adjustedMoment.year()
            }
        }

        function dayOfYearFromWeeks(year, week, weekday, firstDayOfWeekOfYear, firstDayOfWeek) {
            var d = makeUTCDate(year, 0, 1).getUTCDay(),
                daysToAdd, dayOfYear;
            d = d === 0 ? 7 : d;
            weekday = weekday != null ? weekday : firstDayOfWeek;
            daysToAdd = firstDayOfWeek - d + (d > firstDayOfWeekOfYear ? 7 : 0) - (d < firstDayOfWeek ? 7 : 0);
            dayOfYear = 7 * (week - 1) + (weekday - firstDayOfWeek) + daysToAdd + 1;
            return {
                year: dayOfYear > 0 ? year : year - 1,
                dayOfYear: dayOfYear > 0 ? dayOfYear : daysInYear(year - 1) + dayOfYear
            }
        }

        function makeMoment(config) {
            var input = config._i,
                format = config._f;
            config._locale = config._locale || moment.localeData(config._l);
            if (input === null || format === undefined && input === "") {
                return moment.invalid({
                    nullInput: true
                })
            }
            if (typeof input === "string") {
                config._i = input = config._locale.preparse(input)
            }
            if (moment.isMoment(input)) {
                return new Moment(input, true)
            } else if (format) {
                if (isArray(format)) {
                    makeDateFromStringAndArray(config)
                } else {
                    makeDateFromStringAndFormat(config)
                }
            } else {
                makeDateFromInput(config)
            }
            return new Moment(config)
        }
        moment = function(input, format, locale, strict) {
            var c;
            if (typeof locale === "boolean") {
                strict = locale;
                locale = undefined
            }
            c = {};
            c._isAMomentObject = true;
            c._i = input;
            c._f = format;
            c._l = locale;
            c._strict = strict;
            c._isUTC = false;
            c._pf = defaultParsingFlags();
            return makeMoment(c)
        };
        moment.suppressDeprecationWarnings = false;
        moment.createFromInputFallback = deprecate("moment construction falls back to js Date. This is " + "discouraged and will be removed in upcoming major " + "release. Please refer to " + "https://github.com/moment/moment/issues/1407 for more info.", function(config) {
            config._d = new Date(config._i)
        });

        function pickBy(fn, moments) {
            var res, i;
            if (moments.length === 1 && isArray(moments[0])) {
                moments = moments[0]
            }
            if (!moments.length) {
                return moment()
            }
            res = moments[0];
            for (i = 1; i < moments.length; ++i) {
                if (moments[i][fn](res)) {
                    res = moments[i]
                }
            }
            return res
        }
        moment.min = function() {
            var args = [].slice.call(arguments, 0);
            return pickBy("isBefore", args)
        };
        moment.max = function() {
            var args = [].slice.call(arguments, 0);
            return pickBy("isAfter", args)
        };
        moment.utc = function(input, format, locale, strict) {
            var c;
            if (typeof locale === "boolean") {
                strict = locale;
                locale = undefined
            }
            c = {};
            c._isAMomentObject = true;
            c._useUTC = true;
            c._isUTC = true;
            c._l = locale;
            c._i = input;
            c._f = format;
            c._strict = strict;
            c._pf = defaultParsingFlags();
            return makeMoment(c).utc()
        };
        moment.unix = function(input) {
            return moment(input * 1e3)
        };
        moment.duration = function(input, key) {
            var duration = input,
                match = null,
                sign, ret, parseIso, diffRes;
            if (moment.isDuration(input)) {
                duration = {
                    ms: input._milliseconds,
                    d: input._days,
                    M: input._months
                }
            } else if (typeof input === "number") {
                duration = {};
                if (key) {
                    duration[key] = input
                } else {
                    duration.milliseconds = input
                }
            } else if (!!(match = aspNetTimeSpanJsonRegex.exec(input))) {
                sign = match[1] === "-" ? -1 : 1;
                duration = {
                    y: 0,
                    d: toInt(match[DATE]) * sign,
                    h: toInt(match[HOUR]) * sign,
                    m: toInt(match[MINUTE]) * sign,
                    s: toInt(match[SECOND]) * sign,
                    ms: toInt(match[MILLISECOND]) * sign
                }
            } else if (!!(match = isoDurationRegex.exec(input))) {
                sign = match[1] === "-" ? -1 : 1;
                parseIso = function(inp) {
                    var res = inp && parseFloat(inp.replace(",", "."));
                    return (isNaN(res) ? 0 : res) * sign
                };
                duration = {
                    y: parseIso(match[2]),
                    M: parseIso(match[3]),
                    d: parseIso(match[4]),
                    h: parseIso(match[5]),
                    m: parseIso(match[6]),
                    s: parseIso(match[7]),
                    w: parseIso(match[8])
                }
            } else if (typeof duration === "object" && ("from" in duration || "to" in duration)) {
                diffRes = momentsDifference(moment(duration.from), moment(duration.to));
                duration = {};
                duration.ms = diffRes.milliseconds;
                duration.M = diffRes.months
            }
            ret = new Duration(duration);
            if (moment.isDuration(input) && input.hasOwnProperty("_locale")) {
                ret._locale = input._locale
            }
            return ret
        };
        moment.version = VERSION;
        moment.defaultFormat = isoFormat;
        moment.ISO_8601 = function() {};
        moment.momentProperties = momentProperties;
        moment.updateOffset = function() {};
        moment.relativeTimeThreshold = function(threshold, limit) {
            if (relativeTimeThresholds[threshold] === undefined) {
                return false
            }
            if (limit === undefined) {
                return relativeTimeThresholds[threshold]
            }
            relativeTimeThresholds[threshold] = limit;
            return true
        };
        moment.lang = deprecate("moment.lang is deprecated. Use moment.locale instead.", function(key, value) {
            return moment.locale(key, value)
        });
        moment.locale = function(key, values) {
            var data;
            if (key) {
                if (typeof values !== "undefined") {
                    data = moment.defineLocale(key, values)
                } else {
                    data = moment.localeData(key)
                }
                if (data) {
                    moment.duration._locale = moment._locale = data
                }
            }
            return moment._locale._abbr
        };
        moment.defineLocale = function(name, values) {
            if (values !== null) {
                values.abbr = name;
                if (!locales[name]) {
                    locales[name] = new Locale
                }
                locales[name].set(values);
                moment.locale(name);
                return locales[name]
            } else {
                delete locales[name];
                return null
            }
        };
        moment.langData = deprecate("moment.langData is deprecated. Use moment.localeData instead.", function(key) {
            return moment.localeData(key)
        });
        moment.localeData = function(key) {
            var locale;
            if (key && key._locale && key._locale._abbr) {
                key = key._locale._abbr
            }
            if (!key) {
                return moment._locale
            }
            if (!isArray(key)) {
                locale = loadLocale(key);
                if (locale) {
                    return locale
                }
                key = [key]
            }
            return chooseLocale(key)
        };
        moment.isMoment = function(obj) {
            return obj instanceof Moment || obj != null && obj.hasOwnProperty("_isAMomentObject")
        };
        moment.isDuration = function(obj) {
            return obj instanceof Duration
        };
        for (i = lists.length - 1; i >= 0; --i) {
            makeList(lists[i])
        }
        moment.normalizeUnits = function(units) {
            return normalizeUnits(units)
        };
        moment.invalid = function(flags) {
            var m = moment.utc(NaN);
            if (flags != null) {
                extend(m._pf, flags)
            } else {
                m._pf.userInvalidated = true
            }
            return m
        };
        moment.parseZone = function() {
            return moment.apply(null, arguments).parseZone()
        };
        moment.parseTwoDigitYear = function(input) {
            return toInt(input) + (toInt(input) > 68 ? 1900 : 2e3)
        };
        extend(moment.fn = Moment.prototype, {
            clone: function() {
                return moment(this)
            },
            valueOf: function() {
                return +this._d + (this._offset || 0) * 6e4
            },
            unix: function() {
                return Math.floor(+this / 1e3)
            },
            toString: function() {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            },
            toDate: function() {
                return this._offset ? new Date((+this)) : this._d
            },
            toISOString: function() {
                var m = moment(this).utc();
                if (0 < m.year() && m.year() <= 9999) {
                    return formatMoment(m, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
                } else {
                    return formatMoment(m, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
                }
            },
            toArray: function() {
                var m = this;
                return [m.year(), m.month(), m.date(), m.hours(), m.minutes(), m.seconds(), m.milliseconds()]
            },
            isValid: function() {
                return isValid(this)
            },
            isDSTShifted: function() {
                if (this._a) {
                    return this.isValid() && compareArrays(this._a, (this._isUTC ? moment.utc(this._a) : moment(this._a)).toArray()) > 0
                }
                return false
            },
            parsingFlags: function() {
                return extend({}, this._pf)
            },
            invalidAt: function() {
                return this._pf.overflow
            },
            utc: function(keepLocalTime) {
                return this.zone(0, keepLocalTime)
            },
            local: function(keepLocalTime) {
                if (this._isUTC) {
                    this.zone(0, keepLocalTime);
                    this._isUTC = false;
                    if (keepLocalTime) {
                        this.add(this._d.getTimezoneOffset(), "m")
                    }
                }
                return this
            },
            format: function(inputString) {
                var output = formatMoment(this, inputString || moment.defaultFormat);
                return this.localeData().postformat(output)
            },
            add: createAdder(1, "add"),
            subtract: createAdder(-1, "subtract"),
            diff: function(input, units, asFloat) {
                var that = makeAs(input, this),
                    zoneDiff = (this.zone() - that.zone()) * 6e4,
                    diff, output;
                units = normalizeUnits(units);
                if (units === "year" || units === "month") {
                    diff = (this.daysInMonth() + that.daysInMonth()) * 432e5;
                    output = (this.year() - that.year()) * 12 + (this.month() - that.month());
                    output += (this - moment(this).startOf("month") - (that - moment(that).startOf("month"))) / diff;
                    output -= (this.zone() - moment(this).startOf("month").zone() - (that.zone() - moment(that).startOf("month").zone())) * 6e4 / diff;
                    if (units === "year") {
                        output = output / 12
                    }
                } else {
                    diff = this - that;
                    output = units === "second" ? diff / 1e3 : units === "minute" ? diff / 6e4 : units === "hour" ? diff / 36e5 : units === "day" ? (diff - zoneDiff) / 864e5 : units === "week" ? (diff - zoneDiff) / 6048e5 : diff
                }
                return asFloat ? output : absRound(output)
            },
            from: function(time, withoutSuffix) {
                return moment.duration({
                    to: this,
                    from: time
                }).locale(this.locale()).humanize(!withoutSuffix)
            },
            fromNow: function(withoutSuffix) {
                return this.from(moment(), withoutSuffix)
            },
            calendar: function(time) {
                var now = time || moment(),
                    sod = makeAs(now, this).startOf("day"),
                    diff = this.diff(sod, "days", true),
                    format = diff < -6 ? "sameElse" : diff < -1 ? "lastWeek" : diff < 0 ? "lastDay" : diff < 1 ? "sameDay" : diff < 2 ? "nextDay" : diff < 7 ? "nextWeek" : "sameElse";
                return this.format(this.localeData().calendar(format, this))
            },
            isLeapYear: function() {
                return isLeapYear(this.year())
            },
            isDST: function() {
                return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
            },
            day: function(input) {
                var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                if (input != null) {
                    input = parseWeekday(input, this.localeData());
                    return this.add(input - day, "d")
                } else {
                    return day
                }
            },
            month: makeAccessor("Month", true),
            startOf: function(units) {
                units = normalizeUnits(units);
                switch (units) {
                    case "year":
                        this.month(0);
                    case "quarter":
                    case "month":
                        this.date(1);
                    case "week":
                    case "isoWeek":
                    case "day":
                        this.hours(0);
                    case "hour":
                        this.minutes(0);
                    case "minute":
                        this.seconds(0);
                    case "second":
                        this.milliseconds(0)
                }
                if (units === "week") {
                    this.weekday(0)
                } else if (units === "isoWeek") {
                    this.isoWeekday(1)
                }
                if (units === "quarter") {
                    this.month(Math.floor(this.month() / 3) * 3)
                }
                return this
            },
            endOf: function(units) {
                units = normalizeUnits(units);
                return this.startOf(units).add(1, units === "isoWeek" ? "week" : units).subtract(1, "ms")
            },
            isAfter: function(input, units) {
                units = typeof units !== "undefined" ? units : "millisecond";
                return +this.clone().startOf(units) > +moment(input).startOf(units)
            },
            isBefore: function(input, units) {
                units = typeof units !== "undefined" ? units : "millisecond";
                return +this.clone().startOf(units) < +moment(input).startOf(units)
            },
            isSame: function(input, units) {
                units = units || "ms";
                return +this.clone().startOf(units) === +makeAs(input, this).startOf(units)
            },
            min: deprecate("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function(other) {
                other = moment.apply(null, arguments);
                return other < this ? this : other
            }),
            max: deprecate("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function(other) {
                other = moment.apply(null, arguments);
                return other > this ? this : other
            }),
            zone: function(input, keepLocalTime) {
                var offset = this._offset || 0,
                    localAdjust;
                if (input != null) {
                    if (typeof input === "string") {
                        input = timezoneMinutesFromString(input)
                    }
                    if (Math.abs(input) < 16) {
                        input = input * 60
                    }
                    if (!this._isUTC && keepLocalTime) {
                        localAdjust = this._d.getTimezoneOffset()
                    }
                    this._offset = input;
                    this._isUTC = true;
                    if (localAdjust != null) {
                        this.subtract(localAdjust, "m")
                    }
                    if (offset !== input) {
                        if (!keepLocalTime || this._changeInProgress) {
                            addOrSubtractDurationFromMoment(this, moment.duration(offset - input, "m"), 1, false)
                        } else if (!this._changeInProgress) {
                            this._changeInProgress = true;
                            moment.updateOffset(this, true);
                            this._changeInProgress = null
                        }
                    }
                } else {
                    return this._isUTC ? offset : this._d.getTimezoneOffset()
                }
                return this
            },
            zoneAbbr: function() {
                return this._isUTC ? "UTC" : ""
            },
            zoneName: function() {
                return this._isUTC ? "Coordinated Universal Time" : ""
            },
            parseZone: function() {
                if (this._tzm) {
                    this.zone(this._tzm)
                } else if (typeof this._i === "string") {
                    this.zone(this._i)
                }
                return this
            },
            hasAlignedHourOffset: function(input) {
                if (!input) {
                    input = 0
                } else {
                    input = moment(input).zone()
                }
                return (this.zone() - input) % 60 === 0
            },
            daysInMonth: function() {
                return daysInMonth(this.year(), this.month())
            },
            dayOfYear: function(input) {
                var dayOfYear = round((moment(this).startOf("day") - moment(this).startOf("year")) / 864e5) + 1;
                return input == null ? dayOfYear : this.add(input - dayOfYear, "d")
            },
            quarter: function(input) {
                return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3)
            },
            weekYear: function(input) {
                var year = weekOfYear(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
                return input == null ? year : this.add(input - year, "y")
            },
            isoWeekYear: function(input) {
                var year = weekOfYear(this, 1, 4).year;
                return input == null ? year : this.add(input - year, "y")
            },
            week: function(input) {
                var week = this.localeData().week(this);
                return input == null ? week : this.add((input - week) * 7, "d")
            },
            isoWeek: function(input) {
                var week = weekOfYear(this, 1, 4).week;
                return input == null ? week : this.add((input - week) * 7, "d")
            },
            weekday: function(input) {
                var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return input == null ? weekday : this.add(input - weekday, "d")
            },
            isoWeekday: function(input) {
                return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7)
            },
            isoWeeksInYear: function() {
                return weeksInYear(this.year(), 1, 4)
            },
            weeksInYear: function() {
                var weekInfo = this.localeData()._week;
                return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy)
            },
            get: function(units) {
                units = normalizeUnits(units);
                return this[units]()
            },
            set: function(units, value) {
                units = normalizeUnits(units);
                if (typeof this[units] === "function") {
                    this[units](value)
                }
                return this
            },
            locale: function(key) {
                if (key === undefined) {
                    return this._locale._abbr
                } else {
                    this._locale = moment.localeData(key);
                    return this
                }
            },
            lang: deprecate("moment().lang() is deprecated. Use moment().localeData() instead.", function(key) {
                if (key === undefined) {
                    return this.localeData()
                } else {
                    this._locale = moment.localeData(key);
                    return this
                }
            }),
            localeData: function() {
                return this._locale
            }
        });

        function rawMonthSetter(mom, value) {
            var dayOfMonth;
            if (typeof value === "string") {
                value = mom.localeData().monthsParse(value);
                if (typeof value !== "number") {
                    return mom
                }
            }
            dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
            mom._d["set" + (mom._isUTC ? "UTC" : "") + "Month"](value, dayOfMonth);
            return mom
        }

        function rawGetter(mom, unit) {
            return mom._d["get" + (mom._isUTC ? "UTC" : "") + unit]()
        }

        function rawSetter(mom, unit, value) {
            if (unit === "Month") {
                return rawMonthSetter(mom, value)
            } else {
                return mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](value)
            }
        }

        function makeAccessor(unit, keepTime) {
            return function(value) {
                if (value != null) {
                    rawSetter(this, unit, value);
                    moment.updateOffset(this, keepTime);
                    return this
                } else {
                    return rawGetter(this, unit)
                }
            }
        }
        moment.fn.millisecond = moment.fn.milliseconds = makeAccessor("Milliseconds", false);
        moment.fn.second = moment.fn.seconds = makeAccessor("Seconds", false);
        moment.fn.minute = moment.fn.minutes = makeAccessor("Minutes", false);
        moment.fn.hour = moment.fn.hours = makeAccessor("Hours", true);
        moment.fn.date = makeAccessor("Date", true);
        moment.fn.dates = deprecate("dates accessor is deprecated. Use date instead.", makeAccessor("Date", true));
        moment.fn.year = makeAccessor("FullYear", true);
        moment.fn.years = deprecate("years accessor is deprecated. Use year instead.", makeAccessor("FullYear", true));
        moment.fn.days = moment.fn.day;
        moment.fn.months = moment.fn.month;
        moment.fn.weeks = moment.fn.week;
        moment.fn.isoWeeks = moment.fn.isoWeek;
        moment.fn.quarters = moment.fn.quarter;
        moment.fn.toJSON = moment.fn.toISOString;

        function daysToYears(days) {
            return days * 400 / 146097
        }

        function yearsToDays(years) {
            return years * 146097 / 400
        }
        extend(moment.duration.fn = Duration.prototype, {
            _bubble: function() {
                var milliseconds = this._milliseconds,
                    days = this._days,
                    months = this._months,
                    data = this._data,
                    seconds, minutes, hours, years = 0;
                data.milliseconds = milliseconds % 1e3;
                seconds = absRound(milliseconds / 1e3);
                data.seconds = seconds % 60;
                minutes = absRound(seconds / 60);
                data.minutes = minutes % 60;
                hours = absRound(minutes / 60);
                data.hours = hours % 24;
                days += absRound(hours / 24);
                years = absRound(daysToYears(days));
                days -= absRound(yearsToDays(years));
                months += absRound(days / 30);
                days %= 30;
                years += absRound(months / 12);
                months %= 12;
                data.days = days;
                data.months = months;
                data.years = years
            },
            abs: function() {
                this._milliseconds = Math.abs(this._milliseconds);
                this._days = Math.abs(this._days);
                this._months = Math.abs(this._months);
                this._data.milliseconds = Math.abs(this._data.milliseconds);
                this._data.seconds = Math.abs(this._data.seconds);
                this._data.minutes = Math.abs(this._data.minutes);
                this._data.hours = Math.abs(this._data.hours);
                this._data.months = Math.abs(this._data.months);
                this._data.years = Math.abs(this._data.years);
                return this
            },
            weeks: function() {
                return absRound(this.days() / 7)
            },
            valueOf: function() {
                return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6
            },
            humanize: function(withSuffix) {
                var output = relativeTime(this, !withSuffix, this.localeData());
                if (withSuffix) {
                    output = this.localeData().pastFuture(+this, output)
                }
                return this.localeData().postformat(output)
            },
            add: function(input, val) {
                var dur = moment.duration(input, val);
                this._milliseconds += dur._milliseconds;
                this._days += dur._days;
                this._months += dur._months;
                this._bubble();
                return this
            },
            subtract: function(input, val) {
                var dur = moment.duration(input, val);
                this._milliseconds -= dur._milliseconds;
                this._days -= dur._days;
                this._months -= dur._months;
                this._bubble();
                return this
            },
            get: function(units) {
                units = normalizeUnits(units);
                return this[units.toLowerCase() + "s"]()
            },
            as: function(units) {
                var days, months;
                units = normalizeUnits(units);
                days = this._days + this._milliseconds / 864e5;
                if (units === "month" || units === "year") {
                    months = this._months + daysToYears(days) * 12;
                    return units === "month" ? months : months / 12
                } else {
                    days += yearsToDays(this._months / 12);
                    switch (units) {
                        case "week":
                            return days / 7;
                        case "day":
                            return days;
                        case "hour":
                            return days * 24;
                        case "minute":
                            return days * 24 * 60;
                        case "second":
                            return days * 24 * 60 * 60;
                        case "millisecond":
                            return days * 24 * 60 * 60 * 1e3;
                        default:
                            throw new Error("Unknown unit " + units)
                    }
                }
            },
            lang: moment.fn.lang,
            locale: moment.fn.locale,
            toIsoString: deprecate("toIsoString() is deprecated. Please use toISOString() instead " + "(notice the capitals)", function() {
                return this.toISOString()
            }),
            toISOString: function() {
                var years = Math.abs(this.years()),
                    months = Math.abs(this.months()),
                    days = Math.abs(this.days()),
                    hours = Math.abs(this.hours()),
                    minutes = Math.abs(this.minutes()),
                    seconds = Math.abs(this.seconds() + this.milliseconds() / 1e3);
                if (!this.asSeconds()) {
                    return "P0D"
                }
                return (this.asSeconds() < 0 ? "-" : "") + "P" + (years ? years + "Y" : "") + (months ? months + "M" : "") + (days ? days + "D" : "") + (hours || minutes || seconds ? "T" : "") + (hours ? hours + "H" : "") + (minutes ? minutes + "M" : "") + (seconds ? seconds + "S" : "")
            },
            localeData: function() {
                return this._locale
            }
        });

        function makeDurationGetter(name) {
            moment.duration.fn[name] = function() {
                return this._data[name]
            }
        }
        for (i in unitMillisecondFactors) {
            if (unitMillisecondFactors.hasOwnProperty(i)) {
                makeDurationGetter(i.toLowerCase())
            }
        }
        moment.duration.fn.asMilliseconds = function() {
            return this.as("ms")
        };
        moment.duration.fn.asSeconds = function() {
            return this.as("s")
        };
        moment.duration.fn.asMinutes = function() {
            return this.as("m")
        };
        moment.duration.fn.asHours = function() {
            return this.as("h")
        };
        moment.duration.fn.asDays = function() {
            return this.as("d")
        };
        moment.duration.fn.asWeeks = function() {
            return this.as("weeks")
        };
        moment.duration.fn.asMonths = function() {
            return this.as("M")
        };
        moment.duration.fn.asYears = function() {
            return this.as("y")
        };
        moment.locale("en", {
            ordinal: function(number) {
                var b = number % 10,
                    output = toInt(number % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";
                return number + output
            }
        });

        function makeGlobal(shouldDeprecate) {
            if (typeof ender !== "undefined") {
                return
            }
            oldGlobalMoment = globalScope.moment;
            if (shouldDeprecate) {
                globalScope.moment = deprecate("Accessing Moment through the global scope is " + "deprecated, and will be removed in an upcoming " + "release.", moment)
            } else {
                globalScope.moment = moment
            }
        }
        if (hasModule) {
            module.exports = moment
        } else if (typeof define === "function" && define.amd) {
            define("moment", function(require, exports, module) {
                if (module.config && module.config() && module.config().noGlobal === true) {
                    globalScope.moment = oldGlobalMoment
                }
                return moment
            });
            makeGlobal(true)
        } else {
            makeGlobal()
        }
    }).call(this)
});
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
define("xg/eid-company/1.0.0/c/handlebars/modifyPassword-debug.handlebars", ["alinw/handlebars/1.3.0/runtime-debug"], function(require, exports, module) {
    var Handlebars = require("alinw/handlebars/1.3.0/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, ">= 1.0.0"];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        return '<div id="modal-modifyPassword" class="modal fade">\r\n    <div class="modal-dialog">\r\n        <div class="modal-content radius">\r\n            <div class="modal-header">\r\n                <h3 class="modal-title ml20">修改密码</h3>\r\n                <a class="close" data-dismiss="modal" aria-hidden="true" href="javascript:void();">×</a>\r\n            </div>\r\n            <form class="form form-horizontal" id="modifyPasswordForm">\r\n                <div class="modal-body">\r\n                    <div class="row cl">\r\n                        <label class="form-label col-xs-4 col-sm-3">当前密码：</label>\r\n                        <div class="formControls col-xs-8 col-sm-9">\r\n                            <input type="password" class="input-text w320" placeholder="请输入老密码" name="olderPassword" id="olderPassword">\r\n                        </div>\r\n                    </div>\r\n                    <div class="row cl">\r\n                        <label class="form-label col-xs-4 col-sm-3">新密码：</label>\r\n                        <div class="formControls col-xs-8 col-sm-9">\r\n                            <input type="password" class="input-text w320" placeholder="请输入新密码" name="newPassword" id="newPassword">\r\n                        </div>\r\n                    </div>\r\n                    <div class="row cl">\r\n                        <label class="form-label col-xs-4 col-sm-3">新密码确认：</label>\r\n                        <div class="formControls col-xs-8 col-sm-9">\r\n                            <input type="password" class="input-text w320" placeholder="再次输入新密码" id="confirm" name="confirm">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class="modal-footer">\r\n                    <input class="btn btn-primary" type="submit" value="确定">\r\n                    <a class="btn mr23" data-dismiss="modal" aria-hidden="true">关闭</a>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>'
    })
});
define("xg/eid-company/1.0.0/c/handlebars/modifyInfo-debug.handlebars", ["alinw/handlebars/1.3.0/runtime-debug"], function(require, exports, module) {
    var Handlebars = require("alinw/handlebars/1.3.0/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, ">= 1.0.0"];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        return '<div id="modal-modifyInfo" class="modal fade"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\r\n    <div class="modal-dialog">\r\n        <div class="modal-content radius">\r\n            <div class="modal-header">\r\n                <h2 class="modal-title">修改个人信息</h2>\r\n                <a class="close" data-dismiss="modal" aria-hidden="true">×</a>\r\n            </div>\r\n            <form class="form form-horizontal" id="modifyInfoForm">\r\n                <div class="modal-body" style="overflow: hidden">\r\n                    <div class="row cl">\r\n                        <label class="labelText col-xs-4 col-sm-3 text-c">手机号码：</label>\r\n                        <div class="formControls col-xs-8 col-sm-9">\r\n                            <input type="hidden" class="input-text pull-left" id="customerId" name="customerId">\r\n                            <input type="text" class="input-text pull-left" id="mobile" name="mobile" maxlength="11" placeholder="请输入手机号码">\r\n                        </div>\r\n                    </div>\r\n                    <div class="row cl mt10">\r\n                        <label class="labelText col-xs-4 col-sm-3 text-c">姓名：</label>\r\n                        <div class="formControls col-xs-8 col-sm-9">\r\n                            <input type="text" class="input-text pull-left" id="realName" name="realName" placeholder="请输入姓名">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class="modal-footer">\r\n                    <input class="btn btn-primary" type="submit" value="确定">\r\n                    <a class="btn" data-dismiss="modal" aria-hidden="true">关闭</a>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>'
    })
});
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
define("xg/eid-company/1.0.0/c/handlebars/versionH-debug.handlebars", ["alinw/handlebars/1.3.0/runtime-debug"], function(require, exports, module) {
    var Handlebars = require("alinw/handlebars/1.3.0/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, ">= 1.0.0"];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        return '<div id="modal-version" class="modal fade">\r\n    <div class="modal-dialog">\r\n        <div class="modal-content radius">\r\n            <div class="modal-header">\r\n                <h4 class="modal-title ml20">提示</h4>\r\n                <a class="close" data-dismiss="modal" aria-hidden="true" href="javascript:void();">×</a>\r\n            </div>\r\n            <div class="modal-body">\r\n                <h4>为了更好的体验，请升级到IE9及以上版本！</h4>\r\n            </div>\r\n            <div class="modal-footer">\r\n                <a class="btn btn-primary" href="https://www.baidu.com/s?ie=utf-8&f=3&rsv_bp=1&tn=80035161_2_dg&wd=ie%E6%B5%8F%E8%A7%88%E5%99%A8%E5%AE%98%E6%96%B9%E4%B8%8B%E8%BD%BD&oq=www.baiducom&rsv_pq=8cea002a000002a7&rsv_t=4e10AvIkVl%2FX0p9hHF79eHZCgGrGWlXPKUF0SynIeNMTz0y6eQEFIvkhJtOVXSyOTYKvng&rqlang=cn&rsv_enter=1&rsv_sug3=3&rsv_sug1=1&rsv_sug7=100&rsv_sug2=1&prefixsug=ie&rsp=0&inputT=3830&rsv_sug4=3831">确定</a>\r\n                <a class="btn mr23" data-dismiss="modal" aria-hidden="true">关闭</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'
    })
});
define("xg/eid-company/1.0.0/c/static/h-ui/js/H-ui-debug", ["jquery/jquery/1.10.1/jquery-debug"], function(require, exports, module) {
    var $ = require("jquery/jquery/1.10.1/jquery-debug");
    ! function(a, b, c) {
        "use strict";
        var d = function(d, e) {
            var f = !!b.getComputedStyle;
            f || (b.getComputedStyle = function(a) {
                return this.el = a, this.getPropertyValue = function(b) {
                    var c = /(\-([a-z]){1})/g;
                    return "float" === b && (b = "styleFloat"), c.test(b) && (b = b.replace(c, function() {
                        return arguments[2].toUpperCase()
                    })), a.currentStyle[b] ? a.currentStyle[b] : null
                }, this
            });
            var g, h, i, j, k, l, m = function(a, b, c, d) {
                    if ("addEventListener" in a) try {
                        a.addEventListener(b, c, d)
                    } catch (e) {
                        if ("object" != typeof c || !c.handleEvent) throw e;
                        a.addEventListener(b, function(a) {
                            c.handleEvent.call(c, a)
                        }, d)
                    } else "attachEvent" in a && ("object" == typeof c && c.handleEvent ? a.attachEvent("on" + b, function() {
                        c.handleEvent.call(c)
                    }) : a.attachEvent("on" + b, c))
                },
                n = function(a, b, c, d) {
                    if ("removeEventListener" in a) try {
                        a.removeEventListener(b, c, d)
                    } catch (e) {
                        if ("object" != typeof c || !c.handleEvent) throw e;
                        a.removeEventListener(b, function(a) {
                            c.handleEvent.call(c, a)
                        }, d)
                    } else "detachEvent" in a && ("object" == typeof c && c.handleEvent ? a.detachEvent("on" + b, function() {
                        c.handleEvent.call(c)
                    }) : a.detachEvent("on" + b, c))
                },
                o = function(a) {
                    if (a.children.length < 1) throw new Error("The Nav container has no containing elements");
                    for (var b = [], c = 0; c < a.children.length; c++) 1 === a.children[c].nodeType && b.push(a.children[c]);
                    return b
                },
                p = function(a, b) {
                    for (var c in b) a.setAttribute(c, b[c])
                },
                q = function(a, b) {
                    0 !== a.className.indexOf(b) && (a.className += " " + b, a.className = a.className.replace(/(^\s*)|(\s*$)/g, ""))
                },
                r = function(a, b) {
                    var c = new RegExp("(\\s|^)" + b + "(\\s|$)");
                    a.className = a.className.replace(c, " ").replace(/(^\s*)|(\s*$)/g, "")
                },
                s = function(a, b, c) {
                    for (var d = 0; d < a.length; d++) b.call(c, d, a[d])
                },
                t = a.createElement("style"),
                u = a.documentElement,
                v = function(b, c) {
                    var d;
                    this.options = {
                        animate: !0,
                        transition: 284,
                        label: "Menu",
                        insert: "before",
                        customToggle: "",
                        closeOnNavClick: !1,
                        openPos: "relative",
                        navClass: "nav-collapse",
                        navActiveClass: "js-nav-active",
                        jsClass: "js",
                        init: function() {},
                        open: function() {},
                        close: function() {}
                    };
                    for (d in c) this.options[d] = c[d];
                    if (q(u, this.options.jsClass), this.wrapperEl = b.replace("#", ""), a.getElementById(this.wrapperEl)) this.wrapper = a.getElementById(this.wrapperEl);
                    else {
                        if (!a.querySelector(this.wrapperEl)) throw new Error("The nav element you are trying to select doesn't exist");
                        this.wrapper = a.querySelector(this.wrapperEl)
                    }
                    this.wrapper.inner = o(this.wrapper), h = this.options, g = this.wrapper, this._init(this)
                };
            return v.prototype = {
                destroy: function() {
                    this._removeStyles(), r(g, "closed"), r(g, "opened"), r(g, h.navClass), r(g, h.navClass + "-" + this.index), r(u, h.navActiveClass), g.removeAttribute("style"), g.removeAttribute("aria-hidden"), n(b, "resize", this, !1), n(b, "focus", this, !1), n(a.body, "touchmove", this, !1), n(i, "touchstart", this, !1), n(i, "touchend", this, !1), n(i, "mouseup", this, !1), n(i, "keyup", this, !1), n(i, "click", this, !1), h.customToggle ? i.removeAttribute("aria-hidden") : i.parentNode.removeChild(i)
                },
                toggle: function() {
                    j === !0 && (l ? this.close() : this.open())
                },
                open: function() {
                    l || (r(g, "closed"), q(g, "opened"), q(u, h.navActiveClass), q(i, "active"), g.style.position = h.openPos, p(g, {
                        "aria-hidden": "false"
                    }), l = !0, h.open())
                },
                close: function() {
                    l && (q(g, "closed"), r(g, "opened"), r(u, h.navActiveClass), r(i, "active"), p(g, {
                        "aria-hidden": "true"
                    }), h.animate ? (j = !1, setTimeout(function() {
                        g.style.position = "absolute", j = !0
                    }, h.transition + 10)) : g.style.position = "absolute", l = !1, h.close())
                },
                resize: function() {
                    "none" !== b.getComputedStyle(i, null).getPropertyValue("display") ? (k = !0, p(i, {
                        "aria-hidden": "false"
                    }), g.className.match(/(^|\s)closed(\s|$)/) && (p(g, {
                        "aria-hidden": "true"
                    }), g.style.position = "absolute"), this._createStyles(), this._calcHeight()) : (k = !1, p(i, {
                        "aria-hidden": "true"
                    }), p(g, {
                        "aria-hidden": "false"
                    }), g.style.position = h.openPos, this._removeStyles())
                },
                handleEvent: function(a) {
                    var c = a || b.event;
                    switch (c.type) {
                        case "touchstart":
                            this._onTouchStart(c);
                            break;
                        case "touchmove":
                            this._onTouchMove(c);
                            break;
                        case "touchend":
                        case "mouseup":
                            this._onTouchEnd(c);
                            break;
                        case "click":
                            this._preventDefault(c);
                            break;
                        case "keyup":
                            this._onKeyUp(c);
                            break;
                        case "focus":
                        case "resize":
                            this.resize(c)
                    }
                },
                _init: function() {
                    this.index = c++, q(g, h.navClass), q(g, h.navClass + "-" + this.index), q(g, "closed"), j = !0, l = !1, this._closeOnNavClick(), this._createToggle(), this._transitions(), this.resize();
                    var d = this;
                    setTimeout(function() {
                        d.resize()
                    }, 20), m(b, "resize", this, !1), m(b, "focus", this, !1), m(a.body, "touchmove", this, !1), m(i, "touchstart", this, !1), m(i, "touchend", this, !1), m(i, "mouseup", this, !1), m(i, "keyup", this, !1), m(i, "click", this, !1), h.init()
                },
                _createStyles: function() {
                    t.parentNode || (t.type = "text/css", a.getElementsByTagName("head")[0].appendChild(t))
                },
                _removeStyles: function() {
                    t.parentNode && t.parentNode.removeChild(t)
                },
                _createToggle: function() {
                    if (h.customToggle) {
                        var b = h.customToggle.replace("#", "");
                        if (a.getElementById(b)) i = a.getElementById(b);
                        else {
                            if (!a.querySelector(b)) throw new Error("The custom nav toggle you are trying to select doesn't exist");
                            i = a.querySelector(b)
                        }
                    } else {
                        var c = a.createElement("a");
                        c.innerHTML = h.label, p(c, {
                            href: "#",
                            class: "nav-toggle"
                        }), "after" === h.insert ? g.parentNode.insertBefore(c, g.nextSibling) : g.parentNode.insertBefore(c, g), i = c
                    }
                },
                _closeOnNavClick: function() {
                    if (h.closeOnNavClick) {
                        var a = g.getElementsByTagName("a"),
                            b = this;
                        s(a, function(c) {
                            m(a[c], "click", function() {
                                k && b.toggle()
                            }, !1)
                        })
                    }
                },
                _preventDefault: function(a) {
                    return a.preventDefault ? (a.stopImmediatePropagation && a.stopImmediatePropagation(), a.preventDefault(), a.stopPropagation(), !1) : void(a.returnValue = !1)
                },
                _onTouchStart: function(a) {
                    Event.prototype.stopImmediatePropagation || this._preventDefault(a), this.startX = a.touches[0].clientX, this.startY = a.touches[0].clientY, this.touchHasMoved = !1, n(i, "mouseup", this, !1)
                },
                _onTouchMove: function(a) {
                    (Math.abs(a.touches[0].clientX - this.startX) > 10 || Math.abs(a.touches[0].clientY - this.startY) > 10) && (this.touchHasMoved = !0)
                },
                _onTouchEnd: function(a) {
                    if (this._preventDefault(a), k && !this.touchHasMoved) {
                        if ("touchend" === a.type) return void this.toggle();
                        var c = a || b.event;
                        3 !== c.which && 2 !== c.button && this.toggle()
                    }
                },
                _onKeyUp: function(a) {
                    var c = a || b.event;
                    13 === c.keyCode && this.toggle()
                },
                _transitions: function() {
                    if (h.animate) {
                        var a = g.style,
                            b = "max-height " + h.transition + "ms";
                        a.WebkitTransition = a.MozTransition = a.OTransition = a.transition = b
                    }
                },
                _calcHeight: function() {
                    for (var a = 0, b = 0; b < g.inner.length; b++) a += g.inner[b].offsetHeight;
                    var c = "." + h.jsClass + " ." + h.navClass + "-" + this.index + ".opened{max-height:" + a + "px !important} ." + h.jsClass + " ." + h.navClass + "-" + this.index + ".opened.dropdown-active {max-height:9999px !important}";
                    t.styleSheet ? t.styleSheet.cssText = c : t.innerHTML = c, c = ""
                }
            }, new v(d, e)
        };
        "undefined" != typeof module && module.exports ? module.exports = d : b.responsiveNav = d
    }(document, window, 0);
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement("style");
        msViewportStyle.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}"));
        document.getElementsByTagName("head")[0].appendChild(msViewportStyle)
    }(function(window, document, $) {
        var isInputSupported = "placeholder" in document.createElement("input");
        var isTextareaSupported = "placeholder" in document.createElement("textarea");
        var prototype = $.fn;
        var valHooks = $.valHooks;
        var propHooks = $.propHooks;
        var hooks;
        var placeholder;
        if (isInputSupported && isTextareaSupported) {
            placeholder = prototype.placeholder = function() {
                return this
            };
            placeholder.input = placeholder.textarea = true
        } else {
            placeholder = prototype.placeholder = function() {
                var $this = this;
                $this.filter((isInputSupported ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
                    "focus.placeholder": clearPlaceholder,
                    "blur.placeholder": setPlaceholder
                }).data("placeholder-enabled", true).trigger("blur.placeholder");
                return $this
            };
            placeholder.input = isInputSupported;
            placeholder.textarea = isTextareaSupported;
            hooks = {
                get: function(element) {
                    var $element = $(element);
                    var $passwordInput = $element.data("placeholder-password");
                    if ($passwordInput) {
                        return $passwordInput[0].value
                    }
                    return $element.data("placeholder-enabled") && $element.hasClass("placeholder") ? "" : element.value
                },
                set: function(element, value) {
                    var $element = $(element);
                    var $passwordInput = $element.data("placeholder-password");
                    if ($passwordInput) {
                        return $passwordInput[0].value = value
                    }
                    if (!$element.data("placeholder-enabled")) {
                        return element.value = value
                    }
                    if (value == "") {
                        element.value = value;
                        if (element != safeActiveElement()) {
                            setPlaceholder.call(element)
                        }
                    } else if ($element.hasClass("placeholder")) {
                        clearPlaceholder.call(element, true, value) || (element.value = value)
                    } else {
                        element.value = value
                    }
                    return $element
                }
            };
            if (!isInputSupported) {
                valHooks.input = hooks;
                propHooks.value = hooks
            }
            if (!isTextareaSupported) {
                valHooks.textarea = hooks;
                propHooks.value = hooks
            }
            $(function() {
                $(document).delegate("form", "submit.placeholder", function() {
                    var $inputs = $(".placeholder", this).each(clearPlaceholder);
                    setTimeout(function() {
                        $inputs.each(setPlaceholder)
                    }, 10)
                })
            });
            $(window).bind("beforeunload.placeholder", function() {
                $(".placeholder").each(function() {
                    this.value = ""
                })
            })
        }

        function args(elem) {
            var newAttrs = {};
            var rinlinejQuery = /^jQuery\d+$/;
            $.each(elem.attributes, function(i, attr) {
                if (attr.specified && !rinlinejQuery.test(attr.name)) {
                    newAttrs[attr.name] = attr.value
                }
            });
            return newAttrs
        }

        function clearPlaceholder(event, value) {
            var input = this;
            var $input = $(input);
            if (input.value == $input.attr("placeholder") && $input.hasClass("placeholder")) {
                if ($input.data("placeholder-password")) {
                    $input = $input.hide().next().show().attr("id", $input.removeAttr("id").data("placeholder-id"));
                    if (event === true) {
                        return $input[0].value = value
                    }
                    $input.focus()
                } else {
                    input.value = "";
                    $input.removeClass("placeholder");
                    input == safeActiveElement() && input.select()
                }
            }
        }

        function setPlaceholder() {
            var $replacement;
            var input = this;
            var $input = $(input);
            var id = this.id;
            if (input.value == "") {
                if (input.type == "password") {
                    if (!$input.data("placeholder-textinput")) {
                        try {
                            $replacement = $input.clone().prop("type", "text")
                        } catch (e) {
                            $replacement = $("<input>").prop($.extend(args(this), {
                                type: "text"
                            }))
                        }
                        $replacement.removeAttr("name").data({
                            "placeholder-password": $input,
                            "placeholder-id": id
                        }).bind("focus.placeholder", clearPlaceholder);
                        $input.data({
                            "placeholder-textinput": $replacement,
                            "placeholder-id": id
                        }).before($replacement)
                    }
                    $input = $input.removeAttr("id").hide().prev().attr("id", id).show()
                }
                $input.addClass("placeholder");
                $input[0].value = $input.attr("placeholder")
            } else {
                $input.removeClass("placeholder")
            }
        }

        function safeActiveElement() {
            try {
                return document.activeElement
            } catch (exception) {}
        }
    })(this, document, jQuery);
    (function($) {
        $.extend({
            format: function(str, step, splitor) {
                str = str.toString();
                var len = str.length;
                if (len > step) {
                    var l1 = len % step,
                        l2 = parseInt(len / step),
                        arr = [],
                        first = str.substr(0, l1);
                    if (first != "") {
                        arr.push(first)
                    }
                    for (var i = 0; i < l2; i++) {
                        arr.push(str.substr(l1 + i * step, step))
                    }
                    str = arr.join(splitor)
                }
                return str
            }
        })
    })(jQuery); + function($) {
        "use strict";
        var backdrop = ".dropdown-backdrop";
        var toggle = '[data-toggle="dropdown"]';
        var Dropdown = function(element) {
            $(element).on("click.bs.dropdown", this.toggle)
        };
        Dropdown.VERSION = "3.3.5";

        function getParent($this) {
            var selector = $this.attr("data-target");
            if (!selector) {
                selector = $this.attr("href");
                selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, "")
            }
            var $parent = selector && $(selector);
            return $parent && $parent.length ? $parent : $this.parent()
        }

        function clearMenus(e) {
            if (e && e.which === 3) return;
            $(backdrop).remove();
            $(toggle).each(function() {
                var $this = $(this);
                var $parent = getParent($this);
                var relatedTarget = {
                    relatedTarget: this
                };
                if (!$parent.hasClass("open")) return;
                if (e && e.type == "click" && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return;
                $parent.trigger(e = $.Event("hide.bs.dropdown", relatedTarget));
                if (e.isDefaultPrevented()) return;
                $this.attr("aria-expanded", "false");
                $parent.removeClass("open").trigger("hidden.bs.dropdown", relatedTarget)
            })
        }
        Dropdown.prototype.toggle = function(e) {
            var $this = $(this);
            if ($this.is(".disabled, :disabled")) return;
            var $parent = getParent($this);
            var isActive = $parent.hasClass("open");
            clearMenus();
            if (!isActive) {
                if ("ontouchstart" in document.documentElement && !$parent.closest(".navbar-nav").length) {
                    $(document.createElement("div")).addClass("dropdown-backdrop").insertAfter($(this)).on("click", clearMenus)
                }
                var relatedTarget = {
                    relatedTarget: this
                };
                $parent.trigger(e = $.Event("show.bs.dropdown", relatedTarget));
                if (e.isDefaultPrevented()) return;
                $this.trigger("focus").attr("aria-expanded", "true");
                $parent.toggleClass("open").trigger("shown.bs.dropdown", relatedTarget)
            }
            return false
        };
        Dropdown.prototype.keydown = function(e) {
            if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return;
            var $this = $(this);
            e.preventDefault();
            e.stopPropagation();
            if ($this.is(".disabled, :disabled")) return;
            var $parent = getParent($this);
            var isActive = $parent.hasClass("open");
            if (!isActive && e.which != 27 || isActive && e.which == 27) {
                if (e.which == 27) $parent.find(toggle).trigger("focus");
                return $this.trigger("click")
            }
            var desc = " li:not(.disabled):visible a";
            var $items = $parent.find(".dropdown-menu" + desc);
            if (!$items.length) return;
            var index = $items.index(e.target);
            if (e.which == 38 && index > 0) index--;
            if (e.which == 40 && index < $items.length - 1) index++;
            if (!~index) index = 0;
            $items.eq(index).trigger("focus")
        };

        function Plugin(option) {
            return this.each(function() {
                var $this = $(this);
                var data = $this.data("bs.dropdown");
                if (!data) {
                    $this.data("bs.dropdown", data = new Dropdown(this))
                }
                if (typeof option == "string") {
                    data[option].call($this)
                }
            })
        }
        var old = $.fn.dropdown;
        $.fn.dropdown = Plugin;
        $.fn.dropdown.Constructor = Dropdown;
        $.fn.dropdown.noConflict = function() {
            $.fn.dropdown = old;
            return this
        };
        $(document).on("click.bs.dropdown.data-api", clearMenus).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
            e.stopPropagation()
        }).on("click.bs.dropdown.data-api", toggle, Dropdown.prototype.toggle).on("keydown.bs.dropdown.data-api", toggle, Dropdown.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", Dropdown.prototype.keydown)
    }(jQuery);
    ! function($) {
        $.fn.togglePassword = function(options) {
            var s = $.extend($.fn.togglePassword.defaults, options),
                input = $(this);
            $(s.el).on(s.ev, function() {
                "password" == $(input).attr("type") ? $(input).attr("type", "text") : $(input).attr("type", "password")
            })
        };
        $.fn.togglePassword.defaults = {
            ev: "click"
        }
    }(jQuery);
    ! function($) {
        "use strict";
        $(function() {
            $.support.transition = function() {
                var transitionEnd = function() {
                    var el = document.createElement("bootstrap"),
                        transEndEventNames = {
                            WebkitTransition: "webkitTransitionEnd",
                            MozTransition: "transitionend",
                            OTransition: "oTransitionEnd otransitionend",
                            transition: "transitionend"
                        },
                        name;
                    for (name in transEndEventNames) {
                        if (el.style[name] !== undefined) {
                            return transEndEventNames[name]
                        }
                    }
                }();
                return transitionEnd && {
                    end: transitionEnd
                }
            }()
        })
    }(window.jQuery);

    function addFavorite(name, site) {
        try {
            window.external.addFavorite(site, name)
        } catch (e) {
            try {
                window.sidebar.addPanel(name, site, "")
            } catch (e) {
                alert("加入收藏失败，请使用Ctrl+D进行添加")
            }
        }
    }

    function addFavoritepage() {
        var sURL = window.location.href;
        var sTitle = document.title;
        try {
            window.external.addFavorite(sURL, sTitle)
        } catch (e) {
            try {
                window.sidebar.addPanel(sTitle, sURL, "")
            } catch (e) {
                alert("加入收藏失败，请使用Ctrl+D进行添加")
            }
        }
    }

    function setHome(obj) {
        try {
            obj.style.behavior = "url(#default#homepage)";
            obj.setHomePage(webSite)
        } catch (e) {
            if (window.netscape) {
                try {
                    netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect")
                } catch (e) {
                    alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入\"about:config\"并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。")
                }
                var prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
                prefs.setCharPref("browser.startup.homepage", url)
            }
        }
    }

    function marquee(height, speed, delay) {
        var scrollT;
        var pause = false;
        var ScrollBox = document.getElementById("marquee");
        if (document.getElementById("holder").offsetHeight <= height) return;
        var _tmp = ScrollBox.innerHTML.replace("holder", "holder2");
        ScrollBox.innerHTML += _tmp;
        ScrollBox.onmouseover = function() {
            pause = true
        };
        ScrollBox.onmouseout = function() {
            pause = false
        };
        ScrollBox.scrollTop = 0;

        function start() {
            scrollT = setInterval(scrolling, speed);
            if (!pause) ScrollBox.scrollTop += 2
        }

        function scrolling() {
            if (ScrollBox.scrollTop % height != 0) {
                ScrollBox.scrollTop += 2;
                if (ScrollBox.scrollTop >= ScrollBox.scrollHeight / 2) ScrollBox.scrollTop = 0
            } else {
                clearInterval(scrollT);
                setTimeout(start, delay)
            }
        }
        setTimeout(start, delay)
    }

    function displaynavbar(obj) {
        if ($(obj).hasClass("open")) {
            $(obj).removeClass("open");
            $("body").removeClass("big-page")
        } else {
            $(obj).addClass("open");
            $("body").addClass("big-page")
        }
    }
    jQuery.Huiselect = function(divselectid, inputselectid) {
        var inputselect = $(inputselectid);
        $(divselectid + " cite").click(function() {
            var ul = $(divselectid + " ul");
            ul.slideToggle()
        });
        $(divselectid + " ul li a").click(function() {
            var txt = $(this).text();
            $(divselectid + " cite").html(txt);
            var value = $(this).attr("selectid");
            inputselect.val(value);
            $(divselectid + " ul").hide()
        });
        $(document).click(function() {
            $(divselectid + " ul").hide()
        })
    };
    jQuery.Huihover = function(obj) {
        $(obj).hover(function() {
            $(this).addClass("hover")
        }, function() {
            $(this).removeClass("hover")
        })
    };
    jQuery.Huifocusblur = function(obj) {
        $(obj).focus(function() {
            $(this).addClass("focus").removeClass("inputError")
        });
        $(obj).blur(function() {
            $(this).removeClass("focus")
        })
    };
    jQuery.Huitab = function(tabBar, tabCon, class_name, tabEvent, i) {
        var $tab_menu = $(tabBar);
        $tab_menu.removeClass(class_name);
        $(tabBar).eq(i).addClass(class_name);
        $(tabCon).hide();
        $(tabCon).eq(i).show();
        $tab_menu.on(tabEvent, function() {
            $tab_menu.removeClass(class_name);
            $(this).addClass(class_name);
            var index = $tab_menu.index(this);
            $(tabCon).hide();
            $(tabCon).eq(index).show()
        })
    };
    jQuery.Huifold = function(obj, obj_c, speed, obj_type, Event) {
        if (obj_type == 2) {
            $(obj + ":first").find("b").html("-");
            $(obj_c + ":first").show()
        }
        $(obj).on(Event, function() {
            if ($(this).next().is(":visible")) {
                if (obj_type == 2) {
                    return false
                } else {
                    $(this).next().slideUp(speed).end().removeClass("selected");
                    if ($(this).find("b")) {
                        $(this).find("b").html("+")
                    }
                }
            } else {
                if (obj_type == 3) {
                    $(this).next().slideDown(speed).end().addClass("selected");
                    if ($(this).find("b")) {
                        $(this).find("b").html("-")
                    }
                } else {
                    $(obj_c).slideUp(speed);
                    $(obj).removeClass("selected");
                    if ($(this).find("b")) {
                        $(obj).find("b").html("+")
                    }
                    $(this).next().slideDown(speed).end().addClass("selected");
                    if ($(this).find("b")) {
                        $(this).find("b").html("-")
                    }
                }
            }
        })
    };
    var $backToTopEle = $('<a href="javascript:void(0)" class="Hui-iconfont toTop" title="返回顶部" alt="返回顶部" style="display:none">&#xe684;</a>').appendTo($("body")).click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 120)
    });
    var $backToTopFun = function() {
        var st = $(document).scrollTop(),
            winh = $(window).height();
        st > 0 ? $backToTopEle.show() : $backToTopEle.hide();
        if (!window.XMLHttpRequest) {
            $backToTopEle.css("top", st + winh - 166)
        }
    };

    function textarealength(obj, maxlength) {
        var v = $(obj).val();
        var l = v.length;
        if (l > maxlength) {
            v = v.substring(0, maxlength);
            $(obj).val(v)
        }
        $(obj).parent().find(".textarea-length").text(v.length)
    }

    function Huimodal_alert(info, speed) {
        if (speed == 0 || typeof speed == "undefined") {
            $(document.body).append('<div id="modal-alert" class="modal hide modal-alert">' + '<div class="modal-alert-info">' + info + "</div>" + '<div class="modal-footer"> <button class="btn btn-primary radius" onClick="modal_alert_hide()">确定</button></div>' + "</div>");
            $("#modal-alert").fadeIn()
        } else {
            $(document.body).append('<div id="modal-alert" class="modal hide modal-alert">' + '<div class="modal-alert-info">' + info + "</div>" + "</div>");
            $("#modal-alert").fadeIn();
            setTimeout("Huimodal_alert_hide()", speed)
        }
    }

    function Huimodal_alert_hide() {
        $("#modal-alert").fadeOut("normal", function() {
            $("#modal-alert").remove()
        })
    }

    function setCookie(name, value, Days) {
        if (Days == null || Days == "") {
            Days = 300
        }
        var exp = new Date;
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1e3);
        document.cookie = name + "=" + escape(value) + "; path=/;expires=" + exp.toGMTString()
    }

    function getCookie(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg)) return unescape(arr[2]);
        else return null
    }
    $(function() {
        $.Huifocusblur(".input-text,.textarea");
        $(".btn-loading").click(function() {
            var $btn = $(this);
            var btnval = $btn.val();
            $btn.addClass("disabled").val("loading").attr("disabled", "disabled");
            setTimeout(function() {
                $btn.removeClass("disabled").val(btnval).removeAttr("disabled")
            }, 3e3)
        });
        $.Huiselect("#divselect", "#inputselect");
        $("table thead th input:checkbox").on("click", function() {
            $(this).closest("table").find("tr > td:first-child input:checkbox").prop("checked", $("table thead th input:checkbox").prop("checked"))
        });
        $(document).on("change", ".input-file", function() {
            var uploadVal = $(this).val();
            $(this).parent().find(".upload-url").val(uploadVal).focus().blur()
        });
        $(document).on("mouseenter", ".dropDown", function() {
            $(this).addClass("hover")
        });
        $(document).on("mouseleave", ".dropDown", function() {
            $(this).removeClass("hover")
        });
        $(document).on("mouseenter", ".dropDown_hover", function() {
            $(this).addClass("open")
        });
        $(document).on("mouseleave", ".dropDown_hover", function() {
            $(this).removeClass("open")
        });
        $(document).on("click", ".dropDown-menu li a", function() {
            $(".dropDown").removeClass("open")
        });
        $(document).on("mouseenter", ".menu > li", function() {
            $(this).addClass("open")
        });
        $(document).on("mouseleave", ".menu > li", function() {
            $(this).removeClass("open")
        });
        var tags_a = $(".tags a");
        tags_a.each(function() {
            var x = 9;
            var y = 0;
            var rand = parseInt(Math.random() * (x - y + 1) + y);
            $(this).addClass("tags" + rand)
        });
        var dual = $(".dual");
        var dual_close = $("a.dual_close");
        var screen_w = screen.width;
        if (screen_w > 1024) {
            dual.show()
        }
        $(window).scroll(function() {
            var scrollTop = $(window).scrollTop();
            dual.stop().animate({
                top: scrollTop + 260
            })
        });
        dual_close.click(function() {
            $(this).parent().hide();
            return false
        });
        $("#banner").slideDown("slow");
        $("a.preview").hover(function() {
            $(this).addClass("active");
            $("#tooltip-preview").remove();
            var winW = $(window).width();
            var winW5 = winW / 2;
            this.myTitle = this.title;
            this.title = "";
            var midimg = $(this).attr("data-preview");
            if (midimg == "") {
                return false
            } else {
                var imgT = $(this).parents(".imgItem").offset().top;
                var imgL = $(this).parents(".imgItem").offset().left;
                var imgW = $(this).parents(".imgItem").width();
                var imgH = $(this).parents(".imgItem").height();
                var ww = imgL + imgW / 2;
                if (ww < winW5) {
                    var tooltipLeft = imgW + imgL + "px"
                } else {
                    var tooltipRight = winW - imgL + "px"
                }
                var tooltip_keleyi_com = "<div id='tooltip-preview' style='top:" + imgT + "px;right:" + tooltipRight + ";left:" + tooltipLeft + "'><span id='tooltip-keleyi-div' class='loading' style='width:50px; height:50px'></span></div>";
                $("body").append(tooltip_keleyi_com);
                var midimgW = $(this).attr("data-width");
                var midimgH = $(this).attr("data-height");
                var imgTitle = this.myTitle ? "<br />" + this.myTitle + " 产品预览图" : "";
                var image = new Image;
                image.onload = function() {
                    if ($("a.preview.active").attr("data-preview") == midimg) {
                        var midingW2 = this.width;
                        var midingH2 = this.height;
                        $("#tooltip-keleyi-div").css({
                            width: midingW2 + "px",
                            height: midingH2 + "px"
                        });
                        $("#tooltip-keleyi-div").append(this)
                    }
                };
                image.src = midimg
            }
        }, function() {
            $(this).removeClass("active");
            this.title = this.myTitle;
            $("#tooltip-preview").remove()
        });
        $.Huihover(".Huialert i");
        $(".Huialert i").on("click", function() {
            var Huialert = $(this).parents(".Huialert");
            Huialert.fadeOut("normal", function() {
                Huialert.remove()
            })
        });
        var time1;
        $(".Hui-tags-lable").show();
        $(".Hui-tags-input").val("");
        $(document).on("blur", ".Hui-tags-input", function() {
            time1 = setTimeout(function() {
                $(this).parents(".Hui-tags").find(".Hui-tags-list").slideUp()
            }, 400)
        });
        $(document).on("focus", ".Hui-tags-input", function() {
            clearTimeout(time1)
        });
        $(document).on("click", ".Hui-tags-input", function() {
            $(this).find(".Hui-tags-input").focus();
            $(this).find(".Hui-tags-list").slideDown()
        });

        function gettagval(obj) {
            var str = "";
            var token = $(obj).parents(".Hui-tags").find(".Hui-tags-token");
            if (token.length < 1) {
                $(obj).parents(".Hui-tags").find(".Hui-tags-val").val("");
                return false
            }
            for (var i = 0; i < token.length; i++) {
                str += token.eq(i).text() + ",";
                $(obj).parents(".Hui-tags").find(".Hui-tags-val").val(str)
            }
        }
        $(document).on("keydown", ".Hui-tags-input", function(event) {
            $(this).next().hide();
            var v = $(this).val().replace(/\s+/g, "");
            var reg = /^,|,$/gi;
            v = v.replace(reg, "");
            v = $.trim(v);
            var token = $(this).parents(".Hui-tags").find(".Hui-tags-token");
            if (v != "") {
                if (event.keyCode == 13 || event.keyCode == 108 || event.keyCode == 32) {
                    $('<span class="Hui-tags-token">' + v + "</span>").insertBefore($(this).parents(".Hui-tags").find(".Hui-tags-iptwrap"));
                    $(this).val("");
                    gettagval(this)
                }
            } else {
                if (event.keyCode == 8) {
                    if (token.length >= 1) {
                        $(this).parents(".Hui-tags").find(".Hui-tags-token:last").remove();
                        gettagval(this)
                    } else {
                        $(this).parents(".Hui-tags").find(".Hui-tags-lable").show();
                        return false
                    }
                }
            }
        });
        $(document).on("click", ".Hui-tags-has span", function() {
            var taghasV = $(this).text();
            taghasV = taghasV.replace(/(^\s*)|(\s*$)/g, "");
            $('<span class="Hui-tags-token">' + taghasV + "</span>").insertBefore($(this).parents(".Hui-tags").find(".Hui-tags-iptwrap"));
            gettagval(this);
            $(this).parents(".Hui-tags").find(".Hui-tags-input").focus()
        });
        $(document).on("click", ".Hui-tags-token", function() {
            var token = $(this).parents(".Hui-tags").find(".Hui-tags-token");
            var it = $(this).parents(".Hui-tags");
            $(this).remove();
            switch (token.length) {
                case 1:
                    it.find(".Hui-tags-lable").show();
                    break
            }
            var str = "";
            var token = it.find(".Hui-tags-token");
            if (token.length < 1) {
                it.find(".Hui-tags-val").val("");
                return false
            }
            for (var i = 0; i < token.length; i++) {
                str += token.eq(i).text() + ",";
                it.find(".Hui-tags-val").val(str)
            }
        })
    })
});
define("xg/eid-company/1.0.0/c/static/h-ui.admin/js/H-ui-debug.admin", ["jquery/jquery/1.10.1/jquery-debug"], function(require, exports, module) {
    var $ = require("jquery/jquery/1.10.1/jquery-debug");
    var num = 0,
        oUl = $("#min_title_list"),
        hide_nav = $("#Hui-tabNav");

    function tabNavallwidth() {
        var taballwidth = 0,
            $tabNav = hide_nav.find(".acrossTab"),
            $tabNavWp = hide_nav.find(".Hui-tabNav-wp"),
            $tabNavitem = hide_nav.find(".acrossTab li"),
            $tabNavmore = hide_nav.find(".Hui-tabNav-more");
        if (!$tabNav[0]) {
            return
        }
        $tabNavitem.each(function(index, element) {
            taballwidth += Number(parseFloat($(this).width() + 60))
        });
        $tabNav.width(taballwidth + 25);
        var w = $tabNavWp.width();
        if (taballwidth + 25 > w) {
            $tabNavmore.show()
        } else {
            $tabNavmore.hide();
            $tabNav.css({
                left: 0
            })
        }
    }

    function Huiasidedisplay() {
        if ($(window).width() >= 768) {
            $(".Hui-aside").show()
        }
    }

    function getskincookie() {
        var v = getCookie("Huiskin");
        var hrefStr = $("#skin").attr("href");
        if (v == null || v == "") {
            v = "default"
        }
        if (hrefStr != undefined) {
            var hrefRes = hrefStr.substring(0, hrefStr.lastIndexOf("skin/")) + "skin/" + v + "/skin.css";
            $("#skin").attr("href", hrefRes)
        }
    }

    function Hui_admin_tab(obj) {
        if ($(obj).attr("_href")) {
            var bStop = false;
            var bStopIndex = 0;
            var _href = $(obj).attr("_href");
            var _titleName = $(obj).attr("data-title");
            var topWindow = $(window.parent.document);
            var show_navLi = topWindow.find("#min_title_list li");
            show_navLi.each(function() {
                if ($(this).find("span").attr("data-href") == _href) {
                    bStop = true;
                    bStopIndex = show_navLi.index($(this));
                    return false
                }
            });
            if (!bStop) {
                creatIframe(_href, _titleName);
                min_titleList()
            } else {
                show_navLi.removeClass("active").eq(bStopIndex).addClass("active");
                var iframe_box = topWindow.find("#iframe_box");
                iframe_box.find(".show_iframe").hide().eq(bStopIndex).show().find("iframe").attr("src", _href)
            }
        }
    }

    function min_titleList() {
        var topWindow = $(window.parent.document);
        var show_nav = topWindow.find("#min_title_list");
        var aLi = show_nav.find("li")
    }

    function creatIframe(href, titleName) {
        var topWindow = $(window.parent.document);
        var show_nav = topWindow.find("#min_title_list");
        show_nav.find("li").removeClass("active");
        var iframe_box = topWindow.find("#iframe_box");
        show_nav.append('<li class="active"><span data-href="' + href + '">' + titleName + "</span><i></i><em></em></li>");
        var taballwidth = 0,
            $tabNav = topWindow.find(".acrossTab"),
            $tabNavWp = topWindow.find(".Hui-tabNav-wp"),
            $tabNavitem = topWindow.find(".acrossTab li"),
            $tabNavmore = topWindow.find(".Hui-tabNav-more");
        if (!$tabNav[0]) {
            return
        }
        $tabNavitem.each(function(index, element) {
            taballwidth += Number(parseFloat($(this).width() + 60))
        });
        $tabNav.width(taballwidth + 25);
        var w = $tabNavWp.width();
        if (taballwidth + 25 > w) {
            $tabNavmore.show()
        } else {
            $tabNavmore.hide();
            $tabNav.css({
                left: 0
            })
        }
        var iframeBox = iframe_box.find(".show_iframe");
        iframeBox.hide();
        iframe_box.append('<div class="show_iframe"><div class="loading"></div><iframe frameborder="0" src=' + href + "></iframe></div>");
        var showBox = iframe_box.find(".show_iframe:visible");
        showBox.find("iframe").load(function() {
            showBox.find(".loading").hide()
        })
    }

    function removeIframe() {
        var topWindow = $(window.parent.document);
        var iframe = topWindow.find("#iframe_box .show_iframe");
        var tab = topWindow.find(".acrossTab li");
        var showTab = topWindow.find(".acrossTab li.active");
        var showBox = topWindow.find(".show_iframe:visible");
        var i = showTab.index();
        tab.eq(i - 1).addClass("active");
        iframe.eq(i - 1).show();
        tab.eq(i).remove();
        iframe.eq(i).remove()
    }

    function layer_show(title, url, w, h) {
        if (title == null || title == "") {
            title = false
        }
        if (url == null || url == "") {
            url = "404.html"
        }
        if (w == null || w == "") {
            w = 800
        }
        if (h == null || h == "") {
            h = $(window).height() - 50
        }
        layer.open({
            type: 2,
            area: [w + "px", h + "px"],
            fix: false,
            maxmin: true,
            shade: .4,
            title: title,
            content: url
        })
    }

    function layer_close() {
        var index = parent.layer.getFrameIndex(window.name);
        parent.layer.close(index)
    }
    $(function() {
        Huiasidedisplay();
        var resizeID;
        $(window).resize(function() {
            clearTimeout(resizeID);
            resizeID = setTimeout(function() {
                Huiasidedisplay()
            }, 500)
        });
        $(".nav-toggle").click(function() {
            $(".Hui-aside").slideToggle()
        });
        $(".Hui-aside").on("click", ".menu_dropdown dd li a", function() {
            if ($(window).width() < 768) {
                $(".Hui-aside").slideToggle()
            }
        });
        $.Huifold(".menu_dropdown dl dt", ".menu_dropdown dl dd", "fast", 1, "click");
        $(".Hui-aside").on("click", ".menu_dropdown a", function() {
            Hui_admin_tab(this)
        });
        $(document).on("click", "#min_title_list li", function() {
            var bStopIndex = $(this).index();
            var iframe_box = $("#iframe_box");
            $("#min_title_list li").removeClass("active").eq(bStopIndex).addClass("active");
            iframe_box.find(".show_iframe").hide().eq(bStopIndex).show()
        });
        $(document).on("click", "#min_title_list li i", function() {
            var aCloseIndex = $(this).parents("li").index();
            $(this).parent().remove();
            $("#iframe_box").find(".show_iframe").eq(aCloseIndex).remove();
            num == 0 ? num = 0 : num--;
            tabNavallwidth()
        });
        $(document).on("dblclick", "#min_title_list li", function() {
            var aCloseIndex = $(this).index();
            var iframe_box = $("#iframe_box");
            if (aCloseIndex > 0) {
                $(this).remove();
                $("#iframe_box").find(".show_iframe").eq(aCloseIndex).remove();
                num == 0 ? num = 0 : num--;
                $("#min_title_list li").removeClass("active").eq(aCloseIndex - 1).addClass("active");
                iframe_box.find(".show_iframe").hide().eq(aCloseIndex - 1).show();
                tabNavallwidth()
            } else {
                return false
            }
        });
        tabNavallwidth();
        $("#js-tabNav-next").click(function() {
            num == oUl.find("li").length - 1 ? num = oUl.find("li").length - 1 : num++;
            toNavPos()
        });
        $("#js-tabNav-prev").click(function() {
            num == 0 ? num = 0 : num--;
            toNavPos()
        });

        function toNavPos() {
            oUl.stop().animate({
                left: -num * 100
            }, 100)
        }
        $("#Hui-skin .dropDown-menu a").click(function() {
            var v = $(this).attr("data-val");
            setCookie("Huiskin", v);
            var hrefStr = $("#skin").attr("href");
            var hrefRes = hrefStr.substring(0, hrefStr.lastIndexOf("skin/")) + "skin/" + v + "/skin.css";
            $(window.frames.document).contents().find("#skin").attr("href", hrefRes)
        })
    })
});
define("xg/eid-company/1.0.0/c/js/registerHelper-debug", ["xg/eid-company/1.0.0/c/js/tools-debug", "jquery/jquery/1.10.1/jquery-debug", "xg/eid-company/1.0.0/c/js/bootstrap-debug", "xg/eid-company/1.0.0/c/js/jquery-debug.validate", "xg/eid-company/1.0.0/c/js/validate-add-methods-debug", "xg/eid-company/1.0.0/c/js/validate-messages-cn-debug", "xg/eid-company/1.0.0/c/js/moment-debug", "xg/eid-company/1.0.0/c/handlebars/headerTmp-debug.handlebars", "xg/eid-company/1.0.0/c/handlebars/modifyPassword-debug.handlebars", "xg/eid-company/1.0.0/c/handlebars/modifyInfo-debug.handlebars", "xg/eid-company/1.0.0/c/handlebars/showCheckInfo-debug.handlebars", "xg/eid-company/1.0.0/c/handlebars/versionH-debug.handlebars", "alinw/handlebars/1.3.0/runtime-debug"], function(require, exports, module) {
    var Tools = require("xg/eid-company/1.0.0/c/js/tools-debug");
    var Handlebars = require("alinw/handlebars/1.3.0/runtime-debug");
    Handlebars.registerHelper("ifCond", function(v1, operator, v2, options) {
        switch (operator) {
            case "!=":
                return v1 != v2 ? options.fn(this) : options.inverse(this);
            case "==":
                return v1 == v2 ? options.fn(this) : options.inverse(this);
            case "===":
                return v1 === v2 ? options.fn(this) : options.inverse(this);
            case "<":
                return v1 < v2 ? options.fn(this) : options.inverse(this);
            case "<=":
                return v1 <= v2 ? options.fn(this) : options.inverse(this);
            case ">":
                return v1 > v2 ? options.fn(this) : options.inverse(this);
            case ">=":
                return v1 >= v2 ? options.fn(this) : options.inverse(this);
            case "&&":
                return v1 && v2 ? options.fn(this) : options.inverse(this);
            case "||":
                return v1 || v2 ? options.fn(this) : options.inverse(this);
            default:
                return options.inverse(this)
        }
    });
    Handlebars.registerHelper("getLocalTime1", function(item) {
        return Tools.getnewdate(item)
    });
    Handlebars.registerHelper("formatDate", function(item, options) {
        return Tools.formatDate(item)
    });
    Handlebars.registerHelper("formatDateFull", function(item, options) {
        return Tools.formatDateAll(item)
    });
    Handlebars.registerHelper("formatDateAll", function(operator, item, options) {
        var timeObj = Tools.showCountDown(item);
        switch (operator) {
            case "day":
                return timeObj.d;
            case "hour":
                return timeObj.h;
            case "minute":
                return timeObj.m
        }
    });
    Handlebars.registerHelper("statusText", function(value, options) {
        var status = ["未处理", "已通过", "未通过", "黑名单"];
        return status[value]
    });
    Handlebars.registerHelper("check", function(item, options) {
        return item == 0 ? "未查看" : "已查看"
    });
    Handlebars.registerHelper("infoStatus", function(item, options) {
        var status = "";
        if (item == 0) {
            status = "已查看"
        } else if (item == 1) {
            status = "已通过"
        } else if (item == 2) {
            status = "未通过"
        } else if (item == 3) {
            status = "黑名单"
        }
        return status
    });
    Handlebars.registerHelper("accountStatusInList", function(item, options) {
        return item == 0 ? "启用" : "禁用"
    });
    Handlebars.registerHelper("accountStatus", function(item, options) {
        return item == 0 ? "禁用" : "启用"
    });
    Handlebars.registerHelper("infoSex", function(item, options) {
        if (item == null || item == "") {
            return "--"
        } else {
            return item == 2 ? "女" : "男"
        }
    });
    Handlebars.registerHelper("infoResult", function(item, options) {
        return item == 0 ? "人脸比对成功" : "人脸比对失败"
    });
    Handlebars.registerHelper("formatMoney", function(item, options) {
        return Tools.formatMoney(item)
    });
    Handlebars.registerHelper("validateStatus", function(item, options) {
        var status = ["手机号码与身份未校验", "手机号码与身份匹配失败", "手机号码与身份匹配成功"];
        return status[item]
    });
    Handlebars.registerHelper("countAge", function(item, options) {
        if (item != null && item != "") {
            var year = item.substring(0, 4);
            var now = (new Date).getFullYear();
            return now - year + 1
        } else {
            return "--"
        }
    });
    Handlebars.registerHelper("getIndex0", function(item, options) {
        console.log(item[0]);
        return item[0]
    });
    Handlebars.registerHelper("getIndex1", function(item, options) {
        console.log(item[1]);
        return item[1]
    });
    Handlebars.registerHelper("getIndex2", function(item, options) {
        console.log(item[2]);
        return item[2]
    });
    Handlebars.registerHelper("setMobile", function(item, options) {
        var phone = item;
        phone = phone.split("");
        phone.splice(3, 0, "-");
        phone.splice(8, 0, "-");
        return phone.join("")
    });
    Handlebars.registerHelper("setNull", function(item, options) {
        console.log("item:" + item);
        if (item == null || item == "") {
            return "--"
        } else {
            return item
        }
    });
    Handlebars.registerHelper("transform", function(item, options) {
        if (item == null || item == "") {
            return "--"
        } else {
            return item.replace(/[\/\/]/g, ".")
        }
    });
    Handlebars.registerHelper("h", function(item, options) {
        if (item == null || item == "") {
            return "--"
        } else {
            return item
        }
    })
});
define("xg/eid-company/1.0.0/c/js/jquery-debug.pager", [], function(require, exports, module) {
    (function($) {
        $.fn.pager = function(options) {
            var opts = $.extend({}, $.fn.pager.defaults, options);
            return this.each(function() {
                $(this).empty().append(renderpager(parseInt(options.pagenumber), parseInt(options.pagecount), options.buttonClickCallback, parseInt(options.totalcount)));
                $(".pages li").mouseover(function() {
                    document.body.style.cursor = "pointer"
                }).mouseout(function() {
                    document.body.style.cursor = "auto"
                });
                if ($(".pgNextgo").closest("div").css("display") == "block") {
                    $(".pgNextgo").unbind("click").click(function() {
                        var gotoval = $(this).closest("div").find("#gotoval").val();
                        var intval = parseInt(gotoval);
                        var re = /^[1-9]+[0-9]*]*$/;
                        var total = String($(this).closest("div").find(".thpointa").html());
                        if (isNaN(gotoval) || gotoval <= 0 || intval > total.substring(2, total.length - 1) || !re.test(gotoval)) {
                            lqtTuSi("请输入1到" + total.substring(2, total.length - 1) + "的整数值！", 2e3);
                            return false
                        }
                        options.buttonClickCallback(intval)
                    })
                }
            })
        };

        function renderpager(pagenumber, pagecount, buttonClickCallback, totalcount) {
            var $pager = $('<ul class="pages"></ul>');
            $pager.append(renderButton("首页", pagenumber, pagecount, buttonClickCallback)).append(renderButton("上一页", pagenumber, pagecount, buttonClickCallback));
            var startPoint = 1;
            var endPoint = 9;
            var thpoint = "<li class='thpoint'>...</li>";
            if (pagenumber > 4) {
                startPoint = pagenumber - 4;
                endPoint = pagenumber + 4
            }
            if (endPoint > pagecount) {
                startPoint = pagecount - 8;
                endPoint = pagecount;
                thpoint = ""
            }
            if (startPoint < 1) {
                startPoint = 1
            }
            for (var page = startPoint; page <= endPoint; page++) {
                var currentButton = $('<li class="page-number">' + page + "</li>");
                page == pagenumber ? currentButton.addClass("pgCurrent") : currentButton.click(function() {
                    buttonClickCallback(this.firstChild.data)
                });
                currentButton.appendTo($pager)
            }
            $pager.append(thpoint).append(renderButton("下一页", pagenumber, pagecount, buttonClickCallback)).append(renderButton("末页", pagenumber, pagecount, buttonClickCallback));
            $pager.append("<li class='thpointa' style='margin-top:3px;'>共: " + pagecount + " 页 " + totalcount + " 条</li>");
            var strgoto = $("<li class='thpoint'>选择第<input type='text' value='" + pagenumber + "'maxlength='6' id='gotoval' style='width:20px; height:16px;margin-top:-3px;padding-top:2px;padding-left:10px;'/>页</li>");
            $pager.append(strgoto);
            $pager.append($('<li class="pgNextgo">go</li>'));
            return $pager
        }

        function lqtTuSi(msg, delay) {
            $(".tusi").empty().remove();
            var tipdiv = "<span class='tusi'>" + msg + "</span>";
            $("body").append(tipdiv);
            $(".tusi").css("top", $(document).scrollTop() + ($(window).height() - $(".tusi").height()) / 2);
            $(".tusi").css("left", $(document).scrollLeft() + ($(window).width() - $(".tusi").width()) / 2);
            $(".tusi").show();
            setTimeout(function() {
                $(".tusi").hide()
            }, delay)
        }

        function renderButton(buttonLabel, pagenumber, pagecount, buttonClickCallback) {
            var $Button = $('<li class="pgNext">' + buttonLabel + "</li>");
            var destPage = 1;
            switch (buttonLabel) {
                case "首页":
                    destPage = 1;
                    break;
                case "上一页":
                    destPage = pagenumber - 1;
                    break;
                case "下一页":
                    destPage = pagenumber + 1;
                    break;
                case "末页":
                    destPage = pagecount;
                    break
            }
            if (buttonLabel == "首页" || buttonLabel == "上一页") {
                pagenumber <= 1 ? $Button.addClass("pgEmpty") : $Button.click(function() {
                    buttonClickCallback(destPage)
                })
            } else {
                pagenumber >= pagecount ? $Button.addClass("pgEmpty") : $Button.click(function() {
                    buttonClickCallback(destPage)
                })
            }
            return $Button
        }
        $.fn.pager.defaults = {
            pagenumber: 1,
            pagecount: 1
        }
    })(jQuery)
});
define("xg/eid-company/1.0.0/p/adminAccount/headerH-debug.handlebars", ["alinw/handlebars/1.3.0/runtime-debug"], function(require, exports, module) {
    var Handlebars = require("alinw/handlebars/1.3.0/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, ">= 1.0.0"];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        var buffer = "",
            stack1, helper, functionType = "function",
            escapeExpression = this.escapeExpression;
        buffer += '<div class="navbar navbar-fixed-top">\r\n  <div class="container-fluid cl"> \r\n  <a class="logo navbar-logo f-l mr-10" href="#">信鸽身份标识系统</a>\r\n  <span class="logo navbar-slogan f-l mr-10">v1.5</span>\r\n  <nav id="Hui-userbar" class="nav navbar-nav navbar-userbar hidden-xs">\r\n      <ul class="cl">\r\n        <li>\r\n            ';
        if (helper = helpers.username) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.username;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '\r\n        </li>\r\n        <li class="dropDown dropDown_hover"> \r\n          <a href="#" class="dropDown_A">';
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
        buffer += escapeExpression(stack1) + '<i class="Hui-iconfont"></i></a>\r\n          <ul class="dropDown-menu menu radius box-shadow">\r\n            <li><a href="javascript:void(0)" data-userid="';
        if (helper = helpers.userId) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.userId;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '" data-mobile="';
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
        buffer += escapeExpression(stack1) + '" data-realname="';
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
        buffer += escapeExpression(stack1) + '" id="editInfor">编辑信息</a></li>\r\n            <li><a href="javascript:void(0)" id="updpass">修改密码</a></li>\r\n            <li><a href="javascript:void(0)" id="logoutBtn" data-usertype="';
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
        buffer += escapeExpression(stack1) + '">退出</a></li>\r\n          </ul>\r\n        </li>\r\n        <!-- <li id="Hui-skin" class="dropDown right dropDown_hover">\r\n          <a href="javascript:;" class="dropDown_A" title="换肤"><i class="Hui-iconfont" style="font-size:18px"></i></a>\r\n          <ul class="dropDown-menu menu radius box-shadow">\r\n            <li><a href="javascript:;" data-val="default" title="默认（黑色）">默认（黑色）</a></li>\r\n            <li><a href="javascript:;" data-val="blue" title="蓝色">蓝色</a></li>\r\n            <li><a href="javascript:;" data-val="green" title="绿色">绿色</a></li>\r\n            <li><a href="javascript:;" data-val="red" title="红色">红色</a></li>\r\n            <li><a href="javascript:;" data-val="yellow" title="黄色">黄色</a></li>\r\n            <li><a href="javascript:;" data-val="orange" title="绿色">橙色</a></li>\r\n          </ul>\r\n        </li> -->\r\n      </ul>\r\n  </nav>\r\n  </div>\r\n</div>';
        return buffer
    })
});
define("xg/eid-company/1.0.0/p/adminAccount/accountnav-debug.handlebars", ["alinw/handlebars/1.3.0/runtime-debug"], function(require, exports, module) {
    var Handlebars = require("alinw/handlebars/1.3.0/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, ">= 1.0.0"];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        var buffer = "",
            stack1, helper, functionType = "function",
            escapeExpression = this.escapeExpression;
        buffer += '<li class="';
        if (helper = helpers.customerManage) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.customerManage;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '"><a href="/company/customerManage.htm">&nbsp;&nbsp;&nbsp;&nbsp;客户管理</a></li>\r\n<li class="';
        if (helper = helpers.deviceManage) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.deviceManage;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '"><a href="/company/deviceManage.htm">&nbsp;&nbsp;&nbsp;&nbsp;设备管理</a></li>\r\n<li class="';
        if (helper = helpers.inforService) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.inforService;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '"><a href="/company/inforService.htm">&nbsp;&nbsp;&nbsp;&nbsp;信息查询</a></li>\r\n<li class="';
        if (helper = helpers.dataCount) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.dataCount;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '"><a href="/company/dataCount.htm">&nbsp;&nbsp;&nbsp;&nbsp;数据统计</a></li>\r\n<li class="';
        if (helper = helpers.accountManage) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.accountManage;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '"><a href="/company/userManage.htm">&nbsp;&nbsp;&nbsp;&nbsp;账号管理</a></li>\r\n\r\n';
        return buffer
    })
});
define("xg/eid-company/1.0.0/p/adminAccount/modifyPassword-debug.handlebars", ["alinw/handlebars/1.3.0/runtime-debug"], function(require, exports, module) {
    var Handlebars = require("alinw/handlebars/1.3.0/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, ">= 1.0.0"];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        return '<div id="modal-modifyPassword" class="modal fade">\r\n    <div class="modal-dialog">\r\n        <div class="modal-content radius">\r\n            <div class="modal-header">\r\n                <h3 class="modal-title ml20">修改密码</h3>\r\n                <a class="close" data-dismiss="modal" aria-hidden="true" href="javascript:void();">×</a>\r\n            </div>\r\n            <form class="form form-horizontal" id="modifyPasswordForm">\r\n                <div class="modal-body">\r\n                    <div class="row cl">\r\n                        <label class="form-label col-xs-4 col-sm-3">当前密码：</label>\r\n                        <div class="formControls col-xs-8 col-sm-8">\r\n                            <input type="password" class="input-text" placeholder="请输入老密码" name="olderPassword" id="olderPassword">\r\n                        </div>\r\n                    </div>\r\n                    <div class="row cl">\r\n                        <label class="form-label col-xs-4 col-sm-3">新密码：</label>\r\n                        <div class="formControls col-xs-8 col-sm-8">\r\n                            <input type="password" class="input-text" placeholder="请输入新密码" name="newPassword" id="newPassword">\r\n                        </div>\r\n                    </div>\r\n                    <div class="row cl">\r\n                        <label class="form-label col-xs-4 col-sm-3">新密码确认：</label>\r\n                        <div class="formControls col-xs-8 col-sm-8">\r\n                            <input type="password" class="input-text" placeholder="再次输入新密码" id="confirm" name="confirm">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class="modal-footer">\r\n                    <input class="btn btn-primary" type="submit" value="确定">\r\n                    <a class="btn mr23" data-dismiss="modal" aria-hidden="true">关闭</a>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>'
    })
});
define("xg/eid-company/1.0.0/p/adminAccount/edituseInforH-debug.handlebars", ["alinw/handlebars/1.3.0/runtime-debug"], function(require, exports, module) {
    var Handlebars = require("alinw/handlebars/1.3.0/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, ">= 1.0.0"];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        var buffer = "",
            stack1, helper, functionType = "function",
            escapeExpression = this.escapeExpression;
        buffer += ' <div id="modal-edituseInfor" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\r\n  <div class="modal-dialog">\r\n    <div class="modal-content radius">\r\n      <div class="modal-header">\r\n        <h5 class="modal-title">编辑个人信息</h5>\r\n        <a class="close" data-dismiss="modal" aria-hidden="true" href="javascript:void();">×</a>\r\n      </div>\r\n      <form class="form form-horizontal" id="editUseForm">\r\n        <input type="hidden" name="userId" id="userId" value="';
        if (helper = helpers.userId) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.userId;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '">\r\n        <div class="modal-body">\r\n            <div class="row cl">\r\n              <label class="form-label col-xs-4 col-sm-3">手机号码：</label>\r\n              <div class="formControls col-xs-8 col-sm-8">\r\n                <input type="text" class="input-text" autocomplete="off" placeholder="手机号码" name="mobile" id="mobile" value="';
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
        buffer += escapeExpression(stack1) + '">\r\n              </div>\r\n            </div>\r\n            <div class="row cl">\r\n              <label class="form-label col-xs-4 col-sm-3">姓名：</label>\r\n              <div class="formControls col-xs-8 col-sm-8">\r\n                <input type="text" class="input-text" autocomplete="off" placeholder="姓名" name="realName" id="realName" value="';
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
        buffer += escapeExpression(stack1) + '">\r\n              </div>\r\n            </div>\r\n        </div>\r\n        <div class="modal-footer">\r\n          <input class="btn btn-primary" type="submit" value="提交">\r\n          <!-- <button type="submit" class="btn btn-primary">确定</button> -->\r\n          <button class="btn" data-dismiss="modal" aria-hidden="true">关闭</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>';
        return buffer
    })
});
define("xg/eid-company/1.0.0/p/adminAccount/customerManage-debug", ["jquery/jquery/1.10.1/jquery-debug", "xg/eid-company/1.0.0/c/js/tools-debug", "xg/eid-company/1.0.0/c/js/bootstrap-debug", "xg/eid-company/1.0.0/c/js/jquery-debug.validate", "xg/eid-company/1.0.0/c/js/validate-add-methods-debug", "xg/eid-company/1.0.0/c/js/validate-messages-cn-debug", "xg/eid-company/1.0.0/c/js/moment-debug", "xg/eid-company/1.0.0/c/handlebars/headerTmp-debug.handlebars", "xg/eid-company/1.0.0/c/handlebars/modifyPassword-debug.handlebars", "xg/eid-company/1.0.0/c/handlebars/modifyInfo-debug.handlebars", "xg/eid-company/1.0.0/c/handlebars/showCheckInfo-debug.handlebars", "xg/eid-company/1.0.0/c/handlebars/versionH-debug.handlebars", "xg/eid-company/1.0.0/c/js/jquery-debug.provincesCity", "xg/eid-company/1.0.0/c/js/provincesData-debug", "xg/eid-company/1.0.0/p/adminAccount/customerManageH/addCustomerH-debug.handlebars", "xg/eid-company/1.0.0/p/adminAccount/customerManageH/customerMH-debug.handlebars", "xg/eid-company/1.0.0/p/adminAccount/customerManageH/customerTableH-debug.handlebars"], function(require, exports, module) {
    var $ = require("jquery/jquery/1.10.1/jquery-debug"),
        tools = require("xg/eid-company/1.0.0/c/js/tools-debug");
    require("xg/eid-company/1.0.0/c/js/jquery-debug.provincesCity");
    require("xg/eid-company/1.0.0/c/js/provincesData-debug");
    var addCustomerH = require("xg/eid-company/1.0.0/p/adminAccount/customerManageH/addCustomerH-debug.handlebars"),
        customerMH = require("xg/eid-company/1.0.0/p/adminAccount/customerManageH/customerMH-debug.handlebars"),
        customerTableH = require("xg/eid-company/1.0.0/p/adminAccount/customerManageH/customerTableH-debug.handlebars"),
        data = {
            pageIndex: 1,
            pageSize: 10
        };
    var customerManage = {
        init: function() {
            var self = this;
            $(".customerM").html(customerMH());
            self.customerList();
            self.addCustomer();
            self.searchCustomer()
        },
        addCustomer: function() {
            var self = this;
            $("#addCustomer").on("click", function() {
                $("section").after(addCustomerH());
                self.typeIdOption();
                $("#province_city").ProvinceCity();
                $("#modal-addCustomer").modal("show");
                $("#typeId").on("change", function() {
                    $("#typeName").val($("#typeId option:selected").text())
                });
                self.customerForm_validate();
                $("#modal-addCustomer").on("hidden.bs.modal", function(e) {
                    $("section").nextAll().remove()
                })
            })
        },
        typeIdOption: function() {
            var typeId = $("#typeId");
            $.ajax({
                type: "post",
                url: "/companyType/list.json",
                success: function(data, status, xhr) {
                    if (data.code == -1) {
                        alert(data.error)
                    } else {
                        console.log(data.list.length);
                        for (var i = 0; i < data.list.length; i++) {
                            typeId.append("<option value='" + data.list[i].typeId + "'>" + data.list[i].typeName + "</option>")
                        }
                    }
                },
                error: function(xhr, errorType, error) {
                    alert(error)
                }
            })
        },
        customerForm_validate: function() {
            var validate = $("#addCustomerForm").validate({
                debug: true,
                focusInvalid: false,
                onkeyup: false,
                onblur: true,
                submitHandler: function(form) {
                    $.ajax({
                        type: "post",
                        url: "/company/master/create.json",
                        data: $("#addCustomerForm").serialize(),
                        success: function(data, status, xhr) {
                            if (data.code == -1) {
                                alert(data.error)
                            } else {
                                alert("新增客户成功");
                                setTimeout(function() {
                                    window.location.reload()
                                }, 500)
                            }
                        },
                        error: function(xhr, errorType, error) {
                            alert(error)
                        }
                    })
                },
                rules: {
                    companyName: {
                        required: true
                    },
                    typeId: {
                        required: true
                    },
                    linkMan: {
                        required: true
                    },
                    phone: {
                        required: true,
                        mobile: true
                    },
                    province: {
                        required: true
                    },
                    city: {
                        required: true
                    },
                    address: {
                        required: true
                    }
                },
                messages: {
                    companyName: {
                        required: "<i>*</i>客户名称不能为空，请输入"
                    },
                    typeId: {
                        required: "<i>*</i>客户类型不能为空，请选择"
                    },
                    linkMan: {
                        required: "<i>*</i>联系人不能为空，请输入"
                    },
                    phone: {
                        required: "<i>*</i>手机号码不能为空，请输入"
                    },
                    province: {
                        required: "<i>*</i>省市不能为空，请选择"
                    },
                    city: {
                        required: ""
                    },
                    address: {
                        required: "<i>*</i>详细地址不能为空，请输入"
                    }
                }
            })
        },
        customerList: function() {
            var self = this;
            $.ajax({
                type: "post",
                url: "/company/master/list.json",
                data: data,
                success: function(data, status, xhr) {
                    if (data.code == -1) {
                        alert(data.error)
                    } else {
                        $(".customerTable").html(customerTableH(data.list));
                        self.pagerInit(data.count)
                    }
                },
                error: function(xhr, errorType, error) {
                    alert(error)
                }
            })
        },
        pagerInit: function(totalcount) {
            var self = this;
            if (totalcount > 0) {
                $("#pager").show()
            } else {
                $("#pager").hide()
            }
            $("#pager").pager({
                pagenumber: data.pageIndex,
                pagecount: Math.ceil(totalcount / data.pageSize),
                totalcount: totalcount,
                buttonClickCallback: function(pageclickednumber) {
                    data.pageIndex = pageclickednumber;
                    self.customerList()
                }
            })
        },
        searchCustomer: function() {
            var self = this;
            var validate = $("#customer_searchForm").validate({
                debug: true,
                focusInvalid: false,
                onkeyup: false,
                onblur: true,
                submitHandler: function(form) {
                    data.companyName = $("#companyName").val();
                    data.linkMan = $("#linkMan").val();
                    data.pageIndex = 1;
                    self.customerList()
                }
            })
        }
    };
    module.exports = customerManage
});
define("xg/eid-company/1.0.0/c/js/jquery-debug.provincesCity", ["jquery/jquery/1.10.1/jquery-debug"], function(require, exports, module) {
    var $ = require("jquery/jquery/1.10.1/jquery-debug");
    var GP = ["安徽", "澳门", "北京", "福建", "甘肃", "广东", "广西", "贵州", "海南", "河北", "河南", "黑龙江", "湖北", "湖南", "吉林", "江苏", "江西", "辽宁", "内蒙古", "宁夏", "青海", "山东", "山西", "陕西", "上海", "四川", "台湾", "天津", "西藏", "香港", "新疆", "云南", "浙江", "重庆", "海外"];
    var GT = [
        ["合肥", "安庆", "蚌埠", "亳州", "巢湖", "池州", "滁州", "阜阳", "淮北", "淮南", "黄山", "六安", "马鞍山", "宿州", "铜陵", "芜湖", "宣城"],
        ["澳门"],
        ["昌平", "朝阳", "崇文", "大兴", "东城", "房山", "丰台", "海淀", "怀柔", "门头沟", "密云", "平谷", "石景山", "顺义", "通州", "西城", "宣武", "延庆"],
        ["福州", "龙岩", "南平", "宁德", "莆田", "泉州", "三明", "厦门", "漳州"],
        ["兰州", "白银", "定西", "甘南", "嘉峪关", "金昌", "酒泉", "临夏", "陇南", "平凉", "庆阳", "天水", "武威", "张掖"],
        ["广州", "潮州", "东莞", "佛山", "河源", "惠州", "江门", "揭阳", "茂名", "梅州", "清远", "汕头", "汕尾", "韶关", "深圳", "阳江", "云浮", "湛江", "肇庆", "中山", "珠海"],
        ["桂林", "百色", "北海", "崇左", "防城港", "贵港", "河池", "贺州", "来宾", "柳州", "南宁", "钦州", "梧州", "玉林"],
        ["贵阳", "安顺", "毕节", "六盘水", "黔东南", "黔南", "黔西南", "铜仁", "遵义"],
        ["海口", "白沙", "保亭", "昌江", "澄迈", "儋州", "定安", "东方", "乐东", "临高", "陵水", "南沙群岛", "琼海", "琼中", "三亚", "屯昌", "万宁", "文昌", "五指山", "西沙群岛", "中沙群岛"],
        ["石家庄", "保定", "沧州", "承德", "邯郸", "衡水", "廊坊", "秦皇岛", "唐山", "邢台", "张家口"],
        ["郑州", "安阳", "鹤壁", "焦作", "开封", "洛阳", "漯河", "南阳", "平顶山", "濮阳", "三门峡", "商丘", "新乡", "信阳", "许昌", "周口", "驻马店"],
        ["哈尔滨", "大庆", "大兴安岭", "鹤岗", "黑河", "鸡西", "佳木斯", "牡丹江", "七台河", "齐齐哈尔", "双鸭山", "绥化", "伊春"],
        ["武汉", "鄂州", "恩施", "黄冈", "黄石", "荆门", "荆州", "潜江", "神农架", "十堰", "随州", "天门", "仙桃", "咸宁", "襄樊", "孝感", "宜昌"],
        ["长沙", "常德", "郴州", "衡阳", "怀化", "娄底", "邵阳", "湘潭", "湘西", "益阳", "永州", "岳阳", "张家界", "株洲"],
        ["长春", "白城", "白山", "吉林", "辽源", "四平", "松原", "通化", "延边"],
        ["南京", "常州", "淮安", "连云港", "南通", "苏州", "宿迁", "泰州", "无锡", "徐州", "盐城", "扬州", "镇江"],
        ["南昌", "抚州", "赣州", "吉安", "景德镇", "九江", "萍乡", "上饶", "新余", "宜春", "鹰潭"],
        ["沈阳", "鞍山", "本溪", "朝阳", "大连", "丹东", "抚顺", "阜新", "葫芦岛", "锦州", "辽阳", "盘锦", "铁岭", "营口"],
        ["呼和浩特", "阿拉善", "巴彦淖尔", "包头", "赤峰", "鄂尔多斯", "呼伦贝尔", "通辽", "乌海", "乌兰察布", "锡林郭勒", "兴安"],
        ["银川", "固原", "石嘴山", "吴忠", "中卫"],
        ["西宁", "果洛", "海北", "海东", "海南", "海西", "黄南", "玉树"],
        ["济南", "滨州", "德州", "东营", "菏泽", "济宁", "莱芜", "聊城", "临沂", "青岛", "日照", "泰安", "威海", "潍坊", "烟台", "枣庄", "淄博"],
        ["太原", "长治", "大同", "晋城", "晋中", "临汾", "吕梁", "朔州", "忻州", "阳泉", "运城"],
        ["西安", "安康", "宝鸡", "汉中", "商洛", "铜川", "渭南", "咸阳", "延安", "榆林"],
        ["宝山", "长宁", "崇明", "奉贤", "虹口", "黄浦", "嘉定", "金山", "静安", "卢湾", "闵行", "南汇", "浦东", "普陀", "青浦", "松江", "徐汇", "杨浦", "闸北"],
        ["成都", "阿坝", "巴中", "达州", "德阳", "甘孜", "广安", "广元", "乐山", "凉山", "泸州", "眉山", "绵阳", "内江", "南充", "攀枝花", "遂宁", "雅安", "宜宾", "资阳", "自贡"],
        ["台北", "阿莲", "安定", "安平", "八德", "八里", "白河", "白沙", "板桥", "褒忠", "宝山", "卑南", "北斗", "北港", "北门", "北埔", "北投", "补子", "布袋", "草屯", "长宾", "长治", "潮州", "车城", "成功", "城中区", "池上", "春日", "刺桐", "高雄", "花莲", "基隆", "嘉义", "苗栗", "南投", "屏东", "台东", "台南", "台中", "桃园", "新竹", "宜兰", "彰化"],
        ["宝坻", "北辰", "大港", "东丽", "汉沽", "和平", "河北", "河东", "河西", "红桥", "蓟县", "津南", "静海", "南开", "宁河", "塘沽", "武清", "西青"],
        ["拉萨", "阿里", "昌都", "林芝", "那曲", "日喀则", "山南"],
        ["北区", "大埔区", "东区", "观塘区", "黄大仙区", "九龙", "葵青区", "离岛区", "南区", "荃湾区", "沙田区", "深水埗区", "屯门区", "湾仔区", "西贡区", "香港", "新界", "油尖旺区", "元朗区", "中西区"],
        ["乌鲁木齐", "阿克苏", "阿拉尔", "阿勒泰", "巴音郭楞", "博尔塔拉", "昌吉", "哈密", "和田", "喀什", "克拉玛依", "克孜勒苏柯尔克孜", "石河子", "塔城", "图木舒克", "吐鲁番", "五家渠", "伊犁"],
        ["昆明", "保山", "楚雄", "大理", "德宏", "迪庆", "红河", "丽江", "临沧", "怒江", "曲靖", "思茅", "文山", "西双版纳", "玉溪", "昭通"],
        ["杭州", "湖州", "嘉兴", "金华", "丽水", "宁波", "衢州", "绍兴", "台州", "温州", "舟山"],
        ["巴南", "北碚", "璧山", "长寿", "城口", "大渡口", "大足", "垫江", "丰都", "奉节", "涪陵", "合川", "江北", "江津", "九龙坡", "开县", "梁平", "南岸", "南川", "彭水", "綦江", "黔江", "荣昌", "沙坪坝", "石柱", "双桥", "铜梁", "潼南", "万盛", "万州", "巫山", "巫溪", "武隆", "秀山", "永川", "酉阳", "渝北", "渝中", "云阳", "忠县"],
        ["阿根廷", "埃及", "爱尔兰", "奥地利", "奥克兰", "澳大利亚", "巴基斯坦", "巴西", "保加利亚", "比利时", "冰岛", "朝鲜", "丹麦", "德国", "俄罗斯", "法国", "菲律宾", "芬兰", "哥伦比亚", "韩国", "荷兰", "加拿大", "柬埔寨", "喀麦隆", "老挝", "卢森堡", "罗马尼亚", "马达加斯加", "马来西亚", "毛里求斯", "美国", "秘鲁", "缅甸", "墨西哥", "南非", "尼泊尔", "挪威", "葡萄牙", "其它地区", "日本", "瑞典", "瑞士", "斯里兰卡", "泰国", "土耳其", "委内瑞拉", "文莱", "乌克兰", "西班牙", "希腊", "新加坡", "新西兰", "匈牙利", "以色列", "意大利", "印度", "印度尼西亚", "英国", "越南", "智利"]
    ];
    var GC = [
        [
            ["长丰", "肥东", "肥西", "合肥市"],
            ["安庆市", "枞阳", "怀宁", "潜山", "宿松", "太湖", "桐城", "望江", "岳西"],
            ["蚌埠市", "固镇", "怀远", "五河"],
            ["亳州市", "利辛", "蒙城", "涡阳"],
            ["巢湖市", "含山", "和县", "庐江", "无为"],
            ["池州市", "东至", "青阳", "石台"],
            ["滁州市", "定远", "凤阳", "来安", "明光", "全椒", "天长"],
            ["阜南", "阜阳市", "界首", "临泉", "太和", "颍上"],
            ["淮北市", "濉溪"],
            ["凤台", "淮南市"],
            ["黄山市", "祁门", "歙县", "休宁", "黟县"],
            ["霍邱", "霍山", "金寨", "六安市", "寿县", "舒城"],
            ["当涂", "马鞍山市"],
            ["砀山", "灵璧", "泗县", "宿州市", "萧县"],
            ["铜陵市", "铜陵县"],
            ["繁昌", "南陵", "芜湖市", "芜湖县"],
            ["广德", "绩溪", "泾县", "旌德", "郎溪", "宁国", "宣城市"]
        ],
        [
            ["澳门"]
        ],
        [
            ["昌平"],
            ["朝阳"],
            ["崇文"],
            ["大兴"],
            ["东城"],
            ["房山"],
            ["丰台"],
            ["海淀"],
            ["怀柔"],
            ["门头沟"],
            ["密云"],
            ["平谷"],
            ["石景山"],
            ["顺义"],
            ["通州"],
            ["西城"],
            ["宣武"],
            ["延庆"]
        ],
        [
            ["长乐", "福清", "福州市", "连江", "罗源", "闽侯", "闽清", "平潭", "永泰"],
            ["长汀", "连城", "龙岩市", "上杭", "武平", "永定", "漳平"],
            ["光泽", "建瓯", "建阳", "南平市", "浦城", "邵武", "顺昌", "松溪", "武夷山", "政和"],
            ["福安", "福鼎", "古田", "宁德市", "屏南", "寿宁", "霞浦", "柘荣", "周宁"],
            ["莆田市", "仙游"],
            ["安溪", "德化", "惠安", "金门", "晋江", "南安", "泉州市", "石狮", "永春"],
            ["大田", "建宁", "将乐", "明溪", "宁化", "清流", "三明市", "沙县", "泰宁", "永安", "尤溪"],
            ["厦门市"],
            ["长泰", "东山", "华安", "龙海", "南靖", "平和", "云霄", "漳浦", "漳州市", "诏安"]
        ],
        [
            ["皋兰", "兰州市", "永登", "榆中"],
            ["白银市", "会宁", "景泰", "靖远"],
            ["定西市", "临洮", "陇西", "岷县", "通渭", "渭源", "漳县"],
            ["迭部", "合作", "临潭", "碌曲", "玛曲", "夏河", "舟曲", "卓尼"],
            ["嘉峪关市"],
            ["金昌市", "永昌"],
            ["阿克塞", "敦煌", "瓜州", "金塔", "酒泉市", "肃北", "玉门"],
            ["东乡族", "广河", "和政", "积石山", "康乐", "临夏市", "临夏县", "永靖"],
            ["成县", "宕昌", "徽县", "康县", "礼县", "两当", "陇南市", "文县", "西和"],
            ["崇信", "华亭", "泾川", "静宁", "灵台", "平凉市", "庄浪"],
            ["合水", "华池", "环县", "宁县", "庆城", "庆阳市", "镇原", "正宁"],
            ["甘谷", "秦安", "清水", "天水市", "武山", "张家川"],
            ["古浪", "民勤", "天祝", "武威市"],
            ["高台", "临泽", "民乐", "山丹", "肃南", "张掖市"]
        ],
        [
            ["从化", "广州市", "增城"],
            ["潮安", "潮州市", "饶平"],
            ["东莞"],
            ["佛山市"],
            ["东源", "和平", "河源市", "连平", "龙川", "紫金"],
            ["博罗", "惠东", "惠州市", "龙门"],
            ["恩平", "鹤山", "江门市", "开平", "台山"],
            ["惠来", "揭东", "揭西", "揭阳市", "普宁"],
            ["电白", "高州", "化州", "茂名市", "信宜"],
            ["大埔", "丰顺", "蕉岭", "梅县", "梅州市", "平远", "五华", "兴宁"],
            ["佛冈", "连南", "连山", "连州", "清新", "清远市", "阳山", "英德"],
            ["南澳", "汕头市"],
            ["海丰", "陆丰", "陆河", "汕尾市"],
            ["乐昌", "南雄", "仁化", "乳源", "韶关市", "始兴", "翁源", "新丰"],
            ["深圳市"],
            ["阳春", "阳东", "阳江市", "阳西"],
            ["罗定", "新兴", "郁南", "云安", "云浮市"],
            ["雷州", "廉江", "遂溪", "吴川", "徐闻", "湛江市"],
            ["德庆", "封开", "高要", "广宁", "怀集", "四会", "肇庆市"],
            ["中山市"],
            ["珠海市"]
        ],
        [
            ["恭城", "灌阳", "桂林市", "荔蒲", "临桂", "灵川", "龙胜", "平乐", "全州", "兴安", "阳朔", "永福", "资源"],
            ["百色市", "德保", "靖西", "乐业", "凌云", "隆林", "那坡", "平果", "田东", "田林", "田阳", "西林"],
            ["北海市", "合浦"],
            ["崇左市", "大新", "扶绥", "龙州", "宁明", "凭祥", "天等"],
            ["东兴", "防城港市", "上思"],
            ["贵港市", "桂平", "平南"],
            ["巴马", "大化", "东兰", "都安", "凤山", "河池市", "环江", "罗城", "南丹", "天峨", "宜州"],
            ["富川", "贺州市", "昭平", "钟山"],
            ["合山", "金秀", "来宾市", "武宣", "象州", "忻城"],
            ["柳城", "柳江", "柳州市", "鹿寨", "融安", "融水", "三江"],
            ["宾阳", "横县", "隆安", "马山", "南宁市", "上林", "武鸣"],
            ["灵山", "浦北", "钦州市"],
            ["苍梧", "岑溪", "蒙山", "藤县", "梧州市"],
            ["北流", "博白", "陆川", "容县", "兴业", "玉林市"]
        ],
        [
            ["贵阳市", "开阳", "清镇", "息烽", "修文"],
            ["安顺市", "关岭", "平坝", "普定", "镇宁", "紫云"],
            ["毕节市", "大方", "赫章", "金沙", "纳雍", "黔西", "威宁", "织金"],
            ["六盘水市", "六枝", "盘县", "水城"],
            ["岑巩", "从江", "丹寨", "黄平", "剑河", "锦屏", "凯里", "雷山", "黎平", "麻江", "榕江", "三穗", "施秉", "台江", "天柱", "镇远"],
            ["长顺", "都匀", "独山", "福泉", "贵定", "惠水", "荔波", "龙里", "罗甸", "平塘", "三都", "瓮安"],
            ["安龙", "册亨", "普安", "晴隆", "望谟", "兴仁", "兴义", "贞丰"],
            ["德江", "江口", "石阡", "思南", "松桃", "铜仁市", "万山", "沿河", "印江", "玉屏"],
            ["赤水", "道真", "凤冈", "湄潭", "仁怀", "绥阳", "桐梓", "务川", "习水", "余庆", "正安", "遵义市", "遵义县"]
        ],
        [
            ["海口"],
            ["白沙"],
            ["保亭"],
            ["昌江"],
            ["澄迈"],
            ["儋州"],
            ["定安"],
            ["东方"],
            ["乐东"],
            ["临高"],
            ["陵水"],
            ["南沙群岛"],
            ["琼海"],
            ["琼中"],
            ["三亚"],
            ["屯昌"],
            ["万宁"],
            ["文昌"],
            ["五指山"],
            ["西沙群岛"],
            ["中沙群岛"]
        ],
        [
            ["藁城", "晋州", "井陉", "灵寿", "鹿泉", "栾城", "平山", "深泽", "石家庄市", "无极", "辛集", "新乐", "行唐", "元氏", "赞皇", "赵县", "正定", "高邑"],
            ["安国", "安新", "保定市", "博野", "定兴", "定州", "阜平", "高碑店", "高阳", "涞水", "涞源", "蠡县", "满城", "清苑", "曲阳", "容城", "顺平", "唐县", "望都", "雄县", "徐水", "易县", "涿州"],
            ["泊头", "沧县", "沧州市", "东光", "海兴", "河间", "黄骅", "孟村", "南皮", "青县", "任丘", "肃宁", "吴桥", "献县", "盐山"],
            ["承德市", "承德县", "丰宁", "宽城", "隆化", "滦平", "平泉", "围场", "兴隆"],
            ["成安", "磁县", "大名", "肥乡", "馆陶", "广平", "邯郸市", "邯郸县", "鸡泽", "临漳", "邱县", "曲周", "涉县", "魏县", "武安", "永年"],
            ["安平", "阜城", "故城", "衡水市", "冀州", "景县", "饶阳", "深州", "武强", "武邑", "枣强"],
            ["霸州", "大厂", "大城", "固安", "廊坊市", "三河", "文安", "香河", "永清"],
            ["昌黎", "抚宁", "卢龙", "秦皇岛市", "青龙"],
            ["乐亭", "滦南", "滦县", "迁安", "迁西", "唐海", "唐山市", "玉田", "遵化"],
            ["柏乡", "广宗", "巨鹿", "临城", "临西", "隆尧", "内丘", "南宫", "南和", "宁晋", "平乡", "清河", "任县", "沙河", "威县", "新河", "邢台市", "邢台县"],
            ["赤城", "崇礼", "沽源", "怀安", "怀来", "康保", "尚义", "万全", "蔚县", "宣化", "阳原", "张北", "张家口市", "涿鹿"]
        ],
        [
            ["登封", "巩义", "新密", "新郑", "荥阳", "郑州市", "中牟"],
            ["安阳市", "安阳县", "滑县", "林州", "内黄", "汤阴"],
            ["鹤壁市", "浚县", "淇县"],
            ["博爱", "济源", "焦作市", "孟州", "沁阳", "温县", "武陟", "修武"],
            ["开封市", "开封县", "兰考", "杞县", "通许", "尉氏"],
            ["栾川", "洛宁", "洛阳市", "孟津", "汝阳", "嵩县", "新安", "偃师", "伊川", "宜阳"],
            ["临颍", "漯河市", "舞阳"],
            ["邓州", "方城", "内乡", "南阳市", "南召", "社旗", "唐河", "桐柏", "西峡", "淅川", "新野", "镇平"],
            ["宝丰", "郏县", "鲁山", "平顶山市", "汝州", "舞钢", "叶县"],
            ["范县", "南乐", "濮阳市", "濮阳县", "清丰", "台前"],
            ["灵宝", "卢氏", "三门峡市", "陕县", "渑池", "义马"],
            ["民权", "宁陵", "商丘市", "睢县", "夏邑", "永城", "虞城", "柘城"],
            ["长垣", "封丘", "辉县", "获嘉", "卫辉", "新乡市", "新乡县", "延津", "原阳"],
            ["固始", "光山", "淮滨", "潢川", "罗山", "商城", "息县", "新县", "信阳市"],
            ["长葛", "襄城", "许昌市", "许昌县", "鄢陵", "禹州"],
            ["郸城", "扶沟", "淮阳", "鹿邑", "商水", "沈丘", "太康", "西华", "项城", "周口市"],
            ["泌阳", "平舆", "确山", "汝南", "上蔡", "遂平", "西平", "新蔡", "正阳", "驻马店市"]
        ],
        [
            ["巴彦", "宾县", "方正", "哈尔滨市", "木兰", "尚志", "双城", "通河", "五常", "延寿", "依兰"],
            ["大庆市", "杜尔伯特", "林甸", "肇源", "肇州"],
            ["呼玛", "呼中", "加格达奇", "漠河", "松岭", "塔河", "新林"],
            ["鹤岗市", "萝北", "绥滨"],
            ["北安", "黑河市", "嫩江", "孙吴", "五大连池", "逊克"],
            ["虎林", "鸡东", "鸡西市", "密山"],
            ["抚远", "富锦", "桦川", "桦南", "佳木斯市", "汤原", "同江"],
            ["东宁", "海林", "林口", "牡丹江市", "穆棱", "宁安", "绥芬河"],
            ["勃利", "七台河"],
            ["拜泉", "富裕", "甘南", "克东", "克山", "龙江", "讷河", "齐齐哈尔市", "泰来", "依安"],
            ["宝清", "集贤", "饶河", "双鸭山市", "友谊"],
            ["安达", "海伦", "兰西", "明水", "青冈", "庆安", "绥化市", "绥棱", "望奎", "肇东"],
            ["嘉荫", "铁力", "伊春市"]
        ],
        [
            ["武汉市"],
            ["鄂州市"],
            ["巴东", "恩施市", "鹤峰", "建始", "来凤", "利川", "咸丰", "宣恩"],
            ["红安", "黄冈市", "黄梅", "罗田", "麻城", "蕲春", "团风", "武穴", "浠水", "英山"],
            ["大冶", "黄石", "阳新"],
            ["京山", "荆门市", "沙洋", "钟祥"],
            ["公安", "洪湖", "监利", "江陵", "荆州市", "石首", "松滋"],
            ["潜江"],
            ["神农架"],
            ["丹江口", "房县", "十堰市", "郧西", "郧县", "竹山", "竹溪"],
            ["广水", "随州市"],
            ["天门市"],
            ["仙桃市"],
            ["赤壁", "崇阳", "嘉鱼", "通城", "通山", "咸宁市"],
            ["保康", "谷城", "老河口", "南漳", "襄樊市", "宜城", "枣阳"],
            ["安陆", "大悟", "汉川", "孝昌", "孝感市", "应城", "云梦"],
            ["长阳", "当阳", "五峰", "兴山", "宜昌市", "宜都", "远安", "枝江", "秭归"]
        ],
        [
            ["长沙市", "长沙县", "浏阳", "宁乡", "望城"],
            ["安乡", "常德市", "汉寿", "津市", "澧县", "临澧", "石门", "桃源"],
            ["安仁", "郴州市", "桂东", "桂阳", "嘉禾", "临武", "汝城", "宜章", "永兴", "资兴"],
            ["常宁", "衡东", "衡南", "衡山", "衡阳市", "衡阳县", "耒阳", "祁东"],
            ["辰溪", "洪江", "怀化市", "会同", "靖州", "麻阳", "通道", "新晃", "溆浦", "沅陵", "芷江", "中方"],
            ["冷水江", "涟源", "娄底市", "双峰", "新化"],
            ["城步", "洞口", "隆回", "邵东", "邵阳市", "邵阳县", "绥宁", "武冈", "新宁", "新邵"],
            ["韶山", "湘潭市", "湘潭县", "湘乡"],
            ["保靖", "凤凰", "古丈", "花垣", "吉首", "龙山", "泸溪", "永顺"],
            ["安化", "南县", "桃江", "益阳市", "沅江"],
            ["道县", "东安", "江华", "江永", "蓝山", "宁远", "祁阳", "双牌", "新田", "永州市"],
            ["华容", "临湘", "汨罗", "平江", "湘阴", "岳阳市", "岳阳县"],
            ["慈利", "桑植", "张家界市"],
            ["茶陵", "醴陵", "炎陵", "攸县", "株洲市", "株洲县"]
        ],
        [
            ["长春市", "德惠", "九台", "农安", "榆树"],
            ["白城市", "大安", "洮南", "通榆", "镇赉"],
            ["白山", "长白", "抚松", "靖宇", "临江"],
            ["桦甸", "吉林市", "蛟河", "磐石", "舒兰", "永吉"],
            ["东丰", "东辽", "辽源市"],
            ["公主岭", "梨树", "双辽", "四平市", "伊通"],
            ["长岭", "扶余", "前郭尔罗斯", "乾安", "松原市"],
            ["辉南", "集安", "柳河", "梅河口", "通化市", "通化县"],
            ["延吉市", "敦化", "和龙", "珲春", "龙井", "图们", "汪清", "安图"]
        ],
        [
            ["高淳", "溧水", "南京市"],
            ["常州市", "金坛", "溧阳"],
            ["洪泽", "淮安市", "金湖", "涟水", "盱眙"],
            ["东海", "赣榆", "灌南", "灌云", "连云港市"],
            ["海安", "海门", "南通市", "启东", "如东", "如皋", "通州"],
            ["常熟", "昆山", "苏州市", "太仓", "吴江", "张家港"],
            ["沭阳", "泗洪", "泗阳", "宿迁市"],
            ["姜堰", "靖江", "泰兴", "泰州市", "兴化"],
            ["江阴", "无锡市", "宜兴"],
            ["丰县", "沛县", "邳州", "睢宁", "铜山", "新沂", "徐州市"],
            ["滨海", "大丰", "东台", "阜宁", "建湖", "射阳", "响水", "盐城市"],
            ["宝应", "高邮", "江都", "扬州市", "仪征"],
            ["丹阳", "句容", "扬中", "镇江市"]
        ],
        [
            ["安义", "进贤", "南昌市", "南昌县", "新建"],
            ["崇仁", "东乡", "抚州市", "广昌", "金溪", "乐安", "黎川", "南城", "南丰", "宜黄", "资溪"],
            ["安远", "崇义", "大余", "定南", "赣县", "赣州市", "会昌", "龙南", "南康", "宁都", "全南", "瑞金", "上犹", "石城", "信丰", "兴国", "寻乌", "于都"],
            ["安福", "吉安市", "吉安县", "吉水", "井冈山", "遂川", "泰和", "万安", "峡江", "新干", "永丰", "永新"],
            ["浮梁", "景德镇市", "乐平"],
            ["德安", "都昌", "湖口", "九江市", "九江县", "彭泽", "瑞昌", "武宁", "星子", "修水", "永修"],
            ["莲花", "芦溪", "萍乡市", "上栗"],
            ["德兴", "广丰", "横峰", "鄱阳", "铅山", "上饶市", "上饶县", "万年", "婺源", "弋阳", "余干", "玉山"],
            ["分宜", "新余市"],
            ["丰城", "奉新", "高安", "靖安", "上高", "铜鼓", "万载", "宜春市", "宜丰", "樟树"],
            ["贵溪", "鹰潭市", "余江"]
        ],
        [
            ["法库", "康平", "辽中", "沈阳市", "新民"],
            ["鞍山市", "海城", "台安", "岫岩"],
            ["本溪市", "本溪县", "桓仁"],
            ["北票", "朝阳市", "朝阳县", "建平", "喀喇沁左翼", "凌源"],
            ["长海", "大连市", "普兰店", "瓦房店", "庄河"],
            ["丹东市", "东港", "凤城", "宽甸"],
            ["抚顺市", "抚顺县", "清原", "新宾"],
            ["阜新市", "阜新县", "彰武"],
            ["葫芦岛市", "建昌", "绥中", "兴城"],
            ["北镇", "黑山", "锦州市", "凌海", "义县"],
            ["灯塔", "辽阳市", "辽阳县"],
            ["大洼", "盘锦市", "盘山"],
            ["昌图", "调兵山", "开原", "铁岭市", "铁岭县", "西丰"],
            ["大石桥", "盖州", "营口市"]
        ],
        [
            ["和林格尔", "呼和浩特市", "清水河", "土默特左旗", "托克托", "武川"],
            ["阿拉善右旗", "阿拉善左旗", "额济纳旗"],
            ["巴彦淖尔市", "磴口", "杭锦后旗", "乌拉特后旗", "乌拉特前旗", "乌拉特中旗", "五原"],
            ["包头市", "达尔罕茂明安联合旗", "固阳", "土默特右旗"],
            ["阿鲁科尔沁旗", "敖汉旗", "巴林右旗", "巴林左旗", "赤峰市", "喀喇沁旗", "克什克腾旗", "林西", "宁城", "翁牛特旗"],
            ["达拉特旗", "鄂尔多斯市", "鄂托克旗", "鄂托克前旗", "杭锦旗", "乌审旗", "伊金霍洛旗", "准格尔旗"],
            ["阿荣旗", "陈巴尔虎旗", "额尔古纳", "鄂伦春旗", "鄂温克族旗", "根河", "呼伦贝尔市", "满洲里", "莫力达瓦旗", "新巴尔虎右旗", "新巴尔虎左旗", "牙克石", "扎兰屯"],
            ["霍林郭勒", "开鲁", "科尔沁左翼后旗", "科尔沁左翼中旗", "库伦旗", "奈曼旗", "通辽市", "扎鲁特旗"],
            ["乌海"],
            ["察哈尔右翼后旗", "察哈尔右翼前旗", "察哈尔右翼中旗", "丰镇", "化德", "凉城", "商都", "四子王旗", "乌兰察布市", "兴和", "卓资"],
            ["阿巴嘎旗", "东乌珠穆沁旗", "多伦", "二连浩特", "苏尼特右旗", "苏尼特左旗", "太仆寺旗", "西乌珠穆沁旗", "锡林郭勒市", "镶黄旗", "正蓝旗", "正镶白旗"],
            ["阿尔山", "科尔沁右翼前旗", "科尔沁右翼中旗", "突泉", "乌兰浩特", "扎赉特旗"]
        ],
        [
            ["贺兰", "灵武", "银川市", "永宁"],
            ["固原市", "泾源", "隆德", "彭阳", "西吉"],
            ["平罗", "石嘴山市"],
            ["青铜峡", "同心", "吴忠市", "盐池"],
            ["海原", "中宁", "中卫市"]
        ],
        [
            ["大通", "湟源", "湟中", "西宁市"],
            ["班玛", "达日", "甘德", "久治", "玛多", "玛沁"],
            ["刚察", "海晏", "门源", "祁连"],
            ["互助", "化隆", "乐都", "民和", "平安", "循化"],
            ["共和", "贵德", "贵南", "同德", "兴海"],
            ["大柴旦", "德令哈", "都兰", "格尔木", "冷湖", "茫崖", "天峻", "乌兰"],
            ["河南", "尖扎", "同仁", "泽库"],
            ["称多", "囊谦", "曲麻莱", "玉树", "杂多", "治多"]
        ],
        [
            ["济南市", "济阳", "平阴", "商河", "章丘"],
            ["滨州市", "博兴", "惠民", "无棣", "阳信", "沾化", "邹平"],
            ["德州市", "乐陵", "临邑", "陵县", "宁津", "平原", "齐河", "庆云", "武城", "夏津", "禹城"],
            ["东营市", "广饶", "垦利", "利津"],
            ["曹县", "成武", "单县", "定陶", "东明", "菏泽市", "巨野", "鄄城", "郓城"],
            ["济宁市", "嘉祥", "金乡", "梁山", "曲阜", "泗水", "微山", "汶上", "兖州", "鱼台", "邹城"],
            ["莱芜市"],
            ["茌平", "东阿", "高唐", "冠县", "聊城市", "临清", "莘县", "阳谷"],
            ["苍山", "费县", "莒南", "临沭", "临沂市", "蒙阴", "平邑", "郯城", "沂南", "沂水"],
            ["即墨", "胶南", "胶州", "莱西", "平度", "青岛市"],
            ["莒县", "日照市", "五莲"],
            ["东平", "肥城", "宁阳", "泰安市", "新泰"],
            ["荣成", "乳山", "威海市", "文登"],
            ["安丘", "昌乐", "昌邑", "高密", "临朐", "青州", "寿光", "潍坊市", "诸城"],
            ["长岛", "海阳", "莱阳", "莱州", "龙口", "蓬莱", "栖霞", "烟台市", "招远"],
            ["滕州", "枣庄市"],
            ["高青", "桓台", "沂源", "淄博市"]
        ],
        [
            ["古交", "娄烦", "清徐", "太原市", "阳曲"],
            ["长治市", "长治县", "长子", "壶关", "黎城", "潞城", "平顺", "沁县", "沁源", "屯留", "武乡", "襄垣"],
            ["大同市", "大同县", "广灵", "浑源", "灵丘", "天镇", "阳高", "左云"],
            ["高平", "晋城市", "陵川", "沁水", "阳城", "泽州"],
            ["和顺", "介休", "晋中市", "灵石", "平遥", "祁县", "寿阳", "太谷", "昔阳", "榆社", "左权"],
            ["安泽", "大宁", "汾西", "浮山", "古县", "洪洞", "侯马", "霍州", "吉县", "临汾市", "蒲县", "曲沃", "隰县", "乡宁", "襄汾", "翼城", "永和"],
            ["方山", "汾阳", "交城", "交口", "岚县", "临县", "柳林", "吕梁市", "石楼", "文水", "孝义", "兴县", "中阳"],
            ["怀仁", "山阴", "朔州市", "应县", "右玉"],
            ["保德", "代县", "定襄", "繁峙", "河曲", "静乐", "岢岚", "宁武", "偏关", "神池", "五台", "五寨", "忻州市", "原平"],
            ["平定", "阳泉市", "盂县"],
            ["河津", "稷山", "绛县", "临猗", "平陆", "芮城", "万荣", "闻喜", "夏县", "新绛", "永济", "垣曲", "运城市"]
        ],
        [
            ["高陵", "户县", "蓝田", "西安市", "周至"],
            ["安康市", "白河", "汉阴", "岚皋", "宁陕", "平利", "石泉", "旬阳", "镇坪", "紫阳"],
            ["宝鸡市", "凤县", "凤翔", "扶风", "麟游", "陇县", "眉县", "岐山", "千阳", "太白"],
            ["城固", "佛坪", "汉中市", "留坝", "略阳", "勉县", "南郑", "宁强", "西乡", "洋县", "镇巴"],
            ["丹凤", "洛南", "山阳", "商洛市", "商南", "镇安", "柞水"],
            ["铜川市", "宜君"],
            ["白水", "澄城", "大荔", "富平", "韩城", "合阳", "华县", "华阴", "蒲城", "潼关", "渭南市"],
            ["彬县", "长武", "淳化", "泾阳", "礼泉", "乾县", "三原", "武功", "咸阳市", "兴平", "旬邑", "永寿"],
            ["安塞", "富县", "甘泉", "黄陵", "黄龙", "洛川", "吴起", "延安市", "延长", "延川", "宜川", "志丹", "子长"],
            ["定边", "府谷", "横山", "佳县", "靖边", "米脂", "清涧", "神木", "绥德", "吴堡", "榆林市", "子洲"]
        ],
        [
            ["宝山"],
            ["长宁"],
            ["崇明"],
            ["奉贤"],
            ["虹口"],
            ["黄浦"],
            ["嘉定"],
            ["金山"],
            ["静安"],
            ["卢湾"],
            ["闵行"],
            ["南汇"],
            ["浦东"],
            ["普陀"],
            ["青浦"],
            ["松江"],
            ["徐汇"],
            ["杨浦"],
            ["闸北"]
        ],
        [
            ["成都市", "崇州", "大邑", "都江堰", "金堂", "彭州", "郫县", "蒲江", "邛崃", "双流", "新津"],
            ["阿坝", "黑水", "红原", "金川", "九寨沟", "理县", "马尔康", "茂县", "壤塘", "若尔盖", "松潘", "汶川", "小金"],
            ["巴中市", "南江", "平昌", "通江"],
            ["达县", "达州市", "大竹", "开江", "渠县", "万源", "宣汉"],
            ["德阳市", "广汉", "罗江", "绵竹", "什邡", "中江"],
            ["巴塘", "白玉", "丹巴", "道孚", "稻城", "得荣", "德格", "甘孜", "九龙", "康定", "理塘", "泸定", "炉霍", "色达", "石渠", "乡城", "新龙", "雅江"],
            ["广安市", "华蓥", "邻水", "武胜", "岳池"],
            ["苍溪", "广元市", "剑阁", "青川", "旺苍"],
            ["峨边", "峨眉山", "夹江", "犍为", "井研", "乐山市", "马边", "沐川"],
            ["布拖", "德昌", "甘洛", "会东", "会理", "金阳", "雷波", "美姑", "冕宁", "木里", "宁南", "普格", "西昌", "喜德", "盐源", "越西", "昭觉"],
            ["古蔺", "合江", "泸县", "泸州市", "叙永"],
            ["丹棱", "洪雅", "眉山市", "彭山", "青神", "仁寿"],
            ["安县", "北川", "江油", "绵阳市", "平武", "三台", "盐亭", "梓潼"],
            ["隆昌", "内江市", "威远", "资中"],
            ["阆中", "南部", "南充市", "蓬安", "西充", "仪陇", "营山"],
            ["米易", "攀枝花市", "盐边"],
            ["大英", "蓬溪", "射洪", "遂宁市"],
            ["宝兴", "汉源", "芦山", "名山", "石棉", "天全", "雅安市", "荥经"],
            ["长宁", "高县", "珙县", "江安", "筠连", "南溪", "屏山", "兴文", "宜宾市", "宜宾县"],
            ["安岳", "简阳", "乐至", "资阳市"],
            ["富顺", "荣县", "自贡市"]
        ],
        [
            ["台北"],
            ["阿莲"],
            ["安定"],
            ["安平"],
            ["八德"],
            ["八里"],
            ["白河"],
            ["白沙"],
            ["板桥"],
            ["褒忠"],
            ["宝山"],
            ["卑南"],
            ["北斗"],
            ["北港"],
            ["北门"],
            ["北埔"],
            ["北投"],
            ["补子"],
            ["布袋"],
            ["草屯"],
            ["长宾"],
            ["长治"],
            ["潮州"],
            ["车城"],
            ["成功"],
            ["城中区"],
            ["池上"],
            ["春日"],
            ["刺桐"],
            ["高雄"],
            ["花莲"],
            ["基隆"],
            ["嘉义"],
            ["苗栗"],
            ["南投"],
            ["屏东"],
            ["台东"],
            ["台南"],
            ["台中"],
            ["桃园"],
            ["新竹"],
            ["宜兰"],
            ["彰化"]
        ],
        [
            ["宝坻"],
            ["北辰"],
            ["大港"],
            ["东丽"],
            ["汉沽"],
            ["和平"],
            ["河北"],
            ["河东"],
            ["河西"],
            ["红桥"],
            ["蓟县"],
            ["津南"],
            ["静海"],
            ["南开"],
            ["宁河"],
            ["塘沽"],
            ["武清"],
            ["西青"]
        ],
        [
            ["达孜", "当雄", "堆龙德庆", "拉萨市", "林周", "墨竹工卡", "尼木", "曲水"],
            ["措勤", "噶尔", "改则", "革吉", "普兰", "日土", "札达"],
            ["八宿", "边坝", "察雅", "昌都", "丁青", "贡觉", "江达", "类乌齐", "洛隆", "芒康", "左贡"],
            ["波密", "察隅", "工布江达", "朗县", "林芝", "米林", "墨脱"],
            ["安多", "巴青", "班戈", "比如", "嘉黎", "那曲", "尼玛", "聂荣", "申扎", "索县"],
            ["昂仁", "白朗", "定结", "定日", "岗巴", "吉隆", "江孜", "康马", "拉孜", "南木林", "聂拉木", "仁布", "日喀则市", "萨嘎", "萨迦", "谢通门", "亚东", "仲巴"],
            ["措美", "错那", "贡嘎", "加查", "浪卡子", "隆子", "洛扎", "乃东", "琼结", "曲松", "桑日", "扎囊"]
        ],
        [
            ["北区"],
            ["大埔区"],
            ["东区"],
            ["观塘区"],
            ["黄大仙区"],
            ["九龙"],
            ["葵青区"],
            ["离岛区"],
            ["南区"],
            ["荃湾区"],
            ["沙田区"],
            ["深水埗区"],
            ["屯门区"],
            ["湾仔区"],
            ["西贡区"],
            ["香港"],
            ["新界"],
            ["油尖旺区"],
            ["元朗区"],
            ["中西区"]
        ],
        [
            ["乌鲁木齐市", "乌鲁木齐县"],
            ["阿克苏市", "阿瓦提", "拜城", "柯坪", "库车", "沙雅", "温宿", "乌什", "新和"],
            ["阿拉尔"],
            ["阿勒泰", "布尔津", "福海", "富蕴", "哈巴河", "吉木乃", "青河"],
            ["博湖", "和静", "和硕", "库尔勒", "轮台", "且末", "若羌", "尉犁", "焉耆"],
            ["博乐", "精河", "温泉"],
            ["昌吉市", "阜康", "呼图壁", "吉木萨尔", "玛纳斯", "米泉", "木垒", "奇台"],
            ["巴里坤", "哈密市", "伊吾"],
            ["策勒", "和田市", "和田县", "洛浦", "民丰", "墨玉", "皮山", "于田"],
            ["巴楚", "伽师", "喀什市", "麦盖提", "莎车", "疏附", "疏勒", "塔什库尔干塔吉克", "叶城", "英吉沙", "岳普湖", "泽普"],
            ["克拉玛依"],
            ["阿合奇", "阿克陶", "阿图什", "乌恰"],
            ["石河子"],
            ["额敏", "和布克赛尔", "沙湾", "塔城市", "托里", "乌苏", "裕民"],
            ["图木舒克"],
            ["鄯善", "吐鲁番市", "托克逊"],
            ["五家渠"],
            ["察布查尔锡伯", "巩留", "霍城", "奎屯", "尼勒克", "特克斯", "新源", "伊宁市", "伊宁县", "昭苏"]
        ],
        [
            ["安宁", "呈贡", "富民", "晋宁", "昆明市", "禄劝", "石林", "嵩明", "寻甸", "宜良"],
            ["保山市", "昌宁", "龙陵", "施甸", "腾冲"],
            ["楚雄市", "大姚", "禄丰", "牟定", "南华", "双柏", "武定", "姚安", "永仁", "元谋"],
            ["宾川", "大理市", "洱源", "鹤庆", "剑川", "弥渡", "南涧", "巍山", "祥云", "漾濞", "永平", "云龙"],
            ["梁河", "陇川", "潞西", "瑞丽", "盈江"],
            ["德钦", "维西", "香格里拉"],
            ["个旧", "河口", "红河", "建水", "金平", "开远", "泸西", "绿春", "蒙自", "弥勒", "屏边", "石屏", "元阳"],
            ["华坪", "丽江市", "宁蒗", "永胜", "玉龙"],
            ["沧源", "凤庆", "耿马", "临沧市", "双江", "永德", "云县", "镇康"],
            ["福贡", "贡山", "兰坪", "泸水"],
            ["富源", "会泽", "陆良", "罗平", "马龙", "曲靖市", "师宗", "宣威", "沾益"],
            ["江城", "景东", "景谷", "澜沧", "孟连", "墨江", "普洱", "思茅市", "西盟", "镇沅"],
            ["富宁", "广南", "麻栗坡", "马关", "丘北", "文山", "西畴", "砚山"],
            ["景洪", "勐海", "勐腊"],
            ["澄江", "峨山", "华宁", "江川", "通海", "新平", "易门", "玉溪市", "元江"],
            ["大关", "鲁甸", "巧家", "水富", "绥江", "威信", "盐津", "彝良", "永善", "昭通市", "镇雄"]
        ],
        [
            ["淳安", "富阳", "杭州市", "建德", "临安", "桐庐"],
            ["安吉", "长兴", "德清", "湖州市"],
            ["海宁", "海盐", "嘉善", "嘉兴市", "平湖", "桐乡"],
            ["东阳", "金华市", "兰溪", "磐安", "浦江", "武义", "义乌", "永康"],
            ["缙云", "景宁", "丽水市", "龙泉", "青田", "庆元", "松阳", "遂昌", "云和"],
            ["慈溪", "奉化", "宁波市", "宁海", "象山", "余姚"],
            ["常山", "江山", "开化", "龙游", "衢州市"],
            ["上虞", "绍兴市", "绍兴县", "嵊州", "新昌", "诸暨"],
            ["临海", "三门", "台州市", "天台", "温岭", "仙居", "玉环"],
            ["苍南", "洞头", "乐清", "平阳", "瑞安", "泰顺", "温州市", "文成", "永嘉"],
            ["岱山", "嵊泗", "舟山市"]
        ],
        [
            ["巴南"],
            ["北碚"],
            ["璧山"],
            ["长寿"],
            ["城口"],
            ["大渡口"],
            ["大足"],
            ["垫江"],
            ["丰都"],
            ["奉节"],
            ["涪陵"],
            ["合川"],
            ["江北"],
            ["江津"],
            ["九龙坡"],
            ["开县"],
            ["梁平"],
            ["南岸"],
            ["南川"],
            ["彭水"],
            ["綦江"],
            ["黔江"],
            ["荣昌"],
            ["沙坪坝"],
            ["石柱"],
            ["双桥"],
            ["铜梁"],
            ["潼南"],
            ["万盛"],
            ["万州"],
            ["巫山"],
            ["巫溪"],
            ["武隆"],
            ["秀山"],
            ["永川"],
            ["酉阳"],
            ["渝北"],
            ["渝中"],
            ["云阳"],
            ["忠县"]
        ],
        [
            ["阿根廷"],
            ["埃及"],
            ["爱尔兰"],
            ["奥地利"],
            ["奥克兰"],
            ["澳大利亚"],
            ["巴基斯坦"],
            ["巴西"],
            ["保加利亚"],
            ["比利时"],
            ["冰岛"],
            ["朝鲜"],
            ["丹麦"],
            ["德国"],
            ["俄罗斯"],
            ["法国"],
            ["菲律宾"],
            ["芬兰"],
            ["哥伦比亚"],
            ["韩国"],
            ["荷兰"],
            ["加拿大"],
            ["柬埔寨"],
            ["喀麦隆"],
            ["老挝"],
            ["卢森堡"],
            ["罗马尼亚"],
            ["马达加斯加"],
            ["马来西亚"],
            ["毛里求斯"],
            ["美国"],
            ["秘鲁"],
            ["缅甸"],
            ["墨西哥"],
            ["南非"],
            ["尼泊尔"],
            ["挪威"],
            ["葡萄牙"],
            ["其它地区"],
            ["日本"],
            ["瑞典"],
            ["瑞士"],
            ["斯里兰卡"],
            ["泰国"],
            ["土耳其"],
            ["委内瑞拉"],
            ["文莱"],
            ["乌克兰"],
            ["西班牙"],
            ["希腊"],
            ["新加坡"],
            ["新西兰"],
            ["匈牙利"],
            ["以色列"],
            ["意大利"],
            ["印度"],
            ["印度尼西亚"],
            ["英国"],
            ["越南"],
            ["智利"]
        ]
    ];
    $.fn.ProvinceCity = function() {
        var _self = this;
        _self.data("province", ["请选择", ""]);
        _self.data("city1", ["请选择", ""]);
        _self.append('<select id="province" name="province"></select>');
        _self.append('<select id="city" name="city"></select>');
        var $sel1 = _self.find("select").eq(0);
        var $sel2 = _self.find("select").eq(1);
        if (_self.data("province")) {
            $sel1.append("<option value='" + _self.data("province")[1] + "'>" + _self.data("province")[0] + "</option>")
        }
        $.each(GP, function(index, data) {
            $sel1.append("<option value='" + data + "'>" + data + "</option>")
        });
        if (_self.data("city1")) {
            $sel2.append("<option value='" + _self.data("city1")[1] + "'>" + _self.data("city1")[0] + "</option>")
        }
        if (_self.data("city2")) {}
        var index1 = "";
        $sel1.change(function() {
            $sel2[0].options.length = 0;
            index1 = this.selectedIndex;
            if (index1 == 0) {
                if (_self.data("city1")) {
                    $sel2.append("<option value='" + _self.data("city1")[1] + "'>" + _self.data("city1")[0] + "</option>")
                }
                if (_self.data("city2")) {}
            } else {
                $.each(GT[index1 - 1], function(index, data) {
                    $sel2.append("<option value='" + data + "'>" + data + "</option>")
                });
                $.each(GC[index1 - 1][0], function(index, data) {})
            }
        }).change();
        var index2 = "";
        $sel2.change(function() {
            index2 = this.selectedIndex;
            $.each(GC[index1 - 1][index2], function(index, data) {})
        });
        return _self
    }
});
define("xg/eid-company/1.0.0/c/js/provincesData-debug", [], function(require, exports, module) {
    exports.GP = ["安徽", "澳门", "北京", "福建", "甘肃", "广东", "广西", "贵州", "海南", "河北", "河南", "黑龙江", "湖北", "湖南", "吉林", "江苏", "江西", "辽宁", "内蒙古", "宁夏", "青海", "山东", "山西", "陕西", "上海", "四川", "台湾", "天津", "西藏", "香港", "新疆", "云南", "浙江", "重庆", "海外"];
    exports.GT = [
        ["合肥", "安庆", "蚌埠", "亳州", "巢湖", "池州", "滁州", "阜阳", "淮北", "淮南", "黄山", "六安", "马鞍山", "宿州", "铜陵", "芜湖", "宣城"],
        ["澳门"],
        ["昌平", "朝阳", "崇文", "大兴", "东城", "房山", "丰台", "海淀", "怀柔", "门头沟", "密云", "平谷", "石景山", "顺义", "通州", "西城", "宣武", "延庆"],
        ["福州", "龙岩", "南平", "宁德", "莆田", "泉州", "三明", "厦门", "漳州"],
        ["兰州", "白银", "定西", "甘南", "嘉峪关", "金昌", "酒泉", "临夏", "陇南", "平凉", "庆阳", "天水", "武威", "张掖"],
        ["广州", "潮州", "东莞", "佛山", "河源", "惠州", "江门", "揭阳", "茂名", "梅州", "清远", "汕头", "汕尾", "韶关", "深圳", "阳江", "云浮", "湛江", "肇庆", "中山", "珠海"],
        ["桂林", "百色", "北海", "崇左", "防城港", "贵港", "河池", "贺州", "来宾", "柳州", "南宁", "钦州", "梧州", "玉林"],
        ["贵阳", "安顺", "毕节", "六盘水", "黔东南", "黔南", "黔西南", "铜仁", "遵义"],
        ["海口", "白沙", "保亭", "昌江", "澄迈", "儋州", "定安", "东方", "乐东", "临高", "陵水", "南沙群岛", "琼海", "琼中", "三亚", "屯昌", "万宁", "文昌", "五指山", "西沙群岛", "中沙群岛"],
        ["石家庄", "保定", "沧州", "承德", "邯郸", "衡水", "廊坊", "秦皇岛", "唐山", "邢台", "张家口"],
        ["郑州", "安阳", "鹤壁", "焦作", "开封", "洛阳", "漯河", "南阳", "平顶山", "濮阳", "三门峡", "商丘", "新乡", "信阳", "许昌", "周口", "驻马店"],
        ["哈尔滨", "大庆", "大兴安岭", "鹤岗", "黑河", "鸡西", "佳木斯", "牡丹江", "七台河", "齐齐哈尔", "双鸭山", "绥化", "伊春"],
        ["武汉", "鄂州", "恩施", "黄冈", "黄石", "荆门", "荆州", "潜江", "神农架", "十堰", "随州", "天门", "仙桃", "咸宁", "襄樊", "孝感", "宜昌"],
        ["长沙", "常德", "郴州", "衡阳", "怀化", "娄底", "邵阳", "湘潭", "湘西", "益阳", "永州", "岳阳", "张家界", "株洲"],
        ["长春", "白城", "白山", "吉林", "辽源", "四平", "松原", "通化", "延边"],
        ["南京", "常州", "淮安", "连云港", "南通", "苏州", "宿迁", "泰州", "无锡", "徐州", "盐城", "扬州", "镇江"],
        ["南昌", "抚州", "赣州", "吉安", "景德镇", "九江", "萍乡", "上饶", "新余", "宜春", "鹰潭"],
        ["沈阳", "鞍山", "本溪", "朝阳", "大连", "丹东", "抚顺", "阜新", "葫芦岛", "锦州", "辽阳", "盘锦", "铁岭", "营口"],
        ["呼和浩特", "阿拉善", "巴彦淖尔", "包头", "赤峰", "鄂尔多斯", "呼伦贝尔", "通辽", "乌海", "乌兰察布", "锡林郭勒", "兴安"],
        ["银川", "固原", "石嘴山", "吴忠", "中卫"],
        ["西宁", "果洛", "海北", "海东", "海南", "海西", "黄南", "玉树"],
        ["济南", "滨州", "德州", "东营", "菏泽", "济宁", "莱芜", "聊城", "临沂", "青岛", "日照", "泰安", "威海", "潍坊", "烟台", "枣庄", "淄博"],
        ["太原", "长治", "大同", "晋城", "晋中", "临汾", "吕梁", "朔州", "忻州", "阳泉", "运城"],
        ["西安", "安康", "宝鸡", "汉中", "商洛", "铜川", "渭南", "咸阳", "延安", "榆林"],
        ["宝山", "长宁", "崇明", "奉贤", "虹口", "黄浦", "嘉定", "金山", "静安", "卢湾", "闵行", "南汇", "浦东", "普陀", "青浦", "松江", "徐汇", "杨浦", "闸北"],
        ["成都", "阿坝", "巴中", "达州", "德阳", "甘孜", "广安", "广元", "乐山", "凉山", "泸州", "眉山", "绵阳", "内江", "南充", "攀枝花", "遂宁", "雅安", "宜宾", "资阳", "自贡"],
        ["台北", "阿莲", "安定", "安平", "八德", "八里", "白河", "白沙", "板桥", "褒忠", "宝山", "卑南", "北斗", "北港", "北门", "北埔", "北投", "补子", "布袋", "草屯", "长宾", "长治", "潮州", "车城", "成功", "城中区", "池上", "春日", "刺桐", "高雄", "花莲", "基隆", "嘉义", "苗栗", "南投", "屏东", "台东", "台南", "台中", "桃园", "新竹", "宜兰", "彰化"],
        ["宝坻", "北辰", "大港", "东丽", "汉沽", "和平", "河北", "河东", "河西", "红桥", "蓟县", "津南", "静海", "南开", "宁河", "塘沽", "武清", "西青"],
        ["拉萨", "阿里", "昌都", "林芝", "那曲", "日喀则", "山南"],
        ["北区", "大埔区", "东区", "观塘区", "黄大仙区", "九龙", "葵青区", "离岛区", "南区", "荃湾区", "沙田区", "深水埗区", "屯门区", "湾仔区", "西贡区", "香港", "新界", "油尖旺区", "元朗区", "中西区"],
        ["乌鲁木齐", "阿克苏", "阿拉尔", "阿勒泰", "巴音郭楞", "博尔塔拉", "昌吉", "哈密", "和田", "喀什", "克拉玛依", "克孜勒苏柯尔克孜", "石河子", "塔城", "图木舒克", "吐鲁番", "五家渠", "伊犁"],
        ["昆明", "保山", "楚雄", "大理", "德宏", "迪庆", "红河", "丽江", "临沧", "怒江", "曲靖", "思茅", "文山", "西双版纳", "玉溪", "昭通"],
        ["杭州", "湖州", "嘉兴", "金华", "丽水", "宁波", "衢州", "绍兴", "台州", "温州", "舟山"],
        ["巴南", "北碚", "璧山", "长寿", "城口", "大渡口", "大足", "垫江", "丰都", "奉节", "涪陵", "合川", "江北", "江津", "九龙坡", "开县", "梁平", "南岸", "南川", "彭水", "綦江", "黔江", "荣昌", "沙坪坝", "石柱", "双桥", "铜梁", "潼南", "万盛", "万州", "巫山", "巫溪", "武隆", "秀山", "永川", "酉阳", "渝北", "渝中", "云阳", "忠县"],
        ["阿根廷", "埃及", "爱尔兰", "奥地利", "奥克兰", "澳大利亚", "巴基斯坦", "巴西", "保加利亚", "比利时", "冰岛", "朝鲜", "丹麦", "德国", "俄罗斯", "法国", "菲律宾", "芬兰", "哥伦比亚", "韩国", "荷兰", "加拿大", "柬埔寨", "喀麦隆", "老挝", "卢森堡", "罗马尼亚", "马达加斯加", "马来西亚", "毛里求斯", "美国", "秘鲁", "缅甸", "墨西哥", "南非", "尼泊尔", "挪威", "葡萄牙", "其它地区", "日本", "瑞典", "瑞士", "斯里兰卡", "泰国", "土耳其", "委内瑞拉", "文莱", "乌克兰", "西班牙", "希腊", "新加坡", "新西兰", "匈牙利", "以色列", "意大利", "印度", "印度尼西亚", "英国", "越南", "智利"]
    ];
    exports.GC = [
        [
            ["长丰", "肥东", "肥西", "合肥市"],
            ["安庆市", "枞阳", "怀宁", "潜山", "宿松", "太湖", "桐城", "望江", "岳西"],
            ["蚌埠市", "固镇", "怀远", "五河"],
            ["亳州市", "利辛", "蒙城", "涡阳"],
            ["巢湖市", "含山", "和县", "庐江", "无为"],
            ["池州市", "东至", "青阳", "石台"],
            ["滁州市", "定远", "凤阳", "来安", "明光", "全椒", "天长"],
            ["阜南", "阜阳市", "界首", "临泉", "太和", "颍上"],
            ["淮北市", "濉溪"],
            ["凤台", "淮南市"],
            ["黄山市", "祁门", "歙县", "休宁", "黟县"],
            ["霍邱", "霍山", "金寨", "六安市", "寿县", "舒城"],
            ["当涂", "马鞍山市"],
            ["砀山", "灵璧", "泗县", "宿州市", "萧县"],
            ["铜陵市", "铜陵县"],
            ["繁昌", "南陵", "芜湖市", "芜湖县"],
            ["广德", "绩溪", "泾县", "旌德", "郎溪", "宁国", "宣城市"]
        ],
        [
            ["澳门"]
        ],
        [
            ["昌平"],
            ["朝阳"],
            ["崇文"],
            ["大兴"],
            ["东城"],
            ["房山"],
            ["丰台"],
            ["海淀"],
            ["怀柔"],
            ["门头沟"],
            ["密云"],
            ["平谷"],
            ["石景山"],
            ["顺义"],
            ["通州"],
            ["西城"],
            ["宣武"],
            ["延庆"]
        ],
        [
            ["长乐", "福清", "福州市", "连江", "罗源", "闽侯", "闽清", "平潭", "永泰"],
            ["长汀", "连城", "龙岩市", "上杭", "武平", "永定", "漳平"],
            ["光泽", "建瓯", "建阳", "南平市", "浦城", "邵武", "顺昌", "松溪", "武夷山", "政和"],
            ["福安", "福鼎", "古田", "宁德市", "屏南", "寿宁", "霞浦", "柘荣", "周宁"],
            ["莆田市", "仙游"],
            ["安溪", "德化", "惠安", "金门", "晋江", "南安", "泉州市", "石狮", "永春"],
            ["大田", "建宁", "将乐", "明溪", "宁化", "清流", "三明市", "沙县", "泰宁", "永安", "尤溪"],
            ["厦门市"],
            ["长泰", "东山", "华安", "龙海", "南靖", "平和", "云霄", "漳浦", "漳州市", "诏安"]
        ],
        [
            ["皋兰", "兰州市", "永登", "榆中"],
            ["白银市", "会宁", "景泰", "靖远"],
            ["定西市", "临洮", "陇西", "岷县", "通渭", "渭源", "漳县"],
            ["迭部", "合作", "临潭", "碌曲", "玛曲", "夏河", "舟曲", "卓尼"],
            ["嘉峪关市"],
            ["金昌市", "永昌"],
            ["阿克塞", "敦煌", "瓜州", "金塔", "酒泉市", "肃北", "玉门"],
            ["东乡族", "广河", "和政", "积石山", "康乐", "临夏市", "临夏县", "永靖"],
            ["成县", "宕昌", "徽县", "康县", "礼县", "两当", "陇南市", "文县", "西和"],
            ["崇信", "华亭", "泾川", "静宁", "灵台", "平凉市", "庄浪"],
            ["合水", "华池", "环县", "宁县", "庆城", "庆阳市", "镇原", "正宁"],
            ["甘谷", "秦安", "清水", "天水市", "武山", "张家川"],
            ["古浪", "民勤", "天祝", "武威市"],
            ["高台", "临泽", "民乐", "山丹", "肃南", "张掖市"]
        ],
        [
            ["从化", "广州市", "增城"],
            ["潮安", "潮州市", "饶平"],
            ["东莞"],
            ["佛山市"],
            ["东源", "和平", "河源市", "连平", "龙川", "紫金"],
            ["博罗", "惠东", "惠州市", "龙门"],
            ["恩平", "鹤山", "江门市", "开平", "台山"],
            ["惠来", "揭东", "揭西", "揭阳市", "普宁"],
            ["电白", "高州", "化州", "茂名市", "信宜"],
            ["大埔", "丰顺", "蕉岭", "梅县", "梅州市", "平远", "五华", "兴宁"],
            ["佛冈", "连南", "连山", "连州", "清新", "清远市", "阳山", "英德"],
            ["南澳", "汕头市"],
            ["海丰", "陆丰", "陆河", "汕尾市"],
            ["乐昌", "南雄", "仁化", "乳源", "韶关市", "始兴", "翁源", "新丰"],
            ["深圳市"],
            ["阳春", "阳东", "阳江市", "阳西"],
            ["罗定", "新兴", "郁南", "云安", "云浮市"],
            ["雷州", "廉江", "遂溪", "吴川", "徐闻", "湛江市"],
            ["德庆", "封开", "高要", "广宁", "怀集", "四会", "肇庆市"],
            ["中山市"],
            ["珠海市"]
        ],
        [
            ["恭城", "灌阳", "桂林市", "荔蒲", "临桂", "灵川", "龙胜", "平乐", "全州", "兴安", "阳朔", "永福", "资源"],
            ["百色市", "德保", "靖西", "乐业", "凌云", "隆林", "那坡", "平果", "田东", "田林", "田阳", "西林"],
            ["北海市", "合浦"],
            ["崇左市", "大新", "扶绥", "龙州", "宁明", "凭祥", "天等"],
            ["东兴", "防城港市", "上思"],
            ["贵港市", "桂平", "平南"],
            ["巴马", "大化", "东兰", "都安", "凤山", "河池市", "环江", "罗城", "南丹", "天峨", "宜州"],
            ["富川", "贺州市", "昭平", "钟山"],
            ["合山", "金秀", "来宾市", "武宣", "象州", "忻城"],
            ["柳城", "柳江", "柳州市", "鹿寨", "融安", "融水", "三江"],
            ["宾阳", "横县", "隆安", "马山", "南宁市", "上林", "武鸣"],
            ["灵山", "浦北", "钦州市"],
            ["苍梧", "岑溪", "蒙山", "藤县", "梧州市"],
            ["北流", "博白", "陆川", "容县", "兴业", "玉林市"]
        ],
        [
            ["贵阳市", "开阳", "清镇", "息烽", "修文"],
            ["安顺市", "关岭", "平坝", "普定", "镇宁", "紫云"],
            ["毕节市", "大方", "赫章", "金沙", "纳雍", "黔西", "威宁", "织金"],
            ["六盘水市", "六枝", "盘县", "水城"],
            ["岑巩", "从江", "丹寨", "黄平", "剑河", "锦屏", "凯里", "雷山", "黎平", "麻江", "榕江", "三穗", "施秉", "台江", "天柱", "镇远"],
            ["长顺", "都匀", "独山", "福泉", "贵定", "惠水", "荔波", "龙里", "罗甸", "平塘", "三都", "瓮安"],
            ["安龙", "册亨", "普安", "晴隆", "望谟", "兴仁", "兴义", "贞丰"],
            ["德江", "江口", "石阡", "思南", "松桃", "铜仁市", "万山", "沿河", "印江", "玉屏"],
            ["赤水", "道真", "凤冈", "湄潭", "仁怀", "绥阳", "桐梓", "务川", "习水", "余庆", "正安", "遵义市", "遵义县"]
        ],
        [
            ["海口"],
            ["白沙"],
            ["保亭"],
            ["昌江"],
            ["澄迈"],
            ["儋州"],
            ["定安"],
            ["东方"],
            ["乐东"],
            ["临高"],
            ["陵水"],
            ["南沙群岛"],
            ["琼海"],
            ["琼中"],
            ["三亚"],
            ["屯昌"],
            ["万宁"],
            ["文昌"],
            ["五指山"],
            ["西沙群岛"],
            ["中沙群岛"]
        ],
        [
            ["藁城", "晋州", "井陉", "灵寿", "鹿泉", "栾城", "平山", "深泽", "石家庄市", "无极", "辛集", "新乐", "行唐", "元氏", "赞皇", "赵县", "正定", "高邑"],
            ["安国", "安新", "保定市", "博野", "定兴", "定州", "阜平", "高碑店", "高阳", "涞水", "涞源", "蠡县", "满城", "清苑", "曲阳", "容城", "顺平", "唐县", "望都", "雄县", "徐水", "易县", "涿州"],
            ["泊头", "沧县", "沧州市", "东光", "海兴", "河间", "黄骅", "孟村", "南皮", "青县", "任丘", "肃宁", "吴桥", "献县", "盐山"],
            ["承德市", "承德县", "丰宁", "宽城", "隆化", "滦平", "平泉", "围场", "兴隆"],
            ["成安", "磁县", "大名", "肥乡", "馆陶", "广平", "邯郸市", "邯郸县", "鸡泽", "临漳", "邱县", "曲周", "涉县", "魏县", "武安", "永年"],
            ["安平", "阜城", "故城", "衡水市", "冀州", "景县", "饶阳", "深州", "武强", "武邑", "枣强"],
            ["霸州", "大厂", "大城", "固安", "廊坊市", "三河", "文安", "香河", "永清"],
            ["昌黎", "抚宁", "卢龙", "秦皇岛市", "青龙"],
            ["乐亭", "滦南", "滦县", "迁安", "迁西", "唐海", "唐山市", "玉田", "遵化"],
            ["柏乡", "广宗", "巨鹿", "临城", "临西", "隆尧", "内丘", "南宫", "南和", "宁晋", "平乡", "清河", "任县", "沙河", "威县", "新河", "邢台市", "邢台县"],
            ["赤城", "崇礼", "沽源", "怀安", "怀来", "康保", "尚义", "万全", "蔚县", "宣化", "阳原", "张北", "张家口市", "涿鹿"]
        ],
        [
            ["登封", "巩义", "新密", "新郑", "荥阳", "郑州市", "中牟"],
            ["安阳市", "安阳县", "滑县", "林州", "内黄", "汤阴"],
            ["鹤壁市", "浚县", "淇县"],
            ["博爱", "济源", "焦作市", "孟州", "沁阳", "温县", "武陟", "修武"],
            ["开封市", "开封县", "兰考", "杞县", "通许", "尉氏"],
            ["栾川", "洛宁", "洛阳市", "孟津", "汝阳", "嵩县", "新安", "偃师", "伊川", "宜阳"],
            ["临颍", "漯河市", "舞阳"],
            ["邓州", "方城", "内乡", "南阳市", "南召", "社旗", "唐河", "桐柏", "西峡", "淅川", "新野", "镇平"],
            ["宝丰", "郏县", "鲁山", "平顶山市", "汝州", "舞钢", "叶县"],
            ["范县", "南乐", "濮阳市", "濮阳县", "清丰", "台前"],
            ["灵宝", "卢氏", "三门峡市", "陕县", "渑池", "义马"],
            ["民权", "宁陵", "商丘市", "睢县", "夏邑", "永城", "虞城", "柘城"],
            ["长垣", "封丘", "辉县", "获嘉", "卫辉", "新乡市", "新乡县", "延津", "原阳"],
            ["固始", "光山", "淮滨", "潢川", "罗山", "商城", "息县", "新县", "信阳市"],
            ["长葛", "襄城", "许昌市", "许昌县", "鄢陵", "禹州"],
            ["郸城", "扶沟", "淮阳", "鹿邑", "商水", "沈丘", "太康", "西华", "项城", "周口市"],
            ["泌阳", "平舆", "确山", "汝南", "上蔡", "遂平", "西平", "新蔡", "正阳", "驻马店市"]
        ],
        [
            ["巴彦", "宾县", "方正", "哈尔滨市", "木兰", "尚志", "双城", "通河", "五常", "延寿", "依兰"],
            ["大庆市", "杜尔伯特", "林甸", "肇源", "肇州"],
            ["呼玛", "呼中", "加格达奇", "漠河", "松岭", "塔河", "新林"],
            ["鹤岗市", "萝北", "绥滨"],
            ["北安", "黑河市", "嫩江", "孙吴", "五大连池", "逊克"],
            ["虎林", "鸡东", "鸡西市", "密山"],
            ["抚远", "富锦", "桦川", "桦南", "佳木斯市", "汤原", "同江"],
            ["东宁", "海林", "林口", "牡丹江市", "穆棱", "宁安", "绥芬河"],
            ["勃利", "七台河"],
            ["拜泉", "富裕", "甘南", "克东", "克山", "龙江", "讷河", "齐齐哈尔市", "泰来", "依安"],
            ["宝清", "集贤", "饶河", "双鸭山市", "友谊"],
            ["安达", "海伦", "兰西", "明水", "青冈", "庆安", "绥化市", "绥棱", "望奎", "肇东"],
            ["嘉荫", "铁力", "伊春市"]
        ],
        [
            ["武汉市"],
            ["鄂州市"],
            ["巴东", "恩施市", "鹤峰", "建始", "来凤", "利川", "咸丰", "宣恩"],
            ["红安", "黄冈市", "黄梅", "罗田", "麻城", "蕲春", "团风", "武穴", "浠水", "英山"],
            ["大冶", "黄石", "阳新"],
            ["京山", "荆门市", "沙洋", "钟祥"],
            ["公安", "洪湖", "监利", "江陵", "荆州市", "石首", "松滋"],
            ["潜江"],
            ["神农架"],
            ["丹江口", "房县", "十堰市", "郧西", "郧县", "竹山", "竹溪"],
            ["广水", "随州市"],
            ["天门市"],
            ["仙桃市"],
            ["赤壁", "崇阳", "嘉鱼", "通城", "通山", "咸宁市"],
            ["保康", "谷城", "老河口", "南漳", "襄樊市", "宜城", "枣阳"],
            ["安陆", "大悟", "汉川", "孝昌", "孝感市", "应城", "云梦"],
            ["长阳", "当阳", "五峰", "兴山", "宜昌市", "宜都", "远安", "枝江", "秭归"]
        ],
        [
            ["长沙市", "长沙县", "浏阳", "宁乡", "望城"],
            ["安乡", "常德市", "汉寿", "津市", "澧县", "临澧", "石门", "桃源"],
            ["安仁", "郴州市", "桂东", "桂阳", "嘉禾", "临武", "汝城", "宜章", "永兴", "资兴"],
            ["常宁", "衡东", "衡南", "衡山", "衡阳市", "衡阳县", "耒阳", "祁东"],
            ["辰溪", "洪江", "怀化市", "会同", "靖州", "麻阳", "通道", "新晃", "溆浦", "沅陵", "芷江", "中方"],
            ["冷水江", "涟源", "娄底市", "双峰", "新化"],
            ["城步", "洞口", "隆回", "邵东", "邵阳市", "邵阳县", "绥宁", "武冈", "新宁", "新邵"],
            ["韶山", "湘潭市", "湘潭县", "湘乡"],
            ["保靖", "凤凰", "古丈", "花垣", "吉首", "龙山", "泸溪", "永顺"],
            ["安化", "南县", "桃江", "益阳市", "沅江"],
            ["道县", "东安", "江华", "江永", "蓝山", "宁远", "祁阳", "双牌", "新田", "永州市"],
            ["华容", "临湘", "汨罗", "平江", "湘阴", "岳阳市", "岳阳县"],
            ["慈利", "桑植", "张家界市"],
            ["茶陵", "醴陵", "炎陵", "攸县", "株洲市", "株洲县"]
        ],
        [
            ["长春市", "德惠", "九台", "农安", "榆树"],
            ["白城市", "大安", "洮南", "通榆", "镇赉"],
            ["白山", "长白", "抚松", "靖宇", "临江"],
            ["桦甸", "吉林市", "蛟河", "磐石", "舒兰", "永吉"],
            ["东丰", "东辽", "辽源市"],
            ["公主岭", "梨树", "双辽", "四平市", "伊通"],
            ["长岭", "扶余", "前郭尔罗斯", "乾安", "松原市"],
            ["辉南", "集安", "柳河", "梅河口", "通化市", "通化县"],
            ["延吉市", "敦化", "和龙", "珲春", "龙井", "图们", "汪清", "安图"]
        ],
        [
            ["高淳", "溧水", "南京市"],
            ["常州市", "金坛", "溧阳"],
            ["洪泽", "淮安市", "金湖", "涟水", "盱眙"],
            ["东海", "赣榆", "灌南", "灌云", "连云港市"],
            ["海安", "海门", "南通市", "启东", "如东", "如皋", "通州"],
            ["常熟", "昆山", "苏州市", "太仓", "吴江", "张家港"],
            ["沭阳", "泗洪", "泗阳", "宿迁市"],
            ["姜堰", "靖江", "泰兴", "泰州市", "兴化"],
            ["江阴", "无锡市", "宜兴"],
            ["丰县", "沛县", "邳州", "睢宁", "铜山", "新沂", "徐州市"],
            ["滨海", "大丰", "东台", "阜宁", "建湖", "射阳", "响水", "盐城市"],
            ["宝应", "高邮", "江都", "扬州市", "仪征"],
            ["丹阳", "句容", "扬中", "镇江市"]
        ],
        [
            ["安义", "进贤", "南昌市", "南昌县", "新建"],
            ["崇仁", "东乡", "抚州市", "广昌", "金溪", "乐安", "黎川", "南城", "南丰", "宜黄", "资溪"],
            ["安远", "崇义", "大余", "定南", "赣县", "赣州市", "会昌", "龙南", "南康", "宁都", "全南", "瑞金", "上犹", "石城", "信丰", "兴国", "寻乌", "于都"],
            ["安福", "吉安市", "吉安县", "吉水", "井冈山", "遂川", "泰和", "万安", "峡江", "新干", "永丰", "永新"],
            ["浮梁", "景德镇市", "乐平"],
            ["德安", "都昌", "湖口", "九江市", "九江县", "彭泽", "瑞昌", "武宁", "星子", "修水", "永修"],
            ["莲花", "芦溪", "萍乡市", "上栗"],
            ["德兴", "广丰", "横峰", "鄱阳", "铅山", "上饶市", "上饶县", "万年", "婺源", "弋阳", "余干", "玉山"],
            ["分宜", "新余市"],
            ["丰城", "奉新", "高安", "靖安", "上高", "铜鼓", "万载", "宜春市", "宜丰", "樟树"],
            ["贵溪", "鹰潭市", "余江"]
        ],
        [
            ["法库", "康平", "辽中", "沈阳市", "新民"],
            ["鞍山市", "海城", "台安", "岫岩"],
            ["本溪市", "本溪县", "桓仁"],
            ["北票", "朝阳市", "朝阳县", "建平", "喀喇沁左翼", "凌源"],
            ["长海", "大连市", "普兰店", "瓦房店", "庄河"],
            ["丹东市", "东港", "凤城", "宽甸"],
            ["抚顺市", "抚顺县", "清原", "新宾"],
            ["阜新市", "阜新县", "彰武"],
            ["葫芦岛市", "建昌", "绥中", "兴城"],
            ["北镇", "黑山", "锦州市", "凌海", "义县"],
            ["灯塔", "辽阳市", "辽阳县"],
            ["大洼", "盘锦市", "盘山"],
            ["昌图", "调兵山", "开原", "铁岭市", "铁岭县", "西丰"],
            ["大石桥", "盖州", "营口市"]
        ],
        [
            ["和林格尔", "呼和浩特市", "清水河", "土默特左旗", "托克托", "武川"],
            ["阿拉善右旗", "阿拉善左旗", "额济纳旗"],
            ["巴彦淖尔市", "磴口", "杭锦后旗", "乌拉特后旗", "乌拉特前旗", "乌拉特中旗", "五原"],
            ["包头市", "达尔罕茂明安联合旗", "固阳", "土默特右旗"],
            ["阿鲁科尔沁旗", "敖汉旗", "巴林右旗", "巴林左旗", "赤峰市", "喀喇沁旗", "克什克腾旗", "林西", "宁城", "翁牛特旗"],
            ["达拉特旗", "鄂尔多斯市", "鄂托克旗", "鄂托克前旗", "杭锦旗", "乌审旗", "伊金霍洛旗", "准格尔旗"],
            ["阿荣旗", "陈巴尔虎旗", "额尔古纳", "鄂伦春旗", "鄂温克族旗", "根河", "呼伦贝尔市", "满洲里", "莫力达瓦旗", "新巴尔虎右旗", "新巴尔虎左旗", "牙克石", "扎兰屯"],
            ["霍林郭勒", "开鲁", "科尔沁左翼后旗", "科尔沁左翼中旗", "库伦旗", "奈曼旗", "通辽市", "扎鲁特旗"],
            ["乌海"],
            ["察哈尔右翼后旗", "察哈尔右翼前旗", "察哈尔右翼中旗", "丰镇", "化德", "凉城", "商都", "四子王旗", "乌兰察布市", "兴和", "卓资"],
            ["阿巴嘎旗", "东乌珠穆沁旗", "多伦", "二连浩特", "苏尼特右旗", "苏尼特左旗", "太仆寺旗", "西乌珠穆沁旗", "锡林郭勒市", "镶黄旗", "正蓝旗", "正镶白旗"],
            ["阿尔山", "科尔沁右翼前旗", "科尔沁右翼中旗", "突泉", "乌兰浩特", "扎赉特旗"]
        ],
        [
            ["贺兰", "灵武", "银川市", "永宁"],
            ["固原市", "泾源", "隆德", "彭阳", "西吉"],
            ["平罗", "石嘴山市"],
            ["青铜峡", "同心", "吴忠市", "盐池"],
            ["海原", "中宁", "中卫市"]
        ],
        [
            ["大通", "湟源", "湟中", "西宁市"],
            ["班玛", "达日", "甘德", "久治", "玛多", "玛沁"],
            ["刚察", "海晏", "门源", "祁连"],
            ["互助", "化隆", "乐都", "民和", "平安", "循化"],
            ["共和", "贵德", "贵南", "同德", "兴海"],
            ["大柴旦", "德令哈", "都兰", "格尔木", "冷湖", "茫崖", "天峻", "乌兰"],
            ["河南", "尖扎", "同仁", "泽库"],
            ["称多", "囊谦", "曲麻莱", "玉树", "杂多", "治多"]
        ],
        [
            ["济南市", "济阳", "平阴", "商河", "章丘"],
            ["滨州市", "博兴", "惠民", "无棣", "阳信", "沾化", "邹平"],
            ["德州市", "乐陵", "临邑", "陵县", "宁津", "平原", "齐河", "庆云", "武城", "夏津", "禹城"],
            ["东营市", "广饶", "垦利", "利津"],
            ["曹县", "成武", "单县", "定陶", "东明", "菏泽市", "巨野", "鄄城", "郓城"],
            ["济宁市", "嘉祥", "金乡", "梁山", "曲阜", "泗水", "微山", "汶上", "兖州", "鱼台", "邹城"],
            ["莱芜市"],
            ["茌平", "东阿", "高唐", "冠县", "聊城市", "临清", "莘县", "阳谷"],
            ["苍山", "费县", "莒南", "临沭", "临沂市", "蒙阴", "平邑", "郯城", "沂南", "沂水"],
            ["即墨", "胶南", "胶州", "莱西", "平度", "青岛市"],
            ["莒县", "日照市", "五莲"],
            ["东平", "肥城", "宁阳", "泰安市", "新泰"],
            ["荣成", "乳山", "威海市", "文登"],
            ["安丘", "昌乐", "昌邑", "高密", "临朐", "青州", "寿光", "潍坊市", "诸城"],
            ["长岛", "海阳", "莱阳", "莱州", "龙口", "蓬莱", "栖霞", "烟台市", "招远"],
            ["滕州", "枣庄市"],
            ["高青", "桓台", "沂源", "淄博市"]
        ],
        [
            ["古交", "娄烦", "清徐", "太原市", "阳曲"],
            ["长治市", "长治县", "长子", "壶关", "黎城", "潞城", "平顺", "沁县", "沁源", "屯留", "武乡", "襄垣"],
            ["大同市", "大同县", "广灵", "浑源", "灵丘", "天镇", "阳高", "左云"],
            ["高平", "晋城市", "陵川", "沁水", "阳城", "泽州"],
            ["和顺", "介休", "晋中市", "灵石", "平遥", "祁县", "寿阳", "太谷", "昔阳", "榆社", "左权"],
            ["安泽", "大宁", "汾西", "浮山", "古县", "洪洞", "侯马", "霍州", "吉县", "临汾市", "蒲县", "曲沃", "隰县", "乡宁", "襄汾", "翼城", "永和"],
            ["方山", "汾阳", "交城", "交口", "岚县", "临县", "柳林", "吕梁市", "石楼", "文水", "孝义", "兴县", "中阳"],
            ["怀仁", "山阴", "朔州市", "应县", "右玉"],
            ["保德", "代县", "定襄", "繁峙", "河曲", "静乐", "岢岚", "宁武", "偏关", "神池", "五台", "五寨", "忻州市", "原平"],
            ["平定", "阳泉市", "盂县"],
            ["河津", "稷山", "绛县", "临猗", "平陆", "芮城", "万荣", "闻喜", "夏县", "新绛", "永济", "垣曲", "运城市"]
        ],
        [
            ["高陵", "户县", "蓝田", "西安市", "周至"],
            ["安康市", "白河", "汉阴", "岚皋", "宁陕", "平利", "石泉", "旬阳", "镇坪", "紫阳"],
            ["宝鸡市", "凤县", "凤翔", "扶风", "麟游", "陇县", "眉县", "岐山", "千阳", "太白"],
            ["城固", "佛坪", "汉中市", "留坝", "略阳", "勉县", "南郑", "宁强", "西乡", "洋县", "镇巴"],
            ["丹凤", "洛南", "山阳", "商洛市", "商南", "镇安", "柞水"],
            ["铜川市", "宜君"],
            ["白水", "澄城", "大荔", "富平", "韩城", "合阳", "华县", "华阴", "蒲城", "潼关", "渭南市"],
            ["彬县", "长武", "淳化", "泾阳", "礼泉", "乾县", "三原", "武功", "咸阳市", "兴平", "旬邑", "永寿"],
            ["安塞", "富县", "甘泉", "黄陵", "黄龙", "洛川", "吴起", "延安市", "延长", "延川", "宜川", "志丹", "子长"],
            ["定边", "府谷", "横山", "佳县", "靖边", "米脂", "清涧", "神木", "绥德", "吴堡", "榆林市", "子洲"]
        ],
        [
            ["宝山"],
            ["长宁"],
            ["崇明"],
            ["奉贤"],
            ["虹口"],
            ["黄浦"],
            ["嘉定"],
            ["金山"],
            ["静安"],
            ["卢湾"],
            ["闵行"],
            ["南汇"],
            ["浦东"],
            ["普陀"],
            ["青浦"],
            ["松江"],
            ["徐汇"],
            ["杨浦"],
            ["闸北"]
        ],
        [
            ["成都市", "崇州", "大邑", "都江堰", "金堂", "彭州", "郫县", "蒲江", "邛崃", "双流", "新津"],
            ["阿坝", "黑水", "红原", "金川", "九寨沟", "理县", "马尔康", "茂县", "壤塘", "若尔盖", "松潘", "汶川", "小金"],
            ["巴中市", "南江", "平昌", "通江"],
            ["达县", "达州市", "大竹", "开江", "渠县", "万源", "宣汉"],
            ["德阳市", "广汉", "罗江", "绵竹", "什邡", "中江"],
            ["巴塘", "白玉", "丹巴", "道孚", "稻城", "得荣", "德格", "甘孜", "九龙", "康定", "理塘", "泸定", "炉霍", "色达", "石渠", "乡城", "新龙", "雅江"],
            ["广安市", "华蓥", "邻水", "武胜", "岳池"],
            ["苍溪", "广元市", "剑阁", "青川", "旺苍"],
            ["峨边", "峨眉山", "夹江", "犍为", "井研", "乐山市", "马边", "沐川"],
            ["布拖", "德昌", "甘洛", "会东", "会理", "金阳", "雷波", "美姑", "冕宁", "木里", "宁南", "普格", "西昌", "喜德", "盐源", "越西", "昭觉"],
            ["古蔺", "合江", "泸县", "泸州市", "叙永"],
            ["丹棱", "洪雅", "眉山市", "彭山", "青神", "仁寿"],
            ["安县", "北川", "江油", "绵阳市", "平武", "三台", "盐亭", "梓潼"],
            ["隆昌", "内江市", "威远", "资中"],
            ["阆中", "南部", "南充市", "蓬安", "西充", "仪陇", "营山"],
            ["米易", "攀枝花市", "盐边"],
            ["大英", "蓬溪", "射洪", "遂宁市"],
            ["宝兴", "汉源", "芦山", "名山", "石棉", "天全", "雅安市", "荥经"],
            ["长宁", "高县", "珙县", "江安", "筠连", "南溪", "屏山", "兴文", "宜宾市", "宜宾县"],
            ["安岳", "简阳", "乐至", "资阳市"],
            ["富顺", "荣县", "自贡市"]
        ],
        [
            ["台北"],
            ["阿莲"],
            ["安定"],
            ["安平"],
            ["八德"],
            ["八里"],
            ["白河"],
            ["白沙"],
            ["板桥"],
            ["褒忠"],
            ["宝山"],
            ["卑南"],
            ["北斗"],
            ["北港"],
            ["北门"],
            ["北埔"],
            ["北投"],
            ["补子"],
            ["布袋"],
            ["草屯"],
            ["长宾"],
            ["长治"],
            ["潮州"],
            ["车城"],
            ["成功"],
            ["城中区"],
            ["池上"],
            ["春日"],
            ["刺桐"],
            ["高雄"],
            ["花莲"],
            ["基隆"],
            ["嘉义"],
            ["苗栗"],
            ["南投"],
            ["屏东"],
            ["台东"],
            ["台南"],
            ["台中"],
            ["桃园"],
            ["新竹"],
            ["宜兰"],
            ["彰化"]
        ],
        [
            ["宝坻"],
            ["北辰"],
            ["大港"],
            ["东丽"],
            ["汉沽"],
            ["和平"],
            ["河北"],
            ["河东"],
            ["河西"],
            ["红桥"],
            ["蓟县"],
            ["津南"],
            ["静海"],
            ["南开"],
            ["宁河"],
            ["塘沽"],
            ["武清"],
            ["西青"]
        ],
        [
            ["达孜", "当雄", "堆龙德庆", "拉萨市", "林周", "墨竹工卡", "尼木", "曲水"],
            ["措勤", "噶尔", "改则", "革吉", "普兰", "日土", "札达"],
            ["八宿", "边坝", "察雅", "昌都", "丁青", "贡觉", "江达", "类乌齐", "洛隆", "芒康", "左贡"],
            ["波密", "察隅", "工布江达", "朗县", "林芝", "米林", "墨脱"],
            ["安多", "巴青", "班戈", "比如", "嘉黎", "那曲", "尼玛", "聂荣", "申扎", "索县"],
            ["昂仁", "白朗", "定结", "定日", "岗巴", "吉隆", "江孜", "康马", "拉孜", "南木林", "聂拉木", "仁布", "日喀则市", "萨嘎", "萨迦", "谢通门", "亚东", "仲巴"],
            ["措美", "错那", "贡嘎", "加查", "浪卡子", "隆子", "洛扎", "乃东", "琼结", "曲松", "桑日", "扎囊"]
        ],
        [
            ["北区"],
            ["大埔区"],
            ["东区"],
            ["观塘区"],
            ["黄大仙区"],
            ["九龙"],
            ["葵青区"],
            ["离岛区"],
            ["南区"],
            ["荃湾区"],
            ["沙田区"],
            ["深水埗区"],
            ["屯门区"],
            ["湾仔区"],
            ["西贡区"],
            ["香港"],
            ["新界"],
            ["油尖旺区"],
            ["元朗区"],
            ["中西区"]
        ],
        [
            ["乌鲁木齐市", "乌鲁木齐县"],
            ["阿克苏市", "阿瓦提", "拜城", "柯坪", "库车", "沙雅", "温宿", "乌什", "新和"],
            ["阿拉尔"],
            ["阿勒泰", "布尔津", "福海", "富蕴", "哈巴河", "吉木乃", "青河"],
            ["博湖", "和静", "和硕", "库尔勒", "轮台", "且末", "若羌", "尉犁", "焉耆"],
            ["博乐", "精河", "温泉"],
            ["昌吉市", "阜康", "呼图壁", "吉木萨尔", "玛纳斯", "米泉", "木垒", "奇台"],
            ["巴里坤", "哈密市", "伊吾"],
            ["策勒", "和田市", "和田县", "洛浦", "民丰", "墨玉", "皮山", "于田"],
            ["巴楚", "伽师", "喀什市", "麦盖提", "莎车", "疏附", "疏勒", "塔什库尔干塔吉克", "叶城", "英吉沙", "岳普湖", "泽普"],
            ["克拉玛依"],
            ["阿合奇", "阿克陶", "阿图什", "乌恰"],
            ["石河子"],
            ["额敏", "和布克赛尔", "沙湾", "塔城市", "托里", "乌苏", "裕民"],
            ["图木舒克"],
            ["鄯善", "吐鲁番市", "托克逊"],
            ["五家渠"],
            ["察布查尔锡伯", "巩留", "霍城", "奎屯", "尼勒克", "特克斯", "新源", "伊宁市", "伊宁县", "昭苏"]
        ],
        [
            ["安宁", "呈贡", "富民", "晋宁", "昆明市", "禄劝", "石林", "嵩明", "寻甸", "宜良"],
            ["保山市", "昌宁", "龙陵", "施甸", "腾冲"],
            ["楚雄市", "大姚", "禄丰", "牟定", "南华", "双柏", "武定", "姚安", "永仁", "元谋"],
            ["宾川", "大理市", "洱源", "鹤庆", "剑川", "弥渡", "南涧", "巍山", "祥云", "漾濞", "永平", "云龙"],
            ["梁河", "陇川", "潞西", "瑞丽", "盈江"],
            ["德钦", "维西", "香格里拉"],
            ["个旧", "河口", "红河", "建水", "金平", "开远", "泸西", "绿春", "蒙自", "弥勒", "屏边", "石屏", "元阳"],
            ["华坪", "丽江市", "宁蒗", "永胜", "玉龙"],
            ["沧源", "凤庆", "耿马", "临沧市", "双江", "永德", "云县", "镇康"],
            ["福贡", "贡山", "兰坪", "泸水"],
            ["富源", "会泽", "陆良", "罗平", "马龙", "曲靖市", "师宗", "宣威", "沾益"],
            ["江城", "景东", "景谷", "澜沧", "孟连", "墨江", "普洱", "思茅市", "西盟", "镇沅"],
            ["富宁", "广南", "麻栗坡", "马关", "丘北", "文山", "西畴", "砚山"],
            ["景洪", "勐海", "勐腊"],
            ["澄江", "峨山", "华宁", "江川", "通海", "新平", "易门", "玉溪市", "元江"],
            ["大关", "鲁甸", "巧家", "水富", "绥江", "威信", "盐津", "彝良", "永善", "昭通市", "镇雄"]
        ],
        [
            ["淳安", "富阳", "杭州市", "建德", "临安", "桐庐"],
            ["安吉", "长兴", "德清", "湖州市"],
            ["海宁", "海盐", "嘉善", "嘉兴市", "平湖", "桐乡"],
            ["东阳", "金华市", "兰溪", "磐安", "浦江", "武义", "义乌", "永康"],
            ["缙云", "景宁", "丽水市", "龙泉", "青田", "庆元", "松阳", "遂昌", "云和"],
            ["慈溪", "奉化", "宁波市", "宁海", "象山", "余姚"],
            ["常山", "江山", "开化", "龙游", "衢州市"],
            ["上虞", "绍兴市", "绍兴县", "嵊州", "新昌", "诸暨"],
            ["临海", "三门", "台州市", "天台", "温岭", "仙居", "玉环"],
            ["苍南", "洞头", "乐清", "平阳", "瑞安", "泰顺", "温州市", "文成", "永嘉"],
            ["岱山", "嵊泗", "舟山市"]
        ],
        [
            ["巴南"],
            ["北碚"],
            ["璧山"],
            ["长寿"],
            ["城口"],
            ["大渡口"],
            ["大足"],
            ["垫江"],
            ["丰都"],
            ["奉节"],
            ["涪陵"],
            ["合川"],
            ["江北"],
            ["江津"],
            ["九龙坡"],
            ["开县"],
            ["梁平"],
            ["南岸"],
            ["南川"],
            ["彭水"],
            ["綦江"],
            ["黔江"],
            ["荣昌"],
            ["沙坪坝"],
            ["石柱"],
            ["双桥"],
            ["铜梁"],
            ["潼南"],
            ["万盛"],
            ["万州"],
            ["巫山"],
            ["巫溪"],
            ["武隆"],
            ["秀山"],
            ["永川"],
            ["酉阳"],
            ["渝北"],
            ["渝中"],
            ["云阳"],
            ["忠县"]
        ],
        [
            ["阿根廷"],
            ["埃及"],
            ["爱尔兰"],
            ["奥地利"],
            ["奥克兰"],
            ["澳大利亚"],
            ["巴基斯坦"],
            ["巴西"],
            ["保加利亚"],
            ["比利时"],
            ["冰岛"],
            ["朝鲜"],
            ["丹麦"],
            ["德国"],
            ["俄罗斯"],
            ["法国"],
            ["菲律宾"],
            ["芬兰"],
            ["哥伦比亚"],
            ["韩国"],
            ["荷兰"],
            ["加拿大"],
            ["柬埔寨"],
            ["喀麦隆"],
            ["老挝"],
            ["卢森堡"],
            ["罗马尼亚"],
            ["马达加斯加"],
            ["马来西亚"],
            ["毛里求斯"],
            ["美国"],
            ["秘鲁"],
            ["缅甸"],
            ["墨西哥"],
            ["南非"],
            ["尼泊尔"],
            ["挪威"],
            ["葡萄牙"],
            ["其它地区"],
            ["日本"],
            ["瑞典"],
            ["瑞士"],
            ["斯里兰卡"],
            ["泰国"],
            ["土耳其"],
            ["委内瑞拉"],
            ["文莱"],
            ["乌克兰"],
            ["西班牙"],
            ["希腊"],
            ["新加坡"],
            ["新西兰"],
            ["匈牙利"],
            ["以色列"],
            ["意大利"],
            ["印度"],
            ["印度尼西亚"],
            ["英国"],
            ["越南"],
            ["智利"]
        ]
    ]
});
define("xg/eid-company/1.0.0/p/adminAccount/customerManageH/addCustomerH-debug.handlebars", ["alinw/handlebars/1.3.0/runtime-debug"], function(require, exports, module) {
    var Handlebars = require("alinw/handlebars/1.3.0/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, ">= 1.0.0"];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        return '  <div id="modal-addCustomer" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\r\n    <div class="modal-dialog">\r\n      <div class="modal-content radius">\r\n        <div class="modal-header">\r\n          <h5 class="modal-title">新增客户</h5>\r\n          <a class="close" data-dismiss="modal" aria-hidden="true" href="javascript:void();">×</a>\r\n        </div>\r\n        <form class="form form-horizontal" id="addCustomerForm">\r\n          <div class="modal-body">\r\n              <div class="row cl">\r\n                <label class="form-label col-xs-4 col-sm-3">客户名称：</label>\r\n                <div class="formControls col-xs-8 col-sm-8">\r\n                  <input type="text" class="input-text" placeholder="客户名称" name="companyName" id="companyName">\r\n                </div>\r\n              </div>\r\n              <div class="row cl">\r\n                <label class="form-label col-xs-4 col-sm-3">客户类型：</label>\r\n                <div class="formControls col-xs-8 col-sm-8">\r\n                  <select name="typeId" id="typeId">\r\n                    <option value="">请选择客户类型</option>\r\n                  </select>\r\n                  <input type="hidden" name="typeName" id="typeName" value="">\r\n                </div>\r\n              </div>\r\n              <div class="row cl">\r\n                <label class="form-label col-xs-4 col-sm-3">联系人：</label>\r\n                <div class="formControls col-xs-8 col-sm-8">\r\n                  <input type="text" class="input-text" autocomplete="off" placeholder="联系人" name="linkMan" id="linkMan">\r\n                </div>\r\n              </div>\r\n              <div class="row cl">\r\n                <label class="form-label col-xs-4 col-sm-3">手机号码：</label>\r\n                <div class="formControls col-xs-8 col-sm-8">\r\n                  <input type="text" class="input-text" autocomplete="off" placeholder="手机号码" name="phone" id="phone">\r\n                </div>\r\n              </div>\r\n              <div class="row cl">\r\n                <label class="form-label col-xs-4 col-sm-3">省市：</label>\r\n                <div class="formControls col-xs-8 col-sm-9">\r\n                  <div id="province_city"></div>\r\n                  <!-- <input type="hidden" id="customer_province" name="province" value="">\r\n                  <input type="hidden" id="customer_city" name="city" value=""> -->\r\n                </div>\r\n              </div>\r\n              <div class="row cl">\r\n                <label class="form-label col-xs-4 col-sm-3">详细地址：</label>\r\n                <div class="formControls col-xs-8 col-sm-8">\r\n                  <textarea class="textarea" placeholder="详细地址..." rows="" cols="" name="address" id="address"></textarea>\r\n                </div>\r\n              </div>\r\n          </div>\r\n          <div class="modal-footer">\r\n            <input class="btn btn-primary" type="submit" value="提交">\r\n            <!-- <button type="submit" class="btn btn-primary">确定</button> -->\r\n            <button class="btn" data-dismiss="modal" aria-hidden="true">关闭</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>'
    })
});
define("xg/eid-company/1.0.0/p/adminAccount/customerManageH/customerMH-debug.handlebars", ["alinw/handlebars/1.3.0/runtime-debug"], function(require, exports, module) {
    var Handlebars = require("alinw/handlebars/1.3.0/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, ">= 1.0.0"];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        return '<div class="col-xs-4">\r\n  <button class="btn radius btn-primary" id="addCustomer">新增</button>\r\n</div>          \r\n<form id="customer_searchForm" class="col-xs-8">\t\r\n\t<div class="col-xs-5">\r\n\t\t<label class="form-label col-xs-4 col-sm-4">客户名称：</label>\r\n\t\t<div class="formControls col-xs-8 col-sm-8">\r\n\t\t  <input type="text" class="input-text" placeholder="请输入客户名称" name="companyName" id="companyName">\r\n\t\t</div>\r\n\t</div>\r\n\t<div class="col-xs-5">\r\n\t\t<label class="form-label col-xs-4 col-sm-4">联系人：</label>\r\n\t\t<div class="formControls col-xs-8 col-sm-8">\r\n\t\t  <input type="text" class="input-text" autocomplete="off" placeholder="请输入联系人" name="linkMan" id="linkMan">\r\n\t\t</div>\r\n\t</div>\r\n\t<input class="btn btn-default col-xs-2" type="submit" id="search_button" value="搜索">\r\n</form>'
    })
});
define("xg/eid-company/1.0.0/p/adminAccount/customerManageH/customerTableH-debug.handlebars", ["alinw/handlebars/1.3.0/runtime-debug"], function(require, exports, module) {
    var Handlebars = require("alinw/handlebars/1.3.0/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, ">= 1.0.0"];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        var buffer = "",
            stack1, functionType = "function",
            escapeExpression = this.escapeExpression,
            self = this,
            helperMissing = helpers.helperMissing;

        function program1(depth0, data) {
            var buffer = "",
                stack1;
            buffer += "\r\n";
            stack1 = helpers.each.call(depth0, depth0, {
                hash: {},
                inverse: self.noop,
                fn: self.program(2, program2, data),
                data: data
            });
            if (stack1 || stack1 === 0) {
                buffer += stack1
            }
            buffer += "\r\n";
            return buffer
        }

        function program2(depth0, data) {
            var buffer = "",
                stack1, helper, options;
            buffer += "\r\n    <tr>\r\n        <td>";
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
            buffer += escapeExpression(stack1) + "</td>\r\n        <td>";
            if (helper = helpers.typeName) {
                stack1 = helper.call(depth0, {
                    hash: {},
                    data: data
                })
            } else {
                helper = depth0 && depth0.typeName;
                stack1 = typeof helper === functionType ? helper.call(depth0, {
                    hash: {},
                    data: data
                }) : helper
            }
            buffer += escapeExpression(stack1) + "</td>\r\n        <td>";
            if (helper = helpers.linkMan) {
                stack1 = helper.call(depth0, {
                    hash: {},
                    data: data
                })
            } else {
                helper = depth0 && depth0.linkMan;
                stack1 = typeof helper === functionType ? helper.call(depth0, {
                    hash: {},
                    data: data
                }) : helper
            }
            buffer += escapeExpression(stack1) + "</td>\r\n        <td>";
            if (helper = helpers.phone) {
                stack1 = helper.call(depth0, {
                    hash: {},
                    data: data
                })
            } else {
                helper = depth0 && depth0.phone;
                stack1 = typeof helper === functionType ? helper.call(depth0, {
                    hash: {},
                    data: data
                }) : helper
            }
            buffer += escapeExpression(stack1) + "</td>\r\n        <td>";
            if (helper = helpers.province) {
                stack1 = helper.call(depth0, {
                    hash: {},
                    data: data
                })
            } else {
                helper = depth0 && depth0.province;
                stack1 = typeof helper === functionType ? helper.call(depth0, {
                    hash: {},
                    data: data
                }) : helper
            }
            buffer += escapeExpression(stack1);
            if (helper = helpers.city) {
                stack1 = helper.call(depth0, {
                    hash: {},
                    data: data
                })
            } else {
                helper = depth0 && depth0.city;
                stack1 = typeof helper === functionType ? helper.call(depth0, {
                    hash: {},
                    data: data
                }) : helper
            }
            buffer += escapeExpression(stack1);
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
            buffer += escapeExpression(stack1) + "</td>\r\n        ";
            stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
                hash: {},
                inverse: self.program(5, program5, data),
                fn: self.program(3, program3, data),
                data: data
            }, helper ? helper.call(depth0, depth0 && depth0.status, "==", 0, options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.status, "==", 0, options));
            if (stack1 || stack1 === 0) {
                buffer += stack1
            }
            buffer += "\r\n        <td>";
            if (helper = helpers.deviceCount) {
                stack1 = helper.call(depth0, {
                    hash: {},
                    data: data
                })
            } else {
                helper = depth0 && depth0.deviceCount;
                stack1 = typeof helper === functionType ? helper.call(depth0, {
                    hash: {},
                    data: data
                }) : helper
            }
            buffer += escapeExpression(stack1) + '</td>\r\n        <td><a href="/company/customerDetail.htm?companyId=';
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
            buffer += escapeExpression(stack1) + '" class="detailInfor">详情</a></td>\r\n    </tr>\r\n';
            return buffer
        }

        function program3(depth0, data) {
            return '<td class="c-red">禁用</td>'
        }

        function program5(depth0, data) {
            return '<td class="c-green">启用</td>'
        }

        function program7(depth0, data) {
            return '\r\n    <tr>\r\n        <td class="text-c" colspan="8">暂无数据</td>\r\n    </tr>\r\n'
        }
        buffer += '<thead class="text-c">\r\n  <tr>\r\n    <th>客户名称</th>\r\n    <th>客户类型</th>\r\n    <th>联系人</th>\r\n    <th>联系电话</th>\r\n    <th>地址</th>\r\n    <th>状态</th>\r\n    <th>设备数量</th>\r\n    <th>操作</th>\r\n  </tr>\r\n</thead>\r\n<tbody class="text-c">\r\n';
        stack1 = helpers["if"].call(depth0, depth0, {
            hash: {},
            inverse: self.program(7, program7, data),
            fn: self.program(1, program1, data),
            data: data
        });
        if (stack1 || stack1 === 0) {
            buffer += stack1
        }
        buffer += " \r\n</tbody>";
        return buffer
    })
});
define("xg/eid-company/1.0.0/p/adminAccount/deviceManage-debug", ["jquery/jquery/1.10.1/jquery-debug", "xg/eid-company/1.0.0/c/js/tools-debug", "xg/eid-company/1.0.0/c/js/bootstrap-debug", "xg/eid-company/1.0.0/c/js/jquery-debug.validate", "xg/eid-company/1.0.0/c/js/validate-add-methods-debug", "xg/eid-company/1.0.0/c/js/validate-messages-cn-debug", "xg/eid-company/1.0.0/c/js/moment-debug", "xg/eid-company/1.0.0/c/handlebars/headerTmp-debug.handlebars", "xg/eid-company/1.0.0/c/handlebars/modifyPassword-debug.handlebars", "xg/eid-company/1.0.0/c/handlebars/modifyInfo-debug.handlebars", "xg/eid-company/1.0.0/c/handlebars/showCheckInfo-debug.handlebars", "xg/eid-company/1.0.0/c/handlebars/versionH-debug.handlebars", "xg/eid-company/1.0.0/p/adminAccount/deviceManageH/deviceMH-debug.handlebars", "xg/eid-company/1.0.0/p/adminAccount/deviceManageH/deviceTableH-debug.handlebars", "xg/eid-company/1.0.0/p/adminAccount/deviceManageH/enDisableH-debug.handlebars"], function(require, exports, module) {
    var $ = require("jquery/jquery/1.10.1/jquery-debug"),
        tools = require("xg/eid-company/1.0.0/c/js/tools-debug");
    var deviceMH = require("xg/eid-company/1.0.0/p/adminAccount/deviceManageH/deviceMH-debug.handlebars"),
        deviceTableH = require("xg/eid-company/1.0.0/p/adminAccount/deviceManageH/deviceTableH-debug.handlebars"),
        enDisableH = require("xg/eid-company/1.0.0/p/adminAccount/deviceManageH/enDisableH-debug.handlebars"),
        data = {
            pageIndex: 1,
            pageSize: 10,
            usingTime: "all",
            stopUsingTime: "all"
        };
    var deviceManage = {
        init: function() {
            var self = this;
            $(".customerM").html(deviceMH());
            self.deviceList();
            self.searchDevice();
            self.useTimeTab();
            self.disableTimeTab()
        },
        useTimeTab: function() {
            var self = this;
            var useTimeBtn = $("#useTime a");
            useTimeBtn.on("click", function() {
                var _this = $(this);
                useTimeBtn.removeClass("current");
                _this.addClass("current");
                data.usingTime = _this.data("usingtime");
                data.companyName = $("#companyName").val();
                data.childName = $("#childName").val();
                data.macId = $("#macId").val();
                data.pageIndex = 1;
                self.deviceList()
            })
        },
        disableTimeTab: function() {
            var self = this;
            var disableTimeBtn = $("#disableTime a");
            disableTimeBtn.on("click", function() {
                var _this = $(this);
                disableTimeBtn.removeClass("current");
                _this.addClass("current");
                data.stopUsingTime = _this.data("stopusingtime");
                data.companyName = $("#companyName").val();
                data.childName = $("#childName").val();
                data.macId = $("#macId").val();
                data.pageIndex = 1;
                self.deviceList()
            })
        },
        deviceList: function() {
            var self = this;
            $.ajax({
                type: "post",
                url: "/company/device/master/list.json",
                data: data,
                success: function(data, status, xhr) {
                    if (data.code == -1) {
                        alert(data.error)
                    } else {
                        $(".deviceTable").html(deviceTableH(data.list));
                        self.pagerInit(data.count);
                        self.enDisOption()
                    }
                },
                error: function(xhr, errorType, error) {
                    alert(error)
                }
            })
        },
        pagerInit: function(totalcount) {
            var self = this;
            if (totalcount > 0) {
                $("#pager").show()
            } else {
                $("#pager").hide()
            }
            $("#pager").pager({
                pagenumber: data.pageIndex,
                pagecount: Math.ceil(totalcount / data.pageSize),
                totalcount: totalcount,
                buttonClickCallback: function(pageclickednumber) {
                    data.pageIndex = pageclickednumber;
                    self.deviceList()
                }
            })
        },
        searchDevice: function() {
            var self = this;
            var validate = $("#device_searchForm").validate({
                debug: true,
                focusInvalid: false,
                onkeyup: false,
                onblur: true,
                submitHandler: function(form) {
                    data.companyName = $("#companyName").val();
                    data.childName = $("#childName").val();
                    data.macId = $("#macId").val();
                    data.pageIndex = 1;
                    self.deviceList()
                }
            })
        },
        enDisOption: function() {
            $(".enDisable").on("click", function() {
                var _this = $(this);
                var endisData = {
                    deviceId: _this.data("deviceid"),
                    forbidden: _this.data("forbidden"),
                    optionText: _this.html(),
                    deviceMac: _this.data("devicemac")
                };
                $("section").after(enDisableH(endisData));
                $("#modal-endisable").modal("show");
                var validate = $("#endisableForm").validate({
                    debug: true,
                    focusInvalid: false,
                    onkeyup: false,
                    onblur: true,
                    submitHandler: function(form) {
                        $.ajax({
                            type: "post",
                            url: "/company/device/master/forbidden.json",
                            data: $("#endisableForm").serialize(),
                            success: function(data, status, xhr) {
                                if (data.code == -1) {
                                    alert(data.error)
                                } else {
                                    alert("操作成功");
                                    setTimeout(function() {
                                        window.location.reload()
                                    }, 500)
                                }
                            },
                            error: function(xhr, errorType, error) {
                                alert(error)
                            }
                        })
                    }
                });
                $("#modal-endisable").on("hidden.bs.modal", function(e) {
                    $("section").nextAll().remove()
                })
            })
        }
    };
    module.exports = deviceManage
});
define("xg/eid-company/1.0.0/p/adminAccount/deviceManageH/deviceMH-debug.handlebars", ["alinw/handlebars/1.3.0/runtime-debug"], function(require, exports, module) {
    var Handlebars = require("alinw/handlebars/1.3.0/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, ">= 1.0.0"];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        return '<div class="col-xs-12">\r\n<div class="queryBox mt-10 text" id="useTime">\r\n    <label class="labelText w70 pull-left text-r">使用时间：</label>\r\n    <a href="javascript:void(0)" data-usingtime="all" class="btn btn-link current">全部</a>\r\n    <a href="javascript:void(0)" data-usingtime="threeDay" class="btn btn-link">最近三天</a>\r\n    <a href="javascript:void(0)" data-usingtime="week" class="btn btn-link">最近一周</a>\r\n    <a href="javascript:void(0)" data-usingtime="month" class="btn btn-link">最近一月</a>\r\n    <!-- <input class="btn btn-link radius" type="button" value="全部">\r\n    <input class="btn btn-link radius" type="button" value="最近三天">\r\n    <input class="btn btn-link radius" type="button" value="最近一周">\r\n    <input class="btn btn-link radius" type="button" value="最近一月"> -->\r\n</div>\r\n<div class="queryBox mt-10 text" id="disableTime">\r\n    <label class="labelText w70 pull-left text-r">停用时间：</label>\r\n    <a href="javascript:void(0)" data-stopusingtime="all" class="btn btn-link current">全部</a>\r\n    <a href="javascript:void(0)" data-stopusingtime="week" class="btn btn-link">停用一周</a>\r\n    <a href="javascript:void(0)" data-stopusingtime="month" class="btn btn-link">停用一月</a>\r\n    <a href="javascript:void(0)" data-stopusingtime="halfYear" class="btn btn-link">停用六个月</a>\r\n    <!-- <input class="btn btn-link radius" type="button" value="全部">\r\n    <input class="btn btn-link radius" type="button" value="最近一周">\r\n    <input class="btn btn-link radius" type="button" value="最近一月">\r\n    <input class="btn btn-link radius" type="button" value="最近六个月"> -->\r\n</div>\r\n</div>\r\n<div class="col-xs-12 borderTop">\r\n    <form id="device_searchForm" class="col-xs-8">\r\n        <div class="col-xs-4">\r\n            <label class="form-label col-xs-4 col-sm-5">客户名称：</label>\r\n            <div class="formControls col-xs-8 col-sm-7">\r\n              <input type="text" class="input-text" placeholder="客户名称" name="companyName" id="companyName">\r\n            </div>\r\n        </div>\r\n        <div class="col-xs-3">\r\n            <label class="form-label col-xs-4 col-sm-5">门店名称：</label>\r\n            <div class="formControls col-xs-8 col-sm-7">\r\n              <input type="text" class="input-text" placeholder="门店名称" name="childName" id="childName">\r\n            </div>\r\n        </div>\r\n        <div class="col-xs-4">\r\n            <label class="form-label col-xs-4 col-sm-5">MAC地址：</label>\r\n            <div class="formControls col-xs-8 col-sm-7">\r\n              <input type="text" class="input-text" autocomplete="off" placeholder="设备MAC地址" name="macId" id="macId">\r\n            </div>\r\n        </div>\r\n        <input class="btn btn-default col-xs-1" type="submit" id="search_button" value="搜索">\r\n    </form>\r\n</div>\r\n'
    })
});
define("xg/eid-company/1.0.0/p/adminAccount/deviceManageH/deviceTableH-debug.handlebars", ["alinw/handlebars/1.3.0/runtime-debug"], function(require, exports, module) {
    var Handlebars = require("alinw/handlebars/1.3.0/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, ">= 1.0.0"];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        var buffer = "",
            stack1, functionType = "function",
            escapeExpression = this.escapeExpression,
            helperMissing = helpers.helperMissing,
            self = this;

        function program1(depth0, data) {
            var buffer = "",
                stack1;
            buffer += "\r\n";
            stack1 = helpers.each.call(depth0, depth0, {
                hash: {},
                inverse: self.noop,
                fn: self.program(2, program2, data),
                data: data
            });
            if (stack1 || stack1 === 0) {
                buffer += stack1
            }
            buffer += "\r\n";
            return buffer
        }

        function program2(depth0, data) {
            var buffer = "",
                stack1, helper, options;
            buffer += "\r\n  <tr>\r\n    <td>";
            stack1 = helpers["if"].call(depth0, depth0 && depth0.parentName, {
                hash: {},
                inverse: self.noop,
                fn: self.program(3, program3, data),
                data: data
            });
            if (stack1 || stack1 === 0) {
                buffer += stack1
            }
            stack1 = helpers["if"].call(depth0, depth0 && depth0.parentPhone, {
                hash: {},
                inverse: self.noop,
                fn: self.program(5, program5, data),
                data: data
            });
            if (stack1 || stack1 === 0) {
                buffer += stack1
            }
            buffer += "</td>\r\n    <td>";
            stack1 = helpers["if"].call(depth0, depth0 && depth0.childName, {
                hash: {},
                inverse: self.noop,
                fn: self.program(7, program7, data),
                data: data
            });
            if (stack1 || stack1 === 0) {
                buffer += stack1
            }
            stack1 = helpers["if"].call(depth0, depth0 && depth0.childPhone, {
                hash: {},
                inverse: self.noop,
                fn: self.program(9, program9, data),
                data: data
            });
            if (stack1 || stack1 === 0) {
                buffer += stack1
            }
            buffer += "</td>\r\n    <td>";
            stack1 = helpers["if"].call(depth0, depth0 && depth0.deviceMac, {
                hash: {},
                inverse: self.noop,
                fn: self.program(11, program11, data),
                data: data
            });
            if (stack1 || stack1 === 0) {
                buffer += stack1
            }
            buffer += "</td>\r\n    <td>";
            stack1 = helpers["if"].call(depth0, depth0 && depth0.deviceIp, {
                hash: {},
                inverse: self.noop,
                fn: self.program(13, program13, data),
                data: data
            });
            if (stack1 || stack1 === 0) {
                buffer += stack1
            }
            buffer += "</td>\r\n    ";
            stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
                hash: {},
                inverse: self.program(17, program17, data),
                fn: self.program(15, program15, data),
                data: data
            }, helper ? helper.call(depth0, depth0 && depth0.forbidden, "==", 0, options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.forbidden, "==", 0, options));
            if (stack1 || stack1 === 0) {
                buffer += stack1
            }
            buffer += "\r\n    <td>";
            stack1 = helpers["if"].call(depth0, depth0 && depth0.lastUseTime, {
                hash: {},
                inverse: self.noop,
                fn: self.program(19, program19, data),
                data: data
            });
            if (stack1 || stack1 === 0) {
                buffer += stack1
            }
            buffer += "</td>\r\n    <td>";
            stack1 = helpers["if"].call(depth0, depth0 && depth0.version, {
                hash: {},
                inverse: self.noop,
                fn: self.program(21, program21, data),
                data: data
            });
            if (stack1 || stack1 === 0) {
                buffer += stack1
            }
            buffer += "</td>\r\n    <td>\r\n        ";
            stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
                hash: {},
                inverse: self.program(25, program25, data),
                fn: self.program(23, program23, data),
                data: data
            }, helper ? helper.call(depth0, depth0 && depth0.forbidden, "==", 0, options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.forbidden, "==", 0, options));
            if (stack1 || stack1 === 0) {
                buffer += stack1
            }
            buffer += "\r\n    </td>\r\n  </tr>\r\n";
            return buffer
        }

        function program3(depth0, data) {
            var buffer = "",
                stack1, helper;
            if (helper = helpers.parentName) {
                stack1 = helper.call(depth0, {
                    hash: {},
                    data: data
                })
            } else {
                helper = depth0 && depth0.parentName;
                stack1 = typeof helper === functionType ? helper.call(depth0, {
                    hash: {},
                    data: data
                }) : helper
            }
            buffer += escapeExpression(stack1) + "/";
            return buffer
        }

        function program5(depth0, data) {
            var stack1, helper;
            if (helper = helpers.parentPhone) {
                stack1 = helper.call(depth0, {
                    hash: {},
                    data: data
                })
            } else {
                helper = depth0 && depth0.parentPhone;
                stack1 = typeof helper === functionType ? helper.call(depth0, {
                    hash: {},
                    data: data
                }) : helper
            }
            return escapeExpression(stack1)
        }

        function program7(depth0, data) {
            var buffer = "",
                stack1, helper;
            if (helper = helpers.childName) {
                stack1 = helper.call(depth0, {
                    hash: {},
                    data: data
                })
            } else {
                helper = depth0 && depth0.childName;
                stack1 = typeof helper === functionType ? helper.call(depth0, {
                    hash: {},
                    data: data
                }) : helper
            }
            buffer += escapeExpression(stack1) + "/";
            return buffer
        }

        function program9(depth0, data) {
            var stack1, helper;
            if (helper = helpers.childPhone) {
                stack1 = helper.call(depth0, {
                    hash: {},
                    data: data
                })
            } else {
                helper = depth0 && depth0.childPhone;
                stack1 = typeof helper === functionType ? helper.call(depth0, {
                    hash: {},
                    data: data
                }) : helper
            }
            return escapeExpression(stack1)
        }

        function program11(depth0, data) {
            var stack1, helper;
            if (helper = helpers.deviceMac) {
                stack1 = helper.call(depth0, {
                    hash: {},
                    data: data
                })
            } else {
                helper = depth0 && depth0.deviceMac;
                stack1 = typeof helper === functionType ? helper.call(depth0, {
                    hash: {},
                    data: data
                }) : helper
            }
            return escapeExpression(stack1)
        }

        function program13(depth0, data) {
            var stack1, helper;
            if (helper = helpers.deviceIp) {
                stack1 = helper.call(depth0, {
                    hash: {},
                    data: data
                })
            } else {
                helper = depth0 && depth0.deviceIp;
                stack1 = typeof helper === functionType ? helper.call(depth0, {
                    hash: {},
                    data: data
                }) : helper
            }
            return escapeExpression(stack1)
        }

        function program15(depth0, data) {
            return '<td class="c-red">禁用</td>'
        }

        function program17(depth0, data) {
            return '<td class="c-green">启用</td>'
        }

        function program19(depth0, data) {
            var helper, options;
            return escapeExpression((helper = helpers.formatDate || depth0 && depth0.formatDate, options = {
                hash: {},
                data: data
            }, helper ? helper.call(depth0, depth0 && depth0.lastUseTime, options) : helperMissing.call(depth0, "formatDate", depth0 && depth0.lastUseTime, options)))
        }

        function program21(depth0, data) {
            var stack1, helper;
            if (helper = helpers.version) {
                stack1 = helper.call(depth0, {
                    hash: {},
                    data: data
                })
            } else {
                helper = depth0 && depth0.version;
                stack1 = typeof helper === functionType ? helper.call(depth0, {
                    hash: {},
                    data: data
                }) : helper
            }
            return escapeExpression(stack1)
        }

        function program23(depth0, data) {
            var buffer = "",
                stack1, helper;
            buffer += '\r\n            <a href="javascript:void(0)" class="enDisable" data-forbidden="1" data-deviceid="';
            if (helper = helpers.deviceId) {
                stack1 = helper.call(depth0, {
                    hash: {},
                    data: data
                })
            } else {
                helper = depth0 && depth0.deviceId;
                stack1 = typeof helper === functionType ? helper.call(depth0, {
                    hash: {},
                    data: data
                }) : helper
            }
            buffer += escapeExpression(stack1) + '" data-devicemac="';
            if (helper = helpers.deviceMac) {
                stack1 = helper.call(depth0, {
                    hash: {},
                    data: data
                })
            } else {
                helper = depth0 && depth0.deviceMac;
                stack1 = typeof helper === functionType ? helper.call(depth0, {
                    hash: {},
                    data: data
                }) : helper
            }
            buffer += escapeExpression(stack1) + '">启用</a>\r\n        ';
            return buffer
        }

        function program25(depth0, data) {
            var buffer = "",
                stack1, helper;
            buffer += '\r\n            <a href="javascript:void(0)" class="enDisable" data-forbidden="0" data-deviceid="';
            if (helper = helpers.deviceId) {
                stack1 = helper.call(depth0, {
                    hash: {},
                    data: data
                })
            } else {
                helper = depth0 && depth0.deviceId;
                stack1 = typeof helper === functionType ? helper.call(depth0, {
                    hash: {},
                    data: data
                }) : helper
            }
            buffer += escapeExpression(stack1) + '" data-devicemac="';
            if (helper = helpers.deviceMac) {
                stack1 = helper.call(depth0, {
                    hash: {},
                    data: data
                })
            } else {
                helper = depth0 && depth0.deviceMac;
                stack1 = typeof helper === functionType ? helper.call(depth0, {
                    hash: {},
                    data: data
                }) : helper
            }
            buffer += escapeExpression(stack1) + '">禁用</a>\r\n        ';
            return buffer
        }

        function program27(depth0, data) {
            return '\r\n    <tr>\r\n        <td class="text-c" colspan="6">暂无数据</td>\r\n    </tr>\r\n'
        }
        buffer += '<thead class="text-c">\r\n    <tr>\r\n        <th>客户名称/联系电话</th>\r\n        <th>门店名称/联系电话</th>\r\n        <th>设备MAC地址</th>\r\n        <th>IP地址</th>\r\n        <th>状态</th>\r\n        <th>最后调用时间</th>\r\n        <th>设备版本号</th>\r\n        <th>操作</th>\r\n    </tr>\r\n</thead>\r\n<tbody class="text-c">\r\n';
        stack1 = helpers["if"].call(depth0, depth0, {
            hash: {},
            inverse: self.program(27, program27, data),
            fn: self.program(1, program1, data),
            data: data
        });
        if (stack1 || stack1 === 0) {
            buffer += stack1
        }
        buffer += " \r\n</tbody>";
        return buffer
    })
});
define("xg/eid-company/1.0.0/p/adminAccount/deviceManageH/enDisableH-debug.handlebars", ["alinw/handlebars/1.3.0/runtime-debug"], function(require, exports, module) {
    var Handlebars = require("alinw/handlebars/1.3.0/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, ">= 1.0.0"];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        var buffer = "",
            stack1, helper, functionType = "function",
            escapeExpression = this.escapeExpression;
        buffer += ' <div id="modal-endisable" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\r\n    <div class="modal-dialog">\r\n      <div class="modal-content radius">\r\n        <div class="modal-header">\r\n          <h5 class="modal-title">操作</h5>\r\n          <a class="close" data-dismiss="modal" aria-hidden="true" href="javascript:void();">×</a>\r\n        </div>\r\n        <form class="form form-horizontal" id="endisableForm">\r\n          <input type="hidden" name="deviceId" id="deviceId" value="';
        if (helper = helpers.deviceId) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.deviceId;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '">\r\n          <input type="hidden" name="forbidden" id="forbidden" value="';
        if (helper = helpers.forbidden) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.forbidden;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '">\r\n          <div class="modal-body">\r\n              是否';
        if (helper = helpers.optionText) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.optionText;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + "MAC地址为 <span>";
        if (helper = helpers.deviceMac) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.deviceMac;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '</span> 的设备？\r\n          </div>\r\n          <div class="modal-footer">\r\n            <input class="btn btn-primary" type="submit" value="确认">\r\n            <!-- <button type="submit" class="btn btn-primary">确定</button> -->\r\n            <button class="btn" data-dismiss="modal" aria-hidden="true">关闭</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>';
        return buffer
    })
});
define("xg/eid-company/1.0.0/p/adminAccount/inforService-debug", ["jquery/jquery/1.10.1/jquery-debug", "xg/eid-company/1.0.0/c/js/tools-debug", "xg/eid-company/1.0.0/c/js/bootstrap-debug", "xg/eid-company/1.0.0/c/js/jquery-debug.validate", "xg/eid-company/1.0.0/c/js/validate-add-methods-debug", "xg/eid-company/1.0.0/c/js/validate-messages-cn-debug", "xg/eid-company/1.0.0/c/js/moment-debug", "xg/eid-company/1.0.0/c/handlebars/headerTmp-debug.handlebars", "xg/eid-company/1.0.0/c/handlebars/modifyPassword-debug.handlebars", "xg/eid-company/1.0.0/c/handlebars/modifyInfo-debug.handlebars", "xg/eid-company/1.0.0/c/handlebars/showCheckInfo-debug.handlebars", "xg/eid-company/1.0.0/c/handlebars/versionH-debug.handlebars", "xg/eid-company/1.0.0/c/js/bootstrap-datetimepicker-debug", "xg/eid-company/1.0.0/c/js/bootstrap-datetimepicker-debug.zh-CN", "xg/eid-company/1.0.0/p/adminAccount/inforServiceH/inforServiceMH-debug.handlebars", "xg/eid-company/1.0.0/p/adminAccount/inforServiceH/inforServiceTableH-debug.handlebars"], function(require, exports, module) {
    var $ = require("jquery/jquery/1.10.1/jquery-debug"),
        tools = require("xg/eid-company/1.0.0/c/js/tools-debug");
    require("xg/eid-company/1.0.0/c/js/bootstrap-datetimepicker-debug");
    require("xg/eid-company/1.0.0/c/js/bootstrap-datetimepicker-debug.zh-CN");
    var inforServiceMH = require("xg/eid-company/1.0.0/p/adminAccount/inforServiceH/inforServiceMH-debug.handlebars"),
        inforServiceTableH = require("xg/eid-company/1.0.0/p/adminAccount/inforServiceH/inforServiceTableH-debug.handlebars"),
        data = {
            pageIndex: 1,
            pageSize: 10,
            status: "",
            queryTime: "all"
        };
    var inforService = {
        init: function() {
            var self = this;
            $(".customerM").html(inforServiceMH());
            self.datetimepicker();
            self.inforServiceList();
            self.searchInforService();
            self.statusTab();
            self.queryTimeTab()
        },
        datetimepicker: function() {
            var self = this;
            $(".customerM").find(".customStartTime").datetimepicker({
                language: "zh-CN",
                format: "yyyy-mm-dd",
                startView: 2,
                minView: 2,
                autoclose: true,
                todayBtn: 1
            });
            $(".customerM").find(".customEndTime").datetimepicker({
                language: "zh-CN",
                format: "yyyy-mm-dd",
                startView: 2,
                minView: 2,
                autoclose: true,
                todayBtn: 1
            });
            $(".customStartTime").on("click", function() {
                $(".customStartTime").datetimepicker("show");
                $(".customEndTime").datetimepicker("hide")
            });
            $(".customEndTime").on("click", function() {
                $(".customEndTime").datetimepicker("show");
                $(".customStartTime").datetimepicker("hide")
            });
            $(".customStartTime").datetimepicker().on("changeDate", function(e) {
                $("#queryTime a").removeClass("current");
                console.log($(".customStartTime").val());
                $(".customEndTime").datetimepicker("setStartDate", $(".customStartTime").val());
                if ($.trim($(".customEndTime").val()).length <= 0) {
                    $(".customEndTime").val($(".customStartTime").val())
                } else {}
                data.pageIndex = 1;
                data.customStartTime = $(".customStartTime").val();
                data.customEndTime = $(".customEndTime").val();
                data.companyName = $("#companyName").val();
                data.childName = $("#childName").val();
                data.borrowerName = $("#borrowerName").val();
                delete data["queryTime"];
                self.inforServiceList()
            });
            $(".customEndTime").datetimepicker().on("changeDate", function(e) {
                $("#queryTime a").removeClass("current");
                console.log($(".customEndTime").val());
                $(".customStartTime").datetimepicker("setEndDate", $(".customEndTime").val());
                if ($.trim($(".customStartTime").val()).length <= 0) {
                    $(".customStartTime").val($(".customEndTime").val())
                } else {}
                data.pageIndex = 1;
                data.customStartTime = $(".customStartTime").val();
                data.customEndTime = $(".customEndTime").val();
                data.companyName = $("#companyName").val();
                data.childName = $("#childName").val();
                data.borrowerName = $("#borrowerName").val();
                delete data["queryTime"];
                self.inforServiceList()
            })
        },
        statusTab: function() {
            var self = this;
            var statusBtn = $("#bankStatus a");
            statusBtn.on("click", function() {
                var _this = $(this);
                statusBtn.removeClass("current");
                _this.addClass("current");
                data.pageIndex = 1;
                data.status = _this.data("status");
                data.companyName = $("#companyName").val();
                data.childName = $("#childName").val();
                data.borrowerName = $("#borrowerName").val();
                self.inforServiceList()
            })
        },
        queryTimeTab: function() {
            var self = this;
            var queryTimeBtn = $("#queryTime a");
            queryTimeBtn.on("click", function() {
                var _this = $(this);
                queryTimeBtn.removeClass("current");
                _this.addClass("current");
                data.pageIndex = 1;
                data.queryTime = _this.data("querytime");
                data.companyName = $("#companyName").val();
                data.childName = $("#childName").val();
                data.borrowerName = $("#borrowerName").val();
                delete data["customStartTime"];
                delete data["customEndTime"];
                $(".customStartTime").val("");
                $(".customEndTime").val("");
                self.inforServiceList()
            })
        },
        inforServiceList: function() {
            var self = this;
            $.ajax({
                type: "post",
                url: "/master/borrowingInfo/list.json",
                data: data,
                success: function(data, status, xhr) {
                    if (data.code == -1) {
                        alert(data.error)
                    } else {
                        $(".inforTable").html(inforServiceTableH(data.list));
                        self.pagerInit(data.count)
                    }
                },
                error: function(xhr, errorType, error) {
                    alert(error)
                }
            })
        },
        pagerInit: function(totalcount) {
            var self = this;
            if (totalcount > 0) {
                $("#pager").show()
            } else {
                $("#pager").hide()
            }
            $("#pager").pager({
                pagenumber: data.pageIndex,
                pagecount: Math.ceil(totalcount / data.pageSize),
                totalcount: totalcount,
                buttonClickCallback: function(pageclickednumber) {
                    data.pageIndex = pageclickednumber;
                    self.inforServiceList()
                }
            })
        },
        searchInforService: function() {
            var self = this;
            var validate = $("#infor_searchForm").validate({
                debug: true,
                focusInvalid: false,
                onkeyup: false,
                onblur: true,
                submitHandler: function(form) {
                    data.pageIndex = 1;
                    data.companyName = $("#companyName").val();
                    data.childName = $("#childName").val();
                    data.borrowerName = $("#borrowerName").val();
                    self.inforServiceList()
                }
            })
        }
    };
    module.exports = inforService
});
define("xg/eid-company/1.0.0/c/js/bootstrap-datetimepicker-debug", [], function(require, exports, module) {
    ! function($) {
        if (!("indexOf" in Array.prototype)) {
            Array.prototype.indexOf = function(find, i) {
                if (i === undefined) i = 0;
                if (i < 0) i += this.length;
                if (i < 0) i = 0;
                for (var n = this.length; i < n; i++) {
                    if (i in this && this[i] === find) {
                        return i
                    }
                }
                return -1
            }
        }

        function elementOrParentIsFixed(element) {
            var $element = $(element);
            var $checkElements = $element.add($element.parents());
            var isFixed = false;
            $checkElements.each(function() {
                if ($(this).css("position") === "fixed") {
                    isFixed = true;
                    return false
                }
            });
            return isFixed
        }

        function UTCDate() {
            return new Date(Date.UTC.apply(Date, arguments))
        }

        function UTCToday() {
            var today = new Date;
            return UTCDate(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), today.getUTCHours(), today.getUTCMinutes(), today.getUTCSeconds(), 0)
        }
        var Datetimepicker = function(element, options) {
            var that = this;
            this.element = $(element);
            this.container = options.container || "body";
            this.language = options.language || this.element.data("date-language") || "en";
            this.language = this.language in dates ? this.language : this.language.split("-")[0];
            this.language = this.language in dates ? this.language : "en";
            this.isRTL = dates[this.language].rtl || false;
            this.formatType = options.formatType || this.element.data("format-type") || "standard";
            this.format = DPGlobal.parseFormat(options.format || this.element.data("date-format") || dates[this.language].format || DPGlobal.getDefaultFormat(this.formatType, "input"), this.formatType);
            this.isInline = false;
            this.isVisible = false;
            this.isInput = this.element.is("input");
            this.fontAwesome = options.fontAwesome || this.element.data("font-awesome") || false;
            this.bootcssVer = options.bootcssVer || (this.isInput ? this.element.is(".form-control") ? 3 : 2 : this.bootcssVer = this.element.is(".input-group") ? 3 : 2);
            this.component = this.element.is(".date") ? this.bootcssVer == 3 ? this.element.find(".input-group-addon .glyphicon-th, .input-group-addon .glyphicon-time, .input-group-addon .glyphicon-calendar, .input-group-addon .glyphicon-calendar, .input-group-addon .fa-calendar, .input-group-addon .fa-clock-o").parent() : this.element.find(".add-on .icon-th, .add-on .icon-time, .add-on .icon-calendar .fa-calendar .fa-clock-o").parent() : false;
            this.componentReset = this.element.is(".date") ? this.bootcssVer == 3 ? this.element.find(".input-group-addon .glyphicon-remove, .input-group-addon .fa-times").parent() : this.element.find(".add-on .icon-remove, .add-on .fa-times").parent() : false;
            this.hasInput = this.component && this.element.find("input").length;
            if (this.component && this.component.length === 0) {
                this.component = false
            }
            this.linkField = options.linkField || this.element.data("link-field") || false;
            this.linkFormat = DPGlobal.parseFormat(options.linkFormat || this.element.data("link-format") || DPGlobal.getDefaultFormat(this.formatType, "link"), this.formatType);
            this.minuteStep = options.minuteStep || this.element.data("minute-step") || 5;
            this.pickerPosition = options.pickerPosition || this.element.data("picker-position") || "bottom-right";
            this.showMeridian = options.showMeridian || this.element.data("show-meridian") || false;
            this.initialDate = options.initialDate || new Date;
            this.zIndex = options.zIndex || this.element.data("z-index") || undefined;
            this.icons = {
                leftArrow: this.fontAwesome ? "fa-arrow-left" : this.bootcssVer === 3 ? "glyphicon-arrow-left" : "icon-arrow-left",
                rightArrow: this.fontAwesome ? "fa-arrow-right" : this.bootcssVer === 3 ? "glyphicon-arrow-right" : "icon-arrow-right"
            };
            this.icontype = this.fontAwesome ? "fa" : "glyphicon";
            this._attachEvents();
            this.clickedOutside = function(e) {
                if ($(e.target).closest(".datetimepicker").length === 0) {
                    that.hide()
                }
            };
            this.formatViewType = "datetime";
            if ("formatViewType" in options) {
                this.formatViewType = options.formatViewType
            } else if ("formatViewType" in this.element.data()) {
                this.formatViewType = this.element.data("formatViewType")
            }
            this.minView = 0;
            if ("minView" in options) {
                this.minView = options.minView
            } else if ("minView" in this.element.data()) {
                this.minView = this.element.data("min-view")
            }
            this.minView = DPGlobal.convertViewMode(this.minView);
            this.maxView = DPGlobal.modes.length - 1;
            if ("maxView" in options) {
                this.maxView = options.maxView
            } else if ("maxView" in this.element.data()) {
                this.maxView = this.element.data("max-view")
            }
            this.maxView = DPGlobal.convertViewMode(this.maxView);
            this.wheelViewModeNavigation = false;
            if ("wheelViewModeNavigation" in options) {
                this.wheelViewModeNavigation = options.wheelViewModeNavigation
            } else if ("wheelViewModeNavigation" in this.element.data()) {
                this.wheelViewModeNavigation = this.element.data("view-mode-wheel-navigation")
            }
            this.wheelViewModeNavigationInverseDirection = false;
            if ("wheelViewModeNavigationInverseDirection" in options) {
                this.wheelViewModeNavigationInverseDirection = options.wheelViewModeNavigationInverseDirection
            } else if ("wheelViewModeNavigationInverseDirection" in this.element.data()) {
                this.wheelViewModeNavigationInverseDirection = this.element.data("view-mode-wheel-navigation-inverse-dir")
            }
            this.wheelViewModeNavigationDelay = 100;
            if ("wheelViewModeNavigationDelay" in options) {
                this.wheelViewModeNavigationDelay = options.wheelViewModeNavigationDelay
            } else if ("wheelViewModeNavigationDelay" in this.element.data()) {
                this.wheelViewModeNavigationDelay = this.element.data("view-mode-wheel-navigation-delay")
            }
            this.startViewMode = 2;
            if ("startView" in options) {
                this.startViewMode = options.startView
            } else if ("startView" in this.element.data()) {
                this.startViewMode = this.element.data("start-view")
            }
            this.startViewMode = DPGlobal.convertViewMode(this.startViewMode);
            this.viewMode = this.startViewMode;
            this.viewSelect = this.minView;
            if ("viewSelect" in options) {
                this.viewSelect = options.viewSelect
            } else if ("viewSelect" in this.element.data()) {
                this.viewSelect = this.element.data("view-select")
            }
            this.viewSelect = DPGlobal.convertViewMode(this.viewSelect);
            this.forceParse = true;
            if ("forceParse" in options) {
                this.forceParse = options.forceParse
            } else if ("dateForceParse" in this.element.data()) {
                this.forceParse = this.element.data("date-force-parse")
            }
            var template = this.bootcssVer === 3 ? DPGlobal.templateV3 : DPGlobal.template;
            while (template.indexOf("{iconType}") !== -1) {
                template = template.replace("{iconType}", this.icontype)
            }
            while (template.indexOf("{leftArrow}") !== -1) {
                template = template.replace("{leftArrow}", this.icons.leftArrow)
            }
            while (template.indexOf("{rightArrow}") !== -1) {
                template = template.replace("{rightArrow}", this.icons.rightArrow)
            }
            this.picker = $(template).appendTo(this.isInline ? this.element : this.container).on({
                click: $.proxy(this.click, this),
                mousedown: $.proxy(this.mousedown, this)
            });
            if (this.wheelViewModeNavigation) {
                if ($.fn.mousewheel) {
                    this.picker.on({
                        mousewheel: $.proxy(this.mousewheel, this)
                    })
                } else {
                    console.log("Mouse Wheel event is not supported. Please include the jQuery Mouse Wheel plugin before enabling this option")
                }
            }
            if (this.isInline) {
                this.picker.addClass("datetimepicker-inline")
            } else {
                this.picker.addClass("datetimepicker-dropdown-" + this.pickerPosition + " dropdown-menu")
            }
            if (this.isRTL) {
                this.picker.addClass("datetimepicker-rtl");
                var selector = this.bootcssVer === 3 ? ".prev span, .next span" : ".prev i, .next i";
                this.picker.find(selector).toggleClass(this.icons.leftArrow + " " + this.icons.rightArrow)
            }
            $(document).on("mousedown", this.clickedOutside);
            this.autoclose = false;
            if ("autoclose" in options) {
                this.autoclose = options.autoclose
            } else if ("dateAutoclose" in this.element.data()) {
                this.autoclose = this.element.data("date-autoclose")
            }
            this.keyboardNavigation = true;
            if ("keyboardNavigation" in options) {
                this.keyboardNavigation = options.keyboardNavigation
            } else if ("dateKeyboardNavigation" in this.element.data()) {
                this.keyboardNavigation = this.element.data("date-keyboard-navigation")
            }
            this.todayBtn = options.todayBtn || this.element.data("date-today-btn") || false;
            this.todayHighlight = options.todayHighlight || this.element.data("date-today-highlight") || false;
            this.weekStart = (options.weekStart || this.element.data("date-weekstart") || dates[this.language].weekStart || 0) % 7;
            this.weekEnd = (this.weekStart + 6) % 7;
            this.startDate = -Infinity;
            this.endDate = Infinity;
            this.daysOfWeekDisabled = [];
            this.setStartDate(options.startDate || this.element.data("date-startdate"));
            this.setEndDate(options.endDate || this.element.data("date-enddate"));
            this.setDaysOfWeekDisabled(options.daysOfWeekDisabled || this.element.data("date-days-of-week-disabled"));
            this.setMinutesDisabled(options.minutesDisabled || this.element.data("date-minute-disabled"));
            this.setHoursDisabled(options.hoursDisabled || this.element.data("date-hour-disabled"));
            this.fillDow();
            this.fillMonths();
            this.update();
            this.showMode();
            if (this.isInline) {
                this.show()
            }
        };
        Datetimepicker.prototype = {
            constructor: Datetimepicker,
            _events: [],
            _attachEvents: function() {
                this._detachEvents();
                if (this.isInput) {
                    this._events = [
                        [this.element, {
                            focus: $.proxy(this.show, this),
                            keyup: $.proxy(this.update, this),
                            keydown: $.proxy(this.keydown, this)
                        }]
                    ]
                } else if (this.component && this.hasInput) {
                    this._events = [
                        [this.element.find("input"), {
                            focus: $.proxy(this.show, this),
                            keyup: $.proxy(this.update, this),
                            keydown: $.proxy(this.keydown, this)
                        }],
                        [this.component, {
                            click: $.proxy(this.show, this)
                        }]
                    ];
                    if (this.componentReset) {
                        this._events.push([this.componentReset, {
                            click: $.proxy(this.reset, this)
                        }])
                    }
                } else if (this.element.is("div")) {
                    this.isInline = true
                } else {
                    this._events = [
                        [this.element, {
                            click: $.proxy(this.show, this)
                        }]
                    ]
                }
                for (var i = 0, el, ev; i < this._events.length; i++) {
                    el = this._events[i][0];
                    ev = this._events[i][1];
                    el.on(ev)
                }
            },
            _detachEvents: function() {
                for (var i = 0, el, ev; i < this._events.length; i++) {
                    el = this._events[i][0];
                    ev = this._events[i][1];
                    el.off(ev)
                }
                this._events = []
            },
            show: function(e) {
                this.picker.show();
                this.height = this.component ? this.component.outerHeight() : this.element.outerHeight();
                if (this.forceParse) {
                    this.update()
                }
                this.place();
                $(window).on("resize", $.proxy(this.place, this));
                if (e) {
                    e.stopPropagation();
                    e.preventDefault()
                }
                this.isVisible = true;
                this.element.trigger({
                    type: "show",
                    date: this.date
                })
            },
            hide: function(e) {
                if (!this.isVisible) return;
                if (this.isInline) return;
                this.picker.hide();
                $(window).off("resize", this.place);
                this.viewMode = this.startViewMode;
                this.showMode();
                if (!this.isInput) {
                    $(document).off("mousedown", this.hide)
                }
                if (this.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val())) this.setValue();
                this.isVisible = false;
                this.element.trigger({
                    type: "hide",
                    date: this.date
                })
            },
            remove: function() {
                this._detachEvents();
                $(document).off("mousedown", this.clickedOutside);
                this.picker.remove();
                delete this.picker;
                delete this.element.data().datetimepicker
            },
            getDate: function() {
                var d = this.getUTCDate();
                return new Date(d.getTime() + d.getTimezoneOffset() * 6e4)
            },
            getUTCDate: function() {
                return this.date
            },
            setDate: function(d) {
                this.setUTCDate(new Date(d.getTime() - d.getTimezoneOffset() * 6e4))
            },
            setUTCDate: function(d) {
                if (d >= this.startDate && d <= this.endDate) {
                    this.date = d;
                    this.setValue();
                    this.viewDate = this.date;
                    this.fill()
                } else {
                    this.element.trigger({
                        type: "outOfRange",
                        date: d,
                        startDate: this.startDate,
                        endDate: this.endDate
                    })
                }
            },
            setFormat: function(format) {
                this.format = DPGlobal.parseFormat(format, this.formatType);
                var element;
                if (this.isInput) {
                    element = this.element
                } else if (this.component) {
                    element = this.element.find("input")
                }
                if (element && element.val()) {
                    this.setValue()
                }
            },
            setValue: function() {
                var formatted = this.getFormattedDate();
                if (!this.isInput) {
                    if (this.component) {
                        this.element.find("input").val(formatted)
                    }
                    this.element.data("date", formatted)
                } else {
                    this.element.val(formatted)
                }
                if (this.linkField) {
                    $("#" + this.linkField).val(this.getFormattedDate(this.linkFormat))
                }
            },
            getFormattedDate: function(format) {
                if (format == undefined) format = this.format;
                return DPGlobal.formatDate(this.date, format, this.language, this.formatType)
            },
            setStartDate: function(startDate) {
                this.startDate = startDate || -Infinity;
                if (this.startDate !== -Infinity) {
                    this.startDate = DPGlobal.parseDate(this.startDate, this.format, this.language, this.formatType)
                }
                this.update();
                this.updateNavArrows()
            },
            setEndDate: function(endDate) {
                this.endDate = endDate || Infinity;
                if (this.endDate !== Infinity) {
                    this.endDate = DPGlobal.parseDate(this.endDate, this.format, this.language, this.formatType)
                }
                this.update();
                this.updateNavArrows()
            },
            setDaysOfWeekDisabled: function(daysOfWeekDisabled) {
                this.daysOfWeekDisabled = daysOfWeekDisabled || [];
                if (!$.isArray(this.daysOfWeekDisabled)) {
                    this.daysOfWeekDisabled = this.daysOfWeekDisabled.split(/,\s*/)
                }
                this.daysOfWeekDisabled = $.map(this.daysOfWeekDisabled, function(d) {
                    return parseInt(d, 10)
                });
                this.update();
                this.updateNavArrows()
            },
            setMinutesDisabled: function(minutesDisabled) {
                this.minutesDisabled = minutesDisabled || [];
                if (!$.isArray(this.minutesDisabled)) {
                    this.minutesDisabled = this.minutesDisabled.split(/,\s*/)
                }
                this.minutesDisabled = $.map(this.minutesDisabled, function(d) {
                    return parseInt(d, 10)
                });
                this.update();
                this.updateNavArrows()
            },
            setHoursDisabled: function(hoursDisabled) {
                this.hoursDisabled = hoursDisabled || [];
                if (!$.isArray(this.hoursDisabled)) {
                    this.hoursDisabled = this.hoursDisabled.split(/,\s*/)
                }
                this.hoursDisabled = $.map(this.hoursDisabled, function(d) {
                    return parseInt(d, 10)
                });
                this.update();
                this.updateNavArrows()
            },
            place: function() {
                if (this.isInline) return;
                if (!this.zIndex) {
                    var index_highest = 0;
                    $("div").each(function() {
                        var index_current = parseInt($(this).css("zIndex"), 10);
                        if (index_current > index_highest) {
                            index_highest = index_current
                        }
                    });
                    this.zIndex = index_highest + 10
                }
                var offset, top, left, containerOffset;
                if (this.container instanceof $) {
                    containerOffset = this.container.offset()
                } else {
                    containerOffset = $(this.container).offset()
                }
                if (this.component) {
                    offset = this.component.offset();
                    left = offset.left;
                    if (this.pickerPosition == "bottom-left" || this.pickerPosition == "top-left") {
                        left += this.component.outerWidth() - this.picker.outerWidth()
                    }
                } else {
                    offset = this.element.offset();
                    left = offset.left
                }
                var bodyWidth = document.body.clientWidth || window.innerWidth;
                if (left + 220 > bodyWidth) {
                    left = bodyWidth - 220
                }
                if (this.pickerPosition == "top-left" || this.pickerPosition == "top-right") {
                    top = offset.top - this.picker.outerHeight()
                } else {
                    top = offset.top + this.height
                }
                top = top - containerOffset.top;
                left = left - containerOffset.left;
                this.picker.css({
                    top: top,
                    left: left,
                    zIndex: this.zIndex
                })
            },
            update: function() {
                var date, fromArgs = false;
                if (arguments && arguments.length && (typeof arguments[0] === "string" || arguments[0] instanceof Date)) {
                    date = arguments[0];
                    fromArgs = true
                } else {
                    date = (this.isInput ? this.element.val() : this.element.find("input").val()) || this.element.data("date") || this.initialDate;
                    if (typeof date == "string" || date instanceof String) {
                        date = date.replace(/^\s+|\s+$/g, "")
                    }
                }
                if (!date) {
                    date = new Date;
                    fromArgs = false
                }
                this.date = DPGlobal.parseDate(date, this.format, this.language, this.formatType);
                if (fromArgs) this.setValue();
                if (this.date < this.startDate) {
                    this.viewDate = new Date(this.startDate)
                } else if (this.date > this.endDate) {
                    this.viewDate = new Date(this.endDate)
                } else {
                    this.viewDate = new Date(this.date)
                }
                this.fill()
            },
            fillDow: function() {
                var dowCnt = this.weekStart,
                    html = "<tr>";
                while (dowCnt < this.weekStart + 7) {
                    html += '<th class="dow">' + dates[this.language].daysMin[dowCnt++ % 7] + "</th>"
                }
                html += "</tr>";
                this.picker.find(".datetimepicker-days thead").append(html)
            },
            fillMonths: function() {
                var html = "",
                    i = 0;
                while (i < 12) {
                    html += '<span class="month">' + dates[this.language].monthsShort[i++] + "</span>"
                }
                this.picker.find(".datetimepicker-months td").html(html)
            },
            fill: function() {
                if (this.date == null || this.viewDate == null) {
                    return
                }
                var d = new Date(this.viewDate),
                    year = d.getUTCFullYear(),
                    month = d.getUTCMonth(),
                    dayMonth = d.getUTCDate(),
                    hours = d.getUTCHours(),
                    minutes = d.getUTCMinutes(),
                    startYear = this.startDate !== -Infinity ? this.startDate.getUTCFullYear() : -Infinity,
                    startMonth = this.startDate !== -Infinity ? this.startDate.getUTCMonth() + 1 : -Infinity,
                    endYear = this.endDate !== Infinity ? this.endDate.getUTCFullYear() : Infinity,
                    endMonth = this.endDate !== Infinity ? this.endDate.getUTCMonth() + 1 : Infinity,
                    currentDate = new UTCDate(this.date.getUTCFullYear(), this.date.getUTCMonth(), this.date.getUTCDate()).valueOf(),
                    today = new Date;
                this.picker.find(".datetimepicker-days thead th:eq(1)").text(dates[this.language].months[month] + " " + year);
                if (this.formatViewType == "time") {
                    var formatted = this.getFormattedDate();
                    this.picker.find(".datetimepicker-hours thead th:eq(1)").text(formatted);
                    this.picker.find(".datetimepicker-minutes thead th:eq(1)").text(formatted)
                } else {
                    this.picker.find(".datetimepicker-hours thead th:eq(1)").text(dayMonth + " " + dates[this.language].months[month] + " " + year);
                    this.picker.find(".datetimepicker-minutes thead th:eq(1)").text(dayMonth + " " + dates[this.language].months[month] + " " + year)
                }
                this.picker.find("tfoot th.today").text(dates[this.language].today).toggle(this.todayBtn !== false);
                this.updateNavArrows();
                this.fillMonths();
                var prevMonth = UTCDate(year, month - 1, 28, 0, 0, 0, 0),
                    day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());
                prevMonth.setUTCDate(day);
                prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.weekStart + 7) % 7);
                var nextMonth = new Date(prevMonth);
                nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
                nextMonth = nextMonth.valueOf();
                var html = [];
                var clsName;
                while (prevMonth.valueOf() < nextMonth) {
                    if (prevMonth.getUTCDay() == this.weekStart) {
                        html.push("<tr>")
                    }
                    clsName = "";
                    if (prevMonth.getUTCFullYear() < year || prevMonth.getUTCFullYear() == year && prevMonth.getUTCMonth() < month) {
                        clsName += " old"
                    } else if (prevMonth.getUTCFullYear() > year || prevMonth.getUTCFullYear() == year && prevMonth.getUTCMonth() > month) {
                        clsName += " new"
                    }
                    if (this.todayHighlight && prevMonth.getUTCFullYear() == today.getFullYear() && prevMonth.getUTCMonth() == today.getMonth() && prevMonth.getUTCDate() == today.getDate()) {
                        clsName += " today"
                    }
                    if (prevMonth.valueOf() == currentDate) {
                        clsName += " active"
                    }
                    if (prevMonth.valueOf() + 864e5 <= this.startDate || prevMonth.valueOf() > this.endDate || $.inArray(prevMonth.getUTCDay(), this.daysOfWeekDisabled) !== -1) {
                        clsName += " disabled"
                    }
                    html.push('<td class="day' + clsName + '">' + prevMonth.getUTCDate() + "</td>");
                    if (prevMonth.getUTCDay() == this.weekEnd) {
                        html.push("</tr>")
                    }
                    prevMonth.setUTCDate(prevMonth.getUTCDate() + 1)
                }
                this.picker.find(".datetimepicker-days tbody").empty().append(html.join(""));
                html = [];
                var txt = "",
                    meridian = "",
                    meridianOld = "";
                var hoursDisabled = this.hoursDisabled || [];
                for (var i = 0; i < 24; i++) {
                    if (hoursDisabled.indexOf(i) !== -1) continue;
                    var actual = UTCDate(year, month, dayMonth, i);
                    clsName = "";
                    if (actual.valueOf() + 36e5 <= this.startDate || actual.valueOf() > this.endDate) {
                        clsName += " disabled"
                    } else if (hours == i) {
                        clsName += " active"
                    }
                    if (this.showMeridian && dates[this.language].meridiem.length == 2) {
                        meridian = i < 12 ? dates[this.language].meridiem[0] : dates[this.language].meridiem[1];
                        if (meridian != meridianOld) {
                            if (meridianOld != "") {
                                html.push("</fieldset>")
                            }
                            html.push('<fieldset class="hour"><legend>' + meridian.toUpperCase() + "</legend>")
                        }
                        meridianOld = meridian;
                        txt = i % 12 ? i % 12 : 12;
                        html.push('<span class="hour' + clsName + " hour_" + (i < 12 ? "am" : "pm") + '">' + txt + "</span>");
                        if (i == 23) {
                            html.push("</fieldset>")
                        }
                    } else {
                        txt = i + ":00";
                        html.push('<span class="hour' + clsName + '">' + txt + "</span>")
                    }
                }
                this.picker.find(".datetimepicker-hours td").html(html.join(""));
                html = [];
                txt = "", meridian = "", meridianOld = "";
                var minutesDisabled = this.minutesDisabled || [];
                for (var i = 0; i < 60; i += this.minuteStep) {
                    if (minutesDisabled.indexOf(i) !== -1) continue;
                    var actual = UTCDate(year, month, dayMonth, hours, i, 0);
                    clsName = "";
                    if (actual.valueOf() < this.startDate || actual.valueOf() > this.endDate) {
                        clsName += " disabled"
                    } else if (Math.floor(minutes / this.minuteStep) == Math.floor(i / this.minuteStep)) {
                        clsName += " active"
                    }
                    if (this.showMeridian && dates[this.language].meridiem.length == 2) {
                        meridian = hours < 12 ? dates[this.language].meridiem[0] : dates[this.language].meridiem[1];
                        if (meridian != meridianOld) {
                            if (meridianOld != "") {
                                html.push("</fieldset>")
                            }
                            html.push('<fieldset class="minute"><legend>' + meridian.toUpperCase() + "</legend>")
                        }
                        meridianOld = meridian;
                        txt = hours % 12 ? hours % 12 : 12;
                        html.push('<span class="minute' + clsName + '">' + txt + ":" + (i < 10 ? "0" + i : i) + "</span>");
                        if (i == 59) {
                            html.push("</fieldset>")
                        }
                    } else {
                        txt = i + ":00";
                        html.push('<span class="minute' + clsName + '">' + hours + ":" + (i < 10 ? "0" + i : i) + "</span>")
                    }
                }
                this.picker.find(".datetimepicker-minutes td").html(html.join(""));
                var currentYear = this.date.getUTCFullYear();
                var months = this.picker.find(".datetimepicker-months").find("th:eq(1)").text(year).end().find("span").removeClass("active");
                if (currentYear == year) {
                    var offset = months.length - 12;
                    months.eq(this.date.getUTCMonth() + offset).addClass("active")
                }
                if (year < startYear || year > endYear) {
                    months.addClass("disabled")
                }
                if (year == startYear) {
                    months.slice(0, startMonth + 1).addClass("disabled")
                }
                if (year == endYear) {
                    months.slice(endMonth).addClass("disabled")
                }
                html = "";
                year = parseInt(year / 10, 10) * 10;
                var yearCont = this.picker.find(".datetimepicker-years").find("th:eq(1)").text(year + "-" + (year + 9)).end().find("td");
                year -= 1;
                for (var i = -1; i < 11; i++) {
                    html += '<span class="year' + (i == -1 || i == 10 ? " old" : "") + (currentYear == year ? " active" : "") + (year < startYear || year > endYear ? " disabled" : "") + '">' + year + "</span>";
                    year += 1
                }
                yearCont.html(html);
                this.place()
            },
            updateNavArrows: function() {
                var d = new Date(this.viewDate),
                    year = d.getUTCFullYear(),
                    month = d.getUTCMonth(),
                    day = d.getUTCDate(),
                    hour = d.getUTCHours();
                switch (this.viewMode) {
                    case 0:
                        if (this.startDate !== -Infinity && year <= this.startDate.getUTCFullYear() && month <= this.startDate.getUTCMonth() && day <= this.startDate.getUTCDate() && hour <= this.startDate.getUTCHours()) {
                            this.picker.find(".prev").css({
                                visibility: "hidden"
                            })
                        } else {
                            this.picker.find(".prev").css({
                                visibility: "visible"
                            })
                        }
                        if (this.endDate !== Infinity && year >= this.endDate.getUTCFullYear() && month >= this.endDate.getUTCMonth() && day >= this.endDate.getUTCDate() && hour >= this.endDate.getUTCHours()) {
                            this.picker.find(".next").css({
                                visibility: "hidden"
                            })
                        } else {
                            this.picker.find(".next").css({
                                visibility: "visible"
                            })
                        }
                        break;
                    case 1:
                        if (this.startDate !== -Infinity && year <= this.startDate.getUTCFullYear() && month <= this.startDate.getUTCMonth() && day <= this.startDate.getUTCDate()) {
                            this.picker.find(".prev").css({
                                visibility: "hidden"
                            })
                        } else {
                            this.picker.find(".prev").css({
                                visibility: "visible"
                            })
                        }
                        if (this.endDate !== Infinity && year >= this.endDate.getUTCFullYear() && month >= this.endDate.getUTCMonth() && day >= this.endDate.getUTCDate()) {
                            this.picker.find(".next").css({
                                visibility: "hidden"
                            })
                        } else {
                            this.picker.find(".next").css({
                                visibility: "visible"
                            })
                        }
                        break;
                    case 2:
                        if (this.startDate !== -Infinity && year <= this.startDate.getUTCFullYear() && month <= this.startDate.getUTCMonth()) {
                            this.picker.find(".prev").css({
                                visibility: "hidden"
                            })
                        } else {
                            this.picker.find(".prev").css({
                                visibility: "visible"
                            })
                        }
                        if (this.endDate !== Infinity && year >= this.endDate.getUTCFullYear() && month >= this.endDate.getUTCMonth()) {
                            this.picker.find(".next").css({
                                visibility: "hidden"
                            })
                        } else {
                            this.picker.find(".next").css({
                                visibility: "visible"
                            })
                        }
                        break;
                    case 3:
                    case 4:
                        if (this.startDate !== -Infinity && year <= this.startDate.getUTCFullYear()) {
                            this.picker.find(".prev").css({
                                visibility: "hidden"
                            })
                        } else {
                            this.picker.find(".prev").css({
                                visibility: "visible"
                            })
                        }
                        if (this.endDate !== Infinity && year >= this.endDate.getUTCFullYear()) {
                            this.picker.find(".next").css({
                                visibility: "hidden"
                            })
                        } else {
                            this.picker.find(".next").css({
                                visibility: "visible"
                            })
                        }
                        break
                }
            },
            mousewheel: function(e) {
                e.preventDefault();
                e.stopPropagation();
                if (this.wheelPause) {
                    return
                }
                this.wheelPause = true;
                var originalEvent = e.originalEvent;
                var delta = originalEvent.wheelDelta;
                var mode = delta > 0 ? 1 : delta === 0 ? 0 : -1;
                if (this.wheelViewModeNavigationInverseDirection) {
                    mode = -mode
                }
                this.showMode(mode);
                setTimeout($.proxy(function() {
                    this.wheelPause = false
                }, this), this.wheelViewModeNavigationDelay)
            },
            click: function(e) {
                e.stopPropagation();
                e.preventDefault();
                var target = $(e.target).closest("span, td, th, legend");
                if (target.is("." + this.icontype)) {
                    target = $(target).parent().closest("span, td, th, legend")
                }
                if (target.length == 1) {
                    if (target.is(".disabled")) {
                        this.element.trigger({
                            type: "outOfRange",
                            date: this.viewDate,
                            startDate: this.startDate,
                            endDate: this.endDate
                        });
                        return
                    }
                    switch (target[0].nodeName.toLowerCase()) {
                        case "th":
                            switch (target[0].className) {
                                case "switch":
                                    this.showMode(1);
                                    break;
                                case "prev":
                                case "next":
                                    var dir = DPGlobal.modes[this.viewMode].navStep * (target[0].className == "prev" ? -1 : 1);
                                    switch (this.viewMode) {
                                        case 0:
                                            this.viewDate = this.moveHour(this.viewDate, dir);
                                            break;
                                        case 1:
                                            this.viewDate = this.moveDate(this.viewDate, dir);
                                            break;
                                        case 2:
                                            this.viewDate = this.moveMonth(this.viewDate, dir);
                                            break;
                                        case 3:
                                        case 4:
                                            this.viewDate = this.moveYear(this.viewDate, dir);
                                            break
                                    }
                                    this.fill();
                                    this.element.trigger({
                                        type: target[0].className + ":" + this.convertViewModeText(this.viewMode),
                                        date: this.viewDate,
                                        startDate: this.startDate,
                                        endDate: this.endDate
                                    });
                                    break;
                                case "today":
                                    var date = new Date;
                                    date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), 0);
                                    if (date < this.startDate) date = this.startDate;
                                    else if (date > this.endDate) date = this.endDate;
                                    this.viewMode = this.startViewMode;
                                    this.showMode(0);
                                    this._setDate(date);
                                    this.fill();
                                    if (this.autoclose) {
                                        this.hide()
                                    }
                                    break
                            }
                            break;
                        case "span":
                            if (!target.is(".disabled")) {
                                var year = this.viewDate.getUTCFullYear(),
                                    month = this.viewDate.getUTCMonth(),
                                    day = this.viewDate.getUTCDate(),
                                    hours = this.viewDate.getUTCHours(),
                                    minutes = this.viewDate.getUTCMinutes(),
                                    seconds = this.viewDate.getUTCSeconds();
                                if (target.is(".month")) {
                                    this.viewDate.setUTCDate(1);
                                    month = target.parent().find("span").index(target);
                                    day = this.viewDate.getUTCDate();
                                    this.viewDate.setUTCMonth(month);
                                    this.element.trigger({
                                        type: "changeMonth",
                                        date: this.viewDate
                                    });
                                    if (this.viewSelect >= 3) {
                                        this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0))
                                    }
                                } else if (target.is(".year")) {
                                    this.viewDate.setUTCDate(1);
                                    year = parseInt(target.text(), 10) || 0;
                                    this.viewDate.setUTCFullYear(year);
                                    this.element.trigger({
                                        type: "changeYear",
                                        date: this.viewDate
                                    });
                                    if (this.viewSelect >= 4) {
                                        this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0))
                                    }
                                } else if (target.is(".hour")) {
                                    hours = parseInt(target.text(), 10) || 0;
                                    if (target.hasClass("hour_am") || target.hasClass("hour_pm")) {
                                        if (hours == 12 && target.hasClass("hour_am")) {
                                            hours = 0
                                        } else if (hours != 12 && target.hasClass("hour_pm")) {
                                            hours += 12
                                        }
                                    }
                                    this.viewDate.setUTCHours(hours);
                                    this.element.trigger({
                                        type: "changeHour",
                                        date: this.viewDate
                                    });
                                    if (this.viewSelect >= 1) {
                                        this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0))
                                    }
                                } else if (target.is(".minute")) {
                                    minutes = parseInt(target.text().substr(target.text().indexOf(":") + 1), 10) || 0;
                                    this.viewDate.setUTCMinutes(minutes);
                                    this.element.trigger({
                                        type: "changeMinute",
                                        date: this.viewDate
                                    });
                                    if (this.viewSelect >= 0) {
                                        this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0))
                                    }
                                }
                                if (this.viewMode != 0) {
                                    var oldViewMode = this.viewMode;
                                    this.showMode(-1);
                                    this.fill();
                                    if (oldViewMode == this.viewMode && this.autoclose) {
                                        this.hide()
                                    }
                                } else {
                                    this.fill();
                                    if (this.autoclose) {
                                        this.hide()
                                    }
                                }
                            }
                            break;
                        case "td":
                            if (target.is(".day") && !target.is(".disabled")) {
                                var day = parseInt(target.text(), 10) || 1;
                                var year = this.viewDate.getUTCFullYear(),
                                    month = this.viewDate.getUTCMonth(),
                                    hours = this.viewDate.getUTCHours(),
                                    minutes = this.viewDate.getUTCMinutes(),
                                    seconds = this.viewDate.getUTCSeconds();
                                if (target.is(".old")) {
                                    if (month === 0) {
                                        month = 11;
                                        year -= 1
                                    } else {
                                        month -= 1
                                    }
                                } else if (target.is(".new")) {
                                    if (month == 11) {
                                        month = 0;
                                        year += 1
                                    } else {
                                        month += 1
                                    }
                                }
                                this.viewDate.setUTCFullYear(year);
                                this.viewDate.setUTCMonth(month, day);
                                this.element.trigger({
                                    type: "changeDay",
                                    date: this.viewDate
                                });
                                if (this.viewSelect >= 2) {
                                    this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0))
                                }
                            }
                            var oldViewMode = this.viewMode;
                            this.showMode(-1);
                            this.fill();
                            if (oldViewMode == this.viewMode && this.autoclose) {
                                this.hide()
                            }
                            break
                    }
                }
            },
            _setDate: function(date, which) {
                if (!which || which == "date") this.date = date;
                if (!which || which == "view") this.viewDate = date;
                this.fill();
                this.setValue();
                var element;
                if (this.isInput) {
                    element = this.element
                } else if (this.component) {
                    element = this.element.find("input")
                }
                if (element) {
                    element.change();
                    if (this.autoclose && (!which || which == "date")) {}
                }
                this.element.trigger({
                    type: "changeDate",
                    date: this.date
                });
                if (date == null) this.date = this.viewDate
            },
            moveMinute: function(date, dir) {
                if (!dir) return date;
                var new_date = new Date(date.valueOf());
                new_date.setUTCMinutes(new_date.getUTCMinutes() + dir * this.minuteStep);
                return new_date
            },
            moveHour: function(date, dir) {
                if (!dir) return date;
                var new_date = new Date(date.valueOf());
                new_date.setUTCHours(new_date.getUTCHours() + dir);
                return new_date
            },
            moveDate: function(date, dir) {
                if (!dir) return date;
                var new_date = new Date(date.valueOf());
                new_date.setUTCDate(new_date.getUTCDate() + dir);
                return new_date
            },
            moveMonth: function(date, dir) {
                if (!dir) return date;
                var new_date = new Date(date.valueOf()),
                    day = new_date.getUTCDate(),
                    month = new_date.getUTCMonth(),
                    mag = Math.abs(dir),
                    new_month, test;
                dir = dir > 0 ? 1 : -1;
                if (mag == 1) {
                    test = dir == -1 ? function() {
                        return new_date.getUTCMonth() == month
                    } : function() {
                        return new_date.getUTCMonth() != new_month
                    };
                    new_month = month + dir;
                    new_date.setUTCMonth(new_month);
                    if (new_month < 0 || new_month > 11) new_month = (new_month + 12) % 12
                } else {
                    for (var i = 0; i < mag; i++) new_date = this.moveMonth(new_date, dir);
                    new_month = new_date.getUTCMonth();
                    new_date.setUTCDate(day);
                    test = function() {
                        return new_month != new_date.getUTCMonth()
                    }
                }
                while (test()) {
                    new_date.setUTCDate(--day);
                    new_date.setUTCMonth(new_month)
                }
                return new_date
            },
            moveYear: function(date, dir) {
                return this.moveMonth(date, dir * 12)
            },
            dateWithinRange: function(date) {
                return date >= this.startDate && date <= this.endDate
            },
            keydown: function(e) {
                if (this.picker.is(":not(:visible)")) {
                    if (e.keyCode == 27) this.show();
                    return
                }
                var dateChanged = false,
                    dir, day, month, newDate, newViewDate;
                switch (e.keyCode) {
                    case 27:
                        this.hide();
                        e.preventDefault();
                        break;
                    case 37:
                    case 39:
                        if (!this.keyboardNavigation) break;
                        dir = e.keyCode == 37 ? -1 : 1;
                        viewMode = this.viewMode;
                        if (e.ctrlKey) {
                            viewMode += 2
                        } else if (e.shiftKey) {
                            viewMode += 1
                        }
                        if (viewMode == 4) {
                            newDate = this.moveYear(this.date, dir);
                            newViewDate = this.moveYear(this.viewDate, dir)
                        } else if (viewMode == 3) {
                            newDate = this.moveMonth(this.date, dir);
                            newViewDate = this.moveMonth(this.viewDate, dir)
                        } else if (viewMode == 2) {
                            newDate = this.moveDate(this.date, dir);
                            newViewDate = this.moveDate(this.viewDate, dir)
                        } else if (viewMode == 1) {
                            newDate = this.moveHour(this.date, dir);
                            newViewDate = this.moveHour(this.viewDate, dir)
                        } else if (viewMode == 0) {
                            newDate = this.moveMinute(this.date, dir);
                            newViewDate = this.moveMinute(this.viewDate, dir)
                        }
                        if (this.dateWithinRange(newDate)) {
                            this.date = newDate;
                            this.viewDate = newViewDate;
                            this.setValue();
                            this.update();
                            e.preventDefault();
                            dateChanged = true
                        }
                        break;
                    case 38:
                    case 40:
                        if (!this.keyboardNavigation) break;
                        dir = e.keyCode == 38 ? -1 : 1;
                        viewMode = this.viewMode;
                        if (e.ctrlKey) {
                            viewMode += 2
                        } else if (e.shiftKey) {
                            viewMode += 1
                        }
                        if (viewMode == 4) {
                            newDate = this.moveYear(this.date, dir);
                            newViewDate = this.moveYear(this.viewDate, dir)
                        } else if (viewMode == 3) {
                            newDate = this.moveMonth(this.date, dir);
                            newViewDate = this.moveMonth(this.viewDate, dir)
                        } else if (viewMode == 2) {
                            newDate = this.moveDate(this.date, dir * 7);
                            newViewDate = this.moveDate(this.viewDate, dir * 7)
                        } else if (viewMode == 1) {
                            if (this.showMeridian) {
                                newDate = this.moveHour(this.date, dir * 6);
                                newViewDate = this.moveHour(this.viewDate, dir * 6)
                            } else {
                                newDate = this.moveHour(this.date, dir * 4);
                                newViewDate = this.moveHour(this.viewDate, dir * 4)
                            }
                        } else if (viewMode == 0) {
                            newDate = this.moveMinute(this.date, dir * 4);
                            newViewDate = this.moveMinute(this.viewDate, dir * 4)
                        }
                        if (this.dateWithinRange(newDate)) {
                            this.date = newDate;
                            this.viewDate = newViewDate;
                            this.setValue();
                            this.update();
                            e.preventDefault();
                            dateChanged = true
                        }
                        break;
                    case 13:
                        if (this.viewMode != 0) {
                            var oldViewMode = this.viewMode;
                            this.showMode(-1);
                            this.fill();
                            if (oldViewMode == this.viewMode && this.autoclose) {
                                this.hide()
                            }
                        } else {
                            this.fill();
                            if (this.autoclose) {
                                this.hide()
                            }
                        }
                        e.preventDefault();
                        break;
                    case 9:
                        this.hide();
                        break
                }
                if (dateChanged) {
                    var element;
                    if (this.isInput) {
                        element = this.element
                    } else if (this.component) {
                        element = this.element.find("input")
                    }
                    if (element) {
                        element.change()
                    }
                    this.element.trigger({
                        type: "changeDate",
                        date: this.date
                    })
                }
            },
            showMode: function(dir) {
                if (dir) {
                    var newViewMode = Math.max(0, Math.min(DPGlobal.modes.length - 1, this.viewMode + dir));
                    if (newViewMode >= this.minView && newViewMode <= this.maxView) {
                        this.element.trigger({
                            type: "changeMode",
                            date: this.viewDate,
                            oldViewMode: this.viewMode,
                            newViewMode: newViewMode
                        });
                        this.viewMode = newViewMode
                    }
                }
                this.picker.find(">div").hide().filter(".datetimepicker-" + DPGlobal.modes[this.viewMode].clsName).css("display", "block");
                this.updateNavArrows()
            },
            reset: function(e) {
                this._setDate(null, "date")
            },
            convertViewModeText: function(viewMode) {
                switch (viewMode) {
                    case 4:
                        return "decade";
                    case 3:
                        return "year";
                    case 2:
                        return "month";
                    case 1:
                        return "day";
                    case 0:
                        return "hour"
                }
            }
        };
        var old = $.fn.datetimepicker;
        $.fn.datetimepicker = function(option) {
            var args = Array.apply(null, arguments);
            args.shift();
            var internal_return;
            this.each(function() {
                var $this = $(this),
                    data = $this.data("datetimepicker"),
                    options = typeof option == "object" && option;
                if (!data) {
                    $this.data("datetimepicker", data = new Datetimepicker(this, $.extend({}, $.fn.datetimepicker.defaults, options)))
                }
                if (typeof option == "string" && typeof data[option] == "function") {
                    internal_return = data[option].apply(data, args);
                    if (internal_return !== undefined) {
                        return false
                    }
                }
            });
            if (internal_return !== undefined) return internal_return;
            else return this
        };
        $.fn.datetimepicker.defaults = {};
        $.fn.datetimepicker.Constructor = Datetimepicker;
        var dates = $.fn.datetimepicker.dates = {
            en: {
                days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                meridiem: ["am", "pm"],
                suffix: ["st", "nd", "rd", "th"],
                today: "Today"
            }
        };
        var DPGlobal = {
            modes: [{
                clsName: "minutes",
                navFnc: "Hours",
                navStep: 1
            }, {
                clsName: "hours",
                navFnc: "Date",
                navStep: 1
            }, {
                clsName: "days",
                navFnc: "Month",
                navStep: 1
            }, {
                clsName: "months",
                navFnc: "FullYear",
                navStep: 1
            }, {
                clsName: "years",
                navFnc: "FullYear",
                navStep: 10
            }],
            isLeapYear: function(year) {
                return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0
            },
            getDaysInMonth: function(year, month) {
                return [31, DPGlobal.isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
            },
            getDefaultFormat: function(type, field) {
                if (type == "standard") {
                    if (field == "input") return "yyyy-mm-dd hh:ii";
                    else return "yyyy-mm-dd hh:ii:ss"
                } else if (type == "php") {
                    if (field == "input") return "Y-m-d H:i";
                    else return "Y-m-d H:i:s"
                } else {
                    throw new Error("Invalid format type.")
                }
            },
            validParts: function(type) {
                if (type == "standard") {
                    return /hh?|HH?|p|P|ii?|ss?|dd?|DD?|mm?|MM?|yy(?:yy)?/g
                } else if (type == "php") {
                    return /[dDjlNwzFmMnStyYaABgGhHis]/g
                } else {
                    throw new Error("Invalid format type.")
                }
            },
            nonpunctuation: /[^ -\/:-@\[-`{-~\t\n\rTZ]+/g,
            parseFormat: function(format, type) {
                var separators = format.replace(this.validParts(type), "\0").split("\0"),
                    parts = format.match(this.validParts(type));
                if (!separators || !separators.length || !parts || parts.length == 0) {
                    throw new Error("Invalid date format.")
                }
                return {
                    separators: separators,
                    parts: parts
                }
            },
            parseDate: function(date, format, language, type) {
                if (date instanceof Date) {
                    var dateUTC = new Date(date.valueOf() - date.getTimezoneOffset() * 6e4);
                    dateUTC.setMilliseconds(0);
                    return dateUTC
                }
                if (/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(date)) {
                    format = this.parseFormat("yyyy-mm-dd", type)
                }
                if (/^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}$/.test(date)) {
                    format = this.parseFormat("yyyy-mm-dd hh:ii", type)
                }
                if (/^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}\:\d{1,2}[Z]{0,1}$/.test(date)) {
                    format = this.parseFormat("yyyy-mm-dd hh:ii:ss", type)
                }
                if (/^[-+]\d+[dmwy]([\s,]+[-+]\d+[dmwy])*$/.test(date)) {
                    var part_re = /([-+]\d+)([dmwy])/,
                        parts = date.match(/([-+]\d+)([dmwy])/g),
                        part, dir;
                    date = new Date;
                    for (var i = 0; i < parts.length; i++) {
                        part = part_re.exec(parts[i]);
                        dir = parseInt(part[1]);
                        switch (part[2]) {
                            case "d":
                                date.setUTCDate(date.getUTCDate() + dir);
                                break;
                            case "m":
                                date = Datetimepicker.prototype.moveMonth.call(Datetimepicker.prototype, date, dir);
                                break;
                            case "w":
                                date.setUTCDate(date.getUTCDate() + dir * 7);
                                break;
                            case "y":
                                date = Datetimepicker.prototype.moveYear.call(Datetimepicker.prototype, date, dir);
                                break
                        }
                    }
                    return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), 0)
                }
                var parts = date && date.toString().match(this.nonpunctuation) || [],
                    date = new Date(0, 0, 0, 0, 0, 0, 0),
                    parsed = {},
                    setters_order = ["hh", "h", "ii", "i", "ss", "s", "yyyy", "yy", "M", "MM", "m", "mm", "D", "DD", "d", "dd", "H", "HH", "p", "P"],
                    setters_map = {
                        hh: function(d, v) {
                            return d.setUTCHours(v)
                        },
                        h: function(d, v) {
                            return d.setUTCHours(v)
                        },
                        HH: function(d, v) {
                            return d.setUTCHours(v == 12 ? 0 : v)
                        },
                        H: function(d, v) {
                            return d.setUTCHours(v == 12 ? 0 : v)
                        },
                        ii: function(d, v) {
                            return d.setUTCMinutes(v)
                        },
                        i: function(d, v) {
                            return d.setUTCMinutes(v)
                        },
                        ss: function(d, v) {
                            return d.setUTCSeconds(v)
                        },
                        s: function(d, v) {
                            return d.setUTCSeconds(v)
                        },
                        yyyy: function(d, v) {
                            return d.setUTCFullYear(v)
                        },
                        yy: function(d, v) {
                            return d.setUTCFullYear(2e3 + v)
                        },
                        m: function(d, v) {
                            v -= 1;
                            while (v < 0) v += 12;
                            v %= 12;
                            d.setUTCMonth(v);
                            while (d.getUTCMonth() != v)
                                if (isNaN(d.getUTCMonth())) return d;
                                else d.setUTCDate(d.getUTCDate() - 1);
                            return d
                        },
                        d: function(d, v) {
                            return d.setUTCDate(v)
                        },
                        p: function(d, v) {
                            return d.setUTCHours(v == 1 ? d.getUTCHours() + 12 : d.getUTCHours())
                        }
                    },
                    val, filtered, part;
                setters_map["M"] = setters_map["MM"] = setters_map["mm"] = setters_map["m"];
                setters_map["dd"] = setters_map["d"];
                setters_map["P"] = setters_map["p"];
                date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
                if (parts.length == format.parts.length) {
                    for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
                        val = parseInt(parts[i], 10);
                        part = format.parts[i];
                        if (isNaN(val)) {
                            switch (part) {
                                case "MM":
                                    filtered = $(dates[language].months).filter(function() {
                                        var m = this.slice(0, parts[i].length),
                                            p = parts[i].slice(0, m.length);
                                        return m == p
                                    });
                                    val = $.inArray(filtered[0], dates[language].months) + 1;
                                    break;
                                case "M":
                                    filtered = $(dates[language].monthsShort).filter(function() {
                                        var m = this.slice(0, parts[i].length),
                                            p = parts[i].slice(0, m.length);
                                        return m.toLowerCase() == p.toLowerCase()
                                    });
                                    val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
                                    break;
                                case "p":
                                case "P":
                                    val = $.inArray(parts[i].toLowerCase(), dates[language].meridiem);
                                    break
                            }
                        }
                        parsed[part] = val
                    }
                    for (var i = 0, s; i < setters_order.length; i++) {
                        s = setters_order[i];
                        if (s in parsed && !isNaN(parsed[s])) setters_map[s](date, parsed[s])
                    }
                }
                return date
            },
            formatDate: function(date, format, language, type) {
                if (date == null) {
                    return ""
                }
                var val;
                if (type == "standard") {
                    val = {
                        yy: date.getUTCFullYear().toString().substring(2),
                        yyyy: date.getUTCFullYear(),
                        m: date.getUTCMonth() + 1,
                        M: dates[language].monthsShort[date.getUTCMonth()],
                        MM: dates[language].months[date.getUTCMonth()],
                        d: date.getUTCDate(),
                        D: dates[language].daysShort[date.getUTCDay()],
                        DD: dates[language].days[date.getUTCDay()],
                        p: dates[language].meridiem.length == 2 ? dates[language].meridiem[date.getUTCHours() < 12 ? 0 : 1] : "",
                        h: date.getUTCHours(),
                        i: date.getUTCMinutes(),
                        s: date.getUTCSeconds()
                    };
                    if (dates[language].meridiem.length == 2) {
                        val.H = val.h % 12 == 0 ? 12 : val.h % 12
                    } else {
                        val.H = val.h
                    }
                    val.HH = (val.H < 10 ? "0" : "") + val.H;
                    val.P = val.p.toUpperCase();
                    val.hh = (val.h < 10 ? "0" : "") + val.h;
                    val.ii = (val.i < 10 ? "0" : "") + val.i;
                    val.ss = (val.s < 10 ? "0" : "") + val.s;
                    val.dd = (val.d < 10 ? "0" : "") + val.d;
                    val.mm = (val.m < 10 ? "0" : "") + val.m
                } else if (type == "php") {
                    val = {
                        y: date.getUTCFullYear().toString().substring(2),
                        Y: date.getUTCFullYear(),
                        F: dates[language].months[date.getUTCMonth()],
                        M: dates[language].monthsShort[date.getUTCMonth()],
                        n: date.getUTCMonth() + 1,
                        t: DPGlobal.getDaysInMonth(date.getUTCFullYear(), date.getUTCMonth()),
                        j: date.getUTCDate(),
                        l: dates[language].days[date.getUTCDay()],
                        D: dates[language].daysShort[date.getUTCDay()],
                        w: date.getUTCDay(),
                        N: date.getUTCDay() == 0 ? 7 : date.getUTCDay(),
                        S: date.getUTCDate() % 10 <= dates[language].suffix.length ? dates[language].suffix[date.getUTCDate() % 10 - 1] : "",
                        a: dates[language].meridiem.length == 2 ? dates[language].meridiem[date.getUTCHours() < 12 ? 0 : 1] : "",
                        g: date.getUTCHours() % 12 == 0 ? 12 : date.getUTCHours() % 12,
                        G: date.getUTCHours(),
                        i: date.getUTCMinutes(),
                        s: date.getUTCSeconds()
                    };
                    val.m = (val.n < 10 ? "0" : "") + val.n;
                    val.d = (val.j < 10 ? "0" : "") + val.j;
                    val.A = val.a.toString().toUpperCase();
                    val.h = (val.g < 10 ? "0" : "") + val.g;
                    val.H = (val.G < 10 ? "0" : "") + val.G;
                    val.i = (val.i < 10 ? "0" : "") + val.i;
                    val.s = (val.s < 10 ? "0" : "") + val.s
                } else {
                    throw new Error("Invalid format type.")
                }
                var date = [],
                    seps = $.extend([], format.separators);
                for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
                    if (seps.length) {
                        date.push(seps.shift())
                    }
                    date.push(val[format.parts[i]])
                }
                if (seps.length) {
                    date.push(seps.shift())
                }
                return date.join("")
            },
            convertViewMode: function(viewMode) {
                switch (viewMode) {
                    case 4:
                    case "decade":
                        viewMode = 4;
                        break;
                    case 3:
                    case "year":
                        viewMode = 3;
                        break;
                    case 2:
                    case "month":
                        viewMode = 2;
                        break;
                    case 1:
                    case "day":
                        viewMode = 1;
                        break;
                    case 0:
                    case "hour":
                        viewMode = 0;
                        break
                }
                return viewMode
            },
            headTemplate: "<thead>" + "<tr>" + '<th class="prev"><i class="glyphicon glyphicon-chevron-left"/></th>' + '<th colspan="5" class="switch"></th>' + '<th class="next"><i class="glyphicon glyphicon-chevron-right"/></th>' + "</tr>" + "</thead>",
            headTemplateV3: "<thead>" + "<tr>" + '<th class="prev"><i class="glyphicon glyphicon-chevron-left"/></th>' + '<th colspan="5" class="switch"></th>' + '<th class="next"><i class="glyphicon glyphicon-chevron-right"/></th>' + "</tr>" + "</thead>",
            contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
            footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr></tfoot>'
        };
        DPGlobal.template = '<div class="datetimepicker">' + '<div class="datetimepicker-minutes">' + '<table class=" table-condensed">' + DPGlobal.headTemplate + DPGlobal.contTemplate + DPGlobal.footTemplate + "</table>" + "</div>" + '<div class="datetimepicker-hours">' + '<table class=" table-condensed">' + DPGlobal.headTemplate + DPGlobal.contTemplate + DPGlobal.footTemplate + "</table>" + "</div>" + '<div class="datetimepicker-days">' + '<table class=" table-condensed">' + DPGlobal.headTemplate + "<tbody></tbody>" + DPGlobal.footTemplate + "</table>" + "</div>" + '<div class="datetimepicker-months">' + '<table class="table-condensed">' + DPGlobal.headTemplate + DPGlobal.contTemplate + DPGlobal.footTemplate + "</table>" + "</div>" + '<div class="datetimepicker-years">' + '<table class="table-condensed">' + DPGlobal.headTemplate + DPGlobal.contTemplate + DPGlobal.footTemplate + "</table>" + "</div>" + "</div>";
        DPGlobal.templateV3 = '<div class="datetimepicker">' + '<div class="datetimepicker-minutes">' + '<table class=" table-condensed">' + DPGlobal.headTemplateV3 + DPGlobal.contTemplate + DPGlobal.footTemplate + "</table>" + "</div>" + '<div class="datetimepicker-hours">' + '<table class=" table-condensed">' + DPGlobal.headTemplateV3 + DPGlobal.contTemplate + DPGlobal.footTemplate + "</table>" + "</div>" + '<div class="datetimepicker-days">' + '<table class=" table-condensed">' + DPGlobal.headTemplateV3 + "<tbody></tbody>" + DPGlobal.footTemplate + "</table>" + "</div>" + '<div class="datetimepicker-months">' + '<table class="table-condensed">' + DPGlobal.headTemplateV3 + DPGlobal.contTemplate + DPGlobal.footTemplate + "</table>" + "</div>" + '<div class="datetimepicker-years">' + '<table class="table-condensed">' + DPGlobal.headTemplateV3 + DPGlobal.contTemplate + DPGlobal.footTemplate + "</table>" + "</div>" + "</div>";
        $.fn.datetimepicker.DPGlobal = DPGlobal;
        $.fn.datetimepicker.noConflict = function() {
            $.fn.datetimepicker = old;
            return this
        };
        $(document).on("focus.datetimepicker.data-api click.datetimepicker.data-api", '[data-provide="datetimepicker"]', function(e) {
            var $this = $(this);
            if ($this.data("datetimepicker")) return;
            e.preventDefault();
            $this.datetimepicker("show")
        });
        $(function() {
            $('[data-provide="datetimepicker-inline"]').datetimepicker()
        })
    }(window.jQuery)
});
define("xg/eid-company/1.0.0/c/js/bootstrap-datetimepicker-debug.zh-CN", [], function(require, exports, module) {
    (function($) {
        $.fn.datetimepicker.dates["zh-CN"] = {
            days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
            daysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六", "周日"],
            daysMin: ["日", "一", "二", "三", "四", "五", "六", "日"],
            months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            monthsShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            today: "今天",
            suffix: [],
            meridiem: ["上午", "下午"]
        }
    })(jQuery)
});
define("xg/eid-company/1.0.0/p/adminAccount/inforServiceH/inforServiceMH-debug.handlebars", ["alinw/handlebars/1.3.0/runtime-debug"], function(require, exports, module) {
    var Handlebars = require("alinw/handlebars/1.3.0/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, ">= 1.0.0"];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        return '<div class="col-xs-12">\r\n    <div class="queryBox mt-10 text" id="queryTime">\r\n        <label class="labelText w70 pull-left text-r">查询时间：</label>\r\n        <a href="javascript:void(0)" data-querytime="all" class="btn btn-link current">全部</a>\r\n        <a href="javascript:void(0)" data-querytime="today" class="btn btn-link">当天</a>\r\n        <a href="javascript:void(0)" data-querytime="threeDay" class="btn btn-link">最近三天</a>\r\n        <a href="javascript:void(0)" data-querytime="week" class="btn btn-link">最近一周</a>\r\n        <a href="javascript:void(0)" data-querytime="month" class="btn btn-link">最近一月</a>\r\n        <input size="16" class="customStartTime form-control" placeholder="开始时间" type="text" value="" readonly>        \r\n        <label class="to_text">至</label>\r\n        <input size="16" class="customEndTime form-control" placeholder="结束时间" type="text" value="" readonly>\r\n    </div>\r\n    <!-- <div class="queryBox mt-10 text" id="userDefined">\r\n        <label class="labelText w70 pull-left text-r">自定义：</label>\r\n        \r\n    </div> -->\r\n    <div class="queryBox mt-10" id="bankStatus">\r\n        <label class="labelText w70 pull-left text-r">业务状况：</label>\r\n        <a href="javascript:void(0)" data-status="" class="btn btn-link current">全部</a>\r\n        <a href="javascript:void(0)" data-status="0" class="btn btn-link">未处理</a>\r\n        <a href="javascript:void(0)" data-status="1" class="btn btn-link">已通过</a>\r\n        <a href="javascript:void(0)" data-status="2" class="btn btn-link">未通过</a>\r\n        <a href="javascript:void(0)" data-status="3" class="btn btn-link">黑名单</a>\r\n    </div>\r\n</div>\r\n<div class="col-xs-12 borderTop">\r\n    <form id="infor_searchForm" class="col-xs-8">\r\n        <div class="col-xs-4">\r\n            <label class="form-label col-xs-4 col-sm-5">客户名称：</label>\r\n            <div class="formControls col-xs-8 col-sm-7">\r\n              <input type="text" class="input-text" placeholder="客户名称" name="companyName" id="companyName">\r\n            </div>\r\n        </div>\r\n        <div class="col-xs-4">\r\n            <label class="form-label col-xs-4 col-sm-5">门店名称：</label>\r\n            <div class="formControls col-xs-8 col-sm-7">\r\n              <input type="text" class="input-text" placeholder="门店名称" name="childName" id="childName">\r\n            </div>\r\n        </div>\r\n        <div class="col-xs-3">\r\n            <label class="form-label col-xs-4 col-sm-4">姓名：</label>\r\n            <div class="formControls col-xs-8 col-sm-8">\r\n              <input type="text" class="input-text" autocomplete="off" placeholder="姓名" name="borrowerName" id="borrowerName">\r\n            </div>\r\n        </div>\r\n        <input class="btn btn-default col-xs-1" type="submit" id="search_button" value="搜索">\r\n    </form>\r\n</div>'
    })
});
define("xg/eid-company/1.0.0/p/adminAccount/inforServiceH/inforServiceTableH-debug.handlebars", ["alinw/handlebars/1.3.0/runtime-debug"], function(require, exports, module) {
    var Handlebars = require("alinw/handlebars/1.3.0/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, ">= 1.0.0"];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        var buffer = "",
            stack1, functionType = "function",
            escapeExpression = this.escapeExpression,
            helperMissing = helpers.helperMissing,
            self = this;

        function program1(depth0, data) {
            var buffer = "",
                stack1;
            buffer += "\r\n";
            stack1 = helpers.each.call(depth0, depth0, {
                hash: {},
                inverse: self.noop,
                fn: self.program(2, program2, data),
                data: data
            });
            if (stack1 || stack1 === 0) {
                buffer += stack1
            }
            buffer += "\r\n";
            return buffer
        }

        function program2(depth0, data) {
            var buffer = "",
                stack1, helper, options;
            buffer += "\r\n  <tr>\r\n    <td>";
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
            buffer += escapeExpression(stack1) + "</td>\r\n    <td>";
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
            buffer += escapeExpression(stack1) + "</td>\r\n    <td>" + escapeExpression((helper = helpers.formatDateFull || depth0 && depth0.formatDateFull, options = {
                hash: {},
                data: data
            }, helper ? helper.call(depth0, depth0 && depth0.created, options) : helperMissing.call(depth0, "formatDateFull", depth0 && depth0.created, options))) + "</td>\r\n    <td>";
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
            buffer += escapeExpression(stack1) + "</td>\r\n    <td>";
            if (helper = helpers.childName) {
                stack1 = helper.call(depth0, {
                    hash: {},
                    data: data
                })
            } else {
                helper = depth0 && depth0.childName;
                stack1 = typeof helper === functionType ? helper.call(depth0, {
                    hash: {},
                    data: data
                }) : helper
            }
            buffer += escapeExpression(stack1) + "</td>\r\n    <td>" + escapeExpression((helper = helpers.statusText || depth0 && depth0.statusText, options = {
                hash: {},
                data: data
            }, helper ? helper.call(depth0, depth0 && depth0.status, options) : helperMissing.call(depth0, "statusText", depth0 && depth0.status, options))) + "</td>\r\n    <td>\r\n        ";
            stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
                hash: {},
                inverse: self.noop,
                fn: self.program(3, program3, data),
                data: data
            }, helper ? helper.call(depth0, depth0 && depth0.mobileStatus, "==", "0", options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.mobileStatus, "==", "0", options));
            if (stack1 || stack1 === 0) {
                buffer += stack1
            }
            buffer += "\r\n        ";
            stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
                hash: {},
                inverse: self.noop,
                fn: self.program(5, program5, data),
                data: data
            }, helper ? helper.call(depth0, depth0 && depth0.mobileStatus, "==", "1", options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.mobileStatus, "==", "1", options));
            if (stack1 || stack1 === 0) {
                buffer += stack1
            }
            buffer += "\r\n        ";
            stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
                hash: {},
                inverse: self.noop,
                fn: self.program(7, program7, data),
                data: data
            }, helper ? helper.call(depth0, depth0 && depth0.mobileStatus, "==", "2", options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.mobileStatus, "==", "2", options));
            if (stack1 || stack1 === 0) {
                buffer += stack1
            }
            buffer += '\r\n    </td>\r\n    <td>\r\n        <a class="detailBtn underLine" href="/cycle/credit/detail/detailPage.htm?encryptKey=';
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
            buffer += escapeExpression(stack1) + '" target="_blank">详情</a>\r\n    </td>\r\n  </tr>\r\n';
            return buffer
        }

        function program3(depth0, data) {
            return "\r\n            未校验\r\n        "
        }

        function program5(depth0, data) {
            return "\r\n            校验失败\r\n        </a>\r\n        "
        }

        function program7(depth0, data) {
            return "\r\n            校验成功\r\n        "
        }

        function program9(depth0, data) {
            return '\r\n    <tr>\r\n        <td class="text-c" colspan="7">暂无数据</td>\r\n    </tr>\r\n'
        }
        buffer += '<thead class="text-c">\r\n    <tr>\r\n        <th>姓名</th>\r\n        <th>身份证号码</th>\r\n        <th>查询时间</th>\r\n        <th>客户名称</th>\r\n        <th>门店名称</th>\r\n        <th>业务状况</th>\r\n        <th>手机校验</th>\r\n        <th>详情</th>\r\n    </tr>\r\n</thead>\r\n<tbody class="text-c">\r\n';
        stack1 = helpers["if"].call(depth0, depth0, {
            hash: {},
            inverse: self.program(9, program9, data),
            fn: self.program(1, program1, data),
            data: data
        });
        if (stack1 || stack1 === 0) {
            buffer += stack1
        }
        buffer += " \r\n</tbody>";
        return buffer
    })
});
define("xg/eid-company/1.0.0/p/adminAccount/dataCount-debug", ["jquery/jquery/1.10.1/jquery-debug", "xg/eid-company/1.0.0/c/js/tools-debug", "xg/eid-company/1.0.0/c/js/bootstrap-debug", "xg/eid-company/1.0.0/c/js/jquery-debug.validate", "xg/eid-company/1.0.0/c/js/validate-add-methods-debug", "xg/eid-company/1.0.0/c/js/validate-messages-cn-debug", "xg/eid-company/1.0.0/c/js/moment-debug", "xg/eid-company/1.0.0/c/handlebars/headerTmp-debug.handlebars", "xg/eid-company/1.0.0/c/handlebars/modifyPassword-debug.handlebars", "xg/eid-company/1.0.0/c/handlebars/modifyInfo-debug.handlebars", "xg/eid-company/1.0.0/c/handlebars/showCheckInfo-debug.handlebars", "xg/eid-company/1.0.0/c/handlebars/versionH-debug.handlebars", "xg/eid-company/1.0.0/p/adminAccount/dataCountH/dataCountMH-debug.handlebars", "xg/eid-company/1.0.0/p/adminAccount/dataCountH/dataCountTableH-debug.handlebars"], function(require, exports, module) {
    var $ = require("jquery/jquery/1.10.1/jquery-debug"),
        tools = require("xg/eid-company/1.0.0/c/js/tools-debug");
    var dataCountMH = require("xg/eid-company/1.0.0/p/adminAccount/dataCountH/dataCountMH-debug.handlebars"),
        dataCountTableH = require("xg/eid-company/1.0.0/p/adminAccount/dataCountH/dataCountTableH-debug.handlebars"),
        data = {
            pageIndex: 1,
            pageSize: 10,
            year: $("#year").val()
        };
    var dataCount = {
        init: function() {
            var self = this;
            $(".customerM").html(dataCountMH());
            self.getAllYear();
            self.selectYearEvt();
            self.dataList();
            self.searchData()
        },
        getAllYear: function() {
            var year = $("#year");
            $.ajax({
                type: "post",
                url: "/master/doGetYears.json",
                success: function(data, status, xhr) {
                    if (data.code == -1) {
                        alert(data.error)
                    } else {
                        for (var i = 0; i < data.list.length; i++) {
                            console.log(data.list[i]);
                            year.append("<option value='" + data.list[i] + "'>" + data.list[i] + "</option>")
                        }
                    }
                },
                error: function(xhr, errorType, error) {
                    alert(error)
                }
            })
        },
        selectYearEvt: function() {
            var self = this;
            $("#year").on("change", function() {
                data.pageIndex = 1;
                data.year = $("#year").val();
                data.companyName = $("#companyName").val();
                console.log(data.year);
                self.dataList()
            })
        },
        dataList: function() {
            var self = this;
            $.ajax({
                type: "post",
                url: "/master/datacount.json",
                data: data,
                success: function(data, status, xhr) {
                    if (data.code == -1) {
                        alert(data.error)
                    } else {
                        $(".dataTable").html(dataCountTableH(data.list));
                        self.pagerInit(data.count)
                    }
                },
                error: function(xhr, errorType, error) {
                    alert(error)
                }
            })
        },
        pagerInit: function(totalcount) {
            var self = this;
            if (totalcount > 0) {
                $("#pager").show()
            } else {
                $("#pager").hide()
            }
            $("#pager").pager({
                pagenumber: data.pageIndex,
                pagecount: Math.ceil(totalcount / data.pageSize),
                totalcount: totalcount,
                buttonClickCallback: function(pageclickednumber) {
                    data.pageIndex = pageclickednumber;
                    self.dataList()
                }
            })
        },
        searchData: function() {
            var self = this;
            var validate = $("#dataCount_searchForm").validate({
                debug: true,
                focusInvalid: false,
                onkeyup: false,
                onblur: true,
                submitHandler: function(form) {
                    data.companyName = $("#companyName").val();
                    data.pageIndex = 1;
                    self.dataList()
                }
            })
        }
    };
    module.exports = dataCount
});
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
define("xg/eid-company/1.0.0/p/adminAccount/dataCountH/dataCountTableH-debug.handlebars", ["alinw/handlebars/1.3.0/runtime-debug"], function(require, exports, module) {
    var Handlebars = require("alinw/handlebars/1.3.0/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, ">= 1.0.0"];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        var buffer = "",
            stack1, functionType = "function",
            escapeExpression = this.escapeExpression,
            self = this;

        function program1(depth0, data) {
            var buffer = "",
                stack1;
            buffer += "\r\n";
            stack1 = helpers.each.call(depth0, depth0, {
                hash: {},
                inverse: self.noop,
                fn: self.program(2, program2, data),
                data: data
            });
            if (stack1 || stack1 === 0) {
                buffer += stack1
            }
            buffer += "\r\n";
            return buffer
        }

        function program2(depth0, data) {
            var buffer = "",
                stack1, helper;
            buffer += '\r\n    <tr class="text-c">\r\n        <td>';
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
            buffer += escapeExpression(stack1) + "</td>\r\n        <td>";
            if (helper = helpers.jan) {
                stack1 = helper.call(depth0, {
                    hash: {},
                    data: data
                })
            } else {
                helper = depth0 && depth0.jan;
                stack1 = typeof helper === functionType ? helper.call(depth0, {
                    hash: {},
                    data: data
                }) : helper
            }
            buffer += escapeExpression(stack1) + "</td>\r\n        <td>";
            if (helper = helpers.feb) {
                stack1 = helper.call(depth0, {
                    hash: {},
                    data: data
                })
            } else {
                helper = depth0 && depth0.feb;
                stack1 = typeof helper === functionType ? helper.call(depth0, {
                    hash: {},
                    data: data
                }) : helper
            }
            buffer += escapeExpression(stack1) + "</td>\r\n        <td>";
            if (helper = helpers.mar) {
                stack1 = helper.call(depth0, {
                    hash: {},
                    data: data
                })
            } else {
                helper = depth0 && depth0.mar;
                stack1 = typeof helper === functionType ? helper.call(depth0, {
                    hash: {},
                    data: data
                }) : helper
            }
            buffer += escapeExpression(stack1) + "</td>\r\n        <td>";
            if (helper = helpers.apr) {
                stack1 = helper.call(depth0, {
                    hash: {},
                    data: data
                })
            } else {
                helper = depth0 && depth0.apr;
                stack1 = typeof helper === functionType ? helper.call(depth0, {
                    hash: {},
                    data: data
                }) : helper
            }
            buffer += escapeExpression(stack1) + "</td>\r\n        <td>";
            if (helper = helpers.may) {
                stack1 = helper.call(depth0, {
                    hash: {},
                    data: data
                })
            } else {
                helper = depth0 && depth0.may;
                stack1 = typeof helper === functionType ? helper.call(depth0, {
                    hash: {},
                    data: data
                }) : helper
            }
            buffer += escapeExpression(stack1) + "</td>\r\n        <td>";
            if (helper = helpers.june) {
                stack1 = helper.call(depth0, {
                    hash: {},
                    data: data
                })
            } else {
                helper = depth0 && depth0.june;
                stack1 = typeof helper === functionType ? helper.call(depth0, {
                    hash: {},
                    data: data
                }) : helper
            }
            buffer += escapeExpression(stack1) + "</td>\r\n        <td>";
            if (helper = helpers.july) {
                stack1 = helper.call(depth0, {
                    hash: {},
                    data: data
                })
            } else {
                helper = depth0 && depth0.july;
                stack1 = typeof helper === functionType ? helper.call(depth0, {
                    hash: {},
                    data: data
                }) : helper
            }
            buffer += escapeExpression(stack1) + "</td>\r\n        <td>";
            if (helper = helpers.aug) {
                stack1 = helper.call(depth0, {
                    hash: {},
                    data: data
                })
            } else {
                helper = depth0 && depth0.aug;
                stack1 = typeof helper === functionType ? helper.call(depth0, {
                    hash: {},
                    data: data
                }) : helper
            }
            buffer += escapeExpression(stack1) + "</td>\r\n        <td>";
            if (helper = helpers.sept) {
                stack1 = helper.call(depth0, {
                    hash: {},
                    data: data
                })
            } else {
                helper = depth0 && depth0.sept;
                stack1 = typeof helper === functionType ? helper.call(depth0, {
                    hash: {},
                    data: data
                }) : helper
            }
            buffer += escapeExpression(stack1) + "</td>\r\n        <td>";
            if (helper = helpers.oct) {
                stack1 = helper.call(depth0, {
                    hash: {},
                    data: data
                })
            } else {
                helper = depth0 && depth0.oct;
                stack1 = typeof helper === functionType ? helper.call(depth0, {
                    hash: {},
                    data: data
                }) : helper
            }
            buffer += escapeExpression(stack1) + "</td>\r\n        <td>";
            if (helper = helpers.nov) {
                stack1 = helper.call(depth0, {
                    hash: {},
                    data: data
                })
            } else {
                helper = depth0 && depth0.nov;
                stack1 = typeof helper === functionType ? helper.call(depth0, {
                    hash: {},
                    data: data
                }) : helper
            }
            buffer += escapeExpression(stack1) + "</td>\r\n        <td>";
            if (helper = helpers.dec) {
                stack1 = helper.call(depth0, {
                    hash: {},
                    data: data
                })
            } else {
                helper = depth0 && depth0.dec;
                stack1 = typeof helper === functionType ? helper.call(depth0, {
                    hash: {},
                    data: data
                }) : helper
            }
            buffer += escapeExpression(stack1) + "</td>\r\n        <td>";
            if (helper = helpers.count) {
                stack1 = helper.call(depth0, {
                    hash: {},
                    data: data
                })
            } else {
                helper = depth0 && depth0.count;
                stack1 = typeof helper === functionType ? helper.call(depth0, {
                    hash: {},
                    data: data
                }) : helper
            }
            buffer += escapeExpression(stack1) + "</td>\r\n    </tr>\r\n";
            return buffer
        }

        function program4(depth0, data) {
            return '\r\n    <tr>\r\n        <td class="text-c" colspan="14">暂无数据</td>\r\n    </tr>\r\n'
        }
        buffer += '<thead class="text-c">\r\n    <tr>\r\n        <th>客户名称</th>\r\n        <th>1月</th>\r\n        <th>2月</th>\r\n        <th>3月</th>\r\n        <th>4月</th>\r\n        <th>5月</th>\r\n        <th>6月</th>\r\n        <th>7月</th>\r\n        <th>8月</th>\r\n        <th>9月</th>\r\n        <th>10月</th>\r\n        <th>11月</th>\r\n        <th>12月</th>\r\n        <th>总数</th>\r\n    </tr>\r\n</thead>\r\n<tbody class="text-c">\r\n';
        stack1 = helpers["if"].call(depth0, depth0, {
            hash: {},
            inverse: self.program(4, program4, data),
            fn: self.program(1, program1, data),
            data: data
        });
        if (stack1 || stack1 === 0) {
            buffer += stack1
        }
        buffer += " \r\n</tbody>";
        return buffer
    })
});
define("xg/eid-company/1.0.0/p/adminAccount/accountManage-debug", ["jquery/jquery/1.10.1/jquery-debug", "xg/eid-company/1.0.0/c/js/tools-debug", "xg/eid-company/1.0.0/c/js/bootstrap-debug", "xg/eid-company/1.0.0/c/js/jquery-debug.validate", "xg/eid-company/1.0.0/c/js/validate-add-methods-debug", "xg/eid-company/1.0.0/c/js/validate-messages-cn-debug", "xg/eid-company/1.0.0/c/js/moment-debug", "xg/eid-company/1.0.0/c/handlebars/headerTmp-debug.handlebars", "xg/eid-company/1.0.0/c/handlebars/modifyPassword-debug.handlebars", "xg/eid-company/1.0.0/c/handlebars/modifyInfo-debug.handlebars", "xg/eid-company/1.0.0/c/handlebars/showCheckInfo-debug.handlebars", "xg/eid-company/1.0.0/c/handlebars/versionH-debug.handlebars", "xg/eid-company/1.0.0/p/adminAccount/accountManageH/addAccountH-debug.handlebars", "xg/eid-company/1.0.0/p/adminAccount/accountManageH/editAccountH-debug.handlebars", "xg/eid-company/1.0.0/p/adminAccount/accountManageH/resetPswH-debug.handlebars", "xg/eid-company/1.0.0/p/adminAccount/accountManageH/enableH-debug.handlebars", "xg/eid-company/1.0.0/p/adminAccount/accountManageH/disableH-debug.handlebars", "xg/eid-company/1.0.0/p/adminAccount/accountManageH/accountTableH-debug.handlebars"], function(require, exports, module) {
    var $ = require("jquery/jquery/1.10.1/jquery-debug"),
        tools = require("xg/eid-company/1.0.0/c/js/tools-debug");
    var addAccountH = require("xg/eid-company/1.0.0/p/adminAccount/accountManageH/addAccountH-debug.handlebars"),
        editAccountH = require("xg/eid-company/1.0.0/p/adminAccount/accountManageH/editAccountH-debug.handlebars"),
        resetPswH = require("xg/eid-company/1.0.0/p/adminAccount/accountManageH/resetPswH-debug.handlebars"),
        enableH = require("xg/eid-company/1.0.0/p/adminAccount/accountManageH/enableH-debug.handlebars"),
        disableH = require("xg/eid-company/1.0.0/p/adminAccount/accountManageH/disableH-debug.handlebars"),
        accountTableH = require("xg/eid-company/1.0.0/p/adminAccount/accountManageH/accountTableH-debug.handlebars"),
        data = {
            pageIndex: 1,
            pageSize: 10
        };
    var accountManage = {
        init: function() {
            var self = this;
            self.accountList();
            $("#addAccount").on("click", function() {
                $("section").after(addAccountH());
                self.getRoleList();
                $("#modal-addAccount").modal("show");
                self.accountForm_validate();
                $("#modal-addAccount").on("hidden.bs.modal", function(e) {
                    $("section").nextAll().remove()
                })
            })
        },
        getRoleList: function() {
            $.ajax({
                type: "post",
                url: "/role/view.json",
                success: function(data, status, xhr) {
                    if (data.code == -1) {
                        alert(data.error)
                    } else {
                        for (i = 0; i < data.list.length; i++) {
                            if (i == 0) {
                                $(".role_radio").append('<div class="radio-box"><input type="radio" id="role-' + i + '" name="roleId" value="' + data.list[i].roleId + '" checked><label for="role-' + i + '">' + data.list[i].roleName + "</label></div>")
                            } else {
                                $(".role_radio").append('<div class="radio-box"><input type="radio" id="role-' + i + '" name="roleId" value="' + data.list[i].roleId + '"><label for="role-' + i + '">' + data.list[i].roleName + "</label></div>")
                            }
                        }
                    }
                },
                error: function(xhr, errorType, error) {
                    alert(error)
                }
            })
        },
        accountForm_validate: function() {
            var validate = $("#addAccountForm").validate({
                debug: true,
                focusInvalid: false,
                onkeyup: false,
                onblur: true,
                submitHandler: function(form) {
                    $.ajax({
                        type: "post",
                        url: "/user/add.json",
                        data: $("#addAccountForm").serialize(),
                        success: function(data, status, xhr) {
                            if (data.code == -1) {
                                alert(data.error)
                            } else {
                                alert("新增账号成功");
                                setTimeout(function() {
                                    window.location.reload()
                                }, 500)
                            }
                        },
                        error: function(xhr, errorType, error) {
                            alert(error)
                        }
                    })
                },
                rules: {
                    mobile: {
                        required: true,
                        mobile: true
                    },
                    realName: {
                        required: true
                    },
                    roleId: {
                        required: true
                    },
                    status: {
                        required: true
                    }
                },
                messages: {
                    mobile: {
                        required: "<i>*</i>手机号码不能为空，请输入"
                    },
                    realName: {
                        required: "<i>*</i>姓名不能为空，请输入"
                    },
                    roleId: {
                        required: "<i>*</i>角色不能为空，请选择"
                    },
                    status: {
                        required: "<i>*</i>状态不能为空，请选择"
                    }
                }
            })
        },
        accountList: function() {
            var self = this;
            $.ajax({
                type: "post",
                url: "/user/view.json",
                data: data,
                success: function(data, status, xhr) {
                    if (data.code == -1) {
                        alert(data.error)
                    } else {
                        $(".accountTable").html(accountTableH(data.list));
                        self.pagerInit(data.count);
                        self.editOption();
                        self.resetPswOption();
                        self.enableOption();
                        self.disableOption()
                    }
                },
                error: function(xhr, errorType, error) {
                    alert(error)
                }
            })
        },
        pagerInit: function(totalcount) {
            var self = this;
            if (totalcount > 0) {
                $("#pager").show()
            } else {
                $("#pager").hide()
            }
            $("#pager").pager({
                pagenumber: data.pageIndex,
                pagecount: Math.ceil(totalcount / data.pageSize),
                totalcount: totalcount,
                buttonClickCallback: function(pageclickednumber) {
                    data.pageIndex = pageclickednumber;
                    self.accountList()
                }
            })
        },
        editOption: function() {
            var self = this;
            $(".edit").on("click", function() {
                var _this = $(this).parent().parent();
                var editData = {
                    userId: _this.data("userid"),
                    mobile: _this.data("mobile"),
                    realName: _this.data("realname"),
                    roleId: _this.data("roleid"),
                    status: _this.data("status")
                };
                $("section").after(editAccountH(editData));
                self.getEditRoleList(editData.roleId);
                $("#modal-editAccount").modal("show");
                self.editForm_validate();
                $("#modal-editAccount").on("hidden.bs.modal", function(e) {
                    $("section").nextAll().remove()
                })
            })
        },
        editForm_validate: function() {
            var validate = $("#editAccountForm").validate({
                debug: true,
                focusInvalid: false,
                onkeyup: false,
                onblur: true,
                submitHandler: function(form) {
                    $.ajax({
                        type: "post",
                        url: "/user/edit.json",
                        data: $("#editAccountForm").serialize(),
                        success: function(data, status, xhr) {
                            if (data.code == -1) {
                                alert(data.error)
                            } else {
                                alert("编辑账号成功");
                                setTimeout(function() {
                                    window.location.reload()
                                }, 500)
                            }
                        },
                        error: function(xhr, errorType, error) {
                            alert(error)
                        }
                    })
                },
                rules: {
                    mobile: {
                        required: true,
                        mobile: true
                    },
                    realName: {
                        required: true
                    },
                    roleId: {
                        required: true
                    },
                    status: {
                        required: true
                    }
                },
                messages: {
                    mobile: {
                        required: "<i>*</i>手机号码不能为空，请输入"
                    },
                    realName: {
                        required: "<i>*</i>姓名不能为空，请输入"
                    },
                    roleId: {
                        required: "<i>*</i>角色不能为空，请选择"
                    },
                    status: {
                        required: "<i>*</i>状态不能为空，请选择"
                    }
                }
            })
        },
        getEditRoleList: function(roleId) {
            $.ajax({
                type: "post",
                url: "/role/view.json",
                success: function(data, status, xhr) {
                    if (data.code == -1) {
                        alert(data.error)
                    } else {
                        for (i = 0; i < data.list.length; i++) {
                            if (data.list[i].roleId == roleId) {
                                $(".role_radio").append('<div class="radio-box"><input type="radio" id="role-' + i + '" name="roleId" value="' + data.list[i].roleId + '" checked><label for="role-' + i + '">' + data.list[i].roleName + "</label></div>")
                            } else {
                                $(".role_radio").append('<div class="radio-box"><input type="radio" id="role-' + i + '" name="roleId" value="' + data.list[i].roleId + '"><label for="role-' + i + '">' + data.list[i].roleName + "</label></div>")
                            }
                        }
                    }
                },
                error: function(xhr, errorType, error) {
                    alert(error)
                }
            })
        },
        resetPswOption: function() {
            $(".resetPsw").on("click", function() {
                var _this = $(this).parent().parent();
                var mobileData = {
                    mobile: _this.data("mobile"),
                    userId: _this.data("userid")
                };
                $("section").after(resetPswH(mobileData));
                $("#modal-resetPsw").modal("show");
                var validate = $("#resetPswForm").validate({
                    debug: true,
                    focusInvalid: false,
                    onkeyup: false,
                    onblur: true,
                    submitHandler: function(form) {
                        $.ajax({
                            type: "post",
                            url: "/user/resetPassword.json",
                            data: $("#resetPswForm").serialize(),
                            success: function(data, status, xhr) {
                                if (data.code == -1) {
                                    alert(data.error)
                                } else {
                                    alert("重置密码成功");
                                    setTimeout(function() {
                                        window.location.reload()
                                    }, 500)
                                }
                            },
                            error: function(xhr, errorType, error) {
                                alert(error)
                            }
                        })
                    }
                });
                $("#modal-resetPsw").on("hidden.bs.modal", function(e) {
                    $("section").nextAll().remove()
                })
            })
        },
        enableOption: function() {
            $(".enable").on("click", function() {
                var _this = $(this).parent().parent();
                var mobileData = {
                    mobile: _this.data("mobile"),
                    userId: _this.data("userid")
                };
                $("section").after(enableH(mobileData));
                $("#modal-enable").modal("show");
                var validate = $("#enableForm").validate({
                    debug: true,
                    focusInvalid: false,
                    onkeyup: false,
                    onblur: true,
                    submitHandler: function(form) {
                        $.ajax({
                            type: "post",
                            url: "/user/enable.json",
                            data: $("#enableForm").serialize(),
                            success: function(data, status, xhr) {
                                if (data.code == -1) {
                                    alert(data.error)
                                } else {
                                    alert("启用成功");
                                    setTimeout(function() {
                                        window.location.reload()
                                    }, 500)
                                }
                            },
                            error: function(xhr, errorType, error) {
                                alert(error)
                            }
                        })
                    }
                });
                $("#modal-enable").on("hidden.bs.modal", function(e) {
                    $("section").nextAll().remove()
                })
            })
        },
        disableOption: function() {
            $(".disable").on("click", function() {
                var _this = $(this).parent().parent();
                var mobileData = {
                    mobile: _this.data("mobile"),
                    userId: _this.data("userid")
                };
                $("section").after(disableH(mobileData));
                $("#modal-disable").modal("show");
                var validate = $("#disableForm").validate({
                    debug: true,
                    focusInvalid: false,
                    onkeyup: false,
                    onblur: true,
                    submitHandler: function(form) {
                        $.ajax({
                            type: "post",
                            url: "/user/forbidden.json",
                            data: $("#disableForm").serialize(),
                            success: function(data, status, xhr) {
                                if (data.code == -1) {
                                    alert(data.error)
                                } else {
                                    alert("禁用成功");
                                    setTimeout(function() {
                                        window.location.reload()
                                    }, 500)
                                }
                            },
                            error: function(xhr, errorType, error) {
                                alert(error)
                            }
                        })
                    }
                });
                $("#modal-disable").on("hidden.bs.modal", function(e) {
                    $("section").nextAll().remove()
                })
            })
        }
    };
    module.exports = accountManage
});
define("xg/eid-company/1.0.0/p/adminAccount/accountManageH/addAccountH-debug.handlebars", ["alinw/handlebars/1.3.0/runtime-debug"], function(require, exports, module) {
    var Handlebars = require("alinw/handlebars/1.3.0/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, ">= 1.0.0"];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        return ' <div id="modal-addAccount" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\r\n  <div class="modal-dialog">\r\n    <div class="modal-content radius">\r\n      <div class="modal-header">\r\n        <h5 class="modal-title">新增账户</h5>\r\n        <a class="close" data-dismiss="modal" aria-hidden="true" href="javascript:void();">×</a>\r\n      </div>\r\n      <form class="form form-horizontal" id="addAccountForm">\r\n        <div class="modal-body">\r\n            <div class="row cl">\r\n              <label class="form-label col-xs-4 col-sm-3">手机号码：</label>\r\n              <div class="formControls col-xs-8 col-sm-8">\r\n                <input type="text" class="input-text" autocomplete="off" placeholder="手机号码" name="mobile" id="mobile">\r\n              </div>\r\n            </div>\r\n            <div class="row cl">\r\n              <label class="form-label col-xs-4 col-sm-3">姓名：</label>\r\n              <div class="formControls col-xs-8 col-sm-8">\r\n                <input type="text" class="input-text" autocomplete="off" placeholder="姓名" name="realName" id="realName">\r\n              </div>\r\n            </div>\r\n            <div class="row cl">\r\n              <label class="form-label col-xs-4 col-sm-3">角色：</label>\r\n              <div class="formControls skin-minimal col-xs-8 col-sm-9 role_radio">\r\n                \r\n              </div>\r\n            </div>\r\n            <div class="row cl">\r\n              <label class="form-label col-xs-4 col-sm-3">状态：</label>\r\n              <div class="formControls skin-minimal col-xs-8 col-sm-9">\r\n                <div class="radio-box">\r\n                  <input type="radio" id="status-1" name="status" value="0" checked>\r\n                  <label for="status-1">启用</label>\r\n                </div>\r\n                <div class="radio-box">\r\n                  <input type="radio" id="status-2" name="status" value="1">\r\n                  <label for="status-2">禁用</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n        </div>\r\n        <div class="modal-footer">\r\n          <input class="btn btn-primary" type="submit" value="提交">\r\n          <!-- <button type="submit" class="btn btn-primary">确定</button> -->\r\n          <button class="btn" data-dismiss="modal" aria-hidden="true">关闭</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>'
    })
});
define("xg/eid-company/1.0.0/p/adminAccount/accountManageH/editAccountH-debug.handlebars", ["alinw/handlebars/1.3.0/runtime-debug"], function(require, exports, module) {
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
            return "checked"
        }
        buffer += ' <div id="modal-editAccount" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\r\n  <div class="modal-dialog">\r\n    <div class="modal-content radius">\r\n      <div class="modal-header">\r\n        <h5 class="modal-title">编辑账号</h5>\r\n        <a class="close" data-dismiss="modal" aria-hidden="true" href="javascript:void();">×</a>\r\n      </div>\r\n      <form class="form form-horizontal" id="editAccountForm">\r\n        <input type="hidden" name="userId" id="userId" value="';
        if (helper = helpers.userId) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.userId;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '">\r\n        <div class="modal-body">\r\n            <div class="row cl">\r\n              <label class="form-label col-xs-4 col-sm-3">手机号码：</label>\r\n              <div class="formControls col-xs-8 col-sm-8">\r\n                <input type="text" class="input-text" autocomplete="off" placeholder="手机号码" name="mobile" id="mobile" value="';
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
        buffer += escapeExpression(stack1) + '">\r\n              </div>\r\n            </div>\r\n            <div class="row cl">\r\n              <label class="form-label col-xs-4 col-sm-3">姓名：</label>\r\n              <div class="formControls col-xs-8 col-sm-8">\r\n                <input type="text" class="input-text" autocomplete="off" placeholder="联系人" name="realName" id="realName" value="';
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
        buffer += escapeExpression(stack1) + '">\r\n              </div>\r\n            </div>\r\n            <div class="row cl">\r\n              <label class="form-label col-xs-4 col-sm-3">角色：</label>\r\n              <div class="formControls skin-minimal col-xs-8 col-sm-9 role_radio">\r\n                \r\n              </div>\r\n            </div>\r\n            <div class="row cl">\r\n              <label class="form-label col-xs-4 col-sm-3">状态：</label>\r\n              <div class="formControls skin-minimal col-xs-8 col-sm-9">\r\n                <div class="radio-box">\r\n                  <input type="radio" id="status-1" name="status" value="0" ';
        stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
            hash: {},
            inverse: self.noop,
            fn: self.program(1, program1, data),
            data: data
        }, helper ? helper.call(depth0, depth0 && depth0.status, "==", 0, options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.status, "==", 0, options));
        if (stack1 || stack1 === 0) {
            buffer += stack1
        }
        buffer += '>\r\n                  <label for="status-1">启用</label>\r\n                </div>\r\n                <div class="radio-box">\r\n                  <input type="radio" id="status-2" name="status" value="1" ';
        stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
            hash: {},
            inverse: self.noop,
            fn: self.program(1, program1, data),
            data: data
        }, helper ? helper.call(depth0, depth0 && depth0.status, "!=", 0, options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.status, "!=", 0, options));
        if (stack1 || stack1 === 0) {
            buffer += stack1
        }
        buffer += '>\r\n                  <label for="status-2">禁用</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n        </div>\r\n        <div class="modal-footer">\r\n          <input class="btn btn-primary" type="submit" value="提交">\r\n          <!-- <button type="submit" class="btn btn-primary">确定</button> -->\r\n          <button class="btn" data-dismiss="modal" aria-hidden="true">关闭</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>';
        return buffer
    })
});
define("xg/eid-company/1.0.0/p/adminAccount/accountManageH/resetPswH-debug.handlebars", ["alinw/handlebars/1.3.0/runtime-debug"], function(require, exports, module) {
    var Handlebars = require("alinw/handlebars/1.3.0/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, ">= 1.0.0"];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        var buffer = "",
            stack1, helper, functionType = "function",
            escapeExpression = this.escapeExpression;
        buffer += ' <div id="modal-resetPsw" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\r\n  <div class="modal-dialog">\r\n    <div class="modal-content radius">\r\n      <div class="modal-header">\r\n        <h5 class="modal-title">重置密码</h5>\r\n        <a class="close" data-dismiss="modal" aria-hidden="true" href="javascript:void();">×</a>\r\n      </div>\r\n      <form class="form form-horizontal" id="resetPswForm">\r\n        <input type="hidden" name="userId" id="userId" value="';
        if (helper = helpers.userId) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.userId;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '">\r\n        <div class="modal-body">\r\n            是否重置<span>';
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
        buffer += escapeExpression(stack1) + '</span>账号密码为手机号码？\r\n        </div>\r\n        <div class="modal-footer">\r\n          <input class="btn btn-primary" type="submit" value="确认">\r\n          <!-- <button type="submit" class="btn btn-primary">确定</button> -->\r\n          <button class="btn" data-dismiss="modal" aria-hidden="true">关闭</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>';
        return buffer
    })
});
define("xg/eid-company/1.0.0/p/adminAccount/accountManageH/enableH-debug.handlebars", ["alinw/handlebars/1.3.0/runtime-debug"], function(require, exports, module) {
    var Handlebars = require("alinw/handlebars/1.3.0/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, ">= 1.0.0"];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        var buffer = "",
            stack1, helper, functionType = "function",
            escapeExpression = this.escapeExpression;
        buffer += ' <div id="modal-enable" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\r\n    <div class="modal-dialog">\r\n      <div class="modal-content radius">\r\n        <div class="modal-header">\r\n          <h5 class="modal-title">启用</h5>\r\n          <a class="close" data-dismiss="modal" aria-hidden="true" href="javascript:void();">×</a>\r\n        </div>\r\n        <form class="form form-horizontal" id="enableForm">\r\n          <input type="hidden" name="userId" id="userId" value="';
        if (helper = helpers.userId) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.userId;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '">\r\n          <div class="modal-body">\r\n              是否启用<span>';
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
        buffer += escapeExpression(stack1) + '</span>账号？\r\n          </div>\r\n          <div class="modal-footer">\r\n            <input class="btn btn-primary" type="submit" value="确认">\r\n            <!-- <button type="submit" class="btn btn-primary">确定</button> -->\r\n            <button class="btn" data-dismiss="modal" aria-hidden="true">关闭</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>';
        return buffer
    })
});
define("xg/eid-company/1.0.0/p/adminAccount/accountManageH/disableH-debug.handlebars", ["alinw/handlebars/1.3.0/runtime-debug"], function(require, exports, module) {
    var Handlebars = require("alinw/handlebars/1.3.0/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, ">= 1.0.0"];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        var buffer = "",
            stack1, helper, functionType = "function",
            escapeExpression = this.escapeExpression;
        buffer += '  <div id="modal-disable" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\r\n    <div class="modal-dialog">\r\n      <div class="modal-content radius">\r\n        <div class="modal-header">\r\n          <h5 class="modal-title">禁用</h5>\r\n          <a class="close" data-dismiss="modal" aria-hidden="true" href="javascript:void();">×</a>\r\n        </div>\r\n        <form class="form form-horizontal" id="disableForm">\r\n          <input type="hidden" name="userId" id="userId" value="';
        if (helper = helpers.userId) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.userId;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '">\r\n          <div class="modal-body">\r\n              是否禁用<span>';
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
        buffer += escapeExpression(stack1) + '</span>账号？\r\n          </div>\r\n          <div class="modal-footer">\r\n            <input class="btn btn-primary" type="submit" value="确认">\r\n            <!-- <button type="submit" class="btn btn-primary">确定</button> -->\r\n            <button class="btn" data-dismiss="modal" aria-hidden="true">关闭</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>';
        return buffer
    })
});
define("xg/eid-company/1.0.0/p/adminAccount/accountManageH/accountTableH-debug.handlebars", ["alinw/handlebars/1.3.0/runtime-debug"], function(require, exports, module) {
    var Handlebars = require("alinw/handlebars/1.3.0/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, ">= 1.0.0"];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        var buffer = "",
            stack1, functionType = "function",
            escapeExpression = this.escapeExpression,
            self = this,
            helperMissing = helpers.helperMissing;

        function program1(depth0, data) {
            var buffer = "",
                stack1, helper, options;
            buffer += '\r\n  <tr data-userid="';
            if (helper = helpers.userId) {
                stack1 = helper.call(depth0, {
                    hash: {},
                    data: data
                })
            } else {
                helper = depth0 && depth0.userId;
                stack1 = typeof helper === functionType ? helper.call(depth0, {
                    hash: {},
                    data: data
                }) : helper
            }
            buffer += escapeExpression(stack1) + '" data-mobile="';
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
            buffer += escapeExpression(stack1) + '" data-realname="';
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
            buffer += escapeExpression(stack1) + '" data-status="';
            if (helper = helpers.status) {
                stack1 = helper.call(depth0, {
                    hash: {},
                    data: data
                })
            } else {
                helper = depth0 && depth0.status;
                stack1 = typeof helper === functionType ? helper.call(depth0, {
                    hash: {},
                    data: data
                }) : helper
            }
            buffer += escapeExpression(stack1) + '" data-roleid="';
            if (helper = helpers.roleId) {
                stack1 = helper.call(depth0, {
                    hash: {},
                    data: data
                })
            } else {
                helper = depth0 && depth0.roleId;
                stack1 = typeof helper === functionType ? helper.call(depth0, {
                    hash: {},
                    data: data
                }) : helper
            }
            buffer += escapeExpression(stack1) + '" data-username="';
            if (helper = helpers.username) {
                stack1 = helper.call(depth0, {
                    hash: {},
                    data: data
                })
            } else {
                helper = depth0 && depth0.username;
                stack1 = typeof helper === functionType ? helper.call(depth0, {
                    hash: {},
                    data: data
                }) : helper
            }
            buffer += escapeExpression(stack1) + '">\r\n    <td>';
            if (helper = helpers.username) {
                stack1 = helper.call(depth0, {
                    hash: {},
                    data: data
                })
            } else {
                helper = depth0 && depth0.username;
                stack1 = typeof helper === functionType ? helper.call(depth0, {
                    hash: {},
                    data: data
                }) : helper
            }
            buffer += escapeExpression(stack1) + "</td>\r\n    <td>";
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
            buffer += escapeExpression(stack1) + "</td>\r\n    <td>";
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
            buffer += escapeExpression(stack1) + "</td>\r\n    ";
            stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
                hash: {},
                inverse: self.program(4, program4, data),
                fn: self.program(2, program2, data),
                data: data
            }, helper ? helper.call(depth0, depth0 && depth0.status, "==", 0, options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.status, "==", 0, options));
            if (stack1 || stack1 === 0) {
                buffer += stack1
            }
            buffer += "\r\n    <td>";
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
            buffer += escapeExpression(stack1) + '</td>\r\n    <td>\r\n      <a href="javascript:void(0)" class="resetPsw">重置密码</a>\r\n      <span class="pipe">|</span>\r\n      <a href="javascript:void(0)" class="edit">编辑</a>\r\n      <span class="pipe">|</span>\r\n      ';
            stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
                hash: {},
                inverse: self.program(8, program8, data),
                fn: self.program(6, program6, data),
                data: data
            }, helper ? helper.call(depth0, depth0 && depth0.status, "==", 0, options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.status, "==", 0, options));
            if (stack1 || stack1 === 0) {
                buffer += stack1
            }
            buffer += "      \r\n    </td>\r\n  </tr>\r\n  ";
            return buffer
        }

        function program2(depth0, data) {
            return '<td class="c-green">启用</td>'
        }

        function program4(depth0, data) {
            return '<td class="c-red">禁用</td>'
        }

        function program6(depth0, data) {
            return '\r\n        <a href="javascript:void(0)" class="disable">禁用</a>\r\n      '
        }

        function program8(depth0, data) {
            return '\r\n        <a href="javascript:void(0)" class="enable">启用</a>\r\n      '
        }
        buffer += '<thead class="text-c">\r\n  <tr>\r\n    <th>用户名</th>\r\n    <th>手机号码</th>\r\n    <th>姓名</th>\r\n    <th>状态</th>\r\n    <th>角色</th>\r\n    <th>操作</th>\r\n  </tr>\r\n</thead>\r\n<tbody class="text-c">\r\n  ';
        stack1 = helpers.each.call(depth0, depth0, {
            hash: {},
            inverse: self.noop,
            fn: self.program(1, program1, data),
            data: data
        });
        if (stack1 || stack1 === 0) {
            buffer += stack1
        }
        buffer += "\r\n</tbody>";
        return buffer
    })
});