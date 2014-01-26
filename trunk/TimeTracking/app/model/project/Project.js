Ext.define('MyApp.model.project.Project', {
extend: 'Ext.data.Model',
idProperty: 'idproject',
fields: [
    { name: 'idproject', type: 'int' },
    {name: 'projectName',type:'string'},
    {name:'projectNotes',type:'string'} 

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