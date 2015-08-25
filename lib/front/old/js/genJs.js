

function genJs(){

    props();ajax();drag();mouse()
    function props(){
        $.fn.role=function(role){
            if(U(role)){return this.attr('role')}
            this.attr('role', role)
            return this

        }

        $.fn.type=function(type){
            if(U(type)){return this.attr('type')}
            this.attr('type',type);return this
        }
        $.fn.href=function(href){
            if(U(href)){return this.attr('href')}
            this.attr('href',href);return this
        }
        $.fn.for=function(forWhat){return this.attr('for', forWhat)}
        $.fn.placeholder=function(forWhat){return this.attr('placeholder', forWhat)}
        $.fn.src  = function(a){


            if( U(a) ){return this.attr('src')}

            this.attr('src',  src(a) )

            return this
        }
        $.fn.id=function(id){ if(U(id)){ return this.attr('id')}; this.attr('id', id);return this     }
        $.fn.name=function(name){ if(U(name)){ return this.attr('name')}; this.attr('name', name);return this     }



    }
    function ajax() {
        $.G = function self(path, dataOb, func) {
////
//fix later!

            if (F(dataOb)) {
                return self(path, {}, dataOb)
            }
            dataOb = dataOb || {}
            func = func || function () {
                    return 'boo ya!'
                }


            $.get('/' + path, dataOb,

                function (data) {

                    d = data

                    console.dir(data)

                    func(data)

                })
        }
        $.P = function (path, dataOb) {
            dataOb = dataOb || {}
            if (!O(dataOb)) {
                dataOb = {data: dataOb}
            }


            $.post('/' + path, dataOb,


                function (data) {

                    d = data

                    console.dir(d)

                })

        }
        $.qJ = qJ = function rc(u, d, f) {
            var g, u, d, f
            if (U(d)) {
                return _p(rc, u)
            }
            g = G(arguments);
            u = g[0];
            d = g[1];
            f = g[2]
            if (F(d)) {
                f = d;
                d = {}
            }
            $.getJSON(u, d, g.P ? f : function (ss) {
                _.each(ss, function (s) {
                    f(s, ss)
                })
            })
        }
        $.qJE = qJE = function rc(u, d, f) {
            var g, u, d, f
            if (U(d)) {
                return _p(rc, u)
            }
            g = G(arguments);
            u = g[0];
            d = g[1];
            f = g[2]
            if (F(d)) {
                f = d;
                d = {}
            }
            $.getJSON(u, d, function (ss) {
                _.each(ss, function (s) {
                    f(s, ss)
                })
            })
        }
        $.qP = qP = function rc(u, d, f) {
            var g, u, d, f
            if (U(d)) {
                return _p(rc, u)
            }
            g = G(arguments);
            u = g[0];
            d = g[1];
            f = g[2]
            if (F(d)) {
                f = d;
                d = {}
            }
            $.post(u, d, g.P ? f : function (ss) {
                _.each(ss, function (s) {
                    f(s, ss)
                })
            })
        }
        $.qPE = qPE = function rc(u, d, f) {
            var g, u, d, f
            if (U(d)) {
                return _p(rc, u)
            }
            g = G(arguments);
            u = g[0];
            d = g[1];
            f = g[2]
            if (F(d)) {
                f = d;
                d = {}
            }
            $.post(u, d, function (ss) {
                _.each(ss, function (s) {
                    f(s, ss)
                })
            })
        }
        $.qG = qG = function rc(u, d, f) {
            var g, u, d, f
            if (U(d)) {
                return _p(rc, u)
            }
            g = G(arguments);
            u = g[0];
            d = g[1];
            f = g[2]
            if (F(d)) {
                f = d;
                d = {}
            }
            $.get(u, d, g.P ? f : function (ss) {
                _.each(ss, function (s) {
                    f(s, ss)
                })
            })
        }
        $.qGE = qGE = function rc(u, d, f) {
            var g, u, d, f
            if (U(d)) {
                return _p(rc, u)
            }
            g = G(arguments);
            u = g[0];
            d = g[1];
            f = g[2]
            if (F(d)) {
                f = d;
                d = {}
            }
            $.get(u, d, function (ss) {
                _.each(ss, function (s) {
                    f(s, ss)
                })
            })
        }
    }
    function drag(){
        $.fn.drag = function(){

            this.A()
            this.each(function(){
                $(this).css('top', $(this).position().top )
                $(this).css('left', $(this).position().left)})

            this.P('a')

            this.on('mousedown', function(e){

                var el = $(this)

                var offset = el.offset(),
                    deltaX = e.pageX-offset.left,
                    deltaY = e.pageY-offset.top

                $('html').on('mousemove', function(e){
                    var x=e.pageX - deltaX,
                        y=e.pageY - deltaY

                    el.left(x)
                    el.top(y)

                }).on( 'mouseup' , function(){  $(this).off() })

            })

            //touchDrg(element)
            return this

        }


    }
    function mouse(){


        $.fn.mD=function(l){
            var c=this
            c.mousedown(function(e){l(e.clientX, e.clientY)})
            return c}
        $.fn.pM=function(l){
            var c=this
            c.pressmove(function(e){l(e.clientX, e.clientY)})
            return c}
        $.fn.m=function(o){

            var e = this

            if(o.mD){e.mD(o.mD)}
            if(o.mU){e.mD(o.mU)}
            if(o.pM){e.pM(o.pM)}

            return e}
        $.$$=function(a,b,c){$('body').dblclick(a,b,c); return this}
        $.$=function(){var b=$('html')

            b.click.apply(b, arguments)

            return $}
        $.fn.pressmove = function (func) {
            var mouse_pressed
            this.mousedown(function () {
                mouse_pressed = true
            })
            this.mouseup(function () {
                mouse_pressed = false
            })


            this.mousemove(function (e) {


                if (mouse_pressed) {

                    func(e)

                }

            })


            return this
        }
        $.fn.mousePoint=function(e, scale){
            scale=N(scale)?scale:1
            return V(e.pageX/scale,e.pageY/scale )
        }

    }

}