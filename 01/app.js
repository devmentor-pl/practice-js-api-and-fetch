document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');
    
    setBorderColorAsync(divList[0], 'red', startSecondColor)

    function startSecondColor () {
        setBorderColorAsync(divList[1], 'blue', startThirdColor)
    }

    function startThirdColor() {
        setBorderColorAsync(divList[2], 'green', showLog)
    }
    
    function showLog() {
        console.log('finish');
    }

}

function setBorderColorAsync(element, color, callback) {
    setTimeout(() => {
        element.style.border = `3px solid ${color}`;
        callback();
    }, Math.random() * 3000);
}