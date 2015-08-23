
$.G = $.g=  function(){var g=G(arguments),o;
    if (U(g[1])) { return _.p($.G, g[0])}
    o= F(g[1])? {p:g[0], fn:g[1]} :
    {p:g[0], d:g[1], fn:g[2]};
    $.get(S.eL(o.p), o.d || {},
        function(d){
            o.fn = o.fn || function () {return 'boo ya!'};
            o.fn (d)
        })
}

$.G = function self(path, dataOb, func){////
//fix later!
    if(F(dataOb)){return self(path, {}, dataOb)}
    dataOb = dataOb || {}
    func = func || function(){return 'boo ya!'}
    $.get('/' + path, dataOb,
        function(data){

            d = data

            console.dir(data)

            func(data)

        })}
$.eG=function(){var g=G(arguments),o;
    if (U(g[1])) { return _.p($.eG, g[0])}
    o= F(g[1])? {p:g[0], fn:g[1]} :
    {p:g[0], d:g[1], fn:g[2]};

    $.G(o.p, o.d||{},
        function(dd){
            _.e(dd, function(d){o.fn(d)})
        });
    return $
}
$.Gj = function(){var g=G(arguments),o;
    if (U(g[1])) { return _.p($.Gj, g[0])}
    o= F(g[1])? {p:g[0], fn:g[1]} : {p:g[0], d:g[1], fn:g[2]};
    o.fn = o.fn || function () {return 'boo ya!'};
    $.getJSON(
        S.eL(o.p),
        o.d|| {},
        function(d){o.fn(d)});
    return $
}
$.eJ=  $.eGj= function(){var g=G(arguments),o;
    if (U(g[1])) { return _.p($.eJ, g[0])}
    o= F(g[1])?
    {p:g[0], fn:g[1]} : {p:g[0], d:g[1], fn:g[2]};
    $.Gj(o.p, o.d||{}, function(dd){_.e(dd, function(d){o.fn(d)})});
    return $
}
$.qG= function rc(u,d,f){
    var g,u,d,f
    if(U(d)){return _p(rc,u)}
    g=G(arguments);u=g[0];d=g[1];f=g[2]
    if(F(d)){f=d;d={}}
    $.get(u,d,g.P?f:function(ss){
        _.each(ss,function(s){f(s,ss)})})}
$.qGE= function rc(u,d,f){
    var g,u,d,f
    if(U(d)){return _p(rc,u)}
    g=G(arguments);u=g[0];d=g[1];f=g[2]
    if(F(d)){f=d;d={}}
    $.get(u,d,function(ss){
        _.each(ss,function(s){f(s,ss)})})}


$.txG = function(url){$.get('/'+url, function(aa){a=aa})}