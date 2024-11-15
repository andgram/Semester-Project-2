import { readAuction } from "../../api/auction/readAuction";
import { renderAuction } from "../../components/auctions/renderAuction";
import { displayMessage } from "../../components/shared/displayMessage";
import { getParam } from "../../utilities/getParam";
import { setTitle } from "../../utilities/setTitle";

async function displayAuction() {

    const id = getParam("id");

    if(!id) {
        window.location.href = "/";
    }
    
const container = document.querySelector("#auctionDetails");

try {
    const response = await readAuction(id);
    setTitle(response.data.title);
    renderAuction(container, response.data);
} catch (error) {
    console.error(error);
    displayMessage(container, "error", error.message);
}
}

displayAuction();