b2d.p()
//when a web is created it gets web.connected=false
//when it hits certain things and forms a joint, then connected->true
//then it just dies
//pressing DOWN should release the most recent of the connectedWebs
//note: non connected Webs can be shot off!

vs = [[-100, 0], [0, -100], [100, -50], [0, -50]]

iso=function(){
    Tile = function(){

        var that =this
        var shape = this

        this.container = new createjs.Container().drag()
        this.tile = cjs.diamond(80, 40, 'blue')

        //this.tile.graphics.s('red').f('blue').s('green').mt(0,0).lt(40,-20).lt(80,0).lt(40,20).lt(0,0)
        this.container.A(this.tile)
        this.coin = false
        this.addCoin = function(){
            this.coin = tileCoin()
            this.container.A(this.coin)
        }
        this.addBad=function(){
            this.bad= tileBad()
            this.container.A(this.bad )
        }

        this.playerTo = function(){
            if(shape.wasOn==true){location=location}//ISO()
            player.X(that.container.x )
            player.Y(that.container.y -14 )
            player.tile= shape
            player.col= shape.col
            player.row= shape.row
            if(shape.coin){shape.coin.remove()}
            if(shape.bad){location=location}
            shape.wasOn=true
            //if(isolated()){alert('!')}
        }

        this.container.on('dblclick', function(){
            h  = that
            that.tile.graphics.f('red').dc(0,0,2)
            $l('dblclicked!')
            that.playerTo()
        })

    }
    isoRow=function(r,howMany,x,y){
        x = x||0;
        y = y||0

        var row=[]

        _.t(howMany, function(i){

            x = x+ 40
            y = y- 20
            var t= new Tile()

            t.container.XY(x,y)
            stage.A(t.container)
            cjs.bindSlide(t.container)
            t.col= i
            t.row= r
            row.push(t)
        })
        return row
    }
    isoGrid=function(n1,n2,x,y){ x=x||0; y=y||0

        var grid=[]

        _.t(n2,function(i){
            x=x+40
            y=y+20

            var row = isoRow(i,n1,x,y)

            grid.push(row)

        })




        return grid}
    tileCoin=function(){

        return cjs.cir(15,'y', 'z')


    }
    tileBad=function(){ return cjs.cir(15,'g', 'o')}
    tilePlayer=function(bm){
        player = bm
        player.right=function(){
            player.tile.container.remove()
            grid[player.row][player.col]=null
            grid[player.row][player.col+1]. playerTo()}
        player.left=function(){
            player.tile.container.remove()
            player.tile.exists=false
            //player.tile=null
            grid[player.row][player.col]=null
            grid[player.row][player.col-1]. playerTo()}
        player.down=function(){
            player.tile.container.remove()
            grid[player.row+1][player.col]. playerTo()}
        player.up=function(){
            player.tile.container.remove()
            grid[player.row-1][player.col]. playerTo()
        }
        player.to=function(x,y){
            grid[x][y].playerTo()
            return player}

        kD('u',function(){player.up()})
        kD('d',function(){player.down()})
        kD('l',function(){player.left()})
        kD('r',function(){player.right()})
        return player}
    ISO=function(levNum){z()
        stage = createjs.stage(900,500).tick().A()
        grid = isoGrid(10,10,0,240)
        kD('s',function(){location=location})
        if(levNum){ window['lev'+levNum]()}
        else if( window['_pam']){window['lev'+ _pam]()}
        else{lev1()}
        stage.bm0('me', function(me){
            player = tilePlayer(me).sXY(.2).drag().to(5,5)})




    }
    killTile=function(a,b){
        grid[a][b].container.remove()
        grid[a][b].wasOn=true

    }
    lev1=function(){
        grid[3][5].container.remove()
        grid[4][4].container.remove()
        grid[6][6].container.remove()
        grid[7][1].container.remove()
        grid[0][3].addCoin()
        grid[1][3].addCoin()
        grid[3][4].addCoin()
        grid[5][2].addCoin()
        grid[8][8].addCoin()
    }
    lev2=function(){
        grid[0][0].addCoin()
        grid[0][9].addCoin()
        grid[0][3].addCoin()
        grid[1][3].addCoin()
        grid[1][6].addCoin()
        grid[2][1].addCoin()
        grid[3][4].addCoin()
        grid[3][8].addCoin()
        grid[4][7].addCoin()
        grid[5][2].addCoin()
        grid[6][5].addCoin()
        grid[6][9].addCoin()
        grid[8][8].addCoin()
        grid[8][2].addCoin()


        grid[8][4].addCoin()
        grid[9][0].addCoin()


        killTile(1,2)
        killTile(2,2)
        killTile(2,6)
        killTile(2,7)
        killTile(2,8)
        killTile(4,0)
        killTile(4,3)

        killTile(4,4)
        killTile(4,6)
        killTile(4,9)
        killTile(6,1)
        killTile(6,2)
        killTile(7,1)
        killTile(7,3)

        killTile(7,4)
        killTile(7,9)
        killTile(8,6)
        killTile(8,7)
        killTile(8,9)
    }
    lev3=function(){

        grid[0][0].addBad()
        grid[0][9].addBad()
        grid[0][3].addBad()

        grid[1][6].addBad()
        grid[2][1].addBad()
        grid[3][4].addBad()
        grid[3][8].addBad()

        grid[5][2].addBad()
        grid[6][5].addBad()
        grid[6][9].addBad()
        grid[8][8].addBad()
        grid[8][2].addBad()

    }
    lev4=function(){


        grid[2][9].addCoin()
        grid[5][0].addCoin()

        grid[2][3].addCoin()
        grid[5][6].addCoin()
        grid[9][3].addCoin()
        grid[3][1].addCoin()
        grid[4][4].addCoin()
        grid[0][8].addCoin()
        grid[6][7].addCoin()
        grid[5][8].addCoin()
        grid[9][6].addCoin()
        grid[2][2].addBad()
        grid[0][0].addBad()
        grid[0][9].addBad()
        grid[5][3].addBad()
        grid[2][6].addBad()
        grid[4][5].addBad()
        grid[9][0].addBad()
        grid[9][7].addBad()
        grid[3][8].addBad()


        grid[6][5].addBad()
        grid[6][9].addBad()

        grid[8][2].addBad()

    }
    isolatedBeta=function(){
        r= player.row;
        c= player.col
        if(
            //grid[r+1] &&grid[r+1][c] && grid[r+1][c].wasOn
        //&&  grid[r-1] &&grid[r-1][c] && grid[r-1][c].wasOn

        grid[r+1] &&grid[r+1][c] && grid[r+1][c].wasOn
        ){return true}
    }


};iso()




CIR0=function(){W( [2000, 1000, 3000, 1000],{g:10000})


    w.S(50,50, 'x',20).d(.1)

    y = w.y(1000,400,'+')
    w.S(400, 200, 10)

    _.t(10,function(){w.D(700, 300, 'r', [[7]])})

    b = w.D(200,300,'z',10)
    b.cir({r:100,x:200,y:-100,d:.2,b:.8,f:100,c:'o',C:'x'})
    b.cir({x:200,y:100,c:'r',C:'w'})

    b=w.D(800,300)
    b.cir('r',100)
    b.cir('b',80,0,-60)
    b.cir('g','w',60,0,-140)
    b.cir('*','*',20,0,-140)



    b = w.D(300, 300)
    b.cir('o', 20)
    b.cir('b', 100, 140, 0)
    b.cir('r', 20, 100, 100)
    b.cir('b', 20)
    b.cir(20, 100, 100).C('r')


    w.D(600, 300,'b', [   ['b', 50, 50, 50] ]).cir({c:'o',r:50})
    w.D(600, 300,'y',  [['b', 50, 50, 50]      ]).cir({   c:'b',   r:50,  x:50 })



    w.S(300,300,'o', 10)
    w.S(430,300,'o', 10)
    w.S(300,370,'o', 10)
    w.S(210,320,'o', 10)



    w.D(300,400,[['b',50,50,0,'-'],['y',50]])

    b = w.D(500,400,  {r:100, c:'y', t:'c'}  )


    b.cir({r:100, x:100, c:'w', lg:1, s:1, t:'c'})

    b = w.D(300,400)
    b.cir({r:100, c:'w', rg:1})
    b.cir({r:100, x:500, c:'w', lg:1, s:1})
    r = w.S(600,300,'r',12 ,'-')
    r.cir('b', 30, 100,200,'-')
    r.cir({  c:'g', r:30, x:100 ,s:1 }, '-')
    r.cir({  c:'w', r:30  })
    r.cir({  c:'z', y:-100  })
    r.cir(['y', 30, 200, 100])


    // cjs.cir(100, 'blue','green').XY(100, 100).drag().a2(w.i)

    w.i.cir(100, 100, 10, 'r', 'y' )


    /*    .circle(10,100,100,'black','purple')
     .circle(100, 10, 100, 'blue', 'red' )
     .circle(150,150,120,'red','blue')
     .circle(30,'brown','gray')
     */



}

MICK=function(){W()
    // mick(500,200)
    mick(700,100, { c1:'b', c2:'X' })
    mick(700,300, { c2:'b' })
     mick(100,100, { y2:10 })
     mick(100,200, { y2:200 })
     mick(100,300, { x2:100 })
    function mick(x,y,lf){var g=G(arguments)
        w.i.h(x,y,'+').c({l:20, C:0, lf: lf||1})
            .dc([50], [200,0,100], [100,100,100])
        if(g.p){w.i.h(x,y).c({ l:20, C:0, ls:lf||1})
            .dc([50],[200,0,100],[100,100,100])}}

}

CJSCIR=function(){W()


    //w.i.cir('b', 800, 200, 150)

    //w.i.cir()

    h= w.i.h('+')
         .cir(
         { r:100, c:'b', C:'X', l:20, lf:1},

        [
             {x:250, y:300 },
             {x:450, y:300},
             {x:250, y:500} ]

    )


    h1=w.i.h('+')
        .cir(
        {C:'X', lf:{X1:650,X2:220,Y1:950,Y2:520}, r:100},
        [
           {x:750,y:300},
           {x:950,y:300 },
           {x:750,y:500}
        ]
    )

}




GRADCIR=function(){W(50).C('w')//.Y();y.thr()




    //just a normal pink cir
    //w.i.h(100,100,'+').cir({c:'x', r:100})



// black fill, l4 white stroke
//    h= w.i.h().dc(100,100,50) //->

    //string of balls
    //w.i.h(-100,-100,'+').c('b','r',10).dc([200,200,50],[400,200,50],[600,200,50],[300,300,50]).c('r','b',30).dc(400,400,50).dc(500,500,50).f().dc(600,600,50)

//the most beautiful orange candy ball!!
    // linear stroke, radial fill !!! and orange :)
    // w.i.h(200,200,'+').cir({r:50, C:['y',10], lf: {c1:'u',c2:'o', y1:100, x2:100}, ls: {c1:'u',c2:'o'}})


    w.D(300,200)
        .cir(
        {r:20},
       // {r:20, y:-20},

       // {r:20, x:20, lf:{ c1:'b' },y:30},
       // {x:50, s:1, rf:1},
       // {x:100,r:50,c:'r',C:'x',l:10, s:1},
        {y:-100, r:50, bf:'me'}
    )


    /*
     w.D(800,300).cir({w:50,h:100, r:50,bf:'me'},{r:50,x:100, lf:1, l:15},
        {w:40, h:40, x: 100, c:'y'  },
        {w:40, h:40, x: 200, c:'b', C:'o', l:10  },
        {w:200, h:20,  y: 200, s:1 , lf:{c1:'g',c2:'y'}})




    cjs.me=function(fn){
        Q(['me'], function(q){fn(q.getResult('me'))})
    }
    cjs.me(function(i){
        h.c({
            l:200,
            rf: ['w', 'u', 800],
            rs: {c1:'w', c2:'x', r2:800}
        }).dc({x: 0, y:0, r:200})
        s.h().c({
            l:200,
            lf: {c1:'w',c2:'u',y2:200},
            ls: {c1:'u',c2:'w',s1:0,s2:1,x1:0, y1:0,x2:0,y2:200}
        }).dc({x: 0, y:0, r:200}).drag()
        s.h().lf('y','r',10).dc({r:200}).c({
            l:0,
            c:'y',
            //lf: {c1:'u',c2:'w',s1:0,s2:1,x1:0, y1:0,x2:0,y2:200},
            bs:i,bf:i
        }).dc({r:200}).drag()
        s.h(40,10,'b',8).rf({c1:'r',c2:'d',r2:100}).dc(0,50,40).drag()
    })





    h.c('*').dc(100,200,50).dc(100,250,50)
    h.c('***').dc(200,200,50).dc(200,250,50)
    h.c({C:'r'}).dc(300,300,50)

    h.cir({r:50, x:500, y:200,
        C:['y',2],
        rf: {c1:'u',c2:'o',x1:10,y1:10,  r2:30}, //, y1:100,x2:100},
        rs: {c1:'y', c2:'u', x1:-20,  y1:-20,  r1:40, r2:40    }})

    h = w.i.h().drag().lf({}).dc()
        .c('b','g',10).lf({  y2:400  })
        .dc(300,300,50)







    */

}

