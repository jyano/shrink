b2d.p()


jD.A=  function(a){this.bodyA=a; return this}
jD.B= function(b){this.bodyB=b; return this}
jD.AB=function(a,b){return this.A(a).B(b)}

jD.aV= jD.lAA =function(){var pJD=this, g=G(arguments)
    pJD.localAnchorA=V(g[0],g[1]).div()
    return pJD}
jD.bV= jD.lAB =function(){var pJD=this, g=G(arguments)
    pJD.localAnchorB =  V(g[0],g[1]).div()
    return pJD}


jD.i= jD.init = function(){//joint.i=
    this.Initialize.apply(this,arguments)
    return this}
jD.cC =jD.cl= jD.coll = jD.collide =  function(a){var jD=this
    jD.collideConnected = a?true:false
    return jD}


j.i= j.init=function(){var j=this
    j.Initialize.apply(j, G(arguments))
    return j
}
j.a=function(a){
    if(U(a)){ return this.GetAnchorA().mult() }
    else {alert ('j.A cannot set')}}
j.b=function(a){
    if(U(a)){ return this.GetAnchorB().mult() }
    else {alert ('j.B cannot set')}}
j.A=function(a){return this.GetBodyA() }
j.B=function(a){return this.GetBodyB() }
j.a=function(a){return this.GetAnchorA().m() }
j.b=function(a){ return this.GetAnchorB().m() }
j.W=function(){return this.A().W()}
j.T=function(){return this.GetType()}



b.j= b.joint = function(){
    return this.GetJointList().joint
}
j.destroy=function(){
    var j = this.W().DestroyJoint(this)
    this.destroyed=true
    return j}


b.destroyAllJoints = function(){
    var b=this,
        toDestroy = [],
        je = b.j()

    while (je) {
        toDestroy.push(je.joint)
        je = je.next
    }
    _.e(toDestroy, function (j) {
        w.DestroyJoint(j)})

    return this
}


w.dJ = w.j = w.destroyJoint = function (a) {var w=this
    w.DestroyJoint(a);
    return w
}

w.cJ = w.J = w.joint = w.createJoint = function (a) {var w=this,
      j = this.CreateJoint(a)
    return  j
}





j.target = function(a,b){var j=this
    j.SetTarget(V(a,b))
    return j}//mouse




DENROT=function(){W(0) //w=b2d.m({g:0})

//by default, bodies have density = 0
//bodies cannot rotate by force, if their density is 0
//so by default, bodies wont rotate!!!! but still some mass
//can even change its density to 0, to suddenly freeze it...
    //something weird.. if it was already rotating it keeps rotating, and i think its rotation is affected by forces of others..
    //however others don't rot in response (assuming they also have den-0).  then once it stops rotating, switches back to frozen again?? hmmm.. maybe the rotation is affected only by friction/damping.. and the forces only change its x/y?  test it...
    r= w.D(300,300,'y',400,20).bo(.5)
    r2= w.D(300,300,'w',400,10)
    r3= w.D(300,300,'w',400,10)
    r4= w.D(300,300,'w',400,10)
    r5= w.D(300,300,'w',400,10)

    flipDen=function(r){
        var d = r.den()
        if(d==0){r.den(1)} else {r.den(0)}}
    flipStage=function(){
        if(w.s.X()==0  && w.s.Y()==0){w.s.XY(10000,10000)}
        else {w.s.XY(0,0)}
    }

    flipStage()
    $.ev(6,function(){
        flipDen(r); flipDen(r2);
        flipDen(r3);flipStage()
    })

}

advancedJoints=function() {
    w.Gear = function (a, b, c) {

    return world.createJoint(Gear(a, b, c))
    function Gear(bA, bB, ratio) {
        var gearJoint = new b2d.Joints.b2GearJointDef()
        gearJoint.joint1 = bA
        gearJoint.joint2 = bB
        gearJoint.bodyA = bA.GetBodyA()
        gearJoint.bodyB = bB.GetBodyA()
        gearJoint.ratio = N(ratio) ? ratio : 1
        return gearJoint
    }
}

    PulleyJoint = pJt = function () {

        bPJD = BXJ.b2PulleyJointDef
        bPJ = BXJ.b2PulleyJoint

        var j = SuperJoint(new BXJ.b2PulleyJointDef())


        j.init = j.i = function () {
            j.Initialize.apply(j, G(arguments))
            return j
        }

        j.lenA = j.lA = function (a) {
            j.lengthA = a;
            return j
        }
        j.lenB = j.lB = function (a) {
            j.lengthB = a;
            return j
        }

        j.maxLenA = j.mLA = function (a) {
            j.maxLengthA = a;
            return j
        }
        j.maxLenB = j.mLB = function (a) {
            j.maxLengthB = a;
            return j
        }

        return j
    }
    SuperPulleyJoint = sPJ = function (x, y) {


        x = N(x) ? x : 100
        y = N(y) ? y : x

        b11 = w.A(bx1 = b2d.dynamicDef(x, y), fix())
        b22 = w.A(bx2 = b2d.dynamicDef(x, y), fix())


        var pulley = PulleyJoint()

            .init(
            b11,

            b22,

            b2d.V(15, 1),

            b2d.V(15, 2),

            b11.worldCenter(),

            b22.worldCenter(),

            1
        )

            .lenA(8)
            .lenB(4)
            .maxLenA(10)
            .maxLenB(5)

        w.J(pulley)

    }
//SuperPulleyJoint.$$=function(){x.$$(sPJ)}

    PULLEY = function () {
        W()
        b1 = w.D(300, 300, 'r', 200, 10)
        b2 = w.D(500, 300, 'b', 200, 10)
        var pulley = PulleyJoint().init(
            b1, b2,
            V(20, 1), V(25, 2), b1.wC(), b2.wC(), 1).lenA(8).lenB(4).maxLenA(10).maxLenB(5)
        w.J(pulley)   //makeMe()  //makeTim(10)   //makeCar()
    }
    ROPEJ = function () {


        function b2RopeJoint() {
            b2RopeJoint.b2RopeJoint.apply(this, arguments);
            if (this.constructor === b2RopeJoint) this.b2RopeJoint.apply(this, arguments);
        };
        Box2D.Dynamics.Joints.b2RopeJoint = b2RopeJoint;

        function b2RopeJointDef() {
            b2RopeJointDef.b2RopeJointDef.apply(this, arguments);
            if (this.constructor === b2RopeJointDef) this.b2RopeJointDef.apply(this, arguments);
        };
        Box2D.Dynamics.Joints.b2RopeJointDef = b2RopeJointDef;

        b2RopeJoint = Box2D.Dynamics.Joints.b2RopeJoint
        b2RopeJointDef = Box2D.Dynamics.Joints.b2RopeJointDef

        Box2D.inherit(b2RopeJoint, Box2D.Dynamics.Joints.b2Joint);
        b2RopeJoint.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
        b2RopeJoint.b2RopeJoint = function () {
            Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
            this.m_localAnchor1 = new b2Vec2();
            this.m_localAnchor2 = new b2Vec2();

            this.m_u = new b2Vec2();
        };
        b2RopeJoint.prototype.GetAnchorA = function () {
            return this.m_bodyA.GetWorldPoint(this.m_localAnchor1);
        }
        b2RopeJoint.prototype.GetAnchorB = function () {
            return this.m_bodyB.GetWorldPoint(this.m_localAnchor2);
        }
        b2RopeJoint.prototype.GetReactionForce = function (inv_dt) {
            if (inv_dt === undefined) inv_dt = 0;
            return new b2Vec2(inv_dt * this.m_impulse * this.m_u.x, inv_dt * this.m_impulse * this.m_u.y);
        }
        b2RopeJoint.prototype.GetReactionTorque = function (inv_dt) {
            if (inv_dt === undefined) inv_dt = 0;
            return 0.0;
        }
        b2RopeJoint.prototype.GetLength = function () {
            return this.m_length;
        }
        b2RopeJoint.prototype.SetLength = function (length) {
            if (length === undefined) length = 0;
            this.m_length = length;
        }
        b2RopeJoint.prototype.GetFrequency = function () {
            return this.m_frequencyHz;
        }
        b2RopeJoint.prototype.SetFrequency = function (hz) {
            if (hz === undefined) hz = 0;
            this.m_frequencyHz = hz;
        }
        b2RopeJoint.prototype.GetDampingRatio = function () {
            return this.m_dampingRatio;
        }
        b2RopeJoint.prototype.SetDampingRatio = function (ratio) {
            if (ratio === undefined) ratio = 0;
            this.m_dampingRatio = ratio;
        }
        b2RopeJoint.prototype.b2RopeJoint = function (def) {
            this.__super.b2Joint.call(this, def);
            var tMat;
            var tX = 0;
            var tY = 0;
            this.m_localAnchor1.SetV(def.localAnchorA);
            this.m_localAnchor2.SetV(def.localAnchorB);
            this.m_frequencyHz = def.frequencyHz;
            this.m_dampingRatio = def.dampingRatio;
            this.m_impulse = 0.0;
            this.m_gamma = 0.0;
            this.m_bias = 0.0;
            this.m_length = def.length;
            this.m_maxLength = def.maxLength
            this.m_limitState = b2Joint.e_inactiveLimit;
        }
        b2RopeJoint.prototype.InitVelocityConstraints = function (step) {
            var tMat;
            var tX = 0;
            var bA = this.m_bodyA;
            var bB = this.m_bodyB;
            tMat = bA.m_xf.R;
            var r1X = this.m_localAnchor1.x - bA.m_sweep.localCenter.x;
            var r1Y = this.m_localAnchor1.y - bA.m_sweep.localCenter.y;
            tX = (tMat.col1.x * r1X + tMat.col2.x * r1Y);
            r1Y = (tMat.col1.y * r1X + tMat.col2.y * r1Y);
            r1X = tX;
            tMat = bB.m_xf.R;
            var r2X = this.m_localAnchor2.x - bB.m_sweep.localCenter.x;
            var r2Y = this.m_localAnchor2.y - bB.m_sweep.localCenter.y;
            tX = (tMat.col1.x * r2X + tMat.col2.x * r2Y);
            r2Y = (tMat.col1.y * r2X + tMat.col2.y * r2Y);
            r2X = tX;
            this.m_u.x = bB.m_sweep.c.x + r2X - bA.m_sweep.c.x - r1X;
            this.m_u.y = bB.m_sweep.c.y + r2Y - bA.m_sweep.c.y - r1Y;
            var length = Math.sqrt(this.m_u.x * this.m_u.x + this.m_u.y * this.m_u.y);
            this.m_length = length;
            var C = this.m_length - this.m_maxLength;
            if (C > 0) {
                this.m_limitState = b2Joint.e_atUpperLimit;
            } else {
                this.m_limitState = b2Joint.e_inactiveLimit;
            }
            if (length > b2Settings.b2_linearSlop) {
                this.m_u.Multiply(1.0 / length);
            } else {
                this.m_u.SetZero();
                this.m_mass = 0.0;
                this.m_impulse = 0.0;
                return;
            }
            var cr1u = (r1X * this.m_u.y - r1Y * this.m_u.x);
            var cr2u = (r2X * this.m_u.y - r2Y * this.m_u.x);
            var invMass = bA.m_invMass + bA.m_invI * cr1u * cr1u + bB.m_invMass + bB.m_invI * cr2u * cr2u;
            this.m_mass = invMass != 0.0 ? 1.0 / invMass : 0.0;
            if (step.warmStarting) {
                this.m_impulse *= step.dtRatio;
                var PX = this.m_impulse * this.m_u.x;
                var PY = this.m_impulse * this.m_u.y;
                bA.m_linearVelocity.x -= bA.m_invMass * PX;
                bA.m_linearVelocity.y -= bA.m_invMass * PY;
                bA.m_angularVelocity -= bA.m_invI * (r1X * PY - r1Y * PX);
                bB.m_linearVelocity.x += bB.m_invMass * PX;
                bB.m_linearVelocity.y += bB.m_invMass * PY;
                bB.m_angularVelocity += bB.m_invI * (r2X * PY - r2Y * PX);
            }
            else {
                this.m_impulse = 0.0;
            }
        }
        b2RopeJoint.prototype.SolveVelocityConstraints = function (step) {
            var tMat;
            var oldImpulse = 0.0;
            var bA = this.m_bodyA;
            var bB = this.m_bodyB;
            tMat = bA.m_xf.R;
            var r1X = this.m_localAnchor1.x - bA.m_sweep.localCenter.x;
            var r1Y = this.m_localAnchor1.y - bA.m_sweep.localCenter.y;
            var tX = (tMat.col1.x * r1X + tMat.col2.x * r1Y);
            r1Y = (tMat.col1.y * r1X + tMat.col2.y * r1Y);
            r1X = tX;
            tMat = bB.m_xf.R;
            var r2X = this.m_localAnchor2.x - bB.m_sweep.localCenter.x;
            var r2Y = this.m_localAnchor2.y - bB.m_sweep.localCenter.y;
            tX = (tMat.col1.x * r2X + tMat.col2.x * r2Y);
            r2Y = (tMat.col1.y * r2X + tMat.col2.y * r2Y);
            r2X = tX;
            var v1X = bA.m_linearVelocity.x + ((-bA.m_angularVelocity * r1Y));
            var v1Y = bA.m_linearVelocity.y + (bA.m_angularVelocity * r1X);
            var v2X = bB.m_linearVelocity.x + ((-bB.m_angularVelocity * r2Y));
            var v2Y = bB.m_linearVelocity.y + (bB.m_angularVelocity * r2X);
            var C = this.m_length - this.m_maxLength;
            var Cdot = (this.m_u.x * (v2X - v1X) + this.m_u.y * (v2Y - v1Y));
            if (C < 0.0) {
                Cdot += step.inv_dt * C;
            }
            var impulse = (-this.m_mass * (Cdot + this.m_bias + this.m_gamma * this.m_impulse));
            oldImpulse = this.m_impulse;
            this.m_impulse = Math.min(0.0, this.m_impulse + impulse);
            impulse = this.m_impulse - oldImpulse;
            var PX = impulse * this.m_u.x;
            var PY = impulse * this.m_u.y;
            bA.m_linearVelocity.x -= bA.m_invMass * PX;
            bA.m_linearVelocity.y -= bA.m_invMass * PY;
            bA.m_angularVelocity -= bA.m_invI * (r1X * PY - r1Y * PX);
            bB.m_linearVelocity.x += bB.m_invMass * PX;
            bB.m_linearVelocity.y += bB.m_invMass * PY;
            bB.m_angularVelocity += bB.m_invI * (r2X * PY - r2Y * PX);
        }
        b2RopeJoint.prototype.SolvePositionConstraints = function (baumgarte) {
            if (baumgarte === undefined) baumgarte = 0;
            var tMat;
            if (this.m_frequencyHz > 0.0) {
                return true;
            }
            var bA = this.m_bodyA;
            var bB = this.m_bodyB;
            tMat = bA.m_xf.R;
            var r1X = this.m_localAnchor1.x - bA.m_sweep.localCenter.x;
            var r1Y = this.m_localAnchor1.y - bA.m_sweep.localCenter.y;
            var tX = (tMat.col1.x * r1X + tMat.col2.x * r1Y);
            r1Y = (tMat.col1.y * r1X + tMat.col2.y * r1Y);
            r1X = tX;
            tMat = bB.m_xf.R;
            var r2X = this.m_localAnchor2.x - bB.m_sweep.localCenter.x;
            var r2Y = this.m_localAnchor2.y - bB.m_sweep.localCenter.y;
            tX = (tMat.col1.x * r2X + tMat.col2.x * r2Y);
            r2Y = (tMat.col1.y * r2X + tMat.col2.y * r2Y);
            r2X = tX;
            var dX = bB.m_sweep.c.x + r2X - bA.m_sweep.c.x - r1X;
            var dY = bB.m_sweep.c.y + r2Y - bA.m_sweep.c.y - r1Y;
            var length = Math.sqrt(dX * dX + dY * dY);
            dX /= length;
            dY /= length;
            var C = length - this.m_maxLength;
            C = b2Math.Clamp(C, 0.0, b2Settings.b2_maxLinearCorrection);
            var impulse = (-this.m_mass * C);
            this.m_u.Set(dX, dY);
            var PX = impulse * this.m_u.x;
            var PY = impulse * this.m_u.y;
            bA.m_sweep.c.x -= bA.m_invMass * PX;
            bA.m_sweep.c.y -= bA.m_invMass * PY;
            bA.m_sweep.a -= bA.m_invI * (r1X * PY - r1Y * PX);
            bB.m_sweep.c.x += bB.m_invMass * PX;
            bB.m_sweep.c.y += bB.m_invMass * PY;
            bB.m_sweep.a += bB.m_invI * (r2X * PY - r2Y * PX);
            bA.SynchronizeTransform();
            bB.SynchronizeTransform();
            return length - this.m_maxLength < b2Settings.b2_linearSlop;
        }
        Box2D.inherit(b2RopeJointDef, Box2D.Dynamics.Joints.b2JointDef);
        b2RopeJointDef.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
        b2RopeJointDef.b2RopeJointDef = function () {
            Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
            this.localAnchorA = new b2Vec2();
            this.localAnchorB = new b2Vec2();
        };
        b2RopeJointDef.prototype.b2RopeJointDef = function () {
            this.__super.b2JointDef.call(this);
            this.type = b2Joint.e_ropeJoint;
            this.length = 1.0;
            this.frequencyHz = 0.0;
            this.dampingRatio = 0.0;
        }
        b2RopeJointDef.prototype.Initialize = function (bA, bB, anchorA, anchorB) {
            this.bodyA = bA;
            this.bodyB = bB;
            this.localAnchorA.SetV(this.bodyA.GetLocalPoint(anchorA));
            this.localAnchorB.SetV(this.bodyB.GetLocalPoint(anchorB));
            var dX = anchorB.x - anchorA.x;
            var dY = anchorB.y - anchorA.y;
            this.length = Math.sqrt(dX * dX + dY * dY);
            this.frequencyHz = 0.0;
            this.dampingRatio = 0.0;
        }

        b2Joint.Create = function (def, allocator) {
            var joint = null;
            switch (def.type) {
                case b2Joint.e_ropeJoint:
                {
                    joint = new b2RopeJoint((def instanceof b2RopeJointDef ? def : null));
                }
                    break;
                case b2Joint.e_distanceJoint:
                {
                    joint = new b2DistanceJoint((def instanceof b2DistanceJointDef ? def : null));
                }
                    break;
                case b2Joint.e_mouseJoint:
                {
                    joint = new b2MouseJoint((def instanceof b2MouseJointDef ? def : null));
                }
                    break;
                case b2Joint.e_prismaticJoint:
                {
                    joint = new b2PrismaticJoint((def instanceof b2PrismaticJointDef ? def : null));
                }
                    break;
                case b2Joint.e_revoluteJoint:
                {
                    joint = new b2RevoluteJoint((def instanceof b2RevoluteJointDef ? def : null));
                }
                    break;
                case b2Joint.e_pulleyJoint:
                {
                    joint = new b2PulleyJoint((def instanceof b2PulleyJointDef ? def : null));
                }
                    break;
                case b2Joint.e_gearJoint:
                {
                    joint = new b2GearJoint((def instanceof b2GearJointDef ? def : null));
                }
                    break;
                case b2Joint.e_lineJoint:
                {
                    joint = new b2LineJoint((def instanceof b2LineJointDef ? def : null));
                }
                    break;
                case b2Joint.e_weldJoint:
                {
                    joint = new b2WeldJoint((def instanceof b2WeldJointDef ? def : null));
                }
                    break;
                case b2Joint.e_frictionJoint:
                {
                    joint = new b2FrictionJoint((def instanceof b2FrictionJointDef ? def : null));
                }
                    break;
                default:
                    break;
            }
            return joint;
        }

        Box2D.postDefs.push(function () {
            Box2D.Dynamics.Joints.b2Joint.e_unknownJoint = 0;
            Box2D.Dynamics.Joints.b2Joint.e_revoluteJoint = 1;
            Box2D.Dynamics.Joints.b2Joint.e_prismaticJoint = 2;
            Box2D.Dynamics.Joints.b2Joint.e_distanceJoint = 3;
            Box2D.Dynamics.Joints.b2Joint.e_ropeJoint = 10;
            Box2D.Dynamics.Joints.b2Joint.e_pulleyJoint = 4;
            Box2D.Dynamics.Joints.b2Joint.e_mouseJoint = 5;
            Box2D.Dynamics.Joints.b2Joint.e_gearJoint = 6;
            Box2D.Dynamics.Joints.b2Joint.e_lineJoint = 7;
            Box2D.Dynamics.Joints.b2Joint.e_weldJoint = 8;
            Box2D.Dynamics.Joints.b2Joint.e_frictionJoint = 9;
            Box2D.Dynamics.Joints.b2Joint.e_inactiveLimit = 0;
            Box2D.Dynamics.Joints.b2Joint.e_atLowerLimit = 1;
            Box2D.Dynamics.Joints.b2Joint.e_atUpperLimit = 2;
            Box2D.Dynamics.Joints.b2Joint.e_equalLimits = 3;
        });
    }
    FRICJ = function () {

        w = b2d.W({g: 0})

        y = w.ship().XY(200, 200)
        w.right.kill();
        w.left.kill();
        y.warp2()
        //  Set the two anchor points to zero so the friction doesn't have any direction.

        frictionJoint = new b2d.Joints.b2FrictionJointDef()


        frictionJoint.localAnchorA = V(0, 0)
        frictionJoint.localAnchorB = V(0, 0)

        frictionJoint.bodyA = y//w.ball(100,100,50)
        frictionJoint.bodyB = b = w.ball(200, 200, 240).warp2()
        // 1200,400)//ASquareAsLargeAsTheAreaYouNeedFrictionIn

        frictionJoint.maxForce = 42.5; //This the most force the joint will apply to your object.
        // The faster its moving the more force applied

        frictionJoint.maxTorque = 0//4365; //Set to 0 to prevent rotation

        w.CreateJoint(frictionJoint)


        frictionJoint = new b2d.Joints.b2FrictionJointDef()


        frictionJoint.localAnchorA = V(0, 0)
        frictionJoint.localAnchorB = V(0, 0)

        frictionJoint.bodyA = y//w.ball(100,100,50)
        frictionJoint.bodyB = b2 = w.ball(200, 200, 40).warp2()
        // 1200,400)//ASquareAsLargeAsTheAreaYouNeedFrictionIn

        frictionJoint.maxForce = 42.5; //This the most force the joint will apply to your object.
        // The faster its moving the more force applied

        frictionJoint.maxTorque = 0//4365; //Set to 0 to prevent rotation

        w.CreateJoint(frictionJoint)


        w.ball(400, 500, 40)
        w.show(function () {
            return 'linVelX: ' + y.linVel().x.toFixed(0)
        })

        /*

         How to add friction joint and which anchor point i have to set to zero?? –  Diken Sep 5 '12 at 7:05

         Unlike surface friction between solids, air friction (drag) depends on the speed of the object, squared.

         An easy way to model friction and drag

         F(friction) = -k;
         F(drag) = speed * speed * -k;
         Both forces act in the opposite direction to the velocity of the object.

         Notice that surface friction is a constant whereas air friction (drag) must be modified each frame according to the object speed (length of velocity vector)
         */
    }




        DEMOGEAR=function(){W()
            w.Gear(
                w.rev( w.baa(100,220,40), w.bi(100,220,100,20) ),
                w.rev( w.baa(250,220), w.bi(250,220,100,20) ),.5)}



}; advancedJoints()

