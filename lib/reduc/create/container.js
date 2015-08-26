
cjs.iCt = function (ct) {
//haha only a ct can impl addContainer( ha! //MOMENT OF BRILLIANCE
    return O(ct) && ct.addContainer
}

$St = function (a, b, c, d, e) {
    var g = G(arguments), st
    st = A(g[0]) ? new J.Stage(g[0][0]) :
        O(g[0]) ? new J.Stage($(g[0])[0]) :
            new J.Stage($.c(g[0], g[1], g[2], g[3], g[4]) [0])
    st.c = st.can = $(st.canvas)
    if (g.p) {
        st.can.dg()
    }
    if (!g.n) {

        st.can.A()
    }
    return st.t()
}
St = function () {
    z()
    var g = G(arguments)
    st = s = $St(g[0] || 'p', 1200, 600)
    h = $H(0, 0).a2(s)
    if (g.p) {
        SL(h)
    }
    return s
}




old=function(){
    St=function(){z()
        s = cjs.stg(1200,600).A()
        h = $h(0,0).a2(s)
        SL(h)
    }

}
$St=function(){var st, g=G(arguments), cv
    //get by canvas ID
    cv = g.A? g.f[0]:
        //if you pass it a canvas OR a $canvas object
        O(g.f)? $(g.f)[0] :
            //create a new canvas
            $.c(g.f||'p',g.s||1200,g.t||600,g[3],g[4])[0]
    st = new cjs.Stage( cv )

    st.cv=   st.c=st.can= $(st.canvas)
    st.cv0=  st.cv[0]
    st.xc= st.cv0.getContext('2d')

    if(g.p){st.t()}

    return st.A()
    //.t()
}

$.fn.a2=function(el){el.A(this); return this}
$.St=function(){z()
    s = $St().t()
    s.bm('me', function(bb){
        b=bb.drag()
    })
    return s
}


$Ct=cjs.Ct=cjs.ct=function(a){return a? new cjs.Container(a)

:new cjs.Container()

}


cjs.isCont = function (cont) {
    if (O(cont)) {
        if (cont.addContainer) {
            return true
        }
        else {
            return false
        }
    }
}

testInStage = function(){$St().bm('me', function(b){

    b.go(10, 10)
    cjs.tick(function(){ $l(b.inStage()) })
})}

ct =cjs.Container.prototype
ct.T = function () {var ct = this, g = G(arguments), o, t
    o = g.O ? g.f :

        g.N_? {x: g.f, y: g.s, t: g.t, f:g[3], c:g[4]} :
            N(g.s)?   {t: g.f, x: g.s, y: g.t, f:g[3]} :
                _.x({t: g.f, f: g.s, c: g.t},
                    N(g[3]) && N([4]) ?{x: g[3], y: g[4]}:
                    {y: g[3]})
    o.f = N(o.f) ? o.f + 'px Arial' : o.f
    o.f = o.f || '50px Arial'
    o.c = oO('c', o.c || 'y')
    o.x = N(o.x, 0)
    o.y = N(o.y, 0)
    o.t = String(o.t)
    t = $T(o.t,o.f,o.c).XY(o.x, o.y).a2(this).drag()
    if (g.n) {t.regX = t.W() / 2}
    t.bl('middle')
    if (g.p) {t.bl('alphabetic')}
    if (!g.n) {t.rX(t.mW() / 2)}
    return t
    //o.x = N(o.x, this.St().cen().x)
    /* if(g.p){
     tO = cjs.T(g.f, 'y', '40px Arial')
     if(N(g[3])){ tO.XY(g[3], g[4]) }
     return tO
     }*/
}
ct.rec = function () {
    var ct = this, g = G(arguments), o, ct2, h
    if (g.OO_) {
        g.e(this, 'rec');
        return this
    } //it doesnt know that's this! (scope talk)
    o = g.S_ ? {c: g.f, w: g.s, h: g.t, x: g[3], y: g[4], rt: g[5]} :
        g.N_ ? {w: g.f, h: g.s, x: g.t, y: g[3], rt: g[4]} : g.f

    o.al = N(o.al, 1)
    o.rt = N(o.rt, 0)
    o.c = o.c || 'z';
    o.C = o.C || 'w'
    ct2 = ct.ct();
    h = ct2.h(o.x, o.y);
    h.rt(o.rt);
    h.c(o).al(o.al)
    if (o.lf) {
        h.lf(o)
    } else if (o.rf) {
        h.rf(o)
    }
    if (o.bm) {
        h.bR({i: 'me', hs: [o]})
    }
    else {
        h.rec(o.w, o.h)
    }
    if (g.p) {
        ct.drag()
    }
    return ct2
}
ct.h = function () {
    var ct = this,
        h = $H.apply($H, arguments)
    ct.A(h)
    return h
}
ct.pol = function () {
    var ct = this, g = G(arguments), p,

        h = ct.h()

    if (N(g.f)) {
        h.XY(
            g.shift(),
            g.shift())
    }
    p = $a(h, 'pol', g)
    if (g.p) {
        p.drag()
    }
    return p
}
ct.C = ct.backgroundColor = function (c) {
    var ct = this
    $(ct.canvas).C(c)
    return ct
}
ct.cX = function () {
    return this.St().cen().x
}
ct.cY = function () {
    return this.St().cen().y
}
ct.cir = function (c, r, x, y) {
    var g=G(arguments)
    alert('ct.cir')
    return $Cir(c, r, x, y).a2(this)
}

