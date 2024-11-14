import { displayMenu } from "../components/shared/displayMenu.js";

export default async function router(pathname = window.location.pathname) {

  displayMenu();

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
  }

  
}