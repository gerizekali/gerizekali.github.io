function backgroundAnimasyon() {
    var video = document.getElementById('videoPlayer');
    video.style.opacity = "0"
    var opacity = 0
    var i = setInterval(function() {
        if (opacity < 0.5) {
            opacity += 0.005
            video.style.opacity = opacity;
        } else {
            clearInterval(i)
        }
    }, 20)
}

function ipAnimation() {
    var ip = document.getElementById('ip');
    ip.style.opacity = "0"
    var opacity = 0
    var a = setInterval(function() {
        if (opacity < 1) {
            opacity += 0.05
            ip.style.opacity = opacity
        } else {
            clearInterval(a)
        }
    }, 100)
}


backgroundAnimasyon()
ipAnimation()