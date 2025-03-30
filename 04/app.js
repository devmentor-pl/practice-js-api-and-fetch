document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');
}
let weatherData = []

const weatherLat = document.querySelector(".weather__lat")
const weatherLng = document.querySelector(".weather__lng")
const weatherSummary = document.querySelector(".weather__summary")
const weatherTmp = document.querySelector(".weather__temperature")
const submit = document.querySelector(".form__submit")
const inputLng = document.querySelector(".form__field--lng")
const inputLat = document.querySelector(".form__field--lat")
const getData = function (lat, lng) {
    const promise = fetch(`https://api.weatherbit.io/v2.0/current?key=8c0f3e2bfce546e48c806c2eaf77af17&lat=${lat}&lon=${lng}`)
    promise.then((resp) => {


        return resp.json();
    })
        .then((data) => {

            weatherData.push(data)
            weatherLat.innerText = weatherData[0].data[0].lat
            weatherLng.innerText = weatherData[0].data[0].lon
            weatherTmp.innerText = weatherData[0].data[0].temp
            weatherSummary.innerText = weatherData[0].data[0].weather.description

        });

}



submit.addEventListener("click", showWeather = (e) => {

    e.preventDefault()
    const lat = inputLat.value
    const lng = inputLng.value
    getData(lat, lng)
})

