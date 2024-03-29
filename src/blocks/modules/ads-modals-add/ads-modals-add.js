$('body').on('click', '.js-ads-add', function () {
    $('#add-ads').modal('show');
});
$('body').on('click', '.js-ads-edit', function () {
    $('#edit-ads').modal('show');
});

$(document).ready(function () {

    $('.add-ads').on('shown.bs.modal', function () {
        console.log(1111);
        var controls = $(this),
            controlsInner = controls.find('.add-ads__title'),
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

        if ($('.add-ads').length > 0) {
            getControlsVars();
            $('.add-ads.show').scroll(function () {
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