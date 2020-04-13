import Swiper from 'swiper/js/swiper';
import 'bootstrap/js/dist/modal';

function setSlidersButtonsPositionTop() {
    var sliders = $('.js-thumbs-slider__main');

    sliders.each(function(){
        let thisSlideHeight = $(this).find('.js-thumbs-slider__main-img').eq(0).outerHeight(),
            thisBtnHeight = $(this).parent().find('.swiper-button').eq(0).outerHeight(),
            thisButtonsPositionTop = thisSlideHeight/2 - thisBtnHeight/2 + 'px';
        console.log(thisSlideHeight);
        console.log(thisBtnHeight);
        console.log(thisButtonsPositionTop);

        $(this).parent().find('.swiper-button').css({
            'top': thisButtonsPositionTop
        })
    }); 
}

$(document).ready(function () {
    setSlidersButtonsPositionTop();
})

function initThumbsSlider() {
    let $slider = $('.thumbs-slider .thumbs-slider__main');

    $slider.each(function () {
        let paginationSlider = $(this).parent().find('.swiper-pagination')[0],
            nextButton = $(this).parent().find('.swiper-button-next'),
            prevButton = $(this).parent().find('.swiper-button-prev'),
            paginationSliderThumbs = $(this).find('.thumbs-slider__nav')[0];

            //console.log(buttonHeight);


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
                    // var slideHeight = $($(this)[0].$el).parent().find('img:eq(0)').outerHeight(),
                    //     buttonHeight = $($(this)[0].$el).parent().find('.swiper-button:eq(0)').outerHeight(),
                    //     sliderButtonPositionY = parseInt(slideHeight/2 - buttonHeight/2);

                    // console.log(slideHeight);
                    // console.log(buttonHeight);
                    // nextButton.css('top', sliderButtonPositionY);
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


