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

Q = function (imgs, func) {

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