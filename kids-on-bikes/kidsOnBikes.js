window.onload = function() {
    setDice();
    setStrengths();
    sheetSetup();
    setHide();
    
    let box = document.getElementById('hideUnused');
    box.addEventListener('change', setHide);

    let native = selectSheet;
    selectSheet = function() {
	native.apply;
	setHide();
    }
}

function setDice() {
    Array.prototype.forEach.call(document.getElementsByClassName('stat'), function(stat) {
	let dice = ['d4', 'd6', 'd8', 'd10', 'd12', 'd20'];
	dice.forEach(function(die) {
	    let option = document.createElement('option');
	    option.text = die;
	    stat.add(option);
	});
    });
}

function setStrengths() {
    Array.prototype.forEach.call(document.getElementsByClassName('strength'), function(strength) {
	let box = document.getElementById(strength.name);
	let desc = document.getElementById(strength.name+'-desc');
	strength.addEventListener('change', function() {
	    console.log('changed');
	    if (!box.checked) {
		desc.style.display = "none";
	    } else {
		desc.style.display = "inline";
	    }
	});
    });

}

function setHide() {
    let box = document.getElementById('hideUnused');
    if (box.checked) {
	visible = false;
    } else {
	visible = true;
    }
    
    Array.prototype.forEach.call(document.getElementsByClassName('strength'), function(strength) {
	let cbox = document.getElementById(strength.name);
	let label = document.getElementById(strength.name+'-label');
	if (!cbox.checked) {
	    if (visible) {
		cbox.style.visibility = "visible";
		label.style.visibility = "visible";
	    } else {
		cbox.style.visibility = "hidden";
		label.style.visibility = "hidden";
	    }
	} else {
	    cbox.style.visibility = "visible";
	    label.style.visibility = "visible";
	}
    });
}
