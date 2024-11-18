import { renderAuctionButtons } from "./renderButtons";

export function renderAuction(container, auction) {
    container.innerHTML = ""; 

    const { title, description, media, endsAt } = auction;

    const adminButtons = renderAuctionButtons(auction);
        if(adminButtons) {
            container.appendChild(adminButtons);
        }  

    // Title
    const heading = document.createElement("h1");
    heading.innerText = title;
    container.appendChild(heading);

    // Description
    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = description || "No description provided.";
    container.appendChild(descriptionElement);

    // Ends at element
    const endsAtElement = document.createElement("p");
    endsAtElement.innerText = `Ends At: ${new Date(endsAt).toLocaleString()}`;
    container.appendChild(endsAtElement);

    // Media (if present)
    if (media && media.length > 0) {
        const mediaContainer = document.createElement("div");
        mediaContainer.classList.add("media-container");

        media.forEach(({ url, alt }, index) => {
            const mediaElement = document.createElement("img");
            mediaElement.src = url;
            mediaElement.alt = alt || `Auction media ${index + 1}`;
            mediaElement.classList.add("auction-image");
            mediaContainer.appendChild(mediaElement);
        });

        container.appendChild(mediaContainer);
    }
}
