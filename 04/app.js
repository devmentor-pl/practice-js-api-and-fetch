document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');
    const form = document.querySelector('form');
    const weatherLat= document.querySelector('.weather__lat');
    const weatherLng= document.querySelector('.weather__lng');
   
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // zatrzymujemy domyślną akcję formularza
        console.log('cl')
        const latValue = parseFloat(form.elements[0].value)
        const lngValue = parseFloat(form.elements[1].value)
        //console.log(latValue, lngValue )
        if(latValue >= 0 && latValue <= 180 && lngValue >= 0 && lngValue <= 180){
        weatherLat.innerText = latValue;
        weatherLng.innerText = lngValue;

        getData(latValue, lngValue)
        }
        else{
            alert('błąd')
        }
       });
    

       
}

function getData(lat, lng) {
    const key = '0fe94766122940729ddf18c937fb3fc2';
    const promise = fetch(`https://api.weatherbit.io/v2.0/current?key=${key}&lat=${lat}&lon=${lng}`)

    const weatherSummary = document.querySelector('.weather__summary');
    const tempSummary = document.querySelector('.weather__temperature');

    promise.then(resp => resp.json()).then(info => {
        const temp = info.data[0].temp;
        const txt = info.data[0].weather.description;
        console.log(temp, txt)
        weatherSummary.innerText = txt;
        tempSummary.innerText= temp;
    })

    
}

// 0fe94766122940729ddf18c937fb3fc2