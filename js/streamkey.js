let tokens = document.cookie;
function parsewt(token) {
    var base64Url = token.split('.')[1];
    var base64 = decodeURIComponent(atob(base64Url).split('').map((c) => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));


    return JSON.parse(base64);
};
var x = parsewt(tokens)

console.log(x.username.toUpperCase())

const api111_url =
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
    streamkey(data);
}
// Calling that async function
getapi(api111_url);

// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}

function streamkey(data) {
    let tab1 = ''
        ;
    for (let a of data.ressource) {
        if (a.title == (x.username.toUpperCase())) {
            tab1 += `<input id="copystream" type="password" autocapitalize="off" autocorrect="off" readonly=""
      value="${a.streamKey}"> <button onclick="copystreamkey()" style="background: transparent; border: none !important;
"><i class="fa-solid fa-copy" style="color: white;"></i></button>`;
        }
        // Setting innerHTML as tab variable
        document.getElementById("streamkeydisp").innerHTML = tab1;

    }
}


