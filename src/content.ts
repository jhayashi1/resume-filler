// Function to get the DOM content
const getDomContent = (): string => {
    return document.documentElement.outerHTML;
};

// Listen for messages from the background script
chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
    if (request.action === 'getDOM') {
        let queryOptions = { active: true, lastFocusedWindow: true };
        // `tab` will either be a `tabs.Tab` instance or `undefined`.
        let [tab] = await chrome.tabs.query(queryOptions);
        sendResponse({ tab });
    }
});