document.addEventListener('DOMContentLoaded', init);

function init() {
  console.log('DOM');

  const button = document.querySelector('button');
  const span = document.querySelector('span');

  button.addEventListener('click', fetchIP);

  async function fetchIP() {
    span.textContent = 'Pobieram';
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();

      span.textContent = data.ip;
    } catch (err) {
      console.error(err);
      span.textContent = 'Błąd pobierania';
    }
  }
}
