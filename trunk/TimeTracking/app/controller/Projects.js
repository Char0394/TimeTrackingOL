Ext.define('TimeTracking.controller.Projects', {
    extend: 'Ext.app.Controller',
    config: {
        stores: ['Projects','Clients'],
        views: ['project.Edit', 'project.List','project.Create'],
        refs: [{
            ref: 'projectList',
            selector:'projectlist'
        }]
    },

    init: function(app) {
        this.control({
        'projectlist dataview': {
            itemdblclick: this.editProject
        },
        'projectEdit button[action=save]': {
            click: this.updateProject
        }
        ,'projectCreate button[action=save]': {
            click: this.createProject
        },
        'projectEdit button[action=cancel]': {
            click: this.cancelEditProject
        },
        'projectCreate button[action=cancel]': {
            click: this.cancelEditProject
        },
        'projectlist toolbar >button[itemId=createProject]':
        {
            click: this.openCreateProject
        }
    });
    },


    editProject: function(grid, record) {
        var edit = Ext.create('TimeTracking.view.project.Edit').show();
        edit.down('form').loadRecord(record);
    },
    openCreateProject: function(button) {
        var edit = Ext.create('TimeTracking.view.project.Create').show();
    },
   createProject: function(button) {
        var win = button.up('window');
        form = win.down('form');
        record = form.getRecord();
        values = form.getValues();
       
        if(values.name=='')
        {
            Ext.Msg.alert('Project Create','Insert project name');
        }
        else
        {
        var current = Ext.create('TimeTracking.model.project.Project');
        current.set('name', values.name);
        current.set('notes', values.notes);
        this.getProjectList().getStore().insert(0,current);
         //this.getProjectList().cellEditing.startEditByPosition({row:0,column:0});
         win.close();
        }
       
    },
    updateProject: function(button) {
        var win = button.up('window'),
        form = win.down('form'),
        record = form.getRecord(),
        values = form.getValues();
        record.set(values);
        win.close();
    },
    cancelEditProject: function(button) {
    var win = button.up('window');
    win.close();
    }
});
