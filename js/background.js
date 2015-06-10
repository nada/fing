var backgroundPage = (function () {

    /**
    * Initialize the extension
    */
    (function initialize() {
        chrome.webRequest.onBeforeSendHeaders.addListener(function(details) {

            console.log(details.requestHeaders);
            for (var i = 0; i < details.requestHeaders.length; ++i) {
                if (details.requestHeaders[i].name === 'User-Agent') {
                    details.requestHeaders.splice(i, 1);
                    break;
                }
            }
            console.log(details.requestHeaders);
            return {requestHeaders: details.requestHeaders};
        },
        {
            urls: ["*://*/*"]
        },
        ["blocking", "requestHeaders"]);
    }());

    /**
    * Public Methods
    */
    return {
    };
})();
