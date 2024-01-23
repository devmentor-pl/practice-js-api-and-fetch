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


