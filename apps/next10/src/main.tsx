import React from 'react';
import ReactDOM from 'react-dom';
import { Theme as UWPThemeProvider, getTheme } from 'react-uwp';
import { App } from './app/app';

ReactDOM.render(
  <React.StrictMode>
    <UWPThemeProvider
      theme={getTheme({
        themeName: 'dark',
        accent: '#0078D7',
        useFluentDesign: true,
        desktopBackgroundImage:
          'https://www.react-uwp.com/622f2e26-46d6-4e57-bfb0-735161cdcf84',
      })}
    >
      <App />
    </UWPThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
