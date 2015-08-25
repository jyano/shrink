



//pass in size, and then args(contents) as a list (or as an array)
$.col = function(){  var args = G(arguments),

    div= $.div().addClass( 'm' + args[0] ),

    iter = A( args[1])?  args[1] : args.r

    _.each( iter, function(v){ div.A(v) } )

    return div }

$.ipsum=function(len){   len = len || 1
    var str = ''
    _.t(len, function(){
        str = str +
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. '
    })
    return str}
$.ipsumP=function(len){return $.p().A($.ipsum(len) )}
$.i2= $.img2 = function(img, func){

    i = $.img().src(img)

    func(i[0])

    //s$(e).contains('data:')
    return i}
$.i = $.img=function(source, func){

    var img = $( new Image() )

    //gets rid of auto-scaling quirk
    img.load(function(img){
        var img = $(img.target)
        // img.W( img.W() )
        // img.H( img.H() )
    })

    if(func){
        img.load(function(event){
            func($(event.target), event)})}

    if(source){
        img.src(src(source))
    }

    return img
}
$.hr2 =  function(c,h,w){

    var e = qq('hr')

    if( N(c) ){  return hr('z', c, h)  }

    e.h(h||2)

    e.c(c||'z')

    if(w){ e.w(w) };return e
}
$.sp2 = function(){

    var args=G(arguments),
        theSpan=$('<span>'), str=''

    _.each(args,

        function(val){

            if(S(val)){ str+= val }

            else { theSpan.A( val ) }})

    if(str){ theSpan.text(str) }

    return theSpan}
$.tH= $.thead=function(){return _a( qq($('<thead>')),arguments)}
$.tB=$.tbody=function(){return _a( qq($('<tbody>')),arguments)}
$.strong=function(){


    var g=G(arguments),
        s=qq($('<strong>'))


    _e(g,function(g){
        s(g)
    })


    return s}
$sc= $.section=function(a,b){return qq($('<section>')).id(a).s(b)}
$.aOld =function(textAndId, hrefOrFunc){

    var args=G(arguments), a=args[0], hrefOrFunc=args[1],

        theEl = qq('a').id(textAndId)(textAndId)

    if (F(hrefOrFunc)) {theEl.o(hrefOrFunc)}

    else {theEl.hr(hrefOrFunc||'#')}

    return (args.n)? theEl.k("dropdown-toggle")


        //  "<div data-toggle="dropdown" class="dropdown-toggle"></div>"


        :(args.m)? li(theEl).k('active') :(args.p)? li(theEl)

        :theEl}
$.headerHuhhhh=function(name,val){
    return $.input().type('header')
        .name(name).val(val)

}
$.header=function(){


    var header = $('<header>')


    return header}
$.footer=function(){return $('<footer>')}
$.ol=function(o,b){var g=G(arguments),
    ol=$('<ol>')
    _.each(g, function(v){ol.A(v)})
    return ol}
$.td=function(){
    return $('<td>')
}
$.tr=function(){return $('<tr>')}
$.bold= function(a,k){

    var g=G(arguments),
        h=g.p?'&nbsp;'+a:a;
    return $('<bold>').H(h).k(k)

}
$.iframe=function(){

    z()
    d=dva()
    ifr=qq($('<iframe>'))
    ifr.w(1000).h(1000).c('b')
    ifr.q[0].src='http://www.playboy.com'
    d(ifr).P(30)

}
$.th=function(a){

    var h = qq($('<th>'))

    if(a){h(a)}

    return h}
$.inlineDiv=function(a,b,c){
    var theDiv = dv(a, b, c)
    theDiv.display('inline')
    return theDiv
}
$.inlineBlockDiv=function(a,b,c){

    var theDiv = dv(a, b, c)

    theDiv.display('inline-block')

    return theDiv

}
$.dva=function f(r,w,h,l,t){

//color, width, height, left, top
    var g=G(arguments),r=g[0],w=g[1],h=g[2],l=g[3],t=g[4],d
    if(!S(r)){
        return g.n?

            f($r(),r,w,h,l,'-')

            : g.p?f($r(),r,w,h,l,'+')
            : f($r(),r,w,h,l)}


    d=_d().p('a').c(r).a()

    if(g.p){
        if(w){d.l(w)}
        if(h){d.t(h)}
        d.P(16)
        return d.auto()}


    w=w||1
    h=h||w
    d.w(w*100)
    d.h(h*100)

    l=l||0
    t=t||l
    d.l(l*100)
    d.t(t*100)


    if(g.N){d.drg()}
    return d}



$.pre=function(){ return  $("<pre>").A() }
