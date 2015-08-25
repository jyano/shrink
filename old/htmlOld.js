

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

$c = function(c, w, h){var g=G(arguments),o
    o=S(c)?{c:g[0],w:g[1],h:g[2]}:{w:g[0],h:g[1]}
    o.c= o.c||'y'
    return $.c(o.c, o.w||500, h, '+').al(.8)
}

//avail=bbM({url:'/sts'})
//avails=bbC({model:avail, url:'/sts'})
c3X=function(a){ return $.c(300).fit(a) };



johnX=function(){

    var o={};

    o.d=3;

    o.a=function(){o.d++};

    o.g=function(){return o.d};

    return o};


fredX=function(){
    var o = john();

    o.m =function(){o.d--};
    return o
};



REQUESTSX=function(){var c=CT(),d=dv('y',800,600);
    c(d(h1('Buddy requests'),br(),
        MB=_d().w(600).h(500)( )).$$(function(){d.drg()}));
    qG('/gRq',function(msgs){_e(msgs,function(msg){MB(_d()(
        h6('from '+msg.fr+' on '+msg.dt),
        h5(msg.m),
        bt('accept',function(){qP('/yRq',{u:msg.fr})}),bt('deny'),hr()))})})};
USERSX=function(){

    CT(h1('Users: '),br(),rr=row());
    getUsers(function(u){




        _e(u,function(u){  qP('/dud',{d:u.m}, function(m){
            rr(tn(pg(u.u),br(),m).o(function(){
                win(_d()(br(),hr(),h3('User: '+ u.u), br(),
                    xc().w(300).h(300).f(m), s=h1(),  d=_d(),
                    ms=ta().c('w','z'),bt('mail',function(){qP('/sMsg',{m:ms.V(),to:u.u})}),
                    bt('chat',function(){iMsg(u.u,ms.V())}),
                    bt('buddy-request',function(){qP('/sRq',{to:u.u})})));

                prof(u.u, d);

                wUSt(u.u,function(s){
                    d(h1('STATUS: '+s));
                    d(bt('comment',function(){iMsg(u.u,ms.V())}),
                        bt('see feed',function(){iMsg( u.u, ms.V())}),
                        bt('see blog',function(){BLOG(u.u)}),
                        bt('challenge',function(){qP('/sRq',{to:u.u})}))})}))})})});



    tab1=['users',function(){


    }];

    tab2=['a',function(){}];
    tab3=['a',function(){}];
    tab4=['a',function(){}];

    s2(t=tabs(tab1,tab2,tab3,tab4));
    t.load()

};

BLOGX=function(u){

    z();
    WAPNAV();

    format();

    s1(h1('user '+u+' blog'));


    qG('/pstu',{u:u}, function(i){blp(i, s2, '+')},'+')};

$autoDivX= autoX=function(){var g=G(arguments),
    d= $.d().auto();
    _.e(g, function(g){ d.A(g) });
    return d};
showTabX =shwX=function(a){

    qi(a).q.tab('show');

    //return a
};
firstChildX =ch$X =function(a){  a.ch(0).$()  };
TabX =tabX=function(tabText, func){

    var g=G(arguments),
        tabText=g[0],
        func=g[1],

        theLi= $liA(
            tabText,
            function(){
                showTab(tabText); func()
            });

    theLi.load=function(){
        showTab(tabText); func()  };

    if(g.m){  theLi.k('active')  }

    return theLi
};
$passwordX=function(){return ip().type('password').k('form-control')};
tabsX=function(a){
    var g=G(arguments), a=g[0],  d, u;
    d=$.d('X').WH('auto').A(
        theUlNav=$.ul().K('nav nav-tabs'),
        TABS= $.sp()
    );
    //ok so a can already be a tag.. OR, if you pass in an array, it will make it a tag for :)
    if(A(a)){a = $.tab.apply($.tab, a)}
    theUlNav(a);
    _.e(g.r,   function(a){if( A(a) ){a = _a(tab, a)}
        theUlNav(a)

    });
    d.load=function(){a.children[0].$(); return d};
    return d
}