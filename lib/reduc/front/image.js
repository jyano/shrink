//both
//_.px = function (a) {return _.nN(a) ? a + 'px' : a}
S.url = _.url= function (a) {return 'url("' + a + '")'}
_.iDU = function (a) {return s$(a).contains('data:')}
$.iI = function(i){if (O(i)){return S($(i)[0].src)}}
_Img = function(){return new Image()}
_$Img = function () {return $(_Img())}




_.crs = function(a){  return a.split('/').pop().split('.png')[0] }//it's the opposite of 'src' !//it strips '/me.png' -> 'me'//why would i need this?
_.src = $src =function f(e){
    var _src=function(a){ a = _.ext(a); return s$(a).startsWith('/')? a : '/'+ a}//if(Q(e)){$l('q');// e=$(e)[0]}
    if( e.image ){ e=e.image}
    if( C(e) ){ e = C(e) }
    if( e.src ){ e = e.src}
    if( e.toDataURL ){  e=tDU(e) }
    return s$(e).contains('data:')?  e :  S(e) ?  _src(e) : 0
}






$.i =   function () {var g = G(arguments), i = _$Img(),
        o = F(g.f) ? {fn: g.f} :
        {sr: g.f, fn: g.s}

    i.i = function (sr) {
        if (U(sr)) {
            return this[0].src
        }
        this.src($src(sr));
        return this
    }
    i.r = function (fn) {
        this.load(function (e) {
            fn(e, i)
        });
        return this
    };
    i.r(function (_i) {
        i._ = _i.target
    });

    if (o.fn) {
        i.r(o.fn)
        i.load(function (ev) {
            o.fn($(ev.target), ev)
        })

    }
    if (o.sr) {

        i.src($src(o.sr))
        i.i(o.sr)
    }

    //i.A()
    return i
}

$.i2 = $.img2 = function (i, fn) {
    i = $.i().src(i)
    fn(i[0])
    //s$(e).contains('data:')
    return i
}




//good for wappy
//gets rid of auto-scaling quirk/*     i.i=i.l=i.load(function(i){     i._ =i[0]     //i = $(i.target)     // img.W( img.W() )     // img.H( img.H() ) })*/
// $.im = function(img, func){i = $.img().src(img);func(i[0]);return i}//s$(e).contains('data:')


//i.l(function(e){o.fn($(e.target), e)})

//i.load(function(i){$(i.target)}) //var i = // i.W( i.W() ) // i.H( i.H() )//gets rid of auto-scaling quirk




//$.slP = $.fn.selPic



//events={}
//events.dL=dL=function(a,b,c){document.addEventListener(oE(a),b,c)}
//events.dR=dR=function(a,b,c){document.removeEventListener(oE(a),b,c)}
//co=function co(a,b){return O(a)? ss(a,'C', $r('c',b) ):co($b(),a)}

//iframe
$.iF = function () {
    z()
    ifr = $('<iframe>').WH(1000, 1000).C('b').src('http://www.playboy.com')
    $.dA().A(ifr).P(30)
}
IFR = function () {
    $.x()
    $.iF()
}


/*
 getCanvas = C=function(a){
 if(_.isObject(a= E(a)||a)){
 return a.canvas? a.canvas  :
 s$(a.toString() ).contains('Canvas')
 ? Q(a)[0]:0}}
 */