function timeVideo() {
    let $this = $('.video'),
        videoLength = $this.length;

    for (i = 0; i < videoLength; i++) {
        var videoTime = parseInt($this.eq(i).find('.video__player')[0].duration),
            formattedTime = function () {
                return (videoTime - (videoTime %= 60)) / 60 + (9 < videoTime ? ':' : ':0') + videoTime
            };
        $this.eq(i).find('.video__time').text(formattedTime);
        console.log(videoTime);
    }
}

$(document).ready(function () {
    var videosLength = $('video').length;
    var lastVideo = $('video').eq(videosLength - 1)[0];
    console.log(lastVideo)
    lastVideo.addEventListener('loadedmetadata', function(){
        timeVideo();
    })
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

$(document).on('click', '.video__preview', function () {
    let $this = $(this),
        $thisVideo = $this.closest('.video').find('.video__player');
    stopAllVideos();
    $(this).parent().find('.video__preview').fadeOut();
    $(this).parent().find('.video__time').fadeOut();
    $thisVideo.trigger('play');
});
