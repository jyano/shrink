

$.fU= $.fileUpload =  function(lb, t){
    var fG =  $.d().K("form-group").A(
        $.lb(  D(lb) ? lb  : 'upload file',  'upl'  ).K('control-label').fS(20),
        $.ip().ty('file').id('upl').name('i')
    )
    if(t){
        fG.A(   $.p(t).K('help-block')   )}
    return fG
}



UPLOAD=function(){
    f =  $.f().attr({
        method:'post',
        enctype: 'multipart/form-data',
        action: '/pic'
    }).C('o').A($.fU(''),
        $.sm().val('ok').K("show"))
    $.pop(f, {title: 'upload a new pic'} ).dg()
}

UPLOADS=function(){

    $l('in uploads')
    $.fm()
    instr= 'You have uploaded these pics. Click to make a sprite, or hit the x to delete..'
    y = 80
    n=0
    $.eG('myPics',  function(p){
        $l('pic: ' + n++)

        $.picDiv(y).A($.pic(p), $.delBt('/pic', p))

        y+= 220
    })
    /*
     $.G('myPics',  function(p){_.e(p, function(p){

     $l('pic: ' + n++)
     $.picDiv(y).A($.pic(p), $.delBt('/pic', p))
     y+= 220
     })

     })*/

    s2.A($.h4(instr))
}


//<div class="form-group">
//      <label style="font-size: 20px;" class="control-label" for="upl">
//              upload file
//      </label>
//      <input name="i" id="upl" type="f">
// </div>