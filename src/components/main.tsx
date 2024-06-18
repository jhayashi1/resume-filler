import { useEffect, useState } from 'react';

export const Main = () => {
    const [tabContent, setTabContent] = useState('');

    useEffect(() => {
        async function getTabContent() {
            const content = await chrome.runtime.sendMessage({ action: 'getDOM', });
            console.log('tab');
            setTabContent(content);
        }
        getTabContent();
    }, []);

    return (
        <div>{tabContent}</div>
    );
};
