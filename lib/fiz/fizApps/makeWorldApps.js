

NRM=function(){
    W()
    w.D(800,300,'b',10).d(1)
    w.D(800,300,'x',10,10).d(1)
    b= w.D(800,300,'b',100).d(1)
    x= w.D(800,300,'x',100,100).d(1)
    w.D(800,300,'b',200).d(1)
    w.D(800,300,'x',200,200).d(1)
    // w.s.al(0)
    w.i.autoClear=false
    return w
}

CANC=function() {
    Q(function () {
        z()


        w = {W: 1200, H: 600}

        ii = w.I = $St('z', w.W, w.H, 0, 0).t()

        s = w.s = $St('X', w.W, w.H, 0, 0).t()

        w.canvas = w.s.canvas

        w.can = $(w.canvas)

        w.ctx = w.can.ctx('2d')

        bg = w.bg = w.s.ct()

        g = w.g = w.s.ct()

        fg = w.fg = w.s.ct()

        i = w.i = $St('X', w.W, w.H, 0, 0).t()

        g.bm('me', function (bb) {
            b = bb.drag()
        })

        i.bm('me', function (bb) {
            b = bb.drag()
        })

    })

}

CANC1=function(){

    w={W:1200,H:600}

    /*
     w.I = $St('z', w.W, w.H ,0, 0).t()
     w.s= $St('X', w.W, w.H, 0, 0).t()//.aC(0)
     w.canvas = w.s.canvas
     w.can= $(w.canvas)
     w.ctx = w.can.ctx('2d')
     w.bg= w.s.ct();
     w.g=  w.s.ct();
     w.fg= w.s.ct()
     */
    w.i =  $St('b', w.W, w.H, 0, 0).t()
    /*
     ii = w.I
     s= w.s
     bg= w.bg
     g= w.g
     fg= w.fg
     i= w.i
     */
    _.in(1,function(){
        w.i.bm('me','+')
    })
}
