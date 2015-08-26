bb.E.b=bb.E.bind
bb.E.tr=bb.E.trigger
bb.E=bb.Events
bb.x= bb.e=function(ob){

    var Ev =  bb.Event.extend(ob)
    return function(a,b,c,d){ return new Ev(a,b,c,d)    }

}



bb.pe=bb.parseEvents=function(ev){

    EVob = {
        $: 'click', $$: 'dblclick',
        v: 'mouseover'
    }


    ev=ev||{$: function(){}}

    _.e(ev, function(v, k){
        if(EVob[k]){
            ev[EVob[k]]=v  }
    })

    return ev

}





bb.E= bb.Ev=bb.Events
bb.x=  function(ob){

    ob=ob||{}

    var Ev =  bb.E.extend(ob)

    return function(a,b,c,d){
        return new Ev(a,b,c,d)
    }
}
