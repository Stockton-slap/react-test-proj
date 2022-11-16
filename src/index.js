import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import './index.css';
import { ThemeProvider } from '@emotion/react';

const theme = {
  colors: {},
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />{' '}
    </ThemeProvider>
  </React.StrictMode>
);
