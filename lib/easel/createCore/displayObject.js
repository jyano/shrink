i = ob = p = cjs.DisplayObject.prototype
ob.xy=ob.XY=function(x,y){var i=this,g=G(arguments),v; if(g.u){return {x:i.x, y:i.y}}

    if(O(x)){y= x.y; x= x.x}
    if(U(y)){y=x}

    return this.X(x).Y(y)

}
ob.sx = ob.sX = function (scaleX) {
    this.scaleX = scaleX;
    return this
}
ob.sy = ob.sY = function (scaleY) {
    this.scaleY = scaleY;
    return this
}
ob.sxy = ob.sXY = function (x, y) {
    if (U(y)) {
        y = x
    }

    return this.sX(x).sY(y)
}
ob.rx = ob.rX = function (regX) {


    var g = G(arguments), regX = g[0]

    if (U(regX)) {
        return this.regX
    }

    //if(g.p){this.rX( this.regX + regX  )}

    this.regX = regX;
    return this
}
ob.ry = ob.rY = function (regY) {
    var g = G(arguments), regY = g[0]

    //if(g.p){this.Y( this.y + (regY - this.regY)  )}
    if (U(regY)) {
        return this.regY
    }
    this.regY = regY;
    return this
}
ob.rxy = ob.rXY = function (x, y) {
    y = N(y) ? y : x
    return this.rX(x).rY(y)
}
ob.kx = ob.kX = function (skewX) {
    if (U(skewX)) {
        return this.skewX
    }
    this.skewX = skewX;
    return this
}
ob.ky = ob.kY = function (skewY) {
    if (U(skewY)) {
        return this.skewY
    }
    this.skewY = skewY;
    return this
}
ob.kxy = ob.kXY = function (x, y) {

    y = N(y) ? y : x

    return this.kX(x).kY(y)
}
ob.rt = ob.rot = function (rotation) {
    var args = G(arguments);
    rotation = args[0]

    if (args.p) {
        rotation = N(rotation) ? rotation : 1
        return this.rT(this.rotation + rotation)
    }
    if (args.n) {
        rotation = N(rotation) ? rotation : 1
        return this.rT(this.rotation - rotation)
    }

    if (U(rotation)) {
        return this.rotation
    }
    this.rotation = rotation
    return this
}
ob.tf=function(pam){
    if( O(pam) && F(pam.getTransform) ){pam = pam.getTransform()}
    if(A(pam)){this.setTransform.apply(this, pam)
        return this}
    this.setTransform.apply(this,  G(arguments))
    return this
}
ob.getTransform = function () {
    var ob = this
    return [
        ob.x, ob.y, ob.scaleX, ob.scaleY,
        ob.rotation, ob.skewX, ob.skewY,
        ob.regX, ob.regY
    ]
}
ob.RT = function(){RT(this);return this}
ob.TR = function(){TR(this);return this}





