
ZOE =function(){W()

    //this is a sprite sheet literal, but not an actual ss
    //cjs.Sp converts it to a ss for us, before passing it in
    // to cjs.Sprite to make the actual sprite object

    x0= w.S(800, 200,'r', 40,40,0,0,45)

    i=  x0.Sp($SS({

        r:24,

        i:["/zoetest.png"],

        f:[
            [0, 0, 512, 256, 0, -133, -143],
            [512, 0, 512, 256, 0, -133, -143],
            [1024, 0, 512, 256, 0, -133, -143]],
        a: {}

    }))

    i.p()



    sp=  w.S(500, 300,'X', 40,40).Sp($SS({

        r:24,
        i:["/sprite2.png"],

        f:[
            [0, 0, 128, 128, 0, -176, -161],
            [128, 0, 128, 128, 0, -176, -161],
            [256, 0, 128, 128, 0, -176, -161]],
        a:{
            "weird": {"speed": 1, "frames": [2]},
            "bald": {"speed": 1, "frames": [1, 1, 1, 1]}
        }
    }))// -150,-140)

    // _.e(  sp.as(), function(n){   sp[n]=function(){sp.p(n)}   })

    b =  w.D(  300,  200,'r', 40,40).cn('thrust')


    b.Sp($SS({

        r:4, i:["stick.png"],

        f:[
            [0, 0, 512, 512, 0, -22, -2],
            [512, 0, 512, 512, 0, -22, -2],
            [1024, 0, 512, 512, 0, -22, -2],
            [0, 512, 512, 512, 0, -22, -2],
            [512, 512, 512, 512, 0, -22, -2],
            [1024, 512, 512, 512, 0, -22, -2],
            [0, 1024, 512, 512, 0, -22, -2],
            [512, 1024, 512, 512, 0, -22, -2],
            [1024, 1024, 512, 512, 0, -22, -2],
            [0, 1536, 512, 512, 0, -22, -2],
            [512, 1536, 512, 512, 0, -22, -2],
            [1024, 1536, 512, 512, 0, -22, -2]
        ],
        a:{
            die: {"frames": [8, 9, 10], "speed": .1,  next:false},
            walk: {"frames": [1, 2, 3, 4], "speed": .1},
            jump: {"frames": [5, 6, 7,0], "speed": .1,  next:false}
        }
    }),40,0,.6, .6, 20)

    b1=  w.D(200,200,'b',60).Sp('char')//, -150, -110)//.rXY(275,220)

    w.S(100,500,'r',100,100).K('hurt').bS('guy',.6)
    w.S(500,500,'r',100,100).K('fly')
    w.cl('hurt', function(){ b1.p('hurt').I(10,-20)})
    w.cl('fly', function(){ b1.p('fly').I(-10,-20) })

}
ANIM=function(){W({g:0, w:'<-'});//w.Z(.1);cjs.rulers();w.showOff()

    p = w.D(100, 100, 'X', 100, 100).K('mummy').tr()
    p.gx=w.g.ct()
    // you must set reg point BEFORE you scale
    // because once you scale, 'W/H' return u the scaled height
    // but you need to set regX/Y based on original scale
    sp = p.Sp(Mummy, 0, 0, 2.5).p('walk')
    p.Bm('me',0,-50,-.3,.3)
    // sp.sXY(2, 200,-100)
    // b.bS('me', .3, -5, -22)
    x= w.S(200,400, 'X',200,40,  60, 60,'-')
    //x.rt(90).fR().bS($Sp(Pack).rC().sXY(.4)).p('e4')
    x.Sp(Pack,0,0,.5).p('e4')
    //.cl(function(){p.I(1000,1000)})
    // p.cl(x, function () { p.lV(10000, -400) })
    $.kD({
        u:function(){
            if(p.Y()>530){p.I(0, -380)}
        }, //jumpButtonPressed = true
        U: function(){}, //jumpButtonPressed = false
        l: function(){
            p.gx.sX(-1);
            p.direction='left'
        },
        r: function(){
            p.gx.sX(1);
            p.direction='right'
        }

    })
    T.t(function(){
        // p.rot(0)
        if(p.sp().dr()=='right'){p.I(100, -2)}
        else if(p.sp().dr()=='left'){p.I(-100, -2) }
        // direction='neither' // <-- demumify (doesnt keep walking
        //if(jumpButton is pressed){jump()}
        p.I(0, 200)

    })
    gx = w.pack()
        .sen(1)
        .lD(100).aD(100)
    w.$$(function(){

        anim = _.keys( Pack.animations )[_.random(23)]
        $l('changed to '+anim)
        f1.sp().p( anim )
    })
}
FIREBALL=function(){W({g:0, w:'<-'});//w.Z(.1);cjs.rulers();w.showOff()


    w.p()

    gx = w.pack().fR()
    ya()
    //.lD(100).aD(100)
    w.$$(ya)

    function ya(){

        anim = _.keys( Pack.animations )[_.random(33)]
        $l('changed to '+anim)
        gx.sp().p( anim )

    }

    T.t(function(){

        if(gx.X()<0){
            gx = w.pack()
            ya()
        }
    })

}




