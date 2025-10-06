
document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');
}

const submitEl = document.querySelector('.form__submit');
submitEl.addEventListener('click', getWeather);

function getWeather(e) {
    e.preventDefault();
    const latEl = document.querySelector('.form__field--lat');
    const lngEl = document.querySelector('.form__field--lng');

    const keyEl = 'deeaed3434f040bab058e759479f90f5';
    const langEl = 'pl'
    let latVal = latEl.value.trim();
    let lngVal = lngEl.value.trim();

    if (latVal === '' || lngVal === '') {
        alert('Podaj współrzędne – pola nie mogą być puste!');
        return;
    }

    latVal = Number(latVal);
    lngVal = Number(lngVal);

    if (isNaN(latVal) && isNaN(lngVal)) {
        alert('Podaj prawidłowe liczby dla współrzędnych!');
        return;
    }

    if (latVal < -90 || latVal > 90 || lngVal < -180 || lngVal > 180) {
        alert("Wprowadź poprawny zakres: szerokość -90 do 90, długość -180 do 180.");
        return;
    }

    const promise = fetch(`https://api.weatherbit.io/v2.0/current?key=${keyEl}&lang=pl&lat=${latVal}&lon=${lngVal}&units=I&description`);

    promise
        .then(resp => {
            if (resp.ok) { return resp.json(); }
            return Promise.reject(resp);
        })
        .then(resp => {
            const weatherLat = document.querySelector('.weather__lat')
            const weatherLng = document.querySelector('.weather__lng')
            const weatherSummary = document.querySelector('.weather__summary')
            const weatherTemp = document.querySelector('.weather__temperature')
            weatherLat.innerText = latVal;
            weatherLng.innerText = lngVal;
            weatherSummary.innerText = resp.data[0].weather.description;
            weatherTemp.innerText = resp.data[0].temp;
            console.log(resp.data[0].lat, resp.data[0].lon, resp.data[0].temp, resp.data[0].weather.description)
        })
        .catch(err => console.error(err))
        .finally(() => {
            console.log('Odpytywanie API zakończone!')
        });
}


