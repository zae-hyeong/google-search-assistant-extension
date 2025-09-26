console.log("Popup script running.");

document.addEventListener("DOMContentLoaded", () => {
  const mainSearchInput = document.getElementById("mainSearchInput") as HTMLInputElement;
  if (mainSearchInput) {
    mainSearchInput.focus();
  }

  // Advanced Search Button Listeners
  const advancedSearchButtons = document.querySelectorAll(".advanced-search-btn");
  advancedSearchButtons.forEach(button => {
    button.addEventListener("click", () => {
      const command = (button as HTMLElement).dataset.command;
      if (command) {
        mainSearchInput.value += `${command} `;
        mainSearchInput.focus();
      }
    });
  });

  // TODO: Implement tab switching logic and content loading
  document.getElementById("advancedSearchTab")?.addEventListener("click", () => {
    console.log("Advanced Search tab clicked");
  });
  document.getElementById("multiSearchTab")?.addEventListener("click", () => {
    console.log("Multi Search tab clicked");
  });
  document.getElementById("templatesTab")?.addEventListener("click", () => {
    console.log("Templates tab clicked");
  });
  document.getElementById("historyTab")?.addEventListener("click", () => {
    console.log("History tab clicked");
  });
});

export {};