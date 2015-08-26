cjs= createjs // J =  C$ =


function edProto() {
    ob = eD = cjs.EventDispatcher.prototype


    eD.init = function () {
        this.initialize.apply(this, arguments)
        return this
    }

    eD.o = function (a, b, c, d, e) {
        if (!Oo('e', a)) {
            return o.o('$', a, b, c, d)
        }
        var f = ob.on(oE(a),
            b.handleEvent ? b : b.ob ? b.ob : b.st ? b.st
                : function (e, data) {
                b(o, sJE(e), e)
            }, c, d, o, e)
        return function () {
            o.O(a, f)
            return _p(o.o, a, b, c, d, e)
        }
    }
    eD.O = function (t, f) {
        var g = G(arguments), t = g[0], f = g[1]
        if (F(t)) {
            $l('F(t)')
            return o.O('$', t)
        }
        t = oE(t)
        if (F(f)) {
            $l('F(f)')

            if (g.p) {
                ob.removeEventListener(t, f, true)
            }
            else if (g.n) {
                ob.removeEventListener(t, f, false)
            }
            else {
                $l('removing: ' + t + ' ' + _S(f))

                ob.removeEventListener(t, f)
            }
        }
        else {
            $l('!F(f)')
            if (S(t)) {
                ob.removeAllEventListeners(t)
            }
            else {
                ob.removeAllEventListeners()
            }
        }
        return o
    } //ob.wt=function(type){return o.willTrigger(type)}
    eD.e = function (a, b, c) {
        ob.dispatchEvent(a, b, c);
        return a
    }
    eD.hel = function (a, b) {
        return ob.hasEventListener(oO('e', a))
    }

}
cjs.iDO= function(i){return O(i)&&F(i.getStage)}


$PT=function(){


    c = HTMLCanvasElement.prototype
    x=  ctx=  xx=CanvasRenderingContext2D.prototype
    xGr = CanvasGradient.prototype

    var c=cjs
    eD=cjs.EventDispatcher.prototype
    gx=cjs.Graphics.prototype
    h =  cjs.Shape.prototype
    i=    cjs.DisplayObject.prototype
    mc=cjs.MovieClip.prototype
    q = cjs.LoadQueue.prototype

    sS = ss = cjs.SpriteSheet.prototype
    sSB=      cjs.SpriteSheetBuilder.prototype
    sp=s=cjs.Sprite.prototype
    tl= cjs.Timeline.prototype
    t=cjs.Text.prototype

    ct =cjs.Container.prototype
    st= s=  cjs.Stage.prototype

    tw = cjs.Tween.prototype


}
df={b : function ()
{
    var g = G(arguments), o
    o = g.A ? {hs: g.f} : g.f || {}
    o.hs = o.hs || []
    o.i = o.i || 'me'
    return o
}, h : function (o) {
    o = o || {}
    if (U(o.v)) {
        o.v = [[-100, 50], [0, -50], [100, 0]]
    }
    //o.v= _.m(o.v, function(v){v=V(v);return [v.x,v.y]})
    o.c = o.c || 'p'
    o.x = _.tN(o.x)
    o.y = _.tN(o.y)
    o.a = _.tN(o.a)
    o.r = N(o.r, 40)
    o.w = N(o.w, 50)
    o.h = N(o.h, o.w || 100)
    o.d = N(o.d, 0.5)
    o.b = N(o.b, 0.5)
    o.f = N(o.f, 0.5)
    o.s = D(o.s) ? o.s : 0
    o.o = N(o.o, 1)
    o.q = D(q) ? o.q : true
    return o
}}



    cjs.M = function (a) {
        var m = new cjs.Matrix2D()
        if (N(a)) {
            m.rotate(a)
        }
        return m
    }


    cjs.M = function (rot) {
        var m = new cjs.Matrix2D()
        if (N(rot)) {
            m.rotate(rot)
        }
        return m
    }


    cjs.m2d = function (a, b, c, d, e, f) {
        if (U(c)) {
            return new cjs.Matrix2D(1, 0, 0, 1, N(a, 0), N(b, 0))
        }
        return new cjs.Matrix2D(
            N(a, 1),
            N(b, 0),
            N(c, 0),
            N(d, 1),
            N(e, 0),
            N(f, 0)
        )
    }
    $Pt = cjs.Pt = function (x, y) {
        if (U(x)) {
            return new C$.Point
        }
        if (O(x) && O(y)) {
            return new C$.Point(x.x + y.mx() >> 1, x.y + y.my() >> 1)
        }
        if (O(x)) {
            return new cjs.Point(x.mx(), x.my())
        }
        return new cjs.Point(x, y)
    } //point!!!