w.colBalls=function(){var w=this
    r = w.D(300, 300, 'r', 12).DFB(1,0.1,1)
    b = w.D(400, 300, 'b', 12).DFB(1,0.1,1)
    y = w.D(500, 300, 'y', 12).DFB(1,0.1,1)
    g = w.D(600, 300, 'g', 12).DFB(1,0.1,1)
    p = w.D(700, 300, 'p', 12).DFB(1,0.1,1)
    o = w.D(800, 300, 'o', 12).DFB(1,0.1,1)
    return w}


/*

 j.maxForce = j.mMF = j.mF = function (a, b, c) {
 this.SetMaxMotorForce(a, b, c);
 return this
 }
 j.lm = j.limits = j.setLimits = j.sL = function (a, b) {

 a = N(a) ? a : 20

 b = N(b) ? b : 180

 j.SetLimits(tRad(a), tRad(b))

 return j
 }
 j.enableLimits = j.enableLimit = j.eL = function (a) {
 this.EnableLimit(a ? true : false)
 return this
 }
 j.W = function () {
 return this.GetBodyA().GetWorld()
 }

 j.enabMot = function (a) {
 this.EnableMotor(a);
 return this
 }
 j.mot = function (speed, maxForce) {
 if (speed == '-') {
 this.EnableMotor(false);
 return this
 }
 speed = N(speed) ? speed : 100
 maxForce = N(maxForce) ? maxForce : 10000000
 this.enabMot(true).maxForce(maxForce).speed(speed)
 }



*/