GRADSHAPES=function(){W([2000,1000],{})
    w.D(100,100).cir({r:35,lf:{c1:'o',c2:'y'}})

    w.i.h(1000,300).pol({v:v1, lf:1})
    w.bg.h(900,300).pol({v:v1, rf:1})

    w.D(600, 200).pol({v: vs, c: 'y', C: 'y', l: 5, rf: 1})
    w.D(700, 200).pol({v: vs, c: 'y', C: 'y', l: 5, lf: 1})



    b= w.D(300,200)
    b.cir({r:50,  x:0,   y:0,   lf: {c1:'o', c2:'b', X1:400 } })
    b.cir({r:100, x:200, y:0,   lf: {c1:'o', c2:'b'} })
    b.cir({r:100, x:100, y:100, lf: {c1:'o', c2:'b'} })

    w.s.h()
        .dc([50],[200,0,100],[100,100,100])
        .c({ l:20,C:0,ls:1})
        .dc([50],[200,0,100],[100,100,100])





    /* h.twL(
     [{r:25}, 200],[{r:-25},400],[{r:0}, 200],
     [{r:25}, 200],[{r:-25},400],[{r:0}, 200],
     [{r:25}, 200],[{r:-25},400],[{r:0}, 200],
     [{r:25}, 200],[{r:-25},400],[{r:0}, 200],
     [{r:25}, 200],[{r:-25},400],[{r:0}, 200],
     [{r:25}, 200],[{r:-25},400],[{r:0}, 200])
     h.twL(
     [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
     [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
     [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
     [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
     [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
     [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
     [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
     [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200]
     )*/
    //two ways to make the same thing
    lf={c1:'b',c2:'o',y1:200,y2:700}
    v=[[300,300],[320,200],[640,400],[280,650]]
    w.bg.h().pol({lf:lf,v:v})
    w.bg.h(200,0).lf(lf).mt(v)


    //tits()
    function tits(){
        _.t(8, function(){tit(R(200,300),R(200,100))})

        o={c1:'b',c2:'o',x1:0 ,y1:0, r1:10 ,x2:0,y2:0, r2:100}

        h= $h(300, 300).a2(s).al(.8).rf(o).dc(100).drag()

        /*
         $.evx(.1, function(){
         o.r1++;o.r2++;o.x1--
         h.rf(o).dc(100)})
         //*/

        $h(500,100).a2(s).rf('r','y',
            100, 100, 0,
            100, 100, 50
        ).dc(50,50, 100).drag()


        function tit(x,y){w.i.h(x,y).rf('d','o',10,100).dc(100)}

    }

}

REC=function(){W()
    w.S(100,200,'r',50,50)
    w.S(200,200,'g',80,140,30,140,25)

    w.S(500,400,'w',[
        [20, 20, -100, 50, 60],
        [100, 120, 0, 0, 100],
        [100, 20],
        [10, 300]])

    b = w.D(1000, 300)

    b.rec(100, 50)
    b.rec('z',100, 50, -100, -100)
    b.rec('o',100, 50, -100, 0, 25)
    b.rec('g', 100, 100)
    b.rec('y', 100, 100, 50, 50)
    b.rec('p', 100, 100, -150, -150, 45)
//b.rec({x:200,y:-100, w:400,h:20,c:'y',C:'x'})

//w.S(500,400,'b',20,200,'-')//why sensor not working any more??

    BREC=function(){W().P()

        x=w.D().stat()
        x.rec(400, 20)
        f=    x.rec('b', 400, 20,0,-100,18).C('b')
        w.dot(700,400)

        r = x.f('w', 100, 100, 100, 100)


    }



}
FIXTS = function(){W([2000,1000],{g:100}).Y();y.track();//cjs.rulers()
    //simple
    w.D(200, 200, 'y', 10, 20).pol()
    w.D(200, 200, 'y', 10, 20).pol({c: 'r'})
    w.D(600, 300).pol('r', [[-100, 0], [0, -100], [200, 50]])
    w.D(800, 200).pol('b', [-100, 0], [0, -100], [200, 50])

    //obj

    b = w.D(100, 300)

    b.pol({
        s: 1, c: 'o', C: 'y',
        v: [[-200, -100], [0, -200], [100, -100]]
    })
    b.pol({
        c: 'y', C: 'o',
        v: [[-100, 0], [0, -200], [100, 20], [0, -150]]
    })

    /*
     b.cir({k: 'cir', r: 50, x: 200, y: -100, d: .2, b: .8, f: 100, c: 'x'})
     b.rec({x: 100, y: 100, w: 10, h: 100, c: 'x'})

     b = w.D(400, 400)
     b.pol('o', [-300, 0], [0, -100], [10, 150])
     b.pol('y',[   [-10, 0],  [0, -100],  [100, -50]])
     b.pol(['b', [-200, 0], [0, -100], [10, 150]])
     b.pol({c:'r', v:[
     [-100, 0],
     [0, -100],
     [100, -50]
     ]})
     w.D(400,500,'o',[['w',[30,30],[20,40],[10,10]]]).pol([-100, 0], [0,-100], [100, 40]).C('g')


     w.i.pol(100,200,[[-100,-10],[0,100],[100,20]],'r','w',10,'+')
     w.i.pol(100,100,[[-40, 40], [-40, -40], [40, -40], [40, 30]], 'b', 'w')
     w.i.pol(200,200,[[-20, -80], [-100, -200], [100, 5]] )
     */

    /*
     //simple off-cir-sen
     w.D(600, 300,'y',50,10,10, '-').cir(15)
     //simple off-rec-sen
     w.S(600, 300,'o', 50,200, 10,10,45, '-').cir(15)
     //simple pol-sen
     w.D(200, 300,'x', [-100,0],[0,-100],[100,30], '-').cir(15)
     w.S(500, 200, 'b', [-100,0], [0,-100], [100,-20] )
     w.S(200, 200, 'o', [[[-100,0],[0,-100],[100,-20]]])
     w.S(300,300, 'w',[-100,0],[0,-100],[100,-20], '-')




     b = w.D(300, 300).fixRot()
     b.pol('g', [[0, 0], [0, -200], [100, 0]])
     b.pol('b', [[0, 30], [-300, -20], [100, 0]])
     b.pol('p', [[0, 30], [-30, -20], [10, 0]])

     b2 = w.D(300, 300)
     b2.pol('r', [[0, 0], [0, -20], [10, 0]])
     b2.pol([[0, 30], [-30, -20], [10, 0]])

     b3 = w.D(300, 300)
     b3.pol('g', [[-150, 0], [-120, -20], [-80, -50], [0, -30]])
     b3.pol('r', [[-30, 0], [0, -30], [40, -20]])
     b3.pol('o', [[-30, -30], [-20, -50], [10, -20]])




     w.D(600, 300, 'b', [
     [[-100, -20], [0, -100], [10, 10]]
     ])

     w.D(400, 400, [
     ['b', 30],
     ['y', [-100, 0], [0, -100], [100, -20], [50, 20]]])
     w.D(400, 400, 'p', [-100, 0], [0, -100], [100, -20]) //pass in points alone !!!!


     _.t(20, thing)

     function thing() {
     w.D(R(600), R(300, 200), [
     ['p', [-20, -20], [0, -30], [10, 10]],
     ['n', [0, 0], [30, -50], [50, -10]]
     ])
     }
     w.ball()
     b = w.S(400, 300)
     b.f('o', 50)
     b.f('r', 50, 50)
     b.f('b', 50, 50, 50)
     b.f('g', 50, 50, 50, 50)
     b.f('w', 50, 50, 50, 50, 50)
     b.f('u', [-100, 0], [0, -50], [200, -10])
     w.D(600, 300).f([
     ['o', 50],
     ['r', 50, 50],
     ['b', 50, 50, 50],
     ['g', 50, 50, 50, 50],
     ['w', 50, 50, 50, 50, 50],
     ['u', [-100, 0], [0, -50], [200, -10]]])
     w.D(600, 300).f('y', [
     [50],
     ['r',250, 50],
     ['b',50, 50, 50],
     ['g', 50, 50, 50, 50],
     ['w', 50, 50, 50, 50, 50],
     ['u', [-100, 0], [0, -50], [200, -10]]])


     b2d.somePolyFixt = [
     [
     [-100, 0], [0, -100],
     [100, 0], [60, 50]]]
     b2d.compoundShape = [
     [50, 10],
     [60, 30, 0, 0, 40],
     [120, 30, 0, 0, 29],
     [60, 10, 0, 50, 60],
     [84, 10, 15, 80, -120]
     ]
     b2d.compoundShape2 = [
     [50, 10],
     [20, 20],
     [20, 10, 0, 0, 10],
     [40, 10, 50, 0, 45],
     [84, 10, 15, 80, -120],
     [60, 10, 0, 50, 60 ]
     ]
     b2d.compoundStar = [
     [10, 10],
     [20],
     [4, 80, 10, 30, 135],
     [4, 80, 0, 0, 45],
     [4, 80, 100, 0, 90],
     [4, 80, 0, 0, 180]
     ]
     w.B(100, 100, b2d.somePolyFixt)
     w.B(200, 100, b2d.compoundShape)
     w.B(300, 100, b2d.compoundShape2)
     w.B(400, 100, b2d.compoundStar)


     w.D(600,300,'b',200,100).cir('z',10, 40,50)
     w.D(600,300,'z',[[200,100], ['o',10, 40,50]])

     */
}


CUPS = function (o) {

    W(10)

    cup = [
        [20, 20],
        [100, 40, 0, 40, 0],
        [200, 40, -80, -40, 260],
        [200, 40, 80, -40, -80]
    ]
    cup2 = [
        [100, 40, 0, 40, 0],
        ['g', 200, 40, -80, -40, 260],
        ['g', 200, 40, 80, -40, -80],
        [100]
    ]
    cup3 = [
        [100, 40, 0, 40, 0],
        [200, 40, -80, -40, 260],
        [200, 40, 80, -40, -80],
        [34, -80, -130],
        [34, 80, -130]
    ]



    b = w.D(280, 500, 'r', cup)
    w.D(600, 500, 'b', cup2)
    w.D(900, 500, 'y', cup3)
    w.D(100, 100, 'o', 30)
    w.D(100, 100, 'o', 30)
    w.D(100, 100, 'o', 30)
    w.D(150, 220, 'u', 50, 100)
}





GEMS=function(){W()
    //h.bR
    w.i.h(100,300,'+').bR({hs:[
        {w:150,h:500},
        {w:150,h:500,x:200},
        {w:150,h:500,x:400},
        {w:150,h:500,x:600}]})

    w.D(200,160).cir({r:120, rf:{c1:'r',c2:'b'}},  {r:100, C:'y', l:2, bf:'me'})

    w.D(800, 300).pol({
        v: [[[5, 100], [0, -100], [200, -150], [200, 150]],
            [[-50, 50], [-50, -100], [450, -50], [450, 50]]],
        c: 'r', C: 'y', l: 10,
        bm: 1
    })
    w.i.h(400,300,'+').bV({v:v})
}



