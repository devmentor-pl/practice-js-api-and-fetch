document.addEventListener('DOMContentLoaded', init);
const buttonEl = document.querySelector('button');
const spanEl = document.querySelector('span');
function init() {
    console.log('DOM');

    buttonEl.addEventListener('click', getIP);
}

function getIP() {
    fetch('https://api.ipify.org?format=json')
    .then(resp => {
        if(resp.ok) { return resp.json(); }
        return Promise.reject(resp);
    })
    .then(data => {
        spanEl.textContent = data.ip;
        
    })
    .catch(err => console.error(err))
    .finally(() => {console.log('Odpytywanie API zakończone')})
}