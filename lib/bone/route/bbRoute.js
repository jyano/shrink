


bb.R=bb.Router
bb.R.e=bb.R.extend
bb.r=function(ob){
    var Rt =  bb.Router.extend(ob)
    return function(a,b,c,d){ return new Rt(a,b,c,d)    }
}




bb.R= bb.Router
bb.H=bb.History
bb.h=bb.history

$P()

bb.R.x= bb.R.e =bb.R.extend

bbR.tr= bbR.trigger
bbR.ex=bbR.execute


bb.h.s=bb.h.start

rtr.n=function (url){var rt=this, g=G(arguments)

    if(g.n){rt.navigate(url)}
    else {

        rt.navigate(url, {trigger:true})
    }

    return rt
}
rtr.rp= function (url,op){var rt=this, g=G(arguments)
    if(g.n){
        rt.navigate(url, {replace:true})
    }

    else {rt.navigate(url, {trigger:true, replace:true})}
    return rt}
rtr.o=rtr.A = rtr.oR = function(rt,fn){

    var rtr=this
    if(O(rt)){
        _.e(rt,function(v,k){
            rtr.o(k,v)
        })
    }
    else {
        this.on('route:'+rt, fn)
    }
    return this
}

bb.h.tr=bb.h.trigger

$R=function(ob, ob1){var g=G(arguments), Rt,rtr

    if(O(ob1)){
        ob1.r=ob
        ob=ob1
    }

    if(ob.i){ob.initialize = ob.i
    }
    /*
     if(ob.$){ob.initialize = function(){
     $l('ob$! (see $R)')
     bb.history.start({pushState:true})
     if( F(ob.$ )){ob.$()}
     }}
     */

    ob.routes = ob.routes   ||  ob.rt || ob.r ||  {}

    ob.routes[''] = ob.routes[''] ||'index'

    if(ob.x){ob.index = ob.x}
    if(ob.h){ob.home = ob.h}

    Rt= bb.R.x(ob)
    if(g.n){
        return function(ob){
            return new Rt(ob)
        }
    }
    rtr= new Rt()

    if(!bb.History.started && !g.d){
        Backbone.history.start({pushState: true})

    }
    return r = rt = rtr


};
$R.h=function(){bb.h.start(); return $R}


ROUTE=function(){$.x()
    $R({r:{'*x':'d'}  })
    // r.o('d',function(a){$l('d:'+ a)}); r.o('e',function(a){$l('e:'+a)})
    r.o({
        d:function(a){$l('d:'+ a)},
        e:function(a){$l('e:'+a)}
    })
}
ROUTEPAMS=function(){$.x().A('hahahahhahaha')


    $R({   '':'home',
        'view':'v',
        'new': 'nn',
        ':id': 'en',
        'posts/:id':'gPo',
        '*acts':'dfR',
        'download/*path': 'dlF',
        ':route/:action': 'ldV'
    }, {
        home:function(){$l('home')},
        v:function(){$l('image')} ,
        nn:function(){},
        en: function(id){$l('id:'+id)}
    })

    r.o('dfR',$l)
    r.o('gPo',function(id){$l('gPo# '+id)})
    r.o('gPo', function(){$l(3)}) //both routes fire!
    r.o('dlF', $l)
    r.o('ldV', function(rt,ac){$l(rt+'_'+ac)})
}
ITEMS=function(){$.x().h3('jason')

    Ap={M:{},V:{},C:{}}

    Ap.M.Item = $M({})

    $R({r:{'':'welcome',
        'wap/items':'welcome1',
        'wap/items/itemlist':'showItemList',
        'wap/items/j':'j'},

        welcome:function(){
            $.bd().E().A($.h1('welcome'))},

        j:function(){
            $l('asdfjfsdafsdf')
        },

        showItemList:function(){$l('showItemList')
            $.bd().A($.h1('show item list'))}
    },'/')


    i1 = Ap.M.Item({n:'jason', g:'mason' })

    r.o('/wap/items/j',function(){
        $.bd().E().A(
            $.h1('j')
        )
    })
    r.o('/wap/items/q', function(){
        $.bd().E().A($.h1('q'))

    })

    bb.h.s({pushState:true})

    $.bt('add', function(){r.n('/wap/items/itemlist')})
    $.bt('add1', function(){
        $.A($.h1('k'))
        r.n('/wap/items/j')
    })

}
BACKDEMO=function(){$.x().d('yoo hoo').id('cont')


    $R({
        rt:{'':'f', 'f':'f', 's':'s',
            '/wap/items/q':q},

        q:function(){alert('q')},
        f:function(){$l('fir')},
        s:function(){$l('sec')},

        task:function(){t=new Task(); $l('t = new Task') }

    })


    Temp=function(i,h){var s=''

        return _.tp(
            $('#'+i).html(), h||{}
        )

        if(A(h)){
            _.e(h, function(h){
                s += h.oh()
            })

        }


        _str = "<script type='text/template'>"+  _str + "</script>"


        str= $(s)

        return $(s).id(i).A()

    }


    /*


     Temp('task', [

     $.lb('Task: '),
     $.ip().id('task_desc'),
     $.bt('add task').id('btn')
     ])


     Tsk=$V({el: $('#cont'),

     i: function(){this.r()},
     r: function(){this.$el.ht( Temp('task') )},
     e: {'click button': 'add'},
     add: function(){alert( $('#task_desc').v() + ' task added')}

     })
     */

    $.bt('sfad', function(){
        r.n('/wap/items/q')
    })
}
RTR=function(){$.x('b')

    RTob = {
        '': 'index',
        'wap/rtr/images/:id': 'image',

        view: 'viewImage'

    }

    $R({
        r: RTob,
        h: function () {$l('you are viewing home page')},
        x: function () {$l('you are viewing index')},
        image: function (id) {
            $l('image===')
            _.t(10, function () {
                $l($r() + '-id: ' + id)
            });
            $.bd().C('z')
        },
        viewImage: function () {
            $l('you are viewing an image')
        }

    })

    $.in(function () {$l('......')

        r.n('/wap/rtr/images/32903290239032902390')


    }, '*')
    //looks for clicks on any anchor els where
    //href starts with '/' (no domain) and stop
    //bw from nv to it


    $.bd().on('click', 'a[href^="/"]', function (ev) {
        $l('wow')
        ev.preventDefault()
        r.n($(this).attr('href', {trigger: true}))
    })

}
RNAV=function(){$.x('b')

    $R({r:{ 'po/:id': 'gp', '*a': 'dr'  },
        dr: function(a){$l(a)},
        gp: function(id){$.l$('Get post '+id)}
    })

    $.bt('hi', function(){
        rt.n('po/2')
    })
    $.bt('hi1', function(){
        rt.n('po/4')
    })

    r.o('wappy/rnav/j', function(){
        alert('!')
    })

    $.bt('hi1', function(){rt.n('wappy/rnav/j')
    })
}




