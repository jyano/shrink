b2d.p()
w.P=function (x, y,sc){var w=this,
    g=G(arguments)
    p = w.p(N(g.f, w.hW), N(g.s, w.H-50), N(sc,2))
    if(g.p){p.tr()}
    return w
}

b.cn=function(cn,o){var b=this, w=b.W()
    //stop a current 'controls', if any
    if( F(b._cn) ){   w.s.off('tick', b._cn)  }
    if(U(cn)){ return }
    if(S(cn)){ cn = b2d.cn[cn] }
    if(F(cn)){b._cn= w.s.t(  function(){
            cn(b,o)})}
    return b
}

b2d.cn.j=b2d.cn.jump=function(p){
   /* p.vX(
        K.r?200 :
        K.l?-200 :0)
    if(K.u && p.onG){
        p.vY(-1000)
    }*/
    var m= p.mass()
        if(p.inAir()){
            if(K.r){p.I(m/2, 0 )}
            else if(K.l){p.I(-m/2, 0 )}
            else {

            }
            p.I(0, m*3)
        }
        else {//on ground
            if(K.u){//initiate a jump
                if(K.r){p.lV(m,-m*4)}
                else if(K.l){ p.lV(-m, -m*4) }
                else {p.lV(0,-m*8)}
            }
            else {//not jumping, may be running
                if(K.r){p.lV(m*2, 0)}
                else if(K.l){p.lV(-m*2,0)}
                else {p.lV(0,0) }
            }
        }
    if(K.d){
        p.I(0, m*3)
    }
}




b2d.cn.jet = function (p) {
    var k = cjs.Keys, vec = p.GetWorldVector(V(0, -100))

    p.fixRot()

    if (k.left) {
        p.rot(8, '-').I(0, -5)
    }

    if (k.right) {
        p.rot(8, '+').I(0, -5)
    }
    p.I(
        k.up ? vec.div(1) : k.down ? vec.div(-100) : V(0, 0)
    )

}
b2d.cn.sl= b2d.cn.slidey = function(p){var k = cjs.Keys

    if (p.onG) {if (k.u) {

            if(k.r){p.I(20,-60)}
            else if (k.l) {p.I(-20, -60)}
            else {p.I(0, -100)}
    }

    else {
        if (k.l) {p.dir(0);p.I(-20, 0)}
                if (k.r) {p.dir(1);p.I(20, 0)}


    }

    }

    else {
        if (k.l) {p.dir(0);p.I(-10, 0)}
        if (k.r) {
            p.dir(1);
            p.I(10, 0)}
    }

    /*

     p.I(p.onG&&k.u ? V(0, -70)

     : k.r ? V(30, 0)
     : k.l ? V(-30, 0)
     : V(0, 0)  )*/

    return p
}
b2d.cn.h=b2d.cn.hop = function (p) {var k = cjs.Keys
    if (p.onGround) {
        if (k.l) {p.I(-30,-120)}
        if (k.r) {p.I(30,-120)}}
    else {if(k.d){p.I(0,20)}}
}

