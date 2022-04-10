document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');

    const button = document.querySelector('.form__submit');
    button.addEventListener('click', getWeather);
}

function getWeather(e) {
    e.preventDefault();

    const lat = document.querySelector('.form__field--lat');
    const lng = document.querySelector('.form__field--lng');

    if(lat.value === '' || lng.value === '') {
        alert('Podaj współrzędne!')
    } else {
        const promise = fetch(`https://api.weatherbit.io/v1.0/current?key=72418f901baa4d5e9d0af04ff3799a08&lat=${lat.value}&lon=${lng.value}&lang=pl&units=I`)
        
        promise
        .then(resp => {
            if(resp.ok) {
                return resp.json();
            }
        })
        .then(data => {
            const {weather: {description: description}} = data.data[0];
            showData(lat.value, lng.value, description, data.data[0].temp)
        })
        .catch(err => console.log(err)) 
        .finally(console.log('Gotowe!'))
    }
}

function showData(lat, lng, description, temp) {
    const weatherLatParagraph = document.querySelector('.weather__lat');
    const weatherLngParagraph = document.querySelector('.weather__lng');
    const weatherSummary = document.querySelector('.weather__summary');
    const weatherTemp = document.querySelector('.weather__temperature');

    weatherLatParagraph.textContent = lat;
    weatherLngParagraph.textContent = lng;
    weatherSummary.textContent = description;
    weatherTemp.textContent = temp;
}