SPRITE=function(sp){W()
    w.i.A(
        sp  = $Sp( sp || SS ).XY(10).drag()
    )
    co ={
        jump:function(){ sp.p('jump') },
        explode:function(){ sp.p('explode') },
        spin:function(){ sp.p('spin') },
        stop:function(){ sp.s() },
        play:function(){ sp.p() }
    }


    $.d('y',460, 89).css({
        position:'absolute',
        top: 200,
        left: 300,
        padding:20,
        opacity:.9

    }).A().drag().A( $.sp(' '),
        $.bt('spin',function(){    co.spin() }), $.span(' '),
        $.bt('jump',function(){    co.jump() }), $.span(' '),
        $.bt('explode',function(){   co.explode()  }), $.span(' '),
        $.bt('play',function(){   co.play()  }), $.span(' '),
        $.bt('stop',function(){   co.stop()  }), $.span(' '),
        $.bt('meta', function(){ SPRITE() })
    )
    return  co
}



SPRITE=function(sprite){

    sprite = $sprite( sprite || SS ).XY(10).dg()

    stage = $St('o', 400 )
        .dg()//.op(.7),
    stage.A( sprite )


    controls={
        jump:function(){ sprite.gotoAndPlay('jump') },
        explode:function(){ sprite.gotoAndPlay('explode') },
        spin:function(){ sprite.gotoAndPlay('spin') },
        stop:function(){ sprite.stop() },
        play:function(){ sprite.play() } }

    $.d('y',460, 89).css({
        position:'absolute',
        top: 200, left: 300,
        padding:20, opacity:.9
    }).dg().A(
        $.sp(' '),
        $.bt('spin',function(){    controls.spin() }), $.sp(' '),
        $.bt('jump',function(){    controls.jump() }), $.sp(' '),
        $.bt('explode',function(){   controls.explode()  }), $.sp(' '),
        $.bt('play',function(){   controls.play()  }), $.sp(' '),
        $.bt('stop',function(){   controls.stop()  }), $.sp(' '),
        $.bt('meta', function(){ SPRITE() })

    )

    s = sprite
    return  controls}
SPRITE2=function( ){

    stage = createjs.stage('orange', 400 ).tick().A().drag()//.op(.7),

    stage.A(   sprite = $sprite(   SS ).XY(10).drag() )

}
PACK = function(){

    stage = $St(800)

    //stage.op(.7)

    sprite = $sprite(Pack).XY( 200, 260 ).sXY(1.2).drag()


    stage.A(sprite)

    //.rgc()
    sprite.framerate=6

    sprite.play()


}

MUMMYFLIP=function(){ w = b2d.W() //spriteUrl = "/assets/sprites/metalslug_mummy37x45.png"

//sprite always assumed to start facing right (and flipping it horizontqlly is the left) - so i must draw facing right




    b = b2d.box(100,100,50,88  ).K('mummy').bindSprite2(
        cjs.sprite( Mummy ).a2(w.s).drag()
            .rXY(20,22).sXY( 2 ).XY( 200 ))

    b.coll(function(){ b.linVel(0) })

    b.sprite.p('walk')

    cjs.tick(function(){
        b.rT(0)
        if(b.direction=='right'){b.I(4, -2)}
        else if(b.direction=='left'){b.I(-4, -2) }    // direction='neither' // <-- demumify (doesnt keep walking
        //if(jumpButton is pressed){jump()}
    })


    $.kD({

        u:function(){
            //jumpButtonPressed = true
            if(b.Y()>530){b.I(0, -80)}},
        U: function(){
            //jumpButtonPressed = false
        },


        l: function(){ b.sprite.sX(-2)
            b.direction='left'},
        r: function(){ b.sprite.sX(2)
            b.direction='right'} })

}


