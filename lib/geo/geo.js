

b2d.p()

b2d.mini()


pD= gpcas.geometry.PolyDefault.prototype
ps= gpcas.geometry.PolySimple.prototype
WT=function(){W()
    b0= w.S(600,300,'y',300,100,0,0,30)
    b= w.S(600,300,'r',300,100).rot(-30)
}


ps.n= ps.num = ps.numPoints=function(){return this.getNumPoints()}
ps.vs= function(){var p=this,vs=[]
    _.t(p.n(), function(i){
        vs.push([p.getX(i), p.getY(i)])})
    return vs
}
ps.g=function(n){
    return this.getInnerPoly(n||0)}
ps.nP=function(){var pD=this,n
    n= pD.getNumInnerPoly()
    return n}


b2d.iB=b2d.isBody
b2d.tF=function(f){
    return  b2d.iB(f)?f.f():f
}
b2d.p()
//
b2d.iF=b2d.isFixt
b2d.glu = function (a, b) {
    return a.glu(b)
}
w.md1=function(fn){var w=this
    return w.md(function(a,b,c){
        if(self.used){return}
        fn(a,b,c)
        self.used=1
    })}
xx.pol=function(vs,ox,oy){var x = this,i
    ox=N(ox,0);
    oy=N(oy,0)
    x.b()
    x.mt(_.f(vs)[0]+ox, _.f(vs)[1]+oy)
    _.e(_.r(vs), function(v){x.lt(v[0]+ox, v[1]+oy)})
    x.closePath()
    x.stroke()
    x.fill()
    return x
}
xx.drP=xx.drawPoly=function(vs,c,hole,ox,oy){var x=this, g=G(arguments), o,
    i

    if(b2d.iGP(g[0])){

        o = {
            vs: g[0].vs(),
            ss: c || 'b',
            l: 2,
            fs: hole ? 'w' : 'p',
            ox: ox,
            oy: oy
        }
    }

    else if(A(g[0])){

        o = {
            vs: vs,
            ss: c || 'b',
            l: 2,
            fs: hole ? 'w' : 'p',
            ox: ox,
            oy: oy
        }

    }

    else{
        o = O(g[0]) ? g[0]
            : {}
    }

    /* o={}
     o.vs=vs
     o.ss=c||'b'
     o.l=2
     o.fs= hole?'w':'p'
     o.ox=ox
     o.oy=oy
     */

    x.lineWidth= o.l
    x.ss(o.ss)
    x.fs(o.fs)
    x.pol(o.vs, o.ox, o.oy)
    return x

}
xx.drawPolys=function(poly,c,ox,oy){var x=this//if more than one poly produced, use multiple color to display

    var n=poly.nP()

    _.t(n, function(i){
        var p=poly.g(i)
        if(i){ c=['r','g','b','y'][i%n] }

        ppp=p
        x.drP(
            p.vs(),
            c,
            p.isHole(),
            ox,
            oy
        )
    })

    return x
}



//it expects worldVerts....
//it works with worldVerts...
//it was designed with
//that in
//mind

M.p= function(){var g=G(arguments),
    p,b,fs,vs
    b2d.mini()
    if(iP(g[0])){return g[0]}
    p=pD()
    if(iB(g[0])){
        fs=g[0].fs()
        vs=fs[0].wV()
        _.eR(fs,function(v){
            vs=vs.uni(v)})}
    else {vs= iF(g[0])? g[0].wV(): g[0]}
    p.A(vs)
    return p
}


pD.D=function(){var pD=this, gg=G(arguments)
    b2d.mini()

    gg.e(function(g){
        if(iB(g)){
            if(g.n()==1){return pD.D(g.f())}
            g.fs(function(f){
                pD = pD.D(f)
            })
        }

        else {pD=pD.difference(M.p(g))}

    })

    return pD
}


b2d.vs=function(){
    //all this does is to 'scale down' a series of points
    //can pass in pts naked OR in an array
    var g=G(arguments)
    if(g[1]){return _.m(g, b2d.div)   }//passed in verts ([],[],[])
    return _.m(g[0], b2d.div) //passed an array [[],[],[]]
}

b2d.hV= b2d.hasVerts = function (poly) {
    return poly.m_List.get(0)
}

b2d.ol= b2d.overlapping = function (b1, b2) {
    var v1 = M.p(b1),//wont work yet
        v2 = M.p(b2)
    var p = v1.union(v2)
    return !(_.isEqual(p.vs(), v1.vs()) || _.isEqual(p.vs(), v2.vs()))
}
b2d.iG= b2d.iGP=b2d.isGPoly=function(a){return O(a) && F(a.isHole)}





UNI=b2d.u=function me(){var g=G(arguments),p
    if(g.A){
        return g.ap(UNI)
        //return $a(UNI,g.f)
    }
    p=M.p(g[0])
    g.eR(function(pol){
        p = p.U(  M.p(pol) )
    })
    return p
}


DIF=function(){var g=G(arguments),
//not each of the ps?

    p = M.p( g[0] )

    g.eR(function(p1){

        p=p.D(p1)

    })

    return p
}

pD.A=pD.addPoints=function(pts){var p=this
    if(A(pts)){
        _.e(pts,function(pt){
            p.addPoint(V(pt))
        })
    }
    return p}

pD.n=pD.num = pD.numPoints=function(){
    return this.getNumPoints()
}


pD.vs=function(fn){var p=this,g=G(arguments),
    vs=[]

    _.t(p.n(),function(i){
        vs.push([
            p.getX(i),
            p.getY(i)])})


    if(g.n){

        vs= _.m(vs, function(v){
            return V(v).sub(g[0])
        })
    }

    if(g.p){
        vs= _.m(vs, function(v){
            return V(v).add(g[0])
        })
    }

    if(F(fn)){
        _.e(vs, function(v){fn(v)})
        return p
    }

    return vs
}

PSS=function(){W()

    b=w.S(300,500,'r',100,20)
    x=w.S(700,500,'r',100,20)



}

b2d.recV=function(x,y,w,h){var hW=w/2,hH=h/2
    return [[x-hW,y-hH],[x+hW,y-hH],[x+hW, y+hH],[x-hW,y+hH]]}





ps.reg=  function(b){var p=this,g=G(arguments),
    vs=p.vs(),b,o

    //you can pass in the verts,
    // or the gPoly itself!
    //what about a f?

    o = V(g[0],g[1])
    vs= _.m(vs, function(v){return V(v).sub(o.x,o.y)})

    return M.p(vs)
}



ps.n=ps.num = ps.numPoints=function(){return this.getNumPoints()}
ps.vs= function(){var p=this,vs=[]

    _.t(p.n(), function(i){vs.push([p.getX(i), p.getY(i)])})

    return vs
}
ps.g=function(n){
    return this.getInnerPoly(n||0)}
ps.nP=function(){var pD=this,n
    n= pD.getNumInnerPoly()
    return n}



pD.g=function(n){
    return this.getInnerPoly(n||0)}
pD.nP=function(){var pD=this,n
    n= pD.getNumInnerPoly()

    return n}
pD.dot=function(w){var pD=this
    pD.vs(function(v){
        w.dot('w',v[0],v[1])})
    return pD
}
pD.U=function(){var pD=this, g=G(arguments),
    uP

    if(b2d.isBody(g[0])){
        uP = pD.U(g[0].f())
        _.eR(g[0].fs(),function(f){
            uP=pD.U(f)})
        return uP}

    return pD.union( M.p(g[0]) )
}
pD.I=pD.intersection
pD.X=pD.xor

pD.reg= pD.rel=function(b){var p=this,g=G(arguments),
    vs=p.vs(),b,o

    //you can pass in the verts,
    // or the gPoly itself!
    //what about a f?

    o = V(g[0],g[1])
    vs= _.m(vs, function(v){return V(v).sub(o.x,o.y)})

    return M.p(vs)
}


pD.ps=function(){var p=this,
    g=G(arguments),
    fn,
    ps=[];

    b2d.mini()

    //put all my polys in an array
    _.t(p.nP(),function(i){
        ps.push(p.g(i))
    })


    if(iB(g[0])){
        ps= _.m(ps, function(p){
            //return M.p(p).rel(g[0])
            return p.reg(g[0])
        })
        fn=g[1]
    }

    else if(N(g[0])){

        ps= _.m(ps, function(p){
            return p.reg(g[0],g[1])
        })

        fn=g[2]

    }


    else {fn=g[0]}

    if(g.p){ps= _.m(ps,M.p)}
    if(F(fn)){_.e(ps,fn);return p}

    return ps

}




pD.hH=function(){var pD=this
    var h
    pD.ps(function(p){if(p.isHole()){h=true}})
    return h
}



