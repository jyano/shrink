q = cjs.LoadQueue.prototype
q.fileload = function (func) {
    this.addEventListener("fileload", func)
    return this
}
q.complete = function (func) {
    this.addEventListener("complete", func)
    return this
}
q.manifest = function (manifest) {
    this.loadManifest(manifest)
    return this
}
q.mf = function () {
    this.loadManifest(cjs.mf.apply(null, arguments))
    return this

}
q.bm = function (img) {

    img = this.getResult(img)


    return cjs.bitmap(img)
}
q.f= q.l= function(fn){var q=this
    q.on("fileload", fn)
    return q}
q.c= function (fn) {var q=this
    if(F(fn)){ q.on("complete", fn) }
    return q
}
q.b=  q.bm =function(i, ct, x, y){var bm = cjs.B( this.r(i) )
    if(ct){bm.a2(ct,x,y)}
    return bm
}
q.i=  q.r= function(i){
    i  = this.getResult(i)
    i.w= i.width
    i.h = i.height
    return i
}
q.$=function(i){
    return $(this.i(i))
}
q.m = function(){var q=this, g=G(arguments), _mf, mf
    // q.m:
// protosig:
//
// 'me',..
//
// {src:'me', id:'him'},..
//
// [ {src:*, id:*}, 'me',.. ]

    if(g.u){return q}
    _mf = g.A ? g.f : g
    mf = _.m(_mf,  function(item){
        return S(item)? {src:cjs.src(item),id:item} : item
    })
    q.loadManifest( mf )
    return q
}

T = T$ = cjs.Ticker

cjs.t = cjs.tick = function (fn) {
    fn();
    cjs.Ticker.on('tick', fn)
}
cjs.ticker = tt = function (a, b, c) {

    var g = G(arguments),
        t = true,
        f = false,
        a = g[0],
        b = g[1],
        c = g[2]

    if (F(a)) {

        return aEL(T$, 'tick',
            g.N ? a
                : function (e) {

                if (!e.paused) {
                    a(e)
                }
            })

    }


    if (O(a)) {
        return aEL(T$, 'tick', a)
    }

    if (a == '?') {
        return !T$.getPaused()
    }
    if (a == 'p') {
        T$.setPaused(f);
        return tt('?')
    }

    if (a == 's') {
        T$.setPaused(t);
        return tt('?')
    }

    if (a == 'g') {
        return tt(
            tt('?') ? 's' : 'p'
        )
    }


    if (a == '@') {
        return T$.init()
    }

    if (a == '!') {
        return T$.reset()
    }

    if (a == 'e') {
        return T$.getEventTime(g.p ? t : f)
    }

    if (a == 't') {
        return T$.getTime(g.p ? t : f)
    }

    if (a == '#') {
        return T$.getTicks(g.n ? t : f)
    }

    if (a == 'md') {
        return t$.maxDelta
    }

    if (a == 'M') {
        return T$.timingMode
    }

    if (a == 'i') {
        if (N(b)) {
            T$.setInterval(g.m ? b * 1000 : b)
            return tt('i')
        }
        if (U(b)) {
            return T$.getInterval()
        }
    }

    if (a == 'f') {
        if (N(b)) {
            T$.setFPS(b);
            return tt
        }
        if (U(b)) {
            return T$.getFPS()
        }
    }

    if (a == 'r') {
        if (b > 10) {
            tt('f', b)
        } else {
            tt('i', b, '*')
        }
    }


    if (a == 'm') {
        return N(b) ? T$.getMeasuredFPS(b)
            : T$.getMeasuredFPS()
    }

    if (a == 'tk') {
        return Ed(T$)
    }

}
cjs.stop = function () {

    cjs.Ticker.removeAllEventListeners()

}
tickX = function (e) {
    j.Y(e.delta / 1000 * 100, '-')
}
timeStamp2 = function (s, j, pxPerSec) {
    var fn = function (s, e) {

        if (!N(j.ts)) {
            j.ts = 0;
            j.lts = e.ts
        }

        else {
            j.ts = e.ts - j.lts;
            j.lts = e.ts

            j.y((j.ts / 1000) * pxPerSec, '-')
        }
    }
    return s.t(fn)
}