ZOENOANIM=function(){z()
    spr = cjs.sprite({
        "framerate":24,
        "images":["/zoetest.png"],
        "frames":[
            [0, 0, 512, 256, 0, -133, -143],
            [512, 0, 512, 256, 0, -133, -143],
            [1024, 0, 512, 256, 0, -133, -143]
        ],
        "animations": {}})
    s = cjs.stg(1000).A()
    s.A(spr)}
ZOEFRAMES=function(){z()


    spr = cjs.sprite({
        "framerate":24,
        "images":["/sprite2.png"],
        "frames":[
            [0, 0, 128, 128, 0, -176, -161],
            [128, 0, 128, 128, 0, -176, -161],
            [256, 0, 128, 128, 0, -176, -161]
        ],
        "animations":{
            "weird": {"speed": 1, "frames": [2]},
            "bald": {"speed": 1, "frames": [1, 1, 1, 1]}
        }
    })

    anis = spr.spriteSheet._animations

    // aniNames = _.keys(anis  )  // _.e(anims, function(name){  spr[name]=function(){ this.gotoAndPlay(name) }  })

    s = cjs.stg(1000).A()
    s.A( spr.drag() )
}
CHAR0=function(){showSprite(Sprites.char)

    function showSprite(sprite){z()

        s = cjs.stg(1000).A()

        spr = cjs.sprite(sprite).drag().a2(s)

    }

}
CHAR=function(){w=b2d.W().debug()

    w.begin(function(cx){
        if(cx.with('hurt')){b.p('hurt').I(100,-200)}
        if(cx.with('fly')){b.p('fly').I(-100, -200)}})

    b= w.ball(200,200,60).bindSprite2( cjs.sprite( Sprites.char ).rXY(275,220) )

    guyBrick(100).K('hurt')
    guyBrick(500).K('fly')

    function guyBrick(x){
        return w.brick(x,500,100,100).bindSprite('guy',.6)

    }

}


SPRITE = function (sprite) {

    sprite = $sprite(sprite || SS).XY(10).dg()

    stage = $St('o', 400)
        .dg()//.op(.7),
    stage.A(sprite)


    controls = {
        jump: function () {
            sprite.gotoAndPlay('jump')
        },
        explode: function () {
            sprite.gotoAndPlay('explode')
        },
        spin: function () {
            sprite.gotoAndPlay('spin')
        },
        stop: function () {
            sprite.stop()
        },
        play: function () {
            sprite.play()
        }
    }

    $.d('y', 460, 89).css({
        position: 'absolute',
        top: 200, left: 300,
        padding: 20, opacity: .9
    }).dg().A(
        $.sp(' '),
        $.bt('spin', function () {
            controls.spin()
        }), $.sp(' '),
        $.bt('jump', function () {
            controls.jump()
        }), $.sp(' '),
        $.bt('explode', function () {
            controls.explode()
        }), $.sp(' '),
        $.bt('play', function () {
            controls.play()
        }), $.sp(' '),
        $.bt('stop', function () {
            controls.stop()
        }), $.sp(' '),
        $.bt('meta', function () {
            SPRITE()
        })
    )

    s = sprite
    return controls
}
SPRITE2 = function () {

    stage = createjs.stage('orange', 400).tick().A().drag()//.op(.7),

    stage.A(sprite = $sprite(SS).XY(10).drag())

}
PACK = function () {

    stage = $St(800)

    //stage.op(.7)

    sprite = $sprite(Pack).XY(200, 260).sXY(1.2).drag()


    stage.A(sprite)

    //.rgc()
    sprite.framerate = 6

    sprite.play()


}
ZOENOANIM=function(){z()
    spr = cjs.sprite({
        "framerate":24,
        "images":["/zoetest.png"],
        "frames":[
            [0, 0, 512, 256, 0, -133, -143],
            [512, 0, 512, 256, 0, -133, -143],
            [1024, 0, 512, 256, 0, -133, -143]
        ],
        "animations": {}})
    s = cjs.stg(1000).A()
    s.A(spr)}
