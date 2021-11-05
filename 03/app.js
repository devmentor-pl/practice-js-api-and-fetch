document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');

    const button = document.querySelector('button');

    button.addEventListener('click', takeIP);
}

function takeIP() {

    const promise = fetch('https://api.ipify.org?format=json');
    promise
        .then(resp => {
            if(resp.ok) {
                return resp.json()
            }
            return Promise.reject(resp);
        })
        .then (ip => setIP(ip))
        .catch (err => console.log(err))
        .finally (() => {
            console.log('Odpytywanie zakończone');
    });
}


function setIP(ipAddress) {

    const span = document.querySelector('span');
    span.innerText = ipAddress.ip;
}