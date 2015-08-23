cjs.rtSh = cjs.rotateShake = function (bm) {alert('cjs.rtSh')
        $Tw([bm, 'l'], {r: 0}, [{r: 1}, 1], [{r: -1}, 1])
    }
cjs.scSh = cjs.scaleShake = function (bm) {alert('cjs.scSh')
        $Tw([bm, 'l'], {sxy: 1}, [{sxy: .95}, 1], [{sxy: 1.05}, 1])
    }
//cjs.stopListening = function(){cjs.Ticker.removeAllEventListeners()}
cjs.shad = cjs.shadow = function (color, x, y, blur) {
    if (color == '-') {
        return new cjs.Shadow(null, 0, 0, 0)
    }
    color = S(color) ? color : 'a'
    blur = N(blur) ? blur : 10
    x = N(x) ? x : 0
    y = N(y) ? y : 0
    var shad = new cjs.Shadow(oO('c', color), x, y, blur)
    return shad
}
$.colorPicker = $.ColorPicker = function () {
    z()
    colorPicker = $(' <input id="color" name="color" type="color">').appendTo($('body'))
    colorPicker.change(function () {
        $l(colorPicker.val())
    })
}
cjs.bulletHit = function (bu, inWhat) {
    var res
    res = M.pointInCircle(bu.cX(), bu.cY(), {x: inWhat.x, y: inWhat.y, radius: inWhat.H() / 2})
    if (res == true) {
        $l('hit!')
    }
    return res
}
SETTRANSFORM=function(){s = $St(800).bm('me',function(me){
        b=me
        b.setTransform(0,0,2,.5,0,40,4,2,3)
        m = b.getMatrix()
        function tf(a,b,c,d,e,f,g,h,i){
            return this.x=a||0,
                this.y=b||0,
                this.scaleX=null==c?1:c,
                this.scaleY=null==d?1:d,
                this.rotation=e||0,
                this.skewX=f||0,
                this.skewY=g||0,
                this.regX =h||0,
                this.regY =i||0,
                this}})}
cjs.isDisplayOb=function(ob){alert('cjs.isDisplayOb')
    return O(ob)  &&  F(ob.getStage) }
testInStage = function(){$St().bm('me', function(b){

        b.go(10, 10)
        cjs.tick(function(){ $l(b.inStage()) })
    })}
function oldMaybe(){
        cjs.mXY = function (o, s) {
            alert('cjs.mXY')
// = mxy
            xy(o, s.mx(), s.my())
            return o
        }

        cjs.tick2  = function (func) {
            alert('cjs.tick2')
            cjs.Ticker.addEventListener('tick', func)
            return cjs.Ticker
        }
        sav=function(st,a){
            alert('sav')
            return function(){ st.sv(a) } }

        cjs.toColor = toColor = tCl = function (n1, n2, n3, n4) {
            alert('(cjs.)toColor = tCl')
            return n2 ? "rgba(" + n1 + "," + n2 + "," + "" + n3 + "," + (n4 || 1) + ")"
                :
                $r('c', n1)
        }
        iDo = function (a) {
            alert('iDo!')
//is display obj?
            return O(a) && O(a.parent)
//if an obj...
//if it has an 'ob' pop, return that.  o/w return it, as is
//so it just gets the raw (non super) display object


        }


    }