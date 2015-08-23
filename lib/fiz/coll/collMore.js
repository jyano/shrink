


function advanced(){
    cx.fl=  function(){var cx=this//whats the point?
        cx.FlagForFiltering()
        return cx
    }// Flag this contact for filtering.
// Filtering will occur the next time step.

    function bibliography(){

        b2d.flDa=  b2d.fl=function(){//this is a NEW OBJECT: FilterData
            var flDa = new b2d.Dynamics.b2FilterData
            return flDa}
        fd.bit =  function (cat, msk) {var fd=this
            fd.cat(cat).msk(msk)
            return fd
        }
        fD.cat = fD.cB = function (cB) {
            var fD = this
            if (U(cB)) {
                return fD.filter.categoryBits
            }
            fD.filter.categoryBits = cB
            return fD
        }
        fd.msk =   function (mB) {var fd=this,
            fl=fd.filter,n
            if(U(mB)){return fl.maskBits}
            if(A(mB)){
                n=0
                _.e(mB, function(b){n+=b})
                mB=n}
            fl.maskBits = mB
            return fd
        }
        BIBLI=function(){
            function removeAllLVW(){

//cx.v= cx.lV= function(b){ return b.lVW( this.cen() )}
//linVel from LocalPoint.. i think not used
//f.lVW=function(){return this.B().lVW.apply(this.B(), arguments)}


                //  If you want to know the actual direction that these two corners impacted at, you can use:
// v1 = b1.GetLinearVelocityFromWorldPoint( cx.cen() )
//  v2 = b2.GetLinearVelocityFromWorldPoint( cx.cen() )
//  impactV = v1 - v2

//cx.vA=  function(){var cx=this; return cx.lV(cx.a())}
//cx.vB=  function(){var cx=this;return cx.lV(cx.b())}

                //so lvW is not from the ships perspective
//it is from world perspective
//if the ship is going towards the right part of the screen,
//it will have a positive x
//regardless of which direction the ship is facing (regardless of its rotation)

                AMPGUN =function () {W().stats().P()
                    // var b1,b2

                    // p.C('z')

                    vor = w.S(400,300,'r', 100 )

                    p.cl(vor,  function(f,cx){

                        var   v,lP,bu,imp

                        //p.C('g')

                        pt=cx.pt();

                        w.dot(pt)

                        //lP = pt.lP(v.x, v.y)

                        bu = w.D(300, 100, 'w', 10,'-')

                        imp = V(
                            p.lVW(pt).x - f.B().lVW(pt).x,
                            p.lVW(pt).y - f.B().lVW(pt).y
                        )

                        bu.I(imp.x, imp.y)
                    })
                }



/// *** IMPORTANT PITFALL: CANNOT GET cx.pt() FROM SENSOR FIXTS
                LVW =function () {W([800, 600 ], {g:100,w:0 }).stats()

                    var b1,b2
                    vor = w.S(400,300,'r', 500,10 ).K('r')
                    y= w.y(50,100).warp().lD(0).rt(70).I(10,10)

                    y.cl(vor, _.mo(function(f,cx){var p,lP, b,imp

                        y.stat()
                        p= cx.p();  // w.dot(p.x, p.y)
                        lP = y.lP(p.x, p.y)
                        //y.cir({r:7, x:lP.x, y:lP.y, c:'z'})

                        b= w.D(400, 100, 'r', 10,'-')
                        $l('y.lVW(p).y: '+y.lVW(p).y)
                        imp = V( // ITS THE DIRECTION!!
                            //SO ITS A RATIO THAT WE NEED TO 'NORMALIZE' INTO A UNIT VALUE? THANKS MATH. :)


                            y.lVW(p).x-f.B().lVW(p).x,

                            f.B().lVW(p).y-y.lVW(p).y

                        )






                        b.I(imp.x, imp.y)


                    }))


                    /*
                     w.S(600,300,'w', 30,'-').K('r').cl( function(f,cx){
                     var  pt=cx.cen(), v1= f.B().lVW(pt), v2=r.lVW(pt)
                     w.D(630,250,'r',10)
                     .I(v1.x-v2.x, v1.y-v2.y)})
                     */

                }
                /*
                 midRedSensor = w.S(600,400,'z', 30,'-').K('r')
                 leftGreenWeap = w.S(300,300,'g',50)
                 r = w.S(600,200,'w', 30,'-').K('r')
                 r.cl( function(f,cx){
                 var  pt=cx.cen(), v1= f.B().lVW(pt), v2=r.lVW(pt)
                 w.D(630,250,'r',10).I(v1.x-v2.x, v1.y-v2.y)//.bS('sun')
                 })
                 */
                /*
                 y.cl('r',function(f,cx){var b=this,
                 sun= w.D(630,350,'r',30) ,
                 pt=cx.cen()
                 sun.I(b.lVW(pt).x-f.lVW(pt).x, b.lVW(pt).y-f.lVW(pt).y)})
                 */



            }
            CX=function(){W()

                var centerFx = b2d.cir(80).K('center')

                b= w.D(500,300,'r',[
                    centerFx,
                    b2d.rec(60,90,0,40,10).sen(1).K('sen1')
                ]).aV(100)
                //wow!  no friction?? ..b and floor both hav fr .2!

                w.D(700,300,'p',[
                    centerFx,
                    b2d.cir(100).sen(1).K('sen2')

                ]).aV(100)

                w.col('s1','s2', function(){ w.D(100,100,'w', 100) })

                w.b(function(cx){
                    if(cx.w('s1','s2')){
                        w.flag('new')
                    }}) //w.on('new', function(){w.ball()})

            }
            THROTTLE=function(){W()
                b = w.ball(300,300, 100)
                b1 = w.brick(300,500)
                time = 0

                _.ev(1,function(){time++})

                cjs.t(function(){
                    if(w.flagged('moveBrick')){
                        b1.X( 20 , '+' )}})

                lastTime=0
                change = 0

                w.b(function(cx){
                    if(cx.w('brick')){
                        if(lastTime!=time){
                            lastTime=time;
                            w.flag('moveBrick')
                        }}})
            }



        }
    }


// i want the total power, // normal/tangent impulses
// the angles, cx.norm
// and their rel proportions ?
//and the excact center location point of the coll (cx.cen())
//norm is just the dir to quickest separate the overlapping shapes
    /*
     collide=function(){

     //  I have 3 categories of things: players, obstacles and triggers.

     //  players and obstacles collide with each other  but not with themselves.

     circleDef.filter.categoryBits = 0x2
     circleDef.filter.maskBits = 0x4


     shapeDef.filter.categoryBits = 0x4
     shapeDef.filter.maskBits = 0x2

     // I want to also have trigger types...
     //     these I'm only using to detect the player and trigger events ' +
     // 'but should not be collided with by anything. ' +
     //'Logically, that should be possible by setting the maskBits to 0x0.' +
     //' The JBox2D collision code is as follows.


     collide = function(){
     return (filter1.maskBits & filter2.categoryBits) != 0 &&
     (filter1.categoryBits & filter2.maskBits) != 0
     }

     //So if the maskBits = 0, then collide should never return true.
     // I set the category bits to the next free category - 0x8.

     shapeDef.filter.categoryBits = 0x8
     shapeDef.filter.maskBits = 0x0


     // I thought this could be to do with Java's ints working differently to how I expected,
     // but I tested and found the following results:

     //      0x2 & 0x2 = 2
     //0x2 & 0x0 = 0
     // The triggers are meant to be used to trigger events.
     // This is done by implementing the CollisionListener and testing
     // for player collisions with triggers and then setting boolean flags.
     // However, when I run the simulation, the player is colliding with the triggers,
     // and so are the obstacles.

     // I've also tried setting the category and mask bits
     // to the following respective values:

     // 0x0 0x0
     // 0x8 0x8
     // 0x2 0x4
     // 0x4 0x2

     //And the player always collides with the trigger object.
     // How do I get the player and obstacles to never collide with the trigger object?



     //    Box2D supports 16 collision categories.
     //      For each shape you can specify which category it belongs to.
     //    You also specify what other categories this shape can collide with.
     // For example, you could specify in a multiplayer game that:
     //    all players don't collide with each other and
     // monsters don't collide with each other,
     // but players and monsters should collide.
     // This is done with masking bits. For example:


     playerShapeDef.filter.categoryBits = 0x0002
     playerShape.filter.maskBits = 0x0004

     monsterShapeDef.filter.categoryBits = 0x0004
     monsterShapeDef.filter.maskBits = 0x0002


     //Collision groups let you specify an integral group index.
     //   You can have all shapes with the same group index always collide (positive index)
     //or never collide (negative index).
     // Group indices are usually used for things that are somehow related,
     //   like the parts of a bicycle.
     //  In the following example, shape1 and shape2 always collide,
     // but shape3 and shape4 never collide.


     shape1Def.filter.groupIndex = 2

     shape2Def.filter.groupIndex = 2

     shape3Def.filter.groupIndex = -8

     shape4Def.filter.groupIndex = -8


     // Collisions between shapes of different group indices are filtered
     // according the category and mask bits.
     // In other words, group filtering has higher precendence than category filtering.


     //    This is the way I've understood how maskBits and categoryBits work. Let's say you have 3 objects : objectA, objectB and objectC.

     //        Define for each object a category :

     //        objectA.categoryBits = 0x0002;
     //    objectB.categoryBits = 0x0004;
     //    objectC.categoryBits = 0x0008;

     //    Then, set the maskBits, which define the collisions rules for each categoryBits :

     //        -> objectA collide with everyone (0xFFFF) and (&) not(~) objectB (0x0004)
     //    objectA.maskBits = 0xFFFF & ~0x0004;

     //    -> objectB collide with objectA (0x0002) or (|) objectC (0x0008) but no one else
     //    objectB.maskBits = 0x0002 | 0x0008;

     //    -> objectC collide with objectA (0x0002) but no one else
     //    objectC.maskBits = 0x0002;



     }
     collide2=function(){

     m_boundaryListener=new b2BoundaryListener()



     bound=function(){

     // addEventListener(Event.ENTER_FRAME, Update, false, 0, true);

     var worldAABB  = new b2AABB();

     worldAABB.lowerBound.Set(-100.0, -100.0);
     worldAABB.upperBound.Set(100.0, 100.0);


     w=  bW(worldAABB, bV(0 ,10 ) , true)

     w.SetBoundaryListener(m_boundaryListener)


     m_sprite = new Sprite()
     addChild(m_sprite)
     dbgDraw  = new b2DebugDraw()
     dbgSprite  = new Sprite()
     m_sprite.addChild(dbgSprite)

     dbgDraw.m_sprite=m_sprite
     dbgDraw.m_drawScale=30;
     dbgDraw.m_alpha=1;
     dbgDraw.m_fillAlpha=0.5;
     dbgDraw.m_lineThickness=1;
     dbgDraw.m_drawFlags=b2DebugDraw.e_shapeBit;
     w.SetDebugDraw(dbgDraw);


     // ground
     bodyDef = new b2BodyDef()
     bodyDef.position.Set(4,12)
     boxDef = new b2PolygonDef()

     boxDef.filter.categoryBits=2;
     boxDef.SetAsOrientedBox(10, 1,new b2Vec2(5, 1.5), Math.PI/32);
     boxDef.friction=0.3;
     boxDef.density=0;
     body=w.CreateBody(bodyDef);
     body.CreateShape(boxDef);
     body.SetMassFromShapes();


     bodyDef = new b2BodyDef()
     bodyDef.position.Set(8, 12)
     boxDef = new b2PolygonDef()
     boxDef.filter.categoryBits=4
     boxDef.SetAsBox(1, 3)
     boxDef.friction=0.3
     boxDef.density=0
     body=w.CreateBody(bodyDef)
     body.CreateShape(boxDef)
     body.SetMassFromShapes()

     create_circle()
     }



     create_circle=function() {
     bodyDef = new b2BodyDef()
     bodyDef.position.x=6
     bodyDef.position.y=2
     circleDef = new b2CircleDef()
     circleDef.filter.maskBits=Math.ceil(Math.random()*3)*2
     circleDef.radius=2
     circleDef.density=1
     circleDef.friction=0.5
     circleDef.restitution=0.2
     body=w.CreateBody(bodyDef)
     body.CreateShape(circleDef)
     body.SetMassFromShapes()
     }



     Update=function(e:Event):void {
     w.st(1/30,10)

     if (m_boundaryListener.get_contact()) {
     m_boundaryListener.no_contact()
     w.dB(body)
     bodyDef = new b2BodyDef()
     create_circle()
     }




     }
     */
}
old=function(){
    //from tx:
    /*
     w.l(1000,200,100,900,'-')
     w.l (600,0,700,500)
     w.l(200,200,500,500,'+')
     w.dr(350,260, 200,200,'-')
     w.dr( 500,240, 160,160,'+')
     w.dr( 400,200, 100,100)
     b= w.D(100, 200, 'y', 150, 100).d(.5).$(function(){this.B().I(0,-50)})
     w.D(500, 400, 'y', 50, 100).d(.5).$(function(){this.B().I(0,-50)})
     */

    cxI.tY=function(){return this.tI(1)}
    cxI.nY = function(){return this.nI(1)}


    b.when1=function(){var b=this, w=b.W(),ob={}
        ob.cxs=function(k,fn){
            w.beg(k,fn)
            return { after: function(fn){w.end(k,fn)} }}
        return ob
    }



    rM=function(){
        cx.rM=cx.manifold=cx.gM=function(){var cx = this; return cx.GetManifold()}
        cx.lN = cx.localPlaneNormal = cx.lPN = function () {
            var cx = this
            return cx.rM().m_localPlaneNormal
        }
        cx.lP = cx.localPoint = function () {var cx = this; return cx.rM().m_localPoint
        }
        cx.n = cx.pointCount = cx.pC = function () {var cx = this
            return cx.rM().m_pointCount
        }
        cx.ps = cx.points = cx.p = function () {var cx = this
            return cx.rM().m_points
        }
    }; //rM()

    cx.cen= cx.mid=  cx.center= function (){var cx=this
        return M.lC(
            cx.A().cen(),
            cx.B().cen())

    }

    /*
     w.when = function(k, k2, oB, oE){var w=this,g=G(arguments)


     //instructions:
     //

     if (F(g[0])){

     oE=k2; oB=k
     w.beg(g[1])
     if (g[2]) { w.end(g[]) }
     }


     else if (F(what2)) {
     eFn = bFn
     bFn = what2
     w.beg(what, oB)
     if (eFunc) { w.end(what, eFn) }}

     else if (F(oB)){
     w.beg(what, what2, bFn)
     if (eFn) {w.end(what, what2, eFn)}}



     return w

     }*/

    //cx.excludes=function(u){return !this.includes(u)}
    /*
     cx.destroy = cx.destroyBoth = function () {
     this.a().setDestroy()
     this.b().setDestroy()
     return this
     }

     cx.destroyIf = function (kind) {
     this.a().setDestroyIf(kind);
     this.b().setDestroyIf(kind)
     }

     cx.destroyOtherIf = function (k) {
     var a = this.a(), b = this.b()
     if (a.is(k)) {
     b.setDestroy()
     }
     else if (b.is(k)) {
     a.setDestroy()
     }

     }

     */
    w.collx= function(k1, k2, fn){
        var w=this,
            n=k1+k2,
            cx

        if(F(k2)){return w.collideAny(k1,k2)}

        else {
            w.beg(function(cx){
                if(cx.with(k1,k2)){ w.flag(n, cx) }
            })

            cjs.t(function(){ if(cx=w.flagged(n)){fn(cx)} })
        }

    }
    w.classx=function(k){var w=this,
        ob={class:k,  k:k,  world:w, w:w}
        ob.with=ob.collWith=function(k,fn){var ob=this
            if(O(k)){
                _.e(k, function(fn,k){
                    ob.with(k,fn)})}
            else {w.with(w.class, k, fn)}
            return w}
        return ob}

    w.collideAny = function(a, fn){var w=this
        w.beg(a, function(cx){
            $.do(function(){fn(cx)})})
        return w}

    w.flagx = function (flag, val) {var w=this
        w.flags = w.flags || {}
        if (U(val)) {val = true}
        w.flags[flag] = val
        return w
    }

    w.flaggedx = function (flag) {var w=this, wasFlagged

        w.flags = w.flags || {}

        wasFlagged = w.flags[flag]

        if(wasFlagged){w.flags[flag] = false}

        return wasFlagged

    }
    w.onx = function (onWhat, fn){var w=this, val


        //this lets you specify a function to be run,
//immediately whenever a specific flag is set
//(and it is passed the value)

        //interesting default !!!!!!!
        //func=func||function(val){val()}

        cjs.t(function(){

            val=w.flagged(onWhat)

            if(val){ fn(val) }

        })


        return w

    }


    b2d.superManifold =  function(m){//used????
        m.lPN = m.m_localPlaneNormal
        m.lP=m.m_localPoint
        m.pC=m.m_pointCount
        m.p=m.m_points
        m.t=m.m_type
        return m}

    function SuperImpulses(impulses){
        impulses.n= impulses.nI=function(){return impulses.normalImpulses}
        impulses.t= impulses.tI=function(){return impulses.tangentImpulses}
        return impulses}

//do any of these get used? i think filterData does
    b2d.manager = b2d.contactManager = b2d.cM=function(){//used?
        var m= new BXD.b2ContactManager
        m.c= m.cl= m.Collide
        m.a= m.aP=m.AddPair
        m.f= m.fNC= m.FindNewContacts
        m.d= m.ds= m.Destroy
        return m
    }
    b2d.cxFilt = b2d.filter =   function(){//used?
        var f=new b2d.b2ContactFilter
        f.rC =f.RayCollide
        f.sC =f.ShouldCollide
        return f
    }
    b2d.neither = function(b1, b2){//d~data
        return {
            is: function(d){
                return !b1.is(d) && !b2.is(d)}
        }
    }
    b2d.either = function(b1, b2){
        return {is: function(d){
            return b1.is(d) || b2.is(d)}}}
    b2d.either1 = function(ob1,ob2, is1,is2){
        return (ob1.is(is1) && ob2.is(is2))||
            (ob1.is(is2) && ob2.is(is1))}

    //Array.prototype.sen=function(k){var arr=this; arr.isSensor=k||true; return arr}
}