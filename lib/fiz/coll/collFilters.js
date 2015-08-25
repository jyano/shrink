b2d.p(); b2d.mini()

f.fil = f.fl = f.flDa = function () {
    var f = this, g = G(arguments)
    if (g.u) {return f.GetFilterData()}
    f.SetFilterData(g.f);
    return f
}
f.cat = function () {
    var f = this, g = G(arguments),
        flDa = f.flDa()
    if (g.u) {return flDa.categoryBits}
    flDa.categoryBits = g.f;
    f.flDa(flDa);
    return f}
f.msk = function (msk){
    var f = this, g = G(arguments),
        flDa = f.flDa(), num//f.msk: pass it a single number, pass it an array of numbers and it will add them up for you
    if (g.u) {
        return flDa.maskBits
    }
    if (A(g.f)) {
        num = 0
        _.e(g.f,
            function (bits) {
                num += bits
            })
        g.f = num
    }
    flDa.maskBits = g.f
    f.flDa(flDa)
    return f
}
f.bit = function (cat, msk) {
    if (N(cat)) {
        this.cat(cat)
    }
    if (N(msk) || A(msk)) {
        this.msk(msk)
    }
    return this
}
b.cat = function(){var b = this, g = G(arguments)
    if(g.u){return b}
    b.fs(function(f){f.cat(g.f)})
    return b
}
b.msk = function () {
    var b = this,
        g = G(arguments);
    b.fs(function (f) {
        f.msk(g.f)
    });
    return b
}
b.bit = function (cat, msk) {
    if (N(cat)) {
        this.cat(cat)
    }
    if (N(msk) || A(msk)) {
        this.msk(msk)
    }
    return this
}
flDa.grp = flDa.g = function(grp){var flDa = this
    if(U(grp)){return flDa.groupIndex}
    flDa.groupIndex = grp
    return flDa
}
fd.grp = fd.group = fd.index = fd.gI = function (a) {

    if (U(a)) {

        return this.filter.groupIndex

    }

    this.filter.groupIndex = a;

    return this

}
f.grp = function(grpIx){
    var f = this, fl = f.GetFilterData()

    if (U(grpIx)) {
        return fl.groupIndex
    }

    fl.groupIndex = grpIx

    f.SetFilterData(fl)

    return f
    //get/set for groupIndex
}
f.grp = function(i){
    var f = this, fl = f.fl()

    if (U(i)) {
        return fl.groupIndex
    }

    fl.groupIndex = i

    return this.fl(fl)

}
b.grp = function(i){
    if (U(i)) {
        return this.f().grp()
    }

    this.fs(function (f) {
        f.grp(i)
    })

    return this

}
b.grp = function(grp){
    var b = this
    b.fs(function (f) {
        f.grp(grp)
    })
    return b
}

/*  w.right.grp(-1)
 y.grp(-1)
 w.D(600,400,'r',30).grp(-1)
 w.D(600,400,'r',40).grp(-1)
 w.D(600,400,'r',50).grp(-1)

 w.D(600,400,'b',50,50).grp(-2)
 w.D(600,400,'b',60,60).grp(-2)
 w.D(600,400,'b',70,70).grp(-2)
 */

