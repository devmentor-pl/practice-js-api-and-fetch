document.addEventListener('DOMContentLoaded', init);

function init() {
  const divList = document.querySelectorAll('div');
  function firstCallback() {
    setBorderColorAsync(divList[0], 'red', secondCallback);
  }
  function secondCallback() {
    setBorderColorAsync(divList[1], 'blue', thirdCallback);
  }
  function thirdCallback() {
    setBorderColorAsync(divList[2], 'green', fourthCallback);
  }
  function fourthCallback() {
    console.log('Finish');
  }
  firstCallback();
}

function setBorderColorAsync(element, color, callback) {
  setTimeout(() => {
    element.style.border = `3px solid ${color}`;
    callback();
  }, Math.random() * 3000);
}