ct.ct=function(x,y){var ct = this, g = G(arguments),
    x = g[0],  y = g[1]
    ct1=  $Ct()
    ct.A( ct1 )
    if (F(x)) {x(ct1, ct)}
    else if (N(x)) {ct1.XY(x, y)}
    if (g.p){
        cjs.bindSlide(ct1)}
    return ct1
}

ct.Ct=function(){
    this.ct.apply(this, arguments)
    return this
}
ct.bm=  ct.b=function self(i, sc, fn){var ct=this,g=G(arguments), o,
    bm
    o=g.F_? {fn:g.s, sc:1, i:i} :
        g.N_ ? {sc:sc,fn:fn, i:i} :
            N(g.s)? {i: g.f, sc: g.s, fn: g.t}:
            {i: g.f, fn: g.s, sc: g.t}
    o.i  = o.i || 'me'
    if (O(o.i)) { return ct.A( $Bm(o.i) ) }
    $.i(i, function(i){
        bm =$Bm(i[0]).a2(ct)
        if(!g.n){ bm.rC() }
        if(g.p){ bm.drag() }
        bm.sXY(o.sc)
        //bm.XY( i.W()/2, i.H()/2 )
        // works with stage i guess.. but fucks with 'container' - cant check bounds
        //   if(g.n){bm.XY(-1000,-1000) }
        if(o.fn){ o.fn(bm) }
    })
    return ct
}
ct.Bm=function(){
    this.bm.apply(this, arguments)
    return this
}
ct.W=function(w){var can= this.St().canvas
    if(U(w)){ return can.width }
    can.width = w
    return this
}
ct.H=function(w){var can= this.getStage().canvas
    if(U(w)){ return can.height }
    can.height = w
    return this
}
ct.abs=function(x, y){  var s=this
    alert('ct.abs')
    ct.can.abs(x, y)
    return s
}
ct.ch=   ct.e=   ct.ix= ct.sChI=  ct.sChI= function(fn,n){
    var ct=this,CH
    if(N(n)){ct.setChildIndex(fn,n); return ct}
    CH=[]
    _.e(ct.children, function(ch){ CH.push(ch)})
    if(U(fn)){return CH}
    _.e(CH, function(ch){
        fn(ch)
    })
    return ct
}
ct.E= ct.clr= function(){return this.e(function(i){i.rm()})}
ct.Cv=function(){return this.St().canvas }
ct.A=function(x,y){var ct=this,  g=G(arguments)
    if(U(x)){$('body').append(ct.Cv()) }
    else if( N(x) ){ $('body').append(ct.Cv()).abs(x,y)}
    else { g.e(function(ch){ ct.addChild(ch) }) }
    return ct
}
ct.cen= ct.pt= ct.M= function(){
    return V(this.W()/2, this.H()/2)
}
ct.bgI=function(i){var ct=this
    ct.bm(i, function(b){ct.ch(b,0)})
    return ct

}
ct.noAuCl= function(){
    this.autoClear=false;
    return this
}
ct.au=   function(au){
    this.autoClear=au?true:false;
    return this
}
ct.eMO=function(en){this.enableMouseOver(en?true:false); return this}
ct.mc = function (x,y) {var ct = this, g = G(arguments),mc
    mc = cjs.Mc.apply(cjs,g)
    this.A(mc).XY(N(x,100), N(y,100))
    return mc}
