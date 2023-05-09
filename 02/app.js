document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');
    
    setBorderColorAsync(divList[0], 'red')
        .then(() => setBorderColorAsync(divList[1], 'blue'))
        .then(() => setBorderColorAsync(divList[2], 'green'))
        .then(() => console.log('All done!'))
}

function setBorderColorAsync(element, color) {
    const promise = new Promise((resolve, reject) =>{
        if(element && element instanceof HTMLElement) {
            if(callback && typeof callback === 'function') {
                setTimeout(() => {
                    element.style.border = `3px solid ${color}`;
                    resolve();
                }, Math.random() * 3000);
            } else {
                reject('Parametr ~callback~ mus być funkcją');
            }
        }
    })
    return promise
}