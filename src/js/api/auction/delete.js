import { API_AUCTION_LISTINGS } from "../constants";
import { headers } from "../headers";

export async function deleteAuction(id) {

    const response = await fetch(`${API_AUCTION_LISTINGS}/${id}`, {
        method: "DELETE",
        headers: headers(),
      });
    
      if (response.ok === false) {
        throw new Error("Delete failed");
      }

}