w.me=function(x,y,Z){var w=this,p
    Z= N(Z, 4)

    p = w.D(x,y)

    p.cir({c:'X',C:'X',l:0,r:1})

    p.rec('X',Z*12, Z*22).K('head')


    p.rec('X', Z*10, Z*20,  0, Z*10, '-').K('feet')


    p.rec('X', Z*2, Z*6, 0, -Z*12, '-').K('hat')
    p.rec('X', Z*8, Z*2, Z*8, 0, '-').K('right')
    p.rec(Z*8, Z*2, -Z*8, 0, '-').K('left')

    p.d(1).r(0).fr(.1).fixRot()

    p.bS({
        i:'me',
        sc:Z/10
    })

    return p.K('p player')

}
w.p1=  w.player1=function(x,y,sc,cn){
    var w=this, g=G(arguments), p,
    o = g.S_?
    {cn:g.f} :
        N(g.t)? {x:g.f,y:g.s, sc:g.t,cn:g[3]} :
        {x:g.f,y:g.s, cn:g.t}
    o.x= N(o.x, w.hW)
    o.y= N(o.y, w.hH)
    o.sc= N(o.sc,4)
    p = w.me(o.x,o.y,o.sc)
    if(g.p){p.track()}
    p.cn(o.cn)
    p.speed=40
    p._dir='r'
    p.dir=function(d){var p=this
        if(U(d)){return p._dir}
        p._dir = d; return p}
    p.moveInDir =  function(){var p=this,g=G(arguments)
        if (g.n){  return p.move( - p.speed )}
        //n = _.tN(g[0], p.speed)// ?
        if (p.dir()){p.I(3,0)} else {p.I(-3,0)}
        return p}
    p.SetBullet(true)
    w.cl('feet',
        function(f){
            if(!f.sen()){p.onG  = 1}
        }
    )

    w.end(function(cx){
        cx.w('feet', function(f){
            if(!f.sen()){ p.onG =0 }})})
    $.testJump=1
    if($.testJump){
        T.t(function(){
                if(p.onG){$l('onG')}
                else {$l('in air')} })
        w.show(function(){return p.onG}) }
    T.t(function(){
        p.I(0,500)
    })
    return p

}
w.p=  w.player=  function(x,y,sc,cn){var w=this,g=G(arguments), p

    sc = N(sc, 1)
    cn= cn || 'jump'
    p = w.D(x,y).fR()
    p.cn(cn)
    p.SetBullet(true)
    p.rec({
        c:'r',
        l:5,
        C:'r',
        w:22*sc,
        h:40*sc
    }).d(5)
    p.rec({

        s: 1,
        w: 8*sc, h:8*sc,
        x: 0,
        y: 20*sc}).K('feet').C('X')
   // p.bS(   {i:'me', sc: .25*sc, x:-10,y:-110}  )
    p.Bm( 'me', 0, 0,  0.25*sc    )
    if(g.p){p.tr()}
    p.r(.4)
    p.lD(.5)
    return p
}





b.jumping = function (y, x) {var b=this, k = cjs.Keys
    if (k.u) {
        if (k.r) {b.lV(x, -(y - x))}
        else if (k.l) {
           b.lV(-x, -(y - x))}
        else {b.lV(0, -y)}}
    return b
}
b.moveInCircle = function(rad, speed){

        var g=G(arguments),rad=N(g[0])?g[0]:100,
            speed=N(g[1])?g[1]:2,
            toRad=Math.toRadians, cos=Math.cos,  sin=Math.sin,
            b=this,
            ang=0,
            x=b.X(),
            y=b.Y(),
            bX,
            bY

        T.t(function(){
            ang += toRad(speed)

            bX= rad * cos(ang)
            bY= rad * sin(ang)

            if(g.p){bY*=2}
            if(g.n){bX*=2}


            b.XY(bX+ x, bY+ y)
        })

        return this}
b.byI=b.byImp=function(i){var k=cjs.Keys
        if(k.right){this.I(i,0)}
        else if(k.left){this.I(-i,0)}
        return this}
b.byV=b.byVel=function(v){var k = cjs.Keys
        if (k.right) { p.lV(v,0) }
        else  if (k.left) { p.lV(-v,0) }
        return this}
b.arrowMove = function () {var b = this
        $.key({
            l: function () {
                b.dir('l').move()},
            r: function () {
                b.dir('r').move()},
            u: function () {
                if (b.dir() == 'l') {
                    b.I(5, -12)}
                else if (b.dir() == 'r') {
                    b.I(-5, -12)}}})

        return b

}
b.relPos=function(){var b=this; return b.X() + b.S().X()}
b.pWarping = function () {var p = this,b=this
    cjs.t(function () {
        if (p.Y() < 0) {p.Y(300)
        }
        if (p.Y() > 300) {p.Y(0)
        }
        if (p.X() < 0) {p.X(600)
        }
        if (p.X() > 600) {p.X(0)
        }
    })

    return b

}
b.warp =  function(p){var b=this,w=b.W()
    cjs.t(function(){
        if(b.Y()<0){b.Y(w.H)}
        if(b.Y()>w.W){b.Y(0)}
        if(b.X()<0){b.X(w.W)}
        if(b.X()>w.W){b.X(0)}})
    return b}
b.diffx = b.difx = function (x, y) {var b=this// compare with DIF  - achtung!
    return {
            x: x - b.X(),
            y: y - b.Y()}
}
b.cam = function (x, y) {var b=this,s= b.stg()
        s.XY(b.diff(x, y))
        return b}
b.follow = function (x, y) {var b = this
        cjs.t(function(){if (O(b.sprite)){b.cam(x, y)}})
        return b}


