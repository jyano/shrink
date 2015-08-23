$.fn.al = $.fn.opacity = $.fn.alpha = function (z) {

    this.css('opacity', z)

    return this
}
$.fn.al=function(al){return this.opacity(al)}
$.fn.opacity=$.fn.alpha=function(z){

    this.css('opacity', z)

    return this}
$.col = function (a,b){var g=G(arguments),
    o=O(a)? {q:g[0], c:g[1]} : {c:g[0]}
    o.q= o.q || $.bd()
    o.c = o.c? oO('c', o.c) : $r()
    return   $.ss(o.q,'C', o.c)
}
$.fn.C = function (col, c2) {
    if (c2) {
        return this.C(col).col(c2)
    }

    if (col == '*') {
        $l(col)

        col = Yano.random()
    }

    return this.css('backgroundColor', oO('c', col))
}
$.fn.C = function(c, c2){
    if(c2){return this.C(c).col(c2)}
    if(c=='*'){
        c = Yano.random()
        $l(c)
    }
    return this.css('backgroundColor', oO('c', c))
}
$.fn.C$=function(s){
    if(s){ $l(s + ' !!!')}
    return this.C($r())
}
$.fn.col = function (col) {
    return this.css('color', oO('c', col))
}
$.fn.col = function(col){
    return this.css('color', oO('c', col))}
