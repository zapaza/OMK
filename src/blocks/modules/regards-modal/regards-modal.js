$('body').on('click', '.js-regards__all', function () {
    $('#regards_modal').modal('show');
});

$('#regards_modal').scroll(function () {
    if(window.matchMedia('max-width: 575px')) {
        if($('#regards_modal').scrollTop() > 0) {
            $('#regards_modal .js-regards-title').addClass('scroll');
        } else {
            $('#regards_modal .js-regards-title').removeClass('scroll');
        }
    }
});