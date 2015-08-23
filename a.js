require('./server/both')

$h=  require('http'); $p=   require('path'); $f=  require('fs')
$e=  require('express'); $a = $e(); $a.u= $a.use; $a.g=$a.get; $a.s= $a.set
_.e({port: process.env.PORT||4000,     'view engine' :'jade',     views: __dirname + '/views/'}, function(v,k){$a.s(k,v)})
require('./public/defaultMug')

//parsers
$a.u($e.bodyParser({
    uploadDir:__dirname+"/public/uploads",
    keepExtensions:true
}))
$a.u(ckP = $e.cookieParser('xyz'))

//mongo
$mg = require('mongoose')
$mg.connect("mongodb://localhost/brain", function () {
    $l('mongo connected')
})
$Md = md = $m = models = require('./server/model/models');//require('./mongodb') // raw mongo
$cM = connectMongo = require('connect-mongo')
mongoStore = new (connectMongo($e))({db: 'brain'})
$a.u($e.session({
    store: mongoStore,
    secret: 'xyz'
})); //$a.use( $e.favicon() )


//mw
$mw= mw= $w = require('./server/mw')
$a.use($mw)

//route
$a.g('/render/:page', function (q, p) {
    p.render(q.params.page)
})
require('./server/routes/routes')()
require('./server/routes/appRoutes')()
$a.g('/play/:a/:p?', function (q, p) {
    p.render('play', {app: q.params.a, pam: q.params.p})
})
dirs = [

    '/public/deps', '/public/deps/css', '/public/deps/js', '/public/pics', '/public/graphics', '/public/uploads',
    '/public/deps/ui-images', // assets: where i can publically, statically fetch items from // css, fonts, js (bs, cjs, jq, string, us)
    '/lib/core/both',
    '/lib/core/front', '/lib/core/front/html', '/lib/core/front/rules', '/lib/core/front/dom', '/lib/core/front/js',
    '/lib/core/front/css', '/lib/core/front/test', '/lib/core/frontAdv',
    '/lib/core/can',
    '/lib/boot',
    '/lib/easel/create', '/lib/easel/createCore', '/lib/easel/protoCore',
    '/lib/fiz', '/lib/fiz/coll', '/lib/fiz/query', '/lib/fiz/world', '/lib/fiz/arcade', '/lib/fiz/advancedButWorks',
    '/lib/fiz/protos', '/lib/fiz/fizApps',
    '/lib/geo', //,'/../js/phaserjs', '/../js/phaser2', '/../js/melon', '/../js/three'
    '/spaz',
    '/wap'
]


_.e(dirs, function (dir) {
    $a.use($e.static($p.join(__dirname, dir)))
})   // dir= __dirname +'/'+ dir //$a.use($e.static(dir))
$a.use($a.router)


//http
$hS= sv = httpServer = $h.createServer($a)
$hS.listen(80, function(){
    $l('server listening on port 80')

})


//socket
$sIO= socketIO = require('socket.io')
$ssSIO=sessionSocketIO   = require('session.socket.io')
io = socketIO.listen($hS)
io.set('log level', 1)
require('./server/sockets')(io, new sessionSocketIO(io, mongoStore, ckP))