cjs.Keys = function(o){
    if(O(o)){
        if(F(o.u)){
            cjs.tick(function(){if(cjs.Keys.u){ o.u(cjs.Keys.u) } })}
        if(F(o.d)){
            cjs.tick(function(){
                if(cjs.Keys.d){ o.d(cjs.Keys.d) } })
        }
        if(F(o.l)){
            cjs.tick(function(){
                if(cjs.Keys.l){
                    o.l(cjs.Keys.l)
                } })}
        if(F(o.r)){
            cjs.tick(function(){if(cjs.Keys.r){
                o.r(cjs.Keys.r)
            } })
        }
    }
}
cjs.watchKeys=function(){
    cjs.Keys.l = cjs.Keys.left = false
    cjs.Keys.r = cjs.Keys.right = false
    cjs.Keys.u = cjs.Keys.up = false
    cjs.Keys.d = cjs.Keys.down = false
    $.kD('l',function(){
        if($.test){$l('left pressed')}
        cjs.Keys.l = cjs.Keys.left = true
        cjs.Keys.dir = 'left'})
    $.kU('l',function(){if($.test){$l('left lifted')}
        cjs.Keys.l = cjs.Keys.left = false
    })
    $.kD('r',function(){if($.test){$l('right pressed')}
        cjs.Keys.r = cjs.Keys.right = true
        cjs.Keys.dir = 'right'})
    $.kU('r',function(){if($.test){$l('right lifted')}
        cjs.Keys.r = cjs.Keys.right = false
    })
    $.kD('u',function(){if($.test){$l('up pressed')}
        cjs.Keys.u = cjs.Keys.up = true
    })
    $.kU('u',function(){if($.test){$l('up lifted')}
        cjs.Keys.u = cjs.Keys.up = false
    })
    $.kD('d',function(){if($.test){$l('down pressed')}
        cjs.Keys.d = cjs.Keys.down = true
    })
    $.kU('d',function(){
        if($.test){$l('down lifted')}
        cjs.Keys.d = cjs.Keys.down = false
    })
}
TESTWATCHKEYS=function(){z()
    $.test=true
    cjs.watchKeys()
}
KEYWATCH = function(){
    J=cjs
    $.test=true
    J.Keys.l = J.Keys.left = false
    J.Keys.r = J.Keys.right = false
    J.Keys.u = J.Keys.up = false
    J.Keys.d = J.Keys.down = false
    $.kU('l',function(){
        if($.test){$l('left lifted')}
        J.Keys.l = J.Keys.left = false
    })
    $.kD('l',function(){
        if($.test){$l('left pressed')}
        J.Keys.l = J.Keys.left = true
        J.Keys.dir = 'left'})
    $.kD('l',function(){
        if($.test){$l('left pressed')}
        J.Keys.l = J.Keys.left = true
        J.Keys.dir = 'left'})
    $.kD('r',function(){if($.test){$l('right pressed')}
        J.Keys.r = J.Keys.right = true
        J.Keys.dir = 'right'})
    $.kU('r',function(){if($.test){$l('right lifted')}
        J.Keys.r = J.Keys.right = false
    })
    $.kD('u',function(){if($.test){$l('up pressed')}
        J.Keys.u = J.Keys.up = true
    })
    $.kU('u',function(){if($.test){$l('up lifted')}
        J.Keys.u = J.Keys.up = false
    })
    $.kD('d',function(){if($.test){$l('down pressed')}
        J.Keys.d = J.Keys.down = true})
    $.kU('d',function(){if($.test){$l('down lifted')}
        J.Keys.d = J.Keys.down = false
    })
}

cjs.loadQueue = cjs.lq = function (mf, func) {

    var q = new cjs.LoadQueue(true)

    if (A(mf)) {
        q.loadManifest(cjs.mf.apply(null, mf))
    }

    if (F(func)) {
        q.complete(function () {
            func(function (img) {
                return q.getResult(img)
            })
        })
    }
    return q
}


