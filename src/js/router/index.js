// import { displayMenu } from "../components/shared/displayMenu.js";

export default async function router(pathname = window.location.pathname) {
    // Strip out the "/src/pages" part if present
    const cleanPath = pathname.replace(/^\/src\/pages/, '').toLowerCase();
  
    switch (cleanPath) {
      case "/":
        await import("./views/home.js");
        console.log("home.js running");
        break;
      case "/login.html":
        await import("./views/login.js");
        console.log("login.js running");
        break;
      case "/register.html":
        await import("./views/register.js");
        console.log("register.js running");
        break;
      default:
        console.log("Page not found");
        break;
    }
  }