ENTERST =function(){St()
    st.bm('me')
    st.on('mouseenter', function(){$('body').pp('once<br>')}, null, true)
    st.on('mouseenter', function(){$('body').pp('many<br>')}, null, false)
}
HANDEV=function(){St()

    st.bm('me', function(b){me=b
        cb = b.on('pressmove', function(){
            this.x++
        })
    })

    st.bm('guy', function(b){
        b.handleEvent=function(){
            this.y++}
        b.on('pressmove', b)
    })
}
RMEVT=function(){St()



    st.bm('me', function(b){me=b
        cb = b.on('pressmove', function(){this.x++})
    })

    st.bm('guy', function(b){

        b.handleEvent=function(){
            this.y++
            me.off('pressmove', cb)
        }

        b.on('pressmove', b)
    })



}
BUBBLE=function(){St()


    output = $T(
        "try clicking on the background vs the label text\n\nthe background & label are both inside of a Container named 'button'",
        "13px courier").lWH(280,13).XY(190,10)

    bg= $H().n("background")

    bg.graphics.f("red").rr(0, 0, 150, 60, 10)
    lb= $T("click me!", "bold 24px Arial", "#FFFFFF").XY(150/2, 60/2).n('label').tA("center")//.tB("middle")

    // setting mouseChildren to false will cause events to be dispatched directly from the button instead of its children.
    // button.mouseChildren = false;
    st.A(bt= $Ct().XY(20).n('button').A(bg, lb), output)

    // set up listeners for all display objects, for both the non-capture (bubble / target) and capture phases:

    _.e([st,bt,lb,bg], function(tg){tg.$( handleClick, false); tg.$( handleClick, true)})

    st.u()


    function handleClick(e){
        if (e.currentTarget == st  && e.eventPhase == 1) { output.text = "target : eventPhase : currentTarget\n" }// this is the first dispatch in the event life cycle, clear the output.
        output.text += e.target.name + " : " + e.eventPhase+" : " + e.currentTarget.name+"\n";
        if (e.currentTarget == st  && e.eventPhase == 3) {    st.u()  }// this is the last dispatch in the event life cycle, render the stage.
    }


}
BOWL=function(){St()


    ct= container = c = $Ct().a2(st)


    plX= st.W()/2

    plY=150

    plR=100

    plr=75 // this seems to determine the radius of the 'cluster' of balls

    oRng=8 //outer ring

    nRng=3// number of rings
//when set to three, it seems like middle ring is 3 less than outer, and inner ring is 1

    circle = cjs.circle(plX, plY, plR, 'yellow')

    container.A(circle) // cr = Hx().c(plR,'y').xy(plX,plY)


    rngSp = plr/(nRng-1)


    aA=[]


    var ast = function(x,y,r,m,f){
        return {x:x, y:y, radius:r, m:m,
            f:f, vX:0, vY:0, player:false} }

    _.t(nRng, function(r){var crR=0, ang=0, rngR=0
        if(r==nRng-1){crR=1}

        else{
            crR=oRng-(r*3)
            ang=360/crR
            rngR=plr-(rngSp*r)}
        _.t(crR, function(a){var x=0,y=0
            if(r==nRng-1){x=plX;y=plY}
            else {
                x=plX+(rngR* M.cos((ang*a)* M.PI/180))
                y=plX+(rngR* M.sin((ang*a)* M.PI/180))-350}
            aA.push( ast(x,y,10,5,0.95) )
            ct.A(J.cir(10,'z').XY(x,y))


        })

    })
}
GRID=function(){St()
    ct=   st.ct()
    ct.SL()

    rows = 5;cols=6;sqP=12;sqS=80

    sqSP = sqS + sqP
    _.t(rows * cols, function(i){
        drawSquare(ct, sqSP * (i % cols), sqSP * M.fl(i/cols)
        )
    })

    function drawSquare(ct,x,y){
        var h  = $H()
        h.a2(ct).f($r())
        h.graphics.dr(5, 5, 70, 70)
        if(x){h.X(x)}
        if(y){h.Y(y)}
        return h
    }
}
TXH = function(){St()

    h = $H().a2(st)

    h.f('red').s('black')

    h.graphics.dc(400,400,200)
    h.graphics.dr(100,0,200,200)
}
ZX=function(){
    z()
    a = $.editDiv().A().C('a')
    b = $.editDiv().A().C('b')
}
SPACE=function(){St().bgI('/space.jpg').mug(function(m){m.sXY(.2).dg().RT().SL()})}
BOXES=function(){St()

    $.Ct().A(

        $.R().A(

            $.d('y').pad(20).A(
                $.h1('controls'),
                $.bt('fall',function(){ball.fall(box)}),
                $.bt('fall+',function(){$.ev(1,newBall)})
            ) ) )

    $.kD('r',function(){box.X(10,'+')})
    $.kD('l',function(){box.X(10,'-')})

    st.A(box=Box().XY(300,450))
    st.A(ball=Ball(40,'r','o').XY(300,100))
    newBall=function(){var ball = Ball(40, 'r', 'o').XY(_r(600), 100)
        st.A(ball)
        ball.fall(box)
    }
}
SHIP=function(){St()

    angleInDegrees =function self(y,x){

        if(O(y)){return self(y.vy, y.vx)}

        var d = tDeg(M.atan(y/x))

        if(x<0){
            d = M.abs(d)+90;
            if(y<0){d=M.abs(d)+90}}

        return d}


    ship=function(st){
        h=  t = $H().XY(100).rY(20).vX(1).vY(1)
        h.f('o').s('z').mt(0,0).lt(0,40).lt(80,20).lt(0,0)
        $.kD('d',function(){t.rt(6,'+')})
        $.kD('u',function(){t.rt(6,'-')})
        if(st){
            st.A(h)
            st.MD( function(e){
                t.vX((e.rawX- t.x)/100, '+' )
                t.vY((e.rawY- t.y)/100, '+')
                if(t.vx>10){t.vX(10)}
                if(t.vy>10){t.vY(10)}
            })
        }
        $.ev(.05, function(){
            h.X(t.vx,'+').Y(h.vy,'+')
            h.rotation = angleInDegrees(t)

        })
        return t}


    PL=1;
    aA=[]
    div = $.d('y').pad(10)

    div.A(

        $.h1('controls'),

        b1= $.bt('start',function(){PL=1;b1.hd();b2.sh()}),

        b2= $.bt('stop',function(){PL=0;b2.hd();b1.sh()}).hd(),
        $.bt('sgun',function(){sgun(guy)}) )
    boot = $.boot()
    boot.A(div, st.canvas)
    guy = ship(st)
    // kD('s',function(){ $l('bang')})

    _.t(100,function(){var a=ast();a.a();a.p()})
    st.t(function(){ if(PL){ _.e(aA,function(a){  a.u()  })}} )

    sgun(guy)
}
SOLAR=function(){z(); st=  $St(1000,500).bgI('/space.jpg')

    st.bm('guy', function(bm){guy=bm
        bm.dg()
        bm.vXY(_.random(10)+1,_.random(10)+1).XY(_.random(800),_.random(600))
        bm.startMoving()
        bm.warp()
        st.bm('sun', 0.2, function(bm){ sun=bm
            bm.dg()

            bm.startMoving(4,10)
            bm.warp()
            $.ev(.1,function(){
                if(cjs.bulletHit(sun,guy)){
                    sun.sXY( sun.scaleX + .1, sun.scaleY + .1  )
                    sun.vx += .2;
                    sun.vy += .2
                }})
        })
    })

    st.mug(0.4, function(bm){
        bm.X(400).dg().bounce(0)
        bm.startMoving(10,10)
    })


}
SHOOTY=function(){St()
    $.ghost=function(){ return $.c('X', 500, 500).fit('me').al(.1)} // how cool.. it 'steals' the drag because its on top but looks like its below

    st.mug(function(m){
        m.XY(100, 100).WH(150)
        SL(m)
        //key(m, '-')// ugun(mug)
    })
    c = $.ghost().XY(10,10).A().dg()
}
HIT=function(){St()

    st.mug(function(mug){mug.dg()

        st.bm('flame', function(flame){b=flame
            b.dg()

            b.sXY(.1)
                .rXY( flame.getBounds().width / 2, 500).XY(400, 400)

            //st.$$(  function(e){flame.x= e.rawX;  flame.y= e.rawY  })
            st.MD( function(e){
                localCoords= mug.globalToLocal(e.rawX, e.rawY)
                hit = mug.hitTest( localCoords.x, localCoords.y )
                if( $l(hit) ){ $l('hit'); st .bgC('red')} //;$l( e.X+ ' '+ e.Y )
                else {$l('no hit'); st.bgC('yellow')}
            })

            st.MM( function(e) {
                localCoords = mug.globalToLocal(b.x, b.y)
                hit = mug.hitTest(localCoords.x, localCoords.y)
                if( hit  ){  //$l('HIT: '+ e.rawX+ ', '+ e.rawY);
                    st.bgC('red') }
                else { $l('NO HIT'); st.bgC('yellow')}
            })})})
}
HITCIRCLES=function(){z()

    var pt
    st  = $St(1000, '+') // look no .tick() necesary!! look below :)
    ct = $Ct()
    st.A( ct.XY(150) )
    _.t(25,function(){$H().XY(randomLocation(),randomLocation()).f(randomHSL()).dc(30).a2(ct)})

    J.Ticker.on("tick", function (e){
        ct.rotation += 3
        n =ct.getNumChildren()
        ct.ch(function(ch){
            uM = ch.underMouse()
            ch.alpha = ch.underMouse()? 1 : 0.1
            pt = ch.globalToLocal(st.m().x, st.m().y)
            if (st && st.mouseInBounds && ch.hitTest(pt.x, pt.y)){ch.al(1)}
        })

    })

    function randomLocation(){return M.random()*300-150}
    function randomHSL(){return J.Graphics.getHSL(M.random()*360,100,50)}

}
st=cjs.Stage.prototype
SHOOTERCAN=function(){




    function startGame (){z()


        game=true
        Coins=[]
        Aliens=[]
        Bullets=[]
        can = $.canvas('yellow', 900, 500).A()

        shooter = new Shooter()

        shooter.draw()

        //   _.times(10,function(){Coins.push(Coin())})
        //   _.times(15,function(){Aliens.push(Alien())})


        setInterval(function(){

            shooter.update()


            can.clear()
            shooter.draw()
        }, 400)
    }

    function Shooter(){
        this.x= 100
        this.y= 200
        this.vx = 2
        this.vy = 2
        this.radius = 20

        this.update =  function(){
            this.x = this.x + this.vx
            this.y = this.y + this.vy}

        this.draw =function(){

            can.circle(this.x, this.y, this.radius, 'blue')

        }
    }

    updateScreen=function(){



        can.clear()

        shooter.draw()
    }
    updateGame=function(){

        shooterUpdate()

    }

    updateGameX=function(){

        if(game){
            shooter.vx += cap(-5,5)( (e.x - shooter.x)/300 )
            shooter.vy += cap(-5,5)( (e.y - shooter.y)/300 )
            Bullet(shooter.x, shooter.y, shooter.vx, shooter.vy)
        }  else {

            alert('game over!')

            if((e.x>450)&&(e.y>290)

                &&(e.x<450 + textWidth)

                &&(e.y<290 + textHeight)){reload()}}

        can = $.canvas(800, 600)
        can.click(function(x,y){
            shooter.vx+= cap(-5,5)((x-shooter.x)/300)
            shooter.vy+= cap(-5,5)((y-shooter.y)/300)
            Bullet(shooter.x, shooter.y, shooter.vx, shooter.vy)
        })


        b= bad(x).d()
        c= coin(x).d()
        g= guy(x)

        I(function(){

            x.X();
            b.update().draw();
            g.update().draw()

        }, 30)




        // _.each(cat(Bullets, Coins, Aliens), function(a){a.draw(); a.update()})
    }

    startGame()

}
function Alien(x,n,n1){

    if(N(n1)){var a=[]
        _.times(n1,function(){
            a.push(Bad(x,n))})
        return a}

    if(N(n)){return Bad(x).du(n)}

    var b={
        x: _.random(1200),
        y: _.random(600),
        radius: _.random(15),
        vx: _.random(10)-5,
        vy: _.random(10)-5
    }

    b.draw=function(){
        //x.cir(b.x,b.y,b.r, 'rgba(124,252,0,0.5)' ,'z')
        x.circ(b.x,b.y, b.r,'g','z')
        x.circ(b.x,b.y, 15,'o','z')

        return b}


    b.update=function(){

        b.radius *= 1.005

        b.x = warp(0,1200,20)(b.x+b.dx)

        b.y = warp(0,600,20)(b.y+b.dy)

        return b}


    b.drawUpdate = b.du=function(n,n2){
        if(N(n)){
            return setInterval(function(){  b.du() },  n)
        }

        return b.draw().update()
    }

    return b}