cjs.manifest = function (func) {
    var q = cjs.loadQueue()

    q.complete(
        function () {

            func(function (getResult) {
                return q.getResult(getResult)
            })
        })

        .manifest([{
            id: "chicks", src: "/chicks.png"
        },
            {id: "me", src: "/me.png"},
            {id: "guy", src: "/guy.png"},
            {id: "sun", src: "/sun.png"}])
}
cjs.handleFileLoad = function (e) {
    if (e.item.type == "image") {
        images[e.item.id] = e.result
    }
}
cjs.mf = cjs.manifest = function (a) {
    var g = G(arguments), mf = []
    _.e(g, function (v) {
        mf.push({src: cjs.src(v), id: v})
    })
    return mf
}
cjs.makeManifest = cjs.makeMan = function (a) {
    return cjs.manifest.apply(null, _.m(a.images, function (i) {
            return Graphics.fromSource(i)
        })
    )
}

old=function() {
    Q = function (imgs, func) {
        $l('q from wappy (queue.js)')
        var q = cjs.lq()
        mf = []
        _.each(imgs, function (v) {

            mf.push({

                src: cjs.src(v),
                id: v

            })
        })
        q.manifest(mf)
        q.complete(function () {
            func(q)
        })

    }
}

Cycle2=function(x,y){
    ct=  c= cont= $Ct()
    var qu =  new createjs.LoadQueue().complete( graphics )
        .manifest([{id:"mug", src:"/myMug" }, {id:"uni", src:"/uni.png"}])
    function graphics(){
        cont.bm(
            qu.getResult("uni"),
            function(b){bm = b.sX(-.8).X(-20).Y(200).rX(240).rY(80)
                bm.name=('uni')})
        cont.bm($.img($.parseJSON(qu.getResult("mug"))),
            function(b){mug =b.sXY(.4)})
        SL(mug, cont)
        createjs.tween([mug,'l'],   [{y:-10},200],   [{y:10},200],  [{y:0},200])
    }
    if(N(x)){c.X(x)}
    if(N(y)){c.Y(y)}
    return c}
//// ***
mugCont=function(st){

    qu= new createjs.LoadQueue().complete(onMug).manifest([{id:"mug", src:"/myMug" }  ])
    cont= createjs.container()
    cont.flame=function(){
        cont.desuit()
        cont.A(

            cont.suit = createjs.container().bm('flame', function(flame){  })
        )
    }
    cont.uni=function(){
        cont.desuit()
        cont.A(

            cont.suit= createjs.container().bm('uni', function(uni){
                uni.x(200).y(200)
                cont.mug.sxy(.2).x(300)

            }))}
    cont.guy=function(){cont.desuit()
        cont.A(

            cont.suit= createjs.container().bm('guy', function(guy){

                guy.spin()
                cont.spin()

            })
        )}
    cont.desuit=function(){

        cont.mug.sXY(1).XY(200)
        if(cont.suit){
            cont.suit.remove()
            cont.suit=null
        }
    }
    function onMug(){
        mug = qu.getResult("mug")
        // cont.bData( mug )//.rgc('+')
        cont.A( cont.mug = createjs.bm(mug))
    }
    return cont}


function qApps(){
    MANIFEST = function () {
        s = cjs.S()


        Q(['me', 'guy'], function (q) {


            s.A(me = q.bm('me'))

            s.A(guy = q.bm('guy'))


            guy.drag()

        })


    }
    QUEUE=function(){z()
        s= $St(500)
        queue = new createjs.LoadQueue()
        queue.on("complete", handleComplete, this)
        queue.loadManifest(
            [{id:"myImage", src:"/me.png"}, {id:"guyImage", src:"/guy.png"}])
        function handleComplete(){

            image = queue.getResult("myImage")

            s.A(   createjs.bm(image)   )

        }}
    QUEUEMUG=function(){z()

        s = $St(500, 500)

        qu = Ql().c(graphics, this).l([
            {id:"mug", src:"/getMug" },
            {id:"me", src:"/me.png"}

        ])

        ////// ok, this is what i thought.. its how i can preload someone's mug as 'mug' !
        function graphics(){

            // mug= s.bData( qu.gR("mug") ).drag()

            me = createjs.bm( qu.gR("me") ).drag()
            s.A( me )


        }

    }

    CONTMUG=function(){z()
        s= $St(1000).A(  m = mugCont()  )//.rgc('+')
        SL(m)
    }

}

cjs.bm = cjs.bitmap =function(img){
    alert('J.bm')
    var g=G(arguments), img=g[0],
        bm = new J.Bitmap(img)
    if(g.N){bm.rC()}
    return bm
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
