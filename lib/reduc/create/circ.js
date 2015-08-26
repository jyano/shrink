function _cir(o){
    o.x = N(o.x,0);o.y = N(o.y,0);o.r = N(o.r, 40)
return o
}
//just DRAWS a circle on a shape
h.dc = function(){var h = this, gx = h.graphics, g = G(arguments), o
    o = g.O ? g.f : g.$ ? {r: g.f} :
    {x: g.f, y: g.s, r: g.t}
    _cir(o)
    h.cp() // i kinda like how it stroke-connects my cirs
    if (g.A) {return $a(h, 'dc', g.f)}
    if (g.OO_) {g.e(function (c) {h.dc(c)}); return h}
    gx.dc(o.x, o.y, o.r)
    return h
}
h.cir = function(){var h = this, gx = h.graphics, g = G(arguments), o
    //h.ef().es()
    //if (g.O_ && A(g.s)) {_.e(g.s, function(c){h.cir(_.x(c, g.f))}); return h }
    o = g.O ? g.f :
        N(g.t) ? {x: g.f, y: g.s, r: g.t, c: g[3], C: g[4], l: g[5]} :
            N(g.s) ? {x: g.f, y: g.s, c: g.t, C: g[3], l: g[4]} :
                g.N_ ? {r: g.f, c: g.s, C: g.t, l: g[3]} :
                {c: g.f, C: g.s, l: g.t}

    h.c(o)
    if (o.bf) {if (N(o.bf)) {o.bm = 'me'}
        if (F(Q)) {h.bf(o.bf, function () {h.dc(o)})}
        else {o.tf = o.tf || null; h.bf(o.bf, o.tf).dc(o)}
    }
    else {h.dc(o)}
    h.alpha = N(o.al, 1)
    return h
}
$Cir= function(){var g = G(arguments),
        o = g.S_? {c:g.f,x:g.s,y:g.t,r:g[3]}:
        {x:g.f,y:g.s,r:g.t}

    return $h(o.c,o.x,o.y)
        .dc(o.r)
}
cjs.cir = function () {var g=G(arguments),o
    o= g.S_? {c: g.f, r: g.s, x: g.t, y:g[3]}:
    {r: g.f, x: g.s, y: g.t}

    o.c = o.c || 'y'

    _cir(o)

    return $h().c(o.c)
        .dc(o.x,o.y,o.r)
}
cjs.circ = function(){var g=G(arguments),o
    alert('cjs.circ')
    o= g.N_? {r: g.f, c:g.s}: {c: g.f}
    o.r = o.r ||8

    o.c =   oO('c', o.c || 'z')

    return $h(o.c).dc(o.r)
}

