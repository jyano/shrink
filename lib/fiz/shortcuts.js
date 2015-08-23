

b2d = b2 = Box2D

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

