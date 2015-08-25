

cjs.Tw1 = function(a, b){ // EaselTween=tw=
    var displayObject = a
    cjs.ww =ww=function(o){var w={}
        if(N(o.x)){w.x=o.x}
        if(N(o.y)){w.y=o.y}
        if(N(o.xy)){w.x=w.y=o.xy}
        if(N(o.sx)){w.scaleX=o.sx}
        if(N(o.sy)){w.scaleY=o.sy}
        if(N(o.sxy)){w.scaleX=w.scaleY=o.sxy}
        if(N(o.s)){w.scaleX=w.scaleY=o.s}
        if(N(o.kx)){w.skewX=o.kx}
        if(N(o.ky)){w.skewY=o.ky}
        if(N(o.kxy)){w.skewX=w.skewY=o.kxy}
        if(N(o.k)){w.skewX=w.skewY=o.k}
        if(N(o.r)){w.rotation=o.r}
        if(N(o.a)){w.alpha=o.a}
        if(N(o.rx)){w.regX=o.rx}
        if(N(o.ry)){w.regY=o.ry}
        if(N(o.rxy)){w.regX=w.regY=o.rxy}
        if(N(o.gy)){w.regY=o.ry}
        if(N(o.gxy)){w.regX=w.regY=o.rxy}
        if(N(o.g)){w.regX=w.regY=o.g}
        if(o.v==0){w.visible=false}
        if(o.v==1){w.visible=true}
        return w}
    tweenGet = function(a){//twg=
        //this returns tween-get on a display obj
        //you can optionally pass an array (ob, op1, op2..)
        return A(a) ? cjs.Tween.get(a[0],
            tweenPops.apply(this, _.rest(a)))
            : cjs.Tween.get(a)}
    tweenPops=function(){//twp =
        var args=G(arguments),

            o={}

        _.each(args, function(arg){
            if( arg=='l' ){ o.loop = true }
            if( arg=='t' ){ o.useTicks = true }
            if( arg=='i' ){ o.ignoreGlobalPause = true }
            if( arg=='o' ){ o.override = true }
            if( arg=='p' ){ o.paused = true }
            if( N(arg) ){ o.position = arg}
            if( F(arg) ){ o.onChange = arg }

        })

        return o}
    if( U(b) ){ return tweenGet( displayObject ) }
    //first arg passed to twg, and then rest of args are 'to' pams
    var  g = G(arguments)
    displayObject = tweenGet(g[0])

    _.e(g.r, function(b){

        //can pass obj, time ,ease
        if( A(b) ){
            if( b[2] ){
                displayObject = displayObject.to( ww(b[0]), b[1], $Ea(b[2])  )
            }
            //can pass obj, time
            else if(b[1]){
                //can set pops to another obj??
                if(O(b[1])){
                    displayObject = displayObject.set( ww(b[0]),  b[1]   )}
                else{ displayObject=displayObject.to( ww(b[0]), b[1]) }
            }
            else{ displayObject = displayObject.tick(a[0]) }
        }

//can pass a function and it will run when it's its turn
        else if( F(b)  ){ displayObject = displayObject.call(b, []) }
        //make it wait, optionally pass in true! ?
        else if(   N( b )){
            if(b<0){
                // TELLING IT NOT TO UPDATE OTHER TWEEN PROPERTIES DURING THE WAIT (if mult tweens on same target)
                displayObject=displayObject.wait(b * -1, true) }
            else{displayObject= displayObject.wait(b) }
        }
        //for playing/stopping?
        else if( O(b) && b.length == 1 ){
            if( b.p ){ displayObject = displayObject.play( b.p )}
            else if( b.s ){   displayObject = displayObject.stop( b.s )}}
        else { displayObject = displayObject.to( ww(b) )  }
    })
    return Tw( displayObject )
    function Tw(tween){ var g=G(arguments),  w=tween
        //w.target
        //use when returned
        // w.play  = w.P=w.p=function(){ w.setPaused(false);return w}
        // w.stop  = w.S=w.s=function(){ w.setPaused(true);return w}
        //use in queue
        w.then=function(tweens, a, b){ return this.to( ww(tweens),a,b ) }
        w.pos = w.ps=function(a,b){


            //get or set position of tween (in time in ms)// see w.dr


            if( U(a) ){return w.position}

            if(b=='n'){b=createjs.Tween.NONE}//0

            if(b=='l'){b=createjs.Tween.LOOP}//1 default

            if(b=='r'){b=createjs.Tween.REVERSE}//2

            w.setPosition( a, acm(b) )



            //default is loop, can use r|n
            return w}
        //total time duration
        w.dur =w.dr= function(a){
            //get time of tween in ms
            //duration:read only
            if(U(a)){return w.duration}}
        w.tk=function(a){w.tick(a); return w }
        w.ignore = w.iGP=function(a){
            if(U(a)){return w.ignoreGlobalPause}
            w.ignoreGlobalPause=a;return w}
        w.setLoop = w.lp=function(a){
            if(U(a)){return w.loop}
            w.loop=a;  return w}
        //w.psv=function(){ return w.passive}
        //Read-only. Indicates the tween's current position is within a passive wait.
        w.Plugin =function(a,b){
            var g=G(arguments),a=g[0],b=g[1]
            if(U(a)){ return g.p? w.pluginData.data: w.pluginData}
            if(U(b)){ w.pluginData=a;return w}
            w.pluginData[a]=b
            return w }
        return w}
}


b.sp=function(){var b=this, g=G(arguments),o
    b._sp=b._sp||[]
    if(g.u){
        return  b._sp[0]?_.l(b._sp).i:null}
    //if(O(g[0])){
    g.e(function(g){
        b._sp.push(g)
    })
    //}
    return b
}

b.bSx=  function(i,sc,a,x,y){var b=this, w=b.W(),
    g=G(arguments)//b.img=b.bindSprite=
    $l('welcome to b.bS ')
    if(S(i)){
        $l('if(S(i))')
        w.s.bm(i,
            function(bm){
                b.bS('guy')
                b.C('z')
                //b.b({ i:bm,  a:a, sc:sc })
            })
    }
    else {
        $l('else')
        b.bS2.apply(b,g)
    }
    return b
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

    w.brick(100,300,200,30).rot(30)
    w.brick(400,200,400,100).rot(30)

    g= w.box(400,300, 30, 30).bindSprite('guy').K('guy')

    moveEachBodyButGuy()

    cjs.tick(function(){
        // w.each(function(b){ b.rot(  b.rot() + 10) })


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

