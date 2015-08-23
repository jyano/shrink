//-> G(arguments, fn)

b2d.p()
//  The easiest approach to utilize the controllers
// is to create sensor fixtures
// that test when a begin/end  event has occurred with a body.
// In the beginContact method, add the body to the controller.
// In the endContact method, remove the body.
// b=w.D(300, 300,'b', 50, 60); T.t(function(){b.F(10,10)}) //.zF(10,10)// <--MUST WRITE
// co = w.aCo(-5, -5)
// Imagine that you have gusts of wind blowing sideways…
// you can add your objects to a Contoller and have them pushed sideways…
// then when the wind passes you could remove them from that controller.
// now just add and remove bodies to the controller!!
//pass 1 or more controllers, and it will get them goin'

w.co = function(){var w=this, g=G(arguments)
    g.e(function(co){
        w.AddController(co)
    })
    return this
}
co.N=   function(){return this.GetNext()}
co.W=   function(){return this.GetWorld()}
co.xB=function (b) {var g=G(arguments), b=g[0]

    if(g.u){
        if(g.n){ this.xB( _.l(this.bs() )) }
        else if(g.p){ this.xB( _.f(this.bs() )) }
        return this}

    if(!this.b()){return this}

    if(b){
        if(b2d.tB(b).by(this)){


            if( b2d.tB(b).by(co) ){
                this.RemoveBody(b2d.tB(b))
            }



        }}

    else {this.bs(function(b){this.xB(b)})}

    return this
}
b.xCo=function (co) {var b=this,g=G(arguments), co=g[0]


    if(!this.co()){return this}


    if(!co){
        if(g.n){this.xCo(_.l(this.cos()))}
        else if(g.p){this.xCo(_.f(this.cos()))}
        else {this.cos(function(co){ b.xCo(co)})}
    }

    else if(this.by(co)){co.RemoveBody(this)}

    return this
}
co.b = function(){
    var g=G(arguments), b = this.GetBodyList()
    return g.p? b.body : b
}
co._B = co._A = function(b){

    if(b){this.AddBody(b2d.tB(b))}
    return this
}
co.B= function(){var g=G(arguments), co=this



    if(g.n){
        if(g.f){
            this.xB(b2d.tB(g.f))
        }}

    else {


        g.e(function(b){
            if(g.p){co._B(b)}

            else {
                if(!b.by(co)){ co._B(b) }
            }
        })

    }

    return this
}
co.n=function(){

    var n=0,  b=this.GetBodyList()

    if(!b){return 0}
    n++
    while(b.nextBody){
        n++
        b= b.nextBody
    }
return n
}
co.by=function(b){
    if(b){ return _.contains(this.bs(), b)}
}
b.by=function(co){

    return co.by(this)
    var by=false,
    coL = this.GetControllerList()
    if(!coL){return false}
    if(coL == co ){return true}
    while(coL.nextController){
        coL = coL.nextController
        if(coL == co ){by = true}
    }
    return by
}
f.by=function(co){
    return this.B().by(co)
}
b.nCo=function(){
    var n=0,
        co=this.GetControllerList()


    if(!co){return n}
    n++
    while(co.nextController){
        n++
        co= b.nextController
    }


    return n
}
b.co= function () {var  g=G(arguments)
    if(g.n){
        if(g.u){this.xCo()}
        else {g.f.xB( this) }
        return this
    }

    if(g.u){

        var c=this.GetControllerList()

        return g.p? c.controller: c
    }
     if(g.F_){

         r.co('+').bs(function(b){

             if(!b==this){g.f(b)}
         })}
    return this
}
co.bs=function(fn){
    var b = this.b(), bs = []
    if(!b){return bs}
    bs.push(b.body)
    while(b.nextBody){
        b=b.nextBody
        bs.push(b.body) }
    if(fn){_.e(bs, function(b){fn(b)}); return this}
    return bs
}
b.cos=function(fn){
    var co = this.co(), cos = []
    if(!co){return cos}
    cos.push(co.controller)
    while(co.nextController){
        co=co.nextController
        cos.push(co.controller) }
    if(fn){_.e(cos, function(co){fn(co)}); return this}
    return cos
}
f.co= function () {
    return this.B().co()
}

