Ext.define('MyApp.model.project.Project', {
extend: 'Ext.data.Model',
idProperty: 'idproject',
fields: [
    {name: 'idproject',type:'int'},
    {name: 'Name',type:'string'},
    {name:'Notes',type:'string'} 

],validation: [{type: 'presence',field: 'Name',message: 'Required Project Name'}]
});