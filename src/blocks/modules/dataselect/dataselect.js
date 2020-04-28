import 'air-datepicker/dist/js/datepicker.min';

$(document).ready(function () {
    if ($('.datapicker-js').length > 0){

        let datapickerResult = $('.datapicker-js').closest('.data-select').find('.datapicker-result-js');

        $('.datapicker-js').datepicker({
            inline: true,
            dateFormat: 'DD-MM-YYYY',
            altFieldDateFormat: 'd M yyyy',
            altField: datapickerResult,
            range: true,
            multipleDatesSeparator: ' - ',
            onSelect: function () {

            }
        });
    }
});

$('body').on('click', '.datapicker-trigger-js', function (e) {
    e.preventDefault();

});