//x as a verb is to delete/cancel

f.xCo=function(){this.B().xCo();return this}
//'(switch/change)to'
b.to=function(co){return this.xCo().co(this)}
f.to=function(co){this.B().to(co); return this}


//////////////////// general above ////
aCo.V = function () {
        var co = this, g = G(arguments), o
        //getter is a waste!  counterproductive... think about it! :)..
        // but for consistency..??? nah i can do better
        //applies 'gravity' by default

        o = g.N ? {y: g.f} : {x: g.f, y: g.s}
        o.y = N(o.x, 100)
        o.x = N(o.x, 0)

        co.A = g.u || (g.N_ && U(g.s)) ? V(0, N(g.f, 100)) : V(g.f, g.s)

        return co

}
fCo.V = function (x, y) {
        var fCo = this //applies 'gravity' by default
        fCo.F = U(x) ? V(0, 10) : V(x, y)
        return fCo
    }
gCo.g = gCo.grav = gCo.V = function (gv) {
   //applies 'gravity' by default
        this.G = V(1, 100)//N(gv,1)
        return this

}
gCo.r1 = function () {
    this.invSqr = false
    return this
    }
gCo.r2 = function () {
    this.invSqr = trie
    return this
} //this is default
tCo.axis = function (ax) {
        this.SetAxisAligned(ax);
        return this
    }
co.step = function(){
    alert('co.step')
    this.step(); return this}
w.aCo=   function(x, y){var w=this,

    co = new b2d.ConstantAccelController

    if(x || N(x)){   co.V(x, y)     }

    w.co(co)

    return co

}
w.fCo=  function(x,y){var w=this,co
    co = new b2d.Dynamics.Controllers.b2ConstantForceController()
    co.V(_.tN(x),_.tN(y))
    w.co(co)
    return co}
w.gCo=  function(gv, wantFasterR1){var w=this, g=G(arguments), co

    co = new b2d.Dynamics.Controllers.b2GravityController

    if(g.N_){ co.G = g.f  }
    if(g.s || g.p){ co.r1() }

    w.co(co)

    return co

}
w.eT=function(fn){var w=this

    T.t(function(){
        w.e(fn)
    })

    return w}
w.tCo=   function(a, b, c, d){var co
    co= new b2d.Dynamics.Controllers.b2TensorDampingController
    this.co(co)
    return co
}
b._xCo=function(){
    this.co().controller.xB(this); return this
}
b.do1=function(co){this.cl(

        function(f){  if(!f.by(co)){co.B(f)}  },
        function(f){  if(f.by(co)){co.xB(f)}  }
    )

return this
}
b.do=function(co){
    this.cl(function(f){

            if(!f.sen()){
                co.B(f)
               // f.C('z')
            }

        },

        function(f){

            if(!f.sen()){
           // co.xB(f)
            f.xCo(co)
            //f.C('w')
            }
        }); return this
}
co.do=function(b){
    if(b){b.do(this); return b}
}
w.bCo= function(nX, nY, lD, aD){var w=this, g=G(arguments), o,co
//co = new b2d.BuoyancyController
    co = new  b2d.Dynamics.Controllers.b2BuoyancyController
    o = {  nX:g.f,  nY:g.s,   lD:g.t,   aD:g[3]  }
    o.nX = N(o.nX,  0) //normX
    o.nY = N(o.nY, -1) //normY
    o.lD = N(o.lD,  2) //linDrag?
    o.aD = N(o.aD,  1) //angDrag?
    //Offset,Density,'Clear'
    co.no(o.nX, o.nY).drag(o.lD, o.aD) //dg? //wait drag or damp???
    this.co( co )
    return co
}
bCo.no =   function (x, y) {
    this.normal.Set(x, y); return this
}
bCo.os = function (os) {
    this.offset = os; return this
}
bCo.lD =   function (lD) {this.linearDrag= N(lD,0); return this}
bCo.aD =   function (aD) {

    this.angularDrag = N(aD,0)
    return this
}
bCo.dg= bCo.drag = function (lD, aD) { return this.lD(lD).aD(aD) }
bCo.d =  bCo.den = function () {var  g = G(arguments)
    this.density = g.f
    if (!g.n) { this.useDensity = true }
    return this
}
bCo.uD=   function (u) {
    this.useDensity = u;
    return this
}


