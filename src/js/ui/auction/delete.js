import { deleteAuction } from "../../api/auction/delete";
import { displayMessage } from "../../components/shared/displayMessage";

export async function onDeleteAuction(event) {
  event.preventDefault();

  if (confirm("Are you sure you want to delete this listing?")) {
      const button = event.target;
      const { id } = button.dataset;

      try {
          await deleteAuction(id);
          button.removeEventListener("click", onDeleteAuction);

          const auctionElement = button.closest("a.auction");
          if (auctionElement) {
            auctionElement.remove();
          }

          displayMessage("#message", "success", "Listing deleted successfully.");
          setTimeout(() => {
              window.location.href = "/profile/";
          }, 2000);
      } catch (error) {
          console.error("Error deleting: ", error.message);
          displayMessage("#message", "error", error.message);
      }
  }
}