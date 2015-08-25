
TANGLE=function(){z()

    a = $.dA('r',50,50).XY(50).A().pad(10)
    b = $.dA('b',100,100).XY(100).A().pad(10)
    c = $.dA('g',200,200).XY(200).A().pad(10)
    d = $.dA('y',400,400).XY(400).A().pad(10)

    y=function(aa,bb,cc,dd){


        if(aa && U(bb)){  aa.A().P('a') }

        if( bb ){ bb.A( aa.P('static') )  }

        if( dd ){ dd.A( cc.P('s') )  }

    }


}


MARGINAUTO=function(){z()

    outer = $.div( 'b', 500, 500).A()
    outer.A(  inner = $.div( 'r', 100, 100) )
    inner.mar('auto')
    outer.mar('auto')
}

FRIDGEMAGNETS=function(){z()

    word = function(text, c1, c2){

        var s= $.span(text).C(c1, c2).A().drag()

        return s}


    w=word('hello', 'b', 'g')

    word('sicko', 'g', 'b')

    word('why, i oughta..', 'p', 'x')

    word('it was raining..', 'j', 'k')

    word('who ya gonna call?', 'h', 'i')
    word('dag nabit!', 'f', 'g')

    word('i like', 'd', 'e')
    word('tomorrow', 'a', 'c')

    word('me', 'r', 'b')

}
testCan = function(){
    z()
    c= $.canvas('o', 500, 500).A()


    //c.save().lineWidth(30).setStrokeColor('r').lineTo([[100,100],[150,110]]).stroke().restore().lineTo([[200,100],[200,600]]).stroke()

    // c.roundRect(100,50,100,100,50).stroke()//.fill()

    //c.line(10,10,50,500).stroke()

    c.line([
        [[100,100],[200,200],[140,900]]
        // ,  [[150,150],[250,250], [20,300]]
    ]).stroke()

    //c.line([100,100],[200,200],[150,150],[250,250] ).stroke()
    //c.line( [350,50],[25,25],  [450,10],[20,550]).stroke()
}
VOLUME=function(){

    outerDiv = $.div('y', 400, 200 ).A().drag()

    r=$.row().W(600)

    r.A(
        $.div().id('booksDiv').addClass('col-md-6').A(    ) )

    r.A(
        $.div().id('displayDiv').addClass('col-dm-6').A(   $.img('guy')  )    )

    r.A().drag()


    Book=function(title){

        var book = $.div().A( $('<h4>').text( title||'book') ).H(60).C('b').addClass('book')

        book.display = $.img('me').hide().addClass('display')

        return book}
    addBook=function(title){

        var book=Book(title)

        $('#booksDiv').A( book )

        $('#displayDiv').A(   book.display      )

        $('.book').click(   function(){

            $(this).id()

        })

        return book
    }


    a= addBook('a')
    b=addBook('b')
};


DEBOUNCE=function(){W()

    s=0
    u=0
    d=0
    l=0
    r=0


    b= w.S(600, 300, 'b', 100)

    $.space(_.debounce(function(){$l('space ' + s++)}, 1000))

    $.kD('u', _.debounce(function(){$l('up '+u++)}, 1000, true))



}