ct.N=function(n){
    var s=this; if(U(n)){return s.nextStage}; s.nextStage=n; return s
}
ct.u=function(){this.update();return this}
ct.qB=  ct.bQ=function(name, x, y, sX,sY, rt){var b,g=G(arguments)
    b= Q.b(name)
        .XY(N(x,0), N(y,0))
        .sXY(N(sX,1), N(sY,sX||1))
        .rt(N(rt,0))

    if(!g.n){b.rC()  }
    if( g.p ){ b.drag() }
    this.A(b )
    return b
}
ct.chalk = function () {
    var ct = this, g = G(arguments),
        h = 0
    g.e(function (t) {
        ct.T(t, 26, 'w', 475, h += 35)
    })
    return this
}


//ticker related

ct.t=  ct.oT=  function(fn){var g=G(arguments)
    if(F(fn)){if(!g.n){fn()}; return this.on('tick', fn) }
    else {T.on('tick', this); return this
    }
}
ct.xT=function(fn){
    this.off( 'tick', fn )
    return this
}


ct.clr = function () {
    var ct = this, arr = [];
    ct.ch(function (ch) {
        ch.rm()
    });
    return ct
}

//ct.a2=function(a){a.A(this); return this}
ct.st = function () {
    return this.stage
}
ct.bData = function (data) {
    return J.bm($.i().src(
        $.parseJSON(data))).a2(this)
}

ct.M = ct.mug = function(){
    var ct = this, g = G(arguments), o
    o = N(g[0]) ? {sc: g[0], fn: g[1]} : {fn: g[0]}
    o.sc = N(o.sc) ? o.sc : 1
    o.fn = o.fn || function () {
    }
    $.G('myMug', function (m) {
        if (!m) {
            alert('!mug')
        }
        ct.bm(m, o.sc, o.fn, g.p ? '+' : null)
    })
    return ct

}
ct.cir = function (x, y, r, c) {
    this.A(J.cir(x, y, r, c));
    return this
}


ct.T = ct.Tx = ct.text = function (t, f, c, x, y) {
    var ct = this, o, cX
    cX = this.st().cen().x
    o = (N(x) && U(y)) ? {y: x, x: cX} : U(x) ? {x: cX, y: 100} : {t: t, f: f, c: c, x: x, y: y}
    return J.T(o.t, o.f, o.c, o.x, o.y).a2(ct)
}

ct.cen = function () {
    return V(this.W() / 2, this.H() / 2)
}

ct.ct = function (x, y) {
    var ct = this, g = G(arguments), x = g[0], y = g[1]
    nCt = $Ct().a2(ct)
    if (N(g[0])) {
        nCt.XY(g[0], g[1])
    }
    if (F(g[0])) {
        g[0](nCt, ct)
    }
    if (g.p) {
        nCt.SL()
    }
    return nCt
}
ct.poly = function () {
    var ct = this // ?

    var h = ct.shape()
    h.poly.apply(h, arguments)
    return h
}
ct.art = function (x, y, c, C) {
    var g = G(arguments), ct = this, h
    if (U(x)) {
        alert('must at LEAST define x');
        return
    }
    if (!N(x)) {
        alert('x not a number! but must be, lah');
        return
    }
    y = N(g[1]) ? g[1] : x
    c = S(g[2]) ? oO('c', g[2]) : null
    C = S(g[2]) ? oO('c', g[3]) : c
    h = cjs.h(x, y, c, C).a2(ct)
    if (g.p) {
        h.drag()
    }
    return h
}
ct.bm = function () {
    var ct = this, g = G(arguments), o, bm
    o = N(g[1]) ? {i: g[0], sc: g[1], fn: g[2]} : {i: g[0], fn: g[1]}
    o.sc = N(o.sc) ? o.sc : 1
    if (_.iDU(o.i)) {
        o.i = $.i(o.i)
    }
    if (O(o.i)) {

        bmp = $Bm(o.i)


        ct.A(bmp)

        if (o.fn) {
            o.fn(bmp)
        }
        return ct
    }


    $.i(o.i, function (e, i) {
        bmp = $Bm(i)
        ct.A(bmp)

        bmp.rC()
        bmp.sXY(o.sc)

        ct.A(bmp)

        //bm.XY( that.W()/2, that.H()/2 )
        // works with stage i guess.. but fucks with 'container' - cant check bounds
        if (g.n) {
            bmp.XY(-1000)
        }
        if (o.fn) {
            o.fn(bmp)
        }
    })

    return ct
}
ct.mc = function () {

    var c =  J.mc.apply(null, arguments)
    this.A(c)
    return c
}
ct.t = ct.tick = function () {
    T.on('tick', this);
    return this
}
ct.A = function () {
    var ct = this, g = G(arguments), $b = $('body')

    if (U(g[0]) && ct.st()) {
        $b.A(
            ct.st().canvas
        )
    }
    else if (N(g[0])) {
        $b.A(ct.st().canvas).abs(g[0], g[1])
    }
    else {
        _.e(g, function (g) {
            ct.addChild(g)
        })
    }
    return ct
}
ct.bgI = ct.bg = function (i) {
    var ct = this;
    ct.bm(i, function (b) {
        ct.setChildIndex(b, 0)
    });
    return ct
}
ct.C = ct.bgC = function (c) {
    $(this.canvas).C(c);
    return this
}
ct.ch = ct.e = ct.each = function (func) {
    var children = []
    _.e(this.children, function (child) {
        children.push(child)
    })
    _.e(children,
        function (child) {
            func(child)
        }
    )
    return this
}
ct.xCh = ct.removeAll = function () {
    this.e(function (ch) {
        ch.rm()
    });
    return this
}
ct.auCl = ct.noAutoClear = function () {
    this.autoClear = false
    return this
}
ct.h = ct.shape = function (x, y, c, C, l, opt) {
    var ct = this,


        h = cjs.h(x, y, c, C, l, opt)
    ct.A(h)


    return h.drag()
}
ct.cir = function (x, y, r, c, C, l, opt) {
    var ct = this
    return ct.h(x, y, c, C, l, opt).dc(r)
}
ct.circ = function (c, r, x, y) {
    var ct = this

    var a= cjs.cir(c, r, x, y)
    ct.A(a)

    return a }
