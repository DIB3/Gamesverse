
const api1_url =
    "http://127.0.0.1:3000/register";

// Defining async function
async function getapi(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    console.log(data.type);
    if (response) {
        hideloader();
    }
    console.log('test')

}
// Calling that async function
getapi(api1_url);

// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function videoshomedisp(data) {
    let tab4 =
        ``;

    // Loop to access all rows
    for (let a of data.ressource) {
        tab4 += `<div class="item">
     <div
        class="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
        <div class="gen-carousel-movies-style-2 movie-grid style-2">
           <div class="gen-movie-contain">
              <div class="gen-movie-img">
                 <img src="${a.streamIMG}" alt="owl-carousel-video-image">
                 <div class="gen-movie-add">
                    <div class="live">

                       <I><b><a href="">LIVE</a></b></I>
                    </div>
                    <div class="wpulike wpulike-heart">
                       <div class="wp_ulike_general_class wp_ulike_is_not_liked"><button
                             type="button" class="wp_ulike_btn wp_ulike_put_image"></button></div>
                    </div>
                    <ul class="menu bottomRight">
                       <li class="share top">
                          <i class="fa fa-share-alt"></i>
                          <ul class="submenu">
                             <li><a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a>
                             </li>
                             <li><a href="#" class="facebook"><i class="fab fa-instagram"></i></a>
                             </li>
                             <li><a href="#" class="facebook"><i class="fab fa-twitter"></i></a></li>
                          </ul>
                       </li>
                    </ul>
                    <div class="movie-actions--link_add-to-playlist dropdown">
                       <a class="dropdown-toggle" href="#" data-toggle="dropdown"><i
                             class="fa fa-plus"></i></a>
                       <div class="dropdown-menu mCustomScrollbar">
                          <div class="mCustomScrollBox">
                             <div class="mCSB_container">
                                <a class="login-link" href="register.html">Sign in to add this movie
                                   to a
                                   playlist.</a>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
                 <div class="gen-movie-action">
                    <a href="single-live.html?video=${a._id}&channelId=${a.channelId}" class="gen-button">
                       <i class="fa fa-play"></i>
                    </a>
                 </div>
              </div>
              <div class="gen-info-contain">
                 <div class="gen-movie-info">
                    <h3><a href="single-live.html?video=${a._id}&channelId=${a.channelId}">${a.title}</a>
                    </h3>
                 </div>
                 <div class="gen-movie-meta-holder">
                    <ul>
                       <li>Apex Legends</li>
                       <li>
                          <a href="action.html"><span>French</span></a>
                       </li>
                    </ul>
                 </div>
              </div>
           </div>
        </div>
     </div>
     <!-- #post-## -->
  </div>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("livedisphome").innerHTML = tab4;
}