b2d.tA=function(vs){
    return _.m(vs, function tVs(v){
        return v.tA(v)})}

b2d.rot=function(vs, b){var rot=b.rot()
    return _.m(vs, function(v){
        return v.rot(rot)
    })}

b2d.m=function(vs){ return _.m(vs, b2d.mult) }


f._vs=function(f){var f=this,
    h=f.H()
    if(h){return h.m_vertices}}

f.vs=f.rV=function(){var f=this, b=f.B(),g=G(arguments),

    vs=b2d.m( f._vs() )

    if(g.p){vs=b2d.rot(vs,b)}

    return b2d.tA(vs)
}




f.wV= function(){var f=this,b=f.B(),g=G(arguments),
    vs
    vs = g.n? f.vs():f.vs('+')
    return b2d.tA( _.m(vs, function(v){return V(v).add(b)}))
}


f.A=  f.area = function () {
    return M.p( this ).getArea()
}

//f.wVerts=f.V=
//give world verts of fixt rotated (or optionally, not rotated for some reason)



f.dots=function(){var f=this;

    b2d.pD=b2d.polyDot = function (vs) {
        var t=0

        vs=A(vs)?vs : vs.wV

        w.dot('g', V(_.f(vs)))

        _.e(vs,
            function(v){
                $.in(t,function () {
                    w.dot(V(v))
                }, t)
                t += .1
            }
        )

        w.dot('r', V(_.l(vs)))

    }

    b2d.polyDot(f.wV())

    return f
}




f.uni=function(){var f=this,
    b=f.B(), g=G(arguments), p,n

    //can handle a fixt OR a body!
    //-> [f]

    if(g.jA){return $a(f,'uni',g.f)}

    p=M.p(f).U( g.f )

    g.eR(function(f){
        p=p.U(f)
    })

    return p.reg(b)

//n= p.getNumInnerPoly()
    //to do now!
    //if it receives a body, i should uni all thatbody's fixs against it
    //dont worry about rebuilding the body first? hmm....
}







b.wV=function(){var b=this,g=G(arguments)
    return b.pD().vs()
}

b.rV= function(){var b=this,
    r=M.tR(b.rot()),
    vs,r,x,y
    vs= _.m(b.vs(), function(v){v=V(v)
        x=v.x*M.c(r)- v.y*M.s(r)+b.X()
        y=v.x*M.s(r)+ v.y*M.c(r)+b.Y()
        return V(x,y)})
    return vs
    //this returns [V,V,V...]
}

b2d.add=function(vs,p){
    return _.m(vs, function(v){
        return V(v).add(p)
    })
}




b.pos=function(){return this.tf().position.m()}





b.ps=function(fn){var b=this,
    arr=[],
    p=b.uni()

    if(F(fn)){p.ps(b,fn); return b}
    p.ps(b, function(v){arr.push(v)})
    return arr
}


//return this.union()
//it used to just get from the FIRST fixt,
//but now it unions them all together :)
//b.verts = function(){ return this.fixt().verts() }

b.P= b.pD= function(){var b=this, p,
    fs=b.fs()

    if(!_.f(fs)){return new PolyDefault()}
    p = M.p(_.f(fs))
    _.eR(fs,function(f){p=p.U(f)})
    return p//p.reg(b)
    //this returns a gPoly
}


b.reg=b.rel= function(p){var b=this
    //my poly operations can only work with POSITIVE vertices
    //but box2d needs fixt vertices specified relative to a body
    //so this allows the body that the operation was based on to take responsibility
    //for converting them back
    //you can pass in the verts, or the gPoly itself!
    var vs
    b2d.mini()

    vs = iP(p)? p.vs() : p

    return _.m(vs, function(v){v=V(v)
        return V(v.x-b.X(),v.y-b.Y())
    })
    //this returns [V,V,V...]
}


pD.plus=function(x,y){var p=this,
    vs=p.vs()

    vs = _.m(vs, function(v){
        v=V(v)
        return v.add(x||0, y||0)})

    return M.p(vs)
}

pD.minus=function(x,y){var p=this,
    vs=p.vs()
    vs = _.m(vs, function(v){
        v=V(v)
        return v.sub(x||0, y||0)})
    return M.p(vs)
}


VS=function(){W()

    b = w.S(400,200, 'r', 300,200).rot(-20)//.dot()



    w.pDraw(b.P(),50,10).dot()



}
pD.dot=function(){var p=this

    p.vs(function(v){
        w.dot('o', v)
    })
    return p}
w.pDraw=function(p,x,y){var w=this,
    b=w.S(0,0)

    b.pol({
        v: M.p(p).plus(x||0,y||0).vs(),
        c:'w',C:'x',l:10})


    return p}


b2d.pC=function(){var g=G(arguments), //b2d.polyCirc =
    vs=[],
    r=N(g[0],20),
    n=N(g[1],20),
    a=2*M.PI/ n
    _.t(n,function(i){
        var v=V(
            M.c(a*i)*r,
            M.s(a*i)*r)
        vs.push(g.p?v:[v.x, v.y])}) //returns an arr of rel verts
    return vs}

b2d.polyCirc=function(r,n){var g=G(arguments),vs=[],a
    r = N(r,20)
    n = N(n,20)
    a=2*M.PI/n

    _.t(n,function(i){
        vs.push(V( r*M.c(a*i),r*M.s(a*i)))
    })

    return vs
}



b.pC=function(){var b=this,g=G(arguments), o,
    vs=[],p

    o=O(g[0])?g[0]:
        S(g[0])?{c:g[0],r:g[1],n:g[2]}
            :{r:g[0],n:g[1]}

    o.r=N(o.r,20)
    o.a=2*M.PI/o.n
    _.t(N(o.n,20),function(i){var v
        v=V(M.c(o.a*i)*o.r, M.s(o.a*i)*o.r)
        vs.push([v.x,v.y])})

    if(g.n){return vs}


    p= b.pol(vs)

    p.C(o.c||$r())


    return b
}
b.mPC= b.minusPolyCirc = function(x,y,r,sides){var b=this,pC,p

    pC=b2d.pC(r, sides)

    p= _.m(pC, function(v){v=V(v)
        return [v.x+x, v.y+y]
    })
    vs = DIF(b, p).ps(b)
    //b.clear()
    b.pol(vs)

    return b
}
b.uni=function(){var b=this,g=G(arguments), n,fs
    fs=b.fs()

    if(g.u){
        return g.p? UNI(fs).reg(b) :  b2d.u(fs)

    }


    //unite with fixt or first-fixt(of body)

    if(O(g[0]) && !F(g[0])){

        return b.f().uni( b2d.tF(g[0]) )
    }
}
b.clone = function (x, y, a) {var b = this


    x = N(x, b.X())
    y = N(y, b.Y())
    a = N(a, b.rot())


    b1 = w.D(x, y).type(b.type()).rot(a)

    arr = []

    b.fs(function (f) {var h,x,y,r
        arr.push(f)
        _.e(arr, function (f) {

            if (f.iC()) {
                h=f.H()
                x=h.m_p.x * 30
                y=h.m_p.y * 30
                r=h.m_radius * 30
                b1.cir(r,x,y,$r())}

            else {
                b1.pol({c:$r(), v:f.rV()})
            }
        })
    })

    return b1
}
b.polyClone = function (x, y, a) {
    var b = this, b1
    x = N(x, b.X())
    y = N(y, b.Y())
    a = N(a, b.rot())
    b1 = w.B(x, y).type(b.type()).rot(a)
    b.fs(function (f) {
        b1.pol(_.m(f.rV(), function (v) {
            return [v.x, v.y]
        }))
    })
    return b1
}
b.copy=function(x,y){var b=this,w=b.W(),g=G(arguments)
    return w.pol(x,y,b)}
b.dif=function(o){var b=this, g=G(arguments),
    f=b.f(),fs=b.fs(),p

    b2d.mini()

    if(b.n()==1){return b.f().dif(o,'-')}

    p = DIF(b, o).reg(b)

    if(g.n){
        if(iB(o)||iF(o)){o.kill()}
        else {b.kill()}
    }
    return p

}
b.sum=function(b1){var b=this

    return UNI(b,b1).vs(b,'-')
}


b.sub=function(){var b=this, gg=G(arguments),
    c = b.c()
    b2d.mini()

    gg.e(function(g){

        if(iF(g)){
            b.fs(function(f){
                f.sub(g)
            })

            if(gg.n){ g.kill() }
        }

        else if(iB(g)){
            g.fs(function(f){
                b.sub(f)
            })
            if(gg.n){ g.kill() }
        }


    })

    b.C( b.c() )

    return b

}




