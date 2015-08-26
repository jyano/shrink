$.fn.oh = function () {
    return this[0].outerHTML
}
$.fn.oH=$.fn.outerHeight
$.fn.oh=function(){
    return this[0].outerHTML
}
$.fn.ch = function () {
    return this.children()
}
$.fn.pa = $.fn.parent
$.fn.fi = $.fn.find
$.fn.sib = function () {
    var g = G(arguments);
    return this.sib.apply(this.g)
}
$.fn.hd= $.fn.hide
$.fn.sh= $.fn.show
$.fn.ap2=function(el){
    el.A(this)
    return this
}
$.fn.A=function(stuff){
    if( U(stuff)){$('body').append(this); return this}
    this.append.apply(this, arguments)
    return this}
$.fn.rm=$.fn.xx=function(){var e=this
    e.remove()
    return e
}
$.fn.rm=function(){return this.remove()}
$.fn.rm=function(){return this.remove()}
$.fn.iA=$.fn.insertAfter
$.fn.A=function(stuff){
    if( U(stuff)){$('body').append(this); return this}
    this.append.apply(this, arguments)
    return this}
$.fn.pp2=function(a){this.prependTo(a); return this}
$.fn.a2=function(a){a.A(this); return this}
$.fn.pp= $.fn.prepend
$.fn.E=function(html){
    this.empty(); this.html(html); return this
}
$.fn.E=function(html){
    this.empty(); this.html(html); return this
}
$.fn.e = $.fn.each
$.fn.N= $.fn.next
$.fn.gg = $.fn.toggle
$.fn.h= $.fn.ht=$.fn.html
$.fn.K= function(){  $.fn.addClass.apply(this, arguments); return this  }
$.fn.K= function(){
    $.fn.addClass.apply(this, arguments); return this
}
$.fn.xK= $.fn.removeClass
$.fn.pp=function(a){ this.pp(a); return this}
$.fn.chk=function(){ this.at('checked', true) }
$.fn.fr=$.fn.for=function(forWhat){return this.attr('for', forWhat)}
$.fn.at= $.fn.attr
$.fn.ph= function(forWhat){return this.attr('placeholder', forWhat)}
$.fn.type=function(type){
    if(U(type)){return this.attr('type')}
    this.attr('type',type);return this
}
$.fn.ty= $.fn.type=function(type){
    if(U(type)){return this.attr('type')}
    this.attr('type',type);return this
}
$.fn.id=function(id){ if(U(id)){ return this.attr('id')}; this.attr('id', id);return this     }
$.fn.id=function(id){ if(U(id)){ return this.attr('id')}; this.attr('id', id);return this     }
$.fn.name=function(name){ if(U(name)){ return this.attr('name')}; this.attr('name', name);return this     }
$.fn.n= $.fn.name=function(name){ if(U(name)){ return this.attr('name')}; this.attr('name', name);return this     }
$.fn.hf=$.fn.href=function(href){
    if(U(href)){return this.attr('href')}
    this.attr('href',href); return this
}
$.fn.href=function(href){
    if(U(href)){return this.attr('href')}
    this.attr('href',href);return this
}
$.fn.for = function (forWhat) {
    return this.attr('for', forWhat)
}
$.fn.placeholder = function (forWhat) {
    return this.attr('placeholder', forWhat)
}
$.fn.src = function (a) {


    if (U(a)) {
        return this.attr('src')
    }

    this.attr('src', $src(a))

    return this
}
$.fn.role = function (role) {
    if (U(role)) {
        return this.attr('role')
    }
    this.attr('role', role)
    return this

}
$.fn.src= function(a){
    if( U(a) ){return this.attr('src')}

    this.attr('src', $src(a) )

    return this
}
$.fn.role=function(role){
    if(U(role)){return this.attr('role')}
    this.attr('role', role)
    return this

}
$.fn.v = function(v){var g=G(arguments),v

    if(D(v)){
        this.val(v)

        return this
    }
    v=this.val()
    if(!g.p){this.val('')}
    return v

}
$.fn.Vx=function(){
    var val= this.val()
    this.val('')
    return val
}
$.fn.V=function(){
    var v=this.val()
    this.val('')
    return v
}
$.fn.T= function(){var g=G(arguments)
    this.text.apply(this,g)
    return this
}

