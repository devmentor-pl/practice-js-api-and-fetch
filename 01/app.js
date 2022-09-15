document.addEventListener("DOMContentLoaded", init);

function init() {
  const divList = document.querySelectorAll("div");

  // setBorderColorAsync(divList[0], "red", function () {
  //   setBorderColorAsync(divList[1], "blue", function () {
  //     setBorderColorAsync(divList[2], "green", function () {
  //       console.log("finish");
  //     });
  //   });
  // });
  setBorderColorAsync(divList[0], 0, setSecondBorderColor);
  function setSecondBorderColor() {
    setBorderColorAsync(divList[0], "red", setThirdBorderColor);
  }
  function setThirdBorderColor() {
    setBorderColorAsync(divList[1], "blue", setFourthBorderColor);
  }
  function setFourthBorderColor() {
    setBorderColorAsync(divList[2], "green", setFifthBorderColor);
  }
  function setFifthBorderColor() {
    console.log("finish");
  }
}

function setBorderColorAsync(element, color, callback) {
  setTimeout(() => {
    element.style.border = `3px solid ${color}`;
    callback();
  }, Math.random() * 3000);
}
