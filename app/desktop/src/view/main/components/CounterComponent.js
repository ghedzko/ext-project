Ext.define("MyExtGenApp.view.main.components.CounterComponent", {
  extend: "Ext.Container",
  xtype: "countercomponent",
  controller: "countercontroller",
  viewModel: {
    data: {
      counter: 0,
      isCounterZero: true,
    },
  },
  items: [
    {
      xtype: "displayfield",
      reference: "counter",
      bind: {
        value: "{counter}",
      },
    },
    {
      xtype: "button",
      text: "Click here to sum!",
      handler: "onSumButtonClick",
    },
    {
      xtype: "button",
      text: "Reset",
      handler: "onResetButtonClick",
      bind: {
        disabled: "{isCounterZero}",
      },
    },
    {
      xtype: "button",
      text: "Click here to subtract!",
      handler: "onSubtractButtonClick",
    },
  ],
});
