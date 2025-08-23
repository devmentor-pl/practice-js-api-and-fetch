document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');

    const button = document.querySelector('button');
    button.addEventListener('click', getIp);
}

const getIp = function() {
    const promise = fetch('https://api.ipify.org?format=json')

    promise
        .then(resp => {
            if(resp.ok) {return resp.json(); }
            return Promise.reject(resp);
        })
        .then((ip) => {
            const spanEl = document.querySelector('span');
            spanEl.innerText = ip.ip;
        })
        .catch(err => console.error(err))
        .finally(() => {
            console.log('Odpytywanie API zakończone')
        });
}