$.$ = function (f) {
    return $(document).on('click', _v(f))

    /*
     $.$=function(){
     var b=$('html')
     b.click.apply(b, arguments)
     return $
     }*/
}
$.$$ = function (f) {
    return $(document).on('dblclick', _v(f))
//$.$$=function(a,b,c){$('body').$$(a,b,c); return this}
}
$.md = $.mousedown = function (fn) {
    $('body').on('mousedown', fn);
    return this
}
$.mu = $.mouseup = function (fn) {
    $('body').on('mouseup', fn);
    return this
}
$.mm = $.mousemove = function (fn) {
    $('body').on('mousemove', fn);
    return this
}
$.oMD = function (fn) {
    $.md(function (e) {
        fn(e.clientX, e.clientY, e)
    })
    return $
}
$.oMU = function (fn) {
    $.mu(function (e) {
        fn(e.clientX, e.clientY, e)
    });
    return $
}
$.oMM = function (fn) {
    $.mm(function (e) {
        fn(e.clientX, e.clientY, e)
    });
    return $
}
$.fn.m = function (o) {
    var e = this
    if (o.mD) {
        e.mD(o.mD)
    }
    if (o.mU) {
        e.mD(o.mU)
    }
    if (o.pM) {
        e.pM(o.pM)
    }
    return e
}
$.fn.$ = $.fn.click
$.fn.hv = $.fn.hover
$.fn.mD = function (l) {
    var c = this
    c.mousedown(function (e) {
        l(e.clientX, e.clientY)
    })
    return c
}
$.fn.mD = function (l) {
    var c = this
    c.mousedown(function (e) {
        l(e.clientX, e.clientY)
    })
    return c
}
$.fn.pM = function (l) {
    var c = this
    c.pressmove(function (e) {
        l(e.clientX, e.clientY)
    })
    return c
}
$.fn.pm = $.fn.pressmove = function (func) {
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
$.fn.mp = $.fn.mousePoint = function (e, scale) {
    scale = N(scale) ? scale : 1
    return V(e.pageX / scale, e.pageY / scale)
}
$.fn.mU = function (l) {
    $l('mU')
    var c = this
    c.mouseup(function (e) {
        l(e.clientX, e.clientY)
    })
    return c
}
$.fn.pM = function (l) {
    var c = this
    c.pressmove(function (e) {
        l(e.clientX, e.clientY)
    })
    return c

}
$.fn.m = function (o) {
    $l('.m')
    var e = this
    if (o.mD) {
        e.mD(o.mD)
    }
    if (o.mU) {
        e.mD(o.mU)
    }
    if (o.pM) {
        e.pM(o.pM)
    }
    return e
}

KEYOB = keyObj = {

    up: 38, u: 38,
    down: 40, d: 40,
    left: 37, l: 37,
    right: 39, r: 39,
    space: 32, s: 32,
    enter: 13, e: 13
}
$.wh = function (a, b) {
    return D(b) ? a.which == b : a.which
}
$.k = $.key = $.kD = function self(k, fn) {

    if (O(k)) {
        _.e(k, function (fn, k) {
            if (s$(k).isUpper()) {
                $.kU(k.toLowerCase(), fn)
            }
            else {
                $.k(k, fn)
            }
        })
        return
    }

    if (KEYOB[k]) {
        k = KEYOB[k]
    }

    $('body').on('keydown', function (e) {
        if (e.which == k) {
            fn(e, $.K)
        }
    })

}
$.kU = function (k, fn) {

    if (keyObj[k]) {
        k = keyObj[k]
    }
    $('body').on('keyup', function (e) {
        if (e.which == k) {
            fn(e, $.K)
        }
    })
}
$.spc = function (fn) {
    return $.kD('space', fn)
}
$.K = function (o) {
    alert('cjs.Keys')
    function oldFn() {
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
        }
    }
}
K = function (k, fn) {
    var g = G(arguments), o, key
    if (g.u) {
        if (K._loaded) {
            return
        }
        $.kD('l', function () {
            if ($.test) {
                $l('left pressed')
            }
            K.l = cjs.Keys.l = cjs.Keys.left = true
            cjs.Keys.dir = 'left'
            K.l = 1;
            K.L = 0
        })
        $.kU('l', function () {
            if ($.test) {
                $l('left lifted')
            }
            K.l = cjs.Keys.l = cjs.Keys.left = false
            K.l = 0;
            K.L = 1
        })
        $.kD('r', function () {
            if ($.test) {
                $l('right pressed')
            }
            K.r = cjs.Keys.r = cjs.Keys.right = true
            cjs.Keys.dir = 'right'
            K.r = 1;
            K.R = 0
        })
        $.kU('r', function () {
            if ($.test) {
                $l('right lifted')
            }
            cjs.Keys.r = cjs.Keys.right = false
            K.r = 0;
            K.R = 1
        })
        $.kD('u', function () {
            if ($.test) {
                $l('up pressed')
            }
            cjs.Keys.u = cjs.Keys.up = true
            K.u = 1;
            K.U = 0
        })

        $.kU('u', function () {
            if ($.test) {
                $l('up lifted')
            }
            cjs.Keys.u = cjs.Keys.up = false
            K.u = 0;
            K.U = 1
        })
        $.kD('d', function () {
            if ($.test) {
                $l('down pressed')
            }
            cjs.Keys.d = cjs.Keys.down = true
            K.d = 1;
            K.D = 0
        })

        $.kU('d', function () {
            if ($.test) {
                $l('down lifted')
            }
            cjs.Keys.d = cjs.Keys.down = false
            K.d = 0;
            K.D = 1
        })

        K._loaded = 1

        return
    }

    if (O(k)) {
        if (g.p) {
            if (F(k.u)) {
                z(function () {
                    if (K.u) {
                        k.u(K.u)
                    }
                })
            }
            if (F(k.d)) {
                z(function () {
                    if (K.d) {
                        k.d(K.d)
                    }
                })
            }
            if (F(k.l)) {
                z(function () {
                    if (K.l) {
                        k.l(K.l)
                    }
                })
            }
            if (F(k.r)) {
                z(function () {
                    if (K.r) {
                        k.r(K.r)
                    }
                })
            }
        }
        else {
            _.e(k, function (fn, k) {
                K(k, fn)
            })
        }
        return
    }
    o = s$(k).isUpper() ? {on: 'keyup', k: k.toLowerCase()} : {on: 'keydown', k: k}
    if (g.p) {
        return z(function () {
            if (K[k]) {
                fn()
            }
        })
    }
    key = Key(o.k)
    return $('body').on(o.on, function (e) {
        if (e.which == key) {
            fn(e)
        }
    })
    function Key(k) {
        var ob = {u: 38, d: 40, l: 37, r: 39, s: 32, e: 13};
        return ob[k] ? ob[k] : k
    }
}
$.space = function (fn) {
    return $.kD('space', fn)
}

