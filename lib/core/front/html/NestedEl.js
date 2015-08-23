

$.fn.el = function(e){
    if(U(e)){
        console.log( $('<div>').append(  this.clone()  ).html() )
        return this}}
$.fn.el = function(e){
    if(U(e)){
        console.log( $('<div>').append(  this.clone()  ).html() )
        return this}}
$.fn.h1 = function(text){

    this.A($.h1(text))
    return this}
$.fn.h2 = function(text){

    this.A($.h2(text))
    return this}
$.fn.h3 = function(text){

    this.A($.h3(text))
    return this}
$.fn.h4 = function(text){

    this.A($.h4(text))
    return this}
$.fn.h5 = function(text){

    this.A($.h5(text))
    return this}
$.fn.h6 = function(text){

    this.A($.h6(text))
    return this}

$.fn.H5=function(a){return $.h5(a).a2(this)}

$.fn.h1 = function (t) {
    return this.A($.h1(t))
}
$.fn.h2 = function (text) {

    this.A($.h2(text))
    return this
}
$.fn.h3 = function (text) {

    this.A($.h3(text))
    return this
}
$.fn.h4 = function (text) {

    this.A($.h4(text))
    return this
}
$.fn.h5 = function (text) {

    this.A($.h5(text))
    return this
}
$.fn.h6 = function (text) {

    this.A($.h6(text))
    return this
}

$.fn.sb =function(fn){return  this.submit(fn)}


$.fn.a2Lb=function(t){
    t=t||'label:'; return this.a2($.lb(t))
}

$.fn.hr = function (href) {
    this.attr({href: href})
    return this
}
$.fn.isLi = $.fn.iLi = function () {
    return _.isElement(this) && _h('HTMLLIElement', this)
}
$.fn.li = function () {
    var g = G(arguments),
        li = $.li()
    this.A(li)
    g.e(function (g) {
        li.A(g)
    })
}
$.fn.C$ = function (s) {
    if (s) {
        $l(s + ' !!!')
    }
    return this.C($r())
}