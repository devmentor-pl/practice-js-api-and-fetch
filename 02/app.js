document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');

    setBorderColorAsync(divList[0], 'red')
        .then(setBorderColorAsync(divList[1], 'blue'))
        .then(setBorderColorAsync(divList[2], 'green'))

}

function setBorderColorAsync(element, color) {

    const promise = new Promise((resolve, reject) => {
        if (element && element instanceof HTMLElement) {
            resolve(
                setTimeout(() => {
                    element.style.border = `3px solid ${color}`;
                }, Math.random() * 3000)
            )
        }
        else {
            reject('Parametr ~element~ musi być prawidłowym elementem DOM');
        }
    })
    return promise
}
