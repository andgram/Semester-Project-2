export function renderProfileAuctions(container, auctions) {

    const auctionsData = auctions.data;

    if (!Array.isArray(auctionsData) || auctionsData.length === 0) {
        container.innerHTML = `
            <p class="text-white text-center">
                No listings to display.
            </p>
        `;
        return;
    }
    

    container.innerHTML = "";

    // Generate HTML for each listing
    const listingHtml = auctionsData.map((auction) => createListingHtml(auction));

    // Append HTML or set innerHTML based on what createListingHtml returns
    if (typeof listingHtml[0] === 'string') {
        container.innerHTML = listingHtml.join("");
    } else {
        container.append(...listingHtml);
    }
}

function createListingHtml(auction) {

    const { id, title, media } = auction;

    const item = document.createElement("a");
    item.classList.add("auction-item");
    item.href = `/auction/details/?id=${id}`;

    const titleElement = document.createElement("h3");
    titleElement.innerText = title;

    // Access the first media item's URL if it exists
    const imageElement = document.createElement("img");
    imageElement.className = "auction-item-image";
    if (media?.length > 0 && media[0]?.url) {
        imageElement.src = media[0].url;
        imageElement.alt = media[0].alt || "Auction image";
    } else {
        imageElement.src = "/assets/placeholder.jpg";
        imageElement.alt = "No image available";
    }

    item.appendChild(imageElement);
    item.appendChild(titleElement);

    return item;
}