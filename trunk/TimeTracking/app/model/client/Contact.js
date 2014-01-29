Ext.define('MyApp.model.client.Contact', {
extend: 'Ext.data.Model',
idProperty: 'idcontact',
fields: [
   'idcontact',
   'FirstName',
   'LastName',
   'Title',
   'Email',
   'Office',
   'Mobile',
   'Fax' ]
});
