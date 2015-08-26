


ONOFFTICK = function () {
    W({w: 0})
    //will break if u change it
    fun = w.s.t(ball)
    $.in(3, function () {
        w.s.xT(fun)
    })
    function ball() {
        if (R(5) < 1) {
            w.ball()
        }
    }


}


FANCYEDIT = function (x, y) {


    z()

    canvas = $.canvas('g', 400)
    stage = new cjs.Stage(canvas[0]).tick()
    frame = $.dragFrame(theSpan = $.span())

    theSpan.A(
        $.button('X', function () {
            frame.remove()
        }),
        $.button('pics', function () {
            $.imagesDiv(stage)
        }),

        $.button('transform'),
        $.button('text'),

        $.button('paint', function () {

            _paintColor = '#0FF'

            var size = 10, oX = 0, oY = 0, shape

            var paintStage = $.dragStage()

            // stage.a(  EaselText('finger paint', 'b', 40, 100, 10))

            paintStage.bm(
                stage.du(), //?

                function (m) {


                    m.XY(40).sXY(.4)


                    stagePainter(paintStage)


                })


        }),
        $.button('cut'),

        $.button('save'))

    theSpan.A($.br(), canvas)

    theSpan.A($.div().A(
        $.button('clear', function () {
            stage.removeAllChildren()
        }),

        $.button('flat', function () {

            stage.removeAllChildren()

            stage.bm(stage.toDataURL(), function (bm) {
                bm.drag()
            })

        }),

        $.button('clone', function () {


            var newSpan = $span()

            var newStage = dragStage(newSpan)


            newStage.bm(stage.du(), function (bm) {
                SL(bm)

            })

        }),

        $.button('recur', function () {

            stage.bm(stage.du(), function (bm) {

                bm.sxy(.4)
                SL(bm)

            })
        }),

        $.button('copy', function () {

            _copy = stage.du()


        }),

        $.button('paste', function () {
            stage.bm(_copy, function (bm) {
                bm.drag()
            })
        }),

        $.button('replace', function () {

            stage.rm()
            stage.bm(_copy, function (bm) {
                bm.drag()
            })

        })
    ))

    theSpan.dblclick(function () {
        $('button').toggle()
    })


    theSpan.A()


}
ICEN=function(){Q(['guy','me'],function(){//z()
    s= new cjs.Stage( $.can( 'p', 1200, 600 )[0] ).A(); s.c=$(s.canvas)
    //s.bm('me', function(bb){b=bb.drag() })
    s.qB('guy').XY(300,300).spin()
    s.qB('guy').XY(300,300).sXY( .5, .3).spin()
    T.t(function(){ s.u() })
    _.in(3, function(){   T.f(1)   })
    _.in(9, function(){  T.f(1000)  })
})}
DRAG=function(){z()
    $.dragStage()
}


NEWSTG=function(){z()
    //three ways to make a new stage
    s = cjs.s('r',100 ).A().bm('me')
    s.can.drag()
    c= $.canvas('b',100).A().drag().XY(400)
    s1=cjs.s(c)
    s1.A().bm('me')
    c2= $.canvas('b',100).A().id('someId').drag().XY(300,100)
    s2=  cjs.s(['someId'])
    s2.tick().bm('me')

}


TEXT = function () {W()
    w.S(300, 100, 'z', 1500, 1)
    w.d('r', 300, 100)
    w.i.T('top').XY(300, 100).bl('+')  // should become + (counterintuitive i know.. but i noticed and fixed it!)
    w.i.T('bottom').XY(500, 100).bl('-')
    w.i.T('middle').XY(700, 100)
    w.dot(300, 400)
    nice = w.i.T('nice', 135, 'x', 300, 400)
    /*
     w.i.T('linewidth 0').XY(100,300).lW(0)
     w.i.T('linewidth null').XY(100, 500).bl('bottom')
     w.i.T('linewidth 100').XY(100, 700).drag().bl('middle').lW(800)
     w.i.T('lineheight -100').XY(700,300).lH(-100)
     w.i.T('lineheight 0').XY(700,500).lH(0)
     w.i.T('lineheight 100').XY(700,700).lH(100)
     w.i.T('linealign left').XY(600, 100)
     w.i.T('linealign right').XY(600, 200).tA('right')//.bl('bottom')
     w.i.T('linealign center').XY(600, 300).tA('center')//.bl('middle')
     */
    hello = 'fasdafsafsdfadsafafdsfadsafdsafdsfsd'
    w.show('hello')
}
SPEECH=function(){W()._(function(){
    t = w.i.T( 600, 300, 'hiiiiiiiiii', 200, 'r')
    ct = w.i.ct().drag()
    ct.h(200, 150).cir(130,'w').cir(100,50,100,'w')
    ct.T(250,150, 'yoyoyoo', 60, 'd')
    _.in(10, function(){ct.rm()})
    //ct.tw( [{   sxy:.1, x:x-250, y:y-250 }, 20000])
})}

