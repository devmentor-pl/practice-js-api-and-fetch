
document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');

    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => getWeatherData(e, form));
}


function getWeatherData(e, form) {
    e.preventDefault();

    const latitude = form.elements[0].value;
    const longitude = form.elements[1].value;

    const promise = fetch(`https://api.weatherbit.io/v2.0/current?key=e3907d2933ba4e9bb7403f6f61e8f651&lat=${latitude}&lon=${longitude}&lang=pl&units=I`);

    promise
        .then(resp => {
            if (resp.ok) return resp.json()
            return Promise.reject(resp);
        })
        .then(data => updateWeatherInformations(data.data[0]))
        .catch(err => console.log(err))
        .finally(() => {
            console.log('Odczytywanie zakończone!')
        });
}


function updateWeatherInformations(weatherData) {
    const { lat, lon, temp, weather: { description: weatherDesc } } = weatherData;

    updateElement('weather__lat', lat)
    updateElement('weather__lng', lon)
    updateElement('weather__summary', weatherDesc)
    updateElement('weather__temperature', temp)
}

function updateElement(className, information) {
    const elementToUpdate = document.querySelector(`.${className}`);
    elementToUpdate.innerText = information;
}