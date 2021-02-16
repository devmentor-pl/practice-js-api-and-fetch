document.addEventListener('DOMContentLoaded', init);


function init() {
    console.log('DOM');


    const formEl = document.querySelector('form');
    formEl.addEventListener('submit', dataDewnload);

}


const dataDewnload = e => {
    e.preventDefault();

    const valuesList = [];
    for (let i = 0; i < e.target.length - 1; i++) {
        valuesList.push(e.target[i].value);
    }

    const promise = fetch(`https://api.weatherbit.io/v2.0/current?key=ebb2bedeb39a4cffa34dc9ea4c929795&lat=${valuesList[0]}&lon=${valuesList[1]}`);

    promise
        .then(resp => {
            if (resp.ok) { return resp.json(); }
            return Promise.reject(resp);
        })
        .then(ip => {
            ip.data.forEach(element => {
                const { lat, lon, app_temp, weather: { description } } = element;
                descriptionWeather(lat, lon, description, app_temp);
            });
        })
        .catch(err => console.error(err))
        .finally(() => {
            console.log('Odpytywanie API zakończone!')
        });
}


const descriptionWeather = (lat, lon, description, temperature) => {
    const latEl = document.querySelector('.weather__lat');
    const lngEl = document.querySelector('.weather__lng');
    const descriptionEl = document.querySelector('.weather__summary');
    const temperatureEl = document.querySelector('.weather__temperature');

    latEl.innerText = lat;
    lngEl.innerText = lon;
    descriptionEl.innerText = description;
    temperatureEl.innerText = 32 + (9 / 5 * temperature);
}