TFSET= function(){


    W()._(function(){

        w.i.qB('me').grow().drag()

        i= w.i.qB('me').XY(200,200)

        ball = w.ball()

        _.in(3, function(){w.C('b'); ball.bS(i)})
        //  me.startMoving(10, 10)
        T.t(function(){iS = i.inStage()
            $l(iS)
        })
        b= w.i.qB('me')
        b.setTransform(0,0,2,.5,0,40,4,2,3)
        //m = b.getMatrix()

        function tf(a,b,c,d,e,f,g,h,i){

            return this.x=a||0,
                this.y=b||0,
                this.scaleX=null==c?1:c,
                this.scaleY=null==d?1:d,
                this.rotation=e||0,
                this.skewX=f||0,
                this.skewY=g||0,
                this.regX =h||0,
                this.regY =i||0,
                this}

    })
}

SETTRANSFORM=function(){s = $St(800).bm('me',function(me){
    b=me
    b.setTransform(0,0,2,.5,0,40,4,2,3)
    m = b.getMatrix()
    function tf(a,b,c,d,e,f,g,h,i){
        return this.x=a||0,
            this.y=b||0,
            this.scaleX=null==c?1:c,
            this.scaleY=null==d?1:d,
            this.rotation=e||0,
            this.skewX=f||0,
            this.skewY=g||0,
            this.regX =h||0,
            this.regY =i||0,
            this}})}


