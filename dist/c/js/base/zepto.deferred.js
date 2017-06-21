define("xg/eid-company/1.0.0/c/js/base/zepto.deferred",[],function(require,exports,module){!function($){function Deferred(func){var tuples=[["resolve","done",$.Callbacks({once:1,memory:1}),"resolved"],["reject","fail",$.Callbacks({once:1,memory:1}),"rejected"],["notify","progress",$.Callbacks({memory:1})]],state="pending",promise={state:function(){return state},always:function(){return deferred.done(arguments).fail(arguments),this},then:function(){var fns=arguments;return Deferred(function(defer){$.each(tuples,function(i,tuple){var fn=$.isFunction(fns[i])&&fns[i];deferred[tuple[1]](function(){var returned=fn&&fn.apply(this,arguments);if(returned&&$.isFunction(returned.promise))returned.promise().done(defer.resolve).fail(defer.reject).progress(defer.notify);else{var context=this===promise?defer.promise():this,values=fn?[returned]:arguments;defer[tuple[0]+"With"](context,values)}})}),fns=null}).promise()},promise:function(obj){return null!=obj?$.extend(obj,promise):promise}},deferred={};return $.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[3];promise[tuple[1]]=list.add,stateString&&list.add(function(){state=stateString},tuples[1^i][2].disable,tuples[2][2].lock),deferred[tuple[0]]=function(){return deferred[tuple[0]+"With"](this===deferred?promise:this,arguments),this},deferred[tuple[0]+"With"]=list.fireWith}),promise.promise(deferred),func&&func.call(deferred,deferred),deferred}var slice=Array.prototype.slice;$.when=function(sub){var progressValues,progressContexts,resolveContexts,resolveValues=slice.call(arguments),len=resolveValues.length,i=0,remain=1!==len||sub&&$.isFunction(sub.promise)?len:0,deferred=1===remain?sub:Deferred(),updateFn=function(i,ctx,val){return function(value){ctx[i]=this,val[i]=arguments.length>1?slice.call(arguments):value,val===progressValues?deferred.notifyWith(ctx,val):--remain||deferred.resolveWith(ctx,val)}};if(len>1)for(progressValues=new Array(len),progressContexts=new Array(len),resolveContexts=new Array(len);i<len;++i)resolveValues[i]&&$.isFunction(resolveValues[i].promise)?resolveValues[i].promise().done(updateFn(i,resolveContexts,resolveValues)).fail(deferred.reject).progress(updateFn(i,progressContexts,progressValues)):--remain;return remain||deferred.resolveWith(resolveContexts,resolveValues),deferred.promise()},$.Deferred=Deferred}(Zepto),module.exports=Zepto});