document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');
    const form = document.querySelector('form');
    const latitude = document.querySelector('.form__field--lat');
    const longitude = document.querySelector('.form__field--lng');

    const getWeather = (e) => {
        e.preventDefault();
        const key = 'cbb680941a054fd38cf17db5e625be91';
        const url = `http://api.weatherbit.io/v2.0/current?key=${key}&lang=pl&lat=${latitude.value}&lon=${longitude.value}`; 

        fetch(url)
            .then(response => {
                return response.json()
            }) 
            .then(json => showWeather(json.data))
            .catch(err => console.log(err))
    }

    const getFahrenheit = (celsius) => {
        const fahrenheit = (celsius * 9)/5 + 32;
        return fahrenheit.toFixed(2);
    }

    const showWeather = (weather) => {
        console.log(weather[0]);
        document.querySelector('.weather__lat').textContent = latitude.value;
        document.querySelector('.weather__lng').textContent = longitude.value;
        document.querySelector('.weather__summary').textContent = weather[0].weather.description;
        document.querySelector('.weather__temperature').textContent = getFahrenheit(weather[0].temp);
        latitude.value = '';
        longitude.value = '';
        // tutaj kasuje zawartość inputów aby bez odświeżania strony aktualizować informacje na stronie przy następnym wyszukaniu
    };

    form.addEventListener('submit', getWeather);
}
