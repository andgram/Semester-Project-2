import { createAuction } from "../../api/auction/create.js";
import { displayMessage } from "../../components/shared/displayMessage.js";

export async function onCreateAuction(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Transform form data
    const title = data.title.trim();
    const description = data.description?.trim() || "";
    const mediaInput = data.media?.trim();
    const endsAt = new Date(data.endsAt).toISOString();

    // Validate required fields
    if (!title || !endsAt) {
        displayMessage("#message", "error", "Title and End Date are required.");
        return;
    }

    const media = mediaInput
        ? [{ url: mediaInput, alt: "Auction media" }] 
        : [];


    try {
        await createAuction({ title, description, media, endsAt });
        displayMessage("#message", "success", "Auction created succesfully.");
        form.reset();
        setTimeout(() => {
            window.location.href = "/profile/";
        }, 2000);
    }

    catch (error) {
        displayMessage("#message", "error", error.message);
    }
}