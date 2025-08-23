document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');

    const [div1, div2, div3] = divList;

    setBorderColorAsync(div1, 'red')
        .then(() => setBorderColorAsync(div2, 'blue'))
        .then(() => setBorderColorAsync(div3, 'green'))
        .catch(err => console.log(err))
        .finally(() => console.log('finish'))
}

const setBorderColorAsync = (element, color) => {
    return promise = new Promise((resolve, reject) => {

        setTimeout(() => {
            if (element && color) {
                setElementBorderColor(element, color);
                resolve();
            }

            reject(`Element doesn't exists`);
        }, Math.random() * 3000);
    });
}

function setElementBorderColor(element, color) {
    element.style.border = `3px solid ${color}`;
}