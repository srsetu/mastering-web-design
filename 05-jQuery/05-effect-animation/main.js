$(document).ready(function () {
    $('.fadeOut').click(function () {
        $('h1').fadeOut(2000);
    });
    $('.fadeIn').click(function () {
        $('h1').fadeIn(2000, function () {
            $('h1').css('color', 'red');
        });
    });

    $('.toggle').click(function () {
        $('h1').fadeToggle(4000);
    });

    $('.slideUp').click(function () {
        $('h1').slideUp(4000);
    });
    $('.slideDown').click(function () {
        $('h1').slideDown(4000);
    });

    $('.toggleSlide').click(function () {
        $('h1').slideToggle(4000);
    });

    $('.Stop').click(function () {
        $('h1').stop();
    });

    $('.animate').click(function () {
        $('div').animate({
            left: '100px',
        });
        $('div').animate({
            top: '100px',
            height: '200px',
            width: '200px',
        });
        $('div').animate({
            left: '0',
        });
        $('div').animate({
            top: '0',
            width: '50px',
            height: '50px',
        });
    });
});
