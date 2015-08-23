
$.fn.sb =function(fn){return  this.submit(fn)}


$.scroll =function(a){
    return $(window).scroll(a||function(){$('body').C('*')})
}
