
s$=S
$J = JSON
$A = Array
$B = Boolean
$N = Number
$O = Object
$F = Function
$S = String
U = function u(a, b) {

    if (_.isUndefined(b)) {
        return _.isUndefined(a)
    }

    // return  _.extend.apply(_.extend, arguments)
}
A = _.isArray
B = _.isBoolean
D = function (a, b, c) {
    return _.isUndefined(b) ? !_.isUndefined(a)
        : _.defaults.apply(_.defaults, arguments)
}
F = function f(a, b, c) {
    //if(_.isDefined(b)){return _.filter(a,b,c)}
    return _.isFunction(a)  // return a.prototype||true

}
N = function (n, n2) {
    if (U(n2)){return _.isNumber(n)}
    return _.tN(n, n2)
}//N = _.isNumber
O = function (a, b) {

    if (_.isUndefined(b)) {
        return _.isObject(a)
    }
    if (_.isObject(a)) {
        // return  _.extend.apply(_.extend, arguments)
    }
}
I = function (f, i) {
    var g = G(arguments), clear


    if (F(g[0])) {
        f = g[0];
        i = g[1]
    }

    else {
        f = g[1];
        i = g[0]
    }

    i = !N(i) ? 1000 : i > 5 ? i : i * 1000


    if (g.N) {
        f()
    }

    clear = setInterval(f, i)

    return function () {
        clearInterval(clear)
    }

}
S = function (a) {
    return _.isString(a)
}
$l= function (a) {
    var g = G(arguments), v
    if (O(a) && N(a.x) && N(a.y)) {
        v = a.toFixed()
        $l(v.x + ' , ' + v.y)
        return a
    }
    _.e(g, function (a) {
        console.log(
            _.isFunction(a) ? a.toString()
                : O(a) ? JSON.stringify(a)
                : a
        )
    })
    return a

    $l=function(a){var g=G(arguments),v
        if(O(a) && N(a.x) && N(a.y) ){
            v=a.toFixed()
            $l(v.x + ' , ' + v.y)
            return a}
        _.e(g,function(a){
            console.log(
                _.isFunction(a)? a.toString()
                    :O(a)? JSON.stringify(a)
                    :a
            )
        })
        return a
    }
}
G=function(arg, str){var a,ag= _.tA(arguments), p, n, m, d,g
    //conflict with N(not neg) and N(g.$ && N(g.f) )
    if(S(ag[0])){
        a=_.tA(ag[1])
        if(S(a[0])){
            a[ag[0]]=a.shift()}}
    else{a=_.tA(ag[0])}
    if(_.l(a)=='+'){p= a.pop()}
    else if(_.l(a)=='-'){

        n=a.pop()}
    else if(_.l(a)=='*'){m=a.pop()}
    else if(_.l(a)=='/'){d=a.pop()}
    if(S(ag[1])&&S(_.l(a))){a[ag[1]]=a.pop()}
    g =  _.df(a, {
        z: a.length,
        f: _.f(a),
        s: a[1],
        t: a[2],
        l: _.l(a),
        r: _.r(a), i: _.i(a),
        p:p, P:!p, m:m, M:!m,
        d:d, D:!d, n:n, N:!n

    })
    g.u=U(g.f);g.U=!g.u
    g.L=g.length
    str=''
    _.t(g.L,function(){str=str+'$'})
    g[str]=1
    //g.N= g.$ && N(g.f);
    g.N = g.$ && N(g.f)
    g.N_ =N(g.f);
    g._N =N(g.l)
    g.$N= N(g.f)
    g.$_N= N(g.s)
    g.S = g.$ && S(g.f)
    g._S = S(g.l)
    g.$S=  g.S_ = S(g.f)
    g.$_S= S(g.s)
    g.O = g.$ && O(g.f)
    g.O_ = O(g.f)
    g._O = O(g.l)

    g.A= g.$ && A(g.f)
    g.A_= A(g.f);
    g._A= A(g.l)


    g.F=g.$ && F(g.f);g.F_=F(g.f);g._F=F(g.l)
    g.SA=  g.$$ && g.S_ && A(g.s)
    g.OO_ = O(g.f) && O(g.s)
    g.e=function(fn,str){var g=this
        if(str){
            g.e(function(g){fn[str](g)})
            return fn}

        _.e(g,fn)
        return g
    }
    g.e0=function(fn){
        _.e(this[0], fn)
    }

    g.e1=function(fn){
        _.e(this[1], fn)}

    g.eR=function(fn){
        _.eR(this, fn)
    }

    g.eF=function(fn){_.e(g.f, fn)}


    g.eS=function(fn){
        this.e(function(k) {
            if (S(k)){fn(k)}})}
    g.G=function(a){
        a=_.clone(a)
        if(g.n){a.push('-')}
        else if(g.p) {a.push('+')}
        else if(g.d) {a.push('/')}
        else if(g.m) {a.push('*')}
        return a}
    g.g = g.G( g )
    g.a=g.ap=function(){var g=this, gg=G(arguments)

        //if(g.A){

        return gg.s?
            $a(gg.s, gg.t, g.f):
            $a(gg.f, g.f)
    }
    g.ush=function(d){var g=this,
        res

        if(U(d)){d=null}

        g.t=g.s
        g.s=g.f
        g.f=d
        res=g.unshift(d)


        return res}
    return _g=g
}
G._=function(){g=G(arguments)
    $l(g.L + ' args')}
J=JSON
J.crs = crs=function(a){//Graphics.fromSource =
    //it's the opposite of 'src' !
//it strips '/me.png' -> 'me'
//why would i need this?
    return a.split('/').pop().split('.png')[0]}
J.src =    function f(e){
    var _src=function(a){ a = $.extension(a)
        return s$(a).startsWith('/')? a : '/'+ a }
    //if(Q(e)){$l('q');e=$(e)[0]}
    if( e.image ){ e=e.image}
    if( C(e) ){ e = C(e) }
    if( e.src ){ e = e.src}
    if( e.toDataURL ){  e=tDU(e) }

    return s$(e).contains('data:')?  e

        :  S(e) ?  _src(e)

        : 0
}
J.isDU=function(d){//Graphics.isDataURL=

    if(U(d)){return false}
    return s$(d).contains('data:')
}
_.j=function (a, b) {
    return (a || []).join(b || ' ')
}
_.ap = $a = function (ob, met, arr) {
    var g = G(arguments)
    if (g.t) {
        return g.f[g.s].apply(g.f, g.t)
    }
    return g.f.apply(null, g.s)
}
_.plOb = function (a) {
    return O(a) && !_.isFunction(a) && !A(a) && !(E(a))
}
_.px = function (a) {
    return _.nN(a) ? a + 'px' : a
}
_.$Id=function(str){
    str = str.replace('$', '#')
    str = str.replace('_', '.')
    return str
}
_.gS = function (pop) {
//for gen
    var g = G(arguments), that = this
    return function (val) {
        if (U(val)) {return this[pop]}
        this[pop] = val
        return this
    }
}
$z = function (z) {console.error(z)}
$d = function (o) {console.dir(o);return o}
_.fL=function(a){return function(){$l(a)}}

_.v=_.vl = _v = function (a) {return S(a) ? function () {Function(a)() } : F(a) ? a : F(a.value) ? a.value() : a.value}


wow= 'both.js'