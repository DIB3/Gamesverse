
// api url
const api3_url =
   "http://127.0.0.1:3000/categories";

// Defining async function
async function get3api(url) {

   // Storing response
   const response = await fetch(url);

   // Storing data in form of JSON
   var data = await response.json();
   console.log(data);
   if (response) {
      hideloader();
   }
   videosdisp(data);
   videoshomedisp(data);
}
// Calling that async function
get3api(api3_url);

// Function to hide the loader
function hideloader() {
   document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function videosdisp(data) {
   let tab5 =
      ``;

   // Loop to access all rows
   for (let r of data.ressource) {
      tab5 += ` <div class="raja">

        <div class="video-item-card radius">
           <div class="video-thumbnail">
              <a href="Category.html">
                 <img class="categimg" src="${r.imageURL}">
              </a>
           </div>
           <div class="video-content">
              <div class="d-flex">
                 <div class="my-auto">
                    <a href="Category.html">
                       <h5>${r.name} </h5>
                    </a>
                    <ul class="list-inline mb-0">
                       <li class="list-inline-item">
                          <div class="d-flex video-meta-bottom">
                             <div class="cat">
                                <i class="fa-regular fa-eye"></i>

                                <a>1900 Views</a><br>
                                <a href=""><span>${r.tagname}</span></a>
                             </div>
                       </li>
                    </ul>

                 </div>
              </div>
           </div>
        </div>
     </div>`;
   }
   // Setting innerHTML as tab variable
   document.getElementById("homedispcat").innerHTML = tab5;
}

