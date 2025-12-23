// (c) - BrowserNative <https://browsernative.com/screenshot-extension/>

function format_date() {
  let now = new Date();
  let year = now.getFullYear().toString();
  let month = (now.getMonth() + 1).toString().padStart(2, '0');
  let day = now.getDate().toString().padStart(2, '0');
  let hour = now.getHours().toString().padStart(2, '0');
  let minute = now.getMinutes().toString().padStart(2, '0');
  let second = now.getSeconds().toString().padStart(2, '0');
  return `${year}-${month}-${day}-${hour}-${minute}-${second}`;
}

chrome.action.onClicked.addListener(function() {  
  chrome.storage.sync.get(['format', 'action'], function(result) {
    let format = result.format;
    if (!format) format = "png";   
    let action = result.action;
    if (!action) action = "save";
    chrome.tabs.captureVisibleTab({format: format, quality: 100}, function(image) {   
      if(action === "show")  chrome.tabs.create({url: image});
      if(action === "save")  chrome.downloads.download({url: image, filename: "screenshot-"+format_date()+"."+format});      
    });
  });
});


chrome.runtime.onInstalled.addListener(function(details) {
    if (details.reason == "install") {
        chrome.tabs.create({
            url: "https://browsernative.com/screenshot-extension/"
        });
    }
});
