import Swiper from 'swiper/js/swiper';

$(document).ready(function () {
    if ($('.js-default-slider').length > 0) {

        $('.js-default-slider').each(function () {
            let slider = $(this),
                prevEl = slider.parent().find('.swiper-button-prev'),
                nextEl = slider.parent().find('.swiper-button-next');
            let defaultSlider = new Swiper(slider, {
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
var defaultModalSlider,
    defaultActiveSlide;
$('body').on('click', '.js-default-slider-slide', function (e) {
    e.preventDefault();
    $('#default-slider_popup').modal('show');
    // default-sliderActiveSlide = $(this).closest('.js-default-slider')[0].swiper.realIndex;
    defaultActiveSlide = $(this).parents().index();
    console.log( defaultActiveSlide);
})
/*function stopAllVideos() {
    let $this = $('.video'),
        videoLength = $this.length;
    for (i = 0; i < videoLength; i++) {

        let thisFrame = $this.eq(i).find('.video__player');

        thisFrame.pause;
        $this.eq(i).find('.video__preview').stop().fadeIn(300);
        $this.eq(i).find('.video__time').stop().fadeIn(300);

    }
}
function playVidioInSlider(){
    if ($('video').length > 0){
        $('body').on('click', '.thumbs-slider  .video__preview', function () {
            let $this = $(this),
                $thisVideo = $this.closest('.video').find('.video__player');
            stopAllVideos();
            $this.parent().find('.video__preview').stop().fadeOut();
            $this.parent().find('.video__time').stop().fadeOut();
            $thisVideo.trigger('play');
        })

    }
}*/
$('#default-slider_popup').on('shown.bs.modal', function () {
    console.log('shown');
    let paginationSlider = $('.js-default-slider-modal-slider').find('.swiper-pagination');
    defaultModalSlider = new Swiper('.js-default-slider-modal-slider', {
        slidesPerView: 1,
        initialSlide: defaultActiveSlide,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            prevEl: '.js-default-slider-modal-prev',
            nextEl: '.js-default-slider-modal-next'
        },
        thumbs: {
            swiper: {
                el: '.js-default-slider-modal-slider-nav',
                slidesPerView: 7,
                spaceBetween: 8,
                initialSlide: defaultActiveSlide,
            }
        }
    });
   /* stopAllVideos();
    playVidioInSlider();*/
});
// $('#default-slider_popup').on('hidden.bs.modal', function (e) {
//     // stopAllVideos();
// });