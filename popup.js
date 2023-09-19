document.getElementById('startButton').addEventListener('click', () => {
  chrome.scripting.executeScript({
    target: { tabId: chrome.tabs.getCurrent().id },
    function: startMonitoring
  });
});

function startMonitoring() {
  chrome.runtime.sendMessage({ action: 'startMonitoring' });
}
