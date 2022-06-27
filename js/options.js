
const api8_url =
    "http://127.0.0.1:3000/categories";

// Defining async function
async function getapi8(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    categorieslist(data);
    console.log('test');

}
// Calling that async function
getapi8(api8_url);

// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
function categorieslist(data) {

    let tab =
        ``;
    let tab1 = '';

    // Loop to access all rows
    for (let r of data.ressource) {
        tab += ` <option value="${r.name}">${r.name}</option>`;
        tab1 += ` <option value="${r.tagname}">${r.tagname}</option>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("langgat").innerHTML = tab;
    document.getElementById("langtag").innerHTML = tab1;
}