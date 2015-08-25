
dd.i = dd.spr = dd.sprite = function (spr) {
    var dd = this  //it is looking for  a context?
    if (U(spr)) {
        return dd.GetSprite()
    }
    dd.SetSprite(spr)
    return dd
}
dd.scale = dd.drawScale = dd.dS = function (sc) {
    var dd = this
    if (U(sc)) {
        return dd.GetDrawScale()
    }
    dd.SetDrawScale(sc)
    return dd
}
dd.alpha = dd.fillAlpha = dd.fA = function (a) {
    var dd = this
    if (U(a)) {
        return dd.GetFillAlpha()
    }
    dd.SetFillAlpha(a)
    return dd
}
dd.line = dd.lineThickness = dd.lT = function (lt) {
    var dd = this
    if (U(lt)) {
        return dd.GetLineThickness()
    }
    dd.SetLineThickness(lt);
    return dd
}
dd.flags = dd.fl = function (flags) {
    var dd = this, DD = b2DebugDraw
    if (U(flags)) {
        return dd.GetFlags()
    }

    if (flags == '*') {
        flags = (DD.e_shapeBit | DD.e_jointBit | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit | DD.e_controllerBit)
    }

    dd.SetFlags(flags)

    return dd
}