f.dif= function(){var f=this, b=f.B(), g=G(arguments),p
    b2d.mini()
//f.dif does the math and returns the answer (vs)

    p=M.p(f)

    g.e(function(g){
        if(iB(g)){g.fs(function(f){p=p.D(f)})}
        else{p=p.D(g)}
    })

    if(!b2d.hV(p)){
        $l('!hV(p)')
        return
    }

    p=p.reg(f)

    if(g.n){p=p.reg(f.B())}

    return p
}
w.vDot=function(d){var w=this

    w.dot('g',_.f(d))
    _.eR(d,function(v){w.dot(v)})
    w.dot('r',_.l(d))

    return d}
f.sub=function(){var f=this,b=f.B(),g=G(arguments),
    p

//f.sub uses f.dif and replaces itself on a body
// with its (potentially) 'slimmer' self

    p = f.dif(g[0], '-') //vs is f minus something


    if(p && !M.p(p).hH()){


        f.kill() //then f goes away
        if(  M.p(p).getArea() < 2000 ){return}

        b.pol(p)//the body makes a new f, from the the vs
    }

    if(g.n){g[0].kill()}
    if(g.p){g[0].dyn()} //can optionally delete the 'something'

    return f
}
pD.pol=function(b){var p=this


    p= M.p( [ [0,50],[-50,0],[0,-50],[50,0]  ])
    // w.pol(v.x, v.y, p) -> p.pol(w,v)?



    p.ps(b,function(p){b.pol(p)})
    return p
}
pD.ger=function(x,y){var p=this,v=V(x,y)

    return p.reg(-v.x, -v.y)

}
b.exp=function(){var b=this,xy

    xy=b.pos()
    b.kill()
    return R() ?
        b2d.sep(b2d.pC(20, 7)).XY(xy) :
        w.brick(xy.x,xy.y, 60, 60).rot(45)

}
f.killIfSmall = function (f) {
    var area = this.area()
    if (area < 20) {
        $l('too small: ' + area)
        f.kill()
    }
}
w.cxBul = function (k, fn) {
    var w = this
    w.b(function (cx) {
        cx.w('bul', k, fn)
    })

}

w.polS=function (){var w=this,g=G(arguments), b,o
    if(g.jA){return w.pol.apply(w, g.f)}

    if(O(g[0]) && O(g[1])){

        g.e(function(g){
            w.pol(g).stat()})

        return w
    }

    o= O(g.f)? g.f:
        N(g.f)?{x:g.f,y:g[1],p:g[2]}
            : {p:g.f}
    o.x=N(o.x, w.hW)
    o.y=N(o.y, w.hH)
    b=w.D(o.x,o.y)

    if(!g.p){return b.pol(o.p)}

    if(o.rg){o.p.ps(o.rg, function(p){b.pol(o)})}
    else {o.p.ps(function(p){b.pol(o)})}
    return b.f()
}
w.pC=function(x,y,pC0,pC1,pC2 ){var w=this,g=G(arguments),o
    if(g.O){o=g[0]
        return w.D(o.x,o.y).pC(o)}
    return w.D(x,y).pC(pC0,pC1,pC2)
}
w.ps=function(x,y,p){var w=this,b
    b= w.D(x,y)
    p.ps(b,function(p){b1.pol(p)})
}
w.polU=function(x,y,p1,p2){var w=this,p
    p=w.pol(x,y,M.p(p1).U(p2))
    return p}
w.polD=function(x,y,p1,p2){var w=this
    return w.pol(x,y,M.p(p1).D(p2))}
f.pC=function(n){var f=this,g=G(arguments),pC

    pC= f.iC()? b2d.pC( f.rad(), N(n,10) )
        : f

    return g.m? M.p(pC): pC
}




RDP = function () {

    function RDPsd(points, epsilon) {
        var firstPoint = points[0];
        var lastPoint = points[points.length - 1];
        if (points.length < 3) {
            return points;
        }
        var index = -1;
        var dist = 0;
        for (var i = 1; i < points.length - 1; i++) {
            var cDist = distanceFromPointToLine(points[i], firstPoint, lastPoint);

            if (cDist > dist) {
                dist = cDist;
                index = i;
            }
        }
        if (dist > epsilon) {
            // iterate
            var l1 = points.slice(0, index + 1);
            var l2 = points.slice(index);
            var r1 = RDPsd(l1, epsilon);
            var r2 = RDPsd(l2, epsilon);
            // concat r2 to r1 minus the end/startpoint that will be the same
            var rs = r1.slice(0, r1.length - 1).concat(r2);
            return rs;
        } else {
            return [firstPoint, lastPoint];
        }
    }

// this is the implementation with perpendicular Distance
    function RDPppd(points, epsilon) {
        var firstPoint = points[0];
        var lastPoint = points[points.length - 1];
        if (points.length < 3) {
            return points;
        }
        var index = -1;
        var dist = 0;
        for (var i = 1; i < points.length - 1; i++) {
            var cDist = findPerpendicularDistance(points[i], firstPoint, lastPoint);
            if (cDist > dist) {
                dist = cDist;
                index = i;
            }
        }
        if (dist > epsilon) {
            // iterate
            var l1 = points.slice(0, index + 1);
            var l2 = points.slice(index);
            var r1 = RDPppd(l1, epsilon);
            var r2 = RDPppd(l2, epsilon);
            // concat r2 to r1 minus the end/startpoint that will be the same
            var rs = r1.slice(0, r1.length - 1).concat(r2);
            return rs;
        } else {
            return [firstPoint, lastPoint];
        }
    }

    function findPerpendicularDistance(p, p1, p2) {

        // if start and end point are on the same x the distance is the difference in X.
        var result;
        var slope;
        var intercept;
        if (p1[0] == p2[0]) {
            result = Math.abs(p[0] - p1[0]);
        } else {
            slope = (p2[1] - p1[1]) / (p2[0] - p1[0]);
            intercept = p1[1] - (slope * p1[0]);
            result = Math.abs(slope * p[0] - p[1] + intercept) / Math.sqrt(Math.pow(slope, 2) + 1);
        }

        return result;
    }

// code as suggested by Edward Lee
    var distanceFromPointToLine = function (p, a, b) {
        // convert array to object to please Edwards code;
        p = {x: p[0], y: p[1]};
        a = {x: a[0], y: a[1]};
        b = {x: b[0], y: b[1]};
        return Math.sqrt(distanceFromPointToLineSquared(p, a, b));
    }

//This is the difficult part. Commenting as we go.
    var distanceFromPointToLineSquared = function (p, i, j) {
        var lineLength = pointDistance(i, j);//First, we need the length of the line segment.
        if (lineLength == 0) {	//if it's 0, the line is actually just a point.
            return pointDistance(p, a);
        }
        var t = ((p.x - i.x) * (j.x - i.x) + (p.y - i.y) * (j.y - i.y)) / lineLength;

        //t is very important. t is a number that essentially compares the individual coordinates
        //distances between the point and each point on the line.

        if (t < 0) {	//if t is less than 0, the point is behind i, and closest to i.
            return pointDistance(p, i)
        }	//if greater than 1, it's closest to j.
        if (t > 1) {
            return pointDistance(p, j)
        }
        return pointDistance(p, {x: i.x + t * (j.x - i.x), y: i.y + t * (j.y - i.y)});
        //this figure represents the point on the line that p is closest to.
    }

//returns distance between two points. Easy geometry.
    var pointDistance = function (i, j) {
        return sqr(i.x - j.x) + sqr(i.y - j.y)
    }

    function sqr(x) {
        return x * x
    }

} //not used yet
//b.wPolygon = function () {var b=this; return M.p( b.wV() )}
//b.polyVerts = function () {var b=this; return M.p( b.rV() )}
//f.poly = f.polyVerts = function () {return  Math.pol(this.wV())}
///
///
///
///
///
///
///
///
///
///
///
///
///
///
///



