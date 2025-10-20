document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');
    changeBordersSequentially(divList);
}

function setBorderColorAsync(element, color) {
    return new Promise(resolve => {
        setTimeout(() => {
            element.style.border = `3px solid ${color}`;
            resolve();
        }, Math.random() * 3000);
    });
}

async function changeBordersSequentially(divList) {
    await setBorderColorAsync(divList[0], 'red');
    await setBorderColorAsync(divList[1], 'blue');
    await setBorderColorAsync(divList[2], 'green');
    console.log('finish');
}