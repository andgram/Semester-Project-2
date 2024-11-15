import { readAuctionsbyProfile } from "../../api/auction/readAuction";
import { renderProfileAuctions } from "../../ui/profile/renderProfileAuctions";
import { loadName } from "../../utilities/storage";
import { loadProfile } from "../../api/profile/loadProfile";
import { renderProfile } from "../../ui/profile/renderProfile";
import { onUpdateProfile } from "../../ui/profile/profile";

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


function openProfileEditModal() {
    document.getElementById('profile-edit-modal').style.display = 'block';
}

export function closeEditModal() {
    document.getElementById('profile-edit-modal').style.display = 'none';
}

const editProfileButton = document.getElementById('edit-profile-button');
editProfileButton?.addEventListener('click', function (event) {
    event.preventDefault();
    openProfileEditModal();
});

const cancelEditButton = document.getElementById('cancel-edit');
cancelEditButton?.addEventListener('click', function () {
    closeEditModal();
});

document.getElementById('profile-edit-form')?.addEventListener('submit', onUpdateProfile);
