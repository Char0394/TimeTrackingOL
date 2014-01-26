Ext.define('MyApp.model.client.Client', {
extend: 'Ext.data.Model',
idProperty: 'idclient',
fields: [
{ name: 'idproject', type: 'int' },
'clientName',
'clientAdress' 
]
});