wedJ=function(){


    w.wed=function () {var w=this,g=G(arguments)
        b2d.wed= function(a,b,  ancA, ancB, ang,  c, d){

            // can set 2 local anchor points and a reference angle


            b2d.WeldJointDef=b2d.Joints.b2WeldJointDef
            var g=G(arguments),

                jd =  new b2d.WeldJointDef()

            o={a:a, b:b}

            jd.bodyA= o.a
            jd.bodyB= o.b

            if(N(g[2])){
                o.ancA = V(g[2], g[3])
                o.ancB = V(g[4], g[5])
                o.ang = g[6]
                return jd
            }

            if(g[2]){
                jd.localAnchorA = o.ancA.div()}
            if(o.ancB){
                jd.localAnchorB = o.ancB.div()}
            if(N(o.ang)){// use ang to set a 'referenceAngle'
                jd.referenceAngle = M.tR(o.ang)}

            return jd

        }

        return w.J(
            b2d.wed.apply(null,g))}
    b.dX=function(b1){return this.X()-b1.X()}
    b.glu=  function(b1){var b=this, w=b.W()

        return w.wed( b, b1, -b.dX(b1), -b.Y(b1))

    }
    WED=function(){W([1500,1000 ],{g:0})

        w.wed(
            w.D(300,300,'r', 130),
            w.D(300,650, 'b', 130,400)
        )

        w.wed( w.S(200,100,'x',30),
            w.D(200,100,'v',30),0,10)
        w.wed( w.S(300,100,'l',30),
            w.D(300,200,'x',30),0,-10)

        w.wed( w.S(400,100,'g',30),
            w.D(400,300,'x',30),10,10)




        w.wed(w.S(500,100,'x',30), w.D(500,100,'v',30),10,-10)
        w.wed(w.S(600,100,'x',30), w.D(600,100,'v',30),10,-20)
        w.wed(w.S(700,100,'x',30), w.D(700,100,'v',30),10,-30)
        w.wed(w.S(800,100,'x',30), w.D(800,100,'v',30),-10,-40)
        w.wed(w.S(900,100,'x',30), w.D(900,100,'v',30),-10,-50)
        /*
         w.wed(w.S(100,200,'x',30), w.S(100,200,'v',30),0,0)
         w.wed(w.S(200,200,'x',30), w.S(200,200,'v',30),0,10)
         w.wed(w.S(300,200,'x',30), w.S(300,200,'v',30),0,-10)
         w.wed(w.S(400,200,'x',30), w.S(400,200,'v',30),10,10)
         w.wed(w.S(500,200,'x',30), w.S(500,200,'v',30),10,-10)
         w.wed(w.S(600,200,'x',30), w.S(600,200,'v',30),10,-20)
         w.wed(w.S(700,200,'x',30), w.S(700,200,'v',30),10,-30)
         w.wed(w.S(800,200,'x',30), w.S(800,200,'v',30),-10,-40)
         w.wed(w.S(900,200,'x',30), w.S(900,200,'v',30),-10,-50)

         w.wed(w.D(100,500,'x',30), w.S(100,500,'v',30),0,0)

         w.wed( w.D(200,500,'x',30), w.S(200,500,'v',30) )


         w.wed(
         w.D(300,500, 'o', 30),
         w.D(300,500,'g', 50,50),

         V(0,-10)
         )

         w.wed(w.D(400,500,'x',30), w.S(400,500,'v',30), V(10,10))
         w.wed(w.D(500,500,'x',30), w.S(500,500,'v',30),V(10,-10))
         w.wed(w.D(600,500,'x',30), w.S(600,500,'v',30),10,-20)
         w.wed(w.D(700,500,'x',30), w.S(700,500,'v',30),10,-30)
         w.wed(w.D(800,500,'x',30), w.S(800,500,'v',30),-10,-40)
         w.wed(w.D(900,500,'x',30), w.S(900,500,'v',30),-10,-50)
         */
    }
    j.form=function(){var j=this, w=j.W(), a=j.A(), b=j.B()
        if(j.T()==8){$l('J.T()==8:COMMENCE WEDDING '+ (n++))

            return w.wed(a, b)

        }}
    CRUSHREWED=function(){W([1200,600,1400,600],{}).C('p').P().P().P().P().P()
        n=0
        p.track().cir({r:10,c:'y'}).bS('sun')
        j = w.wed(
            w.D(100,200,'x',100,200).r(1.5),
            w.D(200,100,'u',200,100))
        $.ev(2, function(){
            if(!j.destroyed){  j.destroy()  }
            else {
                j = j.W().wed(j.A(),j.B())} })}
    b.j=function(){ return this.GetJointList() }


    LUMP=function(){W(5)//.Y()
        w.D(600,200,'w',180).bit(1,[1]).r(.5)

        w.D(400,0,'g',100).bit(2, [1,2, 4,8]).r(.8)
        w.D(300,0,'g',183,183).bit(2, [1,2, 4,8]).r(.8)

        _.t(38,function(){
            w.D(R(1100,100), R(300,-2500), 'w', 20).bit(1,[1])
        })

        y= w.y(100, 100).rt(40).bit(8, [1,2,4])

        fn=_.th(function(){
            var xx= y.X(),
                yy= y.Y()
            $.in(1, function(){
                w.S(xx,yy,'b',15)})},100)
        y.cl(fn)
        _.e([[400,500],[300, 500],[400, 300],
            [300, 100], [400, 200],[100, 300],
            [300, 300]
        ], function glb(v){
            return w.D(v[0],v[1],'z',20).K('glb')   })
        y.cl('glb', function(f){var glb=f.B()
            if(!glb.j()){glb.glu(y)}})
        w.wed(
            w.D(100,200,'x', 100,200).r(1),
            w.D(200,100, 'u', 200,100).r(1))
        w.wed(
            w.D(300,400,'w',50,100),
            w.D(300,400,'v', 100,50))

        w.t_.bit(1, [8])


    }




};wedJ()
revJ=function(){

    b2d.p()

    /*

     //revolute

     j.refAng = j.rA = function (a) {
     j.referenceAngle = tRad(a);
     return j
     }

     j.maxTorque = j.mMT = function (a) {
     j.maxMotorTorque = a
     return j
     }

     j.lowAng = j.lA = function (a) {
     j.lowerAngle = tRad(a);
     return j
     }

     j.upAng = j.uA = function (a) {
     j.upperAngle = tRad(a);
     return j
     }

     j.rat = j.r = function (a) {
     j.ratio = a;
     return j
     }
     j.axis = j.lXA = function (a) {
     j.localAxisA = a;
     return j
     }
     j.damp= function(a){if(U(a)){return this.GetDampingRatio()}
     this.SetDampingRatio(a)
     return this}
     // can change collideConnected dynamically?  if not i could replace the joint with a new one dynaically!!!!!
     // is it smart enough to know all its properties??? // it should be
     //motor


     j.maxSpeed=j.maxMotorSpeed=j.mMS=function(a){
     j.maxMotorSpeed=a
     return j}

     rev=function() {
     //motor rev
     j.mt = j.motor = j.enableMotor = j.eM = function (a) {
     j.EnableMotor(a ? true : false)
     return j
     }
     j.speed = j.motorSpeed = j.mS = function (speed) {
     if (U(speed)) {
     return this.GetMotorSpeed()
     }
     this.SetMotorSpeed(speed)
     return this
     }
     j.torque = function (torq) {
     if (U(torq)) {
     return this.GetMotorTorque()
     }
     this.SetMaxMotorTorque(torq)
     return this
     }
     j.maxTorq = j.maxTorque = j.mMT = j.mT = function (a, b, c) {
     this.SetMaxMotorTorque(a, b, c);
     return this
     }
     */

    rJD.i=rJD.init=function(){var jd=this,g=G(arguments)
        //just a shortcut to call initialze.  have i ever even done that?  laaaame waaah waaaaah
        jd.Initialize.apply(jd, g)
        return jd}

    rJ.lm= function(){var j=this, g=G(arguments),
        a=g[0],b=g[1]
        if(a===true){j.EnableLimit(true); return}
        j.SetLimits(M.tR(a),M.tR(b))
        if(g.N){j.EnableLimit(true)}
        return j
    }

    rJ.mt=function(s,tor){var j=this,g=G(arguments)
        j.SetMotorSpeed(s)
        j.SetMaxMotorTorque(_.tN(tor, 100000))
        if(g.N){j.EnableMotor(true)}
        return j
    }
    rJ.sp=function(s){var j=this
        if(U(s)){return j.GetMotorSpeed()}
        j.SetMotorSpeed(s); return j}
    w._rJ=function(){var w=this,g=G(arguments), o,jd,j
        o= b2d.iB(g[0])?
        {a:g[0],b:g[1]}:
            g[0]

        jd=new b2d.RevoluteJointDef
        jd.bodyA= o.a
        jd.bodyB= o.b

        j=w.J(jd)
        return j
    }


    w.rJ=function(){var w=this,g=G(arguments),o, aC,bC,jd, b,v


        if(g.N_ || ( b2d.iB(g.f) && U(g.s) )  ){

            v= V(g.f, g.s)

            b= g.p? w.D(v.x, v.y,'y',10,10).d(1).r(.5):
                g.m? w.D(v.x, v.y, $r(), 50, 15):
                    w.D(v.x, v.y, 'r', 4, 20).d(4).r(2)

            if(g.d){b.stat()}
            return b
        }


        if(g.p){ g.s.XY(g.f) }
        o=  b2d.iB(g.f)?  {a: g.f,  b: g.s}: g.f
        jd=new b2d.RevoluteJointDef
        jd.bodyA=o.a
        jd.bodyB=o.b
        if(g.m){jd.cl(true)}

        if(N(g[3])){jd.aV(g.t,g[3])
            if(N(g[5])){jd.bV(g[4],g[5])}}

        else if(O(g[3])){
            jd.aV(g[3])

            if(O(g[4])){jd.bV(g[4])}}

        else {
            aC=o.a.wC()
            bC=o.b.wC()
            xx=o.a.X() - o.a.wC().x
            yy=o.a.Y() - o.a.wC().y
            xx=bC.x-aC.x
            yy=bC.y-aC.y
            jd.aV(xx, yy)
        }

        return w.J(jd)

    }



    b.pin=function(){var b=this,w=b.W(), j,
        b1= w.S( b.X(), b.Y() )
        w.rJ(b1, b )
        return b
    }


    w.spinner=function(x,y,s,t){var g=G(arguments)
        x = N(g[0], 500)
        y = N(g[1], 200)
        s = N(g[2], 10)
        t = N(g[3], 100)

        if(g.n){s*=-1}

        w.rJ(
            dial= w.D(x, y,'r',200,40),
            rock= w.S(x, y,'b',10,10)
        ).mt(s, t) // rJt({  i:[rock, dial, dial.c()],  eM:1,  mS:-10,  mMT:100  })

    }
    w.perch = function(c){var w=this //specific structure, birdage in sky
        c=c||'t'
        w.S(200,50, c, 300,20) //top
        w.S(200,360, c, 300,20) //bottom
        w.S(60, 240, c, 20, 260) //left
        w.S(340, 320, c, 20, 100)//right
        return w}
    w.seesaw=function(x,y){var w=this,
        anc = w.S(x,y, 'h', 60,60),
        lev = w.D(x,y, 'g', 300,20)
        w.rJ(  anc, lev ).lm(-30,30)
    }

    SPERCH=function(){W([1200,600,1200,1200],{}).P()
        p.tr()


        w.perch()
        w.seesaw(600,1100)
        w.seesaw(600,700)
        w.seesaw(600,500)


        w.spinner(400,900)
        w.spinner(800,900,'-')



    }

    RJ=function(){W({  m:0,  g:0  }).Y()
        //  p1 = V(300,300) ;w.dot(p1)
        //  p2 = V(360,360) ;w.dot(p2)
        //  p3 = V(450,450) ;w.dot(p3)

        b=w.D(300,300).lV(2).aV(1)
        b.cir({r:150,lf:['x','u']}).d(1)
        w.rJ(b,
            w.D(300,300,'b',500,40,0,0,30)
        )

        //blue pin spinner in middle
        b1= w.D(600,300,'b', 100,50).pin()
        r1 = w.D(600,300,'r', 100,100)
        w.$$(function(){w.rJ(b1,r1)})


    }
    LRJ=function(){W({  m:0,  g:0  }).Y()

        b= w.S(600,100,'b',10)
        w.rJ(b,
            link=w.D(600,120,'r',10) )
        w.rJ(link,
            link=w.D(600,130,'b',10) )
        w.rJ(link,
            link=w.D(600,140,'r',10) )
        w.rJ(link,
            link=w.D(600,170,'b',10) )
    }

    BL=function(){W(300).C('z')



        // w.S(600,300,'z',50,50).rJ(25).C('z').rJ(  w.y(300,300).cn('thrust')  )


        // p= w.p(300,200).cn('thrust').r(2)

        // base = Link(300, 20, 10)//.stat()
        // link =  base.rJ(10)

        //  w.rJ( link,  p.XY(link.X(), link.Y())  )


        //base = Link(100, 20).stat(); l =  base.rJ(10); w.rJ(l, p.XY(l.X(), l.Y()))

        link= w.S(100,120,'z', 20,20)
        js=[]
        _.t(20,function(){
            js.push(
                w.rJ(
                    link,
                    link =  w.D(
                        link.X(),
                        link.Y() +10,'w',3).d(3000 ) ) ) })
        link.rJ(w.p().cn('jump'))
        j=js[3]
    }


    /* more lVW!
     w.$(function(x,y){
     v=b.lVW(x,y)
     w.dot('w', M.a(v.x), M.a(v.y))
     $l(v.x+','+v.y)
     })*/

    ROUL=function(){W()


        w.D(400,200,'b', [
            [60],
            [100,50,0,200]
        ]).pin()


        y= w.D(800,200,'y', [
            [60],
            [40,80,0,60]])
        x= w.D(500,200,'x',  50 )

        w.$$(function(){j1=w.rJ(y,x)})

        w.rJ(
            w.D(350, 200,[
                [ 'b', 125,20],
                ['o',20, 60,-80,-40,200 ]
            ]),

            w.D(210,210,[
                [ 'g',150, 10, 0,0,0 ,1],
                [ 'r',10, 20, -140,-30 ,0 ,1]
            ]),

            -80,-90,60,0

        ).mt(10)

    }
    REVJ=function(){W().C('z')


        j = w.rJ(w.S(700,280), w.D(800,280,'r',200,40)).mt(4,100000)
        $.ev(4,function(){j.sp(-j.sp())})
        $.in(2, function(){ j.lm(0,200) })


        c=w.D(300,300)
        c.cir({r:60, c:'d',rf:1})
        w.rJ(c, w.D(300,300,'h',30,300))
        box = w.D(150,150,'n', 80,40)

        w.rJ(
            box,
            w.D(130,130,'p',50))

        w.rJ(
            w.S(400,200,'o',60).d(1),
            w.D(400,200,'o',200,40).d(1)).mt(-2)

        w.rJ(
            w.D( 120, 50,'y', 50,50),
            w.D( 100, 50, 'x', 50,50)
        ).mt(2)

        w.rJ(
            w.D(400,30,'g',30,50),
            w.D(400,30,'g',30,50)).mt(3)

        w.rJ(
            w.D( 400,30,'u',10,80),
            w.D( 400,30,'r',20,160 )
        ).mt(10)

        w.rJ(
            w.D( 400,30,'p', 50  ),
            w.D( 400,30, 'o', 20,160 )
        ).mt(7)

    }
    DEMOREV=function(){W()


        w.rJ(   a= w.S(100,100,20),  b=w.D(100,100,100,40) ).mt(5, 1)


        w.rJ( w.S(250,100,20), w.D(250,100,100,40) ).mt(5, 2)

        w.rJ( w.S(400,100,20), w.D(400,100,100,40)) .mt(5, 10000)



        w.rJ( w.baa(550,100), w.bi(550,100,100,40)) .mt(20,5)

        w.rJ( w.baa(700,100), w.bi(700,100,100,40)) .mt(20, 10)


        w.rJ( a2=w.baa(850, 100), b2=w.bi(850,100,100,40,'o') ).mt(20, 10000)



        w.rJ( w.baa(100,220), w.bi(100,220,100,40)).lm(0, 0)

        w.rJ( w.baa(250,220), w.bi(250,220,100,40)).lm(0,10)

        w.rJ( w.baa(400,220), w.bi(400,220,100,40)).lm(0,180)
        w.rJ( w.baa(550,220), w.bi(550,220,100,40)).lm(-180,0)
        w.rJ( w.baa(700,220), w.bi(700,220,100,40)).lm(-360,180)
        w.rJ( w.baa(850,220), w.bi(850,220,100,40)).lm(0,1000)

        w.rJ( w.baa(100,340), w.bi(100,340,100,40)).lm(0,0).mt(5,1)
        w.rJ( w.baa(250,340), w.bi(250,340,100,40)).lm(0,10).mt(5,2)
        w.rJ( w.baa(400,340), w.bi(400,340,100,40)).lm(0,180).mt(5,10000)
        w.rJ( w.baa(550,340), w.bi(550,340,100,40)).lm(-180,0).mt(20,5)
        w.rJ( w.baa(700,340), w.bi(700,340,100,40)).lm(-360,180).mt(20,10)
        w.rJ( w.baa(850,340), w.bi(850,340,100,40)).lm(0,1000).mt(20,10000)

        w.rJ( w.baa(100,460), w.bi(100,460,100,40)).lm(0,0).mt(-5,1)

        w.rJ( w.baa(250,460), w.bi(250,460,100,40)).lm(0,10).mt(-5,2)

        w.rJ( w.baa(400,460), w.bi(400,460,100,40)).lm(0,180).mt(-5,10000)



        w.rJ(
            w.baa(550,460), w.bi(550,460,100,40)
        )

            .lm(-180,0).mt(-20,5)

        w.rJ( w.baa(700,460), w.bi(700,460,100,40)).lm(-360,180).mt(-20,10)


        w.rJ(   w.baa( 850, 460 ), w.bi( 850, 460, 100, 40 )  ).lm( 0, 1000 ).mt( -20, 10000 )





    }
    BOOTCAN = function () {W({g: 0})
        w.rJ(w.S(300,600, 'a', 200),
            w.D(300,400, 'b',100,100))
        b = w.D(270, 500, 'o', 40).r(.5)
        r = w.S(300, 300, 'g', 100, 20).d(.1).damp(1000,1000).rt(100).dyn()
        r.rec('g',20, 40, 60, -20)
        cjs.t(function(){b.F(0, 400)})

    }

    MECH=function(){W().P().P().P().Y()
        w.rJ(
            w.D(800,300,'r',20,300),
            w.D(800,300,[['b',100],['y',50,10,100,0]])
        ).mt(10)

        dir = 10
        car= w.S( 300,300, 'r',  200,20)

        b=w.D(250,300,'b', 40).d(5).bS('me')

        j = w.rJ(b, car)//.mt(10)

        b2=w.D(350,300,'b', 40).d(5)

        b2.bS('me')

        j1 = w.rJ(b2,
            car).mt(10)


        w.$(function(){
            dir*=-1
            j.mt(dir)
            j1.mt(dir)
        })

        $.ev(1, function(){w.D(300,500,'y',20)})


    }







//localAnchorA - the point in body A around which it will rotate
//localAnchorB - the point in body B around which it will rotate
//referenceAngle - an angle between bodies considered to be zero
// for the joint angle
//

    old=function(){

//Stuff={}
        RevoluteJointDefX = revX = function(a,b, c,d, e,f){var g=G(arguments)

            //pass in body1, body2, world-bV = body1-center
            //can also pass body1, body2, world-x, world-y
            //or body1, body2, local-axis-A-x, local-axis-A-y, local-axis-B-x,local-axis-B-y


            var j=   new BXJ.b2RevoluteJointDef()

            var joint = j

            joint.init =joint.i = function(){
                joint.Initialize.apply(joint,  G(arguments) )
                return joint}

            //convenience functions
            joint.motor = joint.mt = function(speed, torque, enable){

                joint.speed(speed)

                joint.maxTorque( N(torque)? torque : 100)

                if( enable != '-' ){ joint.enableMotor=true }

                return joint }

            joint.limits = joint.lm= function( lowAng, upAng, enable ){

                joint.lowAng( lowAng ).upAng( upAng )

                if( enable != '-' ){ joint.enableLimit = true}

                return joint }

            if( U(c) ){ c = a.worldCenter() }

            if( O(c) ){  joint.init( a, b, c )}

            else if(N(e)){   joint.A(a).B(b).lAA( V(c/30,d/30)).lAB( V(e/30,f/30)) }

            else if(N(c)){    joint.init(a,b, V(c/30,d/30)) }

            //SuperJointDef( joint )

            return joint}
        w.revX = function (b1, b2, c, d, e, f) {$l('rev')
            var w=this, g=G(arguments),  aC, bC

            j=new b2d.RevoluteJointDef

            //pass in body1, body2, world-bV= body1-center
            //can also pass body1, body2, world-x, world-y
            //or body1, body2, local-axis-A-x, local-axis-A-y, local-axis-B-x,local-axis-B-y

            if(N(g[4])){
                j.A(g[0]).B(g[1])
                    .lAA(V(g[2], g[3]).div())
                    .lAB(V(g[4], g[5]).div())}

            else if(N(g[2])){
                j.init(g[0],g[1], V(g[2], g[3]).div())
            }


            else if(g[2]){  j.init(  g[0],  g[1],  g[2]) }

            else {

                aC = g[0].wC()
                bC = g[1].wC()

                j.init(   g[0],  g[1],  V(bC.x - aC.x, bC.y - aC.y).div() )
            }

            return w.J(j)
        }
    }
    /*rev joint uses:
     wheels or rollers
     chains or swingbridges (using multiple revolute joints)
     rag-doll joints
     rotating doors, catapults, levers
     */
    /*
     jd.refAng=jd.rA=function(a){
     jd.referenceAngle= tRad(a); return this}
     jd.maxTorque=jd.mMT=function(a){
     this.maxMotorTorque=a
     return this}
     jd.lowAng= jd.lA = function(a){
     this.lowerAngle=tRad(a); return this}
     jd.upAng= jd.uA = function(a){this.upperAngle=tRad(a); return this}
     jd.rat = jd.r=function(a){this.ratio = a; return this}
     jd.axis = jd.lXA=function(a){ this.localAxisA=a; return this}
     jd.mot = jd.motor =  function(speed, torque, enable){
     this.speed(speed)
     this.maxTorque( N(torque)? torque : 100)
     if( enable != '-' ){
     this.enableMotor=true }
     return this }
     jd.limits = jd.lm = function( lowAng, upAng, enable ){
     this.lowAng( lowAng ).upAng( upAng )
     if( enable != '-' ){
     this.enableLimit = true}
     return this }
     */



    b2d.p()
    wh=function(wh,sp){var j
        j= w.rev(wh.fr(0).d(1), s)
        if(N(j)){j.mt(sp)}
        return j}

    sus=function(x,y){return w.D(x,y,'b',90,30) }
    w.car=function(x, y, sp1, sp2){var w=this,b
        s= w.D(x,y,'b',90,30)//.bS('me')
        sp1 = sp1||2;
        sp2 = sp2||sp1
        w.rJ( w.D(x-40, y+50,'o',30),s).mt( sp1)
        b= w.D(x+60, y+50)
        b.cir({c:'x', r:30,rf:1})
        w.rJ(b, s).mt(sp2)
        return s
    }
    w.car1=function(){var w=this, s=sus(150,150)
        wh( w.D(200,150,'r',30), 120)
        wh( w.D(100,150,'b',30), 150)
        return s}
    w.roller=function () {var w=this,s=sus(250,150)
        a=w.D(300,150,'r',30)
        wh(a,6)

        // wh(w.D(200, 150, 'r', 30), -500)

        return s}
    w.makeCar=function(){var w=this,s=sus(240,350)
        wh(w.D(300, 400, 'r', 30),  4)
        wh(w.D(200, 400, 'y', 30), 4)
        return s}
    w.wh=function(){var w=this,g=G(arguments),wh,o
        o=O(g[0])? g[0]
            : {x:g[0],y:g[1],r:g[2],n:g[3]}
        o.r=N(o.r,40)
        o.c=o.c||'x'
        wh = w.D(o.x,o.y)
        wh.cir({c: o.c, r:o.r, C:'w',l:10, lf:1})
        return wh
    }
    w.pWh=function(){var w=this,g=G(arguments),wh,o
        o=O(g[0])? g[0]
            : {x:g[0],y:g[1],r:g[2],n:g[3]}
        o.r=N(o.r,40)
        o.n=N(o.n,15)
        o.c=o.c||'x'
        wh = b2d.pC(o.r,o.n)
        return w.D(o.x,o.y,o.c, [wh])
    }
    b.wheel=function(){var b=this,w= b.W(),g=G(arguments), o,
        j,wh
        o=O(g[0])? g[0]
            : {x:g[0], y:g[1]}//,r:g[2],n:g[3]}
        wh= w.wheel(600,300)
        j= w.rJ(wh, b,0,0, o.x, o.y)
        return j}

    HORSETETH=function(){W({w: 'L'}).P()

        s= w.D(300, 400,'b',90,30).d(1000).stat()


        //w.rJ(w.D(300-40, 400+50,'o',30), s)//.mt( 2)

        b= w.D(300+60, 400+50)

        b.cir({c:'x', r:30,rf:1})

        w.rJ(b, s)//.mt(2)

        //   w.car(100, 350, -2, 2)
        //  w.car(440, 350, 2, -2)
        // w.car(440,350,4)
        // w.car(540,350,2)

//w.makeCar()

        //car = w.car()
        w.dst(p, car).len(0)
        w.floor.fr(.1)



        w.roller()

        //_.t(3, function(){w.roller()})

//    $.ev(2000, function(){w.roller()})
        //  p.X(1750)

    }

    WAG=function(){W([1200,600,4000,600],{}).P()


        p.d(.2).track().cl(function(){
            p.onGround=true
        })

        x= w.D(600,300,'r',300,50).d(2).fr(3)

        wh= w.D(500,320)
        wh.cir({r:20, lf:'x'})
        w.rJ(x,wh)

        wh= w.D(550,320)
        wh.cir({r:20, lf:'x'})
        w.rJ(x,wh)

        wh= w.D(600,320)
        wh.cir({r:20, lf:'x'})
        w.rJ(x, wh)

        wh= w.D(650,320)
        wh.cir({r:20, lf:'x'})
        w.rJ(x, wh)

        wh= w.D(700,320)
        wh.cir({r:20, lf:'x'})
        w.rJ(x, wh)


    }



    WHL=function(){W(0).Y()

        x= w.S(600,300, 'r', 500,500,'-')


        wh= w.pWh({
            x:450,
            y:50,
            c:'z',
            r:50,
            n:9
        })


        w.rJ(x, wh, 50,-100)





        wh=w.pWh({x:450, y:50,
            c:'b',
            r:50,
            n:5
        })

        w.rJ(x, wh, 0,100)  //  x.rev(wh,0,100)


        wh= w.wh({
            x:450,
            y:50,
            c:'z',
            r:50,
            n:9
        })


        w.rJ(x, wh, -150,-50)




        /*
         x.wheel(0,0)

         x.wheel({
         x:450, y:50,
         c:'b',
         r:50,
         n:5
         })
         */
    }

    STAND=function(){
        W([600,1000,600,1200],{}).P('+')

        //y= w.ship(500,200)

        dir = 12



        car= w.D(300,300, 'r', 200,45)

        w1 = w.rJ(
            wheel(250,300),
            car
        ).mt(10)

        w2 = w.rJ(
            wheel(350,300), car
        ).mt(10)


        car3=w.D(500,300, 'r',  200,45)
        w.rJ(wheel(450,300), car3).mt(-10)
        w.rJ(wheel(550,300), car3)
        car3= w.D(700,300, 'r',  200,45)
        w.rJ(wheel(650,300), car3).mt(-10)

        w.rJ(wheel(750,300), car3).mt(-10)


        function wheel(x,y){
            pC=[b2d.pC(45,10)]
            return w.D(x, y, 'b', pC ).d(5)
        }

        w.$(function(){

            dir*=-1
            w1.mt(dir)
            w2.mt(dir)

        })

    }

    WHEEL=function(){W([1200,600,2400,600],{g:50}).P()

        p.track()

        yy=w.y().aD(5000)//.fixRot()

        dir = 12
        pC=[b2d.pC(45,10)]

        car= w.D(300,300, 'r', 200,45).fr(5)
        w.rJ(
            wheel(250, 300),
            car,0,0,100,0
        ).mt(-10)
        w.rJ(
            wheel(250, 300),
            car,0,0,-100,0)

        /*
         car= w.D(800,300, 'r', 200,45).fr(5)
         w.rJ(
         wheel(850, 300),
         car,0,0,100,0
         )
         w.rJ(
         wheel(850, 300),
         car,0,0,-100,0).mt(10)

         */
        function wheel(x,y){
            return w.D(x,y,'b',pC).d(5)}


    }



    BIKE1=function(){  W([1200, 600, 10000, 600], {})

        //yy=w.y().aD(5000)//.fixRot()
        dir = 12

        car = w.D(300, 300, 'r', [
            [200, 20],
            [20, 165, -50, -50, 45],
            [20, 165, 50, -50, -45]
        ]).fr(5).track()

        _.t(30, function(){
            w.me(R(9000,500), 100, R(2,.5))
        })

        wh = wheel(250, 300).C('b').bS('me',.7)

        j = w.rJ(
            wh, //.lD(100).aD(100).fr(100),
            car,
            0,
            0,
            100,
            0
        )


        w.rJ(
            wh2= wheel(250, 300, 50,10).C('g')
                .bS('me',.4).aD(10).fr(2),
            car, 0, 0, -100, 0
        )

        j =  w.rJ(
            wh3= wheel(250, 300, 25,6).C('y').bS('me',.2).lD(100).aD(100).fr(100),
            car, 0, 0, 0, -100
        )


        function wheel(x, y, r,n) {
            r = N(r, 80)
            n = N(n,15)
            pC = [b2d.pC(r, n)]
            return w.D(x, y, 'w', pC)//.d(5).r(0).lD(100).aD(100).fr(100)
        }


        // j.mt(-50)
        T.t(function(){var K=cjs.Keys
            car.I(0,5000)

            if(K.r){
                wh.ApplyTorque(3500)
                wh2.ApplyTorque(3500)
                wh3.ApplyTorque(150)
            }

            if(K.l){
                wh.ApplyTorque(-3500)
                wh2.ApplyTorque(-3500)
                wh3.ApplyTorque(-150)
            }


            if(K.u){
                wh.ApplyTorque(1500)
                wh3.ApplyTorque(-500)
            }

            if(K.d){
                wh2.ApplyTorque(-500)
                wh3.ApplyTorque(1500)
            }
        })

        //car.aD(1000).lD(1000)
    }


    TANK=function(){W({g:0}).P()
        g = V( 0, 1000 )
        dir = 12

        car= w.S( 300,300, 'r',  100, 5)

        w1 = w.rJ(
            w.D(250,300,'b',
                [ b2d.pC(45,10) ]  ).d(5),   car)//.mt(10)
        w2 = w.rJ(
            w.D( 350, 300, 'b', [ b2d.pC(45,10)]).d(5), car)//.mt(10)
        /*
         w.$(function(){
         dir*=-1
         w1.mt(dir)
         w2.mt(dir)
         g = V(-g.x,-g.y)

         })

         cjs.t(function(){
         car.F( g )
         })
         w.right.cl(function(){g=V(-1000,0)})
         w.left.cl(function(){g=V(1000,0)})
         w.roof.cl(function(){g=V(0,-1000)})
         w.floor.cl(function(){g=V(0,1000)})
         */

    }




    REVROPE=function(){W([1200,600], {g:0})

        // anchor = w.S(600,300,'z',50,50)
        //  anchor.rJ(15).C('z').rJ(w.y(300,100).cn('thrust'))



        w.S(200,100,'z',50,50)
            .rJ(200,150,'b', 30)
            .rJ(200,180,'r', 30)
            .rJ(200,260,'o', 10)


    }






    BIKE=function(){  W([1200, 600, 2000, 600], {})

        //yy=w.y().aD(5000)//.fixRot()
        dir = 12

        car = w.D(300, 300, 'r', [
            [200, 20],
            [20, 165, -50, -50, 45],
            [20, 165, 50, -50, -45]
        ]).fr(5).track()//.lD(1000)

        _.t(30, function(){w.me(R(9000,500), 100, R(2, .5))})


        wh = w.D(250, 300, 'w', 60).C('b').bS('me',.6)//.lD(5).aD(5)
            .fr(10).r(.8)

        wh1= w.D(250, 300, 'w', 60).C('g')//.lD(5).aD(5)
            .bS('me',.6).r(.8).fr(10)
        //.aD(10).fr(2)

        //w.b_.fr(100)

        j = w.rJ(
            wh, //.lD(100).aD(100).fr(100),
            car,
            0,
            0,
            100,
            0
        )//.M(.1)

        j1=  w.rJ( wh1, car, 0, 0, -100, 0 )//.M(.5)



        // j.mt(-50)
        T.t(function(){var K=cjs.Keys

            car.I(0,5000)

            if(K.r){

                // wh.ApplyTorque(5500)
                j.mt(-500)
                j1.mt(-500)
            }

            else if(K.l){
                // wh.ApplyTorque(-3500)

                j.mt(500)
                j1.mt(500)

            }
            else {j.mt(0)}


            if(K.u){

                wh.ApplyTorque(1500)

            }

            if(K.d){

                j.SetMotorSpeed(0)
                j1.SetMotorSpeed(0)

                wh1.ApplyTorque(-500)

            }
        })



        //car.aD(1000).lD(1000)
    }


    j.M=function(t){
        this.SetMaxMotorTorque(t)
        return this
    }

    pinball=function(){

        w.flips = w.flippers = function (x, y, x2, y2) {

            if (U(y2)) {
                y2 = y
            }
            if (U(x2)) {
                x2 = x + 230
            }

            var lf = w.lFlip(x, y),
                rf = w.rFlip(x2, y2)

            var flip = function flip() {
                lf.flip();
                rf.flip();
                return flip
            }

            flip.left = lf
            flip.right = rf

            return flip
        }
        LFLIP = function () {
            W()

            w.lFlip(600, 300)
        }
        FLIP = function () {
            W()
            f1 = w.flippers(100, 430)
            f2 = w.flippers(100, 230)
            f3 = w.flippers(300, 130)
            flip = function () {
                f1();
                f2();
                f3()
            }
        }
        w.rFlip = w.rightFlipper = function (x, y) {
            var w = this
            var rightJoint = w.S(x, y, 'r', 20),
                rightFlip = w.B(x, y, 'b', 100, 25).DBF(1, .5, 0),

                flipper = w.rev(
                    rightJoint, rightFlip, 0, 0, 40, 0
                ).lim(-70, 30)


            flipper.flip = function () {
                rightFlip.I(-1000, 0)
            }
            return flipper
        }
        w.lFlip = w.leftFlipper = function (x, y) {
            var w = this

            var fl = w.B(x, y, 'b', 100, 25).DBF(1, .5, 0),

                flipper = w.rev(
                    w.S(x, y, 'r', 20), fl,

                    0, 0, 40, 0
                ).lim(150, 250)

            flipper.flip = function () {
                fl.I(1000, 0)
            }

            return flipper
        }
        PINBALL = function(){W([420,600],{})
            w.floor.kill()



            w.S(215, 520, 'r', 30).K('bump').DBF(10, .8, 0)
            w.S(215, 100, 'b', 100, 10).K('shelf')



            w.D(215, 90, 'r', 20)
                .bS('sun', .24)
                .K('sun')
                .rot(10, 100)

            flip = w.flips(100, 430)

            $.tap(function () {
                    var b = w.B(R(300, 40), 160, 'g', 20).DBF(1, .2, 2)
                    if (!R(10)) {
                        b.bS('me', .24)
                    }
                    flip()
                }
            )

        }




    }; pinball()





};revJ()
distJ=function(){


    b2d.p()



    dJ.fq=  dJ.freq= function(fq){var j=this
        if(U(fq)){return j.GetFrequency()}
        j.SetFrequency(fq)
        return j}
    dJ.l=   dJ.len= function(a){var j=this, g=G(arguments),
        l = j.GetLength() * 30
        if(g.u){return l}
        j.SetLength(
            _.upd(j,g.f,g)/30)
        return j
    }
    dJ.d=   dJ.damp= function(dR){
        if(U(dR)){return this.GetDampingRatio()}
        this.SetDampingRatio(dR)
        return this
    }


    /*
     jd.freq=  function(a){
     if(U(a)){return this.frequencyHz}
     this.frequencyHz=a;return this
     }
     jd.len=function(len){
     if(U(len)){return this.length*30}
     this.length=len/30
     return this}
     jd.damp = function(a){if(U(a)){return this.dampingRatio}
     this.dampingRatio=a;return this}

     */

    j.shrink=function(){var j=this
        j.len(0.97,'*')
        return j
    }



    DISTY1=function(){W([600,600,600,1200])
        b= w.D(300,200, 'b', 150).tr()
        x=  w.D(200,100,'x', 20).cn('thrust').bS('me').aD(100).fR()
        jD =new b2d.Joints.b2DistanceJointDef
        wAncA= V(300, 200,  '-')
        wAncB= V(200, 100 , '-')
        jD.Initialize(x, b, wAncA, wAncB )  // dJD.collideConnected = true;
        j = w.J(jD)
    }

    b2d.dJ=function(){var g=G(arguments),jD,o

        o = { a:g.f, b:g.s }

        if(N(g.t)){
            o.ancA = V(g.t, g[3] )
            o.ancB = V(g[4], g[5] )
        }

        if(O(g.t)){ o.ancA = V(g.t); o.ancB = V(g[3]) }

        o.ancA = o.ancA || o.a.wC()
        o.ancB = o.ancB || o.b.wC()


        jD = new b2d.Joints.b2DistanceJointDef
        jD.Initialize( o.a, o.b, o.ancA.d(), o.ancB.d() )

        return jD
    }

    w.Chain= function(fn){var w=this
        var chain = {
            JS:[],
            NS:[]
        }
        chain.eJ=function(fn){
            _.e(this.JS, fn)
            return this
        }
        chain.eN=function(fn){
            _.e(this.NS, fn)
            return this
        }
        chain.f=function(fq){return this.eJ(function(j){j.fq(fq)})}
        chain.d=function(d){return this.eJ(function(j){j.d(d)})}
        chain.l=function(l){return this.eJ(function(j){j.l(l)})}
        chain.j=function(){var g=G(arguments)
            var j=w.J(  $a(b2d.dJ, g)  )

            this.JS.push(j)
            return j
        }

        chain.J=function(o){

            var j =  this.j(o.a,  o.b)

            if(N(o.f)){j.fq(o.f)  }
            if(N(o.d)){j.d(o.d)  }
            if(N(o.l)){j.l(o.l)  }
            return j

        }
        return chain
    }

    DISTY=function(){W([1000,600], {})
        //p.lD(2).fR()//.r(1.6)

        // p.stat()
        chain = w.Chain()
        p = w.p(300,300, 2);
        v0 = w.S(200,100, 'r', 15).d(15)
        v1 = w.D(300,150, 'y', 15).d(15)
        v2 = w.D(200,200, 'g', 15 ).d(15)

        chain.j(v0, v1)//.fq(20).d(0)
        chain.j(v1, v2)//.fq(20).d(0)

        chain.j( p,v2, p.X(), p.Y()-40, v2.X(), v2.Y()
        )//.fq(30).d(1)

        // T.t(function(){  p.F(0,20)  })
        // _.e(js, function(j){ j.l(40).fq(12).d(3)  })

        // p.F(0,100,'+')

        // chain.d(0).f(60)

        chain.d(.4).f(12).l(40)
    }





    /* overlap??
     http://www.box2d.org/manual.html - also has other stuff
     b2Transform xfA = …, xfB = …;

     bool overlap = b2TestOverlap(shapeA, indexA, shapeB, indexB, xfA, xfB);
     */
//body.GetTransform()
//body.GetFixtureList().GetShape()



    w.dJ=function(){var w=this,g=G(arguments),jd,j,o

        o= g.O?g.f  : _.x(
            {a: g.f, b: g.s},
            O(g[3])? {av: g.t, bv:g[3], l:g[4], f:g[5], d:g[6]} :
                O(g.t)?{av: g.t, l:g[3], f:g[4], d:g[5]} :
                {l:g.t, f:g[3],d:g[4]}
        )

        b2d.dJ=   function(){var g=G(arguments), dJD=new b2d.Joints.b2DistanceJointDef


            dJD.i=function(a, b, aV, bV){var jd=this, g=G(arguments), o

                o = g.O ? g.f: { a: g.f,  b: g.s,  aV: g.t,  bV: g[3] }

                if(o.av){ o.aV=  o.a.wC().add( o.av || V() ) }

                else { o.aV = o.aV || o.a.wC() }

                o.bV = o.bv ? o.b.wC().add( o.bv || V() ) : o.bV || o.b.wC()

                if(g.n){

                    o.aV = o.aV.d()
                    o.bV = o.bV.d()
                }
                //////////////////////////////////
                jd.Initialize(o.a, o.b, o.aV, o.bV)
                /////////////////////////
                if(o.cl){jd.cl(true)}

                return jd

            }

            if(g.f){dJD.i(g.f,'-')}

            return dJD

        }


        jd = b2d.dJ(o)
        if(o.cl){jd.cl(1)}
        j= w.J(jd).fq(N(o.f,0)).d(N(o.d,0))
        if(N(o.l)){j.l(o.l)}
        return j

    }






    b.dJ=  function (nxB) {var b=this, w=b.W()
        w.dJ(b, nxB)
        return nxB
    }


    LOCDJ=function(){W([2000,1400], { })

        x = w.S(300,400, 'r' ,100, 100)
        //b = w.D(400,200, 'b' ,100, 50, 0, 0, 28).fR()

        b= w.y(400,200,'+')
        j=  w.dJ( {  a:x,  b:b    }  )


        $.ev(.2, function(){

            w.dot(   j.GetAnchorA().m().x,  j.GetAnchorA().m().y )

            w.dot(   j.GetAnchorB().m().x,  j.GetAnchorB().m().y )

        })

        j.fq(8)

        j.d(0)

        // w.dJ(x,b)

        w.dot('z', 1310,400)
    }


    w.spg=  function (a,b){var w=this;
        a=a|| w.D(150,150,'b',50)
        b=b|| w.S(180,150,'w',50,50)
        return w.dJ({a:a,b:b,l:1,f:2})
    }



    w.brg=  function(x,y){var w=this,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10
        x = N( x,400 );
        y = N( y,100)

        FIRST= w.S(x,y,10)
        LAST = w.S(x+700,y,'b',10)

        b2 = wood()
        b3 = wood()
        b4 = wood()
        b5 = wood()
        b6 = wood()
        b7 = wood()
        b8 = wood()
        b9 = wood()

        _.e([
                [FIRST,b2],
                [b2,b3],[b3,b4],[b4,b5],[b5,b6],[b6,b7],[b7,b8],[b8,b9],
                [b9,LAST]
            ],
            function(p){
                w.dJ({
                    a:p[0],b:p[1],
                    l:6,f:5,
                    coll:1})})

        function wood(){
            return w.D(100,100,'d',90,60).d(1).fixRot()}
    }
    j.wU= j.wu= j.wind=function(){var j=this,wound
        cjs.t(function(){var l,m
            m=wound?1.01:.99
            l=j.l()*m
            j.l(l*m)
            if (l<5){wound=1}
            if (l>200){wound=0}})}



    DJ = function () {W([1400,800], {g: 1000}).Y(500,300);y.tr()


        w.S(400,500,'r', 4, 2000)

        w.dJ({
            a: w.D(200, 200, 'b', 50),
            b: w.D(300, 200, 'b', 60),
            l: 50, f: 3, d: .1,
            cl: 1
        })

        w.dJ({
            a: w.D(200, 200, 'd', 50, 50),
            b: w.D(300, 200, 'd', 60, 60),
            l: 50, f: 3, d: .1, cl: 1
        })



        w.dJ(w.D(200, 200, 'o', 50), w.D(300, 200, 'o', 40)).l(50).fq(3).d(.1)

        w.spg(  w.S(200, 100, 'g',10).sen(1),  w.D(200, 250, 'b',250, 10).K('rec')  ).fq(3).d(.1)

        oj = w.dJ(w.D(830,700,'o',50).bS('me'), w.S(900,0, 'o', 50,50)).l(200).fq(5).d(.1)
        T.t( function () {if (oj.l() > 1) {oj.l(oj.l() -.002)}})

        w.spg(
            w.S(500,100,'o',10,'-'),
            w.D(500,250,'r',250, 10).K('rec')
        ).fq(3).d(1)


        w.spg(
            w.S(1200, 125,'c', 10,'-'),
            w.D(1200, 275, 'r',250, 10).K('rec')
        ).fq(10).d(.5)


        w.dJ(
            w.D(600, 300, 'z', 30),
            w.S(900,500,'z',50,80,0,0,20)
        ).l(20).fq(5).d(.1)//.coll(false)

        w.dJ(
            w.D(130, 450,'b', 30),
            w.S(130,800)
        ).l(120).fq(5).d(0)//.coll(true)

        b2 = w.D(500,300,'w',4,500)

        w.dJ(w.S(500,200,'r', 70),  b2)

        w.dJ(b2, w.D(500,300,'g',90))
        w.dJ(
            y.XY(200,200),
            x=w.D(200,220, 'r', 12))
        w.dJ(x,x=w.D(200,250, 'r', 12))
        w.dJ(x,x=w.D(200,280, 'b', 12))
        w.dJ(x,x=w.D(200,320, 'g', 12))
        w.dJ(x,x=w.D(200,360, 'u', 12))
        w.dJ(x,x=w.D(200,420, 'g', 12))
        w.dJ(x,x=w.D(200,500, 'u', 12))

        xx=w.S(1100,40,'x',40)
        jj = w.dJ({  a:xx,
            b:w.D(1050,200,'r',20,60),
            l:200,  cl:1, coll:1})
        kk = w.dJ(xx, w.D(1100,200,'y',20,60),200)
        w.S(800,40,'o',200,100,'-','sen')  //can get triggered many many times?
        w.cl('sen',
            function(){
                jj.wind();kk.wind()
            }
        )
    }









    SPG = function () {W([2000,1300],{g:1000}) .P(300, 320)
        // y.tr()

        // w.brg(860, 1060)
        //and more..
        // here i bind bodies with fixtures that are alredy out of line
        w.dJ(w.D(800, 100, 'y', 20),
            w.D(800, 150, 'o', b2d.pol(20, 20, 15, 15, 45)),
            30)
        w.dJ(
            w.D(900, 300, 'g', 20),
            w.D(910, 320, 'b', 20, 20),
            30)
        b1=w.S(200, 200, 'y', 50)
        b11= w.D(200, 200, 'x', 50, 50)
        w.dJ(b1, b11, 60)



        r = w.D(100, 100, 'r', 40)
        u = w.S(500, 300, 'u', 200, 100)
        j = w.dJ(u, r, V(100,100)).l(50)
        w.dJ(u, w.D(300,400,'b',20), V(-100, 100)).l(50)
        w.dJ(u, w.D(600,300,'g',20), V(100, -100)).l(50)
        w.dJ({a: u,
            b: w.D(300, 400, 'o', 20),
            av: V(-100, -100),
            coll: 1, l:50})


        p.tr().r(1)


        SoftPlat(300, 400)
        SoftPlat(500, 380)
        SoftPlat(700, 340)
        SoftPlat(900, 420)

        function SoftPlat(x, y) {x = N(x,300); y = N(y,60)

            w.dJ({
                a:w.S(x, y, 'z',8,'-'),
                b:w.D(x, y, 'w', 100, 30).d(1).r(0).fR(),
                l:.1,
                f:10
            }).d(.1)}




        w.tpl= function(x,r,fq,d){var w=this, bouncer, j
            x= N(x,290)
            r=N(r,75)
            fq=N(fq,6)
            d=N(d,0)
            j = w.dJ(
                w.S(x,1080,'w', 20, 20),
                w.D(x, 1000, 'b',200,20)
                    .fR().d(0).r(r).fr(0))
            j.l(115).fq(fq).d(d)
            w.S(x- 120, 1090,'b',40,300).fr(0)
            w.S(x+120, 1090,'b',40,300).fr(0)
            return j
        }


        w.tpl(200, 0, 6)// not bouncy

        w.tpl(500, 1.2, 6)// too bouncy
        w.tpl(800, .75, 6)// mid bouncy, mid freq
        w.tpl(1100, .75, 2)//low freq
        w.tpl(1400, .75, 12)//high freq

        //$.ev(1,function () {p.I(0, -150)})
        //$.in(15, function(){w.addHundBalls()})


        //freq is SPEED of oscillation
        //damp is STRENGTH of oscillation
        // so bodies cant rotate if they dont have density???




    }








//default freq is 0.  but thats like freq 10000000
//freq is tightness.  the default (0) is all the way tight.
//if u want to start to loosen it.  change from 0 to a very high number!
//try 50.. then u will see that it budges just a little.
//ok.. now keep going down..
// eventually it is too loose to fight against gravity
// hahaha then its just flat and usesless
// ok all this assumed a default damp of 0.
// now set the freq to a good oscillation (3 or 4)
// then play with the damp
// damp is like a tightner on your looseness
// it makes you less stretchy?
// just leave damp at 0 for now, and play with freq

//game:: he autojumps.  u jump to give him a double jump!
    SPOLL=function(){W({g:0,w:0});Q(function(){
        s=w.s
        e=w.S(200,200,'p',100)
            .d(1).r(2)
            .bS({i:q.bm('earth'),sc:.13})
            .K('earth'); eI= e.ch()


        // p= w.player(200,200,2.5, 'thrust').d(.4).aD(8).lD(.8)

        p= w.D(200,200).cn('thrust').Bm( 'me', 0, 0,  0.25*sc    )

        w.dJ({a:p,b:e,l:50,f:100.15,cl:1})

        T.t(function(){var sp,
            dx=e.X()-p.X(),
            dy=e.Y()-p.Y(),
            sc= cjs.cap(300/
            M.sqrt(dx*dx+dy*dy), .3, 2)
            s.X( 300-sc*(p.X()-300) )
            s.Y( 150-sc*(p.Y()-150) )
        })



    })}


    b.ch=function(n){
        if(this.gx){
            return this.gx.children[N(n,0)]
        }
    }

    SPOOM=function(){Q(function(){W({g:0, w:0});

        SCALE=1//W:600, H:300,

        w.can.C('z')
        s=w.s

        _.t(80,function(){
            w.cir(R(2000,-750),R(1600,-600 ),4,'w').d(0).r(2).K('star')})

        s.rXY(300, 150)

        e=w.S(600,300,'p',100).d(1).r(2).K('earth')

        e.gx= e.gx|| w.g.ct()

        e.gx.A(  Q.b('earth').rC().sXY(.13)    )


        eI= e.ch()

        //  p= w.me(200,200, 2.5).cn('thrust').d(.4).aD(8).lD(.8)

        p=  w.D(200,200,'x', 100,200)
        p.cn('thrust')
        p.Bm( 'me'  )

        j=w.dJ({
            a:p,
            b:e,
            l:600,
            f:2,
            d:2,
            cl:1
        })


        T.t(function(){var sp,
            wd=300
            ht=150
            dx=e.X()-p.X(),
                dy=e.Y()-p.Y(),
                sc= cjs.cap(300/ M.sqrt(dx*dx+dy*dy), .3, 2)
            s.X(wd- sc*(p.X()-wd))
            s.Y(ht- sc*(p.Y()-ht))
            s.sXY(sc)
            s.al(sc*2);
            eI.al(sc)
        })


        s.twL(
            [{kx:8},1000],
            [{kx:0}, 1000],
            [{ky:8}, 1000],
            [{ky:0}, 1000])
        eI.twL([{r: 360}, 10000])
        eI.twL([{kx:16}, 3000], [{kx:0}, 3000])
        p.cl('star', function(){p.ch().tw(
            [{kx:40},100],
            [{ky:40},100],
            [{kx:0,ky:0},100])})
        e.cl('star', function(){   w.pop('star hit earth!!')  })

    })



    }





    RAGD=function(){W({})


        w.spring(
            b1 = w.D(100, 100,'b', 30),
            w.D(100, 200,'r', 40))

        w.dJ(
            b2 = w.D(100, 400,'g', 30,30),
            w.D(100, 500, 'o',40,40)
        )
        p = w.me(500,200)

        w.spring(b1, p)
        w.spring(b2, p)

    }


//w.l(0,0,w.W,w.H); w.l(w.W,0,0,w.H,'+')






// game:: density:  if u want to fit in here.. u will have to lower yourself a bit to our level..
// you see, compared to you, we a really quite dense. Not dense as in stupid, but as in, we have a high mass to volume ratio.
//  In otherwords, we can't jump!  It's a grave grave situation.
// Don't get me wrong, not grave as in bad, but grave, as in, it relates to gravity.  Additionally, it's quite bad.

    old=function(){

        w.distCollx=function(){var w=this, g=G(arguments)
            return w.dist({a:g[0],b:g[1],av:g[2],bv:g[3],coll:true})}
        w.distCollxx=function(){var w=this,
            g=G(arguments)

            return w.J(b2d.dJ({
                a:g[0],  b:g[1],  av:g[2],   bv:g[3]
            }).coll(true))

        }
        w.rodx = function(a,b,l){var w=this
            return w.dist({
                a: a|| w.D(150,150,'b',50),
                b: b|| w.S(180,150,'w',50,50),
                l: _.tN(l, 200),
                coll:true
            })}
        w.springx = function(a,b){var w=this;
            return w.dist({a:a|| w.D(150,150,'b',50),b:b|| w.S(180,150,'w',50,50), l:1, f:2 })}
        w.distLinkX=w.ropePiece = function(x, y){var w=this; return w.D(x,y,'w',3,5).bo(0).aD(10)} //link for distance ropes
        w.tightDistX = function(a, b){var w=this;return w.dist(a,b,1,1000,1000)} //l,f,d

    }
// ok so freq is how much strngth u need to pull it??
// as freq gets low.. u can pull it farther away
// its the strength of the spring



// dont ever set a dJ().len(0)
//location pams are optional,
// and be default to their center points
// note: if you passe them in,
// pass them as relative(local to body) coords
//BOX2D requires them as WORLD points
// - for some reason..
// (but i think my way has more use cases)
//pass coll:true -> 'collideConnected=true'


    b2d.p()
    b.rJ=function(b1,yOff){var b=this,w=b.W(),g=G(arguments), c,cc
        if(b2d.iF(b1)){b1=b1.B()}
        if(b2d.iB(b1)){b1.XY(b.X(),b.Y())
            w.rJ(b, b1)
            return b1}


        if(R()){
            c='r'
            cc=1}
        else {c='g'}

        _.t(N(g[0],1),function(){

            var nB = w.rJ( b )

            nB.Y( N(g[1],8),  '+')

            w.rJ(b, nB)
            b=nB})

        return b

        //pad=N(pad,15)
    }
    w.vine=function(x,y,n,m){

        return this.rJ(x,y, n,'/').rJ(n||10,m).K('leaf')
    }
    w.trap=function(x,y){var w=this
        x=N(x,300);y=N(y,50)
        w.vine(x, 100,5)
        w.vine(x+20, y, 6)
        w.vine(x+40, y, 10)
        w.vine(x+60, y, 10)
        w.vine(x+80, y, 6)
        w.vine(x+90, y, 4)
        return w
    }
    w.link1 = function self(x,y,n){var g=G(arguments),
        b=w.rJ(x,y,'*')
        b.add=function (n) {var b=this
            _.t(N(n,1),function(){var nB
                nB= w.rJ(b.X(), b.Y()+24,'*')
                w.rJ(b, b=nB)})
            return b}
        if (g.p) {b.stat()}
        if (N(g[2])) {b.add(g[2])}
        return b
    }




    VINE=function(){W(250).Y().P()


        w.trap(50)
        w.vine(200,100,15,8)
        w.vine(210,100,25,8)
        w.vine(220,100,25,5)
        w.vine(260,100,3,35).rJ(3,20).rJ(3,35)
        w.vine(300,100,30,2)



        //blinds
        w.rJ(
            w.link1(600,20,3,'+').add(10),
            w.p(500,200),'+')



        //ropey
        b = w.S(1100, 50, 'g', 60, 15).d(1)
        _.t(10, function (y) {
            w.rJ(
                b,
                b = w.D(1100, y * 20 + 80, 'w', 3, 15).d(1))})
        w.rJ(b,
            w.D(1100, 11 * 20 + 50, 'd', 20).d(1))




        p.cl('leaf', function(l){
            w.jt=w.rJ(l.B(), p.XY(l.B()),  R()?'*':null)
            $.space(function(){w.j(w.jt)})})
    }

    LEASH=function(){W()




        p= w.p(300,200)
        base = link(300, 20).stat()
        l =  base.rJ(10)


        w.rJ(l, p.XY(l.X(), l.Y()))
        base = link(100, 20).stat()
        l =  base.rJ(10)
        w.rJ(l, p.XY(l.X(), l.Y()))


        function link(x,y){var l= w.rJ(x,y,'+')
            l.l= function(n){var lk; n=N(n)?n:1
                _.t(n,function(){
                    lk =  link(l.X(), l.Y()+10)
                    r= w.rJ(l,lk)
                    l = lk })
                return l}
            return l}

        /*

         w.link2 = function(x,y){var w=this,b

         b=w.rJ(x,y,'+')

         b.l=function(n){var b=this, w=b.W()
         _.t(N(n,1), function(){
         w.rJ(b, b=w.l(b.X(),b.Y()+15))
         })
         return b}

         return b

         }

         link3 = function(x,y){
         var l= w.D(x,y,'y', 5, 10).d(4).r(2)
         l.l= function(n){
         _.t(N(n,1), function(){
         l = link3(l.X(),l.Y()+20)})
         return l}
         return l}

         link0=function(x,y){return w.D(x,y, 'w', 3, 15).d(1).fr(0).r(0)}

         p2= w.p(1000,200)
         base2 = w.link2(1000,20).stat()
         l2 =  base2.rJ(10)
         w.rJ(l2,p2)


         w.$(function(){
         base3 = link3(600,20).stat()
         l3 =  base3.l(10)
         })



         w.floor.r(0)
         prev = top = w.S(400,50,'g', 60,15)
         _.t(10, function(i){var next
         next=link(255,(i+1)*30)
         prev = prev.rJ(next)})
         //body.rev(body2) returns body2 !!!!!
         w.rJ(prev, w.D(400, 330, 'd',20).d(1).r(0))




         y = w.y(600,170).rot(265).stat()
         w.cl('bu',function(f){
         if(!f.of(y)){f.B().kill()}
         })

         */



    }


    BIO=function(){

        W().randRects()

        var dJ

        p = w.D(320,460,'b',40,80)
            .Bm('me',0,0,.2)
            .fR()

        var l, node

        w.mu(function(){

            dJ = dJ && w.j(dJ) // ??
            node = null
        })


        w.md(function(o){  if(o.f   ){

            var cen= p.wC()

            dJ = w.dJ(p,  o.b,
                cen.x, cen.y,
                o.x,  o.y)

            node= o.b




        }

        })



        T.t(function(){

            if(dJ){
                // $l(dJ.l())
                p.wake()
                dJ.l(dJ.l()*0.97)

                if(l){l.rm();l=null}
                l = w.l('w',
                    p.X(), p.Y(), node.X(),  node.Y()
                )


            }
        })


    }


    KILL = function(){W()//.Y()
        y= w.y()

        w.randRects()

        l=w.S(255,50,'g',60,15)
        for(var i=1;i<=10;i++){w.rJ(l,b=w.D(255,i*30+30,'w',3,15).DFB(1,0,0));l=b}
        w.rJ(l, w.D(255,330,'d',20).DFB(1,0,1.1))
        l=w.S(900,50,'g',60,15)
        for(var i=1;i<=10;i++){w.rJ(l,b=w.D(900,i*30+30,'w',3,15).DFB(1,0,0));l=b}
        w.rJ(l,w.D(900,330,'d',20).DFB(1,0,1.1))

        // _.t(8,function(){w.me(700, 400)})
        _.t(4,function(){w.me(700, 300)})
        // _.t(1,function(){w.me(700, 200)})

        w.cl('bul', function(f){
            if(f.of(y)){alert('f.of y')}
            else {f.B().kill()}
        })



    }


//shrink = function(){_.e(ropeJoints, function(j){j.shrink()})}
//marionette game?



};distJ()


