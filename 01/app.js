document.addEventListener('DOMContentLoaded', init);

function init() {
  const divList = document.querySelectorAll('div');

  function setBorderColorAsync(element, color, callback) {
    setTimeout(() => {
      element.style.border = `3px solid ${color}`;
      callback();
    }, Math.random() * 3000);
  }

  function firstCallback() {
    setBorderColorAsync(divList[0], 'red', secondCallback);
  }
  function secondCallback() {
    setBorderColorAsync(divList[1], 'blue', thirdCallback);
  }

  function thirdCallback() {
    setBorderColorAsync(divList[2], 'green', () => console.log('Finished!'));
  }
  firstCallback();
}
