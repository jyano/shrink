

BBSAMP1=function(){$.x('b','bbsamp','+')
    d=$.d()

    Rec = $M()

    RecV = $V({t:'div', k:'rec',

        events:{'click': 'move'},
        move:function(){this.$el.css('left', this.$el.position().left +10)},
        rr:function(){return this.sDims().sPos().sCol()},
        sDims:function(){this.$el.WH(this.model.get('w'), this.model.get('h'))
            return this},
        sPos:function(){this.$el.ab().LR(
            this.model.get('pos').x, this.model.get('pos').y)
            return this
        },

        sCol:function(){this.$el.C(this.model.get('C'))
            return this}
    })

    _.e([
            Rec ({w:100, h: 30, pos:{x: 300, y:400},C:'o'}),
            Rec ({w:100, h: 20, pos:{x: 400, y:400},C:'g'}),
            Rec ({w:100, h:200, pos:{x: 0, y:100},C:'y'})
        ],
        function(md){
            RecV({model: md}).rr().$el.a2(d)

        })
}
BBSAMP10=function(){$.x('b','bbsamp','+')


    d=$.d()

    Rec = $M()

    RecV = $V({

        k:'rec',

        e: {'click': 'move'},

        move:function(){
            this.q.css('left',
                this.q.position().left +10)
        },
        r:function(){return this.sDims().sPos().sCol()},
        sDims:function(){
            this.q.WH(this.model.g('w'),
                this.model.g('h'))
            return this
        },
        sPos:function(){
            this.q.ab().LR(
                this.model.g('pos').x,
                this.model.g('pos').y  )
            return this
        },
        sCol:function(){this.q.C(this.model.g('C'))
            return this}
    })

    _.e([
        Rec({w:100, h: 30, pos:{x: 300, y:400},C:'o'}),
        Rec({w:100, h: 20, pos:{x: 400, y:400},C:'g'}),
        Rec({w:100, h:200, pos:{x: 0, y:100},C:'y'})
    ], function(md){ RecV({model:md}).rr().$el.a2(d)  })
    BBSAMP1=function(){$.x('b','bbsamp','+')
        d=$.d()

        Rec = $M()

        RecV = $V({t:'div', k:'rec',

            events:{'click': 'move'},
            move:function(){this.$el.css('left', this.$el.position().left +10)},
            rr:function(){return this.sDims().sPos().sCol()},
            sDims:function(){this.$el.WH(this.model.get('w'), this.model.get('h'))
                return this},
            sPos:function(){this.$el.ab().LR(
                this.model.get('pos').x, this.model.get('pos').y)
                return this
            },

            sCol:function(){this.$el.C(this.model.get('C'))
                return this}
        })

        _.e([
                Rec ({w:100, h: 30, pos:{x: 300, y:400},C:'o'}),
                Rec ({w:100, h: 20, pos:{x: 400, y:400},C:'g'}),
                Rec ({w:100, h:200, pos:{x: 0, y:100},C:'y'})
            ],
            function(md){
                RecV({model: md}).rr().$el.a2(d)

            })
    }
}
BBSAMP=function(){$.x('b','bbbsamp','+')
    d=$.d()
    Rec = $M()
    RecV = $V({
        k:'rec',
        e: {$: 'move'},
        move:function(){this.q.X(10 ,'+')},
        r:function(){var v=this
            v.q.C(v.g('C')).WH(v.g('w'), v.g('h')).ab(v.g('pos').x, v.g('pos').y)
            return v},
        i:function(){this.r().a2(d)}
    })
    _.e([
        Rec({w:100, h: 30, pos:{x: 300, y:200},C:'o'}),
        Rec({w:100, h: 20, pos:{x: 400, y:150},C:'g'}),
        Rec({w:100, h:200, pos:{x: 0, y:100},C:'y'})
    ], function(md){

        RecV({ m:md })
    })
}

BBSAMP1=function(){$.x('b','bbsamp','+')
    d=$.d()
    Rec = bb.M.e()

    RecV = bb.V.e({t:'div', k:'rec',

        events:{'click': 'move'},
        move:function(){this.$el.css('left', this.$el.position().left +10)},
        rr:function(){return this.sDims().sPos().sCol()},
        sDims:function(){this.$el.WH(this.model.get('w'), this.model.get('h'))
            return this},
        sPos:function(){this.$el.ab().LR(
            this.model.get('pos').x, this.model.get('pos').y)
            return this
        },

        sCol:function(){this.$el.C(this.model.get('C'))
            return this}
    })


    _.e([
        Rec.o({w:100, h: 30, pos:{x: 300, y:400},C:'o'}),
        Rec.o({w:100, h: 20, pos:{x: 400, y:400},C:'g'}),
        Rec.o({w:100, h:200, pos:{x: 0, y:100},C:'y'})
    ], function(md){


        var r=  RecV.o({model:md})

        r.rr().$el.a2(d)
    })



}
BBSAMP=function(){$.x('b','bbsamp','+')


    d=$.d()
    Rec = $M()

    RecV = $V({k:'rec',

        e: {'click': 'move'},

        move:function(){
            this.q.css('left',
                this.q.position().left +10)
        },
        r:function(){return this.sDims().sPos().sCol()},
        sDims:function(){
            this.q.WH(this.model.g('w'),
                this.model.g('h'))
            return this
        },

        sPos:function(){this.q.ab().LR(
            this.model.g('pos').x,
            this.model.g('pos').y
        )
            return this
        },


        sCol:function(){this.q.C(this.model.g('C'))
            return this}
    })

    _.e([
        Rec({w:100, h: 30, pos:{x: 300, y:400},C:'o'}),
        Rec({w:100, h: 20, pos:{x: 400, y:400},C:'g'}),
        Rec({w:100, h:200, pos:{x: 0, y:100},C:'y'})
    ], function(md){ RecV({model:md}).rr().$el.a2(d)  })

}

SIMP=function(){$.x('r').h1('tut')
    p = $M()({n:'j'})
    $.h3('p: '+p.g('n'))
}

SIMP=function(){$.x('r','simp')

    $.h1(
        'f: '+  $M()({n:'j'}).g('n'),
        $.br(),  'l: '+  $m({ n:'y'}).n
    )

}