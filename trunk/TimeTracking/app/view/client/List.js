Ext.define('TimeTracking.view.client.List' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.clientlist',
    title : 'Clients',
    cls: 'clients-alt',
    store: Ext.create('TimeTracking.store.Clients',{
        autoLoad: true
    }),
    columns: [
        {
            header: 'Clients',
            dataIndex: 'name',
            flex: 1
        }
    ],
    tools:[{
            type:'refresh',
            tooltip: 'Refresh',
            handler: function(){
                var pnl = this.up('clientlist');
                pnl.getStore().refresh();
                pnl.setTitle('Clients');
            }
    }],
    dockedItems: [{
            xtype: 'toolbar',
            dock: 'top',
            ui: 'footer',
            layout: {
                pack: 'left'
            },
            items: [{
                itemId:'createClient',
                minWidth: 80,
                text: '+ Create Client'
            }]
        }]
    
});