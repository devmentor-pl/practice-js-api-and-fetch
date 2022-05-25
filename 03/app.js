document.addEventListener('DOMContentLoaded', init);

function init() {
    const btn = document.querySelector('button');
    const ipField = document.querySelector('span');

    btn.addEventListener('click', () => updateIP(ipField));
}

function updateIP(ipField) {

    const promise = fetch('https://api.ipify.org?format=json');

    promise
        .then(resp => {
            if (resp.ok) {
                return resp.json()
            }
            else {
                return Promise.reject(resp);
            }
        })
        .then(data => changeSpanText(ipField, data.ip))
        .catch(err => console.log(err))
        .finally(() => console.log('Zakonczono czytanie API'))
}

function changeSpanText(ipField, ip) {

    ipField.innerText = ip;

}