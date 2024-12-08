import { isAuthenticated } from "../../utilities/storage";

const signUpButton = document.getElementById('sign-up-button');

if (isAuthenticated()) {
    signUpButton.style.display = 'none';
}