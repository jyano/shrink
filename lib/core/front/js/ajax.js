
//ajax
$.XML = function () {return new XMLHttpRequest()}
$.aj=function(ob){return $.ajax(ob)}
$.txG = function(url){$.get('/'+url, function(aa){a=aa})}
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
