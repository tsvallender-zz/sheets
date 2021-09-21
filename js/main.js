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
	f = document.getElementById(field);
	if(f.type == 'checkbox') {
	    f.checked = sheet[field];
	    f.dispatchEvent(new Event('change'));
	} else {
	    f.value = sheet[field];
	}
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

function sheetSetup() {
    console.log("hello");
    // Set up game-dependent fields
    gameName = document.getElementById('gameName').value;
    setFields();
    if (localStorage.getItem(gameName)) {
	loadSheets();
    } else {
	newSheet();
    }

    // Set up form elements
    document.getElementById('newSheet').addEventListener('click', newSheet);
    document.getElementById('sheetSelect').addEventListener('change', selectSheet);

    // Autosave changes
    fields.forEach(function(field) {
	document.getElementById(field).addEventListener('change', saveSheet);
    });
};

/* Save current sheet */
function saveSheet() {
    let sheet = {};
    fields.forEach(function(field) {
	if (document.getElementById(field).type == 'checkbox') {
	    sheet[field.toString()] = document.getElementById(field).checked;
	} else {
	    sheet[field.toString()] = document.getElementById(field).value;
	}
    });
    sheets[currentSheet] = sheet;
    let sheetSelect = document.getElementById('sheetSelect');
    sheetSelect[sheetSelect.selectedIndex].text = sheet['name'];
    localStorage.setItem(gameName, JSON.stringify(sheets));
}

