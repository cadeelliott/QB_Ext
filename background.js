// In background.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "fetchJSON") {
    const jsonUrl = "https://c12.qbo.intuit.com/qbo12/v4/entities";
    fetch(jsonUrl)
      .then((response) => response.json())
      .then((data) => {
        // Handle the JSON data here and send it back to the popup if needed.
      })
      .catch((error) => {
        // Handle errors
      });
  }
});
