document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');
    
    setBorderColorAsync(divList[0], 'red');
        setBorderColorAsync(divList[1], 'blue', function() {
            setBorderColorAsync(divList[2], 'green', function() {
                console.log('finish');
            });
        });
   

}

function setBorderColorAsync(element, color, callback) {
    const promise = new Promise((resolve, reject)=>{
        if(element && element instanceof HTMLElement) {
            
            if(callback && typeof callback === 'function') {

                resolve(
                    setTimeout(() => {
                        element.style.border = `3px solid ${color}`;
                        callback();
                    }, Math.random() * 3000)
                );
            } else {
                reject('Parametr ~callback~ mus być funkcją');
            }
        } else {
            reject('Paremetr ~element~ musi być prawidłowym elementem DOM');
        }
    });
    promise
        .then(resp => console.log(resp))
        .catch(err => console.log(err));
}