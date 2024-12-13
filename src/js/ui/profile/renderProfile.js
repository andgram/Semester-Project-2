export function renderProfile(profileData) {
    // Select the containers
    const profileHeader = document.querySelector("#profile-header");
    const profileDetails = document.querySelector("#profile-details");
  
    if (profileHeader) {
      profileHeader.innerHTML = "";
    }
    if (profileDetails) {
      profileDetails.innerHTML = "";
    }
  
    const { name, bio, avatar, banner, credits } = profileData;
  
    if (profileHeader) {
        // Render banner
        if (banner?.url) {
          const bannerElement = document.createElement("div");
          const bannerImage = document.createElement("img");
          bannerImage.src = banner.url; // Accessing the banner URL
          bannerElement.className = "profile-banner";
          bannerElement.appendChild(bannerImage);
          profileHeader.appendChild(bannerElement);
        }
      
        // Render avatar
        if (avatar?.url) {
          const avatarElement = document.createElement("div");
          const avatarImage = document.createElement("img");
          avatarImage.src = avatar.url; // Accessing the avatar URL
          avatarElement.className = "profile-avatar";
          avatarElement.appendChild(avatarImage);
          profileHeader.appendChild(avatarElement);
        }
      }
  
    // Render name, bio, and credits in the #profile-details
    if (profileDetails) {
      if (name) {
        const nameElement = document.createElement("h3");
        nameElement.textContent = name;
        profileDetails.appendChild(nameElement);
      }
  
      const bioElement = document.createElement("p");
      bioElement.className = "bio";
      bioElement.textContent = bio || "No bio available.";
      profileDetails.appendChild(bioElement);
  
      const creditsElement = document.createElement("p");
      creditsElement.className = "profile-credits";
      creditsElement.textContent = `Current Credits: ${credits || 0}`;
      profileDetails.appendChild(creditsElement);
    }
  }
  