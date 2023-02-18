document.addEventListener('DOMContentLoaded', init);
const button = document.querySelector('button')
const span = document.querySelector('span')

function init() {
    console.log('DOM');
    button.addEventListener('click', getIP)
}

function getIP() {

    promise = fetch('https://api.ipify.org?format=json')

    promise
        .then(resp => {
            if (resp.ok) { return resp.text(); }
            return Promise.reject(resp);
        })
        .then(ip => span.innerHTML = JSON.parse(ip).ip)
        .catch(err => console.log(err))
        .finally(() => {
            console.log('Odpytywanie API zakończone!')
        })
}




``

