

pH=  b2d.PolygonShape.prototype
pH.setAsVec=function(v, sc){var pH=this //used by SepLib
    pH.SetAsVector(_.m(v,function(v){return V(v).div(N(sc,30))}))
    return pH}
pH.vs= pH.vertsx= function(){var pH=this
    return _.m(pH.m_vertices, function(v){return [v.x*30, v.y*30]})
}
pH.arr=function(v){var p=this
    v=_.m(v,function(v){return V(v).d()})
    p.SetAsArray(v, v.length)
    return p}
pH._box=function(){var pH=this
    pH.SetAsOrientedBox.apply(this,arguments)
    return pH}
pH.box=function(){var pH=this, g=G(arguments),
    o=g.O?g.f:
        _.x({w:g.f,h:g.s}, O(g.t)?
        {x:V(g.t).x, y:V(g.t).y, a:g[3]}:
        {x:g.t, y:g[3], a:g[4]})
    o.x =  N(o.x,0)
    o.y =  N(o.y,0)
    o.a =  N(o.a,0)
    o.w =  N(o.w, 50)
    o.h =  N(o.h, 50)
    return pH._box(o.w/60,o.h/60,V(o.x,o.y,'-'),M.tR(o.a))}

