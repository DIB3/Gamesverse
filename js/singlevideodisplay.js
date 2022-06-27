let params = new URLSearchParams(location.search);
var videoid = params.get('video');
var chanid = params.get('channelId');

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
    tochaine(data);
    videosdisp(data);
    Titledisp(data);
    viewsdisplay(data);
    timedisplay(data);


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
        if (videoid == r._id) {
            tab += `<iframe width="100%" height="550px" src="${r.videoURL}"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>`;
        }

    }
    // Setting innerHTML as tab variable
    document.getElementById("videosdisplay").innerHTML = tab;
}

function Titledisp(data) {
    let tab1 =
        ``;

    // Loop to access all rows
    for (let r of data.ressource) {
        if (videoid == r._id) {
            tab1 += `${r.title}`;
        }

    }
    // Setting innerHTML as tab variable
    document.getElementById("titledisp").innerHTML = tab1;
}

function tochaine(data) {
    let tab1 =
        ``;

    // Loop to access all rows
    for (let r of data.ressource) {
        if (videoid == r._id) {
            tab1 += `<a id="imgdisp" class="tt" href="Channel.html?channelId=${chanid}">
            </a>
            <a id="namedisp" class="testo-title" href="Channel.html?channelId=${chanid}"></a>

`;
        }

    }
    // Setting innerHTML as tab variable
    document.getElementById("tochain").innerHTML = tab1;
}

function viewsdisplay(data) {
    let tab1 =
        ``;

    // Loop to access all rows
    for (let r of data.ressource) {
        if (videoid == r._id) {
            tab1 += `${r.views} Views`;
        }

    }
    // Setting innerHTML as tab variable
    document.getElementById("viewsid").innerHTML = tab1;
}

function timedisplay(data) {
    let tab1 =
        ``;

    // Loop to access all rows
    for (let r of data.ressource) {
        if (videoid == r._id) {
            const dateTimeAgo = moment(r.uploadDate).fromNow();
            console.log(dateTimeAgo);
            tab1 += `${dateTimeAgo} `;
        }

    }
    // Setting innerHTML as tab variable
    document.getElementById("uptime").innerHTML = tab1;
}


const api1_url =
    "http://127.0.0.1:3000/profiles";

// Defining async function
async function getapi1(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    chainname(data);
    chainimg(data);
    chainfollowers(data);

}
// Calling that async function
getapi1(api1_url);

function chainname(data) {
    let tab2 =
        ``;

    // Loop to access all rows
    for (let f of data.ressource) {
        if (chanid == f._id) {
            tab2 += `${f.title}`;
        }

    }
    // Setting innerHTML as tab variable
    console.log(tab2);
    document.getElementById("namedisp").innerHTML = tab2;
}

function chainimg(data) {
    let tab12 =
        ``;

    // Loop to access all rows
    for (let f of data.ressource) {
        if (chanid == f._id) {
            tab12 += `<img src="${f.profileImageURL}" alt="stream-lab-image">`;
        }

    }
    // Setting innerHTML as tab variable
    console.log(tab12);
    document.getElementById("imgdisp").innerHTML = tab12;
}
function chainfollowers(data) {
    let tab2 =
        ``;

    // Loop to access all rows
    for (let f of data.ressource) {
        if (chanid == f._id) {
            tab2 += `${f.followers} Followers`;
        }

    }
    // Setting innerHTML as tab variable
    console.log(tab2);
    document.getElementById("followers").innerHTML = tab2;
}