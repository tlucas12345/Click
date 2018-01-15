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
var glitch_h = ['h','H'];
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
var glitch_space = [' ','_','-','.'];
function glitch() {
    Game.bakeryName=originalName.replace('a',glitch_a[rand(0,16)]).replace('b',glitch_b[rand(0,4)])
                                .replace('c',glitch_c[rand(0,11)]).replace('d',glitch_d[rand(0,1)])
                                .replace('e',glitch_e[rand(0,17)]).replace('f',glitch_f[rand(0,1)])
                                .replace('g',glitch_g[rand(0,1)]).replace('h',glitch_h[rand(0,1)])
                                .replace('i',glitch_i[rand(0,4)]).replace('j',glitch_j[rand(0,1)])
                                .replace('k',glitch_k[rand(0,1)]).replace('l',glitch_l[rand(0,3)])
                                .replace('m',glitch_m[rand(0,2)]).replace('n',glitch_n[rand(0,6)])
                                .replace('o',glitch_o[rand(0,16)]).replace('p',glitch_p[rand(0,4)])
                                .replace('q',glitch_q[rand(0,1)]).replace('r',glitch_r[rand(0,2)])
                                .replace('s',glitch_s[rand(0,7)]).replace('t',glitch_t[rand(0,4)])
                                .replace('u',glitch_u[rand(0,11)]).replace('v',glitch_v[rand(0,1)])
                                .replace('w',glitch_w[rand(0,2)]).replace('x',glitch_x[rand(0,1)])
                                .replace('y',glitch_y[rand(0,4)]).replace('z',glitch_z[rand(0,8)])
                                .replace(' ',glitch_space[rand(0,2)])
    Game.bakeryNameRefresh();
}
setInterval(glitch, 30);