ANIMALS=function(){


    W([1200,600,2000,600],{}).P().Y();y.thr()



    //turtle
    w.D(600, 280, [



        ['b', 700,40,0, -100],


            ['g', [0,0], [-50,-10], [-40,-20],[0,-40],[20,-10] ],

        ['y', [10,-10], [20,-30],[50,-15], [45,-5] ],

        ['y', [-50,10],[-50,-10],[-40,-10],[-40,10] ],

        ['y', [-10,10],[-10,-10],[0,-10],[0,10] ]


    ])



    /*





    //, ['x', 10, 55,-12, '-'], ['u', 30,40, 75,-12 ,'-']


    w.verts= function (x,y,  arrs ){var w=this
        var b = w.D(x,y)
        _.e(arrs, function(f){b.pol(f)})
        return b}

    w.verts(400,280,   turtle) //


    w.vertsKin= function (x, y, arrs){var w=this,
        b = w.S(x,y)//Kin
        _.e(arrs, function(g){
            b.pol(g[0],_.r(g))})
        return b}

    p.track()

    turtle = [
        ['green',[0,0],[-50,-10],[-40,-20],[0,-40],[20,-10]]

        ,  ['yellow',[10,-10],[20,-30],[50,-15], [45,-5]]

        , ['yellow',

            [-50,10],[-50,-10],[-40,-10],[-40,10]
        ]

        , ['yellow',

            [-10,10],[-10,-10],[0,-10],[0,10]
        ]
    ]

    turtle2 = [
        ['green',[0,0],[-50,-10],[-40,-20],[0,-40],[20,-10]]

        ,  ['yellow',[-60, -30], [-50,-60], [-20,-45], [-15,-35] ]



        , ['yellow',

            [-50,10],[-50,-10],[-40,-10],[-40,10]
        ]

        , ['yellow',

            [-10,10],[-10,-10],[0,-10],[0,10]
        ]
    ]

    t = w.vertsKin(400, 570, turtle).fR()
    t2 = w.vertsKin(700, 570, turtle2)

    $.ev(1, function(){
        t2.lV(5,0)
        _.in(1,function(){t2.lV(-5,0)} )

    })

*/
}

TANGRAMS = function () {W({g: 0})
    w.D(300, 300, 't', 56, 56).rot(45).d(1).damp(1000, 1000)
    w.D(280, 260).rot(90).den(1).damp(1000, 1000)
        .pol([V(-40, 20), V(0, -20), V(40, 20)])

    w.D(342, 321).den(1).damp(1000, 1000)
        .pol([V(-40, 20), V(0, -20), V(40, 20)])

    w.D(304, 220).rot(180).den(1).damp(1000, 1000)
        .pol([V(-80, 40), V(0, -40), V(80, 40)])

    w.D(346, 262).damp(1000, 1000).rot(270).den(1).damp(1000, 1000)
        .pol([V(-80, 40), V(0, -40), V(80, 40)])

    w.D(237, 324).den(1).damp(1000, 1000)
        .pol([V(-56, 28), V(0, -28), V(56, 28)])

    w.D(240, 267).den(1).damp(1000, 1000)
        .pol([V(-90, 20), V(-45, -20), V(45, -20), V(0, 20)])


    w.e(function(b){
        // b.stat()
    })

}
PINBED = function () {W(2000,1000)


    w.S(600, 600, 'g',20, 1000)

    w.D(100, 400, 'z', [
        [50],
        [10, 300, '-'] ])



    w.D(700, 400, 'y', [
        [50] ,
        ['r', 10, 300, '-' ],
        ['o', 50, 100, 0] ])


    W(10).Y()//=SEPARATOR=COLORCONC
    pin = [
        ['o', [-20, 20], [0, -80], [20, 20], [0, -40]],
        ['w', 8, 0, -75],
        ['w', 8, -20, 20],
        ['w', 8, 20, 20]
    ]
    _.t(15, function (i) {
        w.D(100 + (i * 60), 300, pin)
    })
    dick = [
        [50, 300, 0, -100],
        [50, 100, 150],
        [50, -100, 150]
    ]
    guyInBed = [
        [30],
        [20, 30, 30],
        [100, 30]
    ]
    w.D(400, 100, 'y', guyInBed)
    w.D(100, 100, 'r', [
        [guyInBed]
    ])

    w.D(600, 300, 'b', [
        [guyInBed],
        ['w', dick]
    ])

    w.D(400, 100, guyInBed)

}

SPRY=function(){W([1200,600,2400,1200],{g:20})//.chalk('spritebox example')
//for 400 x 400 flash squares !!!
    //w.s.bm('earth', function(me){me.XY(400,400)fn()})

    //function fn(){
    y = w.spBox($$ship).track()
    $.K($$ship.key)
    $.K({  //takes a spritebox!//uses cjs.watchKeys()
        l: function () {y.rot(8, '-')},
        r: function () {y.rot(8, '+')},
        u: function(){y.I(0,-10)}})
    y.aD(.5)
//}
}
MINI = function(){W({g:10,W:1000,H:800})
    //d = $.div('y',1500,40).A().abs(200,200).pad(2)
    p = w.p(300,200, 2,'thrust')
    data=function(str){
        if(U(str)){str='data'}
        d.E($.h4(str))
    }}
