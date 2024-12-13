import { onAddMediaInput, onCreateAuction } from "../../ui/auction/create";
import { authGuard } from "../../utilities/authGuard";

authGuard()

const form = document.forms.createAuction;
form.addEventListener("submit", onCreateAuction);

const addMediaButton = document.querySelector("#addMedia");
addMediaButton.addEventListener("click", onAddMediaInput);
