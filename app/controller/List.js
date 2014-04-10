Ext.define('MyApp.controller.List', {
    extend: 'Ext.app.Controller',
    
    config: {
        views: ['ItemTpl', 'Chart'],        refs: {            ItemTplButton: 'button[action=itemTpl]',            item: {            	autoCreate: true,	            selector: 'itemTpl',	            xtype: 'itemTpl'            }        },        
        control: {
            ItemTplButton: {                tap: function (list, index, target, record, e) {                	Ext.Viewport.setActiveItem(this.getItem());                }            }
        }
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});
