import { Fragment, useEffect } from 'react';
import { JssProvider, createGenerateId } from 'react-jss';
import { AppProps } from 'next/app';
import { MantineProvider, NormalizeCSS, GlobalStyles } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import Head from 'next/head';

export const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const jssStyles = document.getElementById('mantine-ssr-styles');

    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <Fragment>
      <JssProvider generateId={createGenerateId()}>
        <Head>
          <title>Mantine next example</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
          <link rel="icon" href="favicon.svg" />
        </Head>

        <MantineProvider
          theme={{
            colorScheme: 'dark',
          }}
        >
          <NormalizeCSS />
          <GlobalStyles />
          <NotificationsProvider>
            <Component {...pageProps} />
          </NotificationsProvider>
        </MantineProvider>
      </JssProvider>
    </Fragment>
  );
};

export default App;
