Ext.define('MyApp.view.Home', {    alternateClassName: 'home',    extend: 'Ext.Panel',    xtype: 'home',    requires: [        'Ext.TitleBar'    ],    config: {    	id: 'home',        cls: 'home',        layout: 'vbox',        defaults: {            layout: 'hbox',            width: '100%',            defaults: {                flex: 1,                height: '100%'            }        },        hideAnimation: {            type: 'slideOut',            direction: 'right',            reveal: true        },        showAnimation: {            type: 'slideIn',            direction: 'left',            cover: true        },        items: [        {            items: [{                xtype: 'button',                text: '大屏数据',                iconAlign: 'top',                iconCls: 'search green',                margin: '10 10 10 10',                handler: function(button, event) {                	var main = Ext.getCmp('homePanel'),                	   toolbar = main.getComponent('toolbar'),                	   back = toolbar.getComponent('backButton'),                	   chart = Ext.ComponentQuery.query('#itemTpl')[0] || Ext.create('MyApp.view.ItemTpl',{hidden: true});                	back.show();                		toolbar.setTitle("大屏数据");                	main.add(chart);                	chart.show();                	Ext.getCmp('home').hide();                }            },            {                xtype: 'button',                text: '税收报表',                iconAlign: 'top',                iconCls: 'list orange',                margin: '10 10 10 10',                handler: function(button, event) {                	var main = Ext.getCmp('homePanel'),                	   toolbar = main.getComponent('toolbar'),                	   back = toolbar.getComponent('backButton'),                	   chart = Ext.ComponentQuery.query('#itemTpl')[0] || Ext.create('MyApp.view.ItemTpl',{hidden: true});                	back.show();                		toolbar.setTitle("大屏数据");                	main.add(chart);                	chart.show();                	Ext.getCmp('home').hide();                }            },            {                xtype: 'button',                text: '重点关注',                iconAlign: 'top',                iconCls: 'organize roseRed',                margin: '10 10 10 10',                handler: function(button, event) {                	var main = Ext.getCmp('homePanel'),                	   toolbar = main.getComponent('toolbar'),                	   back = toolbar.getComponent('backButton'),                	   chart = Ext.ComponentQuery.query('#itemTpl')[0] || Ext.create('MyApp.view.ItemTpl',{hidden: true});                	back.show();                		toolbar.setTitle("大屏数据");                	main.add(chart);                	chart.show();                	Ext.getCmp('home').hide();                }            }]        }]    }   });