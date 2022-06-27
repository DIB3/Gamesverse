let params = new URLSearchParams(location.search);

var chanid = params.get('channelId');

const api1_url =
    "http://127.0.0.1:3000/profiles";

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

    userbaner(data);
    useravatar(data);
    userainfo(data);
}
// Calling that async function
getapi(api1_url);

// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}

function userbaner(data) {
    let tab7 =
        ``;

    // Loop to access all rows
    for (let a of data.ressource) {
        if (a._id == chanid) {
            tab7 += ` <img style="height:450px;margin-top:90px;"
            src="${a.bannerIMG}"
            alt="stream-lab-image">`;
        }
        // Setting innerHTML as tab variable
        document.getElementById("banneruser").innerHTML = tab7;
        console.log(a.title + x.username)
    }
}
function useravatar(data) {
    let tab8 =
        ``;

    // Loop to access all rows
    for (let a of data.ressource) {
        if (a._id == chanid) {
            tab8 += ` <div class="gentech-tv-show-img-holder">
            <img src="${a.profileImageURL}" alt="stream-lab-image">
        </div>`;
        }
        // Setting innerHTML as tab variable
        document.getElementById("userimg").innerHTML = tab8;
        console.log(a.title + x.username)
    }
}

function userainfo(data) {
    let tab8 =
        ``;

    // Loop to access all rows
    for (let a of data.ressource) {
        if (a._id == chanid) {
            tab8 += `   <div class="gen-single-tv-show-info">
            <h2 class="gen-title">${a.title}</h2>
            <div class="gen-single-meta-holder">
                <ul>
                    <li>
                        <h6><B><I> ${a.followers} </I></B></h6> followers
                    </li>
                   
                       
                   
                </ul>
            </div>
            <p>${a.channeldescription}</p>

            <button class="btnfollow" style="color: #fff;"> <a href="#">Follow</a></button>


        </div>`;
        }
        // Setting innerHTML as tab variable
        document.getElementById("userinfo").innerHTML = tab8;

    }
}
