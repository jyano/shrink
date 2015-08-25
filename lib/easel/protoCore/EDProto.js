cjs=createjs


ob=eD=cjs.EventDispatcher.prototype



eD.init = function () {
    this.initialize.apply(this, arguments)
    return this
}

eD.o=function(a,b,c,d,e){
    if(!Oo('e',a)){return o.o('$',a,b,c,d)}
    var f=ob.on(oE(a),
        b.handleEvent?b:b.ob?b.ob:b.st?b.st
            :function(e,data){b(o,sJE(e),e)},c,d,o,e)
    return function(){o.O(a,f)
        return _p(o.o,a,b,c,d,e)}
}
eD.O=function(t,f){var g=G(arguments), t=g[0], f=g[1]
    if(F(t)){$l('F(t)')
        return o.O('$',t)}
    t=oE(t)
    if(F(f)){$l('F(f)')

        if(g.p){ob.removeEventListener(t,f,true) }
        else if(g.n){ ob.removeEventListener(t,f,false) }
        else {$l('removing: ' + t + ' '+ _S(f))

            ob.removeEventListener(t,f)}}
    else {$l('!F(f)')
        if(S(t)){ob.removeAllEventListeners(t)}
        else{ob.removeAllEventListeners()}
    }
    return o
} //ob.wt=function(type){return o.willTrigger(type)}
eD.e=function(a,b,c){ob.dispatchEvent(a,b,c);return a}
eD.hel=function(a,b){
    return ob.hasEventListener(oO('e',a))
}

