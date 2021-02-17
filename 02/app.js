document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');

    /* STARE
        setBorderColorAsync(divList[0], 'red', function () {
            setBorderColorAsync(divList[1], 'blue', function () {
                setBorderColorAsync(divList[2], 'green', function () {
                    console.log('finish');
                });
            });
        });
    */

    // NOWE
    setBorderColorAsync(divList[0], 'red')
        .then(resp1 => setBorderColorAsync(divList[1], 'blue', resp1))
        .then(resp2 => setBorderColorAsync(divList[2], 'green', resp2))
        .then(resp3 => console.log('finish'))
        .catch(err => console.error(err));

}

/* STARE
function setBorderColorAsync(element, color, callback) {
    if(element && element instanceof HTMLElement) {
        // sprawdzam czy parametr jest elementem DOM, więcej:
        // https://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object
        
        if(callback && typeof callback === 'function') {
            setTimeout(() => {
                element.style.border = `3px solid ${color}`;
                callback();
            }, Math.random() * 3000);
        } else { 
            alert('Parametr ~callback~ mus być funkcją');
        }
    } else {
        alert('Paremetr ~element~ musi być prawidłowym elementem DOM');
    }
}
*/


// NOWE
function setBorderColorAsync(element, color) {

    const promise = new Promise((resolve, reject) => {
        if (element && element instanceof HTMLElement) {
            setTimeout(() => {
                resolve(element.style.border = `3px solid ${color}`);
            }, Math.random() * 3000);
        } else {
            reject('Paremetr ~element~ musi być prawidłowym elementem DOM');
        }
    });
    return promise;
}