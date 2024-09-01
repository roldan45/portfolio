const videos = {
    mec: [
        { id: "mec", src: "vid/dtr1.mp4" },
        { id: "mec", src: "vid/dtr2.mp4" },
        { id: "mec", src: "vid/dtr3.mp4" },
        { id: "mec", src: "vid/dtr4.mp4" },
        { id: "mec", src: "vid/dtr5.mp4" }
    ],
};
let currentVideoIndex = { mec: 0, jpl: 0 };

function changeVideo(container, index) {
    const videoElement = document.getElementById(container);
    videoElement.src = videos[container][index].src;
    videoElement.load();
    videoElement.play();
}

function playNextVideo(container) {
    currentVideoIndex[container] = (currentVideoIndex[container] + 1) % videos[container].length;
    changeVideo(container, currentVideoIndex[container]);
}

changeVideo('mec', 0);

