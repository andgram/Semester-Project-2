import { isAuthenticated } from "../../utilities/storage"; // Adjust the path as necessary
import { onLogout } from "../../ui/auth/logout"; // Adjust the path as necessary

export function displayMenu() {
  const nav = document.querySelector('#top-nav');
  const loggedin = isAuthenticated();  // Check if the user is authenticated
  const currentPage = window.location.pathname;

  if (nav) {
    const ul = document.createElement('ul');
    ul.id = "primary-navigation";
    ul.className = "primary-navigation";

    if (loggedin) {
      // If the user is logged in and currently on the profile page
      if (currentPage === "/profile/") {
        ul.innerHTML = `
          <li><a href="/">Home</a></li>
          <li><a href="/auction/list/index.html">Listings</a></li>
          <li id="edit-profile-button"><a href="/profile/index.html">Edit Profile</a></li>
          <li><a href="/auction/create/index.html">Create Auction</a></li>
          <li><button id="logout-button">Logout</button></li>
        `;
      } else {
        // If logged in and not on the profile page
        ul.innerHTML = `
          <li><a href="/">Home</a></li>
          <li><a href="/auction/list/index.html">Listings</a></li>
          <li><a href="/profile/index.html">My Profile</a></li>
          <li><a href="/auction/create/index.html">Create Auction</a></li>
          <li><button id="logout-button">Logout</button></li>
        `;
      }

      // Attach event listener for the logout button
      const logoutButton = ul.querySelector('#logout-button');
      if (logoutButton) {
        logoutButton.addEventListener('click', onLogout);
      }
    } else {
      // If the user is not logged in
      ul.innerHTML = `
        <li><a href="/">Home</a></li>
        <li><a href="/auction/list/index.html">Listings</a></li>
        <li><a href="/auth/login/index.html">Login</a></li>
        <li><a href="/auth/register/index.html">Register</a></li>
      `;
    }

    // Clear existing nav content and append the new menu
    nav.innerHTML = '';
    nav.appendChild(ul);
  }
}

export function setupMobileNav(navSelector, toggleSelector) {
  const primaryNav = document.querySelector(navSelector);
  const navToggle = document.querySelector(toggleSelector);

  if (!primaryNav || !navToggle) {
    console.warn(`Navigation or toggle button not found for selectors: ${navSelector}, ${toggleSelector}`);
    return;
  }

  navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");

    // Toggle the mobile navigation visibility
    if (visibility === "false") {
      primaryNav.setAttribute("data-visible", "true"); // Show menu
      navToggle.setAttribute("aria-expanded", "true");

      // Switch to the close icon
      navToggle.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      `;
    } else {
      primaryNav.setAttribute("data-visible", "false"); // Hide menu
      navToggle.setAttribute("aria-expanded", "false");

      // Switch back to the hamburger icon
      navToggle.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      `;
    }
  });
}

