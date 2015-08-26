i=cjs.DisplayObject.prototype

i.hd = i.hide = function () {
    this.visible = false;
    return this
}
i.d= i.dot=function(){
    this.getStage().dot(this.X(), this.Y()); return this
}
i.hT= i.test=function(x,y){var i=this
    if(cjs.iDO(x)){return i.hT(i.gTL(x))}
    if(O(x)){y= x.y;x= x.x}
    return i.hitTest(x, y)}
i.u=function(){
    this.update();return this
}
i.al= function(alpha){
    if(U(alpha)){return this.alpha}
    this.alpha=alpha;return this
}
i.n= function(name){
    if(U(name)){return this.name}
    this.name=name;return this
}
i.ix=function(n){var i=this, g=G(arguments)
    if(U(g[0])){return }
    i.P().setChildIndex(i, n)
    return i
}
i.of = function (k) {
    this._K = this._K || []
    return !k || this == k || _.ct(this._K, k)
}
i.K = function () {
    var i = this, g = G(arguments)
    this._K = this._K || []

    if (g.u) {
        return this._K.join(' ')
    }

    if (g.O) {
        this._K(g.f.k);
        return this
    }


    _.eW(g.f, function (k) {


        if (!i.of(k)) {
            i._K.push(k)
        }


    })

    return this
    //i.of=function(k){return this.K()==k || this.K()==''}
}
i.xx = i.rm = i.remove = function () {
    var i = this
    i.parent.removeChild(i)
    return i
} //cant delete 'remove' quite yet
i.rm = function () {
    this.P().removeChild(this);
    return this
}

i._=function(x,y){var g=G(arguments), o, cl

    o= g.O_ ? {i: g.f, x: g.s, y: g.t}:
    { x: g.f, y: g.s}

    cl =  o.i?
        o.i._().a2(this) :
        this.clone().a2( this.P() )

    if(N(o.x)){cl.X(o.x)}
    if(N(o.y)){cl.Y(o.y)}

    if(g.p){cl.dg()}
    return cl
}
i.ca=function(a,b,c,d,e){
    if(O(a)){this.ca(0, 0, a.width, a.height)
        return this
    }
    this.cache(a,b,c,d,e)
    return this
}


i.flash = function () {
    var i = this
    i.opacity(0)
    $.in(.3, function () {
        i.opacity(1)
    })
    return i
}
i.RT = function(){RT(this); return this}
i.TR = function(){TR(this);return this}


i.P=function(){return this.parent}
i.St = i.S = i.st = function () {
    return this.getStage()
}


i.a2=function(ct, x, y){
    ct.A(this)
    if(N(x)){this.X(x)}
    if(N(y)){this.Y(y)}
    return this
}


i.sib=function(){return this.P().ch()}
i.st = function () {
    if (this.getStage) {
        return this.getStage()
    }
    return this.stage
}
i.blSt = i.belowStg = function () {
    return this.y > this.stg().H()
}
i.within = i.inStage =  function(){var i=this,g=G(arguments), s=i.S(),wthnS

    wthnS = i.x > 0 && i.y > 0

    &&   i.x < (s.W()-100)  &&   i.y< ( s.H()-100 )

    if(g.n && !wthnS){ s.rm() }

    return wthnS
}
i.belowStg = function(){ return this.y > this.S().H() }
i.toFront = function(){ return this.ix( this.sib().length-1 ) }
i.toFront = function(){var ob=this
    numChildren = this.parent.children.length
    this.P().setChildIndex(this,numChildren-1)
    return this
}


i.uM= i.underMouse=function(){var i=this, s=i.S()
    if(s.mouseInBounds){
        var pt = i.gTL(s.mouseX,s.mouseY)
        return i.hT(pt)}}
