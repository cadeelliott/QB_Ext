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
    }
  });
});
