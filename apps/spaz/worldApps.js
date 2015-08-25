
PH=function(){W()
    //w.rec()
    b= w.S(600,200)

    b.pol([-100,0],[0,-100],[100,0])

    b.cir({r:50,lf:['g','w']})

    b.rec({w:400, h:20, lf:['g','w']})

    b.rec(400,20,0,0,45)


}
REC=function(){W(0).Y();y.thr()

    w.i.h(100,100,'+')
        .c({l:20, C:'y', lf:{c1:'b'}})
        .dc(100)
        .dr(300,100)


    w.$h(200,450,'w',20,'+')
        .lf({x:-100, c1:'r',c2:'y'})
        .dr2({w:300,h:100,x:0,y:-100}, {w:100,h:300})

    w.ct(600,200).rec(
        {w:300,h:200, c:'r',C:'o',l:10,a:-5 },
        {w:100,h:200,a:20, c:'b', C:'w', l:20})
        .rec({w: 100, h:200, a:20, c: 'b', C:'w', l: 20}).XY(50,50)// c: {l:20, C:'y'},, lf:{c1:'b',c2:'z'}  //lf:{c1:'r', c2:'b'}//lf:['r','b']//,  bf:1


    w.ct(600,450)
        .rec({w:200, h:100, c:'r', C:'o', l:10, a:-5})
        .rec({w:100, h:200, c:'r', C:'o', l:10, a:5})

    w.$h(900,200,'+').lf(['b','y'])
        .dr2({w:200, h:200})

    w.$h(900,400,'+')
        .lf({c1:'r', c2:'y', x1:-100})
        .dr2({w:300,h:100,x:0,y:-100}, {w:100, h:300})


    b=w.D(800,300)
    b.rec({w:250, h:300,   bm:'me'})
    b.rec({w:200,h:200, lf:1, l:2})


    w.rec(145,120,10,80,'o')

    w.$h(200,200,'+')
        .rec(145,120,100,200,'u','y', 20)


}
wowOld=function(){
    pH.arr=  function(){var pH=this
        var v = b2d.verts.apply(null, arguments)

        pH.SetAsArray(v, v.length)

        return pH

    }
//make polyShape (by box or arr) for a fD
    b2d.pH=  b2d.polyH=function me(W,H,x,y,a){var g=G(arguments),
        p=new b2d.PolygonShape()
        if(g.N_){//| 50,200[[,200,60,45
            p.box(g.f,g.s,g.t,g[3],g[4])}

        else if(g.O_){//| [20,300],..

            $a(p, 'arr', g)

            //-> g.a(p,'arr')
            // -> g.a(p.arr)
        }
        return p
    }
    pH.set= function(){var pH=this, g=G(arguments)
        if(N(g[0])){
            pH.box(g[0],g[1],g[2],g[3],g[4])}
        else if(O(g[0])){
            pH.arr.apply(pH,g)}
        return pH
    }
}
WCIR=function(){W()._(function(){

    w.cir({x:500, y:350, r:100, c:'b', C:'z', l:20 }).stat()
    w.D(800,350).cir({r:100, c:'y',  C:'z',  l:100}) //.stat()
})}


