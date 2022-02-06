document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');

    setBorderColorAsync(divList[0], 'red')
        .then(() => setBorderColorAsync(divList[1], 'blue'))
        .then(() => setBorderColorAsync(divList[2], 'green'))
        .catch(err => console.log(err))
        .finally(console.log('finish'));
}

function setBorderColorAsync(element, color/*, callback*/) {
    const promise = new Promise(function (resolve, reject) {
        if (element && element instanceof HTMLElement) {
            
            /*const secondPromise = new Promise(function (resolve, reject) {
                if (callback && typeof callback === 'function') {*/
                    resolve(setTimeout(() => {
                        element.style.border = `3px solid ${color}`;
                        //callback();
                    }, Math.random() * 3000));
                } else /*{
                    reject('Parametr ~callback~ mus być funkcją');
                }*/
            /*})
            /*resolve(secondPromise);*/
        /*} else */{
            reject('Paremetr ~element~ musi być prawidłowym elementem DOM');
        } 
    });
    return promise;
}