function Coin(x,n,n1){

    if(N(n1)){
        var a=[];
        _.times(n1,function(){
            a.push( Coin(x, n) )});
        return a
    }

    if(N(n)){

        return Coin(x).du(n)
    }

    var c={
        x: _.random(1200),
        y: _.random(0,600),

        radius: 10,

        vx: _.random(0,10)-5,
        vy: _.random(0,10)-5}

    c.draw=function(){
        x.circle(this.x, this.y, this.radius, 'b', 'y')
        return this
    }

    c.update=function(){
        c.x= warp(0,1200,20)(this.x + this.vx)
        c.y= warp(0,600,20)(this.y+this.vy)
        return c}

    c.drawUpdate=function(n,n2){
        if(N(n)){return setInterval(function(){c.drawUpdate()}, n)}
        return c.draw().update()}

    return c}
//bluecircle game function //never used
coinHits=function(){

    _.each(CoinsArray,

        function(coin, coinId){

            //??? hitTest?
            if( xyc( coin.x, coin.y, game )){

                delete CoinsArray[coinId]

                game.coinScore += 1
            }
        })




    _.each(
        As,function(a,A){

            if (
                xyc(g.x,g.y,a)){
                g.h-=1}

            _.each(Bs,function(b,B){

                if (xyc(b.x,b.y,a)){
                    delete Bs[B]

                    delete As[A]

                    As.push(bad())}})

        })

}
SHADOW=function(){b2d.levelWarp()
    p.linDamp(1).warp()
    setTimeout(function(){
        p.sprite.shad("y", 0, 150, 300)
        badGuy.sprite.shad('o', 40, 40, 40)
    },100)

    $.space(function(){p.polyBul()})

    badGuy=w.badGuy(400, 200).warp().den(.1)
    I(function(){w.s.pen('badGuy health: ' + badGuy.health)}, 200)

    $(w.s.back.canvas).C('p')
    s= w.s.back
    s.bm('me' , function(bm){

        bm.drag().shad('blue', 125,  125,  50).XY(100,100).sXY(.6)

    })

    s.bm('guy', function(bm){

        bm.drag().shad('r', 100,100,10).XY(300,200).sXY(.6)
    })

    s.bm('me' , function(bm){
        bm.drag().shad("z", 25, 25, 50).XY(500,100).sXY(.6)
    })
}
old=function() {
    CANON = function () {
        St()

        canon = function (box, x, y) {
            var vx, vy, ball
            x = x || box.x || 100
            y = y || box.y || 500

            st.A(ball = Ball(12).XY(x, y))

            if (box.rotation > 0) {
                vx = 8 * (1 + M.toRads(box.rt()))
                vy = 16 * (1 - M.toRads(box.rt()))
            }
            else {
                vx = 8 * (-1 + M.toRads(box.rt()))
                vy = 16 * (1 + M.toRads(box.rt()))
            }

            st.t(function () {
                vy -= 0.5
                ball.X(vx, '+').Y(vy, '-')
            })
        }

        st = $St(1000, 600)
        box = Box(20, 100).X(500).B(600)
        st.A(box)
        kD('l', function () {
            box.rt(4, '-')
        })
        kD('r', function () {
            box.rt(4, '+')
        })
        kD('d', function () {
            box.rt(0)
        })
        kD('s', function () {
            canon(box)
        })

        $.ev(.5, function () {
            var degs = M.toRads(box.rotation)
            canon(box, (500 + M.acos(degs) * 30) + box.x - 540,
                (500 + M.asin(degs) * 30) + box.y - 540)
        })


    }

}
domEl=function(){


    cjs.element = function(a){return new cjs.DOMElement(a)};
    ELEMENTS=function(){z();

        div = $.div('red', 400, 400).P('a').A().A( $.ip() );
        s = stage = cjs.stage('yellow', 1000).tick().A();
        elem  = new cjs.DOMElement( div[0] );

        //stage.A(el)



        // tw(el, [{x:300,y:300},2000])

        // tw([el,'l'],[{r:360, sx:.5, sy:.5},8000],{r:0},[{r:360, sx:1, sy:1},8000])

    }


};domEl();
orbs=function(){
    //this is from iphone book createjs games


//chapter8
    ORB=function(){


        var Orb = function(){
            this.initialize()}

        Orb.prototype = new createjs.Shape()

        Orb.prototype.Shape_initialize = Orb.prototype.initialize

        Orb.prototype.initialize = function(){ this.Shape_initialize() }

        window.Orb = Orb

    }








//this is to teach stage machine
    ORBS=function(){z()

        SuperStage(500).a()




        (function(){

            window.game = window.game || {}

            var GameStates = {
                MAIN_MENU:0,
                RUN_SCENE:1,
                GAME:10,
                GAME_OVER:20
            }

            var GameStateEvents = {

                MAIN_MENU: 'main-menu-event',
                GAME_OVER:'game-over-event',
                GAME:'game-event'

            }

            window.game.GameStates = GameStates
            window.game.GameStateEvents = GameStateEvents


        }())


        (function(window){

            window.game = window.game || {}

            function GameMenu(){this.initialize()}

            var p =GameMenu.prototype = EaselContainer()

            p.Container_initialize = p.initialize
            p.titleTxt= null
            p.count = 0

            p.initialize = function(){

                this.Container_initialize()
                this.addBG()
                this.addTitle()
                this.addOrbs()
                this.addButton()
            }

            p.addBG=function(){

                var bg= new createjs.Shape()

                bg.graphics.beginFill('0').drawRect(0,0,canvas.width, canvas.height)
                this.addChild(bg)

            }

            p.addTitle = function(){

                this.titleTxt=EaselText("ORB DESTROYER!", 'b', 40)
                this.titleTxt.x(canvas.width/2)
                this.titleTxt.y(200)
                this.titleTxt.textAlign = 'center'
                this.addChild(this.titleTxt)
            }


            p.addOrbs=function(){

                var i, orb
                var orbContainer = EaselContainer()
                var numOrbs = 5
                var orbSize= 20
                var orbPadding = 10
                var orbsPosition = 300

                for(i=0; i<numOrbs; i++){
                    orb = new PulsingOrb('r', orbSize)
                    orb.x = i * ((orbSize * 2)+orbPadding)
                    orbContainer.a(orb)
                }

                orbContainer.x=orbContainer.y = orbsPositionthis.addChild(orbContainer)

            }





            p.addButton=function(){
                var btn, event
                btn = new ui.SimpleButton('Play Game')
                btn.on('click', this.playGame, this)
                btn.regX = btn.width/2
                btn.x = canvas.width/2
                btn.y = 400
                btn.setButton({upColor:'g', color:'r',borderColor:'b',overColor:'y'})
                this.addChild(btn)
            }

            p.playGame=function(e){this.dispatchEvent(game.GameStateEvents.GAME)}


            p.run=function(tickEvent){this.titleTxt.alpha = cos(this.count++ * 0.1) * .4 + .6}


            window.game.GameMenu=GameMenu

        }(window))

    }



}
PONG=function(){z()



    sCan().id('PongStage').w(480).h(320).a()

    var canvas; //Will be linked to the canvas in our index.html page
    var stage; //Is the equivalent of stage in AS3 and we'll add "children" to it
    var bg; //The background graphic
    var main; //The Main Background
    var startB; //The Start button in the main menu
    var creditsB; //The credits button in the main menu
    var credits
    var player; //The player paddle graphic
    var ball; //The ball graphic
    var cpu; //The CPU paddle
    var win; //The winning popup
    var lose; //The losing popup
    var playerScore; //The main player score
    var cpuScore; //The CPU score
    var cpuSpeed=6; //The speed of the CPU paddle, the faster it is the harder the game is
    var xSpeed = 5;
    var ySpeed = 5;
    var tkr = new Object;

    var preloader;
    var manifest;
    var totalLoaded = 0;

    var TitleView = new createjs.Container()


    Main=function(){

        canvas = document.getElementById('PongStage')
        stage = new createjs.Stage(canvas)
        stage.mouseEventsEnabled = true;

        manifest = [
            {src:"bg.png", id:"bg"},
            {src:"main.png", id:"main"},
            {src:"startB.png", id:"startB"},
            {src:"creditsB.png", id:"creditsB"},
            {src:"credits.png", id:"credits"},
            {src:"paddle.png", id:"cpu"},
            {src:"paddle.png", id:"player"},
            {src:"ball.png", id:"ball"},
            {src:"win.png", id:"win"},
            {src:"lose.png", id:"lose"},
            {src:"playerScore.mp3|playerScore.ogg", id:"playerScore"},
            {src:"enemyScore.mp3|enemyScore.ogg", id:"enemyScore"},
            {src:"hit.mp3|hit.ogg", id:"hit"},
            {src:"wall.mp3|wall.ogg", id:"wall"}
        ]
        preloader=new createjs.PreloadJS();

        preloader.onProgress = handleProgress;
        preloader.onComplete = handleComplete;
        preloader.onFileLoad = handleFileLoad;
        preloader.loadManifest(manifest);



        Ticker.setFPS(30);
        Ticker.addListener(stage);

    }


    function handleProgress(event){} //use event.loaded to get the percentage of the loading
    function handleComplete(event){}

    function handleFileLoad(event){
        var img = new Image();
        img.src = event.src;
        img.onload = handleLoadComplete;
        window[event.id] = new createjs.Bitmap(img)}


    function handleLoadComplete(event){
        totalLoaded++
        if(manifest.length==totalLoaded){addTitleView()}}



    addTitleView=function(){

        startB.x = 240 - 31.5;
        startB.y = 160;
        startB.name = 'startB';

        creditsB.x = 241 - 42;
        creditsB.y = 200;

        TitleView.addChild(main, startB, creditsB);
        stage.addChild(bg, TitleView);
        stage.update();

        // Button Listeners

        startB.onPress = tweenTitleView;
        creditsB.onPress = showCredits}




    showCredits=function(){
        // Show Credits

        credits.x = 480;

        stage.addChild(credits);
        stage.update();
        Tween.get(credits).to({x:0}, 300);
        credits.onPress = hideCredits;
    }

// Hide Credits

    function hideCredits(e)
    {
        Tween.get(credits).to({x:480}, 300).call(rmvCredits);
    }

// Remove Credits

    function rmvCredits()
    {
        stage.removeChild(credits);
    }

// Tween Title View

    function tweenTitleView()
    {
        // Start Game

        Tween.get(TitleView).to({y:-320}, 300).call(addGameView);
    }

// Add Game View

    function addGameView()
    {
        // Destroy Menu & Credits screen

        stage.removeChild(TitleView);
        TitleView = null;
        credits = null;

        // Add Game View

        player.x = 2;
        player.y = 160 - 37.5;
        cpu.x = 480 - 25;
        cpu.y = 160 - 37.5;
        ball.x = 240 - 15;
        ball.y = 160 - 15;

        // Score

        playerScore = new Text('0', 'bold 20px Arial', '#A3FF24');
        playerScore.x = 211;
        playerScore.y = 20;

        cpuScore = new Text('0', 'bold 20px Arial', '#A3FF24');
        cpuScore.x = 262;
        cpuScore.y = 20;

        stage.addChild(playerScore, cpuScore, player, cpu, ball);
        stage.update();

        // Start Listener

        bg.onPress = startGame;
    }

// Start Game Function
    function startGame(e)
    {
        bg.onPress = null;
        stage.onMouseMove = movePaddle;

        Ticker.addListener(tkr, false);
        tkr.tick = update;
    }

// Player Movement

    function movePaddle(e)
    {
        // Mouse Movement
        player.y = e.stageY;
    }



    /* Reset */

    function reset()
    {
        ball.x = 240 - 15;
        ball.y = 160 - 15;
        player.y = 160 - 37.5;
        cpu.y = 160 - 37.5;

        stage.onMouseMove = null;
        Ticker.removeListener(tkr);
        bg.onPress = startGame;
    }

// Update Function

    function update()
    {
        // Ball Movement

        ball.x = ball.x + xSpeed;
        ball.y = ball.y + ySpeed;

        // Cpu Movement

        if((cpu.y+32) < (ball.y-14)) {
            cpu.y = cpu.y + cpuSpeed;
        }
        else if((cpu.y+32) > (ball.y+14)) {
            cpu.y = cpu.y - cpuSpeed;
        }

        // Wall Collision

        if((ball.y) < 0) { ySpeed = -ySpeed; createjs.SoundJS.play('wall'); };//Up
        if((ball.y + (30)) > 320) { ySpeed = -ySpeed; createjs.SoundJS.play('wall');};//down

        /* CPU Score */

        if((ball.x) < 0)
        {
            xSpeed = -xSpeed;
            cpuScore.text = parseInt(cpuScore.text + 1);
            reset();
            createjs.SoundJS.play('enemyScore');
        }

        /* Player Score */

        if((ball.x + (30)) > 480)
        {
            xSpeed = -xSpeed;
            playerScore.text = parseInt(playerScore.text + 1);
            reset();
            createjs.SoundJS.play('playerScore');
        }

        /* Cpu collision */

        if(ball.x + 30 > cpu.x && ball.x + 30 < cpu.x + 22 && ball.y >= cpu.y && ball.y < cpu.y + 75)
        {
            xSpeed *= -1;
            createjs.SoundJS.play('hit');
        }

        /* Player collision */

        if(ball.x <= player.x + 22 && ball.x > player.x && ball.y >= player.y && ball.y < player.y + 75)
        {
            xSpeed *= -1;
            createjs.SoundJS.play('hit');
        }

        /* Stop Paddle from going out of canvas */

        if(player.y >= 249)
        {
            player.y = 249;
        }

        /* Check for Win */

        if(playerScore.text == '10')
        {
            alert('win');
        }

        /* Check for Game Over */

        if(cpuScore.text == '10')
        {
            alert('lose');
        }
    }




    alert=function(e){
        Ticker.removeListener(tkr);
        stage.onMouseMove = null;
        bg.onPress = null


        if(e == 'win'){
            win.x = 140; win.y = -90;

            stage.addChild(win);
            Tween.get(win).to({y: 115}, 300)}

        else{
            lose.x = 140;
            lose.y = -90;

            stage.addChild(lose);
            Tween.get(lose).to({y: 115}, 300);
        }
    }




}

CUob= {

    default: '~arrow',
    none: 'no cu rendered',
    help: 'help available',
    pointer: 'E.g. used when hovering over links, typically a hand.',
    progress: 'The program is busy in the background but the user can still interact with the interface (unlike for wait).',
    wait: 'The program is busy (sometimes an hourglass or a watch',
    cell: 'Indicating that cells can be selected',
    crosshair: 'Cross cursor, often used to indicate selection in a bitmap.',
    text: 'Indicating text can be selected, typically an I-beam.',
    copy: 'can be copied',
    move: 'may be moved',
    grab: 'can be grabbed/moved',
    'context-menu': 'A context menu is available under the cursor',
    'not-allowed': 'something cannot be done',
    'zoom-in':'can bezoomed(magnified) in orout, zoom-out'
}