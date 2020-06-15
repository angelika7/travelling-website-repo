$(document).ready(function() {

    new WOW().init();

    // Animate elements

    $(".home-box__img").waypoint(function(direction) {
        $(".home-box__img").toggleClass('animated slideInLeft');
    }, {
        offset: "85%"
    });

    $('.home-box__description').waypoint(function(direction) {
        $('.home-box__description').toggleClass('animated slideInRight');
    }, {
        offset: "85%"
    });

    $('.destination-main__box .info').waypoint(function(direction) {
        $('.destination-main__box .info').toggleClass('animated fadeInRight');
    }, {
        offset: "80%"
    });

    $('.destination-others__description').waypoint(function(direction) {
        $('.destination-others__description').toggleClass('animated fadeInLeft');
    }, {
        offset: "70%"
    });

    $('.form-box').waypoint(function(direction) {
        $('.form-box').toggleClass('animated zoomIn');
    }, {
        offset: "80%"
    });

    // Show arrows

    $(window).scroll(function(){
        if ($(this).scrollTop() > 950) {
            $('.top').fadeIn() && $('.down').fadeIn();
        } else {
            $('.top').fadeOut() && $('.down').fadeOut();
        }
    });

    // Back to the top / Go to the bottom

    $('.top').click(function(){
        $('html, body').animate({scrollTop : 0}, 100);
        return false;
    });

    $('.down').click(function(){
        $('html, body').animate({scrollTop: $(document).height()}, 100);
        return false;
    });

    // Prevent default

    $("a[href='.']").click(function(e) {
        e.preventDefault();
    });

    // Show hamburger menu

    $('.hamburger').on('click', function() {
        $('.nav__list').toggleClass('open');
        $('.hamburger').toggleClass('hamburger--active');
    });

    // Close hamburger menu

    $('.nav__item').on('click', function() {
        $('.nav__list').removeClass('open');
        $('.hamburger').removeClass('hamburger--active')
    });

});                                 