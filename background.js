chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {

    if(tab.url != null) {

      chrome.scripting.executeScript(
          {
            target: {tabId: tabId},
            files: ['script.js']
          },
          () => { /*console.log('tut');*/ });
    }
});
