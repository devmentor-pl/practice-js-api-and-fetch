document.addEventListener('DOMContentLoaded', init);

const API_URL = 'https://api.weatherbit.io/v2.0/current';
const SUPER_SAFE_KEY = '8166bd1b540b42039917fe1e6e4d13f0';


function init() {
    const form = document.querySelector('.form');
    const weatherLat = document.querySelector('.weather__lat');
    const weatherLng = document.querySelector('.weather__lng');
    const weatherSummary = document.querySelector('.weather__summary');
    const weatherTemperature = document.querySelector('.weather__temperature');


    form.addEventListener('submit', handleSubmit)

    function handleSubmit(e) {
        e.preventDefault();
        const [latInput, lngInput] = Array.from(e.target.elements);

        if(latInput.value.length === 0 || lngInput.value.length === 0) return;

        const lat = Number(latInput.value);
        const lng = Number(lngInput.value);

        if(isNaN(lat) || isNaN(lng)) {
            alert('Provided incorrect coords!');
            return;
        }

        getWeather(lat, lng, renderWeather);
    }

    function renderWeather(data) {
     const {lat, lon,  weather: { description }, temp} = data

     weatherLat.textContent = lat;
     weatherLng.textContent = lon;
     weatherSummary.textContent = description;
     weatherTemperature.textContent = temp;
    }

    async function getWeather(latitude, longitude, callback) {
        try {
            const response = await fetch(`${API_URL}?key=${SUPER_SAFE_KEY}&lat=${latitude}&lon=${longitude}&lang=pl`);
            if(!response) throw new Error('Fetching failed');

            const data = await response.json();
            callback(data.data[0]);
        } catch (error) {
            console.error(error);
        }
    } 
}