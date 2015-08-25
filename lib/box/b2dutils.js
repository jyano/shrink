
b2d = b2 = Box2D
shortcuts()

b2d.p= function(){
    aCo = b2d.Dynamics.Controllers.b2ConstantAccelController.prototype
    b=b2d.Body.prototype
    bCo = b2d.Dynamics.Controllers.b2BuoyancyController.prototype//bCo = b2d.BuoyancyController= b2d.Dynamics.Controllers.b2BuoyancyController
    bD= b2.Dynamics.b2BodyDef.prototype

    cx = b2d.Dynamics.Contacts.b2Contact.prototype
    cxI = b2d.Dynamics.b2ContactImpulse.prototype
    ct=cjs.Container.prototype
    co = b2d.Dynamics.Controllers.b2Controller.prototype
    c= HTMLCanvasElement.prototype

    dd= b2d.Dynamics.b2DebugDraw.prototype
    dJD=  b2d.Joints.b2DistanceJointDef.prototype
    dJ=   b2d.Joints.b2Joint.prototype
    eD=cjs.EventDispatcher.prototype
    f = b2d.Fixture.prototype
    fCo = b2d.Dynamics.Controllers.b2ConstantForceController.prototype
    fd=fD=b2d.FixtureDef.prototype
    gCo = b2d.Dynamics.Controllers.b2GravityController.prototype
    gx=cjs.Graphics.prototype
    h =  cjs.Shape.prototype
    i=    cjs.DisplayObject.prototype
    jD=   b2d.Joints.b2JointDef.prototype
    j=   b2d.Joints.b2Joint.prototype
    l = b2d.Dynamics.b2ContactListener.prototype
    mJ = b2d.Joints.b2MouseJoint.prototype
    mc=cjs.MovieClip.prototype
    flDa = b2d.Dynamics.b2FilterData.prototype
    pH=  b2d.PolygonShape.prototype
    pJ = b2d.Joints.b2PrismaticJoint.prototype
    pJD = pd = b2d.Joints.b2PrismaticJointDef.prototype

    q = cjs.LoadQueue.prototype
    rJD=b2d.RevoluteJointDef.prototype
    rJ=b2d.RevoluteJoint.prototype
    st= s=  cjs.Stage.prototype
    sS = ss = cjs.SpriteSheet.prototype
    sSB=      cjs.SpriteSheetBuilder.prototype
    sp=s=cjs.Sprite.prototype
    tl= cjs.Timeline.prototype
    t=cjs.Text.prototype
    tCo = b2d.Dynamics.Controllers.b2TensorDampingController.prototype
    tw = cjs.Tween.prototype
    v=b2d.Common.Math.b2Vec2.prototype
    w=b2d.World.prototype
    wJD=b2d.Joints.b2WeldJointDef
    wJ=b2d.Joints.b2WeldJoint
    x=  ctx=  xx=CanvasRenderingContext2D.prototype
    xGr= CanvasGradient.prototype
}


//b2d.p()

//cv = el = $.fn




b2d.mini=function(){
    iF=b2d.iF;
    iB=b2d.iB;
    iP=b2d.iGP
    pD=function(){return new PolyDefault()}
}

v=b2d.Common.Math.b2Vec2.prototype

v.add= v.a=function(){var v=this,g=G(arguments),v1
    if(g[2]){
        return _.m(g,function(g){return v.add(g)})
    }

    v1=g.u?V(1,1): V(g.f,g[1])

    return V(
        v.x+ v1.x,
        v.y+ v1.y
    )

}
v.A=function(){var v=this,g=G(arguments),v1

    if( A(g[0]) && U(g[1]) ){
        _.e(g, function(g){
            v1=V(g)
            v.add(v1.x, v1.y)
        })}
    else {
        v1=V(g)
        v.add(v1.x, v1.y)}
}
v.s=  v.sub = function(){var v=this,g=G(arguments),
    o=V(g[0],g[1])
    o.x=N(o.x,0)
    o.y=N(o.y,0)
    return V(v.x-o.x,v.y-o.y)
}
v.m=  v.mult = function (num) {
    num = N(num) ? num : 30
    var v = _.clone(this)
    v.Multiply(num)
    return v
}
v.d= v.div = function (num) {
    num = N(num) ? num : 30
    return this.mult(1 / num)
}
v.tF=v.f=   v.dec = v.toFixed = function(n){var v=this
    n=N(n,1)
    return V(
        Number(v.x.toFixed(n)),
        Number(v.y.toFixed(n))
    )
}
v.r=   v.rot=function(rot){var x=this.x, y=this.y,
    rot=Math.toRadians(rot),
    cos=Math.cos, sin=Math.sin
    return V(
        x*cos(rot)-y*sin(rot),
        x*sin(rot)+y*cos(rot)
    ).dec(3)}

v.tA=function(){ return [this.x, this.y] }

