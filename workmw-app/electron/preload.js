const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('WORKMW_FETCH', (url) => ipcRenderer.invoke('http-get', url));
contextBridge.exposeInMainWorld('DESKTOP_APP', true);
