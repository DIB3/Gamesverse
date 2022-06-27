
var chanid = params.get('channelId');

const api2_url =
    "http://127.0.0.1:3000/videos";

// Defining async function
async function getapi2(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    uservideos(data);
    userallvideos(data);

}
// Calling that async function
getapi2(api2_url);

// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}


function uservideos(data) {
    let tab8 =
        ``;

    // Loop to access all rows
    for (let a of data.ressource) {
        if (a.channelId == chanid) {
            tab8 += ` <div class="item">
            <div class="gen-episode-contain">
                <div class="gen-episode-img">
                    <img src="${a.videoIMG}" alt="stream-lab-image">
                    <div class="gen-movie-action">
                        <a href="single-videos.html?video=${a._id}&channelId=${a.channelId}" class="gen-button">
                            <i class="fa fa-play"></i>
                        </a>
                    </div>
                </div>
                <div class="gen-info-contain">
                    <div class="gen-episode-info">
                        <h3   style="text-overflow: ellipsis !important;">
                        ${a.title} <span></span>
                           
                        </h3>
                    </div>  
                    <div class="gen-single-meta-holder">
                        <ul>
                           
                        </ul>
                    </div>
                </div>
            </div>
        </div>`;
        }
        // Setting innerHTML as tab variable
        document.getElementById("uservideos").innerHTML = tab8;
        console.log(a._id == x.id)
    }
}

function userallvideos(data) {
    let tab8 =
        ``;

    // Loop to access all rows
    for (let a of data.ressource) {

        tab8 += ` <div  class="col-xl-3 col-lg-4 col-md-6">
            <div class="gen-carousel-movies-style-1 movie-grid style-1">
                <div class="gen-movie-contain">
                    <div class="gen-movie-img">
                        <img src="${a.videoIMG}" alt="streamlab-image">
                        <div class="gen-movie-add">
                            <div class="wpulike wpulike-heart">
                                <div class="wp_ulike_general_class wp_ulike_is_not_liked">
                                    <button type="button"
                                        class="wp_ulike_btn wp_ulike_put_image"></button>
                                </div>
                            </div>
                            <ul class="menu bottomRight">
                                <li class="share top">
                                    <i class="fa fa-share-alt"></i>
                                    <ul class="submenu">
                                        <li><a href="#" class="facebook"><i
                                                    class="fab fa-facebook-f"></i></a>
                                        </li>
                                        <li><a href="#" class="facebook"><i
                                                    class="fab fa-instagram"></i></a>
                                        </li>
                                        <li><a href="#" class="facebook"><i
                                                    class="fab fa-twitter"></i></a></li>
                                    </ul>
                                </li>
                            </ul>
                            <div class="movie-actions--link_add-to-playlist dropdown">
                                <a class="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                        class="fa fa-plus"></i></a>
                                <div class="dropdown-menu mCustomScrollbar">
                                    <div class="mCustomScrollBox">
                                        <div class="mCSB_container">
                                            <a class="login-link" href="#">Sign in to add this
                                                movie to a
                                                playlist.</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="gen-movie-action">
                            <a href="single-videos.html?video=${a._id}&channelId=${a.channelId}" class="gen-button">
                                <i class="fa fa-play"></i>
                            </a>
                        </div>
                    </div>
                    <div class="gen-info-contain">
                        <div class="gen-movie-info">
                            <h3><a href="single-videos.html?video=${a._id}&channelId=${a.channelId}">${a.title}</a></h3>
                        </div>
                        <div class="gen-movie-meta-holder">
                            
                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
`;

        // Setting innerHTML as tab variable
        document.getElementById("channelallvideos").innerHTML = tab8;
        console.log(a._id == x.id)
    }
}
