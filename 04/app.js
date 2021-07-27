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
        console.log(weather);
    } catch (error) {
        console.log("error");
    }
}

function getWeather(lat, lng) {
    const key = "a0d63ece07e944e18ce685e9a119e6bd";

    const API = fetch(
        `https://api.weatherbit.io/v2.0/current?key=${key}&lat=${lat}&lon=${lng}`
    );

    return API.then((resp) => {
        if (resp.ok) {
            return resp.json();
        }

        return Promise.reject(resp);
    })
        .then((weather) => {
            console.log(weather);
            return weather;
        })
        .catch((err) => console.error(err));
}