ZOEFRAMES=function(){z()


    spr = cjs.sprite({
        "framerate":24,
        "images":["/sprite2.png"],
        "frames":[
            [0, 0, 128, 128, 0, -176, -161],
            [128, 0, 128, 128, 0, -176, -161],
            [256, 0, 128, 128, 0, -176, -161]
        ],
        "animations":{
            "weird": {"speed": 1, "frames": [2]},
            "bald": {"speed": 1, "frames": [1, 1, 1, 1]}
        }
    })

    anis = spr.spriteSheet._animations

    // aniNames = _.keys(anis  )  // _.e(anims, function(name){  spr[name]=function(){ this.gotoAndPlay(name) }  })

    s = cjs.stg(1000).A()
    s.A( spr.drag() )
}
CHAR0=function(){showSprite(Sprites.char)

    function showSprite(sprite){z()

        s = cjs.stg(1000).A()

        spr = cjs.sprite(sprite).drag().a2(s)

    }

}
CHAR=function(){w=b2d.W().debug()

    w.begin(function(cx){
        if(cx.with('hurt')){b.p('hurt').I(100,-200)}
        if(cx.with('fly')){b.p('fly').I(-100, -200)}})

    b= w.ball(200,200,60).bindSprite2( cjs.sprite( Sprites.char ).rXY(275,220) )

    guyBrick(100).K('hurt')
    guyBrick(500).K('fly')

    function guyBrick(x){
        return w.brick(x,500,100,100).bindSprite('guy',.6)

    }

}


STICK=function(){
    w=b2d.W({grav:3})
        .chalk('spritebox example').debug()

    w.spriteBox({

        "framerate":4,

        "images":["stick.png"],
        "frames":[
            [0, 0, 512, 512, 0, -22, -2],
            [512, 0, 512, 512, 0, -22, -2],
            [1024, 0, 512, 512, 0, -22, -2],
            [0, 512, 512, 512, 0, -22, -2],
            [512, 512, 512, 512, 0, -22, -2],
            [1024, 512, 512, 512, 0, -22, -2],
            [0, 1024, 512, 512, 0, -22, -2],
            [512, 1024, 512, 512, 0, -22, -2],
            [1024, 1024, 512, 512, 0, -22, -2],
            [0, 1536, 512, 512, 0, -22, -2],
            [512, 1536, 512, 512, 0, -22, -2],
            [1024, 1536, 512, 512, 0, -22, -2]
        ],
        "animations":{
            "die": {"frames": [8, 9, 10], "speed": .1,next:false},
            "walk": {"frames": [1, 2, 3, 4], "speed": .1},
            "jump": {"frames": [5, 6, 7,0], "speed": .1,next:false}
        }
    },300,200,.25).mario()
    w.rect(600,200, 50,50 ,'p')
    w.circ(600,100,40,'b')}

MUMMYFLIP = function () {
    w = b2d.W() //spriteUrl = "/assets/sprites/metalslug_mummy37x45.png"

//sprite always assumed to start facing right (and flipping it horizontqlly is the left) - so i must draw facing right


    b = b2d.box(100, 100, 50, 88).K('mummy').bindSprite2(
        cjs.sprite(Mummy).a2(w.s).drag()
            .rXY(20, 22).sXY(2).XY(200))

    b.coll(function () {
        b.linVel(0)
    })

    b.sprite.p('walk')

    cjs.tick(function () {
        b.rT(0)
        if (b.direction == 'right') {
            b.I(4, -2)
        }
        else if (b.direction == 'left') {
            b.I(-4, -2)
        }    // direction='neither' // <-- demumify (doesnt keep walking
        //if(jumpButton is pressed){jump()}
    })


    $.kD({

        u: function () {
            //jumpButtonPressed = true
            if (b.Y() > 530) {
                b.I(0, -80)
            }
        },
        U: function () {
            //jumpButtonPressed = false
        },


        l: function () {
            b.sprite.sX(-2)
            b.direction = 'left'
        },
        r: function () {
            b.sprite.sX(2)
            b.direction = 'right'
        }
    })

}


