cjs.isText=function(t){
    if(O(t)){
        return (  t.textBaseline   )
    }
}
cjs.text = function(text, font, color,  x, y){

    x=N(x)?x:600
    y=N(y)?y:100

//var g=G(arguments); if(g.N){text.bl( 'alphabetic' )}   //if(g.p){ TR(text) }

    if(N(font)){ font = font + 'px Arial' }
    font = font || '50px Arial'
    color = color||'y'

    textOb =   new createjs.Text(  text,  font,  oO('c',color)  )
    textOb.regX = textOb.W()/2
    textOb.XY(x, y)


    return textOb}
cjs.niceText=function(text,x,y){

    var t= cjs.text(text, 'yellow', '40px Arial')

    if(N(x)){t.XY(x,y)}
    return t.drag()
}
function textApps(){
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
$Tc=function(a,f,c,x,y){

        var t= $T(a,f,c,x,y)

        t.tA('center')
        return t
    }
TextAdder=function(stage){

        var f= $.f().a().c('x').P(10).w(300).dg()

        f.A(
            $.ip().id('text'),

            $.bt('for text',   function(){var  _text,theText,val = $l( $('#text').val()  )
                $('#text').val('')
                _t = $T(val,'w', 30, 100, 10)
                t=  $Ct().A( _t )
                t.dO = _t
                SL(t)
                st.A(t)
                selected(t)
            }))

        return f
    TextAdder2=function(stage){

        var form= $form().a().c('x').P(10).w(300).drg()

        form(

            $textInput().id('text'),

            $.bt(  'for text',   function(){
                var val = $l( $('#text').val()  )

                $('#text').val('')

                var theText= EaselText(val,'w', 30, 100, 10)
                SL(theText)


                stage.a( theText )


            }))




        return form }
    }

