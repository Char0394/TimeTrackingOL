Ext.define("TimeTracking.view.Container", {
 extend: 'Ext.tab.Panel',
    xtype: 'framed-tabs',
    
    fullscreen: true,
    frame: true,
  
    defaults: 
	{
        bodyPadding: 5,
        autoScroll: true
    },
	
    items: 
	[{
        title: 'Home',
       
		html: '<h1 class="x-panel-header">Welcome :D :D :D</h1>',
		anchor: '-10, -262'
    }, 
	 {
		title: 'Manage',
        region: 'center',
        xtype: 'tabpanel', // TabPanel itself has no title
        activeTab: 0,      // First tab active by default
        items: [{
            title: 'Project',
            html: ':D :D :D Here a project '
			   },
			   {
            title: 'Client',
            html: 'The first tab\'s content. Others may be added dynamically'
			   }]
        }
	]
	
});