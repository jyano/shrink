b=b2d.Body.prototype
b.St = b.S = b.stg = function () {return this.W().s}



b.$h=function(){var h = $H()
    this.bS(h)
    h.c.apply(h, G(arguments))
    return h

}


b.bS=function(){var b = this, w = b.W(), g = G(arguments), o,


    i, a, sc


    //pass it a display object (which i guess implies its already loaded)
    o = cjs.iDO(g.f) ? {i:g.f, bm:g.f} :



//  they can pass their own data object

        g.O ? g.f :



            // or they can use a short cut call:
        {


            i: g.f || 'me', sc: g.s, x: g.t, y: g[3], rt: g[4], al: g[5]

        }


    //if not loaded, async loads and passes it back as a data object
    //next time, then, when loaded it can bypass async

    if (S(o.i)){
        w.g.bm(o.i, function(bm){
            b.bS( _.x(o, {i:bm, bm:bm }) )
        })
        return this
    }

    //defaults
    o.sc = N(o.sc, ( cjs.iH(o.i) ? 1 : .4 )); if (!A(o.sc)) {o.sc = [o.sc, o.sc]};
    o.x = N(o.x, 0);
    o.y = N(o.y, 0)
    o.rt = N(o.rt, 0);
    o.al=N(o.al,1)

    //they can pass in a formed shapeer
    if ( !g.n && !cjs.iH(o.bm) && !cjs.iCt(o.bm) ) {o.bm.rC() }//regCent

    //can not center things that dont have dimensions!//scale, position and place the bm in the ct (which is on the stage)
    this.gx = this.gx || w.g.ct()
    o.bm.sXY(o.sc).XY(o.x, o.y).rt(o.rt).al(o.al).a2(this.gx)
    return this
}
b.Bm=function(iS,x,y,sX,sY,rt){
    var b=this,w= b.W(),g=G(arguments); b.gx = b.gx || w.g.ct()
    if(S(iS)){ this.gx.bm(iS, fn) }
    if(O(iS)){fn(iS);return iS}
    return b
    function fn(bm) {
        bm.rC().XY(N(x,0),N(y,0))
            .sXY(N(sX,1), N(sY,sX||1))
            .rt(N(rt,0))
    }

}
b.Sp=function(spO,x,y,sX,sY,rt){var sp
    this.gx = this.gx || w.g.ct()
    this.gx.A(sp = $Sp(spO||Mummy) )
    sp.rC()
        .XY(
        N(x,0),
        N(y,0))
        .sXY(N(sX,1), N(sY, (sX||1)))
        .rt(N(rt,0))

    return sp
}
b.sp = function() {var b = this, g = G(arguments), ch

    if (b.gx && b.gx.children) {
        ch = g.p ? b.gx.children : g.n ? b.gx.children[0] : _.l(b.gx.children)
        if (g.u) {return  ch}
        if(g.F_){ _.e(ch, g.f); return this }
    }
}

