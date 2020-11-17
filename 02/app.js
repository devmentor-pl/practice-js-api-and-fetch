document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');

    setBorderColorAsync(divList[0], 'red')
        .then(res1 => setBorderColorAsync(divList[1], 'green'))
        .then(res2 => setBorderColorAsync(divList[2], 'blue'))
        .finally(() => {
            console.log('Finish')
        })
}

const setBorderColorAsync = (element, color, response) => {
    const promise = new Promise((resolve, reject) => {
        if (element && element instanceof HTMLElement) {
            // sprawdzam czy parametr jest elementem DOM, więcej:
            // https:stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object
            setTimeout(() => {
                element.style.border = `3px solid ${color}`
                resolve();
            }, Math.random() * 3000);
        } else {
            reject('Paremetr ~element~ musi być prawidłowym elementem DOM');
        }
    })
    return promise;
}