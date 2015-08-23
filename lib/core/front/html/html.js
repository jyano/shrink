short()
paragraph()
list()
divSpan()
table()
ipsum()
frame()
anchor()
frag()
image()
semantic()//CONSOLE!!
// https://developer.mozilla.org/en-US/docs/Web/API/Console/info
layout();
$.delBt=function(url, data){var bt

    bt = $.bt('delete', function( el ){

        $.ajax({
            type: 'DELETE', data: data, url: url,
            success: function (){$(el.target).closest('div').rm() }
        })
    })


    return bt
}

function image(){

    $src =    function f(e){
        var _src=function(a){ a = _.ext(a);
            return s$(a).startsWith('/')? a : '/'+ a };
        //if(Q(e)){$l('q');e=$(e)[0]}
        if( e.image ){ e=e.image}
        if( C(e) ){ e = C(e) }
        if( e.src ){ e = e.src}
        if( e.toDataURL ){  e=tDU(e) }
        return s$(e).contains('data:')?  e
            :  S(e) ?  _src(e)
            : 0
    }


    $.iI=function(i){if(O(i)){
        return S($(i)[0].src)}}



}
function frag(){



    $.frg=function(){
        return $(


            document.createDocumentFragment()
        )

    }


    FRAG=function(){$.x('x', 'frag')
        frg = $.frg()
        _.t(5, function(i){  frg.A($.sp(i))  })
        $.d([$.hr(), frg, $.hr()])
    }


}
function anchor(){


    $.a= function(a,f){
        var g=G(arguments), a=g[0], f=g[1],la=a||''
        $.a2 =function(a, fn){var g=G(arguments), a=g[0], f=g[1], el=$.a().id(a).A(a);
            if(F(fn)){el.o(fn)} else {el.hr(fn||'#')}
            if(g.n){el.dd()}
            //  "<div data-toggle="dropdown" class="dropdown-toggle"></div>"
            if(g.p){el=li(el)}
            if(g.m){el=li(el).K('active')}
            return el}
        l = $('<a>').A(a)//.id(a)
        if(F(f)){  l.$(f)  } else {  l.href( f|| '#' )   }
        // if(g.n){ l.K('dropdown-toggle').attr({ 'data-target' : 'dropdown' }) }
        //if(g.p){ l = $.li( l ) }
        //if(g.m){ l = $.li( l ).K('active') }
        return l.A()
    }


    $.tg=function(a){return $('<'+a+'>')}

}

