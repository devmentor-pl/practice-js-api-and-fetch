document.addEventListener('DOMContentLoaded', init);

const apiUrl = "https://api.weatherbit.io/v2.0/current?lang=pl&units=I";
const apiKey = "c5e4f61e1a6c3b1521b541bc5c5a2ac5";


function init() {
    console.log('DOM');
}

function getCoords(e) {
    e.preventDefault();
    const lat = document.querySelector(".form__field--lat").value;
    const lng = document.querySelector(".form__field--lng").value;
    displayCoords(lat, lng);
    showWeather(lat, lng);
}

function displayCoords(lat, lng) {
    const displayLat = document.querySelector(".weather__lat");
    displayLat.innerText = lat;
    const displayLng = document.querySelector(".weather__lng");
    displayLng.innerText = lng;
}

async function showWeather(lat, lng) {
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
    const lang = "pl";

    const fetchApi = fetch(
        `https://api.weatherbit.io/v2.0/current?key=${apiKey}&lat=${lat}&lon=${lng}&lang=${lang}`
    );

    return fetchApi.then((resp) => {
        if (resp.ok) {
            return resp.json();
        }

        return Promise.reject(resp);
    })
        .then((currentlyWeather) => {
            const conditions = currentlyWeather.data[0].currentlyWeather.description;
            const temp = currentlyWeather.data[0].app_temp;
            const data = [conditions, temp];
            return data;
        })
        .catch((err) => console.error(err));
}

