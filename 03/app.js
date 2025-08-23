document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');
    const spanEl = document.querySelector('span');
    const btnEl = document.querySelector('button');
    const url = 'https://api.ipify.org?format=json';

    loadAPI(url, btnEl, spanEl)
}

function loadAPI(url, submittingEl, ipContainer) {
    const promise = fetch(url);
    promise
        .then(res => {
            if (res.ok) { return res.json(); }
            return Promise.reject(res);
        })
        .then(ip => uploadIPOnClick(submittingEl, ipContainer, ip.ip))
        .catch(err => console.error(err))
}

function uploadIPOnClick(submittingEl, ipContainer, ipAddress) {
    submittingEl.addEventListener('click', function () {
        return ipContainer.innerText = ipAddress
    })
}