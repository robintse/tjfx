Ext.define('MyApp.controller.List', {
    extend: 'Ext.app.Controller',
    
    config: {
        views: ['ItemTpl', 'Chart'],
        control: {
            ItemTplButton: {
        }
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});