Ext.define('TimeTracking.view.client.Edit', {
	extend: 'Ext.window.Window',
	alias : 'widget.clientEdit',
	requires: ['Ext.form.Panel'],
	title : 'Client Edit',
	collapsible:true,
	layout: 'fit',
	autoShow: true,
	height: 400,
	width: 500,
	initComponent: function() {
		this.items = [
			{
				xtype: 'form',
				padding: '5 5 5 5',
				border: true,
				items: [
					{
					xtype: 'textfield',
					name : 'name',
					fieldLabel: 'Name'
					},
					{
					xtype: 'textareafield',
					name : 'adress',
					fieldLabel: 'Notes'
					}
				]
			}
		];
	this.buttons = [
		{
		text: 'Save',
		action: 'save'
		},
		{
		text: 'Cancel',
		action: 'cancel'
		}
	];
	this.callParent(arguments);
	}
});


