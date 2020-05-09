import $ from "jquery";

$('body').on('click', '.js-media-item', function () {
    $('#image_popup').modal('show');
});