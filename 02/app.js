document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');
    
    setBorderColorAsync(divList[0], 'red', function() {
        setBorderColorAsync(divList[1], 'blue', function() {
            setBorderColorAsync(divList[2], 'green', function() {
                console.log('finish');
            });
        });
    });

}

function setBorderColorAsync(element, color, callback) {
    return new Promise((rejecjt, resolve) => {
        if(element && element instanceof HTMLElement) {
            setTimeout(() => {
                element.style.border = `3px solid ${color}`;
                resolve();
                callback();
            }, Math.random() * 3000);
        } else {
            rejecjt(new Error('Paremetr ~element~ musi być prawidłowym elementem DOM'))
        }
    })
}