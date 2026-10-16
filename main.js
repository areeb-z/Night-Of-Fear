// Night of Fear — a game by Adyan (and Areeb). Plays fully offline.
const {app,BrowserWindow,Menu}=require('electron');const path=require('path');
app.commandLine.appendSwitch('ignore-gpu-blocklist');app.commandLine.appendSwitch('autoplay-policy','no-user-gesture-required');
function start(){Menu.setApplicationMenu(null);
  const w=new BrowserWindow({width:1280,height:760,minWidth:800,minHeight:480,backgroundColor:'#030406',title:'Night of Fear',icon:path.join(__dirname,'icon.png'),autoHideMenuBar:true,show:false,
    webPreferences:{backgroundThrottling:false,contextIsolation:true,nodeIntegration:false}});
  w.once('ready-to-show',()=>{w.maximize();w.show();});w.loadFile(path.join(__dirname,'game','index.html'));
  w.on('page-title-updated',e=>e.preventDefault());
  // F11 or Alt+Enter: full screen
  w.webContents.on('before-input-event',(e,i)=>{if(i.type==='keyDown'&&(i.key==='F11'||(i.alt&&i.key==='Enter'))){w.setFullScreen(!w.isFullScreen());e.preventDefault();}});}
app.whenReady().then(start);app.on('window-all-closed',()=>app.quit());