b2d.sep= b2d.fig=b2d.conc=b2d.separator=function(body, verts, scale){



    /*
     //This class is specifically for non-convex polygons.
     // If you want to create a convex polygon, you don't need to use this class
     // - Box2D's <code>b2PolygonShape</code> class allows you to create convex shapes with the
     <code>setAsArray()</code>/<code>setAsVector()</code> method.</li>

     //The vertices must be in clockwise order.</li>
     //No three neighbouring points should lie on the same line segment
     //There must be no overlapping segments and no "holes"

     @param body The b2Body, in which the new fixtures will be stored.
     * @param fixtureDef A b2FixtureDef, containing all the properties (friction, density, etc.) which the new fixtures will inherit.
     * @param verticesVec The vertices of the non-convex polygon, in clockwise order.
     * @param scale <code>[optional]</code> The scale which you use to draw shapes in Box2D. The bigger the scale, the better the precision. The default value is 30.
     * @see b2PolygonShape
     * @see b2PolygonShape.SetAsArray()
     * @see b2PolygonShape.SetAsVector()
     * @see b2Fixture
     * */




    //pass in an array of points //each will get scaled and then, calcShapes is applied to it //and then for EACH OF THE SHAPES!! ....

    Separate = function(b,vs,sc){var g=G(arguments),
        i,j,  m, figsVec,  polyShape,  n

        b=g[0]
        vs=g[1]
        sc=N(g[2],30)
        if(A(b)){
            sc=vs;
            vs=b;
            b= g.p? w.ball(300,300,4): w.dyn(300,300)

        }


        _.e(calcShapes(_.m(vs, V)),  function(vec){
            // vv = vec; vvv = _.m(vv, function(v){return [v.x, v.y]})
            // b.bindSprite2(
            //  w.s.shape(body.X(), body.Y()).poly(vvv, 'r', 'b', 1)
            // )

            h = b2d.pH().setAsVec( vec, sc  )

            b.f(   b2d.f(  h   )   )
        })


        return b.d(1)

    }












    Validate=function(verticesVec){
        /**
         * Checks whether the vertices in <code>verticesVec</code> can be properly distributed into the new fixtures
         * (more specifically, it makes sure there are no overlapping segments and the vertices are in clockwise order).
         * It is recommended that you use this method for debugging only, because it may cost more CPU usage.
         * <p/>
         * @param verticesVec The vertices to be validated.
         * @return An integer which can have the following values:
         * <ul>
         * <li>0 if the vertices can be properly processed.</li>
         * <li>1 If there are overlapping lines.</li>
         * <li>2 if the points are <b>not</b> in clockwise order.</li>
         * <li>3 if there are overlapping lines <b>and</b> the points are <b>not</b> in clockwise order.</li>
         * </ul>
         * */

        var i,n=verticesVec.length,j,j2,i2,i3,d,ret=0;
        var fl ,fl2 =false
        _.times(n, function(i){
            i2= (i<n-1)? i+1: 0
            i3= (i>0)? i-1: n-1
            fl=false
            _.times(n, function(j){
                if ( j!=i  && j!=i2 ) {
                    if (! fl) {
                        d=det(verticesVec[i].x,verticesVec[i].y,verticesVec[i2].x,verticesVec[i2].y,verticesVec[j].x,verticesVec[j].y);
                        if  (d>0)  {  fl=true }}
                    if ((j!=i3)) {
                        j2=(j<n-1)?j+1:0;
                        if (hitSegment(verticesVec[i].x,verticesVec[i].y,verticesVec[i2].x,verticesVec[i2].y,verticesVec[j].x,verticesVec[j].y,verticesVec[j2].x,verticesVec[j2].y)) {
                            ret=1;
                        }}}})
            if (! fl) { fl2=true }})
        if (fl2){ if(ret==1){ret=3} else {ret=2} }
        return ret }
    calcShapes=function(verts){
        var vec
        var i,n,j
        var d,t,dx,dy,minLen
        var i1,i2,i3,p1 ,p2,p3
        var j1,j2,v1 ,v2 ,k,h
        var vec1 ,vec2
        var v ,hitV
        var isConvex
        var figsVec =[], queue


        queue =[]

        queue.push(verts)


        while (queue.length){
            vec = queue[0]

            n=vec.length

            isConvex=true

            _.times(n, function(i){

                i1 = i

                i2 = (i<n-1)?i+1:i+1-n

                i3=(i<n-2)?i+2:i+2-n

                p1= vec[i1]
                p2= vec[i2]
                p3= vec[i3]

                d=det(p1.x,p1.y,p2.x,p2.y,p3.x,p3.y)


                if ( d<0)  {
                    isConvex=false
                    minLen = Number.MAX_VALUE

                    _.times(n, function(j){
                        if(j!=i1 &&  j!=i2 ){
                            j1=j;
                            j2=(j<n-1)?j+1:0;
                            v1=vec[j1];
                            v2=vec[j2];
                            v=hitRay(p1.x,p1.y,p2.x,p2.y,v1.x,v1.y,v2.x,v2.y);

                            if(v){

                                dx = p2.x-v.x; dy=p2.y-v.y; t=dx*dx+dy*dy

                                if(t<minLen){

                                    h=j1
                                    k=j2
                                    hitV=v
                                    minLen=t

                                }}}
                    })

                    vec1=[]
                    vec2=[]

                    j1=h; j2=k;
                    v1=vec[j1];
                    v2=vec[j2];

                    if (! pointsMatch( hitV.x, hitV.y,  v2.x,v2.y)) {vec1.push(hitV)}
                    if (! pointsMatch( hitV.x, hitV.y,  v1.x,v1.y)) {vec2.push(hitV)}


                    h=-1
                    k=i1


                    while(true){

                        if(k == j2){ //if( h<0|| h>=n ){err()}

                            if (!isOnSegment(
                                    v2.x,
                                    v2.y,
                                    vec[h].x,
                                    vec[h].y,
                                    p1.x,
                                    p1.y )){  vec1.push( vec[k] )  }

                            break

                        }  else { vec1.push(vec[k]) }

                        h=k
                        k=(k<1)?n-1:k-1
                    }

                    vec1=vec1.reverse()

                    h=-1
                    k=i2
                    while (true) {


                        if ( k==j1 ){//  if   ( h<0  || h>=n)  {  err()   }
                            if ( k==j1  && ! isOnSegment(v1.x,v1.y,vec[h].x,vec[h].y,p2.x,p2.y)){  vec2.push(vec[k])   }
                            break}

                        else  {
                            vec2.push(vec[k]);
                        }
                        h=k
                        if ( k+1 > n-1 ) { k=0 }  else {k++}
                    }

                    queue.push(vec1,vec2)
                    queue.shift()

                }
            })



            if (isConvex) {figsVec.push(queue.shift())}
        }

        return figsVec
    }
    hitRay=function(x1,y1,x2,y2,x3,y3,x4,y4)  {
        var t1=x3-x1,t2=y3-y1,t3=x2-x1,t4=y2-y1,t5=x4-x3,t6=y4-y3,t7=t4*t5-t3*t6,a;

        a=(((t5*t2)-t6*t1)/t7);
        var px=x1+a*t3,py=y1+a*t4;
        var b1 =isOnSegment(x2,y2,x1,y1,px,py);
        var b2 =isOnSegment(px,py,x3,y3,x4,y4);

        if ((b1&&b2)) {
            return V(px,py);
        }

        return null;
    }
    hitSegment=function(x1,y1,x2,y2,x3,y3,x4,y4)  {
        var t1=x3-x1,t2=y3-y1,t3=x2-x1,t4=y2-y1,t5=x4-x3,t6=y4-y3,t7=t4*t5-t3*t6,a;

        a=(((t5*t2)-t6*t1)/t7);
        var px=x1+a*t3,py=y1+a*t4;
        var b1 =isOnSegment(px,py,x1,y1,x2,y2);
        var b2 =isOnSegment(px,py,x3,y3,x4,y4);

        if ((b1&&b2)) {
            return V(px,py);
        }

        return null;
    }
    isOnSegment=function(px,py,x1,y1,x2,y2) {

        var b1 =   (  (x1+0.1)>=px &&px>=x2-0.1)  ||  (   (x1-0.1)  <= px  &&   px <= x2+0.1   )

        var b2 =  ( (y1+0.1)>=py && py>=y2-0.1)  ||  (   (y1-0.1) <=py   &&   py <= y2+0.1   )


        return  b1&&b2  &&   isOnLine(px,py,x1,y1,x2,y2)
    }
    pointsMatch=function(x1,y1,x2,y2)  {
        var dx=(x2>=x1)?x2-x1:x1-x2,dy=(y2>=y1)?y2-y1:y1-y2;
        return   dx<0.1  && dy<0.1
    }
    isOnLine=function(px,py,x1,y1,x2,y2) {
        if (  (x2-x1)>0.1    ||    x1-x2>0.1  ) {
            var a=(y2-y1)/(x2-x1),
                possibleY=a*(px-x1)+y1,
                diff=(possibleY>py)? possibleY-py: py-possibleY

            return (diff<0.1)
        }

        return (((px-x1)<0.1)||x1-px<0.1)
    }
    det=function(x1,y1,x2,y2,x3,y3) {return x1*y2+x2*y3+x3*y1-y1*x2-y2*x3-y3*x1}
    // err=function(){throw new Error("A problem has occurred. Use the Validate() method to see where the problem is.")}

    if(b2d.isGPoly(verts)){

        verts = verts.verts()
    }

    verts= _.map(verts,function(v){v=V(v);return [v.x, v.y]})

    return U(body)? Separate : Separate(body, verts, scale)
}
//my poly operations can only work with POSITIVE vertices
//but box2d needs fixt vertices specified relative to a body
//so this allows the body that the operation was based on to take responsibility
//for converting them back
//you can pass in the verts, or the gPoly itself!


