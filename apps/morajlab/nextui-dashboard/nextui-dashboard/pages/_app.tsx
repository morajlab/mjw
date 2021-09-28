import { Fragment } from 'react';
import { AppProps } from 'next/app';
import { CssBaseline } from '@nextui-org/react';
import './styles.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Fragment>
      <CssBaseline />
      <Component {...pageProps} />
    </Fragment>
  );
};

export default App;
