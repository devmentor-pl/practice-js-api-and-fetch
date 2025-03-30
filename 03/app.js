document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');
    const button = document.querySelector("button");
    const span = document.querySelector("span");

    button.addEventListener("click", handleClick);

    function handleClick() {
      const promise = fetch("https://api.ipify.org?format=json");

      promise
        .then((response) => {
          if (response.ok === true) {
            return response.json();
          }
        })
        .then((data) => {
          span.innerText = data.ip;
        })
        .catch((error) => {
          console.error(error);
        });
    }
}