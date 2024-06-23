import { FIELDS } from '../constants';

export const findTabContent = (fields: typeof FIELDS) => {
    const elements = Object.entries(fields).map(([key, label]) => {
        if (document.querySelector(`[aria-label="${label}"`)) {
            return {[key]: label};
        }
    });
    return elements;
};

