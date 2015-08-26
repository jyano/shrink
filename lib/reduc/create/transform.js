i=   ob=   cjs.DisplayObject.prototype
i.X = function (x, duration) {//can add easing :)
    var g = G(arguments)
    if (U(x)) {
        return this.x
    }
    if (g.p) {
        x = this.x + x
    }
    else if (g.n) {
        $l('n')
        x = this.x - x
    }
    else if (g.m) {
        $l('m')
        x = this.x * x
    }
    else if (g.d) {
        $l('d')
        x = this.x / x
    }
    if (N(duration)) {
        tw([this], [{x: x}, duration])
    }
    else {
        this.x = x
    }

    return this

    i.X = function (x, dur) {
        var i = this, g = G(arguments)
        if (U(x)) {
            return i.x
        }
        i.x = g.p ? i.x + x
            : g.n ? i.x - x
            : g.m ? i.x * x
            : g.d ? i.x / x
            : x

        return i
        //if (N(dur)) {tw([i], [{x: x}, dur]); return i}
    }

}
i.Y = function (y, duration) {//make same same x
    var g = G(arguments)
    if (U(y)) {
        return this.y
    }
    if (g.p) {
        y = this.y + y
    }
    else if (g.n) {
        y = this.y - y
    }
    else if (g.m) {
        y = this.y * y
    }
    else if (g.d) {
        y = this.y / y
    }


    if (N(duration)) {
        tw([this], [{y: y}, duration])
    }

    else {
        this.y = y
    }
    return this

    i.Y = function (y, dur) {
        var i = this, g = G(arguments)
        if (U(y)) {
            return this.y
        }
        if (g.p) {
            y = this.y + y
        }
        else if (g.n) {
            y = this.y - y
        }
        else if (g.m) {
            y = this.y * y
        }
        else if (g.d) {
            y = this.y / y
        }


        if (N(dur)) {
            tw([this], [{y: y}, duration])
        }

        else {
            this.y = y
        }
        return this
    }


}
i.xy=i.XY=function(x,y){var i=this,g=G(arguments),v; if(g.u){return {x:i.x, y:i.y}}

    if(O(x)){y= x.y; x= x.x}
    if(U(y)){y=x}

    return this.X(x).Y(y)

}
i.XY= function (x,y){var i=this,g=G(arguments),v; if(g.u){return {x:i.x, y:i.y}}
    v = V(g.f, g.s)
    x= v.x
    y= _.tN(v.y, v.x)
    return i.X(x).Y(y)
}
i.rt = i.rot = function () {
    var i = this, g = G(arguments), a = g[0]
    if (g.p) {
        return i.rT(i.rotation + _.tN(a, 1))
    }
    if (g.n) {
        return i.rT(i.rotation - _.tN(a, 1))
    }
    if (U(a)) {
        return i.rotation
    }
    i.rotation = a
    return i
}
i.rt = i.rot = function (rotation) {
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
i.W = function (a) {
    var i = this
    if (U(a)) {
        var b = i.getBounds()
        if (b) {
            return b.width * i.scaleX
        }
        return null
    }
    i.sX(i.scaleX * a / i.W())
    return i

}
i.H = function (a) {
    var i = this

    if (U(a)) {

        var b = i.getBounds()
        if (b) {
            return b.height * i.scaleY
        }
        return null


    }

    this.sY(this.scaleY * a / this.H())
    return this
}
i.WH = function (w, h) {
    return this.W(w).H(h || w)
}
i.sx = i.sX = function (n) {

    if (U(n)) {
        return this.scaleX
    }

    this.scaleX = n
    return this
}
i.sY = function (n) {
    var i = this
    if (U(n)) {
        return i.scaleY
    }
    i.scaleY = n
    return i
}
i.sXY = function (x, y) {
    var i = this, g = G(arguments), v
    if (U(g[0])) {
        return {x: i.sX(), y: i.sY()}
    }

    v = V(g[0], g[1])
    x = _.tN(v.x)
    y = _.tN(v.y, v.x)
    return i.sX(x).sY(y)

}
i.sy = i.sY = function (scaleY) {
    this.scaleY = scaleY;
    return this
}
i.sxy = i.sXY = function (x, y) {
    if (U(y)) {
        y = x
    }

    return this.sX(x).sY(y)
}
i.kX = function (skewX) {
    if (U(skewX)) {
        return this.skewX
    }
    this.skewX = skewX;
    return this
}
i.kY = function (skewY) {
    if (U(skewY)) {
        return this.skewY
    }
    this.skewY = skewY;
    return this
}
i.kXY = function (x, y) {

    y = N(y) ? y : x

    return this.kX(x).kY(y)
}
i.kx = i.kX = function (skewX) {
    if (U(skewX)) {
        return this.skewX
    }
    this.skewX = skewX;
    return this
}
i.ky = i.kY = function (skewY) {
    if (U(skewY)) {
        return this.skewY
    }
    this.skewY = skewY;
    return this
}
i.kxy = i.kXY = function (x, y) {

    y = N(y) ? y : x

    return this.kX(x).kY(y)
}
i.rX = function () {
    var i = this, g = G(arguments), rX = g[0]
    if (U(rX)) {
        return i.regX
    }
    i.regX = g.p ? i.regX + rX : rX
    return i
}
i.rY = function () {
    var i = this, g = G(arguments), rY = g[0]
    if (g.p) {
        i.Y(i.y + (rY - i.regY))
    }
    if (U(rY)) {
        return i.regY
    }
    i.regY = rY
    return i
}
i.rXY = function () {
    var i = this, g = G(arguments),
        x = _.tN(g[0]),
        y = _.tN(g[1], x)
    return i.rX(x).rY(y)
}
i.rgc=function(){var g=G(arguments),

    x=this.W()/2,
    y=this.H()/2

    if(g[0]===0){
        if(g.p){this.rXY(0,0,'+')}
        else{this.rXY(0,0)}
    }

    else{
        if(g.p){this.rXY(x,y,'+')}
        else{this.rXY(x,y)
        }}

    return this}
i.rZero=function(a){
    var g=G(arguments), x=this.W()/2, y=this.H()/2
    alert('rZero')
    if(g.p){this.rX( 0, '+')
        //this.X(a, this.regX()-a, '+')
        this.rY( 0, '+')}
    else {this.rXY( 0 , 0 )   }
    return this}
i.rx = i.rX = function (regX) {


    var g = G(arguments), regX = g[0]

    if (U(regX)) {
        return this.regX
    }

    //if(g.p){this.rX( this.regX + regX  )}

    this.regX = regX;
    return this
}
i.ry = i.rY = function (regY) {
    var g = G(arguments), regY = g[0]

    //if(g.p){this.Y( this.y + (regY - this.regY)  )}
    if (U(regY)) {
        return this.regY
    }
    this.regY = regY;
    return this
}
i.rxy = i.rXY = function (x, y) {
    y = N(y) ? y : x
    return this.rX(x).rY(y)
}
i.rC=      i.rCenter=function(){var i=this,g=G(arguments), x, y,hW,hH

    x=i.W()/2
    hW=x
    y=i.H()/2

    hH=y

    return (g.p)?
        i.rX(hW,'+').rY(hH,'+'):
        i.rXY(hW,hH)
}
i.rgc=    function(){var i=this,g=G(arguments),x=i.W()/2,y=i.H()/2
    return (g[0]===0)?
        i.rXY(0,0,(g.p?'+':null))
        : i.rXY(x,y,(g.p?'+':null))}//
i.rZero=   function(a){var i=this,g=G(arguments),x=i.W()/2,y=i.H()/2
    if (g.p) {
        i.rX(0,'+').rY(0,'+')
    }//i.X(a, i.regX()-a, '+')
    else {i.rXY(0,0)}
    return i}//
i.cX=  function(a){var i=this
    if(U(a)){return i.x + i.W()/2 }
    return i.X( a- i.W()/2)}
i.cY =   function(a){var i=this,
    hH=i.H()/2
    return U(a)?i.y+hH:i.Y(a-hH)}
i.rC = i.rCenter = function () {
    var g = G(arguments), x = this.W() / 2, y = this.H() / 2
    if (g.p) {
        this.rX(x, '+');
        this.rY(y, '+')
    }
    else {
        this.rXY(x, y)
    }
    if (N(g[0])) {
        this.X(g[0]);
        if (N(g[1])) {
            this.Y(g[1])
        }
    }
    return this
}
i.cx = i.cX = i.centerX = function (a) {
    if (U(a)) {
        return this.x + this.W() / 2
    }
    return this.X(a - this.W() / 2)
}
i.cy = i.cY = i.centerY = function (a) {
    if (U(a)) {
        return this.y + this.H() / 2
    }
    return this.Y(a - this.H() / 2)
}
i.bd= i.bounds=function(a,b,c,d){var i=this

    this.nominalBounds = new cjs.Rectangle(a,b,c,d)

    return this

}
i.bounds=function(a,b,c,d) {
    this.nominalBounds = new cjs.Rectangle(a,b,c,d)
    return this}
i.gL= i.gTL=function(x,y){var i=this
    if(O(x)){y= x.y;x= x.x}
    return i.globalToLocal(x,y)
}
i.gTL=function(x,y){

    if(O(x)){y= x.y;x= x.x}

    return this.globalToLocal(x, y)

}
i.tf=function(pam){
    if( O(pam) && F(pam.getTransform) ){pam = pam.getTransform()}
    if(A(pam)){this.setTransform.apply(this, pam)
        return this}
    this.setTransform.apply(this,  G(arguments))
    return this
}
i.getTransform = function () {
    var ob = this
    return [
        i.x, ob.y, ob.scaleX, ob.scaleY,
        ob.rotation, ob.skewX, ob.skewY,
        ob.regX, ob.regY
    ]
}
i.tf=  function(){var i=this,g=G(arguments)

    if(U(g[0])){return [
        i.x,
        i.y,
        i.scaleX,
        i.scaleY,
        i.rotation,
        i.skewX,
        i.skewY,
        i.regX,
        i.regY
    ]
    }
    if( O(g[0]) && F(g[0].getTransform)){
        g[0]= g[0].getTransform()}
    i.setTransform.apply(  i, A(g[0]) ? g[0] : g)
    return i
}
