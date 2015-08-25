
fun = function() {
    b2d.p()
    $.i = $.img
    $.R = $.row

    v1 = [[-100, 0], [0, -100], [100, 50]]

    ct.mug = ct.bm
    old = function () {
        w.backx = function () {
            var w = this,
                back = w.s.back
            if (!back.x) {
                back.x = 10000;
                back.y = 10000
            }
            else {
                back.x = 0;
                back.y = 0
            }
            return w
        }
        w.HUDx = function () {
            var w = this,
                back = w.s.HUD
            if (!back.x) {
                back.x = 10000
                back.y = 10000
            }
            else {
                back.x = 0
                back.y = 0
            }
            return w
        }
        w.layx = function () {
            var w = this
            w.back().HUD().db()
            return w
        }
        w.frontx = function (i) {
            var w = this
            if (b2d.iF(i)) {
                i = i.img ? i.img : i.sprites ? i.sprites[0] : false
            }
            if (i) {
                w.s.setChildIndex(i, w.s.getNumChildren() - 1)
            }
            return w
        }
        w.backx = function (i) {
            var w = this
            if (b2d.iF(i)) {
                i = i.img ? i.img
                    : i.sprites ? i.sprites[0]
                    : false
            }
            if (i) {
                w.s.setChildIndex(i, 0)
            }
            return w
        }

        ct.squareDotx = function (c, x, y) {
            var ct = this, squareDot, tween
            if (!S(c)) {
                y = x;
                x = c;
                c = 'orange'
            }
            if (O(x)) {
                y = x.y;
                x = x.x
            }
            x = N(x) ? x : 300
            y = N(y) ? y : 300
            squareDot = cjs.rect(20, 20, oO('c', c))//.opacity(.4)
            ct.A(squareDot.XY(x, y))//.drag()
            //tween = dot.tweenLoop([{sxy:1.3},100],[{sxy:1},100]).toggle()
            // dot.$$(function(){tween.toggle()})
            return ct
        }

        f.bHx = function (j) {
            var f = this, b = f.B(), s = b.W().s, g = G(arguments), o
            f.sprites = f.sprites || []

            f.sprites.push(j.a2(s))

            o = {x: 0, y: 0, a: 0}

            cjs.t(function () {
                j.XY(b.X() + o.x, b.Y() + o.y)
                j.rot(b.rot() + o.a)
            })

            return f
        }


        b.bS2x = function (i, a, x, y) {
            var b = this, s = b.S()//takes any display object.  right now, just used for shapes
            //because bindSprite fetches the bm's by string.
            //but when i set up preloader, then i would use this i suppose :)
            //s.A( displayObject = obj )//updateSprite() //update: now cjs.tick does do an autocall (automatically - automatically automatic!):) //needed to prevent a pause in the graphics until the NEXT tick?  //could have tick+, that calls once before setting up the listener!
            a = _.tN(a)
            x = _.tN(x)
            y = _.tN(y)
            i.a2(s)
            b.sprites = b.sprites || []
            b.sprites.push(i)
            b.sprite = i

            cjs.t(function () {
                if (b.sprite) {
                    _.e(b.sprites,
                        function (sp) {
                            sp.XY(b.X() + x, b.Y() + y)
                            sp.rot(b.rot() + a)
                        })
                }
            })
            return b


        }


        w.bH = function (h, spr) {
            var w = this
            w.s.A(h)

            cjs.t(function () {
                h.XY(spr.X(), spr.Y())
            })


            return w

        }
        w.dr1 = function (col, x, y, W, h) {
            var w = this, g = G(arguments),
                col = g[0], x = g[1], y = g[2], W = g[3], h = g[4]


            if (g.p) {

                if (!S(col)) {
                    h = W;
                    W = y;
                    y = x;
                    x = col;
                    col = 'b'
                }

                w.s.HUD.shape().fs(col).rec(x, y, W, h)
            }


            else if (g.n) {

                if (!S(col)) {
                    h = W;
                    W = y;
                    y = x;
                    x = col;
                    col = 'r'
                }

                w.s.back.shape().fs(col).rect(x, y, W, h)

            }

            else {
                if (!S(col)) {
                    h = W;
                    W = y;
                    y = x;
                    x = col;
                    col = 'w'
                }

                w.s.shape().fs(col).rec(x, y, W, h)
            }

        }


        b.color = function (c1, c2) {
            var b = this
            c1 = c1 || 'b'
            c2 = c2 || c1
            b.fs(function (f) {
                f.color(c1, c2)
            })
            return b
        }


        w.tick = function (draw) {
            var w = this
            w.ctx.tick(function () {
                w.trans(0, 0).Z(1, 1);
                w.draw(_.tN(draw, .1))
            })
            return w
        }

        statCircSprite = function (x, y, r, c) {
            return new sCS(x, y, r, c)
            function sCS(x, y, r, c) {
                c = oO('c', c || 'o')
                x = x || 300;
                y = y || 100;
                r = r || 80
                this.b = this.body = w.bumper(x, y, r)
                this.g = this.graphic = cjs.circ(r, c).XY(x, y).bindBody(this.body)
                w.s.A(this.g)
                return this.g
            }
        }


        circSprite = function (x, y, r, c) {
            return new cS(x, y, r, c)

            function cS(x, y, r, c) {
                var cir = this
                c = oO('c', c || 'o')
                x = x || 300;
                y = y || 100;
                r = r || 80
                cir.b = w.ball(x, y, r)
                cir.g = w.s.h(x, y).cir(r, c).bindBody(c.b)
                return cir.g
            }
        }
    }
    $.colorPicker = $.ColorPicker = function () {
        z()
        colorPicker = $(' <input id="color" name="color" type="color">').appendTo($('body'))
        colorPicker.change(function () {
            $l(colorPicker.val())
        })
    }
    cjs.HSL = function (a, b, c) {
        if (U(a)) {
            return HSL(M.rand() * 360, 100, 50)
        }
        return cjs.Graphics.getHSL(a, b, c)
    }
//bad
    b.c = function (color) {
        if (U(color)) {
            return this._col
        }
        this._col = color
        return this
    }
//no buffer to worry about // it lets u gradually move past the target point.. until hits limit
// w.b(function () {b.canJump = true;b.p('walk')})
    cjs.sd = cjs.shad = cjs.shadow = function (c, x, y, bl) {

        var g = G(arguments)

        return g.n ?

            new cjs.Shadow(null, 0, 0, 0)
            :
            new cjs.Shadow(
                oO('c', c || 'a'),
                N(x, 0),
                N(y, 0),
                N(bl, 10)
            )

    }
    i.shad = function (c, x, y, blur) {
        var i = this
        var sw = cjs.shad(c, x, y, blur)
        i.shadow = sw
        return i
    }
    eachImage = eaI = function (f) {


        $.getJSON('/img',
            function (i) {
                _.each(i, f)
            })
    }

    sav = function (stage, a) {
        return function () {
            stage.sv(a)
        }
    }
    EDIT0 = function () {

        stage = St(800)

        var imgHolder = $div()

        CT(imgHolder, stage).o('$$', sav(stage, 'edit'))

        eaI(function (img) {

            imgHolder(
                $imageSizeFuncCan(
                    img.d, 1, function () {
                        stage.bm(img.d,
                            function (bm) {
                                //bm.rgc('+');
                                TR(bm);
                            }, '+')
                    }
                )
            )
        })

        return stage
    }
    EDIT1 = function () {

        stage = St(800)
        var imgHolder = $.d()

        container = $.CT(imgHolder, stage)

        container.o('$$', sav(stage, 'edit'))


        eaI(
            function (img) {
                imgHolder.A(
                    $.c('X', 100, 100).fit(img.d).$(function () {
                        stage.bm(img.d,
                            function (bm) {
                                bm.rCenter('+');
                                TR(bm)
                            })
                    })
                )
            })
        return stage
    }
    PROPBOX = function () {
        var imagesDiv = $div()

        dA = $.dA('y', 200)(
            $.sp('prop box'),
            $.hr(),
            $.sp('selected cutout:')
        )

        stage = SuperStage(800)
        littleStage = SuperStage(80)
        dA(littleStage)

        $.CT(imagesDiv, stage).o('$$', sav(stage, 'edit'))

        eaI(function (image) {
            imagesDiv(
                xc(image.d, 1,
                    function () {
                        stage.bm(
                            image.d,
                            function (bm) {
                                TR(bm)
                                ///hmmm only clicks once?
                                //does this relate to the draggable stage problem?
                                bm.$(function () {
                                    $l('new selection')

                                    b = bm
                                    littleStage.ch('-')
                                    clone = Do(bm.ob.clone())
                                    littleStage.A(clone)
                                    clone.xy(50).sXY(.1)
                                })
                            }
                            , '+')
                    })
            )
        })
        return stage
    }
    CJS = function () {
        $St().A()
    }
    AVATAR = function () {

        z()
        //the challenge here is to make the stage draggable but still usable, by dragging it by a wrapper div

        //  s=St(400)
        st = dragStage().tick()
        //d = qq( stage.ob.canvas )
        //d2=$div().drg().w(500).h(500).c('o')
        //CT(d, stage).o('$$',  sav(stage,'avatar') )

        st.on('dblclick', function () {
            stage.snap('avatar')
        })

        theDiv = $.d('x').dg()

        $.getJSON('/img', function (i) {
            _.e(i, function (i) {
                theDiv.A(
                    $.c(100, 100).A().fit(i.d).$(function () {
                        st.bm(i.d, cjs.bindTransform, '+')
                    })
                )

            })
        })
        //d2( stage )
    }


    EDIT1 = function () {


        ct = $.CtD()

        imgHolder = $.d()

        st = $St(800).t()

        ct.A(imgHolder, st.canvas)

        $.getJSON('/img', function (i) {
            _.e(i, function (i) {
                var c = $.c('X', 100, 100).A().fit(i.d) // must be in body in order to use FIT!
                c.$(function () {
                    st.bm(i.d, function (bm) {
                        bm.rC().X(400).Y(400);
                        TR(bm)
                    })
                })
                imgHolder.A(c)
            })
        })

        ct.$$(function () {

            $.post(
                '/img',
                {d: stage.canvas.toDataURL()},  //, dats: x.dats
                function () {
                    window.location = window.location
                })
        })

        return st
    }


    EDIT = function () {

        st = $St(800)

        ct = $.ctD()

        imgHolder = $.d()

        ct.A(
            imgHolder,
            st.canvas
        )


        $.getJSON('/img', function (i) {
            imgs = i

            _.e(i, function (img) {

                $l(img.d)

                var can = $.c('X', 100, 100).A().fit(img.d) // must be in body in order to use FIT!
                c = can
                can.$(function () {
                    st.bm(img.d, function (bm) {
                        bm.rC().XY(400, 400);
                        TR(bm)
                    })
                })

                imgHolder.A(can)
            })

        })


        //    return stage


        ct.$$(function () {
            $.post('/img',
                {d: st.canvas.toDataURL()},  //, dats: x.dats
                function () {
                    window.location = window.location
                })
        })

    }


    EDIT9 = function () {
        z()
        st = $St(800).A()
    }
    testStage = function () {

        z()

        st = $St(800).t()

        st.mug(function () {
        }, stage)
        // stage.bm('/me.png')


    }
    PAINT = function () {
        _paintColor = 'blue'
        _paintSize = 10

        cv = $.c('r', 400, 400).A().P('a', 100, 50)

        st = cv.stage.tick()

        h = $H()

        st.mug(function (mug) {
            mug.sXY(.4)
            st.A(h)
        })

        graphics = h.graphics

        graphics.beginStroke('black')//.beginFill('yellow') <- cool effect!!
            .setStrokeStyle(4)//.moveTo(10,10).lineTo(111,111)

        st.on('stagemousedown', function (e) {
            graphics.beginStroke(_paintColor)
            stage.on('stagemousemove', function (e) {
                graphics.lineTo(e.stageX, e.stageY)
            })
        })
        st.on('stagemouseup', function () {
            st.removeAllEventListeners('stagemousemove')
        })
        d = $.d().K('controls').appendTo($('body'))
        colorPicker = $(' <input   type="color">')

        d.A(colorPicker, $.sp(10), $.sp(20), $.sp(30))

        colorPicker.on('input', function () {
            $l('input ')
            _paintColor = $l(colorPicker.val())
            graphics.beginStroke(_paintColor)
        })

        $('.controls span').$(function () {
            graphics.setStrokeStyle(
                parseInt($(this).text())
            )
        })
    }
    TextAdder2 = function (st) {
        var f = $.f().a().c('x').P(10).w(300).dg(),
            val, t
        $.f(
            $, ip().id('text'),
            $.bt('for text', function () {
                val = $l($('#text').val())
                $('#text').val('')
                t = $.T(val, 'w', 30, 100, 10)
                SL(t)
                st.A(t)
            })
        )
        return f
    }
    TextAdder = function (stage) {
        var form = $.form().A()
            .c('x').P(10).w(300)
            .drg()

        $.f(
            $.ip().id('text'),

            $.bt('for text', function () {
                var val = $l($('#text').val())
                $('#text').val('')
                var _text = $T(val, 'w', 30, 100, 10)

                var theText = EaselContainer().a(_text)
                theText.dO = _text
                SL(theText)
                stage.a(theText)
                selected(theText)
            }))
        return form
    }
    EDITOR = function () {
        var r = '#0FF', size = 2, oX = 0, oY = 0, shape,
            st = $.dragStage()
        imgHolder = $.A().drg().c('y')
        eaI(function (i) {
            imgHolder($.imageSizeFuncCan(
                    i.d, 1,
                    function () {
                        st.bm(i.d, function (bm) {
                            SL(bm.sXY(.4))
                        }, '+')
                    }
                    //rgc
                )
            )
        })
    }
    rotateShake = function (bm) {
        $Tw([bm, 'l'], {r: 0}, [{r: 1}, 1], [{r: -1}, 1])
    }
    scaleShake = function (bm) {
        $Tw([bm, 'l'], {sxy: 1}, [{sxy: .95}, 1], [{sxy: 1.05}, 1])
    }

    selected = function (bm) {
        //SL(bm)
        bm.$(function () {
            cjs.Tween.removeAllTweens()
            bitmap = bm
            scaleShake(bm.dO)
        })
    }


    SELECTED = function () {
        z()
        stage = dragStage()
        stage.wBm('coin', function (bm) {
            coin = bm;
            SL(coin)
            selected(bm)
        })

        st.wBm('sun', function (bm) {
            sun = bm;
            SL(bm)
            selected(bm)
        })

        TextAdder(stage)

        st.wBm('me', function (bm) {
            me = bitmap = bm
            SL(bm)
            bm.rgc('+')
            scaleShake(bm)
            //rotateShake(bm)
            selected(bm)
            st.wBm('flame', function (bm) {
                flame = bm;
                SL(bm);
                selected(bm)
            })
            st.wBm('guy', function (bm) {
                guy = bm;
                SL(bm);
                selected(bm)
            })
        })

        theImagesDiv = $d('y').dg()

        loadImagesDiv = function () {
            theImagesDiv.E()
            eaI(function (img) {
                theImagesDiv(
                    $imageSizeFuncCan(
                        i.d, 1, function () {
                            st.wBm(i.d, function (bm) {
                                SL(bm.sXY(.4));
                                bm.rgc('+');
                                selected(bm)
                            })
                        })
                )
            })
        }


        loadImagesDiv()

        d = $divA(500).c('y')(
            $.bt('freeze', cjs.Tween.removeAllTweens),
            $.bt('right', function () {
                bm.x(bm.x() + 10)
            }),
            $.bt('left', function () {
                bm.x(bm.x() - 10)
            }),
            $.bt('up', function () {
                bm.y(bm.y() - 10)
            }),
            $.bt('down', function () {
                bm.y(bm.y() + 10)
            }),
            $.br(),
            //fix
            $.bt('bigger', function () {
                bm.sxy(1.1, '*')
            }),
            $.bt('smaller', function () {
                bm.sxy(.9, '*')
            }),
            //
            $.bt('wider', function () {
                bm.sx(bm.sx() * 1.1)
            }),
            $.bt('thinner', function () {
                bm.sx(bm.sx() * .9)
            }),
            $.bt('taller', function () {
                bm.sy(bm.sy() * 1.1)
            }),
            $.bt('shorter', function () {
                bm.sy(bm.sy() * .9)
            }),
            $.br(),
            $.bt('CW', function () {
                bm.rt(bm.rt() + 10)
            }),
            $.bt('CCW', function () {
                bm.rt(bm.rt() - 10)
            }),
            $.br(),

            $.bt('get index', function () {
                pop('index: ' + st.ix(bm))

            }),

            $.bt('set index to 3', function () {
                st.ix(bm, 3)
                pop('index: ' + st.ix(bm))

            }),


            $.bt('z-up', function () {
                st.ix(bm, st.ix(bm) + 1)
            }),

            $.bt('z-down', function () {
                st.ix(bm, st.ix(bm) - 1)
            }),

            $.bt('remove', function () {
                st.rm(bm)
            }),


            $.bt('clone', function () {
                st.A(
                    $Ct().A(SuperDisplayObject(bm.ob.clone()))
                )
            }),
            $.br(),

            $.bt('save', function () {
                st.sv(function () {
                    loadImagesDiv()
                })

            }),


            $.bt('paint', function () {
                stagePainter(st)
            }),
            $.bt('', function () {
            })
        )


    }
    INDEXX = function () {
        z()
        s = dragStage().bm('me', function (bm) {
            b = bm
            SL(b)
            _.times(10, function () {
                s.bm('guy', SL)
            })
            s.ix(b, 3)
        })
    }
    FILTERS1 = function () {

        s = $.canvas(1000).A().stage.tick()

        s.mug(
            function (b) {

                b.XY(-100, -50)

                b.cc()

                b.clMF('a', '+')

                b.clMF('w', '+')

                cjs.bindSlide(b)

            })


        wMb(function (b) {
            b.xy(400, 0).cc()
            SL(b)
            b.fl([aMF(Gx().lf(trx(1, 0), [0, 1], 0, 0, 300, 300)
                .dr0(400).H().cc(400).cc('*'))
            ]).cc(400)
        }, s)


        wMb(function (b) {
            b.xy(100, 300).cc();
            SL(b)
            b.cc().fl([clF(.3, 1, .3, 1, 0, 0, 0, 0)]).cc('+')
        }, s)


        wMb(function (b) {
            var ag = 0, rg = 20, sp = 0.04;
            b.xy(500, 300).cc();
            SL(b)

            //this has gotta just mean 'on tick'
            tt(function (e) {
                v = sin(ag += sp) * rg;
                b.cc('+').fl([blF(v, v, 2)])
            })
        }, s)
    }
    FILTERS = function () {
        W()._(function () {


            b = w.i.qB('me')

            b.XY(-100, -50)
            b.cache(0, 0, b.W(), b.H())

            cM = new cjs.ColorMatrix()
            cM.adjustHue(-180)
            cM.adjustSaturation(100)
            cM.adjustBrightness(300)
            cM.adjustContrast(-600)
            b.filters = cM

            b.updateCache(
                cjs.bindSlide(b))


        })
    }

    TRANSFORM = function () {
        format()
        wMs(function (b, s) {
            b.xy(0, 0)
            b.rgc('+')
            TR(b)

            wMb(function (b) {
                b.xy(50, 50).rgc('+');
                TR(b)
            }, s)

            wMb(function (b) {
                b.xy(100, 100).rgc('+');
                TR(b)
            }, s)

            wMb(function (b) {
                b.xy(200, 200).rgc('+');
                TR(b)
            }, s)

            wMb(function (b) {
                b.xy(300, 300).rgc('+');
                TR(b)
            }, s)

            wMb(function (b) {
                b.xy(400, 400).rgc('+');
                TR(b)
            }, s)

            wMb(function (b) {
                b.xy(150, 150).rgc('+');
                TR(b)
            }, s)

            wMb(function (b) {
                b.xy(250, 250).rgc('+');
                TR(b)
            }, s)

            wMb(function (b) {
                b.xy(350, 350).rgc('+');
                TR(b)
            }, s)
        }, '-')
        s1(bt('rotate', function () {

                s.ch('-')


                wMb(
                    function (b, s) {

                        s.M(50); //b=Do(bj(b))

                        RT(b.xy(400))

                        wMb(function (b) {
                                b.xy(300).al(.5)
                                RT(b, '-')
                            }
                            , s)

                        wMb(function (b) {
                                KK(b.xy(200).sxy(1.4), '+')
                            }
                            , s)

                        wMb(function (b) {
                                KK(b.xy(100).sxy(.6))
                            }
                            , s)
                    }, s)


            }), $.br(2),


            $.bt('skew', function () {

                s.ch('-')

                wMb(function (b, s) {

                        s.mg(function (b, s) {

                            SK(b.xy(300).rgc('+').sxy(1.5))

                            s.w(2000).h(2000)

                        })


                        //b.xy(500,400).rgc('+').sxy(1.5);RT(b);SK(b)

                    }

                    , s)
            }), $.br(2),


            $.bt('register', function () {
                s.rm()
                wMb(function (b, s) {
                    TR(b);
                    rg1(b);
                    reggy(b)
                }, s)
                wMb(function (b, s) {
                    TR(b);
                    b.rgc();
                    rg1(b);
                    reggy(b)
                }, s)
            }),
            $.br(2))
    }
    SHOWCASE = function () {
        format()

        s2($span().id('pics'))
        s2(x = cx('y', 500, 500))
        x.q.cen()
        eaI(function (v) {
            qi('pics')(xc(v.d, 1, function () {
                x.X();
                x.f(v.d)

                url$ = v.d
            }))
        })
        s2($.br(2), lb('caption'), cap$ = tx().w(500))

        s1(
            $.br(2),
            lb('category'),
            cat$ = tx().w(200), $.br(2),

            bt('post', function () {

                o = {

                    t: cat$.V(),
                    c: cap$.V(),
                    du: url$
                }
                qP('/pst', o, function () {
                    pop('posted')
                })

            }), $.br(2),
            bt('make a showcase', function () {
            }), $.br(2),
            bt('submit to ranky', function () {
            }), $.br(2)
        )


    }
    TWEENART = function (a) {


        //wMb makes bitmap mug and passes it to a callback
        //optionally? can pass a stage to append it to before the callback runs
        wMb(
            function (b, s) {
                b.xy(300);
                b.rgc(); //centers it's reg point?
                SK(b)
                $Tw([b, 'l'], {sxy: .5}, [{sxy: .7}, 500], [{sxy: .5}, 500])
                wMb(function (b) {
                    s.a(b)//manual add necessary?
                    b.xy(200);
                    b.rgc();
                    b.wh(200);
                    SL(b);
                    $Tw([b, 'l'], {r: 0}, [{r: 360}, 1000])
                    wMb(function (b) {
                        s.a(b);
                        b.rgc();
                        b.xy(600);
                        SC(b)
                        $Tw([b, 'l'], {kxy: 0}, [{kxy: 20}, 500], [{kxy: 0}, 500])
                    })
                })
            }, EDIT()
        )
    }

//make movie
    MOVIE = function () {

        var s = $.c('b', 800, 800).A().stage.tick(),


            d = $.d().A(), fn = function () {
            }
        $.getJSON('/img', function (imgs) {
            _.e(imgs, function (v) {
                v = v.d
                var c = $.c(100, 100).A().fit(v)
                c.$(function () {
                    s.bm(v, function (b) {
                        bb = b
                        cjs.bindTransform(b);
                        //fn(b)
                        b.$(function (q) {
                            fn(q)
                        })
                    }, '+')
                })
                d.A(c)
            })

            part2 = function () {
                c = $Ct($.R().A(
                    $.d()(div, s),
                    $.d().A(
                        $.bt('shake', function () {
                            fn = function (b) {
                                $Tw(b.obj(), {loop: true})
                                    .to(ww({x: b.x()}, 500))
                                    .to(ww({x: b.x() + 100}), 500)
                                    .to(ww({x: b.x()}), 500)
                            }
                        }),
                        $.bt('rotate', function () {
                            fn = function (b) {
                                $Tw(b.obj(), {loop: true})
                                    .to(ww({kxy: 0})).to(ww({kxy: 20}), 500)
                                    .to(ww({kxy: 0}), 500)
                            }
                        }),
                        $.bt('size', function () {
                            fn = function (b) {
                                $Tw(b.obj(), {loop: true})
                                    .to(ww({sxy: 1}))
                                    .to(ww({sxy: 1.3}), 500)
                                    .to(ww({sxy: 1}), 500)
                            }
                        })
                    )))
            }

            //c.o('$$',function(){  s.sv(ART)})
        })


        return s

    }

    JSPIN = function () {
        Q(function () {
            W()
            $Tw(s, [{r: -10000}, 300000])
            me = w.i.qB('me').XY(500);
            SL(me)
            w.i.A(w.i.rec(400, 400, 'o', 'r').XY(1200))
            w.i.A(w.i.rec(300, 300, 'p', 'r').XY(800))
            w.i.A(w.i.rec(300, 300, 'g', 'g').XY(0))
        })

    }
    RECTS = function () {
        W()
        x = 20
        y = 20

        h0 = $H(300, 400).rec(-20, -20, x + 40, y + 40, 'y', 'y')
        h1 = $H(300, 400).rec(-10, -10, x + 20, y + 20, 'r', 'p')
        h2 = $H(300, 400).rec(0, 0, x, y, 'o', 'z')

        w.i.A(h0, h1, h2)

        SL(h2)
        SL(h2, h1)
        SL(h2, h0)
        RT(h1)
        RT(h1, h2)
        RT(h1, h0)
        SC(h0)
        SC(h0, h2)
        SC(h0, h1)
        a = function () {
            x += 20;
            y += 20
            h1.clr()
            h2.clr()
            h1.rec(-10, -10, x + 20, y + 20, 'z', 'p')
            h2.rec(0, 0, x, y, 'o', 'X')
        }
        // h0.rect(50,50,30,30,'black','orange
    }

//// ***
    mugCont = function (stage) {
        qu = new cjs.LoadQueue().complete(onMug).manifest([{id: "mug", src: "/myMug"}])
        cont = cjs.container()
        cont.flame = function () {
            cont.desuit()
            cont.A(
                cont.suit = cjs.container().bm('flame', function (flame) {
                })
            )
        }
        cont.uni = function () {
            cont.desuit()
            cont.A(
                cont.suit = cjs.container().bm('uni', function (uni) {
                    uni.x(200).y(200)
                    cont.mug.sxy(.2).x(300)
                }))
        }
        cont.guy = function () {
            cont.desuit()
            cont.A(
                cont.suit = cjs.container().bm('guy', function (guy) {
                    guy.spin()
                    cont.spin()
                })
            )
        }
        cont.desuit = function () {
            cont.mug.sXY(1).XY(200)
            if (cont.suit) {
                cont.suit.remove()
                cont.suit = null
            }
        }
        function onMug() {
            mug = qu.getResult("mug")
            // cont.bData( mug )//.rgc('+')
            cont.A(cont.mug = cjs.bm(mug))
        }

        return cont
    }

    CONTMUG = function () {
        z()
        s = cjs.stage(1000).A()
        s.A(m = mugCont())//.rgc('+')
        // SL(m)
    }
//// ***
    Cycle1 = function () {

        var cont = new createjs.Container()
        cont.mug(function (mug) {
            mug.sXY(.4)
            cont.bm('uni', function (bitmap) {

                bitmap.sX(-.8).X(-20).Y(200).rX(240).rY(80)
                bitmap.name = 'uni'
                createjs.bindTransform(mug, cont)
                createjs.bindRotate(bitmap, cont)
            })
        })
        return cont
    }

    Cycle2 = function () {
        var cont = new createjs.Container()
        var qu = new createjs.LoadQueue().complete(graphics).manifest([
            {id: "mug", src: "/getMug"},
            {id: "uni", src: "/uni.png"}
        ])

        function graphics() {
            cont.bm(
                qu.getResult("uni"),
                function (b) {
                    bitmap = b.sX(-.8).X(-20).Y(200).rX(240).rY(80)
                    bitmap.name = ('uni')
                })
            cont.bm(
                $.img($.parseJSON(qu.getResult("mug"))),
                function (b) {
                    mug = b.sXY(.4)
                })
            SL(mug, cont)
            $Tw([mug, 'l'], [{y: -10}, 200], [{y: 10}, 200], [{y: 0}, 200])
        }

        return cont
    }
    CYCLE = function () {
        z()
        s = $stage(800, 800).A().tick()
        c1 = Cycle1()
        c2 = Cycle2()
        s.A(c1, c2)
    }
    Flame1 = function () {
        var ct
        ct = $Ct()
        ct.drag()
        ct.bm('flame', flame)
        function flame(b) {
            //  tweens.shakeY(b)
            /*
             ct.mug(function(b){
             b.rC()
             tweens.shakeX( tweens.rott(b) )
             c.bm('flame', tweens.shakeX)
             })



             ct.on('dblclick',function(){
             ct.bm('flame',
             function(b){
             b.sXY(.2)
             tweens.prod1(b)})
             ct.bm('flame', function(b){b.sXY(.2)
             tweens.prod2(b)
             })})
             */
        }

        return ct

    }

    FLAME = function () {
        W()
        f = Flame1()
    }
    //f.X(300)
    // w.i.A(  f
    Bod2 = function () {

        var c1 = $Ct(), cL = $Ct()
        c1.mug(function (m) {
            SL(m, c1)
            m.sXY(.4)
        }) // c1.cI(m, 0)
        c1.bm('arm', function (b) {//arm=b;
            b.name = 'arm';
            b.sX(-.8).X(140).Y(100).rX(200).rY(80)
            RT(b)
            b.on('dblclick', function () {
                _TW.rpunch(b)
            })
        })
        cL.bm('uparm', function (b) {//lu=b
            b.name = ('lu')
            RT(b, cL)
            b.sX(.8).X(80).Y(180).rX(200).rY(80)
            cL.on('dblclick', function () {
                _TW.lpunch(cL)
            })
            cL.X(140).Y(100).rX(100).rY(100)
        })
        cL.bm('forearm', function (b) {//lf=b
            b.name = ('lf')
            b.sX(.8).X(-100).Y(140).rX(20).rY(120)
            RT(b)
        })
        return c1.A(cL)
    }

    Bod1 = function () {
        var outerCont = $Ct().drag(), innerCont = outerCont.ct()
        outerCont.mug(function (m) {
            m.sXY(.4)
            cjs.bindSlide(m, outerCont)
            outerCont.bm('arm', function (b) {

                b.name = 'arm'

                b.sX(-.8).XY(140, 100).rXY(200, 80)

                createjs.bindRotate(b)

                b.on('dblclick', function () {
                    _TW.rpunch(b)
                })

            })
            innerCont.XY(40, 120).rXY(40, 100)
            innerCont.bm('uparm', function (b) {

                b.name = 'lu'

                b.sX(.8).XY(80, 180).rXY(200, 80)

                createjs.bindRotate(b, innerCont)
            })
            innerCont.bm('forearm', function (b) {
                b.name = 'lf'
                b.XY(-100, 140).sX(.8).rXY(20, 120)
                cjs.bindRotate(b)
                innerCont.on('dblclick', function () {
                    _TW.lpunch(b)
                })
            })
        })
        return b = outerCont
    }
    BODS = function () {
        $St(800, 800).A().t().A(Bod1(), Bod2())
    }
    BOD = function () {
        z()
        s = createjs.stage(800, 800).A().tick()
        var b1 = Bod1(), b2 = Bod2().XY(300),
            f = Flame1().XY(300, 500),
            cyc = Cycle1().X(400), cyc2 = Cycle2().X(500)
        s.A(b1, f, b2, cyc, cyc2)
    }
    SPACEOLD = function () {
        wMs(function (b, s) {
            st = s
            st.wh(2000)
            st.bgi('/space.jpg')
            b.sXY(.2)
            b.fn(RT, SL)
        })
    }
    SPACE = function () {
        z()
        $stage(2000, 2000).tick().A().backgroundImage('/space.jpg').mug(
            function (mug) {
                mug.sXY(.2).drag().rotate()
            })
    }
    BOXES = function () {

        $.CT($.R(
            s = $St(800, 600).t(),
            $.d('y').pad(20).A($.h1('controls'),
                bt('fall', function () {
                    b.fall(box)
                }),
                bt('fall+', function () {
                    $.ev(newBall)
                })),
            '+' // ?????!
        ))

        kD('r', function () {
            box.X(10, '+')
        })
        kD('l', function () {
            box.X(10, '-')
        })
        s.A(box = Box().XY(300, 450))
        s.A(ball = Ball(40, 'r', 'o').XY(300, 100))
        newBall = function () {
            b = Ball(40, 'r', 'o').XY(_r(600), 100).a2(s).fall(box)
        }
    }
    SHIP = function () {

        angleInDegrees = function self(y, x) {
            if (O(y)) {
                return self(y.vy, y.vx)
            }
            var d = M.tD(M.atan(y / x))
            if (x < 0) {
                d = M.abs(d) + 90;
                if (y < 0) {
                    d = M.abs(d) + 90
                }
            }
            return d
        }

        ship = function (stage) {
            t = $H(100).rY(20).vX(1).vY(1)
            t.graphics.f('o').s('z').mt(0, 0).lt(0, 40).lt(80, 20).lt(0, 0)
            kD('d', function () {
                t.rt(6, '+')
            })
            kD('u', function () {
                t.rt(6, '-')
            })
            if (stage) {
                stage.A(t)
                stage.on('stagemousedown', function (event) {
                    e = event
                    t.vX((e.rawX - t.x) / 100, '+')
                    t.vY((e.rawY - t.y) / 100, '+')
                    if (t.vx > 10) {
                        t.vX(10)
                    }
                    if (t.vy > 10) {
                        t.vY(10)
                    }
                })
            }
            $.ev(.1, function () {
                t.X(t.vx, '+').Y(t.vy, '+')
                t.rotation = angleInDegrees(t)
            })
            return t
        }
        PL = 1;
        aA = []

        div = $.d('y').pad(10)

        div.A(
            $.h1('controls'),
            b1 = $.bt('start', function () {
                PL = 1;
                b1.hd();
                b2.sh()
            }),
            b2 = $.bt('stop', function () {
                PL = 0;
                b2.hd();
                b1.sh()
            }).hide(),
            $.bt('sgun', function () {
                sgun(guy)
            })
        )

        boot = $.boot()
        stage = $St(800, 600).t()
        boot.A(div, stage.canvas)
        guy = ship(stage)

        // kD('s',function(){ $l('bang')})
        // _.times(100,function(){var a=ast();a.a();a.p()})
        // stage.tick(function(){ if(PL){ _.each(aA,function(a){  a.u()  })}} )
        sgun(guy)
    }

    SOLAR = function () {
        z()
        st = s = cjs.stage(1000, 500).A().tick()

        st.bm('guy', function (bm) {
            guy = bm
            bm.drag()
            bm.vXY(
                _.random(10) + 1,

                _.random(10) + 1)


                .XY(_.random(800), _.random(600)
            )


            bm.startMoving()

            bm.warp()

            st.bm('sun', 0.2, function (bm) {
                sun = bm
                bm.drag().startMoving(4, 10)
                bm.warp()
                $.ev(.1, function () {
                    if (cjs.bulletHit(sun, guy)) {
                        sun.sXY(sun.scaleX + .1, sun.scaleY + .1)
                        sun.vx += .2;
                        sun.vy += .2
                    }
                })
            })
        })
        st.mug(0.4, function (bm) {
            mug = bm
            bm.X(400).drag().startMoving(10, 10)
            bm.bounce(0)
        })
        st.backgroundImage('/space.jpg')
    }
    SHOOTY = function () {
        z()

        st = cjs.st(800).tick().A().drag()
        st.mug(function (mug) {
            m = mug
            mug.XY(100, 100).WH(150)
            SL(mug)
            key(mug, '-')
            // ugun(mug)
        })

        cv = ghostMe().A().dg().XY(10)

        function ghostMe() {
            return $.canvas('X', 500, 500).fit('me').al(.1)
        }

        // how cool.. it 'steals' the drag because its on top but looks like its below
    }

    HIT = function () {
        z()

        s = stage = createjs.stage(900, 600).A().tick().mug(function (mug) {
            mug.drag()
            stage.bm('flame', function (flame) {
                flame.drag()
                flame.scaleX = .1
                flame.scaleY = .1
                flame.regX = flame.getBounds().width / 2
                flame.regY = 500
                flame.x = 400
                flame.y = 400
                stage.on('dblclick', function (e) {

                    flame.x = e.rawX;
                    flame.y = e.rawY
                })
                stage.on('stagemousedown', function (e) {

                    localCoords = mug.globalToLocal(e.rawX, e.rawY)

                    hit = mug.hitTest(localCoords.x, localCoords.y)


                    if ($l(hit)) { //$l('hit')
                        stage.backgroundColor('red'); //$l( e.X+ ' '+ e.Y )
                    }

                    else {
                        $l('no hit')
                        stage.backgroundColor('yellow')
                    }


                })

                stage.on('stagemousemove', function (e) {
                    localCoords = mug.globalToLocal(flame.x, flame.y)
                    hit = mug.hitTest(localCoords.x, localCoords.y)
                    if ($l(hit)) {
                        $l('HIT')
                        stage.backgroundColor('red')
                        $l(e.rawX + ' ' + e.rawY)
                    }
                    else {
                        $l('NO HIT')
                        stage.backgroundColor('yellow')
                    }
                })
            })
        })
    }

//beautiful demo i stole! :)
    HITCIRCLES = function () {
        z()
        stage = cjs.stage(1000).A().drag() // look no .tick() necesary!! look below :)
        container = new createjs.Container()
        stage.A(container.XY(150))
        _.t(25, function () {
            var shape = new createjs.Shape()
            shape.graphics.f(randomHSL()).dc(0, 0, 30)
            holder.A(shape.XY(randomLocation(), randomLocation()))
        })
        T.on("tick", tick)

        function randomLocation() {
            return Math.random() * 300 - 150
        }

        function randomHSL() {
            return cjs.Graphics.getHSL(Math.random() * 360, 100, 50)
        }

        function tick(event) {
            holder.rotation += 3
            var numChildren = holder.getNumChildren()
            _.each(holder.children, function (child) {
                child.alpha = child.underMouse() ? 1 : 0.1
            })
            /*
             for(var i = 0; i < numChildren; i++){  //for each child
             var child = holder.getChildAt(i)
             child.alpha = 0.1
             var pt = child.globalToLocal(stage.mouseX, stage.mouseY);
             if (stage.mouseInBounds && child.hitTest(pt.x, pt.y)){
             child.alpha = 1}
             }
             */
            stage.update(event)
        }
    }

    canon = function (box, x, y) {
        var vx, vy, ball
        x = x || box.x || 100
        y = y || box.y || 500
        stage.A(ball = Ball(12).XY(x, y))
        if (box.rotation > 0) {
            vx = 8 * (1 + Math.toRads(box.rotation))
            vy = 16 * (1 - Math.toRads(box.rotation))
        }
        else {
            vx = 8 * (-1 + Math.toRads(box.rotation))
            vy = 16 * (1 + Math.toRads(box.rotation))
        }
        stage.t(function () {
            vy -= 0.5
            ball.X(vx, '+').Y(vy, '-')
        })
    }
    CANON = function () {
        stage = cjs.stage(1000, 600).tick().A()
        box = Box(20, 100).X(500).B(600)
        stage.A(box)
        kD('l', function () {
            box.rT(4, '-')
        })
        kD('r', function () {
            box.rT(4, '+')
        })
        kD('d', function () {
            box.rotation = 0
        })
        kD('s', function () {
            canon(box)
        })
        setInterval(function () {
            var degs = Math.toRads(box.rotation)
            canon(box, (500 + Math.acos(degs) * 30) + box.x - 540,
                (500 + Math.asin(degs) * 30) + box.y - 540)
        }, 500)


    }

    CONNECT = function () {
        W()


        pink = cjs.cir(300, 'pink', 'purple').XY(520, 500)//.rXY(100)


        w.i.A(pink)

        ct = $Ct()

        w.i.A(ct)

        green = cjs.cir(200, 'g', 'purple').XY(320, 300)//.rXY(100)
        yellow = cjs.cir(100, 'y', 'purple').XY(250)
        red = cjs.cir(40, 'r', 'p').XY(200, 100)

        orange = cjs.cir(20, 'o', 'purple').XY(300)

        ct.A(green, yellow, red, orange)

        LS(yellow, container)
        SL(green)
        SL(green, pink)
        SL(yellow)
        SL(red, container)
        SL(orange, red)
    }

    MATRIX1 = function () {// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')//SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')

        z()

        $.div('b', 50, 50).A()

        stage = s = cjs.stage(1600, 1000).tick().A()

        // on stage enter, change background color, though you
        // cant see it here because stage fills screen
        // this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
        stage.on('e', co)

        //make a container
        stage.ct(function (c, s) {

            //the little me clicks do not hit the 'big' me underneath it.  that's normal.
            //but it does hit the container.  but this example shows off 'remove', so it only hits once
            //however, it continues to propogate on to the container. hmmm..

            c.bm('me',
                function (b) {
                    b.sXY(.2).XY(100, 80)
                    b.on(click, function () {
                        $l('lit')
                    }, '/')  //on click, log('lit'), just once (remove listener)!

                })


// the middle size me demonstrates stopPropogation
// if you click it, the container does not feel the click
            c.bm('me', function (bm) {
                bm.sXY(.4).XY(100, 180)

                bm.on('click', function () {
                    $l('mid')
                }, '-')  //on click, log('mid'), and stop prop

            })


            c.bm('me', function (bm) {
                bm.sXY(1.5)
                bm.on('click', function () {
                    $l('big')
                })  //on click, log('big')

            })

            //on click, log('con')
            c.on('click', function () {
                $l('con')
            })

        })


        stage.ct(function (c) {

                var vn = 0,
                    rvn = 0,
                    on = 0,
                    ron = 0


                c.X(200)


                c.mug(
                    function (b) {
                        b.sXY(.8).XY(200, 80)
                    })


                c.mug(
                    function (b) {
                        b.sXY(.8).XY(100, 280)
                    })


                c.mg(
                    function (b) {
                        b.sXY(.8).XY(340, 180)
                    })

                //this shows over/out vs rollover/rollout
                //over/out get retriggered when switching between connected sprites
                //rollover/rollout does not because it is still touching 'something'

                c.on('mouseover', function () {
                    c.X(10, '+');
                    $l('v: ' + vn++)
                })
                c.on('rollover', function () {
                    c.X(20, '-');
                    $l('rv: ' + rvn++)
                })
                c.on('mouseout', function () {
                    c.Y(10, '+');
                    $l('o: ' + on++)
                })
                c.on('rollout', function () {
                    c.Y(20, '-');
                    $l('ro: ' + ron++)
                })

            }
        ).MV(40)


        stage.container(function (container, stage) {

            container.X(700)
            container.mug(function (bm) {
                bm.sXY(.8).XY(200, 80)
            })

            container.mug(function (bm) {
                bm.sXY(.8).XY(100, 280)
            })

            container.mug(function (bm) {
                bm.sXY(.8).XY(340, 180)
            })

            //this example shows which sprites are acted upon with over/rollover
            //over only affects one
            //rollover affects ALL
            //if you enter a sprite from outside, they all grow (via rollover),
            //and the one sprite grows double (via over)


            container.on('mouseover', function () {
                $l('mouseover')
                this.sXY(.01, '+')
            })

            container.on('rollover', function () {
                $l('rv')
                this.sXY(.01, '+')
            })

            container.on('mouseout', function () {
            })
            container.on('rollout', function () {
            })


            // in summary,
            // rollover sees all touching sprites as just one sprite, ignoring crossing the mouse over their boundaries..
            // BUT, they will all recieve events separately

        }).MV(40) //??? mouse events? speed for some mouse checking thing
        stage.container(function (container, stage) {

            container.x = 1400

            container.bm('me', function (bm) {


                //make the little me slide the entire container
                //it acts as a handle! (for its container)
                lit = bm.sXY(.2).XY(100, 80)

                SL(bm, container)

                container.bm('me', function (bm) {
//big me will scale the little me
                    big = bm.sXY(2).XY(100, 180)

                    SC(bm, lit)

                    container.bm('me', function (bm) {
                        bm.sXY(.6).XY(150, 180)
                        SL(bm)
                        RT(bm, big)
                    })
                })

            })


//guy slides stage
            container.bm('guy', function (bm) {
                bm.sXY(.4).XY(100, 180)
                SL(bm, stage)
            })


        })


    }
    MATRIX0 = function () {

// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')
// SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')

        z()

        $l('matrix')

        $.div('blue', 50, 50).A()

        stage = s = createjs.stage(1600, 1000).A().tick()


        // on stage enter, change background color, though you
        // cant see it here because stage fills screen
        // this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
        stage.on('mouseenter', function () {
            $('body').C($r())
        })

        stage.A(container = c = new createjs.Container())

        container.bm('me', function (bm) {
            //b.sxy(.2).xy(100,80)

            //b.o('$', fL('lit'), '/')  //on click, log('lit'), just once (remove listener)!

        })


        //make a container
        stage.ct(function (c, s) {

            //the little me clicks do not hit the 'big' me underneath it.  that's normal.
            //but it does hit the container.  but this example shows off 'remove', so it only hits once
            //however, it continues to propogate on to the container. hmmm..


// the middle size me demonstrates stopPropogation
// if you click it, the container does not feel the click
            c.bm('me', function (b) {
                b.sXY(.4).XY(100, 180)

                //b.o('$', fL('mid'), '-')  //on click, log('mid'), and stop prop

            })


            c.b('me', function (b) {
                b.sXY(1.5)
                // b.o('$',fL('big'))  //on click, log('big')

            })

            //on click, log('con')
            //c.o('$',  fL('con'))

        })

        stage.ct(function (c) {
            var vn = 0, rvn = 0, on = 0, ron = 0
            c.X(200)
            c.mug(function (b) {
                b.sXY(.8).XY(200, 80)
            })
            c.mug(function (b) {
                b.sXY(.8).XY(100, 280)
            })
            c.mg(function (b) {
                b.sXY(.8).XY(340, 180)
            })
            //this shows over/out vs rollover/rollout
            //over/out get retriggered when switching between connected sprites
            //rollover/rollout does not because it is still touching 'something'
            // c.o('v',function(){c.x(10,'+');$l('v: '+vn++)})
            //c.o('rv',function(){c.x(20,'-');$l('rv: '+rvn++)})
            // c.o('o',function(){c.y(10,'+');$l('o: '+on++)})
            //  c.o('ro',function(){c.y(20,'-');$l('ro: '+ron++)})
        })//.MV(40)
        st.ct(function (c, s) {
            c.x(700)
            c.mg(function (b) {
                b.sXY(.8).XY(200, 80)
            })
            c.mg(function (b) {
                b.sXY(.8).XY(100, 280)
            })
            c.mg(function (b) {
                b.sXY(.8).XY(340, 180)
            })
            //this example shows which sprites are acted upon with over/rollover
            //over only affects one
            //rollover affects ALL
            //if you enter a sprite from outside, they all grow (via rollover),
            //and the one sprite grows double (via over)
            c.o('v', function (g, e) {
                $l('v')
                g.sXY(.01, '+')
            })
            c.o('rv', function (g, e) {
                $l('rv')
                g.sXY(.01, '+')
            })
            c.o('o', function (q, e, g) {
            })
            c.o('ro', function (q, e, g) {
            })
            // in summary,
            // rollover sees all touching sprites as just one sprite, ignoring crossing the mouse over their boundaries..
            // BUT, they will all recieve events separately
        }).MV(40)

        st.ct(function (ct, st) {
            ct.X(1400)
            ct.bm('me', function (bm) {
                //make the little me slide the entire container
                //it acts as a handle! (for its container)
                lit = bm.sXY(.2).XY(100, 80)
                SL(bm, ct)
                ct.bm('me', function (bm) {
//big me will scale the little me
                    big = bm.sXY(2).XY(100, 180)
                    SC(bm, lit)
                    ct.bm('me', function (bm) {
                        bm.sXY(.6).XY(150, 180)
                        SL(bm)
                        RT(bm, big)
                    })
                })
            })

//guy slides stage
            ct.bm('guy', function (bm) {
                bm.sXY(.4).XY(100, 180)
                cjs.bindSlide(bm, st)
            })
        })
    }

    MATRIX = function () {// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')//SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')
        W()
        Q(function () {
            stage = w.i
            me = w.i.qB('me')
            // on stage enter, change background color, though you
            // cant see it here because stage fills screen
            // this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
            w.i.on('mouseenter', function () {
                $('body').C($r())
            })
            w.i.A(ct = $Ct())
            me.sXY(.2).XY(100, 80)
            me.on('click', function () {
                $l('lit')
            }, this, true) //just once
            ct = w.i.ct()
            me = ct.qB('me')
            //future: c.bm('me', .4, function(bm){})
            me.sXY(.4).XY(100, 180)
            me.on('click', function (e) {
                $l('mid');
                e.stopPropagation()
            })
            me = ct.qB('me')
            me.sXY(1.5).on('click', function () {
                $l('big')
            })
            ct.on('click', function () {
                $l('con')
            })

            /*
             //make a container
             w.i.ct(
             function(container, stage){
             //the little me clicks do not hit the 'big' me underneath it.  that's normal.
             //but it does hit the container.  but this example shows off 'remove', so it only hits once
             //however, it continues to propogate on to the container. hmmm..

             // the middle size me demonstrates stopPropogation
             // if you click it, the container does not feel the click


             */

        })

    }
    MOUSEENTERSTAGE = function () {
        W()._(function () {
            w.i.qB('me')
            w.i.on('mouseenter', function () {
                $l('once')
                $('body').A('once<br>')
            }, null, true)

            w.i.on('mouseenter', function () {
                $l('many')
                $('body').A('many<br>')
            }, null, false)


        })
    }
    HANDLEEVENT = function () {
        W()._(function () {

            b = w.i.qB('me')

            cb = b.on('pressmove', function () {
                this.x++
            })

            guy = w.i.qB('guy')

            guy.handleEvent = function () {
                this.y++
            }

            guy.on('pressmove', b)


            REMOVEEVENT = function () {
                z()
                s = createjs.stage(500, 500).A().tick()
                s.bm('me', function (b) {
                    me = b
                    cb = b.on('pressmove', function () {
                        this.x++
                    })
                })
                s.bm('guy', function (b) {
                    b.handleEvent = function () {
                        this.y++
                        me.off('pressmove', cb)
                    }
                    b.on('pressmove', b)
                })
            }
        })
    }
    BUBBLE = function () {
        z()
        stage = cjs.stage(500, 500).tick().A()
        output = new createjs.Text(
            "try clicking on the background vs the label text\n\nthe background & label are both inside of a Container named 'button'",
            "13px courier").lWH(280, 13).XY(190, 10)
        background = new createjs.Shape().N("background")
        background.graphics.f("red").drawRoundRect(0, 0, 150, 60, 10)
        label = $T("click me!", "bold 24px Arial", "#FFFFFF").XY(150 / 2, 60 / 2)
            .N('label')
            .tA("center")
            .tB("middle")
        button = $Ct().XY(20).N('button').A(background, label)
        // setting mouseChildren to false will cause events to be dispatched directly from the button instead of its children.
        // button.mouseChildren = false;
        stage.A(button, output)
        // set up listeners for all display objects, for both the non-capture (bubble / target) and capture phases:
        _.e([stage, button, label, background], function (tg) {
            tg.on("click", handleClick, false);
            tg.on("click", handleClick, true)
        })
        w.i.u()
        function handleClick(e) {
            if (e.currentTarget == stage && e.eventPhase == 1) {
                // this is the first dispatch in the event life cycle, clear the output.
                output.text = "target : eventPhase : currentTarget\n"
            }
            output.text += e.target.name + " : " + e.eventPhase + " : " + e.currentTarget.name + "\n";
            if (e.currentTarget == stage && e.eventPhase == 3) {
                // this is the last dispatch in the event life cycle, render the stage.
                stage.update()
            }
        }
    }

//SPACE BOWLING

    BOWL = function () {
        stage = s = createjs.stage(1000, 1000).tick().A()
        //append a container to the stage
        container = c = new createjs.Container()
        stage.A(container)
        plX = stage.W() / 2
        plY = 150
        plR = 100
        plr = 75 // this seems to determine the radius of the 'cluster' of balls
        oRng = 8 //outer ring
        nRng = 3// number of rings
//when set to three, it seems like middle ring is 3 less than outer, and inner ring is 1
        cir = cjs.cir(plX, plY, plR, 'yellow')
        ct.A(circle) // cr = Hx().c(plR,'y').xy(plX,plY)
        rngSp = plr / (nRng - 1)
        aA = []
        var ast = function (x, y, r, m, f) {
            return {
                x: x, y: y, r: r,
                m: m,  //?
                f: f,
                vX: 0, vY: 0, player: false
            }
        }

        _.t(nRng, function (r) {
            var crR = 0, ang = 0, rngR = 0
            if (r == nRng - 1) {
                crR = 1
            }
            else {
                crR = oRng - (r * 3)
                ang = 360 / crR
                rngR = plr - (rngSp * r)
            }
            _.t(crR, function (a) {
                var x = 0, y = 0
                if (r == nRng - 1) {
                    x = plX;
                    y = plY
                }
                else {
                    x = plX + (rngR * cos((ang * a) * PI / 180))
                    y = plX + (rngR * sin((ang * a) * PI / 180)) - 350
                }
                aA.push(ast(x, y, 10, 5, 0.95))
                ct.A(
                    cjs.cir(10, 'z').XY(x, y))
            })
        })
    }
    GRID = function () {
        z()

        st = s = createjs.stage(1000, 1000).tick().A()
        ct = c = new createjs.Container()

        st.A(ct)


        cjs.bindSlide(ct)

        rows = 5;
        cols = 6;
        sqP = 12;
        sqS = 80

        sqSP = sqS + sqP

        _.t(rows * cols, function (i) {
            drawSquare(ct,
                sqSP * (i % cols),
                sqSP * M.floor(i / cols)
            )
        })
        function drawSquare(container, x, y) {
            var rectangle = new cjs.Shape()
            ct.A(rectangle)
            rectangle.graphics.beginFill($r()).drawRect(5, 5, 70, 70)
            if (x) {
                rectangle.X(x)
            }
            if (y) {
                rectangle.Y(y)
            }
            return rectangle
        }
    }
    testShape = function () {
        z()
        st = cjs.stage(600).tick().A()
        h = new cjs.Shape()
        st.A(h)
        h.graphics.f('red').s('black').dc(400, 400, 200).dr(100, 0, 200, 200)
    }

    TANGLE = function () {
        z()

        a = $.divA('r', 50, 50).XY(50).A().pad(10)

        b = $.divA('b', 100, 100).XY(100).A().pad(10)

        c = $.divA('g', 200, 200).XY(200).A().pad(10)

        d = $.divA('y', 400, 400).XY(400).A().pad(10)

        y = function (aa, bb, cc, dd) {


            if (aa && U(bb)) {
                aa.A().P('a')
            }

            if (bb) {
                bb.A(aa.P('static'))
            }

            if (dd) {
                dd.A(cc.P('s'))
            }

        }


    }

    ZX = function () {

        z()
        a = $.editDiv().A().C('a')
        b = $.editDiv().A().C('b')
    }

    BORDERS = function () {
        z()
        change = function () {
            $.i('me', 100).A().borderColor('g').borderStyle('dashed')//.borderWidth(20)
                .J({"border-top-width": 10}, 1000)
                .J({"border-bottom-width": 10}, 1000)
                .J({"border-left-width": 10}, 1000)
                .J({"border-right-width": 10}, 1000)
                .J({"padding-top": 10}, 1000)
                .J({"padding-bottom": 10}, 1000)
                .J({"padding-left": 10}, 1000)
                .J({"padding-right": 10}, 1000)
                .J({"margin-top": 10}, 1000)
                .J({"margin-bottom": 10}, 1000)
                .J({"margin-left": 10}, 1000)
                .J({"margin-right": 10}, 1000)
                .J({"margin-top": 0}, 1000)
                .J({"margin-bottom": 0}, 1000)
                .J({"margin-left": 0}, 1000)
                .J({"margin-right": 0}, 1000)
                .J({"padding-top": 0}, 1000)
                .J({"padding-bottom": 0}, 1000)
                .J({"padding-left": 0}, 1000)
                .J({"padding-right": 0}, 1000)
                .J({"border-top-width": 0}, 1000)
                .J({"border-bottom-width": 0}, 1000)
                .J({"border-left-width": 0}, 1000)
                .J({"border-right-width": 0}, 1000)
        }

        $.$$(function () {
            z();
            _.t(10, change)
        })
        _.t(10, change)
    }
    BORDERS1 = function () {

        change = function () {

            $.i('me').WH(100).A().C('g').bs('-')  //bs??
                .j({bt: 40}, 1000)
                .j({bb: 40}, 1000)
                .j({bl: 40}, 1000)
                .j({br: 40}, 1000)
                .j({gt: 40}, 1000)
                .j({gb: 40}, 1000)
                .j({gl: 40}, 1000).j({gr: 40}, 1000).j({mt: 40}, 1000)
                .j({mb: 40}, 1000).j({ml: 40}, 1000).j({mr: 40}, 1000)
                .j({mt: 0}, 1000).j({mb: 0}, 1000).j({ml: 0}, 1000).j({mr: 0}, 1000)
                .j({gt: 0}, 1000).j({gb: 0}, 1000).j({gl: 0}, 1000).j({gr: 0}, 1000)
                .j({bt: 0}, 1000)
                .j({bb: 0}, 1000).j({bl: 0}, 1000).j({br: 0}, 1000)
        }

        m$$(function () {
            z();
            _.t(10, change)
        })
        _.t(10, change)
    }

    $.fn.animloop = function () {
        var that = this
        this.show("slow")
        this.animate({"marginLeft": "300px"}, 2000)
            .animate({"marginLeft": "0px"}, 2000)
        this.hide("slow", function () {
            that.animloop()
        })
    }

    CORNERS = function () {
        $.fn.grow = function () {

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
        //  dva(2, 2, 2, 2 )
        d = $.dA(200, 200).XY(200)

        d.A(
            $.divA('red', 20, 20).top(-10).left(-10),
            $.divA('yellow', 20, 20).bottom(-10).right(-10),
            $.divA('green', 20, 20).top(-10).right(-10),
            $.divA('blue', 20, 20).bottom(-10).left(-10)
        )
        i = $.divF('purple')
            .col('w')
            .fontSize(20).al(.2)
            .textAlign('center')
            .width('100%').top(100)
        i.H(W() + ' * ' + H())
        Z(function () {
            i.H(W() + ' * ' + H())
        })
        $.$(function () {
            rat(function () {
                co()
            }, 10)
        })
        i.grow()
    }

    cjs.utils = function () {

        cjs.extend = function (subclass, superclass) {
            function o() {
                this.constructor = subclass
            }

            o.prototype = superclass.prototype;
            return (subclass.prototype = new o())
        }


        cjs.promote = function (subclass, prefix) {


            var subP = subclass.prototype, supP = (Object.getPrototypeOf && Object.getPrototypeOf(subP)) || subP.__proto__;
            if (supP) {
                subP[(prefix += "_") + "constructor"] = supP.constructor; // constructor is not always innumerable
                for (var n in supP) {
                    if (subP.hasOwnProperty(n) && (typeof supP[n] == "function")) {
                        subP[prefix + n] = supP[n];
                    }
                }
            }
            return subclass
        }

    }
    cjs.slider = function () {

        //Simple slider control for EaselJS examples.


        function Slider(min, max, width, height) {
            this.Shape_constructor();

            // public properties:
            this.min = this.value = min || 0;
            this.max = max || 100;

            this.width = width || 100;
            this.height = height || 20;

            this.values = {};

            this.trackColor = "#EEE";
            this.thumbColor = "#666";

            this.cursor = "pointer";
            this.on("mousedown", this._handleInput, this);
            this.on("pressmove", this._handleInput, this);
        }

        var p = createjs.extend(Slider, createjs.Shape);


// public methods:
        p.isVisible = function () {
            return true;
        };

        p.draw = function (ctx, ignoreCache) {
            if (this._checkChange()) {
                var x = (this.width - this.height) * Math.max(0, Math.min(1, (this.value - this.min) / (this.max - this.min)));
                this.graphics.clear()
                    .beginFill(this.trackColor).drawRect(0, 0, this.width, this.height)
                    .beginFill(this.thumbColor).drawRect(x, 0, this.height, this.height)
            }
            this.Shape_draw(ctx, true)
        }


// private methods:
        p._checkChange = function () {
            var a = this, b = a.values;
            if (a.value !== b.value || a.min !== b.min || a.max !== b.max || a.width !== b.width || a.height !== b.height) {
                b.min = a.min;
                b.max = a.max;
                b.value = a.value;
                b.width = a.width;
                b.height = a.height;
                return true;
            }
            return false
        }


        p._handleInput = function (evt) {
            var val = (evt.localX - this.height / 2) / (this.width - this.height) * (this.max - this.min) + this.min;
            val = Math.max(this.min, Math.min(this.max, val));
            if (val == this.value) {
                return;
            }
            this.value = val;
            this.dispatchEvent("change")
        }


        window.Slider = createjs.promote(Slider, "Shape");

    }

    PROMOTE = function () {
        z()
        cjs.utils()
        function ClassA(name) {
            this.name = name
        }

        ClassA.prototype.greet = function () {
            return "Hello " + this.name
        } //a = new ClassA('john')
        function ClassB(name, punctuation) {

            this.ClassA_constructor(name)

            this.punctuation = punctuation
        }

        cjs.extend(ClassB, ClassA)
        ClassB.prototype.greet = function () {

            return this.ClassA_greet() + this.punctuation

        }
        cjs.promote(ClassB, "ClassA")
        b = new ClassB("World", "!?!")
        $l(b.greet())  // Hello World!?!
    }
    TWOSTAGES = function () {
        z()


        $.header().K("EaselJS").A(
            $.h1('nextStage'),
            $.p("This is an example")).A()


        c1 = $.canvas('y', 540, 260).id('canvasOne').P('a').top(0)
            .right(0).bor('1px solid grey').A() // background: 'none',

        c2 = $.canvas('o', 540, 260).id('canvasTwo').P('a')
            .left(0).bottom(0).bor('1px solid grey').A()// background: 'none'
        $.div(960, 400).K("canvasDiv").P('relative').A(c1, c2).A()

        bottomStage = stageSetup("canvasOne", handleEvt).N("bottomStage").eMO().A(makeSquare(30, 95, "red", handleEvt))
        //bottomStage.enableDOMEvents(false);	// you can set this if the bottom stage is completely covered by the top stage, to reduce the number of active event listeners.
        bottomStage.text = new cjs.Text("", "15px monospace", "#111").XY(195, 30).lineH(16.7).a2(bottomStage)


        topStage = stageSetup("canvasTwo", handleEvt)
            .N("topStage").eMO()
            .A(makeSquare(375, 30, "pink", handleEvt))
            .next(bottomStage)

        topStage.text = new cjs.Text("", "15px monospace", "#111").XY(30).lineH(16.7).a2(topStage)


        function stageSetup(canvasName, handler) {
            s = stage = new cjs.Stage(canvasName).tick()
            //stage.addEventListener("stagemousemove", handler);	// too noisy
            _.e(["stagemousedown", "stagemouseup", "mouseleave", "mouseenter"], function (ev) {
                s.on(ev, handler)
            })
            s.log = []
            return s
        }

        function makeSquare(x, y, color, handler) {
            var shape = cjs.shape().N('square').XY(x, y)
            shape.graphics.f(color).dr(0, 0, 135, 135)
            var cont = cjs.container().N('container').A(shape)
            _.each(["mouseover", "mouseout", "dblclick", "click"], function (ev) {
                cont.on(ev, handler)
            })
            cont.cursor = "pointer"
            return cont
        }

        function handleEvt(evt) {
            var target = evt.target,
                stage = target.getStage(),
                log = stage.log
            log.push(evt.type + " on " + target.name + " x:" + evt.stageX.toFixed(0)
            + " y:" + evt.stageY.toFixed(0))

            while (log.length > 12) {
                log.shift()
            }

            stage.text.text = log.join("\n")
            if (evt.type == "mouseover") {
                target.alpha = 0.5
            }
            if (evt.type == "mouseout") {
                target.alpha = 1
            }
        }


    }
    TRANSFORMSIMPLE = function () {
        z()
        angle = 0
        img = $.img('me', handleImageLoad)[0]
        function stop() {
            T.removeEventListener("tick", tick)
        }

        function handleImageLoad() {
            canvas = $.canvas('p', 960, 400).id("testCanvas").A()

            stage = cjs.stage(canvas)

            stage.autoClear = true

            bmp = cjs.Bm(img).rXY(img.width >> 1, img.height >> 1)
                .XY(canvas.W() >> 1, canvas.H() >> 1).sXY(0.1)
            stage.A(bmp).u()

            T.timingMode = cjs.Ticker.RAF
            T.t(tick)
        }


        function tick(event) {
            angle += 0.01
            var value = M.s(angle) * 360
            bmp.rT(value).sXY(value / 360)
            stage.update(event)
        }
    }
    TRANSF = function () {
        z()

        degToRad = Math.PI / 180;

        cjs.testCanvas()
        cjs.sharedCode()
        cjs.utils()

        cjs.slider()

        examples.showDistractor()

        stage = new createjs.Stage("testCanvas")
        stage.enableMouseOver();
        createjs.Touch.enable(stage);
        stage.mouseMoveOutside = true;

        var img = new Image();
        img.onload = handleImageLoad;
        img.src = "/chicks.png";


        function handleImageLoad(evt) {
            examples.hideDistractor();

            var img = evt.target, imgWidth = img.width, imgHeight = img.height, sliceCount = 6;

            sliceWidth = imgWidth / sliceCount;
            sliceContainer = new createjs.Container();
            sliceContainer.x = stage.canvas.width / 2;

            for (var i = 0; i < sliceCount; i++) {
                var slice = new createjs.Bitmap(img);
                slice.sourceRect = new createjs.Rectangle(sliceWidth * i, 0, sliceWidth, imgHeight);
                slice.cache(0, 0, sliceWidth, imgHeight);
                slice.filters = [new createjs.ColorMatrixFilter(new createjs.ColorMatrix())];
                sliceContainer.addChild(slice);
            }

            var slider = new Slider(0, 50, 200, 50).set({x: 20, y: 330, value: 25});
            slider.on("change", handleSliderChange, this);

            stage.addChild(sliceContainer, slider);
            updateEffect(slider.value);
        }

        function handleSliderChange(evt) {
            updateEffect(evt.target.value);
        }


        function updateEffect(value) {
            var l = sliceContainer.getNumChildren();

            for (var i = 0; i < l; i++) {
                var slice = sliceContainer.getChildAt(i);
                slice.y = Math.sin(value * degToRad) * -sliceWidth / 2;
                if (i % 2) {
                    slice.skewY = value;
                } else {
                    slice.skewY = -value;
                    slice.y -= sliceWidth * Math.sin(slice.skewY * degToRad);
                }


                slice.x = sliceWidth * (i - l / 2) * Math.cos(slice.skewY * degToRad);
                slice.filters[0].matrix//.setColor(Math.sin(slice.skewY * degToRad) * -80);
                slice.updateCache();
            }
            stage.update();
        }


    }
    DISTRACTOR = function () {
        z()

        cjs.testCanvas()
        cjs.sharedCode()
        cjs.utils()

        cjs.slider()

        examples.showDistractor()

        stage = new createjs.Stage("testCanvas")
    }
    cjs.testCanvas = function () {
        return $.div().A($.canvas(960, 400).id("testCanvas")).A()

    }
    cjs.sharedCode = function () {


        if (document.body) {
            setupEmbed()
        }
        else {
            document.addEventListener("DOMContentLoaded", setupEmbed)
        }


        function setupEmbed() {
            if (window.top != window) {
                document.body.className += " embedded"
            }
        }

        var o = window.examples = {}

        o.showDistractor = function (id) {
            var div = id ? document.getElementById(id) : document.querySelector("div canvas").parentNode;
            div.className += " loading"
        }


        o.hideDistractor = function () {
            var div = document.querySelector(".loading")
            div.className = div.className.replace(/\bloading\b/)
        }


    }
    ALPHAMASKREVEAL = function () {
        z();
        cjs.testCanvas()


        cjs.sharedCode()


        var stage, isDrawing, drawingCanvas, oldPt, oldMidPt, displayCanvas,
            image, bitmap, maskFilter, cursor, text, blur

        examples.showDistractor()

        image = new Image();
        image.onload = handleComplete
        image.src = "/chicks.png"

        stage = new createjs.Stage("testCanvas");
        text = new createjs.Text("Loading...", "20px Arial", "#FFF");
        text.set({x: stage.canvas.width / 2, y: stage.canvas.height - 40});
        text.textAlign = "center"

        function handleComplete() {
            examples.hideDistractor();
            createjs.Touch.enable(stage);
            stage.enableMouseOver();

            stage.addEventListener("stagemousedown", handleMouseDown);
            stage.addEventListener("stagemouseup", handleMouseUp);
            stage.addEventListener("stagemousemove", handleMouseMove);
            drawingCanvas = new createjs.Shape();
            bitmap = new createjs.Bitmap(image);

            blur = new createjs.Bitmap(image);
            blur.filters = [new createjs.BlurFilter(24, 24, 2), new createjs.ColorMatrixFilter(new createjs.ColorMatrix(60))];
            blur.cache(0, 0, 960, 400);

            text.text = "Click and Drag to Reveal the Image.";

            stage.addChild(blur, text, bitmap);
            updateCacheImage(false);

            cursor = new createjs.Shape(new createjs.Graphics().beginFill("#FFFFFF").drawCircle(0, 0, 25));
            cursor.cursor = "pointer";

            stage.addChild(cursor);
        }

        function handleMouseDown(event) {
            oldPt = new createjs.Point(stage.mouseX, stage.mouseY);
            oldMidPt = oldPt;
            isDrawing = true;
        }

        function handleMouseMove(event) {
            cursor.x = stage.mouseX;
            cursor.y = stage.mouseY;

            if (!isDrawing) {
                stage.update();
                return;
            }

            var midPoint = new createjs.Point(oldPt.x + stage.mouseX >> 1, oldPt.y + stage.mouseY >> 1);

            drawingCanvas.graphics.setStrokeStyle(40, "round", "round")
                .beginStroke("rgba(0,0,0,0.2)")
                .moveTo(midPoint.x, midPoint.y)
                .curveTo(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y);

            oldPt.x = stage.mouseX;
            oldPt.y = stage.mouseY;

            oldMidPt.x = midPoint.x;
            oldMidPt.y = midPoint.y;

            updateCacheImage(true);
        }

        function handleMouseUp(event) {
            updateCacheImage(true);
            isDrawing = false;
        }

        function updateCacheImage(update) {
            if (update) {
                drawingCanvas.updateCache();
            } else {
                drawingCanvas.cache(0, 0, image.width, image.height);
            }

            maskFilter = new createjs.AlphaMaskFilter(drawingCanvas.cacheCanvas);

            bitmap.filters = [maskFilter];
            if (update) {
                bitmap.updateCache(0, 0, image.width, image.height);
            } else {
                bitmap.cache(0, 0, image.width, image.height);
            }

            stage.update();
        }

    }
    SSBUILDER = function () {
        z();
        cjs.testCanvas()
        //canvas=document.getElementById("testCanvas")
        s = stage = cjs.stage(["testCanvas"]).tick()
        cjs.Ticker.setFPS(30)

        scale = 0.4

        mc = cjs.gunner().drag()

        w = mc.nominalBounds.width * scale
        mc.transform(100 + w / 2, 100, scale, scale).a2(s)

        label1 = new cjs.Text("MovieClip-vector", "14px Arial", "#111").a2(s).textA("center").transform(mc.x, 30)
        label2 = label1.clone().a2(stage).T("Sprite-raster").X(w + 50, '+')

        b = builder = cjs.builder(mc)

        b.Z(scale).maxW(1024)

        b.async(function (ev) {
            sprite = cjs.sprite(ev.target.spriteSheet)
            sprite.transform(mc.x + w + 50 || 0, mc.y).a2(s).drag()
            mc.gotoAndPlay(0)
            sprite.gotoAndPlay(0)
        })

        img = builder._data.images[0]

        $('body').A(img)

    }
    function Alien(x, n, n1) {

        if (N(n1)) {
            var a = []
            _.times(n1, function () {
                a.push(Bad(x, n))
            })
            return a
        }

        if (N(n)) {
            return Bad(x).du(n)
        }

        var b = {
            x: _.random(1200),
            y: _.random(600),
            radius: _.random(15),
            vx: _.random(10) - 5,
            vy: _.random(10) - 5
        }

        b.draw = function () {
            //x.cir(b.x,b.y,b.r, 'rgba(124,252,0,0.5)' ,'z')
            x.circ(b.x, b.y, b.r, 'g', 'z')
            x.circ(b.x, b.y, 15, 'o', 'z')

            return b
        }


        b.update = function () {

            b.radius *= 1.005

            b.x = warp(0, 1200, 20)(b.x + b.dx)

            b.y = warp(0, 600, 20)(b.y + b.dy)

            return b
        }


        b.drawUpdate = b.du = function (n, n2) {
            if (N(n)) {
                return setInterval(function () {
                    b.du()
                }, n)
            }

            return b.draw().update()
        }

        return b
    }

    function Coin(x, n, n1) {

        if (N(n1)) {
            var a = [];
            _.t(n1, function () {
                a.push(Coin(x, n))
            });
            return a
        }

        if (N(n)) {

            return Coin(x).du(n)
        }

        var c = {
            x: _.random(1200),
            y: _.random(0, 600),

            r: 10,

            vx: _.random(0, 10) - 5,
            vy: _.random(0, 10) - 5
        }

        c.draw = function () {
            var c = this
            x.cir(c.x, c.y, c.r, 'b', 'y')
            return c
        }
        c.update = function () {
            var c = this
            c.x = warp(0, 1200, 20)(c.x + c.vx)
            c.y = warp(0, 600, 20)(c.y + c.vy)
            return c
        }

        c.drawUpdate = function (n, n2) {
            if (N(n)) {
                return setInterval(function () {
                    c.drawUpdate()
                }, n)
            }

            return c.draw().update()
        }

        return c
    }

//bluecircle game function //never used
    coinHits = function () {

        _.e(CoinsArray,
            function (coin, coinId) {
                //??? hitTest?
                if (xyc(coin.x, coin.y, game)) {
                    delete CoinsArray[coinId]
                    game.coinScore += 1
                }
            })


        _.e(
            As, function (a, A) {
                if (
                    xyc(g.x, g.y, a)) {
                    g.h -= 1
                }

                _.e(Bs, function (b, B) {
                    if (xyc(b.x, b.y, a)) {
                        delete Bs[B]
                        delete As[A]
                        As.push(bad())
                    }
                })
            })

    }

    SpeechBubble = function (t, x, y) {
        var args = G(arguments)

        ct = $Ct()

        // if( !window['uni'] ){ alert('the universe is missing!'); return }

        text = args[0] || 'hi!'  //so if you don't pass in coords, it relies on 'you'

        x = args[1] || you.x

        y = args[2] || you.y


        uni.A(ct)

        ct.cir(x - 150, y - 150, 100, 'w')
            .cir(x - 50, y - 50, 30, 'w')
            .cir(x - 20, y - 20, 10, 'w')
            .T(t, "20px Arial", "b", x - 200, y - 200)


        $.in(10, function () {
            ct.rm()
        })
        ct.tw(
            [{a: 0, sxy: .1, x: x - 250, y: y - 250}, 20000]
        )
        //if(args.p){socket.emit('speechBubble', {text:t, x:x, y:y, u:_username })} //broadcast out your speech bubble

        return ct
    }
    universe = function () {

        guysArray = []
        fetchMugByMugId = fetchMugByUserModel2 = function (user, func) { //

            $.P('/getimagebyid', user.m, func)
        }
        fetchMugByUserModel = function (user, func) { //

            // $.post( '/dudX' , {d: user.m}, func)

            $.get('/mug/' + user.m, func)
        }
        fetchMugByUsername = function (username, func) {

            $.post('/mug', {u: username}, function (mug) {

                if (mug) {
                    func(mug)
                }

            })
        }

//relies on 'you'.. actually just makes a similar object

        guyLocation = function () {
            if (window['you']) {
                return {
                    u: _username,
                    username: _username,
                    x: you.x,
                    y: you.y
                }
            }
        }
        addGuy = function (username, bitmap) {
            //add guy to guysArray
            guysArray.push({
                u: username,
                username: username,
                bm: bitmap,
                bitmap: bitmap
            })

            //add guy's bitmap to universe
            bitmap.rC().XY(600).sXY(.4)
            // bitmap.o('$$', function(bm){   bm.XX(); socket.emit('X', _username) })
            uni.A(bitmap)

        }
//get guy object by username or user.username
//guy object has {user/username, x, y}
//-- so this finds a guy in the guysArray or returns false if he aint there

        getGuy = function (username) {
            //get the username
            username = O(username) ? username.u : username

            //do this as a reduce

            var theGuy = false

            _.each(guysArray, function (guy) {

                if (guy.u == username) {
                    theGuy = guy
                }

            })

            return theGuy
        }
//pass in a user / username to update your image of them
//or.. pass nothing to update everyone on YOU

        updateGuy = function (user) {

            if (user) {

                var bitmap = getGuy(user.u).bitmap

                if (bitmap) {
                    bitmap.XY(user.x, user.y)
                }

            }

            else {
                socket.emit('bc', 'updateGuy', guyLocation())
            }
        }

        inviteToUniverse = function (toWho) {
            socket.emit('bc', 'invite', {from: _username, toWho: toWho})
        }
//this will have the server broadcast.emit 'accept'
        acceptUniverseInvitation = function (toWho) {//$l(_username + ' accepts from ' + toWho)
            socket.emit('bc', 'acceptUniverseInvitation', {from: _username, toWho: toWho})
        }

        startUniverse = function (username) {
            $l('startUniverse with: ' + username)
            if (!window['uni']) {
                $l('no uni  -- calling UNIVERSE()');
                UNIVERSE()
            }
            else {
                $l('uni found. no need to call UNIVERSE')
            }
            var guy = getGuy(username)
            if (guy) {
                $l('we have guy: ' + guy)
            }
            else {
                $l('no guy')
                fetchMugByUsername(username,
                    function (userMug) {
                        $Bm(userMug, function (bitmap) {
                            addGuy(username, bitmap)
                        })
                    })
            }
        }
        UNIVERSE = function () {
            z()
            uni = $St(1000, 800).t().A().bgI('/beach.jpg')
            uni.mug(
                function (b) {
                    you = b.rCenter().XY(600).sXY(.4).drag()
                    b.on('dblclick', function (bm) {
                        bm.rm()
                        socket.emit('X', _username)
                    })
                    guysArray.push({u: _username, b: you})
                    $.ev(.1, updateGuy)
                    div = $.d('blue', 1000, 'auto').prependTo($('body'))
                    div.A(
                        $.br(3),
                        $.ip('...', 'tx').id('textinput'),
                        $.bt('send', function () {
                            SpeechBubble($('#textinput').V(), '+')
                        })
                    )
                })
            userHolder = $.d('z').A()
            $.get('/users', function (users) {
                var theRow = $.R().A()
                _.e(users, function (u) {
                    if (u.mugURL) {
                        var i = $.i(u.mugURL).WH(100).$(function () {
                            $l(user.u);
                            inviteToUniverse(u.u)
                        })

                        userHolder.A(i)
                    } else {
                        alert('no mugURL!')
                    }
                    // fetchMugByMugId( user,  function(userMug){
                    // theRow.A( $.thumbnail( $.span(user.u), userMug).WH(200).click(  function(){ inviteToUniverse(user.u)   }) )})
                })
            })
        }


//RECIEVE speech bubble
        socket.on('speechBubble', function (speech) {
            if (getGuy(speech.u)) {
                SpeechBubble(speech.t, speech.x, speech.y)
            }
        })
        socket.on('updateGuy', function (guy) {
            updateGuy(guy)
        })
        socket.on('acceptUniverseInvitation', function (data) {
            d = data
            //if it was YOUR invitation that was accepted
            if (_username == data.toWho) {
                startUniverse(data.from)
            }
            // here u should really just be able to 'addUser'
        })
        socket.on('invite', function (invitation) {
            $l('invite')  //dd=invitation
            inviteFunction = function (userMug) {
                popInvitation = $.pop(
                    $.d().A(
                        $.i(userMug).W(200).H(200),
                        $.h1('chat with ' + invitation.from + '?'),
                        $.bt('ya', function () {

                            popInvitation.modal('hide')

                            startUniverse(invitation.from)
                            //so u are just adding them in?
                            // ah the function also supposedly takes into account the app not even being open
                            // i could nix that for now

                            acceptUniverseInvitation(invitation.from)

                        }),
                        $.bt('na', function () {
                            popInvitation.modal('hide')
                        })
                    )
                )
            }
            if (_username == invitation.toWho) {
                fetchMugByUsername(invitation.from, function (data) {
                    $l('wooooo');
                    inviteFunction(data)
                })
            }

        })
    };//universe()
}
$l('waapppppy')