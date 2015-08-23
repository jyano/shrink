$.fn.W=function(w){return w? this.width(w):this.width()}
$.fn.H=function(h){return h? this.height(h): this.height()}
$.fn.WH = function (w, h) {h = h || w; return this.W(w).H(h)}
//$.fn.Z = function (w, h) {return this.W(w).H(h || w)}
$.fn.MW = $.fn.maxW = function (a) {
    return this.css('max-width', a)
}
$.fn.mW = $.fn.minW = function (a) {
    return this.css('min-width', a)
}
$.fn.mH = $.fn.minH = function (a) {
    return this.css('min-height', a)
}
$.fn.maxH = function (a) {
    return this.css('max-height', a)
}