i.$=function(fn){return this.on('click', fn)}
i.$$=function(fn){return this.on('dblclick', fn)}
i.dg= i.drag=function(){var i=this;SL(i);return i}
i.dg=i.drag=i.SL = function(){SL(this);return this
    ob.$ = ob.click = function (func) {
        return this.on('click', func)
    }
    ob.$$ = function (a, b, c, d, e) {
        return this.on('dblclick', a, b, c, d, e)
    }
    ob.uM = ob.underMouse = function () {
        var ob = this, st = ob.stage


        if (st && st.mouseInBounds) {
            return ob.tx(ob.gTL(st.m().x, st.m().y))
        }


    }
}
i.bM=function(){var ob=this, st=ob.st()
    st.MM(function(){ob.x = st.m().x; ob.y = st.m().y})
    return ob
}

i.cu= i.bM=function(cu){var ob=this, st=ob.st()
    CUob= {
        d:'default', n:'none', h:'help',
        p:'pointer',  ch:'crosshair',
        P:'progress', w:'wait',
        t:'text',
        m:'move', g:'grab',  c:'copy',
        cm:'context-menu',
        C:'cell',
        N:'not-allowed', v:'not-allowed',
        z:'zoom-in'
    }

    if(U(cu)){st.MM(function(){ob.x = st.m().x; ob.y = st.m().y})}
    else if(S(cu)){ ob.cursor= CUob[cu]? CUob[cu] : cu  }
    return ob
}

i.o = function (o) {
    this.compositeOperation = o;
    return this
}
i.Ds = i.dO = function () {
    this.o('destination-out');
    return this
}
i.dS = i.dI = function () {
    return this.o('destination-in')
}
i.sD = i.sI = function () {
    this.o('source-in');
    return this
}
i.Sd = i.sO = function () {
    this.o('source-out');
    return this
} // why use this ??x.sd = x.sV= function(){ this.o('source-over'); return this }
i.ds = i.dV = function () {
    this.o('destination-over');
    return this
}
i.SD = i.sT = i.sA = function () {
    this.o('source-atop');
    return this
}
i.DS = i.dT = i.dA = function () {
    this.o('destination-atop');
    return this
}
i.li = function () {
    this.o('lighter');
    return this
}
i.co = function () {
    this.o('copy');
    return this
}
i.xo = function () {
    this.o('xor');
    return this
}

