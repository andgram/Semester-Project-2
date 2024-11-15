import { isAuthenticated } from "../../utilities/storage";
import { onLogout } from "../../ui/auth/logout";


// Important note:
// User not loggedin should only have access to "login", "register" and list of auctions
// Everything else should have an authguard with a card poping up

export function displayMenu() {
  const nav = document.querySelector('#top-nav');

  if (nav) {
    const loggedin = isAuthenticated();

    if (loggedin) {
      nav.innerHTML = `
        <a href="/">Home</a>
        <a href="/profile/">My Profile</a>
        <a href="/auction/create/">Create Auction</a>
        <button id="logout-button">Logout</button>
      `;

      if (window.location.pathname.includes("/profile")) {
        const editProfileButton = document.createElement('a');
        editProfileButton.href = "#";
        editProfileButton.textContent = "Edit Profile";
        editProfileButton.id = "edit-profile-button";
        nav.appendChild(editProfileButton);
      }

      // Attach logout function to the logout button
      onLogout();
    } else {
      nav.innerHTML = `
        <a href="/">Home</a>
        <a href="/auth/login/">Login</a>
        <a href="/auth/register/">Register</a>
      `;
    }
  }
}
