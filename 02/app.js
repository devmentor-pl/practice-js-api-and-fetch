document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');

    const [div1, div2, div3] = divList;

    setBorderColorAsync(div1, 'red')
        .then(() => setBorderColorAsync(div2, 'blue'))
        .then(() => setBorderColorAsync(div3, 'green'))
        .catch(err => alert(err))
        .finally(() => console.log('finish'));
}

const setBorderColorAsync = (element, color) => {
    return new Promise((resolve, reject) => {

        if (element && element instanceof HTMLElement) {
            // sprawdzam czy parametr jest elementem DOM, więcej:
            // https://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object

            setTimeout(() => {
                setElementBorderColor(element, color);

                resolve();
            }, Math.random() * 3000);
        } else {
            reject('Parametr ~element~ musi być prawidłowym elementem DOM');
        }
    })
}

function setElementBorderColor(element, color) {
    element.style.border = `3px solid ${color}`;
}