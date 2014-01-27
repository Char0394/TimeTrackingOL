Ext.define('TimeTracking.controller.Portal', {
 extend:'Ext.app.Controller',
	views:['portal.Portal'],
	refs:[{
		ref:'mainTabPanel',
		selector:'portal>tabpanel'
	}],
	init:function(){
		this.control({
			'portal toolbar > #addtab':{
				click:this.onAddTab
			}
		});
	},
	onAddTab:function(){
		Ext.Msg.prompt("Introduce un nombre para el tab","",function(b,label){
			if(b =='ok'){

				this.getMainTabPanel().add({
					title:label,
					closable:true
				});
			}
		},
		this);
	}
	
});