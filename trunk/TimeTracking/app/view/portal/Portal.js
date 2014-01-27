Ext.define('TimeTracking.view.portal.Portal', {
	renderTo:Ext.getBody(),
	extend: 'Ext.container.Viewport',
	requires:['Ext.layout.container.Border',
	'Ext.toolbar.TextItem',
	'Ext.tab.Panel'],
	alias:'widget.portal',
	config:{
		title:'Portal Title',
		tabLayout:[{
			closable:true,
			title:'Pork!'
		}]
	},
	initComponent: function(){
		this.initConfig(this.initialConfig);
		Ext.apply(this,{
			layout:'border',
			items:[{
				xtype:'toolbar',
				region:'north',
				items:[{
					xtype:'tbtext',
					text:this.getTitle()
				},
				{
					xtype:'tbfill'
				},
				{
					itemId:'addtab',
					text:'Add Tab'
				},
				{
					itemId:'addportlet',
					text:'Add Portlet'
				}]
			},
			{
				xtype:'tabpanel',
				region:'center',
				plain:true,
				margins:'5 5 5 5',
				items:this.getTabLayout()
			}]
		});
		this.callParent(arguments);
	}
});