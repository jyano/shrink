Y.CHATS={}

$.chat = function (title, color, id) {
    var ip, sendBt, picBt, popBt, messages, dUS = $.d()
    if (Y.CHATS[title]) {
        $l('already in this room');
        return
    }
    title = title || 'chatbox'
    color = color || 'b'
    id = id || 'cbo'
    wd = $.w('chatroom: ' + title).id(id).css({
        'min-width': 600,
        'min-height': 400,
        'background-color': color
    })
    wd.A($.R().A(
        $.Cl(8,
            messages = $.d().id('cbi').C('u').ov('auto'),
            ip = $.ip().K('form-control'),
            sendBt = $.bt('send', function () {
                k.em('ChatMs', {

                    rm: title,
                    un: _username,
                    ms: ip.V()

                })
            }),

            popBt = $.bt('pop', function () {
                k.emit('p', ip.V(), title)
            }),
            picBt = $.bt('pic', function () {
                $.pop('pic select')
            })),
        $.Cl(4, $.h5('users:'), dUS)))

    uUS = function (users) {
        dUS.E()
        if (A(users)) {
            _.e(users, function (un) {
                dUS.A(
                    $.h5(un).$(function () {
                        $.popUser(un)
                    })
                )
            })
        }
        else {
            dUS.A($.h5('no users'))
        }
    }
    Y.CHATS[title] = chatController = {
        uUS: uUS,
        wd: wd, window: wd, w: wd,
        toggle: function () {
            return w.toggle()
        },
        write: function (m) {
            messages.A($.h5(m).col('w'))
        },
        writeBlack: function (m) {
            messages.A($.h5(m).col('z'))
        }
    }


    k.em('jRm', title)//why cant i change this emit name to joinRoom ???
    _.ev(.5, function () {
        k.em('rm', title)
    }) //repeatedly emit 'room', which launches room user updates!

}

$.btCh =  function (name) {
    return $.bt(name, function () {
        $.chat(name)
    }).mar(40)
}

$.chBt = function(un,ms){
    return $.bt('chat',
    function(){$l('mse: '+ ms.V() + ' toWho: '+ un+ ', from: '+ _username)
        k.em('IM', mo= {  message: ms.V(),  toWho:un,  from:_username  } )})
}




