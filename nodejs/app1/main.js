const electron = require('electron');
const url = require('url');
const path = require('path');
const{app, BrowserWindow, Menu, ipcMain} = electron;

let mainWindow;
let addWindow;

app.on('ready', function(){
	mainWindow = new BrowserWindow({
		width: 400,
		height: 300,
		title: 'Items list'
	});
	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, 'mainWindow.html'),
		protocol:'file',
		slashes: true
	}));
	//quit when clicked on x
	mainWindow.on('closed', function(){
		app.quit();
	});
	
	const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
	
	Menu.setApplicationMenu(mainMenu);
});

//handles create window
function createAddWindow(){
	addWindow = new BrowserWindow({
		width: 300,
		height: 200,
		title: 'Add shopping list item'
	});
	addWindow.loadURL(url.format({
		pathname: path.join(__dirname, 'addWindow.html'),
		protocol:'file',
		slashes: true
	}));
	addWindow.on('close', function(){
		addWindow = null;
	})
}

//catch add item
ipcMain.on('item:add', function(e, item){
	console.log(item);
	mainWindow.webContents.send('item:add',item);
	addWindow.close();
});

//create the menu template
const mainMenuTemplate = [
	{
		label:'file',
		submenu:[
			{
				label: 'Add Item',
				click(){
					createAddWindow();
				}
			},
			{
				label: 'Clear Items',
				click(){
					mainWindow.webContents.send('item:clear');
				}
			},
			{
				label: 'Quit',
				accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q', 
				click(){
					app.quit();
				}
			}
		]
		
	}
];

//if mac, add empty object to menu
if(process.platform == 'darwin'){
	mainMenuTemplate.unshift({})
}

if(process.env.NODE_ENV !== 'production'){
	mainMenuTemplate.push({
		label: 'Developer Tools',
		submenu: [
			{
				label: 'Toggle DevTools',
				accelerator: process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
				click(item, focusedWindow){
					focusedWindow.toggleDevTools();
				}
			},
			{
				role: 'reload'
			}
		]
	});
}