old = function () {

    b2d.fixtPamsx = function (o) {
        o = o || {}
        o.x = _.tN(o.x)
        o.y = _.tN(o.y)
        o.a = _.tN(o.a)
        o.r = _.tN(o.r, 40)
        o.w = _.tN(o.w, 50)
        o.h = _.tN(o.h, o.w || 100)
        o.d = _.tN(o.d, 0.5)
        o.b = _.tN(o.b, 0.5)
        o.f = _.tN(o.f, 0.5)
        o.s = D(o.s) ? o.s : 0
        o.o = _.tN(o.o, 1)
        o.q = D(q) ? o.q : true
        return o
    }
    difOld = function () {
        b.difx = function () {
            var b = this, g = G(arguments),
            //subtract something from ONLY my FIRST fixt
                p = b2d.d(b, g[0]).rel(b);
            //return the result
            if (g.n) {
                return p
            }
            //or add the new fixture on
            //by default, first clearing it empty
            if (g.P) {
                b.clear()
            }
            b.pol(p)
            return b
        }
        b.DIFFx = function (b2) {
            var b = this, g = G(arguments),
                f = b.f()

            b2d.sep(b,

                _.m(
                    M.p(b).difference(M.p(g[0])).vs(),
                    function (v) {
                        return V(v[0] - b.X(), v[1] - b.Y())
                    })
            )


            f.kill()

            b.rot(0)

            if (g.n) {
                g[0].kill()
            }

            return b

        }
        b.dffx = function (b2) {
            var b = this

            return M.p(b).difference(M.p(b2))
        }
    }



    b.polx = b.polyx = function me() {
        var b = this, w = b.W(), g = G(arguments), v, h, f, fd, n, fs, h, mult, o

        /*
         if( A(g[0]) || S(g[0]) ){
         if(!g.length>2){return me.apply(b,g)}
         o= S(g[0]) ?
         { c:g[0], v:_.r(g) }
         :
         {c :'p', v:g}
         if (S(_.l(o.V))) {o.k= o.v.pop()}
         f = b.f(  b2d.pol.apply(null, o.v)   )
         if (o.k) {f.K(o.k)}
         if (o.c) {f.bS(w.s.poly(o.v, o.c, o.c))}
         return f
         }*/


        o = g[0] || {}
        o.x = _.tN(o.x)
        o.y = _.tN(o.y)
        o.a = _.tN(o.a)
        o.r = _.tN(o.r, 40)
        o.w = _.tN(o.w, 50)
        o.h = _.tN(o.h, o.w || 100)
        o.d = _.tN(o.d, 0.5)
        o.b = _.tN(o.b, 0.5)
        o.f = _.tN(o.f, 0.5)
        o.s = D(o.s) ? o.s : 0
        o.o = _.tN(o.o, 1)
        o.q = D(q) ? o.q : true
        if (o.X) {
            b.clear()
        }

        if (o.q == false) {
            h = new b2d.PolygonShape()
            v = _.m(o.v, b2d.div)
            h.SetAsArray(v, v.length)
            fd = new b2d.Dynamics.b2FixtureDef()
            fd.shape = h
            fd.den(o.d).rest(o.b).fric(o.f)
            f = b.f(fd)
            if (o.k) {
                f.K(o.k)
            }
            if (o.C) {
                f.C(o.C)
            }
            return f
        }


        n = b.num()

        if (O(o.v[0][0])) {
            _.e(o.v, function (v) {
                b2d.sep(b, v)
            })
        }
        else {
            b2d.sep(b, o.v);
            o.v = [o.v]
        }

        fs = _.f(b.fs(), b.num() - n)
        _.e(fs, function (f) {
            f.d(o.d).r(o.b).fr(o.f)
            f.m_isSensor = o.s ? true : false
            if (o.k) {
                f.K(o.k)
            }
            if (o.c) {
                f.C(o.c, o.C, o.l)
            }
            if (o.lf) {
                f.bS(w.s.h().lf(o).lt(o.v))
            }
            if (o.rf) {
                f.bS(
                    //w.s.h().c(o).lt(o.v) // w.s.h().pol(o)
                    w.s.h().rf(o).lt(o.v)
                )
            }
        })
        if (o.bm) {
            b.bS(w.s.h().bmV(o))
        }
        return fs.length > 1 ? fs : fs[0]
    }

    b.sep = function () {//b.fig=b.con=

        var b = this,
            g = G(arguments),
            V = g[0],
            n = b.num(),
            c,
            o,
            newFs

        if (U(g[0])) {
            return b
        }

        if (A(g[0])) {
            if (S(g[0][0])) {
                c = g[0].shift()
            }
            o = {v: g[0], c: c}
        }

        else o = g[0]
        o.c = o.c || 'o'
        if (g.n) {
            b.clear()
        }
        b2d.sep(b, o.v)
        newFs = _.f(b.fs(), b.num() - n)
        _.e(newFs, function (f) {
            f.C(o.c)
            if (o.s) {
                f.sen(1)
            }
        })
        return b
    }


    b.conc2 = function (col) {


        var g = G(arguments), col = g[0], verts,
            b = this, fs, n1, n2, newFixts

        if (U(col)) {
            return
        }
        verts = S(col) ? _.rest(g) : g

        if (g.n) {
            b.clear()
        }
        n1 = b.num()

        b2d.sep(b, verts)


        if (S(col)) {
            n2 = b.num()
            fs = b.fs()
            newFixts = _.first(fs, n2 - n1)
            _.each(newFixts, function (f) {
                f.C(col)
            })
        }

        return this
    }


}
PC=function(){W()

    /*
    w.S(700,100).pC('d',60,5)
    w.S(530,170).pC('d',80,10)
    w.pC(325,155,'d',120,15)
*/
  //  w.D(100,110).pol( w.S(100,100,'w',50).f().pC(10,'*') )



    redRect = w.D(960,280,'r',200,100)



    p=   w.S(830,270).pC('z',80,10)
        .dif(

       redRect ,

      '-')





    w.D(1000,100).pol( p )





    /*
    w.$$(function(){
        w.e(function(b){b.dyn()})
    })*/

}


WALLZ= function(){W(10).Y()


    /*
    //x = w.S(900,450,'r',250,200)

    bb = w.S(w.w, w.h/2,'w', 200,100  )

    w.r_.sub(   bb )

    w.r_.C('o')

    //bb.kill()



    b = w.S(1200,300,'p',200,100)

    b1= w.S(1200, 300)




    DIF(w.r_.f(), b.f())
        .ps(b,function(p){
            b1.pol(p)

        })


   // b.kill()


    */


}
DFF=function(){W(10)


    w.S(900,450,'r',250,200).f().sub(w.D(850,460,'w',200,100,0,0,-20).f())
    b= w.S(1100,100,'r',100,100)
    b1= w.S(1050,120,'b',100,40)

/*
    w.$$(function(){
        w.D(500,100).pol('r',
            b.f().dif(b1.f(), '-')
        )
        b.kill()
        b1.kill()
    })


    fn=function(){
            var b=w.S(100,100,'r',100,100),
                b1=w.S(130,100,'b',100,80)

            $.in(function(){
                b.sub(b1,'-')

            })
    }//;fn()



    fn=function(){
            var b=w.S(300,100,'r', 100, 100),
                b1=w.S(330,100,'b', 100, 80)
            w.$$(function(){
                w.D(300,200).pol(b.f().dif(b1,'-'))})
        };//fn()


    fn=function() {var b, o,p
            b = w.S(200, 400, 'b', [-80, -40], [0, -200], [100, 50])
            o = w.S(280, 420, 'o', 100, 100)
            p = b.dif(o)
            w.D(300, 300).pol( p)
            w.dot(300,300)
        }//;fn()

    fn=function() {
            white = w.S(700, 400, 'w', 100, 100)
            red = w.S(700, 400)
            f = red.pol({
                c: 'r',
                v: [[-100, 10], [-80, -40],
                    [0, -200], [100, -60]]
            })
            yellow = w.S(930, 300, 'y', [
                [100, 100],
                [100, 100, 0, 0, 45]])

        yel = yellow.pD().reg(yellow)

            green = w.S(1030, 400, 'g', 200, 200)
            w.md1(function () {
                red.sub(white, '-').dyn().lV(-60, -10)
                yellow.sub(green).dyn().lV(-60, -10)
                w.$(function () {
                    yellow.lV(-60, -10)
                })

                $.in(2, function(){

                    green.sub( w.S(930,300).pol( yel ))
                })
            })

        };//fn()

*/
}





