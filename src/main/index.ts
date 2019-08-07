import 'reflect-metadata';

import { BrowserWindow, app } from 'electron';

import isDev from 'src/util/isDev';

const WEBPACK_PORT = 8080;
const SERVER_PORT = 3000;

const contentURL = `http://localhost:${isDev ? WEBPACK_PORT : SERVER_PORT}`;

let mainWindow: BrowserWindow;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL(contentURL);

  if (isDev) {
    const devtools = new BrowserWindow();

    mainWindow.webContents.setDevToolsWebContents(devtools.webContents);
    mainWindow.webContents.openDevTools({ mode: 'detach' });
  }

  mainWindow.on('closed', () => mainWindow.destroy());
}

app.on('ready', () => {
  createMainWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createMainWindow();
  }
});

app.on('browser-window-created', (e, window) => {
  window.setMenu(null);
});
