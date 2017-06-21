define("xg/eid-company/1.0.0/p/report/plscan.handlebars",["alinw/handlebars/1.3.0/runtime"],function(require,exports,module){var Handlebars=require("alinw/handlebars/1.3.0/runtime"),template=Handlebars.template;module.exports=template(function(Handlebars,depth0,helpers,partials,data){return this.compilerInfo=[4,">= 1.0.0"],helpers=this.merge(helpers,Handlebars.helpers),data=data||{},'<div class="title title2 overflowHidden" id="plscan">\r\n    <div class="title2Text" id="reportTitle">人法扫描报告</div>\r\n</div>\r\n<table class="scan">\r\n    <tbody>\r\n    <tr>\r\n        <td>法院执行名单</td>\r\n        <td><span class="ellipsis w500" id="courtExecute"></span></td>\r\n    </tr>\r\n    <tr>\r\n        <td>失信老赖名单</td>\r\n        <td><span class="ellipsis w500" id="lossCredit"></span></td>\r\n    </tr>\r\n    <tr>\r\n        <td>限制高消费名单</td>\r\n        <td><span class="ellipsis w500" id="limitHighCost"></span></td>\r\n    </tr>\r\n    <tr>\r\n        <td>限制出入境名单</td>\r\n        <td><span class="ellipsis w500" id="limitEntryExit"></span></td>\r\n    </tr>\r\n    <tr>\r\n        <td>犯罪及嫌疑人名单</td>\r\n        <td><span class="ellipsis w500" id="crime"></span></td>\r\n    </tr>\r\n    <tr>\r\n        <td>行政违法名单</td>\r\n        <td><span class="ellipsis w500" id="breakLaw"></span></td>\r\n    </tr>\r\n    </tbody>\r\n</table>\r\n<table class="record mt40">\r\n    <thead class="text-c">\r\n    <tr><td colspan="4">案件记录</td></tr>\r\n    <tr>\r\n        <td>案号</td>\r\n        <td style="width: 420px">执行法院</td>\r\n        <td style="width: 120px">时间</td>\r\n        <td style="width: 200px">案件状态</td>\r\n    </tr>\r\n    </thead>\r\n    <tbody id="courtList">\r\n    \r\n    </tbody>\r\n</table>'})});