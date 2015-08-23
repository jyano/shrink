

$.fn.ipsum=function(){    var that =this

    _.each(arguments, function(num){
        that.A( $.ipsum(num) )
    })

    return this}
$.fn.ipsumP=function(){
    var that =this

    _.each(arguments, function(num){
        that.A( $.ipsumP(num) )
    })
    return this}
$.fn.ips = $.fn.ipsum = function () {
    var that = this

    _.each(arguments, function (num) {
        that.A($.ipsum(num))
    })

    return this
}
$.fn.ipsumP = function () {
    var el = this

    _.e(arguments, function (num) {
        el.A($.ipsumP(num))
    })
    return el
}