prisJ=function(){


    b2d.p()

    /*

     pJD.maxForce= j.mMF=function(a){var j=this
     j.maxMotorForce = a; return j
     }


     pJD.speed=j.mS=function(a){this.motorSpeed = a; return this}
     pJD.motor=j.eM=function(a){
     this.enableMotor = a?true:false; return this}
     pJD.maxSpeed =j.mMS=function(a){ this.maxMotorSpeed=a; return this }



     pJD.lowTrans=j.lT=function(a){
     this.lowerTranslation=a;return this}
     pJD.upTrans=j.uT=function(a){
     this.upperTranslation=a;
     return this}

     pJD.lm=function(a){ this.enableLimit=a?true:false;return this}

     -----


     pJ.speed = function (speed) {//j.mS
     this.SetMotorSpeed(speed)
     return this
     }



     */

    pJD.ax = pJD.axis= pJD.lAA=function(){
        var pJD=this, g=G(arguments),
            v = V(g[0],g[1])
        pJD.localAxisA.Set(v.x, v.y)
        pJD.localAxisA.Normalize()
        return pJD}
    pJD.rt= pJD.rA= pJD.ang=function(a){var pJD=this
        if(N(a)){pJD.referenceAngle=Math.toRadians(a)}
        return pJD}
    pJ.lm= pJ.limits=function(){
        var pJ=this,
            g=G(arguments), v, l,u
        if(U(g[0])){
            if(g.p){  pJ.EnableLimit(true); return pJ }
            else if (g.n) {pJ.EnableLimit(false); return pJ }
            else if (g.d) {pJ.lm( pJ.lm() ); return pJ }
            return pJ.m_enableLimit}
        v = V(g[0],g[1]).div()
        pJ.SetLimits(v.x, v.y) // ? pJ.SetLimits(l/30, (u+1)/30) ?
        if(g.N){pJ.EnableLimit(true) }
        return pJ}
    pJ.max=function(f){var pJ=this
        if(U(f)){return pJ.m_maxMotorForce}
        pJ.SetMaxMotorForce( f )
        return pJ}
    pJ.sp=function(s){var pJ=this
        if(U(s)){return pJ.GetMotorSpeed()}
        pJ.SetMotorSpeed(s)
        return pJ}
    pJ.F=function(f){var pJ=this
        if(U(f)){return pJ.GetMotorForce()}
        //pJ -> apply a force f
        return pJ}
    pJ.mt=function(){var pJ=this,g=G(arguments)

        if(N(g[0])){
            pJ.SetMotorSpeed(g[0])
            pJ.SetMaxMotorForce(N(g[1], 1000) )
            if(g.N){pJ.EnableMotor(true)}
        }

        else if(g.n){pJ.EnableMotor(false)}
        else if(g.p){pJ.EnableMotor(true)}

        return pJ
    }
    pJ.uL= pJ.U=function(uL){var j=this
        if(U(u)){return j.GetUpperLimit()*30}
        j.lm(j.lL(),uL)
        return j}
    pJ.lL= pJ.L=function(l){var j=this
        if(U(l)){return j.GetLowerLimit()*30}
        j.lm(l,j.U())
        return j
    }
    pJ.UL=function(u,l){return this.U(u).L(l)}
    pJ.LU=function(l,u){return this.L(l).U(u)}
    pJ.tl=pJ.val =pJ.tran= function(val){
        return parseInt(this.GetJointTranslation()*30)}
    pJ.lm= function(){var j=this, g=G(arguments),o
        o=A(g[0])?{
            lL:g[0][0],
            uL:g[0][1]}:
        {lL:g[0], uL:g[1]}
        if(g[0]==1){j.EnableLimit(true); return}
        if(g[0]==0){j.EnableLimit(false); return}
        j.SetLimits(o.lL/30, o.uL/30)
        if(g.N){j.EnableLimit(true)}
        return j
    }
    w.prism = function(a,b, x,y, rot){var w=this, jd, j
        jd=new b2d.Joints.b2PrismaticJointDef()



        a = A(a) ? a : [a]
        jd.bodyA = a[0]
        jd.localAnchorA =  O(a[1])  ?  a[1].div()  :  V(a[1],a[2],'-')

        b = A(b) ? b : [b]
        jd.bodyB = b[0]

        jd.localAnchorB =  O(b[1])  ?  b[1].div()  :  V(b[1],b[2],'-')
        jd.axis(x,y)
        jd.ang(O(x)? y: rot)

        o = O(g[0] && !b2d.iB(g[0]))? g[0]
            : _.x( {b1:g[0], b2:g[0]},
            O(g[2])? {axis:g[2], a:g[3]}  : {axis: V(g[2], g[3]), a:g[4]})
        g[0] = A(g[0]) ? g[0] : [g[0]]
        g[1] = A(g[1]) ? g[1] : [g[1]]
        o.A = g[0][0]
        o.aV =  O(g[0][1])  ?  g[0][1].div()  :  V(g[0][1], g[0][2],'-')
        o.B = g[1][0]
        o.bV =  O(g[1][1])  ?  g[1][1].div()  :  V(g[1][1], g[1][2],'-')
        jd.axis = V(g[2], g[3])
        jd.a =  O(g[2])? g[3]: g[4]


        if(A(o.a)){
            o.aV= V(o.a[1],o.a[2])
            o.a=o.a[0]}
        if(A(o.a)){
            jd.bodyA = o.a[0]
            if (O(o.a[1])) {jd.localAnchorA = o.a[1]}
            else if (N(o.a[1])) {
                jd.localAnchorA = V(o.a[1], o.a[2],'-')}}
        else {jd.bodyA = o.a}
        jD.bodyA=o.a



        if(A(o.b)){
            o.bV= V(o.b[1], o.b[2])
            o.b = o.b[0]}
        if (A(o.b)) {
            jd.bodyB = o.b[0]
            if (O(o.b[1])) {jd.localAnchorB = o.b[1]}
            else if (N(o.a[1])) {jd.localAnchorB = V(o.b[1], o.b[2],'-')}}
        else {jd.bodyB = o.b}
        jD.bodyB=o.b


        o.aV = o.aV  || o.a.wC();jD.localAnchorA= o.aV.div()

        o.bV = o.bV  || o.b.wC();jD.localAnchorB= o.bV.div()



        if (N(o.x)){jd.ax(o.x, o.y).rA(o.a)}
        else if(O(o.x)){jd.ax(x.x, x.y).rA(y)}
        jD.axis(o.ax)


        jD.rt(o.rA)

        return w.J(jd)
    }

    w.pJ=  function(){var w=this, g=G(arguments),o,j,
        jd = new b2d.PrismaticJointDef

        o = b2d.iB(g.f)  ?
        {a: g.f, b:g[1], ax:g[2], rA:g[3]} : g[0]
        jd.bodyA=o.a
        jd.bodyB=o.b
        o.aV=o.aV ||[0,0]; jd.aV(o.aV)
        o.bV=o.bV ||[0,0]; jd.bV(o.bV)
        o.ax=o.ax|| [0,1]; jd.ax(o.ax)
        o.rA=o.rA||0;
        jd.rA(o.rA)
        j=w.J(jd)
        if(o.lm){j.lm(o.lm)}
        return j

    }


    w.Elv=function(x, y, H){var w=this,elv, wire,j, speed = 10
        x=N(x, 400)
        j = w.pJ({
            a: wire= w.S(x, w.h - 200, 's', [[60, 60, '-']]).d(1).fr(1),
            b: elv= w.D(x+100, w.h-300, 'd', 200, 40).d(.1).K('elv'),
            lm: [-250, 100]
        }).mt(speed)
        elv.cl(
            _.db(reverse, 200, true)
        )
        function reverse(){ j.mt(speed *= -1) }
    }



    PJ=function(){W([1200, 600, 2400,1200], {}).P(100, w.h-200)

        p.d(.1).fr(1).K('p').track()

        speed=10

        j = w.pJ({

            a : w.S(400, w.h-200,'s',[[40,40,'-']]).d(1).fr(1),
            b : w.D(500, w.h-300,'d',200,40).d(.1).K('elv'),
            lm: [-250, 100]

        }).mt(speed)

        w.cl('elv', _.db(function(){j.mt(speed *= -1)}, 200, true))


        speed2=-100
        j2 = w.pJ({
            a:w.S(800,300,'s',40,40).d(1).fr(1),
            aV:[-30,2],
            b:w.D(800, 200,'d',200,40).d(1).K('box'),
            ax: V(0,1),
            rA:45

        }).mt(speed2)

        w.cl('box','p', function(){
            speed2 *= -1
            j2.mt(speed2)
        })



        w.p(500,200,'thrust').K('p').d(.02)




        w.pJ(
            w.S(1000,800,'y',40,40).d(1).fr(1),
            w.D(1100,900,'b',200,40).d(1),  [1,-.5],  25
        ).L(-300).U(200).lm('+')

        j3=w.pJ({
            a: w.S(240,150,'s',180,90),
            b: w.D(200,200,'d',200,20),
            aV: V(100, 10),
            rA: 5
        })

        j3.mt(-10)

        $.in(2, function(){ j3.mt('-') })
        $.in(4, function(){ j3.mt('+') })





    }


    ELV=function(){W([1200,600,3600,800])


        w.Z(1.2)
        w.Elv()
        sen =  w.S(1200,300, 'w', [[2400,200,'-']]).K('sen')
        aCo = w.aCo(-50, -150)
        aCo.do(sen)
        //<- sen.do(aCo) //  <- sen.cl(
        // function(f){if(!f.by(aCo)){aCo.B(f)}},
        // function(f){if(f.by(aCo)){aCo.xB(f)}
        // })


        p =  w.p(300, 400, '+').K('char')

        statMar= w.p(2600, 150).stat().K('mario')

        statBird= w.y(2350, 450, 2, '-').rt(90).stat().K('bird')


        statBird.cl('char', function(){
            p.kill()
            p= w.y(2350, 550,2,'+').fR().rt(90).lD(2).K('char')
            w.Z(1.6)

        })

        statMar.cl('char', function(){
            p.kill()
            p= w.p(2400, 250).tr().K('char')
            w.Z(1.2)
        })




        //.tr()


        w.D(300,100, 'r', 20); w.D(400,100, 'r', 40); w.D(500,100, 'r', 45); w.D(600,100, 'r', 180); w.D(700,100, 'r', 10)



        $.ev(2,  function(){   if(R()){

            // tog()
        }  })

        // Imagine that you have gusts of wind blowing sideways…
        // you can add your objects to a Contoller and have them pushed sideways…
        // then when the wind passes you could remove them from that controller.
        // now just add and remove bodies to the controller!!

        function tog(){

            $l('tog')
            // if(added){rm()} else {add()}
        }

        function add(){w.C('g');added=1; co.B(b)}
        function rm(){w.C('r');added=0; co.xB(b) }



        w.pJ(
            w.D( 1200,500, 'z', 60).K('ride'),
            w.S( 1200,500,'s',40,150).K('cart'))//.lm(-30, 60).speed(-100).motor(1).maxForce(1000)
            .lm(-30, 60).mt(-10)//.speed(-100).maxForce(1000)

        w.pJ(w.D(1400,500,'z',110).K('ride'),
            w.S(1400,500,'s',40,300).K('cart'))
            .lm(-30,60).mt(10)//.speed(-100).maxForce(1000)

        w.pJ(
            w.D( 1600,500,'z',80).K('ride'),
            w.S(1600,500,'s',40, 250).K('cart')
        ).lm(-30,60).mt(-100)//.speed(-100).maxForce(1000)


        w.b(function(cx){

            cx.w('cart',function(){

                w.e(function(b){

                    if(b.of('ride')){ b.I(0, -1000) }

                })

            })

        })
    }

    BUMPER=function(){W().P(800)


        j1= w.pJ(w.D( 200,500, 'z', 60).K('ride'),
            w.S( 200,500,'s',40,150).K('cart'))//.lm(-30, 60).speed(-100).motor(1).maxForce(1000)
            .lm(-30, 60).mt(-10)//.speed(-100).maxForce(1000)

        j2 = w.pJ(w.D(400,500,'z',110).K('ride'),
            w.S(400,500,'s',40,300).K('cart'))
            .lm(-30,60).mt(10)//.speed(-100).maxForce(1000)

        w.pJ(
            w.D( 600,500,'z',80).K('ride'),
            w.S(600,500,'s',40, 250).K('cart')
        ).lm(-30,60).mt(-100)//.speed(-100).maxForce(1000)


        w.b(function(cx){

            cx.w('cart',function(){

                w.e(function(b){

                    if(b.of('ride')){ b.I(0, -1000) }

                })

            })

        })



    }


    w.elev =function(x, yy, H){var w=this,
        y=w.h-yy,
        elv,
        speed= 5,
        wire,j
        j=w.pJ(
            wire=w.S(x, y-H/2, 'w', [[100, H, '-']]),
            elv= w.S(x,y-300, 'm', 30).r(3).K('elv').bS('sun'),
            V(0, 1)
        ).lm(-H/2, H/2).mt(-100)
        elv.cl( _.th( function(){
            j.mt(speed*=-1)
        },  200, {trailing:false} ) )
        elv.cl(function(p){ p.B().lV(0) })
    }


    MARIOACO =function(){W([1200,600,2400,1200],{g:400})
        w.p(100,300,'+')

        w.elev(300,100,300)
        w.elev(600,100,500)
        w.elev(900,300,400)
        w.elev(200,500,300)
        w.elev(400,800,200)
        w.elev(600,600,500)
        w.elev(750,700,300)
        w.elev(900,900,300)


    }

    JTRAN=function(){W({g:300}).P()

        p.XY(100, 550).track()


        j= w.pJ(
            w.S(400, 200,'s', 140,240).K('cart'),
            w.D(200, 100,'b', 40, 40).K('ride')
        )

        j.tran=function(){return this.GetJointTranslation()*30}


    }

    function JointGetJointTranslation(){
        var axis = this.m_bodyA.GetWorldVector(this.m_localXAxis1),
            p1 = this.m_bodyA.GetWorldPoint(this.m_localAnchor1),
            p2 = this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
        return axis.x*(p2.x-p1.x)  +  axis.y*(p2.y-p1.y)
    }//box2d source


    old=function(){

        PRISM0=function(){W(5)
            p= w.player(500,200,'thrust').den(1).fric(1)


            j = w.pJ({
                a: w.S(400,300,'s',40,40).den(1).fric(1),
                aV:[-30, 2 ],
                b:w.D(500, 200,'d',200,40).den(1).K('box'),
                ax: V(1,-2),
                rA: 45})
            speed=10
            j.mt(speed)
            w.beg(function(cx){
                cx.with('box',
                    function(){speed *= -1})
                j.mt(speed)
            })

        }




        //jd.mS(-100000).lT(-12).uT(12.5).eL(true).eM(true).mMF(10)//works

        b2d.pJ=  function(b1, b2, lXA, lAA, lAB, rA){//b2d.prismaticJointDef = PrismaticJointDef = prJt=

            var j=new b2d.Joints.b2PrismaticJointDef()
            j.mt=function(a,b,c){
                j.mS(a)
                j.mMF(N(b)?b:100)
                if(c!='-'){j.eM(1)}
                return j}
            j.lm=function(lT,uT, enableLimit){
                j.lT(lT).uT(uT)
                if(enableLimit!='-'){ j.eL(true) }
                return j}
            if( D(b1) ){ j.A(b1)}
            if( D(b2) ){ j.B(b2)}
            //local direction A ? the angle of the actual slider joint
            j.lXA(D(lXA)?lXA: V(0,1))
            //local axis A
            j.lAA( D(d)? lAA : b1.worldCenter())
            //local axis B
            j.lAB( D(e)? lAB : b2.worldCenter())
            // something with rotation
            if( D(rA) ){  j.rA(rA)   }

            return j
        }


        w.Prism = function (a, b, c, d, e, f, g, h) {
            return this.J(b2d.pJ(a, b, c, d, e, f, g, h))
        }

        w.elevx=function(x){
            var elev={}
            elev.plat  = this.rect(x, 100, 100,10).den(1).K('elev')
                .coll(function(){elev.flip()})
                .collWithKind('player', function(p){p.linVel(0)})
            elev.base = this.brickSensor(x, 150, 1, 100 ).den(1).fric(100)
            elev.j =  this.prism(elev.plat, elev.base, V(0,1) )

            elev.speed = 2
            elev.j.mt(elev.speed)
            elev.flip =  _.throttle(function(){
                this.j.mt(this.speed*=-1)
            }, 200, {trailing:false})
            return elev

        }





    }

    /*



     enableLimit - whether the joint limits will be active
     lowerTranslation - position of the lower limit
     upperTranslation - position of the upper limit


     enableMotor - whether the joint motor will be active
     motorSpeed - the target speed of the joint motor
     maxMotorForce - the maximum allowable force the motor can use

     */


};prisJ()



