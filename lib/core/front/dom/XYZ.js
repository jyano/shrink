
$.fn.X = function (l) {
    var q = this, g = G(arguments)
    if (N(l)) {

        q.css('left',

            g.p ? q.X() + l :
                l
        )

        return q
    }
    l = q.css('left')
    return l == 'auto' ? 'auto' : parseInt(l)

    /*

     $.fn.X = $.fn.left = function (left) {


     if (N(left)) {

     return this.css('left', left)
     }

     var left = this.css('left')


     if (left == 'auto') {
     return 'auto'
     }

     return parseInt(left)
     }

     */

}
$.fn.l = $.fn.left=function (l) {var q = this, g = G(arguments)
    if (N(l)) {
        q.css('left', l)
        return q}
    l = q.css('left')
    return l == 'auto' ? 'auto' : q.position().left
}
$.fn.L = function (n) {
    if (U(n)) {return this.css('left')}
    this.css('left', n)
    return this
}
$.fn.R = function (right) {
    if (U(right)) {
        return this.css('right')
    }
    this.css('right', right)
    return this
}
$.fn.LR = function (l, r) {
    var q = this
    if (O(l)) {
        r = l.r;
        l = l.l
    }
    if (N(l)) {
        q.L(l)
    }
    if (N(r)) {
        q.R(r)
    }
    return q
}
$.fn.Y = $.fn.top= function (top) {

    if (N(top)) {
        return this.css('top', top)
    }
    var top = this.css('top')
    if (top == 'auto') {
        return 'auto'
    }
    return parseInt(top)

    /*

     $.fn.Y = $.fn.top = function (top) {
     if (N(top)) {
     return this.css('top', top)
     }
     var top = this.css('top')
     if (top == 'auto') {
     return 'auto'
     }
     return parseInt(top)
     }
     */
} //$.fn.t
$.fn.B =   function (bottom) {
    if (U(bottom)) {
        return this.css('bottom')
    }

    this.css('bottom', bottom)
    return this
}
$.fn.XY = function (x, y) {

    x = N(x) ? x : 0

    if (U(y)) {
        y = x
    }
    return this.X(x).Y(y)

    /*
     $.fn.XY = function (x, y) {

     x = N(x) ? x : 0

     if (U(y)) {
     y = x
     }
     return this.X(x).Y(y)
     }


     */
}