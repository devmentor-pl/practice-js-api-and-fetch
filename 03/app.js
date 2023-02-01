import API from "./modules/API.js";
import IPDisplay from "./modules/IPDisplay.js";

document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('DOM');

    const api = new API();
    const ipDisplay = new IPDisplay(api);
    ipDisplay.load();
}