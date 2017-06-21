define(function(require, exports, module){
    var $ = require("$"),
        tools = require("../../c/js/tools");   

    // require("../../c/css/bootstrap.css"); 
    // require("../../c/css/bootstrap-datetimepicker.css"); 
    require("../../c/js/bootstrap-datetimepicker"); 
    require("../../c/js/bootstrap-datetimepicker.zh-CN");

    var inforServiceMH = require('../../p/adminAccount/inforServiceH/inforServiceMH.handlebars'),
        inforServiceTableH = require('../../p/adminAccount/inforServiceH/inforServiceTableH.handlebars'),
        data = {
            pageIndex: 1,
            pageSize: 10,
            status: "",
            queryTime: "all"
            // status: tools.getUrlParam("status") || "",
            // queryTime: tools.getUrlParam("queryTime") || "all"
        }       

    var inforService = {
        init:function(){
            var self = this;

            $(".customerM").html(inforServiceMH());

            self.datetimepicker();

            self.inforServiceList();
            self.searchInforService();
            self.statusTab();
            self.queryTimeTab();

            // var statusBtn = $("#bankStatus a"),
            //     queryTimeBtn = $("#queryTime a");

            // switch(tools.getUrlParam("status")){ 
            //     case "":
            //         statusBtn.removeClass("current");
            //         statusBtn.eq(0).addClass("current");
            //         break;
            //     case "1":
            //         statusBtn.removeClass("current");
            //         statusBtn.eq(1).addClass("current");
            //         break;
            //     case "2":
            //         statusBtn.removeClass("current");
            //         statusBtn.eq(2).addClass("current");
            //         break;
            //     case "3":
            //         statusBtn.removeClass("current");
            //         statusBtn.eq(3).addClass("current");
            //         break;
            //     default:
            //         statusBtn.removeClass("current");
            //         statusBtn.eq(0).addClass("current");
            //         break;
            // }
            // switch(tools.getUrlParam("queryTime")){ 
            //     case "all":
            //         queryTimeBtn.removeClass("current");
            //         queryTimeBtn.eq(0).addClass("current");
            //         break;
            //     case "today":
            //         queryTimeBtn.removeClass("current");
            //         queryTimeBtn.eq(1).addClass("current");
            //         break;
            //     case "threeDay":
            //         queryTimeBtn.removeClass("current");
            //         queryTimeBtn.eq(2).addClass("current");
            //         break;
            //     case "week":
            //         queryTimeBtn.removeClass("current");
            //         queryTimeBtn.eq(3).addClass("current");
            //         break;
            //     case "month":
            //         queryTimeBtn.removeClass("current");
            //         queryTimeBtn.eq(4).addClass("current");
            //         break;
            //     default:
            //         queryTimeBtn.removeClass("current");
            //         queryTimeBtn.eq(0).addClass("current");
            //         break;
            // }

        },
        datetimepicker: function(){
            var self = this;
            $(".customerM").find('.customStartTime').datetimepicker({
                language: 'zh-CN',
                format: "yyyy-mm-dd",
                startView: 2,
                minView: 2,
                autoclose: true,
                todayBtn: 1
            });
            $(".customerM").find('.customEndTime').datetimepicker({
                language: 'zh-CN',
                format: "yyyy-mm-dd",
                startView: 2,
                minView: 2,
                autoclose: true,
                todayBtn: 1
            });
            $(".customStartTime").on("click", function(){
                $('.customStartTime').datetimepicker('show');
                $('.customEndTime').datetimepicker('hide');
            })
            $(".customEndTime").on("click", function(){
                $('.customEndTime').datetimepicker('show');
                $('.customStartTime').datetimepicker('hide');
            })
            $('.customStartTime').datetimepicker().on('changeDate', function(e) {
                $("#queryTime a").removeClass("current");
                console.log($(".customStartTime").val())
                $('.customEndTime').datetimepicker('setStartDate', $('.customStartTime').val());
                if($.trim($(".customEndTime").val()).length<=0){
                    $(".customEndTime").val($('.customStartTime').val());
                }else{
                    // alert("请选择")
                }
                data.pageIndex = 1;
                data.customStartTime = $(".customStartTime").val();
                data.customEndTime = $(".customEndTime").val();
                data.companyName = $("#companyName").val();
                data.childName = $("#childName").val();
                data.borrowerName = $("#borrowerName").val();
                delete data["queryTime"];
                self.inforServiceList();
            })
            $('.customEndTime').datetimepicker().on('changeDate', function(e) {
                $("#queryTime a").removeClass("current");
                console.log($(".customEndTime").val())
                $('.customStartTime').datetimepicker('setEndDate', $('.customEndTime').val());
                if($.trim($(".customStartTime").val()).length<=0){
                    $(".customStartTime").val($('.customEndTime').val());
                }else{

                }
                data.pageIndex = 1;
                data.customStartTime = $(".customStartTime").val();
                data.customEndTime = $(".customEndTime").val();
                data.companyName = $("#companyName").val();
                data.childName = $("#childName").val();
                data.borrowerName = $("#borrowerName").val();
                delete data["queryTime"];
                self.inforServiceList();
            })
        },
        statusTab: function(){ 
            var self = this;
            var statusBtn = $("#bankStatus a");
            statusBtn.on("click", function(){
                var _this = $(this);
                statusBtn.removeClass("current");
                _this.addClass("current");
                data.pageIndex = 1;
                data.status = _this.data("status");
                data.companyName = $("#companyName").val();
                data.childName = $("#childName").val();
                data.borrowerName = $("#borrowerName").val();
                self.inforServiceList();
                // var url = tools.setUrlParam(location.href, "status", data.status);
                // location.href = url;
            })
        },
        queryTimeTab: function(){ 
            var self = this;
            var queryTimeBtn = $("#queryTime a");
            queryTimeBtn.on("click", function(){
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
                self.inforServiceList();
                // var url = tools.setUrlParam(location.href, "queryTime", data.queryTime);
                // location.href = url;
            })
        },
        inforServiceList: function(){
            var self = this;
            $.ajax({ 
                type: "post",
                url: "/master/borrowingInfo/list.json",
                data: data,
                success: function(data, status, xhr){
                    if(data.code == -1){ 
                        alert(data.error);
                    }else{ 
                        $(".inforTable").html(inforServiceTableH(data.list));
                        self.pagerInit(data.count);
                    }
                },
                error: function(xhr, errorType, error){
                    alert(error);
                }
            }) 
        },
        pagerInit:function(totalcount){
            var self = this;
            if(totalcount>0){
                $("#pager").show();
            }else{
                $("#pager").hide();
            }
            $("#pager").pager({
                pagenumber: data.pageIndex,
                pagecount: Math.ceil(totalcount/data.pageSize),
                totalcount: totalcount,
                //回调函数
                buttonClickCallback: function(pageclickednumber) {
                    data.pageIndex = pageclickednumber;
                    self.inforServiceList();
                }
            });
        },
        searchInforService: function(){
            var self = this;
            var validate = $("#infor_searchForm").validate({
                debug: true, //调试模式取消submit的默认提交功能   
                //errorClass: "label.error", //默认为错误的样式类为：error   
                focusInvalid: false, //当为false时，验证无效时，没有焦点响应  
                onkeyup: false,
                onblur: true,     
                submitHandler: function(form){   //表单提交句柄,为一回调函数，带一个参数：form   
                    data.pageIndex = 1;
                    data.companyName = $("#companyName").val();
                    data.childName = $("#childName").val();
                    data.borrowerName = $("#borrowerName").val();
                    self.inforServiceList();                 
                }                 
                // rules:{                   
                //     companyName:{
                //         required:true
                //     }          
                // },
                // messages:{                    
                //     companyName:{
                //         required: "<i>*</i>客户名称不能为空，请输入"                   
                //     }                                             
                // }                          
            });
        }
    };
    module.exports = inforService;
    // main.init();
});