import { displayMessage } from "./displayMessage";

export function handleError(containerSelector, error) {
    console.error(error);
    displayMessage(containerSelector, "error", error.message);
} 