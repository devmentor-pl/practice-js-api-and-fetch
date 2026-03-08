document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');

    setBorderColorAsync(divList[0], 'red', cb1());

    function cb1() {
        setBorderColorAsync(divList[1], 'blue', cb2());
    }

    function cb2() {
        setBorderColorAsync(divList[2], 'green', cb3());
    }

    function cb3() {
        console.log('finish');
    }

}



function setBorderColorAsync(element, color, callback) {
    setTimeout(() => {
        element.style.border = `3px solid ${color}`;
        callback();
    }, Math.random() * 3000);
}