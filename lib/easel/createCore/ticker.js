T = T$ = cjs.Ticker

cjs.t = cjs.tick = function (fn) {
    fn();
    cjs.Ticker.on('tick', fn)
}
cjs.ticker = tt = function (a, b, c) {

    var g = G(arguments),
        t = true,
        f = false,
        a = g[0],
        b = g[1],
        c = g[2]

    if (F(a)) {

        return aEL(T$, 'tick',
            g.N ? a
                : function (e) {

                if (!e.paused) {
                    a(e)
                }
            })

    }


    if (O(a)) {
        return aEL(T$, 'tick', a)
    }

    if (a == '?') {
        return !T$.getPaused()
    }
    if (a == 'p') {
        T$.setPaused(f);
        return tt('?')
    }

    if (a == 's') {
        T$.setPaused(t);
        return tt('?')
    }

    if (a == 'g') {
        return tt(
            tt('?') ? 's' : 'p'
        )
    }


    if (a == '@') {
        return T$.init()
    }

    if (a == '!') {
        return T$.reset()
    }

    if (a == 'e') {
        return T$.getEventTime(g.p ? t : f)
    }

    if (a == 't') {
        return T$.getTime(g.p ? t : f)
    }

    if (a == '#') {
        return T$.getTicks(g.n ? t : f)
    }

    if (a == 'md') {
        return t$.maxDelta
    }

    if (a == 'M') {
        return T$.timingMode
    }

    if (a == 'i') {
        if (N(b)) {
            T$.setInterval(g.m ? b * 1000 : b)
            return tt('i')
        }
        if (U(b)) {
            return T$.getInterval()
        }
    }

    if (a == 'f') {
        if (N(b)) {
            T$.setFPS(b);
            return tt
        }
        if (U(b)) {
            return T$.getFPS()
        }
    }

    if (a == 'r') {
        if (b > 10) {
            tt('f', b)
        } else {
            tt('i', b, '*')
        }
    }


    if (a == 'm') {
        return N(b) ? T$.getMeasuredFPS(b)
            : T$.getMeasuredFPS()
    }

    if (a == 'tk') {
        return Ed(T$)
    }

}
cjs.stop = function () {

    cjs.Ticker.removeAllEventListeners()

}
tickX = function (e) {
    j.Y(e.delta / 1000 * 100, '-')
}
timeStamp2 = function (s, j, pxPerSec) {
    var fn = function (s, e) {

        if (!N(j.ts)) {
            j.ts = 0;
            j.lts = e.ts
        }

        else {
            j.ts = e.ts - j.lts;
            j.lts = e.ts

            j.y((j.ts / 1000) * pxPerSec, '-')
        }
    }
    return s.t(fn)
}

cjs.Keys = function(o){
    if(O(o)){
        if(F(o.u)){
            cjs.tick(function(){if(cjs.Keys.u){ o.u(cjs.Keys.u) } })}
        if(F(o.d)){
            cjs.tick(function(){
                if(cjs.Keys.d){ o.d(cjs.Keys.d) } })
        }
        if(F(o.l)){
            cjs.tick(function(){
                if(cjs.Keys.l){
                    o.l(cjs.Keys.l)
                } })}
        if(F(o.r)){
            cjs.tick(function(){if(cjs.Keys.r){
                o.r(cjs.Keys.r)
            } })
        }
    }
}
cjs.watchKeys=function(){
    cjs.Keys.l = cjs.Keys.left = false
    cjs.Keys.r = cjs.Keys.right = false
    cjs.Keys.u = cjs.Keys.up = false
    cjs.Keys.d = cjs.Keys.down = false
    $.kD('l',function(){
        if($.test){$l('left pressed')}
        cjs.Keys.l = cjs.Keys.left = true
        cjs.Keys.dir = 'left'})
    $.kU('l',function(){if($.test){$l('left lifted')}
        cjs.Keys.l = cjs.Keys.left = false
    })
    $.kD('r',function(){if($.test){$l('right pressed')}
        cjs.Keys.r = cjs.Keys.right = true
        cjs.Keys.dir = 'right'})
    $.kU('r',function(){if($.test){$l('right lifted')}
        cjs.Keys.r = cjs.Keys.right = false
    })
    $.kD('u',function(){if($.test){$l('up pressed')}
        cjs.Keys.u = cjs.Keys.up = true
    })
    $.kU('u',function(){if($.test){$l('up lifted')}
        cjs.Keys.u = cjs.Keys.up = false
    })
    $.kD('d',function(){if($.test){$l('down pressed')}
        cjs.Keys.d = cjs.Keys.down = true
    })
    $.kU('d',function(){
        if($.test){$l('down lifted')}
        cjs.Keys.d = cjs.Keys.down = false
    })
}
TESTWATCHKEYS=function(){z()
    $.test=true
    cjs.watchKeys()
}
KEYWATCH = function(){
    J=cjs
    $.test=true
    J.Keys.l = J.Keys.left = false
    J.Keys.r = J.Keys.right = false
    J.Keys.u = J.Keys.up = false
    J.Keys.d = J.Keys.down = false
    $.kU('l',function(){
        if($.test){$l('left lifted')}
        J.Keys.l = J.Keys.left = false
    })
    $.kD('l',function(){
        if($.test){$l('left pressed')}
        J.Keys.l = J.Keys.left = true
        J.Keys.dir = 'left'})
    $.kD('l',function(){
        if($.test){$l('left pressed')}
        J.Keys.l = J.Keys.left = true
        J.Keys.dir = 'left'})
    $.kD('r',function(){if($.test){$l('right pressed')}
        J.Keys.r = J.Keys.right = true
        J.Keys.dir = 'right'})
    $.kU('r',function(){if($.test){$l('right lifted')}
        J.Keys.r = J.Keys.right = false
    })
    $.kD('u',function(){if($.test){$l('up pressed')}
        J.Keys.u = J.Keys.up = true
    })
    $.kU('u',function(){if($.test){$l('up lifted')}
        J.Keys.u = J.Keys.up = false
    })
    $.kD('d',function(){if($.test){$l('down pressed')}
        J.Keys.d = J.Keys.down = true})
    $.kU('d',function(){if($.test){$l('down lifted')}
        J.Keys.d = J.Keys.down = false
    })
}