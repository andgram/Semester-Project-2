import { onDeleteAuction } from "../../ui/auction/delete";
import { isAuthenticated, loadName } from "../../utilities/storage";
import { showBidInput } from "./showBidInput";

export function renderAuctionButtons(auction) {
    const username = loadName();  // Get the logged-in user's username
    const { seller, id } = auction;
    const sellerName = seller.name;

    const div = document.createElement("div");
    div.classList.add("auction-buttons");

    // Show Delete button if the logged-in user is the seller
    if (sellerName === username) {
      
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("button");
        deleteButton.innerText = "Delete";
        deleteButton.dataset.id = id;
        deleteButton.addEventListener("click", onDeleteAuction);
        div.appendChild(deleteButton);
        
    } else if (isAuthenticated()) {
        // Show the "Place Bid" button if the logged-in user is not the seller, but still logged in
        const bidButton = document.createElement("button");
        bidButton.classList.add("button");
        bidButton.innerText = "Place Bid";
        bidButton.dataset.id = id;

        // Event listener to show the input field for the bid amount
        bidButton.addEventListener("click", () => {
            showBidInput(bidButton, id);
        });

        div.appendChild(bidButton);
    }

    return div;
}
