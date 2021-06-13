import React, { Fragment } from 'react';
import { AppProps } from 'next/app';
import { Head } from '../components/.';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'shards-ui/dist/css/shards.min.css';
import './styles.module.scss';

const CustomApp = ({ Component, pageProps }: AppProps) => (
  <Fragment>
    <Head />
    <Component {...pageProps} />
  </Fragment>
);

export default CustomApp;
