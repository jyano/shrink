

_.eW=function(str, fn){
    var _gf = str.trim().split(' ')
    _.e(_gf, function(str){

        str = str.trim()

        // $l('str: '+ str)
        if(str) {
            fn( str.trim() )
        }
    })}

_.ct = function(arr, item){
    arr = arr || []
    if(S(item)){item=item.trim()}
    return _.contains(arr, item)

}


b2d.p()

fD.K =   function (k) {var fD=this
    if (U(clas)) {return fD.getClass()}
    fD.classes = fD.classes || []
    fD.classes.push(clas)
    return fD
}
fD.getClasses = fD.getClass = function () {var g = G(arguments), fD=this, classes
    fD._K = fD._K|| []
    ks = fD.classes.join(' ')
    if (g.p) {ks += ' : ' + fD.body().getClasses()}
    return ks}



b.K= function(){var b=this,g=G(arguments);
    this._K = this._K || []
    if(g.u){return this._K.join(' ')}
    if(g.O){this.K(g.f.k); return this}
    _.eW(g.f, function(k){ if(!b.of(k)){b._K.push(k)}})
    return this
}
f.K =  function(){var f=this, g=G(arguments);
    this._K=this._K||[]
    if(g.u){return (this._K).join(' ')}
    if(g.O){this.K(g.f.k); return this}
    _.eW(g.f, function(k){ if( !f.of(k)){ f._K.push(k)} })
    return this
}


b.of=function(k){

    if( b2d.iF(k) ){ k = k.B() }

    return !k ||  _.ct(this._K, k) || this == k

}
b.is=function(k){
    return k && this.of(k)
}
f.of=function(k){

    if(!this){return false}


    if(!k){return true}

    return this==k ||
        (S(k) && _.contains(this._K||[], k.trim()))
        ||
        (this.B() && this.B().of(k))


}
f.is=function(k){return k && this.of(k)}
