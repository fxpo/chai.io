(function(){var e={}.hasOwnProperty,t=function(t,n){function i(){this.constructor=t}for(var r in n)e.call(n,r)&&(t[r]=n[r]);return i.prototype=n.prototype,t.prototype=new i,t.__super__=n.prototype,t};ChaiIo.Views.ReportMain=function(e){function n(e){this.events={"click #btn-public-url":"enableSharing","click #btn-enable-sharing":"enableSharing","click #btn-disable-sharing":"disableSharing"},n.__super__.constructor.call(this,e)}return t(n,e),n.prototype.setReportTypeView=function(e){return this.setThisAsParentView(this.reportTypeView=e)},n.prototype.isEmbedded=function(){return this.model.isReportEmbedded()},n.prototype.render=function(){return this.isEmbedded()||this.initFilterView(),this.reportTypeView&&this.reportTypeView.render(),this.isEmbedded()||this.renderSharingOptions(),this.delegateEvents()},n.prototype.filtersContainer=function(){return $("#dv_filters")},n.prototype.initFilterView=function(){return this.filter_view=new ChaiIo.Views.ReportFiltersView({el:this.filtersContainer(),model:this.model}),this.filter_view.render()},n.prototype.getReportURL=function(){return"/reports/"+this.model.getReportId()},n.prototype.disableSharing=function(e){var t=this;return this.$("#btn-disable-sharing").button("loading"),this.sendRequest(""+this.getReportURL()+"/unshare",{},function(e){return t.model.updateReport("sharing_enabled",!1),t.renderSharingOptions()})},n.prototype.enableSharing=function(e){var t=this;return this.$("#btn-enable-sharing").button("loading"),this.sendRequest(""+this.getReportURL()+"/share",{},function(e){if(e)return t.showPublicURL(e.public_url),t.model.updateReport("sharing_enabled",!0),t.renderSharingOptions()})},n.prototype.showPublicURL=function(e){return this.$("#txt_public_url").val(e),this.$("#aSharingModal").click()},n.prototype.renderSharingOptions=function(){return this.$("#sharing_container").html(ich.tpl_sharing({report:this.model.getReport()})),this.$("#btn-enable-sharing").button("reset"),this.$("#btn-disable-sharing").button("reset")},n}(ChaiIo.Views.Base)}).call(this);