const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

let mainWindow


app.on('ready', function () {

    // Create the browser window.
    mainWindow = new BrowserWindow({
        title: "Hello World!",
        width: 800,
        height: 600,
        resizable: false
    })

    //remove menu bar for a minimal look
    mainWindow.setMenu(null);

    // and load the index.html of the app.
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, './app/index.html'),
        protocol: 'file:',
        slashes: true
    }))

    // Open the DevTools.
    mainWindow.webContents.openDevTools()

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        mainWindow = null
    })
})

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    app.quit();
})

