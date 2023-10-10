// popup.js
document.addEventListener("DOMContentLoaded", function () {
  const duplicateButton = document.getElementById("duplicateButton");

  duplicateButton.addEventListener("click", function () {
    // Send a message to content.js to trigger the duplication
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: duplicateElements,
      });
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
