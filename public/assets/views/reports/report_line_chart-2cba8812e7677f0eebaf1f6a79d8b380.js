(function(){var e={}.hasOwnProperty,t=function(t,n){function i(){this.constructor=t}for(var r in n)e.call(n,r)&&(t[r]=n[r]);return i.prototype=n.prototype,t.prototype=new i,t.__super__=n.prototype,t};ChaiIo.Views.ReportsLine_chart=function(e){function n(){return n.__super__.constructor.apply(this,arguments)}return t(n,e),n.prototype.preRender=function(){},n.prototype.postRender=function(){var e,t=this;return e=this.prepareData(),console.log(e),nv.addGraph(function(){var t;return t=nv.models.lineChart(),t.color(d3.scale.category10().range()),t.x(function(e,t){return e.x}),t.xAxis.tickFormat(function(e){return d3.time.format("%x")(new Date(e))}),t.yAxis.tickFormat(d3.format(",.1f")),d3.select("#line_chart svg").datum(e).transition().duration(1e3).call(t),nv.utils.windowResize(t.update),t})},n.prototype.getTemplateName=function(){return"report_line_chart"},n.prototype.convertDateToTime=function(){return!0},n}(ChaiIo.Views.ReportsBar_chart)}).call(this);