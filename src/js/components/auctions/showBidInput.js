import { onPlaceBid } from "../../ui/auction/bid";

export function showBidInput(bidButton, auctionId) {
    // Hide the "Place Bid" button
    bidButton.style.display = "none";

    // Create the input field and submit button for placing a bid
    const inputContainer = document.createElement("div");
    inputContainer.classList.add("bid-input-container");

    // Bid amount input field
    const bidInput = document.createElement("input");
    bidInput.type = "number";
    bidInput.id = "bid-amount";
    bidInput.placeholder = "Enter your bid amount";
    inputContainer.appendChild(bidInput);

    // Submit Bid button
    const submitButton = document.createElement("button");
    submitButton.innerText = "Submit";
    submitButton.dataset.id = auctionId;
    inputContainer.appendChild(submitButton);

    // Cancel button to hide the input field and show "Place Bid" button again
    const cancelButton = document.createElement("button");
    cancelButton.innerText = "Cancel";
    cancelButton.addEventListener("click", () => {
        inputContainer.remove();
        bidButton.style.display = "inline-block";
    });
    inputContainer.appendChild(cancelButton);
    bidButton.parentNode.appendChild(inputContainer);

    // Handle bid submission when the Submit Bid button is clicked
    submitButton.addEventListener("click", (event) => {
        event.preventDefault();

        const bidAmount = parseFloat(bidInput.value);

        if (isNaN(bidAmount) || bidAmount <= 0) {
            alert("Please enter a valid bid amount.");
            return;
        }

        // Call placeBid function
        onPlaceBid(event, auctionId, bidAmount);
        
        // Remove the input container and show the Place Bid button again
        inputContainer.remove();
        bidButton.style.display = "inline-block";
    });
}
