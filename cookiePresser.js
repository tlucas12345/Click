Game.Achievements.Clicktastic.name="Keypress";
Game.Achievements.Clicktastic.desc="Make 1,000 cookies pressing the spacebar.";
Game.Achievements.Clicktastic.baseDesc="Make 1,000 cookies pressing the spacebar.";
Game.Achievements.Clickathlon.name="Tapper";
Game.Achievements.Clickathlon.desc="Make 100,000 cookies pressing the spacebar.";
Game.Achievements.Clickathlon.baseDesc="Make 100,000 cookies pressing the spacebar.";
Game.Achievements.Clickolympics.name="Tapomatic";
Game.Achievements.Clickolympics.desc="Make 10,000,000 cookies pressing the spacebar.";
Game.Achievements.Clickolympics.baseDesc="Make 10,000,000 cookies pressing the spacebar.";
Game.Achievements.Clickorama.name="99999 Words Per Minute";
Game.Achievements.Clickorama.desc="Make 1,000,000,000 cookies pressing the spacebar.";
Game.Achievements.Clickorama.baseDesc="Make 1,000,000,000 cookies pressing the spacebar.";
Game.Achievements.Clickasmic.name="Hypertap"
Game.Achievements.Clickasmic.desc="Make 100,000,000,000 cookies pressing the spacebar.";
Game.Achievements.Clickasmic.baseDesc="Make 100,000,000,000 cookies pressing the spacebar.";
Game.AchievementsById[144].name="Megatap"
Game.AchievementsById[144].desc="Make 10,000,000,000,000 cookies pressing the spacebar.";
Game.AchievementsById[144].baseDesc="Make 10,000,000,000,000 cookies pressing the spacebar.";
Game.AchievementsById[145].name="Supertap"
Game.AchievementsById[145].desc="Make 1,000,000,000,000,000 cookies pressing the spacebar.";
Game.AchievementsById[145].baseDesc="Make 1,000,000,000,000,000 cookies pressing the spacebar.";
Game.AchievementsById[146].name="Ultratap"
Game.AchievementsById[146].desc="Make 1,000,000,000,000,000 cookies pressing the spacebar.";
Game.AchievementsById[146].baseDesc="Make 1,000,000,000,000,000 cookies pressing the spacebar.";
Game.AchievementsById[244].name="Extratap"
Game.AchievementsById[244].desc="Make 100,000,000,000,000,000 cookies pressing the spacebar.";
Game.AchievementsById[244].baseDesc="Make 100,000,000,000,000,000 cookies pressing the spacebar.";
Game.AchievementsById[245].name="Gigatap"
Game.AchievementsById[245].desc="Make 10,000,000,000,000,000,000 cookies pressing the spacebar.";
Game.AchievementsById[245].baseDesc="Make 10,000,000,000,000,000,000 cookies pressing the spacebar.";
Game.AchievementsById[246].name="Metatap"
Game.AchievementsById[246].desc="I'll be surprised if you didn't notice these BIT . TRIP references.";
Game.AchievementsById[246].baseDesc="I'll be surprised if you didn't notice these BIT . TRIP references.";

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
