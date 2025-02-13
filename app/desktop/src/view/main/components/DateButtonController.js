Ext.define("MyExtGenApp.view.main.components.DateButtonController", {
  extend: "Ext.app.ViewController",
  alias: "controller.datebuttoncontroller", // Este alias debe coincidir con el que usas en `DateButton.js`

  onButtonClick: function () {
    let viewModel = this.getViewModel();
    viewModel.set("clickTime", new Date().toLocaleString());
  },
});
