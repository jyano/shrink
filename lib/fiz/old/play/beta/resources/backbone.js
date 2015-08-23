$D=$Dt=function(){

    var dt=  new Date()

    return dt
}

$.ipV=$.ipBv=function(){

    var g=G(arguments),

        ip = $.ip(),

        ip.bV.apply(ip, g)

    return ip
}
$.fSb=$.fBsb=function(a,b){

    var f = $.f()

    f.bSb(a)

    if(A(b)){_.e(b, function(b){
        f.A(b)
    })}


    return f

}
$.olE=$.olBe=function(a,b){var ol= $.ol().bE(a)

    if(b){ol.A(b)}
    return ol
}
$.liT=$.liBt=function(a){return $.li().bT(a)}
$.bt$=$.btB$=function(a,b){return $.bt(a).b$(a)}
$.dW=$.dBw=function(a,b){

    var d=  $.d().bW(a)
    if(A(b)){_.e(b,function(b){
        d.A(b)
    })}
    return d
}
$.spT=$.spBt=function(a,b){return $.sp(b).bT(a)}


$o=function(a){
    return ko.o(a)
}

TWT=function(){$.z()
    $.fSb('g',[ 'u:', $.ipV('un'), $.sb('Get') ])
    $.dW('da',[
        $.h3('dt:', $.spT('dt') ),
        $.olE('MS', $.liT('ms')),
        $.bt$('Clr',' $parent.clr')
    ])
    ko.b({
        un : $o('@ex'),
        da : $o(),
        g:function(){vm.da({
            dt: $D(),
            MS: _.m(['a','b'],
                function(t){return {ms:vm.un()+':'+t}})
        })},

        clr: function(){ vm.da() }
    })
}


//<- $.bt('Clear tweets').b$(' $parent.clearResults')



VIRT=function(){$.z()

    $.d().b({randomOrder:true})
    $.d('First')
    $.d('Second')

    $.d('Third')
    ko.bindingHandlers.randomOrder = {

        init: function(elem, valueAccessor) {
            // Pull out each of the child elements into an array
            var childElems = []
            while(elem.firstChild)
                childElems.push(elem.removeChild(elem.firstChild))
            // Put them back in a random order
            while(childElems.length) {
                var randomIndex = M.fl(M.rn() * childElems.length),
                    chosenChild = childElems.splice(randomIndex, 1);
                elem.appendChild(chosenChild[0]);
            }
        }
    }


}

FLVIEWPLG=function(){$.z()
    ko.oa.fn.filterByProperty = function(propName, matchValue) {
        return ko.pureComputed(function() {
            var allItems = this(), matchingItems = [];
            for (var i = 0; i < allItems.length; i++) {
                var current = allItems[i];
                if (ko.unwrap(current[propName]) === matchValue)
                    matchingItems.push(current)}
            return matchingItems

        }, this)
    }


    $.h3('All tasks').A($.sp().bT('tasks().length'))

    $.ul().bE('tasks').A($.li().A(
        $.lb().A($.cb().bC('done'), $.sp().bT('title'))))
    $.h3('Done tasks').A($.sp().bT('doneTasks().length'))



    $.ul().bE('doneTasks').A( $.li().bT('text') )






    function Task(title, done) {

        this.title = ko.o(title)
        this.done = ko.o(done)
    }


    function AppViewModel() {

        this.tasks = ko.observableArray([
            new Task('Find new desktop background', true),
            new Task('Put shiny stickers on laptop', false),
            new Task('Request more reggae music in the office', true)
        ])

        // Here's where we use the custom function
        this.doneTasks = this.tasks.filterByProperty("done", true);
    }


    ko.b(new AppViewModel())



    /*alt:
     this.doneTasks = ko.pureComputed(function() {
     var all = this.tasks(), done = [];
     for (var i = 0; i < all.length; i++)
     if (all[i].done())
     done.push(all[i]);
     return done;
     }, this);
     */
}



VIRTP=function(){$z()

    ko.bindingProvider.instance.preprocessNode = function(node) {
        // Only react if this is a comment node of the form <!-- template: ... -->
        if (node.nodeType == 8) {
            var match = node.nodeValue.match(/^\s*(template\s*:[\s\S]+)/);
            if (match) {
                // Create a pair of comments to replace the single comment
                var c1 = document.createComment("ko " + match[1]),
                    c2 = document.createComment("/ko");
                node.parentNode.insertBefore(c1, node);
                node.parentNode.replaceChild(c2, node);

                // Tell Knockout about the new nodes so that it can apply bindings to them
                return [c1, c2];
            }
        }
    }


}


