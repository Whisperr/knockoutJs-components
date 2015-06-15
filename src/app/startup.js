define(['jquery', 'knockout', './router', 'bootstrap', 'knockout-projections'], function ($, ko, router) {

    /**
     * page components
     */
    ko.components.register('home-page', {require: 'pages/home-page/home'});

    // ... or for template-only components, you can just point to a .html file directly:
    ko.components.register('about-page', {
        template: {require: 'text!pages/about-page/about.html'}
    });

    ko.components.register('pagination-page', {require: 'pages/pagination-page/pagination-page'});

    /**
     * web components
     * contained in page components
     */
    ko.components.register('pagination', {require: 'components/pagination/pagination'});
    ko.components.register('nav-bar', {require: 'components/nav-bar/nav-bar'});

    // [Scaffolded component registrations will be inserted here. To retain this feature, don't remove this comment.]

    // Start the application
    ko.applyBindings({route: router.currentRoute});
});
