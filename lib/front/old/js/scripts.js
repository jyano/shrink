
$.scr=function(scr, fn){
    return $.getScript(scr, fn)
}


$.getMultiScripts = function(arr, path) {
    var _arr = $.map(arr, function(scr) {return $.getScript( (path||"") + scr )})
    //_arr.push($.Deferred(function( deferred ){$( deferred.resolve )}))
    return $.when.apply($, _arr)
}

SCRIPTS = _.map([
    "socket.io/socket.io","string", 'bb','bbmn', 'ko','mel','gq', 'objects', 'defaultMug',  'spriteSheets',
    'core', 'jqueryplugins', 'html', 'boot','ui' ,'can','sys',  'images', 'event','socket', 'ranky',  'routeTests', 'nav', 'api', 'j3', 'display',  'animate','imagine','work','tween', 'universe', 'create',  'easel', 'displayObject',  'shape', 'text', 'mobile','animation','sprites', 'bitmap', 'toolkit', 'stage', 'filt', 'draw', 'solve','playgame','users','share','chat' , 'messages', 'knock', 'bbtemps','backbone1','people','mar', 'backbone', 'angu'

    // ,'melon','gquery','ph','phaser0','phaser','ninja', 'ph2','bx','b2dbasics','b2dutils', 'invaders','three', 'iso', 'boxWorld','boxWorldMore','walls', 'makeworld', 'b2dSensors','playerWorld', 'boxRev','weld','prism','coll','gamey','pong','easelbox','joints','wheel',
    // 'emitter','p2fiddle','ragdoll','p2constraints','unigame',
    //  'tilemapping','launcher','fullgames','p2physics', 'controls','orbs',
    //  'shooter','boxBody','talkjs','mario','squares','edges','boxgame','boxDebug','boxFixt', 'boxShapes','player','pinball', 'examples'

],  function(js){return "/" + js + ".js"})

// _.each(SCRIPTS, function(scr){$.scr(scr)})
/*
 dfr = $.getMultiScripts(SCRIPTS)
 dfr.done(function(){alert('done')})
 .always(function(){
 alert('always')
 $.scr('app')
 })
 .fail(function(){alert('fail')})
 */