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
        slidesPerView: 'auto',
        spaceBetween: 32,
        initialSlide: unknownActiveSlide,
        navigation: {
            prevEl: '.js-unknown-modal-prev',
            nextEl: '.js-unknown-modal-next'
        }
    })
});