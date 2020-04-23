$('body').on('click', function(e) {
	var div = $(".js-search"); // тут указываем ID элемента
	if (!div.is(e.target) // если клик был не по нашему блоку
	    && div.has(e.target).length === 0) { // и не по его дочерним элементам
		$('.js-search-dropdown').slideUp(400); // скрываем его
	}
})

$('body').on('focus', '.js-search__input', function() {
	$('.js-search-dropdown').slideDown(400);
})

$('body').on('input', '.js-search__input', function() {
	if($(this).val().length >= 2) {
		console.log('Показываем результаты поиска');
	} else {
		console.log('Показываем блок "Вы недавно искали"');
	}

	var searchValue = $(this).val();
    $('.js-search-dropdown__link').each( function () {
        var resultValue = $(this).find('.text').text();
        var searchValueNew = new RegExp(searchValue, 'i');
        var fix = resultValue.replace(searchValueNew, (el) => {
            return '<span class="red">' + el + '</span>'
        });
        $(this).find('.text').html(fix);
    });

});