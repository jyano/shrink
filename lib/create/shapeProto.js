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

$h = cjs.h = cjs.shape = cjs.shp = function (x, y, c, C, l) {
    var g = G(arguments),
        x = g[0],
        y = g[1],
        c = g[2],
        C = g[3],
        l = g[4],
        h

    if (cjs.isShape(x)) {
        return new cjs.Shape(x.graphics)
    }

    h = new cjs.Shape()

    if (S(x)) {h.c(x, y, c)}

    else {

        if (N(x)) {
            h.X(x)
        }
        if (N(y)) {
            h.Y(y)
        }

        if (S(c)) {
            h.c(c, C, l)
        }


        else if (N(c)) {
            h.l(c)
        }
    }
    //if(g.N){h.drag()}
    return h
}


h.c = h.f = function (a, b, c, d, e) {
    var h = this, gx = h.graphics

    if (N(a)) {


        gx.f((a > 0 && a < 1) ? J.rgb(0, 0, 0, a) : J.rgb(a, b, c, d))
    }

    else if (S(a)) {

        gx.f(oO('c', a))

    }

    else {
        gx.f(a, b, c, d, e)
    }

    return h
}
h.c = h.f = function (c, C, l) {
    var h = this, gx = h.graphics,
        g = _.toArray(arguments), o

    o = O(g[0]) ? g[0] :
        g[0] == '*' ? {c: '*'} :
            g[0] == '**' ? {c: '**'} :
                g[0] == '*' ? {c: '***'} :
                    U(g[0]) ? {c: 'z', C: 'w', l: 6} :
                        N(g[1]) ? {c: g[0], l: g[1]} :
                            N(g[0]) ? {l: g[0], C: g[1]} ://?
                            {c: g[0], C: g[1], l: g[2]}


    if (A(o.c)) {
        if (N(o.c[1])) {
            o.l = o.c[1];
            o.c = o.c[0]
        }
        else if (N(o.c[0])) {
            o.l = o.c[0];
            o.C = o.c[1]
        }
        else {
            o.l = o.c[2];
            o.C = o.c[1];
            o.c = o.c[0]
        }
    }
    if (A(o.C)) {
        o.l = o.C[1];
        o.C = o.C[0]
    }

    if (o.c == 0) {
        gx.f(null);
        o.c = 'X'
    }
    if (o.C == 0) {
        gx.s(null);
        o.C = 'X'
    }
    if (o.c == 00) {
        gx.f(null);
        gx.s(null);
        o.c = 'X';
        o.C = 'X'
    }
    if (o.c == '*') {
        o.c = $r()
    }
    if (o.C == '*') {
        o.C = $r()
    }
    if (o.c == '**') {
        o.c = $r();
        o.C = $r()
    }
    if (o.c == '***') {
        $l('***')

        o.c = $r();
        o.C = $r();
        o.l = R(20)
    }
    if (S(o.c)) {
        gx.f(oO('c', o.c))
    }
    if (S(o.C)) {
        gx.s(oO('c', o.C))
    }
    if (N(o.l)) {
        h.l(o.l)
    }
    if (o.lf) {
        o.lf = O(o.lf) ? o.lf : {}
        if (o.r) {
            o.r = _.tN(o.r)//?
            o.x = _.tN(o.x)
            o.y = _.tN(o.y)
            o.lf.x1 = N(o.lf.X1) ? o.lf.X1 : _.tN(o.lf.x1) + o.x - o.r
            o.lf.y1 = N(o.lf.Y1) ? o.lf.Y1 : _.tN(o.lf.y1) + o.y - o.r
            o.lf.x2 = N(o.lf.X2) ? o.lf.X2 : _.tN(o.lf.x2) + o.x - o.r
            o.lf.y2 = N(o.lf.Y2) ? o.lf.Y2 : _.tN(o.lf.y2) + o.y + o.r
        }
        /*
         $l('r: ' + o.r)
         $l('x: ' + o.x)
         $l('y: ' + o.y)
         $l('x1: '+ o.lf.x1)
         $l('y1: '+ o.lf.y1)
         $l('x2: '+ o.lf.x2)
         $l('y2: '+ o.lf.y2)

         */
        h.lf(o.lf)
    }
    if (o.rf) {
        o.rf = O(o.rf) ? o.rf : {}

        o.c = [2, 'z']
        if (o.r) {
            o.rf.x1 = N(o.rf.X1) ? o.rf.X1 : _.tN(o.rf.x1) + o.x
            o.rf.y1 = N(o.rf.Y1) ? o.rf.Y1 : _.tN(o.rf.y1) + o.y

            o.rf.x2 = N(o.rf.X2) ? o.rf.X2 : _.tN(o.rf.x2) + o.x + 20
            o.rf.y2 = N(o.rf.Y2) ? o.rf.Y2 : _.tN(o.rf.y2) + o.y + 20

            o.rf.r2 = N(o.rf.R2) ? o.rf.R2 : _.tN(o.rf.r2) + o.r
        }

        h.rf(o.rf)
    }
    if (o.ls) {
        o.ls = O(o.ls) ? o.ls : {}
        if (o.r) {
            o.ls.x1 = _.tN(o.ls.x1) + o.x - o.r
            o.ls.y1 = _.tN(o.ls.y1) + o.y - o.r
            o.ls.x2 = _.tN(o.ls.x2) + o.x - o.r
            o.ls.y2 = _.tN(o.ls.y2) + o.y + o.r
        }
        h.ls(o.ls)
    }
    if (o.rs) {
        o.rs = O(o.rs) ? o.rs : {}
        if (o.r) {
            o.rs.x1 = _.tN(o.rs.x1) + o.x
            o.rs.y1 = _.tN(o.rs.y1) + o.y
            o.rs.x2 = _.tN(o.rs.x2) + o.x
            o.rs.y2 = _.tN(o.rs.y2) + o.y
            o.rs.r2 = _.tN(o.rs.r2) + o.r
        }
        h.rs(o.rs)
    }


    if (o.bs) {
        h.bs(o.bs)
    }

    if (o.bf) {
        h.bf(o.bf)
    }

    return h

}
h.c = h.f = function (c, C, l) {
    var h = this, gx = h.graphics, g = G(arguments), o

    o = g.O ? g.f : g.m ? {c: '*'} : g.f == '**' ? {c: '**'} : g.f == '***' ? {c: '***'} :
        g.u ? {c: 'z', C: 'w', l: 6} :
            // 'c-C-l'
            N(g.s) ? {c: g.f, l: g.s} : g.N_ ? {l: g.f, C: g.s} : {c: g.f, C: g.s, l: g.t}

    if (A(o.c)) {
        if (N(o.c[1])) {
            o.l = o.c[1];
            o.c = o.c[0]
        }
        else if (N(o.c[0])) {
            o.l = o.c[0];
            o.C = o.c[1]
        }
        else {
            o.l = o.c[2];
            o.C = o.c[1];
            o.c = o.c[0]
        }
    }

    if (A(o.C)) {
        o.l = o.C[1];
        o.C = o.C[0]
    }

    if (o.c == 0) {
        gx.f(null);
        o.c = 'X'
    }
    if (o.C == 0) {
        gx.s(null);
        o.C = 'X'
    }
    if (o.c == 00) {
        gx.f(null);
        gx.s(null);
        o.c = 'X';
        o.C = 'X'
    }
    if (o.c == '*') {
        o.c = $r()
    }
    if (o.C == '*') {
        o.C = $r()
    }
    if (o.c == '**') {
        o.c = $r();
        o.C = $r()
    }
    if (o.c == '***') {
        o.c = $r();
        o.C = $r();
        o.l = R(20)
    }


    if (S(o.c)) {
        gx.f(oO('c', o.c))
    }
    if (S(o.C)) {
        gx.s(oO('c', o.C))
    }
    if (N(o.l)) {
        h.l(o.l)
    }
    if (o.lf) {
        o.lf = O(o.lf) ? o.lf : {}

        if (o.r) {
            o.r = N(o.r, 0)
            o.x = N(o.x, 0)
            o.y = N(o.y, 0)
            o.lf.x1 = N(o.lf.X1) ? o.lf.X1 : N(o.lf.x1, 0) + o.x - o.r
            o.lf.y1 = N(o.lf.Y1) ? o.lf.Y1 : N(o.lf.y1, 0) + o.y - o.r
            o.lf.x2 = N(o.lf.X2) ? o.lf.X2 : N(o.lf.x2, 0) + o.x - o.r
            o.lf.y2 = N(o.lf.Y2) ? o.lf.Y2 : N(o.lf.y2, 0) + o.y + o.r
        }
        /*
         $l('r: ' + o.r)
         $l('x: ' + o.x)
         $l('y: ' + o.y)
         $l('x1: '+ o.lf.x1)
         $l('y1: '+ o.lf.y1)
         $l('x2: '+ o.lf.x2)
         $l('y2: '+ o.lf.y2)

         */

        h.lf(o.lf)
    }


    if (o.rf) {
        o.rf = O(o.rf) ? o.rf : {}
        o.c = [2, 'z']
        if (o.r) {
            o.rf.x1 = N(o.rf.X1) ? o.rf.X1 : _.tN(o.rf.x1) + o.x
            o.rf.y1 = N(o.rf.Y1) ? o.rf.Y1 : _.tN(o.rf.y1) + o.y
            o.rf.x2 = N(o.rf.X2) ? o.rf.X2 : _.tN(o.rf.x2) + o.x + 20
            o.rf.y2 = N(o.rf.Y2) ? o.rf.Y2 : _.tN(o.rf.y2) + o.y + 20
            o.rf.r2 = N(o.rf.R2) ? o.rf.R2 : _.tN(o.rf.r2) + o.r
        }
        h.rf(o.rf)
    }


    if (o.ls) {
        o.ls = O(o.ls) ? o.ls : {}
        if (o.r) {
            o.ls.x1 = _.tN(o.ls.x1) + o.x - o.r
            o.ls.y1 = _.tN(o.ls.y1) + o.y - o.r
            o.ls.x2 = _.tN(o.ls.x2) + o.x - o.r
            o.ls.y2 = _.tN(o.ls.y2) + o.y + o.r
        }
        h.ls(o.ls)
    }


    if (o.rs) {
        o.rs = O(o.rs) ? o.rs : {}
        if (o.r) {
            o.rs.x1 = _.tN(o.rs.x1) + o.x
            o.rs.y1 = _.tN(o.rs.y1) + o.y
            o.rs.x2 = _.tN(o.rs.x2) + o.x
            o.rs.y2 = _.tN(o.rs.y2) + o.y
            o.rs.r2 = _.tN(o.rs.r2) + o.r
        }
        h.rs(o.rs)
    }
    if (o.bs) {
        h.bs(o.bs)
    }
    if (o.bf) {
        h.bf(o.bf)
    }

    return h
}
h.C = h.s = function (a, b, c, d, e, f) {
    var h = this, gx = h.graphics
    if (N(a)) {
        gx.s((a > 0 && a < 1) ? J.rgb(0, 0, 0, a) : J.rgb(a, b, c, d))
    }
    else if (S(a)) {

        gx.s(oO('c', a))


    }

    else {
        gx.s(a, b, c, d, e)
    }
    return h
}
h.C = h.s = function (C, l) {
    var h = this, gx = h.graphics

    gx.s(oO('c', C))

    if (N(l)) {
        h.l(l)
    }

    return h

}
h.C = h.s = function (C, l) {
    var h = this, gx = h.graphics
    gx.s(oO('c', C))
    if (N(l)) {
        h.l(l)
    }
    return h

}
h.col = h.fs = function () {
    var h = this, gx = h.graphics, g = G(arguments)
    gx.fs.apply(gx, g)
    return h
}

