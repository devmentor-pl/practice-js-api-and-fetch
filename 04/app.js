document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');

    const formEl = document.querySelector('.form');
    const latEl = document.querySelector('.weather__lat');
    const lngEl = document.querySelector('.weather__lng');
    const summary = document.querySelector('.weather__summary');
    const temp = document.querySelector('.weather__temperature')

    if(formEl) {
        formEl.addEventListener('submit', handleSubmit);
    }

    function handleSubmit(e) {
        e.preventDefault();

        console.log(e.target.elements);
        const [lat, lng] = e.target.elements;

        latEl.innerText = lat.value;
        lngEl.innerText = lng.value;

        const key = '7950d7e4e3c64903a92dfc9c3069c67c';

        fetch(`https://api.weatherbit.io/v2.0/current?key=${key}&lat=${lat.value}&lon=${lng.value}&units=I&lang=pl`)
            .then(resp => {
                if(resp.ok) { return resp.json(); }
            })
            .then(data => {
                console.log(data);

                summary.innerText = data.data[0].weather.description;
                temp.innerText = data.data[0].temp;
            })
            .catch(err => console.error(err)); 
    }
}