b2d.p(); b2d.mini()  // http://stackoverflow.com/questions/19342932/box2d-collision-impact-calculation //i think this is your rotation direction?// the way you appear to be pointing on the screen
cx.c = cx.cont = cx.continuous = cx.iC = function () {
    var cx = this
    return cx.IsContinuous()
} //Does this contact generate TOI events for continuous simulation
cx.iS = cx.s = cx.sen = function () {
    var cx = this, g = G(arguments)
    if (g.u) {
        return cx.IsSensor()
    }
    cx.SetSensor(g.f ? true : false)

    return cx

}
cx.iT = cx.tch = cx.touching = cx.iT = function () {
    return this.IsTouching()
}
cx.N = function () {return this.GetNext()}
cx.ty = cx.T = function () {return this.GetManifold().m_type}
cx.A=function(){return this.GetFixtureA()}; cx.B=function(){return this.GetFixtureB()}
cx.a=function(){return this.A().B()}; cx.b=function(){return this.B().B()} //cx.pt1=cx.XY= cx.cen=cx.V=function(){return this.m().m_points[1].m() }
//cx.p1X= function(){return parseInt(this.pt1().x)}
//cx.p1Y= function(){return parseInt(this.pt1().y)}
//cx.X=function(){return this.XY().x} //cx.Y=function(){return this.XY().y}
cx.w=function(){
    var cx = this, g = G(arguments)
    // (k/o)  : (k/o,  fn)  //  (k/o,  k1/o)  :   (k/o,k1/o, fn)
    //if you have a second pam,, but its not a function
    cx.ic = function () {
        var cx = this, g = G(arguments)
        /* protosig
         //     str    :  str,fn   :   obj   :   obj,fn

         w.b(function(cx){
         cx.ic(fisherman1, function(fish){this.eat(fish.B( ))  })
         var oneWasFisherman1 = cx.ic(fisherman1); if(oneWasFisherman1){$l('the fish is: '+Fisherman1[1])}
         cx.ic('fish', function(fisherman){  this.swimTo( fisherman.B( ))  })
         var oneWasFish = cx.ic('fish'); if(oneWasFish){$l('the fish is: '+oneWasFish[0])}
         })
         */
        if (F(g.s)) {
            if (cx.A().of(g.f)) {
                _.b(g.s, cx.A())(cx.B(), cx)
            }
            else if (cx.B().of(g.f)) {
                _.b(g.s, cx.B())(cx.A(), cx)
            }
            return cx
        }

        //if this fixture 'of' that string(kind),fixt,or body
        //if so always passed back an array with the first mentioned selector in the [0] pos
        return cx.A().of(g.f) ? [cx.A(), cx.B()] :
            cx.B().of(g.f) ? [cx.B(), cx.A()] :
                false
        //if fixA is 'of' k, then run fn with fixA as 'this' and pass in fixB, cx

    }
    cx.bw = function () {
        var cx = this,
            g = G(arguments),
        // bw(k,k1)  or  bw(k,k1,fn)

            a = cx.A(), b = cx.B()


        if (F(g.t)) {
            if (a.of(g.f) && b.of(g.s)) {
                g.t.apply(a, [b, cx])
            }
            else if (b.of(g.f) && a.of(g.s)) {
                g.t.apply(b, [a, cx])
            }
            return cx
        }

        return cx.A().of(g.f) && cx.B().of(g.s) ? [cx.A(), cx.B(), cx] : cx.B().of(g.f) && cx.A().of(g.s) ? [cx.B(), cx.A(), cx] : false
    }
    return g.s && !F(g.s) ?
        cx.bw(g.f, g.s, g.t) :
        cx.ic(g.f, g.s)
}// ALL 4 cx handlers give cx (can get points(pt) and normal(n))
cx.m=function(){
    var cx = this, m = new b2d.Collision.b2WorldManifold
    cx.GetWorldManifold(m);
    return m
}
cx.pX=function(){
    return parseInt(this.m().m_points[0].m().x)
}
cx.pY=function(){
    return parseInt(this.m().m_points[0].m().y)
}
cx.pt=cx.cen=function () {
    return V(this.pX(), this.pY())
}
cx.lP=function(b){
    return b.lP(this.pX(), this.pY())
}
cx.n=function(n){
    return this.m().m_normal.toFixed(2).m(N(n, 1))
}
cx.nX=function(n){
    return this.n(n).x
}
cx.nY=function(n){
    return this.n(n).y
}
cx.t=function(){
}//what about tangent?
//presolve
cx.e=cx.en = function (a) {
    var cx = this
    if (U(a)) {
        return cx.IsEnabled()
    }
    cx.SetEnabled(a ? true : false);
    return cx
}