$.fn.dg = function () {
    return this.drag()
}
$.fn.dg = function () {
        return this.drag()
    }
$.fn.dg = $.fn.drag = function () {

    this.A()
    this.each(function () {
        $(this).css('top', $(this).position().top)
        $(this).css('left', $(this).position().left)
    })

    this.P('a')

    this.on('mousedown', function (e) {

        var el = $(this)

        var offset = el.offset(),
            deltaX = e.pageX - offset.left,
            deltaY = e.pageY - offset.top

        $('html').on('mousemove', function (e) {
            var x = e.pageX - deltaX,
                y = e.pageY - deltaY

            el.left(x)
            el.top(y)

        }).on('mouseup', function () {
            $(this).off()
        })

    })

    //touchDrg(element)
    return this

}
$.fn.dg = $.fn.drag = function () {

        this.A()
        this.each(function () {
            $(this).css('top', $(this).position().top)
            $(this).css('left', $(this).position().left)
        })

        this.P('a')

        this.on('mousedown', function (e) {

            var el = $(this)

            var offset = el.offset(),
                deltaX = e.pageX - offset.left,
                deltaY = e.pageY - offset.top

            $('html').on('mousemove', function (e) {
                var x = e.pageX - deltaX,
                    y = e.pageY - deltaY

                el.left(x)
                el.top(y)

            }).on('mouseup', function () {
                $(this).off()
            })

        })

        //touchDrg(element)
        return this

    }
$.fn.drag = function () {

    this.A()
    this.each(function () {
        $(this).css('top', $(this).position().top)
        $(this).css('left', $(this).position().left)
    })

    this.P('a')

    this.on('mousedown', function (e) {

        var el = $(this)

        var offset = el.offset(),
            deltaX = e.pageX - offset.left,
            deltaY = e.pageY - offset.top

        $('html').on('mousemove', function (e) {
            var x = e.pageX - deltaX,
                y = e.pageY - deltaY

            el.left(x)
            el.top(y)

        }).on('mouseup', function () {
            $(this).off()
        })

    })

    //touchDrg(element)
    return this

}
$.fn.drag = function () {

    this.A()
    this.each(function () {
        $(this).css('top', $(this).position().top)
        $(this).css('left', $(this).position().left)
    })

    this.P('a')

    this.on('mousedown', function (e) {

        var el = $(this)

        var offset = el.offset(),
            deltaX = e.pageX - offset.left,
            deltaY = e.pageY - offset.top

        $('html').on('mousemove', function (e) {
            var x = e.pageX - deltaX,
                y = e.pageY - deltaY

            el.left(x)
            el.top(y)

        }).on('mouseup', function () {
            $(this).off()
        })

    })

    //touchDrg(element)
    return this

}

