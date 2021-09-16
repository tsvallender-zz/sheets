const fields = [
    "name",
    "age",
    "fear",
    "adversityTokens"
];

window.onload = function() {
    document.getElementById('saveSheet').addEventListener('click', saveSheet);
    document.getElementById('loadSheet').addEventListener('click', loadSheet);

    fields.forEach(function(field) {
	document.getElementById(field).addEventListener('change', function() {
	    localStorage.setItem(field, document.getElementById(field).value);
	})
    });
};

function saveSheet() {
    fields.forEach(function(field) {
	localStorage.setItem(field, document.getElementById(field).value);
    });
}

function loadSheet() {
    fields.forEach(function(field) {
	document.getElementById(field).value = localStorage.getItem(field);
    });
}

