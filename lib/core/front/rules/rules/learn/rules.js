$CSS.rules=function(ob){var g=G(arguments), rus,str= ''
    if(g.A){ g=g.f }
    else if(g.O){
        _.e(ob, function(v, k){
            if(A(v)){ob[k] =    $CSS.blk(v[0]+':'+v[1]+';')}
            else if(O(v)){
                _.e(v, function(v,k){ str +=   k + ':'  +v    +'; ' })
                ob[k] = $CSS.blk(str)
            }
        })

        return $CSS.rules(
            _.m(ob, function(v,k){
                return $CSS.rule(k, v)
            }))}
    rus=''; _.e(g, function(ru){rus += ru})
    return $CSS.blk(rus)
}



$CSS.rules11=function(ob){var g=G(arguments), rus,str= ''
    if(g.A){ g=g.f }
    if(g.O){
        _.e(ob, function(v, k){
            if(A(v)){ob[k] = $CSS.blk(v[0]+':'+v[1]+';')}
            else if(O(v)){_.e(v, function(v,k){ str += k + ':'  +v    +'; ' });
                ob[k] = $CSS.blk(str)}
        })
        rus= $CSS.rules( _.m(ob, function(v,k){return $CSS.rule(k, v)}))
    }

    else {rus=''; _.e(g, function(ru){ rus += ru }); rus= $CSS.blk(rus)}
    return rus}///////////////////
$CSS.rules=function(ob){var g=G(arguments), rus='',str= '',
    ruls
    g=g.A? g=g.f : g.u?{} : g
    ruls = g.S_? g :
        _.m(ob, function(v,k){
            if(A(v)){v = $CSS.blk(v[0]+':'+v[1]+';')}
            else if(O(v)){v=$CSS.decs(v)
                _.e(v, function(v,k){ str += k + ':'  +v    +'; ' });v = $CSS.blk(str) }
            return $CSS.rule(k, v)
        })
    _.e(ruls, function(ru){ rus += ru })
    rus= $CSS.blk(rus)
    return rus}/////////////////////


$CSS.rules=function(ob){var g=G(arguments), rules=''
    g=g.A? g=g.f : g.u?{} : g
    g=g.S_? g : _.m(ob, map)
    _.e(g, function(rule){rules += rule})
    return $CSS.blk(rules)
    function map(v,k){var str=''
        if(A(v)){v = $CSS.blk($CSS._dec(v[0],v[1]))}
        else if(O(v)){
            v=$CSS.decs(v)
            _.e(v, function(v,k){str += $CSS._dec(k,v)})
            v = $CSS._blk(str)}
        return $CSS.rule(k, v)}

}//////////////////////




