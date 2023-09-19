document.addEventListener("DOMContentLoaded", function () {
  const fetchButton = document.getElementById("fetchButton");
  const resultDiv = document.getElementById("result");

  fetchButton.addEventListener("click", () => {
    // Send a message to the background script to fetch JSON
    chrome.runtime.sendMessage({ action: "fetchJSON" });
  });

  // Listen for a response message from the background script
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "jsonResponse") {
      // Display the JSON data in the popup
      resultDiv.textContent = JSON.stringify(message.data, null, 2);
    }
  });
});