V=function(x,y,x2,y2){var g=G(arguments), x=g[0],y=g[1], x2=g[2],y2=g[3], v
    if(A(x)){y2=x[3]; x2=x[2]; y=x[1]; x=x[0]}
    if(N(y2)){x = (x-x2)/2; y = (y-y2)/2} //for dist difs?
    else if(O(x)){if(b2d.isFixt(O(x))){x=x.B()}
        y= F(x.Y)? x.Y() : x.y; x= F(x.X)? x.X() : x.x}
    x = N(x,0)
    y = N(y,x)
    v = new b2d.Common.Math.b2Vec2(x, y)
    if(g.n||g.d){ v=v.d() }
    if(g.p||g.m){ v=v.m() }
    return v

}




b2d.AB=function(x1,y1,x2,y2){var g=G(arguments)

    var g=G(arguments), ab


    ab = new b2d.Collision.b2AABB

    if(g.p){

        ab.lowerBound.Set(x1, y1)
        ab.upperBound.Set(x2, y2)

    }
    else {


        if(U(g[2])){
            ab.lowerBound.Set(    g[0]/30-0.01,  g[1]/30-0.01   )
            ab.upperBound.Set(    g[0]/30+0.01,  g[1]/30+0.01     )
        }

        else {
            ab.lowerBound.Set(g[0]/30, g[1]/30)
            ab.upperBound.Set(g[2]/30, g[3]/30)
        }
    }


    return ab
}



b2d.mult = function(v){return V(v).mult()}
b2d.div = function(v){return V(v).div()}
b2d.mat22=function(v1,v2){
    var m = new b2d.Mat22()
    m.SetVV(v1,v2)
    return m}
b2d.tf=function(v1,v2,v3){
    if(U(v1)){
        return new b2d.Math.b2Transform()
    }
    if(A(v1)){
        return b2d.tf(
            V(v1[0],v1[1]),
            V(v1[2],v1[3]),
            V(v1[4],v1[5]))}
    var tf= new b2d.Math.b2Transform(v1, b2d.mat22(v2,v3))
    return tf}
ADD=function(){W().P()


    b=w.brick().C('r')

    p=M.p(b)

    //v=p.vs()

    //p.reg(b)


    w.S(100, 0).pol('z',  M.p(b) )



    $.in(function(){
        // w.S(0,0).pol('y',v)
    })

    //v1= v.add(400,500)



}
old=function(){
    b2d.add=function(vs,p){

        return _.m(vs, function(v){

            return v.add(p)

        })
    }

}



