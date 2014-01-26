Ext.define('MyApp.model.client.Client', {
extend: 'Ext.data.Model',
idProperty: 'idclient',
fields: [
    { name: 'idproject', type: 'integer' },
    { name: 'Name', type:'string'},
    { name: 'clientAdress',type:'string'} 
],
validation: [{type: 'presence',field: 'Name',message: 'Required First Name'}]
});