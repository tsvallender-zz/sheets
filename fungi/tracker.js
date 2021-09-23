window.onload = function() {
    document.getElementById('addMushroom').addEventListener('click', addMushroom);
    sheetSetup();
}

function addMushroom() {
    let table = document.getElementById('mushroomTracker');

    let i = table.rows.length;
    
    let row = table.insertRow();
    let cell = row.insertCell();

    cell.innerHTML = '<input type="text" id="mushroom'+id.toString()+'"name="mushroom'+id.toString()+'" class="sheetField" autocomplete="off">'
    cell = row.insertCell();
    cell.innerHTML = '<input type="number" id="collected'+id.toString()+'"name="collected'+id.toString()+'" class="sheetField" autocomplete="off">'
    cell = row.insertCell();
    cell.innerHTML = '<input type="text" id="rarity'+id.toString()+'"name="rarity'+id.toString()+'" class="sheetField" autocomplete="off">'
}

