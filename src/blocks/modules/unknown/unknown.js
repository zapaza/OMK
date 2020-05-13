import Swiper from 'swiper/js/swiper';

$(document).ready(function () {
    if ($('.js-unknown').length > 0) {
        $('.js-unknown').each(function () {
            let slider = $(this),
                prevEl = slider.parent().find('.swiper-button-prev'),
                nextEl = slider.parent().find('.swiper-button-next');
            let unknownSlider = new Swiper(slider, {
                slidesPerView: 'auto',
                spaceBetween: 32,
                freeMode: true,
                navigation: {
                    prevEl: prevEl,
                    nextEl: nextEl
                },
                breakpoints: {
                    1279: {
                        spaceBetween: 32
                    },

                    1024: {
                        spaceBetween: 24
                    },
                    100: {
                        slidesPerView: 'auto',
                        spaceBetween: 16
                    }
                }
            })
        });
    }
});
var unknownModalSlider, unknownActiveSlide;
$('body').on('click', '.js-unknown-slide', function () {
    $('#unknown_popup').modal('show');
    unknownActiveSlide = $(this).closest('.js-unknown')[0].swiper.realIndex;
    console.log(unknownActiveSlide);
})

$('#unknown_popup').on('shown.bs.modal', function () {
    console.log('shown');
    unknownModalSlider = new Swiper('.js-unknown-modal-slider', {
        slidesPerView: 1,
        initialSlide: unknownActiveSlide,
        navigation: {
            prevEl: '.js-unknown-modal-prev',
            nextEl: '.js-unknown-modal-next'
        },
        thumbs: {
            swiper: {
                el: '.js-unknown-modal-slider-nav',
                slidesPerView: 7,
                spaceBetween: 8
            }
        },
    })
});