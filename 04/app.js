document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');
    const input = document.querySelector('.form__submit');
    input.addEventListener('click', submitHandler);
}

function submitHandler(e){
    
    e.preventDefault();

    const fieldLat = document.querySelector('.form__field--lat');
    const fieldLng = document.querySelector('.form__field--lng');
    
    const latitude = fieldLat.value;
    const longitude = fieldLng.value;

    console.log(latitude);
   
    const proxy = 'https://cors-anywhere.herokuapp.com/'; 
    const api = `${proxy}https://api.darksky.net/forecast/3be817ce9069d357625054007ae7d7dd/${latitude},${longitude}?lang=pl`;
    const promise = fetch(api);

    promise
        .then(resp => {
            if(resp.ok){
                return resp.json();
            }

            return Promise.reject(resp);
        })
        .then(data => {
            displayData(data);
        })
        .catch( err => console.error(err));

}

function displayData(data){

    const weatherLatEl = document.querySelector('.weather__lat');
    const weatherlngEl = document.querySelector('.weather__lng');
    const weatherSummaryEl = document.querySelector('.weather__summary');
    const weatherTemptEl = document.querySelector('.weather__temperature');
    
    weatherLatEl.textContent = data.latitude;
    weatherlngEl.textContent = data.longitude;
    weatherSummaryEl.textContent = data.currently.summary;
    weatherTemptEl.textContent = data.currently.temperature;

}
