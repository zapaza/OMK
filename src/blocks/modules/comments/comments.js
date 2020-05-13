//скрипт для увеличение textarea при вводе большого кол-ва теста

function dynamicTextareaSizes() { //Объявляем функцию, высчитывающую изначальные размеры буфера
    var textareaLength = $('.comments__message-form-input').length; //Получаем количество изменяемых textarea
    if (textareaLength > 0) {
        for (let i = 0; i < textareaLength; i++) {

            //Считаем ширину буфера
            var bufferWidth = $('.comments__message-form-buffer').eq(i).parent().innerWidth() - //Внутренняя ширина родительского блока
                parseInt($('.comments__message-form-buffer').eq(i).parent().css('border-left-width')) - //Граница родительского блока
                parseInt($('.comments__message-form-buffer').eq(i).parent().css('border-right-width')); //Граница родительского блока

            $('.comments__message-form-buffer').eq(i).outerWidth(bufferWidth); //Присваиваем ширину
        }
    }
}

$(document).ready(function () { // Вызываем функцию при загрузке страницы
    dynamicTextareaSizes();
    //Можно вызывать так же по ресайзу окна или после AJAX запроса
});

$('body').on('input', '.comments__message-form-input', function () { //Отлавливаем событие ввода символа в textarea

    if ($(this)[0].offsetWidth - $(this)[0].clientWidth > 5) { //Проверяем, есть ли в textarea скролл

        //Если скролл есть, присваиваем буферу padding справа, равный ширине скролла
        $(this).parent().find('.comments__message-form-buffer').css('padding-right', $(this)[0].offsetWidth - $(this)[0].clientWidth);
    } else {
        //Если скролла нет, возвращаем стандартный padding
        $(this).parent().find('.comments__message-form-buffer').css('padding-right', '');
    }

    var textareaBuffer = $(this).parent().find('.comments__message-form-buffer'); //Заносим буфер в переменную
    textareaBuffer.text($(this).val()); //Передаем текст из extarea в буфер
    var textareaHeight = textareaBuffer.innerHeight(); // Получаем высоту буфера
    $(this).innerHeight(textareaHeight); //Присваиваем высоту буфера textarea
});



//показ ответтов и формы ответа

$('body').on('click', '.comments__item-answer', function(e) {
    e.preventDefault();
    $(this).closest('.comments__item').find('.comments__message').show();
});

$('body').on('click', '.comments__item-more', function(e) {
    e.preventDefault();
    $(this).next('.comments__list').show();
});