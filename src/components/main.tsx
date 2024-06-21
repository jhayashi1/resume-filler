import { useEffect, useState } from 'react';
import { useAsyncEffect } from '../helpers/use-async-effect';
import { FIELDS } from '../constants';
import { getTabContent } from '../helpers/get-tab-content';

export const Main = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [fields, setFields] = useState({});

    useAsyncEffect(async () => {
        const content = await getTabContent();
        setFields(retrievedFields(content!)!);
        setIsLoading(false);
    }, [getTabContent, setIsLoading, setFields]);

    const retrievedFields = (document: Document) => {
        const result = {a: 2};
        Object.entries(FIELDS).map(([key, value]) => {
            // if (Array.isArray(value)) {
            //     value.forEach()
            // }
            const tabValue = document.querySelector(`[aria-label="${value}"]`);
            result[key] = tabValue;
        });

        return 'result';
    };

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