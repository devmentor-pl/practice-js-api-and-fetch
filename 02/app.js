document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');
    
    setBorderColorAsync(divList[0], 'red')
    .then(() => setBorderColorAsync(divList[1], 'blue'))
    .then(() => setBorderColorAsync(divList[2], 'green'))
    .then(() => console.log('finish'))
    .catch(() => console.log('err'))

}

function setBorderColorAsync(element, color) {
    const promise =  new Promise((resolve, reject) => {
        if(element && element instanceof HTMLElement) {
            const time = Math.random() * 3000;
            setTimeout(() => {
                element.style.border = `3px solid ${color}`;
                resolve('Działa');
            }, time);
        } else {
            reject('Nie działa');
        };

    });
    return promise;
}
