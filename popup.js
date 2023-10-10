// popup.js
document.addEventListener("DOMContentLoaded", function () {
  const duplicateButton = document.getElementById("duplicateButton");

  duplicateButton.addEventListener("click", function () {
    // Get the currently active tab
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
        return;
      }

      const activeTab = tabs[0];

      // Check if an active tab was found
      if (activeTab) {
        // Send a message to content.js to trigger the duplication
        chrome.scripting.executeScript({
          target: { tabId: activeTab.id },
          function: duplicateElements,
        });
      } else {
        console.error("No active tab found.");
      }
    });
  });

  function duplicateElements() {
    const elementsToDuplicate = document.querySelectorAll(".cell.col-1.left.wrap");

    elementsToDuplicate.forEach((element) => {
      const clone = element.cloneNode(true);
      element.parentNode.insertBefore(clone, element.nextSibling);
    });
  }
});