THRUSTSCROLL = function(){z()

    // s = cjs.stage('green', 1000).A()

    //spriteUrl = "/assets/sprites/metalslug_mummy37x45.png"

    w = b2.mW({grav:0})

    p = w.player('thrust')
    //sp = cjs.sprite( Mummy ).drag()

    // w.s.A( sp )

    // sp.sXY( 2 ).XY( 200 )

    //  sp.gotoAndPlay('walk')


    // sp.rXY( 20, 22 )

    // b = b2.box( 100, 100, 50, 88).uD('mummy')

    // b.bindSprite2(sp)

    direction='right'

    cjs.tick(function(){


        w.eachBody(function(body){
            if(body.uD()!='player'){

                body.X(  body.X()+ p.X()  )

            } })

    })



    tr=w.A( b2.dynamicDef(), b2.triangleFixt    )




    moveLeft=function(){

        w.eachBody(function(body){
            if(body.uD()!='player'){body.X( body.X()+10  )   } })

    }
    moveRight=function(){

        w.eachBody(function(body){
            if(body.uD()!='player'){ body.X( body.X()-10  )   } })

    }
}
moveEachBodyButGuy=function() {

    $.kD('l', function () {
        w.eachBody(function (body) {
            if (body.K() != 'guy') {    body.X(body.X()+20)   }})})


    $.kD('r', function () {
        w.eachBody(function (body) {
            if (body.K() != 'guy') {

                body.X( body.X() - 20)
            }
        })
    })


    $.kD('d', function () {
        w.eachBody(function (body) {
            if (body.K() != 'guy') {
                body.Y(body.Y() - 20)
            }
        })
    })


    $.kD('u', function () {
        w.eachBody(function (body) {
            if (body.K() != 'guy') {
                body.Y(body.Y() + 20)
            }
        })
    })

}
BUTME=function(){

    w = b2d.W({


        grav:0,   walls:[]


    })



    //p = w.player('thrust').XY(500,100)

    w.brick(100,300,200,30).rT(30)
    w.brick(400,200,400,100).rT(30)

    g= w.box(400,300, 30, 30).bindSprite('guy').K('guy')

    moveEachBodyButGuy()

    cjs.tick(function(){
        // w.each(function(b){ b.rT(  b.rT() + 10) })


        g.XY(400,300)

    })



}
BUTMEBETTER=function(){z()



    w = b2.mW({
        grav:0,
        walls:[]
    })


    //p = w.player('thrust').XY(500,100)

    w.bumper(200,200,100)
    w.bumper(600,300,100)

    g= w.box(400,300, 30, 30).bindSprite('guy').K('guy')

    moveEachBodyButGuy()

}


SSBUILDER=function(){z(); J.testCanvas()
    //canvas=document.getElementById("testCanvas")
    s=stage=J.stage(["testCanvas"]).tick()
    J.Ticker.setFPS(30)

    scale=0.4

    mc=J.gunner().drag()

    w=mc.nominalBounds.width * scale
    mc.transform(100 + w / 2, 100, scale, scale).a2(s)

    label1=new J.Text("MovieClip-vector", "14px Arial", "#111").a2(s).textA("center").transform(mc.x, 30)
    label2=label1.clone().a2(stage).T("Sprite-raster").X(w+50,'+')
    b=builder=J.builder(mc)
    b.Z(scale).maxW(1024)
    b.async(function(ev){
        sprite=J.sprite(ev.target.spriteSheet)
        sprite.transform(mc.x+w+50||0,mc.y).a2(s).drag()
        mc.gotoAndPlay(0)
        sprite.gotoAndPlay(0)})

    img=builder._data.images[0]

    $('body').A(img)

}

