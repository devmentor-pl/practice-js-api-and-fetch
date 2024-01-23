document.addEventListener('DOMContentLoaded', init);

function init() {
    getWeather();
};

function getWeather() {
    const form = document.querySelector('.form');
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const [lat, lon] = [...e.currentTarget.elements];
        if (simplyValid(lat.value, lon.value)) {
            weatherData(lat.value,lon.value)
        };
    });
};

function WeatherData(latitude, longitude) {
    const api = 'https://api.weatherbit.io/v2.0/current';
    const apiKey = '2152939f82134cf69940f7dd9139bf89';
    return fetch(`${api}key=${apiKey}&lat=${latitude}&lon=${longitude}&lang=pl`)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else throw new Error('Please try again. Cant get current weather')
        }).then(data => {
            displayWeatherInformation(data, latitude, longitude)
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



