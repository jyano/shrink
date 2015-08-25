
//ajax
$.XML = function () {return new XMLHttpRequest()}
$.aj=function(ob){return $.ajax(ob)}
$.txG = function(url){$.get('/'+url, function(aa){a=aa})}
$.G = $.g=  function(){var g=G(arguments),o;
    if (U(g[1])) { return _.p($.G, g[0])}
    o= F(g[1])? {p:g[0], fn:g[1]} :
    {p:g[0], d:g[1], fn:g[2]};
    $.get(S.eL(o.p), o.d || {},
        function(d){
            o.fn = o.fn || function () {return 'boo ya!'};
            o.fn (d)
        })
}
$.eG=function(){var g=G(arguments),o;

    if (U(g[1])) { return _.p($.eG, g[0])}
    o= F(g[1])? {p:g[0], fn:g[1]} :
    {p:g[0], d:g[1], fn:g[2]};

    $.G(o.p, o.d||{},
        function(dd){
            _.e(dd, function(d){o.fn(d)})
        });
    return $
}
$.Gj = function(){var g=G(arguments),o;
    if (U(g[1])) { return _.p($.Gj, g[0])}
    o= F(g[1])? {p:g[0], fn:g[1]} : {p:g[0], d:g[1], fn:g[2]};
    o.fn = o.fn || function () {return 'boo ya!'};
    $.getJSON(
        S.eL(o.p),
        o.d|| {},
        function(d){o.fn(d)});
    return $
}
$.eJ=  $.eGj= function(){var g=G(arguments),o;
    if (U(g[1])) { return _.p($.eJ, g[0])}
    o= F(g[1])?
    {p:g[0], fn:g[1]} : {p:g[0], d:g[1], fn:g[2]};
    $.Gj(o.p, o.d||{}, function(dd){_.e(dd, function(d){o.fn(d)})});
    return $
}
$.P = $.po= function(){var g=G(arguments),o;
    o= F(g[1])? {p:g[0], fn:g[1]} : {p:g[0], d:g[1], fn:g[2]};
    o.d = U(o.d)? {} : O(o.d)? o.d : {data: o.d};
    o.fn = o.fn || function () {return 'boo ya!'};
    $.post(S.eL(o.p),o.d,function(d){o.fn(o.d, o)});
    return $
}
$.eP =   function () {var g= G(arguments);
    if (U(g[1])) {return _.p($.eP, g[0])}
    o= F(g[1])? {p:g[0], fn:g[1]} : {p:g[0], d:g[1], fn:g[2]};
    $.P(o.u, o.d||{}, function (dd) {_.e(dd, function(d){o.fn(d)})
    });
    return $
}

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

KEYOB=keyObj={

    up:38,u:38,
    down:40, d:40,
    left:37, l:37,
    right:39, r:39,
    space:32,s:32,
    enter:13, e:13
}

$.wh =function(a,b){return  D(b)?a.which==b:  a.which}
$.k= $.key =$.kD =  function self(k, fn){

    if(O(k)){_.e(k,function(fn,k){
        if(s$(k).isUpper()){$.kU(k.toLowerCase(),fn)}
        else {$.k(k,fn)}})
        return
    }

    if(KEYOB[k]){k=KEYOB[k]}

    $('body').on('keydown', function(e){
        if (e.which == k) {fn(e, $.K)}
    })

}
$.kU =  function(k, fn){

    if(keyObj[k]){k = keyObj[k]}
    $('body').on('keyup', function(e){
        if (e.which == k) { fn(e, $.K) }
    })
}
$.spc=  function (fn) {     return $.kD('space', fn) }
$.K =  function (o) {
    alert('cjs.Keys')
    function oldFn(){
        if (!O(o)) {
            return
        }
        if (F(o.u)) {
            cjs.tick(function () {
                if (cjs.Keys.u) {
                    o.u(cjs.Keys.u)
                }
            })
        }
        if (F(o.d)) {
            cjs.tick(function () {
                if (cjs.Keys.d) {
                    o.d(cjs.Keys.d)
                }
            })
        }
        if (F(o.l)) {
            cjs.tick(function () {
                if (cjs.Keys.l) {
                    o.l(cjs.Keys.l)
                }
            })
        }
        if (F(o.r)) {
            cjs.tick(function () {
                if (cjs.Keys.r) {
                    o.r(cjs.Keys.r)
                }
            })
        }}
}



