$l('navvvv')

$.dropDown=function(a,f){   var l = $('<a>').id(a).A(a);
    if(F(f)){  l.click(f)  } else {  l.href( f|| '#' )}
    return  l.K('dropdown-toggle').attr({ 'data-target' : 'dropdown' })}
$.active=function(a,f){   var l = $('<a>').id(a).A(a);
    if(F(f)){  l.$(f)  } else {  l.href( f|| '#' )}
    return l.K('active')
}


$.sNR= $.nSR=   function(){
    return $.f().K("navbar-form navbar-right").A(
        $.dK('form-group').A($('<input>').K('form-control').attr('placeholder','search')),
        $.submitButton().A( $.gl('search')))
}

$.ddT=   function(a){return $.a( a ).K("dropdown-toggle").toggle("dropdown").A($.caret())}
$.ddM= function(){var menu
    menu= $.ul().K("dropdown-menu")
    _.e(arguments, function(g){menu.A( $.liA(g,function(){
        window.location='/wap/'+g
    }))})
    return menu
}
$.dd= function(a,b){return  $.li().K("dropdown").A($.ddT(a), $.ddM.apply($, b) )}
$.n=  function(){var g=G(arguments), n
    n = $.ul().K("nav navbar-nav")
    _.e(g, function(g){ n.A( g ) })
    return n
}
$.nR=  function(){var g=G(arguments),n
    n= $.ul().K("nav navbar-nav navbar-right")
    _.e(g, function(g){ n.A( g ) })
    return n
}
$.nb=  function(){return $.dK("navbar navbar-default").A($.dK("container-fluid"))}
$.nbH=function(brand, link){return $.dK("navbar-header").A(

    $.bt().K("navbar-toggle collapsed").toggle('collapse').target(".navbar-collapse").A(
        $.sp("Toggle navigation").K("sr-only"),
        $.iconBar(),$.iconBar(),$.iconBar()
    ),

    $.a(brand).K("navbar-brand").$( function(){  $.l(link)  })
)}
$.nbC=  function(){return $.dK("navbar-collapse collapse")}
