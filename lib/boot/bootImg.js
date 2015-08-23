$l('bootImg')

$.iR= $.imgResponsive=function(s,f){return $.img(s,f).K('img-responsive')}
$.iCir= $.imgCircle=function(s,f){
    return $.img(s,f).K('img-circle')
}
$.iRo= $.imgRounded=function(s,f){
    return $.img(s,f).K('img-rounded')
}
$.iTh= $.imgThumbnail=function(s,f){
    return $.img(s,f).K('img-thumbnail')
}

exampleImgResponsive=function(){$.boot(

    $.sm(3).A(

        $.well(

            $.imgResponsive('chicks')

        )
    )

)

}
exampleResponsive=function(){

    $.boot(

        $.md(2).A(

            $.imgResponsive('me')  ,
            $.imgResponsive('chicks')  ,
            $.imgResponsive('me')

        )


    ).C('r')



}
exampleImages=function(){$.boot(


    $.imgCircle('chicks').C('y'),
    $.imgRounded('guy').C('y'),
    $.imgThumbnail('sun').C('y')



)}

function x() {

    $.tSrc = $.tDu = function (s) {
        return S(s) ? sJ : tU(s) ? tU(s)
            : s.u ? s.u() : iI(s) ? s.src
            : s.image ? s.image.src : 0
    } //s/c/C/i/b->s sync


    responsiveBottomPanel = function () {
        z()
        $.div('red').P('f').X(0).css({
            bottom: 0,
            width: '50%', height: '50%',
            'min-width': 110,
            'max-width': 318,
            opacity: 4
        }).A().A($.img('me'))
        // call and then play with browser size
    }

}