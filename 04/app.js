document.addEventListener('DOMContentLoaded', init);

function init() {
    getWeather();
};

function getWeather() {
    const form = document.querySelector('.form');
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const [lat, lon] = [...e.currentTarget.elements];
        if (valid(lat.value, lon.value)) {
            weatherData(lat.value,lon.value)
        };
    });
};

function weatherData(latitude, longitude) {
    const api = 'https://api.weatherbit.io/v2.0/current?';
    const apiKey = '2152939f82134cf69940f7dd9139bf89';
    return fetch(`${api}key=${apiKey}&lat=${latitude}&lon=${longitude}&lang=pl`)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else throw new Error('Please try again. Cant get current weather')
        }).then(data => {
            weatherInfo(data, latitude, longitude)
        });
};

function weatherInfo(fetchData, latitude, longitude) {
    const [lat, lon, summary, temperature] = document.querySelectorAll('strong');
    const { data: [{ temp, weather: { description } }] } = fetchData;
    lat.textContent = latitude;
    lon.textContent = longitude;
    summary.textContent = description;
    temperature.textContent = `${temp}°C`;
};

function valid(value1, value2) {
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

//Notatki przerobić program na sprawdzanie jakości powietrza


