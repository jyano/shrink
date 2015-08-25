


$.fn.bg=function(bg){
    if(U(bg)){return this.css('background')}
    this.css('background', bg)
    return this
}
$.fn.bgP=function(bg){
    if(U(bg)){return this.css('backgroundPosition')}
    this.css('backgroundPosition', bg)
    return this
}


$.fn.background=function(bg){
    if(U(bg)){return this.css('background')}
    this.css('background', bg)
    return this
}
$.fn.backgroundPosition=function(bg){
    if(U(bg)){return this.css('backgroundPosition')}
    this.css('backgroundPosition', bg)
    return this
}

$.fn.bg = $.fn.bgI=   function (url) {//set background image
    this.bgI('url("' + Y.src(url) + '")');
    return this
}
$.fn.bp =$.positionBackgroundImage = function (x, y) {
    var g = G(arguments), x = g[0], y = g[1];
    x = N(x) ? x : 0;
    y = N(y) ? y : 0;
    this.css({backgroundPos: x + 'px ' + y + 'px'});
    return this

}

$.fn.fr =  function (n, w) {
    if (O(n)) {q.bp(n.n, n.w)}
    else {q.bp(n * w)}
    return this

}