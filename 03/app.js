document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');
    const btn = document.querySelector("button");
    btn.addEventListener("click", handleClick)
}

function handleClick() {
    // I used Moesif Origin & CORS Changer CHROME PLUGIN

    const options = {
        method: "GET",
        headers: { 'Content-Type': 'application/json' }
    }
    // const url = "https://api.ipify.org/";
    const url = "https://api.myip.com";

    const promise = fetch(url, options);

    promise
        .then(resp => resp.json())
        // .then(json => console.log(json))
        .then(json => updateIP(json))
        .catch(err => console.error(err))
        .finally(() => console.log("Odpytywanie API zakończone!"))
}

function updateIP(json) {
    const span = document.querySelector("span");
    const { ip } = json;

    span.textContent = ip
}