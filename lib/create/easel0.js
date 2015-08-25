cjs = createjs

$Ct=function(){
    return new cjs.Container()
}
$Pt = cjs.Pt = function (x, y) {
    if (U(x)) {return new C$.Point}
    if (O(x) && O(y)) {return new C$.Point(x.x + y.mx() >> 1, x.y + y.my() >> 1)}
    if (O(x)) {return new cjs.Point(x.mx(), x.my())}
    return new cjs.Point(x, y)
} //point!!!

cjs.DOMElement = function () {return cjs.DOMElement}
$H = function (a, b, c) {return new cjs.Shape(a, b, c)}
$Gx = function () {return new cjs.Graphics}

//move to wappyUI
$.dragFrame = function (div) {
    var outerDiv = $.div('r').drag().pad(20).A()
    div = div || $.div('y', 50, 50).mar(20)
    div.on('mousedown', function (e) {e.stopPropagation()})
    outerDiv.A(div)
    return outerDiv
}

$.dragStage = function (x, y) {
    c = $.c('g', 400)
    s = $St(c[0])
    $.dragFrame(c).A()
    return s
}

