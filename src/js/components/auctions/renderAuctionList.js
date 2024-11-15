import { renderAuctions } from "./renderAuctions";

export async function renderAuctionList(containerSelector, auctions) {
    const container = document.querySelector(containerSelector);
    if (!auctions || auctions.length === 0) {
        container.innerHTML = "<p>No auctions to display.</p>";
    } else {
        container.innerHTML = "";
        renderAuctions(container, auctions);
    }
}
