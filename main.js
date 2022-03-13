import './index.css'

const videoContainer = document.getElementById("videoContainer");
const video = document.getElementById("video2");
var time = 0;
var hasResetView = false;

document.onscroll = () => {
    const clientHeight = document.documentElement.clientHeight;
    const videoYPos = video.getBoundingClientRect().y;
    
    // checks when viewport reaches the sticky video
    if (clientHeight > videoYPos + videoYPos * 4/5 &&
        clientHeight < videoYPos + videoContainer.offsetHeight
    ) {
        // runs through frames of video
        time += 1/72;
        video.currentTime = (time);

        // checks when video is over
        if (time >= 3 && !hasResetView) {
            // if it has, then make the container smaller and move the viewport back to the beginning
            hasResetView = true;
            videoContainer.setAttribute("class", "h-[100vh] hidden xl:block");
            videoContainer.scrollIntoView();
        }
    }

}

