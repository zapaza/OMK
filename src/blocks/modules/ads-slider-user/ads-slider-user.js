import Swiper from 'swiper/js/swiper';
import 'bootstrap/js/dist/modal';

$(document).ready(function () {

    if ($('.ads-user__photo-slider').length > 0){
        let $this = $('.js-ads-user__slider-main'),
            paginationSlider = $this.parent().find('.swiper-pagination')[0],
            nextButton = $this.parent().find('.swiper-button-next'),
            prevButton = $this.parent().find('.swiper-button-prev'),
            paginationSliderThumbs = $this.find('.js-ads-user__slider-nav')[0];

        let adsUserSlider = new Swiper ( $this , {
            slidesPerView: 1,
            pagination: {
                el: paginationSlider,
                type: 'fraction',
            },
            navigation: {
                nextEl: nextButton[0],
                prevEl: prevButton[0],
            },
            breakpoints:{
                100 :{
                    slidesPerView: 'auto',
                    spaceBetween: 8,
                    centeredSlides: true,

                },
                1024 : {
                    slidesPerView: 1,
                    spaceBetween: 0,
                }

            },
            thumbs: {
                swiper: {
                    el:  paginationSliderThumbs,

                    spaceBetween: 8,
                    breakpoints:{
                        1279 :{
                            slidesPerView: 7,
                        },
                        1023 : {
                            slidesPerView: 6,
                        }

                    }
                }
            },

        });
    }



});