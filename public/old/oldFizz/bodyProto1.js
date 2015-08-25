b2d.p()
bodyDef()
function bodyDef(){

    bD.T = bD.typ = bD.kind = function (type) {
        if (U(type)) {
            return this.type
        }
        this.type = type
        return this
    }
    bD.dyn = function () {return this.T(2)}
    bD.stat = function () {return this.T(0)}
    bD.kin = function () {return this.T(1)}
    bD.bul = bD.bull = bD.fR = function (iBu) {var bD=this
        if (U(iBu)) {
            return bD.bullet
        }
        bD.bullet = iBu;
        return bD}
    bD.lV = function (v) {var bD=this
        if(U(v)){return pD.linearVelocity}
        pD.linearVelocity = v
        return pD}
    bD.aV =   function (vel) {
        if (U(a)) {
            return this.angularVelocity
        }


        this.angularVelocity = vel
        return this}
    bD.lD = function (dm) {var bD=this
        if (U(dm)) {return bD.linearDamping}
        bD.linearDamping = dm
        return bD}
    bD.aD =   function (damp) {
        if (U(damp)) {
            return this.angularDamping
        }
        this.angularDamping = damp;
        return this
    }

    bD.rt= bD.rot = bD.ang = function (ang) {
        //The world angle of the body in radians.
//should fix
//use ang for box and rot for cjs?
        if (U(ang)) {
            return d.angle
        }
        this.angle = ang;
        return this
    }
    bD.fixedRot = bD.fR = function (isFixed) {
        if (U(isFixed)) {
            return this.fixedRotation
        }
        this.fixedRotation = isFixed;
        return this
    }

    bD.act = bD.setActive = function (isActive) {
        this.active = isActive ? true : false
        return this
    }

    bD.sleepy = bD.aS = function (canSleep) {
        this.allowSleep = canSleep ? true : false
        return this
    }
    bD.inertia = function (inertia) {
        if (U(inertia)) {
            return this.insertiaScale
        }
        this.insertiaScale = inertia;
        return this
    }

}

b.type = p.T = p.ty = p.t = function (a) {var b=this
    if (U(a)) {return b.GetType()}
    b.SetType(a)
    return b}

b.fs=b.e=function(fn){var b=this,
    fl=b.f(),
    g=G(arguments),
    fn = g[0],
    arr = []

    while (fl) { arr.push(fl); fl = fl.GetNext() }

    if(N(fn)){return arr[fn]}
    if(F(fn)){ _.e(arr, fn); return b }

    if(b2d.iB(fn)){

        b.fs(function(f){
            fn.pol(f)
        })

        return fn
    }

    return arr

    /*
     if (g.p) {//order by biggest
     arr = arr.sort(function (a, b) {return b.area() - a.area() }) }
     if (g.n) {//order by smallest
     arr = arr.sort(function (a, b) {return a.area() - b.area()}) }
     */

}
b.xx = b.kill =  b.destroy = function(){var b=this,

    v= b.pos()


    if(b.sprite){b.sprite.rm()}

    if(b.sp()){
        b.sp().rm()
    }

    b.fs(function(f){
        f.removeSprites()
        //if(f.sprite){f.sprite.remove()}

    })

    b.sprite=null
    b.SetActive(false)
    b.W().DestroyBody(b)

    return v
}
b.xF=  b.Xx=  b.Xf =b.E =  b.clr = b.empty = b.clear =    function (f) {
    if(f){this.DestroyFixture(f)}
    else {this.fs(
        function (f) {this.xF(f)  }
    )}
    return this
}

