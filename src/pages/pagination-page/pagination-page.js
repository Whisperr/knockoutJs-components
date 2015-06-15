define(['knockout', 'text!./pagination-page.html'], function (ko, template) {

    function PaginationPage(params) {
        this.message = ko.observable('Hello from the pagination component!');
        this.totalPages = ko.observable(10);
        this.currentPage = ko.observable(1);
        this.route = params.route;

        function loadCss(url) {
            var link = document.createElement("link");
            link.type = "text/css";
            link.rel = "stylesheet";
            link.href = url;
            document.getElementsByTagName("head")[0].appendChild(link);
        }

        loadCss('/components/src/components/pagination/pagination.css');
    }

    // This runs when the component is torn down. Put here any logic necessary to clean up,
    // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
    PaginationPage.prototype.dispose = function () {};

    return {
        viewModel: PaginationPage,
        template: template
    };

});
