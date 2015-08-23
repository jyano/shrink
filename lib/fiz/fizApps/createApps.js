queueApps(){
    WQ = function () {
        var g = G(arguments),
            o = F(g.t) ? {ob: g.f, fn0: g.s, fn: g.t} :
                F(g.s) ? {ob: g.f, fn: g.s} : {fn: g.f}
        o.ob = o.ob || {}
        w = W(o.ob)
        if (o.fn0) {
            o.fn0(w)
        }
        Q(o.ob.I || ['me', 'guy', 'chicks', 'sun', 'flame', 'earth'],
            function () {
                o.fn(w)
            })
    }
    MF = function () {
        W().C('r')
        Q(
            ['me', 'guy', 'chicks', 'sun'],
            function () {
                w.C('g')
                w.i.A(
                    Q.b('me'),
                    Q.b('guy')
                )
            }
        )

    }
    TXWQ = function () {
        WQ({C: 'r'}, function () {
            w.C('g')
            w.i.A(Q.b('me'), Q.b('guy'))
        })
    }
    QTX = function () {
        WQ(function () {
            i = w.i.qB('me', 0, 0, 3)
        })
    }
    WINDING = function () {
        W()._(function () {
            //$.header().A($.h1('grahics winding')).A()
            h = w.i.h().graphics.f("pink").dr(20, 20, 450, 360)
                .arc(160, 160, 110, 0, Math.PI * 2, true).closePath()
                .arc(330, 240, 110, 0, Math.PI * 2, true).closePath()
            bm = w.i.qB('chicks').X(470).drag()
            bm.mask = h.same().X(470)
        })
    }
    QUEUEMUG = function () {
        W()._(function (w) {
            ////// ok, this is what i thought.. its how i can preload someone's mug as 'mug' !
            // mug= s.bData( qu.gR("mug") ).drag()
            me = w.i.qB("me").drag()
        })
    }
}
function tickApps() {
    ONOFFTICK = function () {
        W({w: 0})
        //will break if u change it
        fun = w.s.t(ball)
        $.in(3, function () {
            w.s.xT(fun)
        })
        function ball() {
            if (R(5) < 1) {
                w.ball()
            }
        }


    }

}
FANCYEDIT = function (x, y) {


    z()

    canvas = $.canvas('g', 400)
    stage = new cjs.Stage(canvas[0]).tick()
    frame = $.dragFrame(theSpan = $.span())

    theSpan.A(
        $.button('X', function () {
            frame.remove()
        }),
        $.button('pics', function () {
            $.imagesDiv(stage)
        }),

        $.button('transform'),
        $.button('text'),

        $.button('paint', function () {

            _paintColor = '#0FF'

            var size = 10, oX = 0, oY = 0, shape

            var paintStage = $.dragStage()

            // stage.a(  EaselText('finger paint', 'b', 40, 100, 10))

            paintStage.bm(
                stage.du(), //?

                function (m) {


                    m.XY(40).sXY(.4)


                    stagePainter(paintStage)


                })


        }),
        $.button('cut'),

        $.button('save'))

    theSpan.A($.br(), canvas)

    theSpan.A($.div().A(
        $.button('clear', function () {
            stage.removeAllChildren()
        }),

        $.button('flat', function () {

            stage.removeAllChildren()

            stage.bm(stage.toDataURL(), function (bm) {
                bm.drag()
            })

        }),

        $.button('clone', function () {


            var newSpan = $span()

            var newStage = dragStage(newSpan)


            newStage.bm(stage.du(), function (bm) {
                SL(bm)

            })

        }),

        $.button('recur', function () {

            stage.bm(stage.du(), function (bm) {

                bm.sxy(.4)
                SL(bm)

            })
        }),

        $.button('copy', function () {

            _copy = stage.du()


        }),

        $.button('paste', function () {
            stage.bm(_copy, function (bm) {
                bm.drag()
            })
        }),

        $.button('replace', function () {

            stage.rm()
            stage.bm(_copy, function (bm) {
                bm.drag()
            })

        })
    ))

    theSpan.dblclick(function () {
        $('button').toggle()
    })


    theSpan.A()


}
ICEN=function(){Q(['guy','me'],function(){//z()
    s= new cjs.Stage( $.can( 'p', 1200, 600 )[0] ).A(); s.c=$(s.canvas)
    //s.bm('me', function(bb){b=bb.drag() })
    s.qB('guy').XY(300,300).spin()
    s.qB('guy').XY(300,300).sXY( .5, .3).spin()
    T.t(function(){ s.u() })
    _.in(3, function(){   T.f(1)   })
    _.in(9, function(){  T.f(1000)  })
})}
DRAG=function(){z()
    $.dragStage()
}


NEWSTG=function(){z()
    //three ways to make a new stage
    s = cjs.s('r',100 ).A().bm('me')
    s.can.drag()
    c= $.canvas('b',100).A().drag().XY(400)
    s1=cjs.s(c)
    s1.A().bm('me')
    c2= $.canvas('b',100).A().id('someId').drag().XY(300,100)
    s2=  cjs.s(['someId'])
    s2.tick().bm('me')

}


TEXT = function () {W()
    w.S(300, 100, 'z', 1500, 1)
    w.d('r', 300, 100)
    w.i.T('top').XY(300, 100).bl('+')  // should become + (counterintuitive i know.. but i noticed and fixed it!)
    w.i.T('bottom').XY(500, 100).bl('-')
    w.i.T('middle').XY(700, 100)
    w.dot(300, 400)
    nice = w.i.T('nice', 135, 'x', 300, 400)
    /*
     w.i.T('linewidth 0').XY(100,300).lW(0)
     w.i.T('linewidth null').XY(100, 500).bl('bottom')
     w.i.T('linewidth 100').XY(100, 700).drag().bl('middle').lW(800)
     w.i.T('lineheight -100').XY(700,300).lH(-100)
     w.i.T('lineheight 0').XY(700,500).lH(0)
     w.i.T('lineheight 100').XY(700,700).lH(100)
     w.i.T('linealign left').XY(600, 100)
     w.i.T('linealign right').XY(600, 200).tA('right')//.bl('bottom')
     w.i.T('linealign center').XY(600, 300).tA('center')//.bl('middle')
     */
    hello = 'fasdafsafsdfadsafafdsfadsafdsafdsfsd'
    w.show('hello')
}
SPEECH=function(){W()._(function(){
    t = w.i.T( 600, 300, 'hiiiiiiiiii', 200, 'r')
    ct = w.i.ct().drag()
    ct.h(200, 150).cir(130,'w').cir(100,50,100,'w')
    ct.T(250,150, 'yoyoyoo', 60, 'd')
    _.in(10, function(){ct.rm()})
    //ct.tw( [{   sxy:.1, x:x-250, y:y-250 }, 20000])
})}

TFSET= function(){


    W()._(function(){

        w.i.qB('me').grow().drag()

        i= w.i.qB('me').XY(200,200)

        ball = w.ball()

        _.in(3, function(){w.C('b'); ball.bS(i)})
        //  me.startMoving(10, 10)
        T.t(function(){iS = i.inStage()
            $l(iS)
        })
        b= w.i.qB('me')
        b.setTransform(0,0,2,.5,0,40,4,2,3)
        //m = b.getMatrix()

        function tf(a,b,c,d,e,f,g,h,i){

            return this.x=a||0,
                this.y=b||0,
                this.scaleX=null==c?1:c,
                this.scaleY=null==d?1:d,
                this.rotation=e||0,
                this.skewX=f||0,
                this.skewY=g||0,
                this.regX =h||0,
                this.regY =i||0,
                this}

    })
}
