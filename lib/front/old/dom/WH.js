


$.fn.W = function (w) {
    if (U(w)) {
        return this.width()
    }
    this.width(w)
    return this
}

$.fn.H = function (height) {
    return height ? this.height(height) : this.height()
}

$.fn.mW = $.fn.minW = function (a) {
    return this.css('min-width', a)
}
$.fn.mH = $.fn.minH = function (a) {
    return this.css('min-height', a)
}
$.fn.MW = $.fn.maxW = function (a) {
    return this.css('max-width', a)
}
$.fn.MH = $.fn.maxH = function (a) {
    return this.css('max-height', a)
}
$.fn.WH = $.fn.Z = function (w, h) {
    h = h || w;
    return this.W(w).H(h)
}
//outerH
H=function(a){var oH=function(a){
    if(O(a=a||$(window))){return Q(a).outerHeight()}}
    a=a||$(window);return N(a)? W()/a:oH(Q(a))
}
//innerWidth
iW = function(a){if(O(a=a||$$w)){return Q(a).innerWidth()}}
//innerHeight
iH = function(a){
    if(O(a=a||$$w)){
        return Q(a).innerHeight()
    }
}


$.cW=function(){return $.bd().clientWidth}
$.cH=function(){return $.bd().clientHeight}

$.fn.W=function(width){return width? this.width(width): this.width()}
$.fn.H=function(height){return height? this.height(height): this.height()}

$.fn.WH=function(w,h){h=h||w;return this.W(w).H(h)}
$.fn.minW=function(a){return this.css('min-width',a)}
$.fn.minH=function(a){return this.css('min-height',a)}
$.fn.maxW=function(a){return this.css('max-width',a)}
$.fn.maxH=function(a){return this.css('max-height',a)}



$.fn.gw=$.fn.grow = function(){
    originalWidth =  this.W()
    originalHeight = this.H()
    this.on('mousedown', function(e){


        mx = e.clientX
        my = e.clientY


        $.mouseMove(function(e){

            this.WH( originalWidth +  e.clientX - mx,
                originalHeight +  e.clientY - my )

        })

        $.mouseUp(function(){ $(this).off() })  //mouseUp anything?
        this.children().on('mousedown', function(e){e.stopPropagation()})

    })
}
$.fn.sz=function(sz){
    return this.at('size', sz)
}

