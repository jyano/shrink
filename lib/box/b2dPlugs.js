

b2d.cir=  function(r,x,y, d){//hmm.. fixt doesnt have a rel loc.. its shape does
    //what if u want to change 'shape' of shape, but keep its rel loc?
    var g= G(arguments), x=_.tN(g[1]), y=_.tN(g[2]), r= _.tN(g[0],50), d=_.tN(d,1), f, h
    f=new b2d.FixtureDef
    h = new b2d.CircleShape(r/30)
    h.SetLocalPosition(V(x,y).div())
    f.shape = h
    f.d(d)
    if(g.n){f.isSensor=true}
    return f
}

b2d.Common.Math.b2Transform.prototype.toArr = function () {

    var tf = this,
        pos = tf.position,
        R = tf.R,
        col1 = R.col1,
        col2 = R.col2


    return [pos.x, pos.y, col1.x, col1.y, col2.x, col2.y]
}
b2d.sD= b2d.S=b2d.stat=function(x,y){return b2d.bD(x,y).stat()}

b2d.kD= function(x,y){return b2d.bD(x,y).T(1)}

b2d.f= function(h){var g=G(arguments),
    f=new b2d.FixtureDef,
    h  // simply makes one fixt,
    // tries to set its shape
    // and returns it
    //you can pass in a pre-made shape
    //or..
    // if you pass it an array, it makes a polyH from it
    // from verts/arr (confirmed)
    // or if you passed in anything (number(s))
    // it makes a circle or poly shape, depending on how many numbers you passed
    if(b2d.isShape(g[0])){h=g[0]}

    /*
     else {
     h =   A(g[0])? b2d.pH.apply(b2d, g)
     :(g.l==1|| g.l==3)? b2d.cH.apply(b2d, g)
     :b2d.pH.apply(b2d, g)}
     */

    f.shape = h
    return f
}
b2d.iV = b2d.isV = function (v) {
    if (v) {
        return v.constructor.name == "b2Vec2"
    }
}
b2d.iH = b2d.isShape = function (h) {
    var typ
    if (O(h)) {

        typ = h.constructor.name
        return (typ == "b2PolygonShape") || (typ == "b2CircleShape") || (typ == "b2AShape")
    }
}
b2d.iBD = b2d.isBDef = function (bd) {
    return O(bd) && F(bd.b2BodyDef)
}
b2d.iB = b2d.isB = b2d.isBody = isBody = function (b) {
    if (O(b)) {
        return b.constructor.name == 'b2Body'
    }
}
b2d.iFD = b2d.isFD = b2d.isFixtDef = function (fD) {
    return O(fD) && fD.b2FixtureDef
}
b2d.iF = b2d.isFixt = function (f) {
    if (!f) {
        return false
    }
    return f.constructor.name == "b2Fixture"
}
b2d.tB = b2d.toBody = function (b) {
    return b2d.iB(b) ? b :
        b2d.iF(b) ? b.B() :
            0
}
b2d.oDef = function(o){o=o||{}
    o.x =  N(o.x,0)
    o.y =  N(o.y,0)
    o.a =  N(o.a,0)
    o.w =  N(o.w, 50)
    o.h =  N(o.h, 50)
    o.r =  N(o.r, 50)
    o.c = o.c || 'z'
    o.C = o.C || 'w'
    return o}
b2d.AHx=  b2d.AShapex= function(pam, p2){//dep .. use polyH
    var ag,arr,h
    ag=(p2)? arguments: pam
    arr = _.m(ag, function(v){return V(v).div()})
    h = b2d.pH()
    h.arr( arr )
    return h
}
b2d.fD=function(h){var g=G(arguments),
    fD= new b2d.FixtureDef()
    if(g.n){f.isSensor = true}
    if(h){fD.shape = h}
    return fD}
b2d.pH= function(W,H,x,y,a){var g=G(arguments),
    p=new b2d.PolygonShape()
//| 50,200[[,200,60,45
//| [20,300],.. //-> g.a(p,'arr')// -> g.a(p.arr)

    if(g.O){

    }

    if(g.N_){p.box(g.f, g.s, g.t, g[3], g[4])}
    else if(g.OO_){$a(p, 'arr', g)}
    return p
}

//makes a fixtDef with a polyShape
b2d.pol = function(){
    return b2d.fD($a(b2d.pH, arguments)).d(1).fr(.2).r(.2)
}
b2d.rec= function(){var g = G(arguments), r, fD, o, v,p=b2d.pH()
    if(g.OO_){p.arr(g)}  //b2d.cant make multiple recs at once anyway.. so this must mean VERTS!

    else {
        o=g.O?g.f:
        {w:g.f,h:g.s,x:g.t,y:g[3],a:g[4],d:g[5]}
        p.box(o)}

    fD=b2d.fD(p).d(N(o.d,.5))
    if (g.n){fD.isSensor = true}

    return fD

    /*
     //will set cols unless you pass in 0
     if(o.c==0){o.c=null}
     if(o.c==00){o.c=null;o.C=null}
     if(o.c=='*'){o.c=$r()}
     if(o.c=='**'){o.c=$r();o.C=$r()}
     o.c =o.c||'z'
     o.C =o.C||'w'
     o.l = _.tN(o.l,4)
     o.c1 = o.c1||'z'
     o.c2 = o.c2||'w'
     o.s1= _.tN(o.s1)
     o.s2= _.tN(o.s2,1)
     //
     o.x1 = _.tN(o.x1)
     o.y1 = _.tN(o.y1)
     o.x2 =_.tN(o.x2);
     o.y2 = N(o.y2)?o.y2:N(o.r)? o.r*2:100
     o.r1=_.tN(o.r1)
     o.r2=_.tN(o.r2,200)
     // o.i image
     //o.k kind
     // o.p  layer position


     //o.bm//o.bM
     //o.g gradient

     //o.m mass
     //o.t type
     // o.v = o.v || [] //verts
     //o.X
     //o.z clr
     */
}
//b.rec -> graphics
//

b2d.dD= b2d.D= b2d.dyn=function(x,y){
    var v=V(x,y)
    return b2d.bD(v.x, v.y).dyn()
}
b2d.bD= function(x,y){var v=V(x,y),
    bD = new b2BodyDef()
    return bD.XY(N(v.x,100),N(v.y,100))}

