
Cycle1=function(x,y,rt){


    ct= $Ct().mug(function(mug){mug.sXY(.4)
        ct.bm('uni', function(b){
            b.sX(-.8).XY(-20,200).rXY(240,80)
            b.n('uni')
            J.TR(mug, ct)
            J.RT(b, ct)

        })})


    if(N(x)){ct.X(x)}
    if(N(y)){ct.Y(y)}
    if(N(rt)){ct.rt(rt)}
    return ct
}
CYCLE=function(){z()

    s= $St(800, 800).tick()

    c1=Cycle1()
    c2=Cycle2()
    s.A( c1, c2 )}
Flame1=function(x,y){var c

    c= $Ct().dg()
    c.bm('flame', function(b){
        tweens.shakeY(b)
        c.mug(function(b){
            b.rC()
            tweens.shakeX( tweens.rott(b) )
            c.bm('flame', tweens.shakeX)
        })

        c.$$(function(){
            c.bm('flame', function(b){tweens.prod1(b.sXY(.2))})
            c.bm('flame', function(b){tweens.prod2(b.sXY(.2))})
        })
    })
    if(N(x)){c.X(x)}
    if(N(y)){c.Y(y)}
    return c}
FLAME=function(){
    s= $St(800, 800).A( f = Flame1( 300))
}
Bod2=function(x,y){
    var c1=$Ct(),
        cL=$Ct()


    c1.mug(function(m){

        SL(m, c1)

        m.sXY(.4)

        // c1.cI(m, 0)

    })


    c1.bm('arm',function(b){  b.sX(-.8).X(140).Y(100).rX(200).rY(80)
        RT(b)
        b.$$( function(){tweens.rpunch(b)})})

    cL.bm('uparm', function(b){

        RT(b, cL)
        b.sX(.8).XY(80,180).rXY(200,80)
        cL.$$(function(){tweens.lpunch(cL)})
        cL.XY(140,100).rXY(100, 100)

    })

    cL.bm('forearm',

        function(b){//lf=b
            b.name = ('lf')

            b.sX(.8).XY(-100, 140).rXY(20,120)
            RT(b)
        })
    return c1.A(cL)
}
Bod1=function(){
    var  outerCont = $Ct()//.dg()
    var  innerCont= $Ct()
    outerCont.A( innerCont )
    outerCont.mug(function(m){
        m.sXY(.4)
        createjs.bindSlide(m, outerCont)
        outerCont.bm('arm', function(b){

            b.name = 'arm'

            b.sX(-.8).XY(140,100).rXY(200,80)

            createjs.bindRotate(b)

            b.on('dblclick',function(){  tweens.rpunch(b)  })

        })
        innerCont.XY(40, 120).rXY(40, 100)
        innerCont.bm('uparm', function(b){


            b.sX(.8).XY(80,180).rXY(200, 80)

            createjs.bindRotate(b, innerCont)})
        innerCont.bm('forearm',  function(b){
            b.name='lf'
            b.XY(-100,140).sX(.8).rXY(20,120)
            createjs.bindRotate(b)
            innerCont.$$(  function(){tweens.lpunch(b)})
        })})
    return b=outerCont

}
BOD=function(){z()
    s = $St(800, 800).A(
        b1=Bod1(),
        b2=Bod2().XY(300)
        /*  ,
         cyc=Cycle1( 400),
         cyc2=Cycle2( 500)*/
    )
}
FLAM=function(){z()

    s = $St(800, 800).A(

        f=Flame1(300,500)

    )


}
CYC=function(){z()
    s = $St(800, 800).A(

        cyc=Cycle1( 400)//, cyc2=Cycle2( 500)
    )

}