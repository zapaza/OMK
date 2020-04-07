import Swiper from 'swiper/js/swiper';
import 'bootstrap/js/dist/modal';

$(document).ready(function () {
    if ($('.thumbs-slider').length > 0) {

        let $slider = $('.thumbs-slider .thumbs-slider__main');

        $slider.each(function () {
            let paginationSlider = $(this).parent().find('.swiper-pagination')[0],
                nextButton = $(this).parent().find('.swiper-button-next')[0],
                prevButton = $(this).parent().find('.swiper-button-prev')[0],
                paginationSliderThumbs =  $(this).find('.thumbs-slider__nav')[0],
                slideHeight = $(this) .children('.swiper-wrapper').find('.swiper-slide .thumbs-slider__main-img').height(),
                sliderButton = $(this).parent().find('.swiper-button'),
                sliderButtonPositionY = parseInt(slideHeight / 2);


            let galleryThumbs = new Swiper(this, {
                slidesPerView: 1,
                pagination: {
                    el: paginationSlider,
                    type: 'fraction',
                },
                navigation: {
                    nextEl:  nextButton,
                    prevEl:  prevButton ,
                },
                thumbs: {
                    swiper : {
                        el :  paginationSliderThumbs,
                        slidesPerView: 7,
                        spaceBetween : 8,
                    }
                },
                on: {
                    init: function () {
                        sliderButton.css('top', sliderButtonPositionY)
                    },
                },
            });
        });
    }
})




