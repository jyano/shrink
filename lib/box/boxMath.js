v=b2d.Common.Math.b2Vec2.prototype

v.add= v.a=function(){var v=this,g=G(arguments),v1
    if(g[2]){
        return _.m(g,function(g){return v.add(g)})
    }

    v1=g.u?V(1,1): V(g.f,g[1])

    return V(
        v.x+ v1.x,
        v.y+ v1.y
    )

}
v.A=function(){var v=this,g=G(arguments),v1

    if( A(g[0]) && U(g[1]) ){
        _.e(g, function(g){
            v1=V(g)
            v.add(v1.x, v1.y)
        })}
    else {
        v1=V(g)
        v.add(v1.x, v1.y)}
}
v.s=  v.sub = function(){var v=this,g=G(arguments),
    o=V(g[0],g[1])
    o.x=N(o.x,0)
    o.y=N(o.y,0)
    return V(v.x-o.x,v.y-o.y)
}
v.m=  v.mult = function (num) {
    num = N(num) ? num : 30
    var v = _.clone(this)
    v.Multiply(num)
    return v
}
v.d= v.div = function (num) {
    num = N(num) ? num : 30
    return this.mult(1 / num)
}
v.tF=v.f=   v.dec = v.toFixed = function(n){var v=this
    n=N(n,1)
    return V(
        Number(v.x.toFixed(n)),
        Number(v.y.toFixed(n))
    )
}
v.r=   v.rot=function(rot){var x=this.x, y=this.y,
    rot=Math.toRadians(rot),
    cos=Math.cos, sin=Math.sin
    return V(
        x*cos(rot)-y*sin(rot),
        x*sin(rot)+y*cos(rot)
    ).dec(3)}

v.tA=function(){ return [this.x, this.y] }

V=function(x,y,x2,y2){var g=G(arguments), x=g[0],y=g[1], x2=g[2],y2=g[3], v
    if(A(x)){y2=x[3]; x2=x[2]; y=x[1]; x=x[0]}
    if(N(y2)){x = (x-x2)/2; y = (y-y2)/2} //for dist difs?
    else if(O(x)){if(b2d.isFixt(O(x))){x=x.B()}
        y= F(x.Y)? x.Y() : x.y; x= F(x.X)? x.X() : x.x}
    x = N(x,0)
    y = N(y,x)
    v = new b2d.Common.Math.b2Vec2(x, y)
    if(g.n||g.d){ v=v.d() }
    if(g.p||g.m){ v=v.m() }
    return v

}




b2d.AB=function(x1,y1,x2,y2){var g=G(arguments)

    var g=G(arguments), ab


    ab = new b2d.Collision.b2AABB

    if(g.p){

        ab.lowerBound.Set(x1, y1)
        ab.upperBound.Set(x2, y2)

    }
    else {


        if(U(g[2])){
            ab.lowerBound.Set(    g[0]/30-0.01,  g[1]/30-0.01   )
            ab.upperBound.Set(    g[0]/30+0.01,  g[1]/30+0.01     )
        }

        else {
            ab.lowerBound.Set(g[0]/30, g[1]/30)
            ab.upperBound.Set(g[2]/30, g[3]/30)
        }
    }


    return ab
}



b2d.mult = function(v){return V(v).mult()}
b2d.div = function(v){return V(v).div()}
b2d.mat22=function(v1,v2){
    var m = new b2d.Mat22()
    m.SetVV(v1,v2)
    return m}
b2d.tf=function(v1,v2,v3){
    if(U(v1)){
        return new b2d.Math.b2Transform()
    }
    if(A(v1)){
        return b2d.tf(
            V(v1[0],v1[1]),
            V(v1[2],v1[3]),
            V(v1[4],v1[5]))}
    var tf= new b2d.Math.b2Transform(v1, b2d.mat22(v2,v3))
    return tf}
ADD=function(){W().P()


    b=w.brick().C('r')

    p=M.p(b)

    //v=p.vs()

    //p.reg(b)


    w.S(100, 0).pol('z',  M.p(b) )



    $.in(function(){
        // w.S(0,0).pol('y',v)
    })

    //v1= v.add(400,500)



}
old=function(){
    b2d.add=function(vs,p){

        return _.m(vs, function(v){

            return v.add(p)

        })
    }

}