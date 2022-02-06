document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');
    getObjectsFromDocument();
}

function getObjectsFromDocument() {
    const btn = document.querySelector('button');
    btn.addEventListener('click', getIpNumber);
    console.log('ok');
}

function getIpNumber() {
    const api = fetch('https://api.ipify.org?format=json');
    api
        .then(req => {
            if(req.ok) {
                return req.json();
            }
            return Promise.reject(req);
        })
        .then(data => {
            const span = document.querySelector('span');
            span.textContent = data.ip;
        })
        .catch(err => console.log(err))
        .finally(() => console.log('Zakończono'));
}