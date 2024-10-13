document.addEventListener('DOMContentLoaded', init);

function init() {
    const form = document.querySelector('.form');
    const latInput = document.querySelector('.form__field--lat');
    const lngInput = document.querySelector('.form__field--lng');
    
    const weatherLat = document.querySelector('.weather__lat');
    const weatherLng = document.querySelector('.weather__lng');
    const weatherSummary = document.querySelector('.weather__summary');
    const weatherTemperature = document.querySelector('.weather__temperature');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const latitude = latInput.value;
        const longitude = lngInput.value;
        
        if (latitude && longitude) {
           
            const apiKey = '[your_api_key]'; //nie wysłali mi :()
            const url = `https://api.weatherbit.io/v2.0/current?key=${apiKey}&lat=${latitude}&lon=${longitude}&lang=pl`;

            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    const weatherData = data.data[0];
                    weatherLat.textContent = latitude;
                    weatherLng.textContent = longitude;
                    weatherSummary.textContent = weatherData.weather.description;
                    weatherTemperature.textContent = weatherData.temp;
                })
                .catch(error => {
                    console.error('There has been a problem with your fetch operation:', error);
                });
        } else {
            alert('Wprowadź poprawne współrzędne geograficzne.');
        }
    });
}
