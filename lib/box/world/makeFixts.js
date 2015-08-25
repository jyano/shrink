b=b2d.Body.prototype

b.rec = function (c, W, H, x, y, a) {
    var b = this, w = b.W(),
        g = G(arguments, 'k'),
        o, fD, p, f

    if (g.OO_) {g.e(function (g) {b.rec(g)});return b}
    if (g.A) {return $a(b, 'rec', g)}



    if (g.O) {o = g.f}

    else {

        if(g.N_){
            g.ush('z')
        }

        o = {c: g.f, w: g.s, h: g.t, x: g[3], y: g[4], a: g[5]}

    }



    b2d.oDef(o)

    o.k = o.k || g.k

    fD = b2d.fD(
        b2d.pH().box(o)
    )

    if (o.s || g.n) {
        fD.isSensor = true;
        o.al = N(o.al, 0.8)
    }


    fD.d(o.d || .5)
    f = b.f(fD)
    f.K(o)
    if (o.c !== 0) {
        // f.g=w.g.h().rec(o)
        if (g.p) {
            f.g = w.g.h().rec(o)
        }//  f.g= w.g.h().rec(o) //this for but: (does something important)
        else {
            f.g = w.g.rec(o)//(o.w, o.h, o.c, o.C, o.l)
            f.bS(f.g)
        }  //,  o.a, o.x, o.y, o.al  //<-this for bike (does rotation)
        // f.bS(f.g)
    }
    return f
}

b.cir = function () {
    var b = this, g = G(arguments), o = g.f, fd, h, f

    //if passed array, it assumes it is arguments for ONE cir
    if (g.A) {
        return b.cir.apply(b, g.f)
    }

    //if you pass at least two objects,
    // it makes multiple cirs and passes back b

    if (O(g.s)) {
        g.e(function (c) {
            b.cir(c)
        })
        return b
    }


    // can pass obj

    // can pass: c C [r] [x] [y]
    // can pass: c [r] [x] [y]
    // can pass: [r] [x] [y] [c] [C]
    o = g.O ? g.f
        : S(g.s) ? {c: g.f, C: g.s, r: g[2], x: g[3], y: g[4]}
        : S(g.f) ? {c: g.f, r: g.s, x: g[2], y: g[3]}
        : {r: g.f, x: g.s, y: g[2], c: g[3], C: g[4]}


    //set defaults
    o.x = N(o.x, 0)
    o.y = N(o.y, 0)
    o.r = N(o.r, 40) //rad
    o.b = N(o.b, .5) //rest
    o.f = N(o.f, .5)
    o.al = N(o.al, 1)
    o.s = D(o.s) ? o.s : 0;
    if (g.n) {
        o.s = 1
    }
    o.d = N(o.d, .5)

    //make fixture
    fd = new b2d.FixtureDef
    //set fixture properties
    fd.d(o.d).r(o.b).fr(o.f)
    //set circleShape (radius and position)
    fd.shape = new b2d.CircleShape(o.r / 30)
    fd.shape.SetLocalPosition(V(o.x, o.y, '-'))
    //set sensor (optional)
    fd.isSensor = o.s ? true : g.n ? true : false
    //attach fixture to body
    f = b.f(fd)
    //assign klass (optional)
    f.K(o.k)

    if (o.c != 0) {
        //create easel shape with a circle
        f.g = w.g.h().cir(o)
        //bind the easel shape to fixt
        f.bS(f.g)
    }

    return f

}

b.pol = function () {
    var b = this, w = b.W(), g = G(arguments), fs, n, arr, o, vs

    b2d.mini()

    //-> {c:'r', v:[[],[],[]]} //pass in {c:'r', v:[[],[],[]]} //pass in [[],[],[]] //pass in ['r',[],[],[]]
    // b.fs(function(f){b1.pol(f.rV())})//g[0].ps(function(v){b.pol(v)})// else {_.e(g[0], function(v){b.pol(v)})}

    if (g.u) {
        return b
    }

    if (iP(g.f) && U(g.s)) {
        return b.pol({v: g.f})
    }

    if (S(g.f) && iP(g.s) && U(g.t)) {

        return b.pol({c: g.f, v: g.s})
    }

    if (iF(g.f)) {
        g.f = g.f.rV()
    }
    else if (iB(g.f)) {
        g.f.fs(b);
        return b
    }
    if (g.A) {
        o = S(g.f[0]) ?
        {c: g.f[0], v: _.r(g.f)} :
        {v: g.f}
    }
    else {
        o = g.O ? g.f :
            g.S_ ?
                (g.t ?
                {c: g.f, v: g.r} :
                {c: g.f, v: g.s}) :
            {v: g}
    }

    o = df.h(o)
    if (iP(o.v)) {
        o.v = o.v.vs()
    }
    n = b.n()
    if (O(o.v[0][0])) {
        _.e(o.v, function (v) {
            b2d.sep(b, v)
        })
    }

    //pass in 2 or more objs->
    else {
        b2d.sep(b, o.v);
        o.v = [o.v]
    }

    //pass in one object
    //->  ['r', [],[],[] ]//->  [[],[],[]]
    //pass in color and loose verts//->'r',[],[],[]//->  'r', [[],[],[]]
    //just pass in loose verts//-> [],[],[]
    //same two as above but also nested in wrapper array.. so just ONE pam
    //if (o.X) {b.clear()}
    //the NEW fixts
    fs = _.f(b.fs(), b.n() - n) //each of only the NEW fixts
    _.e(fs, function (f) {
        f.d(o.d).r(o.b).fr(o.f)
        if (o.s) {
            f.m_isSensor = o.s ? true : false
            f.sen(1)
        }
        f.K(o.k)
        f.C(o.c, o.C, o.l)
        if (o.lf) {
            f.bS(w.s.h().lf(o).lt(o.v))
        }
        if (o.rf) {
            f.bS(w.s.h().rf(o).lt(o.v))
        }
    })

    o.i = o.i || o.bf
    if (o.i) {
        h = w.g.h()
        h.bV(o)
        b.bS(h)
    }

    //b.cir('y', 10);b.cir('z', 6)
    return fs.length > 1 ? fs : fs[0]
}
