i=p= ob=   cjs.DisplayObject.prototype
i.P=function(){return this.parent}

ob.u=function(){
    this.update();return this
}
ob.al= function(alpha){
    if(U(alpha)){return this.alpha}
    this.alpha=alpha;return this
}
ob.n= function(name){
    if(U(name)){return this.name}
    this.name=name;return this
}


i.gL= i.gTL=function(x,y){var i=this
    if(O(x)){y= x.y;x= x.x}
    return i.globalToLocal(x,y)}
i.hT= i.test=function(x,y){var i=this
    if(cjs.iDO(x)){return i.hT(i.gTL(x))}
    if(O(x)){y= x.y;x= x.x}
    return i.hitTest(x, y)}
i.uM= i.underMouse=function(){var i=this, s=i.S()
    if(s.mouseInBounds){
        var pt = i.gTL(s.mouseX,s.mouseY)
        return i.hT(pt)}}
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
i.$=function(fn){return this.on('click', fn)}
i.$$=function(fn){return this.on('dblclick', fn)}
i.xx= i.rm= i.remove =function(){var i=this
    i.parent.removeChild(i)
    return i} //cant delete 'remove' quite yet
i.hide=function(){this.visible=false; return this}
i.of=function(k){
    this._K = this._K || []
    return !k  || this == k ||  _.ct( this._K ,  k)
}
i.K=function() {var i=this, g=G(arguments)
    this._K = this._K || []

    if (g.u) {return this._K.join(' ') }

    if (g.O) {this._K(g.f.k); return this }


    _.eW(g.f, function (k) {


        if (!i.of(k)) { i._K.push(k)
        }


    })

    return this
    //i.of=function(k){return this.K()==k || this.K()==''}
}

ob.st = function () {
    if (this.getStage) {
        return this.getStage()
    }
    return this.stage
}
ob.blSt = ob.belowStg = function () {
    return this.y > this.stg().H()
}
ob.hd = ob.hide = function () {
    this.visible = false;
    return this
}
ob.P = function () {
    return this.parent
}
ob.rm = function () {
    this.P().removeChild(this);
    return this
}
ob.d= ob.dot=function(){
    this.st().dot(this.X(), this.Y()); return this
}

i.sib=function(){return this.P().ch()}
i.ix=function(n){var i=this, g=G(arguments)
    if(U(g[0])){return }
    i.P().setChildIndex(i, n)
    return i
}
i.toFront = function(){ return this.ix( this.sib().length-1 ) }
i.within = i.inStage =  function(){var i=this,g=G(arguments), s=i.S(),wthnS

    wthnS = i.x > 0 && i.y > 0

        &&   i.x < (s.W()-100)  &&   i.y< ( s.H()-100 )

    if(g.n && !wthnS){ s.rm() }

    return wthnS
}
i.belowStg = function(){ return this.y > this.S().H() }
i.dg= i.drag=function(){var i=this;SL(i);return i}
i.bB = i.bindBody = function (b) {
    var i = this
    cjs.t(function () {
        b.X(i.X())
        b.Y(i.Y())
        b.rot(i.rot())
    })
    return i
}
i.dot = function () {
    var i = this
    i.getStage().dot(i.X(), i.Y())
    return i
}
i.flash = function () {
    var i = this
    i.opacity(0)
    $.in(.3, function () {
        i.opacity(1)
    })
    return i
}
i.St = i.S = i.st = function () {
    return this.getStage()
}

ob.dg=ob.drag=ob.SL = function(){SL(this);return this}

nums()
reg()
mouse()

