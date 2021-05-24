$(document).ready(function () {
    // $('button').click(function () {
    //     $('h1').css('color', 'red');
    // });

    // $('button').on('dblclick', function () {
    //     $('h1').css('color', 'red');
    // });

    // $('button').hover(function () {
    //     $('h1').css('color', 'red');
    // });
    // let heading = $('h1');
    // $('button').mouseenter(function () {
    //     heading.css('color', 'red');
    // });
    // $('button').mouseleave(function () {
    //     heading.css('color', 'initial');
    // });

    // $('button').click(function () {
    //     $('h1').toggle();
    // });

    // $(window).resize(function (e) {
    //     alert('resized');
    // });

    // $(':text').focus(function () {
    //     $(this).css('background', 'red');
    // });
    // $(':text').blur(function () {
    //     $(this).css('background', '#fff');
    // });

    // $('form').submit(function (e) {
    //     e.preventDefault();
    //     let val = $(':text').val();

    //     console.log(val);
    // });

    $('form').submit(function (e) {
        e.preventDefault();
        console.log($('option').val());
    });
});
