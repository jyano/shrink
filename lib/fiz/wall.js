
$l('wall')

w=b2d.World.prototype

//vertical wall?
w.vW = function (col, H, x, y) {
    var w = this, g = G(arguments),
        cW = w.can.W(),
        cH = w.can.H()
    if (!S(col)) {
        y = x;
        x = H;
        H = col;
        col = 'x'
    }
    H = (H == '+') ? cH : N(H) ? H : cH / 2 - 10
    if (U(x)) {
        x = cW / 2;
        y = cH / 2 - H / 2
    }
    else if (U(y)) {
        x = (x == '+') ? cW - 20 : (x == '-') ? 0 : x
        y = cH / 2 - H / 2
    }
    //x-=10?
    return w.R(col, 20, H, x, y).bo(.2).K('wall')
}
w.R = function (c, W, H, x, y) {
    var w = this, g = G(arguments),
        wC = w.cen(),
        r

    if (!S(g.f)) {
        y = x;
        x = H;
        H = W;
        W = c;
        c = 'x'
    }
    if (U(W)) {
        W = 200
        H = 200
        x = wC.x - W / 2
        y = wC.y - H / 2
    }
    else if (U(H)) {

        H = W
        x = wC.x - W / 2
        y = wC.y - H / 2
    }
    else if (U(x)) {
        x = wC.x - W / 2;
        y = wC.y - H / 2
    }
    return w.S(
        x + W / 2,
        N(y, x) + H / 2,
        c,
        W, H
    )

    /*
     x=N(g[0])?g[0]:wC.x
     y=N(y)?y:N(g[0])?N(g[0]):wC.y
     W=N(W)?W:100
     H=N(H)?H:W
     */
}
w.walls = function () {
    var w = this, g = G(arguments), o

    if (g.f === 0) {
        return
    }
    o = g.$S ? {w: g.f, c: g.s} : g.A ? {w: g.f[0], c: g.f[1]} : {}
    o.c = o.c || 'o';
    o.w = o.w || '*'
    o.l = 40

    if (o.w == '*') {
        sides();
        verSides()
    }
    if (o.w == '@') {
        w.warp();
        return w
    }
    if (o.w == '_') {
        bot()
    }
    if (o.w == '~') {
        top()
    }
    if (o.w == '[') {
        left()
    }
    if (o.w == ']') {
        right()
    }
    if (o.w == 'U') {
        sides();
        bot()
    }
    if (o.w == 'A') {
        sides();
        top()
    }

    if (o.w == 'C') {
        verSides();
        left()
    }

    if (o.w == 'L') {
        left();
        bot()
    }
    if (o.w == '=') {
        verSides()
    }
    if (o.w == '|') {
        sides()
    }


    if (o.w == '->') {
        verSides();
        left();
        right1()
    }
    if (o.w == '<-') {
        verSides();
        left1();
        right()
    }
    if (o.w == '<->') {
        verSides();
        left1();
        right1()
    }


    if (o.w == 'r2') {
        verSides();
        left();
        right2()
    }
    if (o.w == 'l2') {
        verSides();
        left2();
        right()
    }


    /*

     if (A(o.w)){

     c = o.w[0]
     if (!S(c)){
     h = W;
     W = c;
     c = 'o'
     }
     o.c = o.c || 'o'
     w.floor = w.R(o.c, w.wW, 20, 0, w.wH - 20)
     w.right = w.R(o.c, 20, w.wH, w.Ww - 20, 0)
     w.roof = w.R(o.c, w.wW, 20, 0, 0)
     w.left = w.R(o.c, 20, w.wH, 0, 0)}*/

    function sides() {
        right();
        left()
    }

    function verSides() {
        top();
        bot()
    }


    function left() {

        w.l_ = w.left = w.S(0, w.h / 2, o.c, o.l * 2, w.h).K('wall side left')
        w.l_.SetBullet(true)

    }


    function right() {
        w.r_ = w.right = w.S(
            w.w, w.h / 2, o.c, o.l * 2, w.h
        ).K('wall side right')
        w.r_.SetBullet(true)
    }

    function right2() {
        w.r_ = w.right = w.S(w.w, w.h / 2, o.c, o.l * 2, w.h / 2).K('wall side right')
    }

    function right1() {
        w.r1_ = w.right1 = w.S(w.w, 100, o.c, o.l * 2, 200);
        w.r2_ = w.right2 = w.S(w.w, w.h - 100, 'o', o.l * 2, 200).K('wall side right')
    }


    function left2() {
        w.l_ = w.left = w.S(0, w.h / 2, o.c, o.l * 2, w.h / 2).K('wall side right')
    }

    function left1() {
        w.l1_ = w.left1 = w.S(0, 100, o.c, o.l * 2, 200);
        w.l2_ = w.left2 = w.S(0, w.h - 100, 'o', o.l * 2, 200).K('wall side right')
    }


    function top() {

        w.t_ = w.roof = w.S(w.w / 2, 0, 'o', w.w, o.l * 2).K('wall roof')
        w.t_.SetBullet(true)

    }


    function bot() {
        w.b_ = w.floor = w.S(w.w / 2, w.h, o.c, w.w, o.l * 2).K('wall floor')
        w.b_.SetBullet(true)
    }

}