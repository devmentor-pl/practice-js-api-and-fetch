document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');
    // Pytanie czy skoro setBorderColorAsync zwraca Promise to czy moge poprawic funkcje init wykorzystujac lancuchowanie promisow?
    setBorderColorAsync(divList[0], 'red')
        .then(() => setBorderColorAsync(divList[1], 'blue'))
        .then(() => setBorderColorAsync(divList[2], 'green'))
        .then(() => console.log('finish'))
        .catch(error => console.error(error));
}

function setBorderColorAsync(element, color, callback) {
    return new Promise((resolve, reject) => {
        if(element && element instanceof HTMLElement) {
            // sprawdzam czy parametr jest elementem DOM, więcej:
            // https://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object
            setTimeout(() => {
                element.style.border = `3px solid ${color}`;
                element.style.opacity = 1; // <-- edit: I add this line to make the div visible ;D
                if(callback && typeof callback === 'function') {
                    callback();
                }
                resolve();
            }, Math.random() * 3000);
        } else {
            const errorMsg = 'Parametr ~element~ musi być prawidłowym elementem DOM';
            alert(errorMsg);
            reject(errorMsg);
        }
    });
}
