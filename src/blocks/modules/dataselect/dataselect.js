import 'air-datepicker/dist/js/datepicker.min';

$(document).ready(function () {
    if ($('.datapicker-js').length > 0){

        $('.datapicker-js').datepicker();
    }
});

$('body').on('click', '.datapicker-trigger-js', function (e) {
    e.preventDefault();
    $('.datapicker-js').trigger('click');
});