b.dyn = function (resumeVel) {var b=this
    b.type(2)
    if (resumeVel == b && O(b._linVel)) {b.lV(b._linVel)}
    b._linVel = null
    return b
}
b.fr=  b.fric = function (fr) {var b=this
    if(U(fr)){return b.f().GetFriction()}
    b.fs(function(f){
        f.SetFriction(fr)
    })
    return b
}
b.stat = function () {var b=this,
    v = b.lV()
//huh??? oh can get/set type of body
    b._linVel = V(v.x, v.y)
    b.type(0)
    return b

}
b.kin = function () {return this.type(1)}
b.DFR = b.DFB = function (d, f, r) {
    return this.den(d).fric(f).rest(r)
}
b.DBF = function (d, r, f) {
    var b = this
    b.den(d)

    if (N(r)) {

        this.rest(r)
    }

    if (N(f)) {
        b.fric(f)
    }

    return b
}
b.d=  b.den=function(d){var b=this

    if (U(d)) {
        return b.f().GetDensity()
    }

    b.fs(function(f){
        f.SetDensity(d)
    })

    b.ResetMassData()
    return b
}
b.sen=function(s){var b=this
    b.fs(function(f){
        f.sen(s)
    })
    return b}
b.r=  b.bo=b.rest=function(r){var b=this

    if (U(r)) {
        return b.f().GetRestitution()
    }

    b.fs(function (f) {
        f.SetRestitution(r)
    })

    return b


}





b.cir= function(){var b=this,g=G(arguments), o= g.f, fd,  h,  f

    //if passed array, it assumes it is arguments for ONE cir
    if(g.A){return b.cir.apply(b, g.f)}

    //if you pass at least two objects,
    // it makes multiple cirs and passes back b

    if(O(g.s)){
        g.e(function(c){b.cir(c)})
        return b }

    // can pass obj
    // can pass: c C [r] [x] [y]
    // can pass: c [r] [x] [y]
    // can pass: [r] [x] [y] [c] [C]
    o = g.O? g.f
        :S(g.s)?{c: g.f,C: g.s, r:g[2],x:g[3],y:g[4]}
        :S(g.f)?{c: g.f,r: g.s, x:g[2],y:g[3]}
        :{r: g.f,x: g.s,y:g[2],c:g[3],C:g[4]}

    o.x = N(o.x,0)
    o.y =  N(o.y,0)
    o.r =  N(o.r,40)
    o.b =  N(o.b,.5)
    o.f =  N(o.f,.5)
    o.al=  N(o.al, 1)
    o.s = D(o.s)? o.s: 0; if(g.n){o.s=1}
    o.d =  N(o.d,.5)

    fd = new b2d.FixtureDef
    fd.d(o.d).r(o.b).fr(o.f)
    fd.shape = new b2d.CircleShape(o.r/30)
    fd.shape.SetLocalPosition(V(o.x, o.y, '-'))
    fd.isSensor = o.s? true : g.n? true: false
    f = b.f(fd)
    f.K(o.k)
    if(o.c!=0){
        f.g = w.g.h().cir(o)
        f.bS(f.g)
    }
    return f

}







b.iD=function(){return this.GetType()==2}
b.iK=function(){return this.GetType()==1}
b.iS=function(){return this.GetType()==0}
b.X=function(x){var g=G(arguments),pos=this.XY()
    if(U(x=g[0])){return pos.x}
    this.XY(_.upd(pos.x,x,g),pos.y)
    return this}
b.Y=function(y){var b=this,
    g=G(arguments),
    pos=b.XY()

    if(g.u){return pos.y}

    this.XY(pos.x,
        _.upd(pos.y,y,g))
    return this
}
b.XY=function(x,y){var b=this,g=G(arguments),
    newPos,pos
    if(x==='*'){x =R(10) }
    if(y==='*'){y =R(10)   }

    if(g.u){
        pos = b.GetPosition()

        return pos.m().tF(0)

    } //used to parseInt.. necessary?

    if(b2d.iB(x)){
        y=x.Y()
        x=x.X()
    }

    y= N(y)?y:x

    newPos= V( x/30, y/30 )
    this.SetPosition(newPos)
    return this
}
b.mid=function(){var b=this,w= b.W()
    return   b.XY(w.w/2, w.h/2)
}


