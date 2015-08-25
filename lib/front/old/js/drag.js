
$.fn.drag = function(){

    this.A()
    this.each(function(){
        $(this).css('top', $(this).position().top )
        $(this).css('left', $(this).position().left)})

    this.P('a')

    this.on('mousedown', function(e){

        var el = $(this)

        var offset = el.offset(),
            deltaX = e.pageX-offset.left,
            deltaY = e.pageY-offset.top

        $('html').on('mousemove', function(e){
            var x=e.pageX - deltaX,
                y=e.pageY - deltaY

            el.left(x)
            el.top(y)

        }).on( 'mouseup' , function(){  $(this).off() })

    })

    //touchDrg(element)
    return this

}
$.fn.dg= $.fn.drag = function(){

    this.A()
    this.each(function(){
        $(this).css('top', $(this).position().top )
        $(this).css('left', $(this).position().left)})

    this.P('a')

    this.on('mousedown', function(e){

        var el = $(this)

        var offset = el.offset(),
            deltaX = e.pageX-offset.left,
            deltaY = e.pageY-offset.top

        $('html').on('mousemove', function(e){
            var x=e.pageX - deltaX,
                y=e.pageY - deltaY

            el.left(x)
            el.top(y)

        }).on( 'mouseup' , function(){  $(this).off() })

    })

    //touchDrg(element)
    return this

}
$.fn.dg=function(){return this.drag()}


drag = drg=function(element){
    var q= $b( qq(element).q ).css({ position: 'absolute' }).on('mousedown', function(e){
        var offset = $(this).offset(),
            deltaX = e.pageX - offset.left, deltaY = e.pageY - offset.top
        $('html').on( 'mousemove' , function( e ){ q.css({ left:  e.pageX - deltaX , top: e.pageY - deltaY }) })
            .on( 'mouseup' , function(){  $(this).off() })

    })

    touchDrg(element)
    return qq(element)

}

