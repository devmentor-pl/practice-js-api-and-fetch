document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');
}

function getApi () {
    const promise = fetch('https://api.ipify.org');
    promise
        .then(resp => resp.text())
        .then(ip => console.log(ip))
        .catch(err => console.error(err))
        .finally(() => {
            console.log('Odpytywanie API zakończone!')
});
}
   
getApi();