ct.rec = function (c, W, H, x, y, a) {
    var ct = this, ct2, h,
        o = O(c) ? c :
            S(c) ? {c: c, w: W, h: H, x: x, y: y, a: a} :
                N(c) ? {w: c, h: W, x: H, y: x, a: y}
                    : {}


    b2d.oDef(o)

    ct2 = ct.ct()

    h = ct2.h()
        .XY(o.x, o.y)
        .rot(o.a)
        .c(o.c, o.C, o.l)


    if (N(o.o)) {

        //$l('op: '+ o.o)
        h.opacity(o.o)
    }

    if (o.rg) {
        h.rg(o.c, o.C)
    }
    if (o.lg) {
        h.lg(o.c, o.C)
    }
    if (o.bm) {
        h.bm('me', function () {
            h.dr2(o.w, o.h)
        })
    }
    else {
        h.dr2(o.w, o.h)
    }
    return ct2
}
ct.bData = function (data) {
    var a= J.bm($.i().src($.parseJSON(data)))
    this.A(a)
    return a
}
ct.M = ct.mug = function () {
    var ct = this, g = G(arguments), o
    o = N(g[0]) ? {sc: g[0], fn: g[1]} : {fn: g[0]}
    o.sc = N(o.sc) ? o.sc : 1
    o.fn = o.fn || function () {
    }
    $.G('myMug', function (m) {
        if (!m) {
            alert('!mug')
        }
        ct.bm(m, o.sc, o.fn, g.p ? '+' : null)
    })
    return ct
}
ct.clr = function () {
    var ct = this, arr = [];
    ct.ch(function (ch) {
        ch.rm()
    });
    return ct
}
ct.cir = function (x, y, r, c) {
    this.A(J.cir(x, y, r, c));
    return this
}
ct.T = ct.Tx = ct.text = function (t, f, c, x, y) {
    var ct = this, o, cX
    cX = this.st().cen().x
    o = (N(x) && U(y)) ? {y: x, x: cX} : U(x) ? {x: cX, y: 100} : {t: t, f: f, c: c, x: x, y: y}
    return J.T(o.t, o.f, o.c, o.x, o.y).a2(ct)
}
ct.cen = function () {
    return V(this.W() / 2, this.H() / 2)
}
ct.ct = function (x, y) {
    var ct = this, g = G(arguments), x = g[0], y = g[1]
    nCt = $Ct().a2(ct)
    if (N(g[0])) {
        nCt.XY(g[0], g[1])
    }
    if (F(g[0])) {
        g[0](nCt, ct)
    }
    if (g.p) {
        nCt.SL()
    }
    return nCt
}
ct.bm = function () {
    var ct = this, g = G(arguments), o, bm
    o = N(g[1]) ? {i: g[0], sc: g[1], fn: g[2]} : {i: g[0], fn: g[1]}
    o.sc = N(o.sc) ? o.sc : 1
    if (_.iDU(o.i)) {
        o.i = $.i(o.i)
    }
    if (O(o.i)) {
        bmp = $Bm(o.i).a2(ct)
        if (o.fn) {
            o.fn(bmp)
        }
        return ct
    }
    $.i(o.i, function (e, i) {
        bmp = $Bm(i)
        bmp.a2(ct)
        bmp.rC()
        bmp.sXY(o.sc).a2(ct)
        //bm.XY( that.W()/2, that.H()/2 )
        // works with stage i guess.. but fucks with 'container' - cant check bounds
        if (g.n) {
            bmp.XY(-1000)
        }
        if (o.fn) {
            o.fn(bmp)
        }
    })
    return ct
}
ct.mc = function () {
    return J.mc.apply(null, arguments).a2(this)
}
ct.t = ct.tick = function () {
    T.on('tick', this);
    return this
}
ct.A = function () {
    var ct = this, g = G(arguments), $b = $('body')

    if (U(g[0]) && ct.st()) {
        $b.A(
            ct.st().canvas
        )
    }
    else if (N(g[0])) {
        $b.A(ct.st().canvas).abs(g[0], g[1])
    }
    else {
        _.e(g, function (g) {
            ct.addChild(g)
        })
    }
    return ct
}
ct.bgI = ct.bg = function (i) {
    var ct = this;
    ct.bm(i, function (b) {
        ct.setChildIndex(b, 0)
    });
    return ct
}
ct.C = ct.bgC = function (c) {
    $(this.canvas).C(c);
    return this
}
ct.ch = ct.e = ct.each = function (func) {
    var children = []
    _.e(this.children, function (child) {
        children.push(child)
    })
    _.e(children,
        function (child) {
            func(child)
        }
    )
    return this
}
ct.xCh = ct.removeAll = function () {
    this.e(function (ch) {
        ch.rm()
    });
    return this
}
ct.auCl = ct.noAutoClear = function () {
    this.autoClear = false
    return this
}
ct.st = function () {
    return this.stage
}
ct.dot=function(c, x, y){
    var that = this,
        s=this,
        dot,
        tween

    if(b2d.isGPoly(c)){
        _.each(c.verts(), function(v){ s.dot(V(v))  })
        return this}

    if(A(c)){

        _.each(c,
            function(G){
                if(A(G)){s.dot.apply(s, G)}
                else{s.dot(G)}
            })

        return }

    if(!S(c)){y=x; x=c; c='y'}

    if(O(x)){y=x.y; x=x.x}

    x = N(x)?x : s.W()/2
    y = N(y)?y : s.H()/2

    //dot = s.circ(x,y, 6,  oO('c', c)).drag()//.opacity(.4)

    //dot = s.h(x,y).circ(0,0, 6,  oO('c', c)).drag()//.opacity(.4)

    dot =   s.h(x,y).circ(8, c,c).drag()

    tween = dot.tweenLoop([{sxy:1.3},100],[{sxy:1},100]).toggle()

    dot.$$(function(){tween.toggle()})

    dot.N('dot')

    return s}
