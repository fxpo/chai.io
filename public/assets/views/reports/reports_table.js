(function(){var e={}.hasOwnProperty,t=function(t,n){function i(){this.constructor=t}for(var r in n)e.call(n,r)&&(t[r]=n[r]);return i.prototype=n.prototype,t.prototype=new i,t.__super__=n.prototype,t};ChaiIo.Views.ReportsTable=function(e){function n(e){this.events={"click .tbl_r_col":"sortHandler","keyup #search_keywords":"search","keydown #search_keywords":"search"},n.__super__.constructor.call(this,e)}return t(n,e),n.prototype.search=function(e){var t,n;return n=this.$("#search_keywords").val(),t=this.getData(),n===""?this.showTable(t):this.showTable(this.report_data.filterData(n))},n.prototype.getTemplateName=function(){return"report_table"},n.prototype.hasNestedDataValues=function(){return!0},n.prototype.sortHandler=function(e){var t;return t=$(e.currentTarget).text(),this.setData(this.report_data.sortModel(this.getColumnIndex(t))),this.reRenderTpl()},n.prototype.showTable=function(e){var t;return this.setSummary(e),t=this.reportDataToJSON(),t.data=e,this.renderTpl("tpl_table_body",this.$("#tbody"),t)},n.prototype.preRender=function(){return this.setSummary(this.getData())},n.prototype.setSummary=function(e){if(this.summaryEnabled())return this.report_data.setSummaryRow(this.getSummaryRow(e))},n.prototype.summaryEnabled=function(){return this.getFieldsToSum()||this.getFieldsToAverage()},n.prototype.getFieldsToSum=function(){return this.model.getFieldsToSum()},n.prototype.getFieldsToAverage=function(){return this.model.getFieldsToAverage()},n.prototype.getSummaryRow=function(e){var t,n,r,i,s;s=[],i=this.getFieldsToSum(),t=this.getFieldsToAverage(),n=this.getColumns();for(r in n)s[r]||(s[r]=""),_.indexOf(i,n[r])>=0?s[r]=this.report_data.getColumnSum(n[r]):_.indexOf(t,n[r])>=0&&(s[r]=this.report_data.getColumnAvg(n[r]));return s},n}(ChaiIo.Views.ReportsIndex)}).call(this);