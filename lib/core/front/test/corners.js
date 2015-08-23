

CORNERS=function(){
    //  dva(2, 2, 2, 2 )
    div = $.dA(200,200).A(
        $.dA('r', 20, 20).top(-10).left(-10),
        $.dA('y', 20, 20).bottom(-10).right(-10),
        $.dA('g', 20, 20).top(-10).right(-10),
        $.dA('b', 20, 20).bottom(-10).left(-10)
    );
    i = $.dF('u').col('w').fS( 20).al(.2).tA('c').width('100%').top(100);
    i.H( W() + ' * ' + H() );
    Z(function(){  i.H(  W() + ' * ' + H() )  });

    $.$( function(){ _.rat( function(){$('body').C($r())  } , 10 )
    });
    i.grow()
}
