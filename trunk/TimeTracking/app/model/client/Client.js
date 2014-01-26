Ext.define('MyApp.model.client.Client', {
extend: 'Ext.data.Model',
idProperty: 'idclient',
fields: [
    { name: 'idproject', type: 'int' },
    {name: 'clientName', type:'string'},
    {name: 'clientAdress',type:'string'} 
],
validation: [{type: 'length',field: 'clientName', min: 2},
             {type: 'format', field: 'username',matcher: /([a-z]+)[0-9]{2,3}/}  ]
});