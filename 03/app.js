document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');
    const button = document.querySelector('button');
    button.addEventListener('click', getIP);
}

function getIP() {
    const promise = fetch('https://api.ipify.org?format=json');
    promise
        .then(resp => {
            if (resp.ok) {
                return resp.json();
            }
            return Promise.reject(resp);
        })
        .then(ip => showIP(ip))
        .catch(err => console.log(err))
        .finally(() => console.log('Odpytywanie API zakończone!'))
}

function showIP(ip) {
    const iptext = ip.ip;
    const spanEl = document.querySelector('span');
    spanEl.innerText = iptext;
}