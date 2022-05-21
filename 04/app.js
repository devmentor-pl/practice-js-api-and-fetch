document.addEventListener('DOMContentLoaded', init);

function init() {

    const form = document.querySelector("form");
    form.addEventListener("submit", handleSubmit)
}

function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.elements)
    const [latEl, longEl] = e.target.elements;
    const latValue = latEl.value;
    const longValue = longEl.value
    console.log(latValue, longValue)
    const url = `https://api.weatherbit.io/v2.0/current?key=91afce6c8c6b4b368fbde18e20a314e7&lat=${latValue}&lon=${longValue}&lang=pl&units=I`;

    console.log(url);

    const promise = fetch(url);

    promise
        .then(resp => resp.json())
        // .then(json => console.log(json))
        .then(json => updateData(json))
        .catch(err => console.error(err))
        .finally(() => {
            console.log('Odpytywanie API zakończone!')
        })
}

function updateData(json) {
    const city = document.querySelector(".weather__city");
    const lat = document.querySelector(".weather__lat");
    const lng = document.querySelector(".weather__lng");
    const summary = document.querySelector(".weather__summary");
    const temp = document.querySelector(".weather__temperature");
    const { data } = json;
    const [info] = data;
    console.log(info);

    city.textContent = info.city_name;
    lat.textContent = info.lat;
    lng.textContent = info.lon;
    summary.textContent = info.weather.description;
    temp.textContent = info.app_temp;
}