b.pre=function(){
    var b = this, w = b.W(), g = G(arguments)
    w.pre(function(cx){
        cx.w(b, g.f, g.s, g.t)
    })
}

b.cl = function () {
    var b = this, w = b.W(), g = G(arguments), o

    // if body collides with ANYTHING
    // if body collides with body/fixt of specific kind
    // if body collides with specific body
    // if body collides with specific fixt
    // but always pass fixt into the cb

    if (F(g.f) && F(g.s)) {
        this.cl(g.f)
        w.end(this, g.s)
        return this
    }

    if (g.F_) {
        o = {fn: g.f, k: ''}
    }

    else {
        o = {k: g.f, fn: g.s}
    }


    w.b(function (cx) {

        var fA = cx.A(),
            fB = cx.B()


        if (b.of(cx.a()) && fB.of(o.k)
        ) {


            if (o.fn) {
                _.b(o.fn, fA)(fB, cx);
                return w
            }
            return [fA, fB, cx]

        }


        else if (b.of(cx.b()) && fA.of(o.k)) {

            if (o.fn) {
                _.b(o.fn, fB)(fA, cx);
                return w
            }

            return [fB, fA, cx]
        }


    })
    return b
}
b.sr = b.sen = function () {
    var b = this, f = b.f(), g = G(arguments)
    if (g.d) {return b.sen(!b.sen())}//b.sen('/')->toggle sen
    if (U(g[0])) {return f.m_isSensor}
    f.m_isSensor = g[0] ? true : false
    return b
}
b.wl = function (k, fn) {
    var b = this, w = b.W()
    w.wl(b, k, fn)
    return b
}
b.wn = function (k, oB, oE) {
    var b = this,
        w = b.W()
    w.wn(b, k, oB, oE)
    return b
}
//my: to specify a sp body on what to do when one of its own fixts of a certain k has a col
b.my = function (k, fn) {
    var b = this, w = b.W()

    if (F(fn)) {
        w.b(function (cx) {
            cx.w(b,
                function (f) {
                    if (this.of(k)) {
                        _.b(fn, this)(f, cx)
                    }
                })
        })
    }

    else {
        w.wn(b,
            function () {
                b.my[k] = 1
            },
            function () {
                b.my[k] = 0
            })
    }

    return b
}

w.cxFl=w.sCF=function(){var w=this, g=G(arguments)
    w.SetContactFilter.apply(w,g)
}

