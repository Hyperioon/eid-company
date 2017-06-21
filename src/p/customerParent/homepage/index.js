define(function (require, exports, module) {
    var $ = require("$"),
        tools = require("../../../c/js/toolsSocket");
    require("../../../c/js/jquery.pager");
    require('../../../c/js/registerHelper');
    require("../../../c/static/h-ui/js/H-ui");
    require("../../../c/js/echarts.min");
    var todayRank = require("./todayRank.handlebars");
    var monthRank = require("./monthRank.handlebars");
    var main = {
        init: function () {
            var self = this;
            //.log(data);
            self.data = {
                queryDateType: 'today'
            }
            self.getList(self.data);
        },
        // 格式化直方图数据
        getTotal: function (list) {
            var totalList = [];
            totalList.push(list.green);
            totalList.push(list.yellow);
            totalList.push(list.red);
            // 手机验证总数
            var verifyTotal = [];
            verifyTotal.push(list.greenMobileVerified);
            verifyTotal.push(list.yellowMobileVerified);
            verifyTotal.push(list.redMobileVerified);
            // 审核人数
            var checkTotal = [];
            checkTotal.push(list.greenVerified);
            checkTotal.push(list.yellowVerified);
            checkTotal.push(list.redVerified);
            // 审核通过
            var successTotal = [];
            successTotal.push(list.greenSuccess);
            successTotal.push(list.yellowSuccess);
            successTotal.push(list.redSuccess);
            var total = {};
            total.totalList = totalList;
            total.verifyTotal = verifyTotal;
            total.successTotal = successTotal;
            return total;
        },
        getList: function (data) {
            var self = this;
            // 获取直方图数据
            $.ajax({
                data: data,
                cache: false,
                type: "post",
                url: '/home/histogram.json',
                success: function (data) {
                    // 柱状图 饼状图
                    if (data.code === 0) {
                        var todayData = data.obj;
                        $("#loading").hide();
                        // 显示帮助
                        $('.help-content').html("<h5>手机验证：指手机号码与身份匹配的申请客户</h5><h5>已审核：指已审核的申请客户，包含审核通过和未通过</h5><h5>已通过：指已审核通过的申请客户</h5>");
                        $(".hover-help").hover(function () {
                            $(".help-content").css("visibility", "visible");
                        }, function () {
                            $(".help-content").css("visibility", "hidden");
                        });
                        // 昨日数据
                        $('.choose-date .total').html("昨日数据:");
                        // 柱状图
                        var columnar = echarts.init(document.getElementById('columnar'));
                        option = {
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {
                                    type: 'shadow'
                                }
                            },
                            grid: {
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                            yAxis: {
                                type: 'value',
                                boundaryGap: [0, 0.01]
                            },
                            xAxis: {
                                type: 'category',
                                data: ['绿色报告         手机验证           已审核              已通过', '黄色报告         手机验证           已审核              已通过', '红色报告         手机验证           已审核              已通过']
                            },
                            series: [{
                                    name: '总数',
                                    type: 'bar',
                                    data: [1, 2, 3]
                                },
                                {
                                    name: '手机验证',
                                    type: 'bar',
                                    data: [5, 6, 3]
                                },
                                {
                                    name: '已审核',
                                    type: 'bar',
                                    data: [1, 3, 1]
                                },
                                {
                                    name: '已通过',
                                    type: 'bar',
                                    data: [5, 6, 7]
                                }
                            ]
                        };
                        columnar.setOption(option);
                        $('.query-times').html("查询统计（次）");

                    } else {
                        tools.tusi(data.error);
                    }
                }
            });
            // 获取饼图
            // 饼图
            $.ajax({
                data: {
                    queryDateType: 'today'
                },
                cache: false,
                type: "post",
                url: '/home/pieChart.json',
                success: function (data) {
                    if (data.code === 0) {
                        console.log(data);
                        var pieFirst = echarts.init(document.getElementById('pie'));
                        pieFirstOption = {
                            tooltip: {
                                trigger: 'item',
                                formatter: "{a} <br/>{b}: {c} ({d}%)"
                            },
                            series: [{
                                    type: 'pie',
                                    selectedMode: 'single',
                                    radius: [0, '30%'],
                                    label: {
                                        normal: {
                                            position: 'inner'
                                        }
                                    },
                                    labelLine: {
                                        normal: {
                                            show: false
                                        }
                                    },
                                    data: [{
                                            value: 335,
                                            name: '已审核',
                                            selected: true,
                                        },
                                        {
                                            value: 679,
                                            name: '未审核'
                                        }
                                    ]
                                },
                                {
                                    name: '访问来源',
                                    type: 'pie',
                                    radius: ['40%', '55%'],

                                    data: [{
                                            value: 335,
                                            name: '直达'
                                        },
                                        {
                                            value: 310,
                                            name: '邮件营销'
                                        },
                                        {
                                            value: 234,
                                            name: '联盟广告'
                                        },
                                        {
                                            value: 135,
                                            name: '视频广告'
                                        },
                                        {
                                            value: 1048,
                                            name: '百度'
                                        },
                                        {
                                            value: 251,
                                            name: '谷歌'
                                        },
                                        {
                                            value: 147,
                                            name: '必应'
                                        },
                                        {
                                            value: 102,
                                            name: '其他'
                                        }
                                    ]
                                }
                            ]
                        };
                        pieFirst.setOption(pieFirstOption, true);
                        $('.check-times').html("审核（次）");
                        var verify = echarts.init(document.getElementById('verify'));
                        verifytOption = {
                            tooltip: {
                                trigger: 'item',
                                formatter: "{a} <br/>{b}: {c} ({d}%)"
                            },
                            series: [{
                                    name: '访问来源',
                                    type: 'pie',
                                    selectedMode: 'single',
                                    radius: [0, '30%'],

                                    label: {
                                        normal: {
                                            position: 'inner'
                                        }
                                    },
                                    labelLine: {
                                        normal: {
                                            show: false
                                        }
                                    },
                                    data: [{
                                            value: 335,
                                            name: '已审核',
                                            selected: true,
                                        },
                                        {
                                            value: 679,
                                            name: '未审核'
                                        }
                                    ]
                                },
                                {
                                    name: '访问来源',
                                    type: 'pie',
                                    radius: ['40%', '55%'],

                                    data: [{
                                            value: 335,
                                            name: '直达'
                                        },
                                        {
                                            value: 310,
                                            name: '邮件营销'
                                        },
                                        {
                                            value: 234,
                                            name: '联盟广告'
                                        },
                                        {
                                            value: 135,
                                            name: '视频广告'
                                        },
                                        {
                                            value: 1048,
                                            name: '百度'
                                        },
                                        {
                                            value: 251,
                                            name: '谷歌'
                                        },
                                        {
                                            value: 147,
                                            name: '必应'
                                        },
                                        {
                                            value: 102,
                                            name: '其他'
                                        }
                                    ]
                                }
                            ]
                        };
                        verify.setOption(verifytOption, true);
                        $('.verify-times').html("验证（次）");
                        // 选择时间查询
                        $('.choose-dm .total').html("今日合计（次）");
                        $('.choose-dm span').click(function () {
                            $(this).addClass("choosed");
                            $(this).siblings().removeClass("choosed");
                            // 本月
                            if ($(this).text() == '本月') {
                                $.ajax({
                                    data: 'thisMonth',
                                    cache: false,
                                    type: "post",
                                    url: '/home/histogram.json',
                                    success: function (data) {
                                        console.log(data.obj);
                                    }
                                });
                            } else {
                                // 今日
                                console.log(todayData);
                                $('.choose-dm .total').html("今日合计（次）");
                            }
                        });
                    }
                }
            })

            // 获取排行数据
            $.ajax({
                cache: false,
                type: "post",
                url: '/home/rank.json',
                success: function (data) {
                    if (data.code === 0) {
                        var today = data.obj.today;
                        $("#todayRank").html(todayRank(today));
                        var month = data.obj.month;
                        $("#monthRank").html(monthRank(month));
                    } else {
                        tools.tusi(data.error);
                    }
                }
            });
            // 柱状图点击本月、今天、昨天
            $('.choose-date span').click(function () {
                $(this).addClass("choosed");
                $(this).siblings().removeClass("choosed");
                // 本月
                if ($(this).text() == '本月') {
                    $.ajax({
                        data: {
                            queryDateType: 'thisMonth'
                        },
                        cache: false,
                        type: "post",
                        url: '/home/histogram.json',
                        success: function (data) {
                            var list = data.obj.thisMonth;
                            var total = self.getTotal(list);
                            // 柱状图
                            var columnar = echarts.init(document.getElementById('columnar'));
                            option = {
                                tooltip: {
                                    trigger: 'axis',
                                    axisPointer: {
                                        type: 'shadow'
                                    }
                                },
                                grid: {
                                    left: '3%',
                                    right: '4%',
                                    bottom: '3%',
                                    containLabel: true
                                },
                                yAxis: {
                                    type: 'value',
                                    boundaryGap: [0, 0.01]
                                },
                                xAxis: {
                                    type: 'category',
                                    data: ['绿色报告         手机验证           已审核              已通过', '黄色报告         手机验证           已审核              已通过', '红色报告         手机验证           已审核              已通过']
                                },
                                series: [{
                                        name: '总数',
                                        type: 'bar',
                                        data: total.totalList
                                    },
                                    {
                                        name: '手机验证',
                                        type: 'bar',
                                        data: total.verifyTotal
                                    },
                                    {
                                        name: '已审核',
                                        type: 'bar',
                                        data: total.checkTotal
                                    },
                                    {
                                        name: '已通过',
                                        type: 'bar',
                                        data: total.successTotal
                                    }
                                ]
                            };
                            columnar.setOption(option);
                            // 上月数据
                            $('.choose-date .total').html("上月数据:");
                        }
                    });
                } else {
                    // 今日
                    $.ajax({
                        data: {
                            queryDateType: 'today'
                        },
                        cache: false,
                        type: "post",
                        url: '/home/histogram.json',
                        success: function (data) {
                            console.log(data);
                            var list = data.obj.today;
                            var total = self.getTotal(list);
                            // 柱状图
                            var columnar = echarts.init(document.getElementById('columnar'));
                            option = {
                                tooltip: {
                                    trigger: 'axis',
                                    axisPointer: {
                                        type: 'shadow'
                                    }
                                },
                                grid: {
                                    left: '3%',
                                    right: '4%',
                                    bottom: '3%',
                                    containLabel: true
                                },
                                yAxis: {
                                    type: 'value',
                                    boundaryGap: [0, 0.01]
                                },
                                xAxis: {
                                    type: 'category',
                                    data: ['绿色报告         手机验证           已审核              已通过', '黄色报告         手机验证           已审核              已通过', '红色报告         手机验证           已审核              已通过']
                                },
                                series: [{
                                        name: '总数',
                                        type: 'bar',
                                        data: total.totalList
                                    },
                                    {
                                        name: '手机验证',
                                        type: 'bar',
                                        data: total.verifyTotal
                                    },
                                    {
                                        name: '已审核',
                                        type: 'bar',
                                        data: total.checkTotal
                                    },
                                    {
                                        name: '已通过',
                                        type: 'bar',
                                        data: total.successTotal
                                    }
                                ]
                            };
                            columnar.setOption(option);
                            // 上月数据
                            $('.choose-date .total').html("昨日数据:");
                        }
                    });
                }
                // 昨天
                $('.yesterday').click(function () {
                    $.ajax({
                        data: {
                            queryDateType: 'today'
                        },
                        cache: false,
                        type: "post",
                        url: '/home/histogram.json',
                        success: function (data) {
                            console.log(data);
                            var list = data.obj.yesterday;
                            var total = self.getTotal(list);
                            // 柱状图
                            var columnar = echarts.init(document.getElementById('columnar'));
                            option = {
                                tooltip: {
                                    trigger: 'axis',
                                    axisPointer: {
                                        type: 'shadow'
                                    }
                                },
                                grid: {
                                    left: '3%',
                                    right: '4%',
                                    bottom: '3%',
                                    containLabel: true
                                },
                                yAxis: {
                                    type: 'value',
                                    boundaryGap: [0, 0.01]
                                },
                                xAxis: {
                                    type: 'category',
                                    data: ['绿色报告         手机验证           已审核              已通过', '黄色报告         手机验证           已审核              已通过', '红色报告         手机验证           已审核              已通过']
                                },
                                series: [{
                                        name: '总数',
                                        type: 'bar',
                                        data: total.totalList
                                    },
                                    {
                                        name: '手机验证',
                                        type: 'bar',
                                        data: total.verifyTotal
                                    },
                                    {
                                        name: '已审核',
                                        type: 'bar',
                                        data: total.checkTotal
                                    },
                                    {
                                        name: '已通过',
                                        type: 'bar',
                                        data: total.successTotal
                                    }
                                ]
                            };
                            columnar.setOption(option);
                            // 上月数据
                            $('.choose-date .total').html("昨日数据:");
                        }
                    });
                })
            });
        }
    };
    main.init();
});