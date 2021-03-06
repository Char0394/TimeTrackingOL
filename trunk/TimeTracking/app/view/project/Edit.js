Ext.define('TimeTracking.view.project.Edit', {
	extend: 'Ext.window.Window',
	alias : 'widget.projectEdit',
	requires: ['Ext.form.Panel'],
	title : 'Edit Project',
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
                        name : 'client',
                        fieldLabel: 'Client'
                    },
					{
					xtype: 'textfield',
					name : 'name',
					fieldLabel: 'Name'
					},
					{
					xtype: 'textareafield',
					name : 'notes',
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


