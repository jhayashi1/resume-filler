export const getTabContent = async () => {
    const queryOptions = { active: true, lastFocusedWindow: true };
    const [tab] = await chrome.tabs.query(queryOptions);
    const id = tab?.id;
    const [{result}] = await chrome.scripting.executeScript({
        target: {tabId: id!},
        func: () => document.documentElement,
    });

    return result;
};