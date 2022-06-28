
// api url
const api111_url =
    "http://127.0.0.1:3000/profiles";

// Defining async function
async function get1api(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }

    usernum(data);
    followsnum(data);
    subnum(data);
    userli(data);

}
// Calling that async function
get1api(api111_url);

// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function usernum(data) {
    let tab0 = 0
        ;

    // Loop to access all rows
    for (let b of data.ressource) {
        tab0 += 1;
    }
    // Setting innerHTML as tab variable
    document.getElementById("userdata").innerHTML = tab0;
    document.getElementById("userdata1").innerHTML = tab0;
}

function followsnum(data) {
    let tab0 = 0
        ;

    // Loop to access all rows
    for (let b of data.ressource) {
        tab0 += b.followers;
    }
    // Setting innerHTML as tab variable
    document.getElementById("followers").innerHTML = tab0;
}

function subnum(data) {
    let tab0 = 0
        ;

    // Loop to access all rows
    for (let b of data.ressource) {
        tab0 += b.subscribers;
    }
    // Setting innerHTML as tab variable
    document.getElementById("subs").innerHTML = tab0;
}


function userli(data) {
    let tab1 =
        `<thead>
        <tr>
          <th> User Name </th>
          <th> Videos </th>
          <th> Followers </th>
          <th> Subscribers </th>
          <th> Views </th>
          <th> Live </th>
          <th> Status </th>
        </tr>
      </thead>
      <tbody>`;

    // Loop to access all rows
    for (let r of data.ressource) {
        if (r.profileImageURL == null) {
            tab1 += `<tr>

            <td>
              <img src="https://conference.pecb.com/wp-content/uploads/2017/10/no-profile-picture.jpg" alt="image" />
              <span class="pl-2">${r.title}</span>
            </td>
            <td >${r.videos} </td>
            <td> ${r.followers} </td>
            <td> ${r.subscribers} </td>
            <td > ${r.views} </td>
            <td> ${r.isLive} </td>
            <td>
            <select id="monselect" class="badge badge-outline-success">
            <option class="badge badge-outline-danger" value="True">ban</option>
            <option class="badge badge-outline-success" value="False" selected>unban</option>
            
          </select>
            </td>
          </tr>

`;

        }

        else {
            tab1 += `<tr>

            <td>
              <img src="${r.profileImageURL}" alt="image" />
              <span class="pl-2">${r.title}</span>
            </td>
            <td i}"> ${r.videos}</td>
            <td> ${r.followers} </td>
            <td> ${r.subscribers} </td>
            <td > ${r.views} </td>
            <td> ${r.isLive} </td>
            <td>
            <select id="monselect" class="badge badge-outline-success">
  <option class="badge badge-outline-danger" value="True">ban</option>
  <option class="badge badge-outline-success" value="False" selected>unban</option>
  
</select>

              
            </td>
          </tr>

`;
        }


    }
    // Setting innerHTML as tab variable
    document.getElementById("userslist").innerHTML = tab1;
}

// api url
const api_url =
    "http://127.0.0.1:3000/videos";

// Defining async function
async function getapi(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    x = data.ressource

    console.log(x[0]._id)

    if (response) {
        hideloader();
    }
    liveshomedisp(data);
    viewsnum(data);
    videoperuser(data);

}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function liveshomedisp(data) {
    let tab0 = 0
        ;

    // Loop to access all rows
    for (let b of data.ressource) {
        tab0 += 1;
    }
    // Setting innerHTML as tab variable
    document.getElementById("videos").innerHTML = tab0;
}

// Function to define innerHTML for HTML table
function videoperuser(data) {
    var x = data.ressource;
    s = 0;
    for (let d of x) {
        let tab0 = 0
            ;
        r = x[d]._id

        // Loop to access all rows
        for (let b of data.ressource) {
            if (b.channelId == r) {
                tab0 += 1;

            }

        }
        // Setting innerHTML as tab variable

        document.getElementById(r).innerHTML = tab0;
        s += 1;
    }
}
// Function to define innerHTML for HTML table
function viewsnum(data) {
    let tab0 = 0
        ;

    // Loop to access all rows
    for (let b of data.ressource) {
        tab0 += b.views;
    }
    // Setting innerHTML as tab variable

    document.getElementById("views").innerHTML = tab0;
}

