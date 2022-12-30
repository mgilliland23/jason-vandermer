
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
        html += `<img class="img-fluid ` + videoList[i].video_id + `" alt="Bootstrap Image Preview" src="/assets/loading.png"
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
        // var video_link = encodeURIComponent("https://vimeo.com/" + video_id + "?width=480&height=360");
        $.getJSON('https://vimeo.com/api/v2/video/' + videoList[i].video_id + '.json/', function (data) {
            if (data) {
                // console.log(data);
                // callback(data);
                $('.title.' + data[0].id).text(data[0].title);
                $('.img-fluid.'+ data[0].id).attr('src', data[0].thumbnail_large);
            }
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

//Inject the video's url into the modal and then fire the modal
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

function stopVideoOnExit() {
    var modal = document.getElementById('vimeo-modal');
    var video = modal.querySelector('iframe');
    console.log(video);
    //Just remove the iFrame from the DOM to get it to stop playing
    video.parentNode.removeChild(video);
}

let videoList = [{ title: 'papyrus', video_id: 559688047 },
    { title: 'come back barrack', video_id: 559942220 },
    { title: 'the race', video_id: 559945885 },
    { title: 'WHEREVER LIFE TAKE YOU', video_id: 560018749 },
    { title: 'wells for boys', video_id: 559975048 },
    { title: 'slow music video', video_id: 560921770 },
    { title: 'enhancement drug', video_id: 560020718 },
    { title: 'the hit', video_id: 560655470 },
    { title: 'papal securities', video_id: 560695815 }, 
    { title: 'THE JAY Z STORY', video_id: 559966756 },
    { title: 'DIAGO CALLS HIS MOM', video_id: 560220016 },
    { title: 'CUSTOMER SERVICE', video_id: 559949778 },
    { title: 'voters for trump', video_id: 559988691 },
    { title: 'MACYS CHILDRENS COMMERCIAL', video_id: 560912653 },
    { title: 'ROBBERS', video_id: 559962142 },
    { title: 'POOL BOY', video_id: 559985759 },
    {title: 'THE STAND OFF.', video_id:  559990687},
    {title: 'A THANKSGIVING MIRACLE.', video_id: 560032859},
    {title: 'CORNER BOYS.', video_id: 560153535},
    {title: '39 CENTS.', video_id:   560037576},
    {title: 'THE GAME OF LIFE DACA EDITION', video_id: 560001898},
    {title: 'MY LITTLE SEP CHILDREN', video_id: 559954067},
    {title: 'SINK.', video_id: 560106101},
    {title: 'THATS THE GAME.', video_id:560179423},
    {title: 'THE LAST FRY.', video_id:  560071567},
    {title: 'THROUGH DONALDS EYES.', video_id: 559979936},
    {title: 'SAD MOUSE.', video_id: 560083688},
    {title: 'SCRUDGE.', video_id: 560012020},
    {title: 'TASTY TOASTER TARTS.', video_id: 560023213},
    {title: 'SNL PEP BOYS.', video_id: 560075069},
    {title: 'BEFORE THE SHOW.', video_id:   560121576},
    {title: 'FUNNY NEW COMEDY.', video_id: 560183230},
    {title: 'STANX.', video_id:560678754},
    {title: 'JOHN MULANEY PROMO.', video_id: 561864074},
    {title: 'LESLIE DOC 1.', video_id:560101384},
    {title: 'KYLE DOC 2.', video_id: 560094339},
    {title: 'BECK DOC 3.', video_id:560089542},
    {title: 'SNL DIGITAL SHORT BASS DROP.', video_id: 561117740},
    {title: 'FISH DREAMS.', video_id: 560066696},
    {title: 'LARRY DAVID PROMO.', video_id: 561414858},
    {title: 'GIRL AT A BAR.', video_id:  560199902},
    {title: 'JOS A BANK CLEANING PRODUCT.', video_id:560688631},
    {title: 'UNDERCOVER OFFICE POTTY.', video_id: 560025593},
    {title: 'THE PRINCESS AND THE CURSE.', video_id: 560256000},
    {title: 'SAY WHAT YOU WANT TO SAY.', video_id:560172484},
    {title: 'SNL GOLDEN GLOBES.', video_id:  560057550},
    {title: 'DAVE CHAPPELLE PROMO.', video_id: 561391812},
    {title: 'EMMYS PROMO 30.', video_id:560218809},
    {title: ' BENEDICT CUMBERBATCH PROMO', video_id: 561410431},
    {title: 'ONE DIRECTION LINE',  video_id: 560684924},
    {title: 'THE STANDOFF BAR.', video_id: 561135716},
    {title: 'NEW XANAX.', video_id: 561123367},
    {title: 'RESOLUTION REVOLUTION.', video_id:560680121},
    {title: 'MIDNIGHT KISS.', video_id:  560194246},
    {title: 'TINA AND AMY DOPE SQUAD.', video_id:560247081},
    {title: 'BACK HOME BALLERS', video_id: 560149303},
    {title: 'ALEC BALDWIN PROMO.', video_id: 561394890},
    {title: 'DRAKES BEEF.', video_id: 560207484},
    {title: 'REALITY HOUSE.', video_id:560125098},
    {title: 'SNL STAR WARS COMMERCIAL.', video_id:560064843},
    {title: 'SEX ED VINCENT.', video_id:560710162},
    {title: 'SCARLETT JOHANSSON PROMO.', video_id:   561399358},
    {title: 'LOVE ACTUALLY.', video_id: 560202775},
    {title: 'DISNEY ACTING SCHOOL', video_id: 560945230},
    {title: 'MARCUS BANKS TREE PIMP.', video_id:560699777},
    {title: 'NUVA BLING.', video_id: 560697306},
    {title: 'ICE CREAM.', video_id: 560080581},
    {title: 'WHAT DOES MY GIRL SAY', video_id: 560137002},
    {title: 'WELCOME TO THE USA', video_id: 560139956},
    {title: 'MELANIE MOMENTS 1', video_id: 560111839},
    {title: ' MELANIE MOMENTS 2 ', video_id: 560114516},
    {title: 'MELANIE MOMENTS 3.', video_id: 560118655},
    {title: 'BEERS.', video_id:560186840},
    {title: 'HOTLINE BLING', video_id:  560177672},
    {title: 'SUMP N CLAUS.', video_id: 560167338},
    {title: 'BOY DANCE PARTY.', video_id:   561060478},
    {title: 'MATCH .COM.', video_id:   561125588},
    {title: 'A FRIGHTENING TALE.', video_id:  561174895},
    {title: 'KUMAIL NANJIANI PROMO', video_id:  561412990},
    {title: 'KIDS.', video_id:  560262523},
    {title: 'MY DRUNK BOYFRIEND', video_id:    560254502},
    {title: 'NATALIE PORTMAN PROMO', video_id:  561389514},
    {title: 'BLACK WIDOW.', video_id: 560215454},
    {title: 'OPRAH.', video_id:  560192011},
    {title: 'TOTINOS 2.', video_id:   560243041},
    {title: 'PRESIDENT BARBIE.', video_id:   560250226},
    {title: 'MELISSA MCCARTHY PROMO', video_id: 561408626},
    {title: 'AZIZ ANSARI PROMO.', video_id:     561396792},
    {title: 'HILLARY SANDERS.', video_id:  560234072},
    {title: 'DIGITAL SHORT OTHER MAN', video_id:  560938454},
    {title: 'DO IT ON MY TWIN BED.', video_id:561151948},
    {title: 'MEGA MART BLACK FRIDAY.', video_id:560973652},
    {title: 'EMMA STONE PROMO', video_id:  561392831},
    {title: 'CLEVELAND CAV PROMO', video_id:  561158702},
    {title: 'CHARLES BARKLEY PROMO ', video_id:  561419100},
    {title: 'ROCK VS RAP.', video_id:   561180670},
    {title: 'INSIDE SOCAL.', video_id:    560252164},
    {title: 'RYAN GOSLING PROMO', video_id:  561411414},
    {title: 'BLOCKBUSTER.', video_id:   561077944},
    {title: 'LOUIS CK PROMO.', video_id:561403842},
    {title: 'EASTWOOD 1.', video_id:   561029048},
    {title: 'EASTWOOD 2.', video_id:   561026378},
    {title: 'EASTWOOD 3.', video_id:  561024535},
    {title: 'ALMOST PIZZA.', video_id: 560986457},
    {title: 'BILL HADER PROMO', video_id:   561422985},
    {title: 'SAOIRSE RONAN PROMO', video_id:  561417444},
    {title: 'KYLE & MILEYS SEX TAPE', video_id:   561053846},
    {title: 'LITTLE BROTHERS.', video_id:  561128965},
    {title: 'DIGITAL SHORT HELEN NASIM', video_id:  560977347},
    {title: 'NAKED AND AFRAID.', video_id:    560258126},
    {title: 'DICK WOLFS CHICAGO IMPROV', video_id:  561177996},
    {title: 'PORN AWARDS', video_id:   561156604},
    {title: 'EDDIE MURPHY RETURNS PROMO.', video_id:561913335},
];

generateVideoGrid(loadVimeoDetails);

$('#vimeo-modal').on('hidden.bs.modal', function (e) {
    stopVideoOnExit();
})
