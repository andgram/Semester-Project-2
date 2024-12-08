import { isAuthenticated } from "../../utilities/storage";
import { onLogout } from "../../ui/auth/logout";

export function displayMenu() {
  const nav = document.querySelector('#top-nav');
  const loggedin = isAuthenticated();
  const currentPage = window.location.pathname;

  if (nav) {
    const ul = document.createElement('ul');
    ul.id = "primary-navigation";
    ul.setAttribute("data-visible", "false");
    ul.className = "primary-navigation nav-flex";

    if (loggedin) {
      // If the user is logged in and currently on the profile page
      if (currentPage === "/profile/") {
        ul.innerHTML = `
          <li><a href="/">Home</a></li>
          <li><a href="/auction/list/index.html">Listings</a></li>
          <li id="edit-profile-button"><a href="/profile/">Edit Profile</a></li>
          <li><a href="/auction/create/">Create Auction</a></li>
          <li><button id="logout-button">Logout</button></li>
        `;
      } else {
        // If logged in and not on the profile page
        ul.innerHTML = `
          <li><a href="/">Home</a></li>
          <li><a href="/auction/list/index.html">Listings</a></li>
          <li><a href="/profile/">My Profile</a></li>
          <li><a href="/auction/create/">Create Auction</a></li>
          <li><button id="logout-button">Logout</button></li>
        `;
      }

      // Attach the event listener for the logout button
      const logoutButton = ul.querySelector('#logout-button');
      if (logoutButton) {
        logoutButton.addEventListener('click', onLogout);
      }

    } else {
      // If the user is not logged in
      ul.innerHTML = `
        <li><a href="/">Home</a></li>
        <li><a href="/auction/list/index.html">Listings</a></li>
        <li><a href="/auth/login/">Login</a></li>
        <li><a href="/auth/register/">Register</a></li>
      `;
    }

    // Clear and update the navigation menu
    nav.innerHTML = '';
    nav.appendChild(ul);
  }
}
