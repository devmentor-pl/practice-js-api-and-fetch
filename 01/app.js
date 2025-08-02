document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');
    setBoarderColorDelay(divList)
}

function setBorderColor(element, color) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(element.style.border = `3px solid ${color}`);
        }, Math.random() * 3000);
    })
}
async function setBoarderColorDelay(divList) {
    try {
        await setBorderColor(divList[0], 'red');
        await setBorderColor(divList[1], 'blue');
        await setBorderColor(divList[2], 'green');
    } catch (error) {
        console.log(error)
    }
}