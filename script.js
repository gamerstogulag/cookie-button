$(function() {
    var gotItButton = document.getElementsByClassName('cc-compliance');
    var navBar = $('.navbar');
    var navBar2 = $('.navbar-2');
    var newNavBar = $('.new-navbar');

    navBar2.hide();

    $('button').click(function() {
        $(navBar2).clone().appendTo(newNavBar);
        navBar2.show();
        $(navBar2).animate({
            'marginTop' : "+=70px" //moves up
        });
        console.log('asdklfjalkj');
    });
});
