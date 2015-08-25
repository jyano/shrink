$.fn.A=function(stuff){
    if( U(stuff)){$('body').append(this); return this}
    this.append.apply(this, arguments)
    return this}
$.fn.pp= $.fn.prepend
$.fn.a2=$.fn.ap2=function(a){a.A(this); return this}
$.fn.pp2=function(a){this.prependTo(a); return this}
$.fn.el = function(e){
    if(U(e)){
        $l( $('<div>').append(  this.clone()  ).html() )
        return this}}
$.fn.pa= $.fn.parent
$.PS=function(a,b,c){
    $(a).parents(b,c)
}
$.fn.ch=function(){return this.children()}
$.fn.fi= $.fn.find
$.fn.hd= $.fn.hide
$.fn.sh= $.fn.show
$.fn.gg = $.fn.toggle
$.fn.E=function(html){
    this.empty(); this.html(html); return this
}
$.fn.E=function(html){
    this.empty(); this.html(html); return this
}
$.fn.rm=function(){return this.remove()}
$.fn.rm=$.fn.xx=function(){var e=this

    e.remove()

    return e}
$.fn.rm=function(){return this.remove()}
function html(){
    $.fn.h= $.fn.ht=$.fn.html
    $.fn.oh=function(){return this[0].outerHTML}
    $.oh=outerHTML = function (a, b, c) {
        //return $l($('body').oh())
        if (A(a)) {return _.e(a, "$l(E(v).outerHTML)")}
        $l(E(a).outerHTML)}
}


$.fn.at= $.fn.attr
$.at= $.aa= $.attrs = function aa(q,b,c){

    q=Q(q);
    var  att=function(q,b,c){q=Q(q);
        if(U(c)){return q.attr(oO('a',b))}
        return q.attr(oO('a',b),$o(b,c,'R'))};
    return  U(b)? _p(aa,q)
        :A(b)? _r(b,function(m,k){
        return _s(m,k,aa(q,k))},{})
        :O(b)? $p('a',q,b,att)
        :att(q,b,c)
}

$.fn.hf=$.fn.href=function(href){
    if(U(href)){return this.attr('href')}
    this.attr('href',href); return this
}
$.fn.href=function(href){
    if(U(href)){return this.attr('href')}
    this.attr('href',href);return this
}

$.fn.hr=function(href){
    this.attr({href: href})
    return this
}
$.fn.id=function(id){ if(U(id)){ return this.attr('id')}; this.attr('id', id);return this     }
$.fn.id=function(id){ if(U(id)){ return this.attr('id')}; this.attr('id', id);return this     }

$.fn.name=function(name){ if(U(name)){ return this.attr('name')}; this.attr('name', name);return this     }
$.fn.n= $.fn.name=function(name){

    if(U(name)){ return this.attr('name')}
    this.attr('name', name);return this
}

$.fn.fr=$.fn.for=function(forWhat){return this.attr('for', forWhat)}
$.fn.for=function(forWhat){return this.attr('for', forWhat)}

$.sr = $.fn.src = function (a) {
    if (U(a)) {
        return this.attr('src')
    }
    this.attr('src', J.src(a))
    return this
}
$.fn.src  = function(a){


    if( U(a) ){return this.attr('src')}

    this.attr('src',  src(a) )

    return this
}
$.fn.role=function(role){
    if(U(role)){return this.attr('role')}
    this.attr('role', role)
    return this

}
$.ro = $.fn.role = function (role) {
    if (U(role)) {
        return this.attr('role')
    }
    this.attr('role', role)
    return this

}

$.fn.placeholder=function(forWhat){return this.attr('placeholder', forWhat)}
$.fn.ph= function(forWhat){return this.attr('placeholder', forWhat)}

$.fn.ty= $.fn.type=function(type){
    if(U(type)){return this.attr('type')}
    this.attr('type',type);return this
}
$.fn.type=function(type){
    if(U(type)){return this.attr('type')}
    this.attr('type',type);return this
}


//props:
$.pp= function pp(q,b,c){// pp=
    q=Q(q);
    var rop=function(q,b,c){
        q=Q(q);
        if(U(c)){return q.prop( oO('o', b) )}
        return q.prop(oO('o',b),
            $o(b,c,'R'))};
    return U(b)? _p($.props,q)
        :A(b)? _r(b,function(m,k){
        return _s(m,k, $.props(q,k))},{})
        :O(b)? $p('o',q,b,rop)
        :rop(q,b,c);
    //ex:  val=function(type, key){return HTML5.props(type,'v',key)}
    //ex:  typ=function(type, key){return HTML5.props(type,'t',key)}
}  //changed p -> o (oO)
$.fn.pp = function (a) {
    this.pp(a);
    return this
}
$.fn.v = function(v){var g=G(arguments),v

    if(D(v)){
        this.val(v)

        return this
    }
    v=this.val()
    if(!g.p){this.val('')}
    return v

}
$.fn.Vx=function(){
    var val= this.val()
    this.val('')
    return val
}


function json(){
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
}

function misc() {
    $.fn.e = $.fn.each
    $.fn.in = function (num) {
        var g = G(arguments)
        this.delay(num * 1000)
        return this
    }
    bd = function () {
        var bd = $('body');
        return bd
    }
    $.dc = function () {
        var dc
        dc = $(this.document)
        return dc
    }
    $.bd = function () {
        var dc
        bd = $('body')
        return bd
    }
    $.dcH = function (a) {
        $(a).H($.dc().H())
    }
    $.dO = function (a, b, c) {//$.dL=$.dR=
        $.dc().on(oE(a), b, c)
    }
    $.c$ = function (c) {
        $.bd().C(c || $r())
    }
    $.l$ = function (a) {
        $.c$();
        $l(a || '!');
        return a
    }
    $.A = function () {
        var g = G(arguments)
        g.e(function (a) {
            $('body').A(a)
        })
        return $
    }
    $.B = function () {
        var g = G(arguments)
        $l('if looking for bold, use $.b')
        g.e(function (a) {
            $('body').A(a)
        })
        return $('body')
    }
    $.iBE = $.isBodyElement = function (e) {
        e = $(e)[0];
        return O(e) && uC(e.tagName) == 'BODY'
    }
}