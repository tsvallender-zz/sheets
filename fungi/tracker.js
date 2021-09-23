window.onload = function() {
    document.getElementById('addMushroom').addEventListener('click', addMushroom);
    sheetSetup();
}

function addMushroom() {
    let table = document.getElementById('mushroomTracker');

    let i = table.rows.length;
    
    let row = table.insertRow();
    let cell = row.insertCell();
    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'mushroom');
    input.setAttribute('name', 'mushroom');
    input.setAttibute('class', 'sheetField');
    cell.appendChild(input);
}

