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
        if (a.channelname == x.username) {
            tab8 += ` <div class="item">
            <div class="gen-episode-contain">
                <div class="gen-episode-img">
                    <img src="${a.videoIMG}" alt="stream-lab-image">
                    <div class="gen-movie-action">
                        <a href="tv-shows-home.html" class="gen-button">
                            <i class="fa fa-play"></i>
                        </a>
                    </div>
                </div>
                <div class="gen-info-contain">
                    <div class="gen-episode-info">
                        <h3 style="text-overflow: ellipsis !important;">
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