document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');
    const buttonElement = document.querySelector('button');
    if (buttonElement) {
        buttonElement.addEventListener(
            'click',
            getIp
        );
    };

    function getIp() {
        const promise = fetch('https://api.ipify.org?format=json');
        promise.then(response => {
            if (response.ok) {
                return response.json();
            };
        }).then(data => {
            const spanElement = document.querySelector('span');
            if (spanElement) {
                spanElement.innerText = data.ip;
            };
        }).catch(error => console.error("Błąd w pobieraniu danych.", error));
    };
};