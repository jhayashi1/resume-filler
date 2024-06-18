// Function to get the DOM content
const getDOMContent = (): string => {
    return document.documentElement.outerHTML;
};
  
// Listen for messages from the background script
chrome.runtime.onMessage.addListener((request, _, sendResponse) => {
    if (request.action === 'getDOM') {
        const domContent = getDOMContent();
        sendResponse({ domContent, });
    }
});