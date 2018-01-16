Game.ObjectsById[0].basePrice=5;
Game.ObjectsById[1].storedCps=0.5;
function Game.Object('Cursor','cursor|cursors|clicked|[X] extra finger|[X] extra fingers','Autoclicks once every 10 seconds.',0,0,{},15){
			var add=0;
			if (Game.Has('Thousand fingers')) add+=		0.1;
			if (Game.Has('Million fingers')) add+=		0.5;
			if (Game.Has('Billion fingers')) add+=		5;
			if (Game.Has('Trillion fingers')) add+=		50;
			if (Game.Has('Quadrillion fingers')) add+=	500;
			if (Game.Has('Quintillion fingers')) add+=	5000;
			if (Game.Has('Sextillion fingers')) add+=	50000;
			if (Game.Has('Septillion fingers')) add+=	500000;
			if (Game.Has('Octillion fingers')) add+=	5000000;
			var mult=1;
			var num=0;
			for (var i in Game.Objects) {if (Game.Objects[i].name!='Cursor') num+=Game.Objects[i].amount;}
			add=add*num;
			mult*=Game.magicCpS('Cursor');
			return Game.ComputeCps(0.5,Game.Has('Reinforced index finger')+Game.Has('Carpal tunnel prevention cream')+Game.Has('Ambidextrous'),add)*mult;
		}
