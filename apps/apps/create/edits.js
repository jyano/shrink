

GROW = function () {
    z()

    $St(500, 500).bm('me', function (bm) {
        b = bm
        bm.grow().dg()
    })

}
FANCYEDIT = function (x, y) {


    z()

    canvas = $.c('g', 400)
    st = stage = $St(canvas[0])

    frame = $.dragFrame(sp = $.sp())


    sp.A(
        $.bt('X', function () {
            frame.rm()
        }),
        $.bt('pics', function () {
            $.imagesDiv(st)
        }),

        $.bt('transform'),
        $.bt('text'),

        $.bt('paint', function () {

            _paintColor = '#0FF'

            var size = 10, oX = 0, oY = 0, shape

            var paintStage = $.dragStage()

            // stage.a(  EaselText('finger paint', 'b', 40, 100, 10))

            paintStage.bm(
                st.du(), //?

                function (m) {


                    m.XY(40).sXY(.4)
//                    stagePainter(paintStage)
                })


        }),
        $.bt('cut'),

        $.bt('save'))

    sp.A($.br(), canvas)

    sp.A($.d().A(
        $.bt('clear', function () {
            st.removeAllChildren()
        }),

        $.bt('flat', function () {
            st.removeAllChildren()
            st.bm(st.toDataURL(), function (bm) {
                bm.dg()
            })
        }),

        $.bt('clone', function () {


            var sp = $.sp(),
                newStage = $.dragStage().A(sp)
            newStage.bm(st.du(), function (bm) {
                SL(bm)
            })
        }),

        $.bt('recur', function () {

            stbm(st.du(), function (bm) {

                bm.sxy(.4).SL()

            })
        }),

        $.bt('copy', function () {

            _copy = st.du()


        }),

        $.bt('paste', function () {
            st.bm(_copy, function (bm) {
                bm.drag()
            })
        }),

        $.bt('replace', function () {

            st.rm()
            st.bm(_copy, function (bm) {
                bm.dg()
            })

        })
    ))

    sp.$$(function () {
        $('button').toggle()
    })


    sp.A()


}

function test() {
    selected = function (bm) {
        alert('selected');
        SL(bm);
        bm.$(function () {
            createjs.Tween.removeAllTweens()
            bitmap = bm
            createjs.scaleShake(bm.dO)
        })
    }
}

function advan() {

//important for ipad
//move this onto stage itself
    touchEnable = function (s) {
        cjs.Touch.enable(s);
        return s
    }
    cjs.HSL = function (a, b, c) {
        if (U(a)) {
            return HSL(M.rand() * 360, 100, 50)
        }
        return cjs.Graphics.getHSL(a, b, c)
    }
    cjs.testCanvas = function () {
        return $.d().A($.c(960, 400).id("testCanvas"))
    }
    cjs.sharedCode = function () {
        var o
        if (document.body) {
            setupEmbed()
        }
        else {
            document.addEventListener("DOMContentLoaded", setupEmbed)
        }
        function setupEmbed() {
            if (window.top != window) {
                document.body.className += " embedded"
            }
        }

        o = window.examples = {}
        o.showDistractor = function (id) {
            var div = id ? document.getElementById(id) : document.querySelector("div canvas").parentNode;
            div.className += " loading"
        }
        o.hideDistractor = function () {
            var div = document.querySelector(".loading")
            div.className = div.className.replace(/\bloading\b/)
        }
    }
}
old=function(){
    $.sv= sv=function( x, fn ){
        alert('sv')
        $.post('/img', {
            d: xx( C( x ) ).u(),
            dats: x.dats}, fn)
    }
}
