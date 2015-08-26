bb=Backbone

md= bb.M.prototype
vw= bb.V.prototype
rt= rtr = bbR =  bb.R.prototype
cl= bb.C.prototype

bb.pe = bb.parseEvents=function(ev){
    ev=ev||{$: function(){}}
    _.e(ev, function(v, k){if(EVob[k]){ev[EVob[k]]=v}})
    return ev
}
bb.eParse=function(e){e=e||{}


    _.e(e, function(v,k){

        if(k=='$'){
            e['click']=v
        }

        if(k=='$$'){
            e['dblclick']=v
        }

    })


    return e
}

bb.U= bb.Utility

EVob = {

    $: 'click',
    $$: 'dblclick',
    v: 'mouseover'

}








