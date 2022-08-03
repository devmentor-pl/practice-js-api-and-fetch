import API from "./API.js";
import Users from "./Users.js";

document.addEventListener("DOMContentLoaded", init);

function init() {
	const api = new API();
	const users = new Users(api);
	users.load();
	users.add();
}
