// popup.js
document.addEventListener("DOMContentLoaded", function () {
  const duplicateButton = document.getElementById("duplicateButton");

  duplicateButton.addEventListener("click", function () {
    // Send a message to the background script to trigger the duplication
    chrome.runtime.sendMessage({ action: "duplicateElements" });
  });
});
