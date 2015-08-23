
cjs.Keys = $.K

old=function() {


    cjs.watchKeys=function(){

        $l('cjs.watchKeys')
        cjs.Keys.l =   false
        cjs.Keys.r =   false
        cjs.Keys.u =   false
        cjs.Keys.d =  false

        $.kD('l',function(){
            if($.test){$l('left pressed')}

            cjs.Keys.l = cjs.Keys.left = true

            cjs.Keys.dir = 'left'

        })

        $.kU('l',function(){if($.test){$l('left lifted')}
            cjs.Keys.l = cjs.Keys.left = false
        })
        $.kD('r',function(){if($.test){$l('right pressed')}

            cjs.Keys.r = cjs.Keys.right = true
            cjs.Keys.dir = 'right'})
        $.kU('r',function(){if($.test){$l('right lifted')}
            cjs.Keys.r = cjs.Keys.right = false
        })
        $.kD('u',function(){if($.test){$l('up pressed')}
            cjs.Keys.u = cjs.Keys.up = true
        })
        $.kU('u',function(){if($.test){$l('up lifted')}
            cjs.Keys.u = cjs.Keys.up = false
        })
        $.kD('d',function(){if($.test){$l('down pressed')}
            cjs.Keys.d = cjs.Keys.down = true
        })
        $.kU('d',function(){
            if($.test){$l('down lifted')}
            cjs.Keys.d = cjs.Keys.down = false
        })

    }


    $.fn.keyControls = function (num) {
        alert('keyControls')
        var args = G(arguments), that = this
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
        alert('hideOnKeyDown')
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