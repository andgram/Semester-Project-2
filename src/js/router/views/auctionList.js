import { readActiveAuctions } from "../../api/auction/readAuction";
import { searchAuctions } from "../../api/auction/searchAuctions";
import { renderAuctionList } from "../../components/auctions/renderAuctionList";
import { bindSearchEvents } from "../../components/auctions/bindSearchEvents";
import { handleError } from "../../components/shared/handleError";

const response = await readActiveAuctions();
const auctions = response.data;

function displayNewestAuctions(auctions, limit) {
  const sortedAuctions = auctions.sort((a, b) => new Date(b.created) - new Date(a.created));
  const limitedAuctions = sortedAuctions.slice(0, limit);
  renderAuctionList('#auctionList', limitedAuctions);
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
    displayNewestAuctions(auctions, 12);
    bindSearchEvents("#searchButton", "#searchInput", handleSearch);
}

initAuctionsPage();
