Ext.define('TimeTracking.view.project.Project', {
    extend: 'Ext.form.Panel',
    xtype: 'register-form',
    
    
    frame: true,
    title: 'Register',
    bodyPadding: 10,
    autoScroll:true,
    width: 355,

    fieldDefaults: {
        labelAlign: 'right',
        labelWidth: 115,
        msgTarget: 'side'
    },

    initComponent: function() {
        this.items = [{
            xtype: 'fieldset',
            title: 'Create New Project',
            defaultType: 'textfield',
            defaults: {
                anchor: '100%'
            },
            items: [{
            	xtype: 'combobox',
                fieldLabel: 'Client',
                name: 'Client',
                //store: Ext.create(''),
                valueField: 'abbr',
                displayField: 'Client',
                typeAhead: true,
                queryMode: 'local',
                emptyText: 'Select a client...'
                
            },
            {
                fieldLabel: 'Project Name',
                emptyText: 'Define a name for the project',
                name: 'projectName'
                //allowBlank: false,
            },
            {
            	xtype: 'textareafield',
            	name: 'projectNotesTextArea',
            	fieldLabel: 'Project Notes',
            	value: 'Write notes in this field'
        	}]
        }];

        this.callParent();
    },

    buttons: [{
        text: 'Register',
        disabled: true,
        formBind: true
    }]
});