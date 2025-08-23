document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');
    
    setBorderColorAsync(divList[0], 'red')
        .then(() => setBorderColorAsync(divList[1], 'blue'))
        .then(() => setBorderColorAsync(divList[2], 'green'))
        .then(() => console.log('finish'))
        .catch(error => console.error(error));
}

function setBorderColorAsync(element, color) {
    // returns a Promise that resolves once the border color has been set
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // If the element does not exist, the Promise is rejected with an error
            if (!element) {
                reject(new Error('element does not exist'));
            } else {
            element.style.border = `3px solid ${color}`;
            resolve();
            }
        }, Math.random() * 3000);
    });
}

