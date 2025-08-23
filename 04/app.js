document.addEventListener('DOMContentLoaded', init);


function init() {
    console.log('DOM załadowany');

    const form = document.querySelector('.form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const lat = document.querySelector('.form__field--lat').value;
        const lng = document.querySelector('.form__field--lng').value;
        
        if (!lat || !lng) {
            alert('No data provided');
            return;
        }
        
        const apiKey = prompt("Provide API key");
        if (!apiKey) {
            alert('You need API key to proceed. Get it by register on weatherbit.io ');
            return;
        }
        
        const url = `https://api.weatherbit.io/v2.0/current?key=${apiKey}&lat=${lat}&lon=${lng}&lang=pl`;
        
        fetch(url)
            .then(response => response.json())
            .then(data => {
                updateWeatherInfo(data);
            })
            .catch(error => console.error(error));
    });
}

function updateWeatherInfo(data) {
    const weatherLat = document.querySelector('.weather__lat');
    const weatherLng = document.querySelector('.weather__lng');
    const weatherSummary = document.querySelector('.weather__summary');
    const weatherTemperature = document.querySelector('.weather__temperature');

    if (data.data) {
        const weather = data.data[0];
        weatherLat.textContent = weather.lat;
        weatherLng.textContent = weather.lon;
        weatherSummary.textContent = weather.weather.description;
        weatherTemperature.textContent = weather.temp + '°C';
    } else {
        alert('Wrong data provided')
    }
}