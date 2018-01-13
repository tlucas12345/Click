document.onkeypress = function (e) {
    e = e || window.event;
    if (e.keyCode == 27) {
        Game.ClickCookie();
    } 
};
