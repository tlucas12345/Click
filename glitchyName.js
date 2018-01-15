var originalName = Game.bakeryName;
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var glitch_a = ['a','A','à','À','á','Á','â','Â','ä','Ä','ã','Ã','å','Å','ā','Ā','4'];
var glitch_b = ['b','B','8','ß','฿'];
var glitch_c = ['c','C','ç','Ç','ć','Ć','č','Č','¢','€','₡','©'];
var glitch_d = ['d','D'];
var glitch_e = ['e','E','3','è','È','é','É','ê','Ê','ë','Ë','ē','Ē','ė','Ė','ę','Ę','£'];
var glitch_f = ['f','F'];
var glitch_g = ['g','G'];
var glitch_h = ['h','H','H'];
var glitch_i = ['i','I','î','Î','ï','Ï','í','Í','ī','Ī','į','Į','ì','Ì','1','l','!'];
var glitch_j = ['j','J'];
var glitch_k = ['k','K'];
var glitch_l = ['l','L','ł','Ł'];
var glitch_m = ['m','M','nn'];
var glitch_n = ['n','N','ñ','ń','Ñ','Ń','₦'];
var glitch_o = ['o','O','ô','Ô','ö','Ö','ò','Ò','ó','Ó','ø','Ø','ō','Ō','õ','Õ','0'];
var glitch_p = ['p','P','℗','₽','₱'];
var glitch_q = ['q','Q'];
var glitch_r = ['r','R','®'];
var glitch_s = ['s','S','5','$','§','ś','Ś','š','Š'];
var glitch_t = ['t','T','7','₮',''];
var glitch_u = ['u','U','û','Û','ü','Ü','ù','Ù','ú','Ú','ū','Ū'];
var glitch_v = ['v','V'];
var glitch_w = ['w','W','VV'];
var glitch_x = ['x','X'];
var glitch_y = ['y','Y','ÿ','Ÿ','¥'];
var glitch_z = ['z','Z','2','Ž','ž','ż','Ż','ź','Ź','ⓩ'];
var glitch_space = [' ','_'];
function glitch() {
  if (rand(0,2)==1)
  {
    Game.bakeryNameSet(originalName.replace('a',glitch_a[rand(0,16)]));
    Game.bakeryNameSet(Game.bakeryName.replace('b',glitch_b[rand(0,4)]));
  }
}
setInterval(glitch, 30);