cjs.shad = cjs.shadow = function (color, x, y, blur) {
    if (color == '-') {
        return new cjs.Shadow(null, 0, 0, 0)
    }
    color = S(color) ? color : 'a'
    blur = N(blur) ? blur : 10
    x = N(x) ? x : 0
    y = N(y) ? y : 0
    var shad = new cjs.Shadow(oO('c', color), x, y, blur)
    return shad
}
cjs.toColor =toColor = tCl=function(n1,n2,n3,n4){

    return n2? "rgba("+n1+","+n2+","+""+n3+","+(n4||1)+")"
        :
        $r('c', n1)
}
$.colorPicker = $.ColorPicker = function () {
    z()
    colorPicker = $(' <input id="color" name="color" type="color">').appendTo($('body'))
    colorPicker.change(function () {
        $l(colorPicker.val())
    })
}
cjs.bulletHit = function (bullet, inWhat) {

    var x = bullet.centerX(),
        y = bullet.centerY()

    var res = Math.pointInCircle(x, y, {x: inWhat.x, y: inWhat.y, radius: inWhat.H() / 2})

    if (res == true) {
        $l('hit!')
    }
    return res
}
cjs.bulletHit = function (bu, inWhat) {
    var res
    res = M.pointInCircle(bu.cX(), bu.cY(), {x: inWhat.x, y: inWhat.y, radius: inWhat.H() / 2})
    if (res == true) {
        $l('hit!')
    }
    return res
}
cjs.rulers = function () {
    $.d('b', 100, 100).al(.3).dg()
    $.d('r', 100, 300).al(.3).dg()
}
cjs.rulers = function () {
    var d1 = $.div('b', 100, 100).drag().opacity(.3)
    $.div('r', 100, 300).drag().opacity(.3)
    return d1
}
cjs.DOMElement = function () {
    return cjs.DOMElement
}





    cjs.iT = function (t) {
        if (O(t)) {
            return (t.textBaseline)
        }
    }
    $T= function(a,b,c,d,e){var g = G(arguments), o, t
        return new cjs.Text(a,b,c,d,e)

        o = g.O ? g.f :

        {t: g.f, f:g.s, c:g.t, x:g[3], y:g[4]}

        o.f = N(o.f) ? o.f + 'px Arial' : o.f
        o.f = o.f || '50px Arial'
        o.c = o.c || 'y'
        o.x = N(o.x, 600)
        o.y = N(o.y, 100)
        t = new cjs.Text(o.t, o.f, o.c)
        t.XY(o.x, o.y).drag()

        if (g.n) {t.regX = t.W() / 2}
        if (g.p) {t.bl('alphabetic')}

        return t.bl('middle')

    }
    cjs.isText=function(t){
        if(O(t)){
            return (  t.textBaseline   )
        }
    }
    cjs.text = function(text, font, color,  x, y){

        x=N(x)?x:600
        y=N(y)?y:100

//var g=G(arguments); if(g.N){text.bl( 'alphabetic' )}   //if(g.p){ TR(text) }

        if(N(font)){ font = font + 'px Arial' }
        font = font || '50px Arial'
        color = color||'y'

        textOb =   new createjs.Text(  text,  font,  oO('c',color)  )
        textOb.regX = textOb.W()/2
        textOb.XY(x, y)


        return textOb}
    cjs.niceText=function(text,x,y){

        var t= cjs.text(text, 'yellow', '40px Arial')

        if(N(x)){t.XY(x,y)}
        return t.drag()
    }
    function textApps(){
        BASELINE=function(){z()

            s=cjs.stage(1000).A()



            s.bm('me', function(bm){b=bm
                bm.XY(300).sXY(.2)
                s.dot(300,300)})



            s.A(t = cjs.text('baseline: top').XY(300).sXY(4).drag())
            s.A(t2 = cjs.text('baseline: bottom').XY(300).sXY(4).drag().baseline('bottom'))
            s.A(t3 = cjs.text('baseline: middle').XY(300).sXY(4).drag().baseline('middle'))


        }
        LINEH=function(){z()

            s=cjs.stage(1000).A()



            s.bm('me', function(bm){b=bm
                bm.XY(300).sXY(.2)
                s.dot(300,300)})



            s.A(
                t = cjs.text('lineheight -100').XY(300).sXY(4).drag().lineH(-100)
            )


            s.A(
                t2 = cjs.text('lineheight 0').XY(300).sXY(4).drag().baseline('bottom').lH(0)
            )

            s.A(
                t3 = cjs.text('lineheight 100').XY(300).sXY(4).drag().baseline('middle').lH(100)
            )


        }
        LINEW=function(){z()

            s=cjs.stage(1000).A()



            s.bm('me', function(bm){b=bm
                bm.XY(300).sXY(.2)
                s.dot(300,300)})



            s.A(t = cjs.text('linewidth 0').XY(300).sXY(4).drag().lineW(0))
            s.A(t2 = cjs.text('linewidth null').XY(300).sXY(4).drag().baseline('bottom'))
            s.A(t3 = cjs.text('linewidth 100').XY(300).sXY(4).drag().baseline('middle').lW(800))


        }
        ALIGN=function(){z()

            s=cjs.stage(1000).A()



            s.bm('me', function(bm){b=bm
                bm.XY(300).sXY(.2)
                s.dot(300,300)})

            s.bm('me', function(bm){b=bm
                bm.XY(500).sXY(.2)
                s.dot(500,500)})

            //textAlign
            s.A(t = cjs.text('linealign left').XY(300).sXY(4).drag()) //default
            s.A(t2 = cjs.text('linealign right').XY(300).sXY(4).drag().baseline('bottom').align('right'))
            s.A(t3 = cjs.text('linealign center').XY(300).sXY(4).drag().baseline('middle').align('center'))

            //textBaseline
            s.A(t = cjs.text('baseline: top').XY(500).sXY(4).drag())
            s.A(t2 = cjs.text('baseline: bottom').XY(500).sXY(4).drag().baseline('bottom'))
            s.A(t3 = cjs.text('baseline: middle').XY(500).sXY(4).drag().baseline('middle'))}


    }
    $T=function(a,f,c,x,y){
        var t

        if(N(f)){
            f  = String(f) + "px Arial"


        }
        if(S(c)){c=oO('c', c)}

        t= new J.Text(a,f,c)

        if(O(x)){

            if(F(x.cen)){
                x= x.cen()
            }
            y= x.y
            x= x.x
        }

        if(N(x)){t.X(x)}
        if(N(y)){t.Y(y)}


        return t
    }
    $Tc=function(a,f,c,x,y){

        var t= $T(a,f,c,x,y)

        t.tA('center')
        return t
    }
    TextAdder=function(stage){

        var f= $.f().a().c('x').P(10).w(300).dg()

        f.A(
            $.ip().id('text'),

            $.bt('for text',   function(){var  _text,theText,val = $l( $('#text').val()  )
                $('#text').val('')
                _t = $T(val,'w', 30, 100, 10)
                t=  $Ct().A( _t )
                t.dO = _t
                SL(t)
                st.A(t)
                selected(t)
            }))

        return f
        TextAdder2=function(stage){

            var form= $form().a().c('x').P(10).w(300).drg()

            form(

                $textInput().id('text'),

                $.bt(  'for text',   function(){
                    var val = $l( $('#text').val()  )

                    $('#text').val('')

                    var theText= EaselText(val,'w', 30, 100, 10)
                    SL(theText)


                    stage.a( theText )


                }))




            return form }
    }

    cjs.chalk = function (t, c) {
        if (O(t)) {
            t = 'x: ' + t.x + ', ' + 'y: ' + t.y
        }
        return new J.Text(t, "26px Arial", oO('c', c || 'white')).XY(50, 50)
    }


    $.fn.T = function () {var d = this, g = G(arguments)
        d.E()
        g.e(function (str) { d.A($.h3(str)) })
        return d
    }




        t=cjs.Text.prototype


        t.lW = _.gS('linewidth')
        t.lH = _.gS('lineHeight') //o.lineHeight = this.lineHeight || this.getMeasuredLineHeight();
        t.lineH = t.lH = function (lH) {


            if (U(lH)) {
                return this.lineHeight
            }

            this.lineHeight = lH
            return this


        }
        t.lineW = t.lW = function (lW) {


            if (U(lW)) {
                return this.lineWidth
            }

            this.lineWidth = lW
            return this
        }
        t.lWH = function (w, h) {return this.lW(w).lH(N(h, w))}
        t.tA = _.gS('textAlign')
        t.bl = function (bl) {var g = G(arguments)
            if (g.p) {
                bl = 'bottom'
            }
            if (g.n) {
                bl = 'top'
            }
            if (bl === '') {
                bl = 'middle'
            }
            if (U(bl)) {
                return this.textBaseline
            }
            this.textBaseline = bl
            return this
        }
        t.mW = function () {return this.getMeasuredWidth()}
        t.lWH = function (w, h) {
            if (U(h)) {
                h = w
            }
            ;
            return this.lW(w).lH(h)
        }
        t.align = t.textA = t.tA = function (textAlign) {


            if (U(textAlign)) {
                return this.textAlign
            }

            this.textAlign = textAlign
            return this


        }
        t.baseline = t.textB = t.tB = function (textBaseline) {


            if (U(textBaseline)) {
                return this.textBaseline
            }

            this.textBaseline = textBaseline
            return this
        }

        t.T = function (tS) {if (U(tS)) {return this._tS}
            this._tS = tS
            return this}
        t.T = function (text) {


            if (U(text)) {
                return this.text
            }

            this.text = text
            return this
        }
        t.ol = _.gS(t, 'outline')

        t.outL = t.oL = function (outline) {


            if (U(outline)) {
                return this.outline
            }

            this.outline = outline
            return this
        }
        t.F = t.fo = function (f) {
            if (U(f)) {
                return this.font
            }
            this.font = N(f) ? f + 'px Arial' : f
            return this}

        t.F = t.fo = function (font) {


            if (U(font)) {
                return this.font
            }

            if (N(font)) {
                font = font + 'px Arial'
            }


            this.font = font
            return this
        }
        t.C = function (cS) {
            if (U(cS)) {return this.color}
            this.color = oO('c', cS)
            return this}

        t.C = t.col = function (color) {


            if (U(color)) {
                return this.color
            }

            this.color = oO('c', color)

            return this
        }



            $El = cjs.el = function (a) {
                a = $(a)[0]
                return new cjs.DOMElement(a)
            }
            ELM = function () {
                z()
                d = $.d('r', 400, 400).A($.ip()).drag()
                el = $El(d)
                s = $St('y').t()
                s.A(el)
                // tw(el, [{x:300,y:300},2000])
                // tw([el,'l'],[{r:360, sx:.5, sy:.5},8000],{r:0},[{r:360, sx:1, sy:1},8000])
            }






