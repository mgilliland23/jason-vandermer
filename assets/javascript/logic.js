var img = document.getElementsByTagName("img");

//Add hover and click event listeners to all the video preview images
for (var i = 0; i < img.length; i++) {
    img[i].addEventListener("mouseover", enterHover);
    img[i].addEventListener("mouseout", exitHover);
    img[i].addEventListener("click", displayVideo);
};

function enterHover() {
    console.log("enter")
    var currentVideoContainer = event.target.parentElement;

    var director = currentVideoContainer.getElementsByClassName("director")[0];
    var info = currentVideoContainer.getElementsByClassName("info")[0];

    director.style.color = "white";
    info.style.color = "white";
}

function exitHover() {
    var currentVideoContainer = event.target.parentElement;

    var director = currentVideoContainer.getElementsByClassName('director')[0];
    var info = currentVideoContainer.getElementsByClassName('info')[0];

    director.style.color = 'black';
    info.style.color = 'black';
}

function displayVideo() {
    var videoPreviewImg = event.target;
    var videoURL = videoPreviewImg.getAttribute('data-videoURL');

    var modalVideo = document.getElementById('video-player');
    modalVideo.src = videoURL;

    $("#vimeo-modal").modal();


}

$('#vimeo-modal').on('hidden.bs.modal', function (e) {
    stopVideoOnExit();
})

function stopVideoOnExit() {
    var modal = document.getElementById('vimeo-modal');

    var video = modal.querySelector('iframe');
    console.log(video);
    //Just remove the iFrame from the DOM to get it to stop playing
    video.parentNode.removeChild(video);
}