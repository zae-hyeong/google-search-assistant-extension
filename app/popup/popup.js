"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Popup script running.");
document.addEventListener("DOMContentLoaded", () => {
    const mainSearchInput = document.getElementById("mainSearchInput");
    if (mainSearchInput) {
        mainSearchInput.focus();
    }
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
//# sourceMappingURL=popup.js.map