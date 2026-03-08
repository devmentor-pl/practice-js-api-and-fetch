import API_KEY from "./env.js";

document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');

    const formEl = document.querySelector('.form');
    const latInputEl = formEl.querySelector('.form__field--lat');
    const lngInputEl = formEl.querySelector('.form__field--lng');

    if (isPresent(formEl)) {
        formEl.addEventListener('submit', (ev) => {
            ev.preventDefault();

            if (isPresent(latInputEl) && isPresent(lngInputEl)) {
                const latVal = latInputEl.value;
                const lngVal = lngInputEl.value;

                const weatherSectionEl = document.querySelector('.weather');
                const weatherLatEl = weatherSectionEl.querySelector('.weather__lat');
                const weatherLngEl = weatherSectionEl.querySelector('.weather__lng');
                const weatherSummaryEl = weatherSectionEl.querySelector('.weather__summary');
                const weatherTempEl = weatherSectionEl.querySelector('.weather__temperature');


                fetch(`https://api.weatherbit.io/v2.0/current?lat=${latVal}&lon=${lngVal}&units=I&key=${API_KEY}`)
                    .then((resp) => {
                        if (resp.ok) {
                            return resp.json();
                        }
                    })
                    .then((data) => {

                        weatherSummaryEl.textContent = data.data[0].weather.description;
                        weatherLngEl.textContent = lngVal;
                        weatherLatEl.textContent = latVal;
                        weatherTempEl.textContent = data.data[0].temp;

                        latInputEl.value = '';
                        lngInputEl.value = '';
                    })
                    .catch(err => alert(err));
            }

        })
    }
}

function isPresent(el) {
    if (el) {
        return el instanceof Element;
    } else {
        return false
    }
}