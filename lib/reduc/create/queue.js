dfMf=[{id: "chicks", src: "/chicks.png"}, {id: "me", src: "/me.png"}, {id: "guy", src: "/guy.png"}, {id: "sun", src: "/sun.png"}]


q = cjs.LoadQueue.prototype
q.f = q.l =q.fileload =  function (fn) {var q = this; q.on("fileload", fn); return q}
q.c = q.complete = function(fn){this.on("complete", fn); return this}
q.b = q.bm = function (i, ct, x, y) {i=this.r(i)
    var bm = cjs.B(i) //cjs.bitmap(i)
    if (ct) {bm.a2(ct, x, y)}
    return bm
}
q.i = q.r = function (i) {
    i = this.getResult(i)
    i.w = i.width
    i.h = i.height
    return i
}
q.$ = function (i) {return $(this.i(i))}

q.mf = function(){var g=G(arguments)
    if (g.u) {return this}
    this.loadManifest( cjs.mf(g) )
    return this
}//this.loadManifest(mf)

q.m = function(){var  g = G(arguments)
    if(g.u){return this}
    this.mf( _.m(g.A ? g.f : g, _src) )
    return this
}

_src=function(i){
    return S(i)?{src:_.src(i),id:i}:i
}


$mf=function(){var g=G(arguments),mf=[]
    _.e(g.A? g.f: g, function(v) {mf.push(_src(v))})
    return mf
}




cjs.mf =  function (a) {var g = G(arguments), q,
    o = g.F? {fn: g.f} : g.A? {mf: g.f} : {mf: g}
    if(o.mf){return $mf(o.mf)}
    q=cjs.lq()
    q.c(function(){o.fn(function(i){return q.r(i)})}).mf(dfMf)
}





cjs.lq =  function (mf, fn) {
    cjs._lq=function(){return new cjs.LoadQueue(true)}
    var q = cjs._lq()
    if(A(mf)){
        q.loadManifest(cjs.mf.apply(null, mf))}
    if(F(fn)){
        q.complete(function(){
        fn(function(img){
            return q.getResult(img)
        })
    })}
    return q
}



Q=function(){
    var g=G(arguments),
        o=g.F?{fn:g.f}:
        {m:g.f,fn:g.s},
        q=cjs.lq()


    q.c(function(){
        o.fn(q)
    }).mf( cjs.mf(o.m) )

}



Q=function(){var g = G(arguments),o=g.F?{fn: g.f}:{m:g.f,fn:g.s},  q = cjs.lq()

   o.m = o.m || ['me', 'guy', 'sun', 'chicks', 'earth']
    q.c(function(){o.fn(q)}).m(o.m)

    Q = q
}



Cycle2=function(x,y){ct=  $Ct()
    var qu =  new cjs.LoadQueue().c( graphics ).mf([{id:"mug", src:"/myMug" }, {id:"uni", src:"/uni.png"}])
    function graphics(){
        ct.bm(qu.r("uni"),
            function(b){bm = b.sX(-.8).X(-20).Y(200)
                .rX(240).rY(80)
                bm.name=('uni')})
        ct.bm($.img($.parseJSON(qu.r("mug"))),
            function(b){mug =b.sXY(.4)})
        SL(mug, ct)

        cjs.tw(
            [mug,'l'],   [{y:-10},200],
            [{y:10},200],  [{y:0},200])
    }

    if(N(x)){c.X(x)}
    if(N(y)){c.Y(y)}
    return c
}

mugCont=function(st){
    qu= new cjs.LoadQueue().c(onMug).mf([{
            id:"mug",
            src:"/myMug"
        }
    ])
    cont= createjs.container()
    cont.flame=function(){
        cont.desuit()
        cont.A(
            cont.suit = cjs.container().bm('flame', function(flame){  })
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
    return cont
}




MANIFEST = function () {s = cjs.S()
    Q(['me', 'guy'], function (q) {
        s.A(me = q.bm('me'))
        s.A(guy = q.bm('guy'))
        guy.drag()
    })
}

QUEUE=function(){z()
    s= $St(500)
    qu  = new cjs.LoadQueue()
    qu.on("complete", handleComplete, this)
    qu.loadManifest([{id:"myImage", src:"/me.png"}, {id:"guyImage", src:"/guy.png"}])


    function handleComplete(){s.A(cjs.bm(image= qu.r("myImage")))}
}


QUEUEMUG=function(){z()
    s = $St(500, 500)
    qu = Ql().c(graphics, this).l([
        {id:"mug", src:"/getMug" },
        {id:"me", src:"/me.png"}
    ])

    ////// ok, this is what i thought..
    // its how i can preload someone's mug as 'mug' !
    function graphics(){
        // mug= s.bData( qu.gR("mug") ).drag()
        me = cjs.bm( qu.gR("me") ).drag()
        s.A( me )
    }

}


CONTMUG=function(){z()
    s= $St(1000).A(  m = mugCont()  )//.rgc('+')
    SL(m)
}

old=function(){
    cjs.handleFileLoad = function (e) {
        if (e.item.type == "image") {
            images[e.item.id] = e.result
        }
    }

//cjs.makeManifest = cjs.makeMan = function(a){return cjs.mf.apply(null, _.m(a.images, function (i) {return _.crs(i)}))}

// q.m:
// protosig:
//
// 'me',..
//
// {src:'me', id:'him'},..
//
// [ {src:*, id:*}, 'me',.. ]


    WHYQ = function (){
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
}