MOREDFF=function(){W()

    fn=function() {var white = w.S(700, 400, 'w', 100, 100),
        red = w.S(700, 400),
        f = red.pol({
            c: 'r', o: .2,
            v: [[-100, 10], [-80, -40], [0, -200], [100, -60]]
        }),
        yellow = w.S(930, 300, 'y', [[100, 100], [100, 100, 0, 0, 45]]),
        green = w.S(1030, 400, 'g', 200, 200)

        w.md(function () {
            white.sub(red, '-') //red.dyn()
            green.sub(yellow, '-').dyn().lV(-60, -10)
        })

    };fn()

    recV=function() {
        w.pol(400, 300,
            w.S(200, 350, 'b',
                [-80, 10], [0, -150],
                [100, 100]).dif(b2d.recV(280, 420, 100, 100)))
    };recV()


    y = w.S(500,100,'y',[[100,100], [100,100,0,0,45]]).rot(20)

    g=  w.S(550,150,'g',[[100,100], [100,100,0,0,45]])

    y1 = w.S(700,100,'y',[[100,100], [100,100,0,0,45]]).rot(20)

    g1=  w.S(750,150,'g',[[100,100], [100,100,0,0,45]])


    w.md1(function(){
            g.sub(y).dyn()
            y1.sub(g1).dyn()
        })




}
GPC=function(){


        v1=[[61, 68], [145, 122], [186, 94], [224, 135], [204, 211],
            [105, 200], [141, 163], [48, 139], [74, 117]]
        v2=[[131, 84], [224, 110], [174, 180], [120, 136],[60, 167]]

        p1 = M.p(v1)
        p2 = M.p(v2)

        x0 = $.can('b', 300, 200).A().ctx()
        x0.drawPolys(p1, 'b', 0, -30)
        x0.drawPolys(p2, 'r', 0, -30)

    $.br().A()

        xx = $.can('y', 300, 400).A().ctx()

        _.e(['D','I','U','X'],function(o){
            $.bt(o,function(){
                xx.clearRect(0,0,400,400)
                xx.drawPolys(p1[o](p2),'g',0,150)}).A()})

    }

POLS=function(){W(50)
        p1 = M.p([[-50,50],[-50,-50],[50,-50],[50,50]])
        p2 = M.p([[-100,0],[-100,-100], [0,-100],[0,0],[-98,2]])


    w.D(300,300).pol({v:p1.U(p2)  })

  //  w.pol(300,300, p2)

    // w.polS([300,300,p1],[300,300, p2])

    /*

    w.pol(
            [500,200, p1.U(p2)],
            [600,200, p1.D(p2)],
            [700,200, p1.I(p2)],
            [800,200, p1.X(p2)]
        )
*/
}


SAUCERS=function(){W(0)

    b=w.S(300,300,[['g',30,30],['b',100,6],['o',100,6,0,30]])

    //one way
    b1=w.D(700,300).vX(-10)
    ps=b.ps();
    _.e(ps, function(v){
        b1.pol({c:'r', v:v})
    })


    //better way
    b1=w.D(500,500).vX(10)

    b.ps(function(v){ b1.pol({v:v}) })

    //best way
    b.copy(500,450).vY(-10)


    sauce=function(){

        var p= UNI(
            w.S(400,280,'y',30,30),
            w.S(420,300,'o',30,30),
            w.S(420,300,'g',100,6),
            w.S(420,310,'g',100,6,0,30))
            .ps(420,300)

        w.$(function(o){
            w.D(o.x,o.y).pol({v:p}).aV(2)
        })

    };sauce()
}


UNII=function(){W(50).Y()

    fn=function() {var p1,p2, b, r, d,f
        p1 = [[-50, 50], [-50, -50], [50, -50], [50, 50]]
        p2 = [[-100, 0], [-100, -100], [0, -100], [0, 0], [-98, 2]]

      /*  w.polU(500, 200, p1, p2)
        w.polD(600, 200, p1, p2)
       */

        b = w.S(520, 120, 'b', 50, 50)
        r = w.S(500, 100, 'r', 50, 50)
      //  w.polU(500, 200, b, r)

        d = w.S(500,200).dot('y')

        f = d.pol({c:'w',C:'z',l:5,v:b.sum(r)})  //f[0].C('z');f[2].C('o')//f is an ARRAY OF FIXTS!!!


    };fn()




    b=w.S(100,400,'r',[-40,-20],[0,-100],[50,25])
    r= b.f()
    o= w.S(150,420,'o',50,50).f()
    y= w.S(100,340,'y',50,50)

    w.D(200,400).pol({v: r.uni(o) })

    w.D(350,400).pol( r.uni(y.f())  )
    w.D(440,400).pol('d', r.uni(o, y.f()) )
    w.D(600,300).pol( y.uni(o))


    w.D(230, 150).pol(
        'w',
         w.S(200, 200, [['r', 50,50],['o', 10, 100 ]]).uni('+'))

    w.S(800,350).pol({
        c:'y',
        v: w.S(1000,300,[['g',50,200],['o',200,50],['r',100,100]]).uni('+')
    })



}




HOL=function(){W();$l('hol')
    b= w.S(400,400,'r',300,300).f()
    b1= w.S(400,400,'z',100,100).f()
    d = M.p(b).D(b1)
}


PDPS=function(){W()

    b= w.brick()
    p=M.p(b)

    p.ps(b, function(p){
        w.D(300,400).pol(p).stat()
    })

    w.i.dot(300,400)

}

GERN = function () {
    W({g: 0}).Y()
    w.p(200,200)
    ter = w.S(400, 400, 'g', 300, 300).K('ter')

    w.cxBul('ter', function (tFx) {
        var bu = this.B()
        $.in(1, function () {
           var exp = w.S(bu.X(), bu.Y(), 'g', 100, 100).K('ter')
            //t.sub( exp )
            $.in(10, function(){exp.kill()})
        })
    })


}


STAMP=function(){W({w:'U',g:50})

    soda = w.S(300, 300, 'b', 300, 200).c('b')
    r = w.S(200, 400, 'r', 300, 200).c('r')

    y = w.S(240, 200, 'y', 200, 300, 0, 0, 100).c('y')

    $.in(1, function(){
        soda.sub(y, '-')
        soda.f().C('o')
        f = soda.f()
    })

    //soda.kill()



    $.in(3, function(){
        DIF(f, r.f())
            .ps(soda,function(p){
                soda.pol(p)
            })

    })


      w.D(800,100).pol( 'g', w.D(800,300,'r',100, 20)   )



    cross = w.D(600, 300,'z',
        [
            ['r', 100, 20],
            ['b', 80, 30, 0, 0, 80]
        ])

        cross = cross.uni().reg(cross)

    w.$(function(o){
        w.D(o.x, o.y).pol( cross )

            w.pol(o.x, o.y, soda)
           // o.f.kill()
           // r.kill()
      //      soda.dyn()
    })


}


SUBCOL=function(){W(0)


    /*
    b=w.S(300,300,'b',300,200).c('b')

    r=w.S(200,400,'r',300,200).c('r')

    y=w.S(240,200,'y',200,300,0,0,100).c('y')


    $.in(function(){

        y.sub(b)//.C( y.c() )

        b.kill()

        //b.sub(b1,'-').C('b')
    })
*/

    fn=function(){var b, p,b1

        b = w.D(900,200,[
            ['p',200,100],['b',100,200]])

        b1= w.D(900,400)


        DIF(b.fs(1), b.fs(0)).ps(b,function(p){b1.pol(p)})
    };fn()
}
DES=function(){W(0)


   // b=w.S(300,300,'b',300,200).c('b')
    r=w.S(200,400,'r',300,200).c('r')
   // y=w.S(240,200,'y',200,300,0,0,100).c('y')

    cB=circ=w.D(700,200)
    cF=circ.pC(50,10).C('o')


    u1= cB.uni()

    u = _.m(u1.vs(), function(v){v=V(v)
        return [v.x+cB.X(), v.y+cB.Y()]

    })


    w.pol(600,300, [u]).C('y')

    $.in(function(){
        //b.sub(y,'-'); b.f().C('r').kill()
    })

    $.in(function(){
        newBod = w.D(600,100)
        r.ps(function(v){newBod.pol('d',v)})
    })


    /*


    f=b.f()

    p = DIF(f, r.f())

    p.ps(b,function(p){b.pol(p)})
    f.kill()

    r.kill()
    ?

     */








    //circ.dyn().sub( rect )
    // rect.sub(u)

    // rect.dyn()
    //pC.dyn()

}
SUB = function () {W(20).Y();y.rot(90).XY(20, 50)

    face = w.S(300, 400, 'b', 100, 100)
    hat = w.S(300, 400, 'w', [
        [[-100, 10], [-80, -40], [0, -200], [100, 0]],
        [20, 50]
    ])




    redRec = w.S(900, 350, 'r', 200, 100)
    blueBody = w.S(1000, 300)
    fixt1 = blueBody.rec({c: 'b', w: 100, h: 100})
    fixt2 = blueBody.rec({c: 'b', w: 100, h: 100, x: 30, y: 30})


    $.in(2, function(){
        face.f().sub(hat,'-')
        redRec.f().sub(blueBody,'-')
        redRec.C('r')
    })

    a=w.S(140, 140, 100, 100).rot(20)
    b= w.S(100, 100, 100, 100).rot(45)

    d=w.S(650, 420,'b',100, 100)

    b9 = w.S(610,380,[
        ['b', 40, 70, 20, -20],
        ['o', 40, 70, -20, 20,'-']
    ]).rot(-20)
    fs=b9.fs()


    $.in(3, function () {
        w.S(720, 400).pol( d.sub(b9, '-'))
    })


    //does not keep color!
    c=w.S(450, 300, 'w', 100, 100)
    c.minusPolyCirc(550, 300, 100, 20)


}

