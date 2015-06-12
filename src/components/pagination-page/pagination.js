ko.components.register('pagination', {
    viewModel: function(params) {
        this.data = params.value;

        this.currentPage = this.data.currentPage;
        this.totalPages = this.data.totalPages;
        this.noResults = this.data.noResults;

        this.goToFistPage = function () {
            self.currentPage(1);
        }

        this.goToLastPage = function () {
            self.currentPage(self.totalPages());
        }

        this.goToNextPage = function () {
            if (self.currentPage() < self.totalPages()) {
                self.currentPage(self.currentPage() + 1);
            }
        }

        this.goToPrevPage = function () {
            if (self.currentPage() > 1) {
                self.currentPage(self.currentPage() - 1);
            }
        }
    },
    template: (function() {
        var html = "";

        html += '<div class="no-results" data-bind="css: {hidden: totalPages() > 0}, text: noResults">no results</div>';
        html += '<div class="pagination" data-type="financial" data-bind="css: {hidden: totalPages()  == 0 }">';
        html += '<span class="firstPage" data-bind="event: {tap:  goToFistPage }, css: {inactive: currentPage()  === 1}">1</span>';
        html += '<span class="prevPage" data-type="prev" data-bind="event: {tap: goToPrevPage}, css: {inactive:  currentPage()  === 1 }"><i class="fa fa-chevron-left"></i></span>';
        html += '<span class="currentPage" data-bind="text: currentPage()"></span>';
        html += '<span class="nextPage" data-type="next" data-bind="event: {tap:  goToNextPage }, css: {inactive: currentPage()  === totalPages() }"><i class="fa fa-chevron-right"></i></span>';
        html += '<span class="lastPage" data-bind="event: {tap:  goToLastPage }, text: totalPages, css: {inactive: currentPage() === totalPages() }"></span>';
        html += '</div>';

        return html;
    })()
});