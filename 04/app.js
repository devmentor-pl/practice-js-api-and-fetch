document.addEventListener('DOMContentLoaded', init);

function init() {
    getCurrentWeather();
};

function getCurrentWeather() {
    const form = document.querySelector('.form');
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const [lat, lon] = [...e.currentTarget.elements];
        if (simplyValid(lat.value, lon.value)) {
            getWeatherData(lat.value,lon.value)
        };
    });
};

function getWeatherData(latitude, longitude) {
    const api = 'https://api.weatherbit.io/v2.0/current?';
    const apiKey = '0d259a14aa1b4757919be84cda4d3ae2';
    return fetch(`${api}key=${apiKey}&lat=${latitude}&lon=${longitude}&lang=pl`)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else throw new Error('Can not get current weather, try one more again!')
        }).then(data => {
            displayWeatherInformation(data, latitude, longitude)
        });
};

function displayWeatherInformation(fetchData, latitude, longitude) {
    const [lat, lon, summary, temperature] = document.querySelectorAll('strong');
    const { data: [{ temp, weather: { description } }] } = fetchData;
    lat.textContent = latitude;
    lon.textContent = longitude;
    summary.textContent = description;
    temperature.textContent = `${temp}°C`;
};

function simplyValid(value1, value2) {
    let isValid = false;
    if (value1 && value2 !== '') {
        if (!isNaN(value1) && !isNaN(value2)) {
            isValid = true;
        } else {
            alert('It has to be number')
        };
    } else {
        alert('Put some value in to the field/s');
    };
    return isValid;
};