
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

RUN=function() {
    W().C('r');
    Q([{id: 'I', src: "/MonsterAIdle.png"}, {id: 'run', src: "/MonsterARun.png"}], q)
    function q(i) {w.C('g')
        ss0=  $SS({
            i: [Q.i('I')],
            f: {width: 64, height: 64, regX: 32, regY: 32},
            a: {I: [0, 10, "I", 4]}
        })
        i = w.D(400, 200, 'b', 10).fR().Sp(ss0,0,0,5,'+')
        ss = $SS({
            i: [Q.i('run')],
            f: {width: 64, height: 64, regX: 32, regY: 32},
            // create sprite.. and set the registration point (the point it will be positioned and rotated around)
            // to the center of the frame dimensions:
            // sprite.regX = sprite.spriteSheet.frameWidth/2 || 0//sprite.regY = sprite.spriteSheet.frameHeight/2 || 0
            // To slow down the animation loop of the sprite,
            // we set the frequency to 4 to slow down by a 4x factor
            a: {L: [0, 9, "R", 4]}
        })
        ss = ss.flp(true, false, false)
        sp = w.D(160,302,'r',10).Sp(ss).p("R").dr(90).f(10,'+')
        /*
         T.tx(function(){

         if (sp.x >= 800){sp.dr(-90).p("R")}
         if (sp.x < 100) {sp.dr(90).p("I")}
         if (sp.dr() == 90) {sp.x += sp.vX;sp.y += sp.vY}
         else {sp.x -= sp.vX;
         sp.y -= sp.vY}
         })}

         */
    }
}
BI=function(){W()._(function(){
    b = w.D(600,300, 'r', 200,300).rt(10)
    f= b.f()
    f.bI('me')
})
}


MFIL=function(){W()._(function(){
    b = $H()
    b.graphics
        .beginLinearGradientFill(["#000000",
            "rgba(0, 0, 0, 0)"], [0, 1], 0, 0, 100, 100)
    b.graphics.drawRect(0, 0, 100, 100);
    b.cache(0, 0, 100, 100);
    bm = w.i.qB("me")
    bm.filters = [
        new cjs.AlphaMaskFilter(b.cacheCanvas)
    ]
    bm.cache(0, 0, 100, 100);
})}
SPRBALLS=function(){
    W(400,400).C('w')._(function(){
//cjs.rulers()
        w.p(0,0,10).stat()
        _.t(8, function(){w.D(R(100,50),R(100,50),'b',30)})
        w.$$(function(){
            _.t(8, function(){
                var b= w.D(R(100,50),R(100,50),'b',30)
                b.$h('x','X',1).c('x','X', 1).bf(w.s.cv0).cir(30)
            })
        })
        w.i.T(200,100, '$$ me')
    })}
