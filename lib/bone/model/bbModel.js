modelProto()

klass()



function klass(){
    bb.M = bb.Model
    bb.M.x = bb.M.e = function (ob) {
        var g = G(arguments), o
        var Md
        ob = ob || {}
        ob.defaults = ob.defaults || ob.df || ob.d
        // o= g.F_? {fn: g.f, ob: g.s} : {ob: g.f, fn: g.s}
        //o=o||{}
        /*
         if(o.fn){ob.i= o.fn}

         ob.initialize = ob.initialize || ob.i
         ob._i=ob.initialize
         ob.initializeX=function(op){
         this.q= this.$el
         this.a2=function(a){return this.q.a2(a)}
         //$l('gen init..')
         this.g=function(a){if(a){return this.model.get(a)}}
         this.A=function(ob){
         var g=G(arguments),
         q=this.q
         if(S(ob)){ob = this.g(ob)}
         if(ob){q.A(ob)}
         if(U(ob) || g.p){q.A()}
         return q
         }
         _.b(ob._i,this) (op)
         }
         ob.id = D(ob.id)? ob.id : ob.x
         ob.className=ob.className|| ob.k
         ob.tagName=ob.tagName|| ob.tn || ob.t
         ob.defaults=ob.defaults || ob.df || ob.d
         ob.events= ob.events || ob.ev || ob.e
         ob.render=ob.render || ob.rr || ob.r
         ob.tagName=ob.tagName || ob.tn || ob.t
         ob.collection= ob.collection || ob.cl || ob.c
         // ob.render= ob.render || ob.rr || ob.r// ob.render= ob.render || ob.rn*/

        ob.model = ob.model || ob.md || ob.m
        md = bb.M.extend(ob)

        md.o = function (ob, q) {
            var Md = this, md
            ob = ob || {}
            ob.collection = ob.collection || ob.cl || ob.c
            ob.model = ob.model || ob.md || ob.m
            md = new Md(ob)
            if (q) {
                md.a2(q)
            }
            return md
        }
        return md
    }
    bb.m = function (ob) {
        ob = O(ob) ? ob : {}
        var Md, md
        Md = bb.M.e(ob)
        return function (ob) {
            md = new Md(ob)
            return md
        }
    } //bb._M=function(ob){return  bb.M.extend(ob)}
    bb.M.x = function (a, b, c) {
        return bb.M.extend(a || {}, b, c)
    }
    $M = function () {
        var g = G(arguments),
            Md = bb.M.e.apply(V, g)
        return function (a, b, c, d) {
            var g = G(arguments)
            return new Md(a, b, c, d)
        }
    }
    $M = function (ob) {
        var g = G(arguments), Md, klas

        ob = ob || {}
        ob.defaults = ob.defaults || ob.df || ob.d
        if (!F(ob.initialize) && F(ob.i)) {
            ob.initialize = ob.i
        }
        ob.id = D(ob.id) ? ob.id : ob.x
        ob.idAttribute = ob.idAttribute || ob._id
        ob.events = ob.events || ob.ev || ob.e
        ob.model = ob.model || ob.md || ob.m
        ob.validate = ob.validate || ob.v
        Md = bb.M.extend(ob)
        klas = function (a, b, c, d) {
            var g = G(arguments)
            return new Md(a, b, c, d)
        }
        klas.m = klas.M = Md
        return klas

    }
    $m = function () {
        var g = G(arguments);
        return $M.apply(null, g)()
    }

}


bb.Per=function(){
    return $M({
        d: {n:'j', a:20, o:'p'}
    })}

function old(){
    md.o = function (ob, q) {
        var Md = this, md;
        ob = ob || {}
        ob.collection = ob.collection || ob.cl || ob.c
        ob.model = ob.model || ob.md || ob.m
        md = new Md(ob)
        if (q) {
            md.a2(q)
        }
        return md
    }
    bb.mod = function (ob) {
        ob = O(ob) ? ob : {};
        var Md, md
        Md = bb.M.e(ob)
        return function (ob) {
            md = new Md(ob)
            return md
        }
    }


}