ZOE =function(){W()

    //this is a sprite sheet literal, but not an actual ss
    //cjs.Sp converts it to a ss for us, before passing it in
    // to cjs.Sprite to make the actual sprite object

    x0= w.S(800, 200,'r', 40,40,0,0,45)

    i=  x0.Sp($SS({

        r:24,

        i:["/zoetest.png"],

        f:[
            [0, 0, 512, 256, 0, -133, -143],
            [512, 0, 512, 256, 0, -133, -143],
            [1024, 0, 512, 256, 0, -133, -143]],
        a: {}

    }))

    i.p()



    sp=  w.S(500, 300,'X', 40,40).Sp($SS({

        r:24,
        i:["/sprite2.png"],

        f:[
            [0, 0, 128, 128, 0, -176, -161],
            [128, 0, 128, 128, 0, -176, -161],
            [256, 0, 128, 128, 0, -176, -161]],
        a:{
            "weird": {"speed": 1, "frames": [2]},
            "bald": {"speed": 1, "frames": [1, 1, 1, 1]}
        }
    }))// -150,-140)

    // _.e(  sp.as(), function(n){   sp[n]=function(){sp.p(n)}   })

    b =  w.D(  300,  200,'r', 40,40).cn('thrust')


    b.Sp($SS({

        r:4, i:["stick.png"],

        f:[
            [0, 0, 512, 512, 0, -22, -2],
            [512, 0, 512, 512, 0, -22, -2],
            [1024, 0, 512, 512, 0, -22, -2],
            [0, 512, 512, 512, 0, -22, -2],
            [512, 512, 512, 512, 0, -22, -2],
            [1024, 512, 512, 512, 0, -22, -2],
            [0, 1024, 512, 512, 0, -22, -2],
            [512, 1024, 512, 512, 0, -22, -2],
            [1024, 1024, 512, 512, 0, -22, -2],
            [0, 1536, 512, 512, 0, -22, -2],
            [512, 1536, 512, 512, 0, -22, -2],
            [1024, 1536, 512, 512, 0, -22, -2]
        ],
        a:{
            die: {"frames": [8, 9, 10], "speed": .1,  next:false},
            walk: {"frames": [1, 2, 3, 4], "speed": .1},
            jump: {"frames": [5, 6, 7,0], "speed": .1,  next:false}
        }
    }),40,0,.6, .6, 20)

    b1=  w.D(200,200,'b',60).Sp('char')//, -150, -110)//.rXY(275,220)

    w.S(100,500,'r',100,100).K('hurt').bS('guy',.6)
    w.S(500,500,'r',100,100).K('fly')
    w.cl('hurt', function(){ b1.p('hurt').I(10,-20)})
    w.cl('fly', function(){ b1.p('fly').I(-10,-20) })

}
ANIM=function(){W({g:0, w:'<-'});//w.Z(.1);cjs.rulers();w.showOff()

    p = w.D(100, 100, 'X', 100, 100).K('mummy').tr()
    p.gx=w.g.ct()
    // you must set reg point BEFORE you scale
    // because once you scale, 'W/H' return u the scaled height
    // but you need to set regX/Y based on original scale
    sp = p.Sp(Mummy, 0, 0, 2.5).p('walk')
    p.Bm('me',0,-50,-.3,.3)
    // sp.sXY(2, 200,-100)
    // b.bS('me', .3, -5, -22)
    x= w.S(200,400, 'X',200,40,  60, 60,'-')
    //x.rt(90).fR().bS($Sp(Pack).rC().sXY(.4)).p('e4')
    x.Sp(Pack,0,0,.5).p('e4')
    //.cl(function(){p.I(1000,1000)})
    // p.cl(x, function () { p.lV(10000, -400) })
    $.kD({
        u:function(){
            if(p.Y()>530){p.I(0, -380)}
        }, //jumpButtonPressed = true
        U: function(){}, //jumpButtonPressed = false
        l: function(){
            p.gx.sX(-1);
            p.direction='left'
        },
        r: function(){
            p.gx.sX(1);
            p.direction='right'
        }

    })
    T.t(function(){
        // p.rot(0)
        if(p.sp().dr()=='right'){p.I(100, -2)}
        else if(p.sp().dr()=='left'){p.I(-100, -2) }
        // direction='neither' // <-- demumify (doesnt keep walking
        //if(jumpButton is pressed){jump()}
        p.I(0, 200)

    })
    gx = w.pack()
        .sen(1)
        .lD(100).aD(100)
    w.$$(function(){

        anim = _.keys( Pack.animations )[_.random(23)]
        $l('changed to '+anim)
        f1.sp().p( anim )
    })
}
FIREBALL=function(){W({g:0, w:'<-'});//w.Z(.1);cjs.rulers();w.showOff()


    w.p()

    gx = w.pack().fR()
    ya()
    //.lD(100).aD(100)
    w.$$(ya)

    function ya(){

        anim = _.keys( Pack.animations )[_.random(33)]
        $l('changed to '+anim)
        gx.sp().p( anim )

    }

    T.t(function(){

        if(gx.X()<0){
            gx = w.pack()
            ya()
        }
    })

}




