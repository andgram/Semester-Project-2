import { API_AUCTION_LISTINGS } from "../constants";
import { headers } from "../headers";

// Load all auctions
export async function readAuctions() {

    const response = await fetch(`${API_AUCTION_LISTINGS}`, {
        headers: headers(),
    });

    const json = await response.json();
    
    if(!response.ok) {
        throw new Error(json.errors[0].message);
    }
    console.log(json);
    return json;
}