i.ca= function(){var ob=this, st=ob.st(), g=G(arguments), o, op, i

    if(O(ob.image && !g.n && !g.p)){ob.cache($(ob.image)[0])}

    if(ob.cacheCanvas && !g.p && (U(g[0]) || S(g[0]) || g.n)){
        op=g[0];ob.updateCache(op);return ob
    }
    o = O(g[0])? {i: g[0], x:g[1], y:[2]}: N(g[2])? {x:g[0], y:g[1], w:g[2],h:g[3] }: N(g[1])? {w:g[0], h:g[1]}: {}
    if(O(o.i)){ o.i = o.i.image? o.i.image:$(o.i)[0];
        if (!g.n) {
            if(ob.image){ob= ob.image}
            ob=$(ob)[0]
            ob.cache(0, 0, ob.width, ob.height)}
    }
    o.x = N(o.x)? o.x:0; o.y = N(o.y)? o.y:0
    o.w = N(o.w)? o.w : O(o.i)? o.i.width: N(o.h)? o.h : st? st.W():0
    o.h = N(o.h)? o.h : O(o.i)? o.i.height: st? st.H(): 0
    ob.cache(o.x, o.y, o.w, o.h )
    return ob
}
i.fl=function(){var ob=this,g=G(arguments),i
    if(A(g[0])){return ob.fl.apply(ob,g[0])}
    ob.filters=ob.filters||[]
    _.e(g, function(fl){ob.filters.push(fl)})
    if(!g.n){i= ob.image; this.ca(0, 0, i.width, i.height)}
    return ob
}
i.fl2=function(){var ob=this,g=G(arguments)
    ob.filters=[]
    ob.filters=ob.filters||[]
    _.e(g, function(fl){
        ob.filters.push(fl)
    })
    if(!g.n){i= ob.image; this.ca(0, 0, i.width, i.height)}
    return ob
}
i.aF=function(h){var ob=this
    ob.fl( $AF( h ) )
    return ob
}
i.aF2=function(h){var ob=this
    this.fl2( $AF( h ) )
    return ob
}
old=function(){
    ob.caxxx=function(i,y,w,h){var ob=this,st=ob.st(),g=G(arguments),o

        o = O(g[0])? {i: g[0], x:g[1], y:[2]}:
            N(g[2])? {x:g[0], y:g[1], w:g[2],h:g[3] }:
                N(g[1])? {w:g[0], h:g[1]}: {}
        if(O(o.i)){
            o.i = o.i.image?o.i.image:$(o.i)[0]
            o.w = o.w || o.i.width
            o.h = o.h || o.i.height}
        o.x = N(o.x)? o.x:0
        o.y = N(o.y)? o.y:0
        // o.h = N(o.h)? o.h : st.H()
        // o.w = N(o.w)? o.w : st.W()

        if(U(g[0])){
            if (O(ob.image)){
                $l('uG0 - ob.image')
                if (!g.n) {ob._ca(ob.image, '+')}
            }
            else {$l('uG0')
                if (ob.cacheCanvas) {ob.updateCache()}}
        }
        else if(O(i)){ob._ca(i)}
        else if(!N(w)){ ob.cache(0,0,o.x,o.y)}
        else {ob.cache(o.x, o.y, o.w, o.h ) }
        return ob
    }



    ob.uCaxxx=function(){var ob=this,g=G(arguments)
        if( U(g[0]) && O(ob.image) ){ob.updateCache(0,0, ob.image.width, ob.image.height)}
        else if(O(g[0])){
            g[0] = $(g[0])[0]
            ob.updateCache(0,0,  g[0].width, g[0].height)}
        else if(!N(g[2])) {ob.updateCache(0,0,g[0], g[1] )}
        else {ob.updateCache(g[0], g[1], g[2], g[3])}
        return ob
    }

}


i.bindBody = function (body) {
    var i = this, b = body
    cjs.tick(function () {
        b.XY(i.X(), i.Y()).rT(i.rT())
    })
    return i
}
i.bB = i.bindBody = function (b) {
    var i = this
    cjs.t(function () {
        b.X(i.X())
        b.Y(i.Y())
        b.rot(i.rot())
    })
    return i
}
i.keyControls = function (num) {
    var args = G(arguments),
        i = this

    if (args.P) {
        $.kD('left', function () {
            i.toL(num)
        })
        $.kD('right', function () {
            i.toR(num)
        })
    }

    if (args.N) {
        $.kD('up', function () {
            i.toU(num)
        })
        $.kD('down', function () {
            i.toD(num)
        })
    }
}
i.in = i.within = i.inStage = function () {
    var i = this, st = i.st(),
        g = G(arguments),
        x = i.x,
        y = i.y,
        w = stg.W() - 100,
        h = stg.H() - 100,

        inn = x > 0 && x < w && y > 0 && y < h

    if (g.n) {
        if (!inn) {
            i.rm()
        }
    }

    return inn
}
i.bounce = function (n) {
    n = N(n) ? n : 0
    var i = this, st = this.st(), h = st.H(), w = st.W()
    J.tick(
        function () {
            var x = i.x, y = i.y
            if (x > w - i.W() - n || x < (n )) {
                i.vX('-')
            }
            if (y > h - i.H() - n || y < (n )) {
                i.vY('-')
            }
        })
    return st
}
i.bounce = function (n) {
    var i = this,
        stage = i.getStage(),
        h = stage.H(),
        w = stage.W()
    n = N(n, 0)
    T.t(
        function () {
            var x = i.x, y = i.y
            if (x > w - i.W() - n || x < (n )) {
                i.vX('-')
            }
            if (y > h - i.H() - n || y < (n )) {
                i.vY('-')
            }
        })
    return i
}