w.coin = function(x,y){var w=this,c

    x=  _.tN(x, R(600))
    y = _.tN(y, R(300))


    c= w.D(x,y, 'y', 20).K('coin').bo(0).den(0).lD(0)

    c.I(  R(15,-5),  R(15,-5)  )
    c.warp()

    return c}
w.stars=function(n){var w=this
    _.t(N(n,30),function(){w.D(R(1000,-500),R(800,-400),'w',2).den(0).rest(2)})
    return w}
w.sun=function(x,y){var w=this

    //djd.init?? joint
    x=N(x,300)
    y=N(y,150)

    return w.S(300,150, 20,'p',10).d(1).r(.5).bS('sun',.2)

}
w.tim=w.addTim=function(n){var w=this

    if(U(n)){

        return w.D(300,300,'w',15).K('tim').bS('guy', .3)
    }

    _.t(n, function(){w.addTim()})
    return w
}
w.plat=  function me(x,y,W,H){
    var w=this, g=G(arguments)
    if(A(g[0])){
        _.e(g, function(g){me.apply(w,g)})
        return w}

    x = _.tN(x,60)
    y = _.tN(y,x)
    W = _.tN(W,30)
    H = _.tN(H,W)
    return w.S(x,y,'s',W,H)
        .r(0.3)
        .fr(2)
        .K('plat')
}
w.fireBall=function(x,y,vX,vY){
    var v=8
    if(vX=='l'){vX=v;vY=0}
    if(vX=='r'){vX=-v;vY=0}
    if(vX=='u'){vX=0;vY=-v}
    if(vX=='d'){vX=0;vY=v}
    if(vX=='ul'){vX=v;vY=-v}
    if(vX=='ur'){vX=-v;vY=-v}
    if(vX=='dl'){vX=v;vY=v}
    if(vX=='dr'){vX=-v;vY=v}
    vX=N(vX)?vX:0
    vY=N(vY)?vY:0

    return this.D(x,y, 'r', 18)//.bS('sun',.2)
        .lV(vX,vY)
}
w.clod= w.clouds=function(lX, y){var w=this
    lX = N(lX,100)
    y=N(y,75)
    _.t(100,function(){
        w.S(R(400)+lX,y,$r(),R(30))})
    return w}
w.rub= w.rubber=function(x,y,len){var w=this,rub
    len=N(len,200)
    x+=len/2
    return w.S(x,y).rec({
        w:len,h:20,c:'r',s:1
    }).fr(.3).r(.7)
}
w.grass=function(x, y, len){var w=this
    len=N(len,200)
    x+=len/2
   return w.S(x,y,'g',len,20).fr(.3).r(.3)}
w.ice=function(x, y, len){var w=this
    len=N(len,200)
    x += len/2
    return w.S(  x, y, 'w', len, 20).fr(0).r(0)}
w.ramp=function me(x, y, W,H,a){var w=this, g=G(arguments)

    if(A(g[0])){
        _.e(g, function(g){
            me.apply(w,g)})
        return w}

    o = O(g[0])?g[0]: {x:g[0],y:g[1],w:g[2],h:g[3],a:g[4]}
    o.x = N(o.x, 300)
    o.y = N(o.y, 300)
    o.w = N(o.w, 100)
    o.h = N(o.h, 100)
    o.a = N(o.h, 10)
    o.c = o.c || 'y'

    return  w.S(o.x, o.y, o.c, o.w, o.h).rot(a).DFB(1,0,0)
}
w.grid = function(grid, x,y,len,spacing){var w=this, b
    var gridDrawer=function(x,y,len, spacing){
            b = w.D(x,y)
            len = N(len,30);
            spacing=N(spacing,20)
            return function(x,y){
                b.rec(len, len, x*spacing, y*spacing).C('r').d(1).fr(0.5).r(.2)
                return b}},
        drawWall=gridDrawer(x, y, len, spacing)
    _.t(grid.length, function (row) {
        _.t(grid[0].length, function (c) {
            if (grid[c][row]){drawWall(row, c)}})})
    return b.K('grid')
}
w.goal=function(x,y){
    w.S(x-20,y-15, 'y',10,40)
    w.S(x,y,'y',40,10)
    w.S(x+20,y-15,'y',10,40)

}
w.buck= w.sensorBucket=function(x,y,k){var w=this, sens

    x= N(x,320)
    y= N(y,245)
    k=k||'sensorBucket buck'

    w.S(x-150, y-15, 'r', 20, 200)
    w.S(x+150, y-15, 'r', 20, 200 )
    w.S(x-200, y-120 , 'r', 320, 20, 200,200 )

    return w.S(x,y,'d',[[280, 170 ,'-']]).K(k)


}
w.zilla=function(x,y){var w=this

    var z= w.S(x, y, 80, 140)  //make sensor?

        .fR()
        .bS('guy', [.8,1])
        .moveInCircle('-')
        .cl('bul',
        function(bul){
            bul.B().kill()
            z.hits++
        })



    z.hits=0


    z.fireBalls=function(){
        var x= this.X(),
            y= this.Y()
        w.fireBall(x+50, y-80,'ul')
        w.fireBall(x+50, y+80,'dl')
        w.fireBall(x-50, y-80,'ur')
        w.fireBall(x-50, y+80,'dr')
        w.fireBall(x, y-80,'u')
        w.fireBall(x, y+80,'d')
        w.fireBall(x-50, y,'r')
        w.fireBall(x+50, y,'l')
    }


    z.fireBallsAtInt=function(ms){var z=this
        setInterval(function(){  z.fireBalls()  }, ms)
        return this
    }


    return z}