b.cx=function(fn){var b=this, c, next, n, ent, cx

    if(U(fn)){ return b.GetContactList() }


    cx = b.cx()

    if(!cx){$l('!'); return}

    n=0

    cx = cx.contact

    while(cx){

        next = cx.GetNext()
        fn = _.b(fn, b)

        ent = b.of(  cx.a()  )?  cx.B():  cx.A()

        fn( ent, cx, n++ )

        cx = next
    }

}




b.nCx=function (){

    var n=0,
        cx=this.cx()

    if(!cx){return n}

    n++

    while(cx.next ){

        n++

        cx= cx.next

    }

    return n
}

b.cxs= function (fn){

    var cx = this.cx(), CXS = []

    if(!cx){return CXS}

    CXS.push(cx.contact)

    while(cx.next){
        cx=cx.next
        CXS.push(cx.contact)
    }

    if(fn){_.e(CXS, function(cx){fn(cx)}); return this}

    return CXS


}




b.bc=  function (fn) {var b=this, g=G(arguments),

    origE, e, nextE

    if (g.n){fn = function(b){b.kill()}}

    origE = b.co()
    if (!origE) {return b}
    e = origE.nextBody
    while (e) {
        nextE = e.nextBody
        fn(e.body)
        e = nextE }
    e = origE.prevBody
    while (e) {
        nextE = e.prevBody
        fn(e.body)
        e = nextE }
    return b


}
b.al=function(al){

    al = N(al,.8)


    this.f().sprites[0].al(al)

    return this
}
b.end=function(){var b=this, w= b.W(), g=G(arguments), o

    o = F(g.s)? {k:g.f, fn:g.s} : {fn:g.f}

    if(o.k){

        w.end(b,  o.k, o.fn)
    }

    else { w.end(b, o.fn)  }


    return this

}


//CHANGESCONTROLLERBASEDONSENSORBRILLIANT=
//gives u a controller-edge, which is a body-controller pair
//it is linked both to other bodies for that controller..
//and to other controllers of that body!!!
//lets focus on other bodies first....
cx.bCo =  function (k) {
    var cx = this,g=G(arguments), f
    //if any fixt collides with a certain kind
    //switch to the controller with that name
    g.e( function (k) {
        cx.w(k,  function(){   this.to(window[k])  })} )
}
w.bindCo=function(){var g=G(arguments)
    return this.b(function(cx){
        cx.bCo.apply(cx, g)
    })
}
//// bindCo ******* was //w.bCo= (now that is bu controller)