i.wrx = i.warpX = function (low, high, cush) {
    var i = this,
        warp = M.warp(low, high, cush)
    cjs.tick(function () {
        i.x = warp(i.x)
    })

    return i
}
i.wry = i.warpY = function (low, high, cush) {
    var i = this,
        warp = Math.warp(low, high, cush)
    cjs.tick(function () {
        i.y = warp(i.y)
    })
    return this
}
i.wr = i.warp = function (n) {
    n = n || 0
    var stage = this.getStage()
    this.warpX(0, stage.W(), n)
    this.warpY(0, stage.H(), n)
    return this
}

i.warpX = function (lo, hi, cush) {
    var i = this, wrp = M.wrp(lo, hi, cush)
    cjs.t(function () {
        i.x = wrp(i.x)
    })
    return i
}
i.warpY = function (lo, hi, cush) {
    var i = this, wrp = M.wrp(lo, hi, cush)
    cjs.t(function () {
        i.y = wrp(i.y)
    })
    return i
}
i.warp = function (n) {
    var i = this, s = i.S(), n = n || 0
    i.warpX(0, s.W(), n)
    i.warpY(0, s.H(), n)
    return i
}

i.shootBullet = function () {
    shooter = this
    st = shooter.st()
    bu = cjs.cir(8, 'w').XY(shooter).a2(st)
    bu.startMoving((shooter.vx || 1) * 1.5, (shooter.vy || 1) * 1.5)

}
i.hitByBullet = i.isPointInMyRectBounds = function () {
    var i = this, g = G(arguments),

        bu = g[0],
        didHit = M.pointInRectangle(bu.cX(), bu.cY(), {x: i.cX(), y: i.cY(), w: i.W(), h: i.H()})
    if (g.n && didHit) {
        i.rm()
    }
    return didHit
}
//chick for hits and remove if a hit
i.killAllIAmHitting = function () {
    var ob = this,
        stage = this.getStage()

    _.each(stage.children, function (obj) {

        if (ob != obj) {

            obj.hitByBullet(ob, '-')

        }
    })

}
i.makeMeAKiller = function () {
    var i = this
    cjs.tick(function () {
        i.killAllIAmHitting()
    })
    return this
}
i.shootBullet = function () {
    shooter = this
    s = stage = shooter.stg()

    bullet = cjs.circ(8, 'w').XY(shooter).a2(s)

    bullet.startMoving(
        (shooter.vx || 1) * 1.5, (shooter.vy || 1) * 1.5
    )

}
i.hitByBullet = i.isPointInMyRectBounds = function (bullet) {
    var args = G(arguments), bullet = args[0],

        didHit = M.pointInRectangle(
            bullet.cX(), bullet.cY(),
            {
                x: this.cX(),
                y: this.cY(),
                w: this.W(),
                h: this.H()
            }
        )
    if (args.n) {
        if (didHit) {
            this.rm()
        }

    }
    return didHit

}
i.killAllIAmHitting = function () {
    var i = this,
        stage = i.St()
    _.e(stage.children, function (obj) {
        if (i != obj) {
            obj.hitByBullet(i, '-')
        }
    })

}
i.makeMeAKiller = function () {
    var i = this
    cjs.tick(function () {
        i.killAllIAmHitting()
    })
    return this
}

i.tickX = function (func) {
    var i = this
    cjs.tick(function () {
        i.X(func())
    })
    return this
}
i.tickY = function (func) {
    var i = this
    cjs.tick(function () {
        i.Y(
            func()
        )
    })

    return this
}
i.tickX = function (fn) {
    var i = this
    cjs.t(function () {
        i.X(fn())
    })
    return i
}
i.tickY = function (fn) {
    var i = this
    cjs.t(function () {
        i.Y(fn())
    })
    return i
}
i.p = i.go = i.startMoving = function (x, y) {

    if (x) {
        this.vX(x)
    }
    if (y) {
        this.vY(y)
    }

    var i = this

    cjs.Ticker.on('tick', function () {
        i.X(i.X() + (i.vx || 0))
        i.Y(i.Y() + (i.vy || 0))
    })

    return this
}

