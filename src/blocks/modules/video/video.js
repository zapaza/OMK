function timeVideo() {
    let $this = $('.video:not(.no-video)'),
        videoLength = $this.length;

    for (i = 0; i < videoLength; i++) {
        var videoTime = parseInt($this.eq(i).find('.video__player')[0].duration),
            formattedTime = function () {
                return (videoTime - (videoTime %= 60)) / 60 + (9 < videoTime ? ':' : ':0') + videoTime
            };
        $this.eq(i).find('.video__time').text(formattedTime);
    }
}

$(document).ready(function () {
    if ($('video').length > 0) {
        var videosLength = $('video').length;
        var lastVideo = $('video').eq(videosLength - 1)[0];
        lastVideo.addEventListener('loadedmetadata', function(){
            timeVideo();
        })
    }

});

function stopAllVideos() {
    let $this = $('.video'),
        videoLength = $this.length;
    for (i = 0; i < videoLength; i++) {

        let thisFrame = $this.eq(i).find('.video__player');

        thisFrame.pause;
        $this.eq(i).find('.video__preview').fadeIn(300);
        $this.eq(i).find('.video__time').fadeIn(300);

    }
}

$(document).on('click', '.video:not(.no-video) .video__preview', function () {
    console.log('click');
    let video = $(this).closest('.js-video__body').find('.js-video__player').html();
    $('.js-video-container--modal').html(video);
    $('#video_popup').modal('show');

    // let $this = $(this),
    //     $thisVideo = $this.closest('.video').find('.video__player');
    // stopAllVideos();
    // $(this).parent().find('.video__preview').fadeOut();
    // $(this).parent().find('.video__time').fadeOut();
    // $thisVideo.trigger('play');
});

$('#video_popup').on('shown.bs.modal', function (e) {
    $('#video_popup video').trigger('play');
});

$('#video_popup').on('hide.bs.modal', function (e) {
    $('#video_popup video').trigger('stop');
    $('.js-video-container--modal').html("");
});