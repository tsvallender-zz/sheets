window.onload = function() {
    setDice();
    setStrengths();
    sheetSetup();
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
    let strengths = [
	{
	    id: 'rebellious',
	    name: 'Rebellious',
	    description: 'Add +3 to rolls when persuading children or resisting persuasion from children or adults'
	},
	{
	    id: 'quickHealing',
	    name: 'Quick Healing',
	    description: 'You recover from injuries more quickly, and don’t suffer lasting effects from most injuries'
	},
	{
	    id: 'protective',
	    name: 'Protective',
	    description: 'Add +3 to rolls when defending one of your friends.'
	},
	{
	    id: 'prepared',
	    name: 'Prepared',
	    description: 'May spend 2 Adversity Tokens to just happen to have one commonplace item with you (GM’s discretion'
	},
	{
	    id: 'lucky',
	    name: 'Lucky',
	    description: 'May spend 2 Adversity Tokens to reroll a stat check'
	},
	{
	    id: 'loyal',
	    name: 'Loyal',
	    description: 'Each of the Adversity Tokens you spend to help your friends gives them a +2 instead of a +1.'
	},
	{
	    id: 'intuitive',
	    name: 'Intuitive',
	    description: 'May spend 1 Adversity Token to ask the GM about your surroundings, an NPC, or the like. The GM must answer honestly.'
	},
	{
	    id: 'heroic',
	    name: 'Heroic',
	    description: 'You do not need the GM’s permission to spend Adversity Tokens to ignore fears.'
	},
	{
	    id: 'gross',
	    name: 'Gross',
	    description: 'You have some kind of gross bodily trick (loud, quiet, smelly… up to you) that you can do on command.'
	},
	{
	    id: 'easygoing',
	    name: 'Easygoing',
	    description: 'Gain 2 Adversity Tokens when you fail, instead of 1'
	},
	{
	    id: 'coolUnderPressure',
	    name: 'Cool Under Pressure',
	    description: 'May spend 1 Adversity Token to take half of your die’s value instead of rolling on a Snap Decision'
	}
    ];

    let strengthsList = document.getElementById('strengthsList');
    let html = '';
    strengths.forEach(function(strength) {
	html = "<li>"+
	    "<input type='checkbox' id="+strength.id+" name="+strength.id+" class='sheetField strength'>"+
	    "<label for="+strength.id+">"+strength.name+"</label>"+
	    "<span id='"+strength.id+"-desc' class='strengthDescription'>"+strength.description+"</span>"+
	    "</li>";
	strengthsList.innerHTML += html;
    });

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

