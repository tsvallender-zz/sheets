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
    input.setAttribute('id', 'mushroom' + i.toString());
    input.setAttribute('name', 'mushroom' + i.toString());
    input.setAttribute('class', 'sheetField');
    cell.appendChild(input);
    input.addEventListener('change', saveSheet);
    
    cell = row.insertCell();
    input = document.createElement('input');
    input.setAttribute('type', 'number');
    input.setAttribute('id', 'amount' + i.toString());
    input.setAttribute('name', 'amount' + i.toString());
    input.setAttribute('class', 'sheetField');
    cell.appendChild(input);
    input.addEventListener('change', saveSheet);
    
    cell = row.insertCell();
    input = document.createElement('input');
    input.setAttribute('type', 'number');
    input.setAttribute('id', 'rarity' + i.toString());
    input.setAttribute('name', 'rarity' + i.toString());
    input.setAttribute('class', 'sheetField');
    cell.appendChild(input);
    input.addEventListener('change', saveSheet);

    setFields();
}

