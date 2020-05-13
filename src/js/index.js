import $ from "jquery";
import Swiper from 'swiper/js/swiper';
import "./import/modules";
import './import/inputs-animation';
import objectFitImages from 'object-fit-images'
import 'brazzers-carousel/Brazzers-Carousel/jQuery.Brazzers-Carousel.min'


global.jQuery = $;
global.$ = $;

objectFitImages('img', {
    watchMQ: true
});

//прогрессбар на текстовой странице
function articleScroll() {
    if ($('.article').length > 0) {

        let $article = $('.article'),
            progressBar = $article.children('.progress'),
            count = (($(window).scrollTop() / ($(document).height() - $(window).height())) * 100);

        if ($(window).scrollTop() > 0) {
            progressBar.children().css('width', count + '%')

        }
    }
}

function articleFooterInfoHide() {
    //скрытие блока с подпиской при скроле статьи
    if ($('.article__footer-info').length > 0) {
        let $element = $('.article__footer'),
            counter = 0;
        $(window).scroll(function () {
            if ($(window).innerWidth() <= 767) {
                let scroll = $(window).scrollTop() + $(window).height(),
                    offset = $element.offset().top + $element.height();

                if (scroll > offset && counter === 0) {
                    $('.article__footer-info').fadeOut(500);
                    counter = 1;
                } else if (scroll < offset && counter === 1) {
                    $('.article__footer-info').fadeIn(500);
                    counter = 0;
                }
            }
        });
    }
}

