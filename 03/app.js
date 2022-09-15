document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');

    const button = document.querySelector('button');
    button.addEventListener('click', getIP);
}

function getIP() {
    const promise = fetch('https://api.ipify.org');

    promise
        .then(resp => {
            if(resp.ok) {
                return resp.text()
            }
            return Promise.reject(resp)
        })
        .then(ip => showIP(ip))
        .catch(err => console.log(err))
        .finally(() => console.log('Pobrano IP!'))
}

function showIP(ip) {
    const span = document.querySelector('span');
    span.textContent = ip;
}