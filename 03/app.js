document.addEventListener('DOMContentLoaded', init);

function init() {
  console.log('DOM');
  const url = 'https://api.ipify.org?format=json';
  const buttonEl = document.querySelector('button');
  buttonEl && buttonEl.addEventListener('click', () => getIP(url));
}

async function getIP(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Błąd: ${response.status}`);
    } else {
      const data = await response.json();
      showIP(data);
      console.log(data.ip);
    }
  } catch (error) {
    console.log('Błąd:', error);
  }
}
function showIP(data) {
  const spanEl = document.querySelector('span');
  spanEl.textContent = data.ip;
}
