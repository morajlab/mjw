import React, { CSSProperties } from 'react';
import { AppProps } from 'next/app';
import { Theme as UWPThemeProvider, getTheme } from '@react-uwp/Theme';
import './styles.css';

React.useLayoutEffect = React.useEffect;

const theme = getTheme({
  themeName: 'dark',
  accent: '#0078D7',
  useFluentDesign: true,
  desktopBackgroundImage: 'bg-1.jpg',
});

const themeContainerStyles: CSSProperties = {
  position: 'fixed',
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
};

const App = ({ Component, pageProps }: AppProps) => (
  <UWPThemeProvider theme={theme} style={themeContainerStyles}>
    <Component {...pageProps} />
  </UWPThemeProvider>
);

export default App;
