KEYOB=keyObj={

    up:38,u:38,
    down:40, d:40,
    left:37, l:37,
    right:39, r:39,
    space:32,s:32,
    enter:13, e:13
}



$.wh =function(a,b){return  D(b)?a.which==b:  a.which}



$.k= $.key =$.kD =  function self(k, fn){

    if(O(k)){_.e(k,function(fn,k){
        if(s$(k).isUpper()){$.kU(k.toLowerCase(),fn)}
        else {$.k(k,fn)}})
        return
    }

    if(KEYOB[k]){k=KEYOB[k]}

    $('body').on('keydown', function(e){
        if (e.which == k) {fn(e, $.K)}
    })

}
$.kU =  function(k, fn){

    if(keyObj[k]){k = keyObj[k]}
    $('body').on('keyup', function(e){
        if (e.which == k) { fn(e, $.K) }
    })
}


$.spc=  function (fn) {     return $.kD('space', fn) }



$.K =  function (o) {
    alert('cjs.Keys')
    function oldFn(){
        if (!O(o)) {
            return
        }
        if (F(o.u)) {
            cjs.tick(function () {
                if (cjs.Keys.u) {
                    o.u(cjs.Keys.u)
                }
            })
        }
        if (F(o.d)) {
            cjs.tick(function () {
                if (cjs.Keys.d) {
                    o.d(cjs.Keys.d)
                }
            })
        }
        if (F(o.l)) {
            cjs.tick(function () {
                if (cjs.Keys.l) {
                    o.l(cjs.Keys.l)
                }
            })
        }
        if (F(o.r)) {
            cjs.tick(function () {
                if (cjs.Keys.r) {
                    o.r(cjs.Keys.r)
                }
            })
        }}
}



function maybe(){

    $.fn.toR = $.fn.moveRight = function (num) {
        num = num || 20

        if (this.left() == 'auto') {
            this.left(0)
        }

        this.left(parseInt(this.left()) + num)

        return this
    }
    $.fn.toL = $.fn.moveLeft = function (num) {
        num = num || 20
        if (this.left() == 'auto') {
            this.left(0)
        }
        this.left(parseInt(this.left()) - num)
        return this
    }
    $.fn.toU = $.fn.moveDown = function (num) {
        num = num || 20
        if (this.top() == 'auto') {
            this.top(0)
        }
        this.top(this.top() - num)
        return this
    }
    $.fn.toD = $.fn.moveDown = function (num) {
        num = num || 20
        if (this.top() == 'auto') {
            this.top(0)
        }
        this.top(this.top() + num)
        return this
    }
    $.fn.keyControls = function (num) {
        var args = G(arguments), that = this

        g = args

        this.P('a')

        if (args.P) {
            $.kD('left', function () {
                that.toL(num)
            })
            $.kD('right', function () {
                that.toR(num)
            })
        }
        if (args.N) {
            $.kD('up', function () {
                that.toU(num)
            })
            $.kD('down', function () {
                that.toD(num)
            })
        }
    }// o.keyControls(num) should deprecate use of key(o)
    $.fn.hideOnKeyDown = function (a) {
        var that = this
        $('body').keydown(function (ev) {
            e = ev
            $l(e.which)
            if (e.which == 40) {
                that.hide()
            }
            if (e.which == 38) {
                that.show()
            }
        })
    }
}