ACO= SENCOUNT= function(){W([1200,1200,1200,1200],{g:130 })//.C('w')

    p= w.p(500,100)

    sen =  w.S(1200,800, 'w', [[2400,200,'-']]).K('sen').al(.2)
    aCo = w.aCo(150, -250)


    aCo.do(sen)    //<- sen.do(aCo) //  <- sen.cl(function(f){if(!f.by(aCo)){aCo.B(f)}}, function(f){if(f.by(aCo)){aCo.xB(f)}})

    w.show(function(){return aCo.n()})
    y = w.y(400, 40).fR().rt(90).lD(2).tr()
    w.D(300,100, 'r', 20);
    w.D(400,100, 'r', 120,120); w.D(500,100, 'r', 45);
    w.D(600,100, 'r', 80);
    w.D(700,100, 'r', 200,100)

    /*
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
     }*/

    function add(){w.C('g');added=1; co.B(b)}
    function rm(){w.C('r');added=0; co.xB(b) }
}
FCO =  function(){W({w:'r2', g:0}).C('e')
//.pen('blue has constForce(1,0)  red has constAcc(1,0)')
    //aCo=w.aCo(1,0).B(w.D(100,300,'x', 20 ).d(1), w.D(100,400, 'x',40 ).d(1))
    //w.aCo(0,1).B(w.D(300,100, 'x', 20).d(1), w.D(400,100, 'x', 40).d(1))

    w.p(100,100)

    fCo=w.fCo(2,0).B(
        w.D(100,100,'b',60).d(1).lD(10),
        b= w.D(100,200, 'b', 40).d(1).lD(10),
        b= w.D(100,200, 'b', 100).d(1).lD(10))
    w.fCo(0,2).B(
        w.D(100,100, 'g', 60).d(1).lD(10),
        w.D(200,100, 'g', 40).d(1).lD(10),
        w.D(200,100, 'g', 100).d(1).lD(10))
    w.$$( function(){
        w.C('d')

        w.e(function(b){ b.xCo() })
    })

}
GCO=function(){W({g:10 ,w:'r2' })

    p=w.p().tr().r(2)

    w.Z(1.4)

    gCo = w.gCo()
    gCo.G= 10
    _.t(1, function(){

        b= w.D(R(300,100), R(300,100), 'z', 60)
        //.fR()
        // .d(.1)

        gCo.B(b)
    })

    gCo1 = w.gCo()
    gCo1.G= 50
    _.t(5, function(){
        b= w.D(R(300,100), R(300,100), 'o', 60)
        // .fR()
        //.d(.1)
        gCo1.B(b)

    })
    w.D(R(300,100), R(300,100), 'r', 60).d(1000)
    //   _.t(12, function(){     w.D(R(300,100), R(300,100), 'x', 30).r(2)     })

    /*
     arr=[
     //  w.D(320,600, 'r', 30).fR().d(1) ,
     b=   w.D(300,120, 'b', 40).r(0).fr(10).fR().d(1) ,
     w.D(340,200, 'x', 80).r(0).fr(10).fR().d(1) ,
     w.D(300,340, 'w', 80).fR()//.r(0).fr(10).fR().d(1) ,
     //  w.D(320,620, 'l', 70).fR().d(1)
     ]
     _.e(arr, function(b){ gCo.B( b )   })


     $.inx(2, function(){

     w.C('g')
     _.e(arr, function(b){ gCo.B( b )   })
     //b.lD(100)
     //gCo.xB(b)

     })





     $.in(8, function(){ //.pen('welcome to grav controller - top balls r1, bottom r2(default)')

     r = 40

     gCo = w.gCo(1, true).B(

     w.D(100,600, 'b', r).d(1),
     w.D(200,500, 'b', r).d(1),
     w.D(300,400, 'b', r).d(1),
     w.D(400,300, 'b', r).d(1),
     w.D(500,200, 'b', r).d(1),
     w.D(600,100, 'b', r).d(1)
     )

     gCo2 = w.gCo(1).B(
     w.D(100,600, 'r', r).d(1),
     w.D(200,500, 'r', r).d(1),
     w.D(300,400, 'r', r).d(1),
     w.D(400,300, 'r', r).d(1),
     w.D(500,200, 'r', r).d(1),
     w.D(600,100, 'r', r).d(1)
     )

     })
     $.in(15, function(){w.C('y');
     r = 40
     w.gCo(2).B(b= w.D(100,200, 'b', r ).d(1),
     w.D(200,500, 'r', r).den(1),
     w.D(300,400, 'x', r).den(1),
     w.D(400,300, 'c', r).den(1),
     w.D(500,200, 'l', r).den(1),
     w.D(600,100, 'l', r).den(1))
     w.gCo().B(w.D(700,600,'b',r).den(1),
     w.D(800,500,'r',r).den(1),
     w.D(900,400,'x',r).den(1),
     w.D(1000,300,'c',r).den(1),
     w.D(1100,200,'l',r).den(1),
     w.D(1200,100,'l',r).den(1))


     })
     $.in(22, function(){w.C('y');

     r=20

     gCo = w.gCo(1, true).B(
     w.D(100,600, r, 'b').d(1),
     w.D(200,500, r, 'l').d(1),
     w.D(300,400, r, 'x').d(1),
     w.D(400,300, r, 'x').d(1),
     w.D(500,200, r, 'l').d(1),
     w.D(600,100, r, 'b').d(1)
     )

     gCo2 = w.gCo(4).B(
     w.D(700,600, r, 'b').d(1),
     w.D(800,500, r, 'l').d(1),
     w.D(900,400, r, 'x').d(1),
     w.D(1000,300, r, 'x').d(1),
     w.D(1100,200, r, 'l').d(1),
     w.D(1200,100, r, 'b').d(1) )
     })  */

}
TCO=  function(){W().G(1)//.C('z').pen('welcome to tensor (damping) controller - the timing here is amazing!')

    co =    w.tCo()

    co.B(

        r =  w.D(100,100,'r',100).lV(10,20).grp(-1).lD(.2),
        b =  w.D(500,500,'b',90).lV(-10,-20).grp(-1).lD(.2),
        y=  w.D(300,300,'y',70).lV(-10,-20).grp(-1).lD(.2)

    )

    o =  w.D(300,300,'o',70).lV(-10,-20).grp(-1).lD(.2)


    _.t(30, function(){
        var b= w.D(400, 300,'o', 20)//.lV(10,20).lD(0)//.L(10,20,0)
        b.f().grp(-1)

        co.B( b )
    })
    w.y().grp('-1')

    // w.r_.cl(function(f){f.C('b'); co.xB(f)})

    l= w.m_controllerList.GetBodyList()

}
TCO1=  function(){W({g:0})
    w.S(200, 200,'b',50,260)
    w.S(140,200,'d',140,50)


    co = w.tCo(); _.t(10, function(){
        co.B(
            w.D(R(1000,100),300,'x',30).lV(10,20).lD(0))})

    hits=0

    y=w.y().K('ship').lD(5)

    bg = w.y('b',500,300,'-').d(3).lD(2).K('bg').aD(.2)

    bg.rotTowards=function(y){
        var b=this,a
        a = -M.tD(M.atan((y.X()-b.X()) / (y.Y()-b.Y()))    )
        if(y.Y()>b.Y()){ a+= 180 }
        b.rt(R(40,a-20))
    }

    $.ev(.5, function(){
        bg.aV(0); bg.rotTowards(y)
    })

    bg.push(50,'+')

    T.t(function(){
        _.t(20, function(){
            bg.I()
        })
    })


    w.b(function(cx){var i
        if(cx.w('ship', 'bg')){

            i = cx.m().m_points[0].m()

            $.in(.1,
                (
                M.lD( V(i.x,i.y),  V(y.X(),y.Y())   ) >
                M.lD( V(i.x,i.y),  V(bg.X(),bg.Y()) )
                )?
                    function(){hits++;w.C('g'); bg.XY(300,300); y.XY(700,400)}
                    :
                    function(){w.C('p'); bg.XY(700,400); y.XY(100)
                    })
        }
    })
    //w.show(function(){return 'hits: '+ hits})
}
LVW= function(){W([2000,1500,2000,1500]).G(200).C('b'); var b1, b2
    // y and remote control fireball
    var y= w.y(300,100,'+')
    farMoon =  w.D(600, 100, 'y', 150).K('b').r(1.2).lV(200, 0).cn('thrust').fR()
    nearMoon =  w.D(400, 200,'y', 100)
    T.t(function(){
        var lV = y.lVW(y.X(),y.Y() ).mult(20)
        nearMoon.lV(lV.x, lV.y)
    })

    p= w.p(900, 400).cn('jump').cl($.mo(function () {w.D(300, 100, 'r', 5)}))

    sun =  r1 = w.S(600, 300, 'r', 30, '-').K('r').bS('sun')

    sun.cl(function (f, cx) {var pt = cx.cen(), v1 = b.lVW(pt), v2 = r1.lVW(pt)
        w.D(630, 350, 'r', 10).I(v1.x - v2.x, v1.y - v2.y)})



}
BCO=function(){W([1200,1200],{g:50,w:'U' })
    sen =  w.S(1200,300, 'o', [[2400,200,'-']]).K('sen')
    aCo = w.aCo(0, -50)



    aCo.do(sen)    //<- sen.do(aCo) //  <- sen.cl(function(f){if(!f.by(aCo)){aCo.B(f)}}, function(f){if(f.by(aCo)){aCo.xB(f)}})




    y = w.y(400, 40).fR().rt(90).lD(2).tr()


    w.D(300,100, 'r', 20); w.D(400,100, 'r', 40); w.D(500,100, 'r', 45); w.D(600,100, 'r', 80); w.D(700,100, 'r', 10)

    w.me().XY(700,-400) //.r(5).d(2)


    w.S(300,900,'r', 20,360); w.S(890,900,'r', 20,360)

    w.S(600,900,'b',[[550,340,'-']])
        .do(
        co=  w.bCo()
    )

    // y = w.y(400, 40).fR().rt(90).lD(2).tr()
    w.D(500,100, 'r', 20);
    w.D(400,100, 'r', 40); w.D(500,100, 'r', 45);
    w.D(600,100, 'r', 80); w.D(700,100, 'r', 10)

    $.in(8, function(){w.addHundBalls()})

    $.in(24, function(){
        w.e(function(b){b.dyn()})
    })
}
ISTOUCHING = function(){W().Y()
    co = w.bCo()  //(0,-1,5,2).os(-6).d(2)
    sen = w.S(320, 245,'z')
    sen.rec({ s:1, w:880, h:170, c:'o',C:'o'  })
    w.eT(function(b){var cx
        // each tick.. for every body ...
        // if that body has a controller.. remove the controller and turn that body orange
        if( b.co() ){  co.xB(b);  b.C('o') }
        else {
            for(var c=b.cx();c;c=c.next){
                cx=c.contact;bodB=cx.b(); if(cx.IsTouching()){
                    co.B( bodB ); bodB.C('X')
                }}}
    })
    $.ev(5,function(){w.D(300,40,'o',18).C('o')})
    $.in(1, function(){


        i =  y.sp()

        i.K('j')

        w.C($r())

        k = i._K

    })
}
BCO1=function(){W({g:200 })

    p = w.p(500,200)



    w.S(320,540,'g',320,20)
    w.S(170,430,'g',20,200)
    w.S(470,430,'g',20,200)



    co = w.bCo(0,-1,5,2).os(-6).d(2)


    sen=w.S(320, 445, 'z').K('sen');
    sen.rec({ s:1, w:280, h:170, c:'b', o:.8 })// <-nice opacity example
    sen.SetBullet(true)

    fn =      function(f){
        $l('sen beg')
        if(!f.B().co()){

            co.B( f.B() )
            f.B().C("o")
        }

    }


    w.b(   function(cx){

        cx.w('sen', _.once(fn))

    })



    //T.t(function(){  co.xB(p)  })

    sen.end(p,function(){
        $l('sen end')
        //co.xB( p )
        p.C('r')

        if(p.co()){

            p.xCo(co)
        }

    })


    $.ev(1,function(){w.D(300, 40,'r', 8).d(5) })


    //  co.B(p)

    T.t( function(){
        co.xB(p)
    })

    // w.end('right', function(){$l('end!')})

    // w.r_.end( function(){$l('end!')})
}
BCO2= function(){W(200)
    w.S(320,480,'r', 640,20)
    w.S(320,340,'b', 320,20)
    w.S(170,230,'g',20,200)
    w.S(470,230,'o',20,200)
    sen =  w.S(320,245,'y', 280,170,'-').K('sen')
    p =  w.p(300,100)//.d(.2).cn('jump')

    w.addHundBalls()
    co=w.bCo()
    sen.do(co)

    /*
     co.normal.Set(0,-1)
     co.offset=-20
     co.useDensity=true
     co.density=2.0
     co.linearDrag=5
     co.angularDrag=2
     */
    /*
     T.t(function(){

     w.e(function(b){if(b.iD()){ //if the body is not static
     // if ( b.co() )  {b.xCo(co) ; $l('has co!!!!! (no doesnt)') } // if the body has a co, get rid of it

     for (var cx = b.cx(); cx;cx=cx.next) {//.next?
     cx.contact.w('sen',
     function(f){
     $l('add0')
     if(!f.B().co()){
     $l('add')
     co.B(f)
     }})
     }
     }})
     })*/


}
BCO3=function(){W({
    w:'U',
    g:200
});


    co = w.bCo()

    //co.os(-360)//.d(2)//w.bCo(0,-1,5,2)

    co.useDensity =false
    // co.density = .02

    sen=w.S(620, 445, 'z').K('sen');
    sen.rec({ s:1, w:1680, h:270, c:'b', o:.8 }); sen.SetBullet(true)

    sen.do(co)

    _.t(5, function(){

        w.D(300, 40,'r', 48).d(1)
//            .aD(100).lD(.2)

    })
    w.D(300, 40,'b', 10).d(100)
    w.D(300, 40,'b', 24).d(.1)
    p = w.p(200,-1000).d(.9)
}
BCO4=function(){W({g:100}).Y(); y.XY(100,500)


    s1 = w.sensorBucket(320,300, 's1')
    s2 = w.sensorBucket(700,300, 's2')

    /* w.D(150, 100, 'w', 20)
     w.D(200, 100, 'd', 20)
     w.D(250, 100, 'r', 20)
     w.D(350, 100, 'g', 20)
     w.D(400, 100, 'o', 20)
     w.D(450, 100, 'w', 20)*/
    co = w.aCo(500,-50)
    co1 = w.aCo(-500,-50)

    w.addHundBalls()

    //   w.e('ball', function(b){co.B(b) })


    $.ev(function(){

        aCo.B(
            w.D(300,100, 'y', 10),
            w.D(760,100, 'b', 10)
        )
    })


    $.ev(5, function(){  y.bc('-')  })

    //default is to kill all in its 'controller-space' (except itself)


    w.b(function(cx){

        cx.w('s1',
            function(f){f.xCo();
                co.B(f.B())
            })

        cx.w('s2',
            function(f){f.xCo(); co1.B(f.B())})


    })





}
SENSORBOXES=function(){ W({g:300})
//gives u a controller-edge, which is a body-controller pair
    //it is linked both to other bodies for that controller..
    //and to other controllers of that body!!!
    //lets focus on other bodies first....



    //w.bindCo=function(){var g=G(arguments);
    // return this.b(function(cx){
    // cx.bindCo.apply(cx, g)}
    // )}


    w.bindCo('co1','co2')

    s1 = w.sensorBucket(320, 300, 'co1')
    s2 = w.sensorBucket(700, 300, 'co2')

    co1 = w.aCo(-500, -50)
    co2 = w.aCo(50, -500)

    w.D(150,100,'w',30).d(1)
    w.D(200,100,'d',30).d(1)
    w.D(250,100,'r',30).d(1)
    w.D(350,100,'g',30).d(1)
    w.D(400,100,'o',30).d(1)
    w.D(450,100,'w',30).d(1)



    w.end(function(cx){
        cx.w('co2',  function(){ this.xCo() } )
    })
    //w.end( 'co2', function(){ this.xCo() } )  // w.end( 'co2', 'xCo'  )//<-


    $.in(.5, function(){

        y=w.ship(300,50)

        $.ev(1, function(){w.D(300,100,'y',10)

            w.D(760,100,'b',10)

            y.bc('-')
        })

    })





}
BCO5= function(){W( ).Y(); y.XY(100,500)

    p = w.p(300,100)

    s1 = w.sensorBucket(320,300, 's1')
    s2 = w.sensorBucket(700,300, 's2')

    /* w.D(150, 100, 'w', 20)
     w.D(200, 100, 'd', 20)
     w.D(250, 100, 'r', 20)
     w.D(350, 100, 'g', 20)
     w.D(400, 100, 'o', 20)
     w.D(450, 100, 'w', 20)*/
    co = w.aCo(500,-1500)
    co1 = w.aCo(-500,-1500)

    //  w.addHundBalls()
    $.ev(5, function(){  y.bc(function(b){b.kill()})  })

    s1.do(co)

    co1.do(s2)

    //   w.e('ball', function(b){co.B(b) })


    /*
     $.ev(function(){

     aCo.B(   w.D(300,100, 'y', 10),  w.D(760,100, 'b', 10)
     )
     })



     //default is to kill all in its 'controller-space' (except itself)


     w.b(function(cx){

     cx.w('s1',
     function(f){f.xCo();
     co.B(f.B())
     })

     cx.w('s2',
     function(f){f.xCo(); co1.B(f.B())})


     })

     */



}
BCO6= function(){W({g: 0}).C('g')

    p = w.p(200,200)

    y = w.y(300, 50).lD(5)
    co1 = w.aCo(0,-50)
    co2 = w.aCo(0, 50)
    s1 = w.D(250, 300, 'o',600, 600,  '-').K('co1')
    s2 = w.D(950, 300, 'o',600, 600,  '-').K('co2')
    w.bindCo('co1', 'co2')

    _.t(20,function(){
        w.D(R(1200,100),
            R(600,100), $r(), 30)
    })


    /*


     w.end(function (cx) {
     cx.w('co1',
     function(){this.xCo()})
     cx.w('co2',
     function(){this.xCo()})
     })
     */

}
BCOWALL = function(){W([1200,600,2400,600],{g:50})
    x =  w.S(600,300,'w',280,370,'-').K('sen').al(.4)

    p = w.p(100,100)

    yy= y=  w.y()
        .lD(4).aD(3).tr()
        .d(5)


    co = w.bCo()   //(0,-.5,5,2)//.os(-6).den(2)

    x.do(co)

    p.aD(3)
    /* w.tE(function(b){
     if(!b.iD()){return}
     b.co('-')
     b.cx(function(f, cx){
     p.xCo(co)
     if(f.of('sen')){ co.B(this)}
     })
     })
     */


}
OLD =function(){W([2000, 1500, 2000, 1500]).G(200).C('b')



    //w.b(b, function () {b1 = w.S(R(500, 50), R(w.h, -50), 'y', 80).r(.8)})
    //w.end(b1, function () { b1.kill()  })

    /*

     w.D(700, 200, 'o', [
     [40],
     b2d.cir(5).bit(1, 2), //cat is 1, but will only collide with 2's
     b2d.cir(10, 100, 100, '-'),
     ['w', b2d.cir(10, 100, -100)],
     b2d.rec(10, 300, '-'), //sets as sensor
     ['b', b2d.rec(300, 10)],
     ['w', [100, 0], [150, -100], [200, 20]],
     [[200, 0], [250, -100], [300, 20], 'arr'], ['p', 50]
     ])
     w.D(300, 400, 'r', [
     b2d.rec(200, 100),
     ['g', b2d.cir(40, 100, 100).K('excited'), 'oook'],
     [5, 100, 200, 0, 'orgasmic excited']
     ])






     f = b.f().K('happy')  //apparently b.fixt is LIFO
     f.W().dot('b')
     $l('f is f: ' + f.is(f))
     $l('f is happy: ' + f.is('happy'))
     f.N().K('excited')// bug: k not getting communicated above (in the b def func)
     $l('f.N is excited: ' + f.N().is('excited'))
     $l('f is orgasmic: ' + f.is('orgasmic'))
     */




    /*


     //not working
     b = w.ball()
     b1 = w.ball(300,300)
     w.b(function(cx){cx.w(b, b1, function(b1, cx){
     var b=this,pt,v1,v2,temp,i
     pt = cx.cen()
     v1 = b.lVW(pt)
     v2 = b1.lVW(pt)
     temp= w.D(600,300,'r',10)
     $.in(.5,function(){temp.kill()})
     i = temp.I(v1.x - v2.x, v1.y-v2.y)
     })})

     */



    // set b2's linVel to b's linWorVel (scaled down by 20) // $l(b.lV());
    // b3= w.ball(100,100,10); $l('vel: ' + b3.lV().x); $l('velW: ' + b3.lVW().x);
    // $l('velL: ' + b3.lVL().x)


}
