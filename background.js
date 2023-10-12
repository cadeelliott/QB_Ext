// background.js
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "duplicateElements") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const activeTab = tabs[0];
      if (activeTab) {
        chrome.scripting.executeScript({
          target: { tabId: activeTab.id },
          function: duplicateElements,
        });
      } else {
        console.error("No active tab found.");
      }
    });
  }
});

function duplicateElements() {
  console.log('inside duplicateElements');
  const elementsToDuplicate = document.querySelectorAll(".cell.col-1.left.wrap");

  elementsToDuplicate.forEach((element) => {
    const clone = element.cloneNode(true);
    element.parentNode.insertBefore(clone, element.nextSibling);
  });
}
