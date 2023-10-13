var videoList = [
    "video/video.mp4",
    "video/video2.mp4",
    //"video/video3.mp4",
    //"video/video4.mp4",
    "video/video5.mp4",
    //"video/video6.mp4",
    //"video/video7.mp4",
    //"video/video8.mp4",
   // "video/video9.mp4"
]

var videoPlayer = document.getElementById("videoPlayer");

function randomVideo() {
    var randomNum = Math.floor(Math.random() * videoList.length);
    return videoList[randomNum]
}

function randomvideoKoy() {
    var randomvideo = randomVideo();
    videoPlayer.src = randomvideo;

    if (randomvideo == "video/video9.mp4") {
        var avatar = document.getElementById("avatar");
        var h1 = document.getElementById("yazi");
        // var social = document.getElementById("social");

        avatar.style.boxShadow = "0 0 0 3px #ff0000";
        h1.style.color = "#ff0000";
    }
}

randomvideoKoy();

videoPlayer.addEventListener("ended", randomvideoKoy)
