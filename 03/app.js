document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');
    const spanEl = document.querySelector('span');
    const btnEl = document.querySelector('button');

    const promise = fetch('https://api.ipify.org?format=json');
    promise
        .then(res => {
            if (res.ok) { return res.json(); }
            return Promise.reject(res);
        })
        .then(ip => uploadIPOnClick(btnEl, spanEl, ip.ip))
        .catch(err => console.error(err))
}

function uploadIPOnClick(submittingEl, ipContainer, ipAddress) {
    submittingEl.addEventListener('click', function () {
        return ipContainer.innerText = ipAddress
    })
}