b.aV=b.angVel= function(vel){
    if(U(vel)){return this.GetAngularVelocity() }
    this.SetAngularVelocity(vel)
    return this
}
b.lV= function(){var b=this,g=G(arguments),
    v=b.GetLinearVelocity(), o,lV
    // can pass in V | x,y
    // or if u pass JUST x, it will set ONLY x, keeping y UNTOUCHED
    //(same as vX) .. but why? eh.. can be better, if u already hav vX, no need to default to it
    if(g.u){return v}
    lV=U(g[1])?V(g[0],v.y):V(g[0],g[1])
    b.SetLinearVelocity( lV )
    return b.wakeUp()
}


b.vX=function(x){var b=this,g=G(arguments),
    v= b.lV()
    if(g.u){return v.x}
    b.lV(x, v.y)
    return b}
b.vY=function(y){var b=this
    if(U(y)){return b.lV().y}
    return b.lV(b.lV().x,y)}
b.lD = b.linDamp=  function(damp){
    if(U(damp)){return this.GetLinearDamping()}
    this.SetLinearDamping(damp)
    return this}
b.aD= b.angDamp=function(){
    var b=this,g=G(arguments),
        d=g[0]
    if(U(d)){return b.GetAngularDamping()}
    if(d=='++'){d=10000}
    b.SetAngularDamping(d)
    return b
}
b.damp=function(l,a){
    l=N(l)?l:1000
    a=N(a)?a:l
    this.lD(l).aD(a)
    return this}
b.rt=b.rot =function(angle,ms){var b=this,g=G(arguments),r=g[0],ms=g[1],
    a=Math.toDegrees(b.GetAngle()) //currAng
    if(U(r)){return a}
    if(N(ms)){b.stop= I(function(){b.rot(r,'+')}, ms)}
    else {b.SetAngle(M.toRadians(g.p?a+r:g.n?a-r:g.m?a*r:g.d?a/r:r))}
    return b}
b.fixedRot= p.sFR= p.fR=function(bool){
    this.SetFixedRotation(bool? true: false)
    return this}
b.fR=b.fixRot=function(){ return this.fixedRot(true) }
b.FR=function(){ return this.fixedRot(false) }
f.rot=function(rot, g){ return this.B().rot(rot, g) }

b.wake = b.wakeUp=function(){
    this.SetAwake(true); return this}
b.awake= function(){
    var g=G(arguments)
    this.SetAwake(g.n? false:true)
    return this}
b.sleep=function(){
    this.SetAwake(false); return this}
b.W= function(){return this.GetWorld()}
b.I= function me(i, v, v2){ var b=this, g=G(arguments),o
    //apply impulse. pass impulse as two nums, or obj //and pass in location, defaults to body center
    if(g.A){return b.I.apply(b,g.f)}
    o= N(g.s)?{i:V(g.f, g.s),v: g.t} :{i: g.f,v: g.s}
    o.i=  o.i || b.v().d(40)
    o.v=  o.v || b.wC()
    b.ApplyImpulse(o.i,  o.v.div())
    return b
}
b.wC=   function(){var b=this,w=b.W(),g=G(arguments)
    //gives {x,y}, but of its CENTER-OF-MASS
    if(g.p){return b.XY(w.hW, w.hH) }
    return b.GetWorldCenter().m()
}
b.lC=   function(){var b=this,w=b.W(),g=G(arguments)
    //gives {x,y}, but of its CENTER-OF-MASS
    if(g.p){return b.XY(w.hW, w.hH) }
    return b.GetLocalCenter().m()
}
b.F=  function(){
    //apply force. pass impulse as two nums, or obj
// and pass in location, defaults to body center
    var b=this, g=G(arguments),o
    o= N(g[1])? {f:V(g[0],g[1]), wP:g[2]  }
        : {f:V(g[0]), wP:g[1] }
    o.wP=o.wP||b.wC()
    b.ApplyForce(o.f, o.wP)
    if(g.p){cjs.t(function(){  b.ApplyForce(o.f, o.wP) })}
    return b
}
b.mass = function(m){
    if( U(m) ){  return ( this.GetMass() * 900 ) / 100 }
}
b.n=  b.num = b.count = function () {
    return this.m_fixtureCount
}
b.N=  b.next =  b.gN =function(){ return  this.GetNext()   }
b.tf =b.transform=function(tf){var b=this
    if(U(tf)){return b.GetTransform() }
    b.SetTransform(tf)
    return b}

