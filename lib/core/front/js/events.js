_.fA=function(a){return function(){alert(a)}}

function advance(){
    $.fn.in=function(num){
        var g=G(arguments)
        this.delay(num * 1000)
        return this
    }
    $.fn.ho=$.fn.hold=function(a){
        a.P('s')
        this.A(a)
    }
    $.fn.tl=$.fn.trans=function(transform){
        $l('transform')
        return this.css({transform: transform})}
    $.fn.selPic=function(){
        $('.pic').e(function(){$(this).C('b')})
        this.parent().C('y')
        //$(pic).parent().C('y')
    }
    $.fn.dg=function(){return this.drag()}
    $.fn.drag = function(){

        this.A()
        this.each(function(){
            $(this).css('top', $(this).position().top )
            $(this).css('left', $(this).position().left)})

        this.P('a')

        this.on('mousedown', function(e){

            var el = $(this)

            var offset = el.offset(),
                deltaX = e.pageX-offset.left,
                deltaY = e.pageY-offset.top

            $('html').on('mousemove', function(e){
                var x=e.pageX - deltaX,
                    y=e.pageY - deltaY

                el.left(x)
                el.top(y)

            }).on( 'mouseup' , function(){  $(this).off() })

        })

        //touchDrg(element)
        return this

    }
    $.fn.free=function(){
        $('body').A( this )
        this.P('a')
    }//?
    $.fn.cw=$.fn.centerOnWindow = function(){
        this.css("position","absolute");
        this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +
                $(window).scrollTop()) + "px");
        this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
                $(window).scrollLeft()) + "px" )
        return this}
    $.fn.xc=$.fn.xCenter=function(){

        return this.P( 'a' ).css({  left: '50%', 'margin-left': '-100px'  })}
    $.fn._getPosition=function(){



        var e = this[0],
            x = 0,
            y = 0

        while (_.isElement(e)) {
            y += e.offsetTop
            x += e.offsetLeft
            if (isBodyElement(e)){e=0}
            e=e.offsetParent||e
        }
        return { x: x, y: y }

        function isBodyElement(e){return O(e)&& e.tagName.toUpperCase() == 'BODY'}


    }
    $.fn.dg= $.fn.drag = function(){

        this.A()
        this.each(function(){
            $(this).css('top', $(this).position().top )
            $(this).css('left', $(this).position().left)})

        this.P('a')

        this.on('mousedown', function(e){

            var el = $(this)

            var offset = el.offset(),
                deltaX = e.pageX-offset.left,
                deltaY = e.pageY-offset.top

            $('html').on('mousemove', function(e){
                var x=e.pageX - deltaX,
                    y=e.pageY - deltaY

                el.left(x)
                el.top(y)

            }).on( 'mouseup' , function(){  $(this).off() })

        })

        //touchDrg(element)
        return this

    }
    $.fn.dismiss=function(a){
        return this.attr('data-dismiss',a)}
    $.fn.xBt=$.fn.delButton=function(){var el=this
        el.pp( $.d().A( $.bt(  'x', function(){ el.rm() })
                    .K('pull-right').mar(20)
            )
        )
        return el}



    $.fn.free=function(){

        $('body').A( this )

        this.P('a')
    }
    $.fn.dismiss=function(a){
        return this.attr('data-dismiss',a)}
    $.fn.delButton=function(){
        var that=this

        this.prepend(

            $.div().A(
                $.button(  'x', function(){ that.remove() }).K('pull-right').mar(20)
            )

        )


        return this}
    $.fn.centerOnWindow = function(){
        this.css("position","absolute");
        this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +
                $(window).scrollTop()) + "px");
        this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
                $(window).scrollLeft()) + "px" )
        return this}
    $.fn.xCenter=function(){

        return this.P( 'a' ).css({  left: '50%', 'margin-left': '-100px'  })}
    $.fn._getPosition=function(){



        var e = this[0],
            x = 0,
            y = 0

        while (_.isElement(e)) {
            y += e.offsetTop
            x += e.offsetLeft
            if (isBodyElement(e)){e=0}
            e=e.offsetParent||e
        }
        return { x: x, y: y }

        function isBodyElement(e){return O(e)&& e.tagName.toUpperCase() == 'BODY'}


    }




    // Use $.serializeJSON as namespace for the auxiliar functions
