Ext.define('TimeTracking.controller.Clients', {
    extend: 'Ext.app.Controller',
    config: {
        stores: ['Projects','Clients'],
        views: ['client.Edit', 'client.List','client.Create'],
        refs: [{
            ref: 'clientList',
            selector:'clientlist'
        }]
    },

    init: function(app) {
        this.control({
        'clientlist dataview': {
            itemdblclick: this.editClient
        },
        'clientEdit button[action=save]': {
            click: this.updateClient
        },
        'clientCreate button[action=save]': {
            click: this.createClient
        },
        'clientCreate button[action=cancel]': {
            click: this.cancelEditClient
        },
        'clientEdit button[action=cancel]': {
            click: this.cancelEditClient
        },
        'clientlist toolbar >button[itemId=createClient]':
        {
            click: this.openCreateClient
        }

        
    });
    },


    editClient: function(grid, record) {
        var edit = Ext.create('TimeTracking.view.client.Edit').show();
        edit.down('form').loadRecord(record);
    },
    
    openCreateClient: function(grid, record) {
        var edit = Ext.create('TimeTracking.view.client.Create').show();
    },
     createClient: function(button) {
        var win = button.up('window');
        form = win.down('form');
        record = form.getRecord();
        values = form.getValues();
        if(values.name=='')
        {
            Ext.Msg.alert('Project Create','Insert client name'); 
        }
        else
        {
            var current = Ext.create('TimeTracking.model.client.Client');
            current.set('name', values.name);
            current.set('adress', values.adress);
            this.getClientList().getStore().insert(0,current);
            //this.getClientList().cellEditing.startEditByPosition({row:0,column:0});
            win.close();
        }
    },

    updateClient: function(button) {
        var win = button.up('window'),
        form = win.down('form'),
        record = form.getRecord(),
        values = form.getValues();
        record.set(values);
        win.close();
    },
    cancelEditClient: function(button) {
    var win = button.up('window');
    win.close();
    }
});
