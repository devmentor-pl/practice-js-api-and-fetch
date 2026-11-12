document.addEventListener("DOMContentLoaded", init);

function init() {
  const divList = document.querySelectorAll("div");
  setBorderColorRed();

  function setBorderColorRed() {
    setBorderColorAsync(divList[0], "red", setBorderColorBlue);
  }
  function setBorderColorBlue() {
    setBorderColorAsync(divList[1], "blue", setBorderColorGreen);
  }
  function setBorderColorGreen() {
    setBorderColorAsync(divList[2], "green", function () {
      console.log("finish");
    });
  }
}

function setBorderColorAsync(element, color, callback) {
  setTimeout(() => {
    element.style.border = `3px solid ${color}`;
    callback();
  }, Math.random() * 3000);
}
