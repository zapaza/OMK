$('body').on('click', '.js-close-menu', function (e) {
    e.preventDefault();

    $('.full-menu').removeClass('open');
})
$('body').on('click', '.js-show-all-menu', function (e) {
    e.preventDefault();

    $('.full-menu').addClass('open');
})
 let triggerShow = '.full-menu__link';

$('body').on('click', triggerShow, function (e) {
    if ($(window).innerWidth() < 1023) {
        e.preventDefault();
        $(this).toggleClass('opening');
        $(this).parent().next('.full-menu__group').stop().slideToggle();
    }
});


$('body').mouseup(function (e) {
    let div = $(".full-menu");
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        div.removeClass('open');
    }
});

$('body').on('click', '.js-show-user', function (e) {
    e.preventDefault();

    $('.header__user-popup').fadeToggle(300);

})
$('body').on('click', '.js-close-user-popup', function (e) {
    e.preventDefault();

    $('.header__user-popup').fadeToggle(300);

})

$('body').mouseup(function (e) {
    let div = $(".header__user-popup");
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        div.fadeOut(300);
    }
});

$(window).on('resize', function(){
    if ($(window).innerWidth() > 1023) {
        $('.full-menu__group').attr('style', '');
    }
});