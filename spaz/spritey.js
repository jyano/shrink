

meSprite=function(){
    return $Sp( $SS ).XY(10).drag()
}



cjs.sSU = cjs.SpriteSheetUtils
sS.flp=sS.addFlipped=function(a, b, c){
    cjs.sSU.addFlippedFrames(this,  a||true, b||false, c||false )
    return this
}

SSBuilder()
function SSBuilder() {


    sSB.Z = function (sc) {
        if (U(sc)) {
            return this.scale
        }
        this.scale = sc;
        return this
    }
    sSB.maxW = function (sc) {
        if (U(sc)) {
            return this.maxWidth
        }
        this.maxWidth = sc;
        return this
    }
    sSB.A = function (mc) {
        this.addMovieClip(mc)
        return this
    }
    sSB.complete = function (func) {
        this.on("complete", func)
        return this
    }
    sSB.async = function (funcNum, num) {
        if (F(funcNum)) {
            this.complete(funcNum)
            this.buildAsync(num)
        }

        else {
            this.buildAsync(funcNum)
        }


        return this
    }


    cjs.sSB = cjs.builder = cjs.spriteSheetBuilder = cjs.ssB = cjs.ssb = function (mc) {

        var sSB = new cjs.SpriteSheetBuilder()
        if (mc) {
            sSB.A(mc)
        }
        return sSB
    }
}

b2d.p()
spProto()
function spProto() {
    sp.p = function (an) {
        var sp = this

        if (U(an)) {
            sp.play()
        }
        else {
            sp.gotoAndPlay(an)
        }
        return sp
    }
    sp.s = s.P = function (an) {
        var sp = this
        if (U(an)) {
            sp.stop()
        }
        else {
            sp.gotoAndStop(an)
        }
        return sp
    }
    sp.N = function (n) {
        this.advance(n);
        return this
    }
    sp.as = function () {

        return this.spriteSheet.getAnimations()
    }
    sp.a = function () {
        return this.currentAnimation
    }
    sp.f = function (f) {
        var g = G(arguments)
        if (U(f)) {
            return g.p ? this.currentFrame : this.currentAnimationFrame
        }
        if (g.p) {
            this.currentFrame = f
        }
        else {
            this.currentAnimationFrame = f
        }
        return this
    }
    sp.r = _.gS(sp, 'framerate')
    sp.e = function (fn) {
        fn = fn || function () {
            n = N(window['n'], 0);
            $l('frame! ' + n++)
        }
        this.on('animationend', fn)
        return this
    }
}