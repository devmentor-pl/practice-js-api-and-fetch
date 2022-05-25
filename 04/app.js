document.addEventListener('DOMContentLoaded', init);

function init() {

    const form = document.querySelector('form'); 
    const outputFields = [...document.querySelectorAll('strong')];    
    
    form.addEventListener('submit', e => showWeatherInfo(e, outputFields));
}

function showWeatherInfo(e, outputFields) {

    e.preventDefault();

    const [lat, lon] = getCoordinate(e.target.elements);  
    
    if (isValidLatitude(lat) && isValidLongitude(lon)) {

        const apiUrl = createUrl(lat, lon);
        
        loadData(apiUrl)    
            .then(resp => displayData(resp.data[0], outputFields))
            .catch(err => console.log(err))
            .finally(() => console.log('Zakończono odczytywanie API'));
    }
    else {
        e.target.reset();
        alert('Wprowadź poprawne współrzędne geograficzne');
    }
}

function getCoordinate([latInput, lonInput]) {

    return [latInput.value, lonInput.value]
}

function createUrl(lat, lon) {
    
    const myKey = '730d1b62752a45d69ba4fa85b948cfd8';
    const apiUrl = `https://api.weatherbit.io/v2.0/current?key=${myKey}&lat=${lat}&lon=${lon}&lang=pl`;

    return apiUrl;
}

function loadData(apiUrl) {

    return fetch(apiUrl)
        .then(resp => {
            if (resp.ok) { return resp.json();}
            if(resp.status === 429) {
                return Promise.reject('LIMIT EXCEEDED');
            }            
            return Promise.reject(`Kod błędu: ${resp.status}`);
        })        
}

function displayData(data, outputFields) {
    
    const {lat, lon, temp, weather : {description} } = data;    
    const arrData = [lat, lon, description, temp];
         
    outputFields.forEach((item, index) => item.innerText = arrData[index]);
}

function isValidLatitude(lat) {
    
    if ((isNaN(lat)) || (lat < -90 ) || (lat > 90)) {
        return false;
    }
    
    return true;    
}

function isValidLongitude(lon) {
    
    if ((isNaN(lon)) || (lon < -180 ) || (lon > 180)) {
        return false;
    }

    return true;        
}