//stroke color
h.sC=function(){var h=this,
    gx= h.graphics,g=G(arguments)
    gx.sC.apply(gx,g); return h
}



h.C2 = function (C, l) {
    var h = this, gx = h.graphics, g = G(arguments)
    o = O(g[0]) ? g[0]
        :
    {C: [0], l: g[1]}
    gx.s(o.C ? oO('c', o.C) : null)
    if (N(o.l)) {
        h.l(o.l)
    }
    return h

}

//grad
function _grad() {

    h.lg = function me() {
        var h = this, gx = h.graphics, g = G(arguments), o
        if (A(g[0])) {
            return me.apply(null, g[0])
        }

        o = O(g[0]) ? g[0]
            : _.extend({c1: g[0], c2: g[1]},
            N(g[5]) ? {x1: g[2], y1: g[3], x2: g[4], y2: g[5]}
                : N(g[4]) ? {y1: g[2], x2: g[3], y2: g[4]}
                : N(g[3]) ? {x2: g[2], y2: g[3]} : {y2: g[2]})

        o.c1 = oO('c', o.c1 || 'z');
        o.c2 = oO('c', o.c2 || 'w')
        o.s1 = _.tN(o.s1);
        o.s2 = _.tN(o.s2, 1)
        o.x1 = _.tN(o.x1);
        o.y1 = _.tN(o.y1)
        o.x2 = _.tN(o.x2);
        o.y2 = N(o.y2) ? o.y2 : N(o.r) ? o.r * 2 : 100

        return o
    }
    h.rg = function (o) {
        var h = this, gx = h.graphics, g = G(arguments), o

        if (A(g[0]) && A(g[1])) {
            $l('AA')
            h.graphics.rf(
                [oO('c', g[0][0]), oO('c', g[0][1])], g[1], g[2], g[3], g[4], g[5], g[6], g[7])
            return h
        }


        o = O(g[0]) ? g[0] :
            S(g[1]) ? _.extend({c1: g[0], c2: g[1]},
                N(g[7]) ? {x1: g[2], y1: g[3], r1: g[4], x2: g[5], y2: g[6], r2: g[7]}
                    : N(g[5]) ? {x2: g[2], y2: g[3], r1: g[4], r2: g[5]}
                    : N(g[4]) ? {x2: g[2], r1: g[3], r2: g[4]}
                    : N(g[3]) ? {r1: g[2], r2: g[3]} : {r2: g[2]})

                : S(g[0]) ? {c2: g[0]} : {}


        b2d.grad(o)

        o.x2 = _.tN(o.x2, o.x1)
        o.y2 = _.tN(o.y2, o.y1)
        o.r1 = _.tN(o.r1, 1);
        o.r2 = _.tN(o.r2, 100)
        return o
    }
    h.rf = function me() {
        var h = this, gx = h.graphics, g = G(arguments), o

        if (A(g[0])) {
            return me.apply(h, g[0])
        }


        o = h.rg.apply(h, g)

        gx.rf(
            [o.c1, o.c2],
            [o.s1, o.s2],
            o.x1, o.y1, o.r1, o.x2, o.y2, o.r2)

        return h


    }
    h.lf = function me() {
        var h = this, gx = h.graphics, g = G(arguments), o

        if (A(g[0])) {
            return me.apply(h, g[0])
        }

        o = h.lg.apply(h, g)

        gx.lf([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.x2, o.y2)

        return h
    }
    h.ls = function me() {
        var h = this, gx = h.graphics, g = G(arguments), o
        if (A(g[0])) {
            return me.apply(h, g[0])
        }
        o = h.lg.apply(h, g)
        gx.ls([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.x2, o.y2)
        return h
    }
    h.rs = function me() {
        var h = this, gx = h.graphics, g = G(arguments), o
        if (A(g[0])) {
            return me.apply(h, g[0])
        }
        o = h.rg.apply(h, g)
        gx.rs([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.r1, o.x2, o.y2, o.r2)
        return h
    }
    h.col = h.fs = function () {
        this.graphics.fs.apply(
            this.graphics, arguments)
        return this
    }
    h.sC = function () {
        this.graphics.sC.apply(this.graphics, arguments)
        return this
    }
    h.rGx = h.radGrad = function (cols, ratios, x1, y1, r1, x2, y2, r2) {

        var args = _.toArray(arguments), circs, len

        cols = _.map(cols,
            function (col) {
                return oO('c', col)
            })


        circs = _.rest([1, 2, 3, 4, 5], 2)
        len = circs.len  //use switch!

        x1 = 0;
        y1 = 0;
        r1 = 0;
        x2 = 0;
        y2 = 0;
        r2 = 50

        if (len == 1) {
            r2 = circs[0]
        }

        else if (len == 2) {
            r1 = circs[0];
            r2 = circs[1]
        }

        else if (len == 3) {
            x1 = x2 = circs[0]
            y1 = y1 = circs[1]
            r2 = circs[2]
        }

        else if (len == 4) {
            x1 = x2 = circs[0]
            y1 = y1 = circs[1]
            r1 = circs[2]
            r2 = circs[3]
        }

        else if (len == 5) {
            x1 = circs[0];
            y1 = circs[1];
            x2 = circs[2];
            y2 = circs[3]
            r2 = circs[4]
        }

        else if (len == 6) {
            x1 = circs[0];
            y1 = circs[1];
            x2 = circs[2];
            y2 = circs[3]
            r1 = circs[4];
            r2 = circs[5]
        }

        this.graphics.beginRadialGradientFill(cols, ratios, x1, y1, r1, x2, y2, r2)

        return this
    }
    h.lGx = h.linGrad = function () {

        var args = _.toArray(arguments)

        args[0] = _.map(args[0], function (col) {
            return oO('c', col)
        })

        this.graphics.beginLinearGradientFill.apply(
            this.graphics, args)
        return this
    }

    h.dr2x = function (x, y, W, H) {
        var h = this


        if (U(W)) {
            W = x;
            H = y;
            x = 0;
            y = 0
        }

        h.dr(-W / 2 + x, -H / 2 + y, W, H)


        return h
    }
}
h.lf = function () {
    var h = this, gx = h.graphics, g = G(arguments), o
    o = cjs.lg(g)
    gx.lf([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.x2, o.y2)
    return h
}
h.rg = function (o) {
    var h = this, g = G(arguments),
        gx = h.graphics,
        o


    if (A(g[0]) && A(g[1])) {

        gx.rf(
            [oO('c', g[0][0]), oO('c', g[0][1])], g[1], g[2], g[3], g[4], g[5], g[6], g[7]
        )
        return h
    }


    o = O(g[0]) ? g[0] :


        S(g[1]) ? _.x({c1: g[0], c2: g[1]},
            N(g[7]) ?
            {x1: g[2], y1: g[3], r1: g[4], x2: g[5], y2: g[6], r2: g[7]}
                : N(g[5]) ?
            {x2: g[2], y2: g[3], r1: g[4], r2: g[5]}
                : N(g[4]) ?
            {x2: g[2], r1: g[3], r2: g[4]}
                : N(g[3]) ?
            {r1: g[2], r2: g[3]}
                :
            {r2: g[2]})

            : S(g[0]) ?
        {c2: g[0]}
            : {}

    b2d.grad(o)

    o.x2 = N(o.x2, o.x1)
    o.y2 = N(o.y2, o.y1)
    o.r1 = N(o.r1, 1);
    o.r2 = N(o.r2, 100)

    return o
}

h.ls = function me() {
    var h = this, gx = h.graphics, g = G(arguments), o
    if (A(g[0])) {
        return me.apply(h, g[0])
    }
    o = h.lg.apply(h, g)
    gx.ls([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.x2, o.y2)
    return h
}

h.rf = function me() {
    var h = this, gx = h.graphics, g = G(arguments), o
    if (A(g[0])) {
        return me.apply(h, g[0])
    }

    o = h.rg.apply(h, g)

    gx.rf(
        [o.c1, o.c2],
        [o.s1, o.s2],
        o.x1, o.y1, o.r1, o.x2, o.y2, o.r2)
    return h


}

h.rs = function me() {
    var h = this, gx = h.graphics, g = G(arguments), o
    if (A(g[0])) {
        return me.apply(h, g[0])
    }
    o = h.rg.apply(h, g)
    gx.rs([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.r1, o.x2, o.y2, o.r2)
    return h
}


h.C2= function (C, l) {var h=this,gx=h.graphics,g=G(arguments)
    o=O(g[0]) ? g[0] :
    {C:[0], l:g[1]}
    gx.s(o.C?  oO('c',o.C): null)
    if(N(o.l)){h.l(o.l)}
    return h}