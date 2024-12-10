export function displayMessage(
    container, 
    messageType = "error", 
    message = "Something went wrong"
  ) {
    let parent = container;
  
    if (typeof container === "string") {
      parent = document.querySelector(container);
    }
  
    parent.innerHTML = `
      <div class="message ${messageType}">
           <p>${message}</p>
      </div>
    `;
  
    parent.style.display = "block";
  
    const messageElement = parent.querySelector(".message");
  
    setTimeout(() => {
      messageElement.classList.add("fade-out");
      setTimeout(() => {
        parent.style.display = "none";
        parent.innerHTML = "";
      }, 500);
    }, 3000);
  }
  