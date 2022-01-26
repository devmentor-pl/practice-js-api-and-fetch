document.addEventListener('DOMContentLoaded', init);

const apiUrl = 'https://api.weatherbit.io/v2.0/current';
const apiKey = '631d0df33516474ab711b08ff98f843e';
const lang ='pl';

function init() {
    console.log('DOM');
    const formEl  = document.querySelector('form');
    formEl.addEventListener('submit', getDataFromUser) 
}

// const addCityName = (response) => {
//     return new Promise((resolve,reject) => {
//         const {data:[{city_name}]} = response;
//         const spanCity = document.querySelector('.city__name').innerText = city_name;
//         resolve(response);
//     })
// }

// const addWeatherDescription = ({data:[{weather:{description}}]}) => {
//     const spanDesc = document.querySelector('.weather__summary');
//     spanDesc.innerText = description;

// }

const addCoordinatesText = ({lat,lng}) => {
    const latValue = document.querySelector('.weather__lat').innerText=lat;
    const lngValue = document.querySelector('.weather__lng').innerText=lng;
}

const addWeatherInfo = (response) => {
    const {data:[{city_name,weather:{description},temp}]} = response; 
    const fahrenheit = Math.round((temp * 1.8) + 32);
    const spanCity = document.querySelector('.city__name').innerText = city_name;
    const spanDesc = document.querySelector('.weather__summary').innerText = description;
    const spanTemp = document.querySelector('.weather__temperature').innerText = fahrenheit;
}

function getDataFromUser(e){
    e.preventDefault();
    const inputLat = e.target.querySelector('.form__field--lat').value;
    const inputLng = e.target.querySelector('.form__field--lng').value;;
    const coordinatesData = {lat:inputLat,lng:inputLng}
    addCoordinatesText(coordinatesData)
    takeWeatherData(coordinatesData);
}

function takeWeatherData({lat,lng}) {
    fetch(`${apiUrl}?key=${apiKey}&lang=${lang}&lat=${lat}&lon=${lng}`)
         .then(response => {
             if(response.ok) {return response.json();}
             return new Promise.reject(response)
         })
         .then(response => addWeatherInfo(response))
        //  .then(response=> addCityName(response))
        //  .then(response => console.log(response))
        //  .then(response => addWeatherDescription(response))
         .catch(error => console.error(error))
 }





