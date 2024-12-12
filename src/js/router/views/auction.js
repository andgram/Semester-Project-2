import { readAuction } from "../../api/auction/readAuction";
import { renderAuction } from "../../components/auctions/renderAuction";
import { renderBids } from "../../components/auctions/renderBids";
import { displayMessage } from "../../components/shared/displayMessage";
import { getParam } from "../../utilities/getParam";
import { setTitle } from "../../utilities/setTitle";

async function displayAuction() {
    const id = getParam("id");

    if (!id) {
        // Redirect if no ID is found in the URL
        window.location.href = "/";
    }

    const container = document.querySelector("#auctionDetails");
    const bidContainer = document.querySelector("#auctionBids");

    try {
        // Fetch auction data from the API
        const response = await readAuction(id);

        if (response.data) {
            // Set page title to auction title
            setTitle(response.data.title);

            // Render auction details
            renderAuction(container, response.data);

            // Render bids, pass the bids array to the renderBids function
            // (If authenticated)
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
