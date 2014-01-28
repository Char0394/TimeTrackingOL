Ext.define('TimeTracking.view.project.Create', {
    extend: 'Ext.window.Window',
    alias : 'widget.projectCreate',
    requires: ['Ext.form.Panel','Ext.form.field.ComboBox','Ext.form.field.Text'],
    title : 'Create Project',
    collapsible:false,
    layout: 'fit',
    autoShow: true,
    height: 400,
    width: 500,
    initComponent: function() {
        var stores = Ext.create('TimeTracking.store.Clients',{autoLoad:true});
       this.items= [{
                xtype: 'form',
                padding: '10 10 10 10',
                border: true,
                items:[{             
                     xtype: 'combo',
                     name: 'clients',
                     forceSelection: true,
                     triggerAction: 'all',
                     emptyText:'Select a client...',
                     //selectOnFocus:true,
                     //allowBlank : true,
                     fieldLabel: 'Client',
                     store: stores,
                     displayField: 'name',
                     editable: false,
                     valueField: 'id'
                    },{
                     xtype: 'textfield',
                     name: 'name',
                     //emptyText: 'Project Name',
                    //afterLabelTextTpl: required,
                     fieldLabel: 'Name'
                     },{
                     xtype: 'textareafield',
                     name: 'notes',
                     //afterLabelTextTpl: required,
                     //emptyText: 'Notes',
                     fieldLabel: 'Notes'
                    
                     }]}];
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
