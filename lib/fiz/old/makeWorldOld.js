

/* moved to graphics
 w.rec= w.box=w.bi = w.rect = w.X= function (x, y, W, H, c) {var w=this, g=G(arguments),b,o
 o = g.O?g.f:
 N(g.s)?{x:g.f,y:g.s,w:g.t,h:g[3],c:g[4]}:
 {w:g.f}
 o.x  = N(o.x, w.hW)
 o.y  = N(o.y, w.hH)
 o.w  = N(o.w, 40)
 o.h  = N(o.h, o.w)
 o.c  = o.c || $r()
 b=w.D(o.x,o.y,o.c,o.w,o.h).K('box').DFB(.5,.5,0)
 if(g.n){b.sen(true)}
 return b
 }
 */


w.trackerX=function(o){
    var w=this, t, x, y
    if(o.t==0){return w}
    x=w.w/2; y=w.h/2
    t = w.S(x,y,'w',[[10,10,'-']]).bo(.8)
    w.t = w.trackee = w._t = w._trackee = t
    w.t.track()
    return w}