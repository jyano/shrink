
BASELINE=function(){z()

    s=cjs.stage(1000).A()



    s.bm('me', function(bm){b=bm
        bm.XY(300).sXY(.2)
        s.dot(300,300)})



    s.A(t = cjs.text('baseline: top').XY(300).sXY(4).drag())
    s.A(t2 = cjs.text('baseline: bottom').XY(300).sXY(4).drag().baseline('bottom'))
    s.A(t3 = cjs.text('baseline: middle').XY(300).sXY(4).drag().baseline('middle'))


}
LINEH=function(){z()

    s=cjs.stage(1000).A()



    s.bm('me', function(bm){b=bm
        bm.XY(300).sXY(.2)
        s.dot(300,300)})



    s.A(
        t = cjs.text('lineheight -100').XY(300).sXY(4).drag().lineH(-100)
    )


    s.A(
        t2 = cjs.text('lineheight 0').XY(300).sXY(4).drag().baseline('bottom').lH(0)
    )

    s.A(
        t3 = cjs.text('lineheight 100').XY(300).sXY(4).drag().baseline('middle').lH(100)
    )


}
LINEW=function(){z()

    s=cjs.stage(1000).A()



    s.bm('me', function(bm){b=bm
        bm.XY(300).sXY(.2)
        s.dot(300,300)})



    s.A(t = cjs.text('linewidth 0').XY(300).sXY(4).drag().lineW(0))
    s.A(t2 = cjs.text('linewidth null').XY(300).sXY(4).drag().baseline('bottom'))
    s.A(t3 = cjs.text('linewidth 100').XY(300).sXY(4).drag().baseline('middle').lW(800))


}
ALIGN=function(){z()

    s=cjs.stage(1000).A()



    s.bm('me', function(bm){b=bm
        bm.XY(300).sXY(.2)
        s.dot(300,300)})

    s.bm('me', function(bm){b=bm
        bm.XY(500).sXY(.2)
        s.dot(500,500)})

    //textAlign
    s.A(t = cjs.text('linealign left').XY(300).sXY(4).drag()) //default
    s.A(t2 = cjs.text('linealign right').XY(300).sXY(4).drag().baseline('bottom').align('right'))
    s.A(t3 = cjs.text('linealign center').XY(300).sXY(4).drag().baseline('middle').align('center'))

    //textBaseline
    s.A(t = cjs.text('baseline: top').XY(500).sXY(4).drag())
    s.A(t2 = cjs.text('baseline: bottom').XY(500).sXY(4).drag().baseline('bottom'))
    s.A(t3 = cjs.text('baseline: middle').XY(500).sXY(4).drag().baseline('middle'))}
