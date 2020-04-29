$("html").on("drop", function(e) { e.preventDefault(); e.stopPropagation(); });

$('.drop-file__area').on('drop', function (e) {
    e.stopPropagation();
    e.preventDefault();

    var file = e.originalEvent.dataTransfer.files;
    var fd = new FormData();

    fd.append('file', file[0]);

    uploadData(fd);
});

$("body").on('click', '.trigger-file-js', function(e){
    e.preventDefault();
    $(this).closest('.drop-file__area').find('.drop-file__input').click();
});

$(".drop-file__input").change(function(){
    var fd = new FormData();

    var files = $(this)[0].files[0];

    fd.append('file',files);

    uploadData(fd);
});

//пример ajax
// Sending AJAX request and upload file
function uploadData(formdata){

    $.ajax({
        url: 'upload.php',
        type: 'post',
        data: formdata,
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function(response){
            addThumbnail(response);
        }
    });
}
//уда
function addThumbnail(data){
    var len = $(".drop-file .drop-file__item").length;

    var num = Number(len);
    num = num + 1;

    var name = data.name;

    // Creating an thumbnail
    $(".drop-file").append('<div id="thumbnail_'+num+'" class="drop-file__item"></div>');
    $("#thumbnail_"+num).append('<i class="icon  icon--upload-file"></i>');
    $("#thumbnail_"+num).append(' <div class="name">' + name + '</div>');
    $("#thumbnail_"+num).append(' <button type="button" class="drop-file__item-remove"></button>');

}
