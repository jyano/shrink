$.XML=function(){return new XMLHttpRequest()}


$.aj=function(ob){return $.ajax(ob)}

$.P = $.po= function(){var g=G(arguments),o;
    o= F(g[1])? {p:g[0], fn:g[1]} : {p:g[0], d:g[1], fn:g[2]};
    o.d = U(o.d)? {} : O(o.d)? o.d : {data: o.d};
    o.fn = o.fn || function () {return 'boo ya!'};
    $.post(S.eL(o.p),o.d,function(d){o.fn(o.d, o)});
    return $
}

$.eP =   function () {var g= G(arguments);
    if (U(g[1])) {return _.p($.eP, g[0])}
    o= F(g[1])? {p:g[0], fn:g[1]} : {p:g[0], d:g[1], fn:g[2]};
    $.P(o.u, o.d||{}, function (dd) {_.e(dd, function(d){o.fn(d)})
    });
    return $
}



$.P = function(path, dataOb){
    dataOb = dataOb || {}
    if(!O(dataOb)){ dataOb = {data: dataOb} }



    $.post('/' + path, dataOb,


        function(data){

            d =data

            console.dir(d)

        })

}
$.qJ = qJ=function rc(u,d,f){var g,u,d,f
    if(U(d)){return _p(rc,u)}
    g=G(arguments);u=g[0];d=g[1];f=g[2]
    if(F(d)){f=d;d={}}
    $.getJSON(u,d,g.P?f:function(ss){
        _.each(ss,function(s){f(s,ss)})})}
$.qJE =qJE=function rc(u,d,f){var g,u,d,f
    if(U(d)){return _p(rc,u)}
    g=G(arguments);u=g[0];d=g[1];f=g[2]
    if(F(d)){f=d;d={}}
    $.getJSON(u,d, function(ss){
        _.each(ss,function(s){f(s,ss)})})}
$.qP= qP=function rc(u,d,f){var g,u,d,f
    if(U(d)){return _p(rc,u)}
    g=G(arguments);u=g[0];d=g[1];f=g[2]
    if(F(d)){f=d;d={}}
    $.post(u,d,g.P?f:function(ss){
        _.each(ss,function(s){f(s,ss)})})}
$.qPE= qPE=function rc(u,d,f){var g,u,d,f
    if(U(d)){return _p(rc,u)}
    g=G(arguments);u=g[0];d=g[1];f=g[2]
    if(F(d)){f=d;d={}}
    $.post(u,d, function(ss){
        _.each(ss,function(s){f(s,ss)})})}

function gett(){


}