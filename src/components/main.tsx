import { useEffect, useState } from 'react';
import { useAsyncEffect } from '../helpers/use-async-effect';

export const Main = () => {
    const [tabContent, setTabContent] = useState('');

    useAsyncEffect(async () => {
        const content = await getTabContent()
        setTabContent(content!);
    }, []);

    return (
        <div>{tabContent}</div>
    );
};

const getTabContent = async () => {
    const queryOptions = { active: true, lastFocusedWindow: true };
    const [tab] = await chrome.tabs.query(queryOptions);
    const id = tab.id
    const [{result}] = await chrome.scripting.executeScript({
        target: {tabId: id!},
        func: () => document.documentElement.innerText,
    });

    return result
}