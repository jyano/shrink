J = cjs
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
$T=function(a,f,c,x,y){
    var t

    if(N(f)){
        f  = String(f) + "px Arial"


    }
    if(S(c)){c=oO('c', c)}

    t= new J.Text(a,f,c)

    if(O(x)){

        if(F(x.cen)){
            x= x.cen()
        }
        y= x.y
        x= x.x
    }

    if(N(x)){t.X(x)}
    if(N(y)){t.Y(y)}


    return t
}
$Ct = function () {
    return new J.Container()
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

    cjs.ball = function (r, c, C) {//canon

        var b = cjs.circle(0, 0, r, c, C)

        b.d = r + r

        b.T = function (a) {
            if (U(a)) {
                return b.y() - b.r
            }
            b.y(a + b.r);
            return b
        }

        b.B = function (a) {

            if (U(a)) {
                return b.y() + b.r
            }

            b.y(a - b.r)

            return b
        }


        b.L = function (a) {
            if (U(a)) {
                return b.x() - b.r
            }
            b.x(a + b.r);
            return b
        }
        b.R = function (a) {
            if (U(a)) {
                return b.x() + b.r
            }
            b.x(a - b.r);
            return b
        }
        b.F = 1
        b.fall = function (r) {
            b.t(function () {
                if (r) {
                    if (ballBox(b, r)) {
                        b.F = 0
                    } else {
                        b.F = 1
                    }
                }
                if (b.F) {
                    b.y(10, '+')
                }
            })
        }

        return b
    }
    cjs.box = function (w, h, fc, sc) {

        w = w || 200

        h = h || w

        var b = rct(
            0 - w / 2, 0 - h / 2, w, h, fc, sc
        )

        b.wr = w / 2

        b.hr = h / 2

        b.wd = w

        b.hd = h


        b.top = b.T = function (a) {
            if (U(a)) {
                return b.y() - b.hr
            }

            b.y(a + b.hr)

            return b
        }

        b.bottom = b.B = function (a) {

            if (U(a)) {
                return b.y() + b.hr
            }


            b.y(a - b.hr)

            return b
        }

        b.left = b.L = function (a) {

            if (U(a)) {
                return b.x() - b.wr
            }

            b.x(a + b.wr)

            return b
        }

        b.right = b.R = function (a) {

            if (U(a)) {
                return b.x() + b.wr
            }
            b.x(a - b.wr);
            return b
        }

        b.fall = function () {
            b.t(function () {
                if (b.F) {
                    b.y(40, '+')
                }  //****
                if (ballBox(b, r)) {
                    b.F = 0
                }
            })
        }

        return b
    }

    cjs.ballBox = function (bl, bx, buff) {
        buff = buff || 100
        var b = bl.bottom() >= bx.top() && bl.top() <= bx.top() + buff &&
            bl.x() >= bx.left() && bl.x() <= bx.right()
        if (b) {
            bl.bottom(bx.top())
        }
        return b
    }
    cjs.circle2 = function (r, z, x, y) {
        gx = new cjs.Graphics()
        if (!S(r)) {
            return cjs.circle2('red', r, z, x)
        }
        z = _.tN(z, 32)
        x = _.tN(x, 100)
        y = _.tN(y, 100)
        gx.ss(z / 8).f(r, 'black').dc(z)
        return cjs.h(gx).XY(x, y)
    }
    cjs.circle3 = function (x, y, r, c, C) {

        var h = cjs.shape()
        if (O(x)) {
            return cjs.circle3(x.x, x.y, x.r, x.c, x.C)
        }

        x = _.tN(x)
        y = _.tN(y)
        r = _.tN(r, 8)

        h.cir(x, y, r, c || 'w', C || 'z')
        SL(h)
        return h
    }

    SuperBitmap = SuperBitmapSync = bm = function (img, stage) {
        alert('superbitmapsync')
        var superBitmap = Do(new cjs.Bitmap(src(img)))

        if (O(stage)) {
            stage.a(superBitmap)
        }
        return superBitmap
    }

    SuperBitmapAsync = function (i, fn) {
        alert('superbitmapasync')
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
        alert('cjs.bmsync')
        var bm = $Bm(src(i[0]))

        if (O(st)) {
            st.A(bm)
        }

        return bm
    }
    cjs.Bm = $bitmapAsync = Bm = function (img, fn) {alert('cjs.Bm')
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



}