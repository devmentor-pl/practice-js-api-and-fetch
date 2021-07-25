document.addEventListener("DOMContentLoaded", init);

function init() {
    const button = document.querySelector("button");
    button.addEventListener("click", showID);
}

function API() {
    const API = fetch("https://api64.ipify.org?format=json");

    return API.then((resp) => {
        if (resp.ok) {
            return resp.json();
        }

        return Promise.reject(resp);
    })
        .then((ip) => {
            console.log(ip);
            return ip;
        })
        .catch((err) => console.error(err));
}

async function showID() {
    try {
        const ip = await API();
        const span = document.querySelector("span");
        span.innerText = ip.ip;
    } catch (error) {
        console.log("error");
    }
}
