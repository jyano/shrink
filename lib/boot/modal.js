$l('modal')
$.mF= $.modalFooter=function(){var d= $.dK('modal-footer')
        _.e( arguments, function(g){d.A(g)})
        return d}

$.mB= $.modalBody =   function(){
        var d = $.dK('modal-body')
        _.e( arguments, function(g){d.A(g)})
        return d}

$.mH= $.modalHeader =   function(){
        var d = $.dK('modal-header')
        _.e( arguments, function(g){d.A(g)})
        return d}

$.mC= $.modalContent = function(){
        var d= $.dK('modal-content')
        _.e(arguments, function(g){ d.A(g)})

        return d}

$.mD= $.modalDialog=function(){
        var d= $.dK('modal-dialog')
        _.e(arguments,function(g){d.A(g)});
        return d}

$.mF= $.modalFade  = function(){
        var d= $.dK('modal fade')
        _.e(arguments, function(g){d.A(g)});
        return d}

$.m= $.modal=function(a,b, contents){

        var footer= $.modalFooter(

            $.bt('close').attr({  type:'submit',  'data-dismiss':'modal'  })

        )

        if(contents){ footer.A(contents) }

        return $.modalForm(
            $.modalDialog(
                $.modalContent(
                    $.modalHeader(
                        $.bt('ooo').K('close')
                            .attr({'data-dismiss':'modal'}),
                        $.h4(a).K('modal-title')   ),
                    $.modalBody(b),
                    footer
                ))
        )}


$.pop=function(ms, o){

    if( S(o) ){
        return $.pop(o, { title: ms } )
    }
    o = O(o)? o : {}
    ms = ms || 'pop pop'


    mB = $.modalBody().A( $.h2( ms ) )
    m =  $.modalFade().A($.modalDialog().A($.modalContent().A( mB)))
    if(!o.hd){ m.modal() }
    if(o.tt){mB.pp($.h1(o.titC).col(o.titC||'z'),
        $.hr().C( o.headerC||'z'  ).css('height', 2))}
    if(o.bt ){ mB.A( $.bt( o.bt )  )}
    if(o.dg ){  m.dg() }
    if(o.al ){ m.al( o.al ) }
    //text color of the MESSAGE
    if(o.col){  m.col( o.col)}
    //color of background of modal itself
    if(o.C){
        //flash like crazy
        if( o.C == '*' ){$.ev(.1, function(){ mB.C( $r() ) }) }
        else { mB.C( o.C ) }
    }
    //this color takes over the whole screen!
    //this is the background color of the hiding body
    if(o.c) {  m.C( o.c)  }
    return m
}


