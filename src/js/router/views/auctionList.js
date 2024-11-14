import { readAuctions } from "../../api/auction/readAuction";
import { renderAuctions } from "../../components/auctions/renderAuctions";
import { displayMessage } from "../../components/shared/displayMessage";

async function displayAuctions() {
    const container = document.querySelector("#auctionList");
    console.log(container);

    try {
        const response = await readAuctions();
        renderAuctions(container, response.data);
        console.log(response.data);
        
    }
    catch (error) {
        console.error(error);
        displayMessage(container, "error", error.message);
    }
    
}

displayAuctions();

