Ext.define("MyExtGenApp.view.main.components.CounterController", {
  extend: "Ext.app.ViewController",
  alias: "controller.countercontroller",

  onSumButtonClick: function () {
    let viewModel = this.getViewModel();
    let count = viewModel.get("counter") + 1;
    viewModel.set("counter", count);
    viewModel.set("isCounterZero", count === 0);
  },

  onSubtractButtonClick: function () {
    let viewModel = this.getViewModel();
    let count = viewModel.get("counter") - 1;
    viewModel.set("counter", count);
    viewModel.set("isCounterZero", count === 0);
  },

  onResetButtonClick: function () {
    let viewModel = this.getViewModel();
    viewModel.set("counter", 0);
    viewModel.set("isCounterZero", true);
  },
});