function divSpan(){
    $.span= $.sp

    $.dI=function(id,a,b,c,d,e,f){
        //dI conflict?
        return $.d(a,b,c,d,e,f).id(id)}

    $.dK=function(k){

        $l('in $.dK')

        var d= $.d()
            d.K(k)
        return d
    }


    $.dD= $.divD = function(c, w, h, x,y ){var d,g=G(arguments)
        w=N(w,200)
        h=N(h,w)
        d = $.d(200,200,'+')
        if(g.u){ return d.C('n') }
        if(g.S_ ) {  d.C(c)
            if( N(w) ){ d.W( w  ) }
            if( N(h) ){ d.H( h  ) }
            if( N(x) ){ d.X( x ) }
            if( N(y) ){ d.Y( y ) }
            return d}
        if(g.N_){
            return $.dD('o',c,w,h,x)}
    }
    $.dA=   function func(col,    w, height, x,y ){var g=G(arguments),


        div = $.d().P('absolute')

        if( U(col)){
            return div.C('brown')
        }

        if( S(col)) {  div.C(col);
            if( N(w) ){ div.W( w ) }
            if( N(height) ){ div.H( height ) }
            if( N(x) ){ div.X( x ) }
            if( N(y) ){ div.Y( y ) }
            if(g.p){div.dg()}
            return div
        }

        if(N(col)){ return $.dA('o', col, w, height, x) }

    }
    $.dA= $.divA = function (c, w, h, x,y ){var g=G(arguments),

        d=$.d().P('absolute'),

        o=g.O? g.f:
            g.S_? {c:g.f,w:g.s,h:g.t,x:g[3],y:g[4]}:
            {w:g.f, h:g.s,x: g.t,y:g[3] }
        if( N(o.w) ){ d.W(o.w ) }
        if( N(o.h) ){ d.H(o.h ) }
        d.XY( N(x,0), N(y,0))

        if(o.c){
            d.C(o.c)
        }

        return d
    }



    $.d= $.div= function( ){var g=G(arguments), d=$('<div>'),o
        o= g.A? {a:g.f}: g.O?g.f:  S(g[1])?
        {c:g.f, k: g.s, w:g.t, h:g[3], x:g[4], y:g[5]}:
            g.S_? {c:g.f, w:g.s, h:g.t, x:g[3], y:g[4]}:
            {w:g.f, h:g.s, x:g.t,y:g[3]}

        if(o.c){
            d.C(o.c)
        }


        if(N(o.w)){d.W(o.w)}
        if(N(o.h)){d.H(o.h)}
        if(N(o.x)){
            d.ab(o.x, N(o.y,0))}
        if(o.a){_.e(g[0], function(g){d.A(g)})}
        if(o.k){d.K(o.k)}
        if(!g.n){d.A()}
        if(g.p){d.dg()}
        return _d=d
    }
    $.dD=  $.divD = function func(col, w, h, x,y ){

        w = N(w)? w: 200;
        h = N(h)? h: w;

        var div = $.div(200, 200).drag();

        if( U(col)){ return div.C('brown') }

        if( S(col)) {  div.C(col);

            if( N(w) ){ div.W( w ) }

            if( N(h) ){ div.H( h ) }


            if( N(x) ){ div.X( x ) }

            if( N(y) ){ div.Y( y ) }

            return div }

        if(N(col)){ return func( 'orange', col, w, h, x) }};
    $.dIl=$.inlineDiv=function(a,b,c){
        var d = dv(a, b, c);
        d.display('inline');
        return d
    };
    $.ilBl=$.inlineBlockDiv=function(a,b,c){
        var d = $.d(a, b, c);
        d.display('inline-block');
        return d
    };
    $.dva=function (r,w,h,l,t){
//color, w, h, left, top
        var g=G(arguments),
            r=g[0],w=g[1],h=g[2],l=g[3],t=g[4],d

        if(!S(r)){

            return g.n?

                $.dva( $r(), r,w,h,l,'-') :

                g.p? $.dva( $r(),r,w,h,l,'+') :

                    $.dva($r(),r,w,h,l)
        }


        d= $.d(r).p('a').C(r)

        if(g.p){

            if(w){d.l(w)};

            if(h){d.t(h)}

            d.P(16)

            return d.auto()
        }

        w=w||1; h=h||w; d.WH(w*100, h*100)

        l=l||0; t=t||l; d.l(l*100).t(t*100)

        if(!g.n){d.dg()}

        return d
    }

    $.sp=function(){var g=G(arguments),
        sp=$('<span>'), str='';
        _.e(g, function(val){if(S(val)){ str+= val }
        else { sp.A( val ) }});
        if(str){ sp.T(str) }
        sp.A()
        return sp
    }



}
function list(){


    $.la=$.liA=  function(){var  g=G(arguments), o,

        a = $('<a>').hr('#'),
        li=$('<li>')


        /*
         if(A(g.f)){
         _.e(g.f, function(el){})
         return li.A(a)
         }*/

        o= g.F_? {fn: g.f}:
            g.S_? {id: g.f, fn: g.s}:

            {el: g.f, fn: g.s}


        o.ht= o.id
        if(o.id){a.id(o.id)}
        if(o.ht){a.html(o.ht)}
        if(o.el){a.A(o.el)}
        if(o.fn){a.$(o.fn)}
        li.A(a)
        return li
    }
    $.lL= $.lib= $.liLb=   function(){
        var  g=G(arguments), o,
            li=$('<li>'),
            lb=$.lb().a2(li)


        if(A(g.f)){
            _.e(g.f, function(el){
                lb.A(el)
            })
            return li
        }

        o= g.F_? {fn: g.f}:
            g.S_? {id: g.f, fn: g.s}:
            {el: g.f, fn: g.s}
        o.ht= o.id
        if(o.id){a.id(o.id)}
        if(o.ht){a.html(o.ht)}
        if(o.el){a.A(o.el)}
        if(o.fn){a.$(o.fn)}

        return li
    }
    $.li=function(){var g=G(arguments), li = $('<li>')
        if( A(g[0]) ){
            _.e(g[0],
                function(g){
                    li.A(g)
                })
        }

        if(g.S_){li.A(g.f)}
        if(g.p){li.K('active')}
        if(g.n){li.k('dropdown')}
        li.A()
        return li
    }


    $.ol=function(o,b){var g=G(arguments),
        ol=$('<ol>');
        _.e(g, function(v){ol.A(v)});
        return ol
    }
    $.ul=function(){var g=G(arguments), o, ul=$('<ul>')


        if(g.A_){
            _.e(g.f, function (el) {
                if (g.p) {if(el.iLi()){el = $.li([el])}}
                if(S(el)){el = $.li(el)}
                ul.A(el)
            })}


        //if(g.p){ul.dg()}
        if(g.n){ul.K('ddm')} else {ul.A()}//dropdown menu
        if(g.p){ul.K('n nbn')}//navbar nav



        // $l(ul.oh())

        return ul
    }

    $.uK= $.ulK=function(k, a,b,c,d){
        var ul = $.ul(a,b,c,d).K(k)
        return ul
    }
    $.liK=function(k, a,b,c,d){
        var li = $.li(a,b,c,d)
        li.K(k)
        return li
    }
}
function table(){

    $.t=function(a){var g=G(arguments)
        var t=$('<table>')
        if(A(a)){_.e(a, function(el){
            t.A(el)
        })}
        if(!g.n){t.A()}
        return t
    }
    $.tHR=function(ch){
        var el = $.tr().a2(  $.tH()  )
        if(A(ch)){
            _.e(ch, function(ch){
                if(S(ch)){ch= $.th(ch)}
                el.A(ch)
            })
        }
        return el
    }
    $.tH=function(a){

        var tH =  $('<thead>')

        if(A(a)){_.e(a, function(el){ tH.A(el)  })}

        else if (O(a)){tH.A(a)}


        return  tH

    }
    $.th=function(a){
        var th =  $('<th>')

        if(A(a)){_.e(a, function(el){th.A(el)})}

        else if(S(a)){th.A(a)}

        return th
    }
    $.tB=$.tb= function(){return  $('<tbody>') }
    $.tr=function(a){var g=G(arguments)
        var tr = $('<tr>')
        if(A(a)){_.e(a, function(el){
            if(S(el)){ el = g.p? $.th(el):  $.td(el) }
            tr.A(el)
        })}
        else if(a){ tr.A(a) }
        return tr
    }
    $.td=function(a){var g=G(arguments)
        var td = $('<td>')
        if(A(a)){_.e(a, function(el){td.A(el)})}
        else if(a){td.A(a) }
        return td
    }
    $.cl=function(){ var cl= $('<col>'); return cl }
    $.cg=function(){var cg= $('<colgroup>'); return cg }


    $.R= $.row=function(n){
        var div= $.div().addClass('row')
        _.each( G(arguments), function(arg){ div.A(arg) } )
        return div
    }

}
function frame() {
    $.iF = function () {
        z()
        ifr = $('<iframe>').WH(1000, 1000).C('b').src('http://www.playboy.com')
        $.dA().A(ifr).P(30)
    }
    IFR = function () {
        $.x()
        $.iF()
    }
}
function short(){


    $.br=function(a){
        if (U(a) ){ return $('<br>') }
        var sp = $.sp();
        _.t(a, function(){ sp.A( $('<br>') )  });
        return sp
    }

    $.hr=function(c,h,w){
        var hr=$('<hr>')

        //  if( N(c) ){  return $.hr('z', c, h )  }

        //  hr = $('<hr>').h(h ||2).C(c||'z');

        //  if(w ){ hr.W(w ) }

        return hr
    }


    $.h1=function(){
        var h=$('<h1>');
        h.A.apply(h,G(arguments));

        h.A()
        return h
    }
    $.h2=function(){
        var h=$( '<h2>' );
        h.A.apply(h,G(arguments));
        h.A()
        return h
    }
    $.h3=function(){
        var h=$( '<h3>' );
        h.A.apply(h,G(arguments));   h.A()
        return h}
    $.h4=function(){
        var h=$( '<h4>' );
        h.A.apply(h,G(arguments));   h.A()
        return h}
    $.h5=function(){
        var h=$( '<h5>' );
        h.A.apply(h,G(arguments));   h.A()
        return h}
    $.h6=function(){var h=$( '<h6>' );
        h.A.apply(h,G(arguments));   h.A()
        return h}



}
function paragraph() {
    $.str=function(){var g=G(arguments), s= $('<strong>');
        _.e(g,function(g){s.A(g)});
        return s
    }

    $.p = function () {
        var g = G(arguments), p = $('<p>')
        if (g.A_) {
            g.eF(function (g) {
                p.A(g)
            })
        }
        else {
            g.e(function (g) {
                p.A(g)
            })
        }
        p.A()
        return p
    }
    $.ps = function () {
        var sp = $.sp(), g = G(arguments)
        g.e(function (g) {
            sp.A($.p(g))
        })
        return sp
    }

}
function semantic() {
    $.pre=function(){
        return  $("<pre>").A()
    }
    $.b=function(a,k){
        var g=G(arguments),b= $('<b>')
        //if(g.p){a =  '&nbsp;'+a  }
        //  b.H(a)
        //  b.K(k)

        if(a){b= b.A(b)}


        if(!g.n){b.A()}
        return b
    }
    $.hdr= function(){//$.H=
        var g=G(arguments), hdr = $('<header>')
        //  return $.ip().ty('header').n(n).v(v)
        g.e(function(q){hdr.A(q)})
        hdr.A()
        return hdr}


    $.F=$.ftr= $.footer=function(){
        return $('<footer>')
    }

    $.nv=function(){
        return $('<nav>')
    }

    $.sc= $.sct= function(a){
        var sc = $('<section>')
        if(a){ sc.id(a) }
        return sc
    }



    $.ac= function(){//$.H=$.arg=
        var g=G(arguments), art = $('<article>')
        g.e(function(q){
            art.A(q)
        })
        art.A()
        return art
    }
    $.em=function(){var em= $('<em>'); return em}
    $.tp=function(id){return  $('<template>').id(id)}

    $.as = function () {
        var a = $('<aside>')

        G(arguments).e(function (q) {
            a.A(q)
        })
        a.A()
        return a
    }
}
function ipsum() {


    $.ips=function(len){   len = len || 1;
        var str = '';
        _.t(len, function(){
            str = str + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. '
        });
        return str}
    $.ipsP=function(len){return $.p().A($.ipsum(len) )}


    ips1 = 'dolor sit amet, consectetuer adipi nibh euismod tincidunt ut laoreet dolore magna aliquam' +
    'erat volutpat. Ut wisi enim ad mini corper suscipit lobortis nisl ut a commodo consequat.'
    ips2 = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam' +
    'erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo' +
    'consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat' +
    'nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore' +
    'te feugait nulla facilisi.'

    ips3 = 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper' +
    'suscipit lobortis nisl ut aliquip ex ea commodo consequat.' +
    'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,' +
    'vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan' +
    'et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue' +
    'duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,' +
    'consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt' +
    'ut laoreet dolore magna aliquam erat volutpat.'
}
function layout(){
    $.x= $.E=z=$.z=$.show=function(c,t){var g=G(arguments)
        $('body').empty()
        bd= $.bd()
        if(g.O_){

            $CSS(g.f)
            if(g.s){$.h1(g.s);$.hr().A()}
            bd.C($r())
            return $}

        if(c){bd.C(c)} else {bd.C($r())}
        if(t){bd.A($.h1(t))}
        if(g.p){bd.A($.hr())}
        return $
    }
    $.h=function(){var g=G(arguments),o
        bd= $.bd()
        bd.empty()
        bd.C($r())
        o= g.S_? {t:g.f, s: g.s}: {s: g.f}
        if(o.s){$CSS(o.s)}
        if(o.t){$.h1(o.t);$.hr().A()}
        return $
    }
    $t = function(a, b){if(b2d.test){
        var g=G(arguments), a=g[0], b=g[1],str
        if(D(b)){ str='||'
            _.e(g, function(s){str+=  ' '  + s.toString() + ' |'})
            str += '|'}
        else {str = a.toString()}
        $l(str)}
        return a
    }
}



