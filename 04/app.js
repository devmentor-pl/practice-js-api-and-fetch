document.addEventListener('DOMContentLoaded', init);

730d1b62752a45d69ba4fa85b948cfd8

function init() {
    console.log('DOM');
}


const promise = fetch(`https://api.weatherbit.io/v2.0/current?key=[key]&lat=[latitude]&lon=[longitude]`)