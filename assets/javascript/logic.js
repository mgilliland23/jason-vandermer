var img = document.getElementsByTagName("img");

console.log(img);


for (var i = 0; i < img.length; i++) {
    img[i].addEventListener("mouseover", enterHover);
    img[i].addEventListener("mouseout", exitHover);
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

    var director = currentVideoContainer.getElementsByClassName("director")[0];
    var info = currentVideoContainer.getElementsByClassName("info")[0];

    director.style.color = "black";
    info.style.color = "black";
}