SPRITE=function(sp){W()
    w.i.A(
        sp  = $Sp( sp || SS ).XY(10).drag()
    )
    co ={
        jump:function(){ sp.p('jump') },
        explode:function(){ sp.p('explode') },
        spin:function(){ sp.p('spin') },
        stop:function(){ sp.s() },
        play:function(){ sp.p() }
    }


    $.d('y',460, 89).css({
        position:'absolute',
        top: 200,
        left: 300,
        padding:20,
        opacity:.9

    }).A().drag().A( $.sp(' '),
        $.bt('spin',function(){    co.spin() }), $.span(' '),
        $.bt('jump',function(){    co.jump() }), $.span(' '),
        $.bt('explode',function(){   co.explode()  }), $.span(' '),
        $.bt('play',function(){   co.play()  }), $.span(' '),
        $.bt('stop',function(){   co.stop()  }), $.span(' '),
        $.bt('meta', function(){ SPRITE() })
    )
    return  co
}
function maybeOld(){


//OLD
    THRUSTSCROLL = function(){z()

        // s = cjs.stage('green', 1000).A()

        //spriteUrl = "/assets/sprites/metalslug_mummy37x45.png"

        w = b2.mW({grav:0})

        p = w.player('thrust')
        //sp = cjs.sprite( Mummy ).drag()

        // w.s.A( sp )

        // sp.sXY( 2 ).XY( 200 )

        //  sp.gotoAndPlay('walk')


        // sp.rXY( 20, 22 )

        // b = b2.box( 100, 100, 50, 88).uD('mummy')

        // b.bindSprite2(sp)

        direction='right'

        cjs.tick(function(){


            w.eachBody(function(body){
                if(body.uD()!='player'){

                    body.X(  body.X()+ p.X()  )

                } })

        })



        tr=w.A( b2.dynamicDef(), b2.triangleFixt    )




        moveLeft=function(){

            w.eachBody(function(body){
                if(body.uD()!='player'){body.X( body.X()+10  )   } })

        }
        moveRight=function(){

            w.eachBody(function(body){
                if(body.uD()!='player'){ body.X( body.X()-10  )   } })

        }
    }
    moveEachBodyButGuy=function() {

        $.kD('l', function () {
            w.eachBody(function (body) {
                if (body.K() != 'guy') {    body.X(body.X()+20)   }})})


        $.kD('r', function () {
            w.eachBody(function (body) {
                if (body.K() != 'guy') {

                    body.X( body.X() - 20)
                }
            })
        })


        $.kD('d', function () {
            w.eachBody(function (body) {
                if (body.K() != 'guy') {
                    body.Y(body.Y() - 20)
                }
            })
        })


        $.kD('u', function () {
            w.eachBody(function (body) {
                if (body.K() != 'guy') {
                    body.Y(body.Y() + 20)
                }
            })
        })

    }
    BUTME=function(){

        w = b2d.W({


            grav:0,   walls:[]


        })



        //p = w.player('thrust').XY(500,100)

        w.brick(100,300,200,30).rT(30)
        w.brick(400,200,400,100).rT(30)

        g= w.box(400,300, 30, 30).bindSprite('guy').K('guy')

        moveEachBodyButGuy()

        cjs.tick(function(){
            // w.each(function(b){ b.rT(  b.rT() + 10) })


            g.XY(400,300)

        })



    }
    BUTMEBETTER=function(){z()



        w = b2.mW({
            grav:0,
            walls:[]
        })


        //p = w.player('thrust').XY(500,100)

        w.bumper(200,200,100)
        w.bumper(600,300,100)

        g= w.box(400,300, 30, 30).bindSprite('guy').K('guy')

        moveEachBodyButGuy()

    }


    SSBUILDER=function(){z(); J.testCanvas()
        //canvas=document.getElementById("testCanvas")
        s=stage=J.stage(["testCanvas"]).tick()
        J.Ticker.setFPS(30)

        scale=0.4

        mc=J.gunner().drag()

        w=mc.nominalBounds.width * scale
        mc.transform(100 + w / 2, 100, scale, scale).a2(s)

        label1=new J.Text("MovieClip-vector", "14px Arial", "#111").a2(s).textA("center").transform(mc.x, 30)
        label2=label1.clone().a2(stage).T("Sprite-raster").X(w+50,'+')
        b=builder=J.builder(mc)
        b.Z(scale).maxW(1024)
        b.async(function(ev){
            sprite=J.sprite(ev.target.spriteSheet)
            sprite.transform(mc.x+w+50||0,mc.y).a2(s).drag()
            mc.gotoAndPlay(0)
            sprite.gotoAndPlay(0)})

        img=builder._data.images[0]

        $('body').A(img)

    }


}