ko.bindingHandlers.randomOrder = {
    init: function(elem, valueAccessor) {
        // Build an array of child elements
        var child = ko.virtualElements.firstChild(elem),
            childElems = [];
        while (child) {
            childElems.push(child);
            child = ko.virtualElements.nextSibling(child);
        }

        // Remove them all, then put them back in a random order
        ko.virtualElements.emptyNode(elem);
        while(childElems.length) {
            var randomIndex = Math.floor(Math.random() * childElems.length),
                chosenChild = childElems.splice(randomIndex, 1);
            ko.virtualElements.prepend(elem, chosenChild[0]);
        }
    }
};


URLPLUG=function(){
    // Prototype for an observable<->URL binding plugin.
    (function () {
        var currentParams = {}, updateTimer, $ = window.jQuery;
        function ensureString(value) {
            return ((value === null) || (value === undefined)) ? value : value.toString();
        }

        // Gives an address (URL) to a view model state
        ko.linkObservableToUrl = function (observable, hashPropertyName, defaultValue) {
            // When the observable changes, update the URL
            observable.subscribe(function (value) {
                var valueToWrite = value === defaultValue ? null : ensureString(value);
                if (currentParams[hashPropertyName] !== valueToWrite) {
                    currentParams[hashPropertyName] = valueToWrite;
                    queueAction(function () {
                        for (var key in currentParams)
                            $.address.parameter(key, currentParams[key]);
                        $.address.update();
                    });
                }
            });
            // When the URL changes, update the observable
            $.address.change(function (evt) {
                currentParams[hashPropertyName] = hashPropertyName in evt.parameters ? evt.parameters[hashPropertyName] : null;
                observable(hashPropertyName in evt.parameters ? evt.parameters[hashPropertyName] : defaultValue);
            });
        }

        function queueAction(action) {
            if (updateTimer)
                clearTimeout(updateTimer);
            updateTimer = setTimeout(action, 0);
        }

        $.address.autoUpdate(false);
    })();
}

TPLIST=function(){

    $.h2('Your seat reservations').A(

        $.sp().bT(''seats().length)
    )


    $.h3(' Total surcharge:').bVs('totalSurcharge() > 0').A(
        $.s().bT('totalSurcharge().toFixed(2)')
    )

    $.t().A(
        $.tH().A(tr().A($.th().A('Pass name'), $.th().A('Meal'), $.th('charge') )),
        $.tB().bTp("{name:'reservationTemplate', foreach: seats}")
    )

    $.bt('Reserve another seat').b({
        $:'addSeat',
        en:'seats().length < 5'
    })



      $('<script type="text/x-jquery-tmpl" id="reservationTemplate" >').A(
          $.tr().A(
              $.td().A($.ip().bV('name')),
              $.td().A($.sl().b({o:'availableMeals', ot:'mealName'})),
              $.td().A($.a('Remove').b$('remove')) )
      )



        // Raw catalog data - would come from the server
        var availableMeals = [
            { mealName: "Standard (sandwich)", price: 0 },
            { mealName: "Premium (lobster)", price: 34.95 },
            { mealName: "Ultimate (whole zebra)", price: 290 }
        ]

        // Class to represent a row in the reservations grid

       seatReservation = function(name) {
            this.name = name;
            this.availableMeals = availableMeals;
            this.meal = ko.observable(availableMeals[0]);
            this.remove = function() { viewModel.seats.remove(this) }
            this.formattedPrice = ko.dependentObservable(function() {
                var price = this.meal().price;
                return price ? "$" + price.toFixed(2) : "None";
            }, this);
        }

        // Overall viewmodel for this screen, along with initial state
       vm = {
            seats: ko.observableArray([
                new seatReservation("Steve"),
                new seatReservation("Bert")
            ])
            ,addSeat: function() {
                this.seats.push(new seatReservation());
            }
        }

        vm.totalSurcharge = ko.dependentObservable(function() {
            var total = 0;
            for (var i = 0; i < this.seats().length; i++)
                total += this.seats()[i].meal().price;
            return total;
        }, vm);


        ko.b(vm)





}

KOSERV=function(){
    var express    = require('express')
        , app        = module.exports = express.createServer()
        ;

    app.configure(function(){
        app.use(express.bodyParser());
        app.use(app.router);
        app.use(express.static(__dirname + '/static'));  //static stuff
        app.use(express.static(__dirname + '/../libs')); //js files
    });

    app.get('/tasks', function (_,response) {
        response.send(
            [ { "title": "Wire the money to Panama", "isDone": true }
                , { "title": "Get hair dye, beard trimmer, dark glasses and \"passport\"", "isDone": false}
                , { "title": "Book taxi to airport", "isDone": false }
                , { "title": "Arrange for someone to look after the cat", "isDone": false }
            ]);
    });


    app.post('/tasks', function (request,response) {
        response.send(request.body); //echo
    });

    app.listen(process.argv[2]||8080);

    process.on('uncaughtException', function(err) {
        console.log(JSON.stringify(err));
    });

    console.log('servers up!');
}