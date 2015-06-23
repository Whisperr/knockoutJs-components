define(['knockout', 'text!./pagination.html', 'text!./pagination.css'], function (ko, template) {

    function Pagination (params) {
        this.data = params.data;

        this.currentPage = this.data.currentPage;
        this.totalPages = this.data.totalPages;
        this.noResults = this.data.noResults;

        this.goToFistPage = function () {
            console.log('go to first page');
            this.currentPage(1);
        }

        this.goToLastPage = function () {
            this.currentPage(this.totalPages());
        }

        this.goToNextPage = function () {
            if (this.currentPage() < this.totalPages()) {
                this.currentPage(this.currentPage() + 1);
            }
        }

        this.goToPrevPage = function () {
            console.log('go to last page');
            if (this.currentPage() > 1) {
                this.currentPage(this.currentPage() - 1);
            }
        }
    };

    return {
        viewModel: Pagination,
        template: template
    };

});

