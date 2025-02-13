Ext.define("MyExtGenApp.view.main.MainView", {
  extend: "Ext.Container",
  xtype: "mainview",
  requires: [
    "MyExtGenApp.view.main.components.DateButton",
    "MyExtGenApp.view.main.components.CounterComponent",
    "MyExtGenApp.view.main.components.DateButtonController",
    "MyExtGenApp.view.main.components.CounterController",
  ],
  items: [
    {
      xtype: "component",
      html: '<a style="font-size:24px" target="_blank" href="https://docs-devel.sencha.com/extjs/7.0.0-CE/guides/quick_start/What_You_Will_Be_Coding.html">Quick Start Tutorial Here</a><p>',
    },
    {
      xtype: "datebutton", // Usa el mismo `xtype` definido en `DateButton.js`
    },
    {
      xtype: "countercomponent",
    },
  ],
});
