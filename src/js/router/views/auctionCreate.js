import { onCreateAuction } from "../../ui/auction/create";

const form = document.forms.createAuction;

form.addEventListener("submit", onCreateAuction);