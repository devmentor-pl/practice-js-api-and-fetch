document.addEventListener('DOMContentLoaded', init);
const btn = document.querySelector('button');
const span = document.querySelector('span');

function init() {
    console.log('DOM');


    btn.addEventListener('click', downloadIP);
}

const downloadIP = (e) => {
    const promise = fetch('https://api.ipify.org?format=json');
    promise
        .then(resp => {
            if (resp.ok) {
                return resp.json();
            }
            return Promise.reject(resp);
        })
        .then(ip => printIP(ip))
        .catch(err => console.error(err))
        .finally(() => {
            console.log('API downloaded')
        })
}

const printIP = (ip) => {
    span.textContent = ip.ip;
}