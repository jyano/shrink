BEAUTY = function(){

    $.x('o','beauty')

    $v({
        q : $.d('r', 200).A(
            $.h1('hello'),
            $.bt(__)),

        e: {'click button': function(){$l('$')},
            $$: 'r', v: function(){$l(' m o !')}},

        r : function(){  $l(__+'$$');  $.c$() }
    })

}


SWEET = function(){$.x('x', 'bb view people')

    Vw= $V({

        el: $.ul(),

        i: function(){

            this.r().C$('init..')

        },

        r: function(){
            var ul=this.q

            this.ECl(function(p){ul.li(p.n,'(',p.a,')') })

            return this
        }

    })



    peep= [{n:'a',a:11},{n:'b',a:46},{n:'c',a:13}]

    vw=Vw({ cl: peep  })

    $.in(function(){ peep.pop(); vw.r() })

    BBVP1=function(){$.x('x', 'bb view people')


        Vw= $.ulV({
            i:function(){  this.q.C($r())   },
            r:function(){var el=this.q.E()
                this.cl(function(p){  el.A($.li().A(p.n+'('+p.a+')'))})
                return this}

        })

        vw=Vw({   cl: peep = [{n:'a',a:11},{n:'b',a:46},{n:'c',a:13}]

        })

        /*

         $.A(vw.r().q)
         $.in(function(){peep.pop(); vw.r()},'*')
         */


    }

}


BBVIEW=function(){$.x('b','bbview')


    $.dI('d1','r', 500,500).V({
        r: function(){this.A($.ul(['hello']))},
        i: function(){this.r()}
    })()

    BBVIEW=function(){$.x('b','bbview')
        v=$V({
            q: d=$.dI('d1','r', 500, 500),
            r: function(){this.A($.ul(['hello']))},
            i: function(){this.r()}
        })()
        BBVIEW=function(){$.x('b','bbview')

            $.dI('d1',
                'r', 500, 500)



            LstV = bb.V.e({
                el: '#d1',
                r: function(){
                    this.A(
                        $.ul([
                            'hello']))},
                i: function(){ this.r() }})

            v = LstV.o()
        }
    }
}
PER=function(){$.x('n')
    m = $M({d:{n:'j',a:20,o:'p'}})()
    m.V($V({
        t:'li', _:'some-per', k:'per',
        r: function(){  this.A('n').A() },
        i: function(){this.r()}
    }))
    $.in(function(){m.l()}, '*')

    PER=function(){$.x('n')

        p = $M({ d: {n:'j',a:20,o:'p'}   })()

        PerV = $V({t:'li', _:'some-per', k:'per',
            r: function(){  this.A('n').A() },
            i: function(){ $l(this.model); this.r() }
        })

        pV = p.V(PerV) //PerV({ m: p })

        PER=function(){$.x('n')
            Per=bb.M.e({

                d: {n:'j', a:20, o:'p'}

            })
            p= new Per
            PerV = $V({t:'li', _:'some-per', k:'per',
                r: function(){
                    this.A('n').A()
                },
                //  this.A(this.g('n')).A() //  this.A(this.model.get('n').A()
                i: function(){
                    $l(this.model);
                    this.r()
                }
            })
            pV =  PerV({ m:p  })

        }
    }
}
TP=function(){$.x().A(
    a= _.tp("<div>hello:<%=n%></div>")({n:'moe'}),
    b= _.tp('<b><%-tag%></b>',{tag:'<script>'}), // <%- vs <%= ?
    c= _.tp(
        '<%_.e(peep,function(name){%>'+
        '<li>'+'<%=name%>'+'</li>'+
        '<%})%>'
        ,{peep:['moe','curly','larry']})
)

}
WOB=function(){$.x('x', 'bb view people')
    //without backbone!
    ul = $.ul().id('peep')
    peep = [{n:'a',a:11}, {n:'b',a:46}, {n:'c',a:13}]
    vw={r:function(){
        $('#peep').E()
        _.e(peep, function(p){
            $('#peep').A('<li>'+ p.n + '(' + p.a + ')</li>')
        })}}
    vw.r()
    $.in(function(){peep.pop(); vw.r()},'*')
}
BBVP=function(){$.x('x', 'bb view people')

    peep = [{n:'a',a:11},{n:'b',a:46},{n:'c',a:13}]

    vw= $.ulV({
        i:function(){
            this.q.C($r())

        },
        r:function(){var el=this.q.E()
            this.cl(function(p){
                el.A($.li().A(p.n+'('+p.a+')'))})
            return this}
    })({cl: peep})
    $.A(vw.r().q)
    $.in(function(){peep.pop(); vw.r()},'*')

    BBVP1=function(){$.x('x', 'bb view people')

        peep = [{n:'a',a:11},{n:'b',a:46},{n:'c',a:13}]
        vw= $V({t:'ul',
            i:function(){this.$el.C($r())},
            r:function(){var el=this.$el.E()
                _.e(this.collection, function(p){$('#peep')
                    el.A($.li().A(p.n + '(' + p.a + ')'))})
                return this}

        })({cl: peep})


        $.A(vw.r().el)
        $.in(function(){peep.pop(); vw.r()},'*')
    }
}
TMP=function(){

    $.x('r'); $V({
    t:'li', x:'some-per', k:'per',
    tp: tp=_.tp('<%= n %> (<%= a %>) - <%= o %>'),
    r: function(){this.A().A(this.tp(this.model.toJSON()))},
    i: function(){$l(this.model); this.r()}
})({m:Per=$M({
        d:{n:'j',a:20,o:'p'}})()})

    BBVT=function(){$.x('x', 'bb view and template');



        $.dI('ct', [
                $.bt('Load'),
                $.ul().id('list')
            ]
        ).C('y')

        $.dI('list-tp', [ $.la() ]).C('o')


        v=$V({

            q: '#ct',

            events: {'click button': 'r'},

            r: function(){var da, tp,ul
                $l('RENDER')
                /*
                 $l('rr: '+ this.model.get('d')[0].h )
                 //$.c('b').ab(300,300)
                 da=this.model.get('d')
                 tp=this.tp
                 ul= this.$el.find('ul')
                 _.e(da, function(da){ul.A(tp.clone()
                 .find('a').hr('href', da.h)
                 .T(da.t).end())})
                 */
            },
            i: function(op){
                $l(op.blOp)
                this.tp = $('#list-tp').children()
            }
        })({

            blOp: 'empty!',

            m: m=$M()({
                d:[
                    {t:'a.com', h:'a.com'},
                    {t:'b.com', h:'b.com'},
                    {t:'c.com', h:'c.com'}
                ]
            })

        })

        BBVT=function(){$.x('x', 'bb view and template');
            md= new bb.M({d:[{t:'a.com', h:'a.com'}, {t:'b.com', h:'b.com'}, {t:'c.com', h:'c.com'}]})


            $.dI('ct', [$.bt('Load'), $.ul().id('list')]).C('y')

            $.dI('list-tp', [ $.la() ]).C('o')


            Vw = bb.V.e({
                el:'#ct',
                i: function(op){$l(op.blOp); this.tp =$('#list-tp').children()},
                rr:function(){var da, tp; $l('rr: '+ this.model.get('d')[0].h );//$.c('b').ab(300,300)
                    da=this.model.get('d')
                    tp=this.tp, ul= this.$el.find('ul')
                    _.e(da, function(da){ul.A(tp.clone()
                        .find('a').hr('href', da.h).T(da.t).end())}) },
                ev: {'click button':'rr'}
            })
            vw = new Vw({blOp:'empty!', model:md})
            return vw

        }
    }
}


