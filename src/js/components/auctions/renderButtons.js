import { onDeleteAuction } from "../../ui/auction/delete";
import { isAuthenticated, loadName } from "../../utilities/storage";
import { showBidInput } from "./showBidInput";

export function renderAuctionButtons(auction) {
    const username = loadName();
    const { seller, id } = auction;
    const sellerName = seller.name;

    const div = document.createElement("div");
    div.classList.add("auction-buttons", "flex", "gap-4", "mt-4");

    // Show Delete button if the logged-in user is the seller
    if (sellerName === username) {
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.innerText = "Delete";
        deleteButton.dataset.id = id;
        deleteButton.addEventListener("click", onDeleteAuction);
        div.appendChild(deleteButton);
    } else if (isAuthenticated()) {
        const bidButton = document.createElement("button");
        bidButton.innerText = "Place Bid";
        bidButton.classList.add("place-bid-button");
        bidButton.dataset.id = id;
        bidButton.addEventListener("click", () => {
            showBidInput(bidButton, id);
        });
        div.appendChild(bidButton);
    }
    return div;
}
