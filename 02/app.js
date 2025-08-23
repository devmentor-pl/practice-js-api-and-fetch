//DZIAŁA

document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');
    
    setBorderColorAsync(divList[0], 'red')
        .then(() => setBorderColorAsync(divList[1], 'blue'))
        .then(() => setBorderColorAsync(divList[2], 'green'))
        .then(() => console.log('finish'))
        .catch(error => console.error(error));
}

function setBorderColorAsync(element, color) {
    return new Promise((resolve, reject) => {
        if(element && element instanceof HTMLElement) {
            // sprawdzam czy parametr jest elementem DOM, więcej:
            // https://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object
            setTimeout(() => {
                    element.style.border = `3px solid ${color}`;
                    resolve();
                }, 
            Math.random() * 3000);
            } else {
                reject(new Error('Paremetr ~element~ musi być prawidłowym elementem DOM'));
        }
    })
}
