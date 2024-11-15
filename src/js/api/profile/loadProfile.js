import { API_AUCTION_PROFILES } from "../../api/constants";
import { headers } from "../headers";

// Load profile data by username
export async function loadProfile(username) {

    if(!username) {
        throw new Error("This call needs a username");
    }
    const response = await fetch(`${API_AUCTION_PROFILES}/${username}`, {
        headers: headers(),
    });

    const json = await response.json();
    
    if(!response.ok) {
        throw new Error(json.errors[0].message);
    }

    return json;
}