b.rad = function () {
    return this.f().rad()
}
b.H = function () {
    return this.f().H()
}
b.pol = function () {
    var b = this, w = b.W(), g = G(arguments), fs, n, arr, o, vs

    b2d.mini()

    //-> {c:'r', v:[[],[],[]]} //pass in {c:'r', v:[[],[],[]]} //pass in [[],[],[]] //pass in ['r',[],[],[]]
    // b.fs(function(f){b1.pol(f.rV())})//g[0].ps(function(v){b.pol(v)})// else {_.e(g[0], function(v){b.pol(v)})}

    if (g.u) {
        return b
    }

    if (iP(g.f) && U(g.s)) {
        return b.pol({v: g.f})
    }

    if (S(g.f) && iP(g.s) && U(g.t)) {

        return b.pol({c: g.f, v: g.s})
    }

    if (iF(g.f)) {
        g.f = g.f.rV()
    }
    else if (iB(g.f)) {
        g.f.fs(b);
        return b
    }
    if (g.A) {
        o = S(g.f[0]) ?
        {c: g.f[0], v: _.r(g.f)} :
        {v: g.f}
    }
    else {
        o = g.O ? g.f :
            g.S_ ?
                (g.t ?
                {c: g.f, v: g.r} :
                {c: g.f, v: g.s}) :
            {v: g}
    }

    o = df.h(o)
    if (iP(o.v)) {
        o.v = o.v.vs()
    }
    n = b.n()
    if (O(o.v[0][0])) {
        _.e(o.v, function (v) {
            b2d.sep(b, v)
        })
    }

    //pass in 2 or more objs->
    else {
        b2d.sep(b, o.v);
        o.v = [o.v]
    }

    //pass in one object
    //->  ['r', [],[],[] ]//->  [[],[],[]]
    //pass in color and loose verts//->'r',[],[],[]//->  'r', [[],[],[]]
    //just pass in loose verts//-> [],[],[]
    //same two as above but also nested in wrapper array.. so just ONE pam
    //if (o.X) {b.clear()}
    //the NEW fixts
    fs = _.f(b.fs(), b.n() - n) //each of only the NEW fixts
    _.e(fs, function (f) {
        f.d(o.d).r(o.b).fr(o.f)
        if (o.s) {
            f.m_isSensor = o.s ? true : false
            f.sen(1)
        }
        f.K(o.k)
        f.C(o.c, o.C, o.l)
        if (o.lf) {
            f.bS(w.s.h().lf(o).lt(o.v))
        }
        if (o.rf) {
            f.bS(w.s.h().rf(o).lt(o.v))
        }
    })

    o.i = o.i || o.bf
    if (o.i) {
        h = w.g.h()
        h.bV(o)
        b.bS(h)
    }

    //b.cir('y', 10);b.cir('z', 6)
    return fs.length > 1 ? fs : fs[0]
}
b.C = function (c) {
    this.fs(function (f) {
        f.C(c)
    })
    this._col = c
    return this
}
b.St = b.S = b.stg = function () {
    return this.W().s
}
b.horizCenter = function () {
    var b = this
    //-> b.X('hC')
    b.X(b.W().hW)
    return b
} //b.g=function(){ return this.f().g }
b.rec = function (c, W, H, x, y, a) {
    var b = this, w = b.W(), g = G(arguments, 'k'),
        o, fD, p, f

    if (g.OO_) {
        g.e(function (g) {
            b.rec(g)
        });
        return b
    }
    if (g.A) {
        return $a(b, 'rec', g)
    }
    if (g.O) {
        o = g.f
    }
    else {
        if (N(g.f)) {
            g.ush('z')
        }

        o = {c: g[0], w: g[1], h: g[2], x: g[3], y: g[4], a: g[5]}

    }

    b2d.oDef(o)
    o.k = o.k || g.k
    fD = b2d.fD(b2d.pH().box(o))
    if (o.s || g.n) {
        fD.isSensor = true;
        o.al = N(o.al, 0.8)
    }

    fD.d(o.d || .5)
    f = b.f(fD)
    f.K(o)

    if (o.c !== 0) {
        // f.g=w.g.h().rec(o)
        if (g.p) {
            f.g = w.g.h().rec(o)
        }//  f.g= w.g.h().rec(o) //this for but: (does something important)
        else {
            f.g = w.g.rec(o)//(o.w, o.h, o.c, o.C, o.l)
            f.bS(f.g)
        }  //,  o.a, o.x, o.y, o.al  //<-this for bike (does rotation)
        // f.bS(f.g)
    }
    return f

}
b.$h = function () {
    var h = $H()
    this.bS(h)

    h.c.apply(h, G(arguments))
    return h
}


