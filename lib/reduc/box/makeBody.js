w=b2d.World.prototype

w.D=function(){var w=this, g=G(arguments,'k'),o,b

    if(g.u){
        return w.D(w.hW, w.hH)
    }


    o= g.O? g.f: g.O_? {p:g.f, f:g.r}: {p:[g.f,g.s],f:_.r(g,2)}

    b = w.CreateBody( b2d.D(o.p) )
    b.K(g.k)

    $a(b, 'f',
        g.G( o.f ))

    return b
}

w.S=function(){var w=this, g=G(arguments), o, b,
    bD, fs, k//,D=b2d.D
    if(S(_.l(g))){k=g.pop() }
    if(g.N_){
        o= {b:V(g.f, g.s), f:_.r(g,2)}
    }
    else {o= {b:V(g.f),f:_.r(g)}}
    o.b = b2d.S(o.b)
    if(k){o.k=k}
    b = w.CreateBody(o.b)
    //array of multiple fixtures
    if(g.A_ && U(g.s)){alert('see w.D'); $l('mult')
        _.e(o.f, function(f){if(g.n){b.f(f, '-')} else {b.f(f)}})
        if(o.k){b.K(o.k)}
        return b}
    if(g.n){o.f.push('-')}
    b.f.apply(b,o.f)
    if(o.k){b.K(o.k)}
    return b
}


w._cir=function(){var w=this, g=G(arguments), o

    o = g.O? g.f : N(g.s) ?
    {x: g.f, y: g.s,  r: g.t,    c: g[3]} :
    { r: g.f }
    o.x  = N(o.x, w.hW);
    o.y  = N(o.y, w.hH);
    o.r  = N(o.r, 40);
    o.c  = o.c || $r()
    return o
}
w.cir=w.ba=w.ball=function(x, y, r, c){

    var w=this, g=G(arguments), b, o
    o = w._cir.apply(w, g)
    b = w.D(o.x, o.y, o.c, o.r).K('ball cir')

    if(g.n){b.sen(true)}
    return b.d(.5).fr(0).r(.5)
}
w.bump = w.baa = function(){
    var w=this, g=G(arguments), b,o
    o = w._cir.apply(w, g)
    b = w.S(o.x, o.y, o.c, o.r).K('bump')
    if(g.n){b.sen(true)}
    return b.d(.5).fr(0).r(.5)
}



w.pol=function(){var w=this,g=G(arguments), b,o
    if(g.A){return $a(w,'pol',g.f)}
    b2d.mini()
    if(g.OO){g.e(function(g){w.pol(g)})
        return w
    }
    // if(g.N_ && N(g.s) && O(g.t) &&U(g[3])){return w.D(g.f,g.s).pol(g.t)}
    else if(g.N_ && N(g.s) && O(g.t)    ){
        b = w.D(g.f,g.s)
        // if(iB(g[2])){ g[2]= g[2].wV()} //M.p(g[2]).vs()
        _.e(g.t, function(p){
            b.pol({v:p})})
        return g.m? M.p(b): b
    }
    o= g.O? g.f:
        N(g.f)? {x:g.f, y:g.s, p:g.t}
            : {p:g.f}
    o.x=N(o.x, w.hW)
    o.y=N(o.y, w.hH)
    o.p= M.p(o.p)
    b=w.D(o.x, o.y)
    if(g.P){
        if(iB(o.p)){o.p=M.p(o.p)}
        b.pol(o.p)
        return g.m? M.p(b): b
    }
    if(o.rg){o.p.ps(o.rg, function(p){b.pol(o)})}
    else {
        o.p.ps(function(p){
            b.pol(o)})}
    return b.f()
}


w.brick = w.bii = function (x, y, W, H) {var w=this, g=G(arguments), b,o
    o = O(g[0])? g[0] : N(g[1])? {
        x:g[0],
        y:g[1],
        w:g[2],
        h:g[3]
    } : {w: g[0]}

    o.x  = _.tN(o.x, w.hW)
    o.y  = _.tN(o.y, w.hH)
    o.w  = _.tN(o.w, 40)
    o.h  = _.tN(o.h, o.w)
    o.c  = o.c || $r()

    b= w.S(o.x, o.y,  o.c, o.w, o.h).K('brick').DFB(0.5, 0.5, 0)

    if(g.n){b.sen(true)}
    return b
  }




w.bfR = function(){$l('makeBody w.bfR ')
    var w = this, g = G(arguments), b, h, o
    o = S(g.t) ? {x: g.f, y: g.s, i: g.t, w: g[3], h: g[4], c: g[5]} :
    {x: g.f, y: g.s, w: g.t, h: g[3], c: g[4]}
    o.i = o.i || 'sun'
    o.c = o.c || 'y' // can be removed
    b = w.D(o.x, o.y, o.c, o.w, o.h)
    h = w.g.h().al(.5)
    if (o.c) {
        h.c(o.c)
    }
    h.bf(o.i)
    h.rec(o.w, o.h)
    b.bS(h)
    return b
}



w.polyCirc=function(x, y, r, sides){var w=this,
    b=w.D(x,y)
    b.pol( {v:b2d.polyCirc(r, sides)})
    return b
}


//random
w.rR = w.randRects = function (ob) {
    var w = this, g = G(arguments),
        o = g.O ? g.f : {y: g.f, z: g.s}
    o.y = N(o.y, 0)
    o.z = N(o.z, 1)
    _.t(20,
        function (i) {
            w.S(R(1100, 20), R(150, 40 + o.y), $r(),
                R(40, 15) * o.z, R(40, 15) * o.z).K('randomRect rR')
        })
    return w
}
w.ten = w.addTenBalls = function (n) {
    var w = this

    _.t(n || 10, function (i) {

        w.ball(100 + (i * 80), 200)
    })

    return w
}
w.hun = w.addHundBalls = function (n) {
    var w = this
    _.t(n || 100, function (i) {
        w.ball(100 + (i * 8), 50, 10)
    })
    return w
}



//maybe
w.brcks=w.boxesStat=function(){
    alert('w.brcks or w.boxesStat')
    var w = this,g=G(arguments)
    _.e(g, function (g) {w.brick.apply(w, g)})
    return w}


function missingBox(){

    w.boxes=function(){var w = this,g=G(arguments)
        _.e(g, function (g) {w.box.apply(w,g)})
        return w
    }

}


