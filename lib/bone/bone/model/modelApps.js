

MODCHANGE=function(){$.x('x','modchange')


    Bk = $M({

        d: {ID: "ooooo", n: ""},

        i: function(){var bk=this;$l('init..')


            bk.$(function(){  $l('change')
                g=G(arguments)
                o=g[1]
                m=g[0]

                if(bk.hC('ID')){$l('ID changed') }
                // if(bk.hC('n')){$l('n changed') }
                bk.hC('n', function(){
                    $l('n changed') })
            })
        },

        show: function () {$l('ID: '+this.g('ID')+','+' n: '+this.g('n'))}

    })

    bk = Bk({ ID: 1,  n: "a" })
    bk.s({r: 'a'}, { a:1, b:2, c:3 })
    $.in(function(){
        bk.s('n', 'z', { a:1, b:2, c:3 })
        $.in(function(){
            bk.s({n: 'rfds'}, { a:1, b:2, c:3 })
        },'*')

    },'*')
}



BACKSET=function(){$.x('g','backset')


    d = $.d(   'z',   500, 300  ).id('sb')



    Sb=$M({

        ask: function(){

            this.s({  c: prompt('col?')   })

        }})

    sb= Sb()


    // sb.on('change', function(){g=G(arguments)})
    sb.on('change:c', function(modThatChangedC, cChangedTo, ops){
        $l('changed to ' + cChangedTo)

        o=ops

        modThatChangedC.s('dat', 'something')

        $('#sb').C(cChangedTo)
        $.h1(   modThatChangedC.g('dat'))
    })



    sb.s({
        c: 'b'
    })




    //   sb.ask()
    //   Per=$M({i: function(){  $l(  this.g('n')  + ' says hello!'   ) }})
    //   p=Per( {n:"mac", a:67})

}



OPS=function(){$.x('o', 'ops')


    o = _.x({}, bb.E)


    o.on('yo', function(){
        g=G(arguments)
    })


    o.trigger('yo', 'a','b','c')

}

BBSAMP1=function(){$.x('b','bbsamp','+')

    d=$.d()

    Rec = $M()

    RecV = $V({
        tagName:'div', className:'rec',
        events:{'click': 'move'},
        move:function(){this.$el.css('left', this.$el.position().left +10)},
        rr:function(){return this.sDims().sPos().sCol()},
        sDims:function(){
            this.$el.WH(this.model.get('w'), this.model.get('h'))
            return this
        },
        sPos:function(){
            this.$el.ab()
                .LR(
                this.model.get('pos').x, this.model.get('pos').y)
            return this
        },
        sCol:function(){
            this.$el.C(this.model.get('C'))
            return this}
    })

    _.e([
        Rec({w:100, h: 30, pos:{x: 300, y:400},C:'o'}),
        Rec({w:100, h: 20, pos:{x: 400, y:400},C:'g'}),
        Rec({w:100, h:200, pos:{x: 0, y:100},C:'y'})
    ], function(md){

        var r=  RecV({  model:md  })
        r.rr().$el.a2(d)
    })
}


OSYNC=function(){$.x('x','osync')

    bb.sync = function(met, md) {
        $l(met+': '+_.jS(md))
        md.s('id', 1)
    }
    bk = new bb.M({
        tt: "The Rough Riders",
        au: "Theodore Roosevelt"
    })
    bk.S()
    bk.S({au: "Teddy"})


    // save accepts success and error cbs in the options hash,
    // which will be passed the args (md, resp, ops).
    // If a server-side validation fails, return a non-200 HTTP response code,
    // along with an error response in text or JSON.


    bk.save(
        "au", "F.D.R.", {
            error: function(){$l('error')},
            success: function(){$l('success')}
        })

}