w.cl=function(){
    var w = this, g = G(arguments)
    if (g.F) {w.b(function (cx) {_.b(g.f, cx.A())(cx.B(), cx)})}
    else {
        w.b(function (cx) {
            cx.w(g[0], g[1], g[2])
        })
    }
    return w
}
w.b = w.beg = function () {
    var w = this, g = G(arguments), o, fn

    if (g.u) {
        return this.GetBodyList()
    }
    //ADDS one or more handlers to beginHandlers array
    //most common use, usually just need one func.
    // would i ever need more?lVWs
    //it just puts each item into bH arr
    fn = F(g.t) ? function (cx) {
        if (cx.w(g.f, g.s)) {
            g.t(cx)
        }
    } :
        F(g.s) ? function (cx) {
            if (cx.w(g.f)) {
                g.s(cx)
            }
        } :
            g.f

    //fn=$.mo(.2,fn)

    w.bH.push(fn)

    return w
}
w.end = function () {
    var w = this, g = G(arguments)

    if (g.F_) {
        g.e(function (fn) {
            w.eH.push(fn)
        })
    }

    else if (F(g.s)) {
        w.eH.push(function (cx) {
            cx.w(g.f, g.s)
        })
    }

    else if (F(g.t)) {
        w.eH.push(function (cx) {
            cx.w(g.f, g.s, g.t)
        })
    }

    return w
}
w.pre = function (fn) {
    var w = this, g = G(arguments)

    //fn = $.mo(.2,fn )

    w.pH.push(fn)

    return w
}
w.pre = function () {
    var w = this, g = G(arguments), o, fn


    if (F(g.t)) {
        fn = function (cx, i) {
            if (cx.w(g.f, g.s)) {
                g.t(cx)
            }
        }
    }

    else if (F(g.s)) {
        fn = function (cx, i) {
            cx.w(g.f, function (f) {
                _.b(g.s, this)(f, cx, i)
            })
        } //this good
    }

    else {
        fn = g.f
    }

    //fn=_.mo(.2,fn) //this will break it!!

    w.pH.push(fn)
    return w
}
w.po = w.post = function () {
    var w = this, g = G(arguments)


    g.e(function (fn) {


        w.PH.push(
            function (cx, I) {
                var i = _.m(I.normalImpulses, M.fl)[0],
                    t = _.m(I.tangentImpulses, M.fl)[0]
                return fn(
                    cx, i, t)


            })


    })

    return w

}
w.wn=function(){var w=this, g=G(arguments),o


    o = F(g[0]) ? {b:g[0],e:g[1]}
        : F(g[1]) ? {k:g[0],b:g[1],e:g[2]}
        : {k:g[0], k2:g[1], b:g[2], e:g[3]}

    //when b,[e]  k,b,[e]  k,k2,b,[e]

    if(o.k2){
        w.b(o.k, o.k2, o.b);
        if(o.e){w.end(o.k,o.k2,o.e)}
    }

    else if(o.k){

        w.b(o.k, o.b); if(o.e){w.end(o.k,o.e)}
    }
    else {
        w.b(o.b); if(o.e){w.end(o.e)}}
    return w

}
w.wl=function (k, k2, fn) {var w = this, push


    if (F(fn)) {

        w.wn(k, k2,
            function() {push = true},
            function () {push = false})

        z(function () {if (push) {fn()}})
    }


    else if (F(k2)) {

        w.wn(k,   function() {push = true}, function () {push = false});
        z(function () {if (push) {k2()}})
    }




    return w



}

f.cl=function(k,fn){var f=this
    //ultimate func for FIXTURE COLL
// you can specify what happens when a fixture hits:
//ANYTHING
// body/fixt of certain kind
// specific fixt
// specific body
//but it its callback ALWAYS passed back the other fixt that was actually hit
// and 'this' is set to THIS fixt within the cb
//should cover class AND fixt AND body cases!!!
    if(F(k)){ fn=k; k='' }
    fn = _.b(fn,f)
    w.b(function(cx){var fA=cx.A(), fB=cx.B()
        if(f.of(fA) && fB.of(k)){fn(fB, cx)}
        if(f.of(fB) && fA.of(k)){fn(fA, cx)}})
    return f}


b.lP = function (x, y) {
        return this.GetLocalPoint(V(x, y, '-')).m()
    }
b.lVW = function(){
        var b = this, g = G(arguments);
        return b.GetLinearVelocityFromWorldPoint(V(g.f, g.s))
    }   // return  b.GetLinearVelocityFromWorldPoint(V(g.f, g.s).d()).m()
b.lVL=function(v,y){
        v = V(v, y)
        return this.GetLinearVelocityFromLocalPoint(v.div())
            .mult().dec(2)

    }

