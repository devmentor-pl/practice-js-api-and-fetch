document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');
}

const promise = fetch('https://api.ipify.org?format=json');

const spanEl = document.querySelector('span');
console.log(spanEl);

const ip = 
promise
.then(spanEl.innerText = ip); // BŁĄD