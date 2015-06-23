define(['jquery', 'knockout', 'text!./pagination-page.html'], function ($, ko, template) {

    cmp.PaginationPage = function PaginationPage(params) {
        console.log('pagination page');
        var model = this;

        cmp.BasePage.call(this, params);

        /**
         * data needed for pagination
         */
        this.itemsPerPage = 10; //default value 10 items/page
        this.totalPages = ko.observable(1); //default value of total pages
        this.currentPage = ko.observable(1);
        this.currentPage.subscribe(function(val){
            model.visibleGroup(model.images[val-1]);
            console.dir(model.visibleGroup());
        });
        this.visibleGroup = ko.observableArray();
        this.images = [];
        $.getJSON('http://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=technology,data,web&jsoncallback=?', function(data) {
            var allItems = data.items,
                itemCount = allItems.length,
                totalpages = itemCount/model.itemsPerPage;

            model.totalPages(totalpages);

            while(allItems.length) {
                model.images.push(allItems.splice(0, model.itemsPerPage));
            }
            model.visibleGroup(model.images[0]);
        });
    };

    cmp.PaginationPage.prototype = Object.create(cmp.BasePage.prototype);

    return {
        viewModel: cmp.PaginationPage,
        template: template
    };

});
