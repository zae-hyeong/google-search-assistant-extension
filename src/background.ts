console.log("Background script running.");

chrome.runtime.onInstalled.addListener(() => {
  console.log("Search Flow extension installed.");
});

// Omnibox integration (F-1)
chrome.omnibox.onInputEntered.addListener((text) => {
  console.log(`Omnibox input: ${text}`);
  // TODO: Implement quick search logic
});

// Context menu integration (F-5)
chrome.contextMenus.create({
  id: "searchFlowContextMenu",
  title: "Search Flow로 검색 ▷",
  contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "searchFlowContextMenu" && info.selectionText) {
    console.log(`Context menu search for: ${info.selectionText}`);
    // TODO: Implement context menu search logic
  }
});

export {};