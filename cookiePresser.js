document.onkeyup = function (e) {
    e = e || window.event;
    if (e.keyCode == 32) {
        Game.ClickCookie();
    } 
};
