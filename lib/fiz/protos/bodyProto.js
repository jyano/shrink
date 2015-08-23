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
    bD.XY= bD.p = bD.ps = bD.xy= function (x, y) {var bD=this, g = G(arguments),p
        if(g.u){return bD.position.m()}
        p=V(g.f, g.s, '-')
        bD.position.Set(p.x,p.y)
        return bD}
    bD.X = function (x) {var bD=this, p = bD.XY()
        if(U(x)){return p.x}
        return bD.XY(x,p.y)}
    bD.Y = function (y) {var bD=this, p = bD.XY()
        if (U(y)) {return p.y}
        return bD.XY(p.x, y)}

}



b.ap=function(met,g){var b=this;return   b[met].apply(b,g)}


b._f= function(f,c){var b=this,g=G(arguments)
    if(g.u){return b.GetFixtureList()}
    f=b.CreateFixture(f)
    if(c){f.C(c)}
    return f}
b.f=function(){var b=this,g=G(arguments), o,
    ag=g[0],
    l= g.L,
    FD=b2d.iFD
    if(g.u){return b._f()}
    if(g.S_){l--}
    if(g._S){l--}

    if(g.A){g.e0(function(gg){b.ap('f', g.G(gg))})}//   [ [],[],fD,4,[] ]

    else if(g.SA){
        g.e1(function(f){//       'c',  [ [.,.],[.,.],fD ]
            if(FD(f)){b._f(f, g.f)}
            else {
                if(!S(_.f(f))){f.unshift(g.f)}
                if(FD(f[1])){b._f(f[1],f[0])}
                else { $a(b,'f',f) }}})}

    else if (FD(g.f)){return b._f(g[0])}//(fD)
    else if (g.S_ && FD(g.s)){ b._f(g[1], g[0]) }//('c', fD)

    else if(O(g.s)){
        o=g.S_?{c:g.f,v:g.r}:{v:g}//if (g.n) {o.s=1}
        b.pol(o)
        if(g.n){b.sen(1)}}//pol

    else if(l==1||l==3){
        o={c:g[0], r:g[1], x:g[2], y:g[3]}
        if(g.n){o.s=1}
        b.cir(o)}

    else {
        o={c:g[0], w:g[1],  h:g[2], x:g[3], y:g[4], a:g[5]}
        if(g.n){o.s=1}
        b.rec(o).C(o.c)
        // $a(b,'rec', g.g)
    }
    return b.d(1)
}

b._r=function(n){
    n=N(n,100)
    h = this.f().H()
    if (h.SetRadius) h.SetRadius(n/30)

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
b.rad = function () {return this.f().rad()}
b.H = function () {return this.f().H()}

b.C = function (c) {this.fs(function (f) {f.C(c)
    })
    this._col = c
    return this
}

b.horizCenter = function(){
    var b = this
    //-> b.X('hC')
    b.X(b.W().hW)
    return b
} //b.g=function(){ return this.f().g }




