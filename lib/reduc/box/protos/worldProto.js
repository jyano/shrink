w=b2d.World.prototype
//step
w.step = function (time, a, b) {
    var w = this
    w.Step(time, N(a, 8), N(b, 3))
    return w

}
//clear forces
w.cF = w.clear = function () {
    var w = this
    w.ClearForces()
    return w
}
w.dbD = w.bug = w.debugDraw = function () {
    var w = this, g = G(arguments)


    b2d.dbD = b2d.debugDraw = function (sp, sc, flags, al, line) {

        var dd = new b2d.DebugDraw()

        //can pass in either canvas or context
        if ($.isCan(sp)) {
            sp = sp.ctx()
        }

        if (sp) {
            dd.sprite(sp)
        }
        if (sc) {
            dd.scale(sc)
        }
        if (flags) {
            dd.flags(flags)
        }

        dd.alpha(N(al, 0.5))

        // dd.line( N(line)? line :1 )
        // dd.SetLineThickness(1)
        return dd
    }
    // this.scale = dd.scale()
    w.SetDebugDraw(
        b2d.debugDraw.apply(null, g)
    )

    return w

}
//get body list
w.bs=  w.bL= w.getBodyList=function(){
    //can be result of w.b if g.u
    return this.GetBodyList()}
//delete all dynamic bods
w.xD=function(){w.e(function(b){if(b.iD()){  b.xx()}})}
//delete all bods except walls
w.clr = w.wXx = function(){var w=this
    w.e(function(b){
        if(b!= w.right && b!= w.left&& b!= w.roof&& b!= w.floor)
            b.xx()
    })
    return w
}
//delete one or all bods
w.xB=   w.Xx=   w.Xb=  function(b){var w=this

    if(U(b)){
        w.e(function(b){w.xB(b)})
    }
    else {
        w.DestroyBody(b)
    }

    return w
}
//ground body
w.gB = function () {
    return this.GetGroundBody()
}
//gravity
w.G = function (x, y) {
    var w = this,
        v, currG = w.GetGravity()
    if(U(x)){
        return currG
    }
    if (N(x)) {
        v = N(y) ? V(x, y) : V(0, x)
    }
    else if (x == 'flip') {
        v = V(-currG.x, -currG.y)
    }
    w.SetGravity(v)
    return w
}
//body count
w.n = w.count = w.getBodyCount = w.bC = w.gBC = function () {
    return this.GetBodyCount()
}


//query
w.Q=function(){
    var w = this, g=G(arguments),o
    o = g.O? g.f:
        g.S_ && N(g.s)? {k: g.f, x: g.s, y: g.t, fn:g[3]} :
            g.S_ && O(g.s)? {k: g.f, x: g.s.x, y: g.s.y, fn: g.t} :
                g.F_? _.x({fn:g.f, n:0}, O(g.s)? {x1:g.s.x, y1:g.s.y} : {x1:g.s, y1: g.t, x2:g[3], y2:g[4]}) :
                    g.O_? {x1: g.f.x,  y1: g.f.y, fn:g.s} :
                    {x1:g.f, x2:g.s,fn:g.t}

    o.n = 0

    w.QueryAABB(
        function(f){var res; o.n++
            res = o.fn(f, f.B(), o.n)
            if(res!==false){ return true} },
        b2d.AB( o.x1, o.y1, o.x2, o.y2 )
    )
    return w
}
//but it makes a rectangle not square
w.rad=function(x,y,r,fn){return this.Q({
    x1: x-r,  y1:y-r,     x2: x+r,  y2:y+r,    fn: fn
})}
w.q=function(){var w=this,g=G(arguments),o,fx

    o= g.S_ && N(g.s)? {k: g.f, x: g.s, y: g.t, fn:g[3]} :
        g.S_ && O(g.s)? {k: g.f, x: g.s.x, y: g.s.y, fn: g.t} :
            g.N_ ? {x: g.f, y: g.s, fn: g.t, k:g[3]} :
                g.A_? {x: g.f[0], y:g.f[1], fn: g.s, k: g.t} :
                {x: g.f.x, y: g.f.y, fn: g.s, k: g.t}

    w.QueryAABB(
        function(f){
            if (f && f.of(o.k) && f.tP(o.x, o.y) ){ fx = f; return }
            return true },
        b2d.AB(o.x, o.y)
    )

    if(fx){ if(F(o.fn)){ _.b(o.fn,fx)(fx); return w } return fx }

}
w.e= w.each= function(){var w=this, g=G(arguments), o,
    bs=w.GetBodyList(),
    k,
    b,arr

    o = g.S_? {k:g.f, fn:g.s}: {fn:g.f}

    if(g.u){ alert('w.e') }


    arr=[]

    while(bs){b=bs;  bs=bs.N()
        if(b.of(o.k)){  arr.push(b) }
    }

    _.e(arr, function(b){  o.fn(b)  })

    return w
}
w.mdq = function(fn){var w=this

    w.md(function(e){ w.q(e.x,e.y,function(f){ fn(f,e) })})

    return this
}



//move all bods
w.left = function (n) {
    var w = this;
    n = N(n, 4)//w.horiz=
    w.e(function (b) {
        b.X(n, '-')
    })
}
w.up = function (n) {
    var w = this;
    n = N(n, 4)//w.vert=
    w.e(function (b) {
        b.Y(n, '-')
    })}
w.eEv = w.eachEvery = function (fn) {
    var w = this
    z(function () {
        w.e(fn)
    })
    return w
}
w.inEv = function (n1, n2, fn) {
    _.in(n1, function () {
        _.ev(n2, function () {
            fn()
        })
    })
}
w.evIn = function (n1, n2, fn) {
    _.ev(n1, function () {
        _.in(n2, function () {
            fn()
        })
    })
}
w.warp = function () {
    var w = this
    w.eEv(function (b) {

        if (b.X() < 10) {
            b.X(w.W - 10)
        }
        if (b.X() > w.W - 10) {
            b.X(10)
        }
        if (b.Y() < 10) {
            b.Y(w.H - 10)
        }
        if (b.Y() > w.H - 10) {
            b.Y(10)
        }
    })

    return w
}
w.dance=function(){var w=this
    w.e(function(b){
        if(b.iD()){
            b.thr()
        }
    })//w.eD
    return w
}