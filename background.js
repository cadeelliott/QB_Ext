// background.js

// Function to handle network request
function handleNetworkRequest(tabId, requestId) {
  chrome.debugger.sendCommand({ tabId: tabId }, 'Network.getResponseBody', { requestId: requestId }, function (result) {
    if (chrome.runtime.lastError) {
      // Handle errors
      console.error(chrome.runtime.lastError);
      return;
    }

    const responseBody = result.body;
    // Use the response body as needed
    console.log(responseBody);
  });
}

chrome.debugger.onDetach.addListener(function (source, reason) {
  if (reason === 'target_closed') {
    // Handle the tab being closed
  }
});

chrome.runtime.onConnect.addListener(function (port) {
  port.onMessage.addListener(function (msg) {
    if (msg.action === 'attach') {
      chrome.debugger.attach({ tabId: msg.tabId }, '1.2', function () {
        chrome.debugger.sendCommand({ tabId: msg.tabId }, 'Network.enable', {}, function () {
          // You can now use Network.getResponseBody to get response bodies
        });
      });
    } else if (msg.action === 'detach') {
      chrome.debugger.detach({ tabId: msg.tabId });
    } else if (msg.action === 'getResponseBody') {
      // Call the function to retrieve the response body
      handleNetworkRequest(msg.tabId, msg.requestId);
    }
  });
});
