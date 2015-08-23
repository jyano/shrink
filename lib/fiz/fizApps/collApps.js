CAT=function(){W([800,800],{g:50 }).C('z')




    //g=  w.D(600,600,'g',183,183).f().bit(4, [1,2] );
    // b=  w.D(600,600,'b',100).f().bit(2, [1,4] )



    w.t_.bit(1, [8])

    w.D(600,200,'w',180).bit(1,[1]).r(.5)

    w.D(400,0,'g',100).bit(2, [1,2, 4,8]).r(.8)
    w.D(300,0,'g',183,183).bit(2, [1,2, 4,8]).r(.8)

    _.t(38,function(){
        w.D(R(1100,100), R(300,-2500), 'w', 20).bit(1,[1])
    })

    y= w.y(100, 100).rt(40).bit(8, [1,2,4])


/////////////////

    //together, same with walls
    // w.D(300,300,'o',183,183)//.grp(-3)
    // w.D(300,600,'o',100).cat(2)//.grp(-3)

    //w.D(600,600,'u',150).r(1).I(100,0).cat(0)
    //w.D(600,600,'b',80).bit(2,[1,4])



    //w.D(600,600,'p',60,90).bit(4,[1,2,4])
    // w.D(600,600,'r',183,183).bit(4,[1,2,4])
}
CXPT= function(){W().randRects().Y() //only works on NON-sensors?
    y.stat()
    w.y(100,100)
    w.b(function(cx){

        w.i.dot($r(), cx.pt().x, cx.pt().y   )

    })



}
PT= function(){W({W:2000,g:0}).Y();


    _.t( 10, function(){ w.D(800,200,'r', 20).K('r')  })


    w.S(50,550,'o', 200);  //w.S(800,300,'z', 80)

    b= w.S(300,0,'o', 200,300).K('r')

    r=   w.D(300,300,'r', 80).K('b')


    // dot both upper and lower bounds of AABB of both fixts

    w.cl(function(f,cx){var ab,lb,up

        ab = f.GetAABB(); lb = ab.lowerBound; ub = ab.upperBound
        w.i.dot('w', ub.x* 30, ub.y* 30); w.dot('p', lb.x* 30, lb.y * 30)

        ab = this.GetAABB(); lb = ab.lowerBound; ub = ab.upperBound
        w.i.dot('w', ub.x* 30, ub.y* 30); w.dot('p', lb.x* 30, lb.y * 30)

        f.dot('g')

        this.dot('r')   //dot center of both fixts

        w.i.dot('y', M.lC(f.cen(), this.cen()))   //dot center of their centers

        cx.w(b, col)

        cx.w('b', 'r', col);
        cx.w(b, r, col) ;
        cx.w('b', r, col)


    })


    w.end(function(cx){     cx.w('b',  col)   })
    function col(f){this.C($r())}

    //2do:draw line to connect these pts..
    // w.chalk('center of the two fixtures not necessarily  same as the cX pt. (can only represent col center if fSs are sSAME size... maybe halfway btwen this and the actual contact point would be nice')

}
LCXPT=function(){W([3000,1000],{g:0,t:0})
    //<- var lP=cx.lP(b) //b.lP( cx.pX(), cx.pY() )

    b=w.D(300,400, 'b', 200,200).cn('thrust').K('sqr')
    r= w.D(300,400, 'r', 200,200).cn('thrust').K('sqr')
    b.SetBullet(true)
    w.b(function(cx){cx.w(
        'sqr',
        function(){
            if(!cx.w('bruise')){
                b.cir({c:'z',r:15,x:cx.lP(b).x,y:cx.lP(b).y})
                    .K('bruise')}}

    )})
    CRAZY = function(){W({g:0}).randRects();
        b=w.D(300,400, 'r', 200,200).cn('thrust')
        w.b(function(cx){
            w.dot($r(),cx.p())
            lP = b.lP( cx.p() )
            b.cir({c:'z', r:15, x:lP.x, y:lP.y })})}


}
NORMAL=function(){W({W:1500, H:1200, g:0}).C('b')

    y=   w.D(100,100,'w',40).fR().cn('thrust').bS('me')
    y.cir('y',50)



    y.cl(w.S(300,300,'g',50),
        function(f,cx){w.D(600,300,'g',20).K('g').I(-cx.nX(300) ,cx.nY(300))})

    y.cl(w.S(900,300,'o',50),function(f,cx){
        w.D(600,300,'o',20).K('o')
            .I(-cx.nX(300),cx.nY(300))})


    y1=w.D(300,300,'w',10).fR().cn('thrust').bS('me').I(20,20)

    y1.cir('y',40).r(.8)

    Ball= _.mo(.5, function(n){w.D( 600, 200, 'o', 5).bit(0)
        .K('o').r(.9).I(n.x, n.y)})
    w.D(600, 300,'o',70).r(.8)
        .cl(function(f,cx){
            if(cx.nX()||cx.nY()){Ball(cx.n(10000))}})

    /*
     //just copies lV
     b=w.D(500,300,'b',50).d(1).K('b')
     r = w.D(700,300,'r', 80).d(1)
     w.b( function(cx){ cx.w('b', function(f){
     if(cx.a().of('b')){r.lV(cx.lV(cx.a()))}
     else {r.lV( cx.lV(cx.b()))}})})
     */
//w.pop('me absorbs energy of tims collision!'); $.in(4, function(){w.pop('gets actual v of bA')}); $.in(8, function(){w.pop('at moment of col!')})


//normalImpulse is the magnitude of the correcting impulse applied to push the two bodies apart when they collide.
// This is in the direction of the contact normal.
    NL0 =function(){W({W:900, H:600, g:0,w:'|'}).C('b')
        y=w.D(100,100,'w',40)
        y.fR().cn('thrust').warp().bS('me').cir('g',50)
        w.S(200,300,'g',100).cl(function(f, cx){
            w.D(600,300,'g',20).I(-cx.nX(300),
                cx.nY(300))
        })
    }
    NL=function(){W({W:1200, H:600, g:0,w:'|'}).C('b')

        y=w.D(100,100,'w',40).fR().cn('thrust').warp().bS('me')
        y.cir('y',50)

        y.cl(w.S(300,300,'g', 100), function(f,cx){
            w.D(300,300,'g',20 ).I(-cx.no(300).x,cx.no(300).y) })

        y.cl(w.S(900,300,'o',100),function(f,cx){
            w.D(900,300,'o',20).I(-cx.no(300).x, cx.no(300).y)
        })

        y.cl(w.S(600,300,'w', 60,'-'), function(f,cx){
            w.D(600,300,'z',20,'-' ).K('w').I(cx.no(300).x, cx.no(300).y)
        })

    }

}
PRESOLVE=function () {W([1200, 600, 1200, 2000], {g:-1000}).stats().P(600, 1800)
    var b1,b2
    plat([300, 300], [900, 600], [300, 900], [300, 1000],[1000, 1200],[500, 1400])
    pf = plat(900, 1700)


    // PreSolve
// gives us a chance to change the characteristics of the contact
// before the collision response is calculated,
// or even to cancel the response altogether,
//  Here are the alterations you can make to the contact in PreSolve:
//  cx.SetFriction( friction)  // persists for duration of contact
//  cx.SetRestitution(  restitution)   //persists for duration of contact
//  cx.SetEnabled( false )//SetEnabled(bool flag); //non-persistent - need to set every time step
// will disable the contact,
// meaning that the collision response that normally would have been applied will be skipped.
// You can use this to temporarily allow objects to pass through each other
// . A classic example of this is the one-way wall or platform,
// where the player is able to pass through an otherwise solid object,
// depending on various criteria that can only be checked at runtime,
// like the position of the player and which direction direction they are heading, etc.
// It's important to note that the contact will revert back to being enabled in the next time step,
// so if you want to disable contacts like this you'll need to call SetEnable(false) every time step.
// The contact is only disabled for the current time step
// (or sub-step in continuous collision).

    function plat(x,y){var g=G(arguments)
        if(g.O_){g.e(function(g){plat(g[0], g[1])}); return}
        return w.S(x,y,'o', 500, 40).K('pf')}
    p.K('p').tr()//.cl(_.mo(function(){w.D(p.X(), p.Y()-150,'w',5,5,0,0,45)}))
    p.cl(w._t, //when player coll roof,
        function(){ w.C('z'); w.G(1000)})

    //one way wall
    w.pre('pf',  function(f, cx){
        if( p.Y() - this.B().Y() > 10){ cx.en(0) }
    })

}
POSTSOLVE=function(){W([1200,600], {g:10//g:50//,w:'='
})


    // I want the dir of the tangent and its ratio to the impulse part!!!

    //PostSolve
//with post, u get a second pam, which tells impulses(both norm and tang)
// we can find out what the collision response was.
//b2d.wM=  b2d.man= b2d.manifold= b2d.worldManifold= function(){return new b2d.Collision.b2WorldManifold}
//direction of collision normal:
//By convention in Box2d, the collision normal
// (for both the world manifold and the contact manifold) points from A to B -
//gets the linVel at time of collision!


    w.b_.fr(100000000000)
    w.S(100, 100,$r(),800,100,0,0,-20).fr(100000)
    y= w.y(140,400,'+').r(.6).fr(1000000).lD(1).aD(10000000)//'++'

    w.D(200,200,'b',20).r(1)
    w.D(900,200,'r',100).r(1)



    //JASON YANOFSKI LISTEN TO YOU:
    //OK SO THIS IS IMPORTANT OR U WILL WASTE TIME AND FUCK THINGS UP
    // THE WHOLE 'FIRST' THING IS NOT NECESSARY ANYMORE BECAUSE WE ARE NOT CONCERNED WITH
    // THAT PARTICULAR FUNCTANILTY IN THIS PARTICULAR FUNCTION
    //BUT YOU MAY HAVE REASON TO WANT TO
    //'GET SPECIFICALLY THE first ONLY VALUE FROM ONE COLLISION (FIRST TIME POSTSOLVE IS EVER CALLED ON THAT COLL OBJ)
    imp=0;  tang = 0; sum=0
    w.po(function(cx, i, t){
        imp =i; tang =t
        if(first && M.a(i+t)>5) {
            sum = M.a(i + t)
            first = 0}
    })

    w.b(function(){ first = 1})

    w.show(function(){return imp+' + '+tang+' = ' + sum  })


// $l('i:'+i+' t:'+t+' sum:'+(M.a(i)+ M.a(t)) + ' prod:'+M.a((i*t)))



// tangentImpulse is the magnitude of the impulse applied to simulate friction between
// the two colliding fixtures, and this is perpendicular to the contact normal.
//   You can put these together to get the overall impulse applied.
// I'm not sure which way the tangent faces in relation to the normal
// but in 2D there are only two possibilities.

    w.D(400, 200, 'y', 50).d(.1).lV(10)
    w.D(200, 500, 'r', 40).d(1)
    w.D(200, 500, 'b', 25).d(100)
    w.D(800, 200, 'p', 10).d(1000).lV(-10)



}
WLWN=function(){W([1200,800], {g:8 }).Y()
    vor=  w.S(600,200)
    vor.cir({s:1,c:'z',r:140,o:.2,C:'z',l:20})
    w.S(200,250,'r',400,20); w.S(400,250,'w',20,40)
    _.t(10, function(){
        w.D(100,100,'z',10).K('ball')
        w.D(200,100,'w',10)})
    _.t(3, function(){
        w.me(900,100,5).fR().my('feet', function(){this.lV(-2,-10)})
        w.me(700,100,5).fR().my('feet', function(){this.lV(2,-10)})})
    y.wl(vor,   function(){w.e('ball', function(b){b.tow(600,200)})})
//w.chalk('box goes up on coll with vortex, and right AFTER', 'ball goes up with continued pressure')
    //w.wn
    //  w.D(500, 200, 'z',30).K('z'); w.wn('z', function () {$l('beg')}, function () {$l('end')})
    b=w.D(100,100,'b',40).warp()
    x=w.D(50,100,'x',60,60).K('x').warp()
    w.S(1000,200).cir({r:300, c:'w',C:'o',l:10,o:0.2, s:1}).K('vor')
    y.warp()
        .wl('vor', function(){b.vY(-20)})
        .wn('vor', function(){x.vY(-20)}, function(){w.C($r())})
    //w.plat(400,500,40,20).K('pf').cl('x', function(){w.D(50,100,'x',60,60).K('x').warp()})
    //w.D(440,100,'y',50).K('ball'); w.cl('ball', function(cx){this.B().dot() })
}
MY = function () {W()


// could i automatically have body listen to their sens?
    w.ball().r(.3)
    workingGoomba =   p = w.p(900,450).cn('jump')
    p.my('hat',function(){p.bS('guy')})
    p.my('right');
    p.my('left')
    $.space(function(){

        if(p.my.right){p.I(100,-400)}
        if(p.my.left){ p.I(-100,-400)}

    })


}
