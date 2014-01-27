Ext.application({
       name : 'TimeTracking',
       requires: [
             'Ext.window.MessageBox',
             'TimeTracking.config.Constants',
			 'TimeTracking.controller.Portal'
       ],
      controllers: ['Portal'],

launch : function() 
{
	 Ext.create('TimeTracking.view.portal.Portal');
}
});	
