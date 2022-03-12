import './index.css'

const video = document.getElementById("video2"); 
var time = 0;

document.onscroll = () => {
    const clientHeight = document.documentElement.clientHeight;
    const videoYPos = video.getBoundingClientRect().y;
    
    // checks when viewport reaches the sticky video
    if (clientHeight > videoYPos + videoYPos * 2/3) {
        // runs through frames of video
        time += 1/72
        video.currentTime = (time);
    }

}

