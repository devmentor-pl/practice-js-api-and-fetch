document.addEventListener('DOMContentLoaded', init);

function init() {
    const downloadBtn = document.querySelector('button')
    downloadBtn.addEventListener('click', ShowIp)

    console.log('DOM');
}

function ShowIp() {
    const promise = fetch('https://api.ipify.org?format=json')
    const ipSpan = document.querySelector('span')

    promise
        .then(resp => {
            if(resp.ok) { return resp.json()}
            return Promise.reject(resp)
        })

    .then(data => ipSpan.innerText = data.ip)
    .catch(err => console.error(err))
    .finally(() => console.log('Odpytywanie API zakończone'))
}
