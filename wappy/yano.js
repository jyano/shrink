


maybeOld()
function maybeOld() {
//alert if used
    Y.uPop = function (i, size) {
        alert('Y.uPop')
        i = (O(i) && F(i.u)) ? i.u() : i

        size = size || 300

        return $.c().WH(size, size).fit(i)
    }
    Y.dUD = function (d, n) {
        alert('Y.dUD')
        $.P('getImageById', {data: d}, function (u) {
            upop(u, n)
        })
    } //sk-send du of your (first) can-el
    Y.dU = function () {
        alert('Y.dU')
        var u
        c = $.c().fit('me')
        u = c.toDataURL()
        k.emit('du', u);
        return u
    }

//Y.GUYS= Y.GUYS || []
//Y.IMS={}
}
function alpha(){


    $.iMsg = function (msgOb) {

        //this is triggered within a chatroom when someone clicks on a user
        // and 'chats' them up

//will need to update other parts to also activate this
// (instant messages from other parts of the site)
//k.on('say to someone',
// function(id, msg){k.broadcast.to(id).emit('my message', msg)})
        var ip = $.ip(), iMsg = $.w()(
            $.h3('instant message from ' + msgOb.from),
            $.h4('message: ' + msgOb.message), ip,
            $.bt('reply', function () {
                k.emit('IM', {
                    message: ip.V(), toWho: msgOb.from, from: _username
                })
            }))
        Y.IMS[msgOb.from] = iMsg
        return iMsg
    }
}
function yanoAlt(){

    Yano.func = function(){$('body').C('*')}
    Yano.interval = 1000
    Yano.intervalID = null
    Yano.toggleFunc = function self(func, interval){
        //when you call this straight:
//it checks if a Y-func is currently running (by seeing if Y.intervalID is set)
//if it is, it clears the Y-func.. (and then unsets the Y.intervalID)
// if func not running, it does setInterval, saving the returned # as Y.intervalID
// if you pass in a neg, it will only toggle(turn) off
// if you pass in a pos, it will only toggle(turn) on

        var args = G(arguments),
            func = args[0],
            interval = args[1]


        if(Yano.intervalID){if(args.P){
            clearInterval(Yano.intervalID)
            Yano.intervalID=null
        }}
        else{
            if(args.N){
                Yano.intervalID = setInterval(Yano.func, Yano.interval)
            }}
    } //rat
    Yano.setToggleFunc = function (func, interval){

        if(func){Yano.intervalFunc = func}
        if(interval){Yano.interval =  interval}

        Yano.setIntervalID = setInterval(Yano.intervalFunc,  Yano.interval)
        return Yano.toggleFunc
    }

}

