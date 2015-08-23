$CSS = function $CSS(rulesOb){var g=G(arguments),
    rules = '\n\n'
    if(g.u){return $l($('style').oh())}

    g.e(function(decs, sel){
        $CSS.rule= function(sel,decs,rulesOb){
            $CSS.sel = function(sel){
                _.$Id=function(str){
                    str = str.replace('$', '#')
                    str = str.replace('_', '.')
                    return str
                }
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

                $CSS._blk=$CSS.blk=function(cont){return  '{'+ cont +'}'}
                $CSS._dec=$CSS.dec=function(property, val){return property + ':' + val + '; '}

                if(S(decs)){return decs}
                if(decs.ex){if( rusOb && rusOb[ decs.ex ] ) {_.x(decs, rusOb[ decs.ex ])} else {_.x(decs, $CSS.ex[ decs.ex ])}; delete decs.ex}
                if(decs.mx){_.e(decs.mx, function(v,k){$CSS.mx[k].apply(decs, v)}); delete decs.mx}
                var decBlk=''
                _.e(decs, function(v,k){decBlk += $CSS._dec(oO('s', k),
                    A(v)? $CSS.fn[k].apply(null, v):
                        N(v)? $S(v)+'px' :
                            oO(k,v,'R'))})

                return $CSS._blk(decBlk)

                function CSSdecs(){
                    //tries to extend from one of its own first
// then goes to global ($CSS.ex)   DECS[oO('s', k)] =  A(v)? $CSS.fn[k].apply(null, v): N(v)?  $S(v)+'px' : oO(k,v,'R')
// will be dep-ed??
// the BIG OB should handle this??
//  if(o.mar){o.margin = o.margin || o.mar;  delete o.mar };
// if(o.bor){o.border = o.border || o.bor; delete o.bor };
// if(o.pad){o.padding = o.padding || o.pad; delete o.pad }

                }
            }
            return $CSS.sel(sel)+' '+ $CSS.decBlk( decs, rulesOb )
        }
        rules += $CSS.rule(sel, decs, rulesOb)+'\n'
    })
    rules+='\n'
    $CSS.sty =  function(rules){
        var sty=  $El('style'); sty.type = 'text/css';
        if(rules){sty.innerHTML = rules}
        return sty
    }
    $.hd($CSS.sty(rules))
    return rules
}