i.move = function () {
    return this.X(this.vx || 0, '+').Y(this.vy || 0, '+')
}
i.accelerate = function () {
    return this.vX(this.ax || 0, '+').vY(this.ay || 0, '+')
}
i.jerk = function () {
    return this.aX(this.jx || 0, '+').aY(this.jy || 0, '+')
}
i.vX = function (a) {
    var g = G(arguments);
    a = g[0]

    if (g.p) {
        this.vx = this.vx + a;
        return this
    }

    else if (g.n) {
        if (N(a)) {
            this.vx = this.vx - a
        }

        else {
            this.vx = this.vx * -1
        }
        return this
    }
    else if (U(g[0])) {
        return this.vx
    }
    this.vx = a;
    return this
}
i.vY = function (a) {
    var g = G(arguments);
    a = g[0]
    if (g.p) {
        this.vy = this.vy + a;
        return this
    }
    else if (g.n) {
        if (N(a)) {
            this.vy = this.vy - a
        }
        else {
            this.vy = this.vy * -1
        }
        return this
    }
    else if (U(g[0])) {
        return this.vy
    }

    this.vy = a
    return this
}
i.vXY = function (x, y) {
    return this.vX(x).vY(y)
}
i.aX = function (a) {
    var g = G(arguments);
    a = g[0]

    if (g.p) {
        this.vx = this.vx + a;
        return this
    }

    else if (g.n) {
        if (N(a)) {
            this.vx = this.vx - a
        }

        else {
            this.vx = this.vx * -1
        }
        return this
    }
    else if (U(g[0])) {
        return this.vx
    }
    this.vx = a;
    return this
}
i.aY = function (a) {
    var g = G(arguments);
    a = g[0]
    if (g.p) {
        this.vy = this.vy + a;
        return this
    }
    else if (g.n) {
        if (N(a)) {
            this.vy = this.vy - a
        }
        else {
            this.vy = this.vy * -1
        }
        return this
    }
    else if (U(g[0])) {
        return this.vy
    }

    this.vy = a
    return this
}
i.jX = function (a) {
    var g = G(arguments);
    a = g[0]

    if (g.p) {
        this.vx = this.vx + a;
        return this
    }

    else if (g.n) {
        if (N(a)) {
            this.vx = this.vx - a
        }

        else {
            this.vx = this.vx * -1
        }
        return this
    }
    else if (U(g[0])) {
        return this.vx
    }
    this.vx = a;
    return this
}
i.jY = function (a) {
    var g = G(arguments);
    a = g[0]
    if (g.p) {
        this.vy = this.vy + a;
        return this
    }
    else if (g.n) {
        if (N(a)) {
            this.vy = this.vy - a
        }
        else {
            this.vy = this.vy * -1
        }
        return this
    }
    else if (U(g[0])) {
        return this.vy
    }
    this.vy = a
    return this
}
i.brake = function () {
    this.vx = this.vy = 0
}
i.toR = i.moveRight = function (num) {
    num = num || 20
    this.X(num, '+')
    return this
}
i.toL = i.moveLeft = function (num) {
    num = num || 20
    this.X(num, '-')
    return this
}
i.toU = i.moveDown = function (num) {
    num = num || 20
    this.Y(num, '-')
    return this
}
i.toD = i.moveDown = function (num) {
    num = num || 20

    this.Y(num, '+')
    return this
}


