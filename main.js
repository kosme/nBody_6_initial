const electron = require('electron')
const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

  function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({width: 750, height: 460,
      resizable:false, webPreferences:{devTools:false}})

    // and load the index.html of the app.
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
    }))
    win.setMenu(null)
  }

  app.on('ready', createWindow)
