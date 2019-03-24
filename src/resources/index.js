const {ipcRenderer} = require('electron');

function handleCreateBoard() {
	ipcRenderer.send('load-view', 'BOARD.CREATE');
};

function handleCreateSTD() {
	ipcRenderer.send('load-view', 'STD.CREATE');
};

function handleCreateModule() {
	ipcRenderer.send('load-view', 'MODULE.CREATE');
};

function handleCreateSubject() {
	ipcRenderer.send('load-view', 'SUBJECT.CREATE');
}

function handleViewBoard() {
	ipcRenderer.send('load-view', 'BOARD.VIEW');
}

function handleViewSTD() {
	ipcRenderer.send('load-view', 'STD.VIEW');
}

function handleViewModule() {
	ipcRenderer.send('load-view', 'MODULE.VIEW');
}

function handleViewSubject() {
	ipcRenderer.send('load-view', 'SUBJECT.VIEW');
}
