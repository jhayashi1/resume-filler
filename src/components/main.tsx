import { useState } from 'react';
import { useAsyncEffect } from '../helpers/use-async-effect';
import { FIELDS } from '../constants';
import { findTabContent } from '../helpers/get-tab-content';
import { injectScriptToCurrentTab } from '../helpers/inject-script';

export const Main = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [fields, setFields] = useState({});

    useAsyncEffect(async () => {
        const content = await injectScriptToCurrentTab(findTabContent, [FIELDS]);
        setFields(content!);
        setIsLoading(false);
    }, [injectScriptToCurrentTab, findTabContent, setIsLoading, setFields]);

    // const yuh = retrievedFields();

    if (isLoading) {
        return (
            <div>Loading</div>
        );
    }

    return (
        <div>
            <div>{JSON.stringify(fields)}</div>
            {/* <div>yuh</div> */}
        </div>
    );
};