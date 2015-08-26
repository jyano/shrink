_bm=function(i){return new cjs.Bitmap(i)}
$Bm= cjs.B= cjs.bm= function () {  var g=G(arguments), bm, i= g.f
    if (O(i)){
        if ($.iI(i)){
            bm = _bm(i = $(i)[0])
            if(g.p){ bm.drag() }
            return ( bm )
        }
        bm = $Bm(i.i)
        if (i.al) {bm.al(i.al)}
        if (i.fl) {bm.fl(i.fl)}
        if (i.aF2) {bm.aF2(i.aF2)}
        return bm
    }
}


SuperBitmapAsync = cjs.Bm = $bitmapAsync = Bm = function (i, fn) {
    alert('superbitmapasync')
    //i = i[0]
    if (O(i) && S(i.d)) {i = i.d}
    $.i(i, function (i) {bm = $Bm(i)
        if (F(fn)) {fn(bm)}
        if (S(fn)) {$w[fn] = bm}})
    return i}
cjs.BmSync = function (i, st) {    alert('superbitmapsync')
    var bm = $Bm(_.src(i[0]))
    if (O(st)) {st.A(bm)}
    return bm

}
old=function() {
    SuperBitmap = SuperBitmapSync = bm = function (i, stage) {
        var superBitmap = Do(new cjs.Bitmap(_.src(i)))
        if (O(stage)) {
            stage.a(superBitmap)
        }
        return superBitmap
    }
    cjs.bm = cjs.bitmap = function (i) {
        alert('J.bm')
        var g = G(arguments), i = g[0],
            bm = new J.Bitmap(i)
        if (!g.n) {bm.rC()}
        return bm
    }

}

//async: source obj can be:
// Image|HTMLCanvasElement|HTMLVideoElement
// |String URIto an image file to load and use.
//If it is a URI, a new Image object will be constructed and assigned to the .image property.
//sync:source obj can be:
// Image|HTMLCanvasElement|HTMLVideoElement
// |String URIto an image file to load and use.
//If it is a URI, a new Image object will be constructed and assigned to the .image property.
