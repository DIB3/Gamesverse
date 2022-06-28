
// api url
const api_url =
    "http://127.0.0.1:3000/videos";

// Defining async function
async function getapi(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    videosdisp(data);

}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function videosdisp(data) {
    let tab =
        ``;

    // Loop to access all rows
    for (let r of data.ressource) {
        tab += `<div class="col-xl-3 col-lg-4 col-md-6">
        <div class="gen-carousel-movies-style-2 movie-grid style-2">
            <div class="gen-movie-contain">
                <div class="gen-movie-img">
                    <img src="${r.videoIMG}" alt="single-video-image">
                    <div class="gen-movie-add">
                        <div class="wpulike wpulike-heart">
                            <div class="wp_ulike_general_class">
                                <a href="single-videos.html?video=${r._id}&channelId=${r.channelId}" class="sl-button text-white">
                                    <i class="fa-solid fa-eye"></i>
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
                        <div class="video-actions--link_add-to-playlist dropdown">
                            <a class="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                    class="fa-solid fa-user"></i></a>
                            <div class="dropdown-menu">
                                <a class="login-link" href="#">Sign in to add
                                    this video to a playlist.</a>
                            </div>
                        </div>
                    </div>
                    <div class="gen-movie-action">
                        <a href="single-videos.html?video=${r._id}&channelId=${r.channelId}" class="gen-button">
                            <i class="fa fa-play"></i>
                        </a>
                    </div>
                </div>
                <div class="gen-info-contain">
                    <div class="gen-movie-info">
                        <h3><a href="single-videos.html?video=${r._id}&channelId=${r.channelId}">${r.title}</a></h3>
                    </div>
                    <div class="gen-movie-meta-holder">
                        <ul>
                            <li>Anglais</li>
                            <li>
                                <a href="adventure.html"><span>League Of Legends</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    }
    // Setting innerHTML as tab variable
    if (x.username == "locklier") {
        tab += `<div class="col-xl-3 col-lg-4 col-md-6">
        <div class="gen-carousel-movies-style-2 movie-grid style-2">
            <div class="gen-movie-contain">
                <div class="gen-movie-img">
                    <img src="https://cdn.discordapp.com/attachments/987460362251173918/991309992152006656/unknown.png" alt="single-video-image">
                    <div class="gen-movie-add">
                        <div class="wpulike wpulike-heart">
                            <div class="wp_ulike_general_class">
                                <a href="single-videos.html?video=62baeb711ecb274e0cdda22c&channelId=62b4e1da081f28d19c1dfc68" class="sl-button text-white">
                                    <i class="fa-solid fa-eye"></i>
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
                        <div class="video-actions--link_add-to-playlist dropdown">
                            <a class="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                    class="fa-solid fa-user"></i></a>
                            <div class="dropdown-menu">
                                <a class="login-link" href="#">Sign in to add
                                    this video to a playlist.</a>
                            </div>
                        </div>
                    </div>
                    <div class="gen-movie-action">
                        <a href="single-videos.html?video=62baeb711ecb274e0cdda22c&channelId=62b4e1da081f28d19c1dfc68" class="gen-button">
                            <i class="fa fa-play"></i>
                        </a>
                    </div>
                </div>
                <div class="gen-info-contain">
                    <div class="gen-movie-info">
                        <h3><a href="single-videos.html?video=62baeb711ecb274e0cdda22c&channelId=62b4e1da081f28d19c1dfc68">live test</a></h3>
                    </div>
                    <div class="gen-movie-meta-holder">
                        <ul>
                            <li>Anglais</li>
                            <li>
                                <a href="adventure.html"><span>League Of Legends</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    }
    document.getElementById("videosdisplay").innerHTML = tab;
}

