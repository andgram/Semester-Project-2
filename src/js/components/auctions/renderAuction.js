import { renderAuctionButtons } from "./renderButtons";
import { loadName } from "../../utilities/storage";

export function renderAuction(container, auction) {
    container.innerHTML = ""; 
    const { title, description, media, endsAt, seller } = auction;

    const sellerName = seller.name;
    const username = loadName();

    // Create the left and right columns
    const leftColumn = document.createElement("div");
    leftColumn.classList.add("auction-left-col");

    const rightColumn = document.createElement("div");
    rightColumn.classList.add("auction-right-col");

    // Title
    const heading = document.createElement("h1");
    heading.classList.add("auction-title");
    heading.innerText = title;
    rightColumn.appendChild(heading);

    // Description
    const descriptionElement = document.createElement("p");
    descriptionElement.classList.add("auction-description"); 
    descriptionElement.innerText = description || "No description provided.";
    rightColumn.appendChild(descriptionElement);

    const adminButtons = renderAuctionButtons(auction);
    if (adminButtons) {
        adminButtons.classList.add("auction-admin-buttons"); 
        rightColumn.appendChild(adminButtons);
    } 

    // Ends at
    const endsAtElement = document.createElement("p");
    endsAtElement.classList.add("auction-ends-at");

    // Check if the auction has expired
    const currentTime = new Date();
    const endTime = new Date(endsAt);

    if (currentTime > endTime) {
        // Auction has expired
        endsAtElement.innerText = `Ended At: ${endTime.toLocaleString()}`;
        
        // Check if sellername matches the username
        if (sellerName !== username && adminButtons) {
            adminButtons.remove(); // Remove the admin buttons
        }
    } else {
        // Auction is still active
        endsAtElement.innerText = `Ends At: ${endTime.toLocaleString()}`;
    }

    rightColumn.appendChild(endsAtElement);
    container.appendChild(rightColumn);

    if (media && media.length > 0) {
        // Container for the active (main) image
        const activeImageContainer = document.createElement("div");
        activeImageContainer.classList.add("active-image-container");

        // Main Active Image
        const activeImage = document.createElement("img");
        activeImage.classList.add("auction-active-image"); // Add a class for styling
        activeImage.src = media[0].url; // First image as the default active image
        activeImage.alt = media[0].alt || "Main Auction Image";

        activeImageContainer.appendChild(activeImage);
        leftColumn.appendChild(activeImageContainer);

        // Thumbnails (only if more than one image exists)
        if (media.length > 1) {
            const thumbnailsContainer = document.createElement("div");
            thumbnailsContainer.classList.add("thumbnails-container");

            // Limit to the first 4 thumbnails
            media.slice(0, 4).forEach(({ url, alt }, index) => {
                const thumbnail = document.createElement("img");
                thumbnail.src = url;
                thumbnail.alt = alt || `Auction Thumbnail ${index + 1}`;
                thumbnail.classList.add("auction-thumbnail");

                // Add click event to update the active image
                thumbnail.addEventListener("click", () => {
                    activeImage.src = url;
                    activeImage.alt = alt || "Main Auction Image";
                });

                thumbnailsContainer.appendChild(thumbnail);
            });

            leftColumn.appendChild(thumbnailsContainer);
        }
    }

    // Append the left column to the container
    container.appendChild(leftColumn);
}
