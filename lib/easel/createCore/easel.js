cjs=C$=createjs
Utils = {}
Graphics = window['Graphics'] || {}
Graphics.getCanvas = C=function(a){
    if(_.isObject(a= E(a)||a)){
        return a.canvas? a.canvas  :

            s$(a.toString() ).contains('Canvas')

                ? Q(a)[0]:0}}
Graphics.fromSource = crs=function(a){
    //it's the opposite of 'src' !
//it strips '/me.png' -> 'me'
//why would i need this?
    return a.split('/').pop().split('.png')[0] }
Graphics.isDataURL=function(d){
    if(U(d)){return false}
    return s$(d).contains('data:')
}

cjs.src = Graphics.toSource = src=function f(e){
    var _src=function(a){ a = _.ext(a)

        return s$(a).startsWith('/')? a : '/'+ a }
    //if(Q(e)){$l('q');e=$(e)[0]}
    if( e.image ){ e=e.image}
    if( C(e) ){ e = C(e) }
    if( e.src ){ e = e.src}
    if( e.toDataURL ){  e=tDU(e) }
    return s$(e).contains('data:')?  e
        :  S(e) ?  _src(e)
        : 0
}
_.timeout = function(times,func){
alert('T')
    var timeout
    if(N(times)){return _.t(times, function(i){
            func(i+1)
        })}
    if(F(times)){timeout=N(func)?func:100; func=times}
    return setTimeout(func,timeout)
}
isWindow = function(a){alert('isWindow'); if(O(a)){
    if( s$(a).contains('Window') ||
        s$(a[0]).contains('Window')){
        return window}
}}
R=function(n,n2){var num
    n=N(n)?n:1
    n2=N(n2)?n2:0
    return M.round((M.random()*n)+n2)
}
$.space = function (fn){return $.kD('space',fn)}
z=function(fn) {var g = G(arguments)
    if (g.F_){ return T.t(fn)}
    $('body').empty()
}
K=  function(k,fn) {
    var g = G(arguments), o,key
    if(g.u){
        if (K._loaded) {return}
        $.kD('l', function () {
            if ($.test) {
                $l('left pressed')
            }
            K.l = cjs.Keys.l = cjs.Keys.left = true
            cjs.Keys.dir = 'left'
            K.l = 1;
            K.L = 0})
        $.kU('l', function () {
            if ($.test) {
                $l('left lifted')
            }
            K.l = cjs.Keys.l = cjs.Keys.left = false
            K.l = 0;
            K.L = 1
        })
        $.kD('r', function () {
            if ($.test) {
                $l('right pressed')
            }
            K.r = cjs.Keys.r = cjs.Keys.right = true
            cjs.Keys.dir = 'right'
            K.r = 1;
            K.R = 0
        })
        $.kU('r', function () {
            if ($.test) {
                $l('right lifted')
            }
            cjs.Keys.r = cjs.Keys.right = false
            K.r = 0;
            K.R = 1
        })
        $.kD('u', function () {
            if ($.test) {
                $l('up pressed')
            }
            cjs.Keys.u = cjs.Keys.up = true
            K.u = 1;
            K.U = 0
        })

        $.kU('u', function () {
            if ($.test) {
                $l('up lifted')
            }
            cjs.Keys.u = cjs.Keys.up = false
            K.u = 0;
            K.U = 1
        })
        $.kD('d', function () {
            if ($.test) {$l('down pressed')}
            cjs.Keys.d = cjs.Keys.down = true
            K.d = 1;
            K.D = 0
        })

        $.kU('d', function () {
            if ($.test) {
                $l('down lifted')
            }
            cjs.Keys.d = cjs.Keys.down = false
            K.d = 0;
            K.D = 1
        })

        K._loaded = 1

        return
    }
    if(O(k)){
        if(g.p){
            if(F(k.u)){z(function(){if(K.u){k.u(K.u)}})}
            if(F(k.d)){z(function(){if(K.d){k.d(K.d)}})}
            if(F(k.l)){z(function(){if(K.l){k.l(K.l)}})}
            if(F(k.r)){z(function(){if(K.r){k.r(K.r)}})}}
        else {_.e(k, function(fn,k){K(k,fn)})}
        return}
    o = s$(k).isUpper()?  {on:'keyup', k:k.toLowerCase()}:  {on:'keydown', k:k}
    if(g.p){   return z(function(){if(K[k]){ fn( )  }})}
    key=Key(o.k)
    return $('body').on( o.on , function(e){    if( e.which==key ){  fn(e) }    })
    function Key(k){var ob={u:38,d:40,l:37,r:39,s:32,e:13}; return ob[k]? ob[k]: k}
}
$PT =  function(){


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

df={}
df.b = function () {
    var g = G(arguments), o
    o = g.A ? {hs: g.f} : g.f || {}
    o.hs = o.hs || []
    o.i = o.i || 'me'
    return o
}
df.h = function (o) {
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
}


$H= $h= function(){var g=G(arguments),
    h = new cjs.Shape(), //if (cjs.iH(x)) {return new cjs.Shape(x.graphics)}
//pass in your own obj to use 'o.i/o.bf' or 'o.lf' or 'o.rf'
    o= g.O? g.f:
        g.N_? ( N( g[3] )? // 'c-C-l' pattern
        { x:g.f, y:g.s, C: g.t, l:g[3]} : { x:g.f, y:g.s, c: g.t, C:g[3], l:g[4]} ) :
            // 'c-C-l' pattern
            N(g.s)? { C:g.f, l:g.s } :
            { c:g.f, C:g.s, l:g.t }
    h.XY( N(o.x,0), N(o.y,0) )
    h.c( o.c || 'z', o.C || 'w', o.l ||  8 )
    if(o.C){h.C(o.C)}
    if(N(o.l)){h.l(o.l)}
    if(g.p){h.dg()}
    return  h
}
$Cir=   function () {var g = G(arguments),
    o = g.S_? {c:g.f,x:g.s,y:g.t,r:g[3]}: {x:g.f,y:g.s,r:g.t}
    return $H(o.c,o.x,o.y).dc(o.r)
}
St=function(){z()
    s = cjs.stg(1200,600).A()
    h = $h(0,0).a2(s)
    SL(h)
}
cjs.iCt = function (ct) {
//haha only a ct can impl addContainer( ha! //MOMENT OF BRILLIANCE
    return O(ct) && ct.addContainer
}
cjs.M = function (a) {
    var m = new cjs.Matrix2D()
    if (N(a)) {
        m.rotate(a)
    }
    return m
}
cjs.Gx = cjs.gx = function (a) {
    return new cjs.Graphics(a)
}
cjs.rulers = function () {
    $.d('b', 100, 100).al(.3).dg()
    $.d('r', 100, 300).al(.3).dg()
}
cjs.iH = function (h) {
    return O(h) && h.graphics
}
cjs.iT = function (t) {
    if (O(t)) {
        return (t.textBaseline)
    }
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
cjs.dia = function self(width, height, fc, sc) {
    fc = fc || 'green'
    sc = sc || 'white'
    width = width || 100
    height = height || width
    halfwidth = width / 2
    halfheight = height / 2
    var h = new createjs.Shape()
    h.graphics.f(fc).s(sc)
        .mt(0, -halfheight)
        .lt(-halfwidth, 0).lt(0, halfheight)
        .lt(halfwidth, 0).lt(0, -halfheight)
    return h
}


cjs.toColor =toColor = tCl=function(n1,n2,n3,n4){

    return n2? "rgba("+n1+","+n2+","+""+n3+","+(n4||1)+")"
        :
        $r('c', n1)
}






$.fn.T = function () {var d = this, g = G(arguments)
    d.E()
    g.e(function (str) { d.A($.h3(str)) })
    return d
}
$St=function(){var st, g=G(arguments), cv
    //get by canvas ID
    cv = g.A? g.f[0]:
        //if you pass it a canvas OR a $canvas object
        O(g.f)? $(g.f)[0] :
            //create a new canvas
            $.c(g.f||'p',g.s||1200,g.t||600,g[3],g[4])[0]
    st = new cjs.Stage( cv )

    st.cv=   st.c=st.can= $(st.canvas)
    st.cv0=  st.cv[0]
    st.xc= st.cv0.getContext('2d')

    if(g.p){st.t()}

    return st.A()
    //.t()
}
cjs.iDO= function(i){return O(i)&&F(i.getStage)}


$Bm= cjs.B= cjs.bm= function(){var g=G(arguments),   i=g[0], bm
    bm=new cjs.Bitmap(i)
    if(g.p){ bm.drag() }
    return bm
}
$.fn.a2=function(el){el.A(this); return this}
$.St=function(){z()
    s = $St().t()
    s.bm('me', function(bb){
        b=bb.drag()
    })
    return s
}
$.dragStage = function (x, y) {
    s = $St('v',  '+')
    return $.dragFrame($(s.canvas))
}
//text
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
$Ct=cjs.Ct=cjs.ct=function(a){return new cjs.Container(a)}
cjs.bulletHit = function (bullet, inWhat) {

    var x = bullet.centerX(),
        y = bullet.centerY()

    var res = Math.pointInCircle(x, y, {x: inWhat.x, y: inWhat.y, radius: inWhat.H() / 2})

    if (res == true) {
        $l('hit!')
    }
    return res
}


T= cjs.Ticker
T.s= cjs.xL= function(){

    /* TICKER
     paused : Indicates whether the ticker is currently paused.
     d       delta :  time since the last tick
     t       time : how much  since T  started
     r      runTime  : how much time has T been running for

     // returns   The average time spent in a tick in milliseconds.
     //This can vary significantly from the value provided by getMeasuredFPS because it only measures the time spent
     // within the tick execution stack.
     Example 1: With a target FPS of 20, getMeasuredFPS()
     returns 20fps, which indicates an average of 50ms between the end of one tick and the end of the next.
     However, getMeasuredTickTime() returns 15ms.
     This indicates i there may be up to 35ms of "idle" time between the end of one tick and the start of the next.

     Example 2: With a target FPS of 30, getFPS() returns 10fps,
     which indicates an average of 100ms between the end of one tick and the end of the next. However,
     getMeasuredTickTime() returns 20ms.
     This would indicate i something other than the tick is using ~80ms
     (another script, DOM rendering, etc).

     */
    T.removeAllEventListeners()  } // u might say xTHIS but not thisX? i dont know what i am talking about
T.p=function(){T.setPaused(false);return T}
T.P= T.s= function(){T.setPaused(true);return T}
T.$=function(){
    T.setPaused( T.getPaused() == false ? true : false )
    return T}
T.t=   cjs.t =   function(fn){var g=G(arguments)
    if(g.F_){
        if(!g.n){fn()}
        return T.on('tick', fn) // T.addEventListener? return T?
    }
    return   g.n?  T.t('+') - T.t() :
        Number( (T.getTime(g.p?false:true)/1000).toFixed(2) )
}
T.i=function(){
    //indicates the target time (in ms) between ticks
    //default is 50 (20 fps)
    //Note: actual time between ticks may be more than specified,
    //  depending on CPU load. (but this property is ignored if the ticker is using the RAF timing mode)
    return T.interval
}
T.f=  function(numTicks){var g=G(arguments)  //numTicks:   optional: The number of previous ticks over which to measure the actual frames
// / ticks per second.Defaults to the number of ticks per second.
    if(N(numTicks)){T.setFPS(numTicks);return T}
    return g.n?
        T.getFPS():
        T.getMeasuredFPS() //returns *ACTUAL* frames
    // / ticks per second//
    // Depending on performance,
    // this may differ from the target frames per second.
}
T.e= function( runTimePropReturnedInsteadOfTime ) {
    //Similar to getTime(), but returns the time on the most recent tick event object.
// returns the time or runTime property from the most recent tick event or -1.
    T.getEventTime ( runTimePropReturnedInsteadOfTime )//df: false ( If true, the runTime property will be returned instead of time  )
}
T.m=function( ticks  ){
    return T.getMeasuredTickTime (ticks )} //ticks: // optional The number of previous ticks over which to measure the average time spent in a tick.Defaults to the number of ticks per second.To get only the last tick's time, pass in 1.


Q = function(){
    var g = G(arguments), o, q
    o = g.F ? {c: g.f} : {m: g.f, c: g.s}
    o.m = o.m || ['me', 'guy', 'sun', 'chicks', 'earth']
    q = new cjs.LoadQueue
    Q = q.c(o.c).m(o.m)
}
WHYQ = function () {
    //to shape -> ct.circle = function(x,y,r,c){var ct=this;ct.A(cjs.circle(x,y,r,c));return ct}
// 'P' is avaible.  potition?  (M is taken by Math, but mouse needs something)

    cjs.Keys.l = cjs.Keys.left = false
    cjs.Keys.r = cjs.Keys.right = false
    cjs.Keys.u = cjs.Keys.up = false
    cjs.Keys.d = cjs.Keys.down = false

    $.kU('l', function () {
        if ($.test) {
            $l('left lifted')
        }
        cjs.Keys.l = cjs.Keys.left = false
    })

    $.kD('l', function () {
        if ($.test) {
            $l('left pressed')
        }
        cjs.Keys.l = cjs.Keys.left = true
        cjs.Keys.dir = 'left'
    })

    $.kD('l', function () {
        if ($.test) {
            $l('left pressed')
        }
        cjs.Keys.l = cjs.Keys.left = true
        cjs.Keys.dir = 'left'
    })

    $.kD('r', function () {
        if ($.test) {
            $l('right pressed')
        }
        cjs.Keys.r = cjs.Keys.right = true
        cjs.Keys.dir = 'right'
    })

    $.kU('r', function () {
        if ($.test) {
            $l('right lifted')
        }
        cjs.Keys.r = cjs.Keys.right = false
    })


    $.kD('u', function () {
        if ($.test) {
            $l('up pressed')
        }
        cjs.Keys.u = cjs.Keys.up = true
    })
    $.kU('u', function () {
        if ($.test) {
            $l('up lifted')
        }
        cjs.Keys.u = cjs.Keys.up = false
    })
    $.kD('d', function () {
        if ($.test) {
            $l('down pressed')
        }
        cjs.Keys.d = cjs.Keys.down = true
    })

    $.kU('d', function () {
        if ($.test) {
            $l('down lifted')
        }
        cjs.Keys.d = cjs.Keys.down = false
    })
}