HANOI=function(){









}
isoo=function(){


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

        _.times(howMany, function(i){

            x = x+ 40
            y = y- 20
            var t= new Tile()

            t.container.XY(x,y)

            stage.A(t.container)

            createjs.bindSlide(t.container)

            t.col= i

            t.row= r

            row.push(t)

        })

        return row}
    isoGrid=function(n1,n2,x,y){ x=x||0; y=y||0

        var grid=[]

        _.times(n2,function(i){
            x=x+40
            y=y+20

            var row = isoRow(i,n1,x,y)

            grid.push(row)

        })




        return grid}

    tileCoin=function(){

        return cjs.circle(15,'yellow', 'black')

    }

    tileBad=function(){ return cjs.circle(15,'green', 'orange')}

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


};isoo
CONNECT=function(){  St() //m$$('location=location')

    // st= $St('p', 1000)
    pink = J.circle(300, 'pink', 'purple').XY(520, 500)//.rXY(100)
    st.A(pink)
    ct = $Ct()
    st.A(ct)
    green = cjs.circle( 200,'green','purple').XY(320,300)//.rXY(100)
    yellow = cjs.circle( 100,'yellow','purple').XY(250)
    red= cjs.circle( 40,'red','purple').XY(200,100)
    orange = cjs.circle( 20,'orange','purple').XY(300)
    ct.A(green, yellow, red, orange )
    LS(yellow, ct)
    SL(green)
    SL(green,pink)

    SL(yellow)
    SL(red,ct)
    SL(orange, red)

}
MATRIX1=function(){// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')//SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')


    stage = St()

    $.d('b', 50, 50).A()

    //stage = s = cjs.stage(1600,1000).tick().A()

    // on stage enter, change background color, though you
    // cant see it here because stage fills screen
    // this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
    st.on('e', co)

    //make a container
    st.ct(function(c, s){

        //the little me clicks do not hit the 'big' me underneath it.  that's normal.
        //but it does hit the container.  but this example shows off 'remove', so it only hits once
        //however, it continues to propogate on to the container. hmmm..

        c.bm('me',
            function(b){
                b.sXY(.2).XY(100,80)
                b.on(click, function(){$l('lit')},'/')  //on click, log('lit'), just once (remove listener)!

            })





// the middle size me demonstrates stopPropogation
// if you click it, the container does not feel the click

        c.bm('me',function(bm){
            bm.sXY(.4).XY(100,180)
            bm.$( function(){$l('mid')}, '-')  //on click, log('mid'), and stop prop
        })

        c.bm('me',function(bm){
            bm.sXY(1.5)
            bm.on('click',function(){$l('big')})  //on click, log('big')
        })    //on click, log('con')
        c.on('click',  function(){$l('con')})
    })


    st.ct(   function(ct){c=ct
            var vn=0, rvn=0, on=0, ron=0

            ct.X(200)

            ct.mug(function(b){b.sXY(.8).XY(200,80)})
            ct.mug(function(b){b.sXY(.8).XY(100,280)})
            ct.mg(function(b){b.sXY(.8).XY(340,180)})

            //this shows over/out vs rollover/rollout
            //over/out get retriggered when switching between connected sprites
            //rollover/rollout does not because it is still touching 'something'
            ct.on('mouseover',function(){c.X(10,'+');$l('v: '+vn++)})
            ct.on('rollover',function(){c.X(20,'-');$l('rv: '+rvn++)})
            ct.on('mouseout',function(){c.Y(10,'+');$l('o: '+on++)})
            ct.on('rollout',function(){c.Y(20,'-');$l('ro: '+ron++)})
        }
    ).MV(40)


    st.ct(function(ct, st){

        ct.X(700)
        ct.mug(function(bm){bm.sXY(.8).XY(200,80)})
        ct.mug(function(bm){bm.sXY(.8).XY(100,280)})
        ct.mug(function(bm){bm.sXY(.8).XY(340,180)})

        //this example shows which sprites are acted upon with over/rollover
        //over only affects one
        //rollover affects ALL
        //if you enter a sprite from outside, they all grow (via rollover),
        //and the one sprite grows double (via over)

        ct.on('mouseover',function(){$l('mouseover'); this.sXY(.01,'+') })
        ct.on('rollover',function(){$l('rv'); this.sXY(.01,'+')})
        ct.on('mouseout',function(){ })
        ct.on('rollout',function(){ })

        // in summary,
        // rollover sees all touching sprites as just one sprite, ignoring crossing the mouse over their boundaries..
        // BUT, they will all recieve events separately

    }).MV(40) //??? mouse events? speed for some mouse checking thing
    st.ct(function(ct,st){
        ct.x = 1400
        ct.bm('me',function(bm){
            //make the little me slide the entire container
            //it acts as a handle! (for its container)
            lit = bm.sXY(.2).XY(100,80)
            SL(bm, ct)
            ctr.bm('me',function(bm){
//big me will scale the little me
                big = bm.sXY(2).XY(100,180)
                SC(bm, lit)
                ct.bm('me',function(bm){ bm.sXY(.6).XY(150,180).SL(); RT(bm, big)})})
        })

//guy slides stage
        ct.bm('guy',function(bm){bm.sXY(.4).XY(100,180); SL(bm, st)})
    })




}
MATRIX0=function(){ z(); $l('matrix')

    st = stage = $St(1600,1000)

// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')
// SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')

    $.d('b', 50, 50).A()


    // on stage enter, change background color, though you
    // cant see it here because stage fills screen
    // this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
    st.on('mouseenter', function(){$('body').C($r())})

    st.A( ct=container=c= $Ct()  )

    ct.bm('me',  function(bm){
        //b.sxy(.2).xy(100,80)

        //b.o('$', fL('lit'), '/')  //on click, log('lit'), just once (remove listener)!

    })



    //make a container
    st.ct(function(c, s){

        //the little me clicks do not hit the 'big' me underneath it.  that's normal.
        //but it does hit the container.  but this example shows off 'remove', so it only hits once
        //however, it continues to propogate on to the container. hmmm..



// the middle size me demonstrates stopPropogation
// if you click it, the container does not feel the click
        ct.bm('me',function(b){
            b.sXY(.4).XY(100,180)
            //b.o('$', fL('mid'), '-')  //on click, log('mid'), and stop prop
        })


        ct.b('me',function(b){
            b.sXY(1.5)
            // b.o('$',fL('big'))  //on click, log('big')

        })

        //on click, log('con')
        //c.o('$',  fL('con'))

    })

    st.ct(  function(c){

        var vn=0,
            rvn=0,
            on=0,
            ron=0


        c.X(200)


        c.mug(
            function(b){
                b.sXY(.8).XY(200,80)
            })


        c.mug(
            function(b){
                b.sXY(.8).XY(100,280)
            })


        c.mg(
            function(b){
                b.sXY(.8).XY(340,180)
            })

        //this shows over/out vs rollover/rollout
        //over/out get retriggered when switching between connected sprites
        //rollover/rollout does not because it is still touching 'something'

        // c.o('v',function(){c.x(10,'+');$l('v: '+vn++)})
        //c.o('rv',function(){c.x(20,'-');$l('rv: '+rvn++)})
        // c.o('o',function(){c.y(10,'+');$l('o: '+on++)})
        //  c.o('ro',function(){c.y(20,'-');$l('ro: '+ron++)})

    }  )//.MV(40)

    st.ct(function(c,s){

        c.x(700)
        c.mg(function(b){b.sxy(.8).xy(200,80)})
        c.mg(function(b){b.sxy(.8).xy(100,280)})
        c.mg(function(b){b.sxy(.8).xy(340,180)})

        //this example shows which sprites are acted upon with over/rollover
        //over only affects one
        //rollover affects ALL
        //if you enter a sprite from outside, they all grow (via rollover),
        //and the one sprite grows double (via over)



        c.o('v',function(g,e){
            $l('v')
            g.sxy(.01,'+')})

        c.o('rv',function(g,e){
            $l('rv')
            g.sxy(.01,'+')})

        c.o('o',function(q,e,g){ })
        c.o('ro',function(q,e,g){ })


        // in summary,
        // rollover sees all touching sprites as just one sprite, ignoring crossing the mouse over their boundaries..
        // BUT, they will all recieve events separately

    }).MV(40)

    st.ct(function(ct,st){

        ct.X(1400)

        ct.bm('me',function(bm){

            //make the little me slide the entire container
            //it acts as a handle! (for its container)
            lit=bm.sXY(.2).XY(100,80)
            SL(bm,ct)


            ct.bm('me',function(bm){
//big me will scale the little me
                big=bm.sXY(2).XY(100,180)

                SC(bm,lit)

                ct.bm('me',function(bm){ bm.sXY(.6).XY(150,180)
                    SL(bm)
                    RT(bm, big) })
            })

        })


//guy slides stage
        ct.bm('guy',function(bm){
            bm.sXY(.4).XY(100,180)
            SL(bm, stage)
        })



    })




}
MATRIX=function(){// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')//SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')

    z()

    $l('matrix')


    st=stage=s=createjs.stage(1600,1000).A().tick()


    // on stage enter, change background color, though you
    // cant see it here because stage fills screen
    // this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
    st.on('mouseenter', function(){$('body').C($r())})

    st.A( ct=container=c=new createjs.Container()  )

    ct.bm('me',  function(bm){

        bm.sXY(.2).XY(100,80)
        bm.on('click', function(){
            $l('lit')}, this, true) //just once

    })

    //make a container
    st.container(function(ct, st){

        //the little me clicks do not hit the 'big' me underneath it.  that's normal.
        //but it does hit the container.  but this example shows off 'remove', so it only hits once
        //however, it continues to propogate on to the container. hmmm..

// the middle size me demonstrates stopPropogation
// if you click it, the container does not feel the click
        ct.bm('me',function(bm){  //future: c.bm('me', .4, function(bm){})
            bm.sXY(.4).XY(100,180)
            bm.on('click', function(e){$l('mid')
                e.stopPropagation()})
        })

        ct.bm('me',function(bm){
            bm.sXY(1.5)
                .on('click',function(){$l('big')})
        })

        ct.on('click', function(){$l('con')})

    })



}
