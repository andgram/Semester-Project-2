import { displayMenu, setupMobileNav } from "../components/shared/displayMenu.js";

export default async function router(pathname = window.location.pathname) {

 // Initialize the navigation menu
displayMenu();

// Set up the mobile menu toggle functionality
setupMobileNav('#primary-navigation', '#mobile-nav-toggle');

  switch (pathname) {
    case "/":
      await import("./views/home.js");
      console.log("home.js running");
      break;
    case "/auth/login/":
      await import("./views/login.js");
      console.log("login.js running");
      break;
    case "/auth/register/":
      await import("./views/register.js");
      console.log("register.js running");
      break;
    case "/auction/list/index.html":
      await import("./views/auctionList.js");
      console.log("auctionList.js running");
      break;
    case "/auction/details/":
      await import("./views/auction.js");
      console.log("auction.js running");
      break;
     case "/auction/create/":
      await import("./views/auctionCreate.js");
      console.log("auctionCreate.js running");
      break;
     case "/profile/":
      await import("./views/profile.js");
      console.log("profile.js running");
      break;
  }

  
}