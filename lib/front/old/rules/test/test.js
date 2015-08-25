
testCSSRotate=function(){z()

    //works

    $.h1('css transform: rotate').A()

    d = $.div('x', null, 200).A()
    //   d.css({transform: 'translateY(300px) rotateZ(120deg)'})

    d.trans('translateY(300px) rotateZ(120deg)')

}
testCSSScal=function(){z()


    $.h1('css transform: scale').A()

    i= $.img('me').A()

    // d = $.div('r', null, 200,200).A()


    $.img('me').A().transform( 'scaleX(2)' )
    $.img('me').A().transform( 'scaleY(2)' )

    $.img('me').A().transform( 'scaleZ(2)' ) //does nothing?!


    $.img('me').A().transform( 'rotate3d(100,100,100,100)' )

}


testRule=function(){
    z()
    $.div('b',400,400).A().A( $.span('hifds') )


    $.CSSRule('div', 'color:Orange')


}
testStyle=function(){//WORKS

    $.div('b',400,400).A().A( $.span('hifds')).id('div')

    var style = document.createElement('style');

    style.type = 'text/css';

    var rule = '.cssClass { color: #F00; }'

    style.innerHTML = rule

    $( 'head' ).append(style)

//////

    $( '#div' ).K( 'cssClass' )



}
$.addStyle=function(){
    _.each(arguments, function(rule){

        $('<style>'+ rule + '</style>').A()
    })


}
$.CSSReset=function(){
    $.CSSRule({'*':{m:0,p:0},  //css reset
        'html,body':{h:'100%', w:'100%'},
        canvas:{d:'b'}})
}
testPlugin=function(){ z()

    d = $.div('r' ).WH( 100 ).A().A( 'abc' )

    e = $.div().WH( 100 ).col( 'r' ).A().A( 'abc' )

    f = $.div('r').WH( 100 ).col( 'b' ).A().A( 'abc' )

    g = $.div( 'b' , 500 , 500 ).A() }


