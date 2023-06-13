document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');

    const formEl = document.querySelector('.form');
    
    const weatherLat = document.querySelector('.weather__lat');
    const weatherLng = document.querySelector('.weather__lng');
    const weatherSummary = document.querySelector('.weather__summary');
    const weatherTemperature = document.querySelector('.weather__temperature');

    formEl.addEventListener('submit', showWeather);

    function showWeather(e) {
        e.preventDefault();

        const [latitudeForm, longitudeForm] = e.target.elements;
        const key = 'c1882a4193374810a37038abc67e9c60';
        const latitude = latitudeForm.value;
        const longitude = longitudeForm.value;
        const lang = 'pl';
        const units = 'I'

        weatherLat.innerText = latitude;
        weatherLng.innerText = longitude;
        
        fetch(`https://api.weatherbit.io/v2.0/current?key=${key}&lat=${latitude}&lon=${longitude}&lang=${lang}&units=${units}`)
            .then(resp => {
                if(resp.ok) {
                    return resp.json()
                }
            }).then(data => {

                weatherSummary.innerText = data.data[0].weather.description
                weatherTemperature.innerText = data.data[0].temp;
            }).catch(err => {console.log('coś poszło nie tak => ',err) })
    }
    
}