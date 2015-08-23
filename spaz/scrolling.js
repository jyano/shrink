b2d.p()
w.track=  function(t,cX,cY, bf){var w=this    //i can leave the world-centering in fw//can optionally filter it with scale itself //  has limits now!  and more.. tis is the ultimate!

    if(U(t)){t = w._trackee}

    w.t=t
    cX=N(cX,w.W/2)
    cY=N(cY,w.H/2)  //option to set based on t's CURRENT X/Y?


    if(bf=='!'){

        z(function(){var sX,sY

            sX = w.z*(t.X()-cX)

            sX =  sX  *   1  / ( 1 + w.hW/w.w )

            sY = w.z*(t.Y()-cY)

            sY = sY /  (1+ w.hH/w.h)

            w.sXY(sX,sY)
        })
    }

    else if(bf=='-'){
        z(function(){
            w.s.x =  (cX-t.X())* w.z     -   w.W*(w.z/2-.5)
            w.s.y =  (cY-t.Y())*w.z     -   w.H*(w.z/2-.5)
        })
    }

//w.S(cX,cY,'o',[ [40,400,'-']]) // w.dbCross(cX,cY) //  w.dot(cX,cY,'+')
    else if(O(bf)){

        bf.x = N(bf.x)? bf.x : w.w/2
        bf.y = N(bf.y)? bf.y: w.h/2
        bf.w=  N(bf.w)? bf.w:  0
        bf.h=  N(bf.h)? bf.h:   0
        bf.mX = N(bf.mX)? bf.mX : 1
        bf.mY = N(bf.mY)? bf.mY: 1

        w.S(bf.x, bf.y, 'r',  [  [bf.w, bf.h, '-'] ] )
        w.S(bf.x, bf.y, 'w',  [  [bf.w+20, bf.h+20, '-'] ] )
        w.S(bf.x, bf.y, 'b', [ [bf.w, w.h,  '-'] ] )
        w.S(bf.x, bf.y, 'b', [ [w.w,  bf.h,  '-'] ] )
        w.S(bf.x, bf.y, 'z',  [ [ 10,10, '-' ]  ] )  //sensor works but ony for rect (or at least not for circ)
        w.S(bf.x, bf.y,'w',[[bf.w,bf.h,'-']]) //  w.dot(bf.x-bf.w/2, bf.y-bf.h/2  ,     '+')

        z(function(){var sX,sY
            // sX = (bf.x-w.hW)   + _.adj( (t.X()-bf.x),  bf.w/2)/w.z
            sX =  bf.x - w.hW  + _.adj(t.X()-bf.x, bf.w/2)*bf.mX /// bf.mX //scaling not needed?
            sY = (bf.y- w.hH)   + _.adj( t.Y()-bf.y,  bf.h/2)*bf.mX// /bf.mY
            w.sXY( sX,  sY)})
    }

    else {

        //each tick, literally just sets w.sXY() based on:
        // world dimensions, world zoom, and trackee position

        z(function(){var dX,dY
            //run pre-scroll hook cb's
            if(F(w.t.cb)){w.t.cb()}
            if(w.track.cb&& F(w.track.cb)){  w.track.cb()  }
            // if the designated trackee optionally has its own cb,
            // that over rules the (also optional) 'w.track.cb' cb
            dX=t.X()-cX
            dY=t.Y()-cY
            w.sX(  w.z* w.hW +  w.z*dX -   w.hW)
            w.sY(w.z* (w.hH+ dY )-w.hH)
        })
    }
    return w

}
w.sXY=function(x,y){return this.sX(x).sY(y)}
w.sXCap=function(s){return _.cap( s, 0, this.w * this.z - this.W) }
w.sX=function(x){var w=this



    if(U(x)){return -this.s.x}
    this.s.x = -this.sXCap(x)

    return w
}
w.sYCap=function(s){return _.cap(s, 0, this.h*this.z-this.H )}
w.sY=function(y){var w=this

    if(U(y)){return -w.s.y}
    w.s.y = -w.sYCap(y)
    return w

}
w.Z = function(s){var w=this//get/set zoom.. ok cool :)
    if(U(s)){return w.z}
    w.z = s=='-'? w.mS : _.cap(s, w.mS)
    w.s.sXY(w.z)
    return w}
