
 $(window).on('load', function () {
     let valueLike = $('.like-item__count input');

     valueLike.each(function () {
         var  valueLikeCount = $(this).val();

         $(this).next('.like-item__count-output').text(valueLikeCount);
     })
 });
//клик по лайку
$('body').on('click', '.like__btn', function (e) {
    e.preventDefault();
    var coutnInput =  $(this).closest('.like-item').find('input'),
        coutnOutput = $(this).closest('.like-item').find('.like-item__count-output'),
        coutnLike = coutnInput.val(),
        changeValue = parseInt(coutnLike) + 1;
    if (changeValue >= 0){
        coutnOutput.removeClass('danger')
    }
    coutnInput.val(changeValue);
    coutnOutput.text(changeValue);
    $(this).children().removeClass('icon--like-gray').addClass('icon--like-gray-check')
})   ;
 $('body').on('click', '.dislike__btn', function (e) {
     e.preventDefault();
     var coutnInput =  $(this).closest('.like-item').find('input'),
         coutnOutput = $(this).closest('.like-item').find('.like-item__count-output'),
         coutnLike = coutnInput.val(),
         changeValue = parseInt(coutnLike) - 1;

     if (changeValue < 0){
         coutnOutput.addClass('danger')
     }
     
     coutnInput.val(changeValue);
     coutnOutput.text(changeValue);

     $(this).children().removeClass('icon--dislike-gray').addClass('icon--dislike-gray-check');


 });