w.goomba=function(x,y){
    x= _.tN(x,300)
    y= _.tN(y,100)
    return w.D(x,y,'w', 30,30).bS('guy').K('goomba')}
w.bobom=function(x,y){var w=this,
    bobom = w.D(x,y,'d', [
        [40, 'body'],
        [40, 5, 30,0, 'bobomSens', '-']])

    w.b(function(cx){
        cx.w( 'bobomSens', function(){
            this.B().kill()})})

    body = bobom.rec(20,20).d(1).r(1)

    sen =  bobom.rec({s:1 })

    sen.cl('player',function(){w.B().kill()})

    return bobom}

w.badGuy=function(x,y){
    var that=this,
        w=this
    b = w.D(x, y,'d',60).K('badGuy').bS(
        w.s.h(x,y)
    )
    b.draw=function(frame){var b=this
        b.sp().rf(['r','g'],
            [frame[0], frame[1]], 60).dc(60)
    }
    b.h = b.health = 100
    b.cl(function(){b.h--})
    funcId = I(function(){
        b.draw( frameByHealth(b) )
        if(b.h<=0){clearInterval(funcId);b.kill()}
        function frameByHealth(b){
            if(b.h<0){b.h=0}
            if(b.h>100){b.h=100}
            if(b.h<50){ return [ 1-((b.h/50)),1 ] }
            else {return [0, 1-((b.h-50)/50)  ]} }
    }, 300)
    return b
}
b2d.cn.power=function(p){
    var K=cjs.Keys
    if(K.u){  p.I(0,-45)}
    if(K.l){  p.I(-20, 0)}
    if(K.r){  p.I(20, 0)}

}

w.xW=function(){
    this.e('wall', function(b){b.kill()})
    return this}

b.inAir = function(){var  b=this,
    onG= false
    this.cxs(function(cx){
        if(cx.IsTouching()){
            cx.w('feet',
                function(){ if(this.of(b) ){ onG=true } })
        }
    })
    return !onG
}

b2d.cn.powX=function(p){
    var K=cjs.Keys
    if(K.u){  p.I(0,-4500)}
    if(K.l){  p.I(-2000, 0)}
    if(K.r){  p.I(2000, 0)}
    if(K.d){  p.I(0,4500)}

}



