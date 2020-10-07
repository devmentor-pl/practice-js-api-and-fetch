document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');
    const form = document.querySelector('form');
    const weatherLat= document.querySelector('.weather__lat');
    const weatherLng= document.querySelector('.weather__lng');
   // console.log(formEl)
   //const input = lastDiv.querySelector('input')
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // zatrzymujemy domyślną akcję formularza
        console.log('cl')
        const latValue = form.elements[0].value
        const lngValue = form.elements[1].value
        //console.log(latValue, lngValue )
        if((latValue.match('^[0-9]{1,3}\.[0-9]{0,9}$'))){
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