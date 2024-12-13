import { displayMessage } from "../../components/shared/displayMessage";
import { clear } from "../../utilities/storage";

export function onLogout() {

    const logoutButton = document.querySelector('#logout-button');
    
    if (logoutButton) {
        logoutButton.addEventListener('click', handleLogout);
    }
}
function handleLogout() {
    clear();
    window.location.href = "/auth/login/";
    
}