function nums(){

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
    ob.WH = function (w, h) {
        return this.W(w).H(h || w)
    }
    ob.X = function (x, duration) {//can add easing :)
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
    ob.Y = function (y, duration) {//make same same x
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
    i.sX = function (n) {
        var i = this
        if (U(n)) {
            return i.scaleX
        }
        i.scaleX = n
        return i
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

}
function reg(){





    i.bd= i.bounds=function(a,b,c,d){var i=this

        this.nominalBounds = new cjs.Rectangle(a,b,c,d)

        return this

    }
    i.a2=function(ct, x,y){
        ct.A(this)
        if(N(x)){
            this.X(x)
        };
        if(N(y)){this.Y(y)}
        return this


       a2=function(toWhat,x,y){
            toWhat.A( this )
            if(N(x)){this.X(x)}
            if(N(y)){this.Y(y)}
            return this}


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
    i.RT = function(){var i=this; RT(i);return i}





    i.XY= function (x,y){var i=this,g=G(arguments),v; if(g.u){return {x:i.x, y:i.y}}
        v = V(g.f, g.s)
        x= v.x
        y= _.tN(v.y, v.x)
        return i.X(x).Y(y)
    }




    ob.bounds=function(a,b,c,d) {
        this.nominalBounds = new cjs.Rectangle(a,b,c,d)
        return this}
    ob.cx=ob.cX=ob.centerX= function(a){
        if(U(a)){return this.x + this.W()/2 }
        return this.X( a- this.W()/2)
    }
    ob.cy=ob.cY = ob.centerY= function(a){
        if(U(a)){return this.y + this.H()/2 }
        return this.Y( a- this.H()/2)
    }
    ob.bindBody = function (body) {
        var ob = this, b = body
        cjs.tick(function () {
            b.XY(ob.X(), ob.Y()).rT(ob.rT())
        })
        return ob
    }
    ob.tickX=function(func){var ob=this
        cjs.tick(function(){ob.X( func() )})
        return this}
    ob.tickY=function(func){var ob=this
        cjs.tick(function(){ob.Y(
            func()
        )})

        return this}
    ob.gTL=function(x,y){

        if(O(x)){y= x.y;x= x.x}

        return this.globalToLocal(x, y)

    }
    ob.rgc=function(){var g=G(arguments),

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
    ob.rZero=function(a){
        var g=G(arguments), x=this.W()/2, y=this.H()/2
        alert('rZero')
        if(g.p){this.rX( 0, '+')
            //this.X(a, this.regX()-a, '+')
            this.rY( 0, '+')}
        else {this.rXY( 0 , 0 )   }
        return this}
    ob.rC= ob.rCenter=function(){
        var g=G(arguments), x=this.W()/2, y=this.H()/2
        if(g.p){this.rX( x,  '+' ); this.rY( y,  '+' )}
        else {this.rXY( x ,y )}
        if(N(g[0])){this.X(g[0]); if(N(g[1])){this.Y(g[1])}}
        return this
    }
    ob.toFront = function(){var ob=this
        numChildren = this.parent.children.length
        this.P().setChildIndex(this,numChildren-1)
        return this
    }


}
function mouse(){


    ob.$ = ob.click = function (func) {
        return this.on('click', func)
    }
    ob.$$ = function (a, b, c, d, e) {
        return this.on('dblclick', a, b, c, d, e)
    }
    ob.uM = ob.underMouse = function () {
        var ob = this, st = ob.stage


        if (st && st.mouseInBounds) {
            return ob.tx(ob.gTL(st.m().x, st.m().y))
        }


    }
}
function scroll(){
    i.tickX = function (fn) {
        var i = this
        cjs.t(function () {
            i.X(fn())
        })
        return i
    }
    i.tickY = function (fn) {
        var i = this
        cjs.t(function () {
            i.Y(fn())
        })
        return i
    }
}
function move(){
    i.toR = i.moveRight = function (num) {
        num = num || 20
        this.X(num, '+')
        return this
    }
    i.toL = i.moveLeft = function (num) {
        num = num || 20
        this.X(num, '-')
        return this
    }
    i.toU = i.moveDown = function (num) {
        num = num || 20
        this.Y(num, '-')
        return this
    }
    i.toD = i.moveDown = function (num) {
        num = num || 20

        this.Y(num, '+')
        return this
    }
    i.keyControls = function (num) {
        var args = G(arguments), i = this
        if (args.P) {
            $.kD('left', function () {
                i.toL(num)
            })
            $.kD('right', function () {
                i.toR(num)
            })
        }
        if (args.N) {
            $.kD('up', function () {
                i.toU(num)
            })
            $.kD('down', function () {
                i.toD(num)
            })
        }
    }

}
function phys(){
    i.warpX = function (lo, hi, cush) {
        var i = this, wrp = M.wrp(lo, hi, cush)
        cjs.t(function () {
            i.x = wrp(i.x)
        })
        return i
    }
    i.warpY = function (lo, hi, cush) {
        var i = this, wrp = M.wrp(lo, hi, cush)
        cjs.t(function () {
            i.y = wrp(i.y)
        })
        return i
    }
    i.warp = function (n) {
        var i = this, s = i.S(), n = n || 0
        i.warpX(0, s.W(), n)
        i.warpY(0, s.H(), n)
        return i
    }
    i.shootBullet = function () {
        shooter = this
        s = stage = shooter.stg()

        bullet = cjs.circ(8, 'w').XY(shooter).a2(s)

        bullet.startMoving(
            (shooter.vx || 1) * 1.5, (shooter.vy || 1) * 1.5
        )

    }
    i.hitByBullet = i.isPointInMyRectBounds = function (bullet) {
        var args = G(arguments), bullet = args[0],

            didHit = M.pointInRectangle(
                bullet.cX(), bullet.cY(),
                {
                    x: this.cX(),
                    y: this.cY(),
                    w: this.W(),
                    h: this.H()
                }
            )
        if (args.n) {
            if (didHit) {
                this.rm()
            }

        }
        return didHit

    }
    i.killAllIAmHitting = function () {
        var i = this,
            stage = i.St()
        _.e(stage.children, function (obj) {
            if (i != obj) {
                obj.hitByBullet(i, '-')
            }
        })

    }
    i.makeMeAKiller = function () {
        var i = this
        cjs.tick(function () {
            i.killAllIAmHitting()
        })
        return this
    }
    i.bounce = function (n) {
        var i = this,
            stage = i.getStage(),
            h = stage.H(),
            w = stage.W()
        n = N(n, 0)
        T.t(
            function () {
                var x = i.x, y = i.y
                if (x > w - i.W() - n || x < (n )) {
                    i.vX('-')
                }
                if (y > h - i.H() - n || y < (n )) {
                    i.vY('-')
                }
            })
        return i
    }
    i.startMoving = function (x, y) {
        var i = this, vx, vy
        if (x) {
            i.vX(x)
        }
        if (y) {
            i.vY(y)
        }
        vx = i.vx || 0
        vy = i.vy || 0
        T.t(function () {
            i.X(vx, '+').Y(vy, '+')
        })
        return i
    }
    i.move = function () {
        return this.X(this.vx || 0, '+').Y(this.vy || 0, '+')
    }
    i.accelerate = function () {
        return this.vX(this.ax || 0, '+').vY(this.ay || 0, '+')
    }
    i.jerk = function () {
        return this.aX(this.jx || 0, '+').aY(this.jy || 0, '+')
    }
    i.vX = function (a) {
        var g = G(arguments);
        a = g[0]

        if (g.p) {
            this.vx = this.vx + a;
            return this
        }

        else if (g.n) {
            if (N(a)) {
                this.vx = this.vx - a
            }

            else {
                this.vx = this.vx * -1
            }
            return this
        }
        else if (U(g[0])) {
            return this.vx
        }
        this.vx = a;
        return this
    }
    i.vY = function (a) {
        var g = G(arguments);
        a = g[0]
        if (g.p) {
            this.vy = this.vy + a;
            return this
        }
        else if (g.n) {
            if (N(a)) {
                this.vy = this.vy - a
            }
            else {
                this.vy = this.vy * -1
            }
            return this
        }
        else if (U(g[0])) {
            return this.vy
        }

        this.vy = a
        return this
    }
    i.vXY = function (x, y) {
        return this.vX(x).vY(y)
    }
    i.aX = function (a) {
        var g = G(arguments);
        a = g[0]

        if (g.p) {
            this.vx = this.vx + a;
            return this
        }

        else if (g.n) {
            if (N(a)) {
                this.vx = this.vx - a
            }

            else {
                this.vx = this.vx * -1
            }
            return this
        }
        else if (U(g[0])) {
            return this.vx
        }
        this.vx = a;
        return this
    }
    i.aY = function (a) {
        var g = G(arguments);
        a = g[0]
        if (g.p) {
            this.vy = this.vy + a;
            return this
        }
        else if (g.n) {
            if (N(a)) {
                this.vy = this.vy - a
            }
            else {
                this.vy = this.vy * -1
            }
            return this
        }
        else if (U(g[0])) {
            return this.vy
        }

        this.vy = a
        return this
    }
    i.jX = function (a) {
        var g = G(arguments);
        a = g[0]

        if (g.p) {
            this.vx = this.vx + a;
            return this
        }

        else if (g.n) {
            if (N(a)) {
                this.vx = this.vx - a
            }

            else {
                this.vx = this.vx * -1
            }
            return this
        }
        else if (U(g[0])) {
            return this.vx
        }
        this.vx = a;
        return this
    }
    i.jY = function (a) {
        var g = G(arguments);
        a = g[0]
        if (g.p) {
            this.vy = this.vy + a;
            return this
        }
        else if (g.n) {
            if (N(a)) {
                this.vy = this.vy - a
            }
            else {
                this.vy = this.vy * -1
            }
            return this
        }
        else if (U(g[0])) {
            return this.vy
        }

        this.vy = a
        return this
    }
    i.brake = function () {
        this.vx = this.vy = 0
    }

}
function globalComp(){
    i.o = function (o) {
        this.compositeOperation = o;
        return this
    }
    i.Ds = i.dO = function () {
        this.o('destination-out');
        return this
    }
    i.dS = i.dI = function () {
        return this.o('destination-in')
    }
    i.sD = i.sI = function () {
        this.o('source-in');
        return this
    }
    i.Sd = i.sO = function () {
        this.o('source-out');
        return this
    } // why use this ??x.sd = x.sV= function(){ this.o('source-over'); return this }
    i.ds = i.dV = function () {
        this.o('destination-over');
        return this
    }
    i.SD = i.sT = i.sA = function () {
        this.o('source-atop');
        return this
    }
    i.DS = i.dT = i.dA = function () {
        this.o('destination-atop');
        return this
    }
    i.li = function () {
        this.o('lighter');
        return this
    }
    i.co = function () {
        this.o('copy');
        return this
    }
    i.xo = function () {
        this.o('xor');
        return this
    }

}
function caFl(){
    ob.ca= function(){var ob=this, st=ob.st(), g=G(arguments), o, op, i

        if(O(ob.image && !g.n && !g.p)){ob.cache($(ob.image)[0])}

        if(ob.cacheCanvas && !g.p && (U(g[0]) || S(g[0]) || g.n)){
            op=g[0];ob.updateCache(op);return ob
        }
        o = O(g[0])? {i: g[0], x:g[1], y:[2]}: N(g[2])? {x:g[0], y:g[1], w:g[2],h:g[3] }: N(g[1])? {w:g[0], h:g[1]}: {}
        if(O(o.i)){ o.i = o.i.image? o.i.image:$(o.i)[0];
            if (!g.n) {
                if(ob.image){ob= ob.image}
                ob=$(ob)[0]
                ob.cache(0, 0, ob.width, ob.height)}
        }
        o.x = N(o.x)? o.x:0; o.y = N(o.y)? o.y:0
        o.w = N(o.w)? o.w : O(o.i)? o.i.width: N(o.h)? o.h : st? st.W():0
        o.h = N(o.h)? o.h : O(o.i)? o.i.height: st? st.H(): 0
        ob.cache(o.x, o.y, o.w, o.h )
        return ob
    }
    ob.fl=function(){var ob=this,g=G(arguments),i
        if(A(g[0])){return ob.fl.apply(ob,g[0])}
        ob.filters=ob.filters||[]
        _.e(g, function(fl){ob.filters.push(fl)})
        if(!g.n){i= ob.image; this.ca(0, 0, i.width, i.height)}
        return ob
    }
    ob.fl2=function(){var ob=this,g=G(arguments)
        ob.filters=[]
        ob.filters=ob.filters||[]
        _.e(g, function(fl){
            ob.filters.push(fl)
        })
        if(!g.n){i= ob.image; this.ca(0, 0, i.width, i.height)}
        return ob
    }
    ob.aF=function(h){var ob=this
        ob.fl( $AF( h ) )
        return ob
    }
    ob.aF2=function(h){var ob=this
        this.fl2( $AF( h ) )
        return ob
    }
    old=function(){
        ob.caxxx=function(i,y,w,h){var ob=this,st=ob.st(),g=G(arguments),o

            o = O(g[0])? {i: g[0], x:g[1], y:[2]}:
                N(g[2])? {x:g[0], y:g[1], w:g[2],h:g[3] }:
                    N(g[1])? {w:g[0], h:g[1]}: {}
            if(O(o.i)){
                o.i = o.i.image?o.i.image:$(o.i)[0]
                o.w = o.w || o.i.width
                o.h = o.h || o.i.height}
            o.x = N(o.x)? o.x:0
            o.y = N(o.y)? o.y:0
            // o.h = N(o.h)? o.h : st.H()
            // o.w = N(o.w)? o.w : st.W()

            if(U(g[0])){
                if (O(ob.image)){
                    $l('uG0 - ob.image')
                    if (!g.n) {ob._ca(ob.image, '+')}
                }
                else {$l('uG0')
                    if (ob.cacheCanvas) {ob.updateCache()}}
            }
            else if(O(i)){ob._ca(i)}
            else if(!N(w)){ ob.cache(0,0,o.x,o.y)}
            else {ob.cache(o.x, o.y, o.w, o.h ) }
            return ob
        }



        ob.uCaxxx=function(){var ob=this,g=G(arguments)
            if( U(g[0]) && O(ob.image) ){ob.updateCache(0,0, ob.image.width, ob.image.height)}
            else if(O(g[0])){
                g[0] = $(g[0])[0]
                ob.updateCache(0,0,  g[0].width, g[0].height)}
            else if(!N(g[2])) {ob.updateCache(0,0,g[0], g[1] )}
            else {ob.updateCache(g[0], g[1], g[2], g[3])}
            return ob
        }

    }
}
function cursor(){
    ob.bM=function(){var ob=this, st=ob.st()
        st.MM(function(){ob.x = st.m().x; ob.y = st.m().y})
        return ob
    }
    ob.cu= ob.bM=function(cu){var ob=this, st=ob.st()
        CUob= {
            d:'default', n:'none', h:'help',
            p:'pointer',  ch:'crosshair',
            P:'progress', w:'wait',
            t:'text',
            m:'move', g:'grab',  c:'copy',
            cm:'context-menu',
            C:'cell',
            N:'not-allowed', v:'not-allowed',
            z:'zoom-in'
        }

        if(U(cu)){st.MM(function(){ob.x = st.m().x; ob.y = st.m().y})}
        else if(S(cu)){ ob.cursor= CUob[cu]? CUob[cu] : cu  }
        return ob
    }
}
function fiz(){

    ob.p= ob.go= ob.startMoving=function(x,y){

        if(x){this.vX(x)}
        if(y){this.vY(y)}

        var ob=this

        cjs.Ticker.on('tick', function(){
            ob.X(  ob.X() + (ob.vx ||0)  )
            ob.Y(  ob.Y() + (ob.vy ||0)  )
        })

        return this
    }
    ob.wrx = ob.warpX = function (low, high, cush) {
        var ob = this,
            warp = M.warp(low, high, cush)
        cjs.tick(function () {
            ob.x = warp(ob.x)
        })

        return ob
    }
    ob.wry = ob.warpY = function (low, high, cush) {
        var ob = this,
            warp = Math.warp(low, high, cush)
        cjs.tick(function () {
            ob.y = warp(ob.y)
        })
        return this
    }
    ob.wr = ob.warp = function (n) {
        n = n || 0
        var stage = this.getStage()
        this.warpX(0, stage.W(), n)
        this.warpY(0, stage.H(), n)
        return this
    }
}
function obPhysics(){
//easel physics.. ugh
    ob.move = function () {
        return this.X(this.vx || 0, '+').Y(this.vy || 0, '+')
    }
    ob.accelerate = function () {
        return this.vX(this.ax || 0, '+').vY(this.ay || 0, '+')
    }
    ob.jerk = function () {
        return this.aX(this.jx || 0, '+').aY(this.jy || 0, '+')
    }
    ob.vX = function (a) {
        var g = G(arguments);
        a = g[0]

        if (g.p) {
            this.vx = this.vx + a;
            return this
        }

        else if (g.n) {
            if (N(a)) {
                this.vx = this.vx - a
            }

            else {
                this.vx = this.vx * -1
            }
            return this
        }
        else if (U(g[0])) {
            return this.vx
        }
        this.vx = a;
        return this
    }
    ob.vY = function (a) {
        var g = G(arguments);
        a = g[0]
        if (g.p) {
            this.vy = this.vy + a;
            return this
        }
        else if (g.n) {
            if (N(a)) {
                this.vy = this.vy - a
            }
            else {
                this.vy = this.vy * -1
            }
            return this
        }
        else if (U(g[0])) {
            return this.vy
        }

        this.vy = a
        return this
    }
    ob.vXY = function (x, y) {
        return this.vX(x).vY(y)
    }
    ob.aX = function (a) {
        var g = G(arguments);
        a = g[0]

        if (g.p) {
            this.vx = this.vx + a;
            return this
        }

        else if (g.n) {
            if (N(a)) {
                this.vx = this.vx - a
            }

            else {
                this.vx = this.vx * -1
            }
            return this
        }
        else if (U(g[0])) {
            return this.vx
        }
        this.vx = a;
        return this
    }
    ob.aY = function (a) {
        var g = G(arguments);
        a = g[0]
        if (g.p) {
            this.vy = this.vy + a;
            return this
        }
        else if (g.n) {
            if (N(a)) {
                this.vy = this.vy - a
            }
            else {
                this.vy = this.vy * -1
            }
            return this
        }
        else if (U(g[0])) {
            return this.vy
        }

        this.vy = a
        return this
    }
    ob.jX = function (a) {
        var g = G(arguments);
        a = g[0]

        if (g.p) {
            this.vx = this.vx + a;
            return this
        }

        else if (g.n) {
            if (N(a)) {
                this.vx = this.vx - a
            }

            else {
                this.vx = this.vx * -1
            }
            return this
        }
        else if (U(g[0])) {
            return this.vx
        }
        this.vx = a;
        return this
    }
    ob.jY = function (a) {
        var g = G(arguments);
        a = g[0]
        if (g.p) {
            this.vy = this.vy + a;
            return this
        }
        else if (g.n) {
            if (N(a)) {
                this.vy = this.vy - a
            }
            else {
                this.vy = this.vy * -1
            }
            return this
        }
        else if (U(g[0])) {
            return this.vy
        }
        this.vy = a
        return this
    }
    ob.brake = function () {
        this.vx = this.vy = 0
    }
    ob.toR = p.moveRight = function (num) {
        num = num || 20
        this.X(num, '+')
        return this
    }
    ob.toL = p.moveLeft = function (num) {
        num = num || 20
        this.X(num, '-')
        return this
    }
    ob.toU = p.moveDown = function (num) {
        num = num || 20
        this.Y(num, '-')
        return this
    }
    ob.toD = p.moveDown = function (num) {
        num = num || 20

        this.Y(num, '+')
        return this
    }
    ob.keyControls = function (num) {
        var args = G(arguments),
            ob = this

        if (args.P) {
            $.kD('left', function () {
                ob.toL(num)
            })
            $.kD('right', function () {
                ob.toR(num)
            })
        }

        if (args.N) {
            $.kD('up', function () {
                ob.toU(num)
            })
            $.kD('down', function () {
                ob.toD(num)
            })
        }
    }
    ob.shootBullet = function () {
        shooter = this
        st = shooter.st()
        bu = cjs.cir(8, 'w').XY(shooter).a2(st)
        bu.startMoving((shooter.vx || 1) * 1.5, (shooter.vy || 1) * 1.5)

    }
    ob.bounce = function (n) {
        n = N(n) ? n : 0
        var ob = this, st = this.st(), h = st.H(), w = st.W()
        J.tick(
            function () {
                var x = ob.x, y = ob.y
                if (x > w - ob.W() - n || x < (n )) {
                    ob.vX('-')
                }
                if (y > h - ob.H() - n || y < (n )) {
                    ob.vY('-')
                }
            })
        return st
    }
    ob.hitByBullet = ob.isPointInMyRectBounds = function () {
        var ob = this, g = G(arguments),

            bu = g[0],
            didHit = M.pointInRectangle(bu.cX(), bu.cY(), {x: ob.cX(), y: ob.cY(), w: ob.W(), h: ob.H()})
        if (g.n && didHit) {
            ob.rm()
        }
        return didHit
    }

    //chick for hits and remove if a hit
    ob.killAllIAmHitting = function () {
        var ob = this,
            stage = this.getStage()

        _.each(stage.children, function (obj) {

            if (ob != obj) {

                obj.hitByBullet(ob, '-')

            }
        })

    }
    ob.makeMeAKiller = function () {
        var ob = this
        cjs.tick(function () {
            ob.killAllIAmHitting()
        })
        return this
    }
    ob.in = ob.within = ob.inStage = function () {
        var ob = this, st = ob.st(),
            g = G(arguments),
            x = ob.x,
            y = ob.y,
            w = stg.W() - 100,
            h = stg.H() - 100,

            inn = x > 0 && x < w && y > 0 && y < h

        if (g.n) {
            if (!inn) {
                ob.rm()
            }
        }

        return inn
    }
}

ob.tx=ob.test=function(x,y){var ob=this
    if(cjs.isDisplayOb(x)){return ob.tx(this.gTL(x))}
    if(O(x)){y= x.y;x= x.x}
    return this.hitTest(  x,y    )
}


tween()
function tween(){


    ob.tw= ob.tween = function(){var g = G(arguments), tw
        g.unshift(this)
        return _tw = tw  = J.tween.apply(null, g)
    }
    ob.twL=   function(){  var g = G(arguments),tw
        g.unshift([this, 'l'])
        return tw= _tw  =J.tween.apply(null, g)

    }
    ob.flash = function(){var ob=this
        ob.al(0)
        $.in(.4, function(){ob.al(1)} )
        return ob}
    ob.sp= ob.spin = function(){this.twL([{r:360}, 4000]); return this}
    ob.grow = function(){
        this.tween( [{sxy:10},10000]); return this }

}