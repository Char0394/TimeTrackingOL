Ext.define('TimeTracking.store.Clients',{
    extend:'Ext.data.Store',
    model:'TimeTracking.model.client.Client',
    autoLoad: true,
        proxy : {
                type : 'ajax',
                api:
                {
                    read : 'data/Clients.json',
                    update:'data/updateClients.json'
                },
                reader : {
                            type : 'json',
                            root : 'clients',
                            successProperty: 'success'
                         }
    }
});