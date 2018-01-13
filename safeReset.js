for (i = 0; i < Game.UpgradesById.length; i++) { 
    Game.UpgradesById[i].bought=false;
}

for (i = 0; i < Game.ObjectsById.length; i++) { 
    Game.ObjectsById[i].amount=0;
    Game.ObjectsById[i].sell();
}

Game.cookies=0;
Game.cookiesEarned=0;
