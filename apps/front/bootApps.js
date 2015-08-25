

TN =function(){z()
    wrap = $.wrap

    $.boot(
        wrap('me'),
        wrap('guy' ),
        wrap('chicks'),
        wrap( 'me' ),
        wrap( 'guy') ,
        wrap( 'chicks' ),
        wrap( 'me' ),
        wrap( 'guy' ),  wrap( 'chicks' ),
        wrap( 'me' ),   wrap( 'guy' ), wrap( 'chicks' ),
        wrap( 'me' ),   wrap( 'guy' ), wrap( 'chicks' )
    )
}
JUMB = function(){  $.boot(

    $.jumbo(
        'My first Bootstrap website!',
        $.p('This page will grow as we add more and more components from Bootstrap...')),

    $.paragraphs(
        'This is another paragraph',
        'This is a paragraph',
        'This is another paragraph')

)}
VOLUME=function(){
    r = $.R().W(600);
    outerDiv = $.d('y', 400, 200).A().dg().A(r);
    r.dg().A(
        $.d().id('booksDiv').K('col-md-6'),
        $.d().id('displayDiv').K('col-dm-6').A($.i('guy')));
    Book = function (title) {
        var b;
        b = $.d('b', 60, 60).K('book');
        b.A($.h4(title || 'book'));
        b.display = $.i('me').K('display').hd();
        return b
    };
    addBook = function (title) {
        var b;
        b = Book(title);
        $('#booksDiv').A(b);
        $('#displayDiv').A(b.display);
        $('.book').$(function () {
            $(this).id()
        });
        return b
    };
    a = addBook('a');
    b = addBook('b')
}
RESP=function(){

    $.xs = $.phones = function self(color, num){
        if(N(color)){return self(null,color)}
        var div = $.d()
        if(color){div.C(color)}
        div.K('col-xs-'+num)
        return div}
    $.sml = $.tablets = function self(color, num){
        if(N(color)){return self(null,color)}
        var div = $.d()
        if(color){div.C(color)}
        div.K('col-sm-'+num)
        return div}
    $.md = $.desktops = function self(color, num){
        if(N(color)){return self(null,color)}
        var div = $.d()
        if(color){div.C(color)}
        div.K('col-md-'+num)
        return div}
    $.lg = $.largeDesktops =function (c, num){
        if(N(c)){return $.lg(null,c)}
        var d = $.dK('col-lg-'+num)
        if(c){d.C(c)}
        return d
    }
    exampleMixedMobileAndDesktop= function(){z()
        //The Bootstrap grid system has four classes: xs (phones), sm (tablets),
        // md (desktops), and lg (larger desktops).
        // These classes can be combinated to create more dynamic and flexible layouts.
        //  Tip: Each class scales up, so if you wish to set the same widths
        // for xs and sm, you only need to specify xs.


        cont = $.container().A()

        cont.A(
            $.row(
                $.div('r').K("col-xs-12 col-md-8").A('col-xs-12 .col-md-8'),
                $.div('b').K("col-xs-6 col-md-4").A('col-xs-6 col-md-4')
            ),


            $.row(

                $.div('a').K("col-xs-6 col-md-4").A('.col-xs-6 .col-md-4'),
                $.div('b').K("col-xs-6 col-md-4").A('.col-xs-6 .col-md-4'),
                $.div('c').K("col-xs-6 col-md-4").A('.col-xs-6 .col-md-4')



            ),



            $.row(
                $.div('g').K("col-xs-6").A('.col-xs-6'),

                $.div('o').K("col-xs-6").A('.col-xs-6')


            )



        )
    }
    exampleMixedMobileTabletAndDesktop= function(){z()
        // Note	Tip: Remember that grid columns should add up to twelve for a row. More than that, columns will stack no matter the viewport.

        cont = $.container().A()
        cont.A(
            $.row(
                $.div('r').K("col-xs-12 col-sm-6 col-lg-8").A($.span( '.col-xs-12 .col-sm-6 .col-lg-8' )),
                $.div('b').K("col-xs-6 col-lg-4").A($.span('.col-xs-6 .col-lg-4'  ))
            ),
            $.row(
                $.div('n').K("col-xs-6 col-sm-4").A($.span('.col-xs-6 .col-sm-4') ),
                $.div('g').K("col-xs-6 col-sm-4").A($.span('.col-xs-6 .col-sm-4') ),
                $.div('o').K("col-xs-6 col-sm-4").A($.span('.col-xs-6 .col-sm-4') )

            )


        )}

    /*
     The following table summarizes how the Bootstrap grid system works across multiple devices:
     Extra small devices
     Phones (<768px)	Small devices
     Tablets (>=768px)	Medium devices
     Desktops (>=992px)	Large devices
     Desktops (>=1200px)
     Grid behaviour	Horizontal at all times	Collapsed to start, horizontal above breakpoints	Collapsed to start, horizontal above breakpoints	Collapsed to start, horizontal above breakpoints
     Container width	None (auto)	750px	970px	1170px
     Class prefix	.col-xs-	.col-sm-	.col-md-	.col-lg-
     Number of columns	12	12	12	12
     Column width	Auto	~62px	~81px	~97px
     Gutter width	30px (15px on each side of a column)	30px (15px on each side of a column)	30px (15px on each side of a column)	30px (15px on each side of a column)
     Nestable	Yes	Yes	Yes	Yes
     Offsets	Yes	Yes	Yes	Yes
     Column ordering	Yes	Yes	Yes	Yes
     ~97px
     */
}

