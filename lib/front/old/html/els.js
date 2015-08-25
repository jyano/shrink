

E=function E(a,b,c){
    if(O(a)){
        a = O(a.e)? a.e :O(a.c)? a.c :a
        a=$(a)[0]
        if ( _.isElement(a) ){return a}
    }
}

$El=function(tag){
    if(tag){return document.createElement(tag)}

}


$.isBodyElement = function (e) {
    e = $(e)[0]
    return O(e) && uC(e.tagName) == 'BODY'
}