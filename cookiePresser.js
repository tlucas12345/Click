Game.Achievements.Clicktastic.name="Keypress";
Game.Achievements.Clicktastic.desc="Make 1,000 cookies pressing the spacebar.";
Game.Achievements.Clicktastic.baseDesc="Make 1,000 cookies pressing the spacebar.";
Game.Achievements.Clickathon.name="Tapper";
Game.Achievements.Clickathon.desc="Make 100,000 cookies pressing the spacebar.";
Game.Achievements.Clickathon.baseDesc="Make 100,000 cookies pressing the spacebar.";
Game.Achievements.Clickolympics.name="Tapomatic";
Game.Achievements.Clickolympics.desc="Make 10,000,000 cookies pressing the spacebar.";
Game.Achievements.Clickolympics.baseDesc="Make 10,000,000 cookies pressing the spacebar.";
Game.Achievements.Clickorama.name="99999 Words Per Minute";
Game.Achievements.Clickorama.desc="Make 1,000,000,000 cookies pressing the spacebar.";
Game.Achievements.Clickorama.baseDesc="Make 1,000,000,000 cookies pressing the spacebar.";


document.onkeyup = function (e) {
    e = e || window.event;
    if (e.keyCode == 32) {
        Game.ClickCookie();
    }
    if (e.keyCode == 13) {
        Game.ConfirmPrompt();
    }
    if (e.keyCode == 49) {
        Game.ClickProduct(0);
    }
    if (e.keyCode == 50) {
        Game.ClickProduct(1);
    }
    if (e.keyCode == 51) {
        Game.ClickProduct(2);
    }
    if (e.keyCode == 52) {
        Game.ClickProduct(3);
    }
    if (e.keyCode == 53) {
        Game.ClickProduct(4);
    }
    if (e.keyCode == 81) {
        Game.ClickProduct(5);
    }
    if (e.keyCode == 87) {
        Game.ClickProduct(6);
    }
    if (e.keyCode == 69) {
        Game.ClickProduct(7);
    }
    if (e.keyCode == 82) {
        Game.ClickProduct(8);
    }
    if (e.keyCode == 84) {
        Game.ClickProduct(9);
    }
    if (e.keyCode == 65) {
        Game.ClickProduct(10);
    }
    if (e.keyCode == 83) {
        Game.ClickProduct(11);
    }
    if (e.keyCode == 68) {
        Game.ClickProduct(12);
    }
    if (e.keyCode == 70) {
        Game.ClickProduct(13);
    }
    if (e.keyCode == 71) {
        Game.ClickProduct(14);
    }
    if (e.keyCode == 190) {
        Game.ClickTinyCookie();
    }
    
};
