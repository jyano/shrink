$.fn.X=$.fn.left=function(left){
    if(N(left)){return this.css('left', left)}
    var left = this.css('left')
    if(left=='auto'){return 'auto'}
    return parseInt(left)}
$.fn.l=function(l){var q=this,g=G(arguments)

    if(N(l)){
        q.css('left', l)
        return q
    }

    l = q.css('left')
    return l=='auto'? 'auto':
        q.position().left
}
$.fn.X= function(l){var q=this,g=G(arguments)

    if(N(l)){

        q.css('left',

            g.p? q.X()+l:
                l
        )

        return q
    }

    l = q.css('left')
    return l=='auto'? 'auto': parseInt(l)

}
$.fn.right=function(right){
    if(U(right)){
        return this.css('right')
    }

    this.css('right', right)
    return this
}
$.fn.R= function(right){
    if(U(right)){
        return this.css('right')
    }
    this.css('right', right)
    return this
}
$.fn.L= function(n){
    if(U(n)){
        return this.css('left')
    }
    this.css('left', n)
    return this
}
$.fn.LR=function(l,r){var q=this
    if(O(l)){r= l.r; l= l.l }
    if(N(l)){q.L(l)}
    if(N(r)){q.R(r)}
    return q
}
$.fn.Y= $.fn.t=function(top){

    if(N(top)){return this.css('top', top)}
    var top = this.css('top')
    if(top=='auto'){return 'auto'}
    return parseInt(top)
}
$.fn.B= $.fn.bottom=function(bottom){
    if(U(bottom)){
        return this.css('bottom')
    }
    this.css('bottom', bottom)
    return this
}
$.fn.Y=$.fn.top=function(top){
    if(N(top)){return this.css('top', top)}
    var top = this.css('top')
    if(top=='auto'){return 'auto'}
    return parseInt(top)}
$.fn.bottom=function(bottom){
    if(U(bottom)){
        return this.css('bottom')
    }
    this.css('bottom', bottom)
    return this
}
$.fn.XY = function(x,y){

    x=N(x)?x:0

    if(U(y)){y=x}
    return this.X(x).Y(y)
}
$.fn.XY = function(x,y){

    x=N(x)?x:0

    if(U(y)){y=x}
    return this.X(x).Y(y)
}

function center() {

    $.fn.cw = $.fn.centerOnWindow = function () {
        this.css("position", "absolute");
        this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +
                $(window).scrollTop()) + "px");
        this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
                $(window).scrollLeft()) + "px")
        return this
    }
    $.fn.xc = $.fn.xCenter = function () {
        return this.P('a').css({left: '50%', 'margin-left': '-100px'})
    }


}
function offsets(){


//offset=os=function(element){if(C(element)){element=C(element)};return $(element||'body').offset()}
//offsetLeft=osl=function(el){return offset(el).left}
//offsetTop=ost=function(el){return offset(el).top}
//dims
//log dims of something
//owh=function(d){return d.o('$$', function(){d.w()+' '+ d.h()})}
//osP=function(a){return O(a) && a.offsetParent}
//osT=function(a){return O(a) && a.offsetTop}
//osL=function(a){return O(a) && a.offsetLeft}
//cW=function(){return document.body.clientWidth }
//cH=function(){return document.body.clientHeight }
    $.fn.os=function(){return this.offset()}


    $.os=function(q){ return $(  C(q)?C(q):q  || 'body' ).os() }
    $.osl=function(el){return $.os(el).left }
    $.ost=function(el){return $.os(el).top }
    $.osP=function(a){return O(a) && a.offsetParent}

    $.fn.osP=function(){return this.offsetParent} // not a fn?

    $.osT=function(a){return O(a) && a.offsetTop}
    $.osL=function(a){return O(a) && a.offsetLeft}

    $.fn._getPosition=function(){
        var e = this[0], x = 0, y = 0
        while (_.isElement(e)) {
            y += e.offsetTop
            x += e.offsetLeft
            if (isBodyElement(e)){e=0}
            e=e.offsetParent||e}
        return { x: x, y: y }
        function isBodyElement(e){return O(e)&& e.tagName.toUpperCase() == 'BODY'}
    } //just gets the TOTAL offset of ANY element

}
function zIx(){



//careful!


    $.fn.Z=function(w,h){return this.W(w).H(h||w)}

    $.fn.zi= $.fn.zIndex=function(z){
        if(U(z)){return this.css('z-index')}
        this.css('z-index',z);return this}

}

function move(){
    $.fn.toR = $.fn.moveRight=function(num){
        num=num||20
        if(this.left()=='auto'){this.left(0)}
        this.left( parseInt(this.left()) + num)
        return this
    }

    $.fn.toL = $.fn.moveLeft=function(num){
        num=num||20
        if(this.left()=='auto'){this.left(0)}
        this.left( parseInt(this.left()) - num)
        return this}
    $.fn.toU =$.fn.moveDown=function(num){num=num||20
        if(this.top()=='auto'){this.top(0)}
        this.top( this.top()  - num  )
        return this}
    $.fn.toD =$.fn.moveDown=function(num){num=num||20
        if(this.top()=='auto'){this.top(0)}
        this.top( this.top()  + num  )
        return this}

}