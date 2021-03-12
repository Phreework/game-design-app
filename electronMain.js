const {app, BrowserWindow} =require('electron');//引入electron
const path = require("path");
let win;
let mainWindow;
let windowConfig = {
  width:1280,//创建窗口的宽度
  height:750,//窗口高度
  frame: false,
  resizable: false,
  webPreferences: {
    javascript: true,
    plugins: true,
    nodeIntegration: true, // 是否集成 Nodejs
    webSecurity: false,
    // preload: path.join(__dirname, '../renderer.js') // 但预加载的 js 文件内仍可以使用 Nodejs 的 API
}
};//窗口配置程序运行窗口的大小
function createWindow(){
  win = new BrowserWindow(windowConfig);//创建一个窗口
  win.loadURL(`file://${__dirname}/dist/index.html`);//在窗口内要展示的内容index.html 就是打包生成的index.html
  win.webContents.openDevTools();  //开启调试工具
  win.on('close',() => {
    //回收BrowserWindow对象
    win = null;
  });
  win.on('resize',() => {
    // win.reload();
  }) 

}
app.on('ready',createWindow);
app.on('window-all-closed',() => {
  app.quit();
});

app.on('destroy',() => {
  app.quit();
});
app.on('activate',() => {
  if(win == null){
    createWindow();
  }
});
