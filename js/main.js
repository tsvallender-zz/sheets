const fields = [];
var sheets = [];
var currentSheet = 0;
var gameName;

/* Generate list of fields */
function setFields() {
    let i = 0;
    Array.prototype.forEach.call(document.getElementsByClassName('sheetField'), function(field) {
	fields[i++] = field.id;
    });
}

/* Load sheets from local storage */
function loadSheets() {
    sheets = JSON.parse(localStorage.getItem(gameName));

    let sheetSelect = document.getElementById('sheetSelect');
    sheets.forEach(function(sheet) {
	let option = document.createElement('option');
	option.text = sheet['name'];
	sheetSelect.add(option);
    });
}

/* Load selected sheet */
function selectSheet() {
    currentSheet = document.getElementById('sheetSelect').selectedIndex - 1;
    let sheet = sheets[currentSheet];
    fields.forEach(function(field) {
	document.getElementById(field).value = sheet[field];
    });
}

/* Start new sheet */
function newSheet() {
    currentSheet = sheets.length;
    fields.forEach(function(field) {
	document.getElementById(field).value = '';
    });
    let option = document.createElement('option');
    option.text = 'New character';
    sheetSelect = document.getElementById('sheetSelect');
    sheetSelect.add(option);
    sheetSelect.selectedIndex = sheetSelect.length - 1;
}

window.onload = function() {
    // Set up game-dependent fields
    gameName = document.getElementById('gameName').value;
    setFields();
    if (localStorage.getItem(gameName)) {
	console.log('loading session');
	loadSheets();
    } else {
	newSheet();
    }

    // Set up form elements
    document.getElementById('saveSheet').addEventListener('click', saveSheet);
    document.getElementById('loadSheet').addEventListener('click', loadSheet);
    document.getElementById('newSheet').addEventListener('click', newSheet);
    document.getElementById('sheetSelect').addEventListener('change', selectSheet);

    // Autosave changes
    fields.forEach(function(field) {
	document.getElementById(field).addEventListener('change', saveSheet);
    });
};

/* Save current sheet */
function saveSheet() {
    console.log('saveSheet');
    let sheet = {};
    fields.forEach(function(field) {
	sheet[field.toString()] = document.getElementById(field).value;
    });
    if (sheets) {
	console.log("Saving sheet " + currentSheet);
	sheets[currentSheet] = sheet;
    } else {
	console.log("Saving first sheet");	       
	sheets.push(sheet);
    }
    let sheetSelect = document.getElementById('sheetSelect');
    sheetSelect[sheetSelect.selectedIndex].text = sheet['name'];
    localStorage.setItem(gameName, JSON.stringify(sheets));
}

