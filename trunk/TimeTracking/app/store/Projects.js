Ext.define('TimeTracking.store.Projects',{
    extend:'Ext.data.Store',
    model:'TimeTracking.model.project.Project',
    autoLoad: true,
    proxy : {
                type : 'ajax',
                api:
                {
                read : 'data/Projects.json',
                update:'data/updateProjects.json'
                },
                reader : {
                            type : 'json',
                            root : 'projects',
                            successProperty: 'success'
                         }
    }
});