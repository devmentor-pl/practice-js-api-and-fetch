document.addEventListener("DOMContentLoaded", init);

function init() {
    console.log("DOM");
    const button = document.querySelector(".form__submit");
    button.addEventListener("click", getCoords);
}

function getCoords(e) {
    e.preventDefault();
    const lat = document.querySelector(".form__field--lat").value;
    const lng = document.querySelector(".form__field--lng").value;
    displayCoords(lat, lng);
    displayWeather(lat, lng);
}

function displayCoords(lat, lng) {
    const displayLat = document.querySelector(".weather__lat");
    displayLat.innerText = lat;
    const displayLng = document.querySelector(".weather__lng");
    displayLng.innerText = lng;
}

async function displayWeather(lat, lng) {
    try {
        const weather = await getWeather(lat, lng);
        const [conditions, temp] = weather;
        const displayWeather = document.querySelector(".weather__summary");
        displayWeather.innerText = conditions.toLowerCase();
        const displayTemp = document.querySelector(".weather__temperature");
        displayTemp.innerText = temp;
    } catch (error) {
        console.log("error");
    }
}

function getWeather(lat, lng) {
    const key = "a0d63ece07e944e18ce685e9a119e6bd";
    const lang = "pl";

    const API = fetch(
        `https://api.weatherbit.io/v2.0/current?key=${key}&lat=${lat}&lon=${lng}&lang=${lang}`
    );

    return API.then((resp) => {
        if (resp.ok) {
            return resp.json();
        }

        return Promise.reject(resp);
    })
        .then((weather) => {
            console.log(weather);
            const conditions = weather.data[0].weather.description;
            const temp = weather.data[0].app_temp;
            const data = [conditions, temp];
            return data;
        })
        .catch((err) => console.error(err));
}
