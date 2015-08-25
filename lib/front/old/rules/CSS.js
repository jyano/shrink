$CSS = function $CSS(rulesOb){var g=G(arguments),rules,sty
    if(g.u){return $l($('style').oh())}
    rules = '\n\n'
    g.e(rulesOb, function(decs, sel){rules += $CSS.sel(sel)+' '+
        $CSS.decBlk( decs, rulesOb ) +'\n'})
    rules+='\n'
    sty=  $El('style');
    sty.type = 'text/css';
    if(rules){sty.innerHTML = rules}
    $.hd( sty )
    return rules
}
$CSS._id= _.$Id=function(str){return str.replace('$','#').replace('_','.')}
$CSS._blk=$CSS.blk=function(cont){return  '{'+ cont +'}'}
$CSS._dec=$CSS.dec=function(property, val){return property + ':' + val + '; '}
$CSS.sel = function(sel){




    sel =  _.$Id(sel)
    if(sel == 'bd'){sel = 'body'}
    if(sel == 'bt'){sel = 'button'}
    if(sel == 'sc'){sel = 'section'}
    if(sel == 'nv'){sel = 'nav'}
    if(sel == 'd'){sel = 'div'}
    if(sel == 'i'){sel = 'img'}
    if(sel == 'ip'){sel = 'input'}
    return sel
}
$CSS.decBlk=function(decs, rulesOb){
   if(S(decs)){return decs}
    if(decs.ex){if( rusOb && rusOb[ decs.ex ] ) {_.x(decs, rusOb[ decs.ex ])}
    else {_.x(decs, $CSS.ex[ decs.ex ])}; delete decs.ex}
    if(decs.mx){_.e(decs.mx, function(v,k){$CSS.mx[k].apply(decs, v)});
        delete decs.mx}
    var decBlk=''
    _.e(decs, function(v,k){decBlk += $CSS._dec(oO('s', k),
        A(v)? $CSS.fn[k].apply(null, v):
            N(v)? $S(v)+'px' :
                oO(k,v,'R'))})
    return $CSS._blk(decBlk)
}

