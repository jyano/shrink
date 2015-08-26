$.fn.ctx = function () {return this[0].getContext('2d')}

x = CanvasRenderingContext2D.prototype
x.linGrad = function (a, b, c, d) {
    return this.createLinearGradient(a, b, c, d)

}
x.radGrad = function (a, b, c, d, e, f) {
    return this.createRadialGradient(a, b, c, d, e, f)

}
x.f = function (fs) {

    this.fillStyle = fs
    return this
}
x.temp = function (func) {
    var x = this

    func = _.bind(func, x)

    this.save()

    func()

    this.restore()

    return this
}
x.H = function () {
    return this.canvas.height
}
x.W = function () {
    return this.canvas.width
}
x.trans = function () {
    this.translate.apply(this, arguments)
    return this
}
x.Z = function () {
    this.scale.apply(this, arguments)
    return this
}
x.tick = function (func) {
    var x = this

    createjs.tick(function () {

        x.temp(func)
    })


    return this
}
x.beg = function () {
    this.beginPath()
    return this
}
x.mt = function (x, y) {
    this.moveTo(x, y);
    return this
}
x.lt = function (x, y) {
    this.lineTo(x, y);
    return this
}
x.ss = function (c) {
    this.strokeStyle = oO('c', c);
    return this
}
x.fs = function (c) {
    this.fillStyle = oO('c', c);
    return this
}
x.drawPoly = function (vs, sc, hole, ox, oy) {
    ox = N(ox) ? ox : 0;
    oy = N(oy) ? oy : 0

    var x = this,
        i

    x.beg().mt(vs[0][0] + ox, vs[0][1] + oy)

    for (i = 1; i < vs.length; i++) {
        x.lt(vs[i][0] + ox,
            vs[i][1] + oy)
    }

    x.lineWidth = 2

    x.ss(sc || 'b').fs((hole == true) ? 'w' : 'p')
    x.closePath()
    x.stroke()
    x.fill()
    return this
}
x.drawPolys = function (poly, sc, ox, oy) {
    var x = this
    //if more than one poly produced, use multiple color to display

    var num = poly.getNumInnerPoly()

    _.times(num, function (i) {
        if (i != 0) {
            sc = ['red', 'green', 'blue', 'yellow'][i % num]
        }

        var p = poly.getInnerPoly(i)

        x.drawPoly(p.verts(), sc, p.isHole(), ox, oy)

    })


    return this
}
x = ctx = xx = CanvasRenderingContext2D.prototype
xGr = CanvasGradient.prototype
x.S = function () {
    this.save();
    return this
}
x.R = function () {
    this.restore();
    return this
}
x.c = x.fs = function (c, C, l) {
    this.fillStyle = oO('c', c)
    if (C) {
        this.C(C)
    }
    if (N(l)) {
        this.l(l)
    }
    return this
}
x.C = x.ss = function () {
    var g = G(arguments), o
    o = g.N_ ? {l: g.f} : {C: g.f, l: g.s}
    if (o.C) {
        this.strokeStyle = oO('c', o.C)
    }
    if (N(o.l)) {
        this.l(o.l)
    }
    return this
}
x.f = function () {
    var g = G(arguments)
    this.fill();
    if (g.p) {
        this.s()
    }
    return this
}
x.s = function () {
    this.stroke();
    return this
}
x.al = function (al) {
    this.globalAlpha = al;
    return this
}
x.o = x.op = x.cO = function (o) {
    this.globalCompositeOperation = o;
    return this
}
x.b = function () {
    var g = G(arguments)
    this.beginPath()
    if (g.u) {
        return this
    }
    if (g.N_) {
        this.mt(g.f, g.s)
        if (g.t) {
            this.c(g.t, g[3], g[4])
        }
    }
    else {
        this.c.apply(this, g)
    }
    return this
}
x.mt = function () {
    var x = this, g = G(arguments)
    if (g.A_) {
        x.mt(g.f[0], g.f[1])
        g.eR(function (pt) {
            x.lt(pt[0], pt[1])
        })
    }

    else {
        x.moveTo(N(g.f, 0), N(g.s, 0))

        if (N(g.t)) {
            x.lt(g.t, g[3])
        }
    }

    return g.n ? x.s() : g.p ? x.f() : g.m ? x.D() : x
}
x.a = function () {
    var g = G(arguments), x = this,
        o = N(g.s) ? {x: g.f, y: g.s, r: g.t, rt1: g[3], rt2: g[4]} :
        {r: g.f}
    o.x = N(o.x, 0)
    o.y = N(o.y, 0)
    o.r = N(o.r, 50)
    o.rt1 = N(o.rt1, 0)
    o.rt2 = N(o.rt2, 360)
    o.ccw = g.n ? true : false
    this.arc(o.x, o.y, o.r, M.tR(o.rt1), M.tR(o.rt2), o.ccw)
    return g.n ? x.s() : g.p ? x.f() : g.m ? x.D() : x
}
x.at = function () {
    var g = G(arguments), o
    o = {x1: g.f, y1: g.s, x2: g.t, y2: g[3], r: g[4]}
    this.arcTo(o.x1, o.y1, o.x2, o.y2, o.r)
    return g.n ? x.s() : g.p ? x.f() : g.m ? x.D() : x
}
x.l = x.lW = function (n) {
    var g = G(arguments)
    if (g.N) {
        this.lineWidth = n;
        return this
    }
    return this.lt(g.f, g.s).s()
}
x.lC = function (n) {
    var g = G(arguments);
    if (g.N) {
        this.lineCap = n;
        return this
    }
}
x.lJ = function (n) {
    var g = G(arguments);
    if (g.N) {
        this.lineJoin = n;
        return this
    }
}
x.x = x.cp = function () {
    this.closePath();
    return this
}
x.cl = function () {
    this.clip();
    return this
}
x.qt = function () {
    this.quadraticCurveTo();
    return this
}
x.iP = function (x, y) {
    return this.isPointInPath(x, y)
}
x.fr = x.fR = function (x, y, w, h) {
    var g = G(arguments), o
    o = N(g.t) ?
    {x: g.f, y: g.s, w: g.t, h: g[3]} :
    {w: g.f, h: g.s}
    o.x = N(o.x, 0)
    o.y = N(o.y, 0)
    o.w = N(o.w, this.W())
    o.h = N(o.h, this.H())
    this.fillRect(o.x, o.y, o.w, o.h)
    return this
}
x.sR = x.sr = function () {
}
x.xR = function () {
    this.clearRect();
    return this
}
x.r = function () {
}
x.H = function () {
    return this.canvas.height
}
x.W = function () {
    return this.canvas.width
}
x.t = function (fn) {
    var x = this;
    T.t(function () {
        x.temp(fn)
    });
    return this
}
x.cv = function () {
    return this.canvas
}
x._ = x.temp = function (fn) {
    this.S();
    _.b(fn, this)();
    return this.R()
}
x.u = function () {
    return this.cv().toDataURL()
}
x.$ = function () {
    return $(this.cv())
}
x.D = function () {
    return this.s().f()
}

