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

        const { id, title } = auctionItem;

        const item = document.createElement("a");
        item.classList.add("auction-item");
        item.href = `/auction/details/?id=${id}`;

        const titleElement = document.createElement("h3");
        titleElement.innerText = title;

        item.appendChild(titleElement);

        return item;
    }