/*

ROPE=function(){


    var canvas_width,canvas_height,mouse_x, mouse_y,canvas_width_m, canvas_height_m
    mouse_pressed = false
    mouse_joint = false
    scale = 30


//Draw a w, this method is called in a loop to redraw the w

    function draw_w(w, context){
        //convert the canvas coordinate directions to cartesian coordinate direction by translating and scaling
        ctx.save()
        ctx.translate(0 , canvas_height)
        ctx.scale(1 , -1)
        w.DrawDebugData()
        ctx.restore()

        //write some text
        ctx.textAlign = 'right'
        ctx.fillStyle = '#fff'
        ctx.font = 'bold 15px arial'
        ctx.fillText('Rope using box2d',
            canvas_width - 10, canvas_height - 10)}



    function createWorld(){

        w = bW(gravity=bV(0,-10),true)


        w.SetDebugDraw(new b2DebugDraw().sS(document.getElementById("canvas").getContext("2d"));.sDS(scale).sFA(0.5).sLT(1.0).sF(b2DebugDraw.e_shapeBit);)


        //ceiling
        ground = ceiling = createBox(w, canvas_width_m / 2, canvas_height_m - 0.5, 16 , 1, {type : b2Body.b2_staticBody});

        var last_link = ceiling,
            last_anchor_point = bV(0, -.5),
            revolute_joint = rev(),
            r_height = 1.1 //height of rope elements, in metres ofcourse

        //rope
        for (var i = 1; i <= 10; i++){
            var body=createBox(w, canvas_width_m / 2 , canvas_height_m - 1 - i * 1.5, 0.25 , r_height);
            revolute_joint.A(last_link).B(body).lAA(last_anchor_point )
                .lAB(bV(0 , r_height/2))
            last_anchor_point = bV(0, -1 * r_height/2);
            w.cJ(revolute_joint)
            last_link = body}

        var body = createBox(w, canvas_width_m / 2 , canvas_height_m - 1 - i * 1.5, r_height , r_height, {density : 5.0});
        revolute_joint.A(last_link).B(body).lAA(last_anchor_point).lAB(bV(0 , r_height/2) )
        last_anchor_point = bV(0, -1 * r_height/2)
        w.cJ(revolute_joint)
        return w}



//Create standard boxes of given height , width at x,y

    function createBox(w, x, y, width, height, options){
        //default setting
        options = $.extend(true, {
                'density' : 1.0 , 'friction' : 1.0 , 'restitution' : 0.5 ,
                'type' : b2Body.b2_dynamicBody},
            options)



        return w.cB(
            bDf().ps(x,y).t(options.type).uD(options.user_data),
            fDf().d(options.density).f(options.friction)
                .r(options.restitution).s(pSh().sAB( width/2 , height/2 )))}



    function step(){


        w.s(1/(fps*.8),8 ,3).clF()

        draw_w(w , ctx) //redraw the w
        sT(step,1000/60) //call this function again after 1/60 seconds or 16.7ms

    }


    //Convert coordinates in canvas to box2d w
    function get_real(p){return bV(p.x + 0, canvas_height_m - p.y)}

    function GetBodyAtMouse(includeStatic){
        var mouse_p = bV(mouse_x, mouse_y);

        var aabb = new b2AABB();
        aabb.lowerBound.Set(mouse_x - 0.001, mouse_y - 0.001);
        aabb.upperBound.Set(mouse_x + 0.001, mouse_y + 0.001);

        var body = null;

        // Query the w for overlapping shapes.



        function GetBodyCallback(fixture){
            var shape = fixture.GetShape();

            if (fixture.GetBody().GetType() != b2Body.b2_staticBody || includeStatic)
            {
                var inside = shape.TestPoint(fixture.GetBody().GetTransform(), mouse_p);

                if(inside){
                    body = fixture.GetBody()
                    return false}
            }

            return true;
        }

        w.QueryAABB(GetBodyCallback, aabb);
        return body}

// main entry point
    $(function(){
        var canvas = $('#canvas');

        ctx = canvas.get(0).getContext('2d');

        //get internal dimensions of the canvas
        canvas_width = pI(canvas.attr('width'))
        canvas_height = pI(canvas.attr('height'))

        canvas_height_m = canvas_height / scale
        canvas_width_m = canvas_width / scale

        //first create the w
        w = createWorld()


        //If mouse is moving over the thing
        $(canvas).mousemove(function(e){
            var p = get_real(bV(e.pageX/scale, e.pageY/scale))

            mouse_x = p.x
            mouse_y = p.y

            if(mouse_pressed && !mouse_joint){
                var body = GetBodyAtMouse()

                if(body){ //if joint exists then create


                    mouse_joint = w.cJ(
                        new b2MouseJointDef().A(ground).B(body).tg(p).cC(1)
                            .mF(1000 * body.GetMass()).dR(0))

                    body.aw(1)}}


            if(mouse_joint){ mouse_joint.sT(p) }})

        $(canvas).mousedown(function(){ //flag to indicate if mouse is pressed or not
            mouse_pressed = true})



         When mouse button is release, mark pressed as false and delete the mouse joint if it exists


        $(canvas).mouseup(function(){
            mouse_pressed = false;
            if(mouse_joint){w.dJ(mouse_joint)
                mouse_joint = false}})
        step()
    })
}
*/

// https://developer.chrome.com/devtools/docs/workspaces !!!!!