document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');

    const buttonEl = document.querySelector('button');
    const spanEl = document.querySelector('span');

    if (buttonEl) {
        buttonEl.addEventListener('click', getId);
    }

    function getId() {
        const promise = fetch('https://api.ipify.org?format=json');

        promise
            .then(resp => {
                if (resp.ok) {
                    return resp.json();
                } else {
                    throw new Error('Błąd HTTP');
                }
            })
            .then(data => {
                if (data && spanEl) {
                    spanEl.innerText = data.ip;
                }
            })
            .catch(err => console.error(err));
    }
}

