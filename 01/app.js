document.addEventListener('DOMContentLoaded', init);

async function init() {
    const divList = document.querySelectorAll('div');
    
    await setBorderColorAsync(divList[0], 'red');
    await setBorderColorAsync(divList[1], 'blue');
    await setBorderColorAsync(divList[2], 'green');
    console.log('finish');
}

function setBorderColorAsync(element, color) {
    return new Promise((resolve) => {
        setTimeout(() => {
            element.style.border = `3px solid ${color}`;
            resolve();
        }, Math.random() * 3000);
    })
}