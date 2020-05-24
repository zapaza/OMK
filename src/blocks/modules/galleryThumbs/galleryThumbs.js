import Swiper from 'swiper/js/swiper';
import 'bootstrap/js/dist/modal';

function setSlidersButtonsPositionTop() {
    let sliders = $('.js-thumbs-slider__main:not(.js-thumbs-slider__main--modal)');

    sliders.each(function () {
        let thisSlideHeight = $(this).find('.js-thumbs-slider__main-img').eq(0).outerHeight(),
            thisBtnHeight = $(this).parent().find('.swiper-button').eq(0).outerHeight(),
            thisButtonsPositionTop = thisSlideHeight / 2 - thisBtnHeight / 2 + 'px';

        $(this).parent().find('.swiper-button').css({
            'top': thisButtonsPositionTop
        })
    });
}

function setSlidersModalButtonsPositionTop() {
    let sliders = $('.js-thumbs-slider__main.js-thumbs-slider__main--modal');

    sliders.each(function () {
        let thisSlideHeight = $(this).find('.js-thumbs-slider__main-img').eq(0).outerHeight(),
            thisBtnHeight = $(this).parent().find('.swiper-button').eq(0).outerHeight(),
            thisButtonsPositionTop = thisSlideHeight / 2 - thisBtnHeight / 2 + 'px';

        $(this).parent().find('.swiper-button').css({
            'top': thisButtonsPositionTop
        })
    });
}

function setNavSlidersPositionTop(bigSliderItem) {

    let thisSliderItem = $(bigSliderItem),
        thisSlideHeight = thisSliderItem.find('.js-thumbs-slider__main-img').eq(0).outerHeight(),
        thisNavSliderHeight = thisSliderItem.find('.js-thumbs-slider__nav').eq(0).outerHeight(),
        thisNavSliderPositionTop = thisSlideHeight - thisNavSliderHeight - 8 + 'px';

    //console.log(thisSliderItem);
    //console.log(thisSlideHeight);
    //console.log(thisNavSliderHeight);
    //console.log(thisNavSliderPositionTop);

    thisSliderItem.find('.js-thumbs-slider__nav').css({
        'top': thisNavSliderPositionTop
    });

}
function setModalNavSlidersPositionTop() {

    let thisSliderItem = $('#gallery_popup'),
        thisSlideHeight = thisSliderItem.find('.js-thumbs-slider__main-img').eq(0).outerHeight(),
        thisNavSliderPositionTop = thisSlideHeight  - 8 + 'px';


    thisSliderItem.find('.js-thumbs-slider__nav').css({
        'top': thisNavSliderPositionTop
    });

}
$('.article .js-thumbs-slider__main').hover(function () {
    let bigSlider = $(this).closest('.thumbs-slider');
    setTimeout(function () {
        setNavSlidersPositionTop(bigSlider);
    }, 200);
})

function initThumbsSlider() {
    let $slider = $('.thumbs-slider .js-thumbs-slider__main:not(.js-thumbs-slider__main--modal)');
    //console.log($slider.length);

    $slider.each(function () {
        let paginationSlider = $(this).parent().find('.swiper-pagination')[0],
            nextButton = $(this).parent().find('.swiper-button-next'),
            prevButton = $(this).parent().find('.swiper-button-prev'),
            paginationSliderThumbs = $(this).find('.thumbs-slider__nav')[0];

        //console.log(paginationSliderThumbs);


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
                    spaceBetween: 8
                }
            },
            autoHeight: true,
            on: {
                init: function () {

                },
            },
        });
    });
}

function initModalThumbsSlider(activeTab) {
    //let $modalSlider = $('.thumbs-slider .thumbs-slider__main');
    //console.log($slider.length);
    console.log('init');

    let modalSlider = new Swiper('.js-thumbs-slider__main--modal', {
        slidesPerView: 1,
        initialSlide: activeTab,
        pagination: {
            el: '.js-modal-thumbs-slider .swiper-pagination',
            type: 'fraction'
        },
        navigation: {
            prevEl: '.js-modal-thumbs-slider .swiper-button-prev',
            nextEl: '.js-modal-thumbs-slider .swiper-button-next'
        },
        thumbs: {
            swiper: {
                el: '.js-thumbs-slider__nav--modal',
                slidesPerView: 7,
                spaceBetween: 8
            }
        },
        on: {
            init: function () {
                console.log('Modal slider init');
            }
        }
    })

}

$(document).ready(function () {
    if ($('.thumbs-slider').length > 0) {
        initThumbsSlider();
        setSlidersButtonsPositionTop();
    }
});

$(window).resize(function () {
    setNavSlidersPositionTop();
})

var modalOpenTargetBtn;

$('body').on('click', '.thumbs-slider__zoom', function (e) {
    e.preventDefault();
    modalOpenTargetBtn = $(this);
    $('#gallery_popup').modal('show');
});

$('#gallery_popup').on('shown.bs.modal', function (e) {
    let activeTab = modalOpenTargetBtn.closest('.swiper-container')[0].swiper.realIndex;
    initModalThumbsSlider(activeTab);
    setModalNavSlidersPositionTop();
    setSlidersModalButtonsPositionTop();

});
