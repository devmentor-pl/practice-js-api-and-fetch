document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');


    promiseSetBorderColorAsync(divList[0], 'red')
        .then(() => promiseSetBorderColorAsync(divList[1], 'blue'))
        .then(() => promiseSetBorderColorAsync(divList[2], 'green'))
        .then(() => console.log('finish'))
}
const promiseSetBorderColorAsync = (element, color) => {
    const promise = new Promise((resolve, reject) => {
        if (element && element instanceof HTMLElement) {

            setTimeout(() => {
                element.style.border = `3px solid ${color}`
                resolve()
            }, Math.random() * 3000)

        }
        else {
            reject('Paremetr ~element~ musi być prawidłowym elementem DOM')
        }
    })
    return promise
}

