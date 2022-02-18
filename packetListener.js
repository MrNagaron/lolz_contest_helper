
chrome.runtime.onMessageExternal.addListener(
  function(request, sender, sendResponse) {
		console.log(request)
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			console.log(tabs)
            chrome.tabs.sendMessage(tabs[0].id, {request:request.req, response:request.res});
        });
	});
