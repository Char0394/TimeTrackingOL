Ext.define('TimeTracking.view.project.Create', {
    extend: 'Ext.window.Window',
    alias : 'widget.projectCreate',
    requires: ['Ext.form.Panel','Ext.form.field.ComboBox','Ext.form.field.Text'],
    store:Ext.create('TimeTracking.store.Projects',{autoLoad: true
    }),
    title : 'Create Project',
    collapsible:false,
    layout: 'fit',
    autoShow: true,
    height: 400,
    width: 500,
   
    initComponent: function() {

       this.items= [{
                xtype: 'form',
                padding: '5 5 5 5',
                border: true,
                items:[{             
                     xtype: 'combo',
                     name: 'clients',
                     id:"cClients",
                     forceSelection: true,
                     emptyText:'Select a client...',
                     allowBlank : false,
                     fieldLabel: 'Client',
                     store: Ext.create('TimeTracking.store.Clients'),
                     displayField: 'name',
                    // valueField: 'id',
                     editable: false
                    },{
                     xtype: 'textfield',
                     name: 'name',
                     fieldLabel: 'Name',
                     allowBlank : false,
                     forceSelection: true,
                     },{
                     xtype: 'textareafield',
                     name: 'notes',
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
