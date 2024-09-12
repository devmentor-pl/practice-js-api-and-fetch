document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');
    addButtonListener();
}

function addButtonListener() {
    const buttonEl = document.querySelector('button');
    buttonEl.addEventListener('click', getIP );
}

function getIP() {
    fetch('https://api.ipify.org?format=json')
        .then(resp => resp.json())
        .then(data => {
            const spanEl = document.querySelector('span');
            spanEl.innerText = data.ip;
        });
}