w.zoomOut=function(){var w=this //knows when to stop :)
    w.tCb= function(){  w.Z( _.cap( w.z*=.98, w.mS))  }
    return w}
w.zoomIn=function(){var w=this
    w.tCb= function(){ w.Z( _.cap( w.z*=1.02,0,4))   }
    return w}
w.inout=function(){var w=this, // now it works!!!!
    s=1,
    up=true

    w.t.cb = function(){
        if(up){
            if(s<2){ s+= .2; }
            else {up=false}
            w.Z(s)
        }

        else {
            if(s > .8){ s -= .2   }
            else {up=true}
            w.Z(s)
        }
    }

    return w}
w.showOff=function(){var w=this
    zin()
    function zout(){w.zoomOut(); _.in(10, zin)}
    function zin(){w.zoomIn();  _.in(4, zout)}
    return w
}
w.pan=function(o){
    var  w=this,  g=G(arguments),  o=g[0],
        mZ = w.mZ ,
        MZ= mZ*3,
        z= w.mZ*3,  up=true,
        l
    if(g.m){
        l=function(){

            up = z > w.mZ*3? false :
                z < w.mZ ? true:
                    up

            z *= up? 1.01 : .9
            w.Z(z / w.mZ)
        }
    }

    else {l=function(){

        up = z > w.mZ*3? false : z < mZ? true: up
        z += up? .03 : -.03
        w.Z(z / w.mZ)

    }}

    w.track.cb=l

    return w
}

b.tr= b.track=function(x,y,z){var b=this,w= b.W()
    w.track(b,x,y,z)
    return b}
b.centerScale = function(z){var b= this,w=b.W()

    w.s.sXY(z)

    w.s.X(

        w.hW -      (  (b.X()-w.hW) *z)

    )

    w.s.Y(w.hH - ((b.Y() - w.hH)) *z)

    return b

}

tSpr()

w.ramps=function(){var w=this
    w.ramp(
        [400, 350, 200, 300, 100],
        [500, 350, 300, 300, 60],
        [600, 350, 200, 300, 100],
        [700, 350, 300, 300, 60],
        [800, 350, 200, 300, 100],
        [1000, 350, 300, 300, 60],
        [1030, 350, 200, 300, 100],
        [1200, 350, 300, 300, 60])
    return w
}
w.bricks=function(){var w=this,g=G(arguments)
    _.e(g, function(g){w.S.apply(w,g)})
    return w}
function tSpr(){
    w.tX=function(t){var w=this
        if(U(t)){return w.tSpr.X()}
        w.tSpr.X.apply(w.tSpr, arguments)
        return w
    }
    w.tY=function(t){var w=this
        if(U(t)){return w.tSpr.Y()}
        w.tSpr.Y.apply(w.tSpr,arguments)
        return w}
    w.tXY=function(x,y){var w=this
        if(U(x)){return {x: w.tX(), y: w.tY()}}

        y=N(y)?y:x

        return w.tX(x).tY(y)
    }
    w.tRightLeft=function(){var w=this, left
        z(function(){
            if(!left){
                w.tX(10,'+')
                if(w.tX() > 2000){left=1}
            }
            else {
                w.tX(10,'-')
                if(w.tX() < 400){left=0}
            }})
        return w}
}

