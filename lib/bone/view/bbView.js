
    /*
     VWob={
     i:'initialize',
     m:'model', c:'collection',
     e:'el',
     n:'id', x:'id',
     k:'className',
     tn:'tagName',
     t:'tagName',
     a:'attributes',
     ev:'event'
     }
     */
    bb.V.e = function (ob) {
        var g = G(arguments), o
        o = g.F_ ?
        {fn: g.f, ob: g.s} :
        {ob: g.f, fn: g.s}

        o = o || {}
        ob = ob || {}
        if (o.fn) {
            ob.i = o.fn
        }

        ob.initialize = ob.initialize || ob.i
        ob._i = ob.initialize
        ob.initialize = function (op) {
            this.q = this.$el

            this.a2 = function (a) {
                return this.q.a2(a)
            }
            //$l('gen init..')
            this.g = function (a) {

                if (a) {
                    return this.model.get(a)
                }
            }


            this.A = function (ob) {
                var g = G(arguments),
                    q = this.q
                if (S(ob)) {
                    ob = this.g(ob)
                }
                if (ob) {
                    q.A(ob)
                }

                if (U(ob) || g.p) {
                    q.A()
                }
                return q
            }

            if (F(ob._i)) {
                _.b(ob._i, this)(op)
            }

        }
        ob.id = D(ob.id) ? ob.id : ob.x || ob._ || ob['#']
        ob.className = ob.className || ob.k
        ob.tagName = ob.tagName || ob.tn || ob.t
        ob.defaults = ob.defaults || ob.df || ob.d
        ob.events = ob.events || ob.ev || ob.e
        ob.render = ob.render || ob.rr || ob.r
        ob.tagName = ob.tagName || ob.tn || ob.t
        ob.collection = ob.collection || ob.cl || ob.c
        ob.model = ob.model || ob.md || ob.m
        ob.el = ob.el || ob.q
        // ob.render= ob.render || ob.rr || ob.r
        ob.render = ob.render || ob.rn

        ob.events = bb.parseEvents(
            ob.events
        )


        vw = bb.V.extend(ob)
        //vw.o=function(ob){ return new this(ob)}
        vw.o = function (ob, q) {
            var Vw = this, vw
            ob = ob || {}
            ob.collection = ob.collection || ob.cl || ob.c
            ob.model = ob.model || ob.md || ob.m
            vw = new Vw(ob)
            if (q) {
                vw.a2(q)
            }
            return vw
        }
        return vw
    }


    $.uV=$.ulV=function(ob){ob=ob||{}; // make a bbV with t:ul
        ob.t = 'ul'; return $V(ob)
    }
    $v=function(){var g=G(arguments); return $V.apply(null, g)()}
    $V=function(){var g=G(arguments),
        Vw = bb.V.x.apply(bb.V, g)
        // ***  bb.V.x.apply(bb.V, g) same as _.x(bb.V,g)??

        return function(){var g=G(arguments), vw,
            ob =  g.O_? g.f:  {}
            ob.collection= ob.collection || ob.cl || ob.c
            ob.model = ob.model || ob.md || ob.m
            vw = new Vw(ob)
            if(g.s){ vw.a2( g.s ) }
            return vw}
    }
    $.fn.V=function(ob){ob=ob||{}; ob.q=this
        return $V(ob)
    }

    bb.V = bb.View
    bb.v = function (ob) {
        var Vw = bb.V.x(ob)
        return function (a, b, c, d) {
            return new Vw(a, b, c, d)
        }
    }
    Vw = bb.V.e({
        renderCollection: function (op) {
            op = op || {}
            op.target = op.target || this.$el;
            op.cl = op.cl || op.collection || this.collection;
            //- reset views
            if (!op.add) {
                this.disposeViews()
            }
            else {
                this._subviews = []
            }
            this._renderOptions = op
            //- if there is a collection and a view then render it
            if (op.cl && this.view) {
                op.cl.each(this._renderView, this)
            }
            return this
        }

    })
    VWW = function () {
        $.x()
        d = $.d('r', 200).A(
            $.h1('hello'),
            $.bt(__)
        )

        //d.$(function(){v.r()})

        mOv = function () {
            $l('mouse over !')
        }

        v = $V({
            e: {
                'click button': function () {
                    $l('click')
                },
                $$: 'r',
                v: mOv
            },

            q: d,

            r: function () {
                alert('double click')
                $.bd().C($r())
            }
        })()
    }
    $V = function () {
        var g = G(arguments),

            Vw = bb.V.e.apply(V, g)

        return function () {
            var g = G(arguments), vw, ob

            ob = g.f || {}
            ob.collection = ob.collection || ob.cl || ob.c
            ob.model = ob.model || ob.md || ob.m

            vw = new Vw(ob)

            if (g.s) {
                vw.a2(g.s)
            }

            return Vw
        }
    }
    $.fn.V = function (ob) {
        ob = ob || {}
        ob.q = this
        return $V(ob)
    }
    $.uV = $.ulV = function (ob) {
        ob = ob || {}
        ob.t = 'ul'
        return $V(ob)
    }


old=function(){
    V$=function(){var g=G(arguments), o,v, a
        a=O(g.f)? g.f:{}
        o={ob: g.f}
        o.ob= o.b||{}
        if(a.I){a.initialize = a.I}
        if(a.R){a.render = a.R}
        if(a.r){a.render = a.r}
        if(a.rr){a.render = a.rr}
        if(a.E){a.events = a.E}
        if(a.T){a.template = a.T}
        if(a.t){a.tagName = a.t}
        if(a.k){a.className = a.k}
        if(a.i){a.id = a.i}
        Vw = bb.V.e(ob)
        if(a.m){a.model= a.m}
        if(a.md){a.model= a.md}
        if(a.cl){a.collection= a.cl}
        vw = new Vw(a)
        return vw
    }
}