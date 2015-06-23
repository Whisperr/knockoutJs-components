define(['knockout', 'text!./home-page.html'], function (ko, template) {

    cmp.HomePage = function HomePage(params) {
        console.log(' _ home page _ ');
        console.dir(params);
        cmp.BasePage.call(this, params);
    }

    cmp.HomePage.prototype = Object.create(cmp.BasePage.prototype);


    return {
        viewModel: cmp.HomePage,
        template: template
    };

});
