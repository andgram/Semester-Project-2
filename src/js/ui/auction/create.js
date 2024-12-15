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
    const endsAt = new Date(data.endsAt).toISOString();

    // Collect media URLs
    const mediaInputs = document.querySelectorAll("#mediaInputs input[name='media']");
    const media = Array.from(mediaInputs)
        .map((input) => input.value.trim())
        .filter((url) => url)
        .map((url) => ({ url, alt: "Auction media" }));

    // Validate required fields
    if (!title || !endsAt) {
        displayMessage("#message", "error", "Title and End Date are required.");
        return;
    }

    try {
        await createAuction({ title, description, media, endsAt });
        displayMessage("#message", "success", "Auction created successfully.");
        form.reset();
        setTimeout(() => {
            window.location.href = "/profile/";
        }, 2000);
    } catch (error) {
        displayMessage("#message", "error", error.message);
    }
}

// Logic to dynamically add media inputs
export function onAddMediaInput() {

const MAX_MEDIA_URLS = 5;
  const mediaInputsContainer = document.querySelector("#mediaInputs");

  // Count the number of current media inputs
  const currentMediaInputs = mediaInputsContainer.querySelectorAll("input[type='url']").length;

  // Check if the current count exceeds the max limit
  if (currentMediaInputs >= MAX_MEDIA_URLS) {
    alert(`You can only add up to ${MAX_MEDIA_URLS} media URLs.`);
    return; 
  }

  // Create a container div for the input and button
  const newMediaInputContainer = document.createElement("div");
  newMediaInputContainer.classList.add("flex", "items-center", "space-x-2", "w-full");

  // Create the input field
  const newMediaInput = document.createElement("input");
  newMediaInput.type = "url";
  newMediaInput.name = "media";
  newMediaInput.className = "w-full px-4 py-2 border border-neutral-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-neutral-700 text-neutral-100";
  newMediaInput.placeholder = "https://example.com/image.jpg";

  // Create the button to remove the input
  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.className = "x-close-button text-white";
  removeButton.innerText = "X";


  // Event listener to remove the input
  removeButton.addEventListener("click", () => {
    mediaInputsContainer.removeChild(newMediaInputContainer);
  });

  // Append input and button to the container
  newMediaInputContainer.appendChild(newMediaInput);
  newMediaInputContainer.appendChild(removeButton);

  // Add the new container to the mediaInputs container
  mediaInputsContainer.appendChild(newMediaInputContainer);
}
