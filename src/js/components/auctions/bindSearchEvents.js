export function bindSearchEvents(buttonSelector, inputSelector, handler) {
    const searchButton = document.querySelector(buttonSelector);
    const searchInput = document.querySelector(inputSelector);

    if (searchButton) {
        searchButton.addEventListener("click", handler);
    }

    if (searchInput) {
        searchInput.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                handler(event);
            }
        });
    }
}