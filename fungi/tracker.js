window.onload = function() {
    document.getElementById('addMushroom').addEventListener('click', addMushroom);
    sheetSetup();
}

function addMushroom() {
    let table = document.getElementById('mushroomTracker');

    let i = table.rows.length;
    
    let row = table.insertRow();
    let cell = row.insertCell();
    cell.innerHTML = '<input type="text" id="mushroom'+id+'"name="mushroom'+id+'" class="sheetField" autocomplete="off">'
    cell = row.insertCell();
    cell.innerHTML = '<input type="number" id="collected'+id+'"name="collected'+id+'" class="sheetField" autocomplete="off">'
    cell = row.insertCell();
    cell.innerHTML = '<input type="text" id="rarity'+id+'"name="rarity'+id+'" class="sheetField" autocomplete="off">'
}

