document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');
    const buttonEl = document.querySelector('button');
    buttonEl.addEventListener('click', getIp);
}

function getIp() {
    const spanEl = document.querySelector('span');

    const promise = fetch('https://api.ipify.org');

    promise 
        .then(resp => {
            if(resp.ok) {
                return resp.text()
            }
        return Promise.reject(resp);
        })
    .then(ip => spanEl.innerText = ip)
    .catch(err => console.error(err))
    .finally(() => {
        console.log('Odpytywanie API zakończone!');
    });
}

