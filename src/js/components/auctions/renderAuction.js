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
    if (media?.[0]?.url) {
        const mediaElement = document.createElement("img");
        mediaElement.src = media[0].url;
        mediaElement.alt = media[0].alt || "Auction media";
        container.appendChild(mediaElement);
    }
}
