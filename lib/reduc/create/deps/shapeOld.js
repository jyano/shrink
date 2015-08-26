h.rec = h.rect = function (c, C, x, y, w, H, l) {var h = this, g = G(arguments)//h.rexx=

    o = O(c) ? c : S(C) ? {c: c, C: C, x: x, y: y, w: w, h: H, l: l} :
        S(c) ? {c: c, x: C, y: x, w: y, h: w, l: H} :
        {x: c, y: C, w: x, h: y, c: w, C: H}

    h.c(o)
    if (o.i) {h.bmF(o.i, fun);return}
    if (o.lf) {h.lf({c: o.c || 'z', C: o.C || 'w', s: 0, S: 1, x: o.x - o.w / 2, y: o.y - o.h / 2, X: o.x - o.w / 2, Y: o.y + o.h / 2})}
    h.dr2(o); return h
    function fun() {
        h.dr2(o) //   h.mt(  [o.x-o.w/2, o.y+o.h/2],   [o.x-o.w/2, o.y-o.h/2],    [o.x+o.w/2, o.y-o.h/2],  [o.x+o.w/2, o.y+o.h/2])
    }}
h.rectx = function (x, y, W, H, c, C) {
    var h = this


    var o = {
        x: x, y: y, w: W, h: H, c: c, C: C
    }

    return h.c(o).dr2(o.x, o.y, o.w, o.h)

}
h.drawPolygonYesNo = function (V, c, C, l) {
    var h = this, //h.drawConnectedLines =

        n = V.length

    h.c(c, C, l)

    _.each(V, function (v) {

        v.X = v.x
        v.Y = v.y

    })

    if (n >= 3) {
        h.mt(V[0]) //move to the FIRST//lineTo the REST

        T(n, function (i) {
            h.lt(V[i % n])
        })
    } //just a clever way to start from 1

    return h
} // h.cir=  function(r,x,y,c,C){var h = this, gx = h.graphics; return N(x) ?  h.c(c,C).dc(x,y,r) : h.c(x,y).dc(r)  } //h.cir2=


cjs.circle2 = function (r, z, x, y) {
    gx = new cjs.Graphics()
    if (!S(r)) {
        return cjs.circle2('red', r, z, x)
    }
    z = _.tN(z, 32)
    x = _.tN(x, 100)
    y = _.tN(y, 100)
    gx.ss(z / 8).f(r, 'black').dc(z)
    return cjs.h(gx).XY(x, y)
}
cjs.circle3 = function (x, y, r, c, C) {

    var h = cjs.shape()
    if (O(x)) {
        return cjs.circle3(x.x, x.y, x.r, x.c, x.C)
    }

    x = _.tN(x)
    y = _.tN(y)
    r = _.tN(r, 8)

    h.cir(x, y, r, c || 'w', C || 'z')
    SL(h)
    return h
}
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


function _curve() {


    h.qt = function (a, b, c, d, e, f) {
        var h = this, gx = h.graphics

        if (O(a)) {
            a = V(a)
            b = V(b)

            gx.qt(a.x, a.y, b.x, b.y)
        }


        else {
            gx.qt(a, b, c, d, e, f)
        }
        return h
    }
    h.cur = function (a, b, c, d, e, f, g, h) {

        if (O(a)) {
            return this.cur(a.x, a.y, b.x, b.y, c.x, c.y)
        }
        return this.mt(a, b).qt(c, d, e, f, g, h)
    }
    h.bez = h.bt = function (x, y, r, startA, endA, aCW) {
        var h = this, gx = h.graphics
        h.bezierCurveTo(x, y, r, startA, endA, aCW)
        return h
    }
    h.quad = h.qt = function (x, y, r, startA, endA, aCW) {
        var h = this, gx = h.graphics
        h.quadraticCurveTo(x, y, r, startA, endA, aCW)
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
    h.dcWorking = function (x, y, r) {
        var h = this, gx = h.graphics

        if (N(r)) {
            gx.dc(x, y, r)
        }

        else if (N(y)) {
            gx.dc(x, y, 100)
        }

        else if (N(x)) {
            gx.dc(0, 0, x)
        }
        else {
            gx.dc(0, 0, 100)
        }

        return h
    }

}
function _circle() {
    h.dc = function (x, y, r) {
        var h = this, gx = h.graphics,
            g = G(arguments), o


        if (A(g[0]) && O(g[1])) {
            _.e(g, function (c) {
                h.dc(c)
            });
            return h
        }

        if (A(g[0])) {
            return h.dc.apply(h, g[0])
        }

        o = O(g[0]) ? g[0] :
            N(g[2]) ? {x: g[0], y: g[1], r: g[2]} :
                N(g[0]) ? {r: g[0]} : {}

        o.x = _.tN(o.x)
        o.y = _.tN(o.y)
        o.r = _.tN(o.r, 100)

        //h.mt(o.x, o.y).cp()

        gx.dc(o.x, o.y, o.r)
        h.C()
        return h

    }

    h.cir = h.circ = function (x, y, r, c, C, l) {//= h.circle
        var h = this, gx = h.graphics,
            g = G(arguments), o   //h.ef().es()

        if (O(g[0]) && A(g[1])) {

            _.e(g[1], function (c) {

                h.cir(_.extend(c, g[0]))

            })
            return h
        }

        o = O(g[0]) ? g[0]
            : N(g[2]) ? {x: g[0], y: g[1], r: g[2], c: g[3], C: g[4], l: g[5]}
            : N(g[1]) ? {x: g[0], y: g[1], r: 50, c: g[2], C: g[3], l: g[4]}
            : {x: 0, y: 0, r: g[0], c: g[1], C: g[2], l: g[3]}

        o.x = _.tN(o.x);
        o.y = _.tN(o.y);
        o.r = _.tN(o.r, 50)
        o.c = o.c || 'z';
        o.C = o.C || 'w'
        if (N(o.bf)) {
            o.bm = 'me'
        }

        h.c(o)
        if (o.bf) {
            h.bf('me', function () {
                h.dc(o)
            })
        } else {
            h.dc(o)
        }
        return h
    }
//h.circle=function(o){var h=this; h.c(o).dc(o); return h}

}


h.rrx = function (x, y, W, H, r) {
    var h = this, gx = h.graphics
    gx.drawRoundRect(x, y, W, H, r)
    return h
}
h.dex = h.ellx = function (x, y, W, H) {
    var h = this, gx = h.graphics

    gx.drawEllipse(x, y, W, H)

    return h
}
h.drx = function (x, y, W, H) {
    var h = this, gx = h.graphics
    if (N(H)) {
        gx.dr(x, y, W, H)
    }
    else if (N(W)) {
        gx.dr(x, y, W, W)
    }
    else if (N(y)) {
        gx.dr(0, 0, x, y)
    }
    else if (N(x)) {
        gx.dr(0, 0, x, x)
    }
    else {
        gx.dr(0, 0, 100, 100)
    }
    return h
}
h.rr2 = function (x, y, W, H, r) {
    var h = this
    h.rr(-W / 2 + x, -H / 2 + y, W, H, r)
    return h
}