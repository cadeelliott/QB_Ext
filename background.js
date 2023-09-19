let monitoring = false;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'startMonitoring') {
    if (!monitoring) {
      chrome.webRequest.onCompleted.addListener(
        logResponse,
        { urls: ['<all_urls>'] }
      );
      monitoring = true;
    }
  }
});

function logResponse(details) {
  console.log(details.url);
  console.log(details.responseHeaders);
}
