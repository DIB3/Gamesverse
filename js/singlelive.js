const live = "https://56daf69a78fb.us-east-1.playback.live-video.net/api/video/v1/us-east-1.125617940557.channel.pl47Hpj8s7nZ.m3u8";

const api1_url =
    "http://127.0.0.1:3000/streams";

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
    liveselection(data);
}
// Calling that async function
getapi(api1_url);

// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function liveselection(data) {

    tab4 = `<div class="testo">
      <div class="iconnn">
          <span><I>Last Live: 5 hours ago</I></span>
      </div>
      <h5>Kenny's - Game Sniper</h5>
      
      <span style="color:#3F9FFF; "><b> Counter-Strike : Global Offensive</b></span>
      <br>
      <span style=" color:#fff; "><b> French</b></span>
      <br>
      <span style=" color:#888; "><b> FPS, Multiplayer</b></span>
      
      <br>
      <br>
      <hr>
      <div style="margin-top: 50px; ;" class="userp">
          <img src="images/kenny.jpg" alt="stream-lab-image">
          <h2 class="testo-title">Kenny's</h2>
          <div class="suivre">
              <div class="gen-socail-share mt-0">
                  <ul class="social-inner">
                      <li><a href="#" class="facebook"><i>Follow</i></a></li>
                      <li><a href="#" class="facebook"><i>Subscribe</i></a></li>
                  </ul>
              </div>
          </div>
      </div>
      
      
      <div class="gen-single-meta-holder">
          <ul>
              <li><I>953,5 K followers</I></li>
              <li>
                  <a href="#"><span> Was on Stream: 2hours ago</span></a>
              </li>
              <li>
                  <i class="fas fa-eye">
                  </i>
                  <span>225 k Views</span>
              </li>
          </ul>
      </div>
      
      </div>`;

    // Setting innerHTML as tab variable
    document.getElementById("streamdata").innerHTML = tab4;
}
