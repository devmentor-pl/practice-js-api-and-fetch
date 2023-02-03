import API from "./modules/API.js";
import Users from "./modules/Users.js";

document.addEventListener('DOMContentLoaded', init);

function init() {
    const api = new API();
    const users = new Users(api);
    
    users.load();
    users.addNewUserToApi();
  }