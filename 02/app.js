document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');

    const setRedColor = () => setBorderColorAsync(divList[0], 'red', setBlueColor);
    const setBlueColor = () => setBorderColorAsync(divList[1], 'blue', setGreenColor);
    const setGreenColor = () => setBorderColorAsync(divList[2], 'green', finish);
    const finish = () => console.log('finish');

    setRedColor()
    .then(res => res())
    .then(res => res())
    .then(res => res())
    .catch(reject => alert(reject))
}

function setBorderColorAsync(element, color, callback) {
    
    return new Promise((resolve, reject) => {
        if(element && element instanceof HTMLElement) {
            if(callback && typeof callback === 'function') {
                setTimeout(() => {
                    element.style.border = `3px solid ${color}`;
                    resolve(callback);
                }, Math.random() * 3000);
            } else {
                reject('Parametr ~callback~ mus być funkcją');
            }   
        } else {
            reject('Paremetr ~element~ musi być prawidłowym elementem DOM');
        }       
    })
} 
