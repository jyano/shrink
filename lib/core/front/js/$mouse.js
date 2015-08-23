$l('mouse')

$.$= function(f){
    return $(document).on('click', _v(f) )

    /*
     $.$=function(){
     var b=$('html')
     b.click.apply(b, arguments)
     return $
     }*/
}

$.$$=  function(f){return $(document).on('dblclick', _v(f) )
//$.$$=function(a,b,c){$('body').$$(a,b,c); return this}
}

$l('mouse again')


$.md= $.mousedown = function (fn) {$('body').on('mousedown', fn);return this}

$.mu= $.mouseup = function (fn) {
    $('body').on('mouseup', fn);return this
}
$.mm= $.mousemove = function (fn) {
    $('body').on('mousemove', fn);
    return this
}


$.oMD=function(fn){
    $.md(function(e){fn(e.clientX,e.clientY,e)})
    return $}
$.oMU = function (fn) {
    $.mu(function (e) {
        fn(e.clientX, e.clientY, e)
    });
    return $
}
$.oMM=function(fn){
    $.mm(function(e){
        fn(e.clientX, e.clientY, e)});
    return $}









$.fn.m=function(o){
    var e = this
    if(o.mD){e.mD(o.mD)}
    if(o.mU){e.mD(o.mU)}
    if(o.pM){e.pM(o.pM)}
    return e
}
$.fn.$= $.fn.click
$.fn.hv= $.fn.hover
$.fn.mD = function (l) {
    var c = this
    c.mousedown(function (e) {
        l(e.clientX, e.clientY)
    })
    return c
}
$.fn.mD = function (l) {
    var c = this
    c.mousedown(function (e) {
        l(e.clientX, e.clientY)
    })
    return c
}
$.fn.pM=function(l){
    var c=this
    c.pressmove(function(e){l(e.clientX, e.clientY)})
    return c}

$.fn.pm=$.fn.pressmove=function(func){
    var mouse_pressed
    this.mousedown(function(){mouse_pressed=true})
    this.mouseup(function(){mouse_pressed=false})



    this.mousemove(function(e){


        if(mouse_pressed){

            func(e)

        }

    })






    return this}
$.fn.mp=$.fn.mousePoint=function(e, scale){
    scale=N(scale)?scale:1
    return V(e.pageX/scale,e.pageY/scale )
}

$.fn.mU = function (l) {
    $l('mU')
    var c = this
    c.mouseup(function (e) {
        l(e.clientX, e.clientY)
    })
    return c
}

$.fn.pM = function (l) {
    var c = this
    c.pressmove(function (e) {
        l(e.clientX, e.clientY)
    })
    return c

}

$.fn.m=function(o){$l('.m')
    var e = this
    if(o.mD){e.mD(o.mD)}
    if(o.mU){e.mD(o.mU)}
    if(o.pM){e.pM(o.pM)}
    return e}