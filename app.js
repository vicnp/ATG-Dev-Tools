const {
    app,
    BrowserWindow
} = require('electron');

let appWindow;

function createWindow(){
    appWindow = new BrowserWindow({
        width: 500,
        height:500,
        resizable: false,
        autoHideMenuBar: true,
    });
    appWindow.setTitle("ATG Dev Tools");
    appWindow.webContents.on('did-finish-load', () => {
        appWindow.webContents.executeJavaScript(`
            document.documentElement.style.overflow = 'hidden';
            document.body.style.overflow = 'hidden';
        `);
    });
    appWindow.loadFile('dist/angular-electron-app/browser/index.html');
    appWindow.on('closed', function(){
        appWindow = null;
    })
}
app.whenReady().then(() => {
    createWindow();
})