SENSUB=function(){W(0).Y()
    r  = w.D(600,350, 'r', 400, 200).grp(-1)
    b  = w.D(1000,300,[['b', 100,100 ], ['b',100,100,30,30 ]]).grp(-1)
    w.$$( function(){
        r.fs(function(f){f.sub(b)})
        r.grp(-1)
        b.kill()
        r.C('r')
        b=w.D(1000,300,[['b', 100,100], ['b',100,100,30,30]]).grp(-1)
    })
}



HOLE = function () {
    W(0)
    out = w.S(300, 300, 'b', 200, 200)
    inn = w.S(300, 300, 'c', 100, 100)
    out.dif(inn)

    //inn.dyn()

}
SEB = function () {
    W({g: 1})//w.show(function(){return b.num()})
    b = w.D(800, 300, 'r', 200, 800).stat().K('terr')
    y = w.y().lD(3).X(1100)
    p = w.p(200, 400).K('jason');
    //setTimeout(function () {p.sprite.sXY(.5)}, 1000)
    can = true
    w.b(function (cx) {
        var fixt, j, bull, terr, bX, bY, br
        if (fixt = cx.w('bul', 'terr')) {
            bull = fixt[0].B()
            terr = fixt[1].B()
            bX = bull.X()
            bY = bull.Y()
            bull.kill()
            if (can) {
                can = false
                // b.minusPolyCirc(bX, bY, 100, 7)
                poly = M.p(_.m(b2d.pC(100, 7), function (v) {
                    return [v.x + b.X(), v.y + b.Y()]
                }))
                // verts = b.sub(poly)
                br = w.pC(bX, bY, 100, 7)  // b.sub(br) // b.verts not working :(
                b.sub(br, '-') // br.kill()
                //  b.color('r')
                can = true
            }
        }
        else if (fixt = cx.w('jason', 'bul')) {
            $l('bullet hit jason!!!!');
            j = fixt[0].body();
            //j.sprite.tween([{sxy:20, r:100}, 1000])
        }
    })
    f = function () {
        v = h.verts()
        v.unshift('b')
        v.unshift(200)
        v.unshift(200)
        w.B.apply(w, v)
    }
    killIfSmallx = function (f) {
        var area = f.area();
        if (area < 20) {
            $l('too small: ' + area);
            f.kill()
        }
    }

}
TERREASEL = function () {
    z()
    s = stage = cjs.stg(1600, 600).A()
    h = s.shape()
    h.f('b').dc(200, 200, 10)
    h2 = s.shape().X(700)
    h2.f('b').dc(0, 0, 10)
    tile = function (i, j) {
        return [V(-5 + i, 130 + j), V(-5 + i, 80 + j), V(45 + i, 80 + j), V(45 + i, 130 + j)]
    }   // lower left //upper left//upper right//lower right
    draw = function () {
        terr = []
        _.t(13, function (i) {
            _.t(8, function (j) {
                terr.push(tile(i * 50, j * 50))
            })
        })
        h.drawPolygons(terr, 'b', 'r')
    }
    draw()
    t = M.p(terr[101])
    doExplosion = function (e) {
        v = V(e.stageX, e.stageY)
        exP = circ(v, 100)
        h.drawPolygon(exP, 'z')
        c = Math.p(exP) // for each existing terrain polygon, check the difference between the polygon itself and the
        // explosion polygon. This should be optimized in some way, checking only for terrain polygons
        // which are actually affected by the explosion.
        // Then we remove the terrain polygon from the array, and we add the resulting polygon(s) after
        // difference is calculated.
        iX = c.intersection(t)
        h2.drawPolygon(iX.verts())
        for (var i = terr.length - 1; i >= 0; i--) {
            totalArea = 0
        }
    } // resultPolygons =   terr[i].intersection(exP)// terr.splice(i,1)// for (var j =0; j<resultPolygons.length; j++) {terr.push(resultPolygons[j])}
    circ = function (v, rad, prec) {
        prec = N(prec) ? prec : 20
        arr = [];
        ang = 2 * Math.PI / prec
        _.times(prec, function (i) {
            pX = v.x + rad * Math.cos(ang * i)
            pY = v.y + rad * Math.sin(ang * i)
            arr.push(V(pX, pY))
        })
        return arr
    } // listeners: basically we destroy the terrain with a mouse click or a mouse drag
    // stage.on('mousedown', function(){stage.on('mousemove', doExplosion)})
    // stage.on('mouseup', function(){stage.off('mousemove', doExplosion)})
    stage.on('click', doExplosion)
    vv = [V(645, 480), V(595, 480), V(595, 430), V(645, 430)] //lower right//lower left//upper left//upper right
    h.drawPolygon(vv, 'z')
    vvv = [V(645, 380), V(595, 380), V(595, 372), V(617, 369), V(645, 373)]
    h.drawPolygon(vvv, 'z')
}
circ=function(v,r,n){var a,pX,pY
    n=N(n,20)
    a=2*M.PI/n
    arr = []
    _.t(n, function (i) {
        pX=v.x+r * M.c(a * i)
        pY=v.y+r * M.s(a * i)
        arr.push(V(pX, pY))})
    return arr
}
TERR=function(){W()

    explosion=function (x, y) {var c, b

        c = w.pC(x,y,30,5)

        b = b2d.sep(circ(V(0, 0), 30, 5)).XY(x, y)
        return {c:c,b:b}

    }

    sep = b2d.sep()
    terr= w.ter()
    w.dot(420,200); w.dot(410,210)
    t = terr[103]
    /*



    s = b2d.sep(t.b.f().rV()).stat()//.XY(100,100)
    exp = explosion(740, 395)
    M.p(exp.cir)

    dif = t.poly.D(exp.cir)

    t.b.f().kill()


    bb = b2d.sep(t.b, dif.rV()).stat().XY(0, 0)


    // setTimeout( function(){ t.bod.X(20) }, 2000)

*/
}
w.ter=function(){var w=this,ter= []
    _.t(13, function (i) {
        _.t(8, function (j) {
            var b = w.brick(i * 25 + 420, j * 25 + 200, 20, 20)
            ter.push({
                b: b,
                vs: b.f().rV(),
                p: M.p([
                    V(i * 25 + 410, j * 25 + 210),
                    V(i * 25 + 410, j * 25 + 190),
                    V(i * 25 + 430, j * 25 + 190),
                    V(i * 25 + 430, j * 25 + 210)])
            })
        })
    })
return ter

}


TER=function(){W().C('z')

    terr= w.ter()
    w.dot(420,200); w.dot(410,210)
    t = terr[103]

    fn=function(f){f.B().kill()}
    o={x1:550, y1:250, x2:600, y2:500, fn:fn}
   // w.Q(o)

    w.rad(550,250,35,fn)


}


