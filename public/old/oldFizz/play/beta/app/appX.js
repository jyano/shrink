
$.fit = fit=function(a,b,c){

    return $.c( c||'r', b||700, b||700)
        .A().fit(a||'me')
        .drag()
}


fun=function(){
    Y={}

    Y.directTo = Y.load = load = function(a){  window.location= '/wap/' + a }
    Y.run = function(app){

        app = app.toUpperCase()

        app = Y[app] || window[app]

        if(app){app(); return true}

        return false}
    Y.render = function(page){



        page = Y[page]

        if(page){page(); return true}

        return false}

//$( appInit )
    function appInit(){//getUserName


        $.getJSON('/loggedIn', function(username){
            $l('username: ' + username)
            Y._userName = _username = username
            if(username=='guest' || !username){

                return  Y.render('GuestPage')  //renderGuestPage();

            }  //usr=
            $.get('/getMug', function(mug){Y._userMug =  _userMug  = mug })// =m|mug
            socket.emit('id', username)
            socket.emit( 'joinRoom',  _username )
            Y.render('HomePage')})

    }


    Y.GuestPage =  function(){z('r')
        var container= $.containerDiv().A(
            $.headerDiv().A(
                $.ul().K( "nav nav-pills pull-right" ).A(
                    $.liA('home').K('active'),
                    $.liA('About'),
                    $.liA('Contact')),
                $.h1( 'jason yanofski presents..' )),
            $.jumbo(
                'a graphics-based real-time social gaming creativity web app','woo hoo!').A(
                $.buttonL('log in', LoginForm ).C('y','b'),
                $.span(' '),
                $.buttonL('sign up', SignUpForm).C('b','y')),
            $.row(
                $.h1('fun!'),
                $.div().A(
                    $.h4('graphics'),
                    $.p('cool cool cool'),
                    $.h4('social'),
                    $.p('cool cool'))))
        container.drag().C('o').opacity(.9).top(100).left(100)}
    Y.HomePage =  function(){

        WappyNav( $r()
        ) //load navigator

        Y.run( wappyApp )

        $.getJSON('/loggedIn',

            function(username){

                $l('----' + username)

                $('#uname').text( _username  = username)})

    }

    _SignUpForm = function(){

        var usernameInput= $.div().K('form-group').fontSize(20).name('username').A(
                $.label('username: ','username'),
                $.input().K('form-control').id('uname')
            ),


            passwordInput= $.div().K('form-group').A(
                $.label('password: ','password'),
                $.password().id('password')
            ).fontSize(20).name('password'),


            submit= $.button('sign up').type('submit').fontSize(16),

            verify = function(){
                return {
                    username:  username.find('input').val(),
                    password:  password.find('input').val()}
            },




            form = $.form().C('o').pad(4).A(
                usernameInput,  passwordInput,
                submit)



        form.submit(function(e){ e.preventDefault()

            username = usernameInput.find('input').val()

            password = passwordInput.find('input').val()



            $.post('/user', {

                username: username,
                password: password
            }, function(username){

                if(username==='guest'){
                    $('.modal').modal('toggle');
                    $.pop('try again.. idiot')
                }

                else {
                    Y.render('HomePage');
                    $.pop( 'welcome ' + username + '!' )
                }
            })

        })



        return form

    }
    _LoginForm = function(){


        var form = $.form().C('green').pad(4).A(
            $.formGroupDiv().A(
                $.label('username: ','username'),
                $.textInput('username')),
            $.formGroupDiv().A(
                $.label('password: ', 'password'),
                $.passwordInput('password')),
            $.submitInput( 'log in' )
        )

        form.submit(function(e){

            e.preventDefault()

            var formData = form.serializeJSON() // $l(formData)

            $.post('/login', formData, verifyLogin)

        })



        function verifyLogin( username ){

            if(username==='guest'){

                $('.modal').modal('toggle')

                $.pop('try again.. idiot')
            }

            else {Y.render('HomePage');

                $.pop( 'welcome '+ username + '!' )}

        }

        return form

    }
    LoginForm = function(){ $.pop( _LoginForm() ).drag() }
    SignUpForm = function(){ $.pop( _SignUpForm() ).drag() }

    Y.logOut = function(){
        $.getJSON('/logOut', function(){
            Y.render('GuestPage')})} //logOut =
    Y.clear  =function(){
        z();
        WappyNav()}//= clearApps = fres

    $.iconBar=function(){return $.span().K("icon-bar")}
    $.caret=function(){return $.span().K("caret")}
    $.fn.toggle=function(a){return this.attr("data-toggle", a)}
    $.fn.target=function(a){return this.attr("data-target", a)}

    Wappy = {}
// Wappy.nav makes a $.navbarCollapse and $.navbarHeader.  then it makes a $.navbar.
// it puts the navbarHeader and navbarCollapse in the navbar
//then it appends the navbar wrapped in a container
    Wappy.Nav = Wappy.nav = WappyNav=function(){z()

        var navbarCollapse =

            $.navbarCollapse().A(
                $.nav(
                    $.dropdown('create',[ 'upload','uploads','cutouts',  'edit', 'avatar','paint', 'filters','showcase',
                        'tween','tweenart', 'easing', 'pack','sprite','transform' ,
                        'can' ,'rub','fan' ]),
                    $.dropdown('youplay',[ 'bod', 'invaders','thrust', 'starstruck', 'massvelocitytest','contactevents',  'ninjatilemap','launcher',
                        'groupvsgroup','shooty','hit','space','maggots']),
                    $.dropdown('play',[ 'iso', 'connect','matrix', 'ship',  'circle','boxes','solar','canon','fullcan',
                        'tangle','corners','borders','gquery','grid', 'bowl',  'gamer', 'melon','meltut'  ]),
                    $.dropdown('share',[ 'universe',
                        'users', 'status' , 'messages','posts','chatrooms',
                        'ranky',  'profile', 'profiles','dirt','knocks', 'book','site','sorty','elements' ,'api' ,'object'   ]),
                    $.dropdown('box2d',[     'box2d', 'wheel','heads', 'cups','pinball',
                        'revdemo','shooter','thruster','jumper','warper' ])),
                $.navRight(
                    $.liA('logged: '+ _username),
                    $.liA('logout', Y.logOut)))



        $.container().A().A(
            $.navbar().A(
                $.navbarHeader('wappy', '/wap'), navbarCollapse ))

    }

    $.searchNavRight =  function(){

        return $.f().K("navbar-form navbar-right").A(
            $.d().K('form-group').A(
                $('<input>').K('form-control').attr('placeholder','search')
            ),    $.sm().A( $.glyph('search')))
    }


    $.dropdownToggle = function(a){return $.a( a ).K("dropdown-toggle").toggle("dropdown").A(  $.caret()  )}
    $.dropdownMenu=function(){
        var menu= $.ul().K("dropdown-menu")
        _.e(arguments,
            function(arg){
                menu.A(  liAWap(arg) )})
        return menu
        function liAWap(appName){
            return $.liA(appName,   function(){window.location='/wap/' + appName} )

        }}

    $.dropdown=function(a,b){
        var toggle=$.dropdownToggle(a)
        var menu= $.dropdownMenu.apply(this, b)
        return  $.li().K("dropdown").A(toggle, menu)}

//this a ul element
    $.nav=function(){
        var nav = $.ul().K("nav navbar-nav")
        _.each(arguments, function(arg){ nav.A( arg ) })
        return nav}
//this a ul
    $.navRight=function(){
        var nav = $.ul().K("nav navbar-nav navbar-right")
        _.e(arguments, function(arg){ nav.A( arg ) })
        return nav
    }
// this a div

    $.navbar=function(){return $.d().K("navbar navbar-default")
        .A($.d().K("container-fluid"))}

    $.navbarHeader=function(brand, link){
        var header = $.d().K("navbar-header")
        header.A(
            $.bt().K("navbar-toggle collapsed").toggle('collapse')
                .target(".navbar-collapse").A(
                $.sp("Toggle navigation").K("sr-only"),
                $.iconBar(),$.iconBar(),$.iconBar()
            ),

            $.a(brand).K("navbar-brand").click(function(){

                if(link){
                    window.location = link
                }

            })
        )
        return header}

    $.navbarCollapse=function(){return  $.d().K("navbar-collapse collapse")}

    $.inputBox=function(ob){  ob = ob||{}
        var func       = ob.func,
            url        = ob.url || '/',
            boxTitle   = ob.boxTitle,
            inputType  = ob.inputType||'text',
            defaults   = ob.defaults||{},
            buttonText = ob.buttonText || 'submit'
        var theDiv = $.div().WH('auto').pad(10)
        if(boxTitle){ theDiv.A(   $.h1(boxTitle)   )  }
        if(inputType == 'text'){

            var theTextInput= $.input().K('form-control')

            theDiv.A( theTextInput )

            theDiv.A(

                $.button(buttonText, function(){
                    $.post(
                        url,
                        _.defaults( dataValue(theTextInput), defaults),
                        func
                    )
                })

            )}
        if(inputType == 'textArea') {

            var theTextAreaInput = $('<textarea>').K('form-control')

            theDiv.A(

                theTextAreaInput,
                $.button(buttonText, function () {
                    $.post(url, _.defaults(dataValue(theTextAreaInput),defaults), func)})
            )}
        if(inputType == 'textAndTextArea') {

            var theTextInput =  $.input().K('form-control'),
                theTextAreaInput = $('<textarea>').K('form-control')

            theDiv.A(theTextInput, theTextAreaInput)

            theDiv.A(

                $.button(buttonText, function () {
                    $.post(url,
                        _.defaults(dataValue(theTextInput,theTextAreaInput), defaults),
                        func)

                }))
        }
        //z(); theDiv.a()
        return theDiv}

    RANKY=function(tp){z()
        $.format()
        section1.A(
            $.h1('topics!'),
            // ipt('new topic', 'post', '/tpc') ,
            collection = $.inputBox({
                boxTitle:'new topic',
                url:'/tpc',
                buttonText:'post',
                func:function(){},
                inputType:'textArea'
            }),
            $.h4('recent: ')
        )
        $.get('/tpc', function(topics){

            _.each(topics, function(topic){

                section1.A(
                    $.button(topic.t,
                        function(){ ranky(topic) }),
                    $.br(2))
            })
        })
//ranky takes a topic model from the database
//(which includes all its items already)
//this is messed up
        ranky=function(topic){//var collection

            section2.empty()

            section2.A(

                $.h1('topic page: '+ topic.t),

                $.button('live chat', function(){ priv(topic.t) }),
                //ipt('new item', 'post','/itm', {t: t.t}, function(){qG('/tpc1', {t: t.t},function(t){ranky(t)})}, '-'),

                $.inputBox({

                    boxTitle:'new item',
                    url:'/itm',
                    buttonText:'post',
                    defaults:{t: topic.t},
                    func:function(){
                        $.get('/tpc1', {t: topic.t}, function(t){ranky(t)})},
                    inputType:'text'

                }),

                collection=$.div())

            itemCollection=new ItemCollection()

            _.each(topic.i, function(i){

                if(O(i)){

                    var itemModel=new ItemModel({  topic:topic.t,  text: i.t,   score: i.s   })

                    itemCollection.add( itemModel )

                    // var itemView=new ItemView({model: itemModel}).render().el
                    // collection(itemView)
                    // itemCollection.render()
                }

            })


            itemsView = new ItemsView({  collection:itemCollection  })

            itemsView.render()



        }
        ItemModel=Backbone.Model.extend({initialize:function(){}})
        ItemCollection=Backbone.Collection.extend({
            model:ItemModel,
            comparator:'score',

            render:function(){

                collection.E()


                _.each(

                    this.models, function(itemModel){

                        var itemView=new ItemView({model: itemModel}).render()

                        collection(itemView.el)
                    }

                )


            }})
        ItemsView=Backbone.View.extend({


            initialize:function(){
                var self=this

                this.collection.on('change', function(){

                    // alert(3)

                    this.sort()
                    self.render()
                })

            },



            render:function(){

                collection().E()


                this.collection.each(function(model){

                    var itemView=new ItemView({model: model}).render()

                    collection(itemView.el)

                })
            }

        })
        ItemView=Backbone.View.extend({
            initialize:function(){this.listenTo(this.model, 'change', function(){this.render()})},
            render:function(){
                var self=this
                var topic=this.model.get('topic')
                var score=this.model.get('score')
                var text=this.model.get('text')

                qq(this.el).E(

                    h1(text),
                    h4('score: '+ String(score)),

                    bt('up',  function(){

                        qP('/vte',  {t:topic, i:text, dr:'u'}, function(){

                            self.model.set('score', self.model.get('score')+1)

                        })

                    }),

                    bt('down',function(){

                        qP('/vte', {t: topic ,  i: text,   dr:'d'},


                            function(){

                                self.model.set('score', self.model.get('score')-1)

                            }
                            //    function(){ranky(topic)}

                        )}))

                return this}})
    }

    test=function(){
        itemModel=new ItemModel({topic:'yano', text:'hi', score:0})
        z()
        $('body').append(
            new ItemView({model: itemModel}).render().el
        )
    }
    OBJECT=function(){
        format()
        s1('your objects',br(2),
            t=tx(),
            bt('new object',function(){

                qP('/newObj',
                    {t: t.V()})

            }))
        qG('/objs',function(o){

            _e(o,function(o){

                s1(
                    h2(o.t).o(function(){

                        s2.E(h1(o.t), tt=tx(),


                            bt('new sub-object',function(){  qP('/newObj',  {t: tt.V()})

                            }))}))

                _e(o.i,function(i){ s1(h3(i)) })

            })

        })
    }
    DIRTPAGE=function(){ z()
        MessageModel=Backbone.Model.extend({  })
        MessageCollection=Backbone.Collection.extend({   model:'MessageModel'  })
        MessageView=Backbone.View.extend({  })
        MessagesView=Backbone.View.extend({ })
        $.h1().A(   $.a(  'Dirtpage', '/wap/dirtpage/' )       ).A()
        $.div().A().id('content')
        if(!pam){

            var newMessageBox=$.div().WH('auto').A(
                $.h1('new message'),
                $.input().K('form-control').id('newTopic'),
                $.input().K('form-control').id('newMessage'),
                $.button('ok', function(){

                    var newTopic = $('#newTopic').val()

                    var newMessage = $('#newMessage').val()

                    $.post('/messages',
                        {topic:newTopic,
                            message:newMessage}, function(){})}))



            var searchBox= $.div().WH('auto').A(
                $.h1('search'),
                $.input().K('form-control').id('searchInput'),
                $.button('ok', function(){

                    window.location=   '/wap/dirtpage/'+ $('#searchInput').val()


                    var searchInput = $('#searchInput').val()

                    $.get('/topics/' + searchInput, function(messages){


                        $('#results').html($.h5('length: '+messages.length)  )



                        _.each(messages,

                            function(message){

                                $('#results').A( $.h6( message.message ) )

                            })


                    })

                }))


            $div().id('results').A()

            $('#content').A(newMessageBox, searchBox)


            qG('/messages', function(messages){

                _.each(messages, function(message){


                    $('#results').A(

                        $h2().A(

                            $.a('topic: '+message.topic,'/wap/dirtpage/'+message.topic)),



                        $.h3( 'message: '+message.message)
                    )
                })


            })



        }
        else {


            var newMessageBox= $.div().WH('auto').A(
                $.h1('new message'),
                $.input().K('form-control').id('newMessage'),

                $.button('ok', function(){

                    var newMessage = $('#newMessage').val()

                    $.post('/messages' ,
                        {topic:pam, message:newMessage},
                        function(){

                            loadResults()

                        })

                }))


            $('#content').A(

                $.h1('the '+ pam + ' page'),

                newMessageBox,

                $.div().id('results')
            )


            loadResults=function(){

                $.get('/topics/' + pam, function(messages){

                    $('#results').html( $.h5('length: '+messages.length)  )

                    _.each(messages,
                        function(message){
                            $('#results').A($.h6( message.message ))
                        })})}

            loadResults()

        }}

    PROFILE=function(){
        $.boot(
            $.h1('you got a profile?'),
            $.div().id('content'),
            f = $.form().C('r').WH(400).A(
                $.div().A(
                    $.label('about me'),
                    $.textarea().id('aboutMe')),
                $.div().A(
                    $.label('i enjoy'),
                    $.input().id('iEnjoy')),
                $.div().A(
                    $.label('i seek'),
                    $.input().id('iSeek')),
                $.submit('save profile'),
                $.button('undo', function(){
                    if(p){

                        $('#aboutMe').val(p.aboutMe )
                        $('#iEnjoy').val(p.iEnjoy )
                        $('#iSeek').val(p.iSeek )

                    }

                }),
                $.button('clearr', function(){
                    $('input').val('')
                    $('#iEnjoy').val('')
                    $('#iSeek').val('' )
                })
            ))
        $.post('/getMyProfile', function(profile){
            p = profile

            if(p){

                $('#aboutMe').val(p.aboutMe )
                $('#iEnjoy').val(p.iEnjoy )
                $('#iSeek').val(p.iSeek )

            }

        })
        $('form').submit(function(e){e.preventDefault()
            var data = {
                aboutMe: $('#aboutMe').val(),
                iEnjoy: $('#iEnjoy').val(),
                iSeek: $('#iSeek').val()
            }
            $.post('/myprofile', data, function(){
                $.post('/getMyProfile',
                    function(profile){
                        p = profile})
                $l('form data submited..')
            })
        })
    }
    USERS = function(){
        b= $.boot()
        i = 0
        b.h1('users')
        b.A(
            $.div('y').id('content').A('users will go here via ajax in a moment...').A($.br(2)
            ))
        $(function(){
            $.get('/users', function(users){
                $('#content').E()
                _.each(users, function(user){

                    $l(i++)
                    $l(user.username)

                    $('#content').A(

                        $.div().K("col-xs-6 col-sm-3 col-md-2 col-lg-2").A(

                            $.a('', function(){


                                window.location = '/wap/user/' + user.username



                            }).K('thumbnail').A(

                                $.img(user.mug || defaultMug),
                                $.h4(user.username),
                                $.h5('status: '+user.status)
                            )

                        )

                    )

                })
            })
        })
    }

    USER =function(a){
        //problem: click on a user.. creates a NEW USER?
        username =  _pam || a
        if(U(username)){
            $l('username undefined.  default to -> a')
            username = 'a'
        }
        $.format()
        $.get('/user/' + username, function(user){

            u = user
            s1.A(
                $.h1(user.username),
                $.i(user.mug).WH(100),
                $.h4(user.status),
                statusSpan = $.sp(),
                image = $.i(),
                messageTextarea= $.ta().C('w','z'),
                $chatBt( _pam,  messageTextarea)
            )
        })

        tab1= $.tab('profile',function(){

            TABS.E();

            $.profile(_pam, TABS)

        })
        tab2= $.tab('pics',
            function(){TABS.E()

                TABS.A('hahaha')

                $.get('/images/' + _pam, function(images){

                    _.each(images, function(image){  TABS.A(

                        $.img(image.d).WH(100)

                    ) })

                })

            })
        tab3= $.tab('blog',function(){

            TABS.E()

            qG('/pstu', {u:u},  function(i){
                blp(i, TABS, '+') },'+')
        })
        tab4= $.tab('buds',function(){ TABS.E() })
        tab5= $.tab('groups',function(){ TABS.E() })
        tab6= $.tab('email', function(){
            //TABS.E( messageTextarea=$textarea().c('w','z'),btMail(messageTextarea,u)  )
            from = _pam
            var messageTextarea = $.ta()
            _$username = window['from'] || 'b'
            TABS.E()(
                $.h1('convo with '+u),
                $.h1('Messages'),
                $.br()
            )
            qGE( '/gMsgW', { u: _$username },
                function( message ){

                    var c = $.c('X', 100)
                    $.post('/mug', {u: m.fr}, function(mug){ c.fit(mug) })
                    TABS.A(
                        $.row($.col(2,c),
                            $.col(10,
                                $.h6('from: ' + message.fr),
                                $.h4(
                                    dt( message.dt ).dt()
                                ).K('pull-right'),
                                $.h5(m.m))),
                        $.hr()
                    )})
            TABS.A(
                messageTextarea,
                $.bt('new message', function(){
                    $.post( '/sMsg' , {m: messageTextarea.V(), to: from})
                }),
                $.br(2)
            )
        })

        s2.A(
            theTabs= $.tabs(tab1,tab2,tab3,tab4,tab5,tab6))

        theTabs.load()
    }

    $.profile = function(username, theDiv){  //=makeProfile = prof
        // if(profile.aboutMe){div.A(answer('aboutMe', profile.aboutMe)) } if(profile.iEnjoy){div.A(answer('iEnjoy', profile.iEnjoy)) } if(profile.iSeek){div.A(answer('iSeek', profile.iSeek) )}
        answer = function(question, answer){
            return $.div().A(
                $.h3(question),
                $.h4(answer))}
        username = username || 'a'

        $.get('/profile/' + username,  function(data){

            d = data

            data = {
                aboutMe: d.aboutMe,
                iEnjoy: d.iEnjoy,
                iSeek: d.iSeek
            }

            if(O(data)){
                theDiv = theDiv|| $.divA('b',300,300).A().drag()
                theDiv.A(
                    $.h4('about me'),
                    $.h5(data.aboutMe),
                    $.h4('i enjoy'),
                    $.h5(data.iEnjoy),
                    $.h4('i seek'),
                    $.h5(data.iSeek)
                )
            }})
    }

    showStatus =stat=function(user, theDiv){

        withStatus(user,
            function(status){
                theDiv($.h3('STATUS: '+ status))
            })
    }

    STATUS=function(){
        $.format()
        s1.A(
            $.h1('status'),
            $.ip().id('statusInput'),
            $.bt('update', function(){
                status = $('#statusInput').val()
                $.post('/status', {text: status}, function(){
                    $l('status updated')
                })
            })
        )
    }


    BOOK=function(){
        toBook = function(){Y.run('book')}
        $.format()
        s1.A(
            $.h1('BOOK').click(toBook) ,
            bookName = $.input(),
            $.button('new book',function(){
                $.qP('/newBook',
                    {name: bookName.V()},
                    toBook)}),
            $.hr()
        )
        $.qJ('/books',function(books){

            s1.A($.h3('books:'))

            _.each(books,


                function(book){
                    s1.A( $.span().C('x').click(function(){
                            $.qP('/delBook',{book: book._id},toBook)
                        }),

                        $.button(book.name,function(){


                            s2.A($.h2('CHAPTER: '+book.name),
                                chapterTitleInput=$.input(),
                                $.button('new chapter',
                                    function(){$.qP('/newChapter',{

                                        chapterTitle: chapterTitleInput.V(),

                                        book:book._id
                                    },function(){
                                        chapterView(book, c)})}), $.hr())


                            $.qJ('/chapters',{book:book._id},



                                function(chapters){


                                    _.each(chapters,function(chapter){
                                        s2.A($.button(chapter.title,
                                            function(){
                                                chapterView(book,chapter)}), $.br(2))})})

                        }), $.br(2))})})
        chapterView=function(b,c){ s2.E();s1.E();

            s1.A($.h1('BOOK').click( toBook) )

            $.qJ('/chapters',{book:book._id},

                function(chapters){
                    s1.A($.h3('chapters:'))

                    s2.A($.h3('pages:'))

                    _.each(chapters,function(chapter){



                        s1.A($.span()('x').click(function(){

                                $.qP('/delChapter',{chapter: chapter._id},
                                    function(){chapterView(book, chapter)})
                            }),
                            $.button(chapter.title, function(){chapterView(book,chapter)}), $.br(2))})})


            s2.A($.h1('chapter: '+chapter.title))

            s2.A( pageNameInput=$.input(),
                $.button('new page',
                    function(){

                        $.qP('/newPage',{

                            pageName :pageNameInput.V(), chapter:chapter._id


                        })}), $.hr())



            $.qJ('/pages', {chapter: chapter._id},

                function(pages){p=pages

                    _.each(pages,function(page){

                        s2.A($.button(page.name,

                            function(){
                                pageView(book,chapter,page)}), $.br(2)  )})})
        }}

    pageView = function(book, chapter, page){s1.E();s2.E()
        s1.A($.h1('BOOK').click(ldr('book')) )
        s1.A($.h1('CHAPTER '+ chapter.title).click(
            function(){chapterView(book,chapter )}
        ))
        $.qJ('/pages',{chapter: chapter._id}, function(pages){
            s1.A($.h3('pages'))

            _.each(pages,function(page){

                s1.A(
                    $.button(page.name,function(){
                        sectionView(chapter)}), $.br(2)
                )})})
        s2.A($.h1('page: '+page.name))
        $.qJ('/sections', {
            book: book._id,
            chapter: chapter._id,
            page: page._id}, function(sections){
            _.each(sections,
                function(section){

                    s2.A(
                        $.button(section.section, function(){sectionView(book,chapter,page)}),
                        $.br(2)
                    )})})
    }

    later=function(){
        $fileUpload = fup=function(labelText, text){

            var theFormGroup = fg(
                $label(  D(labelText) ? labelText  : 'upload file',  'upl'  ).k('ctl').f(20),
                ip('file').id('upl').nm('i'))

            if(text){

                theFormGroup(

                    pg(['help-block'], text) )}

            return theFormGroup
        }
        $.fileUpload =  function(labelText, text){
            var theFormGroup =  $.d().K("form-group").A(
                $.label(  D(labelText) ? labelText  : 'upload file',  'upl'  ).K('control-label').fontSize(20),
                $.input().type('file').id('upl').name('i')
            )
            if(text){
                theFormGroup.A(   $.p(text).K('help-block')   )}
            return theFormGroup }
//<div class="form-group">
//      <label style="font-size: 20px;" class="control-label" for="upl">
//              upload file
//      </label>
//      <input name="i" id="upl" type="f">
// </div>
        sv=function( x, func ){  $.post('/img', {

            d: xx( C( x ) ).u(),

            dats: x.dats

        }, func ) }
    }
    cut=function(m){ z()

        $.format()

        // x =   xx(  $.c().id('can').W(100).H(100)  ).bc('w').Z(7).fit(m||'me')

        x =     $.c('r', 500, 500).A().fit(m||'me')

        // x.dots()
        // x.copy()

        s1.A($.bt('save sprite',function(){
                x.snap()
                //fresh()
                EDIT()
            }),
            $.br(2),
            $.bt('start cut',function(){
                //x.copy()
                x.dots()}),
            $.br(2),
            $.bt('restart cut',function(){cut(m)}), $.br(2),
            $.bt('file uploads', function(){window.location='/wap/uploads' }))
        s2.A($.h2('click to start cut-out..'), x

            //   , dv('o',500,200).pp()(x)

        )
    }
//old // does something :)
    card=function(a,b){ //to see a users profile
        if( O(a) ){return card( a.u,  a.m)  }
        var d = $.divA('y', 300)//.cen()
        d.dblclick( function(){  $(this).remove() } )
        d.A(  $.h3(a||'anon'),  $.img (b||'me' ).WH(200)  )
        d.el().A()
        return d
    }
    shUcards=function(){

        z();

        var t=100

        usrs(function(u){
            _.e(u,function(u){
                $.P(
                    '/getImageById',  u.m,
                    function(m){
                        _d().p('a').lt(t).c('r').a().drg()(
                            h2( u.u ),
                            im( m ).w( 200 ).h( 200 ))
                        t+=20



                    })})})

    }
    UPLOAD=function(){

        form =  $.f().attr({
            method:'post',
            enctype: 'multipart/form-data',
            action: '/pic'
        }).A(
            $.fileUpload(''),
            $.ip().K("show").type('submit').val('ok')
        )
        $.pop(form, {title: 'upload a new pic'}
        ).drag()
    }



    UPLOADS=function(){
        $.format()
        var top = 80
        s1.A(
            $.h4('You have uploaded these pics. Click to make a sprite, or hit the x to delete..')
        )
        $.get('/myPics',  function(pics){
            _.e(pics, function(pic){
                var fileName = pic._id + pic.ext
                picDiv = function(top){
                    return $.divA('b', 100, 100).WH('auto').K('pic')
                        .XY(200, top).pad(16).drag()
                }
                $.delete=function(url, data, func){


                }
                var theButton = $.bt('delete', function( element ){
                    $.ajax({type: 'DELETE',
                        data: pic,
                        url: '/pic',
                        success: function (result){$(element.target).closest('div').rm()}})
                })

                var  theImg =  $.i(fileName).W(120).H(120).$(function(){cut(fileName)})
                var thePicDiv=  picDiv(top).A(theImg,   theButton   )
                $('body').A(thePicDiv  )
                top += 220
            })
        })
    }

    CUTOUTS=function(){$.format()
        section1.A($.h4('click a pic to select it as your mug, or the x to delete it'))
        $.getJSON('/img', function(cutouts){var top = 80
            _.e(cutouts, function(cutout){
                var imgDiv = $.divA('b',100, 100).left(top).top(200).K('pic').drag()
                imgDiv.A(
                    $.i(cutout.d).WH(100).$(function(q){$.post('/changeMug', {url: cutout.d})
                        $('.pic').each(function(index){  $(this).C('b')  })
                        $(this).parent().C('y')}),
                    $.bt('X', function(){var that=this
                        $.ajax({data: cutout, url: '/img', type: 'DELETE',
                            success: function (result){$(that).parent().rm()}})}))
                top += 220})})
    }
    $.fn.xPrp=function(){
        this.on('mousedown', function(e){  e.stopPropagation()  })
        return this}

    $.imagesDiv=function(stage) {
        $.getJSON('/img',  function(img){theDiv = $.d().A().drag().C('y')
            _.e(img, function(img){theDiv.A($.c(100, 100).fit(img.d).click(function () {
                stage.bm(img.d, function (bm) {bm.sXY(.4).drag()} )}))})})
    }
    chatRoomsObject={}
//makes auto top-spacing (for navbar not to block)
    $.containerDiv =  function(){

        var args = G(arguments),
            theDiv = $.d().K('container')

        if(args.N){ theDiv.A( $.br(4) ).A() }

        _.e(arguments, function(v){

            theDiv.A(v)
        })

        return theDiv
    }
    $.format=function(){
        section1 =s1 = $.sp()
        section2 =s2 = $.sp()
        $.CT($.R($.xs(3).A(section1), $.xs(9).A(section2)))
    }

    testFormat=function(){z()
        $.format()
        s1.A($.imgResponsive('chicks') )
        s2.A($.i('me'), $.i('guy'))
    }
    $.userCard3  =function(){z()
        return $.row(
            $.col(2).K('text-center').A(
                $.i('me').WH(70),
                $.h5('hi')
            ),
            $.col(3).A(
                $.h4('pics'),
                $.h5('place to upload'))
        ).A()
    }

    $.messageDiv = function(messageText){//Message =
        return $.d('pink').K('msg').col('black').mar(10).pad(10).bor(0)
            .fontSize(20).text(messageText||'messageText goes here')}

//pass in container(div?).. can empty it
//pass in each arg as a 'msg', spacing them out with br's
//could be feed i was looking for, except if it gets
// an obj it passes in its 'n' pop???

    addX=function rc( messagesArray, a ){

        var args=G(arguments)

        if(args.n){ messagesArray.E() }

        if( A(a) ){

            _.e(a,
                function(v){
                    rc( O(v) ?v.n :v) })}

        else { _.e(

            args,

            function(v){messagesArray($br(),
                msg(v))
            }

        )}
    }

//fetches JSON, and takes the 'n.pop' from list and passes those
//in as messages?
// on dblclick of .msg,// post its text to newMessage and run gMsgs?

    getMessages = gMsgs=function rc(u,M){
        qJ(u,
            function(d){
                add(M,d)

                all('msg', function(m){

                    m.$$(pof('/nMsg',{n:m.T()},rc))

                })

            })}
// get value from an input el OR two input els
// if one, creates {c:?}
// if two, creates {t:?,c:?}

    dataValueX=  dVX=function self(title, content){

        if( U(content) ){return self(null, title)}

        var data = {}

        data.c = data.content = data.message = content.V()

        if(title){
            data.t = data.title = data.topic = title.V()
        }

        return data
    }
// ob is for adding more pops to post-ob,
// or just pass function early

    textInputSpan  =ip0= function(   buttonText,  url,  ob,  func ){

        url=url||'/'

        if(F(ob)){func=ob;  ob={}}

        func=func||home


        var theSpan = $.span(),
            theTextInput= $.input(),

            theButton= $.bt(buttonText,

                function(){

                    $.post(
                        url,
                        _.defaults( dataValue(theTextInput),  ob),
                        func  )
                })


        //return a span with the tx and a $button
        //when u click the $button, get the value and post it to a url

        return theSpan.A(theTextInput, theButton)


    }
//this makes a span with a textarea and a button
//pass button text, url(/), and function
//when button clicked:
//      the  value of the text area
//      will be posted to the url
//      (passing the function)

    $.textAreaDataObj = function(buttonText,url,func){

        url=url||'/';

        func=func||home

        var span= $.span(),
            textArea= $.ta(),

            button= $.bt(buttonText, function(){
                $.post(url, {content:textArea.val()}, func)
            })

        return span.A(theTextArea, theButton)

    }

    $.textTextarea = textAndTextAreaSpanX =ip2=function(buttonText,url,func){

        url=url||'/'; func=func||home

        var span= $.span(),
            textInput=$.input(),
            textarea= $.ta(),
            button= $.bt(buttonText,function(){$.post( url, {
                    title:textInput.val(),
                    content:textarea.val()
                },

                func)


            })

        return span.A(textInput, textarea, button)}

    inputBox1=function(ob){
        ob=ob||{}

        var func= ob.func,
            url         =   ob.url || '/',
            boxTitle    =  ob.boxTitle,
            inputType   =  ob.inputType,
            defaults    =   ob.defaults||{},
            buttonText  =   ob.buttonText || 'submit',
            inputType   =     ob.inputType||'text'

        var div = $.d(40).WH('auto')

        if(boxTitle){
            div.A($.h1(boxTitle))}

        if(inputType == 'text') {

            var input=$.input()

            div.A(input)

            div.A(

                $.bt(buttonText, function(){
                    $.post(url, _.defaults({title: input.val()},defaults), func)
                }))}

        if(ob.inputType == 'textArea') {

            var textarea = $.ta()

            theDiv.A(

                theTextAreaInput,
                $.bt(buttonText, function () {
                    $.post(url,
                        _.defaults(
                            {content: textarea.val()},

                            defaults), func)})
            )}

        if(ob.inputType == 'textAndTextArea') {

            var input = $.input(),
                textarea = $.ta()

            div.A(input, textarea)

            div.A(

                $.bt(buttonText, function () {

                    $.post(url,
                        _.defaults(
                            {title: input.val(), content: textarea.val()},

                            defaults),
                        func)}))}


        //z(); theDiv.a()

        return div}

    joinSelf = function(){

        socket.emit( 'joinRoom',  _username )

    } //unnecessary

    sendMessage =iMsg=function( toWho, message ){


        $l('toWho: '+ toWho)

        $l('message: '+ message)

        socket.emit(  'sendMessage',  {  m: message,  t:toWho,  f:_username  }  )

    }

    $.win = $.window=function(  a, c,  id ){

        var size,
            theWindow,
            text,
            moreButton,
            lessButton,
            closeButton,
            w


        moreButton = $.buttonRight('>', function(){
            w.WH(700)
            lessButton.show()
            moreButton.hide()
        })
        lessButton = $.buttonRight('<', function(){
            w.WH('auto')
            moreButton.show()
            lessButton.hide()
        }).hide()
        closeButton = $.buttonLeft('X',function(){ w.remove() })

        w = $.divA('b', size||400).WH('auto').al(.9)
            .overflow('auto').pad(10)
            .borderWidth(4)
            .borderStyle('dashed')

        w.A(moreButton, lessButton.hide(), closeButton).drag().A()
        if(S(a)){ text= a }
        if(N(a)){ size= a }
        if(O(a)){ w.A( a ) }
        if(text){
            w.A(
                $.p(text).fontSize(24).K('text-center')
                    .C('X').marHor(10).padHor(30), //horizontel
                $.hr().col(c||'z').fontSize(10)
            )}
        if(id){ theWindow.id(id) }
        return theWindow
    }


    $.pop=function(message, ops){

        if( S(ops) ){ return $.pop(ops, { title: message } )    }

        ops = O(ops)? ops : {}


        message = message || 'pop pop'


        modalBody = $.modalBody().A( $.h2( message ) )

        theModal =  $.modalFade().A(  $.modalDialog().A(

            $.modalContent().A( modalBody)

        ) )


        if(!ops.hide){ theModal.modal() }
        if(ops.title){


            modalBody.prepend(
                $.h1(ops.title).col(ops.titleColor||'z'),

                $.hr().C( ops.headerColor||'z'  ).css('height', 2)



            )
        }
        if(ops.button ){ modalBody.A( $.bt( ops.button )  )}
        if(ops.drag ){  theModal.drag() }
        if(ops.opacity ){ theModal.opacity( ops.opacity ) }


        //text color of the MESSAGE
        if(ops.col){  theModal.col( ops.col)}

        //color of background of modal itself
        if(ops.C){
            //flash like crazy
            if( ops.C == '*' ){ setInterval( function(){ modalBody.C( $r() ) }, 100) }

            else { modalBody.C( ops.C ) }
        }



        //this color takes over the whole screen!
        //this is the background color of the hiding body
        if(ops.backgroundColor) {  theModal.C( ops.backbroundColor)  }
        return theModal}

    $.dangMessage=function(msg){


        form = $.span().delButton()

        form.A(   $.h2(msg).K('alert alert-danger')  )

        return form.prependTo('body')
    }

    $.floatingInput=function(text, func){

        var args=G(arguments),

            theForm=$.form().K('text-center').C('o').fontSize(20).drag().minW(200 )

        theForm.A(

            $.bt(text).type('submit'),
            $.input()

        )

        if( F(func) ){ theForm.submit(func) }


        return theForm}

    $.editDiv=function(words){

        ta =input = $.textarea().mar(4)

        span = $.span().C('black')

        spanFunc = function () { span.text( input.val() ) }

        div = $.divA().C('brown', 'y').pad(8).A()

        div.zIndex(0)



        canMove=true

        xButton= $.bt('', function(){

            div.remove()

        }).WH(4).C('r')


        changeLocation=true
        inputMove=true

        mouse = 'up'

        appendSensorDiv= $.d('y',16, 12).textAlign('center').mar('0 auto').click(function(){
            $(this).parent().free()
        })

        div.mousedown(function(){
            inputMove = false

            mouse='div'
        })

        div.mouseup(function(){mouse='up'})

        div.mousedown(function(){

            $.editDiv.TOP++

            $(this).zIndex( $.editDiv.TOP  )
        })


        ta.mousedown(function(e){
            $.editDiv.TOP++
            $(this).parent().zIndex(  $.editDiv.TOP  )
            location={top: div.Y(), left: div.X()}

            inputMove = true
            mouse='input'
            e.stopPropagation()})
        ta.mousemove(function(e){
            if(inputMove){
                e.stopPropagation()
                div.XY(location.left, location.top)
            }
        })

        if(U(words)) {

            return div.A( xButton, $.br(), span.hide(), input,

                appendSensorDiv

            ).dblclick(function(e){
                    e.stopPropagation()

                    span.text( input.val() )
                    xButton.toggle();
                    input.toggle()
                    span.toggle()

                }).drag()

        }

        else {

            input.val(words)

            div.A( xButton, $.br(), span, input.hide() )

            span.text( input.val() )


            div.dblclick(function(e){e.stopPropagation()

                span.text( input.val() )

                xButton.toggle();
                input.toggle(); span.toggle()

            })


            return div.A().drag() }

    }

    $.editDiv.TOP=0

    $.editDiv2=function(a){


        var div=$.editDiv(a),

            range= $.range()


        range.on('mousedown',function(e){
            e.stopPropagation()

        })

        range.on('input', function(){



            div.find( $('span')).fontSize( $(this).val()  )
            div.find( $('textarea')).fontSize( $(this).val()  )

        })


        div.prepend( range  )

        return div
    }

    testEditDiv=function(){z()

        $.editDiv()
        $.editDiv()
        $.editDiv()
        $.editDiv()
        //$.editDiv2().A()


    }

    $.img100=function(){
        return $.img('me')
            .XY(300,200).C('y').opacity(.9).WH(100)}

    CHATROOMS= function(){

        chats = $.divA('bb', 200, 200).drag().left(400).WH('auto').pad(10).A().A(
            ChatButton('general'), ChatButton('fun'), ChatButton('sexy'),
            theTextInput = $.input().K('form-control'),
            $.bt('PrivateChatRoomate', function(){
                $.privateChatRoom(theTextInput.val())
            }).mar(40))

        function ChatButton(name){
            return $.bt(name,function(){
                $.privateChatRoom(name)
            }).mar(40)}
    }

    $.privateChatRoom  = function(roomName){


        //bug.. if they CLOSE the window...this needs to TRIGGER something
        //in this case (removal from the chatRoomsObject)..
        //but more generally, i need to allow a sophisticated options obj to $win

        if(
            chatRoomsObject[ roomName ]){
            $l('already in this room') }

        else {

            $.chatRoom(roomName)

            socket.emit('j', roomName)//why cant i change this emit name to joinRoom ???
        }


    }

    $.chatRoom=function(title, color, id){

        title = title||'chatbox'

        color=color||'b'

        id=id||'cbo'


        var theTextInput= $.input().K('form-control'),

            theSendButton= $.bt('send', function(){

                socket.emit('sendChatMessage', {

                    chatRoomName: title,   username: _username,  message: theTextInput.V()

                }) }),
            thePicButton= $.bt('pic', function(){ $.pop('pic select')  }),
            thePopButton= $.bt('pop', function(){ socket.emit('p', theTextInput.V(), title)}),

            theMessages = $.d().id( 'cbi' ).C('u').overflow('auto'),

            usersInRoomBox= $.d()

        theWindow = $.win('chatroom: ' + title).id(id).css({'min-width':600,  'min-height':400, 'background-color': color })

        theWindow.A(

            $.row(

                $.col(8,  theMessages,   theTextInput, theSendButton,  thePopButton,  thePicButton ),

                $.col(4, $.h5('users:'), usersInRoomBox)
            )
        )

        var updateUsersDiv=function(users){

            usersInRoomBox.E()

            if(A(users)){

                _.e(users,

                    function(username){

                        usersInRoomBox.A(  $.h5(username).click(  function(){ popUser(username) }  ) )

                    })
            }


            else { usersInRoomBox.A( $.h5('no users'))}}

        var chatController={

            updateUsersDiv: updateUsersDiv,

            window: theWindow,

            toggle: function(){ return theWindow.toggle() },

            write:function(m){  theMessages.A( $.h5(m).col('w')  )  },

            writeBlack: function(m){  theMessages.A( $.h5(m).col('z')    )  }}

        chatRoomsObject[title] = chatController

        setInterval( function(){ socket.emit('room', title)}, 1000) //repeatedly emit 'room', which launches room user updates!

        return chatController}

    $.popUser=function(username){


        $.post('/getMugByUsername', {username: username},  function(mug){
                $l('clicked '+username)
                $l(mug)


                var fullProfileButton = $.bt('full', function(){

                    $l('/wap/profiles/'+ username);

                    window.location = '/wap/profiles/'+ username

                })


                $.win(

                    $.d().A(

                        $.br(), $.hr(), $.h3('User: '+ username),

                        $.br(),

                        $.c(300).A().fit(mug),

                        theDiv = $.d(),

                        message = $.textarea().C('w','z'),

                        //$.mailButton( message, username ),

                        // $.chatButton( username, message ),

                        fullProfileButton  )
                )


                //$.status(username, theDiv)

                //  $.profile(username, theDiv)

            }

        )}

    SORTY=function(){

        format()


        s1(
            $.h1('your sorts'),
            $.d().WH('auto').A(
                $.h1('new sort'),
                textInputSpan('post','/srt')
            ),
            $.h4('recent: '))
        qG('/srt',function(t){

            d1($.bt(t.t,function(){sorty(t.t)}),

                $.br(2))

        },'+')
        s2(
            $.i('me'))
    }
    $.showTab = function(id){ $('#'+id).tab('show') } //necessary?
    $.tab = function(text, lookFor){
        var args= G(arguments)

        if(F(lookFor)){$l('function')


            var  tabText=args[0],

                func=args[1],

                load = function(e){$('#' + tabText).tab('show'); func() }

            theLi= $.li().A($.a(tabText, load) )

            theLi.load = load

            if(args.m){  theLi.K('active')  }

            return theLi


        }

        $l('not function')
        var a=   $.a(text,'#' +lookFor).attr({'data-toggle':'tab'})
        return $.li().A(a)}
    $.navTabs = function(){

        var tabs = $.ul().K("nav nav-tabs")
        _.e(arguments, function(arg){
            tabs.A(arg)
        })
        return tabs}
    $.tabPane=function(id){


        var args = G(arguments),

            pane = $.d().K("tab-pane fade").id(args[0])


        if(args.p){
            pane.K('active in')}

        return pane}
    $.tabContent  = function(){

        var div =  $.d().K("tab-content")
        _.e(arguments, function(arg){div.A(arg)})

        return div}
    $.tabs=function(){

//can pass in a $.tab() -> 'tab'
        //OR can pass in an array, and then $.tab will be called for it, and pass in the pams


        tabsWrapper = $.d('X').WH('auto').A(

            tabBar= $.ul().K("nav nav-tabs"),

            panel =  TABS=$.span()
        )

        _.e(arguments,
            function(tab){if(A(tab)){
                tab=$.tab(tab[0],tab[1])}
                tabBar.A(tab)
            })

        tabsWrapper.load = function(){
            tabBar.children().first().first().click()
            return tabsWrapper}


        return tabsWrapper

    }


    testTabs = function(){
        $.boot(
            $.navTabs(
                $.tab('Home', 'home').K('active'),
                $.tab('Profile', 'profile'),
                $.tab('Messages', 'messages'),
                $.tab('Settings', 'settings')
            ).C('r'),



            $.tabContent(
                $.tabPane('home', '+').A(
                    $.h1('home'),
                    $.ipsum(6)
                ),
                $.tabPane('profile').A(
                    $.h1('profile'),
                    $.ipsum(6)
                ),
                $.tabPane('messages').A(
                    $.h1('messages'),
                    $.ipsum(6)
                ),
                $.tabPane('settings').A(
                    $.h1('settings'),
                    $.ipsum(6)
                )
            ).C('b')
        )
    }
    testTabs1 = function(){ // 'active-s' are mismatched on purpose :)


        $.boot(

            $.navTabs(
                $.tab('Home1','home1'),
                $.tab('Home','home').K('active'),
                $.tab('Profile', 'profile'),
                $.tab('Messages', 'messages')),
            $.tabContent(
                $.tabPane("home1", '+').C('b').A('home1'),
                $.tabPane('home').C('r').A('home'),
                $.tabPane("profile").C('y').A('profile'),
                $.tabPane("messages").C("g").A('messages'))


        )

        $('.nav-tabs a').click(function(e){
            //    e.preventDefault();  $(this).tab('show')
        })



    }
    testTabs2=function(){

        z()

        var ul =   $.ul().K('nav nav-tabs').A(

            $.liA('aaaa'),
            $.liA('bbbb').K('active'),
            $.liA('cccc'),
            $.liA('dddd')

        ).C('b')


        var display = $.d('y', 300, 400).mar(20)

        var div = $.d('r').pad(30).A(ul, display).A().drag()

    }
    testTabs3=function(){z()

        $.navTabs().A(
            $.tab('Home'),
            $.tab('Profile').K('active'),
            $.tab('Messages')).A()

        $(function(){

            $('a').click(function(){
                $(this).tab('show')
            })

        })


    }
    testTabAjax=function(){

        $.boot(

            $.navTabs(
                $.tab('hello', function(){ alert('hello')}),
                $.tab('goodbye', function(){  $('#stuff').load('/')  })
            ),

            $.d().id('stuff')


        )}
    testTabs4=function(){z()
        var tabBar = $.ul().K("nav nav-tabs")

        tabBar.A(

            $.tab('first', function(){alert('1')}),
            $.tab('second', function(){alert('2')}),
            $.tab('third', function(){alert('3')})

        ).A()
    }//navtabs=function(){return $.ul().K('nav nav-tabs')} //unnecessary
    testTabs5=function(){

        z()

        var tabBar = $.tabs(

            ['first', function(){
                $l('1')

                panel.E($.img('me'))

            }],

            ['second', function(){$l('2')}],
            ['third', function(){$l('3')}]

        ).A()

    }
    testTabsAction=function(){

        testTabs()

        $(function(){
            $('a[data-toggle="tab"]')
                .on('show.bs.tab', function (e) {ee=e
                    $l('tabbed!')
                    e.target // newly activated tab
                    e.relatedTarget // previous active tab

                })


        })

    }
    testTabsAction2=function(){
        // for each tab, use 'on(show)', to automatically fetch/load?
    }
    $.pill = function(name, func){

        var a = $.a(name, func).attr({'data-toggle': 'pill', href: '#'+name })

        return $.li().A(a)
    }
    $.navPills =function(){return $.ul().K('nav nav-pills')}
    $.pillPane=function(id){

        var d= $.d().K('pill-pane fade').id(id).attr('role', 'pillpanel')

        return d}
    $.pillContent=function(){

        var div =  $.d().K("pill-content")

        _.e(arguments,
            function(arg){

                div.A(arg)
            })


        return div}
    testPills= function(){
        $(function(){$.boot().A($.well($.h1('welcome to pills')),
            n = $.navPills().A(
                $.pill('home'),
                $.pill('profile'),
                $.pill('messages', function(){$('body').C('r')})
            ),



            $.d().K("pill-content").A(

                $.pillPane('home').A('hoooome'),
                $.pillPane('profile').A('prooofile'),
                $.pillPane('messages').A('messsaaaages')
            )



        )




            //   $('a').each(function(){ $(this).attr('data-toggle', 'pill') })

        })


    }
    PILLS=function(){z()
        pills= $.ul().K("nav nav-pills").A(
            $.li().K('active').A(    $.a('home').toggle('tab')     ),
            $.li().A(  $.a('profile').K('profile')  ),
            $.li().A( $.a('messages') ) )
        div=$.d('b').WH('auto').pad(40).drag()
        content = $.d('y',300).pad(40).mar(40)
        div.A( pills , content)
        $('a').click(function (e) {
            e.preventDefault()
            $(this).tab('show')
        })
        // $('a:first').tab('show')
        $('a.profile').on('shown.bs.tab', function(e){

            content.empty()

            content.A(
                $.d().text('asfdasfdfasd')
            )

        })
        $('a[data-toggle="tab"]').on('shown.bs.tab', function(e){
            // alert('yay')
            ee=e.target
            e.target // activated tab
            e.relatedTarget // previous tab
        })
    }


    MESSAGES=function(){

        //is TABS never set? -- its the content holder for the panes!!

        $.format()

        tab1=[ 'received',  function(){

            TABS.E(   $.h1('Messages'),  $.br()  )


            qGE('/gMsg', function(m){




                TABS.A(


                    $.row(

                        //c1 = function(m){return cx().bc('-').Z(1).mug(m)}

                        $.col(2,


                            $.c('X',100,100).mug(m.fr)

                        ),

                        $.col(10,

                            $.bt(m.fr,

                                function(){
                                    from = m.fr;
                                    tab3.load()
                                }),

                            $.h4( dtt(m.dt) ).K('pull-right'),
                            $.h5(m.m))
                    ),

                    $.hr()
                )






            } )


        },

            '*']


        tab2=['sent', function(){

            TABS.E(
                $.h1('Messages'),
                $.br())

            qGE('/MsgS', function(m){mm=m;

                var ms= $('<textarea>'),

                    c=  $.c('X',100,100)

                $.post(
                    '/mug',{u:m.to},

                    function(mug){c.fit(mug)}
                )


                TABS.A($.row(
                    $.col(2,c),
                    $.col(10,

                        $.bt('to: '+m.to,

                            function(){

                                from=m.to;
                                tab3.load()}

                        ),

                        $.h4(dt(m.dt).dt()).K('pull-right'),
                        $.h5(m.m)
                    )), $.hr())
            } )
        }]


        tab3 = $.tab('convo',  function(){

            var ms = $.input()

            u= window['from']||'b'




            TABS.E(

                $.h1('convo with '+u),



                $.h1('Messages'), $.br()
            )



            qGE('/gMsgW', {u:u},

                function(m){

                    var c = $.c('X', 100, 100)


                    $.post('/mug',
                        {u:m.fr},
                        function(m){c.fit(m)})

                    TABS.A($.row(
                            $.col(2,c),
                            $.col(10,
                                $.h6('from: '+m.fr),
                                $.h4(dt(m.dt).dt() ).K('pull-right'),
                                $.h5(m.m))),
                        $.hr()
                    )})

            TABS.A(ms,

                $.bt('new message',

                    function(){

                        $.post('/sMsg',   {m:ms.V(), to:from})

                    }),

                $.br(2)
            )

        })

        tab4 = [ 'requests', function(){


            TABS.E(
                $.h1('Buddy requests'),
                $.br()
            )

            //buddy requests
            qG('/gRq',function(msgs){

                _.e(msgs,  function(msg){


                    TABS(

                        $.d()(

                            $.h6( 'from ' + msg.fr + ' on ' + msg.dt ),

                            $.h5( msg.m ) ,

                            $.bt('accept',

                                function(){  $.post( '/yRq',  { u: msg.fr }  )}),

                            $.bt('deny'),

                            $.hr() ) )


                })

            })

        }]

        s2.A( t = $.tabs( tab1, tab2, tab3, tab4 ) )

        t.load()

    }

///
    $autoDivX= autoX=function(){
        var args=G(arguments),
            theDiv=$div().auto()

        _.e(args, function(arg){ theDiv(arg) })

        return theDiv}
    showTabX =shwX=function(a){

        qi(a).q.tab('show')

        //return a
    }
    firstChildX =ch$X =function(a){  a.ch(0).$()  }
    TabX =tabX=function(tabText, func){

        var args=G(arguments),
            tabText=args[0],
            func=args[1],

            theLi= $liA(
                tabText,
                function(){
                    showTab(tabText); func()
                })

        theLi.load=function(){
            showTab(tabText); func()  }

        if(args.m){  theLi.k('active')  }

        return theLi
    }
    $passwordX=function(){return ip().type('password').k('form-control')}
    tabsX=function(a){

        var g=G(arguments),

            a=g[0],  d, u



        theDiv=$.d('X').WH('auto').A(

            theUlNav=$.ul().K('nav nav-tabs'),

            TABS= $.span()
        )



        //ok so a can already be a tag.. OR, if you pass in an array, it will make it a tag for :)

        if(A(a)){
            a = $.tab.apply($.tab, a)
        }



        theUlNav(a)

        _.e(g.r,   function(a){

            if( A(a) ){

                a = _a(tab, a)

            };

            theUlNav(a)

        })


        theDiv.load=function(){
            a.children[0].click(); return theDiv}



        return theDiv

    }

    M.lC= M.lineCenter=function(x1,y1,x2,y2) {

        if (A(x1)) {

            if(N(x1[3])){return center(  x1[0],x1[2],x1[2],x1[3]    )}
            return center(x1[0],x1[1],y1[0],y1[1])}

        if(O(x1)){return center(x1.x, x1.y, y1.x,y1.y)}

        return center(x1,y1,x2,y2)

        function center(x1,y1,x2,y2){var x,y

            if(x1 > x2){upperX = x1; lowerX = x2}
            else {upperX= x2; lowerX=x1}

            if(y1 > y2){upperY = y1; lowerY = y2}
            else {upperY= y2; lowerY=y1}

            x= lowerX + (upperX-lowerX)/2
            y = lowerY + (upperY-lowerY)/2

            return V(x,y)
        }
    }
    M.pointInCircle=function(x,y,circle){
        var withinX, withinY
        withinX = x < circle.x + circle.radius && x > circle.x -circle.radius
        withinY = y< circle.y+circle.radius  &&y >circle.y-circle.radius
        return withinX && withinY
    }//Y.pointInCircle = pntInCir =
    M.pointInRect=Math.pointInRectangle=function(x,y,rect){var withinX, withinY

        var halfwidth = (rect.width || rect.w)/2
        var halfheight = (rect.height || rect.h)/2

        //assumes center

        withinX = x < rect.x + halfwidth && x > rect.x -  halfwidth

        withinY = y < rect.y +  halfheight  &&y > rect.y -  halfheight

        return withinX && withinY

    }
    M.circlesOverlap=function(c1, c2){

        var sum, dist, rads

        sum = sqr( c1.x - c2.x  ) +   sqr( c1.y - c2.y  )

        dist = sqrt(sum)

        rads = c1.r + c2.r

        return rads < dist
    }
    M.warp = function(lowBound,highBound,cushion){//wrp=
        cushion=cushion||0
        return function(num){
            return num<lowBound?highBound-cushion
                :num>highBound?lowBound+cushion
                :num
        }
    }


    testWarp=function(){z()
        s = stage = cjs.stage('z',500,500).tick().A()
        s.mug(function(bm){ m
            bm.sXY(.1).vXY(8,4).startMoving()
            bm.warpY(0,300,100).warpX(0,400,100)})}//easel
    testWarp2=function(){z()
        s = stage = cjs.stage('z',500,500).tick().A()
        s.mug(function(bm){  b=bm
            bm.sXY(.1).vXY(8,4).startMoving()

            bm.warp()
        })}
    testKillHitting=function(){

        s=cjs.stg()

        s.bm('me',0.3, function(b){b.drag().XY(100)})

        s.bm('sun',0.3, function(b){b.drag().XY(100)})

        s.bm('chicks',0.3, function(b){b.drag().XY(100)})

        s.bm('guy',0.8, function(b){guy=b
            guy.drag().makeMeAKiller()
        })





    }
    startStopButtons =function(){z(); var func
        b1= $.bt('start!', function(){

            func = stage.on('tick', function(ev){e=ev
                mug.X(10, '+')})


        })
        b2=$.bt('stop!',function(){


            stage.off('tick', func)
        })

        $.d().A(b1, b2   ).A()

        cjs.stage(600).tick().A().mug(0.2, function(bm) {mug=bm

            bm.XY(300).warp()

            SL(bm)

            // gun(  bm)

        })}
//it adds me and gives u two buttons.  just pass in a func
    startStopButtonsAbstract=function(f){z()

        $.d().A(

            b1 = $.bt('start!', f),


            b2=$.bt('stop!',
                function(){
                    bm.off(f)
                })

        ).A()

        s = cjs.stage(500).tick().A()
        s.bm('me', function(){

        })}
    testShootBullet=function(){

        s = cjs.stg()

        s.mug(.2, function(b){mug=b

            mug.startMoving(5,5).warp()

            $.kD('space', function(){

                mug.shootBullet()
            })

        })

    }
    shootBulletTimeBased = function(shooter){

        var stage =shooter.getStage(),

            w =stage.W(),
            h =stage.H(),

            bullet = cjs.circle(8,'w').XY(shooter.x+75, shooter.y)

        stage.A(bullet)

        p.timeStamp = function(func){

            return this.tick(

                function(e){

                    if(!N(j.ts)){
                        j.ts=0
                        j.lts= e.ts}


                    else{
                        j.ts=e.ts-j.lts
                        j.lts=e.ts
                        func(j.ts)}

                })
        }

        bullet.fn = stage.timeStamp(bullet,
            function(t){
                b.Y(t/5 ,'-')
            })


        onTick(function(){
            if(bullet.y < 200 || bullet.y > h ){
                $l('miss')
                bullet.remove()
                bullet.fn()  // ahhh to stop the timestamping !!!!
            }})

        return bullet}
    ugun=function(j){
        $.kD('space', function(){shootBulletTimeBased(j)}) }
    sbul=function(shooter){

        var stage = shooter.getStage(),

            w=stage.W(),
            h=stage.H(),
            x=shooter.x,
            y=shooter.y,
            vx=shooter.vx,
            vy=shooter.vy,

            bullet = cjs.circle(8, 'r')
        stage.A(bullet)


        //start the bullet moving
        bullet.fn = stage.timeStamp(function(){
            //in thise cae i dont think i'm using the timestamp
            bullet.move()
        })


        //set bullet's velocity to same as the shooter
        bullet.vY( shooter.vy ).vX( shooter.vx )

        //the function is just returned
        /// so .on('tick', func) is called.  fn is just storing what .on returns  //not sure for what.. maybe to stop/cancel it (pause)
        //this is moving something up the screen (reverse gravity)
        bullet.fn = stage.timeStamp(   function(timeStamp){bullet.Y( timeStamp/5 ,'-')})



        return bullet}
    sgun=function(j){kD('s',function(){

        sbul(j)

    })}

    CanvasBullet=function(x,y,dx,dy){ //oh its written for straight up canvas
        this.dx*=-5;
        this.dy*=-5;
        this.r=8;
        this.draw=function(){
            canvas.cir(
                this.x,this.y,
                this.r,'p','w')
        }
        this.update=function(){this.move()}
        Bullets.push(this)
    }




    CanvasGuy=function(x){
        var g={ x:200,y:200,r:20,
            dx:1,dy:1, c:0, h:1000,

            draw:function(){
                var t=this;
                x.cir(t.x,t.y,t.r,'b','y')},
            update:function(){
                var t=this
                t.x=wrp(0,1200,20)(t.x+t.dx)
                t.y=wrp(0,600, 20)(t.y+t.dy)}}
        g.draw()
        return g
    }


//shooters
    cjs.Guy=Guy=function(x,y,vx,vy, r ){

        radius=radius||10
        x=x||300
        y=y||300
        vx=vx||1;
        vy=vy||1

        var guy = cjs.cir(r, 'g', 'r')
        guy.XY(x,y).vXY(vx, vy)
        //cache
        //  guy.cc(-radius-10, -radius-10, radius*2+20, radius*2+20)
        guy.start =  function(){

            guy.funcRef = setInterval(function(){

                //if guy off screen, kill him
                if(guy.x<0||guy.y<0||guy.x>800||guy.y>600){
                    $l('guy is going..')
                    guy.remove()
                    guy.stop()
                    $l('guy is gone..')
                }

                else { guy.move() }

            }, 200)

            return guy}
        guy.stop =  function(){ clearInterval(guy.funcRef )}
        return guy
    }
    GreenGuy =  function(x,y,vx,vy){
        var b= cjs.cir(40,'g').XY(x,y)
        if(N(vx)){b.vX(vx)}
        if(N(vy)){b.vY(vy)}
        return b.startMoving()
    }

    testGuy=function(){z() // cant set a var to 'guy' ???

        s = $St(600,300).tick().A()
        g = Guy(100,100, 4,3)
        s.A(g)
        g.start()


        s.A(
            gg= GreenGuy(200,200,1,5)
        )

        g.warp()
        gg.warp()


        // why isnt bounce working?
    }

    addMeWithVelocityAndIBounce = function(x,y,vx,vy,stage){z()
        x=x||100
        y=y||100
        vx=vx||20
        vy=vy||20
        stage = stage || cjs.stage(400,400).tick().A()
        $(stage.canvas).drag()
        stage.bm('me',function(b){me=b
            if(N(vx)){b.vX(vx)};
            if(N(vy)){b.vY(vy)}
            b.XY(x,y).bounce().startMoving()
        })
    }
    newAsteroid=function(){ // new Asteroid?
        var a = cjs.Asteroid();
        a.A();
        a.start()}
    cjs.Asteroid = Asteroid= function(  x,y,r,vx,vy, stage){

        var _r = _.random

        stage = stage || cjs.stage(1000,1000).tick().A()


        x= x|| _r( stage.W() + 20 )  //stage.W checks bounds and error!!?
        y= y|| _r( stage.H() + 20 )

        radius= r|| _r(10)+5

        vx=vx|| _r(100)/25-2
        vy=vy|| _r(100)/25-2

        var ast = {
            circle:  cjs.circle( radius, 'w' ).XY(x,y).vXY(vx,vy),
            radius: radius,
            x: x,
            y: y}



        ast.remove = function(){ return ast.circle.remove() }
        ast.globalToLocal =function(){ return ast.circle.globalToLocal()}

        ast.add =   function(){stage.A( ast.circle )}

        ast.push =  function(){aA.push(a)}

        ast.update =  function(){

            ast.circle.move()
            ///replace all below with ast.circle.acc()
            if(ast.circle.ax){
                ast.circle.vX(a.circle.ax, '+')}
            if(ast.circle.aY){
                a.c.vY(a.c.ay,'+')} // (accelerateY accY)

            if(ast.circle.x > stage.W() || ast.circle.x < 0 ){
                ast.circle.vX('-')
                ast.circle.aX *= -1 // aX('-')
            } //so it starts accelerating the other way AND simulteanously bounces (both horizontally)

            //here it does the same with y.  ok i should demo it!
            if(a.circle.y > stage.H()|| a.circle.y <0 ){
                a.c.vY('-')
                a.c.ay *=-1
            }}  //ah, its a friction.. it probably goes opposite the velocity.  hmmmm that's friction!
        //so this is reverseDirection, which will check if it also needs to reverse any friction-acceleration direction

        // ast.circle.cache(-20,-20,40,40)

        return ast}
//uses guy
//wraps a container around guy
    newAst=function(){var a=Asteroid(); stage.A(a.circle); a.start()   }
    ASTEROIDS2 = CIRCLE2=function(){
        stage =s=createjs.stage(800,600).tick().A();
        Asteroids = []
        container =   new createjs.Container()
        stage.A(container)
        g= Guy(300, 300, 1, 1, 40, 'y')
        stage.A(guy)
        guy.start() //startMoving?
        guy.warp()

        stage.on('stagemousedown', function(e){
            g.vX((e.rawX - g.x)/10,'+')
            g.vY((e.rawY - g.y)/10,'+')
            if(g.vx>10){g.vX(10)}
            if(g.vy>10){g.vY(10)}
        })

        $.kD('space',function(){var badGuy = Guy(g.x, g.y, g.vx, g.vy)
            container.A(badGuy);
            badGuy.start() //.startMoving?
        })

        _.t(10, newAst)
        stage.tick(function(){
            _.e(Asteroids, function(ast, k){ast.update()
                _.e(container.children,
                    function(child){
                        localChild=child.globalToLocal( ast.x ,ast.y );
                        if(child.hitTest(localChild.x, localChild.y) ){
                            ast.rm(); $l('HIT')}})
                localChild=guy.globalToLocal(ast.x , ast.y )
                if(guy.hitTest(localChild.x, localChild.y) ){$l('hit'); co()  }   })  })
    }
// tt( 'f', 30 )
    ASTEROIDS = CIRCLE=function(){z()

        stage =s=cjs.stage(800,600).tick().A()

        stage.A( container =   new createjs.Container() )
        stage.A(

            g = Guy(300, 300, 1, 1, 40, 'y')

        )

        g.start()

        g.warp()


        Asteroids = aA=[];

        _.times(10, newAst)

        stage.on('stagemousedown', function(e){

            var badGuy = Guy(
                g.x(),g.y(),g.dx(),g.dy())

            container.A( badGuy )

            badGuy.start()

            g.vX((e.rawX- g.x)/10, '+')
            g.vY((e.rawY- g.y)/10, '+')

            if(g.vx>10){ g.vX(10)}
            if(g.vy>10){ g.vY(10)}

        })


        stage.tick(function(){var gx = g.x, gy=g.y
            _.e(Asteroids, function(a, k){var ax=a.x , ay=a.y
                a.update()
                _.e(container.children(), function(b){var bx= b.x, by= b.y
                    if(ax > bx-10&& ax<bx+10&&ay>by-10&&ay()<by+10){
                        $.body().C('*')
                        a.remove();//aA[k]=null;_.compact(aA)
                    }})
                if(ax>gx-40&&ax<gx+40&&ay>gy-40 && ay<gy+40){g.al(.01,'-')}
            })})
    }
    MEBOUNCEGAME=function(){z()

        stage=createjs.stage(500).tick().A()
        g = Guy(100, 100)
        stage.A( g )
        g.keyControls()
        g.warp()  /// gotta steal back 'ctr'.. get it :)
        addMeWithVelocityAndIBounce( 100, 100, 2, 4, stage)
        stage.on('stagemousedown', function(){
            me.shootBullet()
            g.shootBullet()
        })
    }
////
/////
/////
//withBall = wB=function(f){qG('/ball',f)}
    withGodzilla=function(func){ //gz anything?
        $.post('/godzilla', func)
    }
// wMb(function(b){SL(b.wh(60).xy(100,400),'-')},s)//  wMb(function(b){SL(b.wh(60).xy(400,100),'+')},s)
    sunInACanvas=function(){
        return $.c('X',500).fit('sun')
    }
    multiGroupBall =  function(data, y){
        ball = $w['ball']|| dva()
        var moveBallTo = function(b){ ball.XY(b.x, b.y) }
        if(U(d)){ $.get('/ball', moveBallTo) }
        else {
            if(N(data)){data={x:data, y:N(y)?y:data}}
            $.post('/ball', data, function(){$.get('/ball', moveBallTo)})
        }
    }
//gives a randomly doctored number (u pass in number and +/-/)..
//not sure why it called cage
//used for LISTING things (blog posts, etc)
    $.blip = blp=function(s, div){

        //topic, datetime, content

        var g=G(arguments),
            s=g[0],

            div=g[1],

            theSpan = $.span(),
            post=s

        post.topic = post.t
        post.user = post.u
        post.datetime = post.dt
        post.content = post.c

        if(g.p){
            theSpan.A(
                $.bt('topic: '+ post.topic,
                    function(){
                        topic = post.topic;  tab4.load()  }   ),
                $.h3( post.content ))
            if(post.datetime){
                theSpan.A($.h5( dt(post.datetime).dt() ) )
            }
        }


        else if(g.n){

            theSpan.A(
                $.bt('user: '+ post.user, function(){from=post.user;tab3.load()}),
                $.br(),
                $.bt( 'topic: '+post.topic, function(){topic=s.t;tab4.load()}),
                $.h3(post.content) )
            if(post.datetime){theSpan.A( $.h5( dt(post.datetime).dt() ) )}
        }

        else if(g.d){
            theSpan.A(
                $.bt('user: '+post.user, function(){
                    from=post.user;
                    tab3.load()}),
                $.br(),
                $.h3(post.content)
            )
            if(post.datetime){theSpan.A($.h5( dt(post.datetime).dt() ) )}
        }
        else {
            if(post.datetime){theSpan.A($.h4( dt(post.datetime).dt() ) )}
            theSpan.A($.h1(post.content))}
        if(post.du){theSpan.A($.c('X', 400).A().fit( post.du ))}
        theSpan.A($.hr())
        return D(div)? div.A( theSpan ): theSpan
    }
//api calls
    withStatusX = wUSt=function(user,func){//with first status?

        qG('/sts1',

            {u: user},

            function(status){ func(status.c) })
    }
    $mailButton = btMail=function(message, user){

        return $.bt('mail',

            function(){

                $.post('/sMsg',   {m: message.V(), to: user.u}

                )})}
    $chatButton  =function(username, message){ //= btChat  //_$username,  messageTextarea
        mmm=message
        return $.bt('chat',
            function(){
                $l('send message')
                //$l('message: '+ message.V())
                $l('toWho: '+ username)
                $l('from: '+ _username)
                // mo= {  message: message.V(),  toWho:username,  from:_username  }
                socket.emit('sendPrivateMessage',
                    {  message: message.V(),  toWho:username,  from:_username  }
                )
            })
    }

    $buddyRequestButton =btRq=function(user){

        return $button('buddy-request',

            function(){

                $.post('/sRq', {to:user.u})

            })}
    $postsButton =btPst=function(){return $.bt('see posts', function(){})  }
    POSTS=function(){

        $.format()
        s1.A(
            dd= $.ipBox({
                boxTitle:'new post',
                url:'/pst', buttonText:'post',
                fn: home,
                inputType:'textAndTextArea'
            }),

            $.h2('attach:'),
            $.bt('pic', function(){
                m= $.pop(  ps= $.d().A( $.h3('pic select')  ) )
                $.getJSON('/img', function(pics){_.e(pics, function(p){
                    ps.A(  $.i(p.d)  .W(40).H(40).$( function(){
                        attached.E( $.i(p.d).W(20).H(20) )
                        m.modal( 'hide' )
                    } ))
                })
                })
            }),
            attached= $.d().A()
        )

        tab2=[
            'buds',
            function(){  TABS.E( $.h1('bud posts') )  }
        ]

        tab1=['all', function(){
            TABS.E($.h1('public posts'))
            qGE('/psts', function(i){blp(i, TABS, '-')})
        }
        ]
        tab3= $.tab('user',function(){
            u=$w['from']||'a'
            s1.E($.sp('topics: '))
            TABS.E(h1('user '+u+' blog'))
            qG('/pstu',{u:u}, function(i){ //ii=i
                blp(i, TABS, '+') },'+')})

        tab4= $.tab('topic',function(){
            TOPIC=$w['topic']||'fantasy'
            TABS.E(h1('posts on '+TOPIC+' topic'))
            qG('/pstt', {t:TOPIC},  function(i){  blp(i, TABS, '/') },'+')})

        tab5=['yours', function(){TABS.E($.h1('your posts'))
            qGE('/pst', function(i){blp(i,TABS,'+')})   }]

        s2.A(
            t= $.tabs(tab1,tab2,tab3,tab4,tab5))
        t.load()
    }
//avail=bbM({url:'/sts'})
//avails=bbC({model:avail, url:'/sts'})
    c3X=function(a){ return $.c(300).A().fit(a) }
    johnX=function(){

        var o={}

        o.d=3

        o.a=function(){o.d++}

        o.g=function(){return o.d}

        return o}
    fredX=function(){
        var o = john();

        o.m =function(){o.d--}
        return o
    }
    REQUESTSX=function(){var c=CT(),d=dv('y',800,600)
        c(d(h1('Buddy requests'),br(),
            MB=_d().w(600).h(500)( )).$$(function(){d.drg()}))
        qG('/gRq',function(msgs){_e(msgs,function(msg){MB(_d()(
            h6('from '+msg.fr+' on '+msg.dt),
            h5(msg.m),
            bt('accept',function(){qP('/yRq',{u:msg.fr})}),bt('deny'),hr()))})})}
    USERSX=function(){

        CT(h1('Users: '),br(),rr=row())
        getUsers(function(u){




            _e(u,function(u){  qP('/dud',{d:u.m}, function(m){
                rr(tn(pg(u.u),br(),m).o(function(){
                    win(_d()(br(),hr(),h3('User: '+ u.u), br(),
                        xc().w(300).h(300).f(m), s=h1(),  d=_d(),
                        ms=ta().c('w','z'),bt('mail',function(){qP('/sMsg',{m:ms.V(),to:u.u})}),
                        bt('chat',function(){iMsg(u.u,ms.V())}),
                        bt('buddy-request',function(){qP('/sRq',{to:u.u})})))

                    prof(u.u, d)

                    wUSt(u.u,function(s){
                        d(h1('STATUS: '+s))
                        d(bt('comment',function(){iMsg(u.u,ms.V())}),
                            bt('see feed',function(){iMsg( u.u, ms.V())}),
                            bt('see blog',function(){BLOG(u.u)}),
                            bt('challenge',function(){qP('/sRq',{to:u.u})}))})}))})})})



        tab1=['users',function(){


        }]

        tab2=['a',function(){}]
        tab3=['a',function(){}]
        tab4=['a',function(){}]

        s2(t=tabs(tab1,tab2,tab3,tab4))
        t.load()

    }
    BLOGX=function(u){

        z()
        WAPNAV()

        format()

        s1(h1('user '+u+' blog'))


        qG('/pstu',{u:u}, function(i){blp(i, s2, '+')},'+')}

}
