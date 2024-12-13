import { register } from "../../api/auth/register.js";
import { displayMessage } from "../../components/shared/displayMessage.js";
import { validateEmail } from "../../utilities/validateEmail.js";

export async function onRegister(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Validate email before proceeding with registration
    if (!validateEmail(data.email)) {
        displayMessage("#message", "error", "Invalid email address. Please use a valid 'stud.noroff.no' email.");
        return;
    }

    try {
    await register(data);
    displayMessage("#message", "success", "Registered successfully. <a href='/auth/login/'>Login</a> to access your profile.");
    form.reset();
    }
    catch(error) {
     displayMessage("#message", "error", error.message);
    }
}