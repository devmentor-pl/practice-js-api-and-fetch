document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');
    
    setBorderColorAsync(divList[0], 'red')
        .then(() => setBorderColorAsync(divList[1], 'blue'))
        .then(() => setBorderColorAsync(divList[2], 'green'))
        .catch((err) =>  console.log(err))
        .finally(() => console.log('finished'));
}

function setBorderColorAsync(element, color) {

    const promise = new Promise((resolve, reject) => {

        if(element && element instanceof HTMLElement) {
            setTimeout(() => {
                element.style.border = `3px solid ${color}`;
                resolve('Color has been changed');
            }, Math.random() * 3000);           
        }
        else {
            reject('Paremetr ~element~ musi być prawidłowym elementem DOM');
        }
    })   
    
    return promise;
}

