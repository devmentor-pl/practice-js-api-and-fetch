document.addEventListener('DOMContentLoaded', init);

const apiUrl = "http://ip-api.com/json/";
function init() {
    console.log('DOM');
    document.querySelector("button").addEventListener("click", () => getIpFromAPI(apiUrl))
}

async function getIpFromAPI(apiUrl) {
    const spanIP = document.querySelector("span")
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        spanIP.innerText = json.query

    } catch (error) {
        console.log(error)
    }
}

