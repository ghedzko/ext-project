Ext.define("MyExtGenApp.view.main.MainViewModel", {
  extend: "Ext.app.ViewModel",
  alias: "viewmodel.mainviewmodel",
  data: {
    clickTime: Date.now(),
    counter: 0,
  },
  stores: {},
});
