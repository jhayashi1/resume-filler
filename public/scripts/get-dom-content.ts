const getDomContent = () => {
    return document.documentElement.outerHTML;
};

chrome.runtime.onMessage.addListener((request, _, sendResponse) => {
    if (request.action === 'getDOM') {
        const domContent = getDomContent();
        sendResponse({ domContent });
    }
});