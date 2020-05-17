import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar';
import 'jquery-mousewheel/jquery.mousewheel';

$('body').on('click', function (e) {
    var div = $(".js-search"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        $('.js-search-dropdown').slideUp(400); // скрываем его
    }
});

$('.js-search-dropdown').mCustomScrollbar({
    axis: "y",
    scrollInertia: 400,
    scrollBarPosition: "insight"
})

$('body').on('focus', '.js-search__input', function () {
    $('.js-search-dropdown').slideDown(400);
    if (window.innerWidth <= 575) {
        let searchPositionTop = $('.js-search').offset().top + 'px';
        $('.js-search').addClass('mobile-active');
        $('html, body').addClass('search-off-scroll');
        $('html').animate({
            scrollTop: searchPositionTop
        }, 400);
        setTimeout(function () {
            $('.js-search-close').addClass('active');
        }, 400);
        $('.js-search__input').addClass('active');
        $('.js-search-shade').addClass('active');
    }
});

$('body').on('click', '.js-search-close', function () {
    console.log('click');
    if (window.innerWidth <= 575) {
        $('.js-search').removeClass('mobile-active');
        $('html, body').removeClass('search-off-scroll');
        $('.js-search__input').removeClass('active');
        $('.js-search-dropdown').slideUp(400);
        $(this).removeClass('active');
        $('.js-search-shade').removeClass('active');
    }
});

$('body').on('input', '.js-search__input', function () {
    if ($(this).val().length >= 2) {
        console.log('Показываем результаты поиска');
    } else {
        console.log('Показываем блок "Вы недавно искали"');
    }

    var searchValue = $(this).val();
    $('.js-search-dropdown__link').each(function () {
        var resultValue = $(this).find('.text').text();
        var searchValueNew = new RegExp(searchValue, 'i');
        var fix = resultValue.replace(searchValueNew, (el) => {
            return '<span class="red">' + el + '</span>'
        });
        $(this).find('.text').html(fix);
    });

});

$(document).ready(function () {
    if ($('.js-search').length > 0) {
        $(window).resize(function () {
            if (window.innerWidth > 575) {
                $('.js-search').removeClass('mobile-active');
                $('html, body').removeClass('search-off-scroll');
                $('.js-search-close').removeClass('active');
                $('.js-search-shade').removeClass('active');
                $('.js-search__input').removeClass('active');
                $('.js-search-dropdown').slideUp(400);
            }
        })
    }
});