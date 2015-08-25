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