// and to define defaults


    $.fn.slD= $.fn.slideDown
    $.fn.slU= $.fn.slideUp


    $.fn.wor = $.fn.world = function () {
        var can = this
        var w = b2d.wor.apply(null, arguments).bug(can, 30, '*')
        w.can = can
        w.ctx = can.ctx()
        return w
    }
    $.fn.gw=$.fn.grow = function(){

        originalWidth =  this.W()
        originalHeight = this.H()

        this.on('mousedown', function(e){


            mx = e.clientX
            my = e.clientY


            $.mouseMove(function(e){

                this.WH( originalWidth +  e.clientX - mx,
                    originalHeight +  e.clientY - my )

            })

            $.mouseUp(function(){ $(this).off() })  //mouseUp anything?
            this.children().on('mousedown', function(e){e.stopPropagation()})

        })

    }
    $.fn.fr =  function (n, w) {
        if (O(n)) {q.bp(n.n, n.w)}
        else {q.bp(n * w)}
        return this
    }
}
json=function(){
    _.jS=function(a,b,c){return S(a)? $.Gj(a,b,c) : JSON.stringify(a)}
    _.jP=function(a,b,c){return  S(a)?JSON.parse(a,b) :$(a).prepend(b,c)}
    // jQuery('form').serializeJSON()
    $.fn.serializeJSON = function (options) {
        var serializedObject, formAsArray, keys, value, f, opts;


        f = $.serializeJSON;

        formAsArray = this.serializeArray(); // array of objects {name, value}

        opts = f.optsWithDefaults(options); // calculate values for options {parseNumbers, parseBoolens, parseNulls}

        serializedObject = {};


        $.each(formAsArray, function (i, input) {


            keys = f.splitInputNameIntoKeysArray(input.name); // "some[deep][key]" => ['some', 'deep', 'key']
            value = f.parseValue(input.value, opts); // string, number, boolean or null

            if (opts.parseWithFunction) value = opts.parseWithFunction(value); // allow for custom parsing

            f.deepSet(serializedObject, keys, value, opts);

        })


        return serializedObject
    }
// Use $.serializeJSON as namespace for the auxiliar functions
// and to define defaults
    $.serializeJSON = {
        defaultOptions: {
            parseNumbers: false, // convert values like "1", "-2.33" to 1, -2.33
            parseBooleans: false, // convert "true", "false" to true, false
            parseNulls: false, // convert "null" to null
            parseAll: false, // all of the above
            parseWithFunction: null, // to use custom parser, use a function like: function (val) => parsed_val
            useIntKeysAsArrayIndex: false // name="foo[2]" value="v" => {foo: [null, null, "v"]}, instead of {foo: ["2": "v"]}
        },

// Merge options with defaults to get {parseNumbers, parseBoolens, parseNulls, useIntKeysAsArrayIndex}
        optsWithDefaults: function (options) {
            var f, parseAll;
            if (options == null) options = {}; // arg default value = {}
            f = $.serializeJSON;
            parseAll = f.optWithDefaults('parseAll', options);
            return {
                parseNumbers: parseAll || f.optWithDefaults('parseNumbers', options),
                parseBooleans: parseAll || f.optWithDefaults('parseBooleans', options),
                parseNulls: parseAll || f.optWithDefaults('parseNulls', options),
                parseWithFunction: f.optWithDefaults('parseWithFunction', options),
                useIntKeysAsArrayIndex: f.optWithDefaults('useIntKeysAsArrayIndex', options)
            }
        },
        optWithDefaults: function (key, options) {
            return (options[key] !== false) && (options[key] || $.serializeJSON.defaultOptions[key]);
        },

// Convert the string to a number, boolean or null, depending on the enable option and the string format.

        parseValue: function (str, opts) {
            var value, f;
            f = $.serializeJSON;
            if (opts.parseNumbers && f.isNumeric(str)) return Number(str); // number
            if (opts.parseBooleans && (str === "true" || str === "false")) return str === "true"; // boolean
            if (opts.parseNulls && str == "null") return null; // null
            return str; // otherwise, keep same string
        },

        isObject: function (obj) {return obj === Object(obj)}, // is this variable an object?
        isUndefined: function (obj) {return obj === void 0}, // safe check for undefined values
        isValidArrayIndex: function (val) {return /^[0-9]+$/.test(String(val))}, // 1,2,3,4 ... are valid array indexes
        isNumeric: function (obj) {return obj - parseFloat(obj) >= 0}, // taken from jQuery.isNumeric implementation. Not using jQuery.isNumeric to support old jQuery and Zepto versions
// Split the input name in programatically readable keys
// "foo" => ['foo']
// "[foo]" => ['foo']
// "foo[inn][bar]" => ['foo', 'inn', 'bar']
// "foo[inn][arr][0]" => ['foo', 'inn', 'arr', '0']
// "arr[][val]" => ['arr', '', 'val']
        splitInputNameIntoKeysArray: function (name) {
            var keys, last, f;
            f = $.serializeJSON;
            if (f.isUndefined(name)) {
                throw new Error("ArgumentError: param 'name' expected to be a string, found undefined");
            }

            keys = $.map(name.split('['), function (key) {
                last = key[key.length - 1];
                return last === ']' ? key.substring(0, key.length - 1) : key;
            });

            if (keys[0] === '') {
                keys.shift();
            } // "[foo][inn]" should be same as "foo[inn]"
            return keys;

        },
// Set a value in an object or array, using multiple keys to set in a nested object or array:
//
// deepSet(obj, ['foo'], v) // obj['foo'] = v
// deepSet(obj, ['foo', 'inn'], v) // obj['foo']['inn'] = v // Create the inner obj['foo'] object, if needed
// deepSet(obj, ['foo', 'inn', '123'], v) // obj['foo']['arr']['123'] = v //
//
// deepSet(obj, ['0'], v) // obj['0'] = v
// deepSet(arr, ['0'], v, {useIntKeysAsArrayIndex: true}) // arr[0] = v
// deepSet(arr, [''], v) // arr.push(v)
// deepSet(obj, ['arr', ''], v) // obj['arr'].push(v)
//
// arr = [];
// deepSet(arr, ['', v] // arr => [v]
// deepSet(arr, ['', 'foo'], v) // arr => [v, {foo: v}]
// deepSet(arr, ['', 'bar'], v) // arr => [v, {foo: v, bar: v}]
// deepSet(arr, ['', 'bar'], v) // arr => [v, {foo: v, bar: v}, {bar: v}]
//
        deepSet: function (o, keys, value, opts) {
            var key, nextKey, tail, lastIdx, lastVal, f;
            if (opts == null) opts = {};
            f = $.serializeJSON;
            if (f.isUndefined(o)) {
                throw new Error("ArgumentError: param 'o' expected to be an object or array, found undefined");
            }
            if (!keys || keys.length === 0) {
                throw new Error("ArgumentError: param 'keys' expected to be an array with least one element");
            }
            key = keys[0];
// Only one key, then it's not a deepSet, just assign the value.
            if (keys.length === 1) {
                if (key === '') {
                    o.push(value); // '' is used to push values into the array (assume o is an array)
                } else {
                    o[key] = value; // other keys can be used as object keys or array indexes
                }
// With more keys is a deepSet. Apply recursively.
            } else {
                nextKey = keys[1];
// '' is used to push values into the array,
// with nextKey, set the value into the same object, in object[nextKey].
// Covers the case of ['', 'foo'] and ['', 'var'] to push the object {foo, var}, and the case of nested arrays.
                if (key === '') {
                    lastIdx = o.length - 1; // asume o is array
                    lastVal = o[lastIdx];
                    if (f.isObject(lastVal) && (f.isUndefined(lastVal[nextKey]) || keys.length > 2)) { // if nextKey is not present in the last object element, or there are more keys to deep set
                        key = lastIdx; // then set the new value in the same object element
                    } else {
                        key = lastIdx + 1; // otherwise, point to set the next index in the array
                    }
                }
// o[key] defaults to object or array, depending if nextKey is an array index (int or '') or an object key (string)
                if (f.isUndefined(o[key])) {
                    if (nextKey === '') { // '' is used to push values into the array.
                        o[key] = []
                    } else if (opts.useIntKeysAsArrayIndex && f.isValidArrayIndex(nextKey)) { // if 1, 2, 3 ... then use an array, where nextKey is the index
                        o[key] = []
                    } else { // for anything else, use an object, where nextKey is going to be the attribute name
                        o[key] = {}
                    }

                }
// Recursively set the inner object
                tail = keys.slice(1)
                f.deepSet(o[key], tail, value, opts)
            }
        }
    }
};json()
$.fn.serializeJSON = function (options) {
    var serializedObject, formAsArray, keys, value, f, opts;


    f = $.serializeJSON;

    formAsArray = this.serializeArray(); // array of objects {name, value}

    opts = f.optsWithDefaults(options); // calculate values for options {parseNumbers, parseBoolens, parseNulls}

    serializedObject = {};


    $.each(formAsArray, function (i, input) {


        keys = f.splitInputNameIntoKeysArray(input.name); // "some[deep][key]" => ['some', 'deep', 'key']
        value = f.parseValue(input.value, opts); // string, number, boolean or null

        if (opts.parseWithFunction) value = opts.parseWithFunction(value); // allow for custom parsing

        f.deepSet(serializedObject, keys, value, opts);

    })


    return serializedObject
}


