import { readAuctionsbyProfile } from "../../api/auction/readAuction";
import { renderProfileAuctions } from "../../ui/profile/renderProfileAuctions";
import { loadName } from "../../utilities/storage";


async function loadAndDisplayProfile() {
    const username = loadName();
    if (!username) {
        console.error("Username not found");
        return;
    }
    try {
        const container = document.getElementById("my-listings");
        const auctions = await readAuctionsbyProfile(username);
        renderProfileAuctions(container, auctions);
    } catch (error) {
        console.error(error.message);
    }
}

loadAndDisplayProfile();