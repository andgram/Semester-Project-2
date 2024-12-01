import { isAuthenticated } from "../../utilities/storage";
import { onLogout } from "../../ui/auth/logout";

export function displayMenu() {
  const nav = document.querySelector('#top-nav');

  if (nav) {
    const loggedin = isAuthenticated();

    const ul = document.createElement('ul');
    ul.id = "primary-navigation";
    ul.setAttribute("data-visible", "false");
    ul.className = "primary-navigation nav-flex";

    if (loggedin) {
      ul.innerHTML = `
        <li><a href="/">Home</a></li>
        <li><a href="/profile/">My Profile</a></li>
        <li><a href="/auction/create/">Create Auction</a></li>
        <li><button id="logout-button">Logout</button></li>
      `;

      nav.innerHTML = ''; // Clear the nav
      nav.appendChild(ul); // Append the updated menu

      // Call `onLogout` AFTER the DOM is updated
      onLogout();
    } else {
      ul.innerHTML = `
        <li><a href="/">Home</a></li>
        <li><a href="/auth/login/">Login</a></li>
        <li><a href="/auth/register/">Register</a></li>
      `;
      nav.innerHTML = '';
      nav.appendChild(ul);
    }
  }
}