function examples() {
    testRows = function () {
        z()

        $.row(
            $.colX(2, $.img('me')),

            $.colX(6, $.img('me')),

            $.colX(4, $.img('me'))
        ).A()

    }
    testRows2 = function () {
        z()
        $.R().A(
            $.dK('col-xs-12 col-sm-6').A($.img('me')),
            $.dK('col-xs-6 col-lg-4').A($.img('me'))
        )

    }
    testRows3 = function () {
        z()
        $.R().A(
            $.dK('col-xs-6 col-sm-4').A($.img('me')),
            $.dK('col-xs-6 col-sm-4').A($.img('guy')).C('o'),
            $.dK('col-xs-6 col-sm-4').A($.img('sun'))
        ).C('b')
    }
    testRows4 = function () {
        z()
        $.R().A(
            $.dK('col-xs-6 col-sm-4').A($.span('me')),
            $.dK('col-xs-6 col-sm-4').A($.span('guy')).C('o'),
            $.dK('col-xs-6 col-sm-4').A($.span('sun'))
        ).C('b').A()
    }
    exampleStackedToHoriz = function () {
        z()


        cont = $.container().A(
            $.h1('Hello World!'),

            $.row(
                $.sm('red', 6).ipsumP(1, 2),

                $.sm('blue', 6).ipsumP(4)
            )
        ).A()


    }
    exampleStackedToHorizFluid = function () {
        z()

        $.containerFluid().A(
            $.h1('Hello World!'),

            $.row(
                $.sm('red', 6).ipsumP(2, 1),
                $.sm('blue', 6).ipsumP(3)
            )
        ).A()


    }
    example25Percent = function () {
        z()


        $.containerFluid().A(
            $.h1('Hello World!'),

            $.row(
                $.sm('r', 3).ipsumP(3),
                $.sm('b', 9).ipsumP(3)
            )
        ).A()

    }
    exampleMedium = function () {
        z()

        //on xs, u get one column only
        //on small devices, u get two columns ( 25% / 75% )
        //but on medium, u get a 50/50 split


        $.containerFluid().A(
            $.h1('Hello World!'),

            $.row(
                $.div('r').sm(3).md(6).ipsumP(3),
                $.div('b').sm(9).md(6).ipsumP(4)
            )
        ).A()


    }
    exampleLarge = function () {
        z()

        $.containerFluid().A(
            $.h1('Hello World!'),

            $.row(
                $.div('y').K("col-sm-3 col-md-6 col-lg-4").ipsumP(2, 2),
                $.div('y').K("col-sm-9 col-md-6 col-lg-8").ipsumP(1, 1, 1, 1)
            )
        ).A()

    }
    exampleThreeEqualColumns = function () {
        z()
        //The following example shows how to get a three equal-width columns
        // starting at tablets and scaling to large desktops. On mobile phones, the columns will automatically stack:

        cont = $.container().A()
        cont.A(
            $.row(
                $.div('red').K("col-sm-4").A('.col-sm-4').ipsumP(1),

                $.div('blue').K("col-sm-4").A('.col-sm-4').ipsumP(2, 2),
                $.div('yellow').K("col-sm-4").A('.col-sm-4').ipsumP(3, 3, 3)
            )
        )

    }
    exampleThreeUnequalColumns = function () {
        z()
        // The following example shows how to get a three various-width columns
        // starting at tablets and scaling to large desktops:

        cont = $.container().A()

        cont.A(
            $.row(
                $.div('red').K("col-sm-3").A('.col-sm-3').ipsumP(1),

                $.div('blue').K("col-sm-6").A('.col-sm-6').ipsumP(2, 2),
                $.div('yellow').K("col-sm-3").A('.col-sm-3').ipsumP(3, 3, 3)
            )
        )
    }
    exampleTwoUnequalColumns = function () {
        z()
        cont = $.container().A()
        cont.A(
            // The following example shows how to get two various-width columns starting at tablets and scaling to large desktops:

            $.row(
                $.div('r').K('col-sm-4').A('.col-sm-4').ipsumP(10),
                $.div('y').K('col-sm-8').A('.col-sm-8').ipsumP(20)
            )
        )
    }
    exampleTwoColumnsWithTwoNestedColumns = function () {
        z()
        //The following example shows how to get two columns starting at tablets
        // and scaling to large desktops, with another two columns (equal widths) within the larger column (at mobile phones, these columns and their nested columns will stack):

        cont = $.container().A()

        cont.A(
            $.row(
                $.div('a').K("col-sm-8").A(
                    $.span('.col-sm-8'),

                    $.row(
                        $.div('x').K("col-sm-6").A('.col-sm-6').ipsumP(5),
                        $.div('z').K("col-sm-6").A('.col-sm-6').ipsumP(5)
                    )
                ),

                $.div('b').K("col-sm-4").A('.col-sm-4').ipsumP(5)
            )
        )
    }
    exampleClearFloats = function () {
        z()
        //(with the .clearfix class) at specific breakpoints to prevent strange wrapping with uneven content:

        cont = $.container().A()
        cont.A(
            $.row(
                $.div('g').K(' col-xs-6 col-sm-3').A(
                    $.span('Column 1'),
                    $.br(),
                    $.span('Resize the browser window to see the effect.')
                ),

                $.div('u').K("col-xs-6 col-sm-3").A($.span('Column 2')),
                //$.span('<!-- Add clearfix for only the required viewport -->'),
                $.div('o').K("clearfix visible-xs"),
                $.div('y').K("col-xs-6 col-sm-3").A($.span('Column 3')),
                $.div('b').K("col-xs-6 col-sm-3").A($.span('Column 4'))
            )
        )
    }
    exampleOffsettingColumns = function () {
        z()
        //Move columns to the right using .col-md-offset-* classes. These classes increase the left margin of a column by * columns:

        cont = $.container().A()
        cont.A(
            $.row(
                $.div('r').K('col-sm-5 col-md-6').A('col-sm-5 col-md-6').ipsumP(4),

                $.div('b').K('col-sm-5 col-sm-offset-2 col-md-6 col-md-offset-0').A(
                    'col-sm-5 col-sm-offset-2 col-md-6 col-md-offset-0'
                ).ipsumP(4)
            )
        )
    }
    examplePushAndPull = function () {
        z()
        //- Change Column Ordering
        //Change the order of the grid columns with .col-md-push-* and .col-md-pull-* classes:
        cont = $.container().A()

        cont.A(
            $.row(
                $.div('r').K("col-sm-4 col-sm-push-8").ipsumP(2, 2, 2),
                $.div('p').K("col-sm-8 col-sm-pull-4").ipsumP(22)
            )
        )
    }

}
