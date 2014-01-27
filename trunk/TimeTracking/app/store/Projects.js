Ext.define("TimeTracking.store.Projects",{
    extend:"Ext.data.Store",
    model:"TimeTracking.model.project.Projects",
    autoLoad: true,
    proxy : {
                type : 'ajax',
                url : 'data/Clients.json',
                reader : {
                            type : 'json',
                            root : 'data'
                         }
            }
});