Ext.define('TimeTracking.view.Viewport',{
 extend: 'Ext.tab.Panel',
requires:['TimeTracking.view.project.List',
           'TimeTracking.view.client.List'],
layout: 'border',
config: {
        items: [{
        title: 'Home',
		html: '<h1 class="x-panel-header">Welcome :D :D :D</h1>',
		anchor: '-10, -262'
		
    },{
        title: 'Manage',
        region: 'center',
        xtype: 'tabpanel', 
        activeTab: 0, 
        items: [{title: 'Project',region: 'top',
                items:[ 
				
				{ region: 'center',xtype:  'projectlist'}] },
                {title:'Clients',region:'top',
				    items:[{ region: 'center',xtype:  'clientlist'}]}
               ]}]
    }
});