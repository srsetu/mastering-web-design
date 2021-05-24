$(document).ready(function () {
    // addClass
    // $('button.btn1').click(function () {
    //     $('h1').addClass('custom');
    // });
    // removeClass
    // $('button.btn2').click(function () {
    //     $('h1').removeClass('custom');
    // });
    // toggleClass
    // $('button.toggle').click(function () {
    //     $('h1').toggleClass('custom');
    // });
    // each
    // let arr = [1, 2, 3, 4];
    // jQuery.each(arr, function (i, val) {
    //     console.log(i);
    // });
    // css
    // $('h1').css({
    //     color: 'orange',
    //     'font-size': '40px',
    //     'background-color': 'purple',
    // });
    // text
    // $('h1').text('Hello');
    // html
    // $('h1').html('<span style="color: red">Hello jQuery</span>');
    // append
    let str = '<li>Item Five</li>';
    // $('ul').append(str);

    // prepend

    // $('ul').prepend(str);
    // appendTo

    // $('h1').appendTo('ul');

    // prependTo

    // $('h1').prependTo('ul');
    // before

    // $('.hello').before('<li style="color: red">hello from jquery</li>');

    // after

    $('.hello').after('<li style="color: red">hello from jquery</li>');

    // attr
    // $('a').attr('title', 'JS Bangladesh');

    // removeAttr
    $('a').removeAttr('title');
    // wrap

    // $('li').wrap('h1');
    // wrapAll

    // $('li').wrapAll('h1');
    // empty

    // $('ul').empty();

    // detach

    $('ul').detach();
});
