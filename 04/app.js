
document.addEventListener('DOMContentLoaded', init);

let form = document.querySelector('form');
let latitude = document.querySelector('.form__field--lat');
let longitude = document.querySelector('.form__field--lng');
let celsius;
let fahrenheit;

const getFahrenheit = () => {
    fahrenheit = ((celsius * 18)/10) + 32;
    return fahrenheit.toFixed(2);
}

function init() {
    console.log('DOM');

    const getWeather = (e) => {
        e.preventDefault();

        // limited to the territory of Poland
        if (latitude.value === '' || typeof parseInt(latitude.value) !== 'number' || isNaN(parseInt(latitude.value)) || parseInt(latitude.value) > 55 || parseInt(latitude.value) < 49) {
            latitude.value = 52.47753; // latitude for Pobiedziska
        }
        if (longitude.value === '' || typeof parseInt(longitude.value) !== 'number' || isNaN(parseInt(longitude.value)) || parseInt(longitude.value) > 24 || parseInt(longitude.value) < 15) {
            longitude.value = 17.28767; // longitude for Pobiedziska
        }

        const key = '920997b796fb4550a7f0e6b7ab1c5130';

        fetch(`http://api.weatherbit.io/v2.0/current?key=${key}&lang=pl&lat=${latitude.value}&lon=${longitude.value}`)
            .then(response => {
                return response.json();
            }) 
            .then(json => calcWeather(json.data))
            .catch(err => console.log(err))
    }

    const calcWeather = (weather) => {
        console.log(weather[0]);
        celsius = weather[0].app_temp;
        document.querySelector('.weather__lat').textContent = latitude.value;
        document.querySelector('.weather__lng').textContent = longitude.value;
        document.querySelector('.weather_city').textContent = weather[0].city_name;
        document.querySelector('.weather__summary').textContent = weather[0].weather.description;
        document.querySelector('.weather__temperature-fahrenheit').textContent = getFahrenheit(celsius);
        document.querySelector('.weather__temperature-celsius').textContent = celsius.toFixed(2);
        latitude.value = '';
        longitude.value = '';
    }

    form.addEventListener('submit', getWeather);
}
