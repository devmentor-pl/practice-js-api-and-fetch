
const apiUrl = 'https://api.ipify.org?format=json';

document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');
    loadIp();
}

function loadIp() {
    const promise = fetch(apiUrl);
    promise
        .then(resp => {
            if(resp.ok) { return resp.json(); }
            return Promise.reject(resp);
            })
        .then(ip => insertIp(ip))
        .catch(err => console.error(err))
        .finally(() => {
            console.log('Odpytywanie API zakończone!')
        });
}

function insertIp(data) {
    const button = document.querySelector('button');
    const span = document.querySelector ('span')
    button.addEventListener('click', function(){
        span.textContent = data.ip;
    })
    
}
    

    
    
    
    
    
    
    
    
    
    