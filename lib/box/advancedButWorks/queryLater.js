
$.touchstart=function(func){

    $('body').on('touchstart', func)
    return this}
$.touchend=function(func){

    $('body').on('touchend', func)
    return this}


/*
 return U(a)? true
 : S(a)? f.ofClass(a)
 : (f==a || (g.N? b==a: false) )

 }*/


f.hasAllClasses = function(clas){
    if (U(clas) || clas == '') {
        return false
    }

    var body = this, anyYes = null, anyNo = null

    _.each(arguments, function (clas) {


        if (body.hasClass(clas)) {
            anyYes = true
        }

        else if (!body.hasClass(clas)) {
            anyNo = true
        }


    })

    return (anyYes && !anyNo)


}
f.classCount = function () {
    if (!A(this.classes)) {
        return 0
    }
    return this.classes.length

}
f.removeClass=function(clas){
    var ix
    this.classes = this.classes || []
    if (S(clas)) {

        if (this.hasClass(clas)) {

            ix = this.classes.indexOf(clas)

            this.classes[ix] = null

            this.classes = _.compact(this.classes)


        }


    }
    return this
}
f.near= function (what) {
    var body = this.GetBody()
    //return (this.K()==what) || (body.K()==what)
    // if has sibling fixture that matches, return IT!
    return false

}
f.D = f.data = function (data) {
    if (U(data)) {
        return this.GetUserData()
    }
    this.SetUserData(data);
    return this
}

/*
 b.D=b.data=function(d){var b=this
 if(U(d)){return b.GetUserData()}
 b.SetUserData(d); return b}
 b.classCount=function(){var b=this
 if(!A(b.classes)){return 0}
 return b.classes.length
 }


 b.toggleClass=function(k){var b=this
 if(U(k)||k==''){return false}
 if(b.hasClass(k)){b.removeClass(k)}
 else {b.addClass(k)}
 return b}


 b.removeClass=function(k){var b=this, ix; b.classes=b.classes||[]
 if(S(k) && b.hasClass(k)){
 ix = b.classes.indexOf(k)
 b.classes[ix] = null
 b.classes = _.compact(b.classes)}
 return b}
 b.not = b.notAny = function (k) {
 //this is an AND: ALL MUST BE FALSE
 var b=this, not = true
 _.e(k, function(k){if(b.is(k)){not=false}})
 return not
 }


 b.contains=function(k){var b=this
 var fs=b.fixts(), contains=false
 _.e(fs,function(f){
 if(f.hasClass(k)){contains=true}})
 return contains
 }


 b.hasAllClasses=function(k){
 if(U(k)||k==''){return false}
 var b=this, anyYes = null, anyNo = null
 _.e(arguments, function(k){
 if(b.hasClass(k)){anyYes=true}
 else if(!b.hasClass(k)){anyNo=true}})
 return (anyYes && !anyNo)
 }
 */
f.toggleClass=function(clas){
    if (U(clas) || clas == '') {
        return false
    }

    if (this.hasClass(clas)) {
        this.removeClass(clas)
    } else {
        this.addClass(clas)
    }

    return this
}


TAG=function(){W({g:0})
    w.pop('i like how the ball bounces')

    w.show(function(){ return y.K()})

    y = w.ship(100,100)

    _.t(10,function(){

        w.D(600,300,'b',40).r(.8).lD(.1).K('ball')
    })

    w.with('ball', function(f2){var vel  //$l('oth: ' + other.K() + ' - ' + other.B().K())
        var f=this

        if(f2.of('ship')){
            w.e(function(b){
                if(b.isStat() &&  b.of('ball') ){
                    b.dyn(true)
                    b.C('b')}
            })
        }

        if(f2.of('bul')){

            f.C('r'); f.B().stat()

        }})

    //ship, 10 balls,
}

/*
 _.ct= function(arr, str){var g=G(arguments)
 if(!arr||!str){return}
 if(S(str) && !g.n){str=str.trim()}
 return _.contains(_.tA(arr), str)}
 _.eS=function(str,fn){
 _.e(_.tA(str),function(str){
 if(str=S(str)&&str.trim()){fn(str)}
 })}

 _.e=function(arr,fn){_.each(_.tA(arr),fn)}

 _.tA=function(arr){
 return S(arr)? arr.trim().split(' '):
 O(arr)? _.toArray(arr):
 [arr]
 }



 _.m=function(arr,fn){return _.map(_.tA(arr),fn)}



 _.iU=function(s){if(S(s)){return  s$(s).isUpper()}}

 b2d.k=function(fb,k){fb.ks= fb.ks||[]
 if(U(k)){return fb.ks.join(' ')+'|'+  (b2d.iF(fb)?fb.B().K():'')}
 if(O(k) && !A(k)){fb.K(k.k);return fb}
 _.eS(k, function(k){if(!fb.of(k)){fb.ks.push(k)}})
 return fb}


 b2d.of=function(fb,k){var of;
 if(U(k)){return 1}

 _.e(k, function(k){
 if(b2d.iF(fb)){
 of=fb.B().of(k)}
 if(!k||fb==k||_.ct(fb.ks, k)){of=1}
 })

 return of

 }



 f.K =function(k){return b2d.k(this,k)}

 b.K =function(k){return b2d.k(this, k)}

 f.of=function(k){return b2d.of(this,k)}
 b.of=function(k){return b2d.of(this, k)}

 */
SLING=function(){W(50)
    tf = null
    b = w.D(100, 100, 'b', 100, 200 )
    p = w.S(200, 200,'s', 100, 150 ).rot(20)
    p.rec('o', 50, 50, 50, 50, 20)
    f = p.f()
    h = f.H()


    hit = f.tP( p.transform(), V(200, 200)  ) // true

    hit2 = f.hit(200, 200, true)
    startpoint={}
    slingshot = $h().a2( s )

    onMouseDown=function(e){
        if(ball.hitTestPoint(e.x, e.y)){
            mouseJoint = w.J(
                b2d.createMouseJointDef(
                    w.ground, //?
                    ball.body,
                    e.x, e.y, 100000))
            startpoint.x = e.x
            startpoint.y = e.y
        }
    }

    onMouseMove=function(event){
        if(mouseJoint !=null){
            mouseJoint.setTarget(event.x, event.y)
            slingshot.clear()
            slingshot.setLineStyle(5, 0xff0000, 1)
            slingshot.beginPath()
            slingshot.mt(self.startpoint.x, self.startpoint.y)
            slingshot.lt(event.x, event.y)
            slingshot.ep()
        }
    }
    onMouseUp=function(event){
        if (mouseJoint != null){
            w.dJ( mouseJoint)
            mouseJoint = null
            slingshot.clear()
            strength = 1
            xVect = ( startpoint.x-event.x)*strength
            yVect = ( startpoint.y-event.y)*strength
            ball.body.applyLinearImpulse(  xVect,   yVect, ball.getX(), ball.getY())
        }}

}