$.XML = function () {
    return new XMLHttpRequest()
}
$.aj = function (ob) {
    return $.ajax(ob)
}
$.txG = function (url) {
    $.get('/' + url, function (aa) {
        a = aa
    })
}
$.G = $.g = function () {
    var g = G(arguments), o;
    if (U(g[1])) {
        return _.p($.G, g[0])
    }
    o = F(g[1]) ? {p: g[0], fn: g[1]} :
    {p: g[0], d: g[1], fn: g[2]};
    $.get(S.eL(o.p), o.d || {},
        function (d) {
            o.fn = o.fn || function () {
                return 'boo ya!'
            };
            o.fn(d)
        })
}
$.eG = function () {
    var g = G(arguments), o;

    if (U(g[1])) {
        return _.p($.eG, g[0])
    }
    o = F(g[1]) ? {p: g[0], fn: g[1]} :
    {p: g[0], d: g[1], fn: g[2]};

    $.G(o.p, o.d || {},
        function (dd) {
            _.e(dd, function (d) {
                o.fn(d)
            })
        });
    return $
}
$.Gj = function () {
    var g = G(arguments), o;
    if (U(g[1])) {
        return _.p($.Gj, g[0])
    }
    o = F(g[1]) ? {p: g[0], fn: g[1]} : {p: g[0], d: g[1], fn: g[2]};
    o.fn = o.fn || function () {
        return 'boo ya!'
    };
    $.getJSON(
        S.eL(o.p),
        o.d || {},
        function (d) {
            o.fn(d)
        });
    return $
}
$.eJ = $.eGj = function () {
    var g = G(arguments), o;
    if (U(g[1])) {
        return _.p($.eJ, g[0])
    }
    o = F(g[1]) ?
    {p: g[0], fn: g[1]} : {p: g[0], d: g[1], fn: g[2]};
    $.Gj(o.p, o.d || {}, function (dd) {
        _.e(dd, function (d) {
            o.fn(d)
        })
    });
    return $
}
$.P = $.po = function () {
    var g = G(arguments), o;
    o = F(g[1]) ? {p: g[0], fn: g[1]} : {p: g[0], d: g[1], fn: g[2]};
    o.d = U(o.d) ? {} : O(o.d) ? o.d : {data: o.d};
    o.fn = o.fn || function () {
        return 'boo ya!'
    };
    $.post(S.eL(o.p), o.d, function (d) {
        o.fn(o.d, o)
    });
    return $
}
$.eP = function () {
    var g = G(arguments);
    if (U(g[1])) {
        return _.p($.eP, g[0])
    }
    o = F(g[1]) ? {p: g[0], fn: g[1]} : {p: g[0], d: g[1], fn: g[2]};
    $.P(o.u, o.d || {}, function (dd) {
        _.e(dd, function (d) {
            o.fn(d)
        })
    });
    return $
}

_.jS = function (a, b, c) {
    return S(a) ? $.Gj(a, b, c) : JSON.stringify(a)
}
_.jP = function (a, b, c) {
    return S(a) ? JSON.parse(a, b) : $(a).prepend(b, c)
}

z=function(fn) {var g = G(arguments)
    if (g.F_){ return T.t(fn)}
    $('body').empty()
}
function alph(){
    isWindow = function(a){alert('isWindow'); if(O(a)){
        if( s$(a).contains('Window') ||
            s$(a[0]).contains('Window')){
            return window}
    }}

    $.fn.in=function(num){
        var g=G(arguments)
        this.delay(num * 1000)
        return this
    }
}
old=function(){

    drag = drg = function (element) {
        var q = $b(qq(element).q).css({position: 'absolute'}).on('mousedown', function (e) {
            var offset = $(this).offset(),
                deltaX = e.pageX - offset.left, deltaY = e.pageY - offset.top
            $('html').on('mousemove', function (e) {
                q.css({left: e.pageX - deltaX, top: e.pageY - deltaY})
            })
                .on('mouseup', function () {
                    $(this).off()
                })

        })

        touchDrg(element)
        return qq(element)

    }

}