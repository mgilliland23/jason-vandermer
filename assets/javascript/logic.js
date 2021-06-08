var img = document.getElementsByTagName("img");

//Add hover and click event listeners to all the video preview images
for (var i = 0; i < img.length; i++) {
    img[i].addEventListener("mouseover", enterHover);
    img[i].addEventListener("mouseout", exitHover);
    img[i].addEventListener("click", displayVideo);
};

//Display the text for the video being hovered over
function enterHover() {
    console.log("enter")
    var currentVideoContainer = event.target.parentElement;

    var director = currentVideoContainer.getElementsByClassName('director')[0];
    var info = currentVideoContainer.getElementsByClassName('info')[0];

    director.style.color = "white";
    info.style.color = "white";
}

//Hide the text when it is no longer being hovered over
function exitHover() {
    var currentVideoContainer = event.target.parentElement;

    var director = currentVideoContainer.getElementsByClassName('director')[0];
    var info = currentVideoContainer.getElementsByClassName('info')[0];

    director.style.color = "rgb(23,23,23)";
    info.style.color = "rgb(23,23,23)";
}

//Inject the videos url into the modal and then fire the modal
function displayVideo() {
    var videoPreviewImg = event.target;
    var videoURL = videoPreviewImg.getAttribute('data-videoURL');

    var iframe = document.createElement("iframe");
    iframe.setAttribute('src', videoURL);
    iframe.setAttribute('style', "position:absolute;top:0;left:0;width:100%;height:100%;");
    iframe.setAttribute('frameborder', 0);
    iframe.setAttribute('allow', "autoplay; fullscreen");
    iframe.setAttribute('allowfullscreen', "true");

    var iframeContainer = document.getElementById('iframe-container');

    iframeContainer.appendChild(iframe);

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