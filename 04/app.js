document.addEventListener('DOMContentLoaded', init);

const apiUrl = 'https://api.weatherbit.io/v2.0/current';
const apiKey = '631d0df33516474ab711b08ff98f843e';
const lang ='pl';

function init() {
    console.log('DOM');
    getDataFromUser();
}

// const addCityName = ({data:[{city_name}]}) => {
//     const spanCity = document.querySelector('.city__name');
//     // const {data:[{city_name}]} = response;
//     spanCity.innerText = city_name;
// }

// const addWeatherDescription = ({data:[{weather:{description}}]}) => {
//     const spanDesc = document.querySelector('.weather__summary');
//     spanDesc.innerText = description;
// }

const addCoordinatesText = ({lat,lng}) => {
    const latValue = document.querySelector('.weather__lat');
    const lngValue = document.querySelector('.weather__lng');
    latValue.innerText = lat;
    lngValue.innerText = lng
}

const addWeatherInfo = (response) => {
    //const {data:[{city_name},{weather:{description}}]} = response; // problem z tym zapisem, a wydaje mi sie ze jest ok,chciałam w jednym miejscu pobrac wszystkie dane, to w ogole mozliwe? blad Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'weather')
    const {data:[{city_name}]} = response;
    const {data:[{weather:{description}}]} = response;
    const {data:[{temp}]} = response;
    const fahrenheit = Math.round((temp * 1.8) + 32);

    const spanCity = document.querySelector('.city__name').innerText = city_name;
    const spanDesc = document.querySelector('.weather__summary').innerText = description;
    const spanTemp = document.querySelector('.weather__temperature').innerText = fahrenheit;
}

function getDataFromUser(){
    const formEl  = document.querySelector('form');
    formEl.addEventListener('submit', e => {
        e.preventDefault();
        const inputLat = e.target.querySelector('.form__field--lat').value;
        const inputLng = e.target.querySelector('.form__field--lng').value;;
        const coordinatesData = {lat:inputLat,lng:inputLng}
        addCoordinatesText(coordinatesData);
        takeWeatherData(coordinatesData);
    });
}

function takeWeatherData({lat,lng}) {
   fetch(`${apiUrl}?key=${apiKey}&lang=${lang}&lat=${lat}&lon=${lng}`)
        .then(response => {
            if(response.ok) {return response.json();}
            return new Promise.reject(response)
        })
        // .then(response => addCityName(response))
        // .then(response => addWeatherDescription(response))
        .then(response => addWeatherInfo(response))
        .catch(error => console.error(error))
}

// PYTANIE:
// - chciałam zrobic osobne f-cje wstawienia informacji o pogodzie  - ale nie wyszło,
// - jak zrobiłam kolejny then. np po ustawieniu nazwy miasta, to zwracało undefined
// - w kodzie wyzej jako zakomentowane, chciałam "wyrwać" sie z promise chain ale nie udalo sie.
// - mógłbyś mi powiedzie co robie zle albo podeslac materialy, moj research nie przysniósł efektów




