document.addEventListener('DOMContentLoaded', init);

function init() {
    const button = document.querySelector('button');
    button.addEventListener('click', showIPAdress);
}

function showIPAdress() {
    const promise = fetch('https://api.ipify.org?format=json');

    promise
        .then(resp => {
            if (resp.ok) {
                return resp.json();
            }
            return Promise.reject(resp);
        })
        .then(data => renderIP(data.ip))
        .catch(err => console.error(err))
        .finally(() => console.log('Odpytywanie API zakończone'))
}

function renderIP(ipAdress) {
    const ipPlaceholderEl = document.querySelector('span');
    ipPlaceholderEl.textContent = ipAdress;
}

