Ext.define('MyApp.model.client.Contact', {
extend: 'Ext.data.Model',
idProperty: 'idcontact',
fields: [
    { name: 'idcontact', type: 'integer'},
    { name: 'FirstName', type:'string'},
    { name: 'LastName',type:'string'},
    { name: 'Title',type:'string'},
    { name: 'Email',type:'string'},
    { name: 'Office',type:'string'},
    { name: 'Mobile',type:'string'},
    { name: 'Fax',type:'string'}     
],
validation: [{type: 'presence',field: 'FirstName',message: 'Required First Name'},
             {type: 'presence',field: 'LastName',message: 'Required Last Name'},
             {type: 'format', field: 'Email',matcher: /([a-z]+)(@)([a-z]+)(.)([a-z]+)/}  ]
});