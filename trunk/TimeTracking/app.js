Ext.application({
       name : 'TimeTracking',
       requires: [
             'Ext.window.MessageBox',
             'TimeTracking.config.Constants'
       ],
	    controllers: ['Projects','Clients'],

launch : function() 
{
	//Instanciar Barra de tareas primera pantalla
	// Ext.create('TimeTracking.view.portal.Portal');
	Ext.create('TimeTracking.view.Viewport', 
	{ renderTo: Ext.getBody()});
	//Ext.create('TimeTracking.view.portal.Portal');
	
}
});	
