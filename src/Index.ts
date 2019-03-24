import { app, BrowserWindow, Menu, ipcMain } from 'electron';

let win: BrowserWindow;

const VIEWS = {
    'DASHBOARD'     : 'file:///C:/Users/Karan%20Sanjeev/Documents/Projects/Node/FrenchProject/src/resources/views/index-sem.html',

    'BOARD.CREATE'  : 'file:///C:/Users/Karan%20Sanjeev/Documents/Projects/Node/FrenchProject/src/resources/views/boards/create.html',
    'MODULE.CREATE' : 'file:///C:/Users/Karan%20Sanjeev/Documents/Projects/Node/FrenchProject/src/resources/views/modules/create.html',
    'STD.CREATE'    : 'file:///C:/Users/Karan%20Sanjeev/Documents/Projects/Node/FrenchProject/src/resources/views/stds/create.html',
    'SUBJECT.CREATE': 'file:///C:/Users/Karan%20Sanjeev/Documents/Projects/Node/FrenchProject/src/resources/views/subjects/create.html',

    'BOARD.VIEW'    : 'file:///C:/Users/Karan%20Sanjeev/Documents/Projects/Node/FrenchProject/src/resources/views/boards/show.html',
    'MODULE.VIEW'   : 'file:///C:/Users/Karan%20Sanjeev/Documents/Projects/Node/FrenchProject/src/resources/views/modules/show.html',
    'STD.VIEW'      : 'file:///C:/Users/Karan%20Sanjeev/Documents/Projects/Node/FrenchProject/src/resources/views/stds/show.html',
    'SUBJECT.VIEW'  : 'file:///C:/Users/Karan%20Sanjeev/Documents/Projects/Node/FrenchProject/src/resources/views/subjects/show.html',
};

const createWindow = () => {
    win = new BrowserWindow({ width: 1080, height: 780, backgroundColor: '#1B1B1B'});
    win.loadURL(VIEWS['DASHBOARD']);
    Menu.setApplicationMenu(null);
    // win.openDevTools();

    ipcMain.on('load-view', (event, arg) => {
        // win.loadURL(VIEWS[arg]);
        console.log(arg);
    });

    win.on('closed', () => win = null);
};

app.on('ready', createWindow);
app.on('window-all-closed', () => process.platform !== "darwin" ? app.quit() : '');
app.on('activate', () => win === null ? createWindow() : '');
