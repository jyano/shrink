MAT2D=function(){
    /*
     a Scales the drawing horizontally
     b Skew the the drawing horizontally
     c Skew the the drawing vertically
     d Scales the drawing vertically
     e Moves the the drawing horizontally
     f Moves the the drawing vertically
     */

}
BS=function(){W()._(function(){
    x= w.D(600,300,'x',200,100)
    f = x.cir({r:100, x:300, c:'r'})
    me = Q.b('me').rC()
    f.bS(me, 0, f.pX(), f.pY())
})

}
SHADOW=function(){W().P()


    p.lD(1).warp()
    badGuy=w.badGuy(400, 200).d(.1).warp()
    $.in(1, function(){
        p.sprite.shad("y", 0, 150, 300)
        badGuy.sprite.shad('o', 40, 40, 40)
    })
    $.space(function(){
        p.polyBul()
    })
    $.ev(.2,function(){
        // w.s.pen('badGuy health: ' + badGuy.health)
    })
    $(w.s.back.canvas).C('p')
    s= w.s.back
    s.bm('me' , function(bm){
        bm.drag().shad('blue', 125,  125,  50)
            .XY(100,100).sXY(.6)
    })

    s.bm('guy', function(bm){
        bm.drag().shad('r', 100,100,10)
            .XY(300,200).sXY(.6)})
    s.bm('me' , function(bm){
        bm.drag().shad("z", 25, 25, 50)
            .XY(500,100).sXY(.6)
    })
}
COL=function(){W();
    b=w.S(600,300,'w',200);
    $.in(function(){
        b.dyn().f().C('z')
    })
}
DEV=function(){ W([1200, 600, 1400, 800], {g: 50, t: 0}).stats()
    //  w.dr(100, 100, 100, 100, '-')
    //  w.dr(100, 200, 100, 100, '+')

    w.dl('r', 0, 100, 5000, 5000, '-')

    w.dl('p', 0, 200, 5000, 2000)

    w.dl('b', 0, 300, 5000, 3000, '+')

    wh = w.S(400, 350, 'w', [[300, 220, '-']])

    or = w.S(400, 200, 'o', 300, 50)

    pi = w.S(400, 500, 'x', 300, 50)

    y = w.ship(150, 200).damp(1, 10).rot(90).lD(0).rot(120).lV(1);

    w.track(y, 600, 300, '!')

    b = w.D(700, 200, 'b', 100)

    me = w.me()




}
BMF1 = function () {
    W()

    //h.bC
    w.i.h(50, 200, '+')
        .bC({hs: [{r: 80}, {r: 50, x: 100}, {r: 100, x: 400}]})


    //h.bf
    w.i.h(800, 100, '+')
        .bf('me', function (h) {
            h.dc([80], [90, 0, 68])
        })


    //h.bV
    w.D(200, 300).pol({
        v: [[0, 100], [0, -100], [200, -150], [200, 150]],
        c: 'y', C: 'w', l: 5,
        bm: 1
    })


    /*
     b =   w.D(600,300, 'r', 100,300)
     h= w.i.h().bR({hs:[{w:100,h:300}]})
     b.bS(h)
     */

    w.bmR(600, 300, 'b', 100, 300)

    w.bmR(300, 300, 100, 300)


    w.i.h(350, 150, '+')
        .pol({v: v1, bf: 'me'})
    w.D(950, -200)
        .pol({c: 'o', C: 'z', l: 25, bm: 1, v: v1})
    w.D(500, 200)
        .pol({v: [[-100, 0], [0, -100], [100, -50], [0, -50]], c: 'y', C: 'r', l: 5, bm: 1})
    //h.bV //w.pol

    w.pol(400, 500, [[-100, 0], [0, -100], [100, -50], [0, -50]])
    w.bg.bm('me', 6.2, function (bm) {
        bm.X(500)
    })

}
BMF = function () {
    W()._(function () {

        //h.bC


        w.i.h(50, 200, '+')
            .bf('chicks')

            .dc({r: 80}, {r: 50, x: 100}, {r: 100, x: 400})


        //h.bf
        w.i.h(800, 100, '+')
            .bf('guy')
            .dc([80], [90, 0, 68])

        //h.bV
        w.D(200, 300).pol({
            v: [[0, 100], [0, -100], [200, -150], [200, 150]], // c: 'y',C: 'w',l: 5,
            bf: 'guy'
        })
        b = w.D(600, 300, 'r', 400, 300)
        h = w.bg.h().al(.5)
        h.bf('sun')
        h.rec({w: 400, h: 300})
        b.bS(h)
        w.bfR(600, 300, 'guy', 100, 100, 'X')
        w.bfR(300, 300, 'sun', 100, 100, 'z')
        w.bfR(300, 300, 'chicks', 100, 100)
        w.D(500, 400).pol({
            v: [[-100, 0], [0, -400], [100, -50], [0, -50]],
            c: 'z', C: 'r', l: 5,
            bf: 'sun'
        })
        //w.i.h(350, 150, '+').pol({v: v1, bf: 'me'})
        w.D(550, 200).pol({
            c: 'o', C: 'z', l: 25,
            bf: 'chicks',
            v: [[-100, 0], [0, -200], [100, -50], [0, -50]]
        })

        //h.bV //w.pol
        w.D(400, 500).pol({v: [[-100, 0], [0, -100], [100, -50], [0, -50]]})


        w.bg.Bm('me').sXY(6.2).X(500).al(.2)


    })
}
BFREC = function () {
    W()

    w.i.h(200, 300).dg()
        .bf('me',
        function (h) {
            h.rec({w: 500, h: 200})
        })
    w.i.h().dg().bf('me',
        function (h) {
            h.rec({w: 500, h: 200})
            w.D(600, 300, 'b', 500, 200).bS(h)
        })
}
POL = function () {
    W()

    w.D(500, 400, [-100, 0], [0, -100], [100, 50], [0, -70])

    w.D(500, 430).pol('r', [[-100, 0], [0, -20], [40, 50]])

}
CENH=function(){W()

    h.rec(100,100,100,100,'y')
    h.rec(200,200,100,100,'b')

    h.c('o').polyStar(300,100,
        50,5,0.6,-90)

    h.c('w','z')
        .roundRectComplex(400,300,
        300,300, 20,20,30,40 )

    h.cir(500,200,40,'b','x',10)
}
OVS=function(){St()
    h=s.h(40, 10,'b',16).drag()
    h.c({C:['o',5],lf:{c1:'g',c2:'r',x2:100,y2:400}}).de(100, 400)

    h.c({C:'b',
        lf:{c1:'g',c2:'r',x2:400, y2:100}}).de(400,100)

    h.l(30).lf({c1:'b',c2:'y', x1:100, y1:100, x2:500,  y2:400 })
        .de(100, 200, 500,300)
    h.ls('r','w',300,100,400,140).de(300,0,300,500)

}
GRAPHTEST=function(){St(); img = $.img('me',function(){s.ct().h().bmS(img).ss(32).dr(20,20,920,360); _.each([

        function(){return $h(12,10)
            .lf('b','g',130).dr(130)},

        function(){return $h(40, 10,'b',16)
            .ls('r','w',70,140).de(70,140)},

        function(){return $h(80,80)
            .C('b',8).rf('w','y',40).dc(40)} ,

        function(){return $h(12,10,18)
            .bf(img, cjs.M(1) ).rs('b','g',30,130).dr(130)},






        function(){return $h(12,12,'g','r',8)
            .rr(130,30)}, //w(h) and r


        function lt(){return $h().C('o')
            .ss(16,'round','round')
            .mt([40,10],[90,90],[90,140])},

        function star(){return $h(80,85,'y','b',3)
            .pStr(0,0,80,5,.8,-95)},



        function hex(){return $h(80,40,'p')
            .pStr(40,6).pStr(0,75,40,6).pStr(45,45,20,6)}


    ],

    function(cont,i){var W=155, H=155, P= 5, C=4 //pad, cols
        s.A(tile(cont()).XY(
            42+(W+P)*(i%C),
            42+(i/C|0)*(H+P)))})})[0]




    tile=createTile=function(x,y){var bg,til
        bg = $h().c('t').dr(0, 0, 155, 155).ef().op(.2)
        til = cjs.ct().A(bg)
        if(N(x)){  til.X(x) }
        if(N(y)){  til.Y(y)  }
        if(O(x)){ til.A(x) }

        return til}


}
ROUNDREC = function () {
    St()
    h.c('b', 'r', 5).dc(100, 100, 100)
    h.dr(300, 200, 100, 50)
    h.dr2(500, 200, 100, 50)
    h.rr2(500, 200, 100, 50, 50)
    h.de2(500, 200, 100, 50)

    s.dot(100, 100)
    s.dot(300, 200)
    s.dot(500, 200)
    s.dot(500, 200)
    s.dot(500, 200)
}