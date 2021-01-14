document.addEventListener('DOMContentLoaded', init);

function init() {
    const form = document.querySelector(".form");
    form.addEventListener("submit", (event) => {
        //const latInput = document.querySelector(".form__field--lat");
        //const lat = lat.value;
        //console.log(lat)
        event.preventDefault()
        const latInput = document.querySelector(".form__field--lat");
        const lngInput = document.querySelector(".form__field--lng");
        const lng = lngInput.value;
        const lat = latInput.value;
        console.log(lat)
        console.log(lng)
        const strongFirst = document.querySelector(".weather__lat");
        const strongSec = document.querySelector(".weather__lng");
        let weatherSum = document.querySelector(".weather__summary");
        let weatherTemp = document.querySelector(".weather__temperature");
        strongFirst.innerText = lat;
        strongSec.innerText = lng;
        
        const promise = fetch(`https://api.weatherbit.io/v2.0/current?key=832e544e55c84199b5277249cedeb143&lang=pl&lat=${lat}&lon=${lng}`);
    
        promise
        .then(response => response.json())
        //.then(d => console.log(d.data[0].weather.description))
        .then(d => {weatherSum.innerText = d.data[0].weather.description
            weatherTemp.innerText = d.data[0].temp})//.then(d => weatherTemp.innerText = d.data[0].temp) // dlaczego w tym przypadku dziala, lecz jesli odkomentujemy powyzszy wiersz, to zobaczymy "Uncaught (in promise) TypeError: Cannot read property 'data' of undefined
        //at app.js:34"
        
    }) 
    console.log('DOM');
    
}