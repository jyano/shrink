b2d.p()

fixtDef()
function fixtDef(){

    fD.D = fD.data = function (data) {
        if (U(data)) {return this.userData}
        this.userData = data;
        return this
    }



    fD.fr= fD.f= fD.frc = fD.fric = function (f) {var fD=this
        if (U(f)) {
            return this.friction
        }
        fD.friction = f
        return fD
    }
    fD.H =   function (h) {
        if (U(h)) {return this.shape}
        this.shape = h
        return this}
    fD.vrt = fD.verts = function () {

        var shape = this.shape,

            verts = shape.m_vertices,

            verts = [
                verts[0].mult(),
                verts[1].mult(),
                verts[2].mult(),
                verts[3].mult()]

        return $l(verts)
    }
    fD.box = fD.sAB = function (a, b, p, A) {
        if (!p) {
            this.shape.SetAsBox(a / 30, b / 30)
        }
        else {
            this.shape.SetAsOrientedBox(a / 30, b / 30, p, A)
        }
        return this
    }
    fD.d= fD.den =  function (d) {var fD=this
        if (U(d)) {return fD.density}
        fD.density=d; return fD}
    fD.sen= fD.sensor = fD.iS = function (isSensor) {
        if (U(isSensor)) {
            return this.isSensor
        }
        this.isSensor = isSensor ? true : false
        return this
    }
    fD.r=  fD.bo= fD.rst=fD.rest=function(r){var fD=this
        if(U(r)){return fD.restitution}
        fD.restitution=r; return fD
    }
}


f.d=  f.den=function(den){if(U(den)){return this.GetDensity()}
    this.SetDensity(den)
    this.body().ResetMassData()
    return this}
f.B= f.body=function(){return this.GetBody()}
f.kin=function(){var b=this.B(); b.kin.apply(b, arguments); return this}
//f.getType = f.gT = function(someType){var b=this.B(), t=b.GetType(); return  D(someType)?(someType==t):t}
f.fr=f.f=  f.fric=function(fric){if(U(fric)){return this.GetFriction()}
    this.SetFriction(fric);return this}
f.r=  f.bo=  f.rest=  function(rest){if(U(rest)){return this.GetRestitution()}
    this.SetRestitution(rest);return this}
f.sen =  function(s){var f=this
    if(U(s)){return f.IsSensor()}
    if(s=='/'){s= f.SetSensor(!f.IsSensor() )}
    else{f.SetSensor( s?true:false)}
    return f
}
f.dyn=function(){var b=this.B(); b.dyn.apply(b,arguments); return this}
f.isBType = f.isType = function(t){var f=this
    if(t){return f.bType()==t}}
f.bType=function(){
    return this.B().GetType()
}

f.stat=function(){var b=this.B(); b.stat.apply(b,arguments); return this}
f.xx=  f.kill=f.remove=function() {
    if (this) {this.removeSprites()

        if (this.B()) {
            this.B().xF(this)
        }
    }
}
//f.setRemove = function(){var f=this; setTimeout(function(){f.B().destroyFixt(f)},10)} //can combine with kill?
//f.setDestroy=function(){this.B().K('destroy'); return this}
f.xB= f.xX= f.XX=  function(){if(this && this.B()){ this.B().xx() }}

f.xSp= f.Xx=  f.removeSprites=function(){var f=this
    this._sp = this._sp || []
    this.SP = this.SP || []
    this.sprites = this.sprites||[]

    _.e(f.sprites, function(s){if(O(s) && s.parent ){s.remove()}})

    this.sprites=[]
    this_sp=[]
    this.SP=[]
    return f
}


f.iS=function(){return this.B().iS()}
f.iD=function(){return this.B().iD()}
f.iK=function(){return this.B().iK()}
f.rad = function(){return this.H().m_radius*30}
f.H=  function(h){ //should let user specify dimensions of shape, // not just have to pass formed shape in
    if(U(h)) {return this.GetShape()}
    this.m_shape = h
    // it DOES WORK! // but is this much different than // just replacing the fixt?
    return this}
f.W= function(){return this.B().W()}
f.iC = function () {
    return this.H() && this.H().m_type == 0
}
f.hT = f.hType = function () {
    return this.H().m_type
}
f.pos = function () {// for circs
    return V(
        this.H().m_p.x * 30,
        this.H().m_p.y * 30
    )
}
f.N=  f.next=function(){return this.GetNext()}
f.pX=function(){return this.pos().x}
f.pY=function(){return this.pos().y}
f.cen=  f.mid= f.cent=f.center=function(){
    //center point of its BOUNDING BOX
    var f=this,b= f.B(),w= b.W(), g=G(arguments),
        bd=f.GetAABB(),
        v=M.lC(bd.lowerBound, bd.upperBound).mult()
    if(g.p){w.dot(v)}
    return  v
}
f.lV=function(){var f=this,
    b=f.B(),
    g=G(arguments)

    b.lV.apply(b, g)

    return f
}
f.C = function () {
    var f = this, b = f.B(), w = b.W(), g = G(arguments), o,
        h
    o = g.O ? g.f :
    {c: g.f, C: g.s, l: g[2]}
    o.c = (o.c == '*') ? $r() : (o.c || 'b')
    o.C = o.C || o.c
    f.removeSprites()

    h = f.iC() ?
        // if circle?
        w.s.h().cir(f.pX(), f.pY(), f.rad(), o.c, o.C, o.l) :
        // if poly
        w.s.h().pol(f.rV(), o.c, o.C, o.l)

    f.bS(h)
    b.i = h
    return f
}
f.bS = function () {
    var f = this, b = f.B(), w = b.W(), s = f.S(), g = G(arguments), o, j

    if (g.S_) {
        Q(function () {
            var bm = Q.b(g.f)
            f.bS(
                $Ct().A(
                    bm.XY(f.pos().x, f.pos().y).rC())
            )
        })
        return f
    }

    o = cjs.iDO(g.f) ?

    {j: g.f, rt: g.s, x: g.t, y: g[3], o: g[4]} : g.O ? g.f : {}

    f.sprites = f.sprites || []

    o.x = N(o.x, 0)
    o.y = N(o.y, 0)
    o.rt = N(o.rt, 0)
    o.o = N(o.o, 1)

    o.al = N(o.al, 1)
    j = o.j.al(o.al)
    w.g.A(j)
    f.sprites.push(j)

    T.t(function () {

        j.XY(b.X() + o.x, b.Y() + o.y)
        j.rt(b.rt() + o.rt)

    })
    return f
}
f.S = f.stg = function () {
    return this.W().s
}


sprites()

function sprites(){


    f.bI=function(){
        var f = this,
            b= f.B(),
            w = b.W(),
            g = G(arguments), o
        this.gx = this.gx || w.g.ct()
        o = cjs.iDO(g.f) ? {i:g.f } :
            g.O ? g.f :
            {i: g.f || 'me', sc: g.s, x: g.t, y: g[3], rt: g[4], al: g[5]}
        if (S(o.i)){
            o.i = Q.b(o.i)
        }
        o.sc = N(o.sc, ( cjs.iH(o.i) ? 1 : .4 ));if (!A(o.sc)) {o.sc = [o.sc, o.sc]}
        o.x = N(o.x, 0); o.y = N(o.y, 0)
        o.rt = N(o.rt, 0)
        o.al= N(o.al,1)
        if ( !g.n && !cjs.iH(o.i) && !cjs.iCt(o.i) ) {o.i.rC() }
        this.gx.A(o.i.sXY(o.sc).XY(o.x, o.y).rt(o.rt).al(o.al))
        return this

    }

}