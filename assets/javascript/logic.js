$("img").on("click", function () {
    //inject url to vimeo video (add attribute to each image):
    //$(this).attr('video-url')
    console.log("thumbnail clicked");
});

$("img").hover(enterHover, exitHover);

function enterHover() {
    console.log("enter")
    var currentVideoContainer = $(this).parent();
    var director = currentVideoContainer.find(".director");
    var info = currentVideoContainer.find(".info");

    director.css('color', 'white');
    info.css('color', 'white');

}

function exitHover() {
    var currentVideoContainer = $(this).parent();
    var director = currentVideoContainer.find(".director");
    var info = currentVideoContainer.find(".info");

    info.css('color', 'black');
    director.css('color', 'black');

}