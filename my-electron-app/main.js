const { app, BrowserWindow } = require('electron')
const path = require('path')

let mainWindow = null

const createWindow = ({ width = 800, height = 600 }) => {
  const mainWindow = new BrowserWindow({
    width: width,
    height: height,
    title: 'Testing',
  })
  mainWindow.loadFile('index.html')

  const child = new BrowserWindow({
    width: 300,
    height: 200,
    title: 'Child',
    parent: mainWindow,
    frame: false,
    backgroundColor: '#ec9',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
  })
  child.loadFile('about.html')
}

app.whenReady().then(() => {
  const { screen } = require('electron')
  const primaryDisplay = screen.getPrimaryDisplay()
  const { width, height } = primaryDisplay.workAreaSize
  createWindow({width, height})

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})