$(document).ready(() => {
    articleFooterInfoHide()

    //слайдер на главной стрнице, в низу страници
    if ($('.js-main-page__slider').length > 0) {
        var mainPageSlider = new Swiper('.js-main-page__slider .swiper-container', {
            speed: 500,
            spaceBetween: 24,
            slidesPerView: 'auto',
            navigation: {
                nextEl: '.js-main-page__slider .swiper-button-next',
                prevEl: '.js-main-page__slider .swiper-button-prev',
            },
            noSwipingClass: 'no-swiping',
            noSwiping: true,
            on: {
                init: () => {
                    //Показ кнопок только если слайдов больше, чем видно
                    let swiperInner = $('.js-main-page__slider');
                    let slidesLength = swiperInner.find('.swiper-slide').length;
                    if (slidesLength > 1) {
                        console.log($(this));
                        swiperInner.find('.swiper-button').addClass('show');
                        swiperInner.find('.swiper-pagination').addClass('show');
                        swiperInner.find('.swiper-wrapper').removeClass('no-swiping');
                    } else {
                        $(this).find('.swiper-wrapper').addClass('no-swiping');
                    }
                },

            },
            breakpoints: {
                100: {
                    spaceBetween: 16,
                },
                768: {
                    spaceBetween: 24,
                }
            }
        });
    }

    //слайдеры на странице новостей
    if ($('.js-slider-big').length > 0) {
        var newsSlider = new Swiper('.js-slider-big .swiper-container', {
            speed: 500,
            spaceBetween: 32,
            slidesPerView: 1,
            navigation: {
                nextEl: '.js-slider-big .swiper-button-next',
                prevEl: '.js-slider-big .swiper-button-prev',
            },
            pagination: {
                el: '.js-slider-big  .swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
            loop: true,
            noSwipingClass: 'no-swiping',
            on: {
                init: () => {
                    //Показ кнопок только если слайдов больше, чем видно
                    let swiperInner = $('.js-slider-big');
                    let slidesLength = swiperInner.find('.swiper-slide').length;
                    if (slidesLength > 1) {
                        swiperInner.find('.swiper-button').addClass('show');
                        swiperInner.find('.swiper-pagination').addClass('show');
                        swiperInner.find('.swiper-wrapper').removeClass('no-swiping');
                    } else {
                        swiperInner.find('.swiper-wrapper').addClass('no-swiping');
                    }
                },
            },
            breakpoints: {
                100: {
                    noSwiping: false
                },
                768: {
                    noSwiping: true
                }
            }
        });
    }

    if ($('.js-detours-slider').length > 0) {
        let detoursSlider = new Swiper('.js-detours-slider .swiper-container', {
            slidesPerView: 4,
            speed: 500,
            noSwipingClass: 'no-swiping',
            spaceBetween: 24,
            navigation: {
                nextEl: '.js-detours-slider .swiper-button-next',
                prevEl: '.js-detours-slider .swiper-button-prev',
            },
            on: {
                init: () => {
                    let swiperInner = $('.js-detours-slider');
                    let slidesLength = swiperInner.find('.swiper-slide').length;
                    if (slidesLength > 4) {
                        swiperInner.find('.swiper-button').addClass('show');
                        swiperInner.find('.swiper-pagination').addClass('show');
                        $(this).find('.swiper-wrapper').removeClass('no-swiping');
                    } else {
                        $(this).find('.swiper-wrapper').addClass('no-swiping');
                    }
                },
            },
            breakpoints: {
                1279: {
                    spaceBetween: 32
                },

                1024: {
                    slidesPerView: 4,
                    spaceBetween: 24
                },
                100: {
                    slidesPerView: 'auto',
                    spaceBetween: 16
                }
            }
        });
    }

    if ($('.js-video-gallery').length > 0) {


        let videoSlider = new Swiper('.js-video-gallery .swiper-container', {
            slidesPerView: 2,
            speed: 500,
            noSwipingClass: 'no-swiping',
            spaceBetween: 32,
            navigation: {
                nextEl: '.js-video-gallery .swiper-button-next',
                prevEl: '.js-video-gallery .swiper-button-prev',
            },
            on: {
                init: () => {
                    let swiperInner = $('.js-video-gallery');
                    let slidesLength = swiperInner.find('.swiper-slide').length;
                    if (slidesLength > 2) {
                        swiperInner.find('.swiper-button').addClass('show');
                        swiperInner.find('.swiper-pagination').addClass('show');
                        $(this).find('.swiper-wrapper').removeClass('no-swiping');
                    } else {
                        $(this).find('.swiper-wrapper').addClass('no-swiping');
                    }

                    let videoHeight = $('.js-video-gallery .video__preview').eq(0).outerHeight();
                    let videoBtnPositionTop = videoHeight / 2 + 'px';
                    $('.js-video-gallery .swiper-button').css({
                        'top': videoBtnPositionTop
                    });

                },
                resize: () => {
                    let videoHeight = $('.js-video-gallery .video__preview').eq(0).outerHeight();
                    let videoBtnPositionTop = videoHeight / 2 + 'px';
                    $('.js-video-gallery .swiper-button').css({
                        'top': videoBtnPositionTop
                    });
                }
            },
            breakpoints: {
                1279: {
                    spaceBetween: 32
                },

                1024: {
                    slidesPerView: 2,
                    spaceBetween: 24
                },
                100: {
                    slidesPerView: 'auto',
                    spaceBetween: 16
                }
            }
        });
    }

    //сладеры с миниатюрами , для текстовой
    if ($('.js-articles-slider').length > 0) {
        let videoSlider = new Swiper('.js-articles-slider .swiper-container', {
            slidesPerView: 3,
            speed: 500,
            noSwipingClass: 'no-swiping',
            spaceBetween: 32,
            navigation: {
                nextEl: '.js-articles-slider .swiper-button-next',
                prevEl: '.js-articles-slider .swiper-button-prev',
            },
            on: {
                init: () => {
                    let swiperInner = $('.js-articles-slider');
                    let slidesLength = swiperInner.find('.swiper-slide').length;
                    if (slidesLength > 3) {
                        swiperInner.find('.swiper-button').addClass('show');
                        swiperInner.find('.swiper-pagination').addClass('show');
                        $(this).find('.swiper-wrapper').removeClass('no-swiping');
                    } else {
                        $(this).find('.swiper-wrapper').addClass('no-swiping');
                    }
                },
            },
            breakpoints: {
                1279: {
                    spaceBetween: 32
                },

                1024: {
                    slidesPerView: 3,
                    spaceBetween: 24
                },
                100: {
                    slidesPerView: 'auto',
                    spaceBetween: 16
                }
            }
        });
    }

    //слайдер в списке объявлений
    if ($('.ads-slider').length > 0) {

        $('.ads-slider').brazzersCarousel();
    }


});

$(window).scroll(function () {
    articleScroll()
})

$(window).on('resize', function () {
    articleFooterInfoHide();
})

$('body').on('click', '.js-media-item--video', function () {
    $('#video_popup').modal('show');
});

$('body').on('click', '.js-results-nav__filters-btn', function () {
    $('.js-results-nav__selects').addClass('mobile-show');
    $('html, body').addClass('off-scroll');
});

$('body').on('click', '.js-top-close', function () {
    $('.js-results-nav__selects').removeClass('mobile-show');
    $('html, body').removeClass('off-scroll');
});

function resetResultsFiltersForm() {
    $('.js-results-nav-form .select-js').selectpicker('val', '');
    let datePicker = $('.js-results-nav-form .datapicker-js').datepicker().data('datepicker');
    datePicker.clear();
    $('.js-results-nav-form .datapicker-clear-js').parent().parent().find('.datapicker-trigger-js').show();
    $('.js-results-nav-form .datapicker-clear-js').parent().hide();
}

$('.js-results-nav-form').on('reset', function () {
    resetResultsFiltersForm();
});
