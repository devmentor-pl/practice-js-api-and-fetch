

document.addEventListener('DOMContentLoaded', init);


function init () {
    const divList = document.querySelectorAll('div');
 
    const p1 = setBorderColorAsync(divList[0], 'red', () => {});
    p1.then(resp1 => {
 return setBorderColorAsync(divList[1], 'blue', () => {});
    }).then(resp2 => {
    return setBorderColorAsync(divList[2], 'green', () => {});
    }).then(resp3 => {
        console.log('done!')
    })
 


}




function setBorderColorAsync(element, color, callback) {
  const promise = new Promise((resolve, reject) => {
    if(element && element instanceof HTMLElement) {
    
        
        if(callback && typeof callback === 'function') {
           (setTimeout(() => {
                resolve('ok')
                element.style.border = `3px solid ${color}`;
          
            }, Math.random() * 3000));
        } else {
            reject.alert('Parametr ~callback~ mus być funkcją');
        }
    } else {
        reject.alert('Paremetr ~element~ musi być prawidłowym elementem DOM');
    }
  })

  return promise;
}