function maybe(){

    $.fn.toR = $.fn.moveRight = function (num) {
        num = num || 20

        if (this.left() == 'auto') {
            this.left(0)
        }

        this.left(parseInt(this.left()) + num)

        return this
    }
    $.fn.toL = $.fn.moveLeft = function (num) {
        num = num || 20
        if (this.left() == 'auto') {
            this.left(0)
        }
        this.left(parseInt(this.left()) - num)
        return this
    }
    $.fn.toU = $.fn.moveDown = function (num) {
        num = num || 20
        if (this.top() == 'auto') {
            this.top(0)
        }
        this.top(this.top() - num)
        return this
    }
    $.fn.toD = $.fn.moveDown = function (num) {
        num = num || 20
        if (this.top() == 'auto') {
            this.top(0)
        }
        this.top(this.top() + num)
        return this
    }
    $.fn.keyControls = function (num) {
        var args = G(arguments), that = this

        g = args

        this.P('a')

        if (args.P) {
            $.kD('left', function () {
                that.toL(num)
            })
            $.kD('right', function () {
                that.toR(num)
            })
        }
        if (args.N) {
            $.kD('up', function () {
                that.toU(num)
            })
            $.kD('down', function () {
                that.toD(num)
            })
        }
    }// o.keyControls(num) should deprecate use of key(o)
    $.fn.hideOnKeyDown = function (a) {
        var that = this
        $('body').keydown(function (ev) {
            e = ev
            $l(e.which)
            if (e.which == 40) {
                that.hide()
            }
            if (e.which == 38) {
                that.show()
            }
        })
    }
}

_.fA=function(a){return function(){alert(a)}}


    $.fn.in=function(num){
        var g=G(arguments)
        this.delay(num * 1000)
        return this
    }
    $.fn.ho=$.fn.hold=function(a){
        a.P('s')
        this.A(a)
    }
    $.fn.tl=$.fn.trans=function(transform){
        $l('transform')
        return this.css({transform: transform})}
    $.fn.selPic=function(){
        $('.pic').e(function(){$(this).C('b')})
        this.parent().C('y')
        //$(pic).parent().C('y')
    }
    $.fn.dg=function(){return this.drag()}
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
    $.fn.free=function(){
        $('body').A( this )
        this.P('a')
    }//?
    $.fn.cw=$.fn.centerOnWindow = function(){
        this.css("position","absolute");
        this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +
                $(window).scrollTop()) + "px");
        this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
                $(window).scrollLeft()) + "px" )
        return this}
    $.fn.xc=$.fn.xCenter=function(){

        return this.P( 'a' ).css({  left: '50%', 'margin-left': '-100px'  })}
    $.fn._getPosition=function(){



        var e = this[0],
            x = 0,
            y = 0

        while (_.isElement(e)) {
            y += e.offsetTop
            x += e.offsetLeft
            if (isBodyElement(e)){e=0}
            e=e.offsetParent||e
        }
        return { x: x, y: y }

        function isBodyElement(e){return O(e)&& e.tagName.toUpperCase() == 'BODY'}


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
    $.fn.dismiss=function(a){
        return this.attr('data-dismiss',a)}
    $.fn.xBt=$.fn.delButton=function(){var el=this
        el.pp( $.d().A( $.bt(  'x', function(){ el.rm() })
                    .K('pull-right').mar(20)
            )
        )
        return el}



    $.fn.free=function(){

        $('body').A( this )

        this.P('a')
    }
    $.fn.dismiss=function(a){
        return this.attr('data-dismiss',a)}
    $.fn.delButton=function(){
        var that=this

        this.prepend(

            $.div().A(
                $.button(  'x', function(){ that.remove() }).K('pull-right').mar(20)
            )

        )


        return this}
    $.fn.centerOnWindow = function(){
        this.css("position","absolute");
        this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +
                $(window).scrollTop()) + "px");
        this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
                $(window).scrollLeft()) + "px" )
        return this}
    $.fn.xCenter=function(){

        return this.P( 'a' ).css({  left: '50%', 'margin-left': '-100px'  })}
    $.fn._getPosition=function(){



        var e = this[0],
            x = 0,
            y = 0

        while (_.isElement(e)) {
            y += e.offsetTop
            x += e.offsetLeft
            if (isBodyElement(e)){e=0}
            e=e.offsetParent||e
        }
        return { x: x, y: y }

        function isBodyElement(e){return O(e)&& e.tagName.toUpperCase() == 'BODY'}


    }




    // Use $.serializeJSON as namespace for the auxiliar functions
// and to define defaults


    $.fn.slD= $.fn.slideDown
    $.fn.slU= $.fn.slideUp


    $.fn.wor = $.fn.world = function () {
        var can = this
        var w = b2d.wor.apply(null, arguments).bug(can, 30, '*')
        w.can = can
        w.ctx = can.ctx()
        return w
    }
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
    $.fn.fr =  function (n, w) {
        if (O(n)) {q.bp(n.n, n.w)}
        else {q.bp(n * w)}
        return this
    }


    _.jS=function(a,b,c){return S(a)? $.Gj(a,b,c) : JSON.stringify(a)}
    _.jP=function(a,b,c){return  S(a)?JSON.parse(a,b) :$(a).prepend(b,c)}
    // jQuery('form').serializeJSON()

// Use $.serializeJSON as namespace for the auxiliar functions
// and to define defaults




