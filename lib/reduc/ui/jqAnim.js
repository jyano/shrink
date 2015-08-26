$.fn.tl = $.fn.trans = function (transform) {
    return this.css({transform: transform})
}
$.fn.gw = $.fn.grow = function () {

    originalWidth = this.W()

    originalHeight = this.H()

    this.on('mousedown', function (e) {


        mx = e.clientX
        my = e.clientY


        $.mouseMove(function (e) {

            this.WH(originalWidth + e.clientX - mx,
                originalHeight + e.clientY - my)

        })

        $.mouseUp(function () {
            $(this).off()
        })  //mouseUp anything?
        this.children().on('mousedown', function (e) {
            e.stopPropagation()
        })

    })

}
$.fn.fr = function (n, w) {
    if (O(n)) {
        q.bp(n.n, n.w)
    }
    else {
        q.bp(n * w)
    }
    return this
}
$.fn.slD= $.fn.slideDown
$.fn.slU= $.fn.slideUp


