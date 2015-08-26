function _rec(o){o.x = N(o.x, 0);o.y = N(o.y, 0);o.w = N(o.w, 60);o.h = N(o.h, o.w); return o}
h.dr=function () {var h = this, gx = h.graphics, g = G(arguments),o

    o = g.O? g.f:
        N(g.t)? {x: g.f, y: g.s, w: g.t, h: g[3]} :
        {w: g.f, h: g.s}

    _rec(o)

    gx.dr(o.x, o.y, o.w, o.h)

    return h
}
h.dr2 = function (x, y, W, H) {var h = this, g = G(arguments), o
    if (O(g.f) && O(g.s)) {_.e(g, function (r) {h.dr2(r)}); return h}
    o = g.O ? g.f : N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g[3]} : {w: g.f, h: g.s}
    _rec(o)
    h.dr(-o.w/2+o.x, -o.h/2+o.y, o.w, o.h)
    return h
}
h.rec = function () {var h = this, g = G(arguments), o
    if (g.OO_) {g.e(function (g) {h.rec(g)});return h}
    o = g.O ? g.f : S(g.s) ? {c: g.f, C: g.s, x: g.t, y: g[3], w: g[4], h: g[5], l: g[6]} :
            g.S_ ? {c: g.f, x: g.s, y: g.t, w: g[3], h: g[4], l: g[5]} :
                N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g[3], c: g[4], C: g[5], l: g[6]} :
                {w: g.f, h: g.s, c: g.t, C: g[3], l: g[4]}
    o.x = N(o.x, 0);o.y = N(o.y, 0);o.w = N(o.w, 50);o.h = N(o.h, o.w)
    if (o.i) {h.bf(o.i, function () {o.i = null; h.rec(o)}); return h}
    if (o.c) {h.c(o)}
    if (o.lf) {h.lf({c1: o.c1 || 'z', c2: o.c2 || 'w', s1: 0, s2: 1,         x: o.x - o.w / 2, y: o.y - o.h / 2, x2: o.x - o.w / 2, y2: o.y + o.h / 2})}
    h.dr(-o.w / 2 + o.x, -o.h / 2 + o.y, o.w, o.h)

    return h
}
cjs.rect = function self(width, height, x, y, fc, sc) {var g=G(arguments), h = _$H(),
    o= _.x({w: g.f, h: g.s}, N(g.t)?
    {x: g.t, y:g[3], fc:g[4], sc:g[5]} : {fc: g.t, sc:g[3]})
    o.x = N(o.x)? o.x : 0; o.y = N(o.y)? o.y : o.x
    o.W = o.W || 100;o.H = o.H || o.W; hW = o.W / 2;hH = o.H / 2
    o.fc = o.fc || 'g';o.sc = o.sc || 'w'
    h.graphics.f(o.fc).s(o.sc).mt(-hW + o.x, -hH + o.y)
        .lt(-hW + o.x, hH + o.y).lt(hW + o.x, hH + o.y)
        .lt(hW + o.x, -hH + o.y).lt(-hW + o.x, -hH + o.y)
    return h
}
cjs.RECT = function (c, W, H, x, y, a) {var g = G(arguments), ct = cjs.ct(), h, o;
    if (O(c)) {o = c} else if (S(c)) {o = {c: c, w: W, h: H, x: x, y: y, a: a}}
    o = b2d.oDef(o)
    h = ct.h(o.x, o.y).c(o.c, o.C, o.l).rot(o.a)
    if (o.bm) {h.bm('me', function () {h.dr2(o.x, o.y, o.w, o.h)});return h}
    if (o.rg) {h.rg(o.c, o.C)}
    if (o.lg) {h.lg(o.c, o.C)}

    h.dr2(o.x, o.y, o.w, o.h)
    return h
}
