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
        },
        'projectEdit button[action=cancel]': {
            click: this.cancelEditProject
        },
        'projectlist toolbar >button[itemId=createProject]':
        {
            click: this.createProject
        }
    });
    },


    editProject: function(grid, record) {
        var edit = Ext.create('TimeTracking.view.project.Edit').show();
        edit.down('form').loadRecord(record);
    },
    createProject: function(grid, record) {
        var edit = Ext.create('TimeTracking.view.project.Create').show();
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
