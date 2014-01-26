Ext.define('MyApp.model.Project', {
extend: 'Ext.data.Model',
idProperty: 'iduser',
fields: [
{ name: 'idproject', type: 'int' },
'projectName',
'projectNotes' 

],
getNotes: function() {
return (Ext.String.ellipsis(this.get('projecNotes')));
},
capitalizeName: function() {
this.set('projectName',
Ext.String.capitalize(this.get('projectName').toLowerCase()));
}
});