bb.rt= bb.r=bb.R= $.ext(bb.Router)
bb.h=bb.history
bb.h.s=bb.h.start
R$=function(o){var r

    o=O(o)?o:{}
    if(o.R){o.routes=o.R}
    r=bb.Router.extend(o)
    r.o=r.on
    return function(){var a=new r
        a.o= a.on
        a.oR=function(r,f){
            this.on('route:'+r, f)
            return this}
        a.n=function(frag,op){if(O(op)){
            if(D(op.t)){op.trigger=op.t?true:false}
            if(D(op.r)){op.replace=op.r?true:false}}
            a.navigate(frag, op)
            return a}
        return a
    }
}
H$=function(){bb.history.start()}
bb.rt=function(klas){
    var rt = new klas
    rt.n= rt.nv=rt.ng=function(url){var rt=this, g=G(arguments)

        if(g.n){
            rt.navigate(url)
        }
        else {

            rt.navigate(url,  {trigger:true})
        }

        return rt}
    return rt
}
bb.Rt=function(ob){var Rt
    if(ob.i){ob.initialize = ob.i}
    if(ob.$){
        ob.initialize = function(){
            bb.history.start({pushState:true})
            if( F(ob.$ )){ob.$()}}}
    if(ob.rt){ob.routes = ob.rt}
    ob.routes = ob.routes || {}
    ob.routes[''] = ob.routes[''] ||'index'
    if(ob.x){ob.index = ob.x}
    if(ob.h){ob.home = ob.h}
    Rt= this.Router.extend(ob)
    return Rt
}
bb.R=function(ob){
    return r = rt = bb.rt( this.Rt(ob) )
}
NORTR=function(){$.x()


    V1 = bb.V.e({

        i: function() {this.r()},
        r: function(){
            this.$el.ht(this.model.get('Ms') + " from the View 1" )
            return this
        }
    })

    V2 = bb.V.e({

        i: function() {
            this.r();
        },

        r: function() {
            this.$el.ht(this.model.g('Ms') + " from the View 2");
            return this;
        }
    })
    V3 = bb.V.e({
        i: function() {
            this.render();
        },
        r: function() {
            this.$el.html(this.model.get('Message') + " from the View 3");
            return this;
        }
    })
    // Now we need a view that will contain the view and render it whenever the user makes a choice on the screen.

    CtV = bb.V.e({
        myChildV: null,
        r: function() {
            this.$el.ht("Greeting Area");
            this.$el.A(this.myChildV.$el);
            return this;
        }
    })

    /*  Now lets create a simple div on the UI which will be used as el to this ContainerView.
     We will then position three buttons on the UI which will let the user to change the view.
     Below code shows the application setup that is creating the container view and the functions
     that will get invoked when the user selects the view from screen.
     */

    greet = V1.o({
        Ms: "Hello world"
    })


    cont = CtV.o({el: $("#AppContainer"),
        model: greet
    })

    v1 = null;
    v2 = null;
    v3 = null;

    function showView1() {
        if (view1 == null) {
            view1 = new View1({ model: greeting });
        }

        container.myChildView = view1;
        container.render();
    }

    function showView2() {
        if (view2 == null) {
            view2 = new View2({ model: greeting });
        }

        container.myChildView = view2;
        container.render();
    }

    function showView3() {
        if (view3 == null) {
            view3 = new View3({ model: greeting });
        }

        container.myChildView = view3;
        container.render();
    }



}
ITEMS=function(){$.x()

    Ap={M:{},V:{},C:{}}
    Ap.M.Item = bb.M.e({})

    bb.R({

        r:{'':'welcome', 'itemlist':'showItemList', 'j':'j'},

        welcome:function(){
            $.bd().E().A($.h1('welcome'))

        },


        j:function(){},
        showItemList:function(){
            $.bd().E().A($.h1('show item list'))

        }
    })

    i1=Ap.M.Item.o({ n:'jason', g:'mason' })
    i1.oR('j',function(){
        $.bd().E().A($.h1('j'))
    })

    // H$()
}
ROUTE=function(){z()
    r= bb.R({ rt:{"*x":"d"}  })
    r.oR('d',function(a){
        alert(a)
    })//#hello -> 'hello'
    r.oR('e',function(a){
        alert(a)
    })//#e -> 'e' (could do '/#/e')
    // H$()
}
ROUTEPAMS=function(){z()
    bb.R({

        rt:{
            '':'home',
            'view':'v',
            'new': 'nn',
            ':id': 'en',
            'posts/:id':'gPo',
            '*acts':'dfR',
            'download/*path': 'dlF',
            ':route/:action': 'ldV'},
        home:function(){al('home')},
        v:function(){al('image')} ,
        nn:function(){},
        en:function(id){al(id)}

    })
    r.oR('dfR',alert)
    r.oR('gPo',function(id){
        alert('gPo# '+id)})
    r.oR('gPo', function(){
        alert(3)}) //both routes fire!
    r.oR('dlF', alert)
    r.oR('ldV', function(rt,ac){
        alert(rt+'_'+ac)})
    // H$()  // or bb.h.s({pushState: true})
}
ROUTENAV=function(){$.x('b')
    bb.R({
        rt:{
            'po/:id'  :  'gp',
            '*a'      :  'dr'
        },
        dr:function(a){alert(a)},
        gp:function(id){alert('Get post '+id)}

    })
    $.bt('hi', function(){$l('11111111')
        rt.n('po/2', {t:1})
    })
}
BACKDEMO=function(){$.x()

    Temp=function(i,h){  var s=''
        return _.tp($('#'+i).html(), h||{})
        if(A(h)){_.e(h, function(h){s += h.oh()})}
        s="<script type='text/template'>"+ s +"</script>"
        return $(s).id(i).A()
    }

    Temp('task', [
        $.lb('Task: '),
        $.ip().id('task_desc'),
        $.bt('add task').id('btn') ])

    $.dI('cont')

    bb.R({
        rt:{'':'f',
            'f':'f',
            's':'s'},
        f:function(){$l('fir')},
        s:function(){
            new Task()
            $l('sec')}
    })

    Tsk=bb.V.e({
        el: $('#cont'),
        i: function(){this.r()},
        r: function(){this.$el.ht( Temp('task') )},
        e: {'click button': 'add'},
        add: function(){
            alert( $('#task_desc').v() + ' task added' )
        }
    })
}
//works:
RTR=function(){$.x('b')

    bb.R({$:1, rt:{
        '' : 'index',
        'wap/rtr/images/:id':'image',
        view: 'viewImage'
    },
        h: function () { alert('you are viewing home page')},
        x:function(){alert('you are viewing index')},
        image:function(id){
            _.t(10, function(){
                $l($r() +'-id: '+ id)}); $.bd().C('z') },
        viewImage: function () {
            alert('you are viewing an image')}
    })

    $.in(function(){

        rt.n('wap/rtr/images/32903290239032902390')

    }, '*')

    //looks for clicks on any anchor els where
    //href starts with '/' (no domain) and stop
    //bw from nv to it

    $.bd().on('click', 'a[href^="/"]', function(ev){
        ev.preventDefault()
        rt.n($(this).attr('href', {trigger:true}))
    })
}