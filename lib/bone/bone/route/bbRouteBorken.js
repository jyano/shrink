//
///*
// md.oRt=function(n,f){var o=this
// //"route:[name]" (params)
// // — Fired by the router when a specific route is matched.
// // "route" (route, params)
// // — Fired by the router when any route has been matched.
// //"route" (router, route, params)
// // — Fired by history when any route has been matched.
// if(U(f)){return o.o('route', n)}
// return o.o('route:'+n, f)
// }
// */
///*
//
// "route" (router, route, params)   by hs when a  rt  matches
// "route" (route, params) —   by rtr when a route   matches
// "route:[name]" (params)     Fired by rtr when a specific route is matched.
//
//
// Rtrs.Appl  = $R({
//
// r:{  account:  "account",
// "search/:query":   "search"   }
// })
//
// Rtrs.Mail = $R({
//
// 'mail':     "mail",  'mail/inbox':    'inbox',
// 'mail/:folder':   'folder,',
// 'mail/compose':    'compose'
//
//
// })
//
//
// new Routers.Application
// new Routers.Mail
// new Routers.Calendar
// new Routers.FindMyDevice
//
// Backbone.History.start {pushState: on}
//
// $(function(){  new WorkspaceRouter()  new HelpPaneRouter();
// Backbone.history.start({pushState: true}) })
//
// */
//
//
//
///*
//
//
// Routers
// In bb, routers provideway for you to connect URLs (either hash fragments, or real) to parts of your app.
// Any piece of your app that you want to be bookmarkable, shareable, and back-bt-able, needsURL.
//
// Some examples of routes using hash mark may be seen below:
//
// http://example.com/#about
// http://example.com/#search/seasonal-horns/page2
// An app will usually have at least one route mappingURL route to a fn that determines
// what happens when user reaches that route.
//
//
// continue pretending we’re creating a complex td app  that requires a complex TdRouter.
//
// TdRouter = bb.Rt.x({
//
// routes: {           "about" : "showAbout",    // Sample usage: http://example.com/#about
//
// "td/:id" : "getTd",  // ex of using":param" var which allows us to match  any of comps between two URL slashes  - Sample usage: http://example.com/#td/5 */
//"search/:query" : "searchTds",        /* We can also define multiple routes that are bound to same map fn,
// in this case searchTds(). Note below how we're optionally passing in a     ref to page number if one is supplied */ http://example.com/#search/job */
//"search/:query/p:page" : "searchTds",    // As we can see, URLs may contain as many ":param"s as we wish, http://example.com/#search/job/p1 */
//    "tds/:id/download/*documentPath" : "downloadDocument",        // This is example of using*splat. Splats are able to match any number of
//    URL components and can be combined with ":param"s*/          //   http://example.com/#tds/5/download/files/Meeting_schedule.doc
//// If you wish to use splats for anything beyond default routing, leave them at end ofURL otherwise you may need to apply regex parsing on your fragment
//"*other"    : "defaultRoute",        // This is df rt that also uses * splat. Consider the
//    df rt a wildcard for unmatched or incorrectly typed URLs   // Sample usage: http://example.com/# <anything>
//"optional(/:item)": "optionalItem",
//    "named/optional/(y:z)": "namedOptionalItem"   }, // Router URLs also support optional parts via parentheses, without having to useregex.
//
//
//showAbout: fn(){ },
//getTd: fn(id){ $l("You are trying to reach td " + id)  },  // id matched in above rt   passed to this fn
//searchTds: fn(query, page){$l("PgNum: "+ (page||1) + " of results for tds w word: "+query)},
//downloadDocument: fn(id, path){},
//defaultRoute: fn(oth){$l('Invalid. You attempted to reach:' + oth)}
//})
//
//
//
//tdRouter = new TdRouter()
//
//pushState support via window.history.pushState.
//    permits you to define routes such as
//http://backbonejs.org/just/an/example.
//will be supported with automatic degradation when user’s  bw doesn’t support pushState.
//    Note that it is vastly preferred if you’re capable of also supporting pushState on server side,
//    although it more difficult to implement.
//
//
//
//    Is therelimit to number of routers I should be using?
//
//    Andrew de Andrade has pointed out that DocumentCloud, creators of bb, usually only usesingle router in most of their apps.
//    You’re very likely to not require more than one or two routers in your own projects; majority of your app routing can be kept organized insingle router without it getting unwieldy.
//
//    bb.history
//Next, we need to init bb.history as it handles hashchange evs in our app. This will automatically handle routes that have been defined and trigger cbs when they’ve been accessed.
//
//    The bb.history.start() met will simply tell bb that it’s okay to begin monitoring all hashchange evs as follows:
//
//
//TdRouter = bb.Rt.x({
//    routes: {    "about" : "showAbout",
//        "search/:query" : "searchTds",
//        "search/:query/p:page" : "searchTds" },
//    showAbout: fn(){},
//searchTds: fn(query, page){    page_number = page || 1;    $l("Page number: " + page_number + " of results for tds containing word: " + query); }
//})
//
//tdRouter = new TdRouter();
//
//bb.history.start();
//
//// Go to and check console:
//// http://localhost/#search/job/p3   logs: Page number: 3 of results for tds containing word: job
//// http://localhost/#search/job      logs: Page number: 1 of results for tds containing word: job
//// etc.
//
//Note: To run last example,
//    you’ll need to createlocal development environment and test project,
//    which we will cover later on in book.
//
//    If you would like to update URL to reflect app state at particular point,
//    you can use router’s .navigate() met.
//    By default,
//it simply updates your URL fragment without triggering hashchange event:
//
////   imagine we would like spec fragment (edit) once user opens 1 td
//    TdRouter = bb.Rt.x({
//        rt: {    "td/:id": "viewTd",    "td/:id/edit": "editTd"},
//        viewTd: fn(id){ $l("Vw td requested.");    this.navigate("td/" + id + '/edit'); // updates fragment for us, but doesn't trigger route},
//    editTd: fn(id) {    $l("Edit td opened."); }
//})
//
//tdRouter = new TdRouter();
//
//bb.history.start();
//
///*
// // Go to: http://localhost/#td/4
// //
// // URL is updated to: http://localhost/#td/4/edit
// // but editTd() fn is not invoked even though loc we end up is mapped to it.
// //
// // logs: Vw td requested.
// It is also possible for Router.navigate() to trigger route along with updating URL fragment by passing trigger:true option.
//
// Note: This usage is discouraged. The recommended usage is one described above which createsbookmarkable URL when your app transitions to spec state.
//
// TdRouter = bb.Rt.x({
// rt: {    "td/:id": "viewTd",    "td/:id/edit": "editTd" },
// viewTd: fn(id){    $l("Vw td requested.");    this.navigate("td/" + id + '/edit', {trigger: true}); // updates fragment and triggers route as well },
// editTd: fn(id) {    $l("Edit td opened.") }})
// tdRouter = new TdRouter();
// bb.history.start();
//
// // Go to: http://localhost/#td/4 -> URL is updated to: http://localhost/#td/4/edit and this time editTd() fn is invoked.
// //
// // logs: Vw td requested. Edit td opened.
// A “route” event is also triggered on router in addition to being fired on bb.history.
//
// bb.history.on('route', onRoute);
//
// // Trigger 'route' event on router instance.
// router.on('route', fn(name, args) {  $l(name === 'routeEvent') })
//
// loc.replace('http://example.com#route-event/x');
// bb.history.checkUrl();
// */