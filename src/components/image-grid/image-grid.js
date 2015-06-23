define(['knockout', 'text!./image-grid.html'], function (ko, template) {

    function ImageGrid(params) {
        this.imageGroup = params.data;
    }

    return {
        viewModel: ImageGrid,
        template: template
    };

});