VSGLUE=function(){W(5)


     u= UNI(
     w.S(100, 100,'r', 50, 50),
     w.S(120, 120, 'b',50, 50)
     ).vs()


     _.t(3,function(){w.D(R(200,50),100).pol($r(),u)})



    b = w.S(300,400,'r',[-80,-40],[0,-200],[100,50]).dot()

    p = UNI(
        w.S(300,280,'y',100,100).f(),
        w.S(400,420,'o',100,100).f())


    b2d.glu(
        w.D(100, 400,'x',[p.g(0).reg(b).vs()]),
        w.D(100, 400,'u',[p.g(1).reg(b).vs()])
    )


    w.dot('d', 600,400)


    UNI(
     w.S(500, 200,'b', 100, 100),
     w.S(600, 400, 'd',100, 100)
     )//.dot(w)

    UNI(
     w.S(700, 200,'o', 100, 100),
     w.S(750, 250,'g',100, 100)
     )//.dot(w)

     UNI(
         w.S(900, 200, 'r',100, 100),
         w.S(1000, 200, 'b',100, 100)
     )//.dot(w)


     w.D(1000,350).pol({

         c: 'x',
         v: w.S(1000,450, [
             ['o',60,60,100,0],
             ['r',[[-20,0],[0,-50],[100,10]]],
             ['g', 20,100,50,-50]
         ]).uni()

     })



     w.D(1050, 500).pol(w.S(900,500,[
     ['g',30,80],
     ['b', 40, 50, 20,0 ],
     ['r', 50, 20, 50, 0, 20]]).uni())


}

//union of 2 non overlapping fixtures,
// can just result in a body with two fixtures..
// yea, why are unions not just creating bodies with all the fixtures?
// no need combine two fixtures into one, right???!
//b.dif(o ) is shortcut for: b2d.d(b,o).rel(b)



//geo
HULL=function(){z()
    c = $.c('y',800,400).id('canvas').A()
    window.onload = init
    function init() {

        var canvas = c[0],        // main canvas element
            fps = 10,                                        // drawing frames per second
            convex = new Convex(),                            // convex hull
            dots = []                                     // dots, which are not in the convex hull


        // adjust canvas proportions
        // canvas.width = canvas.clientWidth; canvas.height = canvas.clientHeight;

        // assign canvas context
        ctx = canvas.getContext("2d");


        setInterval(function(){

            // get a blank canvas //// clear
            ctx.clearRect(0, 0, ctx,canvas.width, ctx.canvas.height)


            // draw convex dots
            convex.draw()

            // draw dots
            dots.map(function(dot) {   dot.draw()   })
        }, 1000 / fps)



        // clicked on canvas
        c.click( function(evt){
            var x = evt.clientX - canvas.getBoundingClientRect().left,
                y = evt.clientY - canvas.getBoundingClientRect().top

            // clear convex
            convex.dots=[]

            // add dot
            dots.push(new Dot(new V(x, y)))
        })




        $.bt('draw convex', function() {
            // move dots to canvas
            dots.map(function(dot){convex.addDot(dot)})

            // clear dots
            dots = []
        }).A()






    }
    var Dot=function(pos){this.pos=pos}
    Dot.prototype = {
        draw: function() {
            ctx.beginPath();
            ctx.arc(this.pos.x, this.pos.y, 2, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
        }
    }
    Convex = function(){ this.dots = [] } // a convex hull
    Convex.prototype = {
        draw: function() {
            var _this = this,           refDots;

            // loop through dots
            this.dots.map(function(el) {
                var dotAfter;

                // draw dot
                el.draw();

                refDots = _this.copyDots(_this.dots); // copy dots

                // remove el from reference dots
                for (var i=0; i<refDots.length; i++) {
                    if (refDots[i] != el) continue;
                    refDots.splice(i, 1);
                }

                // get dot after this dot
                dotAfter = _this.getDotAfter(_this.dots, el);

                // draw direct line

                ctx.moveTo(el.pos.x, el.pos.y);
                ctx.lineTo(dotAfter.pos.x, dotAfter.pos.y);
                ctx.stroke();


            })
        },
        addDot: function(dot) {
            // the dot cannot be added, because it wouldn't be a convex anymore
            if (this.isDotInsideConvex(this.dots, dot)) return;

            // add dot intentionally
            this.dots.push(dot);

            // less than four dots are always a convex
            if (this.dots.length < 4) return;

            // remove dots, which are not in the convex (anymore)
            this.composeConvexHull();
        },
        composeConvexHull: function() {
            var refDots,        // all dots, except the one we are testing
                dot,            // the dot, supposed to be in the new convex
                newDots = [];    // dots, which are definitely part of the convex

            // loop dots
            for (var i=0; i<this.dots.length; i++) {

                // reset dots reference
                refDots = this.copyDots(this.dots);

                // assig dot to the current index
                dot = refDots[i];

                // remove dot from refDots
                for (var h=0; h<refDots.length; h++) {
                    if (h != i) continue;
                    refDots.splice(h, 1);
                    break;
                }

                // the dot is not inside of the convex, therefore add it
                if (!this.isDotInsideConvex(refDots, dot)) {
                    newDots.push(dot);
                }
            }

            // assign new convex
            this.dots = newDots;
        },
        /*
         copy dots object
         this is done due to call by reference
         */
        copyDots: function(ref) {
            var dots = [];
            ref.map(function(dot) {
                dots.push(new Dot(new V(dot.pos.x, dot.pos.y)));
            });
            return dots;
        },
        isDotInsideConvex: function(convexDots, dot) {
            var dotBefore, dotAfter, sign;

            // at least three dots required for a convex
            if (convexDots.length < 3) return false;

            // the dot is definitely not inside the convex hull
            if (this.dotOutsideConvexRect(convexDots, dot)) return false;

            // assign dot before to the closest dot by the angle, which is negative
            dotBefore = this.getDotBefore(convexDots, dot);

            // assign dot after to the closest dot by the angle, which is positive
            dotAfter = this.getDotAfter(convexDots, dot);

            // dot on the inside of the line from dotBefore to dotAfter
            return dot.pos.getSide(dotBefore.pos, dotAfter.pos) == 1;
        },
        /*
         is the dot outside of the convex rectangle?
         */
        dotOutsideConvexRect: function(convexDots, dot) {
            var outside = [ true, true, true, true ];
            for (var i=0; i<convexDots.length; i++) {
                if (convexDots[i].pos.x < dot.pos.x)
                    outside[0] = false;
                if (convexDots[i].pos.x > dot.pos.x)
                    outside[1] = false;
                if (convexDots[i].pos.y < dot.pos.y)
                    outside[2] = false;
                if (convexDots[i].pos.y > dot.pos.y)
                    outside[3] = false;
            }

            return outside[0] || outside[1] || outside[2] || outside[3];
        },
        /*
         get middle position as vector from the bounding dots
         */
        getCenter: function(dots) {
            var rect = { xMin: dots[0].pos.x, xMax: dots[0].pos.x, yMin: dots[0].pos.y, yMax: dots[0].pos.y };
            dots.map(function(dot) {
                if (dot.pos.x < rect.xMin) rect.xMin = dot.pos.x;
                if (dot.pos.x > rect.xMax) rect.xMax = dot.pos.x;
                if (dot.pos.y < rect.yMin) rect.yMin = dot.pos.y;
                if (dot.pos.y > rect.yMax) rect.yMax = dot.pos.y;
            });

            return new V((rect.xMin + rect.xMax) / 2, (rect.yMin + rect.yMax) / 2);
        },
        /*
         get the closest dot before dot from dots
         */
        getDotBefore: function(dots, dot) {
            var center, bgRad = -Math.PI * 2, dotBefore;

            center = this.getCenter(dots);
            dotRad = center.angleTo(dot.pos);

            dots.map(function(needleDot) {
                var needleRad = center.angleTo(needleDot.pos),
                    refRad = needleRad - dotRad;

                if (refRad > 0) refRad = -(Math.PI * 2 - refRad);

                if (refRad <= bgRad) return;

                bgRad = refRad;
                dotBefore = needleDot;
            });

            return dotBefore;
        },
        /*
         get the closest dot after dot from dots
         */

        getDotAfter: function(dots, dot) {
            var center, smRad = Math.PI * 2, dotAfter

            center = this.getCenter(dots)
            dotRad = center.angleTo(dot.pos)

            dots.map(function(needleDot) {
                var needleRad = center.angleTo(needleDot.pos),
                    refRad = needleRad - dotRad;

                if (refRad > 0) refRad = -(Math.PI * 2 - refRad)

                if (refRad >= smRad) return

                smRad = refRad
                dotAfter = needleDot
            })

            return dotAfter
        }
    }
    var V = function(x, y) {
        this.x = x
        this.y = y
    }
    V.prototype = {
        subtract: function(v) {
            return new V(this.x - v.x, this.y - v.y);
        },
        /*
         this = center, v = destination
         */
        angleTo: function(v) {
            var ref = this.subtract(v)
            return Math.atan2(ref.y, ref.x) + Math.PI
        },


        /*
         0 = on line, 1 = inside, -1 = outside
         */
        getSide: function(v1,v2){
            return Math.sign((v2.x - v1.x) * (this.y - v1.y) - (v2.y - v1.y) * (this.x - v1.x))
        }
    }
}

