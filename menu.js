// MOST OF THIS SCRIPT IS COPYRIGHT OF ATKANUSA

addmenuitem = function(title) {
	var header = function(text) {
		var div = document.createElement('div');
		div.className = 'listing';
		div.style.padding = '5px 16px';
		div.style.opacity = '0.7';
		div.style.fontSize = '17px';
		div.style.fontFamily = '\"Kavoon\", Georgia, serif';
		div.textContent = text;
		return div;
	}

	var frag = document.createDocumentFragment();
		
	frag.appendChild(title());
		
	var listing = function(config) {
		var div = document.createElement('div');
		div.className = 'listing';
		var a = document.createElement('a');
		a.id = CM.ConfigPrefix + config;
		a.onclick = function() {CM.ToggleConfig(config);};
		a.textContent = CM.Disp.GetConfigDisplay(config);
		div.appendChild(a);
		var label = document.createElement('label');
		label.textContent = CM.ConfigData[config].desc;
		div.appendChild(label);
		return div;
	}
	
	var url = function(config) {
		var div = document.createElement('div');
		div.className = 'listing';
		var span = document.createElement('span');
		span.className = 'option';
		span.textContent = CM.ConfigData[config].label + ' ';
		div.appendChild(span);
		var input = document.createElement('input');
		input.id = CM.ConfigPrefix + config;
		input.className = 'option';
		input.type = 'text';
		input.value = CM.Config[config];
		input.style.width = '300px';
		div.appendChild(input);
		div.appendChild(document.createTextNode(' '));
		var a = document.createElement('a');
		a.className = 'option';
		a.textContent = 'Save';
		div.appendChild(a);
		var label = document.createElement('label');
		div.appendChild(label);
		return div;
	}
		
	frag.appendChild(header('Modifications'));
	for (var i = 0; i < CM.Disp.colors.length; i++) {
		var div = document.createElement('div');
		div.className = 'listing';
		var input = document.createElement('input');
		input.className = 'option';
		input.style.width = '65px';
		div.appendChild(input);
    var label = document.createElement('label');
		div.appendChild(label);
		frag.appendChild(div);
	}
	
	frag.appendChild(header('Calculation'));
	frag.appendChild(listing('CalcWrink'));
	frag.appendChild(listing('CPSMode'));
	frag.appendChild(listing('AvgCPSHist'));
	frag.appendChild(listing('AvgClicksHist'));
	frag.appendChild(listing('ToolWarnCautBon'));

	frag.appendChild(header('Golden Cookie/Season Popup Emphasis'));
	frag.appendChild(listing('Flash'));
	frag.appendChild(listing('Sound'));	
	var volConfig = 'Volume';
	var volume = document.createElement('div');
	volume.className = 'listing';
	var minus = document.createElement('a');
	minus.className = 'option';
	minus.onclick = function() {CM.ToggleConfigDown(volConfig);};
	minus.textContent = '-';
	volume.appendChild(minus);
	var volText = document.createElement('span');
	volText.id = CM.ConfigPrefix + volConfig;
	volText.textContent = CM.Disp.GetConfigDisplay(volConfig);
	volume.appendChild(volText);
	var plus = document.createElement('a');
	plus.className = 'option';
	plus.onclick = function() {CM.ToggleConfigUp(volConfig);};
	plus.textContent = '+';
	volume.appendChild(plus);
	var volLabel = document.createElement('label');
	volLabel.textContent = CM.ConfigData[volConfig].desc;
	volume.appendChild(volLabel);
	frag.appendChild(volume);
	frag.appendChild(url('GCSoundURL'));
	frag.appendChild(url('SeaSoundURL'));
	frag.appendChild(listing('GCTimer'));
	frag.appendChild(listing('Title'));
	frag.appendChild(listing('Favicon'));
	
	frag.appendChild(header('Tooltip'));
	frag.appendChild(listing('Tooltip'));
	frag.appendChild(listing('TooltipAmor'));
	frag.appendChild(listing('ToolWarnCaut'));
	frag.appendChild(listing('ToolWarnCautPos'));
	frag.appendChild(listing('ToolWrink'));
	
	frag.appendChild(header('Statistics'));
	frag.appendChild(listing('Stats'));
	frag.appendChild(listing('UpStats'));
	frag.appendChild(listing('TimeFormat'));
	frag.appendChild(listing('SayTime'));
	
	frag.appendChild(header('Other'));
	frag.appendChild(listing('Scale'));	
	var resDef = document.createElement('div');
	resDef.className = 'listing';
	var resDefBut = document.createElement('a');
	resDefBut.className = 'option';
	resDefBut.onclick = function() {CM.RestoreDefault();};
	resDefBut.textContent = 'Restore Default';
	resDef.appendChild(resDefBut);
	frag.appendChild(resDef);
		
	l('menu').childNodes[2].insertBefore(frag, l('menu').childNodes[2].childNodes[l('menu').childNodes[2].childNodes.length - 1]);
		
	CM.Disp.FormatButtonOnClickBak = l('formatButton').onclick;
	l('formatButton').onclick = function() {Game.Toggle('format', 'formatButton', 'Short numbers OFF', 'Short numbers ON', '1'); PlaySound('snd/tick.mp3'); CM.Disp.RefreshScale();};
}


var title = function() {
		var div = document.createElement('div');
		div.className = 'title ' + CM.Disp.colorTextPre + CM.Disp.colorBlue;
		div.textContent = 'Wesley's Cookies';
		return div;
	}
	
if (Game.onMenu == 'prefs') {
	CM.Disp.AddMenuPref(title);
}
else if (CM.Config.Stats == 1 && Game.onMenu == 'stats') {
	CM.Disp.AddMenuStats(title);
}
