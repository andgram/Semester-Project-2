import { API_AUCTION_LISTINGS_SEARCH } from "../constants";

export async function searchAuctions(query) {
    try {
        const response = await fetch(`${API_AUCTION_LISTINGS_SEARCH}/?q=${encodeURIComponent(query)}`);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.errors?.[0]?.message || "Failed to fetch search results");
        }

        return data.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}
