document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');

    const firstCallback = () => {
        setBorderColorAsync(divList[1], 'blue', secondCallback)
    }

    setBorderColorAsync(divList[0], 'red', firstCallback)

    const secondCallback = () => {
        setBorderColorAsync(divList[2], 'green', thirdCallback)
    }

    const thirdCallback = () => {
        console.log('finish')
    }



}

function setBorderColorAsync(element, color, callback) {
    setTimeout(() => {
        element.style.border = `3px solid ${color}`;
        callback();
    }, Math.random() * 3000);
}