ct.squareDot=function(color, x, y){var squareDot, tween
    if(!S(color)){y=x; x=color; color='orange'}
    if(O(x)){y= x.y;x= x.x  }
    x= N(x)? x:300
    y= N(y)? y:300
    __squareDot = squareDot = J.rect(20, 20, oO('c', color))//.opacity(.4)
    this.A(squareDot.XY(x, y)//.drag()
    )
    //tween = dot.tweenLoop([{sxy:1.3},100],[{sxy:1},100]).toggle()

    // dot.$$(function(){tween.toggle()})

    return this}
ct.chalk=function(){
    var height = 50,
        that=this,
        text

    _.each(arguments, function(arg){

        text = J.chalk(arg).Y(height).X(50 - that.X())
        height+=40
        that.A(text)

    })


    return text}
ct.pen = function self(arg){

    var that=this


    if(O(self.text)){
        self.text.remove()
    }

    self.text = J.chalk(arg).Y(50).X(50 - that.X())

    that.A(self.text)


    return self.text}






st=cjs.Stage.prototype
st.cannonBall=function(x,y){var s=this,h
    h=s.h(x,y)
    h.rf('a', 'z',18 ).dc(18).ef()
    return h}
st.basketBall=function(x,y){var s=this
    return this.h(x,y).rf('w', 'o',18 ).dc(18).ef()
}
st.beachBall=function(x,y){var s=this
    return s.h(x,y)
        .rf('b','r',18).dc(18).ef()
}
st.snowBall=function(x,y){var s=this
    return s.h(x,y).rf('a','w',18).dc(18).ef()
}

