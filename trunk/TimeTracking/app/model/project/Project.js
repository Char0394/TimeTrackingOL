Ext.define('MyApp.model.project.Project', {
extend: 'Ext.data.Model',
idProperty: 'idproject',
fields: [
{ name: 'idproject', type: 'int' },
'projectName',
'projectNotes' 

],
    getNotes: function() 
    {
        return (Ext.String.ellipsis(this.get('projecNotes')));
    },
    
    capitalizeName: function() 
    {
        this.set('projectName',
        Ext.String.capitalize(this.get('projectName').toLowerCase()));
    }
});