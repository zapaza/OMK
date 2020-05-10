import 'bootstrap/js/dist/modal';

$('body').on('click', '.js-search-show', function (e) {
    e.preventDefault();
    $('#search-suggest').modal('show');
});
$('#search-suggest').on('shown.bs.modal', function (e) {
    $('.js-search-suggest__input').focus();
     $('.search-suggest__last-result').show();
     //показ последних запросов
})
$('#search-suggest').on('hidden.bs.modal', function (e) {
    $('.search-suggest__result').hide();
    //показ последних запросов
})
$('.search-suggest__result').mCustomScrollbar({
    axis: "y",
    scrollInertia: 400,
    scrollBarPosition: "insight"
})

$('body').on('input', '.js-search-suggest__input', function() {
    if($(this).val().length >= 3) {
        $('.search-suggest__last-result').hide();
        $('.search-suggest__result').show();
    } else {
        $('.search-suggest__result').hide();
    }

    var searchValue = $(this).val();
    $('.search-result__item').each( function () {
        var resultValue = $(this).find('.desc').text();
        var searchValueNew = new RegExp(searchValue, 'i');
        var fix = resultValue.replace(searchValueNew, (el) => {
            return '<span class="red">' + el + '</span>'
        });
        $(this).find('.desc, .name').html(fix);
    });

    $('.js-search-value').html(searchValue);

});