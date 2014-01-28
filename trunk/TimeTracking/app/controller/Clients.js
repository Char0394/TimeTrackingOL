Ext.define('TimeTracking.controller.Clients', {
    extend: 'Ext.app.Controller',
    config: {
        stores: ['Projects','Clients'],
        views: ['client.Edit', 'client.List'],
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
        'clientEdit button[action=cancel]': {
            click: this.cancelEditClient
        },
        'clientlist toolbar >button[itemId=createClient]':
        {
            click: this.createClient
        }

        
    });
    },


    editClient: function(grid, record) {
        var edit = Ext.create('TimeTracking.view.client.Edit').show();
        edit.down('form').loadRecord(record);
    },
    
    createClient: function(grid, record) {
        var edit = Ext.create('TimeTracking.view.client.Create').show();
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
