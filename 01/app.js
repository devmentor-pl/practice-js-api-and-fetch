document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');

    async function setBorderColorAsync(element, color) {
        setTimeout(() => {
            element.style.border = `3px solid ${color}`;
        }, Math.random() * 3000);
    }
    showBorderColor();
    async function showBorderColor() {
        await setBorderColorAsync(divList[0], 'red');
        await setBorderColorAsync(divList[1], 'blue');
        await setBorderColorAsync(divList[2], 'green');
    }

}