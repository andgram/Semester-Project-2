import { placeBid } from "../../api/auction/bid"
import { displayMessage } from "../../components/shared/displayMessage";

export async function onPlaceBid(event, auctionId, bidAmount) {
    event.preventDefault();

    // Validate bid amount
    if (isNaN(bidAmount) || bidAmount <= 0) {
        alert("Please enter a valid bid amount.");
        return;
    }

    try {
        const result = await placeBid(auctionId, bidAmount);
        
        displayMessage("#message", "success", "Bid placed successfully.");
    } catch (error) {
        displayMessage("#message", "error", error.message);
    }
}
