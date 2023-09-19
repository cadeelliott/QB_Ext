// content.js

// This function extracts and logs text content from the page
function logTextContent() {
  const textContent = document.body.innerText;
  console.log('Text content from the current page:');
  console.log(textContent);
}

// Add an event listener to listen for messages from the extension popup or background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'extractTextContent') {
    logTextContent();
  }
});

// You can add more code here to interact with the web page's content as needed.
