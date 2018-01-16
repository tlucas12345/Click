Game.ObjectsById[0].basePrice=5;
Game.ObjectsById[0].storedCps=0.5;
Game.ObjectsById[0].cps = function() {
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
/*Game.ObjectsById[1].cps = function(){
			var mult=1;
			if (Game.Has('Farmer grandmas')) mult*=2;
			if (Game.Has('Worker grandmas')) mult*=2;
			if (Game.Has('Miner grandmas')) mult*=2;
			if (Game.Has('Cosmic grandmas')) mult*=2;
			if (Game.Has('Transmuted grandmas')) mult*=2;
			if (Game.Has('Altered grandmas')) mult*=2;
			if (Game.Has('Grandmas\' grandmas')) mult*=2;
			if (Game.Has('Antigrandmas')) mult*=2;
			if (Game.Has('Rainbow grandmas')) mult*=2;
			if (Game.Has('Banker grandmas')) mult*=2;
			if (Game.Has('Priestess grandmas')) mult*=2;
			if (Game.Has('Witch grandmas')) mult*=2;
			if (Game.Has('Lucky grandmas')) mult*=2;
			if (Game.Has('Bingo center/Research facility')) mult*=4;
			if (Game.Has('Ritual rolling pins')) mult*=2;
			if (Game.Has('Naughty list')) mult*=2;
			
			mult*=Game.GetTieredCpsMult(me);

			var add=0;
			if (Game.Has('One mind')) add+=Game.Objects['Grandma'].amount*0.02;
			if (Game.Has('Communal brainsweep')) add+=Game.Objects['Grandma'].amount*0.02;
			if (Game.Has('Elder Pact')) add+=Game.Objects['Portal'].amount*0.05;
			
			var num=0;
			for (var i in Game.Objects) {if (Game.Objects[i].name!='Grandma') num+=Game.Objects[i].amount;}
			if (Game.hasAura('Elder Battalion')) mult*=1+0.01*num;
			
			mult*=Game.magicCpS(me.name);
			
			return (me.baseCps+add)*mult;
		}*/