CAVEMAZE = function(){

    W([1200,600,1500,600],{g:10}).Y()

    w.S(0,0, 'z', [
        [500, 500, 600, 100],
        [500, 400, 500, 100],
        [500, 300, 500, 100],
        [500, 350, 450, 100],
        [320, 400, 50, 600]
    ])

    y.track()
    w.y(100,300).stat().rt(1,10)

    maze = [
        [1, 0, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 0, 1],
        [1, 0, 0, 0, 1, 0, 0, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 1, 1],
        [1, 0, 1, 0, 1, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 1, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]

    w.grid(maze, 900, 200, 20, 30)

}



FORCES = function(){W({g: 50})
    //dummy
    w.ball()

    //linVel
    _.t(3, function(){
        w.D(300,300,'y',20).K('lV')})
    $.ev(1,function(){
        w.e('lV',function(b){b.lV(0,20)})
    })
    //F('+') <-constant
    w.D(100, 100, 'o',10).F(40, -60,'+')

    b = w.D(300, 500,'z', 30, 80).rot(1).fixRot()
    t = {
        i: function(){ b.I(V(10,-30), b.wC()) },
        v: function(){b.lV(10, -60)},
        f: function(){
            cjs.t(function () {b.F(V(0,-3), b.wC())})}}
}
SCALE = function () {W()

    bb=w.D(600,400,'o',150,150)

    bb.bS('me')//cant attach to above at the moment..




    cjs.t(function(){
        var p=bb.wP(80,-80)
        w.dot(p)
        bb.I(0,-200,p)
    })


    w.fricky=function(x,y){var w=this,
        b= w.D(x,y)
        b.rec('r',20,40,0,0,180).fr(1).r(0)
        b.rec('b',20,40,0,0,90).fr(1).r(0)
        return b}

    w.fricky(400,120)


    b23= w.D(400,100)
    b23.rec('r',20,40,0,0,180).fr(0).r(0)
    b23.rec('b',20,40,0,0,90).fr(0).r(0)





    w.S(100,100,'r',80,80)
    w.S(100,200,'b',50).f().dot()
    w.S(100,300,'r',80,80).f().dot().C('p').dot().C('x') //overwrites dot?
    b= w.S(500, 200, 'o', [
        [  [-100,0], [0,-100], [100,0] ]
    ]).rot(25)
    f = b.f()
    v = f.wV()
    w.S(400,200,'w', [v])
    _.e(v, function(v){
        w.dot(v)
    })
    w.S(600, 200, [f.wV('+')])

    w.S(400, 300,'r', 40);
    w.S(290, 350, 'b',40);
    w.S(280, 220,'y', 40)
    r = 10
    b = w.D(300, 300,'g',r)
    $.ev(.2, function(){
        if(b.f()){b.f().kill()
            r+=.2; b.cir('g',r)}})
    w.y(200, 200)
    w.show(function () {
        return w.count()})



    b33 = w.D(500,300,'r',[[40],['b',30,100,'arm','-']])
    w.b(function (cx) {
        if (cx.w('arm')){b33.I(50,50)}
        if (cx.w('arm',w.right)){w.C($r())}})


    b3 = w.D(100, 100, 'b', [
        [40],
        [100, 200, 100],
        [50, 200],
        [200, 200, 300, 400]
    ])

    _.in(2, function(){
        b3.fs(function (f) {
            f.sen(1)
            $l('shape type: ' + f.GetShape().m_type)
        })})

}
CLONE  = function () {W().Y().P().P().P()
    var tf = null

    b = w.D(100, 100, 'b', 100, 200)

    b2 = w.D(900, 200, 'p', 100, 150)

    T.t(function () {
        var trf

        trf = b.transform().toArr()
        if (tf) {

            b2.SetTransform(b2d.tf(tf))
        }

        _.in(1, function () {
            tf = trf
        })
    })


    b1 = w.D(400, 400,'x',[
        [100,100,10], [100, 200],
        ['y', 20, 0, 100],
        ['b', 20,0,-100],
        ['g', 20, 200,0]])

    _.in(1, cl);

    //$.ev(10, cl);
    function cl(){
        c = b1.X(300,'+').I(100000,-1000).clone()
    }

}



SUGAR =function(){
    W([800,1000],{g:0})
    w.roof.kill()
    w.floor.kill()




    // glider = w.D(300, 500, 'b', 100,200, 50, 50, 20)


    w.S(300, 500, 'b', [-100,0],[0,-100],[100,20]).K('b')


    w.S(500, 500, 'r', [-100,0],[0,-100],[100,20], '-').K('r')


    w.left.K('b')


    w.dot(300,500)



    i = -20
    //cjs.t(function(){glider.I(i,0)})
    // w.$(function(){glider.I(i*-12,0)})
    // w.$$(function(){i = ( i * -1  )})


    y=w.ship()



    y.col(function(f){if (f.of('b')) {f.B().kill()}})

}
WORLD = function () {W(0)

    b = w.D(100, 100, 'r', 50)
    b1 = w.D(100, 200, 'b', 40)

    // w.grav(-10);setInterval(function(){w.grav('flip') }, 2000)

    w.AddController
    w.CreateController
    w.DestroyController
    w.GetGroundBody
    w.GetProxyCount
    w.SetDestructionListener
    w.SetBroadPhase
    w.SetWarmStarting
    w.SetContinuousPhysics
    w.IsLocked

    // proxies - represents an AABB in the broad-phase collision algorithm. Each b2Shape has a proxy.
    //  pair - a record created when two proxies overlap.
    //  manifold - the set of contact points for two convex shapes.


    w.locked = function () {
        return b2World.e_locked != 2
    }

    w.m_island
    w.m_flags


}
SLOOM=function(){

    W([800,500,2400,500],
        {g:0}).Z(1.5).Y(200,200).showOff().bricks(
        [400,300,'r',200,100],[800,300,'z',100,100],
        [1200,300,'b',300,100],[1600,300,'z',100,100],
        [2000,300,'r',200,100])



    y.damp(1,10).track()
    _.in(4, "y.bS('me',.5)")


}
STREET=function(){

    W([1200, 600, 1400,1200], {g:300, t:0})
    w.S(700,1000, 'r',  800,20)
    w.S(500,800,  'g',  200,20)
    w.S(900,600,  'x',  200,20)

    p=w.p(700, 600)
        w.fg.A( p.sp())

    w.track(p, 600, 400,
        {x:700, y:1000, w:700, h:600, mX:1.5})
}




SPUFF=function(){W(1000,1000,2000,2000).G(0)


    w.S(200,500,'g',100,100); w.S(500, 500,'w', 100,100);
    w.S(1000, 500,'r', 100,100); w.S(1500, 500,'g', 100,100)

    y = w.ship(100, 100).rot(200)


    w.track(y, 500, 500 ,{x:1000, y:1000, w:400, h:400} )

    BUFFER=function(){


        W([1200,600,4800,1600],{g:0,t:0})//.mark()//.dot(600,300,'*').dot(1200,600,'*')

        y=w.ship(100,100).damp(1,10).rot(90).lD(2).aD(2)
            .rot(120)//.lV(1)

        w.bufFoll (y, 600, 300, {
            x: 800, y: 300, mX:.8, mY:.8,  w: 200, h: 200  })



        // w.Z(.8)
    }

}
SLY=function(){W([1200, 600,2400, 1000],{g:300}).P()
    w.right.kill(); w.left.kill()
    w.track(p,300,400, {
        x:1200,y:700,
        w:800,h:500,
        mX:10,mY:10
    })
}
KISS=function(){
    W([  1200, 600, 2400, 600 ],{g:10})

    turtle =[
        ['g', [0,0], [-50,-10], [-40,-20],[0,-40],[20,-10] ],
        ['y', [10,-10], [20,-30],[50,-15], [45,-5] ],
        ['y', [-50,10],[-50,-10],[-40,-10],[-40,10] ],
        ['y', [-10,10],[-10,-10],[0,-10],[0,10] ],
        ['x', 10, 55,-12],
        ['u', 30,40, 75,-12]
    ]
    w.D(400, 280,turtle, '-')  //this changes the data object for future uses !!!


    w.D(600, 280, [
        ['g', [0,0], [-50,-10], [-40,-20],[0,-40],[20,-10] ],
        ['y', [10,-10], [20,-30],[50,-15], [45,-5] ],
        ['y', [-50,10],[-50,-10],[-40,-10],[-40,10] ],
        ['y', [-10,10],[-10,-10],[0,-10],[0,10] ],
        ['x', 10, 55,-12, '-'],
        ['u', 30,40, 75,-12 ,'-']
    ])



    _.times(10, function(i){
        w.D(100+i*100,100).cir({r:35,lf:{c1:'*',c2:'*'}}).den(.1)
        w.D(100+i*100,100).cir({r:20,lf:1}).den(.1)
    })



    _.times(10, function(i){
        w.D(100+i*140,160).cir({r:50,

            rf:{
                c1:$r(),
                c2:$r(),
            }
        }).den(.1)})


    w.D(800, 300).cir({r:120,
        C:'y',   l:2,  bf:'me', ls:['y','x']//?
    }).den(.1)




    y = w.ship(50,50).C('d').mid()
    y2 = w.ship(100, 300).C('x').rot(180)
    //i thought i may want t for timer/ticker.. but time has no x and y !
    //move the stage by manipulating the trackee x,y
    //these funcs can change stage, or the tick can update it every tick based on its value w.tx/ w.ty?
    w.tRightLeft()
    w.showOff()
    I(function changeT(){if( w.t == y2){w.C('w'); w.t=y } else {w.C('z');w.t= y2}}, 5000)

    b=w.D(100,300)
    pf = b.pol({s:1, C:'y',v:[[-200,-100],[0,-200],[100, -100]] })
    pfs =  b.pol({s:1, C: 'o',  v: [  [-100, 0],  [0, -200],  [100, 20],    [0, -150] ]})
    cf = b.cir({k:'cir', r:100, x:200, y:-100, d:.2, b:.8, f:100, C:'x'})
    rf = b.rec({x:100, y:100,w:10,  h:100,   C:'x'})

    w.D(200,300).pol({

        v:[[0,100],[0,-100],[200,-150],[200,150]],
        c:'y',C:'w',l:5,

        bm:1

    })




    //FROM POL ->0, -100]] })



    w.D(800,300).pol({
        v:[
            [[5,100],[0,-100],[200,-150],[200,150]],
            [[-50,50],[-50,-100],[450,-50],[450,50]]
        ],
        c:'b',C:'X',
        bm:1
    })



}
SCSPOOM=function(){W({g:0,w:0});w.cen('+')
    w.s.rXY(w.hW, w.hH)
    star= w.S(200, 200, 'p', 100).den(1).bo(2)
    star.bS('earth',.13)
    w.dJ(
        p= w.player(200,200,2.5, 'thrust').horizCenter().den(.4).aD(8).lD(.8),
        star
    ).freq(.15).damp(0).len(50)
    cjs.t(function(){trans(cjs.cap(300/M.dist(star,p),.3,2))})
    function trans(Z){w.s.sXY(Z)
        w.s.XY(w.hW-(p.X()-w.hW)*Z,
            w.hH-(p.Y()-w.hH)*Z)}
}
CUPBALL=function(){//should zoom in when near cup
    CUPS()
    b = w.D(w.W/2, w.H/2, 'w', [[10  ]]).r(.8).track()
    cjs.tick(function(){
        b.F(0, -20)})
    w.showOff()
}
SCROLLNOLIM=function(){W([1200,600,2400,1200], {  g:0 })
    w.S(1200,300,'r',400,100)
    w.S(1200,600,'w',[[100,100,'-']])
    w.S(1200,900,'r',400,100)
    y = w.ship(100, 100).rot(120).damp(1,10)

    w.Z(.8)

    w.track(y, 600,300,'-')
    w.dragScale=function(){var w=this,
        pX=0, pY= 0,  pmX,  pmY, o = {}
        c = $(w.i.canvas)

        c.mousedown(function(e){
            o.Scl = w.z
            o.Y = e.clientY
        })
        c.pressmove(function(e){
            var x=e.clientX,
                y=e.clientY,
                newSc = o.Scl +  (o.Y - e.clientY) * .005

            newSc = newSc>5?5  : newSc <.8 ?.8  : newSc
            w.Z( newSc )

        })

        return this}


    w.dragScale()
}
TRACKEE=function(){

    W([  1200, 600, 2400, 600 ],{g:10})
    w.S(400,2500,'r',200,100)
    w.S(800,2300,'z',100,100)
    w.S(1200,2300,'b',300,100)
    w.S(1600,2300,'z',100,100)
    w.S(2000,2300,'r',200,100)
    _.times(10, function(i){ w.D(100+i*100, 100,$r(), 35).den(.1)})

    y = w.ship(50,50).mid()
    y2 = w.ship(100, 300).C('x').rot(180)


    //i thought i may want t for timer/ticker.. but time has no x and y !
    //move the stage by manipulating the trackee x,y
    //these funcs can change stage, or the tick can update it every tick based on its value w.tx/ w.ty?


    w.tRightLeft()

    w.showOff()


    setTimeout(function(){setInterval(function changeT(){if( w.t == y2){w.C('b'); w.t=y } else {w.C('z');w.t= y2}}, 5000)},5000)


}
CAMBALL=function(){

    //W([1200,600,2400,600],{g:[10,10]}).Y()

    W([1200,600,2400,600],{g:100}).Y()


    mick(700,100, { c1:'b', c2:'X' })
    mick(700,300, { c2:'b' })
    //  mick(100,100, { y2:10 })
    //  mick(100,200, { y2:200 })
    //  mick(100,300, { x2:100 })
    function mick(x,y,lf){var g=G(arguments)
        w.i.h(x,y,'+').c({l:20, C:0, lf: lf||1})
            .dc([50], [200,0,100], [100,100,100])
        if(g.p){w.i.h(x,y).c({ l:20, C:0, ls:lf||1})
            .dc([50],[200,0,100],[100,100,100])}}
    y.i.c('y').dc(100, 100, 30)
        .c('o').dc(100, 100, 10)
        .c('X','g',8)
        .mt([
            [100, 100], [300, 300], [400, 100],
            [500, 300], [450, 450]],
        [[500, 0], [600, 100]])
        .cir(600,300,'u','g',10)


    h= w.i.h(600,300,'+')
    h.cir(105, 100,20,'b')
        .cir(100,20,100,'g')
        .cir(105, 100,8,'z')
        .cir(200, 100,20,'b')
        .cir(200, 100,8,'z')



    w.t =  b = w.D(300,300, 'r', 80).bo(.8).den(.1)



}
ZOOMSCALE=function(){

    W([1000, 1000], {g: 0, t: 0
    })

    w.dragX = function(){var w=this,d
        w.hud.c.m({
            mD: function(x){d = x-w.s.x},
            pM: function(x){w.s.x = x-d}
        })
        return w}
    w.dragY = function(){var w=this,d
        w.hud.c.m({
            mD: function(x,y){d = y - w.s.y},
            pM: function(x,y){w.s.y = y - d}
        })
        return w}
    w.drag=function(){return this.dragX().dragY()}





    // w.s.HUD.dot(500, 500)
    y = w.ship(100, 100).rot(200)
    w.S(500, 500, 'o', 200)
    w.S(500, 500, 'r', 10)
    w.S(200, 200, 'm', 40)
    w.S(800, 200, 'b', 60)
    w.S(800, 800, 'l', 80)
    w.S(200, 800, 'g', 100)

    //w.inout()
    w.drag()


    r = $.range().A()

    r.abs(775,500)
    r.css(  'transform', 'rotate(90deg)'  )
    r.W(500).val(0)


    cjs.tick(function(){

        w.Z( r.val()/25+1 )

    })

}
FOL =function(){W(500, 500, 1600, 1000).G(0)
    a = w.ship().C('b')
    b  = w.ship(400,400).C('o').track()
    I(5, function(){
        if(w.follA){b.track(); w.follA=0}
        else {a.track(); w.follA=1}

    })


}
BASICSCROLL=function(){

    //no buffer to worry about
    //it lets u gradually move past the target point.. until hits limit

    W([1200, // x
        600,
        4800, // x
        1200
    ],{g:0, t:0})


    w.S(1200,300,'r',400,100)
    w.S(1200,900,'r',400,100)


    w.S(1200,600,'w',[[400,500,'-']])

    y = w.ship(200,200).rot(120).damp(1,10)

    w.track(y, 600, 300)

    // w.dot(600,300)
    //w.hud.dot(600,300)


//    w.dot(1200,600)
    //   w.hud.dot(1200,600)




    y.XY(1400,600).rot(90).lD(0).lV(1)


}
SHORTLONG=function(){
    W([900,300,3600,300],{g:0}).Z(3)
    w.S(1200,300,'r',400,100)
    w.S(1200,600,'w',[[100,100,'-']])
    w.S(1200,900,'r',400,100)
    y = w.ship(200,200).rot(120).damp(1,10).track()
}
TRACKEECB=function(){W([1200,600, 2400, 1200],{g:300})
    w.S(400,2500,'r',200,100)
    w.S(800,2300,'z',100,100)
    w.S(1200,2300,'b',300,100)
    w.S(1600,2300,'z',100,100)
    w.S(2000,2300,'r',200,100)
    _.t(10, function(i){
        w.D(100+i*100, 100,$r(), 35).d(.1)})
    w.Z('-')
    w.t = w.p(1175,100,'jump') // no need to call track?
    _.in(3,function(){
        w.C('x')
        w.t.cb= function(){
            w.Z(w.z + .001)
        }
    })

}
SHOWOFF=function(){W([1200, 600, 2400, 600], {g:10})

    y=w.ship(50,50).track()//.P(100,1000)

    w.S(400,2500,'r',200,100)
    w.S(800,2300,'z',100,100)
    w.S(1200,2300,'b',300,100)
    w.S(1600,2300,'z',100,100)
    w.S(2000,2300,'r',200,100)
    _.times(10, function(i){ w.D(100+i*100, 100,$r(), 35).den(.1)})
    w.showOff()

}
WORLDPAN=function(){W([1200, 600, 2400, 600],{g:0})
    w.S(400,300,'r',200,100)
    w.S(800,300,'z',100,100)
    w.S(1200,300,'b',300,100)
    w.S(1600,300,'z',100,100)
    w.S(2000,300,'r',200,100)

    b= w.D(100,100, 'b', 30).lV(-10,-20).rest(.2)
    co = w.tCo().B( b.tr())
    _.t(10, function(i){
        co.B( w.D(100 + 30*i,100, 'r', 30).lV(10,20).r(.2) ) })

    y = w.y(100,100).rt(120).aD(100)

    w.pan('*')

}

AUTO =function(){W({w:0,t:0}).P()

    setup=function(){score=0

        p.XY(350, 100)
        p.lV(0,0)
        p.cn('j')
        p.d(.1).r(1).fr(0)
        w.s.XY(0,0)
    }
    setup()

    T.t(function(){ w.s.X(4,'-'); if( p.relPos() < -100 ){setup()}})//.pen(score++)

    w.ramps()
}

DOMI=function(){W()

    w.D(300,500,'r',40,200)
    l=w.D(380,500, 'r', 40,200)
    w.e$(function(){var b=this.B()
        if(b==l){b.I(-10,0, V(0,-50))}
        else {b.I(10,0, V(0,-50))}
    })




}
MARIOBROS  =function(){W([1200,600, 1200,1000], {  g:200}).P().Y();y.tr()


    // w.ice(800,280, 10000);


    // w.S(1200,30, 'r',600,4)
    // w.clouds(500,-200).clouds(1000,-200).clouds(-500,-200)
    //w.s.XY(300, 150).rXY(300,150)

    T.t(function(){
        //p.centerScale(1-( (p.X()- w.hH)/ w.hH)*.1)
    })

    //w.s.XY(300,150)
    //w.s.rX(600)
    //w.s.rY(-200)

    //w.Z(.5)

    w.ice(30,450, 400)
    w.grass(850,650,400)
    w.grass(0,800,400)
    w.rubber(880,950,1000)

    /*
     //w.s.XY(300, 150)//.rXY(300, 150)
     w.grass(300,280,500)
     w.ice(1300, 280, 1000)
     w.clouds().clouds(500,-200).clouds(1000,-200).clouds(-500,-200)

     //w.s.XY(300, 150).rXY(300, 150)
     w.clouds().clouds(1000,-200)
     w.grass(300,280,500)
     w.ice(800,280, 5000)
     */

    //slide = w.rec(1200, 30, 1200,40, 'b').den(1).fric(.5).rest(.5)

}
BO = BOUNCEOUT = function(){W({w:'r2', g:0}).C('e')

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
BOL2=function(){W({g:10 ,w:'r2' })

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


     _.inx(2, function(){

     w.C('g')
     _.e(arr, function(b){ gCo.B( b )   })
     //b.lD(100)
     //gCo.xB(b)

     })





     _.in(8, function(){ //.pen('welcome to grav controller - top balls r1, bottom r2(default)')

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
     _.in(15, function(){w.C('y');
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
     _.in(22, function(){w.C('y');

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
HOVER=  function(){W([1200,1200,1200,1200],{g:130 })//.C('w')

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
COLORSHIP=   function(){W().G(1)//.C('z').pen('welcome to tensor (damping) controller - the timing here is amazing!')

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
STAB=function(){W({g:0})
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

            _.in(.1,
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
SMASH=function(){W([2000,1500,2000,1500]).G(200).C('b'); var b1, b2
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
ANTIGTANK = BCO=function(){W([1200,1200],{g:50,w:'U' })
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

    _.in(8, function(){w.addHundBalls()})

    _.in(24, function(){
        w.e(function(b){b.dyn()})
    })
}
VANISH=    function(){W().Y()
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
    _.in(1, function(){


        i =  y.sp()

        i.K('j')

        w.C($r())

        k = i._K

    })
}
BREW=   function(){W({g:200 })

    p = w.p(500,200)


    w.y()
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
POPCORN= FLOAT =    function(){W(200)
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
FUNNYPOOL =    function(){W({
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
PARTRIVER=   function(){W({g:100}).Y(); y.XY(100,500)

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
FB= FISHBOWLS=   function(){ W({g:300})
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


    _.in(.5, function(){

        y=w.ship(300,50)

        $.ev(1, function(){w.D(300,100,'y',10)

            w.D(760,100,'b',10)

            y.bc('-')
        })

    })





}
FBL2 =  function(){W( ).Y(); y.XY(100,500)

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

FLOOD=  function(){

    W({g: 0}).C('g')

    p = w.p(200,200)
    y = w.y(300, 50).lD(5)

    co1 = w.aCo(0,-50)
    co2 = w.aCo(0, 50)
    s1 = w.D(250, 300, 'o',600, 600,  '-').K('co1')
    s2 = w.D(950, 300, 'o',600, 600,  '-').K('co2')

    w.bindCo('co1', 'co2')

   // _.t(20,function(){w.D(R(1200,100), R(600,100), $r(), 30)})


    /*


     w.end(function (cx) {
     cx.w('co1',
     function(){this.xCo()})
     cx.w('co2',
     function(){this.xCo()})
     })
     */

}
STICKY = function(){W([1200,600,2400,600],{g:50})
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

ROOM3D = BOUNCELAY = function(){W([800,800],{g:50 }).C('z')




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




SHARPSHOOT = PAINTBALL = function(){

    W().randRects().Y() //only works on NON-sensors?

    y.stat()

    w.y(100,100)

    w.b(function(cx){
        w.i.dot($r(), cx.pt().x, cx.pt().y   )
    })



}






BUB=SPRINK=BUBBLEPOP=function(){W({W:2000,g:0}).Y();


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
BRUISE=CORNERBATTLE=function(){W([3000,1000],{g:0,t:0})
    //<- var lP=cx.lP(b) //b.lP( cx.pX(), cx.pY() )

    w.p()
    w.p()
    w.p()
    w.p()
    w.p()
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

SICK=BBALL=MOONSOCCER=function(){W({W:1500, H:1200, g:0}).C('b')

    y=   w.D(100,100,'w',40).fR().cn('thrust').bS('me')
    y.cir('y',50)



    y.cl(w.S(300,300,'g',50),
        function(f,cx){w.D(600,300,'g',20).K('g').I(-cx.nX(300) ,cx.nY(300))})

    y.cl(w.S(900,300,'o',50),function(f,cx){
        w.D(600,300,'o',20).K('o')
            .I(-cx.nX(300),cx.nY(300))})


    y1=w.D(300,300,'w',10).fR().cn('thrust').bS('me').I(20,20)

    y1.cir('y',40).r(.8)

    Ball= $.mo(.5, function(n){w.D( 600, 200, 'o', 5).bit(0)
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
//w.pop('me absorbs energy of tims collision!'); _.in(4, function(){w.pop('gets actual v of bA')}); _.in(8, function(){w.pop('at moment of col!')})


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

DOODLE= function () {W([1200, 600, 1200, 2000], {g:-1000}).stats().P(600, 1800)
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
    p.K('p').tr()//.cl($.mo(function(){w.D(p.X(), p.Y()-150,'w',5,5,0,0,45)}))
    p.cl(w._t, //when player coll roof,
        function(){ w.C('z'); w.G(1000)})

    //one way wall
    w.pre('pf',  function(f, cx){
        if( p.Y() - this.B().Y() > 10){ cx.en(0) }
    })

}

SMASHOUT= function(){W([1200,600], {g:10//g:50//,w:'='
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

VORTEX= function(){W([1200,800], {g:8 }).Y()
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

GOOMBA=function () {W()


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


webman=function(){
    w.Webman = w.wbMan = function (x, y, sc) {
        var w = this,
            p = w.me(N(x, 394), N(y, 530), N(sc, 4)).fR().r(0).d(.14).fr(1).K('wbMan')
        p.WEBS = []
        p.canW = 1
        return p
    }
    b.Web = function (K) {
        var b = this, w = b.W()
        return w.Web(this.X(), this.Y() - 100, this, K)
    }
    b.shR = function () {
        var f = this.sw('-')

        w.D(this.X() + 80, this.Y() - 20, 'w', 6).I(2 - f / 50, 0 - f / 40)
        return this
    }
    b.shL = function () {
        var f = this.sw('-')
        w.D(this.X() + 80, this.Y() - 20, 'w', 6).I(2 + f / 50, 0 + f / 40)
        return this
    }
    b.lWeb = function () {
        return _.l(_.where(this.WEBS || [], {cn: 1}))
    }
    b.iCn = b.fWeb = function () {
        return this.WEBS && _.fW(this.WEBS, {cn: 1})
    }
    b.unstick = function () {
        var web = _.l(this.WEBS || [])
        if (web) {
            web.kill()
        }
        //if(this.lWeb()){ this.lWeb().kill() }
        return this
    }
    b.Web = function () {
        var p = this, web

        web = {
            p: p,
            cn: 0,
            PIECES: [],
            to: function (link) {
                alert('to')
                w.dJ(this, link, 1, 500, 500);
                if (!G(arguments).n) {
                    this.PIECES.push(link)
                }
                ;
                return link
            },
            link: function (x, y, p) {
                var web = this, link
                link = Link(x, y) // the df link is yellow 4 by 5, yo.. says it right here.
                link.to = function (link) {
                    var j
                    j = w.dJ(this, link).l(25).fq(90).d(3.8)
                    return link
                }
                // / and i found the joint here //... the other important part of this equation.
                if (p) {
                    link.to(p)
                }
                return link
                function Link(x, y) {
                    var b = w.D(x, y, 't', 5)
                        .d(1.5).r(0).fr(0).fR().lD(1)
                    b.bit(0)
                    b.K('wbP')//.lD(2)
                    return b
                }
            },
            Ball: function (x, y) {
                var ball = w.D(x, y, 'd', 20, '-').r(0).K('wbB')
                ball.web = this
                return ball
            },
            stick: function (link) {
                this.cn = 1;
                w.dJ(this.ball, link, 10, 40, 0).l(20)
                return this
            },
            kill: function () {
                _.e(this.PIECES, function (piece) {
                    piece.kill()
                })
                this.PIECES = []
                p.WEBS = _.rj(p.WEBS,
                    function (web1) {
                        return web1 === web
                    })
            }
        }
        p.WEBS.push(web)
        return _web = web
    }
    b.shootWeb = function () {
        var g = G(arguments), p = this, link,
            web = p.Web(),
            x = p.X(),
            y = p.Y() - 120

        web.PIECES.push(link = web.link(x, y, p))

        _.t(12, function (i) {
            web.PIECES.push(
                link = link.to(
                    web.link(x, y)))
        })
        web.ball = link.to(web.Ball(link.X(), link.Y() - 220).d(.5))
        web.PIECES.push(web.ball)
        web.ball.SetBullet(true)
        return web.ball.d(.5).r(.2)

        //   _.in( N(p.expire, 2), function(){ if(!web.cn){ web.kill( )} })
    }
    WEBMAN = function () {
        W([1200, 1400], {g: 150, w: '_'}).C('z').s.C('z')

        block(400, 500);
        block(800, 400);
        block(1100, -505);
        block(1300, -400)

        function block(x, y) {
            return w.S(x, y, 't', 120, 120, 't').K('randomRect rr')
        }

        w.goal(1800, 0)
        sw = $sw()
        p = w.me(394, 530, 4).r(0).d(2).fr(1).K('wbMan')//.tr()
        p.WEBS = [];
        p.canW = 1;
        p.expire = 2
        p.d(.2)
        p.bit(0)
        //p.fixedRot(false)

        $.k({

            u: function () {
                p.unstick()
                // if(!p.iCn()){
                b = p.shootWeb()
                b.lD(0)
                if (K.r) {
                    b.lV(12000, -1000200)
                }
                else if (K.l) {
                    b.lV(-120000, -100200)
                }
                else {
                    b.lV(0, -14000)
                }
                //}
            },
            l: function () {
                p.I(-50, -30)
            },
            r: function () {
                p.I(50, -30)
            },
            d: function () {
                p.unstick()
            }
        })

        js = []
        w.b(function (cx) {
            cx.w('wbB', 'rr', function (rr) {
                var b = this.B(), rr = rr.B()
                web = _.fW(p.WEBS, {ball: b})
                // of all my WEBS, get me the web where the ball is the ball i just shot!
                if (web) {
                    web.stick(rr)
                }
            })
        })

        _.inx(1, function () {
            p.shootWeb()
        })

        //w.s.tickX(function(){return 600- p.X()});
        //w.s.tickY(function(){return 510- p.Y()})


        w.s.tickX(function () {
            return 600 - p.X()
        });
        w.s.tickY(function () {
            return 510 - p.Y()
        })


    }
    w.js = function (fn) {
        var js = this.GetJointList(),
            arr = []

        if (js) {
            arr.push(js)
        }
        while (js.GetNext()) {
            arr.push(js = js.GetNext())
        }

        if (fn) {
            _.e(arr, function (j) {
                fn(j)
            })
            return this
        }
        return arr
    }
    BEARD1 = function () {
        W().randRects()
        p = w.Webman()
        $.k({
            l: function () {
                p.I(-20, 0)
            },
            r: function () {
                p.I(20, 0)
            },
            d: function () {
                p.unstick()
            },
            u: function () {
                // if(!p.iCn()){
                p.Web().b.I(0, -100)
                // }
            }
        })

        w.b(function (cx) {
            cx.w('wbB', function (f) {
                var web = _.fW(p.WEBS, {ball: this.B()})
                if (!web.cn) {
                    web.stick(f.B())
                }
            })
        })
    }
    WEB = function () {
        W()

        w.roof.kill();
        w.right.kill();
        w.left.kill()
        _.t(40, function (i) {
            w.S(
                R(1100, 50), R(500, -50), 'r', R(30, 15), R(30, 15)
            ).K('rr')
        })
        p = w.Webman()

        $.k({
            l: function () {
                p.lV(-40, 0)
            },
            r: function () {
                p.lV(40, 0)
            },
            d: function () {
                if (p.WEBS[0]) {
                    _.l(p.WEBS).kill()
                }
            },
            u: function () {
                if (!p.iCn()) {

                    //make a web and shoot its ball (the dense part)
                    //the ball is kind of a brain for this thing

                    p.Web().ball.I(0, -100)

                }
            }
        })


        w.b(function (cx) {
            cx.w('wbB', 'rr', function (f) {//
                var web = _.fW(
                    p.WEBS, {ball: this.B()}
                )
                if (!web.cn) {
                    web.stick(f.B())
                }
            })
        })
    }
    WEBMAN1 = function () {

        W({g: 30, w: '_'}).C('z').s.C('z')

        block(400, 100)
        block(800, 0)
        block(1100, -50)
        block(1300, -200)
        w.goal(1800, 0)
        sw = $sw()

        p = w.Webman()

        w.b(function (cx) {
            cx.w('wbB', 'rr', function (rr) {
                var b = this.B(), rr = rr.B()
                web = _.fW(p.WEBS, {ball: b})
                // of all my WEBS, get me the web where the ball is the ball i just shot!
                if (web) {
                    web.stick(rr)
                }
            })
        })
        $.k({

            u: function (e, K) {
                var i

                if (p.iCn() && p.WEBS && !p.WEBS[1] && p.canW) {
                    i = M.a(p.lV().x * 2) * (K.r ? 1 : K.l ? -i : 0)
                    p.wb(3000).b.XY(p.X(), p.Y() - 100).I(i, -30)
                }
                else if (!p.WEBS || !p.WEBS[0] && p.canW) {
                    p.stat()
                    p.wb(3000).b.XY(p.X(), p.Y() - 200).bit(0)
                        .I(K.l ? [-30, -40] : K.r ? [30, -40] : [0, -470])
                }

                p.canW = 0
            },

            U: function (e, K) {
                var cn = _.rj(p.WEBS, function (w) {
                        return !w.cn
                    }) || []
                if (cn[0] && cn[1]) {
                    cn[0].kill()
                }
                p.canW = 1;
                //p.shotForce=0
            },

            r: function (e, K) {
                if (K.d) {
                    p.didShoot = 1
                    p.sw = p.sw || $sw()
                }

                else {//k.D
                    p.F(//fX
                        p.iCn() ? 100 : 8, 0)
                }


            },
            R: function (e, K) {
                p.WEBS = p.WEBS || []
                if (p.WEBS[1]) {
                    p.WEBS[1].kill()
                }
                if (K.d) {
                    p.shR()
                }
            },
            l: function (e, K) {
                if (K.d) {
                    p.didShoot = 1;
                    if (!F(p.sw)) {
                        p.sw = $sw()
                    }
                }

                if (p.iCn()) {
                    p.F(-250, -50)
                }
                else {
                    p.I(-8, 0)
                }
            },

            L: function (e, K) {
                p.WEBS = p.WEBS || []
                if (p.WEBS[1]) {
                    p.WEBS[1].kill()
                }
                if (K.d) {
                    p.shL()
                }
            },

            D: function (e, K) {
                if (!p.didShoot && p.WEBS[0]) {
                    _.f(p.WEBS).kill()
                }
                p.didShoot = false
            }

        })

        w.s.tickX(function () {
            return 600 - p.X()
        });
        w.s.tickY(function () {
            return 510 - p.Y()
        })
        function block(x, y) {
            return w.S(x, y, 't', 50, 50, 't').K('randomRect rr')
        }
    }
    BLN = function () {
        W([1200, 600, 1200, 2000], {g: 300})


        p = w.me(394, 530, 4).track()
        Blns = []

        $.k({

            l: function () {
                p.I(-100, 0)
            },
            r: function () {
                p.I(100, 0)
            },
            d: function () {
                pop()
            },

            u: function () {
                p.I(0, 100)
                Bln()//.I(0,-100)
            }
        })


        //cjs.t(function(){_.e(Blns,function(b){b.F(0,-4000)})})

        function Bln() {
            $l('Bln')

            var y = p.Y(),
                x = p.X(), l,


                b = w.D(p.X(), p.Y() - 10)

            b.cir({c: $r(), r: 40, o: .5}).d(.1)
            b.ls = []
            b.K('bln')

            Blns.push(
                b
            )


            l = w.l(x, y);
            w.dJ(p, l);
            b.ls.push(l)

            _.t(9, function (i) {
                var nL;
                b.ls.push(nL = w.l(x, y - i));
                w.dJ(l, nL);
                l = nL
            })

            w.dJ(l, b)

            b.kill = function () {
                var b = this
                _.e(b.ls, function (l) {
                    l.kill()
                });
                b.kill()
                Blns[Blns.indexOf(b)] = null
                Blns = _.compact(Blns)
            }

            return b
        }

        /*

         function pop(){var wb;if(wb=_.l(Blns)){wb.kill()}}

         /*

         w.b(function(cx){cx.w('bln', function(f){

         if(  f.of(w.left)||f.of(w.right) ){
         this.B().kill()
         }})})
         */

        /*






         // x.w('web', 'floor', function(){p.destroyWeb();p.hanging = false})
         */

    }
//w.WebBall=function(o){return w.D(o.x, o.y-100,'d',10).d(1).r(0).fr(100).K('wbB') }
};webman()


TX = function (){
    W( {W:2000, H:1000, wW:4000, wH:2000, g:1000})._(onReady)


    //.stats();

    w.Z(.1).G(10);

    //w.bg.bm('earth', onReady)

    function onReady(w){ //, m: 'm'
        w.$$(function(){ w.showOff() })
        //platforms

        _.t(10, function (i) {w.S(   R(5000), 1000+R(500), 'r', R(250,50),  R(60, 15)).K('rr')})

        y = w.y(2600,1500,6).K('p')
        // p = Player().XY(2200, w.h-300).K('p')

        p = w.p(2200, w.h-300, 3).K('p')

        bike = x = Bike().K('p')

        but = b = Butterfly().aD(1000000).r(0).XY(500,200).K('p');

        _.in(1, function(){b.cn('thrust', 500)}) // b.track()



        pol = w.D(2500, 300).pol({

            v: [[[5, 100], [0, -100], [200, -150], [200, 150]], [[-50, 50], [-50, -100], [450, -50], [450, 50]]],


            c: {c:'r', C:'y', l:10, bf:'me'},

            bf: 'me'

        })[0].B()









        b.XY(pol.X(), pol.Y())
        j= w.dJ(b, pol ).l(600).fq(55).d(.1)
        flub = g=   w.D(3500,160).K('flub').K('m').K('p')
        flub.cir(
            { r:120, rf:{c1:'r',c2:'g'}  },
            { r:100, C:'y', l:2, bf:'chicks'  })
        flub.r(5).fr(1).lD(5)
        flub.fR().cn('pow')
        flub.bS('me', 1)
        flub.warp()
        r=w.D(300, 400, 'r', 250).r(.5).cl('p', function(f){

            if(f.B()== w.t){  }

            else {

                r.C($r())
                w.C($r())

                w.y( r.X(), 400 ).C('b')

                //  f.B().track()

            }


        })
        destWall = t=DestWall()

       curtain = w.i.h(-300,-200,'+').bf('me').rec(  {w:150,h:500}, {w:150,h:500,x:200}, {w:150,h:500,x:400}, {w:150,h:500,x:600} )

        p.track()
        y.track()
    }
    function Player(){var p = w.p(200,400,5).cn('j')
        w.S(100, w.h-100, 'r', R(70,150),  R(30,15)).K('rr')
        w.S(100, w.h-400, 'r', R(70,150),  R(30,15)).K('rr')

        _.t(10, function (i) {

            w.S(   R(5000), 1000+R(500),
                'r', R(250,50),  R(60, 15)).K('rr')
        })


        p.webs=[]
        p.canW=1
        p.wb=p.web=function(K){
            return p.Web(p.X(),p.Y()-100, K)
        }
        p.iCn=function(){return p.webs && _.fW(p.webs,{cn:1})}
        p.shR=function(){var f=p.sw('-'); w.D(p.X()+80, p.Y()-20, 'w', 6).I( 2- f/50 , 0 - f/40);return p}
        p.shL=p.shootLeft=function(){var f=p.sw('-'); w.D(p.X()+80, p.Y()-20, 'w', 6).I( 2+ f/50, 0+f/40); return p}
        p.lWeb=function(){return _.l(_.wh(p.webs,{cn:1}))}
        p.detach=function(){if(p.iCn()){p.lWeb().die()};return p}
        $.k({l: function(){p.lV(-40, 0)}, r: function(){p.lV(40, 0)},
            u: function(){if(p.webs[0]){_.l(p.webs).die()}},
            d: function(){if(!p.iCn()){ p.web().b.I(0, -100000) }}})
        w.b(function (cx) {cx.w('wbB', 'rr', function(f){var web= _.fW(p.webs,{b:this.B()}); if(!web.cn){web.attach(f.B())}})})
        return p

    }
    function Butterfly(){
        //BLUE BUTTERFLY
      var  b=  w.D(500, 800,[  [300,100],   [100,200]]  ).C('z')//.track()
        b.i.rec('r', 'z',0,-45,20,150,'+')//gun
        b.i.rec('y','z', 0,0,300,100,'+') //wings
        b.i.rec('o','z', 0,20,320,10,'+')//stripes
        b.i.rec('o', 'z',0,-20,320,10,'+')
        b.i.rec('b','z', 0,0,100,200,'+')//top
        b.i.al(.9)
        //a little square snow
    //    $.ev(20, function(){w.D(R(1000),-300,$r(),60).g().al(.9).rec('w','z',0,0,180,180).al(.7)})
        return b
    }
    function Bike() {
        car = w.D(2300, 300, 'r', [[200, 20], [20, 165, -50, -50, 45], [20, 165, 50, -50, -45]])
        dir = 12
        car.fr(5)
        car.track()

        j = w.rJ(
            wh = wheel(2250, 300).C('b'), car, 0, 0, 100, 0)

        wh.bS('me')
        w.rJ(
            wh2 = wheel(2250, 300, 50, 10).C('g'), car, 0, 0, -100, 0)
        w.rJ(
            wh3 = wheel(2250, 300, 25, 6).C('y').aD(10), car, 0, 0, 0, -100)


        wh2.bS('me')
        wh3.bS('me')



        z(function () {
            var K = $.K

            if (K.u) {
                wh.ApplyTorque(150000)
                wh3.ApplyTorque(-50000)
            }

            if (K.r) {
                wh.ApplyTorque(150000)
                wh3.ApplyTorque(15000)
            }

            if (K.l) {
                wh.ApplyTorque(-50000)
            }

            if (K.d) {
                wh2.ApplyTorque(-50000)
                wh3.ApplyTorque(150000)
            }
        })



        function wheel(x, y, r, n) {
            r = N(r, 80)
            n = N(n, 15)
            pC = [b2d.pC(r, n)]
            return w.D(x, y, 'w', pC).d(5)
        }

        return car
    }
    function DestWall(){


        var  t=w.S(3000, 1450,'x',300,900)

        t.cl('bul', function(bu){var v,p

            bu=bu.B()

            v=bu.XY()
            bu.kill()
            // v=bu.kill()
            p=M.p([[0,100],[-100,0],[0,-100],[100,0]]  ).ger(v)
            w.rad(v.x, v.y, 15,function(f){f.sub(p)})//t.fs(function(f){f.sub(p)})
            t.fs(function(f){f.C($r())})
        })


        return t
    }




}



MEET=function(){W([  1200, 600, 1200, 600 ],{g:10})


    //  w.l(600,0,700,500)//hud


    //  w.l(1000,200, 100,900,'-') //red

    //  w.l(50,50,500,350,'/')

    //  w.l(200, 200, 500,500,'+')
    //  _.t(10, function(i){w.D(100+i*40,100).cir({r:35,lf:{c1:'*',c2:'*'}}).d(.1);w.D(100+i*40,100).cir({r:20,lf:1}).d(.1)})


    /*
     _.t(10, function(i){
     w.D(100+i*140,160).cir({r:50,

     rf:{
     c1:$r(),
     c2:$r(),
     }
     }).den(.1)})


     w.D(800, 300).cir({r:120,
     C:'y',   l:2,  bf:'me', ls:['y','x']//?
     }).den(.1)


     */
    //i thought i may want t for timer/ticker.. but time has no x and y !
    //move the stage by manipulating the trackee x,y
    //these funcs can change stage, or the tick can update it every tick based on its value w.tx/ w.ty?



    //  y = w.ship(50,50 ).C('d').mid().track()


    y2 = w.y(100, 300)//.C('x').rot(180)




    //w.tRightLeft();//w.showOff()

    $.evx(5,
        function(){
            if( w.t == y2){w.C('w'); w.t=y }
            else {w.C('z'); w.t= y2}})



    /* w.S(800,300,'r',200,800)
     .cl('bul',function(bu){
     this.sub( bu.B().exp(),'-')})


     w.S(200,300,'r',200,800).cl('bul',function(bu){bu=bu.B()
     var v=bu.pos()
     bu.kill()
     w.pol(v.x,v.y,
     M.p([[0,50],[-50,0],[0,-50],[50,0]])
     ).stat()})
     */
    //y.track()


    t=w.S(500,300,'g',200,800)

    t.cl(//'bul',
        function(bu){var v

            bu=bu.B()

            v=bu.XY()// v=bu.kill()

            p=M.p([[0,100],[-100,0],[0,-100],[100,0]]  ).ger(v)
            w.rad(v.x, v.y, 15,function(f){f.sub(p)})//t.fs(function(f){f.sub(p)})
            t.fs(function(f){f.C($r())})


        })





    /*
     //pol
     w.D(200,300).pol({
     v:[[0,100],[0,-100],[200,-150],[200,150]],
     c:'y',C:'w',l:5,
     bm:1})
     w.D(800,300).pol({
     v:[
     [[5,100],[0,-100],[200,-150],[200,150]],
     [[-50,50],[-50,-100],[450,-50],[450,50]]
     ],
     c:'b',C:'X',
     bm:1})



     b=w.D(100,300)
     pf = b.pol({s:1, C:'y',
     v:[[-200,-100],[0,-200],[100, -100]] })
     pfs =  b.pol({s:1, C: 'o',
     v: [  [-100, 0],  [0, -200],  [100, 20],    [0, -150] ]})


     cf = b.cir({k:'cir', r:100, x:200, y:-100, d:.2, b:.8, f:100, C:'x'})
     rf = b.rec({x:100, y:100,w:10,  h:100,   C:'x'})
     */


    /*
     //turtle
     turtle =[
     ['g', [0,0], [-50,-10], [-40,-20],[0,-40],[20,-10] ],
     ['y', [10,-10], [20,-30],[50,-15], [45,-5] ],
     ['y', [-50,10],[-50,-10],[-40,-10],[-40,10] ],
     ['y', [-10,10],[-10,-10],[0,-10],[0,10] ],
     ['x', 10, 55,-12],
     ['u', 30,40, 75,-12]]
     w.D(400, 280,turtle, '-')  //this changes the data object for future uses !!!
     w.D(600, 280, [
     ['g', [0,0], [-50,-10], [-40,-20],[0,-40],[20,-10] ],
     ['y', [10,-10], [20,-30],[50,-15], [45,-5] ],
     ['y', [-50,10],[-50,-10],[-40,-10],[-40,10] ],
     ['y', [-10,10],[-10,-10],[0,-10],[0,10] ],
     ['x', 10, 55,-12, '-'],
     ['u', 30,40, 75,-12 ,'-']])
     */
}
KNOCKHOCK=function(){W([1200,600,1200,2000]).stats()//.devGrid()
    v=[[[0,200],[0,-200],[400,-300],[400,300]],
        [[-100,0],[0,-100],[100,50]],
        [[-200,0],[-100,-100],[0,50]]]

    // p2= w.p('t')

    b= w.D(800,300,'b',100).r(1).track()

    r = w.D(800,300,'r',300)

    _.in(8,function(){$.ev(3,function(){
        if(R()){
            w.lG('a');b.I(40,-100)}
        else {w.lG('c');b.I(-200,-650)}})})



}
MARIOS=function(){W().P().P().P()

}
HEADACHE=function(){W().P()

    // w.clouds(100,200)
    // w.clouds(400,400)
    w.rub(100,100)
    w.grass(400,100)
    w.ice(300,300)
    w.brick(200,400, 80,20)
    w.brick(300,200,80,20)
    //$.joystick()


    w.p(600,200).r(4)
}
R1=function(){
    W([1200,600,2400,1200] )//.P('+')

    //$.test=true
    w.Z(.1)

    w.roof.kill()
    w.S(100,570,'w',200,30).r(0).fr(0)
    w.S(325,570,'g',230,30).r(.3).fr(10)
    w.S(550,570,'r',200,30).r(.7).fr(.3)
    w.S(100,400,'g',230,30).r(.3).fr(10)
    w.plat([800,300,100], [260,240,60], [550,250,100], [1350,550,100], [300,200,100], [300,500,60,30], [150,400,60,30])
    w.S(1200,500,'w',100,100 )
    w.S(1240,450,'w',180,30 )
    w.S(1420,500,'y', 180,30)
    w.S(1560,450,'y',300,30)
    w.S(1600,500,'y',180,30)
    w.S(1960,450,'w',300,30)
    w.S(1900,500,'w',180,30)
    w.S(11300,200,'w',180,30)

    speed=1
    //  p.tr()

    p = w.p().cn('jump').tr()

    w.p(100, 100,.8)

    w.p(100, 100,.8)
    w.p(100, 100,.8)
    w.p(100, 100,.8)
    //p.lD(1)

///    w.show(function(){ return  'in air: '+ p.inAir() })

    //w.goomba(400).fr(0)

    setup=function(){
        score=0
        p.XY(150,100).lV(0,0)
        w.s.XY(0,0)
    }
    setup()

    T.t(function(){w.s.X(speed,'-')//.pen(score++)
        if(p.Y()> 600){setup()}})
}



MIRROR=function(){W('->')
    p= w.p(100,300).tr()
    w.Z(1.5)

    function left(){p.XY(1100,300); w.xW().walls('->')
        b.dyn().C('b');r.dyn().C('r');
        g.dyn().C('g')
        b2.dyn().C('o')
        b3.dyn().C('y')
    }

    function right(){
        p.XY(100,300); w.xW().walls('<->')
        b.stat().C('z');
        r.stat().C('z');
        g.stat().C('z')
        b2.stat().C('z')
        b3.stat().C('z')
    }


    T.t(function(){


        if(p.X()>1200){ right() } else if(p.X()<0){ left() }


    })





    b = w.D(400,400,'b', 150,150)
    r = w.D(500,400,'r', 50,300)
    g = w.D(400,500,'g', 120 )
    b2 = w.D(250,400,'o', 80,30)
    b3 = w.D(150,500,'y', 50 )



    w.$$(function(){
        w.e(function(b){b.dyn()})
        w.t_.kill()
        w.Z(.1)
    })






}

AUTO=function(){W({g:300, w:0 }).P(300,-300)

    w.plat=function(x,y,W,H){var w=this//=brk=brick=
        x = N(x) ? x : 60; y = N(y) ? y : x
        W = N(W) ? W : 30; H = N(H) ? H : W
        return w.S( x,y,'w',W,H).r(.3).K('plat')
    }



    w.plat(800,500,600,100)
    w.plat(300, 530,100,100)
    w.plat(1400,300,600,100)
    w.plat(1800,500,1000,100)
    w.plat(1900,200,600,100)

    w.p(300,-100)

    T.t(function(){

        w.left(4)

        if(p.Y() > 2000){p.XY(300,-300) } //comeback

        if(b2d.onG){
            if($.K.u){ p.jumping(180,30) }
            else {p.byVel(40)}
      }

      else {p.byImp(10)}

    })

    w.D(800,100,'r',50,50).bS('guy')
}








CLICKSHOOT=function(){W({g: 0})

    p = w.me(800,300).aD(10000)
    w.tim(7)

    w.b(function (cx){
        cx.w('bul', 'tim', function (t) {t.B().kill()})
        cx.w('bul', p, function () {this.B().kill()})
        cx.w('tim', p, function () {p.kill()})})


    $.click(function(e){
        var x=e.pageX-p.X(),  y=e.pageY-p.Y(),
            rot= M.tD(M.atan(y/x)),
            adj= x>0?90:270
        p.rot(rot+adj).I(x/20,y/20)
        w.bul(p.wP(0,-100),10).I(x,y) //.bS({i:'sun', sc:.1})
    })

}





//to do:  maybe u only get 10 buls ever.. so u must chase them :) (only way to kill badguys)


MESHOOTER=function(){W({g: 0}) // u cant shoot when ur dead!

    p = w.me(800,300).aD('++')

    w.tim(7)

    w.b(function (cx){
        cx.w('bul', 'tim', function (t) {
            t.B().kill()})
        cx.w('bul', p, function () {
            this.B().kill()})
        cx.w('tim', p, function () {
            p.kill()})
    })


    $.click(function(e){

        var x = e.pageX - p.X(),
            y = e.pageY - p.Y(),

            rot,  adj

        rot = M.tD(M.atan(y/x))

        adj = x > 0 ? 90 : 270

        p.rot(rot + adj).I(x / 20, y / 20)

        w.bul(
            p.wP(0,-100), 10
        )
            .I(x,y)
            .bS({i:'sun',sc:.1})

    })


    //to do:  maybe u only get 10 buls ever.. so u must chase them :) (only way to kill badguys)

}


PUZ=function(){W(0)

    w.ship().track()

    _.t(10,function(){

        w.D(400,400,
            [
                ['r', 20,0,0],
                ['b', 20, 100, 0],
                ['y', 20, 0, 100]   ])})


}
GRAV=function(){W({g:10}).Y()
    balls=function() {
        w.D(100, 100, 'a', 50).d(1)
        w.D(100, 200, 'c', 40).d(1)
        w.D(100, 100, 'd', 50).d(1)
        w.D(100, 200, 'e', 40).d(1)
        w.D(100, 100, 'f', 50).d(1)
        w.D(100, 200, 'h', 40).d(1)
        w.D(100, 100, 'i', 50).d(1)
        w.D(100, 200, 'j', 40).d(1)
        w.D(100, 100, 'k', 50).d(1)
        w.D(100, 200, 'l', 40).d(1)
    };balls()
    range = w.pJ(
        w.S(600,300, 'q',220, 20),
        w.D(600, 300, 's',20, 250).lD(10),
        V(1,0)).lm(-100,100)
    w.show(function(){return 'Welcome to Gravity Range: Current gravity is ' + range.val()  })

    cjs.t(function(){
        w.G(range.val())
        w.e(function(b){b.I(0,.1)})
    })

}
JFAL=function(){W({g:10})
    w.right.kill()
    //w.s.sX(.95)
    num=0; heads=0
    y=w.ship()//.den(.3)

    $.ev(1,function(){
        w.me(100,100).K('head')
        num++})

    //w.show(function(){return num + ' - ' + heads  })
    game=true
    tickFunc=function(){
        /*
         if(num > 30){
         $.pop('score: '+heads)
         num=0
         heads=0
         w.each(function(b){
         if(b.data() == 'head'){
         b.kill()
         heads++}})}
         */
        if(game){
            if(num > 60){
                game=false
                $.pop('score: '+heads) }
            else {
                w.e(function(b){
                    if(b.data() == 'head' && b.Y()>600){b.kill();heads++}})}}}

    cjs.t(tickFunc)
}
ARM=function(){W()
    y=w.ship(500,200)
    b=w.S(300,300,20,200)
    a= w.S(300,300,[['b',200,50,100,0]])
    $.ev(.1, function(){a.rot(1,'+')})
}
MOVCIR=function(){w=b2d.W({g:0})


    w.dot(300,300); w.dot(600,300); w.dot(900,300)

//rad,speed

    w.D(300,300,50,100).moveInCircle('+') //high oval

    w.D(600,300,50,100).moveInCircle()
    w.D(900,300,100,50).moveInCircle('-') //long oval




}


ZIL=function(){W({g:0,w:0})
    health=100

    y = w.ship().warp().cl(function(){health-=5})


    z = w.zilla(600, 300).fireBallsAtInt(4000)


    w.show(function(){
        return 'health: '+ health + ', hits: ' + z.hits
    })
}
ZILSCR=function(){w=b2d.W({g:0,w:0}).debug()
    health=100
    y = w.ship().cl(function(){
        health-=5
    }) // insert message passing here!
    z = w.zilla(600, 300).fireBallsAtInt(4000)
    //w.follow(y)
    y.cam()
    w.show(function(){return 'health: '+ health + ', hits: ' + z.hits})

}
TALK=function(){   W({   g:0,   w:0   })
    score=0
    shots=0

    p= w.me(500,300).stat()




    _.t(100, function(){
        w.D(R(2200, -1000), R( 1600, - 1000), $r(), R(14,8)).lD(2)
    })

    /*
     $.space(function(){//can double on on shots!!!
     setInterval(function(){
     p.shoot(); shots++ }, 200)
     })  //setTimeout(function(){$.pop(score).click(function(){window.location=window.location})}, 10000)
     */
    w.cl('ball','bullet', function(){
        // score++;  cx.destroy()

    })



    cjs.t(function() {
        p.XY(500, 300)
        if ($.K.l) {
            p.rot(8, '-')
        }
        if ($.K.r) {
            p.rot(8, '+')
        }
        if ($.K.u) {

            w.e(function (b) {
                if (
                    !b.of('bul') && !b.of('player')
                ) {
                    b.I(p.vec(0, -100).div(-50))
                }

            })


        }

    })
}
BAL=function(){W({g:100,w:0})

    w.ramp(
        [250, 700, 500, 200, -40],
        [250, 640, 500, 200, -20],
        [270, 620, 500, 200, -10],
        [200, 600, 500, 200, 11],
        [-70, 350, 500, 200, 85],
        [-70, 375, 500, 200, 75],
        [-70, 400, 500, 200, 65],
        [-70, 425, 500, 200, 55],
        [-70, 450, 500, 200, 45],
        [-70, 475, 500, 200, 35],
        [-70, 500, 500, 200, 25],
        [-70, 525, 500, 200, 17])
    var force
    $.kD({
        d: function(){force=force||10},
        D: function(){
            w.D(20,300,'w',12)
                .DFB(1,0,0).I(0,force)
                .bS('me',0.2)
            force=0}})
    _.ev(.1, function(){force *= 1.2})
    w.S(900,550,'w',120,15).fr(0).K('ledge')
    w.with('ledge', function(p){
        p.B().lV(0)
    })

}
WARP=function(){W().P()
    w.S(500, 600, 's', 30, 200)
    w.S(600, 600, 's', 30, 200)
    w.S(550, 550, 'z', 100, 20).K('warp')
    w.D(650, 580, 'd', 300,80).K('tramp').r(5).d(10).aD(10).lD(10)
    p.warp = function(){this.XY(200, 100)}
    p.cl('warp', function () { p.warp()  })
    p.cl('tramp', function () {p.I(0, -50000)})
}
FLAPPY=function(){W({w:0,g:50})
    w.S( 800,500,'o',100,600).K('plat')
    w.S( 1200,0,'o',100,600).K('plat')
    w.S( 1600,500,'o',100,600).K('plat')
    w.S( 2000,0,'o',100,600).K('plat')
    game=true

    p = w.me(300,0).fixRot().cl('plat',function(){
        if(game){
            $.pop('you suck!')
            game=false}})

    cjs.t(function(){
        p.lV(3);
        w.left(4)
    }) // odd way?  uses 'w.left' ???

    w.$(function(){ p.I(0,-180) })
}
BIGSHIP=function(){W([1200,600,2400,600],{g:0})
    w.y({
        c:'b',
        sc:20
    },'+')

}
TRAP=function(){W(0).C('r')
    co=w.tCo()
    _.t(3, function(){
        co.B(
            w.y('z', R(500,50), R(300,50), '-').lV(10,20).lD(0)
            //  w.D(400,300, 'z',10,10)
        )
    })
    y=w.y()
    rot = 45
    bg = w.y('b', 500,300,'-').shtEv().stat()
    z(function(){ bg.rTow(y)  })
}
FLOCK=function(){W({g:0})//.P()
    w.D(300,100,'r',50)
    w.D(500,100,'y',50)
    w.D(700,100,'b',50)
    w.D(900,100,'g',50)
    var n=0
    _.t(8, function(){
        w.y('o'//,'-'
        )//.push('+')
    })
    //y=w.y('b',100,100,5)
    _.evx(.5, function(){
        if(y.going()){
            // w.C('p')
        }
        else {
            // w.C('z')
        }
    })
}
YIP = function(){W({g:4})
    y = w.y(300, 400, 3,'-').rt(90)
    y1 = w.y(600, 400, 3,'-').rt(90)
    _.ev(.5,  function(){
        y.I(0, -4)
        y1.I(4, 0)
        y.I(0,-.7).rt(4,'+')
        y1.lV(0,-3).rt(4,'+')})
    _.in(.5, function(){})
    YIPPY = function () {_.ev(1,YIP)} //ok this is crazy cool.. but something is wrong.  something is not getting reset, because force gets bigger each time
}
_BLUE=function(){W({g: 0})

    y = w.y('b',200,300,6).aD(1).lD(1).r(0).fr(1).K('guy')
    _.t(5, function(){
        w.y(R(600,50),300,3,'-').K('bad').rt(45)
            .push('+')
            .shtEv('badBul')})
    w.cl('badBul', function(f){
        this.B().kill()
        //if(f.of('bad')){
        f.B().kill()
        //}
    })
}
TOW=function(){W({g:0}).C('z')
    b = w.D(500,300,'r',100)
    y = w.ship()
    cjs.t(function(){
        b.towards( y.X(), y.Y(),9  )})

    _.t(10,function(){w.ship('b',R(500,50), R(500,50))})
    w.b(function(cx){cx.w('ship','bul', function(bul,cx){
        this.kill()})})

    w.D(200,200,'b', 80).d(1).K('bad')
    w.D(200, 200, 'r', 150, 150).d(1).K('bad')

    y = w.y('b',100,200,6,'-').aD(1).lD(1)
        .r(0).fr(1).K('guy')
        .shootOnInt(.2)
        .cn('thrust')

    w.cl('bul', 'bad', function (b){

        if(this.B()){this.B().kill()}
        if( b.B()) {b.B().kill()  }
    })
}
WAR = function(){W({g:0})
    var n = 0, x = 50, Y = 50
    w.cl('bul', 'bad', function (bad) {
        this.B().kill();
        bad.B().kill()
    })
    _.t(10, function () {
        w.y(x += 4, Y += 2, 3,'-')
            .K('bad').rt(R(90))
            .push(20,'+')
            .shtEv(300, 'deathBall')
    })
}
STUM = function(){W({g:3})
    y=w.y(300,400,3,'-')
    _.ev(.1,function(){
        var v=y.v( 0 , 1.5 )
        v=V( M.tD(v.x), M.tD(v.y) )
        y.I(0,v.y/5).rt(2,'+')
    })
}

GG=function(){W({g: 0}).Y()

    w.gG(100,100); w.gG(200,200); w.gG(300,300)

}
GREEN=function(){W({w:'@',g:0})
    y= w.y(400,200).K('pop')
    w.gG(400,400)
}
COINWARP=function(){W({g:0, w:0}).Y()
    y.warp()

    score=0
    badScore=0
    // p = w.ship().K('player pop').warp()
    //p= w.p(100,100, 'thrust').Y(200).horizCenter().aD( 10000 ).lD(0).K('pop').warp()


    gg = w.gG( 300,300 ).warp()

    _.ev(1,function(){
        w.coin().sen(1)
    })
    /*
     w.beg(function(cx){var fixt
     cx.with('coin','player', function(){this.B().kill()
     score++})
     cx.with('coin','greenGuy', function(){
     this.B().kill()
     badScore++
     })
     })
     */
    // w.coll('coin','player', function(){this.B().kill(); score++})
    // w.coll('coin','gg', function(){this.B().kill();badScore++})
    /*
     // w.class('coin')
     //   .with('player', function(c){c.setDestroy();score++})
     // .with('greenGuy', function(c){c.setDestroy();badScore++})
     w.class('coin').with({
     player: function(){score++; return true},
     greenGuy: function(){badScore++; return true}
     })

     */
    _.ev(3,function(){
        w.pen( score + ' / '+ badScore)
    })

}


SPACEMAZE=function(){W({g:0,w:0})
    _.t(30, function(){w.D(R(1000,-500), R(800, - 400), 'w', 2).d(0).r(2)})
    grid= w.grid([
        [1,0,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,0,1],
        [1,0,0,0,1,0,0,0,1],
        [1,0,1,0,1,0,1,1,1],
        [1,0,1,0,1,0,0,0,1],
        [1,0,1,1,1,1,1,0,1],
        [1,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1]


    ],  100, -100, 14, 40)// grid.aD(1)
    p= w.p(220, 70,2.5, 'thrust').aD( 10000 )
        .track()//.follow(300, 150)
    score=100
    cjs.t(function(){grid.aV(.2) })//w.s.HUD.pen(score)
    w.b(function(cx){if(cx.w('player', 'grid')){ score--}})
}
SPACEYOYO=function(){W({g:0,w:0})
    w.stars()
    p = w.p('thrust','+')
    star = w.sun(200,200)
    w.spg(p,star).fq(3).d(4)
}


HOOPS=function(){W({g:0,w:0})

    w.S(10,300,'b',40,920) //left
    w.S(1100, 300, 'w',40, 380)

    w.S(250, 10,'r', 800, 40)
    w.S(730, 10, 'r',800, 40)
    w.S(250, 590,'r', 800, 40)

    w.S(730, 590, 'r',800, 40)//b

    w.me(100,100).thr()

    _.t(20, function(){
        w.D(400,300,'w',20).r(1).bS('sun')
    })

}


BADDIES=function(){W(); w.goomba(); w.bobom(200,200)}



//

PL=function (cn) {W();  df= cn||
'slide'
    //'jumper'
    cn = _pam.toLowerCase() || df
    p = w.player(400, 400, 4, cn)
}
