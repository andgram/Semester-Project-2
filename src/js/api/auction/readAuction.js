import { API_AUCTION_LISTINGS, API_AUCTION_PROFILES  } from "../constants";
import { headers } from "../headers";


// Load single auction by id
export async function readAuction(id) {

    if(!id) {
        throw new Error("This call needs an id");
    }

    const response = await fetch(`${API_AUCTION_LISTINGS}/${id}`, {
        headers: headers(),
    });

    const json = await response.json();
    
    if(!response.ok) {
        throw new Error(json.errors[0].message);
    }

    return json;
}

// Load all auctions
export async function readAuctions() {

    const response = await fetch(`${API_AUCTION_LISTINGS}`, {
        headers: headers(),
    });

    const json = await response.json();
    
    if(!response.ok) {
        throw new Error(json.errors[0].message);
    }
    return json;
}

// // Load auctions by profile
export async function readAuctionsbyProfile(username) {

    const response = await fetch(`${API_AUCTION_PROFILES}/${username}/listings`, {
        headers: headers(),
    });

    const json = await response.json();
    
    if(!response.ok) {
        throw new Error(json.errors[0].message);
    }
    return json;
}

