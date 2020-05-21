$('body').on('click', '.js-profile-active', function () {
    $('#active_modal').modal('show');
});

$('body').on('click', '.js-controls-me', function () {
    let me = $('.js-me');
    let meOffsetTop = me[0].offsetTop + 1;
    $('#active_modal').animate({
        scrollTop: meOffsetTop
    }, 500);
});

$(document).ready(function () {

    $('#active_modal').on('shown.bs.modal', function () {
        var controls = $('#active_modal .js-controls'),
            controlsInner = controls.find('.js-controls-content'),
            modalWidth,
            modalWidthCss,
            controlsHeight,
            controlsHeightCss,
            controlsOffsetLeft,
            controlsLeftCss,
            controlsOffsetTop;

        function getControlsVars() {
            modalWidth = $('#active_modal .modal-content').width();
            modalWidthCss = modalWidth + 'px';
            controlsHeight = controls.outerHeight();
            controlsHeightCss = controlsHeight + 'px';
            controlsOffsetLeft = controls.offset().left;
            controlsLeftCss = controlsOffsetLeft + 'px';
            controlsOffsetTop = controls[0].offsetTop + controls.closest('.modal-content')[0].offsetTop + controls.closest('.modal-dialog')[0].offsetTop;

            console.log(modalWidth, modalWidthCss, controlsHeight, controlsHeightCss, controlsOffsetLeft, controlsLeftCss, controlsOffsetTop);
        }

        function controlsScroll() {
            if ($('#active_modal').scrollTop() >= controlsOffsetTop) {
                controlsInner.addClass('scroll');
                controlsInner.css({
                    'position': 'fixed',
                    'width': modalWidthCss,
                    'left': controlsLeftCss,
                    'top': 0,
                });
            } else {
                controlsInner.removeClass('scroll');
                controlsInner.css({
                    'position': '',
                    'width': '',
                    'left': '',
                    'top': '',
                });
            }
        }

        if ($('.js-controls-inner').length > 0) {
            getControlsVars();
            $('#active_modal').scroll(function () {
                if(window.matchMedia('min-width: 576px')){
                controlsScroll();
                }
            });
            $(window).resize(function () {
                if(window.matchMedia('min-width: 576px')){
                getControlsVars();
                controlsScroll();
                }
            });
        }
    });
});