_.toU = function () {
    _.e(G(arguments), function (g) {
        g = undefined
    })
}
S.tU = function (a) {
    return S(a) ? a.toUpperCase() : A(a) ? _.m(a, function (a) {
        return S.tU(a)
    }) : a
}
S.iU = function (a) {
    if (S(a)) {
        return s$(a).isUpper()
    }
}
_.tLc = _.tL = _.tLC = function (a) {
    return a.toLowerCase()
}
_.tUc = _.tU = _.tUC = function (a) {
    return a.toUpperCase()
}
//
_.spl = function (a, b) {
    return String(a).split(b)
}
_.bf = function (a, b) {
    return a.split(b || '.')[0]
} //before('.')
// _.xxx=function e(p,q,w){return S(p) && s(q)? _.eW(p,q) :S(q)?  e(p,function(v,k){eval(q)}, w)}
//
_.ext = function (o) {
    o.e = o.extend
    return o
}//ext
_.eW = function (a, b) {
    return l$(a, _z(b)) == b
}
S.ext = _.ext = function (a, b) {
    if (S(a)) {
        return s$(a).contains('.') ? a :
            s$(a).ensureRight(b || '.png').s
    }
}//$.ext
_.left = function (a, b) {
    var g = G(arguments)
    return S(b) ? (!g.m ? s$(a).ensureLeft(b).s
        : s$(a).chompLeft(b).s) : 0
}
_.slash = _.ensureSlash = function (str) {
    var hasSlash = str[0] == '/'
    return hasSlash ? str : '/' + str
}
S.cR = function (a, b) {return s$(a).chompRight(b).s}
S.eR = function (a, b) {return s$(a).ensureRight(b).s}
S.cL = function (a, b) {return s$(a).chompLeft(b).s}
S.eL = function (a, b) {b = b || '/';return s$(a).ensureLeft(b).s}
S.r = function (a, b) {
    var g = G(arguments)
    return g.n ? s$(a).chompRight(b).s :
        s$(a).ensureRight(b).s
}
//
S.url = function (a) {
    return 'url("' + a + '")'
}
_.iDU = function (a) {
    return s$(a).ct('data:')
}
__ = '!!!!!!!!!!!!!!!!!!!!!!!!!!!!'
_.fCC = function (a) {
    return String.fromCharCode(a)
}
_.tS = function (a) {
    return a.toString()
}
_.eW=function(a,b){return s$(a).endsWith(b) }
