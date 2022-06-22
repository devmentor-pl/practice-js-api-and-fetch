document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');

    const buttonEl = document.querySelector('button');
    buttonEl.addEventListener('click', getIpAddress);


    function getIpAddress() {
        const promise = fetch('https://api.ipify.org?format=json');

        promise
            .then(resp => {
                if (resp.ok) return resp.json()
                return Promise.reject(resp);
            })
            .then(ip => showIpAddressInSpan(ip.ip))
            .catch(err => console.log(err))
            .finally(() => {
                console.log('Odczytywanie zakończone!')
            });
    }

    function showIpAddressInSpan(ip) {
        const spanEl = document.querySelector('span');
        spanEl.innerText = ip;
    }
}