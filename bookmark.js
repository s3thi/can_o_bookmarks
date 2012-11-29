chrome.browserAction.onClicked.addListener(function(tab) {
    var currentPageURL = encodeURIComponent(tab.url);
    var currentPageTitle = encodeURIComponent(tab.title);
    var bookmarkURL = "http://ankursethi.in/bookmarks/new/?url=" +
                      currentPageURL +
                      "&title=" +
                      currentPageTitle;
    
    chrome.tabs.create({ "url": bookmarkURL });
});
