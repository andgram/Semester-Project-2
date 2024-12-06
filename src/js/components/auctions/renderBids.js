export function renderBids(container, bids) {
    container.innerHTML = "";  

    if (!bids || bids.length === 0) {
        container.innerHTML = "<p>No bids yet.</p>";
        return;
    }

    bids.reverse();
    
    const highestBid = bids[0]; 
    const bidElement = document.createElement("p");
    bidElement.innerText = `Highest Bid: $${highestBid.amount}`;
    container.appendChild(bidElement);

    const showAllButton = document.createElement("button");
    showAllButton.classList.add("button-secondary");
    showAllButton.innerText = "Show All Bids";
    container.appendChild(showAllButton);

    showAllButton.addEventListener("click", () => {
        container.innerHTML = "";
        bids.forEach(bid => {
            const bidElement = document.createElement("p");
            bidElement.innerText = `Bidder: ${bid.bidder.name} | Amount: $${bid.amount}`;
            container.appendChild(bidElement);
        });
    });
}
