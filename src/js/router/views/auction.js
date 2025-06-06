import { readAuction } from "../../api/auction/readAuction";
import { renderAuction } from "../../components/auctions/renderAuction";
import { renderBids } from "../../components/auctions/renderBids";
import { displayMessage } from "../../components/shared/displayMessage";
import { getParam } from "../../utilities/getParam";
import { setTitle } from "../../utilities/setTitle";
import { isAuthenticated } from "../../utilities/storage";

async function displayAuction() {
    const id = getParam("id");

    if (!id) {
        // Redirect if no ID is found in the URL
        window.location.href = "/";
    }

    const container = document.querySelector("#auctionDetails");
    const bidContainer = document.querySelector("#auctionBids");

    // Check if user is authenticated by calling the function
    if (!isAuthenticated()) {
        // Hide the bid container if not authenticated
        bidContainer.style.display = "none";
    }
    
    try {
        const response = await readAuction(id);

        if (response.data) {
            setTitle(response.data.title);
            renderAuction(container, response.data);
            renderBids(bidContainer, response.data.bids);
        } else {
            displayMessage(container, "error", "Auction not found.");
        }
    } catch (error) {
        console.error(error);
        displayMessage(container, "error", error.message);
    }
}
displayAuction();
