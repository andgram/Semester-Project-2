import { placeBid } from "../../api/auction/bid"

export async function onPlaceBid(event, auctionId, bidAmount) {
    event.preventDefault();

    // Validate bid amount
    if (isNaN(bidAmount) || bidAmount <= 0) {
        alert("Please enter a valid bid amount.");
        return;
    }

    try {
        const result = await placeBid(auctionId, bidAmount);
        
        // If the bid is placed successfully, show the result
        alert("Bid placed successfully!");
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
}
