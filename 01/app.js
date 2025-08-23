document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');

    changeBorderColors(divList);
}

async function changeBorderColors(divList) {
    try {
        await setBorderColorAsync(divList[0], 'red');
        await setBorderColorAsync(divList[1], 'blue');
        await setBorderColorAsync(divList[2], 'green');
        console.log('skonczone');
    } catch (error) {
        console.error('pojawil sie blad:', error);
    }
}

function setBorderColorAsync(element, color) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (element) {
                element.style.border = `3px solid ${color}`;
                resolve();
            } else {
                reject('Element nie znaleziony');
            }
        }, Math.random() * 3000);
    });
}
