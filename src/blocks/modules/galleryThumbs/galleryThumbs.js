import Swiper from 'swiper/js/swiper';
import 'bootstrap/js/dist/modal';


function initThumbsSlider() {
    let $slider = $('.thumbs-slider .thumbs-slider__main');
    console.log($slider.length);

    $slider.each(function () {
        let paginationSlider = $(this).parent().find('.swiper-pagination')[0],
            nextButton = $(this).parent().find('.swiper-button-next'),
            prevButton = $(this).parent().find('.swiper-button-prev'),
            paginationSliderThumbs = $(this).find('.thumbs-slider__nav')[0],
            slideHeight = $(this).children('.swiper-wrapper').find('.swiper-slide .thumbs-slider__main-img').height(),
            sliderButtonPositionY = parseInt(slideHeight / 2);





        let galleryThumbs = new Swiper(this, {
            slidesPerView: 1,
            pagination: {
                el: paginationSlider,
                type: 'fraction',
            },
            navigation: {
                nextEl: nextButton[0],
                prevEl: prevButton[0],
            },
            thumbs: {
                swiper: {
                    el: paginationSliderThumbs,
                    slidesPerView: 7,
                    spaceBetween: 8,
                }
            },
            autoHeight: true,
            on: {
                init: function () {
                    nextButton.css('top', sliderButtonPositionY);
                    // prevButton.css('top', sliderButtonPositionY);
                },
            },
        });
    });
}

$(document).ready(function () {
    if ($('.thumbs-slider').length > 0) {
        initThumbsSlider()
    }
});
$('body').on('click', '.thumbs-slider__zoom', function (e) {
    e.preventDefault();
    $('#gallery_popup').modal('show');
});
$('#gallery_popup').on('shown.bs.modal', function () {
    initThumbsSlider()
});


