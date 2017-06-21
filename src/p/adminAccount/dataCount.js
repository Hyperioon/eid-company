define(function(require, exports, module){
    var $ = require("$"),
        tools = require("../../c/js/tools");   

    var dataCountMH = require('../../p/adminAccount/dataCountH/dataCountMH.handlebars'),
        dataCountTableH = require('../../p/adminAccount/dataCountH/dataCountTableH.handlebars'),
        data = {
            pageIndex: 1,
            pageSize: 10,
            year: $("#year").val()
        }    

    var dataCount = {
        init:function(){
            var self = this;
            $(".customerM").html(dataCountMH());
            self.getAllYear();
            self.selectYearEvt();
            self.dataList();
            self.searchData();
            // setInterval(function() {  
            //     $.ajax({ 
            //         type: "post",
            //         url: "/master/datacount.json",
            //         data: data,
            //         success: function(data, status, xhr){
            //             if(data.code == -1){ 
            //                 alert("有错误");
            //             }else{ 
            //                 $(".dataTable").html(dataCountTableH(data.list));
            //             }
            //         },
            //         error: function(xhr, errorType, error){
            //             alert(error);
            //         }
            //     }) 
            // }, 3000);  
        },
        getAllYear: function(){
            var year = $("#year");
            $.ajax({ 
                type: "post",
                url: "/master/doGetYears.json",
                success: function(data, status, xhr){
                    if(data.code == -1){ 
                        alert(data.error);
                    }else{ 
                        for(var i=0;i<data.list.length;i++){
                            console.log(data.list[i]);
                            year.append("<option value='"+data.list[i]+"'>"+data.list[i]+"</option>");
                        }
                        // alert("恭喜你登录成功");
                    }
                },
                error: function(xhr, errorType, error){
                    alert(error);
                }
            })
        },
        selectYearEvt: function(){
            var self = this;
            $("#year").on("change", function(){
                data.pageIndex = 1;
                data.year = $("#year").val();
                data.companyName = $("#companyName").val();
                console.log(data.year);
                self.dataList();
            })
        },
        dataList: function(){
            var self = this;
            $.ajax({ 
                type: "post",
                url: "/master/datacount.json",
                data: data,
                success: function(data, status, xhr){
                    if(data.code == -1){ 
                        alert(data.error);
                    }else{ 
                        $(".dataTable").html(dataCountTableH(data.list));
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
                    self.dataList();
                }
            });
        },
        searchData: function(){
            var self = this;
            var validate = $("#dataCount_searchForm").validate({
                debug: true, //调试模式取消submit的默认提交功能   
                //errorClass: "label.error", //默认为错误的样式类为：error   
                focusInvalid: false, //当为false时，验证无效时，没有焦点响应  
                onkeyup: false,
                onblur: true,     
                submitHandler: function(form){   //表单提交句柄,为一回调函数，带一个参数：form   
                    data.companyName = $("#companyName").val();
                    data.pageIndex = 1;
                    self.dataList();                 
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
    module.exports = dataCount;
    // main.init();
});