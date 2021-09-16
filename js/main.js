const fields = [
    "name",
    "age",
    "fear",
    "adversityTokens"
];
var sheets = [];
var currentSheet = 0;

/* Load sheets from local storage */
function loadSheets() {
    sheets = JSON.parse(localStorage.getItem('kidsOnBikes'));

    let sheetSelect = document.getElementById('sheetSelect');
    sheets.forEach(function(sheet) {
	let option = document.createElement('option');
	option.text = sheet['name'];
	sheetSelect.add(option);
    });
}

/* Load selected sheet */
function selectSheet() {
    currentSheet = document.getElementById('sheetSelect').selectedIndex;
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
    if (localStorage.getItem('kidsOnBikes')) {
	console.log('loading session');
	loadSheets();
    } else {
	newSheet();
    }

    document.getElementById('saveSheet').addEventListener('click', saveSheet);
    document.getElementById('loadSheet').addEventListener('click', loadSheet);
    document.getElementById('newSheet').addEventListener('click', newSheet);
    document.getElementById('sheetSelect').addEventListener('change', selectSheet);
    
//    fields.forEach(function(field) {
//	document.getElementById(field).addEventListener('change', function() {
//	    localStorage.setItem(field, document.getElementById(field).value);
//	})
//    });
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
    localStorage.setItem('kidsOnBikes', JSON.stringify(sheets));
}

