W=b2d.W=function(){var g=G(arguments),o
    o = g.A_?
        _.x(g.s||{}, {
            W:g.f[0], H:g.f[1],
            wW:g.f[2], wH:g.f[3]
        }) :
        N(g.f) && U(g.s)? { g: g.f }:
            g.$N? {W:g.f,H:g.s, wW:g.t, wH:g[3]}:
                g.S? {w:g.f }:
                g.f || {} //W([], [{}]) //W(1000)//W(1200,600,[N],[N])//W('U')
    _w = o.w
    o.g = N(o.g) ? V(0, o.g) :
        O(o.g) ? V(o.g) :
            V(0, 10)
    o.sl = U(o.sl) ? true : o.sl
    w = new b2d.World(o.g, o.sl)
    if(o.xx!==0){z()}
    w.W = N(o.W,1200)
    w.H = N(o.H,600);
    w.w = N(o.wW, w.W);
    w.h = N(o.wH, w.H);
    w.Ww = w.W/w.w; w.wW = w.w/w.W; w.Hh = w.H/ w.h; w.hH = w.h/ w.H;
    w.mZ = w.hH > w.wW? w.hH : w.wW; w.mS = w.Ww > w.Hh ? w.Ww : w.Hh;
    w.hW = w.W/2; w.hH = w.H/2; w.z=1; w.SCALE=1

    //handling
    w.bH=   []; w.pH=   []; w.PH=   []; w.eH=   []  //l.P=  l.post=  function (fn) {this.PostSolve = fn; return this}
//l.b=  l.beg=  function (fn) {this.BeginContact = fn; return this}
//l.e=  l.end= function (fn) {this.EndContact = fn; return this}
//l.p=  l.pre=  function (fn) {this.PreSolve=fn;return this}
//w.listen = w.setContactListener = w.sCL = w.SetContactListener
    b2d.L= b2d.listener = b2d.contactListener = function () {return new b2d.Dynamics.b2ContactListener}
    w.SetContactListener(_.x(w.ln=new b2d.Dynamics.b2ContactListener,{

        BeginContact : function(cx){_.e(w.bH, function(fn){
            $.do(function(){fn(cx)})  })},

        EndContact : function(cx){_.e(w.eH, function(fn){
            $.do(function(){ fn( cx ) })   })},

        PreSolve : function(cx, i){_.e(w.pH, function(fn){
            fn(cx,i)})},

        PostSolve : function(cx, pam2){_.e(w.PH, function(fn){
            $.do(function(){fn(cx,pam2)})})}

    }))

    //grpx
    w.I = $St('z', w.W, w.H ,0, 0)
    w.s= $St('X', w.W, w.H, 0, 0)//.aC(0)
    w.canvas = w.s.canvas
    w.can= $(w.canvas)
    w.ctx = w.can.ctx('2d')
    w.bg= w.s.ct();
    w.g=  w.s.ct();
    w.fg= w.s.ct()
    w.i =  $St('X', w.W, w.H, 0, 0)

    if(o.i){ w.s.bm(o.i) }
    w.lG($r())

    if(o.aC==1){
        //w.i.aC(0)
        // if(g.O){; return w}
        // return g.u? w.i.aC(!w.i.aC()): g.s? w.i.aC(w):
    }

    //debug
    /*

     debugArea = $St('z', w.W, w.H, 0, w.H)

     debugDraw = new b2d.Dynamics.b2DebugDraw
     debugDraw.SetSprite(debugArea.c.ctx())
     debugDraw.m_drawScale=30 * (w.W/ w.w) * .8
     debugDraw.m_alpha = 1
     debugDraw.m_fillAlpha=1
     debugDraw.m_lineThickness=10
     debugDraw.m_drawFlags =  b2DebugDraw.e_jointBit|
     b2DebugDraw.e_shapeBit| b2DebugDraw.e_obbBit|
     b2DebugDraw.e_controllerBit|
     b2DebugDraw.e_aabbBit|
     b2DebugDraw.e_pairBit|
     b2DebugDraw.e_centerOfMassBit
     debugDraw.alpha(.6).line(3000)
     */
    //w.SetDebugDraw(debugDraw)

    w.walls(_w)

    $.kD('l',function(){
        if ($.test) {$l('d pressed')}
        K.l = $.K.l = $.K.d = true
        $.K.dir = 'd'
        K.l = 1;
        K.L = 0

    })

    $.kU('l',function(){if ($.test) { $l('d lifted') }
        K.l = $.K.l = $.K.d = false
        K.l = 0;
        K.L = 1
    })

    $.kD('r',function(){if ($.test) {$l('r pressed')}
        K.r = $.K.r = $.K.r = true
        $.K.dir = 'r'
        K.r = 1;
        K.R = 0
    })

    $.kU('r',function(){if ($.test) {
        $l('r lifted')
    }
        $.K.r = $.K.r = false
        K.r = 0;
        K.R = 1
    })
    $.kD('u',function(){if ($.test) {
        $l('u pressed')
    }
        $.K.u = $.K.u = true
        K.u = 1;
        K.U = 0
    })
    $.kU('u',function(){if ($.test) {
        $l('u lifted')
    }
        $.K.u = $.K.u = false
        K.u = 0;
        K.U = 1
    })
    $.kD('d',function(){if ($.test) {
        $l('d pressed')
    }
        $.K.d = $.K.d = true
        K.d = 1;
        K.D = 0
    })
    $.kU('d',function(){if ($.test) {
        $l('d lifted')
    }
        $.K.d = $.K.d = false
        K.d = 0;
        K.D = 1
    })
    K._loaded = 1

    w.mm(logMXY)
    w.md(function(o){

        logMXY(o)

        w.q(o.x, o.y, function(f){

            //if(!f.iD()){return true}



            if(f.of(w.o.m)){


                w.mj = w.mJ( f.B(), o.x, o.y)
            }


        })})
    //this is great//it demonstrates md, q, m, and ofClass //but it has a real purpose too!//anytime moused.. because that implies there was a mouse u //so there should be no current mouse joint.. smart!
    w.mu(function(){if(w.mj){w.j(w.mj);w.mj=0}})
    T.t(function(){


        if(w.mj){w.mj.tg(w.mx, w.my)}
        w.step(1/60)
        if(F(o.cb)){o.cb()}
        if(!T.iP()){ w.I.u(); w.s.u(); w.i.u()}

        //  w.DrawDebugData()

        w.e(function(b){
            b.wX = b.X(); b.wY= b.Y()
            b.sX = w.wTS(b.wX, b.wY).x
            b.sY= w.wTS(b.wX, b.wY).y
            if(O(b.gx)){
                b.gx.XY(b.X(), b.Y()).rt(b.rt())
            }
        })

    })
    if(o.t!==0){

        w.t =  w._t = w._t || w.S(w.hW, w.hH, 'w', [[20,2,'-'] ]).r(.8) //trackee

        w.i.A( w.tSpr=  cjs.ct().XY(w.t.X(), w.t.Y()) ) //  w.tSpr.bm('guy', function(g){  g.sXY(.2)}) // w.tSpr.A(g)

        T.t(function(){

            if(F(w.t.cb)){w.t.cb()} else if(F(w.tCb)){w.tCb()}

            w.s.x = -w.sXCap( (w.t.X()-w.hW+ w.hW)*w.z - w.hW  )

            w.s.y = -w.sYCap( (w.t.Y()-w.hH+ w.hH)*w.z - w.hH  )

            if(w.t == w._t){
                w.t.XY(w.tSpr.X(), w.tSpr.Y())
                w.s.rot(w.tSpr.rot())
            }
        })
    }
    w.o=o //w.stats()
    return w//h = w.i.h()//gx= h.graphics//w.hud.SHAPE  = w.hud.h($r())//w.hud.SHAPE.rec( 0, 0, 5000, 5000).al(.3)
    function logMXY(e){var p = w.sToW(e.X,e.Y);w.mx=p.x; w.my=p.y}


}//cjs.Ticker.removeAllEventListeners() //w.show(function(){}) // not working with scroll