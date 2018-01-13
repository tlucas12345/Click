function bot() {
    Game.ClickCookie();
    Game.ClickTinyCookie();
    Game.ClickProduct(0);
    Game.ClickProduct(1);
    Game.ClickProduct(2);
    Game.ClickProduct(3);
    Game.ClickProduct(4);
    Game.ClickProduct(5);
    Game.ClickProduct(6);
    Game.ClickProduct(7);
    Game.ClickProduct(8);
    Game.ClickProduct(9);
    Game.ClickProduct(10);
    Game.ClickProduct(11);
    Game.ClickProduct(12);
    Game.ClickProduct(13);
    Game.ClickProduct(14);
    for (i = 0; i < Game.UpgradesById.length; i++) { 
        if (Game.UpgradesById[i].getPrice() < Game.cookies)
        {
            Game.UpgradesById[i].buy();
        }
    }
    Game.ConfirmPrompt();
}
setInterval(bot, 30);
