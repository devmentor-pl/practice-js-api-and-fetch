document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');
    
    setBorderColorAsync(divList[0], 'red')
        .then (() => setBorderColorAsync(divList[1], 'blue'))
        .then (() => setBorderColorAsync(divList[2], 'green'))
        .catch((err) => console.error(err))
        .finally(() => console.log('zakonczono'));

}

function setBorderColorAsync(element, color) {

    return new Promise ((resolve, reject) => {

        setTimeout(() => {
            if(element){
                element.style.border = `3px solid ${color}`;
                resolve();
            } else {
                reject('Nie znaleziono elementu!');
            }
        }, Math.random() * 3000);
    })
}

