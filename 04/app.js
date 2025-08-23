document.addEventListener('DOMContentLoaded', init);

function init() {

    console.log('DOM');

    const form = document.querySelector('.form'); 
    form.addEventListener('submit', weatherInformations)
}

function weatherInformations(ev) {
    ev.preventDefault();

    const promise = fetch(setPathToApi());

    promise 
        .then (resp => {
            if(resp.ok) {
                return resp.json();
            }
            if(resp.status === 500) {
                return Promise.reject('Limist excideed');
            }
            return Promise.reject(resp);
        })
        .then (weatherInfo => setParamsOnSite(weatherInfo.data[0]))
        .catch(err => console.log(err));

}

function setParamsOnSite(placeInfo) {
    const webInfo = document.querySelectorAll('strong');
    console.log(placeInfo);
    webInfo[0].innerText = placeInfo.lat;
    webInfo[1].innerText = placeInfo.lon;
    webInfo[2].innerText = placeInfo.weather.description;
    webInfo[3].innerText = placeInfo.temp;
}

function setPathToApi() {

    const corePart = 'http://api.weatherbit.io/v2.0/current';
    const keyApi = 'key=36adccf278294c54b304a857f8dacb85';
    const languageApi = 'lang=pl';
    const unitsApi = 'units=I';
    const [lat, lng] = zoneParameters();
    const apiPath = `${corePart}?${keyApi}&${languageApi}&lat=${lat}&lon=${lng}&${unitsApi}`;

    return apiPath;
}

function zoneParameters() {
    
    const latitude = document.querySelector('.form__field--lat').value;
    const longitude = document.querySelector('.form__field--lng').value

    return [latitude, longitude];
}











//console.log(form);
//
//form.addEventListener('submit', function(ev){
//
//    ev.preventDefault();
//

//});