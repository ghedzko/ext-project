Ext.define("MyExtGenApp.view.main.components.DateButton", {
  extend: "Ext.Container",
  xtype: "datebutton",
  controller: "datebuttoncontroller", // Debe coincidir con el alias del controlador
  viewModel: {
    data: {
      clickTime: "",
    },
  },
  items: [
    {
      xtype: "displayfield",
      reference: "df",
      bind: {
        value: "{clickTime}",
      },
    },
    {
      xtype: "button",
      text: "Click Me!",
      handler: "onButtonClick",
    },
  ],
});
