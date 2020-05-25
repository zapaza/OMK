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
var unknownModalSlider,
    unknownActiveSlide;
$('body').on('click', '.js-unknown-slide', function (e) {
    e.preventDefault();
    $('#unknown_popup').modal('show');
    // unknownActiveSlide = $(this).closest('.js-unknown')[0].swiper.realIndex;
    unknownActiveSlide = $(this).parents().index();
    console.log( unknownActiveSlide);
})
function stopAllVideos() {
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
}
$('#unknown_popup').on('shown.bs.modal', function () {
    console.log('shown');
    let paginationSlider = $('.js-unknown-modal-slider').find('.swiper-pagination');
    unknownModalSlider = new Swiper('.js-unknown-modal-slider', {
        slidesPerView: 1,
        initialSlide: unknownActiveSlide,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            prevEl: '.js-unknown-modal-prev',
            nextEl: '.js-unknown-modal-next'
        },
        thumbs: {
            swiper: {
                el: '.js-unknown-modal-slider-nav',
                slidesPerView: 7,
                spaceBetween: 8,
                initialSlide: unknownActiveSlide,
            }
        }
    });
    stopAllVideos();
    playVidioInSlider();
});
$('#unknown_popup').on('hidden.bs.modal', function (e) {
    stopAllVideos();
});