import { useState } from 'react';
import { useAsyncEffect } from '../helpers/use-async-effect';
import { FIELDS } from '../constants';
import { findTabContent } from '../helpers/get-tab-content';
import { injectScriptToCurrentTab } from '../helpers/inject-script';
import { List, ListItemButton, ListItemText } from '@mui/material';
import { DiscoveredFields } from './discovered-fields';

export const Main = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [fields, setFields] = useState({});

    useAsyncEffect(async () => {
        const content = await injectScriptToCurrentTab(findTabContent, [FIELDS]);
        setFields(content!.filter((v) => v !== null));
        setIsLoading(false);
    }, [setIsLoading, setFields]);

    if (isLoading) {
        return (
            <div>Loading</div>
        );
    }

    return (
        <List>
            <DiscoveredFields fields={fields} />
        </List>
    );
};