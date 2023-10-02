// content.js

// Function to send a message to the background script
function sendMessageToBackground(action, data) {
  chrome.runtime.connect({ name: 'network-extension' }).postMessage({ action, ...data });
}

// Example: Send a message to the background script to retrieve response body for a specific network request
// Replace 'yourRequestIdHere' with the actual requestId
const requestIdToRetrieve = 'yourRequestIdHere';

sendMessageToBackground('getResponseBody', {
  tabId: chrome.devtools.inspectedWindow.tabId,
  requestId: requestIdToRetrieve,
});

// You can add more code here to interact with the web page as needed
