h =  cjs.Shape.prototype

h.lt = function (a, b, c, d, e) {
    var h = this, gx = h.graphics, v

    if (O(a)) {
        v = V(a)
        gx.lt(v.x, v.y)

    }
    else {
        gx.lt(a, b, c, d, e)
    }

    return h
}
h.lt = function (x, y) {
    var h = this, gx = h.graphics, v
    if (A(x) && O(x[0])) {
        return h.lt.apply(h, x)
    }
    if (N(x)) {
        gx.lt(x, y);
        return h
    }
    _.e(arguments, function (v) {
        v = V(v)
        h.lt(v.x, v.y)
    })
    return h
}
h.mt = function (x, y) {
    var h = this,
        gx = h.graphics, g = arguments, x = g[0], y = g[1], v
    if (A(g[0]) && O(g[0][0])) {
        _.e(g, function (v) {
            h.mt.apply(h, v)
        });
        return h
    }


    if (N(x)) {
        v = V(x, y);
        gx.mt(v.x, v.y)
    }

    else {
        v = V(_.f(g))
        h.mt(v.x, v.y)
        _.e(_.r(g), function (v) {
            v = V(v)
            h.lt(v.x, v.y)
        })
    }

    return h
}
h.mt = function (a, b, c, d, e) {
    var h = this, gx = h.graphics, v

    if (O(a)) {
        v = V(a)
        gx.mt(v.x, v.y)

    }
    else {
        gx.mt(a, b, c, d, e)
    }

    return h
}
h.z = h.clr = function () {
    this.graphics.clear();
    return this
}
h.cC = h.cc = function () {return this.cacheCanvas}
h.dl = h.line = function () {
    var g = G(arguments), o
    o = N(g[0]) ? {x1: g[0], y1: g[1], x2: g[2], y2: g[3]} :
    {x1: g[0].x, y1: g[0].y, x2: g[1].x, y2: g[1].y}
    this.mt(o.x1, o.y1).lt(o.x2, o.y2)
    return this
}
h.bs = function (i) {var h = this;h.graphics.bs(i);return h}
h.ef = function () {var h = this, gx = h.graphics; gx.f(); return h}
h.es = function () {var h = this, gx = h.graphics; gx.es(); return h}

//lineCap!!!
h.ss = function (a) {
    var h = this, gx = h.graphics, g, o
    if (S(a)) {
        this.C(a)
        return this.ss.apply(this, _.rest(arguments))
    }

    g = G(arguments)
    o = {
        l: g[0],
        caps: g[1],
        jts: g[2],
        mit: g[3],
        ignSc: false
    }
    o.l = N(o.l) ? o.l : 4
    if (o.caps == 'r') {
        o.caps = 'round'
    }

    if (o.caps == 's') {
        o.caps = 'square'
    }

    if (o.caps == 'b') {
        o.caps = 'butt'
    }
    if (o.mit == 'r') {
        o.mit = 'round'
    }
    if (o.mit == 'm') {
        o.mit = 'miter'
    }
    if (o.mit == 'b') {
        o.mit = 'bevel'
    }
    o.jts = o.jts || 0
    if (U(o.mit)) {
        o.mit = 100
    }
    if (g.n) {
        o.ignSc = true
    }
    gx.ss(o.l, o.caps, o.jts, o.mit, o.ignSc)

    return h
}
h.l =h.ss = function (l, b, c) {
    var h = this, gx = h.graphics;
    gx.ss(l || 1, b, c)

    return h
}

//copy!!
h.copy = h.same = function () {
    return $h(this)
}//******** here is the problem.. gotta let h.poly also defer to rect (and circ?)
h.cp = function () {
    this.graphics.cp();
    return this
}


//bitmap!!!
h.bmCir = function (o) {
    var h = this
    o = o || {}
    o.i = o.i || 'me'
    o.circs = o.circs || []
    $.img(o.i, function (i) {
        i = i[0]
        _.each(o.circs, function (c) {
            h.bf(i)
            h.dc(c)
            h.ef()
        })
    })
    return h
}
h.bmV = function (o) {
    var h = this
    o = o || {}
    o.i = o.i || 'me'

    $.img(o.i, function (i) {
        i = i[0]
        _.e(o.v, function (v) {

            h.bf(i)
            h.lt(v)
            h.ef().cp()

        })
    })

    return h
}
h.bf = function (i, fn, c) {
    var h = this, gx = h.graphics


    if (S(i)) {

        $.img(i, function (i) {
            gx.bf(i[0])
            if (F(fn)) {
                fn(i[0])
            }
        })
    }


    else {

        if (O(fn)) {
            gx.bf(i, null, fn)
        } else {
            gx.bf(i, fn, c)
        }
    }


    return h
}
h.bf = function () {
    var h = this, gx = h.graphics, g = G(arguments), tf

    if (!F(Q)) {

        if (A(g.s)) {
            g.s = cjs.m2d.apply(cjs, g.s)
        }
        tf = g.s || cjs.m2d(R(500), R(300))

        if (S(g.f)) {
            gx.bf(Q.i(g.f), null, tf)
        }

        else if (O(g.f)) {
            gx.bf(g.f, null, tf)
        }

        return h
    }

    if (S(g.f)) {
        $.i(g.f, function (i) {
            gx.bf(i[0])
            if (F(g.s)) {
                g.s(h)
            }
        })
    }
    else if (g.O_ && A(g.f.hs)) {
        $.i(g.f.i || 'me', function (i) {
            gx.bf(i[0])
            if (F(g.s)) {
                _.e(g.f.hs, g.s)
            }
        })
    }
    else {
        gx.bf(g.f, null, g.s)
    }
    //h.ef()
    return h
}  // BITMAP FILL  !!!!!!
h.bV = function (o) {
    var h = this, g = G(arguments), o
    o = g.A ? {hs: g.f} : g.f || {}
    o.hs = o.hs || []
    o.i = o.i || 'me'

    if (F(Q)) {
        $.i(o.i, function (i) {
            h.bf(i[0])
            _.e(o.v, function (v) {
                h.lt(v)
            })//
            h.cp()
            h.ef()
        })
        return h
    }


    h.bf(o.i)
    _.e(o.v, function (v) {
        h.lt(v)
    })

    return h

}
h.bC = function (o) {
    var h = this;
    return h.bf(o, function (h1) {
        h.dc(h1)
    })
}//calls bitmap fill and lets it load up the bitmap (my face)
//then passes in a function to be called once the image has finished loading
//in this case, the function draws a rectangle (and the bitmap is automatically used as the fill)
h.bfR = h.bmR = h.bR = function (o) {
    var h = this;

    if (F(Q)) {
        h.bf(o, function (h1) {
            h.rec(h1)

        })

        return h
    }
    /*

     h.bmR1= function(o){var h=this;
     o=df.b(o)
     $.i(o.i,
     function(i){_.e(o.hs,
     function(g){
     h.bf(i[0])
     h.rec(g)
     h.ef() })
     })
     return
     }
     */
    h.bf(o.bf)

    h.rec(o.hs)
    _.e(o.hs, function (r) {
        w.rec(r.w, r.h)
    })

    return h
}

