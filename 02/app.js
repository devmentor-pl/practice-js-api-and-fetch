document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');

    setBorderColorAsync(divList[0], 'red', setBorderColorAsync)
        .then(callback2 => callback2(divList[1], 'blue', setBorderColorAsync))
        .then(callback3 => callback3(divList[2], 'green', setBorderColorAsync))
        .then(callback4 => console.log('finish'))
        .catch(err => console.log(err));

}

function setBorderColorAsync(element, color, callback) {

    const promise = new Promise((resolve, reject) => {


        if (element && element instanceof HTMLElement) {
            // sprawdzam czy parametr jest elementem DOM, więcej:
            // https://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object

            if (callback && typeof callback === 'function') {
                setTimeout(() => {
                    element.style.border = `3px solid ${color}`;
                    resolve(callback);
                }, Math.random() * 3000);
            } else {
                reject('Parametr ~callback~ mus być funkcją');
            }
        } else {
            reject('Paremetr ~element~ musi być prawidłowym elementem DOM');
        }
    })
    return promise;
}