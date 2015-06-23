define(['knockout', 'text!./nav-bar.html'], function (ko, template) {

    function NavBarViewModel(params) {
        this.data = params.data;

        this.route = this.data.route;
        this.routes = this.data.routes;
    }

    return {
        viewModel: NavBarViewModel,
        template: template
    };

});
