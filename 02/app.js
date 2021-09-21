document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');

    setBorderColorAsync(divList[0], 'red')
        .then(() => setBorderColorAsync(divList[1], 'blue'))
        .then(() => setBorderColorAsync(divList[2], 'green'))
        .catch((err) => console.error(err))
        .finally(() => console.log('finish'));
}

const setBorderColorAsync = (element, color) => {
    return new Promise((resolve, reject) => {
        const time = setTime();
        setTimeout(() => {
            isHTMLEl(element) ?
                resolve(changeBorderColor(element, color)) :
                reject('Parametr ~element~ musi być prawidłowym elementem DOM');
        }, time);
    });
}

const setTime = () => Math.random() * 3000;

const isHTMLEl = (el) => (el && el instanceof HTMLElement);

const changeBorderColor = (element, borderColor) => {
    element.style.border = `3px solid ${borderColor}`;
}