i.startMoving = function (x, y) {
    var i = this, vx, vy
    if (x) {
        i.vX(x)
    }
    if (y) {
        i.vY(y)
    }
    vx = i.vx || 0
    vy = i.vy || 0
    T.t(function () {
        i.X(vx, '+').Y(vy, '+')
    })
    return i
}
i.move = function () {
    return this.X(this.vx || 0, '+').Y(this.vy || 0, '+')
}
i.accelerate = function () {
    return this.vX(this.ax || 0, '+').vY(this.ay || 0, '+')
}
i.jerk = function () {
    return this.aX(this.jx || 0, '+').aY(this.jy || 0, '+')
}
i.vX = function (a) {
    var g = G(arguments);
    a = g[0]

    if (g.p) {
        this.vx = this.vx + a;
        return this
    }

    else if (g.n) {
        if (N(a)) {
            this.vx = this.vx - a
        }

        else {
            this.vx = this.vx * -1
        }
        return this
    }
    else if (U(g[0])) {
        return this.vx
    }
    this.vx = a;
    return this
}
i.vY = function (a) {
    var g = G(arguments);
    a = g[0]
    if (g.p) {
        this.vy = this.vy + a;
        return this
    }
    else if (g.n) {
        if (N(a)) {
            this.vy = this.vy - a
        }
        else {
            this.vy = this.vy * -1
        }
        return this
    }
    else if (U(g[0])) {
        return this.vy
    }

    this.vy = a
    return this
}
i.vXY = function (x, y) {
    return this.vX(x).vY(y)
}
i.aX = function (a) {
    var g = G(arguments);
    a = g[0]

    if (g.p) {
        this.vx = this.vx + a;
        return this
    }

    else if (g.n) {
        if (N(a)) {
            this.vx = this.vx - a
        }

        else {
            this.vx = this.vx * -1
        }
        return this
    }
    else if (U(g[0])) {
        return this.vx
    }
    this.vx = a;
    return this
}
i.aY = function (a) {
    var g = G(arguments);
    a = g[0]
    if (g.p) {
        this.vy = this.vy + a;
        return this
    }
    else if (g.n) {
        if (N(a)) {
            this.vy = this.vy - a
        }
        else {
            this.vy = this.vy * -1
        }
        return this
    }
    else if (U(g[0])) {
        return this.vy
    }

    this.vy = a
    return this
}
i.jX = function (a) {
    var g = G(arguments);
    a = g[0]

    if (g.p) {
        this.vx = this.vx + a;
        return this
    }

    else if (g.n) {
        if (N(a)) {
            this.vx = this.vx - a
        }

        else {
            this.vx = this.vx * -1
        }
        return this
    }
    else if (U(g[0])) {
        return this.vx
    }
    this.vx = a;
    return this
}
i.jY = function (a) {
    var g = G(arguments);
    a = g[0]
    if (g.p) {
        this.vy = this.vy + a;
        return this
    }
    else if (g.n) {
        if (N(a)) {
            this.vy = this.vy - a
        }
        else {
            this.vy = this.vy * -1
        }
        return this
    }
    else if (U(g[0])) {
        return this.vy
    }

    this.vy = a
    return this
}
i.brake = function () {
    this.vx = this.vy = 0
}




function eh(){
    ob.tx=ob.test=function(x,y){var ob=this
        if(cjs.isDisplayOb(x)){return ob.tx(this.gTL(x))}
        if(O(x)){y= x.y;x= x.x}
        return this.hitTest(  x,y    )
    }
    function move(){
        i.toR = i.moveRight = function (num) {
            num = num || 20
            this.X(num, '+')
            return this
        }
        i.toL = i.moveLeft = function (num) {
            num = num || 20
            this.X(num, '-')
            return this
        }
        i.toU = i.moveDown = function (num) {
            num = num || 20
            this.Y(num, '-')
            return this
        }
        i.toD = i.moveDown = function (num) {
            num = num || 20

            this.Y(num, '+')
            return this
        }
        i.keyControls = function (num) {
            var args = G(arguments), i = this
            if (args.P) {
                $.kD('left', function () {
                    i.toL(num)
                })
                $.kD('right', function () {
                    i.toR(num)
                })
            }
            if (args.N) {
                $.kD('up', function () {
                    i.toU(num)
                })
                $.kD('down', function () {
                    i.toD(num)
                })
            }
        }

    }
}