function checkEditPhotoSubmit() {
    if($('.js-edit-photo-input').val() !== '') {
        $('.js-edit-photo-submit').prop('disabled', false);
    } else {
        $('.js-edit-photo-submit').prop('disabled', true);
    }
}

$('body').on('click', '.js-profile-edit', function () {
    $('#profile_edit_popup').modal('show');
});
$('body').on('click', '.js-edit-form__photo-btn', function () {
    $('#profile_edit_popup').modal('hide');
    $('#profile_edit_photo').modal('show');
});

$('#profile_edit_photo, #profile_edit_popup').on('shown.bs.modal', function () {
    $('html, body').addClass('off-scroll');
    checkEditPhotoSubmit();
});
$('#profile_edit_photo, #profile_edit_popup').on('hidden.bs.modal', function () {
    $('html, body').removeClass('off-scroll');
});

$('#profile_edit_photo').on('hidden.bs.modal', function () {
    $('#profile_edit_popup').modal('show');
});

$('body').on('change', '.js-photo-file input', function () {
    let input = $(this);
    console.log(input.val());

    if (input.val() !== '') {
        let file = input[0].files[0],
            fileName = input[0].files[0].name,
            reader = new FileReader(),
            imageBase;

        reader.readAsDataURL(file);
        reader.onload = function () {
            imageBase = reader.result;

            if ($('.js-edit-photo__preview .inner .photo-preview').length > 0) {
                $('.js-edit-photo__preview .inner .photo-preview').remove();
            }

            $('.js-edit-photo__preview').addClass('has-preview');

            let currentFIleHtml = '<img src="' + imageBase + '" class="photo-preview">';

            $('.js-edit-photo__preview .inner').append(currentFIleHtml);
            $('.js-delete-file .text').text(fileName);

            $('.js-delete-file').addClass('show');

        }
        reader.onerror = function () {
            alert(reader.error);
        };
    } else {
        $('.js-edit-photo__preview').removeClass('has-preview');
        if ($('.js-edit-photo__preview .inner .photo-preview').length > 0) {
            $('.js-edit-photo__preview .inner .photo-preview').remove();
        }
        $('.js-delete-file').removeClass('show');
    }
    checkEditPhotoSubmit();
});

$('body').on('click', '.js-delete-file', function () {
    $('.js-photo-file input').val('');
    setTimeout(function () {
        $('.js-photo-file input').change();
    });
});

$('body').on('click', '.js-photo-reset', function () {
    $('#profile_edit_photo').modal('hide');
});

$('#profile_edit_popup').scroll(function () {
    if(window.matchMedia('max-width: 575px')) {
        if($('#profile_edit_popup').scrollTop() > 0) {
            $('#profile_edit_popup .js-edit-title').addClass('scroll');
        } else {
            $('#profile_edit_popup .js-edit-title').removeClass('scroll');
        }
    }
});

$('#profile_edit_photo').scroll(function () {
    if(window.matchMedia('max-width: 575px')) {
        if($('#profile_edit_photo').scrollTop() > 0) {
            $('#profile_edit_photo .js-edit-title').addClass('scroll');
        } else {
            $('#profile_edit_photo .js-edit-title').removeClass('scroll');
        }
    }
});