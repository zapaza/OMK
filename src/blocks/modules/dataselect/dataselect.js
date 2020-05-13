import 'air-datepicker/dist/js/datepicker.min';

$(document).ready(function () {
    if ($('.datapicker-js').length > 0) {

        let datapickerResult = $('.datapicker-js').closest('.data-select').find('.datapicker-result-js');

        $('.datapicker-js').datepicker({
            inline: true,
            dateFormat: 'DD-MM-YYYY',
            altFieldDateFormat: 'd M yyyy',
            altField: datapickerResult,
            range: true,
            multipleDatesSeparator: ' — ',
            toggleSelected: false,
            onSelect: function () {
                let datapickerResultValue = datapickerResult.val();
                datapickerResult.closest('.data-select').find('.data-select__result').show();
                datapickerResult.closest('.data-select').find('.datapicker-trigger-js').hide();
                datapickerResult.closest('.data-select').find('.datapicker-fake-js').text(datapickerResultValue);
            }
        });

    }

});

$('body').on('click', '.datapicker-clear-js', function (e) {
    let datePicker =  $('.datapicker-js').datepicker().data('datepicker');
    e.preventDefault();
    datePicker.clear();
    $(this).parent().parent().find('.datapicker-trigger-js').show();
    $(this).parent().hide();
})

$('body').mouseup(function (e) {
    let div = $(".data-select");
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        div.find('.data-select__dropdown').removeClass('show');
        div.find('.datapicker-trigger-js').removeClass('show');
    }
});
$('body').on('click', '.datapicker-trigger-js', function (e) {
    e.preventDefault();
    if (!$(this).hasClass('show')) {
        $(this).addClass('show');
        $(this).parent().find('.data-select__dropdown').addClass('show');
    }else {
        $(this).removeClass('show');
        $(this).parent().find('.data-select__dropdown').removeClass('show');
    }
});
