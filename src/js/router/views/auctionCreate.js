import { onAddMediaInput, onCreateAuction } from "../../ui/auction/create";

// Add event listener for the form submission
const form = document.forms.createAuction;
form.addEventListener("submit", onCreateAuction);

// Add event listener for the "Add Media" button
const addMediaButton = document.querySelector("#addMedia");
addMediaButton.addEventListener("click", onAddMediaInput);
