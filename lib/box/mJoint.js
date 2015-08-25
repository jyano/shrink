
b2d.p()

    b2d.mJ=function(body, tX,tY){
        if(O(tX)){tY=tX.y;tX=tX.x}
        var md = new b2d.Joints.b2MouseJointDef
        md.bodyA = w.GetGroundBody()
        md.bodyB = body
        md.target = V(tX, tY)
        md.collideConnected = true
        md.maxForce = 1000 * body.GetMass()
        md.dampingRatio = 0
        return md}
    mJ.tg = function (x, y) {
        if (U(x)) {
            return this.GetTarget().m()
        }
        this.SetTarget(V(x, y).div())
        return this
    }
    // world mouse down vs canvas mouse down!!! // canvas mouse down just uses $.oMD
//if(g.A){_.e(g.f, function(k){f.K(k)}); return f}
    w.mJ = function () {
        var w = this, g = G(arguments), o, j,

            mJD = new b2d.Joints.b2MouseJointDef

        dR = 0
        mF = 50000000

        o = {

            a: w.GetGroundBody(),

            b: g.f, x: g.s, y: g.t,

            dR: N(g[3], dR),

            mF: N(g[4], mF),

            cl: g.N ? true : false

        }


        mJD.bodyA = o.a
        mJD.bodyB = o.b

        mJD.target = V(o.x, o.y, '-')
        mJD.dampingRatio = o.dR
        mJD.maxForce = o.mF
        mJD.collideConnected = o.cl

        return w.J(mJD)
    }



