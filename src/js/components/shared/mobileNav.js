export function setupMobileNav(navSelector, toggleSelector) {
    const primaryNav = document.querySelector(navSelector);
    const navToggle = document.querySelector(toggleSelector);
  
    if (!primaryNav || !navToggle) {
      console.warn(`Navigation or toggle button not found for selectors: ${navSelector}, ${toggleSelector}`);
      return;
    }
  
    navToggle.addEventListener("click", () => {
      const visibility = primaryNav.getAttribute("data-visible");
  
      if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
      } else {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
      }
    });
  }
  