st.snap = function (f) {
    var st = this
    $.P('img', {d: st.toDataURL()})//, dats: o.x.dats
    $.in(1, f)
    return st
}
st.W = function (a) {
    if (U(a)) {
        return this.canvas.width
    }
    ;
    this.canvas.width = a;
    return this
}
st.H = function (a) {
    if (U(a)) {
        return this.canvas.height
    }
    ;
    this.canvas.height = a;
    return this
}
st.WH = function (w, h) {
    var st = this;
    if (U(w)) {
        return V(st.W(), st.H())
    }
    if (N(w)) {
        st.W(w)
    }
    if (N(h)) {
        st.H(h)
    }
    ;
    return st
}
st.hW = function () {
    return this.W() / 2
}
st.hH = function () {
    return this.H() / 2
}
st.ab = st.abs = function (x, y) {
    this.can.abs(x, y);
    return this
}
st.Bm = function (i) {
    return $Bm(i).a2(this)
}
st.N = st.next = function (next) {
    if (U(next)) {
        return this.nextStage
    }
    ;
    this.nextStage = next;
    return this
}
st.trDr = function () {
    var st = this
    st._md = 0
    st.MD(function () {
        st._md = 1
    })
    st.MU(function () {
        st._md = 0
    })
    return this
}
st.du = function () {
    return this.canvas.toDataURL()
}
st.snap = function (f) {
    var st = this
    $.P('img', {d: st.toDataURL()})//, dats: o.x.dats
    $.in(1, f)
    return st
}
st.W = function (a) {
    if (U(a)) {
        return this.canvas.width
    }
    ;
    this.canvas.width = a;
    return this
}
st.H = function (a) {
    if (U(a)) {
        return this.canvas.height
    }
    ;
    this.canvas.height = a;
    return this
}
st.WH = function (w, h) {
    var st = this;
    if (U(w)) {
        return V(st.W(), st.H())
    }
    if (N(w)) {
        st.W(w)
    }
    if (N(h)) {
        st.H(h)
    }
    ;
    return st
}
st.hW = function () {
    return this.W() / 2
}
st.hH = function () {
    return this.H() / 2
}
st.ab = st.abs = function (x, y) {
    this.can.abs(x, y);
    return this
}
st.Bm = function (i) {
    return $Bm(i).a2(this)
}
st.N = st.next = function (next) {
    if (U(next)) {
        return this.nextStage
    }
    ;
    this.nextStage = next;
    return this
}
st.trDr = function () {
    var st = this
    st._md = 0
    st.MD(function () {
        st._md = 1
    })
    st.MU(function () {
        st._md = 0
    })
    return this
}
st.du = function () {
    return this.canvas.toDataURL()
}


st.MD=function(fn){ return this.on( 'stagemousedown' ,fn)}
st.MM=function(fn){return this.on( 'stagemousemove' ,fn)}
st.MU=function(fn){ return this.on( 'stagemouseup' ,fn)}
st.mO=function(){var g=G(arguments),st=this
    if(U(g[0]) || g[0]){st.enableMouseOver(N(g[0])?g[0]:true)}
    else {st.enableMouseOver(false)  }
    return st}
st.eMO=function(data){this.enableMouseOver(data); return this}
st.m=function(ob){var st=this
    if(U(ob)){return J.Pt(st.mouseX, st.mouseY)}
    if(O(ob)){if(ob.d){st.MD(ob.d)}; if(ob.u){st.MU(ob.u)}; if(ob.m){st.MM(ob.m)}}
    return st}
st.mx=st.mX=function(){return this.m().x}
st.my=st.mY=function(){return this.m().y}



st.MU=function(fn){
    this.on("stagemouseup", fn)
    return this}
st.MD=function(fn){
    this.on("stagemousedown", fn)
    return this}
st.MM=function(fn){
    this.on("stagemousemove", fn)
    return this}

