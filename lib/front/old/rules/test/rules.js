EXT=function(){$.x('x','ext')

    $CSS({
        d:{
            ex:'icon',
            C:'z',c:'w', mx:{  size:[250] }
        }
    })
    $.d(['hello'])
    $CSS()
}
BORD=function(){$.x('x', 'bordered')
    $CSS({

        _bordered: {
            'border-top': 'dotted 1px black',
            'border-bottom': 'solid 2px black'
        },

        //And we want to use these properties inside other rule-sets. Well, we just have to drop in the name of the class where we want the properties, like so:


        '#menu a': {
            ex: '_bordered',
            c:'r'
        },


        '.post a': {
            c:'r',
            ex: '_bordered'
        }


    })
    $CSS()

}
SIZE=function(){$.x('x','size')

    $CSS({

        d: { C:'z',c:'w',

            mx:{

                size:[250]
            }
        }

    })


    $.d(['hello'])
    $CSS()
}
