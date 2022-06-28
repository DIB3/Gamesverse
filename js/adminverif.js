let token99 = document.cookie;
function parsewt(token99) {
   var base64Url = token99.split('.')[1];
   var base64 = decodeURIComponent(atob(base64Url).split('').map((c) => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
   }).join(''));


   return JSON.parse(base64);
};
var x = parsewt(token99)


const api1211_url =
   "http://127.0.0.1:3000/streams";

// Defining async function
async function getapi11(url) {

   // Storing response
   const response = await fetch(url);

   // Storing data in form of JSON
   var data = await response.json();
   console.log(data);
   if (response) {
      hideloader();
   }
   useracces(data);

}
// Calling that async function
getapi11(api1211_url);

// Function to hide the loader
function hideloader() {
   document.getElementById('loading').style.display = 'none';
}
function useracces(data) {
   if (x.role == "admin") {
      tab4 = `
       <li>
          <a href="Channelo.html">
          <i class="fa fa-user"></i>
          Profile</a>
         </li>
         <li>
          <a href="dashboard.html">
          <i class="fa fa-indent"></i>
          Dashboard</a>
         </li>
         <li>
          <a href="#popup1">
          <i class="fa fa-video-camera"></i>
          Upload Video</a>
         </li>
         <li>
          <a href="#popup2">
          <i class="fa fa-video-camera"></i>
          How to stream</a>
         </li>
       
       <li>
          <a href="log-in.html" onclick="deleteAllCookies()">
          <i class="fa fa-sign-out"></i>
          Logout</a>
         </li>`;

      // Setting innerHTML as tab variable
      document.getElementById("useracces").innerHTML = tab4;
   } if (x.role == "user") {
      tab4 = `
         <li>
            <a href="Channelo.html">
            <i class="fa fa-user"></i>
            Profile</a>
           </li>
           <li>
            <a href="options.html">
            <i class="fa fa-indent"></i>
            Settings</a>
           </li>
           <li>
            <a href="#popup1">
            <i class="fa fa-video-camera"></i>
            Upload Video</a>
           </li>
           <li>
            <a href="#popup2">
            <i class="fa fa-video-camera"></i>
            How to stream</a>
           </li>
         
         <li>
            <a href="log-in.html" onclick="deleteAllCookies()">
            <i class="fa fa-sign-out"></i>
            Logout</a>
           </li>`;

      // Setting innerHTML as tab variable
      document.getElementById("useracces").innerHTML = tab4;
   }
}
function deleteAllCookies() {
   var cookies = document.cookie.split(";");
   for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";

   }
}

function mcopyult() {
   /* Get the text field */
   var copyText = document.getElementById("copyUrl");

   /* Select the text field */
   copyText.select();
   copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
   navigator.clipboard.writeText(copyText.value);


}
function copystreamkey() {
   /* Get the text field */
   var copyText = document.getElementById("copystream");

   /* Select the text field */
   copyText.select();
   copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
   navigator.clipboard.writeText(copyText.value);

}