yShip=function(){

    b2d.cn.t=b2d.cn.thrust=function(p, o){

        v = p.vec(-1)

        if(U(o)){o=5}
        if(N(o)){o={n:o}}
        o=O(o)?o:{}
        o.n=N(o.n,5)

        if(K.u){  p.I(v.m(o.n * 40))  }

        if(K.d){ p.I(-v) } //.m(o.n?)
        p.aV( K.r?  15: K.l? -15:0)

        if(K.l){ p.rt(2,'-') }
        if(K.r){ p.rt(2,'+') }

    }
    b.wP= b.wPt= function(x,y){var b=this
        return b.GetWorldPoint( V(x,y).div() ).mult()
    }
    b.v= b.vec=function(){var b=this,g=G(arguments),o

        if(g.m){
            return b.GetWorldVector( V(0,-1).m(N(g.f,100)) )
        }

        o= g.O? g.f :
            g.s? {x: g.f, y: g.s} : //this not error
            {y: g.f}

        o.x = N(o.x,0)

        o.y = N(o.y,-1)

        //the current direction of that vector in world coordinates

        return b.GetWorldVector(V(o.x, o.y))

    }
    b.polBu= b.polyBul=function(){var b=this,w= b.W(), v,pt,bu
        v = b.vec(-20)
        pt = b.wP(0, -50)
        bu = w.polBu(pt.x, pt.y,4,4,'w').d(1).lD(0).lV(v)
        return bu.K('polBu')

    }
    b.bu= b.bul=function(){var b=this, g=G(arguments)
        if(g.p){b.SetSensor(true) }
        return b}
    w.bu=  w.bul=function(){var w=this,g=G(arguments), o,bu

        o=O(g[0])? {x:g.f.x, y:g.f.y, r:g.s} :{x: g.f,y: g.s,r: g.t}

        o.r = N(o.r,8)

        o.x = N(o.x,100); o.y = N(o.y,o.x)

        bu = w.D(o.x,o.y,'w',o.r).K('bul bu')
        bu.lD(0).aD(0).fr(0).d(.1).r(.5)
        bu.SetBullet(true)
        bu.cl(function(f){
            if(!g.n){ this.xB() } if(g.p){  f.xB() }
        })

        return bu
    }
    b.sht= function(vel){var b=this,g=G(arguments), dst,bu, o

        o = g.S_? {k:g.f,v:g.s} : {v:g.f}
        o.v =  N(o.v,  50000)
        //dst= this.v().m(100) //bu=w.bu(b.X()+dst.x,  b.Y()+dst.y)
        return w.bu(
            this.wP(0,-200)  //just above b
        )
            .d(.5).lD(0).fR()
            .lV(
            this.v(o.v, '*')
        )
            .K(o)


    }
    b.shtSp=  function(k){ var b=this
        $.space(function(){b.sht(k)})
        return b

    }
    b.shtEv=b.shootOnInt= function(ms, k){var b=this
        _.ev(N(ms/1000, 0.4), function(){
            if(b.IsActive()){b.sht(k)}})
        return b
    }

    SHT=function(){W(0)
        y= w.y(300,300,'-')
        y.aD(0).lD(20)
        y.fixedRot(false)
        y.SetAngularVelocity(10)
        z(function(){
            // y.ApplyTorque(100)
            if(K.r){
                y.SetAngularVelocity(15)
                // y.ApplyTorque(130)
            }
            else if(K.l){
                y.SetAngularVelocity(-15)
                // y.ApplyTorque(-130)
            }
            else {   y.SetAngularVelocity(0)}
        })
        // w.show(function(){return y.aV()})
    }

    b.thr=function(){this.cn('thrust')}
    b.dir=function(d){var b=this
        if(U(d)){return b._dir}
        b._dir=d
        return b}
    b.tow=b.towards=function(x,y,sp){var b=this,lV

        __sp=function(s){
            s= N(s,5)
            s = 11 - (  s > 10 ? 10 : s )
            s*=20
            return s
        }
        sp= N(sp,5)
        sp = 11 - (  sp > 10 ? 10 : sp )
        sp*=20
        lV=V(x-b.X(), y-b.Y()).d(sp)
        return b.lV(lV)

        //if(isBody(x)){return self(x.X(), x.Y(), y)}
//move towards x,y (or body?)
        //more realistic to accelerate, via forces?
    }
    b.rTow=function(y){var b=this,

        a=-M.tD(   M.atan(   (y.X()-b.X())/  (y.Y()-b.Y()) ) )
        if(y.Y()>b.Y()){ a+= 180 }
        b.rt(a)
        return b
    }

    THRUST = function(){W({ g:0//, i:'space.jpg'
    })
        w.S(400, 200,'s', 40,40)
        p = w.p(300, 300, 'thrust')
        w.tim(3)
        w.b(function(cx){
            cx.w('bu', function(f){if(f.B()!=p){this.B().kill()}})
            cx.w('bu', 'tim', function(t){t.B().kill()})
        })
        $.space( function(){
            w.bu(p.wP(0,-100)).I(p.v(5,'*'))
        })

    }
    w.y = w.ship= function(){var w=this, g=G(arguments), hS, side, ship, y,o


        o=g.O? g.f: g.S_? { c:g.f, x:g.s, y:g.t, sc:g[3] }:
        {x: g.f, y: g.s, sc: g.t}
        o.c= o.c||'y'; o.sc= N(o.sc, 4); o.x= N(o.x, 100); o.y= N(o.y, 100)

        y=w.D(o.x,o.y);hS = o.sc* 4; side = hS * 2; y.pol( oO('c',o.c), [[-hS,hS],[0,-side*2],[hS,hS]])

        y.push=function(frc){var y=this, g=G(arguments)

            frc=N(g.f, 1)

            if(g.p){
                _.ev(N(g.s, 100*1000),   function(){y.push( frc )})}
            else { y.I(y.v().m(frc*0.1))  }

            return y}
        y.going=function(){var y=this,
            lv=y.lV()
            return M.a(lv.x)>0.5|| M.a(lv.y)>0.5|| M.a(y.aV())>0.5}

        if(!g.n){y.cn('thrust').shtSp()}
        if(g.p){y.tr()}
        //y.sht= _.b($.mo(.15,y.sht),y)

        y.fixedRot(false)
        y.aD(0)
        y.r(.8)
        y.SetBullet(true)

        return y.K('ship yip y')
    }
//these just thrust and dont
//otherwise apply forces to neighbors.  but what if
//they 'SUCKED' instead of 'thrusted' ?
//is that the same as having a gravitational inwards force?
//  y = $ys(300, 200, 3).angDamp(0).linDamp(1)
    w.Y = function(){var w=this, g=G(arguments)

        y = $a(w, 'y', g)

        if(g.p){y.track()}
        return w

    }

    SHIP=function(){W(10).Y()

        _.t(20, function(){
            w.S(R(500), R(500),$r(), 20)
        })
    }
    w.gG=function(x,y){var w=this,

        gG, core, shell,z


        z=40


        gG = w.D(N(x,w.hW), N(y,w.hH)).K('gG')

        core = gG.cir({c:'o', C:'z',l:10, r:20}).K('core')

        shell = gG.rec({c:'g', C:'g', l: 5, w:z, h:z, s:1,al:.5})

        core.cl('bul', function(bulF){gG.lV(0).aV(0); z=40;})

        _.ev(2, function(){
            z += 4

            if(shell){ shell.kill() }

            shell = gG.rec({c:'g', C:'g',l:5, w:z, h:z, s:1, al:.5})

            //shell=gG.rec('g',z,z,'-')//.bS( shell.img=w.s.rec('g',z,z) )
            //w.back(sh)

        })


        return gG

    }


}; yShip()



