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
    input.setAttribute('id', 'id'+i.toSring());
    input.setAttribute('name', 'id'+i.toSring());
    input.setAttibute('class', 'sheetField');
    cell.appendChild(input);
}

