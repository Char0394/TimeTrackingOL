Ext.define('TimeTracking.store.Contacts',{
    extend:'Ext.data.Store',
    model:'TimeTracking.model.client.Contacts',
    autoLoad: true,
    proxy : {
                type : 'ajax',
                api:
                {
                read : 'data/Contacts.json'
                },
                reader : {
                            type : 'json',
                            root : 'contacts',
                            successProperty: 'success'
                         }
    }
});