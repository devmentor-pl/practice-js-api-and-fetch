document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');
    setBorderColorAsync(divList[0], 'red', setBorderColor1);


    function setBorderColor1() {
        setBorderColorAsync(divList[1], 'blue', setBorderColor2);
    }

    function setBorderColor2() {
        setBorderColorAsync(divList[2], 'green', setBorderColor3);
    }

    function setBorderColor3() { console.log('finish'); }

}

function setBorderColorAsync(element, color, callback) {
    setTimeout(() => {
        element.style.border = `3px solid ${color}`;
        callback();
    }, Math.random() * 3000);
}




