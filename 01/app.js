document.addEventListener("DOMContentLoaded", init);

function init() {
  const divList = document.querySelectorAll("div");

  function finish() {
    console.log("finish");
  }

  function setBorder3() {
    setBorderColorAsync(divList[2], "green", finish);
  }

  function setBorder2() {
    setBorderColorAsync(divList[1], "blue", setBorder3);
  }

  setBorderColorAsync(divList[0], "red", setBorder2);
}

function setBorderColorAsync(element, color, callback) {
  setTimeout(() => {
    element.style.border = `3px solid ${color}`;
    callback();
  }, Math.random() * 3000);
}