refMakeWorldScrollCode=function(){
    w.t =  w._t = w._t || w.S(w.hW, w.hH, 'w', [[20,2,'-'] ]).r(.8) //trackee
    w.i.A( w.tSpr=  cjs.ct().XY(w.t.X(), w.t.Y()) ) //  w.tSpr.bm('guy', function(g){  g.sXY(.2)}) // w.tSpr.A(g)
    z(function(){


        if(F(w.t.cb)){w.t.cb()} else if(F(w.tCb)){w.tCb()} // actually calls the callbacks


        // i see w.sXCap and w.sYCap.. i think they limit the scroll distances
        //distances are simply calculated and assigned right to **** w.s *****
        //so it moves the actual stage... (dont worry, not the canvas)
        w.s.x = -w.sXCap( (w.t.X()-w.hW+ w.hW)*w.z - w.hW  )
        w.s.y = -w.sYCap( (w.t.Y()-w.hH+ w.hH)*w.z - w.hH  )


        if(w.t == w._t){// if the trackee is the generic one that world provided...
            //have it bind to 'tSpr'.. some dumb tim graphic.. i think i can lose this part real soon
            w.t.XY(
                w.tSpr.X(),
                w.tSpr.Y()
            )
            w.s.rot(  w.tSpr.rot()  )

        }

    })
}
SPACEGRAVMACH= SUNZOOM=function(){W({g:0,w:0})

    w.thrustPlayer=function(x,y){var w=this,p
        p=w.p(x,y,2.5,'thrust').lD(.8).aD(10000)
        return p}
    w.stars(10)
    w.s.rXY(600,300)
    w.s.XY(600,300)

    p = w.p().cn('thrust')
    sun = w.sun()

    _.in(.3,function(){


        sun.sp().twL([{r:360},10000])

    })




    //preload to the rescue ??


    w.dJ({a:p,b:sun,cl:1}).fq(10).d(10).l(10)


    green(400,100);
    green(400,200);
    green(200,100);
    green(200,200)
    function green(x,y,fq){
        w.dJ({
            a:w.gG(x,y),
            b:sun,
            cl:1})
            .fq(N(fq,1)).d(0).l(15)}
    b2d.scaleFunc = function(b1,b2,max){
        max=N(max,2)
        var dst = 150/M.sqrt(
                M.sqr(b1.X()-b2.X())+
                M.sqr(b1.Y()-b2.Y())
            )
        return dst>max?max:dst
    }

    T.t(function(){
        w.s.sXY(
            b2d.scaleFunc(sun,p,2) )
        p.centerScale( b2d.scaleFunc(sun,p,2) )

    })

}
SPACE=function(){W({g:0, w:0 });  Q(['earth'],function(){

    s=  w.s

    e=  w.S(200,200,'p',100).d(1).r(2)
        .bS({i:q.bm('earth'),sc:.13})
        .K('earth'); eI= e.sp()

    p=  w.player(200,200,2.5, 'thrust')
        .d(.4).aD(8).lD(.8)

    w.dJ({ a:p, b:e, l:50, f:0.15,
        coll:1
    })
    T.t(function(){var sp, dx=e.X()-p.X(), dy=e.Y()-p.Y(),
        sc = _.cap(
            300/ M.sqrt(dx*dx+dy*dy), .3, 2 )
        s.XY(
            300-sc*(p.X()-300),
            150-sc*(p.Y()-150) )
    })
})

}
old=function(){
    /*

     w.sW=function(W){
     var w=this, wW=w.W

     if(U(W)){return wW * w.s.scaleX}
     w.s.scaleX=W/wW
     return w}


     w.sWM=function(m){var w=this,cW=w.cW()
     if(U(m)){return w.sW()/cW}
     w.sW(  cW * m  )
     return this}

     w.fit=function(){var w=this

     w.s.scaleX = w.cW()/ w.w;
     w.s.scaleY = w.cY()/ w.h;
     }

     w.xX=function(X){

     var w=this,

     m = w.sWM()


     if(U(X)){return m-1}

     w.sWM(X+1)

     return w}


     w.zX=function(z){var w=this,

     zX=w.s.scaleX - 1

     if(U(z)){return zX}

     if(z>=0){ w.s.scaleX=z+1}

     else {

     cW = w.cW()

     half = cW/2

     newW =  cW + half*( -(z-1) )

     newSc = cW/newW

     w.s.scaleX = newSc
     }




     return w}




     */
//w.MIN = function(){var w=this; return w.Ww > w.Hh ? w.Ww : w.Hh }
//w.wz = function(){var w=this; return (V(   wX= w.s.x, wY= w.s.y ))} //we never want a positive wz!! means right stage corner is visible
//w.rOK = function(){var w=this; return  w.s.x + w.W*w.z - 1200}
//w.bOK = function(){var w=this; return w.s.y + w.H*w.z - 600}
////w.df=function(){var w=this; return {   x: w.Ww,  y: w.Hh }}


    /*
     w.cam=function(x,y){var w=this //<-pXY
     if(U(y)){y=x;x=0}
     w.pXY(x,y)
     w._camX=x; w._camY=y
     return w}

     w.camLims = function(xm, xM, ym, yM){var w=this
     if(A(xm)){
     w._camLimX = xm
     w._camLimY = xM}
     else {
     w._camLimX = [xm,xM]
     w._camLimY = [ym,yM]}
     return w}
     */
    //DEP TO TRACK
    w.folx= w.follx= function(b,x,y,pX){var w=this

        w.fw=function(b,x,y){var w=this


            w.S(x,y,'o', [ [40,400,'-']])

            w.dbCross(x,y)
            // w.dot(x,y,'+')


            cjs.tick(function(){
                w.pX(b.X()-x)
                w.pY(b.Y()-y)
            })

        }

        w.fwBuf=function(b,x,y, pX,pY,bX,bY){var w=this

            //  w.s.HUD.dot('w', x, y)

            w.S(pX, w.h/2, 'b', [ [bX*2, w.h,  '-'] ] )
            w.S(w.w/2,pY, 'b', [ [w.w, bY*2,  '-'] ] )
            w.S(pX, pY, 'w',  [  [bX*2+20, bY*2+20, '-'] ] )
            w.S(pX, pY, 'r',  [  [bX*2, bY*2, '-'] ] )
            w.S(pX, pY, 'o',  [ [ 10,10, '-' ]  ] )  //sensor works but ony for rect (or at least not for circ)


            scale = 1

            cjs.tick(function(){

                w.pX( (pX-x)  +  _.adj(b.X()-pX,bX)  * scale )

                w.pY( (pY-y)  +  _.adj(b.Y()-pY,bY)  *scale    )


            })

        }

        if(U(pX)){
            w.fw.apply(w, arguments)
        }

        else {

            w.fwBuf.apply(w, arguments)
        }
        return this}


    w.follRatio=function(t,cX,cY){
        //he reaches length of screen at same time as end of world!!!

        var w=this
        cjs.tick(function(){var sX,sY
            sX = w.z*(t.X()-cX)
            sX =  sX  *   1  / ( 1 + w.hW/w.w )
            sY = w.z*(t.Y()-cY)
            sY = sY /  (1+ w.hH/w.h)


            w.sX(sX).sY(sY)



        })


        return w}

//DEP TO TRACK
    w.bufFoll =function(t,cX,cY,bf){ var w=this

        bf=bf||{}
        bf.x = N(bf.x)? bf.x : w.w/2
        bf.y = N(bf.y)? bf.y: w.h/2
        bf.w=  N(bf.w)? bf.w:  0
        bf.h=  N(bf.h)? bf.h:   0
        bf.mX = N(bf.mX)? bf.mX : 1
        bf.mY = N(bf.mY)? bf.mY: 1

        w.S(bf.x, bf.y,'w',[[bf.w,bf.h,'-']])


        /* w.dot(bf.x-bf.w/2, bf.y-bf.h/2  ,     '+')

         w.dot(bf.x+bf.w/2, bf.y-bf.h/2    ,'+')

         w.dot(bf.x+bf.w/2, bf.y+bf.h/2         ,'+')

         w.dot(bf.x-bf.w/2, bf.y+bf.h/2 , '+')


         w.dot(bf.x, bf.y, '*')
         w.dot('z', 600,600,'+')
         */
        w.track(t,cX,cY,bf)
        /*
         cjs.tick(function(){var sX,sY
         // sX = (bf.x-w.hW)   + _.adj( (t.X()-bf.x),  bf.w/2)/w.z
         sX =  bf.x - w.hW  + _.adj(t.X()-bf.x, bf.w/2)*bf.mX /// bf.mX //scaling not needed?
         sY = (bf.y- w.hH)   + _.adj( t.Y()-bf.y,  bf.h/2)*bf.mX// /bf.mY
         w.sXY( sX,  sY)})
         */
        return w}


    w.pX =  function(x){var w=this
        if(U(x)){ return -w.s.x }
        //if(w._camLimX){w.s.x =  -_.cap(x,   w._camLimX[0]* w.z,  w._camLimX[1] * w.z  )}
        else {w.s.x = -x  }
        return w}
    w.pY =  function(y){var w=this

        if(U(y)){return -w.s.y}
        w.s.y = -_.cap(y,  w._camLimY|| [0,0] )

        return w}
    w.pXY = function(x,y){var w=this
        if(U(x)){ return V(w.pX(),w.pY()) }
        return w.pX(x).pY(y)}

    w.pos=function(x,y){var w=this
        w.s.XY(-x,-y)
        w.cX = -x
        w.cY = -y
        if(w.z){ w.scl(w.z) }
        return this}

    w.zoomx= w.zmx= function(z){var w=this,  g=G(arguments), z=g[0]

        if(U(z)){return w.z * w.mZ}


        z = g.n?  w.mZ : _.cap(z, 0)

        $l(  z / w.mZ )
        w.Z(z / w.mZ)

        // if(g.P){w.Z(_.cap(z, 0, w.mZ) / w.mZ); return w}

        return w}
    w.sclx=function(s){var w=this // scale and translate to keep centered
        w.z = s
        w.cX= w.cX||0;
        w.cY= w.cY||0

        w.s.X( w.W/2 +  ( w.cX- w.W/2 ) * s    )
        w.s.Y( w.H/2 +  ( w.cY- w.H/2 ) * s    )

        return w}
    w.limSclx=function(n){var w=this,hW,hH
        w.z=n
        w.cX=w.pX()
        w.cY=w.pY()
        w.s.sXY( n )
        hW=w.W/2
        hH= w.H/2
        w.pX( -((w.cX - hW)*n+hW))
        w.pY( -((w.cY - hH)*n+hH))

        return this
    }
    w.scalex=function(a){var w=this
        w.s.sXY(a)
        if(a<1){w.s.XY(w.W*(1-a)-w.W/2,w.H*(1-a)-w.H/2)}
        else {w.s.XY(w.W-(w.W*a)/2, w.H-(w.H*a)/2)}}
    w.ratx=function(){return {x: w.w/w.W, y: w.h/w.H}}
    w.followx= function(b,x,y){var w=this, K,cW,wW,cH,wH,sX,sY

        cjs.tick(function(){
            K=function(n){return n*w.z}
            cW = w.cW()
            wW = w.w
            cH = w.cH()
            wH = w.h
            MULT = .9//1.1 //1//4 //zoom
            sX = cW/2 + _.adj( b.X()-cW, 0) * MULT //sX=K(b.X()-x) + (K(cW)-cW)/2
            w.s.x = -_.cap(sX, 0, K(wW)-cW )
            sY = cH/2 + _.adj( b.Y()-cH,  0)//  * MULT //sY=K(b.Y()-y) + (K(cH)-cH)/2
            w.s.y = -_.cap(sY,0, K(wH)-cH )
        })

        return w}



}