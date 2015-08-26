h =  cjs.Shape.prototype
gx = cjs.Graphics.prototype
gx.poly = function (verts, f, s, width) {
    var that = this
    //  _.each(arguments,function(vert){that.lt(vert[0],vert[1])});this.cp()
    if (N(verts[0])) {

        _.each(arguments, function (vert) {
            that.lt(vert[0], vert[1])
        });
        this.cp()
    }
    else {
        this.fs(f, s, width)
        _.each(verts, function (vert) {
            that.lt(vert[0], vert[1])
        });
        this.cp()
    }
    return this
}
gx.fC = gx.fs = function (c, C, l) {
    var gx = this
    gx.f(oO('c', c || 'z'))
    gx.s(oO('c', C || null))
    gx.ss(N(l) ? l : 2)
    return gx
}
gx.sC = function (s, w) {
    var gx = this
    w = N(w) ? w : 2
    s = O(s) ? s : oO('c', s || null)
    gx.s(s)
    gx.ss(w)
    return gx
}
$Gx = cjs.Gx = cjs.gx = function (a) {return new cjs.Graphics(a)}
cjs.iH = cjs.isShape = function (h) {
    return O(h) && h.graphics
}
$H= $h=  cjs.h =  function(){var g=G(arguments),
    _$H = function (a, b, c) {
        return a? new cjs.Shape(a, b, c): new cjs.Shape
    }, h = _$H(),o
     //if (cjs.iH(x)) {return new cjs.Shape(x.graphics)}
//pass in your own obj to use 'o.i/o.bf' or 'o.lf' or 'o.rf'
    o= g.O? g.f:
        g.N_? (
            N( g[3] )? // 'c-C-l' pattern
            { x:g.f, y:g.s, C: g.t, l:g[3]} :
            { x:g.f, y:g.s, c: g.t, C:g[3], l:g[4]}
        ) : // 'c-C-l' pattern
            N(g.s)? { C:g.f, l:g.s } :
            { c:g.f, C:g.s, l:g.t }
    o.x=N(o.x,0)
    o.y=N(o.y,0)
    h.XY(o.x, o.y)
    h.c( o.c || 'z', o.C || 'w', o.l ||  8 )
    if(o.C){h.C(o.C)}
    if(N(o.l)){h.l(o.l)} //if(g.p){h.dg()}
    return  h
    shap=function(){var g = G(arguments),

        x = g.f,
        y = g.s,
        c = g.t,
        C = g[3],
        l = g[4], h;if (cjs.iH(g.f)) {return _$H(g.f.graphics)}

        h = _$H()

        if (g.S_) {
            h.c(g.f, g.s,g.t)
        }
        else {
            if (N(g.f)) {h.X(g.f)}
            if (N(g.s)) {h.Y(g.s)}
            if (S(g.t)) {h.c(g.t, g[3], g[4])}
            else if (N(g.t)) {h.l(g.t)}
        } //if(g.N){h.drag()}
        return h
    }
}
h.poly =  h.pol=function () {var h = this, g = G(arguments), o
    o = g.A_ ? {v: g.f, c: g.s, C: g.t, l: g[3]} :  //array must come first b/c its an obj
        g.O ? g.f : {}
    b2d.oDef(o)
    h.ef().es()
    h.c(o)
    if (o.bf) {h.bf('me', function () {h.lt(o.v).cp()})}
    else {h.lt(o.v).cp()}
    return h
}

    h._c = function (o) {
        var h = this, gx = h.graphics
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
        var h = this, gx = h.graphics, g = _.toArray(arguments), o
        o = g.O ? g.f :
            g.f == '*' ? {c: '*'} :
                g.f == '**' ? {c: '**'} : g.f == '*' ? {c: '***'} :
                    U(g.f) ? {c: 'z', C: 'w', l: 6} :
                        N(g.s) ? {c: g.f, l: g.s} :
                            N(g.f) ? {l: g.f, C: g.s} ://?
                            {c: g.f, C: g.s, l: g.t}
        return h._c(o)
    }
    h.c = h.f = function (c, C, l) {
        var h = this, gx = h.graphics, g = G(arguments), o
        o = g.O ? g.f :
            g.m ? {c: '*'} : g.f == '**' ? {c: '**'} : g.f == '***' ? {c: '***'} :
                g.u ? {c: 'z', C: 'w', l: 6} :
                    // 'c-C-l'
                    N(g.s) ? {c: g.f, l: g.s} : g.N_ ? {l: g.f, C: g.s} :
                    {c: g.f, C: g.s, l: g.t}
        return h._c(o)
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
    h.col = h.fs = function () {
        var h = this, gx = h.graphics, g = G(arguments)
        gx.fs.apply(gx, g)
        return h
    }
    h.sC = function () {
        var h = this,
            gx = h.graphics, g = G(arguments)
        gx.sC.apply(gx, g);
        return h
    }

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

    h.ss=function(){var g=G(arguments)
        this.graphics.ss.apply(this.graphics, g)

        return this
    }
  h.ss =   h.l = function (l, b, c) {
        var h = this, gx = h.graphics;
        gx.ss(l || 1, b, c)

        return h
    }


    cjs.lg = h.lg = function () {
        var g = G(arguments), o//h=this, gx=h.graphics,

        if (g.A) {
            return cjs.lg.apply(null, g.f)
        }
        o = g.O ? g.f :
            _.x({c1: g.f, c2: g.s},
                N(g[5]) ? {x1: g[2], y1: g[3], x2: g[4], y2: g[5]}
                    : N(g[4]) ? {y1: g[2], x2: g[3], y2: g[4]}
                    : N(g[3]) ? {x2: g[2], y2: g[3]} : {y2: g[2]})
        o.c1 = oO('c', o.c1 || 'z');
        o.c2 = oO('c', o.c2 || 'w')
        o.s1 = N(o.s1, 0);
        o.s2 = N(o.s2, 1)
        o.x1 = N(o.x1, 0);
        o.y1 = N(o.y1, 0)
        o.x2 = N(o.x2, 0)
        o.y2 = N(o.y2) ? o.y2 : N(o.r) ? o.r * 2 : 100
        return o
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

h.z = h.clr = function () {this.graphics.clear();return this}

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
    h.dl = h.line = function () {
        var g = G(arguments), o
        o = N(g[0]) ? {x1: g[0], y1: g[1], x2: g[2], y2: g[3]} :
        {x1: g[0].x, y1: g[0].y, x2: g[1].x, y2: g[1].y}
        this.mt(o.x1, o.y1).lt(o.x2, o.y2)
        return this
    }
    h.bs = function (i) {
        var h = this;
        h.graphics.bs(i);
        return h
    }
    h.ef = function () {
        var h = this, gx = h.graphics;
        gx.f();
        return h
    }
    h.es = function () {
        var h = this, gx = h.graphics;
        gx.es();
        return h
    }
    h.cp = function () {
        this.graphics.cp();
        return this
    }



    h.drawPolygons = function (paths, C, c) {
        var h = this
        h.C(C)
        if (c) {
            h.c(c)
        }
        _.each(paths, function (p) {
            h.drawPolygon(p)
        })
        return h
    }
    h.drawPolygon = function (V, c, C, l) {
        var h = this, //h.drawConnectedLines =

            n = V.length
        h.c(c, C, l)

        _.e(V, function (v) {
            v.X = v.x
            v.Y = v.y
        })

        if (n >= 3) {
            h.mt(V[0]) //move to the FIRST//lineTo the REST
            $.in(n, function (i) {
                h.lt(V[i % n])
            })
        }

        //just a clever way to start from 1

        return h
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
    cjs.diamond = function self(width, height, fc, sc) {

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
    h.pStr = h.dp = h.polyStar = function (x, y, r, sides, ptSiz, ang) {
        var h = this, gx = h.graphics,

            g = G(arguments), o //,  x=g[0],  y=g[1], r=g[2],  sides=g[3], ptSiz=g[4], ang=g[5]

        o = N(g[3]) ? {
            x: g[0], y: g[1], r: g[2], s: g[3], p: g[4], a: g[5]
        } :

            N(g[0]) ? {r: g[0], s: g[1], p: g[2], a: g[3]} :

                O(g[0]) ? g[0] : {}

        o.a = _.tN(o.a)
        o.x = _.tN(o.x)
        o.y = _.tN(o.y)
        o.p = cjs.cap(o.p, 0, .99)

        gx.drawPolyStar(o.x, o.y, o.r, o.s, o.p, o.a)
        return h
    }


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

    cjs.ball = function (r, c, C) {//canon
        var b = cjs.circle(0, 0, r, c, C)
        b.d = r + r
        b.T = function (a) {
            if (U(a)) {
                return b.y() - b.r
            }
            b.y(a + b.r);
            return b
        }
        b.B = function (a) {

            if (U(a)) {
                return b.y() + b.r
            }

            b.y(a - b.r)

            return b
        }
        b.L = function (a) {
            if (U(a)) {
                return b.x() - b.r
            }
            b.x(a + b.r);
            return b
        }
        b.R = function (a) {
            if (U(a)) {
                return b.x() + b.r
            }
            b.x(a - b.r);
            return b
        }
        b.F = 1
        b.fall = function (r) {
            b.t(function () {
                if (r) {
                    if (ballBox(b, r)) {
                        b.F = 0
                    } else {
                        b.F = 1
                    }
                }
                if (b.F) {
                    b.y(10, '+')
                }
            })
        }
        return b
    }


    h.copy = h.same = function () {
        return $h(this)
    }//******** here is the problem.. gotta let h.poly also defer to rect (and circ?)
    h.copy = h.same = function () {
        return $h(this)
    }//******** here is the problem.. gotta let h.poly also defer to rect (and circ?)
// s.B = function(x,y){return this.ct(x,y).drag() }
    h.cC = h.cc = function () {
        return this.cacheCanvas
    }
    /*
     $a1=function(ob, g, c){

     ob.apply(c||ob,  g)

     }


     $a = function(gx, met, g){

     gx[met].apply(gx, g)

     }


     $a(gx, 'dc',  N(y)?[x,y,_.tN(r,100)] : [0,0,N(x)?x:100] )

     gx.dc.apply(gx, N(y)?[x,y,_.tN(r,100)] : [0,0,N(x)?x:100] )

     gx.app=function(met,g){var gx=this

     gx.dc.apply(gx, N(y)?[x,y,_.tN(r,100)] : [0,0,N(x)?x:100] )

     }
     */
    cjs.me = function (fn) {
        Q(['me'],
            function (q) {
                fn(q.getResult('me'))
            })
    }
    h.C2 = function (C, l) {
        var h = this, gx = h.graphics, g = G(arguments)
        o = O(g[0]) ? g[0] : {C: [0], l: g[1]}
        gx.s(o.C ? oO('c', o.C) : null)
        if (N(o.l)) {
            h.l(o.l)
        }
        return h
    }
    cjs.ballBox = function (bl, bx, buff) {
        buff = buff || 100
        var b = bl.bottom() >= bx.top() && bl.top() <= bx.top() + buff &&
            bl.x() >= bx.left() && bl.x() <= bx.right()
        if (b) {
            bl.bottom(bx.top())
        }
        return b
    }
    function curve() {

        h.de = h.ell = function () {
            var h = this,
                gx = h.graphics,
                g = G(arguments),
                o = N(g[2]) ? {x: g[0], y: g[1], w: g[2], h: g[3]} :
                    N(g[0]) ? {w: g[0], h: g[1]} :
                        O(g[0]) ? g[0] : {}
            o.x = _.tN(o.x)
            o.y = _.tN(o.y)
            o.w = _.tN(o.w, 100)
            o.h = _.tN(o.h, o.w)
            gx.drawEllipse(o.x, o.y, o.w, o.h)
            return h
        }
        h.de2 = function (x, y, W, H, r) {
            var h = this
            h.de(-W / 2 + x, -H / 2 + y, W, H, r)
            return h
        }

        h.de = h.ell = function () {
            var h = this,
                gx = h.graphics,
                g = G(arguments),
                o = N(g[2]) ? {x: g[0], y: g[1], w: g[2], h: g[3]} :
                    N(g[0]) ? {w: g[0], h: g[1]} :
                        O(g[0]) ? g[0] : {}
            o.x = _.tN(o.x)
            o.y = _.tN(o.y)
            o.w = _.tN(o.w, 100)
            o.h = _.tN(o.h, o.w)
            gx.drawEllipse(o.x, o.y, o.w, o.h)
            return h
        }
        h.de2 = function (x, y, W, H, r) {
            var h = this
            h.de(-W / 2 + x, -H / 2 + y, W, H, r)
            return h
        }
        h.bez = h.bt = function (x, y, r, startA, endA, aCW) {
            var h = this, gx = h.graphics
            h.bezierCurveTo(x, y, r, startA, endA, aCW)
            return h
        }
        h.qt = function (x, y, r, startA, endA, aCW) {
            var h = this, gx = h.graphics
            gx.quadraticCurveTo(x, y, r, startA, endA, aCW)
            return h
        }
        h.arc = function (x, y, r, startA, endA, aCW) {
            var h = this, gx = h.graphics
            /*
             Draws an arc defined by the radius, startAngle and endAngle arguments, centered at the position (x, y).
             For example, to draw a full circle with a radius of 20 centered at (100, 100):
             arc(100, 100, 20, 0, Math.PI*2)
             */

            h.arc(x, y, r, startA, endA, aCW)

            return h
        }
        h.arc2 = function (x, y, X, Y, r) {
            var h = this, gx = h.graphics
//Draws an arc with the specified control points and radius.
            gx.arcTo(x, y, X, Y, r)
            return h
        }

        h.rr = function () {
            var h = this,
                gx = h.graphics,
                g = G(arguments),

                o = N(g[3]) ? {x: g[0], y: g[1], w: g[2], h: g[3], r: g[4]} :
                    N(g[1]) ? {w: g[0], r: g[1]} :
                        N(g[0]) ? {w: g[0], h: g[1], r: g[2]} :
                            O(g[0]) ? g[0] : {}


            o.x = _.tN(o.x)
            o.y = _.tN(o.y)
            o.w = _.tN(o.w, 100)
            o.h = _.tN(o.h, o.w)

            gx.drawRoundRect(o.x, o.y, o.w, o.h, o.r)
            return h
        }
        h.rr2 = function (x, y, W, H, r) {
            var h = this
            h.rr(-W / 2 + x, -H / 2 + y, W, H, r)
            return h
        }
        h.rc = h.roundRectComplex = function () {
            var h = this, gx = h.graphics
            gx.drawRoundRectComplex.apply(gx, arguments)
            return h
        }

        h.rc = h.roundRectComplex = function () {
            var h = this, gx = h.graphics
            gx.drawRoundRectComplex.apply(gx, arguments)
            return h
        }


    }

    cjs.box = function (w, h, fc, sc) {

        w = w || 200

        h = h || w

        var b = rct(
            0 - w / 2, 0 - h / 2, w, h, fc, sc
        )

        b.wr = w / 2

        b.hr = h / 2

        b.wd = w

        b.hd = h


        b.top = b.T = function (a) {
            if (U(a)) {
                return b.y() - b.hr
            }

            b.y(a + b.hr)

            return b
        }

        b.bottom = b.B = function (a) {

            if (U(a)) {
                return b.y() + b.hr
            }


            b.y(a - b.hr)

            return b
        }

        b.left = b.L = function (a) {

            if (U(a)) {
                return b.x() - b.wr
            }

            b.x(a + b.wr)

            return b
        }

        b.right = b.R = function (a) {

            if (U(a)) {
                return b.x() + b.wr
            }
            b.x(a - b.wr);
            return b
        }

        b.fall = function () {
            b.t(function () {
                if (b.F) {
                    b.y(40, '+')
                }  //****
                if (ballBox(b, r)) {
                    b.F = 0
                }
            })
        }

        return b
    }
