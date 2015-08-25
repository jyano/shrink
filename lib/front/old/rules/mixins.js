
    $CSS.fn=function(){}
    $CSS.mx=function(){}
    $CSS.ex=function(){}

    $CSS.ex.icon={

        //extending
// this lets you associate a selector with a bunch
// of declarations at once, and you can add more, too
        transition:'background-color ease .2s',
        margin: '0 .5em'

    }




//help
//value-helpers //this lets you write/call functions that
//produce a complicated value to a
// particular property, // so you don't have to write out
// the full location of the function // -helps with namespacing

    $CSS.fn.B = $CSS.bor= function(c){
        var  col = oO('c', c|| 'z')
        return '8px solid ' + col
    }


// id ' + co


//mixins
// these are functions that take pams
// and ctx-bound to the dec obj // so its main use is to add decs directly on it // but on function can add multiple decs

    $CSS.mx.size = function (w, h) {
        this.width = w
        this.height = h || w
    }


// jqui http://jsfiddle.net/ManojRK/pQ9rj/
// http://jsfiddle.net/rniemeyer/YNCTY/
// sass
// mixins: insert new css pos, and new rules
// extend: share pops/styles between selectors
//placeholders: help extend to gen more effient output
//less
//mixins: a way of  of including ("mixing in") a bunch of properties from one rule-set into another rule-set


    $CSS.mx.bpLarge = function (cont) {return ['@media only screen and (max-width: 400px)', cont]}
    $CSS.mx.bpMid = function (cont) {return ['@media only screen and (max-width: 600px)', cont]}
    $CSS.mx.bpSmall = function (cont) {return ['@media only screen and (max-width: 800px)', cont]}