function shortcuts(){
    b2d.Fixture= b2d.Dynamics.b2Fixture
//divide by 30 to get meters
//all bx-obs have reg at center
//fixture: shape, friction, density[1], restitution
//body: x,y,type
//shape.setasbox(w,h)    .. again, divide values by 30
//debug.setsprite(canvas), .setdrawscale(30)
//debug.setflags(what to draw :: shapeBit||jointBit)
//world.setDebugDraw(debug)
//world.drawDebugdata
//worldstep(time(keep in sync with easel),
// vel iterations?(calcs forces - higher is more accurate but more intensive),
//  pos iterations  //can set both to 10
// )
//world clearforces
//static body for ground, dynamic for objs
    b2d.cn= b2d.controls={}
    b2d.pollute=function(){

        b2Vec2 = Box2D.Common.Math.b2Vec2
        b2AABB = Box2D.Collision.b2AABB
        b2BodyDef = Box2D.Dynamics.b2BodyDef
        b2Body = Box2D.Dynamics.b2Body
        b2FixtureDef = Box2D.Dynamics.b2FixtureDef
        b2Fixture = Box2D.Dynamics.b2Fixture
        b2World = Box2D.Dynamics.b2World
        b2MassData = Box2D.Collision.Shapes.b2MassData
        b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape
        b2CircleShape = Box2D.Collision.Shapes.b2CircleShape
        b2DebugDraw = Box2D.Dynamics.b2DebugDraw
        b2MouseJointDef =  Box2D.Dynamics.Joints.b2MouseJointDef
        b2Shape = Box2D.Collision.Shapes.b2Shape
        b2Joint = Box2D.Dynamics.Joints.b2Joint
        b2Settings = Box2D.Common.b2Settings



    }
    b2B =b2Body= b2d.Dynamics.b2Body
    sB = b2Body.b2_staticBody
    dB = b2Body.b2_dynamicBody
    b2d.Joints = BXJ=b2d.Dynamics.Joints
    b2d.bodyDef = b2BodyDef  =b2d.Dynamics.b2BodyDef
    b2FixtureDef  = b2d.Dynamics.b2FixtureDef
    b2d.fixture = b2Fixture   =b2d.Dynamics.b2Fixture
    b2d.World = b2World   =b2d.Dynamics.b2World
    b2d.DebugDraw = b2DebugDraw   =b2d.Dynamics.b2DebugDraw
    shB = b2d.DebugDraw.e_shapeBit
    jB = b2d.DebugDraw.e_jointBit
    b2d.joint = bJ =  b2d.Joints.b2Joint
    b2d.jointDef = bJD = b2d.Joints.b2JointDef
    b2d.distanceJoint =bDJ =b2d.Joints.b2DistanceJoint
    b2d.mouseJointDef = b2MouseJointDef=b2d.Dynamics.Joints.b2MouseJointDef
    b2d.massData = b2MassData =b2d.Collision.Shapes.b2MassData
    b2d.AABB = b2AABB=b2d.Collision.b2AABB
    b2d.Shapes = b2d.Collision.Shapes //BXS=
    b2d.PolygonShape = b2PolygonShape= b2d.Shapes.b2PolygonShape
    b2d.CircleShape = b2CircleShape= b2d.Shapes.b2CircleShape
    b2d.Segment = b2d.Collision.b2Segment
    b2d.Collision.b2Simplex
    b2d.Collision.b2Bound
    b2d.Collision.b2AABB
    b2d.Collision.b2BoundValues
    b2d.Collision.b2ContactID
    b2d.Collision.b2ContactPoint
    b2d.Collision.b2Distance
    b2d.Collision.b2DistanceInput
    b2d.Collision.b2DistanceOutput
    b2d.Collision.b2DistanceProxy
    b2d.Collision.b2DynamicTree
    b2d.Collision.b2DynamicTreeNode
    b2d.Collision.b2DynamicTreePair
    b2d.Collision.b2RayCastInput
    b2d.Collision.b2RayCastOutput
    b2d.ControllerEdge= b2d.Dynamics.Controllers.b2ControllerEdge
    b2d.Controllers = b2d.Dynamics.Controllers
    b2d.Math = b2d.Common.Math
    b2d.Mat22 = b2d.Math.b2Mat22
    b2d.Mat33 = b2d.Math.b2Mat33
    b2d.FixtureDef = b2d.Dynamics.b2FixtureDef
    b2d.PrismaticJointDef=  b2d.Joints.b2PrismaticJointDef
    b2d.RevoluteJointDef=  b2d.Joints.b2RevoluteJointDef
    b2d.RevoluteJoint=b2d.Joints.b2RevoluteJoint
    b2d.Body = b2d.Dynamics.b2Body
    b2d.Fixture = b2d.Dynamics.b2Fixture
    b2d.ConstantAccelController= b2d.Dynamics.Controllers.b2ConstantAccelController
    b2d.BuoyancyController=new b2d.Dynamics.Controllers.b2BuoyancyController
    b2d.Fixture = b2d.Dynamics.b2Fixture
    b2d.FixtureDef= b2d.Dynamics.b2FixtureDef

}



_.eW=function(str, fn){
    var _gf = str.trim().split(' ')
    _.e(_gf, function(str){

        str = str.trim()

        // $l('str: '+ str)
        if(str) {
            fn( str.trim() )
        }
    })}

_.ct = function(arr, item){
    arr = arr || []
    if(S(item)){item=item.trim()}
    return _.contains(arr, item)

}


b2d.p()
klazz()
function klazz() {
    fD.K = function (k) {
        var fD = this
        if (U(clas)) {
            return fD.getClass()
        }
        fD.classes = fD.classes || []
        fD.classes.push(clas)
        return fD
    }
    fD.getClasses = fD.getClass = function () {
        var g = G(arguments), fD = this, classes
        fD._K = fD._K || []
        ks = fD.classes.join(' ')
        if (g.p) {
            ks += ' : ' + fD.body().getClasses()
        }
        return ks
    }


    b.K = function () {
        var b = this, g = G(arguments);
        this._K = this._K || []
        if (g.u) {
            return this._K.join(' ')
        }
        if (g.O) {
            this.K(g.f.k);
            return this
        }
        _.eW(g.f, function (k) {
            if (!b.of(k)) {
                b._K.push(k)
            }
        })
        return this
    }
    f.K = function () {
        var f = this, g = G(arguments);
        this._K = this._K || []
        if (g.u) {
            return (this._K).join(' ')
        }
        if (g.O) {
            this.K(g.f.k);
            return this
        }
        _.eW(g.f, function (k) {
            if (!f.of(k)) {
                f._K.push(k)
            }
        })
        return this
    }


    b.of = function (k) {

        if (b2d.iF(k)) {
            k = k.B()
        }

        return !k || _.ct(this._K, k) || this == k

    }
    b.is = function (k) {
        return k && this.of(k)
    }
    f.of = function (k) {

        if (!this) {
            return false
        }


        if (!k) {
            return true
        }

        return this == k ||
            (S(k) && _.contains(this._K || [], k.trim()))
            ||
            (this.B() && this.B().of(k))


    }
    f.is = function (k) {
        return k && this.of(k)
    }
}