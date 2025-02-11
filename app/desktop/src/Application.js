Ext.define('MyExtGenApp.Application', {
  extend: 'Ext.app.Application',
  name: 'MyExtGenApp',
  requires: ['MyExtGenApp.*'],

  launch: function () {
    Ext.Viewport.add([{xtype: 'mainview'}])
  },

  onAppUpdate: function () {
    Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
      function (choice) {
        if (choice === 'yes') {
          window.location.reload()
        }
      }
    )
  }
})
