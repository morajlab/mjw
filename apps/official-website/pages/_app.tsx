import React, { Fragment } from 'react';
import { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'shards-ui/dist/css/shards.min.css';
import './styles.module.scss';

interface IAppProps extends AppProps {}

const App = ({ Component, pageProps }: IAppProps) => (
  <Fragment>
    <Component {...pageProps} />
  </Fragment>
);

export default App;
