$.fn.T= function(){var g=G(arguments)
    this.text.apply(this,g)
    return this
}


$.fn.fS= $.fn.fontSize=function(z){
    this.css('font-size', z)
    return this
}

$.fn.tA= $.fn.textAlign=function(z){
    this.css('text-align', z)
    return this
}

$.font  =$f=FO=function(a,b){
    if(O(a)){return ss(oB(b),{fz:a||50})}
    a=N(a)?_S(a):U(a)?'':a
    var px=function(a){return a+'px'},
        F='fantasy',W='normal',S='normal',Z=px(100)
    _e(a.split(' '),function(p){
        if(M(p[0])){p=p.split('/')
            Z=px(p[0])+((p[1])?'/'+px(p[1]):'')}
        F=Oo('ff',p)||F
        W=Oo('fw',p)||W
        S=Oo('fs',p)||S})
    return [W,S,Z,F].join(' ')
}

