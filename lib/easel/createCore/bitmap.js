
cjs.bm = cjs.bitmap =function(img){
    alert('J.bm')
    var g=G(arguments), img=g[0],
        bm = new J.Bitmap(img)
    if(g.N){bm.rC()}
    return bm
}


$Bm= function (i) {
    if (O(i)) {var bm
        if ($.iI(i)) {
            i = $(i)[0]
            _i = i
            bm = new cjs.Bitmap(i)
            return bm
        }
        bm = $Bm(i.i)
        if (i.al) {
            bm.al(i.al)
        }
        if (i.fl) {
            bm.fl(i.fl)
        }
        if (i.aF2) {
            bm.aF2(i.aF2)
        }
        return bm
    }
}
SuperBitmap = SuperBitmapSync = bm = function (img, stage) {

    var superBitmap = Do(new cjs.Bitmap(src(img)))

    if (O(stage)) {
        stage.a(superBitmap)
    }
    return superBitmap
}
SuperBitmapAsync = function (i, fn) {

//source obj can be:
// Image|HTMLCanvasElement|HTMLVideoElement
// |String URIto an image file to load and use.
//If it is a URI, a new Image object will be constructed and assigned to the .image property.
    i = i[0]
    if (O(i) && S(i.d)) {
        i = i.d
    }
    $.i(i, function (img) {
        bm = $Bm(img)
        if (F(fn)) {
            fn(bm)
        }
        if (S(fn)) {
            $w[fn] = bm
        }
    })

    return i
}
cjs.BmSync = function (i, st) {

    var bm = $Bm(src(i[0]))

    if (O(st)) {
        st.A(bm)
    }

    return bm
}
cjs.Bm = $bitmapAsync = Bm = function (img, fn) {
//source obj can be:
// Image|HTMLCanvasElement|HTMLVideoElement
// |String URIto an image file to load and use.
//If it is a URI, a new Image object will be constructed and assigned to the .image property.
    if (O(img) && S(img.d)) {
        img = img.d
    }
    $.i(img, function (i) {
        bm = $Bm(i)
        if (F(fn)) {
            fn(bm)
        }
        if (S(fn)) {
            $w[fn] = bm
        }
    })
    return img
}



