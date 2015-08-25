b2d.p()


b.net=function(K){
    //when a web is created it gets web.connected=false
    //when it hits certain things and forms a joint, then connected->true
    //then it just dies
    //pressing DOWN should release the most recent of the connectedWebs
    //note: non connected Webs can be shot off!
    var p=this,b=this,w=b.W(),
        y=b.Y()-100,
        x=b.X(),
        piece, web
    b.webs = b.webs||[]
    web = w.net(b,K)
    b2=web.Piece(x,y)
    w.dJ(b,b2,1,1000,1000)
    web.pieces.push(b2)
    piece = b2
    //add first piece to player
    _.t(9, function(i){
        piece = piece.add( web.Piece(x,y-i) )
    })  //add rest to each other
    web.ball = w.cir(x, y-100, 10, 'd').K('webBall').den(1).rest(0).fric(100)
    piece.add( web.ball )
    b.webs.push(web)
    return web
}

w.net=function(b, K){var w=this,web//K=shouldKill

    web={player: b, connected: false, cn:0, pieces:[]}


    web.Piece= function(x,y){var web=this,b

        b=w.D(x,y,'w',3,5).bo(0).aD(10).K('webPiece')

        b.add=function(b2){var b=this
            w.dJ(b,b2,1,1000,1000)
            web.pieces.push(b2)
            return b2}
        return b}

    web.die= function(){
        var web=this,
            p=web.player
        _.e(web.pieces,function(i){i.kill()})
        web.pieces=[]
        p.webs=_.reject(p.webs, function(w){return web===w})}

    web.attach= function(b){var web=this
        web.cn = web.connected = true
        w.dJ(web.ball,b,1,1000,1000)
        return web
    }


    if(K){
        setTimeout(function(){if(!web.cn){web.die()}},_.tN(K,1000))}
    return web

}



b.iCn=b.isConnected=function(){var res, b=this
    return A(b.webs) &&
        _.findWhere(b.webs, {connected:true} )

}


NETGUY = function(){W({ g:30 ,w:'_'}).C('r'); blocks=function() {

    w.goal(1800, 0)
    block(400, 100)
    block(800, 0)
    block(1100, -50)
    block(1300, -200)
    function block(x, y) {
        return  w.S(x, y,'t', 50, 50).K('randomRect')
    }

};blocks()

    sw = cjs.stopWatch()
    wM = p=b=w.me(4).XY(394,530).fixRot().rest(0).den(.14).fric(1).K('player')
    wM.canWeb = true
    //this is tracking !!
    w.s.tickX(function(){return 600- p.X()}); w.s.tickY(function(){return 510- p.Y()})
    w.beg(function(cx) {
        var wb
        cx.w('webBall', 'randomRect', function(rc){
            wb = _.findWhere(p.webs, {ball: this.B()})
            if(wb && !wb.connected){wb.attach(rc.B())}
        })
    })

    $.key({

        r:function(){var K=cjs.Keys
            if(K.d){p.didShoot = true; if(!F(p.shotClock)){ p.shotClock=cjs.stopWatch() };return }
            if  (p.isConnected())  {p.F(100,0)}  else  {p.I(8,0)}},

        l:function(){var K=cjs.Keys
            if(K.d){p.didShoot = true; if(!F(p.shotClock)) {p.shotClock=cjs.stopWatch()}}
            if  (p.isConnected())  {p.F(-250,-50) }  else  {p.I(-8,0)}},

        R:function(){var K=cjs.Keys; p.webs= p.webs||[]
            if(p.webs[1]){p.webs[1].die()};
            if(K.d){p.shootRight()}},

        L:function(){var K=cjs.Keys;  p.webs= p.webs||[]
            if(p.webs[1]){p.webs[1].die()}; if(K.d){p.shootLeft()}},

        D:function(){
            if(!p.didShoot && p.webs[0]){_.f(p.webs).die()}
            p.didShoot=false},

        U: function(){
            var cn= _.reject(p.webs,function(w){return !w.connected})||[]
            if(cn[0] && cn[1]){cn[0].die()}
            p.canWeb = true ; p.shotForce=0},

        u: function(){var K=cjs.Keys, web,ba,n
            if(p.isConnected() && !p.webs[1] && p.canWeb){

                n = Math.abs(p.lV().x*2)
                p.net(3000).ball
                    .XY(p.X(),p.Y()-100)
                    .I(K.r?n:K.l?-n:0,-30)}

            else if(!p.webs||!p.webs[0] &&  p.canWeb){
                p.net(3000).ball.XY(p.X(),p.Y()-100)
                    .I(K.l?[-30,-40]:K.r?[30,-40]:[0,-70])}

            p.canWeb=false
        }
    })
}