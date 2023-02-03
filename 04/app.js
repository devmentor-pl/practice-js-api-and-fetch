import API from "./modules/API.js";
import WeatherGUI from "./modules/WeatherGUI.js";

document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');

    const api = new API();
    const weatherGUI = new WeatherGUI(api);

    weatherGUI.init();
}