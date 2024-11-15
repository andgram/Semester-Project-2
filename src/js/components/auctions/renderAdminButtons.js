import { onDeleteAuction } from "../../ui/auction/delete";
import { loadName } from "../../utilities/storage";

export function renderAdminButtons(auction) {
    const username = loadName();

    const { seller, id } = auction;

    const sellerName = seller.name;

    if (sellerName !== username) {
        return null;
    } 

    const div = document.createElement("div");
    div.classList.add("admin-buttons");

    const editButton = document.createElement("a");
    editButton.innerText = "Edit";
    editButton.href = `/auction/edit/?id=${id}`;

    const deleteButton = document.createElement("button"); 
    deleteButton.innerText = "Delete";
    deleteButton.dataset.id = id;
    deleteButton.addEventListener("click", onDeleteAuction);
    
    
    div.appendChild(editButton);
    div.appendChild(deleteButton);

    return div;
}