sprites()

function sprites(){



    b.bS=function(){var b = this, w = b.W(), g = G(arguments), o,


        i, a, sc


        //pass it a display object (which i guess implies its already loaded)
        o = cjs.iDO(g.f) ? {i:g.f, bm:g.f} :



//  they can pass their own data object

            g.O ? g.f :



                // or they can use a short cut call:
            {


                i: g.f || 'me', sc: g.s, x: g.t, y: g[3], rt: g[4], al: g[5]

            }


        //if not loaded, async loads and passes it back as a data object
        //next time, then, when loaded it can bypass async

        if (S(o.i)){
            w.g.bm(o.i, function(bm){
                b.bS( _.x(o, {i:bm, bm:bm }) )
            })
            return this
        }

        //defaults
        o.sc = N(o.sc, ( cjs.iH(o.i) ? 1 : .4 )); if (!A(o.sc)) {o.sc = [o.sc, o.sc]};
        o.x = N(o.x, 0);
        o.y = N(o.y, 0)
        o.rt = N(o.rt, 0);
        o.al=N(o.al,1)

        //they can pass in a formed shapeer
        if ( !g.n && !cjs.iH(o.bm) && !cjs.iCt(o.bm) ) {o.bm.rC() }//regCent

        //can not center things that dont have dimensions!//scale, position and place the bm in the ct (which is on the stage)
        this.gx = this.gx || w.g.ct()
        o.bm.sXY(o.sc).XY(o.x, o.y).rt(o.rt).al(o.al).a2(this.gx)
        return this
    }



    b.Bm=function(iS,x,y,sX,sY,rt){
        var b=this,w= b.W(),g=G(arguments); b.gx = b.gx || w.g.ct()
        if(S(iS)){ this.gx.bm(iS, fn) }
        if(O(iS)){fn(iS);return iS}
        return b
        function fn(bm) {
            bm.rC().XY(N(x,0),N(y,0))
                .sXY(N(sX,1), N(sY,sX||1))
                .rt(N(rt,0))
        }

    }

    b.Sp=function(spO,x,y,sX,sY,rt){var sp
        this.gx = this.gx || w.g.ct()
        this.gx.A(sp = $Sp(spO||Mummy) )
        sp.rC()
            .XY(
            N(x,0),
            N(y,0))
            .sXY(N(sX,1), N(sY, (sX||1)))
            .rt(N(rt,0))

        return sp
    }

    b.sp = function() {var b = this, g = G(arguments), ch

        if (b.gx && b.gx.children) {
            ch = g.p ? b.gx.children : g.n ? b.gx.children[0] : _.l(b.gx.children)
            if (g.u) {return  ch}
            if(g.F_){ _.e(ch, g.f); return this }
        }
    }


}