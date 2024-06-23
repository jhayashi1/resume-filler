import React from 'react';
import ReactDOM from 'react-dom/client';
import { Main } from './components/main';
import { ThemeProvider } from '@emotion/react';
import { useTheme } from '@mui/material/styles';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={useTheme}>
            <Main />
        </ThemeProvider>
    </React.StrictMode>
);