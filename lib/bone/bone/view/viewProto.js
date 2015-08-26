vw.C$ = function (s) {
    this.q.C$(s);
    return this
}
vw.cl = function (fn) {
    _.e(this.collection, fn)
    return this
}
vw.cl=function(fn){var cl
    cl=this.collection
    if(U(fn)){return cl}
    if(cl){_.e(cl,fn)}
    return this
}
vw = bb.View.prototypert = bb.Router.prototype
vw.g = function (m) {
    return this.model.get(m)
}
vw.H = function (a) {
    this.$el.html(a);
    return this
}
vw.J = function () {
    return this.model.toJSON()
}
vw.cl = vw.collection
vw.e = function (a, b) {
    return this.cl.each(a, b)
}
vw.J = function (fn) {
    var vw = this,
        j = this.collection.toJSON()
    if (F(fn)) {
        _.e(j, fn);
        return vw
    }
    return j
}
vw.r = vw.rr = function () {
    return this.render()
}