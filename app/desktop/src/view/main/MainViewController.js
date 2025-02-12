Ext.define("MyExtGenApp.view.main.MainViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.mainviewcontroller",

  onButtonClick: function (button) {
    this.lookupReference("df").setValue(Date.now());
  },
  onSumButtonClick: function (button) {
    this.lookupReference("counter").setValue(
      this.lookupReference("counter").getValue() + 1
    );
  },
});
