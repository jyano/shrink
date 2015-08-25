require('./both')


$h=  require('http')
$p=   require('path')
$f=  require('fs')

$mg=    require('mongoose')

$e=  require('express')
$cM= connectMongo = require('connect-mongo')
$sIO= socketIO = require('socket.io')
$ssSIO=sessionSocketIO   = require('session.socket.io')

require('./defaultMug')



 $mg.connect("mongodb://localhost/brain", function(){$l('mongo connected')})

 $Md= md= $m =  models =  require('./models');

 //require('./mongodb') // raw mongo


    mongoStore = new(connectMongo($e))({db:'brain'})

    e = E = $a = $e()

 $a.set('port', process.env.PORT||4000)

 $a.set('view engine' ,'jade');

 $a.set('views' , __dirname + '/../views/' )  //$l('env: ' + $a.get('env') )//$a.use( $e.logger('dev') ) //if(a.get('env')=="development"){a.use($e.errorHandler())}

 $a.use($e.bodyParser({
        uploadDir:__dirname+"/public/uploads",
        keepExtensions:true
    }))
    $a.use(cookieParser = $e.cookieParser('xyz'))
    $a.use($e.session({
        store: mongoStore,
        secret: 'xyz'
    })); //$a.use( $e.favicon() )


$l('before mw')

$mw= mw= $w = require('./middleware')
$a.use($mw)


    $a.get(
        '/render/:page', function(q, p){
            p.render(q.params.page)

        })

    require('./routes')()

    require('./appRoutes')()

    $a.use( $a.router )


    dirs= [

        '/public/deps',
        '/../public/deps/css',
        '/../public/deps/js',
        '/../public/pics', '/../public/graphics', '/../public/uploads',
        '/../public/deps/ui-images', // assets: where i can publically, statically fetch items from // css, fonts, js (bs, cjs, jq, string, us)


        '/../js',
        '/app',
        '/../js/wapp',




        '/../lib/core/both',





        '/../lib/core/front',

        '/../lib/core/front/html',

        '/../lib/core/front/rules',

        '/../lib/core/front/dom',

        '/../lib/core/front/js',

        '/../lib/core/front/css',
        '/../lib/core/front/test',
        '/../lib/core/frontAdv',


        '/../lib/core/can',





        '/../lib/easel/createCore',
        '/../lib/easel/protoCore',
        '/../lib/easel/create',
        '/../lib/boot',

        '/../js/games',
        '/../js/lib',
        '/../js/box2d',
        '/../js/knock',
        '/../js/back',
        '/../js/jqui',
        '/../js/mvc',
        '/../js/tests',
        '/../js/resources',
        '/../js/beta',
        '/../js/g'

        //,'/../js/phaserjs', '/../js/phaser2', '/../js/melon', '/../js/three'

    ]


    _.e(dirs, function(dir){
        $a.use($e.static($p.join(__dirname, dir)))
    })




$hS= sv = httpServer = $h.createServer($a)
$hS.listen(80, function(){ $l('server listening on port 80') })

io = socketIO.listen($hS)
io.set('log level', 1)
require('./sockets')(io,
    new sessionSocketIO(io, mongoStore, cookieParser))