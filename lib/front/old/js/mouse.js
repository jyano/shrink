
    $.tap=function(fn){$('body').on('keydown mousedown', fn);return $}
    $.md=$.mousedown=function(func){
        $('body').on('mousedown', func);
        return this}
    $.mu=$.mouseup=function(func){
        $('body').on('mouseup', func);
        return this}
    $.mm=$.mousemove=function(func){

        $('body').on('mousemove', func);
        return this}
    $.ts=$.touchstart=function(func){

        $('body').on('touchstart', func);
        return this}
    $.te=$.touchend=function(func){

        $('body').on('touchend', func);
        return this}
    $.oMD=function(fn){
        $.mousedown(function(e){
            fn(e.clientX,e.clientY,e)});
        return $}
    $.oMM=function(fn){
        $.mousemove(function(e){
            fn(e.clientX, e.clientY, e)});
        return $}
    $.oMU = function (fn) {
        $.mouseup(function (e) {
            fn(e.clientX, e.clientY, e)
        });
        return $}
    $.$$=function(a,b,c){$('body').$$(a,b,c); return this}
    $.$=function(){

        var b=$('html');

        b.click.apply(b, arguments);

        return $}




    $.$=   m$ = function(f){ return $(document).on('click', _v(f) )}
    $.$$=   m$$ = function(f){ return $(document).on('dblclick', _v(f) )}



    $.fn.$= $.fn.click
    $.fn.hv = $.fn.hover
    $.fn.mD = function (l) {
        var c = this
        c.mousedown(function (e) {
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
    $.fn.m = function (o) {

        var e = this

        if (o.mD) {
            e.mD(o.mD)
        }
        if (o.mU) {
            e.mD(o.mU)
        }
        if (o.pM) {
            e.pM(o.pM)
        }

        return e
    }
    $.fn.pm = $.fn.pressmove = function (func) {
        var mouse_pressed
        this.mousedown(function () {
            mouse_pressed = true
        })
        this.mouseup(function () {
            mouse_pressed = false
        })


        this.mousemove(function (e) {


            if (mouse_pressed) {

                func(e)

            }

        })


        return this
    }
    $.fn.mp = $.fn.mousePoint = function (e, scale) {
        scale = N(scale) ? scale : 1
        return V(e.pageX / scale, e.pageY / scale)
    }
    $.fn.m=function(o){

        var e = this

        if(o.mD){e.mD(o.mD)}
        if(o.mU){e.mD(o.mU)}
        if(o.pM){e.pM(o.pM)}

        return e}

    $.$$=function(a,b,c){$('body').dblclick(a,b,c); return this}
    $.$=function(){var b=$('html')

        b.click.apply(b, arguments)

        return $}
    $.fn.pressmove = function (func) {
        var mouse_pressed
        this.mousedown(function () {
            mouse_pressed = true
        })
        this.mouseup(function () {
            mouse_pressed = false
        })


        this.mousemove(function (e) {


            if (mouse_pressed) {

                func(e)

            }

        })


        return this
    }
    $.fn.mousePoint=function(e, scale){
        scale=N(scale)?scale:1
        return V(e.pageX/scale,e.pageY/scale )
    }

    $.fn.mD=function(l){
        var c=this
        c.mousedown(function(e){l(e.clientX, e.clientY)})
        return c}
    $.fn.pM=function(l){
        var c=this
        c.pressmove(function(e){l(e.clientX, e.clientY)})
        return c
    }