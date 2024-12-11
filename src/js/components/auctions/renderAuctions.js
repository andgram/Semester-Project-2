export function renderAuctions(container, auctions) {

    if (auctions.length === 0) {
       container.innerHTML = `<div id="message">No auctions to show</div>`;
       return;
    } 

    container.innerHTML = "";

    const auctionItemHtml = auctions.map((auction) => createAuctionItemHtml(auction));
    container.append(...auctionItemHtml);
}

function createAuctionItemHtml(auctionItem) {
    const { id, title, media } = auctionItem;

    const item = document.createElement("a");
    item.classList.add("auction-item");
    item.href = `/auction/details/?id=${id}`;

    // Create the title element
    const titleElement = document.createElement("h3");
    titleElement.innerText = title;

    // Create the image element
    const imageElement = document.createElement("img");
    imageElement.classList.add("auction-item-image");

    // Check if media is an array and has at least one object
    if (Array.isArray(media) && media.length > 0) {
        const firstMedia = media[0];
        imageElement.src = firstMedia.url; 
        imageElement.alt = firstMedia.alt || `${title} image`;
    } else {
        // Fallback to a placeholder if no media is available
        imageElement.src = "/src/assets/placeholder.jpg";
        imageElement.alt = "Placeholder image";
    }
    item.appendChild(imageElement);
    item.appendChild(titleElement);

    return item;
}