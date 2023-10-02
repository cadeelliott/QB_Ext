chrome.runtime.connect({ name: 'network-extension' }).postMessage({ action: 'attach', tabId: chrome.devtools.inspectedWindow.tabId });
