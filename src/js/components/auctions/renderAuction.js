export function renderAuction(container, auction) {

    container.innerHTML = "";

    const { title, description,  } = auction;

    const heading = document.createElement("h1");
    heading.innerText = title
    container.appendChild(heading);

    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = description;   
    container.appendChild(descriptionElement);

}