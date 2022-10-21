const form = document.querySelector('.form');
const weatherSection = document.querySelector('.weather'); 
const weatherLat = weatherSection.querySelector('.weather__lat');
const weatherLng = weatherSection.querySelector('.weather__lng');
const weatherSum = weatherSection.querySelector('.weather__summary');
const weatherTemp = weatherSection.querySelector('.weather__temperature');


document.addEventListener('DOMContentLoaded', init);


function init() {
    console.log('DOM');
    form.addEventListener('submit', submitHandler);
    
}

function submitHandler(e){
    e.preventDefault();
    
    const latInput = form.querySelector('.form__field--lat');
    const lngInput = form.querySelector('.form__field--lng');
    
    // https://stackoverflow.com/questions/3518504/regular-expression-for-matching-latitude-longitude-coordinates
    const latPattern = /^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/ 
    const lngPattern = /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/
    if(latPattern.test(latInput.value) && lngPattern.test(lngInput.value)){
        loadWeather(latInput.value, lngInput.value);
        e.target.reset();
    }else{
        alert('Podaj prawidłowe współrzędne w systemie dziesiętnym')
    }
}

function loadWeather(lat, lng){
    fetch(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lng}&key=8444e70c2e574ea48e7ed312b3e137a9&lang=pl&units=S`)
    .then(resp => {
            if(resp.ok){return resp.json()}
            return Promise.reject(resp);
        })
        .then(data=> insertData(data))
        .catch(err=>console.error(err));
}

function insertData(data){
    weatherLat.innerText = data.data[0].lat;
    weatherLng.innerText = data.data[0].lon;
    weatherSum.innerText = data.data[0].weather.description;
    weatherTemp.innerText = data.data[0].temp;
}