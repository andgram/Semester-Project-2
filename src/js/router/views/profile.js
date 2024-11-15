import { readAuctionsbyProfile } from "../../api/auction/readAuction";
import { renderProfileAuctions } from "../../ui/profile/renderProfileAuctions";
import { loadName } from "../../utilities/storage";
import { loadProfile } from "../../api/profile/loadProfile"; 
import { renderProfile } from "../../ui/profile/renderProfile";

async function loadAndDisplayProfile() {
    // Get name from logged in user to display on profile page
    const username = loadName();
    if (!username) {
        console.error("Username not found");
        return;
    }
    try {
        const profileData = await loadProfile(username); 
        renderProfile(profileData.data);

        // Load and render auctions by the user
        const container = document.getElementById("my-listings");
        const auctions = await readAuctionsbyProfile(username);
        renderProfileAuctions(container, auctions);
    } catch (error) {
        console.error(error.message);
    }
}
loadAndDisplayProfile();
