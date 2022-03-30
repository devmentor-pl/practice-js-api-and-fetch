document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');
    const sumbitEl =  document.querySelector('.form');
    sumbitEl.addEventListener('submit', retrieveData);
    
    function retrieveData(e) {
        e.preventDefault();
        
        const latValue = document.querySelector('.form__field--lat').value;
        const lngValue = document.querySelector('.form__field--lng').value;
        const wheatherLatEl = document.querySelector('.weather__lat');
        wheatherLatEl.innerText = latValue;
        const weatherLngEl = document.querySelector('.weather__lng');
        weatherLngEl.innerText = lngValue;
        const weatherSummary = document.querySelector('.weather__summary');
        const weatherTemperature = document.querySelector('.weather__temperature');
        
        fetch(`https://api.weatherbit.io/v2.0/current?key=135029b019d045e08b9206c9037fc3d4&lat=${latValue}&lon=${lngValue}`)
            .then(resp => resp.json())
            .then(data => weatherSummary.innerText = data.data[0].city_name)
            .catch(err => console.error(err))

        fetch(`https://api.weatherbit.io/v2.0/current?key=135029b019d045e08b9206c9037fc3d4&lat=${latValue}&lon=${lngValue}`)
            .then(resp => resp.json())
            .then(data => weatherTemperature.innerText = data.data[0].app_temp)
            .catch(err => console.error(err))
    }
}

