(function(){var e={}.hasOwnProperty,t=function(t,n){function i(){this.constructor=t}for(var r in n)e.call(n,r)&&(t[r]=n[r]);return i.prototype=n.prototype,t.prototype=new i,t.__super__=n.prototype,t};ChaiIo.Models.ReportData=function(e){function n(){return n.__super__.constructor.apply(this,arguments)}return t(n,e),n.prototype.getColumns=function(){return this.get("columns")},n.prototype.getColumnIndex=function(e){return _.indexOf(this.getColumns(),e.trim())},n.prototype.getColumnsIndices=function(e){var t,n,r,i,s;r=[];for(i=0,s=e.length;i<s;i++)t=e[i],n=this.getColumnIndex(t),n&&r.push(n);return r},n.prototype.getColumnValues=function(e){var t,n,r,i;i=[],r=this.getColumnIndex(e),t=_.pluck(this.getData(),"values");for(n in t)i.push(t[n][r]);return i},n.prototype.totalColumns=function(){return this.getColumns().length},n.prototype.getColumnSum=function(e){return ChaiIo.Util.sum(this.getColumnValues(e))},n.prototype.getColumnAvg=function(e){return ChaiIo.Util.avg(this.getColumnValues(e))},n.prototype.getData=function(){return this.get("data")},n.prototype.setData=function(e){return this.set({data:e})},n.prototype.setSummaryRow=function(e){return this.set({has_summary:!0,summary:e})},n.prototype.sortModel=function(e,t){var n=this;t==null&&(t="asc");if(e===!1)return;return _.sortBy(this.getData(),function(t){return t.values[e]})},n.prototype.filterData=function(e){var t,n=this;return t=_.filter(this.getData(),function(t){var n,r,i,s;s=t.values;for(r=0,i=s.length;r<i;r++){n=s[r],typeof n!="string"&&(n=""+n);if(n.toLowerCase().indexOf(e.toLowerCase(0))>=0)return!0}}),t},n.prototype.nestDataValues=function(){var e,t,n,r,i,s,o;e=this.getData(),t=[];for(s=0,o=e.length;s<o;s++){n=e[s],r=[];for(i in n)r.push(n[i]);t.push({values:r})}return t},n.prototype.getFirstColumn=function(){return this.getColumns().shift()},n.prototype.getFirstRow=function(){return this.getData().shift()},n}(Backbone.Model)}).call(this);