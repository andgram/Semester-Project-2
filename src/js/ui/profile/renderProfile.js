export function renderProfile(profileData) {
    // Select the containers
    const profileHeader = document.querySelector("#profile-header");
    const profileDetails = document.querySelector("#profile-details");
  
    // Clear existing content in the containers
    if (profileHeader) {
      profileHeader.innerHTML = "";
    }
    if (profileDetails) {
      profileDetails.innerHTML = "";
    }
  
    // Destructure the profile data
    const { name, bio, avatar, banner, credits } = profileData;
  
    // Check and render avatar and banner in the #profile-header
    if (profileHeader) {
        // Render banner
        if (banner?.url) {
          const bannerElement = document.createElement("img");
          bannerElement.src = banner.url; // Accessing the banner URL
          bannerElement.className = "profile-banner";
          profileHeader.appendChild(bannerElement);
        }
      
        // Render avatar
        if (avatar?.url) {
          const avatarElement = document.createElement("img");
          avatarElement.src = avatar.url; // Accessing the avatar URL
          avatarElement.className = "profile-avatar";
          profileHeader.appendChild(avatarElement);
        }
      }
  
    // Render name, bio, and credits in the #profile-details
    if (profileDetails) {
      if (name) {
        const nameElement = document.createElement("h2");
        nameElement.textContent = name;
        profileDetails.appendChild(nameElement);
      }
  
      const bioElement = document.createElement("p");
      bioElement.textContent = bio || "No bio available.";
      profileDetails.appendChild(bioElement);
  
      const creditsElement = document.createElement("p");
      creditsElement.textContent = `Credits: ${credits || 0}`;
      profileDetails.appendChild(creditsElement);
    }
  }
  