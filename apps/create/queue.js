//this aint no app... it a fn
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

TXWQ = function () {
    WQ({C: 'r'}, function () {
        w.C('g')
        w.i.A(Q.b('me'), Q.b('guy'))
    })
}


MF = function () {W().C('r')

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

        ////// ok, this is what i thought..
        // its how i can preload someone's mug as 'mug' !
        // mug= s.bData( qu.gR("mug") ).drag()
        me = w.i.qB("me").drag()

    })

}


