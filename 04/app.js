/* W tym zadaniu musisz pobrać aktualną pogodę dla podanych w polu formularza współrzędnych.

Wykorzystaj do tego API o nazwie weatherbit.io, które umożliwia wykonać dziennie 500 odpytań w darmowym planie.

Aby móc skorzystać z tego API musisz się zarejestrować, aby uzyskać tzw. key.

Adres pod którym możemy pobierać dane o pogodzie to: https://api.weatherbit.io/v2.0/current?key=[key]&lat=[latitude]&lon=[longitude], gdzie:

[key] - Twój identyfikator
[latitude] - szerokość geograficzna
[longitude] - długość geograficzna
Przykładowe współrzędne to:

Warszawa: 52.232222, 21.008333
Kraków: 50.061389, 19.938333
Wrocław: 51.11, 17.022222
Zapoznaj się z dokumentacją, która prezentuje strukturę odpowiedzi. Znajdziesz tam także informacje jak pobierać dane w języku polskim.*/

document.addEventListener('DOMContentLoaded', init);


function init() {
    console.log('DOM');

    const form = document.querySelector('.form');
    form.addEventListener('submit', getData);
}

function getData(e) {
    e.preventDefault();

    const latitude = document.querySelector('.form__field--lat');
    const longitude = document.querySelector('.form__field--lng');

    if (latitude && longitude) {
        const lat = latitude.value;
        const lng = longitude.value;

        console.log(lat);
        console.log(lng);

        const weatherLat = document.querySelector('.weather__lat');
        const weatherLng = document.querySelector('.weather__lng');
        const weatherSummary = document.querySelector('.weather__summary');
        const weatherTemperature = document.querySelector('.weather__temperature');


        weatherLat.textContent = lat;
        weatherLng.textContent = lng;


        const key = '46ab6ee6f1824ef3bce1cae4ac3583f5';


        const promise = fetch(`http://api.weatherbit.io/v2.0/current?key=${key}&lang=pl&units=I&lon=${lng}&lat=${lat}`);


        promise
            .then((response) => response.json())
            .then(data => {
                const { temp, weather: { description } } = data.data[0];
                console.log({ temp, description });
                return { temp, description };
            })
            .then(result => {
                weatherSummary.textContent = result.description
                weatherTemperature.textContent = result.temp
            });

    }

}
