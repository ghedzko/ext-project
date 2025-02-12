Ext.define("MyExtGenApp.view.main.MainViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.mainviewcontroller",

  onButtonClick: function (button) {
    this.lookupReference("df").setValue(Date.now());
  },
  onSumButtonClick: function () {
    const vm = this.getViewModel();
    vm.set("counter", vm.get("counter") + 1);
  },

  onSubtractButtonClick: function () {
    const vm = this.getViewModel();
    vm.set("counter", vm.get("counter") - 1);
  },

  onResetButtonClick: function () {
    this.getViewModel().set("counter", 0);
  },
});
