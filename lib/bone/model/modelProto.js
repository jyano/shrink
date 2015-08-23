
md = bb.Model.prototype
md.S = md.save
md.s = function (a, b, c) {
    var md = this
    if (O(a) && O(b)) {
        if (b.v) {
            b.validate = b.v ? true : false
        }
    }
    if (S(a) && O(c)) {
        if (c.v) {
            c.validate = c.v ? true : false
        }
    }
    return md.set(a, b, c)
    return md
}
md.g = md.get
md.J = md.tJ = md.toJSON
md.tS = md.jS = function () {
    return _.jS(this.J())
}
md.$l = md.lJ = function () {
    return $l(this.jS())
}
md.at = function () {
    return this.attributes
}
md.b = md.bind
md.V = function (Vw, ob) {
    ob = ob || {}
    ob.m = this

    return Vw(ob)

}

//listen
md.l = function () {
    $l(this.toJSON());
    return this
}
md.tr = function (a, b) {
    this.trigger(a, b)
    return this
}
md.l2 = function (a, b, c, d) {
    return this.listenTo(a, b, c, d)
}
md.l1 = function (a, b, c, d) {
    return this.listenToOnce(a, b, c, d)
}

//event
md.AD = md.oA = function (fn) {

    // "add" (model, collection, options) — when a model is added to a collection.

    fn = fn || function (m) {


            m.at = m.attributes
            m.s = function (a, b, c) {
                if (O(a) && O(b)) {
                    if (b.v) {
                        b.validate = b.v ? true : false
                    }
                }
                if (S(a) && O(c)) {
                    if (c.v) {
                        c.validate = c.v ? true : false
                    }
                }
                return m.set(a, b, c)
            }
            m.g = m.get
            m.j = m.toJSON
            m.o = m.on
            E$(m)
            a.A(m)
        }

    return this.on('add', fn)

    /*
     // escape   has     unset    clear – parse  pa P – clone  cl– toJSON
     – url     u – urlRoot  uR– sync   sy fetch  F  – save  S – destroy
     – validate    vl – validationError  vE – isValid   iV
     – attributes– changed  – isNew iN – hasChanged  hC  – previous p
     – previousAttributes  pA – changedAttributes cA
     */
}
md.RM = md.oRm = function (a, b, c) {
    // "remove" (model, collection, options)
    // — when a model is rmd from a collection.
    return this.on('remove', a, b, c)
}
md.DS = md.oX = md.oD = function (fn) {
    // "destroy" (model, collection, options)
    // — when a model is destroyed.
    return this.on('destroy', fn)
}
md.RS = md.oR = md.oRs = function (fn) {
    // "reset" (collection, options) —
    // when the collection's entire contents have been replaced.
    return this.on('reset', fn)
}
md.SO = md.oSo = function (a, b, c) {
    // "sort" (collection, options)
    // — when the collection has been re-sorted.
    return this.o('sort', a, b, c)
}
md.CH = md.$ = md.ch = md.oC = md.oCh = function (n, fn) {
    var g = G(arguments), o
    o = g.F ? {fn: g.f} : {at: g.f, fn: g.s}
    // "change" (model, options)    "change:[attribute]" (model, value, options)
    return g.at ?
        this.on('change:' + o.at, o.fn) :
        this.on('change', o.fn)
}
md.hC = function (at) {
    var md = this,
        g = G(arguments), o

    o = g.F ? {fn: g.f} :
        F(g.s) ? {at: g.f, fn: g.s} : {}

    if (o.fn) {

        if (md.hC(o.at)) {
            o.fn()
        }
        return this
    }


    return this.hasChanged(at)
}
md.RQ = md.oQ = md.Rq = function (mdCl, fn) {
    // on start of md|cl SERVER request
    //fn passed(md_or_cl,  xhr, op)
    return this.on('request', fn)
}
md.SY = md.oS = md.oSy = function (a, b, c) {
    // "sync" (model_or_collection, resp, options)
    // — when a model or collection has been successfully synced with the server.
    return this.o('sync', a, b, c)
}
md.ER = md.oZ = md.oE = md.oEr = function (a, b, c) {
    //"error" (model_or_collection, resp, options)
    // — when model's or collection's request to remote server has failed.
    return this.o('error', a, b, c)
}
md.VL = md.oIv = function (a, b, c) {
    //"invalid" (model, error, options)
    // — when a model's validation fails on the client.
    return this.on('invalid', a, b, c)
}
md.AL = md.o$ = md.oAl = function (fn) {
    return this.on('all', fn)
} //passes event name as 1st ag
//md.o= function(){var g=G(arguments); this.on.apply(this, g) }
md.tr=  md.trigger
md.o= md.on
md.oA=function(fn){
    // "add" (model, collection, options) — when a model is added to a collection.
    fn=fn||function(m){
            m.at= m.attributes
            m.s=function(a,b,c){
                if(O(a) && O(b)){if(b.v){
                    b.validate= b.v?true:false}}
                if(S(a) && O(c)){if(c.v){
                    c.validate= c.v?true:false}}
                return m.set(a,b,c)}
            m.g= m.get
            m.j= m.toJSON
            m.o= m.on
            E$(m)
            a.A(m)}
    return this.o('add',fn)
}
md.oH= md.o_= md.oRm=function(a,b,c){// "remove" (model, collection, options) — when a model is rmd from a collection.
    return this.o('remove',a,b,c)
}
md.oX= md.oD=function(a,b,c){// "destroy" (model, collection, options) — when a model is destroyed.
    return this.o('destroy',a,b,c)
}
md.oR=function(a,b,c){// "reset" (collection, options) — when the collection's entire contents have been replaced.
    return this.o('reset',a,b,c)}
md.oSo=function(a,b,c){
    // "sort" (collection, options) — when the collection has been re-sorted.
    return this.o('sort',a,b,c)
}
md.oC=function(n,f){
    // "change" (model, options)
    // — when a model's attributes have changed.
    // "change:[attribute]" (model, value, options) — when a specific attribute has been updated.
    if(U(f)){return this.o('change', n)};
    return this.o('change:'+n, f)
}
md.oQ=function(a,b,c) {
    // "request" (model_or_collection, xhr, options) — when a model or collection has started a request to the server.
    return this.o('request',a,b,c)
}
md.oS=function(a,b,c){
    // "sync" (model_or_collection, resp, options) — when a model or collection has been successfully synced with the server.
    return this.o('sync',a,b,c)
}
md.oZ= md.oE=function(a,b,c){
    //"error" (model_or_collection, resp, options) — when model's or collection's request to remote server has failed.
    return this.o('error',a,b,c)
}
md.oI= md.oV=  md.oIV=function(a,b,c){
    //"invalid" (model, error, options) — when a model's validation fails on the client.

    return this.o('invalid',a,b,c)
}
md.oRt=function(n,f){var o=this
    //"route:[name]" (params)— Fired by the router when a specific route is matched.  //"route" (route, params)   — Fired by the router when any route has been matched.
//"route" (router, route, params)  — Fired by history when any route has been matched.

    if(U(f)){return o.o('route', n)}
    return o.o('route:'+n, f)
}
md.o$=md.oAl=function(f){//passes event name as 1st ag
    return this.o('all', f)
}

