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
	//Instanciar Barra de tareas primera pantalla
	// Ext.create('TimeTracking.view.portal.Portal');
	Ext.create('TimeTracking.view.Container', 
	{ renderTo: Ext.getBody()});
}
});	
