

function genDom(){


    background();color();klass();layout();manip();textFont();WH();XYZ();
    function background(){
        $.fn.background=function(bg){
            if(U(bg)){return this.css('background')}
            this.css('background', bg)
            return this
        }
        $.fn.backgroundPosition=function(bg){
            if(U(bg)){return this.css('backgroundPosition')}
            this.css('backgroundPosition', bg)
            return this
        }

    }
    function color(){
        $.fn.col = function(col){
            return this.css('color', oO('c', col))}
        $.fn.C = function(c, c2){
            if(c2){return this.C(c).col(c2)}
            if(c=='*'){
                c = Yano.random()
                $l(c)
            }
            return this.css('backgroundColor', oO('c', c))
        }
        $.fn.opacity=$.fn.alpha=function(z){

            this.css('opacity', z)

            return this}

    }
    function klass(){$.fn.K= function(){  $.fn.addClass.apply(this, arguments); return this  }}
    function layout(){


        //offset=os=function(element){if(C(element)){element=C(element)};return $(element||'body').offset()}
//offsetLeft=osl=function(el){return offset(el).left}
//offsetTop=ost=function(el){return offset(el).top}
//dims
//log dims of something
//owh=function(d){return d.o('$$', function(){d.w()+' '+ d.h()})}
//osP=function(a){return O(a) && a.offsetParent}
//osT=function(a){return O(a) && a.offsetTop}
//osL=function(a){return O(a) && a.offsetLeft}
//cW=function(){return document.body.clientWidth }
//cH=function(){return document.body.clientHeight }



        $.fn.free=function(){

            $('body').A( this )

            this.P('a')
        }
        $.fn.dismiss=function(a){
            return this.attr('data-dismiss',a)}
        $.fn.display = function (display) {
            if (U(display)) {
                return this.css('display')
            }
            this.css('display', display);
            return this
        }
        $.fn.float = function (float) {
            if (U(float)) {
                return this.css('float')
            }
            this.css('float', float);
            return this
        }
        $.fn.overflow = function (overflow) {
            if (U(overflow)) {
                return this.css('overflow')
            }
            this.css('overflow', overflow);
            return this
        }
        $.fn.hold = function (a) {
            a.P('s')
            this.A(a)


        }


        $.fn.borderStyle = function (style) {

            this.css('border-style', style)

            return this
        }
        $.fn.borderColor = function (c) {

            this.css('border-color', oO('c', c))

            return this
        }
        $.fn.borderWidth = function (w) {

            this.css('border-width', w)

            return this
        }
        $.fn.pad = function (padding) {
            if (U(padding)) {
                return this.css('padding')
            }
            this.css('padding', padding);
            return this
        }
        $.fn.padTop = function (padding) {
            if (U(padding)) {
                return this.css('paddingTop')
            }
            this.css('paddingTop', padding);
            return this
        }
        $.fn.padBottom = function (padding) {
            if (U(padding)) {
                return this.css('paddingBottom')
            }
            this.css('paddingBottom', padding);
            return this
        }
        $.fn.padLeft = function (padding) {
            if (U(padding)) {
                return this.css('paddingLeft')
            }
            this.css('paddingLeft', padding);
            return this
        }
        $.fn.padRight = function (padding) {
            if (U(padding)) {
                return this.css('paddingRight')
            }
            this.css('paddingRight', padding);
            return this
        }
        $.fn.padHor = function (a) {
            return this.padLeft(a).padRight(a)
        }
        $.fn.padVer = function (a) {
            return this.padTop(a).padBottom(a)
        }
        $.fn.bor = function (border) {
            if (U(border)) {
                return this.css('border')
            }
            this.css('border', border);
            return this
        }


        $.fn.mar = function (margin) {
            if (U(margin)) {
                return this.css('margin')
            }
            this.css('margin', margin);
            return this
        }
        $.fn.marBottom = function (margin) {
            if (U(margin)) {
                return this.css('marginBottom')
            }
            this.css('marginBottom', margin);
            return this
        }
        $.fn.marTop = function (margin) {

            if (U(margin)) {
                return this.css('marginTop')
            }

            this.css('marginTop', margin);
            return this
        }
        $.fn.marLeft = function (margin) {

            if (U(margin)) {
                return this.css('marginLeft')
            }

            this.css('marginLeft', margin);
            return this
        }
        $.fn.marRight = function (margin) {
            if (U(margin)) {
                return this.css('marginRight')
            }
            this.css('marginRight', margin);
            return this
        }
        $.fn.marHor = function (a) {
            return this.marLeft(a).marRight(a)
        }
        $.fn.marVer = function (a) {
            return this.marTop(a).marBottom(a)
        }


    }
    function manip(){
        $.fn.A=function(stuff){
            if( U(stuff)){$('body').append(this); return this}
            this.append.apply(this, arguments)
            return this}
        $.fn.V=function(){
            var val= this.val()
            this.val('')
            return val
        }
        $.fn.E=function(html){
            this.empty(); this.html(html); return this
        }
    }
    function textFont(){
        $.fn.fontSize=function(z){ this.css('font-size', z)

            return this}
        $.fn.textAlign=function(z){

            this.css('text-align', z)

            return this}

    }
    function WH(){

        $.fn.W=function(width){return width? this.width(width): this.width()}
        $.fn.H=function(height){return height? this.height(height): this.height()}

        $.fn.WH=function(w,h){h=h||w;return this.W(w).H(h)}
        $.fn.minW=function(a){return this.css('min-width',a)}
        $.fn.minH=function(a){return this.css('min-height',a)}
        $.fn.maxW=function(a){return this.css('max-width',a)}
        $.fn.maxH=function(a){return this.css('max-height',a)}

    }
    function XYZ(){

        $.fn.zIndex=function(z){
            if(U(z)){return this.css('z-index')}
            this.css('z-index',z);return this}
        $.fn.Z=function(w,h){return this.W(w).H(h||w)}
        $.fn.Y=$.fn.top=function(top){
            if(N(top)){return this.css('top', top)}
            var top = this.css('top')
            if(top=='auto'){return 'auto'}
            return parseInt(top)}
        $.fn.X=$.fn.left=function(left){
            if(N(left)){return this.css('left', left)}
            var left = this.css('left')
            if(left=='auto'){return 'auto'}
            return parseInt(left)}
        $.fn.XY = function(x,y){

            x=N(x)?x:0

            if(U(y)){y=x}
            return this.X(x).Y(y)
        }
        $.fn.right=function(right){
            if(U(right)){
                return this.css('right')
            }

            this.css('right', right)
            return this
        }
        $.fn.bottom=function(bottom){
            if(U(bottom)){
                return this.css('bottom')
            }
            this.css('bottom', bottom)
            return this
        }
        //center
        $.fn.centerOnWindow = function(){
            this.css("position","absolute");
            this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +
                    $(window).scrollTop()) + "px");
            this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
                    $(window).scrollLeft()) + "px" )
            return this}
        $.fn.xCenter=function(){

            return this.P( 'a' ).css({  left: '50%', 'margin-left': '-100px'  })}
        $.fn._getPosition=function(){



            var e = this[0],
                x = 0,
                y = 0

            while (_.isElement(e)) {
                y += e.offsetTop
                x += e.offsetLeft
                if (isBodyElement(e)){e=0}
                e=e.offsetParent||e
            }
            return { x: x, y: y }

            function isBodyElement(e){return O(e)&& e.tagName.toUpperCase() == 'BODY'}


        }
//doesnt work YET
        $.fn.getPosition = $.fn.getTotalOffset = function(){

            var e = this, x=0,  y= 0

            while( E( e ) && e.tagName ){

                y += e.offsetTop

                x += e.offsetLeft

                if( isBodyElement(e)  ){ e = 0 }

                e = e.offsetParent || e
            }

            return { x: x, y: y }




        }//just gets the TOTAL offset of ANY element


    }
}