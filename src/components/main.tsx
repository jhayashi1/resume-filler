import { useEffect, useState } from 'react';
import { useAsyncEffect } from '../helpers/use-async-effect';
import { FIELDS } from '../constants';

export const Main = () => {
    const [tabContent, setTabContent] = useState(undefined as unknown as Document);

    useAsyncEffect(async () => {
        const content = await getTabContent();
        setTabContent(content!);
    }, []);

    const retrievedFields = () => {
        const result = {};
        Object.entries(FIELDS).forEach(([key, value]) => {
            // if (Array.isArray(value)) {
            //     value.forEach()
            // }
            const tabValue = tabContent.querySelector(`[aria-label="${value}"]`);
            result[key] = tabValue;
        });

        return result;
    };

    return (
        <div>{retrievedFields}</div>
        // <div>yuh</div>
    );
};

const getTabContent = async () => {
    const queryOptions = { active: true, lastFocusedWindow: true, };
    const [tab] = await chrome.tabs.query(queryOptions);
    const id = tab.id;
    const [{result,}] = await chrome.scripting.executeScript({
        target: {tabId: id!,},
        func: () => document,
    });

    return result;
};