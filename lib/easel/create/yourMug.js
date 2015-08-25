

withYourMugId = gMg = function (func) {
    $.get('/gMg', func)
}  //should it try websocket first?
wM = withYourMugData = getMug = function (func) {
    $.get('/myMug', func)
}
//dep by withYourMugData?
//wM=function(f){  withYourMugId(      function(mugId){ $.get('/mug/'+  mugId, f )   }     ) }
withYourMug = wMD = function (fn) {
    withYourMugId(function (mugId) {
        $.post('/dats', {d: mugId}, fn)
    })

}
wMb = function () {
    var g = G(arguments),

        f = g[0], st = g[1]

    wM(function (a) {

        SuperBitmapAsync(
            a,
            function (b) {
                if (st) {
                    st.A(b)
                }   // if stage passed, add bm to stage
                f(b, st)         //run cb, and pass it bm and stage
            })
    })

    return st

}
$wMb = function (f, stage) {

    wM(function (a) {

        cjs.Bm(a, function (b) {

            if (stage) {
                stage.A(b)
            }   // if stage passed, add bm to stage

            if (f) {
                f(b, stage)
            }       //run cb, and pass it bm and stage

        })
    })

    return stage
}
//with mug, after creating and putting it on a stage
wMs = function (func, w, h, bg) {
    var g = G(arguments)

    func = g[0]
    w = g[1]
    h = g[2]
    bg = g[3]

    var stage = St(w || 1000, h || 800, '+')

    if (g.p) {
        stage.drg()
    }

    if (g.n) {
        s2.A(stage)
    }

    if (bg) {
        stage.bgi(bg)
    }

    return wMb(func, stage)

}
$wMs = function (func, w, h, bg) {
    var g = G(arguments)

    func = g[0]
    w = g[1]
    h = g[2]
    bg = g[3]

    var stage = St(w || 1000, h || 800, '+')

    if (g.p) {
        stage.drg()
    }

    if (g.n) {
        s2.A(stage)
    }

    if (bg) {
        stage.bgi(bg)
    }

    return wMb(func, stage)

}

