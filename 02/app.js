
document.addEventListener('DOMContentLoaded', init);

const divList = document.querySelectorAll('div');

// kontrolka div-ów
for (let i = 0; i < divList.length; i++) {
    setTimeout(() => {
        console.log(divList[i])
    }, i * 100);
}

function init() {
    setBorderColorAsync(divList[0], 'red')
    .then(() => setBorderColorAsync(divList[1], 'blue'))
    .then(() => setBorderColorAsync(divList[2], 'green'))
    .then(() => console.log('finish'))
    .catch((error) => console.log(error));
}

function setBorderColorAsync(element, color) {
    const promise = new Promise((resolve, reject) => {
        console.log(element)
        if (element && element instanceof HTMLElement) {
        // sprawdzam czy parametr jest elementem DOM, więcej:
        // https://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object
        
            setTimeout(() => {
                element.style.border = `3px solid ${color}`;
                resolve(console.log('Ok'));
            }, Math.random() * 3000);
        } else {
            reject(console.log('Parametr ~element~ nie jest prawidłowym elementem DOM'));
        }
    });
    return promise;
}