old=function(){

    MEMORY=function(){  s = cjs.S().A(ct= cjs.ct())



        grid=[
            ['guy','me',0,0],
            [0,'me',0,0],
            [0,0,0,0],
            [0,'me','chicks','me']
        ]


        wGuy=function(){
            var x=0,y=0
            _.e(grid,  function(row,i){
                _.e(row,function(cell,j){
                    if(cell=='guy'){ x=j, y=i}})})
            return {x:x,y:y}
        }


        dGuy=function(){

            var p=wGuy()

            grid[p.y][p.x]=0
            if( grid[p.y+1][p.x]=='chicks') {alert('win')}
            else if( grid[p.y+1][p.x]==0){
                grid[p.y+1][p.x]='guy'
                playerGrid()

            } else {alert('lose!')}}



        rGuy=function(){
            var p=wGuy()
            grid[p.y][p.x]=0
            if( grid[p.y][p.x+1]=='chicks') {alert('win')}
            else if( grid[p.y][p.x+1]==0) {
                grid[p.y][p.x+1]= 'guy'
                playerGrid()} else {alert('lose!')}}




        _.e(grid, function(row,i){
            _.e(row, function(cell,j){
                ct.A(
                    cjs.rec(30,40).XY(j*100+100,i*100+100))
                if(cell=='me'){
                    ct.bm('me',
                        function(b){
                            b.XY(j*100+100,  i*100+100
                            ).sXY(.1)})}})})

        playerGrid=function(){
            _.e(grid, function(row,i){
                _.e(row, function(cell,j){
                    ct.A( cjs.rec(30,40).XY(j*100+100, i*100+100))
                    if(cell=='guy'||cell=='chicks'){
                        ct.b(cell, function(b){
                            b.xy(  j*100+100,  i*100+100 ).sXY(.1)})}})})}

        $.in(3, function(){
            ct.remove()
            s.A( ct = cjs.ct())
            playerGrid()})

        $.kD('d', dGuy)
        $.kD('r', rGuy)
    }

}
old=function(){

    w.bouncePlat  =function(x,y,W,H){
//=brk=brick=
        x = N(x) ? x : 60; y = N(y) ? y : x
        W = N(W) ? W : 30; H = N(H) ? H : W
        return this.S(x,y,W,H).K('plat boucePlat').rest(.8)
    }
    abovePlayerGlobally=function(p){
        return p.wP(0, -100)
    }
    OLDJUMP=function(){w = b2d.W({g: 500})

        w.bouncePlat(800,500,600,100)
        w.bouncePlat(300, 530,100,100)



        p = w.jumper()


        cjs.tick(function(){var k=cjs.Keys

            if(p.onGround ){


                if(k.up){
                    if(k.right){p.lV(20,-80)}
                    else if(k.left){p.lV(-20,-80)}
                    else {p.lV( 0, -90 )}

                }

                else {
                    if (k.left) {
                        if(k.down){p.I(-4,0)}
                        else {p.lV(-40, 0)}
                    }

                    if (k.right) {
                        if(k.down){p.I(4, 0)}
                        else{p.lV(40, 0)}
                    }
                }

            }


            else{

                if(k.right){p.I(10,0)}
                else if(k.left){p.I(-10,0)}

            }
        })


        w.box(800,100).bindSprite('guy')

    }
    abovePlayerGloballyx=function(p){
        return p.wP(0,-p.sprite.H()/2)
    } //bul location //try worldPoint(0, 0).. it rotates me!?

    b.thrustControlx = function(){var b=this

        cjs.t(function(){b2d.cn.thrust(b)})

        return b
    }
    w.footListener=function(){
//sets b2d.onGround setter
//requires a body that has userData 'feet',
//and it simply see if it is colliding with anything
        b2d.onGround = false
        w.beg(function(cx){if(cx.with('feet')){b2d.onGround=true}})
        w.end(function(cx){if(cx.with('feet')){b2d.onGround=false}})
        return this
    }

    b.bindKeyboardx = function (cont) { //p.moveListener=
        var that = this,b=this,w= b.W()
        control = (b2d.cn[cont] || b2d.cn.trickJump )
        control()
        //cjs.t(function () {b.rot(0);w.e(function (b) {if (b.is('destroy')) {b.destroy()}})})
    }  //b.warpToTopLeft=function(){ return this.XY(200, 100)}




    AUTOFLAGCHECKER=function(){W()
        p = w.jumper()
        p.FLAGS={}
        p.flagHandlers={
            warp: function(p){p.XY(200, 100)},
            log: function(){$l('haha')}}
        cjs.t(function flag(p){
            _.e(p.FLAGS, function(valkey){
                if(val===true){
                    p.flagHandlers[key](p)
                    p.FLAGS.warp=false
                    p.FLAGS[key]=false}})})

    w.pWallsX=function(){

        var width=600, height=300, gravity=400

        w.left =  left = w.rec(0, height / 2, 40, height, 'pink').stat().K('leftWall').fric(.5).rest(.5)
        w.right = right = w.rec(width, height / 2, 40, height).K('rightWall')
        w.floor =  floor = w.rec(height, width / 2, width*5, 40, 'orange').stat().K('floor').fric(.2).rest(.2)
        w.ceiling =  ceiling = w.rec(height, 0, width*5, 40, 'orange').stat().K('ceiling').fric(.2).rest(.2)

        return this}
    w.startKillingX=function(){var w=this
        cjs.tick(function(){
            w.each(function(b){
                if(b.is('destroy')){
                    b.K('destroyed')
                    b.kill()}
            })
        })

        return this}

    b.footListenerGreatButIGuessAlreadyDeppedKeepForAWhile = function () {
        var body = this


        var listener = b2d.listener()
            .begin(function (cx) {
                var bod
                if (fixt = cx.with('feet')) {
                    fixt.gB().trig.onGround = true
                }
            })

            .end(function (cx) {
                if (cx.with('feet')) {
                    body.trig.onGround = false
                }
            })

        this.GetWorld().listen(listener)

        return this
    }//b.feetListener =function(){return this.listener('feet')}

}
}