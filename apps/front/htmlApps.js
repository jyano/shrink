

TXFO=function(){z()

    return $.form().A(

        $.sel(
            ['single'],
            'Single',
            'Single2'),

        $.sel(
            ['multiple', '+'],
            'Multiple', 'Multiple2','Multiple3' ),

        $.cb(
            ['check','check1', 'ch1'],
            ['check', 'check2', 'ch2', '+']),

        $.rb(
            ['radio','radio1', 'r1', '+'],
            ['radio', 'radio2', 'r2'],
            '+'),

        $.submit()

    ).A()

}
TXF=function(){z(); $.f().A(
    $.sel(['sing'], 'Sing', 'Sing2'),
    $.sel(['mult', '+'], 'Mult', 'Mul2','Mult3' ),
    $.cb(['ch','ch1', 'ch1'], ['ch', 'ch2', 'ch2', '+']),
    $.rb(['ra','ra1', 'r1', '+'], ['ra', 'ra2', 'r2'], '+'),
    $.submit()).A()
}
BTR=function(){z(); d= $.d('b', 500, 500,'+').A(b=$.btR('yes'))}

testButtonRight=function(){z()
    d= $.div('b', 500, 500).drag()
    d.A(b=$.buttonRight('yes'))
}

CORNERS=function(){
    //  dva(2, 2, 2, 2 )
    div = $.dA(200,200).A(
        $.dA('r', 20, 20).top(-10).left(-10),
        $.dA('y', 20, 20).bot(-10).R(-10),
        $.dA('g', 20, 20).top(-10).R(-10),
        $.dA('b', 20, 20).bot(-10).left(-10)
    );
    i = $.dF('u').col('w').fS( 20).al(.2).tA('c').width('100%').top(100);
    i.H( W() + ' * ' + H() );
    Z(function(){  i.H(  W() + ' * ' + H() )  });

    $.$( function(){ _.rat( function(){$('body').C($r())  } , 10 )
    });
    i.grow()
}

FRAG=function(){$.x('x', 'frag')
    frg = $.frg()
    _.t(5, function(i){  frg.A($.sp(i))  })
    $.d([$.hr(), frg, $.hr()])
}