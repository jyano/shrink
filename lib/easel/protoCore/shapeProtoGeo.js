


poly();curve();rect()
function poly() {

    h.poly = function (V, c, C, l) {

//*** this is s.poly.. not h.poly !
        var h = this, g = G(arguments),
            o = A(g[0]) ? {v: g[0], c: g[1], C: g[2], l: g[3]}//array must come first b/c its an obj
                : O(g[0]) ? g[0] : {}
        //?
        b2d.oDef(o);
        h.ef().es() // ???
        //?
        h.c(o)
        if (o.bf) {
            h.bf('me', function () {
                h.lt(o.v).cp()
            })
        }
        else {
            h.lt(o.v).cp()
        }
        return h
    }
    h.rc = h.roundRectComplex = function () {
        var h = this, gx = h.graphics
        gx.drawRoundRectComplex.apply(gx, arguments)
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

    h.rc = h.roundRectComplex = function () {
        var h = this, gx = h.graphics
        gx.drawRoundRectComplex.apply(gx, arguments)
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

}
function curve() {
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
    h.dc = function (x, y, r) {
        var h = this, gx = h.graphics


        if (U(y)) {
            gx.dc(0, 0, x)
        }
        else {
            gx.dc(x, y, r)
        }
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


    h.dc = function (x, y, r) {
        var h = this, gx = h.graphics, g = G(arguments), o
        h.cp() // i kinda like how it stroke-connects my cirs

        if (g.A) {
            return $a(h, 'dc', g.f)
        }

        if (g.OO_) {
            g.e(function (c) {
                h.dc(c)
            })
            return h
        }
        o = g.O ? g.f : g.$ ? {r: g.f} : {x: g.f, y: g.s, r: g.t}

        gx.dc(N(o.x, 0), N(o.y, 0), N(o.r, 50))

        return h
    }
    h.cir = function () {
        var h = this, gx = h.graphics, g = G(arguments), o
        //h.ef().es()
        //if (g.O_ && A(g.s)) {_.e(g.s, function(c){h.cir(_.x(c, g.f))}); return h }

        o = g.O ? g.f :
            N(g.t) ? {x: g.f, y: g.s, r: g.t, c: g[3], C: g[4], l: g[5]} :

                N(g.s) ? {x: g.f, y: g.s, c: g.t, C: g[3], l: g[4]} :

                    g.N_ ? {r: g.f, c: g.s, C: g.t, l: g[3]} :

                    {c: g.f, C: g.s, l: g.t}
        h.c(o)


        if (o.bf) {
            if (N(o.bf)) {
                o.bm = 'me'
            }
            if (F(Q)) {
                h.bf(o.bf, function () {
                    h.dc(o)
                })
            }
            else {
                o.tf = o.tf || null
                h.bf(o.bf, o.tf).dc(o)
            }
        }

        else {

            h.dc(o)

        }

        h.alpha = N(o.al, 1)

        return h
    }

}
function rect(){

    h.dr = function () {
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

        gx.dr(o.x, o.y, o.w, o.h)
        return h

    }
    h.dr2 = function (x, y, W, H) {
        var h = this, g = G(arguments), o

        if (O(g[0]) && O(g[1])) {
            _.e(g, function (r) {
                h.dr2(r)
            })
            return h
        }

        o = O(g[0]) ? g[0] :
            U(g[2]) ? {w: g[0], h: g[1]} :
            {x: g[0], y: g[1], w: g[2], h: g[3]}
        o.x = _.tN(o.x)
        o.y = _.tN(o.y)
        o.w = _.tN(o.w, 50)
        o.h = _.tN(o.h, o.w)
        h.dr(-o.w / 2 + o.x, -o.h / 2 + o.y, o.w, o.h)
        return h
    }
    h.rectx = function (x, y, W, H, c, C) {
        var h = this


        var o = {
            x: x, y: y, w: W, h: H, c: c, C: C
        }

        return h.c(o).dr2(o.x, o.y, o.w, o.h)

    }
    h.rec = h.rect = function (c, C, x, y, w, H, l) {
        var h = this, g = G(arguments)//h.rexx=
        o = O(c) ? c :
            S(C) ? {c: c, C: C, x: x, y: y, w: w, h: H, l: l} :
                S(c) ? {c: c, x: C, y: x, w: y, h: w, l: H} :
                {x: c, y: C, w: x, h: y, c: w, C: H}
        h.c(o)
        if (o.i) {
            h.bmF(o.i, fun);
            return
        }
        if (o.lf) {
            h.lf({
                c: o.c || 'z', C: o.C || 'w', s: 0, S: 1,
                x: o.x - o.w / 2,
                y: o.y - o.h / 2,
                X: o.x - o.w / 2,
                Y: o.y + o.h / 2
            })
        }
        h.dr2(o)
        return h
        function fun() {
            h.dr2(o)

            //   h.mt(  [o.x-o.w/2, o.y+o.h/2],   [o.x-o.w/2, o.y-o.h/2],    [o.x+o.w/2, o.y-o.h/2],  [o.x+o.w/2, o.y+o.h/2])
        }
    }
    h.rec = function () {
        var h = this, g = G(arguments), o
        if (g.OO_) {
            g.e(function (g) {
                h.rec(g)
            });
            return h
        }
        o = g.O ? g.f :
            S(g.s) ? {c: g.f, C: g.s, x: g.t, y: g[3], w: g[4], h: g[5], l: g[6]} :
                g.S_ ? {c: g.f, x: g.s, y: g.t, w: g[3], h: g[4], l: g[5]} :
                    N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g[3], c: g[4], C: g[5], l: g[6]} :
                    {w: g.f, h: g.s, c: g.t, C: g[3], l: g[4]}
        o.x = N(o.x, 0)
        o.y = N(o.y, 0)
        o.w = N(o.w, 50)
        o.h = N(o.h, o.w)
        if (o.i) {

            h.bf(o.i, function () {
                o.i = null
                h.rec(o)

            })
            return h
        }
        if (o.c) {
            h.c(o)
        }
        if (o.lf) {
            h.lf({
                c1: o.c1 || 'z', c2: o.c2 || 'w',
                s1: 0, s2: 1,
                x: o.x - o.w / 2, y: o.y - o.h / 2, x2: o.x - o.w / 2, y2: o.y + o.h / 2
            })
        }
        h.dr(-o.w / 2 + o.x, -o.h / 2 + o.y, o.w, o.h)
        return h
    }

    h.dr=function () {
        var h = this, gx = h.graphics, g = G(arguments),
            o = g.O ? g.f :
                N(g.t) ?
                {x: g.f, y: g.s, w: g.t, h: g[3]} :
                {w: g.f, h: g.s}
        o.x = N(o.x, 0)
        o.y = N(o.y, 0)
        o.w = N(o.w, 100);
        o.h = N(o.h, o.w)
        gx.dr(o.x, o.y, o.w, o.h)
        return h
    }
    h.pol=function (V, c, C, l) {
        var h = this, g = G(arguments), o
        //array must come first b/c its an obj
        o = A(g.f) ? {v: g.f, c: g.s, C: g.t, l: g[3]} : O(g.f) ? g.f : {}
        b2d.oDef(o)

        h.ef().es()
        h.c(o)

        if (o.bf) {
            h.bf('me', function () {h.lt(o.v).cp()})
        }

        else {
            h.lt(o.v).cp()
        }

        return h
    }


}
h.copy=h.same=function(){return $h(this)}//******** here is the problem.. gotta let h.poly also defer to rect (and circ?)

// s.B = function(x,y){return this.ct(x,y).drag() }
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



