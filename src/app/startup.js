/**
 * name space
 */
var cmp = cmp || {};

define(['jquery', 'knockout', './router', 'bootstrap', 'knockout-projections'], function ($, ko, router) {

    /**
     * base page model
     */
    cmp.BasePage = function basePage(params) {
        this.route = params.route;
        this.components = params.components;

        this.registerComponents(this.components);
    }

    /**
     * This runs when the component is torn down. Put here any logic necessary to clean up,
     * for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
     */
    cmp.BasePage.prototype.dispose = function () {};

    cmp.BasePage.prototype.routes = cmp.routes;

    cmp.BasePage.prototype.registerComponents = function (components) {
        var model = this;
        components.forEach(function(comp) {
            if(!ko.components.isRegistered(comp)) {
                ko.components.register(comp, {require: 'components/' + comp + '/' + comp});
                model.loadCss('components/' + comp + '/' + comp + '.css');
            }
        });
    };

    cmp.BasePage.prototype.loadCss = function loadCss(url) {
        var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = url;
        document.getElementsByTagName("head")[0].appendChild(link);
    };

    /**
     * wrapper function to make ajax GET requests
     * @param url
     */
    cmp.BasePage.prototype.httpGet = function httpGet(url) {
        var xmlHttp = new XMLHttpRequest();

        console.log(url);

        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                var result = JSON.parse(xmlHttp.responseText);
                return result;
            }
        }
        xmlHttp.open("GET", url, true);
        xmlHttp.send(null);
    }

    /**
     * page components
     */
    ko.components.register('home-page', {require: 'pages/home-page/home-page'});
    ko.components.register('pagination-page', {require: 'pages/pagination-page/pagination-page'});
    ko.components.register('about-page', {require: 'pages/about-page/about-page'});


    // [Scaffolded component registrations will be inserted here. To retain this feature, don't remove this comment.]

    // Start the application
    ko.applyBindings({
        route: router.currentRoute
    });
});