$.sr=$.fn.src
$.ro=$.fn.role
$.cx=$.fn.ctx

//$.slP = $.fn.selPic

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

function genHtml(){

    function genHtml(){
        elements();inputs();nestEl();ipsum()
        function elements(){
            $.isBodyElement = function (e) {
                e = $(e)[0]
                return O(e) && uC(e.tagName) == 'BODY'
            }

        };
        function inputs(){

            $.selects=function(func){
                var selects=$('select')

                if(func){ selects.on('change', func) }

                return selects}
            $.boxes=function(func){

                var b = $("input[type='checkbox'],input[type='radio']")
                if(f) {  b.click( func ) }
                return b

            }
            $.inputs=function(f){
                $.selects(f);
                $.boxes(f)
            }
            $.getChecked=function(name){
                var input = $("input[type='radio'][name="+name+"]:checked")
                return input.val()}


        }
        function nestEl(){

            $.fn.el = function(e){
                if(U(e)){
                    console.log( $('<div>').append(  this.clone()  ).html() )
                    return this}}
            $.fn.delButton=function(){
                var that=this

                this.prepend(

                    $.div().A(
                        $.button(  'x', function(){ that.remove() }).K('pull-right').mar(20)
                    )

                )


                return this}

            $.fn.h1 = function(text){

                this.A($.h1(text))
                return this}
            $.fn.h2 = function(text){

                this.A($.h2(text))
                return this}
            $.fn.h3 = function(text){

                this.A($.h3(text))
                return this}
            $.fn.h4 = function(text){

                this.A($.h4(text))
                return this}
            $.fn.h5 = function(text){

                this.A($.h5(text))
                return this}
            $.fn.h6 = function(text){

                this.A($.h6(text))
                return this}


        }
        function ipsum(){
            $.fn.ipsum=function(){    var that =this

                _.each(arguments, function(num){
                    that.A( $.ipsum(num) )
                })

                return this}
            $.fn.ipsumP=function(){
                var that =this

                _.each(arguments, function(num){
                    that.A( $.ipsumP(num) )
                })
                return this}
        }

        //events={}
//events.dL=dL=function(a,b,c){document.addEventListener(oE(a),b,c)}
//events.dR=dR=function(a,b,c){document.removeEventListener(oE(a),b,c)}
//co=function co(a,b){return O(a)? ss(a,'C', $r('c',b) ):co($b(),a)}
        outerHTML =function(a,b,c){
            if(A(a)){ return _e(a, "$l(E(v).outerHTML)" ) }

            $l( E(a).outerHTML )
        }



    }



}

Y = window['Y'] || {}
Yano = {}

