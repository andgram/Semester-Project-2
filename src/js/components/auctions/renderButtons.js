import { onDeleteAuction } from "../../ui/auction/delete";
import { loadName } from "../../utilities/storage";
import { showBidInput } from "./showBidInput";

export function renderAuctionButtons(auction) {
    const username = loadName();  // Get the logged-in user's username
    const { seller, id } = auction;
    const sellerName = seller.name;

    const div = document.createElement("div");
    div.classList.add("auction-buttons");

    // Show Edit and Delete buttons if the logged-in user is the seller
    if (sellerName === username) {
        const editButton = document.createElement("a");
        editButton.innerText = "Edit";
        editButton.href = `/auction/edit/?id=${id}`;

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.dataset.id = id;
        deleteButton.addEventListener("click", onDeleteAuction);  // Event listener for delete action

        div.appendChild(editButton);
        div.appendChild(deleteButton);
    } else {
        // Show the "Place Bid" button if the logged-in user is not the seller
        const bidButton = document.createElement("button");
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
