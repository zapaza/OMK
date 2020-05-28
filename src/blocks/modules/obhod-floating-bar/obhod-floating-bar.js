function floatingBarShow(){
    if($('.floating-bar').length > 0){
        if( $(window).innerWidth() >= 1023 & $(window).scrollTop() > 100){
            $('.floating-bar').fadeIn(200);
        }else if ($(window).innerWidth() < 1023 | $(window).scrollTop() < 100){
            $('.floating-bar').fadeOut(0);
        }
    }

}

$(window).scroll(function () {
    floatingBarShow();
})