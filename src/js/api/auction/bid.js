import { API_AUCTION_LISTINGS } from "../constants";
import { headers } from "../headers";

export async function placeBid(auctionId, bidAmount) {
const authHeaders = headers();

    const body = JSON.stringify({
    amount: bidAmount,
  });

  try {
    const response = await fetch(`${API_AUCTION_LISTINGS}/${auctionId}/bids`, {
      method: "POST",
      headers: authHeaders,
      body: body,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.errors ? data.errors[0].message : "An error occurred while placing the bid.");
    }

    return data;
  } catch (error) {
    console.error("Failed to place bid:", error.message);
    throw error;
  }
}
