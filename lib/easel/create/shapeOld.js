

cjs.RECTx = function (c, W, H, x, y, a) {
    $l('rect!')
    //hW = W/2; hH = H/2  //.mt(-hW,-hH).lt([-hW,hH],[hW,hH],[hW,-hH],[-hW,-hH])

    var hW, hH, h, ct = cjs.ct(), o, g = G(arguments)

    if (S(c)) {

        o = {c: c, w: W, h: H, x: x, y: y, a: a}
    }

    //hW = W/2; hH = H/2
    o = o || O(g[0]) ? g[0] : {}

    o.w = _.tN(o.w, 50)
    o.h = _.tN(o.h, 50)
    o.x = _.tN(o.x)
    o.y = _.tN(o.y)
    o.a = _.tN(o.a)
    o.c = oO('c', o.c || 'g')

    h = $h()

    h.c(c)

    h.dr2(x, y, W, H)         //.mt(-hW,-hH).lt([-hW,hH],[hW,hH],[hW,-hH],[-hW,-hH])

    h.rot(a)

    h.XY(x, y)

    ct.A(h)

    return ct

}


// duplicate? $Ct= J.container = J.ct  =function(a){ return new J.Container(a)}

cjs.cirX=function(stg,x,y,r,f,s,width,opt){
    var shp=cjs.shape(stg,x,y,f,s,width,opt) // ss = N(ss)?ss: radius/8
    shp.dc(0,0,r)
    return shp}

cjs.RECTx= function self(col, wd,ht, x, y, rot){var halfW,halfH, h, ct = cjs.ct()

    wd=N(wd)?wd:50
    ht=N(ht)?ht:50
    x=N(x)?x:0
    y=N(y)?y:0
    rot=N(rot)?rot:0
    col= oO('c', col||'g')

    halfW = wd/2
    halfH = ht/2

    h = cjs.h().c(col,col)
        .mt(-halfW, -halfH )
        .lt(-halfW,halfH )
        .lt(halfW, halfH )
        .lt(halfW,-halfH )
        .lt(-halfW,-halfH )

    ct.A( h.rot(rot).XY(x,y)  )

    return ct}
ct.RECTx =function(c, W,H, x,y, a){
    var ct=this, h

    //return cjs.RECT(c, w, h, x, y, a).a2(ct)


    return ct.rec({

        c:c,   w:W,    h:H,   x:x,   y:y,   a:a

    })


}
ct.rectx=function(x,y,w,h,c,C,l,opt){
    var ct=this


    return ct.h(x,y,c,C,l,opt).dr(0,0,w,h)
}


//b2d.colMap=function(C){return _.map(C,function(c){return oO('c',c)})}
ct.bmRegCenterX = ct.bm0X= function(img, func){
    var that =this
    $.i(img, function(image){
        var bm = new J.Bitmap( image[0] )
        bm.regX = bm.W()/2
        bm.regY = bm.H()/2
        that.A( bm );
        if(func){func( bm )}
    })

    return this}


// duplicate? $Ct= J.container = J.ct  =function(a){ return new J.Container(a)}
//
////// old///

ct.bmRegCenterX = ct.bm0X= function(img, func){
    var that =this
    $.i(img, function(image){
        var bm = new J.Bitmap( image[0] )
        bm.regX = bm.W()/2
        bm.regY = bm.H()/2
        that.A( bm );
        if(func){func( bm )}
    })

    return this}