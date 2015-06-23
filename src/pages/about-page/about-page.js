define(['knockout', 'text!./about-page.html'], function (ko, template) {

    cmp.AboutPage = function AboutPage(params) {
        console.log(' _ about page _ ');
        cmp.BasePage.call(this, params);
    }

    cmp.AboutPage.prototype = Object.create(cmp.BasePage.prototype);


    return {
        viewModel: cmp.AboutPage,
        template: template
    };

});