Ext.define('TimeTracking.view.project.List' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.projectlist',
    title : 'Projects',
    cls: 'projects-alt',
    store: Ext.create('TimeTracking.store.Projects',{
        autoLoad: true
    }),
    columns: [
        {
            header: 'Projects',
            dataIndex: 'name',
            flex: 1
        },
        {
                xtype: 'actioncolumn',
                width: 30,
                sortable: false,
                menuDisabled: true,
                items: [{
                    icon: 'resources/images/save.png',
                    tooltip: 'Delete Plant',
                    scope: this,
                    handler: this.onRemoveClick
                }]
            }
    ],
    tools:[{
            type:'refresh',
            tooltip: 'Refresh',
            handler: function(){
                var pnl = this.up('projectlist');
                pnl.getStore().refresh();
                pnl.setTitle('Projects');
            }
    }],
         dockedItems: [{
            xtype: 'toolbar',
            dock: 'top',
            ui: 'footer',
            layout: {
                pack: 'left'
            },
            items: [{
                itemId:'createProject',
                minWidth: 80,
                text: '+ Create project'
            }]
        }]
    
});