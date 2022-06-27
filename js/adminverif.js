let token99 = document.cookie;
function parsewt(token99) {
    var base64Url = token99.split('.')[1];
    var base64 = decodeURIComponent(atob(base64Url).split('').map((c) => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));


    return JSON.parse(base64);
};
var x = parsewt(token99)
userbaner();

function userbaner(data) {
    let tab7 =
        ``;


    if (x.role == "admin") {
        console.log("test")
        tab7 += ` <li class="menu-item active">
            <a href="index.html" aria-current="page">Dashboard</a>
         </li>
         <li class="menu-item active">
            <a href="index.html" aria-current="page">Home</a>
         </li>
         <li class="menu-item">
            <a href="video-infinite-scroll.html">Videos</a>
         </li>
         <li class="menu-item">
            <a href="live-infinite-scroll.html">Lives</a>
         </li>
         <li class="menu-item">
            <a href="Category-infinite-scroll.html">Category</a>
        
         </li>
         <li class="menu-item">
            <a href="#">About Us</a>
            <i class="fa fa-chevron-down gen-submenu-icon"></i>
            <ul class="sub-menu">
               <li class="menu-item menu-item-has-children">
                  <a href="blog-right-sidebar.html">Blog</a>
               </li>
               <li class="menu-item menu-item-has-children">
                  <a href="pricing-style-1.html">Q&A</a>
               </li>
               <li class="menu-item">
                  <a href="contact-us.html">Contact Us</a>
               </li>
            </ul>
         </li>`;
        document.getElementById("genmainmenu").innerHTML = tab7;
    }
    // Setting innerHTML as tab variable



}