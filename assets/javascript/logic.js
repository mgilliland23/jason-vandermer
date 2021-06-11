
videoList = [
    { title: 'title1', video_id: 41986271 },
    { title: 'title2', video_id: 41986271 },
    { title: 'title3', video_id: 41986271 },
    { title: 'title4', video_id: 41986271 },
    { title: 'title5', video_id: 41986271 },
    { title: 'title6', video_id: 41986271 },
]

generateVideoGrid(loadVimeoDetails);

function generateVideoGrid(callback) {
    var html = '';
    for (i = 0; i < videoList.length; i++) {
        if ((i % 4) == 0) {
            if (i == 0) {
                html += '<div class="row justify-content-center">';
            } else {
                html += '</div><div class="row justify-content-center">';
            }
        }
        html += '<div class="col-lg-3 col-sm-6 col-xs-12 text-center video-thumbnail mb-3">';
        html += `<img class="img-fluid ` + videoList[i].video_id + `" alt="Bootstrap Image Preview" src=""
                        data-videoURL="https://player.vimeo.com/video/`+ videoList[i].video_id + `?playsinline=0&title=0&byline=0&portrait=0&autoplay=1" />`;
        html += '<p class="title ' + videoList[i].video_id  + '"></p>';
        html += '</div>';
    }
    html += '</div>';
    $('#video-grid').append(html);

    callback();
}
// console.log(videoList);
function loadVimeoDetails() {

    for (var i = 0; i < videoList.length; i++) {
        vimeo_details = getVimeoDetails(videoList[i].video_id, 'large', function (data) {
            console.log(i);

            console.log(data);
            $('.title.' + data[0].id).text(data[0].title);
            $('.img-fluid.'+ data[0].id).attr('src', data[0].thumbnail_large);

        });
    }

    var img = document.getElementsByTagName("img");
    //Add hover and click event listeners to all the video preview images
    for (var i = 0; i < img.length; i++) {
        img[i].addEventListener("mouseover", enterHover);
        img[i].addEventListener("mouseout", exitHover);
        img[i].addEventListener("click", displayVideo);
    };

}


function getVimeoDetails(video_id, size, callback) {
    if (size == 'small') {
        var video_link = encodeURIComponent("https://vimeo.com/" + video_id + "?width=480&height=360");
        $.getJSON('https://vimeo.com/api/oembed.json?url=' + video_link, function (data) {
            if (data) {
                callback(data);
                // if (typeof(callback) !== 'undefined') {

                // }
            }
        });
    }
    else {
        $.getJSON('http://vimeo.com/api/v2/video/' + video_id + '.json', function (data) {
            if (data) {
                if (typeof (callback) !== 'undefined') {
                    callback(data);
                    // var thumbnail_src = data[0].thumbnail_large;
                    // if(thumbnail_src){
                    //     callback(thumbnail_src);
                    // }
                }
            }
        });
    }

}


//Display the text for the video being hovered over
function enterHover() {
    console.log("enter")
    var currentVideoContainer = event.target.parentElement;
    var title = currentVideoContainer.getElementsByClassName('title')[0];
    title.style.color = "white";
}

//Hide the text when it is no longer being hovered over
function exitHover() {
    var currentVideoContainer = event.target.parentElement;
    var title = currentVideoContainer.getElementsByClassName('title')[0];
    title.style.color = "rgb(23,23,23)";
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