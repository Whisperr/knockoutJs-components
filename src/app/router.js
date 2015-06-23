define(["knockout", "crossroads", "hasher"], function(ko, crossroads, hasher) {

    // This module configures crossroads.js, a routing library. If you prefer, you
    // can use any other routing library (or none at all) as Knockout is designed to
    // compose cleanly with external libraries.
    //
    // You *don't* have to follow the pattern established here (each route entry
    // specifies a 'page', which is a Knockout component) - there's nothing built into
    // Knockout that requires or even knows about this technique. It's just one of
    // many possible ways of setting up client-side routes.

    function Router(config) {

        var router = this;
        this.currentRoute = ko.observable({});

        var routes = [];

        ko.utils.arrayForEach(config.routes, function(route) {
            routes.push(route.params.page);
            crossroads.addRoute(route.url, function(requestParams) {
                router.currentRoute(ko.utils.extend(requestParams, route.params));
            });
        });

        /**
         * remove duplicate values from routes
         * @type {Array.<T>}
         */
        routes =  routes.filter(function(item, pos, self) {
            return self.indexOf(item) == pos;
        });

        cmp.routes = routes;

        activateCrossroads();
    }

    return new Router({
        routes: [
            {
                url: '',
                params: {
                    page: 'home-page',
                    components: ['nav-bar']
                }
            },
            {
                url: 'home-page',
                params: {
                    page: 'home-page',
                    components: ['nav-bar']
                }
            },
            {
                url: 'about-page',
                params: {
                    page: 'about-page',
                    components: ['nav-bar']
                }
            },
            {
                url: 'pagination-page',
                params: {
                    page: 'pagination-page',
                    components: ['pagination', 'nav-bar', 'image-grid']
                }
            }
        ]
    });


    function activateCrossroads() {
        function parseHash(newHash, oldHash) { crossroads.parse(newHash); }
        crossroads.normalizeFn = crossroads.NORM_AS_OBJECT;
        hasher.initialized.add(parseHash);
        hasher.changed.add(parseHash);
        hasher.init();
    }
});