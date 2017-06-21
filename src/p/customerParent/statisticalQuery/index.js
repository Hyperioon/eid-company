define(function(require, exports, module){
    var $ = require("$"),
        tools = require("../../../c/js/toolsSocket.js");
    require("../../../c/js/jquery.pager");
    require('../../../c/js/registerHelper');
    require("../../../c/static/h-ui/js/H-ui");

    require("../../../c/js/jquery.provincesCity2");

    var queryBoxTmp = require("./queryBoxTmp.handlebars");
    var listTmp = require("./listTmp.handlebars");

    var main = {
        init:function(){
            var self = this;
            tools.displaynavbar();
            tools.customerParentInit();
            //导入搜索栏
            $("#queryBoxID").html(queryBoxTmp());
            self.setYear();
            //初始化地址选择控件
            $("#address").ProvinceCity2();

            //获取门店名称列表
            var province = $("#province").val();
            var city = $("#city").val();
            var data = {
                province:province,
                city:city
            }
            //.log(data);
            self.getStoreNameList(data);

            self.list = $("#tableBox");
            self.data = {
                pageIndex:1,
                pageSize:10,
                year:$("#yearSelect").val()
            }
            self.getList(self.data);

            self.initEvents();
        },
        setYear:function () {
            var yearSelect = $("#yearSelect");
            var date = new Date();
            var currentYear = date.getFullYear();
            //.log(currentYear);
            for(var i=currentYear;i>currentYear-7;i--){
                yearSelect.append('<option value="'+i+'">'+i+'</option>')
            }
        },
        initEvents:function () {
            var self = this;

            $("#city,#province").on("change",function () {
                self.province = $("#province").val();
                self.city = $("#city").val();
                //.log(province+","+city);
                self.data = {
                    pageIndex:1,
                    pageSize:10,
                    province:self.province,
                    city:self.city,
                    year:$("#yearSelect").val()
                }
                self.getList(self.data);
                //获取门店名称列表
                var data = {
                    province:self.province,
                    city:self.city
                }
                console.log(data);
                self.getStoreNameList(data);
            });
            //门店名称选择事件
            $("#storeNameSelect").on("change",function () {
                self.storeName = $(this).val();
                self.data = {
                    pageIndex:1,
                    pageSize:10,
                    province:self.province,
                    city:self.city,
                    companyName:self.storeName,
                    year:self.year
                }
                self.getList(self.data);
            });
            //年份选择事件
            $("#yearSelect").on("change",function () {
                self.year = $(this).val();
                self.data = {
                    pageIndex:1,
                    pageSize:10,
                    province:self.province,
                    city:self.city,
                    companyName:self.storeName,
                    year:self.year
                }
                self.getList(self.data);
            });
            //搜索按钮点击事件（根据客户姓名搜索）
            $("#searchIcon").on("click",function () {
                var searchText = $("#searchText").val();
                self.data = {
                    pageIndex:1,
                    pageSize:10,
                    borrowerName:searchText.trim()
                }
                self.getList(self.data);
            });
        },
        getStoreNameList:function (data) {
            $.ajax({
                data:data,
                cache: false,
                type: "post",
                url: '/headShop/subShop/dropdown.json',
                success: function(data){
                    //.log(data);
                    if(data.code==0){
                        var list = data.list;
                        $("#storeNameSelect").empty().append('<option value="">全部</option>')
                        for(var i=0;i<list.length;i++){
                            $("#storeNameSelect").append('<option value="'+list[i].companyName+'">'+list[i].companyName+'</option>')
                        }
                    }else{
                        tools.tusi(data.error);
                    }
                }
            });
        },
        getList:function (data) {
            var self = this;
            $.ajax({
                data:data,
                cache: false,
                type: "post",
                url: ' /head/shop/total.json',
                success: function(data){
                    //.log(data);
                    if(data.code==0){
                        var list = data.obj.list;
                        self.list.html(listTmp(list));
                        self.pagerInit(data.obj.count);
                    }else{
                        tools.tusi(data.error);
                    }
                }
            });
        },
        pagerInit:function(totalcount){
            var self = this;
            $("#loading").hide();
            if(totalcount>0){
                $("#pager").show();
            }else{
                $("#pager").hide();
            }
            $("#pager").pager({
                pagenumber: self.data.pageIndex,
                pagecount: Math.ceil(totalcount/self.data.pageSize),
                totalcount: totalcount,
                //回调函数
                buttonClickCallback: function(pageclickednumber) {
                    self.data.pageIndex = pageclickednumber;
                    self.getList(self.data);
                }
            });
        },
    };
    main.init();
});