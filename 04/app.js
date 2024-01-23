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

