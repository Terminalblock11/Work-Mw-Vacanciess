const { app, BrowserWindow, ipcMain, shell } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280, height: 860, autoHideMenuBar: true, title: 'WorkMw', icon: path.join(__dirname, '..', 'build', 'icon.png'),
    webPreferences: { preload: path.join(__dirname, 'preload.js'), contextIsolation: true, nodeIntegration: false }
  });
  win.loadFile(path.join(__dirname, '..', 'www', 'index.html'));
  win.webContents.setWindowOpenHandler(({ url }) => { shell.openExternal(url); return { action: 'deny' }; });
}

// Lets the app read advert pages from other websites (no browser CORS limits here)
ipcMain.handle('http-get', async (_e, url) => {
  if (!/^https?:\/\//i.test(url)) throw new Error('Bad link');
  const r = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (WorkMw)', 'Accept': 'text/html' } });
  if (!r.ok) throw new Error('HTTP ' + r.status);
  return await r.text();
});

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
