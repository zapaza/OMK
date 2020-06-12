$('body').on('click', '.js-calendar-more', function () {
    $('#events-list').modal('show');
});
$('body').on('click', '.js-calendar-mob', function () {
    if($(window).innerWidth() <= 1022){
        $('#events-list').modal('show');
    }

});

$('.calendar-event').hover(function () {
    if($(window).innerWidth() > 1022) {
        var posY = $(this).offset().top,
            posX = $(this).offset().left,
            dataId = $(this).data('id'),
            dataIdHeight =  $(dataId).innerHeight();
        // console.log(posY , posX, dataId);

        $(dataId).css({
            top: posY - dataIdHeight - 12,
            left: posX
        }).toggleClass("show");
    }
} )
$(document).ready(function () {

    $('#events-list').on('shown.bs.modal', function () {
        console.log(1111);
        var controls = $(this),
            controlsInner = controls.find('.events-list__title'),
            modalWidth,
            modalWidthCss,
            controlsHeight,
            controlsHeightCss,
            controlsOffsetLeft,
            controlsLeftCss,
            controlsOffsetTop;

        function getControlsVars() {
            modalWidth = controls.find('.modal-content').width();
            modalWidthCss = modalWidth + 'px';
            controlsHeight = controls.outerHeight();
            controlsHeightCss = controlsHeight + 'px';
            controlsOffsetLeft = controls.offset().left;
            controlsLeftCss = controlsOffsetLeft + 'px';
            controlsOffsetTop = controls[0].offsetTop + controls.find('.modal-content')[0].offsetTop + controls.find('.modal-dialog')[0].offsetTop;

            console.log(modalWidth, modalWidthCss, controlsHeight, controlsHeightCss, controlsOffsetLeft, controlsLeftCss,   controlsOffsetTop);
        }

        function controlsScroll() {
            if (controls.scrollTop() > controlsOffsetTop) {
                controlsInner.addClass('scroll');
                controlsInner.css({
                    'position': 'fixed',
                    // 'width': modalWidthCss,
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

        if ($('.events-list').length > 0) {
            getControlsVars();
            $('.events-list.show').scroll(function () {
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