x.lt = function () {
    var g = G(arguments), x = this
    if (g.A_ && A(g.f[0])) {
        x.lt.apply(x, g.f)
    }
    else if (O(g.s)) {
        g.e(function (pt) {
            x.lt(pt[0], pt[1])
        })
    }
    else {
        x.lineTo(g.f, g.s)
    }
    return g.n ? x.s() : g.p ? x.f() : g.m ? x.D() : x
}

//x.$=function(){return this.s().f() }
comp = function () {

    x.Ds = x.dO = function () {
        this.o('destination-out');
        return this
    }
    x.dS = x.dI = function () {
        return this.o('destination-in')
    }
    x.sD = x.sI = function () {
        this.o('source-in');
        return this
    }
    x.Sd = x.sO = function () {
        this.o('source-out');
        return this
    } // why use this ??x.sd = x.sV= function(){ this.o('source-over'); return this }
    x.ds = x.dV = function () {
        this.o('destination-over');
        return this
    }
    x.SD = x.sT = x.sA = function () {
        this.o('source-atop');
        return this
    }
    x.DS = x.dT = x.dA = function () {
        this.o('destination-atop');
        return this
    }
    x.li = function () {
        this.o('lighter');
        return this
    }
    x.co = function () {
        this.o('copy');
        return this
    }
    x.xo = function () {
        this.o('xor');
        return this
    }

    GOP = function () {
        Q(function () {
            $.C()

            x.d('me', 100, 100)

            x.d('me', 200, 100)
            x.d('me', 300, 100)

            x.d('me', 400, 100)
            x.d('me', 500, 100)

            x.d('me', 150, 150) //  x.sO(); x.dO()

            x.xo()

            c.$(function () {
                var g = G(arguments), o
                o = {x: g.f, y: g.s}
                x.d('guy', o.x, o.y)
            })


        })
    }

};
comp()
tran = function () {
    x.tl = x.trans = function (tX, tY, rt, sX, sY) {
        this.translate(tX, tY)
        if (N(rt)) {
            this.rt(rt)
        }
        if (N(sX)) {
            this.sc(sX, sY)
        }
        return this
    }
    x.sc = function (x, y) {

        y = N(y, x)

        this.scale(x, y);
        return this

    }
    x.rt = function (n) {
        this.rotate(M.tR(n));
        return this
    }
    x.tf = function () {
    }
    x.sTf = function () {
    }
};
tran()
pix = function () {
    x.cD = function () {
        this.createImageData()
        return this
    }
    x.gD = function () {
        var g = G(arguments), o, d
        o = {x: g.f, y: g.s, w: g.t, h: g[3]}
        o.x = N(o.x, 0)
        o.y = N(o.y, 0)
        o.w = N(o.w, this.W())
        o.h = N(o.h, this.H())
        d = this.getImageData(o.x, o.y, o.w, o.h)
        d.h = d.height
        d.w = d.width
        d.d = d.data
        return d
    }
    x.pD = function (d, x, y) {
        this.putImageData(d, N(x, 0), N(y, 0))
        return this
    }
};
pix()
grad = function () {
    x.lg = function () {
        var ctx = this, g = G(arguments), o, gr
        o = g.O ? g.f : N(g.t) ? {x1: g.f, y1: g.s, x2: g.t, y2: g[3]} : {x2: g.f, y2: g.s}
        o.x1 = N(o.x1, 0)
        o.y1 = N(o.y1, 0)
        o.x2 = N(o.x2, 0)
        o.y2 = N(o.y2, 0)

        gr = ctx.createLinearGradient(o.x1, o.y1, o.x2, o.y2)

        if (o.cS) {
            gr.cS(o.cS)

            ctx.c(gr);
            return ctx
        }

        return gr
    }
    TESTGRAD = function () {
        $.C();
        x = c.ctx()


        x.lg(
            {
                cS: {r: 0, r: .1, b: .15, r: .2, y: .5, b: 1},
                x1: 50, x2: 500, y2: 100
            }).fr(0, 0, 300)

        x.lg({cS: {o: .2, r: .6, g: .8}, x1: 50, x2: 500, y2: 100}).fr(300, 0, 300)


        //black to white
        // x.lg({cS:{z:0, w:1}, x2: x.W(), y2:0 }).fr()

    }
    LINRAD = function () {
        $.C()
        x = c.ctx()
        x.lg({x1: 50, y1: 500, y2: 100, cS: {o: .2, r: .6, g: .8}})
        x.fr(0, 0, 100, 100)
    }
    gr = CanvasGradient.prototype
    gr.cS = gr.s = gr.c = function (n, c) {
        var g = G(arguments), gr = this
        if (g.O) {
            _.e(g.f, function (n, c) {
                gr.cS(n, c)
            })
        }
        else {
            this.addColorStop(n, oO('c', c))
        }
        return this
    }
    x.lf = x.lG = ctx.lGr = ctx.linGrad = function (a, b, c, d) {
        return this.createLinearGradient(a, b, c, d)
    }
    x.rf = x.rG = ctx.rGr = ctx.radGrad = function (a, b, c, d, e, f) {
        return this.createRadialGradient(a, b, c, d, e, f)
    }
    x.pt = x.Pt = function () {
        return this.createPattern()
    }
};
grad()
text = function () {
    x.F = function () {
        var g = G(arguments), o
        o = {f: g.f}
        if (g.N_) {
            o.f += 'px ' + (g.n ? 'Verdana' : 'Georgia')
        }
        this.font = o.f
        return this
    }
    x.tA = function () {
    }
    x.tB = x.Bl = function () {
    }
    x.ft = x.fT = function (x, y, t) {
        var g = G(arguments)

        if (g.N_) {
            this.fillText(g.t, g.f, g.s)
        }

        else {
            this.fillText(g.t, x.W() / 2, 200)
        }
    }
    x.sT = function () {
    }
    x.mT = function () {
    }
    x.mL = function () {
    }
//x.T( ['r'],  [20 | '20px verdana], 'afsdsafd', [x, y] )
    x.T = function () {
        var g = G(arguments), x = this, o, t
        o = g.S ? {t: g.f, x: g.t, y: g[3]} : // ONLY a str (so not to be confused with color)
            S(g.t) ? {c: g.f, f: g.s, t: g.t, x: g[3], y: g[4]} :
                g.N_ ? {f: g.f, t: g.s, x: g.t, y: g[3]} :
                    S(g.s) ? {c: g.f, t: g.s, x: g.t, y: g[3]} :
                    {t: g.f, x: g.s, y: g.t}
        o.x = N(o.x, x.W() / 2)
        o.y = N(o.y, 200)
        if (o.c) {
            x.c(o.c, o.c)
        }
        if (o.f) {
            g.n ? x.F(o.f, '-') : x.F(o.f)
        }
        x.fillText(o.t, o.x, o.y)
        return x
    }
    XT = function () {
        $.C()
        x.b('b', 'g', 30)
        x.T(100, 'Jason Yanofski', 10, 150)
        x.lg({x1: 0, y1: 0, x2: x.W(), y1: 0, cS: {m: 0, b: .5, r: 1}})
        x.T('Jason Yanofski', 10, 290, '-')
    }
};
text()
draw = function () {

    x._d = function (i) {
        var g = G(arguments), o
        if (g.S_ && g.f.length < 10000) {
            g[0] = Q.i(g[0])
        }

        if (g[0] == this) {
            g[0] = g[0].cv()
        }
        g[1] = N(g[1], 0)
        g[2] = N(g[2], 0)

        this.drawImage.apply(this, g)
        return this
    }


    x.d = function (i, x, y) {
        var g = G(arguments), o

        o = {i: g.f, x: g.s, y: g.t}


        o.x = N(o.x, 0)
        o.y = N(o.y, 0)
        if (O(o.i)) {
            this.drawImage($(o.i)[0], o.x, o.y)
            return this
        }

        if (S(o.i)) {
            o.i = Q.i(o.i)
        }

        if (o.i.width) {
            o.x = o.x - o.i.width / 2
            o.y = o.y - o.i.height / 2
        }
        this._d(o.i, o.x, o.y)
    }


    x.scICen = function (i, s, x, y) {
        if (S(i) && i.length < 100) {
            i = Q.i(i)
        }
        x = N(x, 0)
        y = N(y, 0)
        var w = this.W(), h = this.H(),
            s = s || 1
        this.d(i,
            w * s / -2 + w / 2, h * s / -2 + h / 2, w * s, h * s
        )
    }
    x.scaleImCenSpiralMe = function () {
        var scaleNum = 1,
            that = this
        _.t(100, function () {

            that.scaleImCen('me', scaleNum)
            scaleNum *= .9
        })
    }
    x.scaleImCenSpiral = function () {
        var scaleNum = 1, that = this
        _.t(100, function () {
            that.scaleImCen('me', scaleNum)
            scaleNum *= .9
        })

    }
    x.dC = function f(i, x, y) {

        var that = this

        i = i || 'me'
        x = x || 100
        y = y || 100


        if (U(x)) {//draw img in center of can
            $.img(i, function (i) {
                that.draw(i, (that.W() / 2) - (i.W() / 2), (that.H() / 2) - (i.H() / 2))
            })
        }

        else {//draw it by specifying location of its center
            y = y || x
            $.i(i, function (i) {
                that.dr(i, x - i.W() / 2, y - i.H() / 2)
            })
        }

        return this
    }


    //draw it where u say, but as if its reg point was its center
    x.drawRegCenter = function f(i, x, y) {
        var that = this

        $.i(i, function (i) {
            that.draw(i, (that.W() / 2) - (i.W() / 2), (that.H() / 2) - (i.H() / 2))
        })
        return this
    }
    x.Cd = function (i, x, y) {
        var ctx = this
        x = N(x, 100)
        y = N(y, 100)
        i = Q.i(i || 'me')
        ctx.d(i, x - i.W() / 2, y - i.H() / 2)
        return ctx
    }
    x.fit = function f(i, x, y) {
        i = i || 'me'
        x = N(x, 0)
        y = N(y, 0)
        this.d(i, x, y, this.W(), this.H())
        return cv
    }
    x.cr = function (x1, y1, x2, y2) {
        var cv = this, ctx = cv.ctx(), i
        i = this.u()
        if (A(x1)) {
            return this.crop(
                x1[0], x1[1], x1[2] - x1[0], x1[3] - x1[1]
            )
        }
        this.d(i, x1, y1, x2, y2, 0, 0, cv.W(), cv.H())
        return cv
    }
};
draw()