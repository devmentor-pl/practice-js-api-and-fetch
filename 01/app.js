document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');
    setAllBorderColorsAsync(divList)
}

async function setAllBorderColorsAsync([box1, box2, box3]) {
    await setBorderColorAsync(box1, 'red');
    await setBorderColorAsync(box2, 'blue');
    await setBorderColorAsync(box3, 'green');
}

function setBorderColorAsync(element, color) {
    setTimeout(() => {
        element.style.border = `3px solid ${color}`;
    }, Math.random() * 3000);
}
