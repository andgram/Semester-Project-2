import { readAuctions } from "../../api/auction/readAuction";
import { searchAuctions } from "../../api/auction/searchAuctions";
import { renderAuctionList } from "../../components/auctions/renderAuctionList";
import { bindSearchEvents } from "../../components/auctions/bindSearchEvents";
import { handleError } from "../../components/shared/handleError";


// Display auctions with a limit
async function displayAuctions(limit = 10) {
    try {
        const response = await readAuctions();
        const limitedAuctions = response.data.slice(0, limit);
        renderAuctionList("#auctionList", limitedAuctions);
    } catch (error) {
        handleError("#auctionList", error);
    }
}

// Handle search
async function handleSearch(event) {
    event.preventDefault();

    const searchQuery = document.querySelector("#searchInput").value.trim();
    if (!searchQuery) {
        renderAuctionList("#searchResults", []);
        return;
    }

    try {
        const auctions = await searchAuctions(searchQuery);
        renderAuctionList("#searchResults", auctions);
    } catch (error) {
        handleError("#searchResults", error);
    }
}

// Initialize the auctions page
function initAuctionsPage() {
    displayAuctions(10); // Display suggested auction listings
    bindSearchEvents("#searchButton", "#searchInput", handleSearch);
}

initAuctionsPage();
