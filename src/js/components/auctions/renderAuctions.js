export function renderAuctions(container, auctions) {

    if (auctions.length === 0) {
       container.innerHTML = `<div class="message">No auctions to show</div>`;
       return;
    } 

    container.innerHTML = "";

    const auctionItemHtml = auctions.map((auction) => createAuctionItemHtml(auction));
    container.append(...auctionItemHtml);
}

    function createAuctionItemHtml(auctionItem) {

        const { id, description, title } = auctionItem;

        const item = document.createElement("a");
        item.classList.add("auction-item");
        item.href = `/details/?id=${id}`;

        const titleElement = document.createElement("h3");
        titleElement.innerText = title;

        const descriptionElement = document.createElement("p");
        descriptionElement.innerText = description;

        item.appendChild(titleElement);
        item.appendChild(descriptionElement);
    

        return item;
    }