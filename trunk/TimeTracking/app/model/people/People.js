Ext.define('MyApp.model.people.People', {
extend: 'Ext.data.Model',
fields: [
    { name: 'id', type: 'int'},
    { name: 'FirstName', type:'string'},
    { name: 'LastName',type:'string'},
    { name: 'Email',type:'string'}  
],
validation: [{type: 'presence',field: 'Name',message: 'Required First Name'}]});