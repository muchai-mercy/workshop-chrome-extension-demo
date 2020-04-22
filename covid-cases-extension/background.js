chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      message: 'covid-cases',
      data: tabs[0].url
    });
  });
});

chrome.runtime.onMessage.addListener(data => {
  if (data.type === 'Stay home') {
    chrome.notifications.create('', data.options);
  }
});
