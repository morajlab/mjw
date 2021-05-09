import React from 'react';
import { AppProps } from 'next/app';
import { Theme as UWPThemeProvider, getTheme } from 'react-uwp/Theme';
import './styles.css';

const theme = getTheme({
  themeName: 'dark',
  accent: '#0078D7',
  useFluentDesign: true,
  desktopBackgroundImage: 'https://picsum.photos/700/700',
});

const App = ({ Component, pageProps }: AppProps) => (
  <UWPThemeProvider theme={theme}>
    <Component {...pageProps} />
  </UWPThemeProvider>
);

export default App;
